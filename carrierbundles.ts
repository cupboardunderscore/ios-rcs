import bplist from "bplist-parser";
import { $ } from 'bun';
import fs from 'fs';
import Path from 'path';

import JSZip from "jszip";
import { CountryCodes, ReverseCountryCodes } from "./countries.ts";
import type { CarrierBundleInfo } from "./types/Info.plist";
import type CarrierPlist from "./types/carrier.plist.d.ts";
import type { CarrierBundleSimple, iTunesUpdate } from "./types/versions.d.ts";


const LocalDirs = [
    '/Volumes/Crystal22A3354.D84OS/System/Library/Carrier Bundles/iPhone/'
]


async function getOnlineCarrierBundles() {
    let text = await fetch('https://s.mzstatic.com/version').then(t => t.text())
    let replaced = text.replace(/<data>/g, "<string>").replace(/<\/data>/g, "</string>");
    const json = await $`cat < ${Buffer.from(replaced)} | plutil -convert json -o - -`.json();
    return json as iTunesUpdate;
}

async function getCarrierBundle(url: string) {
    let req = await fetch(url);
    if (!req.ok) throw new Error(`Failed to fetch ${url}: ${req.statusText}`);
    let data = await req.arrayBuffer();
    let zip = await JSZip.loadAsync(data);
    let file = Object.keys(zip.files).find(a => a.match(/^Payload\/[a-zA-Z0-9_]+\.bundle\/carrier\.plist$/i));
    if (!file){
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
        console.warn(`File not found ${path}`);
        return;
    };
    return bplist.parseFileSync<T>(fullPath)[0];
}

let networks: Record<string,any> = {};

function setNetwork(source: string, id: string, version: string, data: CarrierPlist.CarrierPlist) {
    let countryCode = id.split("_").pop()! || '';
    let countryName = data.HomeBundleIdentifier?.split('.').pop()!.replace(/([a-z])([A-Z])/g, '$1 $2');
    if (countryCode.length !== 2) countryCode = ReverseCountryCodes[countryName || ""];
    if (countryCode) countryCode = countryCode.toUpperCase();
    networks[id] = {
        source, version,
        names: dedup([
            ...(data.StatusBarImages?.map(a => a.StatusBarCarrierName || a.CarrierName) || []),
            data.CarrierName
        ].map(n => 
            // n?.replace(new RegExp(countryCode + "$",'i'), "")
            n?.replace(new RegExp(countryName + "$",'i'), "")
            .trim()
        )),
        country: CountryCodes[countryCode] || countryName || countryCode, 
        countryCode,
        data
        
    }
}


for (let dir of LocalDirs) {
    if (!fs.existsSync(dir)) continue;
    let dirs = fs.readdirSync(dir);
    for (let d of dirs) {
        let path = Path.join(dir, d);
        let stat = fs.lstatSync(path);
        if (!stat.isDirectory() || stat.isSymbolicLink()) continue;

        let info = readBplist<CarrierBundleInfo>(path, 'Info.plist');
        let data = readBplist<CarrierPlist.CarrierPlist>(path, 'carrier.plist');
        if (!info || !data) continue;
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data)
    }
}

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
    let lastVersion = networks[carrier]?.version ?? "0.0.0";
    if (dottedCompare(latest.BuildVersion, lastVersion) >= 0) {
        console.log("Skipping", carrier, latest.BuildVersion, "already have", lastVersion);
        continue;
    }
    console.log("Downloading", carrier, latest.BuildVersion, latest.BundleURL);
    let cb = await getCarrierBundle(latest.BundleURL);
    if (!cb) {
        console.warn(`Failed to fetch ${latest.BundleURL}`);
        continue;
    }
    let parsed = bplist.parseBuffer(cb)[0] as CarrierPlist.CarrierPlist;
    setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed);


}

fs.writeFileSync(Path.join(__dirname, 'processed.json'), JSON.stringify(networks, null, 2));