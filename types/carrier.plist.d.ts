export interface CarrierPlist {
    MaxBluetoothModemConnections?:                     number[] | number;
    AllowEDGEEditing?:                                 boolean;
    DataIndicatorOverrideForLTE?:                      DataIndicatorOverride;
    MandatoryVerify?:                                  MandatoryVerify;
    SupportsNITZ?:                                     boolean;
    MyAccountURL?:                                     string;
    VVMIgnoresIntlDataRoaming?:                        boolean;
    APNEditabilityTypemask?:                           number;
    SMSSettings?:                                      SMSSettings;
    MyAccountURLTitle?:                                string;
    StockSymboli?:                                     StockSymboli[];
    StatusBarImages?:                                  TopLevelStatusBarImage[];
    Location?:                                         Location;
    IMSConfig?:                                        TopLevelIMSConfig;
    ShowDialAssist?:                                   boolean;
    Show3GSwitchWith4G?:                               boolean;
    SupportedSIMs?:                                    string[];
    PhoneNumberRegistrationGatewayAddress?:            string[] | string;
    CarrierName?:                                      string;
    AttachAPN?:                                        TopLevelAttachAPN;
    VisualVoicemailServiceName?:                       VisualVoicemailServiceName;
    ShowTTY?:                                          boolean;
    VoicemailPilotNumber?:                             string;
    HomeBundleIdentifier?:                             string;
    MMS?:                                              TopLevelMMS;
    AllowAttachAPNEditing?:                            boolean;
    TechSettings?:                                     TopLevelTechSettings;
    SupportsSatellite?:                                boolean;
    ShowSatelliteSwitch?:                              boolean;
    apns?: {
        password?:                             string;
        username?:                             string;
        apn?:                                  string;
        DefaultProtocolMask?:                  number;
        "type-mask"?:                          number;
        AllowedProtocolMask?:                  number;
        "tech-type-mask"?:                     number;
        SupportSwitchOver?:                    boolean;
        configuration?:                        ApnElement[];
        "technology-mask"?:                    number;
        enableXLAT464?:                        boolean;
        UseNetworkMTU?:                        boolean;
        AllowedProtocolMaskInRoaming?:         number;
        AllowNoDNS?:                           number;
        NoCellularReconnectCauseCodes?: {
            CauseCodes:              number[];
            RecoversOnAirplaneMode?: boolean;
            NumTriesAllowed?:        number;
            Type?:                   "3GPP";
            Timeout?:                number;
        }[];
        WaitForBringUpComplete?:               boolean;
        DontSuspend?:                          boolean;
        auth_type?:                            "CHAP";
        AllowedProtocolMaskInDomesticRoaming?: number;
        AllowedProtocolMaskInRoamingLTE?:      number;
        AllowedProtocolMaskInRoamingUMTS?:     number;
    }[];
    OTASoftwareUpdate?:                                OTASoftwareUpdate;
    CellularPlanProvisioningSettings?:                 CellularPlanProvisioningSettings;
    Enable5GStandaloneByDefault?:                      boolean;
    EmergencyCalling?:                                 EmergencyCalling;
    Show5GSwitch?:                                     boolean;
    pdpTimeout?:                                       number[];
    GeofenceOptimizations?:                            GeofenceOptimizations;
    PrimaryDeviceGetsProvisioningInformation?:         boolean;
    SupportsNRNSAInboundRoaming?:                      boolean;
    SupportsSupplementaryServices?:                    boolean;
    Show5GStandaloneSwitch?:                           boolean;
    UserCanReinitiateActivation?:                      boolean;
    OverrideOperatorName?:                             string;
    DisallowCarrierMenuAtHome?:                        boolean;
    NotRegisteredResetWaitPeriod?:                     number | string;
    EncryptedIdentity?:                                EncryptedIdentity;
    Show5GWarningUnsupportedCarrier?:                  boolean;
    TetheringURL?:                                     string;
    AllowedServicesTypeMaskOnInternet?:                number;
    TosSupported?:                                     boolean;
    MTU?:                                              MTU[];
    IPCUApnTypemask?:                                  number;
    PreferPrimaryDNS?:                                 boolean;
    ShowHighDataModeSwitch?:                           boolean;
    simtype?:                                          string;
    Enable5GAutoByDefault?:                            boolean;
    SMSSizeInBytesSentAsMMSInstead?:                   number;
    SUPL?:                                             Supl;
    CarrierSpace?:                                     CarrierSpace;
    CarrierEntitlements?:                              TopLevelCarrierEntitlements;
    PreferCarrierNameFromMetadata?:                    boolean;
    RegistrationOptInRequired?:                        boolean;
    VMSMFilterNumber?:                                 string;
    "com.apple.voicemail.imap"?: {
        MaxGreetingDuration?:                   number;
        UsesSSL:                                boolean;
        GreetingNotification?:                  boolean;
        MinPINLength?:                          number;
        UsesMWI?:                               boolean;
        AuthenticationScheme?:                  "Plain" | "PLAIN" | "DIGEST-MD5";
        ClientManagesTrash?:                    boolean;
        AllowedIMAPServers?: {
            FQDN?: string[];
            IPv4?: string[];
        };
        MaxPINLength?:                          number;
        BeaconAddress?:                         string;
        BeaconServiceCenter?:                   string;
        DeliverLegacyNotificationsBeforeSetup?: boolean;
        BypassSMSCAvailabilityCheck?:           boolean;
        SendBeaconOnBootup?:                    boolean;
        SendBeaconOnLoginFailure?:              boolean;
        DeliverLegacyNotificationBeforeSetup?:  boolean;
        BeaconActivationDelay?:                 number;
        IdleConnectionTimeout?:                 number;
        BeaconTimeout?:                         number;
    };
    AllowSTKAlertInLockScreen?:                        boolean;
    SupportsUserBusyCauseCode?:                        boolean;
    CellBroadcast?:                                    CellBroadcast;
    SupportedPLMNs?:                                   string[];
    IntlDataRoamingExceptions?:                        string[];
    PhoneAccountTransfer?:                             PhoneAccountTransfer;
    DataIndicatorOverride?:                            DataIndicatorOverride;
    RemoteCardProvisioningSettings?:                   TopLevelRemoteCardProvisioningSettings;
    StaticNATType?:                                    number;
    Show4GSwitch?:                                     boolean | string;
    HangUpCallsWhenPlacingEmergencyCall?:              boolean;
    SendTextMMSToShortCodeAsSMS?:                      boolean;
    OTAActivationAPN?:                                 OTAActivationAPNElement;
    Show3GSwitch?:                                     boolean;
    TetheringPhoneNumber?:                             string;
    RCS?:                                              RCS;
    Services?:                                         Service[];
    PhoneSettings?:                                    PhoneSettings;
    EnableLTEAfterUpgrade?:                            boolean;
    NetworkEncryptionCiphers?:                         { [key: string]: boolean };
    CustomerServicePhoneNumber?:                       string;
    WiFiHotspotIdentityProtectionMethod?:              string;
    ManagedHours?:                                     ManagedHours;
    EquivalentBundleTableVersion?:                     string;
    SIDTableFileName?:                                 string;
    TS25AnnexFileName?:                                string;
    SupportsSupplementaryServicesOver3GPP?:            boolean;
    SIDTableVersion?:                                  string;
    SuppressSOSOnlyWithLimitedService?:                boolean;
    ShowWiFiCallingWarningUnsupportedCarrier?:         boolean;
    EULocalBreakOut?:                                  EULocalBreakOut;
    IPv6SupportedDataModeMask?:                        number;
    NumbersExcludedFromCallHistory?:                   { [key: string]: string[] };
    TS25FileName?:                                     string;
    EquivalentBundleTableFileName?:                    string;
    TS25Version?:                                      string;
    CellularDataUsage?:                                CellularDataUsage;
    CheckSMSonSIM?:                                    boolean;
    URLifyUnquotedShorts?:                             boolean;
    AllowFaceTimeOverCellular?:                        boolean;
    ASCIIFileNameRequired?:                            boolean;
    ShouldHideAllVoicemailUI?:                         boolean;
    ShowMessagesConversationListFilteringPrompt?:      boolean;
    SyncSIMPhonebook?:                                 boolean;
    ShowCallForwardingSwitch?:                         boolean;
    PushSettings?:                                     PushSettings;
    RoamingVoicemailPilotNumber?:                      string;
    APNEditabilityTypemaskNew?:                        number;
    ShowCallWaitingSwitch?:                            boolean;
    ShowCallerIDSwitch?:                               boolean;
    ShowVolteSwitch?:                                  boolean;
    WatchCustomerServicePhoneNumber?:                  string;
    OverrideOperatorWiFiName?:                         string;
    SupportsImsCapability?:                            boolean;
    ShowCallForwarding?:                               boolean;
    ShowCallForwarded?:                                boolean;
    NumberToDialForOTAProvisioning?:                   NumberToDialForOtaProvisioning;
    ShowVoiceRoamingSwitch?:                           boolean;
    DisallowedDialingPrefixes?:                        NumberToDialForOtaProvisioning[];
    PhoneNumberIsVoiceMailNumber?:                     boolean;
    OTAActivation?:                                    OTAActivation;
    FallbackMethod?:                                   number;
    OTANumber?:                                        OTANumber;
    KeypadProvisioningNumber?:                         string;
    SuspendFastDormancyAllowed?:                       boolean;
    CDMAInternationalRoaming?:                         CDMAInternationalRoaming;
    SMSUseLocalTZ?:                                    boolean;
    ExitEmergencyModeWhenPlacingFirstRegularCall?:     boolean;
    IntlDataRoamingSwitch?:                            boolean;
    ShowVolteWarningUnsupportedCarrier?:               boolean | string;
    CarrierBookmarks?:                                 CarrierBookmark[];
    IntlDataRoamingAllowed?:                           string[];
    SuppressSimToolkitSendShortMessageNotifications?:  boolean;
    VMSMFilterProtocolID?:                             number | string;
    OverrideCarrierMenuTo?:                            boolean;
    VoicemailPasswordResetPhoneNumber?:                string;
    AllowsVoIP?:                                       boolean;
    TTYRelayNumber?:                                   string;
    CarrierSpecificCLIRPrefixCodes?:                   CarrierSpecificCLIRPrefixCode[];
    RequiresServiceProvisioning?:                      boolean;
    TestEmergencyNumber?:                              string;
    VVMPasswordChangesSupported?:                      boolean;
    IgnoresDeactivateOnNetworkScanServiceMask?:        number;
    VVMGreetingChangesSupported?:                      boolean;
    UseEcn0Bars?:                                      boolean;
    ShowAlertAfterEmergencyCallTimer?:                 number;
    DisplayNormalizedPhoneNumber?:                     boolean;
    MVNOOverrides?:                                    MVNOOverrides;
    UseLTEAlternateBarMapping?:                        boolean;
    SMTPServers?:                                      string[];
    Enable4GByDefault?:                                boolean;
    mRABAvoidanceDisabled?:                            boolean | number;
    ResetBasebandAfterExitingAirplaneMode?:            boolean;
    SuppressVMResetOnTechSwitch?:                      boolean;
    ShowLTEWarningUnsupportedCarrier?:                 boolean;
    IgnoresIntlDataRoamingServiceList?:                IgnoresIntlDataRoamingServiceList[];
    EmergencyNumberExceptions?:                        string[];
    PrivateCapable?:                                   boolean;
    sms_validity_period?:                              number;
    TearDownTetheringDataContextDuringAuthentication?: boolean;
    PrefersGWForLimitedService?:                       boolean;
    DormancyInactivity?:                               number;
    WiFiOperatorNameSuffix?:                           string;
    QosSupported?:                                     boolean;
    SupportsEHRPD?:                                    boolean;
    DeliveryReceiptsDefault?:                          boolean;
    HomeERI?:                                          number[];
    DeliveryReceiptsAllowUserOverride?:                boolean;
    IWLANImsBackoffTimerOnCellularStart?:              number;
    RemoteDiagnosticsWWANAllowed?:                     boolean;
    QualityOfServiceAudio?:                            QualityOfServiceAudio;
    UseTetheringAuthenticationOnCDMA?:                 boolean;
    CaptiveSettingsBySSID?:                            { [key: string]: CaptiveSettingsBySSID };
    ShowClass0SMSFromField?:                           boolean;
    VVMDetachedStorageSupported?:                      boolean;
    TrafficCrowdsourceRules?:                          { RealTime: boolean; };
    SupportsPDNAuthentication?:                        boolean;
    CellularDataPlanSettings?:                         CellularDataPlanSettings;
    AllowedMultimodeSIMs?:                             AllowedMultimodeSIMS;
    DMUFileName?:                                      string;
    SupportedCarrierIds?:                              string[];
    OverrideOperatorCellTunnelName?:                   string;
    Show5GSAWarningUnsupportedCarriers?:               boolean;
    SendCurrentLanguageToSTK?:                         boolean;
    SMSNoRetryCauseCode?:                              number[];
    SupportsSupplementaryServicesOverIMS?:             boolean;
    DefaultWhenImsSwitchOff?:                          number;
    ShowEsimWarningUnsupportedCarrier?:                boolean;
    InitialSetupOverrides?:                            InitialSetupOverrides;
    SMSEncoding?:                                      number;
    CallWaitingDialingCodes?:                          CallWaitingDialingCodes;
    SupportsSupplementaryServicesOverUtOnVoPSNetwork?: boolean;
    CallForwardingDialingCodes?:                       CallForwardingDialingCodes;
    OverrideVMPilotNumberWhenOutsideHome?:             boolean;
    PhoneRecentsDialsAddressBookNumber?:               boolean;
    MaxMultiPartyCalls?:                               number;
    ForceWPSCallsOverCS?:                              boolean;
    SilenceUnknownCallersOverrideList?:                string[];
    EnableMmWaveSisOutrank?:                           number;
    VMSMFilterContents?:                               string;
    AutoCallPickupTimer?:                              number;
    ShowServiceCodes?:                                 boolean;
    WISPrAccounts?: Record<string, {
        AuthenticationRealm: string;
        PasswordType:        string;
        MatchingSSIDs:       Record<string, string[]>;
        SharedSecret:        string;
    }>;
    EvoBlacklistedGIDs?:                               string[];
    CarrierAuthHost?:                                  string;
    SupportDualSimSuppressionOnColdPhysicalSIM?:       SupportDualSimSuppressionOnColdPhysicalSIM;
    VoWiFiCustomerCareWebsite?:                        string;
    SuppressSimToolkitBIPNotifications?:               boolean;
    DTMFToneLength?:                                   number;
    AllowEditingTestModeUI?:                           boolean;
    RedialOnRadioResourceRelease2G?:                   boolean;
    ShowCallBarring?:                                  boolean;
    RedialOnRRCConnectionFailure?:                     boolean;
    PrlPushFlag?:                                      boolean;
    CoreOSNetworkingStack?:                            CoreOSNetworkingStack;
    CallForwardingCustomLabels?:                       CallForwardingCustomLabels;
    DefaultPhoneNumberPrefixes?:                       string[];
    SupportsFlashInfoCallTimer?:                       boolean;
    nais?: {
        nai:      string;
        username: string;
        password: string;
    }[];
    AllowNAISelection?:                                boolean;
    Show3GSwitchWithVolte?:                            boolean;
    OverrideDisplayTextLowPriority?:                   boolean;
    EmergencyNumbers?:                                 EmergencyNumbers;
    OverrideNoAlphaTagSendUSSD?:                       boolean;
    UseSTKCCReject?:                                   boolean;
    RequiresIPv4v6PDPTypes?:                           boolean;
    SaveICCIDToCache?:                                 boolean;
    MyAccountURLInWebViewer?:                          string;
    OTAActivationProxyHost?:                           string;
    OTAActivationProxyPort?:                           number;
    LocationSecondaryOverlay?:                         LocationSecondaryOverlay;
    AllowAKEYEditing?:                                 boolean;
    EnablePreviewTranscodingQuality?:                  boolean;
    SMTPServersWithExtendedCodeRange?:                 string[];
    Lcoation?:                                         Lcoation;
    VoicemailPilotName?:                               string;
    ShowRATIndicator?:                                 boolean;
    BootstrapOverrideOperatorName?:                    string;
    CellularPlanSettings?:                             CellularPlanSettings;
    DataOnlySubscriptionActions?:                      boolean;
    TechSettingsSecondaryOverlay?: {
        IKE: {
            Proposals: {
                AuthenticationMethod: Preconditions;
                EAPMethod: "EAP-AKA";
            }[];
            LocalIdentifier: string;
        };
        "5wiServiceMask": number;
        SupportOverCell:  boolean;
    };
    DeliverLegacyNotificationsBeforeSetup?:            boolean;
    EnableIMSISwitch?:                                 boolean;
    ShowDataIndicator?:                                boolean;
    ApplyGSMASettings?:                                boolean;
    VoLTECustomerCareWebsite?:                         string;
    signature?:                                        Signature;
    VVMRetryIntervals?:                                number[];
    VVMNotificationFallbackTimeout?:                   number;
    AllowsMultiplePDNConnectionsToSameAPN?:            boolean;
    AllowsHighQualityVideoOver3G?:                     boolean;
    DataIndicatorOverrideForNRMmwave?:                 string;
}

