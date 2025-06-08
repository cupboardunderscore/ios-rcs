import { readFileSync, writeFileSync } from "fs";
import { transform } from "lightningcss";
import { h } from "preact";
import renderToString from "preact-render-to-string";
import { getCountryFlag } from "./countries.ts";
import csvParser from "csv-parser";
import fs from "fs";

import procrcs from "./processed.json";
import procrbm from "./processed-rbm.json";
import proc5gsa from "./processed-5gsa.json";
import procsat from "./processed-sat.json";
import procvvmail from "./processed-vvmail.json";
import procvonr from "./processed-vonr.json";
import procwatch from "./processed-watch.json";
import procwatchsa from "./processed-watchsa.json";

//ig compiler ignores the stuff above if i don't "use" it
let temp;
temp = procrcs; temp = procrbm; temp = proc5gsa; temp = procsat; temp = procvvmail; temp = procvonr; temp = procwatch; temp = procwatchsa;
temp = null;

import type { CarrierPlist } from "./types/carrier.plist";
import manualversion from "./version.txt";

// for some reason this is required otherwise bun on CI will throw 'Can't find variable: Fragment'
import * as preact from "preact";
const { Fragment } = preact;

import { dlopen, FFIType, suffix } from "bun:ffi";
const path = "libwatchos." + suffix;
const lib = dlopen(path,
  {
    watch:
    {
      args: ["cstring", "int"],
      returns: FFIType.bool,
    },
    watchsa:
    {
      args: ["cstring", "int"],
      returns: FFIType.bool,
    },
  },
);
const path2 = "libcarrierdedupe." + suffix;
const lib2 = dlopen(path2,
  {
    carrde:
    {
      args: ["cstring", "int"],
      returns: FFIType.bool,
    },
  },
);

type RowData = {
  id: string;
  link: string;
};
let data: RowData[] = [];
const cc = async (filePath: string) =>
{
    const data: RowData[] = [];
    return new Promise(function(resolve)
    {
        fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (row: RowData) => {data.push(row);})
        .on('end', () => {resolve(data)});
    });
}
data = await cc("carriers.csv");

function getsite(id: string)
{
    let url: string = data.find((string) => string.id === id)?.link;
    if (!url)
    {
        if (lib2.symbols.carrde(Buffer.from(id, 'utf8'), id.length) != true)
        {
            console.warn(id + " - not categorized");
        }
    }
    return url;
}

