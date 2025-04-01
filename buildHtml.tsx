import { readFileSync, writeFileSync } from "fs";
import { transform } from "lightningcss";
import { h } from "preact";
import renderToString from "preact-render-to-string";
import { getCountryFlag } from "./countries.ts";
import processed from "./processed.json";
import type { CarrierPlist } from "./types/carrier.plist";
import { getsite } from "./carriers.ts";

// for some reason this is required otherwise bun on CI will throw 'Can't find variable: Fragment'
import * as preact from "preact";
const { Fragment } = preact;

let carriers = processed as Record<string, { source: string, version: string, names: string[], country?: string, countryCode: string, data: CarrierPlist }>;

let rcsStatus = (data: typeof carriers[string]) => data.data.RCS ? (data.source.includes("DeveloperOS") ? 1 : 2) : 0;

function fix(country: string) {if (country == "🇦🇽 Finland") {return "🇦🇽 Finland (Åland)";} else {return country;}};

const CarrierSupportTable = () => { 
    let sorted = Object.entries(carriers).filter(([_, {version}]) => {
        let [major] = version.split('.').map(Number);
        return major > 49;
    }).sort(([aId, aData], [bId, bData]) => {
        let aCountry = aData.country ?? aData.countryCode ?? "ZZ";
        let bCountry = bData.country ?? bData.countryCode ?? "ZZ";
        let countryCompare = aCountry.localeCompare(bCountry);
        if (countryCompare !== 0) return countryCompare;
        
        const aRCS = rcsStatus(aData);
        const bRCS = rcsStatus(bData);
        if (aRCS !== bRCS) return bRCS - aRCS;

        let aName = aData.names[0] || aId;
        let bName = bData.names[0] || bId;
        return aName.localeCompare(bName);
    });
    let grouped = Object.groupBy(sorted, ([id, data]) => (getCountryFlag(data.countryCode || "") || "🌐") + " " + (data.country || "Worldwide"));
    let entries = Object.entries(grouped);
    entries.sort(([aCountry,aCarriers],[bCountry,bCarriers]) => 
        (bCarriers?.filter(([id, data]) => data.data.RCS).length ?? 0) -
        (aCarriers?.filter(([id, data]) => data.data.RCS).length ?? 0) 
    );

    return <div class='countries'>{entries.map(([country, carriers]) => (country !== "🌐-Worldwide" && <>
        <h2>{fix(country)}</h2>
        <div class='carriers'>
            {carriers?.map(([id, data]) => {
                let url = getsite(id) || data.data.CarrierBookmarks?.at(-1)?.URL || data.data.MyAccountURL || data.data.TetheringURL;
                return <div class='carrier' data-supports={rcsStatus(data)}>
                    <div class='header'>
                        
                        <h3>
                            {url && <img width={23} height={23} src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(url)}&sz=32`} alt={data.names[0]}/>}
                            <a target={'_blank'} rel={'noopener noreferrer'} href={getsite(id)} style={'color:var(--grey-900); text-decoration:none;'}>{data.names[0]}</a>
                        </h3>
                        <span class='emoji'>{['❌','⏳' ,'✅'][rcsStatus(data)]}</span>
                    </div>
                    {data.names.length > 1 && <p class='aka'>aka. {data.names.slice(1).join(", ")}</p>}
                    {data.data.RCS && (
                        data.source.includes("DeveloperOS") ? "in beta" :
                        data.source.startsWith("https") ? <a target="_blank" href="https://support.apple.com/en-us/109324">delivered OTA</a> : "")}
                    <div class='grow'></div>
                    <p class='id'>{id} {data.version}</p>
                </div>
            })}
        </div>
    </>))}</div>

}
let html = renderToString(<>
    <head>
        <title>Does My Carrier Support RCS on iOS Yet?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A list of carriers that support RCS on iOS" />
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
                <h1>Does My Carrier Support RCS on iOS Yet?</h1>
                <p>
                    <a href="https://support.apple.com/en-us/109526" target="_blank">Apple provided</a> a list of what features each carrier supports... but only on their US/CA site.
                    <> </>&bull; <> </>
                    <a href='https://github.com/cupboardunderscore/ios-rcs'>GitHub</a>
                </p>
                <p><> </>&bull; <> </></p>
                <p>
                    <a href="https://ios-rcs.foxwitch.tech/5gsa">Does My Carrier Support 5G Standalone on iOS Yet?</a>
                </p>
                <h2>Updated with iOS 18.4 carrier bundles!</h2>
            </header>
            <CarrierSupportTable />
        </div>
    </body>
</>);
writeFileSync("./html/index.html", html);