export interface AllowedMultimodeSIMS {
    Config: Config;
}

export interface Config {
    SupportedSIMs:         string[];
    signature:             Signature;
    OverrideConfiguration: ConfigOverrideConfiguration;
}

export interface ConfigOverrideConfiguration {
    IntlDataRoamingExceptions: string[];
    apns:                      any[];
    signature:                 Signature;
}

export interface Signature {
    type: string;
    data: number[];
}

export interface TopLevelAttachAPN {
    "3GPP":   The3_Gpp[] | The3Gpp3Gpp;
    "3GPP2"?: The3_Gpp;
}

export interface The3_Gpp {
    password?:                         string;
    username?:                         string;
    AllowedProtocolMaskInRoamingLTE?:  number;
    apn:                               string;
    AllowedProtocolMask?:              number;
    PcscfAddressRequired?:             boolean;
    AllowedProtocolMaskInRoamingUMTS?: number;
    DefaultProtocolMask?:              number;
    "type-mask"?:                      number;
    auth_type?:                        "CHAP";
    InactivityTimeout?:                number;
    UseNetworkMTU?:                    boolean;
}
export interface The3Gpp3Gpp {
    password?:                             string;
    PcscfAddressRequired?:                 boolean;
    username?:                             string;
    apn?:                                  string;
    AllowedProtocolMask?:                  number;
    AllowedProtocolMaskInRoamingLTE?:      number;
    DefaultProtocolMask?:                  number;
    AllowedProtocolMaskInRoamingUMTS?:     number;
    AllowedProtocolMaskInRoaming?:         number;
    "3GPP_Item"?:                          {};
    auth_type?:                            string;
    UseNetworkMTU?:                        boolean;
    enableXLAT464?:                        boolean;
    AllowedProtocolMaskInDomesticRoaming?: number;
}


export interface CDMAInternationalRoaming {
    EnabledByDefault:    boolean;
    OverrideNetworkMCC?: Record<`${number}`, string[]>;
}


export interface CallForwardingCustomLabels {
    Unreachable: string;
}

export interface CallForwardingDialingCodes {
    EnableDefaultCallForwarding?:       string;
    EnableUnconditionalCallForwarding:  string;
    DisableUnconditionalCallForwarding: string;
    DisableNoAnswerCallForwarding?:     string;
    DisableCallForwarding?:             string;
    EnableBusyCallForwarding?:          string;
    DisableBusyCallForwarding?:         string;
    DisableDefaultCallForwarding?:      string;
    EnableNoAnswerCallForwarding?:      string;
}

export interface CallWaitingDialingCodes {
    EnableCallWaiting:            string;
    CallWaitingEnabledByDefault?: boolean;
    DisableCallWaiting:           string;
}

export interface CaptiveSettingsBySSID {
    Bypass: boolean;
}

export interface CarrierBookmark {
    Title: string;
    URL:   string;
}

export interface TopLevelCarrierEntitlements {
    ProtocolVersion?:                            string;
    ProvisioningRecheckPeriod?:                  number;
    Authentication?:                             Authentication;
    SupportedEntitlements?:                      number;
    ServerAddress:                               string;
    AllowCurrentLocation?:                       boolean;
    UpdatePeriod?:                               number;
    SupportSecureIntent?:                        boolean;
    ReportTransferSimServiceFlowType?:           boolean;
    PseudonymUpdatePeriod?:                      number;
    SupportedAuthorizationTokens?:               number;
    UserAgent?:                                  string;
    SupportPhysicalSIMtoESIMTransfer?:           boolean;
    DisableSecondaryCredentials?:                boolean;
    SupportsOnDevicePhysicalSIMConvert?:         boolean;
    EntitlementRequestViaWebService?:            boolean;
    FailureDelay?:                               number;
    TempFailureBackoffDelay?:                    number;
    EnableVolteWhileEntitlementStatusIsUnknown?: boolean;
    AllowedIMSIPrefixes?:                        string[];
    SupportedActions?:                           Array<SupportedActionEnum[] | SupportedActionEnum>;
    EnableDeviceAccountIdentifier?:              boolean;
    Timeout?:                                    number;
    ProcessPNRAvailabilityStatus?:               boolean;
    TransferWebservicesTimeout?:                 number;
    DoNotLinkVoLteSwitchVisibilityToVoPS?:       boolean;
    SupportPreflightOnSource?:                   boolean;
    SendSelfRegistrationUpdate?:                 boolean;
    InvalidateSimForUnknownSubscriber?:          boolean;
    AllowCellularPlanTransferTarget?:            boolean;
}

export interface Authentication {
    Type:     number;
    Username: Username;
}

export enum Username {
    The0$IMSIEpcMncMNCMccMCC3GppnetworkOrg = "0$IMSI@epc.mnc$MNC.mcc$MCC.3gppnetwork.org",
    The0$IMSIImsMncMNCMccMCC3GppnetworkOrg = "0$IMSI@ims.mnc$MNC.mcc$MCC.3gppnetwork.org",
    The0$IMSINaiEpcMncMNCMccMCC3GppnetworkOrg = "0$IMSI@nai.epc.mnc$MNC.mcc$MCC.3gppnetwork.org",
}

export enum SupportedActionEnum {
    AuthenticateTrustFlag = "AuthenticateTrustFlag",
    GetPreferredRoamingNetworks = "getPreferredRoamingNetworks",
    SupportedActionAuthenticateTrustFlag = "authenticateTrustFlag",
    SupportedActionTransferSIMService = "transferSIMService",
    TransferSIMService = "TransferSIMService",
    TransferSimService = "TransferSimService",
}

