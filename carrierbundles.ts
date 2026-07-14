import bplist from "bplist-parser";
import fs from 'fs';
import Path from 'path';
import plist from "plist";

import JSZip from "jszip";
import { CountryCodes, ReverseCountryCodes } from "./countries.ts";
import type { CarrierBundleInfo } from "./types/Info.plist";
import type CarrierPlist from "./types/carrier.plist.d.ts";
import type { CarrierBundleSimple, iTunesUpdate } from "./types/versions.d.ts";

    


async function getOnlineCarrierBundles() {
    let text = await fetch('https://s.mzstatic.com/version').then(t => t.text())
    let parse = plist.parse(text);
    return parse as any as iTunesUpdate;
}

async function getCarrierBundle(url: string, over: boolean) {
    let req = await fetch(url);
    if (!req.ok) throw new Error(`Failed to fetch ${url}: ${req.statusText}`);
    let data = await req.arrayBuffer();
    let zip = await JSZip.loadAsync(data);
    let file;
    if (!over) file = Object.keys(zip.files).find(a => a.match(/^Payload\/[a-zA-Z0-9_]+\.bundle\/carrier\.plist$/i));
    if (over) file = Object.keys(zip.files).find(a => a.match(/^Payload\/[a-zA-Z0-9_]+\.bundle\/overrides\_V159\.plist$/i));
    if (!file && !over){
        console.warn("Files in " + url + " are: ", Object.keys(zip.files));
        throw new Error(`Carrier.plist not found in ${url}`);
    }
    return zip.file(file!)?.async('nodebuffer');
}

// const version = await getOnlineCarrierBundles();
// debugger;

function dedup(arr: (string | undefined)[]) {
    let n: string[] = [];
    let ex = {};
    for (let a of arr.filter(Boolean)) {
        let key = a!.toLowerCase();
        if (ex[key]) continue;
        ex[key] = true;
        n.push(a!);
    }
    return n;
}

function dottedCompare(a: string, b: string) {
    let a1 = a.split('.').map(Number);
    let b1 = b.split('.').map(Number);
    let len = Math.min(a1.length, b1.length);
    for (let i = 0; i < len; i++) {
        if (a1[i] > b1[i]) return -1;
        if (a1[i] < b1[i]) return 1;
    }
    return a1.length - b1.length;
}

function readBplist<T>(...path: string[]){
    let fullPath = Path.join(...path);
    if (!fs.existsSync(fullPath)) {
        if (!fullPath.includes("overrides"))
        {
            console.warn(`File not found ${path}`);
        }
        return;
    };
    return bplist.parseFileSync<T>(fullPath)[0];
}

function internal(id: string)
{
    switch(id)
    {
        case "Unknown":
            return true;
        case "CarrierLab":
            return true;
        case "Default":
            return true;
        case "OQCFactoryMultimode":
            return true;
        case "OQCFactoryUMTS":
            return true;
        case "NonPublicNetwork":
            return true;
        case "Bootstrap_ATT_US":
            return true;
        case "Bootstrap_Verizon_US":
            return true;
        default:
            return false;
    }
}

let networks: Record<string,any> = {};
let networkrbm: Record<string,any> = {};
let networke2ee: Record<string,any> = {};
let network5gsa: Record<string,any> = {};
let networksat: Record<string,any> = {};
let networkvvmail: Record<string,any> = {};
let networkvonr: Record<string,any> = {};
let networkesimtr: Record<string,any> = {};
let networkcresimtr: Record<string,any> = {};
let networkusage: Record<string,any> = {};
let networkprivacy: Record<string,any> = {};
let countries: Record<string,string> = {};
let countriesE2EE: Record<string,number> = {};
let countriesPRIVACY: Record<string,number> = {};

