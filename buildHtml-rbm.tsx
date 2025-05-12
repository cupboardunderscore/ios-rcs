import { readFileSync, writeFileSync } from "fs";
import { transform } from "lightningcss";
import { h } from "preact";
import renderToString from "preact-render-to-string";
import { getCountryFlag } from "./countries.ts";
import processedsa from "./processed-rbm.json";
import type { CarrierPlist } from "./types/carrier.plist";
import { getsite } from "./carriers.ts";
import manualversion from "./version.txt";

// for some reason this is required otherwise bun on CI will throw 'Can't find variable: Fragment'
import * as preact from "preact";
const { Fragment } = preact;

let carriers = processedsa as Record<string, { source: string, version: string, names: string[], country?: string, countryCode: string, data: CarrierPlist}>;

let rcsStatus = (data: typeof carriers[string]) => (data.data.RCS?.EnableBusinessMessagingByDefault || data.data.RCS?.ShowBusinessMessagingSwitch) ? (data.source.includes("DeveloperOS") ? 1 : 2) : 0;

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
    let grouped = Object.groupBy(sorted, ([id, data]) => (getCountryFlag(data.countryCode || "") || "🌐") + " " + (data.country || "-Worldwide"));
    let entries = Object.entries(grouped);
    entries.sort(([aCountry,aCarriers],[bCountry,bCarriers]) => 
        (bCarriers?.filter(([id, data]) => (data.data.RCS?.EnableBusinessMessagingByDefault || data.data.RCS?.ShowBusinessMessagingSwitch)).length ?? 0) -
        (aCarriers?.filter(([id, data]) => (data.data.RCS?.EnableBusinessMessagingByDefault || data.data.RCS?.ShowBusinessMessagingSwitch)).length ?? 0) 
    );

    return <div class='countries'>{entries.map(([country, carriers]) => (country !== "🌐 -Worldwide" && <>
        <h2>{fix(country)}</h2>
        <div class='carriers'>
            {carriers?.map(([id, data]) => {
                let site = getsite(id);
                let url = site || data.data.CarrierBookmarks?.at(-1)?.URL || data.data.MyAccountURL || data.data.TetheringURL;
                return <div class='carrier' data-supports={rcsStatus(data)}>
                    <div class='header'>
                        
                        <h3>
                            {url && <img width={23} height={23} src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(url)}&sz=32`} alt={data.names[0]}/>}
                            <a target={'_blank'} rel={'noopener noreferrer'} href={site} style={'color:var(--grey-900); text-decoration:none;'}>{data.names[0]}</a>
                        </h3>
                        <span class='emoji'>{['❌','⏳' ,'✅'][rcsStatus(data)]}</span>
                    </div>
                    {data.names.length > 1 && <p class='aka'>aka. {data.names.slice(1).join(", ")}</p>}
                    {(data.data.RCS?.EnableBusinessMessagingByDefault || data.data.RCS?.ShowBusinessMessagingSwitch) && (
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
        <title>Does my carrier support RCS Business Messaging on iOS yet?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A list of carriers that support 5G Standalone on iOS" />
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
                <h1>Does my carrier support RCS Business Messaging on iOS yet?</h1>
                <p>
                    <a href="https://support.apple.com/en-us/109526" target="_blank">Apple provided</a> a list of what features each carrier supports... but only on their US/CA site.
                    <> </>&bull; <> </>
                    <a href='https://github.com/cupboardunderscore/ios-rcs'>GitHub</a>
                </p>
                <p><> </>&bull; <> </></p>
                <p>Does my carrier support</p>
                <p>
                    <a href="../">RCS</a>
                    <> </>&bull; <> </>
                    <a href="../5gsa/">5G Standalone</a>
                    <> </>&bull; <> </>
                    <a href="../sat/">Satellite Features</a>
                </p>
                <p>on iOS yet?</p>
                <h2>Updated with iOS {manualversion} carrier bundles!</h2>
                <h3><a target="_blank" href="https://support.apple.com/en-us/109324">OTA</a> bundles updated on: {new Date().toDateString()}</h3>
            </header>
            <CarrierSupportTable />
        </div>
    </body>
</>);
writeFileSync("./html/rbm/index.html", html);