export interface CarrierSpace {
    ManualRefreshMinimumIntervalMins?:  number;
    AutoRefreshMinimumIntervalMins?:    number;
    TeamIDList:                         string[];
    AllowedWhenRoaming?:                boolean;
    SupportsUserConsentRefresh?:        boolean;
    PlanProvisioningPollInterval?:      number;
    AuthorizationURL?:                  string;
    SupportsApps?:                      boolean;
    AuthClientID?:                      string;
    DataOptimizationAllowed?:           boolean;
    SupportsPlans?:                     boolean;
    SupportsUsage?:                     boolean;
    TokenURL?:                          string;
    AuthorizationRequestRequiresICCID?: boolean;
    PlanProvisioningMaxPollRequests?:   number;
    ManualRefreshMinIntervalMins?:      number;
    AutoRefreshMinIntervalMins?:        number;
}

export enum CarrierSpecificCLIRPrefixCode {
    The67 = "*67",
}

export interface CellBroadcast {
    AlertTypes?:                        AlertTypes;
    SwitchGroupTitle?:                  SwitchGroupTitle;
    MinimumDeviceCategorySupported?:    number;
    AlertConfigurations?:               AlertConfigurations;
    MessageValidityPeriod?:             MessageValidityPeriod;
    MessageIDParameters3GPP?:           CellBroadcastMessageIDParameters3GPP[];
    DataThrottleTimeout?:               number;
    DataThrottleOnMessageReceive?:      boolean;
    MessageIDParameters3GPP2?:          MessageIDParameters3GPP2[];
    CheckDuplicatesAcross3GPPAnd3GPP2?: boolean;
    PrimaryBroadcastLanguages?:         PrimaryBroadcastLanguage[];
    SoundIsMutableInRelayMode?:         boolean;
    TranslationParameters?:             TranslationParameters;
    GeofencingConfiguration?:           GeofencingConfiguration;
}

export interface AlertConfigurations {
    Configuration_us?:     ConfigEtws1_Class;
    Configuration_nl?:     ConfigurationKSAClass;
    Configuration_ca?:     ConfigurationKSAClass;
    Configuration_2?:      ConfigEtws1_Class;
    Configuration_3?:      ConfigEtws1_Class;
    Configuration_1?:      ConfigEtws1_Class;
    Configuration_ae?:     ConfigurationKSAClass;
    Configuration_ae2?:    ConfigurationKSAClass;
    Configuration_uk?:     ConfigEtws1_Class;
    Configuration_0?:      ConfigEtws1_Class;
    Configuration_KSA?:    ConfigurationKSAClass;
    Configuration_4?:      ConfigEtws1_Class;
    Config_etws_1?:        ConfigEtws1_Class;
    Config_etws_2?:        ConfigEtws1_Class;
    Configuration_WHAM?:   ConfigurationKSAClass;
    Config_etws_3?:        ConfigEtws1_Class;
    Configuration_turkey?: ConfigEtws1_Class;
}

export interface ConfigEtws1_Class {
    OverrideDefaultDisplayOrder?: boolean;
    Sound:                        ConfigEtws1_Sound;
    Vibration:                    Vibration;
}

export enum ConfigEtws1_Sound {
    CbsAlertJpCaf = "cbs_alert_jp.caf",
    CbsAlertUsCaf = "cbs_alert_us.caf",
    CbsDisasterWarningJpCaf = "cbs_disaster_warning_jp.caf",
    CbsTsunamiWarningJpCaf = "cbs_tsunami_warning_jp.caf",
    Text = "Text",
}

export enum Vibration {
    CbsVibeCAPlist = "cbs_vibe_ca.plist",
    CbsVibeUsPlist = "cbs_vibe_us.plist",
    Default = "Default",
}

export interface ConfigurationKSAClass {
    Sound:     ConfigurationKSASound;
    Vibration: Vibration;
}

export enum ConfigurationKSASound {
    CbsAlertCACaf = "cbs_alert_ca.caf",
    CbsAlertUsCaf = "cbs_alert_us.caf",
    Text = "Text",
}

export interface AlertTypes {
    Emergency?:                             AlertTypesEmergency;
    Government?:                            Amber;
    AMBER?:                                 Amber;
    Presidential?:                          Amber;
    Quake?:                                 Amber;
    Test?:                                  Amber;
    UAE_Class_2?:                           Amber;
    UAE_Class_7?:                           Amber;
    UAE_Class_4?:                           Amber;
    UAE_Class_1?:                           Amber;
    Exercise?:                              Amber;
    UAE_Class_3?:                           Amber;
    "Operator Defined"?:                    Amber;
    Extreme?:                               Amber;
    Severe?:                                Amber;
    AlertLevel?:                            Amber;
    MonthlyTest?:                           Amber;
    ExtremeEmergency?:                      Amber;
    TestMessage?:                           Amber;
    EU_Alert?:                              Amber;
    EU_Alert_L1?:                           Amber;
    EU_Alert_L3?:                           Amber;
    EU_Alert_L2?:                           Amber;
    KSA_Category_2?:                        Amber;
    KSA_Category_5?:                        Amber;
    KSA_Category_1?:                        Amber;
    KSA_Category_4?:                        Amber;
    KSA_Category_3?:                        Amber;
    KSA_Category_6?:                        Amber;
    AT1_Presidential?:                      Amber;
    AT3_AMBER?:                             Amber;
    AT6_PublicSafety?:                      Amber;
    AT2_Emergency?:                         Amber;
    AT4_MonthlyTest?:                       Amber;
    AT5_LabTest?:                           Amber;
    AT1_Quake?:                             Amber;
    AT7_Test?:                              Amber;
    WHAM?:                                  Amber;
    Test_Message?:                          Amber;
    "Life Threatening Alert Notification"?: Amber;
    "State Alert Notification"?:            Amber;
    "Lost/Kidnap Alert Notification"?:      Amber;
    "Test Alert Notification"?:             Amber;
}

export interface Amber {
    EnabledByDefault:        boolean;
    SoundIsMutableInDND?:    boolean;
    SwitchName:              string;
    UserConfigurable:        boolean;
    NotificationTitle:       string;
    SwitchDescription?:      string;
    SoundAlertDeviceInMute?: boolean;
    SoundAlertPeriod?:       number;
    CustomPreferences?:      CustomPreference[];
}

export interface CustomPreference {
    MessageIDParameters3GPP:      CustomPreferenceMessageIDParameters3GPP[];
    EnableAlwaysDeliverByDefault: boolean;
    ShowAlwaysDeliverSwitch:      boolean;
}

export interface CustomPreferenceMessageIDParameters3GPP {
    FromServiceID: number;
    ToServiceID:   number;
}

export interface AlertTypesEmergency {
    EnabledByDefault:        boolean;
    SwitchName:              NotificationTitle;
    UserConfigurable:        boolean;
    NotificationTitle:       NotificationTitle;
    SwitchDescription?:      string;
    SoundIsMutableInDND?:    boolean;
    SoundAlertDeviceInMute?: boolean;
}

export enum NotificationTitle {
    EmergencyAlert = "Emergency Alert",
    EmergencyAlerts = "Emergency Alerts",
}

export interface GeofencingConfiguration {
    FeatureEnabled: boolean;
}

export interface CellBroadcastMessageIDParameters3GPP {
    FromServiceID:                number;
    AlertType:                    string;
    AlertConfiguration:           AlertConfiguration;
    ToServiceID:                  number;
    EmergencyAlertConfiguration?: string;
    EmergencyAlert?:              boolean;
    ProcessAsETWSMessage?:        boolean;
}

export enum AlertConfiguration {
    ConfigEtws3 = "Config_etws_3",
    Configuration0 = "Configuration_0",
    Configuration1 = "Configuration_1",
    Configuration2 = "Configuration_2",
    Configuration3 = "Configuration_3",
    Configuration4 = "Configuration_4",
    ConfigurationAE = "Configuration_ae",
    ConfigurationAe2 = "Configuration_ae2",
    ConfigurationCA = "Configuration_ca",
    ConfigurationKSA = "Configuration_KSA",
    ConfigurationNl = "Configuration_nl",
    ConfigurationTurkey = "Configuration_turkey",
    ConfigurationUk = "Configuration_uk",
    ConfigurationUs = "Configuration_us",
    ConfigurationWHAM = "Configuration_WHAM",
}

export interface MessageIDParameters3GPP2 {
    AlertType:          AlertType;
    Category:           number;
    Language:           number;
    AlertConfiguration: AlertConfiguration;
}

export enum AlertType {
    Amber = "AMBER",
    Emergency = "Emergency",
    Presidential = "Presidential",
    Test = "Test",
}

export interface MessageValidityPeriod {
    AirplaneMode?: boolean;
    TimeLimit?:    number;
}

export enum PrimaryBroadcastLanguage {
    En = "en",
}

export enum SwitchGroupTitle {
    EmergencyAlerts = "Emergency Alerts",
    EmergencyNotifications = "Emergency Notifications",
    Empty = "",
    GovernmentAlerts = "Government Alerts",
    GrAlert = "GR-ALERT",
    HongKongPublicAlertSystem = "Hong Kong Public Alert System",
    UAEAlert = "UAE-Alert",
}

export interface TranslationParameters {
    Translations:    Translations;
    MessageIDRange:  MessageIDRange[];
    NativeLanguages: NativeLanguage[];
}

export interface MessageIDRange {
    ToServiceID:          number;
    FromServiceID:        number;
    TranslationReference: TranslationReference;
}

export enum TranslationReference {
    Earthquake = "Earthquake",
    Tsunami = "Tsunami",
}

export enum NativeLanguage {
    Ja = "ja",
}

export interface Translations {
    AlertKeywords: AlertKeywords;
    Earthquake:    Earthquake;
    Tsunami:       Earthquake;
}

export interface AlertKeywords {
    Tsunami:    Tsunami[];
    Earthquake: EarthquakeElement[];
}

export enum EarthquakeElement {
    地震 = "地震",
    地震速報 = "地震速報",
}

export enum Tsunami {
    津波警報 = "津波警報",
}

export interface Earthquake {
    en:      Default;
    ko:      Default;
    default: Default;
    es:      Default;
    pt:      Default;
    zh:      Default;
}

export interface Default {
    Sound: DefaultSound;
}

export enum DefaultSound {
    CbsTranslatedEarthquakeEnCaf = "cbs_translated_earthquake_en.caf",
    CbsTranslatedEarthquakeEsCaf = "cbs_translated_earthquake_es.caf",
    CbsTranslatedEarthquakeKoCaf = "cbs_translated_earthquake_ko.caf",
    CbsTranslatedEarthquakePtCaf = "cbs_translated_earthquake_pt.caf",
    CbsTranslatedEarthquakeZhCaf = "cbs_translated_earthquake_zh.caf",
    CbsTranslatedTsunamiEnCaf = "cbs_translated_tsunami_en.caf",
    CbsTranslatedTsunamiEsCaf = "cbs_translated_tsunami_es.caf",
    CbsTranslatedTsunamiKoCaf = "cbs_translated_tsunami_ko.caf",
    CbsTranslatedTsunamiPtCaf = "cbs_translated_tsunami_pt.caf",
    CbsTranslatedTsunamiZhCaf = "cbs_translated_tsunami_zh.caf",
}

export interface CellularDataPlanSettings {
    DataOnlySubscription?:                       boolean;
    SuppressSimToolkitDisplayTextNotifications?: boolean;
}

