import { readFileSync, writeFileSync } from "fs";
import { transform } from "lightningcss";
import { h } from "preact";
import renderToString from "preact-render-to-string";
import { getCountryFlag } from "./countries.ts";
import processed from "./processed.json";
import type { CarrierPlist } from "./types/carrier.plist";

// for some reason this is required otherwise bun on CI will throw 'Can't find variable: Fragment'
import * as preact from "preact";
const { Fragment } = preact;

let carriers = processed as Record<string, { source: string, version: string, names: string[], country?: string, countryCode: string, data: CarrierPlist }>;

let rcsStatus = (data: typeof carriers[string]) => data.data.RCS ? (data.source.includes("DeveloperOS") ? 1 : 2) : 0;

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
        <h2>{country}</h2>
        <div class='carriers'>
            {carriers?.map(([id, data]) => {
                let carrid:string = id;
                carrid = carrid.replace("O2_Giffgaff_UK", "Giffgaff_UK");
                carrid = carrid.replace("O2_Tesco_UK", "Tesco_UK");
                carrid = carrid.replace("ATT_Dish_MVNO_US", "boostmobile.com");
                carrid = carrid.replace("Dish_MVNO_US", "boostmobile.com");
                carrid = carrid.replace("TMobile_MVNO_US", "TMobile_US");
                carrid = carrid.replace("O2_Sky_uk", "sky.com");
                carrid = carrid.replace("Vodafone_Lowi_es", "Lowi_es");
                carrid = carrid.replace("KDDI_JCOM_LTE_only_jp", "www.jcom.co.jp");
                carrid = carrid.replace("ATT_Puretalk_US", "Puretalk_US");
                carrid = carrid.replace("Videotron_Fizz_ca", "Fizz_ca");
                let carr:string = carrid.replace("_", ".");
                carr = carr.replace(".US", ".com");
                carr = carr.replace(".us", ".com");
                carr = carr.replace(".uk", ".co.uk");
                carr = carr.replace(".UK", ".co.uk");
                carr = carr.replace(".au", ".com.au");
                carr = carr.replace(".AU", ".com.au");
                carr = carr.replace(".Germany", ".de");
                if (carr.includes("_") || !carr.includes("."))
                {
                    carr = null;
                }            
                //let carrname:string = data.names[0];
                //let carr2:string = carrname + "." + data.countryCode;
                //if (carr2.includes(" "))
                //{
                //    carr2 = null;
                //}
                let url = data.data.CarrierBookmarks?.at(-1)?.URL || data.data.MyAccountURL || data.data.TetheringURL || carr;// || carr2;
                return <div class='carrier' data-supports={rcsStatus(data)}>
                    <div class='header'>
                        
                        <h3>
                            {url && <img width={23} height={23} src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(url)}&sz=32`} style={'background-color: transparent;'} />}
                            {data.names[0]}
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
                <h2>Updated with iOS 18.4 beta 2 carrier bundles!</h2>
            </header>
            <CarrierSupportTable />
        </div>
    </body>
</>);
writeFileSync("./html/index.html", html);
