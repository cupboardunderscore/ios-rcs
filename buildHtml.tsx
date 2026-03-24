import { readFileSync, writeFileSync } from "fs";
import { transform } from "lightningcss";
import { h } from "preact";
import renderToString from "preact-render-to-string";
import { getCountryFlag } from "./countries.ts";
import csvParser from "csv-parser";
import fs from "fs";

import procrcs from "./processed.json";
import procrbm from "./processed-rbm.json";
import proce2ee from "./processed-e2ee.json";
import proc5gsa from "./processed-5gsa.json";
import procsat from "./processed-sat.json";
import procvvmail from "./processed-vvmail.json";
import procvonr from "./processed-vonr.json";
/*import procwatch from "./processed-watch.json";
import procwatchsa from "./processed-watchsa.json";*/
import procesimtr from "./processed-esimtr.json";
import proccresimtr from "./processed-cresimtr.json";
import procusage from "./processed-usage.json";
import procprivacy from "./processed-privacy.json";

//ig compiler ignores the stuff above if i don't "use" it
let temp;
temp = procrcs; temp = procrbm; temp = proce2ee; temp = proc5gsa; temp = procsat; temp = procvvmail; temp = procvonr;/* temp = procwatch; temp = procwatchsa;*/ temp = procesimtr; temp = proccresimtr; temp = procusage; temp = procprivacy;
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
        .pipe(csvParser({separator: ';'}))
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

