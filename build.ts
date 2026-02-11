import { build } from "./buildHtml";

build(0, "procrcs", "./html/",
    "data.data.RCS",
    "true",
    "RCS on iOS");
build(1, "procrbm", "./html/rbm/",
    "data.data.RCS?.EnableBusinessMessagingByDefault || data.data.RCS?.ShowBusinessMessagingSwitch",
    "data.RCS",
    "RCS Business Messaging on iOS");
/*build(2, "proce2ee", "./html/e2ee/",
    "data.data.RCS?.SupportsE2EE",
    "data.RCS",
    "RCS E2EE on iOS");*/
build(3, "proc5gsa", "./html/5gsa/",
    "data.blob.Show5GStandaloneSwitch || data.blob.Enable5GStandaloneByDefault || data.data.Show5GStandaloneSwitch || data.data.Enable5GStandaloneByDefault",
    "true",
    "5G Standalone on iOS");
build(4, "procsat", "./html/sat/",
    "data.blob.SupportsSatellite || data.blob.ShowSatelliteSwitch",
    "true",
    "Satellite features on iOS");
build(5, "procvvmail", "./html/vvmail/",
    "data.data.VisualVoicemailServiceName && data.data.VisualVoicemailServiceName != \"none\"",
    "true",
    "Visual Voicemail on iOS");
build(6, "procvonr", "./html/vonr/",
    "data.blob.SupportsVoNR || data.data.SupportsVoNR",
    "blob.Show5GStandaloneSwitch || blob.Enable5GStandaloneByDefault || data.Show5GStandaloneSwitch || data.Enable5GStandaloneByDefault",
    "Voice over NR on iOS");
/*build(7, "procwatch", "./html/watch/",
    "lib.symbols.watch(Buffer.from(id, \'utf8\'), id.length) || data.data.RemoteCardProvisioningSettings?.MinCompatibleWatchOS || data.data.RemoteCardProvisioningSettings?.MinCompatibileWatchOS || data.blob.RemoteCardProvisioningSettings?.MinCompatibleWatchOS || data.blob.RemoteCardProvisioningSettings?.MinCompatibileWatchOS",
    "Cellular on watchOS");
build(8, "procwatchsa", "./html/watchsa/",
    "lib.symbols.watchsa(Buffer.from(id, \'utf8\'), id.length) || data.data.RemoteCardProvisioningSettings?.MinCompatibleWatchOSForStandaloneMode || data.blob.RemoteCardProvisioningSettings?.MinCompatibleWatchOSForStandaloneMode",
    "Cellular Standalone on watchOS");*/
build(9, "procesimtr", "./html/esimtr/",
    "data.data.CarrierEntitlements?.SupportCrossPlatformSIMTransfer || data.blob.CarrierEntitlements?.SupportCrossPlatformSIMTransfer",
    "true",
    "Cross-platform (e)SIM transfer");
/*build(10, "", "",
    "",
    "esim transfer");*/
build(11, "procusage", "./html/usage/",
    "data.data.CarrierSpace?.SupportsPlans || data.data.CarrierSpace?.SupportsUsage",
    "true",
    "Cellular plan info on iOS");
build(12, "procprivacy", "./html/privacy/",
    "data.blob.EnableTARandomizationByDefault || data.blob.ShowTARandomizationSwitch",
    "true",
    "Limit precise location on iOS");