export interface CellularDataUsage {
    ShowMonthlyDataUsage?:       boolean;
    NumberOfDaysInBillingCycle?: number;
}

export interface CellularPlanProvisioningSettings {
    EnableAttachMonitorMode?:                     boolean;
    WaitForPhoneNumberDuringActivation?:          boolean;
    AttachMonitorModeBackoffTimes?:               number[];
    DelayMonitorModeBackoffTimes?:                number[];
    RequireEntitlementCheckForAttachMonitorMode?: boolean;
}

export interface CellularPlanSettings {
    DataPlanProfileURL: string;
    Proxy:              Proxy;
    RequestUrls:        RequestUrls;
}

export interface Proxy {
    ProxySettings: ProxySettings;
}

export interface ProxySettings {
    HOST: string;
    PORT: number;
}

export interface RequestUrls {
    InitiatePurchase:       string;
    Purchase:               string;
    ConfirmPurchase:        string;
    GetSubscriptionDetails: string;
    RequestPlans:           string;
    CreateSession:          string;
}

export interface CoreOSNetworkingStack {
    ECN: ECN;
}

export interface ECN {
    ForceEnableCellularInternet:    boolean;
    ForceEnableCellularNonInternet: boolean;
}

export enum DataIndicatorOverride {
    LTE = "LTE",
    The4G = "4G",
}

export enum NumberToDialForOtaProvisioning {
    The228 = "*228",
    The22899 = "*22899",
}

export interface EULocalBreakOut {
    EnableByDefault:    boolean;
    apns:               OTAActivationAPNElement[];
    ReroutableServices: number;
}

export interface OTAActivationAPNElement {
    password:    string;
    username:    string;
    apn:         string;
    "type-mask": number;
    signature?:  Signature;
}

export interface EmergencyCalling {
    CheckVoiceHistoryOnSubForEmergencyCall?: boolean;
    NonPreferredEmergencyNetworks?:          string[];
    EmergencyNumbers?:                       EmergencyNumber[];
}

export interface EmergencyNumber {
    Number:                    string;
    Category?:                 number;
    Title?:                    Title;
    PreferredEmergencyNumber?: boolean;
    SupportsEmergencySetup?:   boolean;
    SupportsText?:             boolean;
    SupportsVoice?:            boolean;
    TestNumber?:               boolean;
}

export enum Title {
    EmergencyDisambiguationAmbulance = "EMERGENCY_DISAMBIGUATION_AMBULANCE",
    EmergencyDisambiguationAmbulanceFire = "EMERGENCY_DISAMBIGUATION_AMBULANCE_FIRE",
    EmergencyDisambiguationCoastGuard = "EMERGENCY_DISAMBIGUATION_COAST_GUARD",
    EmergencyDisambiguationFire = "EMERGENCY_DISAMBIGUATION_FIRE",
    EmergencyDisambiguationFireAmbulanceRescue = "EMERGENCY_DISAMBIGUATION_FIRE_AMBULANCE_RESCUE",
    EmergencyDisambiguationFireEmergencyAmbulance = "EMERGENCY_DISAMBIGUATION_FIRE_EMERGENCY_AMBULANCE",
    EmergencyDisambiguationPolice = "EMERGENCY_DISAMBIGUATION_POLICE",
}

export interface EmergencyNumbers {
    "454"?:    The454[];
    AllPLMNs?: {}[];
}

export interface The454 {
    Number:   string;
    Category: number;
}

export interface EncryptedIdentity {
    UpdateOnBootup?:    boolean;
    AnonymousUsername?: string;
    Certificate:        string;
    KeyIdentifier?:     string;
    UpdatePeriod?:      number;
    UpdateURL?:         string;
    NAIRealm?:          string;
    KeyFilename?:       string;
}

export interface GeofenceOptimizations {
    Enabled:                 boolean;
    SupportsOnlyOffloadSim?: boolean;
}

export interface TopLevelIMSConfig {
    EnableWiFiCallingWithoutEntitlement?: boolean;
    Media?:                               PurpleMedia;
    Signaling?:                           Signaling;
    XCAP?:                                Xcap;
    ConferenceCalling?:                   ConferenceCalling;
    SMS?:                                 IMSConfigSMS;
    Voice?:                               VoiceClass;
    EnableWiFiCallingByDefault?:          boolean;
    AllowHandoverWithoutIMSVoiceService?: boolean;
    Emergency?:                           IMSConfigEmergency;
    AllowWiFiCallingInAirplaneMode?:      boolean;
    LocalShortCodeNumbers?:               string[];
    SIM?:                                 Sim;
    ShowWiFiCallingRoamingSwitch?:        boolean;
    AllowIMSUnprovisioned?:               boolean;
    SipTimers?:                           IMSConfigSIPTimers;
    ShowVolteWarningUnsupportedCarrier?:  boolean;
    allowCSFBInVolteMode?:                boolean;
    CallTransfer?:                        {};
    IPTelephony?:                         {};
    LegacySIM?:                           {};
    Internal?:                            {};
}

export interface ConferenceCalling {
    SendConferenceSubscribeInNewDialog?: boolean;
    conferenceServer?:                   string;
    AlwaysSubscribeToConferenceEvents?:  boolean;
    TreatAllNotificationsAsPartial?:     boolean;
    ConferenceSupport?:                  boolean;
    SendReferToPeer?:                    boolean;
    SendConferenceSubscribeAfterRefers?: boolean;
    ttyIMSSupported?:                    boolean;
    EnableHoldForRTT?:                   boolean;
    SerializeParticipants?:              boolean;
}

export interface IMSConfigEmergency {
    PreferSameDomainAsNormalCall?: boolean;
    MaxVoLTEAttempts?:             number;
    RestrictedDomainMode?:         boolean;
}

export interface PurpleMedia {
    RTCPIntervalSeconds?:                       number | string;
    IncludeSDPMaxRed?:                          boolean;
    PreferredAMRWBMode?:                        number | string;
    EnableBandwidthSpecifiers?:                 boolean;
    HideSessionLevelDirection?:                 boolean;
    InactivityTimerRTCPSeconds?:                number | string;
    MaxRedundancy?:                             number;
    UseRestrictiveDirectionWhenCreatingAnswer?: boolean;
    IncludeSDPModeChangeCapability?:            boolean;
    InactivityTimerRTPSeconds?:                 number | string;
    RingbackTone?:                              RingbackTone;
    DTMFVolume?:                                number;
    UseRTPDetectionAutoStart?:                  boolean;
    UseSDPTemplateForAllInvites?:               boolean;
    AudioCodecs?:                               AudioCodecs;
    EnableRemoteRTCPDeactivation?:              boolean;
    EnableIncomingDTMF?:                        boolean;
    ModeSetAMRWB?:                              string;
    AllowIPv6UnicastAddress?:                   boolean;
    SuppressOctetAlignAttributeForBECodecs?:    boolean;
    SuppressBSUntilPreconditionsMet?:           boolean;
    SelectLatestForkWithActiveEarlyMedia?:      boolean;
    EVSHardBwLimit?:                            EvsHardBWLimit;
    ModeChangeCapability?:                      number;
    EVSHardBrLimit?:                            EvsHardBrLimit;
    TTYRelayNumber?:                            string;
    EnableRTCPExtendedReports?:                 boolean;
    AllowHoldMusic?:                            boolean;
    UseSDPTemplateWhenAnswering?:               boolean;
    PreferredAMRNBMode?:                        number;
    EnforceEarlyMediaDirection?:                boolean;
    IncludeSDPModeChangePeriod?:                boolean;
    SupportAMRWB?:                              boolean;
    UseEphemeralRTPPorts?:                      boolean;
    RTCPXRBasebandSupport?:                     RTCPXRBasebandSupport;
    SupportAMRNB?:                              boolean;
    ModeSetAMRNB?:                              string;
    UseSDPTemplateForUpdates?:                  boolean;
    StopLocalRingbackToneOn181?:                boolean;
}

export interface AudioCodecs {
    "109"?:           The106;
    "96"?:            The112;
    "106"?:           The106;
    "112"?:           The112;
    PayloadTypeItem?: The112;
    "126"?:           The115;
    "127"?:           The115;
    "102"?:           The102;
    "104"?:           The102;
    "108"?:           The102;
    "110"?:           The102;
    "115"?:           The115;
    "98"?:            The112;
}

export interface The102 {
    "mode-set":     string;
    EncodingName:   string;
    SampleRate:     number;
    "octet-align"?: string;
}

export interface The106 {
    "ch-aw-recv"?:  number | string;
    br?:            EvsHardBrLimit;
    SampleRate:     number;
    EncodingName:   EncodingName;
    bw?:            EvsHardBWLimit;
    "hf-only"?:     string;
    "max-red"?:     string;
    cmr?:           string;
    "octet-align"?: string;
}

export enum EncodingName {
    AMR = "AMR",
    Evs = "EVS",
}

export enum EvsHardBrLimit {
    The132 = "13.2",
    The59244 = "5.9-24.4",
}

export enum EvsHardBWLimit {
    NbSwb = "nb-swb",
    NbWb = "nb-wb",
}

export interface The112 {
    "hf-only"?:    string;
    SampleRate?:   number;
    "max-red"?:    string;
    "ch-aw-recv"?: string;
    cmr?:          string;
    EncodingName:  EncodingName;
    br?:           EvsHardBrLimit;
    bw?:           EvsHardBWLimit;
}

export interface The115 {
    br:            string;
    SampleRate:    number;
    EncodingName:  EncodingName;
    bw:            EvsHardBWLimit;
    "ch-aw-recv"?: string;
}

export interface RTCPXRBasebandSupport {
    "voip-metrics": string;
    "stat-summary": string;
}

export enum RingbackTone {
    ANSI = "ANSI",
    Cept = "CEPT",
    Hk = "HK",
    Uk = "UK",
}

export interface Sim {
    CarrierDomain?:       string;
    impiFormat?:          ImpFormat;
    impuFormat?:          ImpFormat[];
    IgnoreISIM?:          boolean;
    USIMFallbackSupport?: boolean;
}

export enum ImpFormat {
    ImsiCarrierDomain = "imsi@carrierDomain",
    MsisdnCarrierDomain = "msisdn@carrierDomain",
}

export interface IMSConfigSMS {
    enableInNonVoLTEMode?:             boolean;
    allowCSFBInVolteMode?:             boolean;
    SMSBundleToVoice?:                 boolean;
    SupportedDomains?:                 SupportedDomains;
    UseRpOriginatingAddressAsSender?:  boolean;
    TR1MTimer?:                        TR1MTimer;
    supportInNonVoLTEModeWhenRoaming?: boolean;
    DCN?:                              Dcn;
    useRpOriginatingAddressAsSender?:  boolean;
}

export interface Dcn {
    destinationNumber?: string;
    Policy?:            string;
    hysteresisTimeout?: number;
}

export interface SupportedDomains {
    LTE?:  boolean;
    GSM?:  boolean;
    UMTS?: boolean;
    NR?:   boolean;
}

export interface TR1MTimer {
    IsFatalOnIMSSendSuccess?: boolean;
    TimerValue?:              number;
}