function setNetwork(source: string, id: string, version: string, data: CarrierPlist.CarrierPlist, blob: CarrierPlist.CarrierPlist, network: string, tag: string) {
    let countryCode = id.split("_").pop()! || '';
    let countryName = data.HomeBundleIdentifier?.split('.').pop()!.replace(/([a-z])([A-Z])/g, '$1 $2');
    if (countryCode.length !== 2) countryCode = ReverseCountryCodes[countryName || ""] || "wi";
    if (countryCode) countryCode = countryCode.toUpperCase();
    if (eval(network)[id] && eval(tag))
    {
        if (dottedCompare(eval(network)[id].version, version) > 0)
        {
            if (source.includes("DeveloperOS"))
            {
                eval(network)[id].version = version + " (" + eval(network)[id].version + ")";
                return;
            }
            eval(network)[id].version = version;
        }
        return;
    }
    eval(network)[id] = {
        source, version,
        names: dedup([
            data.CarrierName,
            data.StatusBarImages?.map(a => a.StatusBarCarrierName || a.CarrierName) || [],
            data.MVNOOverrides?.StatusBarImages?.map(i => i.CarrierName),
            Object.values(data.MVNOOverrides || {}).map((o: any) => [
                o?.OverrideConfiguration?.OverrideOperatorName,
                o?.OverrideConfiguration?.CarrierName,
                o?.OverrideConfiguration?.StatusBarImages?.map((a: any) => a.StatusBarCarrierName || a.CarrierName),
            ]),
            // data.StockSymboli?.map(a => a.name),
        ].flat(9999).map(n => 
            // n?.replace(new RegExp(countryCode + "$",'i'), "")
            n?.replace(new RegExp(countryName + "$",'i'), "")
            .trim()
        )),
        country: CountryCodes[countryCode] || countryName || countryCode, 
        countryCode,
        data,
        blob
    }
}

function doLocal(dir: string) {
    dir = Path.join(__dirname, 'carrier-bundles', dir);
    let dirs = fs.readdirSync(dir);
    for (let d of dirs) {
        let path = Path.join(dir, d);
        let stat = fs.lstatSync(path);
        if (!stat.isDirectory() || stat.isSymbolicLink()) continue;

        let info = readBplist<CarrierBundleInfo>(path, 'Info.plist');
        let data = readBplist<CarrierPlist.CarrierPlist>(path, 'carrier.plist');
        let blob = readBplist<CarrierPlist.CarrierPlist>(path, 'overrides\_V159.plist');
        if (!blob)
        {
            blob = data;
        }
        if (!info || !data) continue;
        if (internal(info.CFBundleName)) continue;
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networks", "eval(network)[id].data.RCS");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networkrbm", "eval(network)[id].data.RCS?.EnableBusinessMessagingByDefault || eval(network)[id].data.RCS?.ShowBusinessMessagingSwitch");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networke2ee", "eval(network)[id].data.RCS?.SupportsE2EE == false");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "network5gsa", "eval(network)[id].blob.Show5GStandaloneSwitch || eval(network)[id].blob.Enable5GStandaloneByDefault || eval(network)[id].data.Show5GStandaloneSwitch || eval(network)[id].data.Enable5GStandaloneByDefault");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networksat", "eval(network)[id].blob.SupportsSatellite || eval(network)[id].blob.ShowSatelliteSwitch");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networkvvmail", "eval(network)[id].data.VisualVoicemailServiceName && eval(network)[id].data.VisualVoicemailServiceName != \"none\"");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networkvonr", "eval(network)[id].blob.SupportsVoNR || eval(network)[id].data.SupportsVoNR");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networkesimtr", "eval(network)[id].data.PhoneAccountTransfer || eval(network)[id].blob.PhoneAccountTransfer || eval(network)[id].data.CarrierEntitlements?.SupportPhysicalSIMtoESIMTransfer || eval(network)[id].data.CarrierEntitlements?.SupportsOnDevicePhysicalSIMConvert || eval(network)[id].blob.CarrierEntitlements?.SupportPhysicalSIMtoESIMTransfer || eval(network)[id].blob.CarrierEntitlements?.SupportsOnDevicePhysicalSIMConvert");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networkcresimtr", "eval(network)[id].data.CarrierEntitlements?.SupportCrossPlatformSIMTransfer || eval(network)[id].blob.CarrierEntitlements?.SupportCrossPlatformSIMTransfer");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networkusage", "eval(network)[id].data.CarrierSpace");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networkprivacy", "eval(network)[id].blob.EnableTARandomizationByDefault || eval(network)[id].blob.ShowTARandomizationSwitch");
    }
    let dir2 = Path.join(dir, "country");
    let dirs2 = fs.readdirSync(dir2);
    for (let d of dirs2) {
        let path = Path.join(dir2, d);
        let stat = fs.lstatSync(path);
        if (!stat.isDirectory() || stat.isSymbolicLink()) continue;

        let info = readBplist<CarrierBundleInfo>(path, 'Info.plist');
        let data = readBplist<CarrierPlist.CarrierPlist>(path, 'carrier.plist');
        let blob = readBplist<CarrierPlist.CarrierPlist>(path, 'overrides\_V159.plist');
        if (!blob)
        {
            blob = data;
        }
        if (!info || !data) continue;
        if (internal(info.CFBundleName)) continue;
        let type = 3;
        if (dir2.includes("DeveloperOS"))
        {
            type = 1;
        }
        for (var i of data.ISOAlpha2CountryCode)
        {
            if (i == "gb")
            {
                i = "uk"
            }
            if (data?.RCS?.SupportsE2EE == false && !countriesE2EE[i])
            {
                countriesE2EE[i] = type;
            }
            if ((data?.ShowTARandomizationSwitch || blob?.ShowTARandomizationSwitch) && !countriesPRIVACY[i])
            {
                countriesPRIVACY[i] = type;
            }
        }
        countries[info.CFBundleName] = info.CFBundleVersion;
    }
}

