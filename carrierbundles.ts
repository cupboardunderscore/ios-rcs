import bplist from "bplist-parser";
import fs from 'fs';
import Path from 'path';
import plist from "plist";

import JSZip from "jszip";
import { CountryCodes, ReverseCountryCodes } from "./countries.ts";
import type { CarrierBundleInfo } from "./types/Info.plist";
import type CarrierPlist from "./types/carrier.plist.d.ts";
import type { CarrierBundleSimple, iTunesUpdate } from "./types/versions.d.ts";

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
    if (over) file = Object.keys(zip.files).find(a => a.match(/^Payload\/[a-zA-Z0-9_]+\.bundle\/overrides\_D93\_D94\_D47\_D48\.plist$/i));
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
        default:
            return false;
    }
}

let networks: Record<string,any> = {};
let network5gsa: Record<string,any> = {};
let networksat: Record<string,any> = {};
let networkrbm: Record<string,any> = {};
let networkvonr: Record<string,any> = {};
let networkvvmail: Record<string,any> = {};
let networkwatch: Record<string,any> = {};
let networkwatchsa: Record<string,any> = {};

function setNetwork(source: string, id: string, version: string, data: CarrierPlist.CarrierPlist, blob: CarrierPlist.CarrierPlist, network: string, tag: string) {
    let countryCode = id.split("_").pop()! || '';
    let countryName = data.HomeBundleIdentifier?.split('.').pop()!.replace(/([a-z])([A-Z])/g, '$1 $2');
    if (countryCode.length !== 2) countryCode = ReverseCountryCodes[countryName || ""];
    if (countryCode) countryCode = countryCode.toUpperCase();
    if (eval(network)[id] && eval(tag)) return;
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
        let blob = readBplist<CarrierPlist.CarrierPlist>(path, 'overrides\_D93\_D94\_D47\_D48.plist');
        if (!blob)
        {
            blob = data;
        }
        if (!info || !data) continue;
        if (internal(info.CFBundleName)) continue;
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networks", "eval(network)[id].data.RCS");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networkrbm", "eval(network)[id].data.RCS?.EnableBusinessMessagingByDefault || eval(network)[id].data.RCS?.ShowBusinessMessagingSwitch");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "network5gsa", "eval(network)[id].blob.Show5GStandaloneSwitch || eval(network)[id].blob.Enable5GStandaloneByDefault || eval(network)[id].data.Show5GStandaloneSwitch || eval(network)[id].data.Enable5GStandaloneByDefault");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networksat", "eval(network)[id].blob.SupportsSatellite || eval(network)[id].blob.ShowSatelliteSwitch");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networkvvmail", "eval(network)[id].data.VisualVoicemailServiceName && eval(network)[id].data.VisualVoicemailServiceName != \"none\"");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networkvonr", "eval(network)[id].blob.SupportsVoNR || eval(network)[id].data.SupportsVoNR");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networkwatch", "lib.symbols.watch(Buffer.from(id, \'utf8\'), id.length) || eval(network)[id].data.RemoteCardProvisioningSettings?.MinCompatibleWatchOS || eval(network)[id].data.RemoteCardProvisioningSettings?.MinCompatibileWatchOS || eval(network)[id].blob.RemoteCardProvisioningSettings?.MinCompatibleWatchOS || eval(network)[id].blob.RemoteCardProvisioningSettings?.MinCompatibileWatchOS");
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data, blob, "networkwatchsa", "lib.symbols.watchsa(Buffer.from(id, \'utf8\'), id.length) || eval(network)[id].data.RemoteCardProvisioningSettings?.MinCompatibleWatchOSForStandaloneMode || eval(network)[id].blob.RemoteCardProvisioningSettings?.MinCompatibleWatchOSForStandaloneMode");
    }
}

async function doOnline() {
    let ocb = await getOnlineCarrierBundles();
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
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "network5gsa", "eval(network)[id].blob.Show5GStandaloneSwitch || eval(network)[id].blob.Enable5GStandaloneByDefault || eval(network)[id].data.Show5GStandaloneSwitch || eval(network)[id].data.Enable5GStandaloneByDefault");
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "networksat", "eval(network)[id].blob.SupportsSatellite || eval(network)[id].blob.ShowSatelliteSwitch");
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "networkvvmail", "eval(network)[id].data.VisualVoicemailServiceName && eval(network)[id].data.VisualVoicemailServiceName != \"none\"");
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "networkvonr", "eval(network)[id].blob.SupportsVoNR || eval(network)[id].data.SupportsVoNR");
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "networkwatch", "lib.symbols.watch(Buffer.from(id, \'utf8\'), id.length) || eval(network)[id].data.RemoteCardProvisioningSettings?.MinCompatibleWatchOS || eval(network)[id].data.RemoteCardProvisioningSettings?.MinCompatibileWatchOS || eval(network)[id].blob.RemoteCardProvisioningSettings?.MinCompatibleWatchOS || eval(network)[id].blob.RemoteCardProvisioningSettings?.MinCompatibileWatchOS");
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob, "networkwatchsa", "lib.symbols.watchsa(Buffer.from(id, \'utf8\'), id.length) || eval(network)[id].data.RemoteCardProvisioningSettings?.MinCompatibleWatchOSForStandaloneMode || eval(network)[id].blob.RemoteCardProvisioningSettings?.MinCompatibleWatchOSForStandaloneMode");
    }
}

export function manualversion()
{
    return "26.0 beta 1 revision";
}

doLocal('18.5-CrystalF22F76.D93OS')
await doOnline();
doLocal('26.0b1r-LuckSeedUpdate23A5260u.D93DeveloperOS')

fs.writeFileSync(Path.join(__dirname, 'version.txt'), manualversion());
fs.writeFileSync(Path.join(__dirname, 'processed.json'), JSON.stringify(networks, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-5gsa.json'), JSON.stringify(network5gsa, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-sat.json'), JSON.stringify(networksat, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-rbm.json'), JSON.stringify(networkrbm, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-vonr.json'), JSON.stringify(networkvonr, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-vvmail.json'), JSON.stringify(networkvvmail, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-watch.json'), JSON.stringify(networkwatch, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-watchsa.json'), JSON.stringify(networkwatchsa, null, 2));