export interface Signaling {
    DefaultAuthAlgorithm?:                              DefaultAuthAlgorithm;
    LocalQoSTimeoutMOSeconds?:                          number;
    SupportPEarlyMediaHeader?:                          boolean;
    UseFakeSAsForDeregistration?:                       boolean;
    EarlyMediaNeedsHeader?:                             boolean;
    AllowRegistrationCanceledState?:                    boolean;
    ResetDisabledModeOnEvents?:                         string;
    SipTimers?:                                         SignalingSIPTimers;
    NetworkTerminationRetryIntervalSeconds?:            number;
    AlwaysUnsubscribeFromRegEvents?:                    boolean;
    AllowResponsesOverDifferentTransport?:              boolean;
    TriggerCSFBOnWaitForRingingTimeout?:                boolean;
    StartLocalQosTimerOnSessionProgress?:               boolean;
    TriggerCSFBOnLocalQoSTimeoutMO?:                    boolean;
    TriggerCSFBOnLocalQoSTimeoutMT?:                    boolean;
    SendResumeInviteAsSendRecv?:                        boolean;
    RingbackTimerSeconds?:                              number;
    EnableSenderName?:                                  boolean;
    LocalQoSTimeoutMTSeconds?:                          number;
    RequirePreconditionsWhenMandatory?:                 boolean;
    IncomingCallEndReasons?:                            IncomingCallEndReasons;
    Preconditions?:                                     Preconditions;
    IncompleteRegistrationThrottlingIntervalSeconds?:   number;
    RequireQoSBeforeRinging?:                           boolean;
    AdditionalFeatureTags?:                             AdditionalFeatureTags;
    MaxReRegistrationAttempts?:                         number;
    DontSendPreconditionsIfCallWaitingDisabled?:        boolean;
    MinSessionExpiresSeconds?:                          number | string;
    ConvertSessionProgressToRinging?:                   boolean;
    RingingTimerSeconds?:                               number | string;
    UseIPSec?:                                          boolean;
    VirtualInterfaceMtu?:                               number;
    InviteErrorResponsesToTriggerCSFB?:                 string;
    EmergencyURNs?:                                     EmergencyURNS;
    CountryOfOriginationFormat?:                        CountryOfOriginationFormat;
    RegistrationExpirationSeconds?:                     number;
    AlwaysAddSipInstance?:                              boolean;
    AdditionalContactParams?:                           AdditionalContactParams;
    AlwaysSendSessionProgress?:                         boolean;
    SendLocalTimeZoneInformation?:                      boolean;
    TriggerCSFBOnSDPError?:                             boolean;
    UseCIDUrlInPIDF?:                                   boolean;
    EmergencyCallBackModeExpirationSeconds?:            number;
    VerstatFeatureCapability?:                          string;
    SendEmergencyLocationUpdates?:                      boolean;
    EmergencyLocationUpdateTimeSeconds?:                number;
    IgnoreRegNotificationContactExpires?:               boolean;
    PreconditionUpdateDelayTimerMilliseconds?:          number | string;
    ussdEnabled?:                                       boolean;
    WaitForRingingTimerMOSeconds?:                      number;
    strictCallFlows?:                                   boolean;
    SubscriptionTerminatedMeansRegistrationTerminated?: boolean;
    DropRegistrationOnSRVCC?:                           boolean;
    MaxUdpMessageSize?:                                 number;
    AlwaysAddPrivacyHeader?:                            boolean;
    EnableCellularNetworkInfo?:                         boolean;
    WaitForRingingTimerMTSeconds?:                      number;
    ContactUser?:                                       string;
    OutgoingDomain?:                                    string;
    EmergencyErrorResponsesToTriggerCSFB?:              string;
    DropRegistrationOnWaitTimeout?:                     boolean;
    DropRegistrationOnErrorCodes?:                      string;
    IgnoreLimitedServiceInEmergencyMode?:               boolean;
    CallEndReasons?:                                    CallEndReasons;
    KillCallOnHoldResumeError?:                         boolean;
    ValidateSipMessageRecipient?:                       boolean;
    SendPreferredServiceInInvite?:                      boolean;
    DropRegistrationOnAirplaneModeToggle?:              boolean;
    AllowPCNIInAirplaneMode?:                           boolean;
    RegistrationRetryIntervals?:                        string;
    AddLocationToEmergencySMS?:                         boolean;
    AlwaysAddGeolocationForEmergencyCalls?:             boolean;
    PIDFGeoPrivShape?:                                  string;
    PIDFConfidence?:                                    number;
    Allow3DPIDFInMessages?:                             boolean;
    UseBase64ForMultipartSMS?:                          boolean;
    UseOutgoingSipUri?:                                 boolean;
    InitialRemotePreconditionStrength?:                 string;
    OnlyUpdatePreconditionsIfConfPresent?:              boolean;
    AddAccessNetworkInfoToInsecureMessages?:            boolean;
    PrivateEmergencyPrefixes?:                          string;
    IncomingPhoneNumberPrefixMap?:                      IncomingPhoneNumberPrefixMap;
    PdnBringupTimerSeconds?:                            number;
    AllowAnonymousEmergencyCalls?:                      boolean;
    RegistrationPolicy?:                                string;
    SendPreconditionsInConfirmedSessions?:              boolean;
    IgnoreSessionRefreshErrors?:                        boolean;
    DisableRegistrationOnNotifyEvents?:                 string[];
    SupportPreconditionsInConferenceSessions?:          boolean;
    SecurityAgreementEalgs?:                            string;
    ResetCallIdOnInitialRegistration?:                  boolean;
    IPSecBringupUseNetworkPath?:                        boolean;
    DropRegistrationOn305ToAllProxies?:                 boolean;
    EmergencyCallSetupTimeoutSeconds?:                  number;
    MaxForbiddenErrors?:                                number | string;
    SessionExpiresSeconds?:                             number;
    SendInitialInviteAsInactive?:                       boolean;
    AddConferenceParticipantsToInvite?:                 boolean;
    IgnoreNetworkUnreachableErrors?:                    boolean;
    NonFatalReInviteResponses?:                         string;
    SetSessionTimerRefresherInInitialRequest?:          boolean;
    IgnoreErrorsInTerminatedForks?:                     boolean;
    SendReInviteInInactiveSessions?:                    boolean;
    KillForkOnUpdateErrors?:                            string;
    NonPrivateEmergencyPrefixes?:                       string;
    ReRegisterOnErrorCodes?:                            string;
    AlwaysPrack18x?:                                    boolean;
    AllowRemoteHoldForUnconfirmedCalls?:                boolean;
    AdditionalHeaders?:                                 AdditionalHeaders;
    FatalSmsErrors?:                                    string;
    DefaultRemoteSipPort?:                              number;
    EnableEmergencyRegistration?:                       boolean;
    EmergencyRingbackTimerSeconds?:                     number;
    EnableRingbackAudioForTextCalls?:                   boolean;
    AllowPhoneContextInEmergencyUri?:                   boolean;
    ImpuRank?:                                          string;
    UserAgentHeaderValue?:                              string;
    EmergencyRegistrationTimeoutSeconds?:               number;
    RegSubscriptionExpirationSeconds?:                  number;
    NoFallbackVoiceService?:                            boolean;
    EmergencyImpuRank?:                                 string;
    OutgoingCallPrefix?:                                OutgoingCallPrefix;
    EmergencyLocationLookupRequired?:                   boolean;
    ForbiddenRegistrationErrorCodes?:                   string;
    IgnoreFromHeaderForSenderName?:                     boolean;
    SecurityAgreementAlgs?:                             any[] | string;
    EnableLastAccessNetworkInfo?:                       boolean;
    QosOptionsClass?:                                   string;
    AddQosOptionsToSockets?:                            boolean;
    AcceptContactParams?:                               string;
    PreferredSenderIdentity?:                           string;
    AllowEarlyMediaToOverrideLocalRingback?:            boolean;
    EmergencyLocationLookupTimeoutSeconds?:             number;
    DropRegistrationOnCSFB?:                            boolean;
    EmergencyPreferredIdentity?:                        string;
    ResetCallIdOnAuthChallenge?:                        boolean;
    RegSubscriptionEnabled?:                            boolean;
    maxUDPpacketsize?:                                  number;
    StrictTS24930PreconditionHeaders?:                  boolean;
    TcpIdleTimeoutSeconds?:                             number;
    LocationForShortCodeCalls?:                         CountryOfOriginationFormat;
    NetworkBasedCallWaiting?:                           boolean;
    UseDialogEventPackage?:                             boolean;
    UseNormalIdentityForEmergencyCalls?:                boolean;
    AllowedPdpTypeMask?:                                number;
    UseCampedAccessNetworkInPANI?:                      boolean;
    SecurityAgreementOptions?:                          string;
    UseTupleInPIDF?:                                    boolean;
    FastEmergencyLocationEnabled?:                      boolean;
    IPSecSegmentOffset?:                                number;
    KillRegistrationOnHandoverTimeout?:                 boolean;
    RestartRingbackTimerOn180?:                         boolean;
    PdpBackOffTimerforRA?:                              number;
    CallSetupPingTimerMilliseconds?:                    number;
    IgnoreReregistrationErrorCodes?:                    string;
    CSFBOnAccessBarred?:                                boolean;
    ClearThrottlingOnSocketErrors?:                     string;
    AllowSimultaneousCallsWhileUnregistered?:           boolean;
    RegisterSmsWhenAccessBarringZero?:                  boolean;
    AllowLimitedAccessModeRegistration?:                boolean;
    AlwaysSetPhoneContext?:                             boolean;
    ReportSipErrorsDuringReRegistration?:               boolean;
    ReRegistrationHysteresisTimerMilliseconds?:         number;
    AccessBarringType?:                                 string;
    UseEphemeralSipSourcePortForTcp?:                   boolean;
    RetryAfterStatusCodes?:                             string;
    ActivationBackoffTimerOverIWLANMilliseconds?:       number;
    DeferMediaActivationOnSessionConfirmed?:            boolean;
    AllowEmergencyRetryForIPSec?:                       boolean;
}

export interface AdditionalContactParams {
    "REGISTER,INVITE,INVITE:*"?:          string;
    "INVITE,INVITE:*"?:                   string;
    "REGISTER,INVITE,INVITE:*[primary]"?: string;
    REGISTER?:                            string;
    "REGISTER,INVITE[-wifi]"?:            string;
    "REGISTER[wifi]"?:                    string;
}

export interface AdditionalFeatureTags {
    voice: Voice;
    sms?:  SMS;
}

export interface SMS {
    "+cdmaless": string;
}

export interface Voice {
    audio:                    string;
    "+cdmaless"?:             string;
    "+g.gsma.rcs.telephony"?: string;
}

export interface AdditionalHeaders {
    "INVITE,INVITE:*"?:  string;
    "INVITE[wifi,911]"?: string[];
    "INVITE[911,wifi]"?: string[];
}

export interface CallEndReasons {
    RejectedByUser?:          RejectedByUser;
    NoAnswer?:                Blocked;
    Blocked?:                 Blocked;
    DoNotDisturb?:            Blocked;
    CodecNotSupported?:       CodecNotSupported;
    MediaHeartbeatTimeout?:   CodecNotSupported;
    MediaTimeout?:            CodecNotSupported;
    NoLTE?:                   Blocked;
    NotVoiceRegisteredNoLTE?: CodecNotSupported;
    DeferToSecondary?:        Blocked;
    JoinedConference?:        CodecNotSupported;
    RemoteCancel?:            RemoteCancel;
}

export interface Blocked {
    ReasonHeaderText?: string;
    StatusCode:        number;
}

export interface CodecNotSupported {
    ReasonHeaderText: string;
}