export function build(type: number, carr: string, dir: string, tag: string, tittle: string)
{
    let carriers = eval(carr) as Record<string, { source: string, version: string, names: string[], country?: string, countryCode: string, data: CarrierPlist, blob: CarrierPlist }>;

    function watchbool(id: string)
    {
        if (type == 6)
        {
            return lib.symbols.watch(Buffer.from(id, 'utf8'), id.length);
        }
        else if (type == 7)
        {
            return lib.symbols.watchsa(Buffer.from(id, 'utf8'), id.length);
        }
        else
        {
            return false;
        }
    }
    function vmbool(data: typeof carriers[string])
    {
        if (type == 4)
        {
            return (data.data.VisualVoicemailServiceName != "none");
        }
        else
        {
            return true;
        }
    }
    let rcsStatus = (data: typeof carriers[string], id: string) => (watchbool(id) || (eval(tag) && vmbool(data))) ? (data.source.includes("DeveloperOS") ? 1 : 2) : 0;

    let count: number = 0;

    const CarrierSupportTable = () => { 
        let sorted = Object.entries(carriers).filter(([_, {version}]) => {
            let [major] = version.split('.').map(Number);
            return major > 49;
        }).sort(([aId, aData], [bId, bData]) => {
            let aCountry = aData.country ?? aData.countryCode ?? "ZZ";
            let bCountry = bData.country ?? bData.countryCode ?? "ZZ";
            let countryCompare = aCountry.localeCompare(bCountry);
            if (countryCompare !== 0) return countryCompare;
            
            const aRCS = rcsStatus(aData, aId);
            const bRCS = rcsStatus(bData, bId);
            if (aRCS !== bRCS) return bRCS - aRCS;

            let aName = aData.names[0] || aId;
            let bName = bData.names[0] || bId;
            return aName.localeCompare(bName);
        });
        let grouped = Object.groupBy(sorted, ([id, data]) => (getCountryFlag(data.countryCode || "") || "🌐") + " " + (data.country || "Worldwide"));
        let entries = Object.entries(grouped);
        entries.sort(([aCountry,aCarriers],[bCountry,bCarriers]) => 
            (bCarriers?.filter(([id, data]) => (watchbool(id) || (eval(tag) && vmbool(data)))).length ?? 0) -
            (aCarriers?.filter(([id, data]) => (watchbool(id) || (eval(tag) && vmbool(data)))).length ?? 0) 
        );

        return <div class='countries'>{entries.map(([country, carriers]) => (country !== "🌐 -Worldwide" && <>
            <h2>{country}</h2>
            <div class='carriers'>
                {carriers?.map(([id, data]) => {
                    let site = getsite(id);
                    let url = site || data.data.CarrierBookmarks?.at(-1)?.URL || data.data.MyAccountURL || data.data.TetheringURL;
                    if (rcsStatus(data, id)) count++;
                    return <div class='carrier' data-supports={rcsStatus(data, id)}>
                        <div class='header'>
                            
                            <h3>
                                {url && <img width={23} height={23} src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(url)}&sz=32`} alt={data.names[0]}/>}
                                <a target={'_blank'} rel={'noopener noreferrer'} href={site} style={'color:var(--grey-900); text-decoration:none;'}>{data.names[0]}</a>
                            </h3>
                            <span class='emoji'>{['❌','⏳' ,'✅'][rcsStatus(data, id)]}</span>
                        </div>
                        {data.names.length > 1 && <p class='aka'>aka. {data.names.slice(1).join(", ")}</p>}
                        {(watchbool(id) || (eval(tag) && vmbool(data))) && (
                            data.source.includes("DeveloperOS") ? "in beta" :
                            data.source.startsWith("https") ? <a target="_blank" href="https://support.apple.com/en-us/109324">delivered OTA</a> : "")}
                        <div class='grow'></div>
                        <p class='id'>{id} {data.version}</p>
                    </div>
                })}
            </div>
        </>))}</div>

    }
    let home: string = "./"
    if (type != 0)
    {
        home = "../"
    }
    let supporturl: string = "https://support.apple.com/en-us/109526";
    let featuretext: string = "what features each carrier supports";
    if (type == 6 || type == 7)
    {
        supporturl = "https://www.apple.com/watch/cellular/";
        featuretext = "Apple Watch carrier support";
    }
    let linkname: Array<string> = [];
    let linkdir: Array<string> = [];
    if (type != 0)
    {
        linkname.push("RCS");
        linkdir.push("");
    }
    if (type != 1)
    {
        linkname.push("RCS Business Messaging");
        linkdir.push("rbm/");
    }
    if (type != 2)
    {
        linkname.push("5G Standalone");
        linkdir.push("5gsa/");
    }
    if (type != 3)
    {
        linkname.push("Satellite Features");
        linkdir.push("sat/");
    }
    if (type != 4)
    {
        linkname.push("Visual Voicemail");
        linkdir.push("vvmail/");
    }
    if (type != 5)
    {
        linkname.push("Voice over NR");
        linkdir.push("vonr/");
    }
    if (type != 6)
    {
        linkname.push("Apple Watch");
        linkdir.push("watch/");
    }
    if (type != 7)
    {
        linkname.push("Apple Watch Standalone");
        linkdir.push("watchsa/");
    }
    let html = renderToString(<>
        <head>
            <title>Does my carrier support {tittle} yet?</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={"A list of carriers that support" + tittle} />
            <style dangerouslySetInnerHTML={{__html: transform({
                    filename: "index.css",
                    code: readFileSync("./html/index.css"), 
                    minify: true,
                    sourceMap: false,
                    targets: {
                        chrome: (120 << 16),
                        firefox: (120 << 16),
                        safari: (14 << 16),
                    }
                }).code.toString() }} />
        </head>
        <body>
            <div class='container'>
                <header>
                    <h1>Does my carrier support {tittle} yet?</h1>
                    <p>
                        <a href={supporturl} target="_blank">Apple provided</a> list of {featuretext}
                        <> </>&bull; <> </>
                        <a href='https://github.com/cupboardunderscore/ios-rcs'>GitHub</a>
                    </p>
                    <p><> </>&bull; <> </></p>
                    <p>Does my carrier have</p>
                    <p>
                        <a href={home + linkdir[0]}>{linkname[0]}</a>
                        <> </>&bull; <> </>
                        <a href={home + linkdir[1]}>{linkname[1]}</a>
                        <> </>&bull; <> </>
                        <a href={home + linkdir[2]}>{linkname[2]}</a>
                        <> </>&bull; <> </>
                        <a href={home + linkdir[3]}>{linkname[3]}</a>
                        <> </>&bull; <> </>
                        <a href={home + linkdir[4]}>{linkname[4]}</a>
                        <> </>&bull; <> </>
                        <a href={home + linkdir[5]}>{linkname[5]}</a>
                        <> </>&bull; <> </>
                        <a href={home + linkdir[6]}>{linkname[6]}</a>
                    </p>
                    <p>support yet?</p>
                    <h2>Updated with iOS {manualversion} carrier bundles!</h2>
                    <h3><a target="_blank" href="https://support.apple.com/en-us/109324">OTA</a> bundles updated on: {new Date().toDateString()}</h3>
                </header>
                <CarrierSupportTable />
            </div>
        </body>
    </>);
    writeFileSync(dir + "index.html", html);
    console.log(' '.repeat(3 - count.toString().length) + count + " - " + carr.slice(4));
}
