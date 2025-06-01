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

async function getoverrides(url: string) {
    let req = await fetch(url);
    if (!req.ok) throw new Error(`Failed to fetch ${url}: ${req.statusText}`);
    let data = await req.arrayBuffer();
    let zip = await JSZip.loadAsync(data);
    let file = Object.keys(zip.files).find(a => a.match(/^Payload\/[a-zA-Z0-9_]+\.bundle\/overrides\_D93\_D94\_D47\_D48\.plist$/i));
    if (!file){
        //console.warn("Files in " + url + " are: ", Object.keys(zip.files));
        //throw new Error(`Carrier.plist not found in ${url}`);
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

let networks: Record<string,any> = {};
let network5gsa: Record<string,any> = {};
let networksat: Record<string,any> = {};
let networkrbm: Record<string,any> = {};
let networkvonr: Record<string,any> = {};
let networkvvmail: Record<string,any> = {};

function setNetwork(source: string, id: string, version: string, data: CarrierPlist.CarrierPlist) {
    let countryCode = id.split("_").pop()! || '';
    let countryName = data.HomeBundleIdentifier?.split('.').pop()!.replace(/([a-z])([A-Z])/g, '$1 $2');
    if (countryCode.length !== 2) countryCode = ReverseCountryCodes[countryName || ""];
    if (countryCode) countryCode = countryCode.toUpperCase();
    if (networks[id] && networks[id].data.RCS) return;
    networks[id] = {
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
        data
    }
}

function setNetwork5gsa(source: string, id: string, version: string, data: CarrierPlist.CarrierPlist, blob: CarrierPlist.CarrierPlist) {
    let countryCode = id.split("_").pop()! || '';
    let countryName = data.HomeBundleIdentifier?.split('.').pop()!.replace(/([a-z])([A-Z])/g, '$1 $2');
    if (countryCode.length !== 2) countryCode = ReverseCountryCodes[countryName || ""];
    if (countryCode) countryCode = countryCode.toUpperCase();
    if (network5gsa[id] && (network5gsa[id].blob.Show5GStandaloneSwitch || network5gsa[id].blob.Enable5GStandaloneByDefault || network5gsa[id].data.Show5GStandaloneSwitch || network5gsa[id].data.Enable5GStandaloneByDefault)) return;
    network5gsa[id] = {
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

function setNetworksat(source: string, id: string, version: string, data: CarrierPlist.CarrierPlist, blob: CarrierPlist.CarrierPlist) {
    let countryCode = id.split("_").pop()! || '';
    let countryName = data.HomeBundleIdentifier?.split('.').pop()!.replace(/([a-z])([A-Z])/g, '$1 $2');
    if (countryCode.length !== 2) countryCode = ReverseCountryCodes[countryName || ""];
    if (countryCode) countryCode = countryCode.toUpperCase();
    if (networksat[id] && (networksat[id].blob.SupportsSatellite || networksat[id].blob.SupportsSatellite)) return;
    networksat[id] = {
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

function setNetworkrbm(source: string, id: string, version: string, data: CarrierPlist.CarrierPlist) {
    let countryCode = id.split("_").pop()! || '';
    let countryName = data.HomeBundleIdentifier?.split('.').pop()!.replace(/([a-z])([A-Z])/g, '$1 $2');
    if (countryCode.length !== 2) countryCode = ReverseCountryCodes[countryName || ""];
    if (countryCode) countryCode = countryCode.toUpperCase();
    if (networkrbm[id] && (networkrbm[id].data.RCS?.EnableBusinessMessagingByDefault || networkrbm[id].data.RCS?.ShowBusinessMessagingSwitch)) return;
    networkrbm[id] = {
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
        data
    }
}

function setNetworkvonr(source: string, id: string, version: string, data: CarrierPlist.CarrierPlist, blob: CarrierPlist.CarrierPlist) {
    let countryCode = id.split("_").pop()! || '';
    let countryName = data.HomeBundleIdentifier?.split('.').pop()!.replace(/([a-z])([A-Z])/g, '$1 $2');
    if (countryCode.length !== 2) countryCode = ReverseCountryCodes[countryName || ""];
    if (countryCode) countryCode = countryCode.toUpperCase();
    if (networkvonr[id] && (networkvonr[id].blob.SupportsVoNR || networkvonr[id].blob.SupportsVoNR)) return;
    networkvonr[id] = {
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

function setNetworkvvmail(source: string, id: string, version: string, data: CarrierPlist.CarrierPlist) {
    let countryCode = id.split("_").pop()! || '';
    let countryName = data.HomeBundleIdentifier?.split('.').pop()!.replace(/([a-z])([A-Z])/g, '$1 $2');
    if (countryCode.length !== 2) countryCode = ReverseCountryCodes[countryName || ""];
    if (countryCode) countryCode = countryCode.toUpperCase();
    if (networkvvmail[id] && (networkvvmail[id].data.VisualVoicemailServiceName && networkvvmail[id].data.VisualVoicemailServiceName != "none")) return;
    networkvvmail[id] = {
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
        data
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
        setNetwork(path, info.CFBundleName, info.CFBundleVersion, data)
        setNetwork5gsa(path, info.CFBundleName, info.CFBundleVersion, data, blob)
        setNetworksat(path, info.CFBundleName, info.CFBundleVersion, data, blob)
        setNetworkrbm(path, info.CFBundleName, info.CFBundleVersion, data)
        setNetworkvonr(path, info.CFBundleName, info.CFBundleVersion, data, blob)
        setNetworkvvmail(path, info.CFBundleName, info.CFBundleVersion, data)
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
        let lastVersion = networks[carrier]?.version ?? "0.0.0";
        if (dottedCompare(latest.BuildVersion, lastVersion) >= 0) continue;
        console.log("Downloading", carrier, latest.BuildVersion, latest.BundleURL);
        let cb = await getCarrierBundle(latest.BundleURL);
        if (!cb) {
            console.warn(`Failed to fetch ${latest.BundleURL}`);
            continue;
        }
        let ov = await getoverrides(latest.BundleURL);
        if (!ov)
        {
            ov = cb;
        }
        let parsed = bplist.parseBuffer(cb)[0] as CarrierPlist.CarrierPlist;
        let passedoutblob = bplist.parseBuffer(ov)[0] as CarrierPlist.CarrierPlist;
        setNetwork(latest.BundleURL, carrier, latest.BuildVersion, parsed);
        setNetwork5gsa(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob);
        setNetworksat(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob);
        setNetworkrbm(latest.BundleURL, carrier, latest.BuildVersion, parsed);
        setNetworkvonr(latest.BundleURL, carrier, latest.BuildVersion, parsed, passedoutblob);
        setNetworkvvmail(latest.BundleURL, carrier, latest.BuildVersion, parsed);
    }
}

export function manualversion()
{
    return "18.5";
}

doLocal('18.5-CrystalF22F76.D93OS')
await doOnline();
//doLocal('18.5RC-CrystalF22F75.D93DeveloperOS')

fs.writeFileSync(Path.join(__dirname, 'version.txt'), manualversion());
fs.writeFileSync(Path.join(__dirname, 'processed.json'), JSON.stringify(networks, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-5gsa.json'), JSON.stringify(network5gsa, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-sat.json'), JSON.stringify(networksat, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-rbm.json'), JSON.stringify(networkrbm, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-vonr.json'), JSON.stringify(networkvonr, null, 2));
fs.writeFileSync(Path.join(__dirname, 'processed-vvmail.json'), JSON.stringify(networkvvmail, null, 2));