export interface RejectedByUser {
    ReasonHeaderText:   string;
    ReasonHeaderCause?: number;
    StatusCode?:        number;
}

export interface RemoteCancel {
    ReasonHeaderText:  string;
    ReasonHeaderCause: number;
}

export enum CountryOfOriginationFormat {
    Both = "BOTH",
    Pani = "PANI",
}

export enum DefaultAuthAlgorithm {
    AKAv1MD5 = "AKAv1-MD5",
    AKAv2MD5 = "AKAv2-MD5",
    Empty = "",
}

export interface EmergencyURNS {
    "911"?:    string;
    "110"?:    string;
    "118"?:    string;
    "119"?:    string;
    "184110"?: string;
    "184118"?: string;
    "184119"?: string;
    "186110"?: string;
    "186118"?: string;
    "186119"?: string;
    "120"?:    string;
    "993"?:    string;
    "999"?:    string;
    default?:  string;
    "912"?:    string;
    "913"?:    string;
    "113"?:    string;
    "114"?:    string;
    "115"?:    string;
    "112"?:    string;
    "191"?:    string;
    "199"?:    string;
    "1669"?:   string;
    "922"?:    string;
}

export interface IncomingCallEndReasons {
    "Request Timeout"?:         IncomingCallEndReason;
    TemporarilyUnavailable?:    CallToVoicemail;
    NoAnswerFromUser?:          CallToVoicemail;
    CallDeclinedElsewhere?:     CallDeclinedElsewhere;
    DeclineInUse?:              CallToVoicemail;
    NormalUnspecified1?:        CallToVoicemail;
    NormalUnspecified?:         CallToVoicemail;
    NormalCallClearing?:        CallToVoicemail;
    "<IncomingCallEndReason>"?: IncomingCallEndReason;
    RequestTimeout?:            IncomingCallEndReason;
    NotFound?:                  CallDecline;
    CallToVoicemail?:           CallToVoicemail;
    CallDecline?:               CallDecline;
    SubscriberAbsent?:          CallToVoicemail;
}

export interface IncomingCallEndReason {
    StatusCode:       number;
    TerminationEvent: TerminationEvent;
}

export enum TerminationEvent {
    RemoteCallRejected = "RemoteCallRejected",
    RemoteHangup = "RemoteHangup",
    RemoteRequestCanceled = "RemoteRequestCanceled",
    SecondaryDeviceInUse = "SecondaryDeviceInUse",
}

export interface CallDecline {
    StatusCode:       number;
    DisableCSFB?:     boolean;
    TerminationEvent: TerminationEvent;
}

export interface CallDeclinedElsewhere {
    ReasonHeaderCause: number;
    TerminationEvent:  string;
}

export interface CallToVoicemail {
    ReasonHeaderText?:  string;
    StatusCode:         number;
    TerminationEvent:   TerminationEvent;
    ReasonHeaderCause?: number;
    Protocol?:          Protocol;
}

export enum Protocol {
    Q850 = "Q.850",
}

export interface IncomingPhoneNumberPrefixMap {
    "+81": string;
}

export interface OutgoingCallPrefix {
    Local:         string;
    International: string;
}

export enum Preconditions {
    None = "None",
    PreconditionsSupported = "supported",
    Required = "Required",
    Supported = "Supported",
    SupportedButMandatory = "SupportedButMandatory",
    SupportedMandatory = "SupportedMandatory",
}

export interface SignalingSIPTimers {
    InviteResponseTimeout?: number;
    T2?:                    number;
    J?:                     number;
    F?:                     number;
    B?:                     number;
    T1?:                    number;
    H?:                     number;
    D?:                     number;
    T4?:                    number;
}

export interface IMSConfigSIPTimers {
    B: number;
    F: number;
}

export interface VoiceClass {
    BlockCallsOverCS?:                             boolean;
    EnableVolteByDefault?:                         boolean;
    BlockSilentRedialOverCS?:                      boolean;
    PreAlertingDTMFSupported?:                     boolean;
    DialAsEmergencyOverIMSForUndetectedEmergency?: boolean;
    E911OverITechSupported?:                       boolean;
    E911OverCSIfNoIMSReg?:                         boolean;
    tLte911Timer?:                                 number;
    CheckIMSPrefForEmergency?:                     boolean;
    endNonEmergencyCalls?:                         boolean;
    ttyIMSSupported?:                              boolean;
    CellularE911SearchTimeout?:                    number;
    DisableVolteSwitchOnIncompatibleState?:        boolean;
    TestEmergencyPSAPSupported?:                   boolean;
    E911SearchTimer?:                              string;
    EnableVoLTEWithVoWiFi?:                        boolean;
    E911OverCSIfRoaming?:                          boolean;
    E911OverIMSSupported?:                         boolean;
}

export interface Xcap {
    SupportsCW?:                           boolean;
    NafPort?:                              number;
    DisableOnNetworkError?:                boolean;
    ForbiddenHttpErrorCodes?:              string;
    SupportsCLIR?:                         boolean;
    ContentType?:                          ContentType;
    BsfPort?:                              number;
    supported?:                            boolean;
    NafHost?:                              string;
    DisableCLIRModification?:              boolean;
    BsfHost?:                              string;
    imsRegistrationDependency?:            boolean;
    useSecureTransport?:                   boolean;
    imsFeatureDependency?:                 boolean;
    AllowedOnlyWhenIMSRegistered?:         boolean;
    SupportsCFErasure?:                    boolean;
    NetworkSupportsCLIRModification?:      boolean;
    UnsolicitedRequestDelay?:              number;
    IgnoreInternationalDataRoamingSwitch?: boolean;
    SupportsCB?:                           boolean;
    Auid?:                                 string;
    SupportCFMediaTag?:                    boolean;
    SupportCBMediaTag?:                    boolean;
    XcapHttpVersion?:                      string;
    NafUseSecureTransport?:                boolean;
    BsfUseSecureTransport?:                boolean;
    ImpuRank?:                             string;
    registrationDependency?:               boolean;
    ServeMultipleCDIVRulesPerRequest?:     boolean;
    IgnoreCellularDataSwitch?:             boolean;
    ReuseAuthCredentials?:                 boolean;
    FetchAllCDIVRules?:                    boolean;
    provisioningDependency?:               boolean;
    supportCBMediaTag?:                    boolean;
}

export enum ContentType {
    ApplicationVndEtsiSimservsXML = "application/vnd.etsi.simservs+xml",
    ApplicationXcapElXML = "application/xcap-el+xml",
}

export enum IgnoresIntlDataRoamingServiceList {
    EntitlementTraffic = "EntitlementTraffic",
    Ut = "UT",
}

export interface InitialSetupOverrides {
    Media?: InitialSetupOverridesMedia;
}

export interface InitialSetupOverridesMedia {
    EnableRemoteRTCPDeactivation: boolean;
}

export interface Lcoation {
    EmergencyLocation: LcoationEmergencyLocation;
}

export interface LcoationEmergencyLocation {
    AugmentedEmergencyAction: PurpleAugmentedEmergencyAction;
}

export interface PurpleAugmentedEmergencyAction {
    Supplemented911: Supplemented911;
}

export interface Supplemented911 {
    HTTPS: HTTPS;
}

export interface HTTPS {
    URL: URL;
}

export enum URL {
    GatewayIcloudCOMMeridianMeridianLocation = "gateway.icloud.com/meridian/meridian/location",
    MeridianCDNAppleCOMLocation = "meridian.cdn-apple.com/location",
}

export interface Location {
    EmergencyLocation?:                    LocationEmergencyLocation;
    EnableCPIDuringEmergencyMode?:         boolean;
    EnableEarlyReturnDuringEmergencyMode?: boolean;
    AllowOTDOADuringEmergencyMode?:        boolean;
}

export interface LocationEmergencyLocation {
    AugmentedEmergencyAction: FluffyAugmentedEmergencyAction;
    ControlPlane?:            ControlPlane;
    UserPlane?:               UserPlane;
}

export interface FluffyAugmentedEmergencyAction {
    AML?:             Aml;
    Supplemented911?: Supplemented911;
}

export interface Aml {
    SMS: AmlSMS;
}

export interface AmlSMS {
    Destination: string;
    Binary?:     Binary;
}

export interface Binary {
    DestinationPort: number;
}

export interface ControlPlane {
    EnableAdditionalAssistedConstellations: UserPlane;
}

export interface UserPlane {
    Sbas:    Beidou;
    Glonass: Beidou;
    Qzss:    Beidou;
    Beidou:  Beidou;
}

export enum Beidou {
    Disabled = "disabled",
}

export interface LocationSecondaryOverlay {
    EnableCPIDuringEmergencyMode: boolean;
}

export interface TopLevelMMS {
    MaxImageDimension?:                                 number;
    MMSC?:                                              string;
    GroupModeEnabled?:                                  boolean;
    Proxy?:                                             string;
    MaxMessageSize?:                                    number;
    Version?:                                           string;
    MaxRecipients?:                                     number;
    OnWhileDataOff?:                                    boolean;
    MaxSlidesPerMessage?:                               number;
    MaxVideoBitrate?:                                   number;
    ForwardJunkReports?:                                boolean;
    AllowReturnReports?:                                boolean;
    GroupModeAllowUserOverride?:                        boolean;
    MMSCarrierReportJunkAddress?:                       string;
    OnWhileRoaming?:                                    boolean;
    UAString?:                                          UAString;
    CanUseTransactionIdWithContentLocation?:            boolean;
    UAProf?:                                            string;
    AllowFetchFromMultipleMMSCs?:                       boolean;
    CarrierRequiredPhoneNumberHeaderName?:              string;
    MaxSMILDuration?:                                   number;
    vCard21ExportModeEnabled?:                          boolean;
    SupportsH264Video?:                                 boolean;
    MaxVoiceCallWaitPeriod?:                            number;
    MaxSubjectLenBytes?:                                number;
    SendRejectNotificationIfTooLarge?:                  boolean;
    ExplicitInternationalDialingCode?:                  string;
    ShowMMSEmailAddress?:                               boolean;
    AllowEmptySubject?:                                 boolean;
    MimeEncodingHint?:                                  string;
    ProvisioningMessageType?:                           string;
    ShortCodeNumberLength?:                             number;
    SMILContentLocationSupportsAppleMessageIdentifier?: boolean;
    EnableAck?:                                         boolean;
    NumberPrefixRequiresInternationalSymbol?:           boolean;
}

export enum UAString {
    IPhoneOS = "iPhoneOS*",
    Iosmms20 = "iosmms2.0",
}

export interface MTU {
    "technology-mask": number;
    size:              number;
}

export interface MVNOOverrides {
    Configuration_1?:                 Configuration1;
    Configuration_ICCID_89882470001?: ConfigurationICCID89882470001;
    StatusBarImages?:                 OverrideConfigurationStatusBarImage[];
    Configuration_Carrier1?:          ConfigurationCarrier1;
    Configuration_2?:                 Configuration2;
    Configuration_3?:                 Configuration3;
    Configuration_AU?:                ConfigurationAU;
    "Configuration 2"?:               Configuration1_Class;
    "Configuration 3"?:               Configuration1_Class;
    "Configuration 1"?:               Configuration1_Class;
}

export interface Configuration1_Class {
    OverrideConfiguration: Configuration1_OverrideConfiguration;
    SupportedSIMs:         string[];
}

