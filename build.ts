import { build } from "./buildHtml";

build(0, "procrcs", "./html/",
    "data.data.RCS",
    "true",
    "RCS on iOS");
build(1, "procrbm", "./html/rbm/",
    "data.data.RCS?.EnableBusinessMessagingByDefault || data.data.RCS?.ShowBusinessMessagingSwitch",
    "data.RCS",
    "RCS Business Messaging on iOS");
build(2, "proce2ee", "./html/e2ee/",
    "data.data.RCS?.SupportsE2EE != false",
    "data.RCS",
    "RCS E2EE on iOS");
build(3, "proc5gsa", "./html/5gsa/",
    "data.blob.Show5GStandaloneSwitch || data.blob.Enable5GStandaloneByDefault || data.data.Show5GStandaloneSwitch || data.data.Enable5GStandaloneByDefault",
    "true",
    "5G Standalone on iOS");
build(4, "proc5gplus", "./html/5gplus/",
    "data.blob.DataIndicatorOverrideForNRMmwave || data.data.DataIndicatorOverrideForNRMmwave",
    "true",
    "5G+/UW/UC/A on iOS");
build(5, "procsat", "./html/sat/",
    "data.blob.SupportsSatellite || data.blob.ShowSatelliteSwitch",
    "true",
    "Satellite features on iOS");
build(6, "procvvmail", "./html/vvmail/",
    "data.data.VisualVoicemailServiceName && data.data.VisualVoicemailServiceName != \"none\"",
    "true",
    "Visual Voicemail on iOS");
build(7, "procvonr", "./html/vonr/",
    "data.blob.SupportsVoNR || data.data.SupportsVoNR",
    "blob.Show5GStandaloneSwitch || blob.Enable5GStandaloneByDefault || data.Show5GStandaloneSwitch || data.Enable5GStandaloneByDefault",
    "Voice over NR on iOS");
build(9, "procesimtr", "./html/esimtr/",
    "data.data.PhoneAccountTransfer || data.blob.PhoneAccountTransfer || data.data.CarrierEntitlements?.SupportPhysicalSIMtoESIMTransfer || data.data.CarrierEntitlements?.SupportsOnDevicePhysicalSIMConvert || data.blob.CarrierEntitlements?.SupportPhysicalSIMtoESIMTransfer || data.blob.CarrierEntitlements?.SupportsOnDevicePhysicalSIMConvert",
    "true",
    "(e)SIM transfer");
build(10, "proccresimtr", "./html/cresimtr/",
    "data.data.CarrierEntitlements?.SupportCrossPlatformSIMTransfer || data.blob.CarrierEntitlements?.SupportCrossPlatformSIMTransfer",
    "data.PhoneAccountTransfer || blob.PhoneAccountTransfer || data.CarrierEntitlements?.SupportPhysicalSIMtoESIMTransfer || data.CarrierEntitlements?.SupportsOnDevicePhysicalSIMConvert || blob.CarrierEntitlements?.SupportPhysicalSIMtoESIMTransfer || blob.CarrierEntitlements?.SupportsOnDevicePhysicalSIMConvert",
    "Cross-platform (e)SIM transfer");
build(11, "procusage", "./html/usage/",
    "data.data.CarrierSpace",
    "true",
    "Cellular plan info on iOS");
build(12, "procprivacy", "./html/privacy/",
    "data.blob.EnableTARandomizationByDefault || data.blob.ShowTARandomizationSwitch",
    "true",
    "Limit precise location on iOS");
build(13, "prochandoff", "./html/handoff/",
    "data.data.CarrierEntitlements?.SupportsQuickSwitchSetActiveIccid || data.data.QuickSwitch || data.blob.CarrierEntitlements?.SupportsQuickSwitchSetActiveIccid || data.blob.QuickSwitch",
    "true",
    "iPhone Handoff on iOS");