export function build(type: number, carr: string, dir: string, tag: string, ptag: string, tittle: string)
{
    let sbar: Array<Array<String>> = [];
    function addelemet(id: string, name: string, cc: number, ccc: number)
    {
        sbar.push([id, name, String(cc), String(ccc)]);
        return;
    }
    function readelement()
    {
        let b: boolean = false;
        let temp: string = "<div class=\"sidebar\">";
        for (let i of sbar)
        {
            if (Number(i[2]) == 0 && !b)
            {
                temp += "<hr>";
                b = true;
            }
            temp += "<a href=\"#" + i[0] + "\">" + i[1] + " (" + i[2] + "/" + i[3] + ")" + "</a>";
        }
        temp += "</div>";
        return temp;
    }
    function resetnumber()
    {
        ccount = 0;
        cccount = 0;
    }

    let carriers = eval(carr) as Record<string, { source: string, version: string, names: string[], country?: string, countryCode: string, data: CarrierPlist, blob: CarrierPlist }>;

    let rcsStatus = (data: typeof carriers[string], id: string) => eval(tag) ? ((data.source.includes("DeveloperOS") || type == 2) ? /*((+data.version.slice(0, 4) >= 64.5) ? 1 : 2)*/ 2 : data.source.startsWith("https") ? 3 : 4) : 0;

    let count: number = 0;
    let ccount: number = 0;
    let cccount: number = 0;

    const CarrierSupportTable = () => { 
        let sorted = Object.entries(carriers).filter(([_, {data, blob}]) => {
            return eval(ptag);
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
            (bCarriers?.filter(([id, data]) => eval(tag)).length ?? 0) -
            (aCarriers?.filter(([id, data]) => eval(tag)).length ?? 0) 
        );

        return <div class='countries'>{entries.map(([country, carriers]) => (country != "🌐 -Worldwide" && <>
            <h2 id={carriers[0][1].countryCode}>{country}</h2>{resetnumber()}
            <div class='carriers'>
                {carriers?.map(([id, data]) => {
                    let site = getsite(id);
                    let url = site || data.data.CarrierBookmarks?.at(-1)?.URL || data.data.MyAccountURL || data.data.TetheringURL;
                    if (rcsStatus(data, id))
                    {
                        count++;
                        ccount++;
                    }
                    cccount++;
                    return <div class='carrier' data-supports={rcsStatus(data, id)}>
                        <div class='header'>
                            
                            <h3>
                                {url && <img width={23} height={23} src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(url)}&sz=32`} alt={data.names[0]}/>}
                                <a target={'_blank'} rel={'noopener noreferrer'} href={site} style={'color:var(--grey-900); text-decoration:none;'}>{data.names[0]}</a>
                            </h3>
                            <span class='emoji'>{['❌','⏳','⏳','✅','✅'][rcsStatus(data, id)]}</span>
                        </div>
                        {data.names.length > 1 && <p class='aka'>aka. {data.names.slice(1).join(", ")}</p>}
                        {eval(tag) && (
                            (data.source.includes("DeveloperOS") || type == 2) ? /*((+data.version.slice(0, 4) >= 64.5) ? "in beta (iOS 26)" : "in beta")*/ "in beta" :
                            data.source.startsWith("https") ? <a target="_blank" href="https://support.apple.com/en-us/109324">delivered OTA</a> : "")}
                        <div class='grow'></div>
                        <p class='id'>{id} {data.version}</p>
                    </div>
                })}
            </div>{addelemet(carriers[0][1].countryCode, country, ccount, cccount)}
        </>))}</div>

    }
    let home: string = "./"
    if (type != 0)
    {
        home = "../"
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
        linkname.push("RCS E2EE");
        linkdir.push("e2ee/");
    }
    if (type != 3)
    {
        linkname.push("5G Standalone");
        linkdir.push("5gsa/");
    }
    if (type != 4)
    {
        linkname.push("Satellite features");
        linkdir.push("sat/");
    }
    if (type != 5)
    {
        linkname.push("Visual Voicemail");
        linkdir.push("vvmail/");
    }
    if (type != 6)
    {
        linkname.push("Voice over NR");
        linkdir.push("vonr/");
    }
    /*if (type != 7)
    {
        linkname.push("Apple Watch");
        linkdir.push("watch/");
    }
    if (type != 8)
    {
        linkname.push("Apple Watch Standalone");
        linkdir.push("watchsa/");
    }*/
    if (type != 9)
    {
        linkname.push("(e)SIM transfer");
        linkdir.push("esimtr/");
    }
    if (type != 10)
    {
        linkname.push("Cross-platform (e)SIM transfer");
        linkdir.push("cresimtr/");
    }
    if (type != 11)
    {
        linkname.push("Cellular plan info");
        linkdir.push("usage/");
    }
    if (type != 12)
    {
        linkname.push("Limit precise location");
        linkdir.push("privacy/");
    }
    let html = renderToString(<>
        <head>
            <title>Does my carrier support {tittle} yet?</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={"A list of carriers that support " + tittle} />
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
            <div class="topnav">
                <a class="tle">Does my carrier have</a>
                <a class={(type == 0)? "active" : ""} href={home}>RCS</a>
                <a class="tle">&bull; </a>
                <a class={(type == 1)? "active" : ""} href={home + "rbm/"}>RBM</a>
                <a class="tle">&bull; </a>
                <a class={(type == 2)? "active" : ""} href={home + "e2ee/"}>RCS E2EE</a>
                <a class="tle">&bull; </a>
                <a class={(type == 3)? "active" : ""} href={home + "5gsa/"}>5G SA</a>
                <a class="tle">&bull; </a>
                <a class={(type == 4)? "active" : ""} href={home + "sat/"}>Satellite features</a>
                <a class="tle">&bull; </a>
                <a class={(type == 5)? "active" : ""} href={home + "vvmail/"}>Visual Voicemail</a>
                <a class="tle">&bull; </a>
                <a class={(type == 6)? "active" : ""} href={home + "vonr/"}>VoNR</a>
                <a class="tle">&bull; </a>
                <a class={(type == 9)? "active" : ""} href={home + "esimtr/"}>(e)SIM transfer</a>
                <a class="tle">&bull; </a>
                <a class={(type == 10)? "active" : ""} href={home + "cresimtr/"}>Cross-platform (e)SIM transfer</a>
                <a class="tle">&bull; </a>
                <a class={(type == 11)? "active" : ""} href={home + "usage/"}>Cellular plan info</a>
                <a class="tle">&bull; </a>
                <a class={(type == 12)? "active" : ""} href={home + "privacy/"}>Limit precise location</a>
                <a class="tle">support yet?</a>
            </div>
            <div class='container'>
                <header>
                    <h1>Does my carrier support {tittle} yet?</h1>
                    <p>
                        <a href={(type == 7 || type == 8) ? "https://www.apple.com/watch/cellular/" : (type == 9)? "https://support.apple.com/en-us/101569" : (type == 10)? "https://support.apple.com/en-us/123878" : (type == 12)? "https://support.apple.com/en-us/126101" :"https://support.apple.com/en-us/109526"} target="_blank">Apple provided</a> {(type == 6 || type == 7) ? "list of Apple Watch carrier support" : (type == 9  || type == 10|| type == 12)? "support page" : "list of what features each carrier supports"}
                        <> </>&bull; <> </>
                        <a href='https://github.com/cupboardunderscore/ios-rcs'>GitHub</a>
                    </p>
                    <p><> </>&bull; <> </></p>
                    <div class="regnav">
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
                            <> </>&bull; <> </>
                            <a href={home + linkdir[7]}>{linkname[7]}</a>
                            <> </>&bull; <> </>
                            <a href={home + linkdir[8]}>{linkname[8]}</a>
                            <> </>&bull; <> </>
                            <a href={home + linkdir[9]}>{linkname[9]}</a>
                        </p>
                        <p>support yet?</p>
                    </div>
                    <h2>Updated with iOS {manualversion} carrier bundles!</h2>
                    <h3><a target="_blank" href="https://support.apple.com/en-us/109324">OTA</a> bundles updated on: {new Date().toDateString()}</h3>
                </header>
                <CarrierSupportTable />
            </div>
        </body>
    </>);
    html += readelement();
    writeFileSync(dir + "index.html", html);
    fs.promises.appendFile("./html/debug.csv", carr.slice(4) + "," + count + "\n");
    //console.log(' '.repeat(3 - count.toString().length) + count + " - " + carr.slice(4));
}