export interface Configuration1_OverrideConfiguration {
    StatusBarImages:       OverrideConfigurationStatusBarImage[];
    CarrierName:           string;
    MyAccountURLTitle:     string;
    MyAccountURL:          string;
    Services:              Service[];
    VoicemailPilotNumber?: string;
}

export interface Service {
    ServiceCode:  string;
    ServiceName?: string;
}

export interface OverrideConfigurationStatusBarImage {
    AllowPrefixMatching:  boolean;
    CarrierName:          string;
    StatusBarCarrierName: string;
}

export interface Configuration1 {
    OverrideConfiguration: Configuration1_OverrideConfigurationClass;
    SupportedSIMs:         string[];
}

export interface Configuration1_OverrideConfigurationClass {
    CarrierBookmarks?:                CarrierBookmark[];
    MyAccountURLTitle?:               string;
    MyAccountURL?:                    string;
    Services?:                        Service[];
    AttachAPN?:                       PurpleAttachAPN;
    apns?:                            ApnElement[];
    CarrierName?:                     string;
    CarrierEntitlements?:             OverrideConfigurationCarrierEntitlements;
    RemoteCardProvisioningSettings?:  OverrideConfigurationRemoteCardProvisioningSettings;
    StatusBarImages?:                 OverrideConfigurationStatusBarImage[];
    OverrideOperatorName?:            string;
    OverrideOperatorWiFiName?:        string;
    RoamingVoicemailPilotNumber?:     string;
    _Exclude?:                        string[];
    ShouldHideAllVoicemailUI?:        boolean;
    ShowCallWaitingSwitch?:           boolean;
    VisualVoicemailServiceName?:      VisualVoicemailServiceName;
    ShowCallForwardingSwitch?:        boolean;
    WatchCustomerServicePhoneNumber?: string;
    IPCUApnTypemask?:                 number;
    SupportedPLMNs?:                  string[];
    MMS?:                             OverrideConfigurationMMS;
    APNEditabilityTypemask?:          number;
    AllowEDGEEditing?:                boolean;
    StockSymboli?:                    any[];
    TetheringURL?:                    string;
}

export interface PurpleAttachAPN {
    "3GPP": Purple3GPP;
}

export interface Purple3GPP {
    apn:                              string;
    AllowedProtocolMask?:             number;
    PcscfAddressRequired?:            boolean;
    username?:                        UsernameEnum;
    password?:                        string;
    AllowedProtocolMaskInRoamingLTE?: number;
}

export enum UsernameEnum {
    Empty = "",
    JcomJcommobileJp = "jcom@jcommobile.jp",
    LM = "lm",
    Mms = "mms",
    O2 = "o2",
    The65Ideas = "65ideas",
    The685840734641020Uio5GnAuNetNeJp = "685840734641020@uio5gn.au-net.ne.jp",
    The685840734641020UnoAuNetNeJp = "685840734641020@uno.au-net.ne.jp",
    UniroamInetCSCOM = "Uniroam@inet.cs.com",
    UqTrgUqmobileJp = "uq@trg.uqmobile.jp",
    UqUqmobileJp = "uq@uqmobile.jp",
    User = "user",
    Vas = "vas",
    Vodafone = "vodafone",
    X36YN3Dhe9UjPhzmUio5GntrgAuNetNeJp = "X36yN3Dhe9UjPhzm@uio5gntrg.au-net.ne.jp",
    X36YN3Dhe9UjPhzmUnitrgAuNetNeJp = "X36yN3Dhe9UjPhzm@unitrg.au-net.ne.jp",
    Ym = "ym",
}

export interface OverrideConfigurationCarrierEntitlements {
    SupportedEntitlements?: number;
}

export interface OverrideConfigurationMMS {
    MMSC:              string;
    GroupModeEnabled?: boolean;
    MaxMessageSize?:   number;
}

export interface OverrideConfigurationRemoteCardProvisioningSettings {
    CellularTrialPlan:                              CellularTrialPlan;
    ActivatingStateSubscriptionCheckTimerIntervals: number[];
    MatchingICCIDPrefixes:                          string[];
    MinCompatibleWatchOS:                           string;
}

export interface CellularTrialPlan {
    TrialEndPeriod:    string;
    TrialPlanType?:    TrialPlanType;
    SupportsTrialPlan: boolean;
    TrialStartPeriod:  string;
}

export enum TrialPlanType {
    FreeOrSpecial = "FreeOrSpecial",
    FreeTrial = "FreeTrial",
    Promotion = "Promotion",
    Rebate = "Rebate",
}

export enum VisualVoicemailServiceName {
    IMAP = "IMAP",
    None = "none",
}

export interface ApnElement {
    password?:                             string;
    username?:                             UsernameEnum;
    apn?:                                  string;
    "type-mask"?:                          number;
    DefaultProtocolMask?:                  number;
    AllowedProtocolMask?:                  number;
    AllowedProtocolMaskInRoaming?:         number;
    auth_type?:                            "CHAP";
    configuration?:                        ConfigurationConfiguration[];
    "technology-mask"?:                    number;
    AllowedProtocolMaskInDomesticRoaming?: number;
    enableXLAT464?:                        boolean;
    Support5GSaHandOver?:                  boolean;
    AlwaysOnPDU?:                          boolean;
    SupportSwitchOver?:                    boolean;
    "tech-type-mask"?:                     number;
    SuppressPdnTearDown?:                  boolean;
    WaitForBringUpComplete?:               boolean;
    AllowNoDNS?:                           number;
    UseNetworkMTU?:                        boolean;
}

export interface ConfigurationConfiguration {
    password:             string;
    username:             string;
    apn:                  string;
    "type-mask":          number;
    DefaultProtocolMask?: number;
    AllowedProtocolMask?: number;
}

export interface Configuration2 {
    OverrideConfiguration: Configuration2_OverrideConfiguration;
    SupportedSIMs:         string[];
}

export interface Configuration2_OverrideConfiguration {
    RoamingVoicemailPilotNumber?: string;
    CarrierBookmarks?:            CarrierBookmark[];
    MyAccountURL?:                string;
    MyAccountURLTitle?:           string;
    StatusBarImages?:             OverrideConfigurationStatusBarImage[];
    CarrierName?:                 string;
    OverrideOperatorName?:        string;
    Services?:                    Service[];
    OverrideOperatorWiFiName?:    string;
}

export interface Configuration3 {
    OverrideConfiguration: Configuration3_OverrideConfiguration;
    SupportedSIMs:         string[];
}

export interface Configuration3_OverrideConfiguration {
    RoamingVoicemailPilotNumber: string;
}

export interface ConfigurationAU {
    OverrideConfiguration: ConfigurationAUOverrideConfiguration;
    SupportedSIMs:         string[];
}

export interface ConfigurationAUOverrideConfiguration {
    IMSConfig: OverrideConfigurationIMSConfig;
}

export interface OverrideConfigurationIMSConfig {
    Media: FluffyMedia;
}

export interface FluffyMedia {
    RingbackTone: string;
}

export interface ConfigurationCarrier1 {
    OverrideConfiguration: ConfigurationCarrier1OverrideConfiguration;
    SupportedSIMs:         string[];
}

export interface ConfigurationCarrier1OverrideConfiguration {
    OverrideOperatorName:         string;
    MyAccountURLTitle?:           string;
    MyAccountURL?:                string;
    CarrierName?:                 string;
    DataOnlySubscriptionActions?: boolean;
    IntlDataRoamingAllowed?:      string[];
}

export interface ConfigurationICCID89882470001 {
    OverrideConfiguration: ConfigurationICCID89882470001_OverrideConfiguration;
    SupportedSIMs:         string[];
}

export interface ConfigurationICCID89882470001_OverrideConfiguration {
    ShowLTEWarningUnsupportedCarrier: boolean;
    apns:                             OverrideConfigurationApn[];
    AttachAPN:                        FluffyAttachAPN;
}

export interface FluffyAttachAPN {
    "3GPP": Fluffy3GPP;
}

export interface Fluffy3GPP {
    apn: string;
}

export interface OverrideConfigurationApn {
    apn:         string;
    "type-mask": number;
}

export interface ManagedHours {
    ExpirationDate: string;
    TimeWindows:    TimeWindows;
}

export interface TimeWindows {
    Sunday:    Day[];
    Monday:    Day[];
    Saturday:  Day[];
    Friday:    Day[];
    Thursday:  Day[];
    Tuesday:   Day[];
    Wednesday: Day[];
}

export interface Day {
    EndTime:    string;
    WindowType: WindowType;
    StartTime:  string;
}

export enum WindowType {
    OffPeak = "OffPeak",
}

export interface MandatoryVerify {
    SIMs:       string[];
    signature?: string;
}

export interface OTAActivation {
    BlacklistedSIMs: string[];
}

export enum OTANumber {
    The228 = "*228",
    The873283 = "##873283#",
}

export interface OTASoftwareUpdate {
    SoftwareUpdateOptInRequired?:        boolean;
    AllowAutomaticDownloadOverCellular?: boolean;
    AllowDownloadOverCellular?:          boolean;
    MaxBytesOverCellular?:               number;
    DaysToWaitForCellularDownload?:      number;
}

export interface PhoneAccountTransfer {
    LocalInstallSMDPURL?:                         string;
    TransferErrorCodes?:                          TransferErrorCodes;
    RequiresDeleteAfterTransfer?:                 boolean;
    TransferPageURL?:                             string;
    OneTimeCodeForTransfer?:                      boolean;
    SupportsFallbackToLegacyFlow?:                boolean;
    RequiresPinForTransfer?:                      boolean;
    DisplayOtpBeforeTc?:                          boolean;
    RejectCauseCodesForSimDeactivation?:          number[];
    SupportsRecoveryOnTransferFailureResponse?:   boolean;
    RequiresDeleteBeforeTransfer?:                boolean;
    RequireEntitlementCheckForAttachMonitorMode?: boolean;
    WaitForPhoneNumberDuringActivation?:          boolean;
    CheckRegistrationStatusForSIMAbandon?:        boolean;
    DisablePhoneNumberCheckforBlacklist?:         string;
}

export interface TransferErrorCodes {
    CarrierDefaultErrors:                           string[];
    BillingErrors?:                                 string[];
    IneligibleAccountErrors?:                       string[];
    MaintenanceErrors?:                             string[];
    BlockedAccountErrors?:                          string[];
    SuccessfulTransferWithDelayedActivationErrors?: string[];
}

export interface PhoneSettings {
    AutoCallPickupTimer?:               number;
    CarrierVoiceCallSpamReportAddress?: string;
    ShowExplicitCallTransferButton?:    boolean;
    SpamIdentifiersInCNAM?:             string[];
}

export interface PushSettings {
    PCAllowMinimumIntervalFallback?: boolean;
    PCForcedMinimumHBI?:             number;
    MultiSIMTopic?:                  string;
    Topic?:                          string;
    PreferredNetworksTopic?:         string;
    VoWiFiTopic?:                    string;
    CellularPlanTransferTopic?:      string;
    SAWatchTopic?:                   string;
    VVMTopic?:                       string;
    ForceKeepAliveV1?:               boolean;
}

export interface QualityOfServiceAudio {
    FlowPriority: number;
    ProfileID:    number;
}

export interface RCS {
    ProvisioningData?:                  ProvisioningData;
    EnableRCSByDefault:                 boolean;
    ShowRCSSwitch:                      boolean;
    EnableBusinessMessagingByDefault:   boolean;
    ShowBusinessMessagingSwitch:        boolean;

}