async function doOnline() {
    let ocb = await getOnlineCarrierBundles();
    let count: Record<string,any> = {};
    for (var [country,tags] of Object.entries(ocb.CountryBundles.iPhone.Bundles))
    {
        count[country.split('_')[0]] = tags;
    }
    for (var [country,tags] of Object.entries(count))
    {
        let lastVersion = countries[country] ?? "58.5.0";
        if (dottedCompare(tags.BundleVersion, lastVersion) >= 0) continue;
        console.log("Downloading", country, tags.BundleVersion, tags.BundleURL);
        let cb = await getCarrierBundle(tags.BundleURL, false);
        if (!cb) {
            console.warn(`Failed to fetch ${tags.BundleURL}`);
            continue;
        }
        let ov = await getCarrierBundle(tags.BundleURL, true);
        if (!ov)
        {
            ov = cb;
        }
        let parsed = bplist.parseBuffer(cb)[0] as CarrierPlist.CarrierPlist;
        let passedoutblob = bplist.parseBuffer(ov)[0] as CarrierPlist.CarrierPlist;
        for (var i of parsed.ISOAlpha2CountryCode)
        {
            if (i == "gb")
            {
                i = "uk"
            }
            if (parsed?.RCS?.SupportsE2EE == false && !countriesE2EE[i])
            {
                countriesE2EE[i] = 2;
            }
            if ((parsed?.ShowTARandomizationSwitch || passedoutblob?.ShowTARandomizationSwitch) && !countriesPRIVACY[i])
            {
                countriesPRIVACY[i] = 2;
            }
        }
        countries[country] = tags.BundleVersion;
    }

    for (var [carrier,OsVersions] of Object.entries(ocb.MobileDeviceCarrierBundlesByProductVersion)) {
        // find latest version
        let vers: CarrierBundleSimple[] = [];
        for (var [osversion, version] of Object.entries(OsVersions)) 
            if (version.BuildVersion) 
                vers.push(version);
        vers.sort((a, b) => dottedCompare(a.BuildVersion, b.BuildVersion));
        let latest = vers[0];
        if (!latest) continue;

        // compare to local version
        let lastVersion = networks[carrier]?.version ?? "58.5.0";
        if (dottedCompare(latest.BuildVersion, lastVersion) >= 0) continue;
        console.log("Downloading", carrier, latest.BuildVersion, latest.BundleURL);
        let cb = await getCarrierBundle(latest.BundleURL, false);
        if (!cb) {
            console.warn(`Failed to fetch ${latest.BundleURL}`);
            continue;
        }
        let ov = await getCarrierBundle(latest.BundleURL, true);
        if (!ov)
        {
            ov = cb;
        }
        if (internal(carrier)) continue;
        let parsed = bplist.parseBuffer(cb)[0] as CarrierPlist.CarrierPlist;
        let passedoutblob = bplist.parseBuffer(ov)[0] as CarrierPlist.CarrierPlist;
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "networks", "eval(network)[id].data.RCS");
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "networkrbm", "eval(network)[id].data.RCS?.EnableBusinessMessagingByDefault || eval(network)[id].data.RCS?.ShowBusinessMessagingSwitch");
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "networke2ee", "eval(network)[id].data.RCS?.SupportsE2EE == false");
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "network5gsa", "eval(network)[id].blob.Show5GStandaloneSwitch || eval(network)[id].blob.Enable5GStandaloneByDefault || eval(network)[id].data.Show5GStandaloneSwitch || eval(network)[id].data.Enable5GStandaloneByDefault");
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "networksat", "eval(network)[id].blob.SupportsSatellite || eval(network)[id].blob.ShowSatelliteSwitch");
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "networkvvmail", "eval(network)[id].data.VisualVoicemailServiceName && eval(network)[id].data.VisualVoicemailServiceName != \"none\"");
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "networkvonr", "eval(network)[id].blob.SupportsVoNR || eval(network)[id].data.SupportsVoNR");
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "networkesimtr", "eval(network)[id].data.PhoneAccountTransfer || eval(network)[id].blob.PhoneAccountTransfer || eval(network)[id].data.CarrierEntitlements?.SupportPhysicalSIMtoESIMTransfer || eval(network)[id].data.CarrierEntitlements?.SupportsOnDevicePhysicalSIMConvert || eval(network)[id].blob.CarrierEntitlements?.SupportPhysicalSIMtoESIMTransfer || eval(network)[id].blob.CarrierEntitlements?.SupportsOnDevicePhysicalSIMConvert");
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "networkcresimtr", "eval(network)[id].data.CarrierEntitlements?.SupportCrossPlatformSIMTransfer || eval(network)[id].blob.CarrierEntitlements?.SupportCrossPlatformSIMTransfer");
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "networkusage", "eval(network)[id].data.CarrierSpace");
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "networkprivacy", "eval(network)[id].blob.EnableTARandomizationByDefault || eval(network)[id].blob.ShowTARandomizationSwitch");
    }
}

export function manualversion()
{
    return "26.5 and 27.0 beta 3";
}

doLocal('26.5-LuckF23F77.V159OS')
await doOnline();
doLocal('27.0b3-RaveSeed24A5380h.V159DeveloperOS')

fs.writeFileSync(Path.join(__dirname, 'version.txt'), manualversion());
fs.writeFileSync(Path.join(__dirname, 'processed.json'), JSON.stringify(networks, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-rbm.json'), JSON.stringify(networkrbm, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-e2ee.json'), JSON.stringify(networke2ee, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-5gsa.json'), JSON.stringify(network5gsa, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-sat.json'), JSON.stringify(networksat, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-vvmail.json'), JSON.stringify(networkvvmail, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-vonr.json'), JSON.stringify(networkvonr, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-esimtr.json'), JSON.stringify(networkesimtr, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-cresimtr.json'), JSON.stringify(networkcresimtr, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-usage.json'), JSON.stringify(networkusage, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-privacy.json'), JSON.stringify(networkprivacy, null, 2));

fs.writeFileSync(Path.join(__dirname, 'processed-counte.json'), JSON.stringify(countriesE2EE, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-countp.json'), JSON.stringify(countriesPRIVACY, null, 2));
