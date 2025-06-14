import { build } from "./buildHtml";

build(0, "procrcs", "./html/",
    "data.data.RCS", "RCS on iOS");
build(1, "procrbm", "./html/rbm/",
    "data.data.RCS?.EnableBusinessMessagingByDefault || data.data.RCS?.ShowBusinessMessagingSwitch",
    "RCS Business Messaging on iOS");
build(2, "proc5gsa", "./html/5gsa/",
    "data.blob.Show5GStandaloneSwitch || data.blob.Enable5GStandaloneByDefault || data.data.Show5GStandaloneSwitch || data.data.Enable5GStandaloneByDefault",
    "5G Standalone on iOS");
build(3, "procsat", "./html/sat/",
    "data.blob.SupportsSatellite || data.blob.ShowSatelliteSwitch",
    "Satellite Features on iOS");
build(4, "procvvmail", "./html/vvmail/",
    "data.data.VisualVoicemailServiceName && data.data.VisualVoicemailServiceName != \"none\"",
    "Visual Voicemail on iOS");
build(5, "procvonr", "./html/vonr/",
    "data.blob.SupportsVoNR || data.data.SupportsVoNR",
    "Voice over NR on iOS");
build(6, "procwatch", "./html/watch/",
    "lib.symbols.watch(Buffer.from(id, \'utf8\'), id.length) || data.data.RemoteCardProvisioningSettings?.MinCompatibleWatchOS || data.data.RemoteCardProvisioningSettings?.MinCompatibileWatchOS || data.blob.RemoteCardProvisioningSettings?.MinCompatibleWatchOS || data.blob.RemoteCardProvisioningSettings?.MinCompatibileWatchOS",
    "Cellular on watchOS");
build(7, "procwatchsa", "./html/watchsa/",
    "lib.symbols.watchsa(Buffer.from(id, \'utf8\'), id.length) || data.data.RemoteCardProvisioningSettings?.MinCompatibleWatchOSForStandaloneMode || data.blob.RemoteCardProvisioningSettings?.MinCompatibleWatchOSForStandaloneMode",
    "Cellular Standalone on watchOS");