export interface ProvisioningData {
    ServerURL: string;
}

export interface TopLevelRemoteCardProvisioningSettings {
    MatchingICCIDPrefixes?:                          string[];
    UsesAutoAssignment?:                             boolean;
    ServerURL?:                                      string;
    ActivatingStateSubscriptionCheckTimerIntervals?: Array<number | string>;
    MinCompatibleWatchOS?:                           string;
    ShowE911DisclaimerInStandaloneMode?:             boolean;
    SupportedSKUs?:                                  SupportedSKUs[];
    ProvisioningMethod?:                             ProvisioningMethod;
    SupportsFauxCard?:                               boolean;
    CellularTrialPlan?:                              CellularTrialPlan;
    RequiresExtendedGetSIMStatus?:                   boolean;
    GServerURL?:                                     string;
    MinCompatibleWatchOSForStandaloneMode?:          string;
    InconsistentICCIDLength?:                        boolean;
    MinCompatibileWatchOS?:                          string;
    ShowE911Disclaimer?:                             boolean;
    ResetVolteSettingOnSignupIntent?:                boolean;
    IncludeUnusableIccidForPlanSignupRequest?:       boolean;
    RequireLiveIDCheck?:                             boolean;
    IgnoreAssociatedSubscriptionType?:               boolean;
    RequireAltAccountDeviceIDInGetSIMStatus?:        boolean | string;
}

export enum ProvisioningMethod {
    CarrierFlow = "CarrierFlow",
}

export enum SupportedSKUs {
    SkuCu = "SKU_CU",
    SkuEu = "SKU_EU",
    SkuNa = "SKU_NA",
    SkuPost2018All = "SKU_POST2018_ALL",
}

export interface SMSSettings {
    TransportFallback?:                   boolean;
    ForwardJunkReports?:                  boolean;
    SMSCarrierReportJunkAddress?:         string;
    ShowClass0SMSOverInCallAlerts?:       boolean;
    ShowClass0SMSInLockScreen?:           boolean;
    OutgoingSMSPrefix?:                   OutgoingSMSPrefix;
    SupportsEMS?:                         boolean;
    UnsupportedEncodings?:                UnsupportedEncoding[];
    ShowEmptySMS?:                        boolean;
    IgnoreDuplicateSMSSendError?:         boolean;
    AllowVVMSMSWhileIntlRoaming?:         boolean;
    MessageFormat?:                       MessageFormat;
    UseAlternateVVMPort?:                 boolean;
    enableSMSReportJunk?:                 boolean;
    EnableReplyToAlphanumericOriginator?: boolean;
    UseIMSDuringCSCall?:                  boolean;
    SendNackOnSMSStorageFull?:            boolean;
    IgnoreWAPPushBits?:                   number;
    CustomTeleserviceIDs?:                CustomTeleserviceIDs;
    TerminalRegistration?:                TerminalRegistration;
    AllowMMICommandSMSC?:                 boolean;
}

export interface CustomTeleserviceIDs {
    FDEA: string;
    FDED: string;
}

export interface MessageFormat {
    SignalingFormat: number;
    PacketFormat?:   number;
}

export interface OutgoingSMSPrefix {
    International:                     string;
    Local?:                            string;
    LocalPrefixOverride?:              string;
    IntlNumberLength?:                 number;
    HomeCountryNumberLength?:          number;
    RequiresPlusSignForLocalOverride?: boolean;
}

export interface TerminalRegistration {
    DestinationAddress:  string;
    RegistrationOverIMS: string;
    TeleserviceID:       number;
    Registration:        string;
}

export enum UnsupportedEncoding {
    The7BitGSM = "7bitGSM",
}

export interface Supl {
    SuplCARootCert:        string;
    SuplHSLPServerAddress: string;
    SuplFlags:             number;
    SuplUdpPortConfig?:    number;
}

export interface TopLevelStatusBarImage {
    AllowPrefixMatching?:      boolean;
    CarrierName?:              string;
    StatusBarCarrierName?:     string;
    TransparentShadowedImage?: string;
    DefaultImage?:             string;
    FullScreenOpaqueImage?:    string;
}

export interface StockSymboli {
    name?:  string;
    symbol: string;
}

export interface SupportDualSimSuppressionOnColdPhysicalSIM {
    AuthRespCodesRequireSuppression: number[];
    SIMsRequireSuppression:          string[];
}

export interface TopLevelTechSettings {
    ChildSAs?:                             ChildSAs;
    iRatPolicies?:                         IRatPolicies;
    ExtraConfigurationAttributeRequestv6?: ExtraConfigurationAttributeRequestv[];
    WifiCallingAllowedInRoaming?:          boolean;
    WiFiCallingControlsAlliWLanServices?:  boolean;
    SupportContextSwitchOver?:             boolean;
    "5wiServiceMask"?:                     number;
    IKE?:                                  PurpleIKE;
    ExtraConfigurationAttributeRequestv4?: ExtraConfigurationAttributeRequestv[];
    SetHandOverIPv6Prefix?:                boolean;
    TechPolicies?:                         TechPolicy[];
    EPDGResolutionFallbackEnabled?:        boolean;
    SupportCallHandover?:                  boolean;
    FatalActivationErrors?:                number[];
    IPSecMTU?:                             number;
    EmergencyRemoteIdRequired?:            boolean;
    AllowRoamingHandover?:                 boolean;
    SupportIMEIRequest?:                   boolean;
    WiFiCallingIdentityProtectionMethod?:  string;
    AllowHandOverFromDataModeList?:        DataIndicatorOverride[];
    TechSettings?:                         TechSettingsTechSettings;
    UseVirtualPlmnForLocalBreakout?:       boolean;
}

export interface ChildSAs {
    FirstChild: FirstChild;
}

export interface FirstChild {
    ChildProposals:    ChildProposal[];
    InstallPolicies?:  boolean;
    ReplayWindowSize?: number;
}

export interface ChildProposal {
    EncryptionAlgorithm: EncryptionAlgorithmElement[];
    Lifetime:            number;
    IntegrityAlgorithm:  Algorithm[];
    DHGroup?:            number;
    ChildProtocol?:      string;
}

export enum EncryptionAlgorithmElement {
    AES128 = "AES-128",
    AES256 = "AES-256",
}

export enum Algorithm {
    Md596 = "MD5-96",
    Sha196 = "SHA1-96",
    Sha2256 = "SHA2-256",
    Sha2384 = "SHA2-384",
    Sha2512 = "SHA2-512",
}

export interface ExtraConfigurationAttributeRequestv {
    Identifier: number;
    Name:       Name;
    Type:       ExtraConfigurationAttributeRequestv4Type;
}

export enum Name {
    AssignedPCSCFIPv4 = "AssignedPCSCFIPv4",
    AssignedPCSCFIPv6 = "AssignedPCSCFIPv6",
}

export enum ExtraConfigurationAttributeRequestv4Type {
    IPv4Address = "IPv4Address",
    IPv6Address = "IPv6Address",
}

export interface PurpleIKE {
    NATTKeepAliveEnabled?:           boolean;
    DeadPeerDetectionEnabled?:       boolean;
    DeadPeerDetectionMaxRetries?:    number;
    DeadPeerDetectionInterval?:      number;
    LocalIdentifier?:                LocalIdentifier;
    NATTKeepAliveOffload?:           boolean;
    NATTKeepAliveInterval?:          number;
    Proposals:                       IKEProposal[];
    DeadPeerDetectionRetryInterval?: number;
    RemoteAddress?:                  string;
    ValidateRemoteCertificate?:      boolean;
    RemoteCertificateHostname?:      string;
    RemoteCertificateAuthorityName?: string;
    Username?:                       string;
    RemoteIdentifierType?:           string;
    LocalIdentifierType?:            string;
    NonceSize?:                      number;
}

export enum LocalIdentifier {
    AnonymousNaiEpcMncMncMccMcc3GppnetworkOrg = "anonymous@nai.epc.mnc$mnc.mcc$mcc.3gppnetwork.org",
    MaxisNaiEpcMncMncMccMcc3GppnetworkOrg = "maxis@nai.epc.mnc$mnc.mcc$mcc.3gppnetwork.org",
    PseudoIMSINaiEpcMncMncMccMcc3GppnetworkOrg = "PseudoIMSI@nai.epc.mnc$mnc.mcc$mcc.3gppnetwork.org",
    The0$ImsiNaiEpcMnc034MccMcc3GppnetworkOrg = "0$imsi@nai.epc.mnc034.mcc$mcc.3gppnetwork.org",
    The0$ImsiNaiEpcMncMncMccMcc3GppnetworkOrg = "0$imsi@nai.epc.mnc$mnc.mcc$mcc.3gppnetwork.org",
    VhaNaiEpcMncMncMccMcc3GppnetworkOrg = "vha@nai.epc.mnc$mnc.mcc$mcc.3gppnetwork.org",
}

export interface IKEProposal {
    EncryptionAlgorithm:   EncryptionAlgorithmElement[] | EncryptionAlgorithmElement;
    IntegrityAlgorithm:    Algorithm[] | Algorithm;
    DHGroup:               number[] | number;
    AuthenticationMethod?: AuthenticationMethod | Preconditions;
    Lifetime:              number;
    EAPMethod?:            "EAP-AKA";
    PRFAlgorithm:          Algorithm[] | PRFAlgorithmEnum | Algorithm;

}

export enum AuthenticationMethod {
    Certificate = "Certificate",
    None = "None",
}

export enum EAPMethod {
    EAPAka = "EAP-AKA",
}

export enum PRFAlgorithmEnum {
    Md5128 = "MD5-128",
    Sha1160 = "SHA1-160",
    Sha2256 = "SHA2-256",
    Sha2512 = "SHA2-512",
}

export interface TechPolicy {
    policy:      string;
    serviceMask: number;
}

export interface TechSettingsTechSettings {
    FatalActivationErrors:                number[];
    ChildSAs:                             ChildSAs;
    iRatPolicies:                         IRatPolicies;
    ExtraConfigurationAttributeRequestv6: ExtraConfigurationAttributeRequestv[];
    WifiCallingAllowedInRoaming:          boolean;
    WiFiCallingControlsAlliWLanServices:  boolean;
    "5wiServiceMask":                     number;
    IKE:                                  FluffyIKE;
    ExtraConfigurationAttributeRequestv4: ExtraConfigurationAttributeRequestv[];
    SetHandOverIPv6Prefix:                boolean;
    TechPolicies:                         TechPolicy[];
    EPDGResolutionFallbackEnabled:        boolean;
    SupportCallHandover:                  boolean;
}

export interface FluffyIKE {
    NATTKeepAliveEnabled:           boolean;
    DeadPeerDetectionEnabled:       boolean;
    DeadPeerDetectionMaxRetries:    number;
    DeadPeerDetectionInterval:      number;
    LocalIdentifier:                LocalIdentifier;
    NATTKeepAliveOffload:           boolean;
    Proposals:                      IKEProposal[];
    RemoteAddress:                  string;
    DeadPeerDetectionRetryInterval: number;
    ValidateRemoteCertificate:      boolean;
}


export interface IRatPolicies { 
    PreferredTechnology:           RadioTechnologyTypes;
    PreferredTechnologyRoaming?:   RadioTechnologyTypes;
    PreferredTechnologyInRoaming?: RadioTechnologyTypes;
}

export type RadioTechnologyTypes = "cellular" | "ims" | "wifi"
