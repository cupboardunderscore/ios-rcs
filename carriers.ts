//manually assigned carrier websites, mostly from: https://support.apple.com/en-us/109526 (apple should also fix their website, since they are missing/extra carriers and even missing countries)
//i spent way too much time on this, shameless plug uwu https://github.com/cupboardunderscore
//a lot of carriers here are no longer active, i tried to give them, their original urls (unless they were bought by a carrier that isn't already on the list), except one which now linked to a gambling site, which i won't promote
//if any links are broken or wrong, feel free to fix them or tell me c:

export function getsite(id: string)
{
    let temp:string;
    switch (id)
    {
        case "1and1_de":
            temp = "https://1und1.de/";
            break;
        case "2degrees_nz":
            temp = "https://www.2degreesmobile.co.nz/help-and-support/mobile/your-phone-or-device";
            break;
        case "8ta_za":
            temp = "http://www.telkom.co.za/today/help/personal/";
            break;
        case "ACS_US":
            temp = "https://www.alaskacommunications.com";
            break;
        case "AIS_th":
            temp = "http://www.ais.co.th/iPhone";
            break;
        case "APT_tw":
            temp = "https://www.aptg.com.tw/my/";
            break;
        case "APUA_ag":
            temp = "http://www.apua.ag/";
            break;
        case "ASTCA_as":
            temp = "https://www.astca.net/";
            break;
        case "ATN_Viya_vi":
            temp = "https://viya.vi/";
            break;
        case "ATN_bm":
            temp = "https://onecomm.bm/mobile/";
            break;
        case "ATN_gy":
            temp = "https://onecomm.gy/en";
            break;
        case "ATN_tc":
            temp = "https://www.digicelgroup.com/tc/en/mobile.html";
            break;
        case "ATT_CC_US":
            temp = "https://www.consumercellular.com/shopping/choose/device?filters=Apple";
            break;
        case "ATT_Dish_MVNO_US":
            temp = "https://help.boostmobile.com/";
            break;
        case "ATT_FirstNet_US":
            temp = "https://www.firstnet.com/";
            break;
        case "ATT_NR_US":
            temp = "http://www.att.com/esupport/index.jsp?product=wireless";
            break;
        case "ATT_Puretalk_US":
            temp = "https://www.puretalkusa.com/";
            break;
        case "ATT_RedPocket_US":
            temp = "https://www.redpocket.com/";
            break;
        case "ATT_TFW_US":
            temp = "https://www.tracfone.com/techsupport";
            break;
        case "ATT_US":
            temp = "http://www.att.com/esupport/index.jsp?product=wireless";
            break;
        case "ATT_aio_NR_US":
            temp = "https://www.cricketwireless.com/";
            break;
        case "ATT_aio_US":
            temp = "https://www.cricketwireless.com/";
            break;
        case "AVEA_tr":
            temp = "https://www.turktelekom.com.tr/";
            break;
        case "AWCC_af":
            temp = "http://afghan-wireless.com/";
            break;
        case "AffinityClick":
            temp = "http://www.alosim.com/";
            break;
        case "Afrimax_ug":
            temp = "http://afrimaxuganda.com/";
            break;
        case "AirGSM":
            temp = "https://www.airalo.com/";
            break;
        case "Alcom_ax":
            temp = "https://www.alcom.ax/";
            break;
        case "Alfa_lb":
            temp = "https://www.alfa.com.lb/";
            break;
        case "Algar_br":
            temp = "https://algartelecom.com.br/para-voce";
            break;
        case "Aliv_bs":
            temp = "https://www.bealiv.com/";
            break;
        case "Almadar_ly":
            temp = "https://www.almadar.ly/ar/Pages/Home.aspx";
            break;
        case "Altice_LTE_US":
            temp = "https://www.optimum.com/";
            break;
        case "Antel_uy":
            temp = "http://www.antel.com.uy/";
            break;
        case "AppWire_LTE_US":
            temp = "https://www.appalachianwireless.com/our-devices&filter=iphone";
            break;
        case "Appalachian_LTE_US":
            temp = "https://www.appalachianwireless.com/our-devices&filter=iphone";
            break;
        case "Avantel_co":
            temp = "https://www.wom.co/";
            break;
        case "BASE_be":
            temp = "http://www.base.be/en/customer-service.html";
            break;
        case "BICS":
            temp = "https://www.bics.com";
            break;
        case "BNE":
            temp = "https://www.bnesim.com/how-to-install-bne-esim-on-your-iphone/";
            break;
        case "BTC_bw":
            temp = "https://btc.bw/product-category/mobile-phones/iphone/";
            break;
        case "BTL_bz":
            temp = "https://www.digicelgroup.com/bz/en/mobile.html";
            break;
        case "BT_Business_uk":
            temp = "http://bt.com/";
            break;
        case "BT_Consumer_uk":
            temp = "http://bt.com/";
            break;
        case "BT_OnePhone_uk":
            temp = "http://bt.com/";
            break;
        case "Banglalink_bd":
            temp = "https://www.banglalink.net/";
            break;
        case "Batelco_bh":
            temp = "http://batelco.com/support";
            break;
        case "Bell_Lucky_ca":
            temp = "https://www.luckymobile.ca/";
            break;
        case "Bell_Virgin_ca":
            temp = "http://www.virginmobile.ca/en/support/";
            break;
        case "Bell_ca":
            temp = "https://www.bell.ca/Mobility/Apple";
            break;
        case "BhartiAirtel_bf":
            temp = "https://www.orange.bf";
            break;
        case "BhartiAirtel_cd":
            temp = "https://www.airtel.cd/";
            break;
        case "BhartiAirtel_cg":
            temp = "https://www.airtel.cg/";
            break;
        case "BhartiAirtel_ga":
            temp = "https://www.airtel.ga/";
            break;
        case "BhartiAirtel_gh":
            temp = "https://www.at.com.gh/home";
            break;
        case "BhartiAirtel_in":
            temp = "http://www.airtel.in/";
            break;
        case "BhartiAirtel_ke":
            temp = "https://www.airtelkenya.com/";
            break;
        case "BhartiAirtel_lk":
            temp = "https://www.airtel.lk/";
            break;
        case "BhartiAirtel_mg":
            temp = "https://www.airtel.mg/";
            break;
        case "BhartiAirtel_mw":
            temp = "https://www.airtel.mw/";
            break;
        case "BhartiAirtel_ne":
            temp = "https://www.airtel.ne/";
            break;
        case "BhartiAirtel_ng":
            temp = "https://www.airtel.com.ng/";
            break;
        case "BhartiAirtel_rw":
            temp = "https://www.airtel.co.rw/";
            break;
        case "BhartiAirtel_sc":
            temp = "https://www.airtel.sc/";
            break;
        case "BhartiAirtel_sl":
            temp = "https://www.orange.sl/";
            break;
        case "BhartiAirtel_td":
            temp = "https://www.airtel.td/";
            break;
        case "BhartiAirtel_tz":
            temp = "https://www.airtel.co.tz/";
            break;
        case "BhartiAirtel_ug":
            temp = "https://www.airtel.co.ug/";
            break;
        case "BhartiAirtel_zm":
            temp = "https://www.airtel.co.zm/";
            break;
        case "BhutanTelecom_bt":
            temp = "https://www.bt.bt/";
            break;
        case "Bite_lt":
            temp = "https://www.bite.lt/";
            break;
        case "Bite_lv":
            temp = "https://www.bite.lv/lv";
            break;
        case "Bluegrass_LTE_US":
            temp = "https://www.bluegrass.net/phone-lines/";
            break;
        case "Bluesky_as":
            temp = "https://www.bluesky.as/product-category/apple-devices/";
            break;
        case "Bluesky_ws":
            temp = "https://vodafone.com.ws";
            break;
        case "Bouygues_fr":
            temp = "https://www.bouyguestelecom.fr/telephones-mobiles/telephone-portable-apple-iphone";
            break;
        case "CBN_cn":
            temp = "http://www.10099.com.cn/";
            break;
        case "CMCC_CMI":
            temp = "https://esim.cmlink.com/en_US/plp";
            break;
        case "CMCC_HKBN_hk":
            temp = "https://www.hkbn.net/personal/mobile/en/";
            break;
        case "CMCC_cn":
            temp = "http://www.10086.cn/";
            break;
        case "CMCC_hk":
            temp = "https://eshop.hk.chinamobile.com/tc/AppleFamily.html";
            break;
        case "CSL_SunMobile_hk":
            temp = "https://www.sunmobile.com.hk/iphone/carriersupport";
            break;
        case "CSL_hk":
            temp = "https://www.1010.com.hk/en/home";
            break;
        case "CTM_mo":
            temp = "https://www.ctm.net/en-US/person/index.html";
            break;
        case "CW_bs":
            temp = "https://www.btcbahamas.com/mobile/device-catalog";
            break;
        case "CW_pa":
            temp = "https://www.masmovilpanama.com";
            break;
        case "CW_sc":
            temp = "http://www.cwseychelles.com/";
            break;
        case "CW_wi":
            temp = "https://discoverflow.co/";
            break;
        case "CarolinaWest_LTE_US":
            temp = "https://www.carolinawest.com/support/";
            break;
        case "CarrierLab":
            temp = null;
            break;
        case "Celcom_Yoodo_my":
            temp = "https://www.yoodo.com.my";
            break;
        case "Celcom_my":
            temp = "https://www.celcomdigi.com/";
            break;
        case "CellC_za":
            temp = "http://www.cellc.co.za/support/setup/iphone";
            break;
        case "Cellcard_kh":
            temp = "https://www.cellcard.com.kh/en/";
            break;
        case "CellcomWI_LTE_US":
            temp = "http://www.cellcom.com/";
            break;
        case "Cellcom_Golan_il":
            temp = "https://www.golantelecom.co.il/";
            break;
        case "Cellcom_LTE_US":
            temp = "http://www.cellcom.com/";
            break;
        case "Cellcom_il":
            temp = "http://www.cellcom.co.il/";
            break;
        case "CellularSouth_LTE_US":
            temp = "http://www.cspire.com/cms/wireless/support-home/";
            break;
        case "Chariton_LTE_US":
            temp = "https://www.cvalley.net";
            break;
        case "Chat_LTE_US":
            temp = "https://www.chatmobility.com";
            break;
        case "ChinaTelecom_USIM_cn":
            temp = "http://www.189.cn/";
            break;
        case "ChinaTelecom_USIM_mo":
            temp = "http://www.chinatelecom.com.mo/iphone/index.html";
            break;
        case "ChinaTelecom_hk":
            temp = "http://www.ctexcel.com.hk/";
            break;
        case "Chippie_cw":
            temp = "https://discoverflow.co/curacao/chippie/overview";
            break;
        case "Chippie_mf":
            temp = "https://www2.discoverflow.co/st-maarten/chippie/overview";
            break;
        case "Choice_gu":
            temp = "https://www.iconnectguam.com/";
            break;
        case "Chunghwa_tw":
            temp = "https://www.cht.com.tw/en/home/";
            break;
        case "Claro_ar":
            temp = "http://www.claro.com.ar/personas";
            break;
        case "Claro_br":
            temp = "https://www.claro.com.br/";
            break;
        case "Claro_cl":
            temp = "http://www.clarochile.cl/";
            break;
        case "Claro_cr":
            temp = "http://www.claro.cr/";
            break;
        case "Claro_do":
            temp = "http://www.claro.com.do/";
            break;
        case "Claro_gt":
            temp = "http://www.claro.com.gt/";
            break;
        case "Claro_hn":
            temp = "http://www.claro.com.hn/";
            break;
        case "Claro_ni":
            temp = "http://www.claro.com.ni/";
            break;
        case "Claro_pa":
            temp = "https://miclaro.com.pa/";
            break;
        case "Claro_pe":
            temp = "http://www.claro.com.pe/personas/";
            break;
        case "Claro_pr":
            temp = "http://www.claropr.com/";
            break;
        case "Claro_py":
            temp = "http://www.claro.com.py/";
            break;
        case "Claro_sv":
            temp = "http://www.claro.com.sv/";
            break;
        case "Claro_uy":
            temp = "http://www.claro.com.uy/";
            break;
        case "Comcel_co":
            temp = "https://www.claro.com.co/personas/";
            break;
        case "Comviq_se":
            temp = "https://www.comviq.se";
            break;
        case "CopperValleyTelecom_LTE_US":
            temp = "http://www.cvinternet.net/";
            break;
        case "CopperValley_LTE_US":
            temp = "http://www.cvinternet.net/";
            break;
        case "Coriolis_fr":
            temp = "https://www.coriolis.com/";
            break;
        case "CrossWireless_Bravado_LTE_US":
            temp = "https://bravadowireless.com/";
            break;
        case "CrossWireless_LTE_US":
            temp = "https://bravadowireless.com/";
            break;
        case "Cyta_cy":
            temp = "https://www.cyta.com.cy/";
            break;
        case "DNA_fi":
            temp = "http://www.dna.fi/iphone";
            break;
        case "DSTCom_bn":
            temp = "http://www.dst.com.bn/";
            break;
        case "DataPro":
            temp = "https://eskimo.travel/";
            break;
        case "Default":
            temp = null;
            break;
        case "DentWireless":
            temp = "https://www.dentwireless.com/esim";
            break;
        case "Dhiraagu_mv":
            temp = "https://www.dhiraagu.com.mv/";
            break;
        case "DiGi_my":
            temp = "https://www.celcomdigi.com/";
            break;
        case "Dialog_lk":
            temp = "http://www.dialog.lk/dlg/index.jsp";
            break;
        case "Digicel_ag":
            temp = "https://www.digicelgroup.com/ag/en/mobile.html";
            break;
        case "Digicel_ai":
            temp = "https://www.digicelgroup.com/ai/en/mobile.html";
            break;
        case "Digicel_aw":
            temp = "https://www.digicelgroup.com/aw/en/mobile.html";
            break;
        case "Digicel_bb":
            temp = "https://www.digicelgroup.com/bb/en/mobile.html";
            break;
        case "Digicel_bm":
            temp = "http://www.digicelgroup.com/bm/en/mobile.html";
            break;
        case "Digicel_cw":
            temp = "https://www.digicelgroup.com/cw/en/mobile.html";
            break;
        case "Digicel_dm":
            temp = "https://www.digicelgroup.com/dm/en/mobile.html";
            break;
        case "Digicel_fj":
            temp = "https://www.digicelpacific.com/mobile/fj/en/devices/apple-iphone-13promax.html";
            break;
        case "Digicel_gd":
            temp = "https://www.digicelgroup.com/gd/en/mobile.html";
            break;
        case "Digicel_gy":
            temp = "https://www.digicelgroup.com/gy/en/mobile.html";
            break;
        case "Digicel_ht":
            temp = "https://www.digicelgroup.com/ht/fr/mobile.html";
            break;
        case "Digicel_jm":
            temp = "http://www.digicelgroup.com/jm/";
            break;
        case "Digicel_kn":
            temp = "https://www.digicelgroup.com/kn/en/mobile.html";
            break;
        case "Digicel_ky":
            temp = "http://www.digicelcayman.com/";
            break;
        case "Digicel_lc":
            temp = "https://www.digicelgroup.com/lc/en/mobile.html";
            break;
        case "Digicel_mq":
            temp = "https://www.digicelgroup.com/mq/en";
            break;
        case "Digicel_ms":
            temp = "https://www.digicelgroup.com/ms/en/mobile.html";
            break;
        case "Digicel_nr":
            temp = "https://www.digicelgroup.com/nr/en/mobile.html";
            break;
        case "Digicel_pa":
            temp = "https://www.digicelgroup.com/pa/es/movil.html";
            break;
        case "Digicel_pg":
            temp = "https://www.digicelpacific.com/mobile/pg/en.html";
            break;
        case "Digicel_sr":
            temp = "https://www.digicelgroup.com/sr/du/mobile.html";
            break;
        case "Digicel_sv":
            temp = "https://www.digicelgroup.com/sv/es/mobile.html";
            break;
        case "Digicel_tc":
            temp = "https://www.digicelgroup.com/tc/en/mobile.html";
            break;
        case "Digicel_to":
            temp = "http://www.digiceltonga.com/";
            break;
        case "Digicel_tt":
            temp = "http://www.digicelgroup.com/tt/";
            break;
        case "Digicel_vc":
            temp = "https://www.digicelgroup.com/vc/en/mobile.html";
            break;
        case "Digicel_vg":
            temp = "https://www.digicelgroup.com/vg/en/mobile.html";
            break;
        case "Digicel_vu":
            temp = "https://www.digicelgroup.com/vu/en/mobile.html";
            break;
        case "Digicel_ws":
            temp = "http://www.digicelsamoa.com/";
            break;
        case "Dish_MVNO_US":
            temp = "https://help.boostmobile.com/";
            break;
        case "Dish_Ting_US":
            temp = "https://ting.com/";
            break;
        case "Dish_US":
            temp = "https://help.boostmobile.com/";
            break;
        case "Djezzy_dz":
            temp = "https://www.djezzy.dz";
            break;
        case "Docomo_gu":
            temp = "http://www.docomopacific.com/mobile/iphone";
            break;
        case "Docomo_jp":
            temp = "https://www.nttdocomo.co.jp/iphone/";
            break;
        case "EMT_ee":
            temp = "https://pood.telia.ee/apple";
            break;
        case "ENetworks_gy":
            temp = "https://www.enetworks.gy";
            break;
        case "EPlus_de":
            temp = "https://www.o2online.de/service/sim-karte/esim/";
            break;
        case "Eastlink_ca":
            temp = "https://www.eastlink.ca/";
            break;
        case "Econet_zw":
            temp = "https://www.econet.co.zw/";
            break;
        case "Elisa_ee":
            temp = "https://www.elisa.ee/";
            break;
        case "EntelPCS_cl":
            temp = "http://www.entel.cl/";
            break;
        case "Entel_pe":
            temp = "http://www.entel.pe/";
            break;
        case "Etisalat_ae":
            temp = "https://www.etisalat.ae/";
            break;
        case "Etisalat_bj":
            temp = "https://www.eand.com/";
            break;
        case "Etisalat_ci":
            temp = "https://www.moov-africa.ci";
            break;
        case "Etisalat_eg":
            temp = "http://www.etisalat.eg/etisalat/portal/home";
            break;
        case "Etisalat_ng":
            temp = "http://9mobile.com.ng/";
            break;
        case "Etisalat_tz":
            temp = "http://www.zantel.co.tz/";
            break;
        case "FSMTC_fm":
            temp = "https://www.fsmtc.fm";
            break;
        case "FamilyMobile_US":
            temp = "https://www.tracfone.com/techsupport";
            break;
        case "FarEasTone_tw":
            temp = "https://www.fetnet.net/";
            break;
        case "FaroeseTelecom_fo":
            temp = "https://www.ft.fo/";
            break;
        case "Fastweb_it":
            temp = "https://www.fastweb.it/adsl-fibra-ottica/cellulari-chiavette-tablet/?show=apple";
            break;
        case "Fido_ca":
            temp = "http://www.fido.ca/consumer/support";
            break;
        case "Flexiroam":
            temp = "https://www.flexiroam.com/";
            break;
        case "Free_fr":
            temp = "https://assistance.free.fr/";
            break;
        case "Free_mq":
            temp = "https://caraibe.free.fr";
            break;
        case "Free_re":
            temp = "https://mobile.free.re/";
            break;
        case "Free_yt":
            temp = "https://only.yt";
            break;
        case "FreedomMobile_ca":
            temp = "https://www.freedommobile.ca/";
            break;
        case "GCI_US":
            temp = "http://www.gci.com/";
            break;
        case "GTA_gu":
            temp = "http://www.gta.net/support";
            break;
        case "Genesis":
            temp = "https://yesim.app/";
            break;
        case "GigSky_US":
            temp = "https://www.gigsky.com";
            break;
        case "Globacom_bj":
            temp = "https://www.gloworld.com";
            break;
        case "Globacom_gh":
            temp = "http://www.gloworld.com/gh/";
            break;
        case "Globacom_ng":
            temp = "https://www.gloworld.com/ng";
            break;
        case "Globe_ph":
            temp = "http://www.globe.com.ph/";
            break;
        case "GoMobile_mt":
            temp = "https://www.go.com.mt/";
            break;
        case "Grameenphone_bd":
            temp = "https://www.grameenphone.com/";
            break;
        case "Holafly":
            temp = "https://esim.holafly.com/";
            break;
        case "Hutchison_HKBN_hk":
            temp = "https://www.hkbn.net/personal/mobile/en/";
            break;
        case "Hutchison_Wind_it":
            temp = "http://www.tre.it/";
            break;
        case "Hutchison_at":
            temp = "https://www.drei.at/";
            break;
        case "Hutchison_dk":
            temp = "http://www.3.dk/Privat/Kundeservice/";
            break;
        case "Hutchison_hk":
            temp = "http://iphone.three.com.hk/website/eng/home/index.html";
            break;
        case "Hutchison_iD_uk":
            temp = "https://www.idmobile.co.uk/shop/phones/pay-monthly#product_make=Apple&sort=popularity-desc&tradein-deals-toggle=show-tradein-deals";
            break;
        case "Hutchison_ie":
            temp = "https://www.three.ie/buy/phones.html#apple";
            break;
        case "Hutchison_it":
            temp = "http://www.tre.it/";
            break;
        case "Hutchison_lk":
            temp = "https://hutch.lk/";
            break;
        case "Hutchison_mo":
            temp = "http://iphone.three.com.mo/";
            break;
        case "Hutchison_se":
            temp = "https://www.tre.se/handla/mobiltelefoner#apple";
            break;
        case "Hutchison_uk":
            temp = "http://www.three.co.uk/iPhone";
            break;
        case "ICE_cr":
            temp = "http://kolbi.cr/";
            break;
        case "INWI_ma":
            temp = "http://www.inwi.ma/";
            break;
        case "ITE_gu":
            temp = "https://store.ite.net/";
            break;
        case "Ice_no":
            temp = "https://nettbutikk.ice.no/?brand=apple";
            break;
        case "Idea_in":
            temp = "http://www.myvi.in/";
            break;
        case "Iliad_it":
            temp = "https://www.iliad.it/account/smartphone";
            break;
        case "IllinoisValley_LTE_US":
            temp = "https://www.ivcel.com";
            break;
        case "Imagine_bn":
            temp = "https://imagine.com.bn/";
            break;
        case "Indosat_id":
            temp = "https://im3.id/portal/id/indexpersonal";
            break;
        case "Inland_LTE_US":
            temp = "http://inlandcellular.com/";
            break;
        case "Jawwal_ps":
            temp = "https://www.jawwal.ps/";
            break;
        case "JerseyTelecom_je":
            temp = "http://www.jtglobal.com/jersey/";
            break;
        case "KDDI_BIGLOBE_LTE_only_jp":
            temp = "https://www.biglobe.ne.jp";
            break;
        case "KDDI_JCOM_LTE_only_jp":
            temp = "https://www.jcom.co.jp/en/";
            break;
        case "KDDI_LTE_only_jp":
            temp = "http://www.au.kddi.com/iphone/";
            break;
        case "KDDI_UQ_LTE_only_jp":
            temp = "https://www.uqwimax.jp/mobile/english/";
            break;
        case "KPN_Telfort_nl":
            temp = "https://telfort.nl";
            break;
        case "KPN_nl":
            temp = "https://www.kpn.com/";
            break;
        case "KTF_kr":
            temp = "https://product.kt.com/wDic/index.do?CateCode=6002";
            break;
        case "KnowRoaming":
            temp = "https://www.knowroaming.com/";
            break;
        case "Korek_iq":
            temp = "http://www.korektel.com/";
            break;
        case "Kyivstar_ua":
            temp = "http://www.kyivstar.ua/";
            break;
        case "LGU_kr":
            temp = "http://www.uplus.co.kr/";
            break;
        case "LMT_lv":
            temp = "http://www.lmt.lv/iphone/";
            break;
        case "Laotel_la":
            temp = "http://www.laotel.com/";
            break;
        case "Liberty_pr":
            temp = "https://www.libertypr.com/es/";
            break;
        case "LotusFlare":
            temp = "http://www.getnomad.app/";
            break;
        case "LuxGSM_lu":
            temp = "https://www.post.lu/particuliers/mobile/iphone";
            break;
        case "MTC_na":
            temp = "http://www.mtc.com.na/";
            break;
        case "MTN_bj":
            temp = "http://www.mtn.bj/";
            break;
        case "MTN_cg":
            temp = "https://www.mtn.cg";
            break;
        case "MTN_ci":
            temp = "https://www.mtn.ci/";
            break;
        case "MTN_cm":
            temp = "http://www.mtncameroon.net/";
            break;
        case "MTN_cy":
            temp = "https://www.epic.com.cy/";
            break;
        case "MTN_gh":
            temp = "https://mtn.com.gh";
            break;
        case "MTN_ng":
            temp = "https://www.mtn.ng";
            break;
        case "MTN_rw":
            temp = "https://www.mtn.co.rw/";
            break;
        case "MTN_ug":
            temp = "http://www.mtn.co.ug/";
            break;
        case "MTN_za":
            temp = "https://www.mtn.co.za/shop/deals/devices/apple";
            break;
        case "MTN_zm":
            temp = "https://www.mtn.zm";
            break;
        case "MTS_am":
            temp = "https://www.viva.am";
            break;
        case "MTS_by":
            temp = "https://shop.mts.by/phones/Apple/";
            break;
        case "MTS_ca":
            temp = "https://www.bellmts.ca/personal";
            break;
        case "MTS_ru":
            temp = "http://www.mts.ru/";
            break;
        case "MTS_ua":
            temp = "https://www.vodafone.ua/";
            break;
        case "MTX_B2B_lu":
            temp = "https://www.mtxc.eu/en/";
            break;
        case "MTX_lu":
            temp = "https://www.mtxc.eu/en/";
            break;
        case "Magticom_ge":
            temp = "https://www.magticom.ge/";
            break;
        case "ManxTelecom_im":
            temp = "https://www.manxtelecom.com/";
            break;
        case "Maroc_ma":
            temp = "http://www.iam.ma/";
            break;
        case "Mascom_bw":
            temp = "https://www.mascom.bw/";
            break;
        case "Maxis_my":
            temp = "http://www.maxis.com.my/";
            break;
        case "Meditel_ma":
            temp = "http://www.orange.ma/";
            break;
        case "MegaFon_Yota_ru":
            temp = "https://www.yota.ru";
            break;
        case "MegaFon_ru":
            temp = "https://www.megafon.ru";
            break;
        case "Melita_mt":
            temp = "https://www.melita.com/?s=iphone";
            break;
        case "Meteor_ie":
            temp = "https://www.eir.ie/mobile/";
            break;
        case "Metfone_kh":
            temp = "https://metfone.com.kh/en/mobile";
            break;
        case "Mirs_il":
            temp = "https://hotstore.hotmobile.co.il/catalogsearch/result/?q=iphone";
            break;
        case "MobiCom_mn":
            temp = "https://www.mobicom.mn/mn/";
            break;
        case "Mobifone_vn":
            temp = "http://www.mobifone.vn/";
            break;
        case "Mobiland_ad":
            temp = "http://www.andorratelecom.ad/";
            break;
        case "MobileOne_sg":
            temp = "https://www.m1.com.sg/";
            break;
        case "Mobilink_pk":
            temp = "https://www.jazz.com.pk/";
            break;
        case "Mobilis_dz":
            temp = "http://www.mobilis.dz/";
            break;
        case "Mobistar_be":
            temp = "https://e-services.orange.be/fr/iphoneproduct";
            break;
        case "Mobitel_lk":
            temp = "https://www.mobitel.lk";
            break;
        case "MonacoTel_mc":
            temp = "https://www.monaco-telecom.mc/";
            break;
        case "Moov_ga":
            temp = "https://www.moov-africa.ga/Pages/index.aspx";
            break;
        case "Movicel_ao":
            temp = "https://movicel.co.ao/";
            break;
        case "Multibyte":
            temp = "https://www.multi-byte.com";
            break;
        case "MySIM":
            temp = "https://www.upesim.com/en/";
            break;
        case "NRJ_fr":
            temp = "https://www.nrjmobile.fr/iphone.html";
            break;
        case "NWM_LTE_US":
            temp = "https://www.nwmcell.com";
            break;
        case "Natcom_ht":
            temp = "https://natcom.com.ht/";
            break;
        case "Ncell_np":
            temp = "https://ncell.com.np";
            break;
        case "NemontWireless_LTE_US":
            temp = "https://www.nemont.com/";
            break;
        case "Nemont_LTE_US":
            temp = "https://www.nemont.com/";
            break;
        case "NepalTelecom_np":
            temp = "https://www.ntc.net.np";
            break;
        case "NetCom_no":
            temp = "https://telia.no/";
            break;
        case "NetworkNorway_no":
            temp = "https://nettbutikk.onecall.no/?b=APPLE";
            break;
        case "NexTech_LTE_US":
            temp = "https://www.nex-techwireless.com/";
            break;
        case "Nextel_cl":
            temp = "http://www.wom.cl/";
            break;
        case "Nextel_mx":
            temp = "https://www.att.com.mx/";
            break;
        case "NonPublicNetwork":
            temp = null;
            break;
        case "Nova_is":
            temp = "http://www.nova.is/";
            break;
        case "O2_1and1_de":
            temp = "https://1und1.de/";
            break;
        case "O2_Debitel_de":
            temp = "www.md.de";
            break;
        case "O2_Germany":
            temp = "https://www.o2online.de/service/sim-karte/esim/";
            break;
        case "O2_Giffgaff_UK":
            temp = "https://www.giffgaff.com/";
            break;
        case "O2_Prepaid_UK":
            temp = "http://www.o2.co.uk/iphone";
            break;
        case "O2_Sky_uk":
            temp = "https://www.sky.com/";
            break;
        case "O2_Tesco_UK":
            temp = "https://www.tescomobile.com/shop/apple";
            break;
        case "O2_UK":
            temp = "http://www.o2.co.uk/iphone";
            break;
        case "O2_cz":
            temp = "https://www.o2.cz/osobni/pece-a-podpora/";
            break;
        case "O2_ie":
            temp = "https://www.three.ie/buy/phones.html#apple";
            break;
        case "O2_sk":
            temp = "https://www.o2.sk/";
            break;
        case "OPT_nc":
            temp = "http://www.opt.nc/";
            break;
        case "OQCFactoryMultimode":
            temp = null;
            break;
        case "OQCFactoryUMTS":
            temp = null;
            break;
        case "Oi_BrT_br":
            temp = "http://www.oi.com.br/";
            break;
        case "Oi_br":
            temp = "http://www.oi.com.br/";
            break;
        case "Omantel_om":
            temp = "https://www.omantel.om/";
            break;
        case "Omnitel_lt":
            temp = "https://www.telia.lt/prekes/mobilieji-telefonai/apple";
            break;
        case "One_at":
            temp = "https://www.drei.at/";
            break;
        case "OpenMobile_LTE_pr":
            temp = "http://www.openmobilepr.com/";
            break;
        case "Optimus_pt":
            temp = "http://www.nos.pt/particulares/Pages/home.aspx";
            break;
        case "Optus_Virgin_au":
            temp = "http://www.optus.com.au/iphone";
            break;
        case "Optus_au":
            temp = "http://www.optus.com.au/iphone";
            break;
        case "Ora_pf":
            temp = "https://www.ora.pf/telephones/?yith_wcan=1&product_cat=iphone&orderby=date";
            break;
        case "Orange_France":
            temp = "http://iphone.orange.fr/";
            break;
        case "Orange_am":
            temp = "https://www.ucom.am/";
            break;
        case "Orange_bw":
            temp = "http://www.orange.co.bw/";
            break;
        case "Orange_cd":
            temp = "http://www.orange.cd/";
            break;
        case "Orange_cf":
            temp = "https://www.orangerca.com/";
            break;
        case "Orange_ch":
            temp = "https://www.salt.ch/en/";
            break;
        case "Orange_ci":
            temp = "http://www.orange.ci/";
            break;
        case "Orange_cm":
            temp = "http://www.orange.cm/#";
            break;
        case "Orange_do":
            temp = "https://www.altice.com.do/";
            break;
        case "Orange_es":
            temp = "http://www.orange.es/";
            break;
        case "Orange_gn":
            temp = "https://www.orange-guinee.com/";
            break;
        case "Orange_gw":
            temp = "https://www.orange-bissau.com/";
            break;
        case "Orange_il":
            temp = "http://www.partner.co.il/";
            break;
        case "Orange_jo":
            temp = "https://www.orange.jo/";
            break;
        case "Orange_ke":
            temp = "https://telkom.co.ke/";
            break;
        case "Orange_li":
            temp = "salt.li";
            break;
        case "Orange_lr":
            temp = "http://www.orange.com.lr/";
            break;
        case "Orange_md":
            temp = "https://www.orange.md/";
            break;
        case "Orange_mg":
            temp = "https://www.orange.mg/";
            break;
        case "Orange_ml":
            temp = "https://www.orangemali.com/";
            break;
        case "Orange_mq":
            temp = "https://caraibe.orange.fr/";
            break;
        case "Orange_mu":
            temp = "https://www.myt.mu/mobile/";
            break;
        case "Orange_ne":
            temp = "https://www.zamanitelecom.com";
            break;
        case "Orange_pl":
            temp = "https://www.orange.pl/view/esim";
            break;
        case "Orange_re":
            temp = "http://reunion.orange.fr/";
            break;
        case "Orange_ro":
            temp = "http://www.orange.ro/iphone/index.html";
            break;
        case "Orange_sk":
            temp = "http://orange.sk/";
            break;
        case "Orange_sn":
            temp = "http://www.orange.sn/catalogue/mobile/";
            break;
        case "Orange_tn":
            temp = "http://www.orange.tn/";
            break;
        case "Orange_uk":
            temp = "http://ee.co.uk/help";
            break;
        case "Orange_vu":
            temp = "https://vodafone.com.vu";
            break;
        case "OtherKnown":
            temp = null;
            break;
        case "PCCW_hk":
            temp = "https://www.1010.com.hk/en/home";
            break;
        case "PNCC_pw":
            temp = "https://www.pnccpalau.com/products-and-services/palaucel";
            break;
        case "PTCI_LTE_US":
            temp = "https://www.ptci.net";
            break;
        case "PTCI_LTE_only_US":
            temp = "https://www.ptci.net";
            break;
        case "Panhandle_US":
            temp = "https://www.ptci.net/about/contact/";
            break;
        case "Pelephone_il":
            temp = "http://www.pelephone.co.il/iphone";
            break;
        case "Personal_ar":
            temp = "https://www.personal.com.ar/";
            break;
        case "PioneerCellular_LTE_US":
            temp = "https://gopioneer.com";
            break;
        case "Pioneer_LTE_US":
            temp = "https://gopioneer.com";
            break;
        case "Play_pl":
            temp = "http://www.play.pl/";
            break;
        case "Polkomtel_pl":
            temp = "https://www.plus.pl/";
            break;
        case "Porta_ec":
            temp = "http://www.claro.com.ec/";
            break;
        case "PrimeMobile":
            temp = "https://primetelecom.com.au/prime-mobile/";
            break;
        case "PrimeTel_cy":
            temp = "http://primetel.com.cy/";
            break;
        case "Progresif_bn":
            temp = "https://www.progresif.com";
            break;
        case "Proximus_be":
            temp = "http://www.proximus.be/en/personal/?";
            break;
        case "Qtel_dz":
            temp = "http://www.ooredoo.dz/";
            break;
        case "Qtel_iq":
            temp = "https://www.asiacell.com/";
            break;
        case "Qtel_kw":
            temp = "http://www.ooredoo.com.kw/en/";
            break;
        case "Qtel_mm":
            temp = "http://www.ooredoo.com.mm/";
            break;
        case "Qtel_mv":
            temp = "https://ooredoo.mv/";
            break;
        case "Qtel_om":
            temp = "https://shop.ooredoo.om/";
            break;
        case "Qtel_ps":
            temp = "https://www.ooredoo.ps/";
            break;
        case "Qtel_qa":
            temp = "http://www.ooredoo.qa/";
            break;
        case "Qtel_tn":
            temp = "http://www.ooredoo.tn/";
            break;
        case "Rakuten_jp":
            temp = "https://network.mobile.rakuten.co.jp/product/iphone/";
            break;
        case "RedteaMobile":
            temp = "http://www.redteamobile.com/";
            break;
        case "RelianceJio_in":
            temp = "https://www.jio.com/";
            break;
        case "Robi_BhartiAirtel_bd":
            temp = "https://www.bd.airtel.com/en/";
            break;
        case "Robi_bd":
            temp = "http://www.robi.com.bd/";
            break;
        case "Rogers_Cityfone_ca":
            temp = "https://www.cityfone.net/";
            break;
        case "Rogers_ca":
            temp = "http://www.rogers.com/consumer/wireless";
            break;
        case "Rogers_chatr_ca":
            temp = "https://www.chatrwireless.com/";
            break;
        case "Roshan_af":
            temp = "https://www.roshan.af/";
            break;
        case "SFR_Caraibe_mq":
            temp = "https://www.sfrcaraibe.fr/mtq/?site=mtq";
            break;
        case "SFR_LPM_fr":
            temp = "https://mobile.lapostemobile.fr/selection/nos-telephones-portables/ios/20004";
            break;
        case "SFR_fr":
            temp = "https://www.sfr.fr/telephonie-mobile/iphone/";
            break;
        case "SFR_re":
            temp = "http://www.sfr.re/index.jspz";
            break;
        case "SKT_kr":
            temp = "http://www.tworld.co.kr/tglink.jsp?urlname=wtg_0001";
            break;
        case "SPT_wf":
            temp = "https://www.spt.wf/";
            break;
        case "STC_sa":
            temp = "https://www.stc.com.bh/content/contact-help-support";
            break;
        case "Safaricom_ke":
            temp = "http://www.safaricom.co.ke/";
            break;
        case "Sasktel_Lum_ca":
            temp = "https://lum.ca";
            break;
        case "Sasktel_ca":
            temp = "https://support.sasktel.com";
            break;
        case "Saunalahti_fi":
            temp = "http://saunalahti.fi/";
            break;
        case "Seatel_kh":
            temp = "https://www.yes.com.kh";
            break;
        case "Setar_aw":
            temp = "http://setar.aw/";
            break;
        case "Shaw_ca":
            temp = "https://shop.shawmobile.ca/en-CA/devices?brand=Apple";
            break;
        case "Shinetown":
            temp = "https://www.airsime.com/";
            break;
        case "SilverStar_LTE_US":
            temp = "https://www.silverstar.com";
            break;
        case "Siminn_is":
            temp = "https://vefverslun.siminn.is/vorur/apple_iphone";
            break;
        case "SingTel_sg":
            temp = "https://www.singtel.com/personal/support#";
            break;
        case "Sky_ie":
            temp = "https://www.sky.com/ie";
            break;
        case "SmarTone_HKBN_hk":
            temp = "https://www.hkbn.net/personal/mobile/en/";
            break;
        case "SmarTone_hk":
            temp = "http://www.smartone.com/en/";
            break;
        case "SmarTone_mo":
            temp = "https://www.smartone.com/mo/tc/";
            break;
        case "Smart_bz":
            temp = "https://smart-bz.com/";
            break;
        case "Smart_kh":
            temp = "http://www.smart.com.kh/";
            break;
        case "Smart_ph":
            temp = "https://smart.com.ph/corporate";
            break;
        case "Smartfren_id":
            temp = "https://www.smartfren.com";
            break;
        case "Softbank_BBB_jp":
            temp = "https://www.bbbackbone.co.jp/en_index/";
            break;
        case "Softbank_YMobile_jp":
            temp = "https://www.ymobile.jp";
            break;
        case "Softbank_jp":
            temp = "http://www.softbank.jp/mobile/iphone/";
            break;
        case "Sonera_fi":
            temp = "https://www.telia.fi/";
            break;
        case "Soracom":
            temp = "https://soracommobile.com/";
            break;
        case "Sprint_Boost_ISIM_LTE_US":
            temp = "https://help.boostmobile.com/";
            break;
        case "Sprint_ISIM_LTE_US":
            temp = "http://sprint.com/";
            break;
        case "Sprint_Virgin_ISIM_LTE_US":
            temp = "http://virginmobileusa.com/";
            break;
        case "StarHub_giga_sg":
            temp = "https://giga.com.sg";
            break;
        case "StarHub_sg":
            temp = "https://www.starhub.com/personal/support/contact-us.html";
            break;
        case "StrataNetwork_LTE_US":
            temp = "https://www.stratanetworks.com/";
            break;
        case "Strata_LTE_US":
            temp = "https://www.stratanetworks.com/";
            break;
        case "Sunrise_ch":
            temp = "http://www1.sunrise.ch/iphone/support";
            break;
        case "Sure_im":
            temp = "https://web.sure.com/isleofman";
            break;
        case "Swisscom_Wingo_ch":
            temp = "https://www.wingo.ch/de";
            break;
        case "Swisscom_ch":
            temp = "https://www.swisscom.ch/en/residential.html";
            break;
        case "TCC_to":
            temp = "https://www.tcc.to/";
            break;
        case "TDC_dk":
            temp = "https://tdcnet.com/mobile-network/";
            break;
        case "TELE_gl":
            temp = "https://www.tusass.gl/en/";
            break;
        case "THC_LTE_US":
            temp = "https://www.thumbcellular.com/";
            break;
        case "TIM_Italy":
            temp = "https://www.tim.it/assistenza";
            break;
        case "TIM_Kena_it":
            temp = "https://www.kenamobile.it";
            break;
        case "TIM_br":
            temp = "http://www.tim.com.br/";
            break;
        case "TMN_pt":
            temp = "https://www.meo.pt/";
            break;
        case "TMobile_Boost_US":
            temp = "https://help.boostmobile.com/";
            break;
        case "TMobile_CC_US":
            temp = "https://www.consumercellular.com/shopping/choose/device?filters=Apple";
            break;
        case "TMobile_Germany":
            temp = "http://www.t-mobile.de/handy-hilfe/0,23626,26974-_,00.html#/apple";
            break;
        case "TMobile_MVNO_US":
            temp = "https://www.t-mobile.com/support/";
            break;
        case "TMobile_MetroPCS_US":
            temp = "https://www.metrobyt-mobile.com/cell-phones/brand/apple";
            break;
        case "TMobile_TFW_Simple_US":
            temp = "https://www.tracfone.com/techsupport";
            break;
        case "TMobile_Ting_US":
            temp = "https://ting.com/";
            break;
        case "TMobile_US":
            temp = "https://www.t-mobile.com/support/";
            break;
        case "TMobile_UltraMint_US":
            temp = "https://www.ultramobile.com/faq/";
            break;
        case "TMobile_al":
            temp = "https://www.one.al/premium-phones/?q_facetTrail=18120%253AApple";
            break;
        case "TMobile_at":
            temp = "https://www.magenta.at/";
            break;
        case "TMobile_bg":
            temp = "https://www.yettel.bg/bg/private/device/list/device_smart_phone/field_device_brand/apple-14801";
            break;
        case "TMobile_cz":
            temp = "http://t-mobile.cz/";
            break;
        case "TMobile_gr":
            temp = "https://www.cosmote.gr/";
            break;
        case "TMobile_hr":
            temp = "https://www.hrvatskitelekom.hr/";
            break;
        case "TMobile_hu":
            temp = "http://t-mobile.hu/";
            break;
        case "TMobile_me":
            temp = "http://www.telekom.me/";
            break;
        case "TMobile_mk":
            temp = "https://www.telekom.mk/";
            break;
        case "TMobile_nl":
            temp = "https://www.odido.nl/iphone/iphone-15-serie?utm_source=t-mobile&utm_medium=website&utm_campaign=redirect-mobile-b2c-sales&utm_content=iphone";
            break;
        case "TMobile_pl":
            temp = "http://www.t-mobile.pl/pl/indywidualni/telefony/iphone4";
            break;
        case "TMobile_ro":
            temp = "https://www.telekom.ro/";
            break;
        case "TMobile_sk":
            temp = "http://www.telekom.sk/";
            break;
        case "TMobile_uk":
            temp = "http://ee.co.uk/help";
            break;
        case "TaiwanMobile_tw":
            temp = "https://www.taiwanmobile.com/";
            break;
        case "Talkmobile_uk":
            temp = "https://talkmobile.co.uk";
            break;
        case "Tango":
            temp = "https://tango-networks.com";
            break;
        case "Tango_lu":
            temp = "http://www.tango.lu/page.php?url=residential/helpsupport/contacttango/customerservice";
            break;
        case "TashiCell_bt":
            temp = "http://www.tashicell.com/";
            break;
        case "Tbaytel_ca":
            temp = "http://www.tbaytel.net/support/gethelp";
            break;
        case "Telcel_AztecaMovil_mx":
            temp = "https://ouimovil.com";
            break;
        case "Telcel_mx":
            temp = "http://www.telcel.com/";
            break;
        case "Tele2_Altel_kz":
            temp = "https://altel.kz/new";
            break;
        case "Tele2_Sberbank_ru":
            temp = "https://sbermobile.ru/";
            break;
        case "Tele2_ee":
            temp = "https://tele2.ee/";
            break;
        case "Tele2_kz":
            temp = "https://tele2.kz/new";
            break;
        case "Tele2_lt":
            temp = "https://tele2.lt/";
            break;
        case "Tele2_lv":
            temp = "https://www.tele2.lv/";
            break;
        case "Tele2_ru":
            temp = "https://t2.ru";
            break;
        case "Tele2_se":
            temp = "http://www.tele2.se/support/";
            break;
        case "TelecomCook_ck":
            temp = "https://www.vodafone.co.ck/";
            break;
        case "TelecomEgypt_eg":
            temp = "https://www.te.eg/";
            break;
        case "TelecomLiechtenstein_li":
            temp = "https://www.fl1.li";
            break;
        case "TelecomNamibia_na":
            temp = "http://www.telecom.na/";
            break;
        case "Telecom_Skinny_nz":
            temp = "https://www.skinny.co.nz/";
            break;
        case "Telecom_nz":
            temp = "http://www.spark.co.nz/";
            break;
        case "Telefonica_Tuenti_ar":
            temp = "https://www.tuenti.com.ar";
            break;
        case "Telefonica_es":
            temp = "http://www.movistar.es/iphone";
            break;
        case "TelekomSlovenije_ba":
            temp = "https://www.bhtelecom.ba/";
            break;
        case "TelekomSlovenije_gi":
            temp = "http://www.gibtele.com/";
            break;
        case "TelekomSlovenije_mk":
            temp = "http://www.one.mk/";
            break;
        case "TelekomSlovenije_xk":
            temp = "https://www.ipko.com/";
            break;
        case "TelekomSrbija_ba":
            temp = "http://www.mtel.ba/";
            break;
        case "TelekomSrbija_me":
            temp = "http://mtel.me/";
            break;
        case "TelekomSrbija_rs":
            temp = "https://mts.rs";
            break;
        case "Telekom_si":
            temp = "https://www.telekom.si/zasebni-uporabniki";
            break;
        case "Telemach_hr":
            temp = "https://telemach.hr/";
            break;
        case "Telemach_si":
            temp = "https://telemach.si/";
            break;
        case "Telenet_be":
            temp = "https://www2.telenet.be/residential/en";
            break;
        case "Telenor_dk":
            temp = "https://www.telenor.dk/";
            break;
        case "Telenor_hu":
            temp = "https://www.yettel.hu/mobiltelefon/apple";
            break;
        case "Telenor_me":
            temp = "https://1.me";
            break;
        case "Telenor_mm":
            temp = "https://www.atom.com.mm/en";
            break;
        case "Telenor_no":
            temp = "http://www.telenor.no/";
            break;
        case "Telenor_pk":
            temp = "http://www.telenor.com.pk/";
            break;
        case "Telenor_rs":
            temp = "https://www.yettel.rs/webshop/sr/Privatni-korisnici/Mobilni-telefoni/?purchase=cosmos&tpackage=370&brand=Apple";
            break;
        case "Telenor_se":
            temp = "http://www.telenor.se/privat/kundservice/index.html";
            break;
        case "Telesur_sr":
            temp = "https://www.telesur.sr";
            break;
        case "Telia_az":
            temp = "https://www.azercell.com/en/";
            break;
        case "Telia_dk":
            temp = "https://www.telia.dk/";
            break;
        case "Telia_ge":
            temp = "https://silknet.com/en/media/singleview/1607-sheidzine-iphone-14-pro-da-iphone-14-pro-max-silknetshi";
            break;
        case "Telia_kz":
            temp = "https://www.kcell.kz/en";
            break;
        case "Telia_md":
            temp = "http://www.moldcell.md/";
            break;
        case "Telia_se":
            temp = "https://www.telia.se/";
            break;
        case "Telia_tj":
            temp = "https://www.tcell.tj/";
            break;
        case "Telkomsel_id":
            temp = "https://www.telkomsel.com";
            break;
        case "Telma_mg":
            temp = "https://www.telma.mg/";
            break;
        case "Telstra_au":
            temp = "http://www.telstra.com.au/iphone";
            break;
        case "Telus_Koodo_ca":
            temp = "https://www.koodomobile.com/";
            break;
        case "Telus_PCMobile_ca":
            temp = "http://www.pcmobile.ca/";
            break;
        case "Telus_PublicMobile_ca":
            temp = "https://www.publicmobile.ca/en/";
            break;
        case "Telus_ca":
            temp = "https://www.telus.com/en/";
            break;
        case "Tigo_bo":
            temp = "http://www.tigo.com.bo/";
            break;
        case "Tigo_cd":
            temp = "https://www.millicom.com";
            break;
        case "Tigo_co":
            temp = "http://www.tigo.com.co/";
            break;
        case "Tigo_gh":
            temp = "https://www.at.com.gh/home";
            break;
        case "Tigo_gt":
            temp = "http://www.tigo.com.gt/";
            break;
        case "Tigo_hn":
            temp = "http://www.tigo.com.hn/";
            break;
        case "Tigo_mu":
            temp = "https://www.emtel.com/";
            break;
        case "Tigo_py":
            temp = "http://www.tigo.com.py/";
            break;
        case "Tigo_rw":
            temp = "https://www.airtel.co.rw/";
            break;
        case "Tigo_sn":
            temp = "https://www.free.sn/";
            break;
        case "Tigo_sv":
            temp = "http://www.tigo.com.sv/";
            break;
        case "Tigo_td":
            temp = "https://www.td.tigo.com/";
            break;
        case "Tigo_tz":
            temp = "https://www.tigo.co.tz/";
            break;
        case "TimorTelecom_tl":
            temp = "https://timortelecom.tl";
            break;
        case "Transatel":
            temp = "https://www.transatel.com";
            break;
        case "TriangleMobile_LTE_US":
            temp = "https://itstrianglemobile.com";
            break;
        case "TrueH_th":
            temp = "http://www.true.th/";
            break;
        case "True_th":
            temp = "http://www.true.th/";
            break;
        case "Truphone_US":
            temp = "https://www.1global.com";
            break;
        case "Tuntel_tn":
            temp = "http://www.tunisietelecom.tn/particulier/";
            break;
        case "Turkcell_KKTCELL_tr":
            temp = "https://www.kktcell.com";
            break;
        case "Turkcell_lifecell_ua":
            temp = "http://www.lifecell.ua/";
            break;
        case "Turkcell_tr":
            temp = "http://www.turkcell.com.tr/anasayfa";
            break;
        case "UMobile_my":
            temp = "http://www.u.com.my/";
            break;
        case "USCellular_LTE_US":
            temp = "https://www.uscellular.com/support";
            break;
        case "UZTelecom_uz":
            temp = "https://uztelecom.uz/uz";
            break;
        case "Ufone_pk":
            temp = "http://www.ufone.com/";
            break;
        case "Umniah_jo":
            temp = "https://www.umniah.com/";
            break;
        case "Unicom_cn":
            temp = "http://www.chinaunicom.com.cn";
            break;
        case "Unicom_hk":
            temp = "https://www.chinaunicom.com.hk/en/global/home.php";
            break;
        case "UnionWireless_US":
            temp = "http://www.unionwireless.com/ContactUs.aspx";
            break;
        case "UnitedWireless_LTE_US":
            temp = "https://unitedwireless.com/support";
            break;
        case "Unitel_ao":
            temp = "https://unitel.ao";
            break;
        case "Unitel_la":
            temp = "http://www.unitel.com.la/";
            break;
        case "Unitel_mn":
            temp = "https://www.unitel.mn/unitel/";
            break;
        case "Unknown":
            temp = null;
            break;
        case "Uros":
            temp = "https://goodspeed.io";
            break;
        case "VOX_lu":
            temp = "http://www.orange.lu/";
            break;
        case "Verizon_Charter_LTE_US":
            temp = "https://www.spectrum.com/mobile.html";
            break;
        case "Verizon_Comcast_LTE_US":
            temp = "http://www.xfinity.com/mobile";
            break;
        case "Verizon_Core_Visible_LTE_US":
            temp = "https://www.visible.com/";
            break;
        case "Verizon_Cox_LTE_US":
            temp = "https://www.cox.com/residential/mobile.html";
            break;
        case "Verizon_Credo_LTE_US":
            temp = "https://www.credomobile.com/";
            break;
        case "Verizon_LTE_US":
            temp = "http://www.verizonwireless.com/support/";
            break;
        case "Verizon_Response_LTE_US":
            temp = "http://www.verizonwireless.com/support/";
            break;
        case "Verizon_TFW_LTE_US":
            temp = "https://www.tracfone.com/techsupport";
            break;
        case "Verizon_Ting_LTE_US":
            temp = "https://ting.com/";
            break;
        case "Verizon_Visible_LTE_US":
            temp = "https://www.visible.com/";
            break;
        case "Viaero_US":
            temp = "http://www.viaero.com/";
            break;
        case "Vibo_tw":
            temp = "http://www.vibo.com.tw/";
            break;
        case "Videotron_Fizz_ca":
            temp = "https://fizz.ca/en";
            break;
        case "Videotron_ca":
            temp = "https://videotron.com/en";
            break;
        case "Viettel_vn":
            temp = "http://www.vietteltelecom.vn/";
            break;
        case "VimpelCom_Izi_kz":
            temp = "https://izi.me/";
            break;
        case "VimpelCom_am":
            temp = "https://www.telecomarmenia.am/hy/";
            break;
        case "VimpelCom_ge":
            temp = "https://cellfie.ge/en";
            break;
        case "VimpelCom_kg":
            temp = "https://beeline.kg/";
            break;
        case "VimpelCom_kz":
            temp = "https://beeline.kz/";
            break;
        case "VimpelCom_ru":
            temp = "https://beellne.ru";
            break;
        case "VimpelCom_tj":
            temp = "https://zet-mobile.com/";
            break;
        case "VimpelCom_uz":
            temp = "https://beeline.uz/";
            break;
        case "VinaPhone_vn":
            temp = "https://vinaphone.com.vn/";
            break;
        case "Vini_pf":
            temp = "https://www.vini.pf/mobile";
            break;
        case "Viva_bh":
            temp = "https://www.stc.com.bh/content/contact-help-support";
            break;
        case "Viva_kw":
            temp = "https://www.stc.com.kw/";
            break;
        case "Vivacom_bg":
            temp = "https://www.vivacom.bg/online/en/apple";
            break;
        case "Vodafone_1and1_de":
            temp = "https://1und1.de/";
            break;
        case "Vodafone_Ho_it":
            temp = "https://www.ho-mobile.it";
            break;
        case "Vodafone_Lebara_au":
            temp = "https://www.lebara.com.au";
            break;
        case "Vodafone_Lowi_es":
            temp = "https://www.lowi.es";
            break;
        case "Vodafone_al":
            temp = "https://www.vodafone.al/vodafone/Suport_2208_1.php";
            break;
        case "Vodafone_au":
            temp = "https://www.vodafone.com.au/mobile/mobile-phones/apple";
            break;
        case "Vodafone_cd":
            temp = "https://www.vodacom.cd/particulier/homepage";
            break;
        case "Vodafone_cz":
            temp = "https://www.vodafone.cz/telefony";
            break;
        case "Vodafone_de":
            temp = "http://www.vodafone.de/privat/tarife/iphone.html";
            break;
        case "Vodafone_eg":
            temp = "https://web.vodafone.com.eg/en/";
            break;
        case "Vodafone_es":
            temp = "http://www.vodafone.es/iphone";
            break;
        case "Vodafone_fj":
            temp = "https://www.vodafone.com.fj/";
            break;
        case "Vodafone_gr":
            temp = "https://www.vodafone.gr/";
            break;
        case "Vodafone_hu":
            temp = "https://www.vodafone.hu/segithetunk";
            break;
        case "Vodafone_ie":
            temp = "http://www.vodafone.ie/";
            break;
        case "Vodafone_in":
            temp = "http://www.myvi.in/";
            break;
        case "Vodafone_is":
            temp = "http://www.vodafone.is/";
            break;
        case "Vodafone_it":
            temp = "http://www.vodafone.it/";
            break;
        case "Vodafone_ki":
            temp = "https://www.vodafone.com.ki";
            break;
        case "Vodafone_ls":
            temp = "https://www.vodacom.co.ls/";
            break;
        case "Vodafone_mt":
            temp = "https://www.epic.com.mt";
            break;
        case "Vodafone_mz":
            temp = "http://www.vm.co.mz/";
            break;
        case "Vodafone_nl":
            temp = "http://www.vodafone.nl/iphone";
            break;
        case "Vodafone_nz":
            temp = "http://www.vodafone.co.nz/iphone/support/";
            break;
        case "Vodafone_om":
            temp = "https://www.vodafone.om/";
            break;
        case "Vodafone_pt":
            temp = "https://www.vodafone.pt/loja/telemoveis.html?i_id=quicklinks-hploja-telemoveis-2&segment=consumer&brand=Apple";
            break;
        case "Vodafone_qa":
            temp = "https://www.vodafone.qa/ar/help/faqs";
            break;
        case "Vodafone_ro":
            temp = "https://www.vodafone.ro/personal/asistenta/";
            break;
        case "Vodafone_tr":
            temp = "http://www.vodafone.com.tr/";
            break;
        case "Vodafone_tz":
            temp = "https://vodacom.co.tz/";
            break;
        case "Vodafone_uk":
            temp = "https://support.vodafone.co.uk/";
            break;
        case "Vodafone_za":
            temp = "http://www.vodacom.co.za/";
            break;
        case "WCW_US":
            temp = "http://www.westcentral.com/faqssupport.html";
            break;
        case "WOM_co":
            temp = "https://www.wom.co/";
            break;
        case "Warid_pk":
            temp = "https://www.jazz.com.pk/";
            break;
        case "Webbing":
            temp = "https://www.iamwebbing.com/esim-ios-iphone-dual-sim-plan/";
            break;
        case "Wind_Very_it":
            temp = "https://verymobile.it/";
            break;
        case "Wind_gr":
            temp = "https://nova.gr/syskeues/smartphones-me-programmata-kinitis#&brands=1&scroll=1";
            break;
        case "Wonet":
            temp = "http://www.usims.com/";
            break;
        case "XL_id":
            temp = "https://www.xlaxiata.co.id/en";
            break;
        case "Xplornet_ca":
            temp = "https://www.xplornet.com/";
            break;
        case "Yes_my":
            temp = "https://www.yes.my/";
            break;
        case "Yoigo_Masmovil_es":
            temp = "https://www.masmovil.es/";
            break;
        case "Yoigo_Pepephone_es":
            temp = "https://www.pepephone.com/descarga-tu-esim";
            break;
        case "Yoigo_es":
            temp = "https://www.yoigo.com/ayuda";
            break;
        case "Zain_SalamMobile_sa":
            temp = "https://salammobile.sa/";
            break;
        case "Zain_bh":
            temp = "https://www.bh.zain.com/en";
            break;
        case "Zain_iq":
            temp = "http://www.iq.zain.com/en/web/iraq/useful-numbers";
            break;
        case "Zain_jo":
            temp = "http://www.jo.zain.com/";
            break;
        case "Zain_kw":
            temp = "https://www.kw.zain.com/";
            break;
        case "Zain_lb":
            temp = "http://www.touch.com.lb/autoforms/portal/touch/support";
            break;
        case "Zain_sa":
            temp = "http://www.sa.zain.com/autoforms/portal/home/support";
            break;
        case "Zeop_re":
            temp = "https://www.zeop.re";
            break;
        case "Zong_pk":
            temp = "https://www.zong.com.pk/";
            break;
        case "bMobile_pg":
            temp = "https://www.bmobile.com.pg/";
            break;
        case "bMobile_sb":
            temp = "https://www.bmobile.com.sb/devices/1";
            break;
        case "dtac_th":
            temp = "https://www.dtac.co.th/en/";
            break;
        case "du_Virgin_ae":
            temp = "https://virginmobile.ae/";
            break;
        case "du_ae":
            temp = "http://www.du.ae/";
            break;
        case "eSIMGO":
            temp = "http://www.esim-go.com/";
            break;
        case "elisa_fi":
            temp = "http://www.elisa.fi/iphone";
            break;
        case "iWireless_US":
            temp = "http://iwireless.com/";
            break;
        case "iusacell_Unefon_mx":
            temp = "https://unefon.com.mx";
            break;
        case "iusacell_mx":
            temp = "https://www.att.com.mx/";
            break;
        case "life_by":
            temp = "http://life.com.by/";
            break;
        case "mcel_mz":
            temp = "https://www.tmcel.mz";
            break;
        case "mobilkom_at":
            temp = "https://www.a1.net/";
            break;
        case "mobilkom_bg":
            temp = "https://www.a1.bg/bg";
            break;
        case "mobilkom_by":
            temp = "https://www.a1.by/ru/shop/c/phones/b/apple";
            break;
        case "mobilkom_hr":
            temp = "https://www.a1.hr/privatni/mobiteli/iphone-12";
            break;
        case "mobilkom_mk":
            temp = "https://www.a1.mk/iphone-12";
            break;
        case "mobilkom_rs":
            temp = "https://a1.rs/privatni";
            break;
        case "mobilkom_si":
            temp = "https://www.a1.si/";
            break;
        case "mobily_sa":
            temp = "https://www.mobily.com.sa/";
            break;
        case "mobinil_eg":
            temp = "https://www.orange.eg/";
            break;
        case "movistar_ar":
            temp = "https://www.movistar.com.ar/";
            break;
        case "movistar_cl":
            temp = "http://www.movistar.cl/PortalMovistarWeb/appmanager/PortalMovistar/portal?_nfpb=true&_pageLabel=B2601897771268056578066";
            break;
        case "movistar_co":
            temp = "http://movistar.com.co/";
            break;
        case "movistar_cr":
            temp = "https://libertycr.com/centro-de-ayuda/canales-de-atencion";
            break;
        case "movistar_ec":
            temp = "http://www.movistar.com.ec/";
            break;
        case "movistar_gt":
            temp = "http://www.movistar.com.gt/";
            break;
        case "movistar_mx":
            temp = "http://www.movistar.com.mx/atencion-cliente";
            break;
        case "movistar_ni":
            temp = "https://www.tigo.com.ni/";
            break;
        case "movistar_pa":
            temp = "https://ayuda.tigo.com.pa/";
            break;
        case "movistar_pe":
            temp = "http://www.movistar.com.pe/";
            break;
        case "movistar_sv":
            temp = "https://movistar.com.sv";
            break;
        case "movistar_uy":
            temp = "http://www.movistar.com.uy/";
            break;
        case "vivo_br":
            temp = "http://www.vivo.com.br/";
            break;
        case "vtr_cl":
            temp = "https://vtr.com";
            break;
        default:
            temp = null;
            break;
    }
    return temp;
}
