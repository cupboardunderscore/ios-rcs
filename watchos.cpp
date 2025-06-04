//some carriers don't have MinCompatibleWatchOS and/or MinCompatibleWatchOSForStandaloneMode tags in their carrier bundle even though they do support them,, my guess is that they supported the feature right from the begining so they wouldn't need a "minwatchos" flag
//i originally wrote this in typescript, but i wanted to rewrite it in c++ :D,, using c++ code in typescript was kinda pain but oh well :3

#include <iostream>
#include "stringify.hpp"

extern "C" bool watch(char* id, int lenght)
{
    std::string temp = stringify(id, lenght);
    std::string carr[] = {"ATT_CC_US", "ATT_NR_US", "ATT_US", "BT_Business_uk", "CSL_hk", "CellularSouth_LTE_US", "ChinaTelecom_USIM_cn", "Chunghwa_tw", "KDDI_LTE_only_jp", "PCCW_hk", "RelianceJio_in", "Sprint_ISIM_LTE_US", "Sunrise_ch", "Swisscom_ch", "TMobile_Germany", "TMobile_US" ,"TaiwanMobile_tw", "Unicom_cn", "Verizon_LTE_US", "Verizon_Response_LTE_US"};
    for (auto i : carr)
    {
        if (temp == i)
        {
            return true;
            break;
        }
    }
    return false;
}

extern "C" bool watchsa(char* id, int lenght)
{
    std::string temp = stringify(id, lenght);
    std::string carr[] = {"ATT_NR_US", "ATT_US", "Bell_Virgin_ca", "Bell_ca", "Docomo_jp", "KDDI_LTE_only_jp", "Optus_Virgin_au", "Optus_au", "Orange_France", "Softbank_jp", "Sunrise_ch", "Swisscom_ch", "TMobile_Germany", "TMobile_US", "Telstra_au", "Telus_ca", "Unicom_cn", "Verizon_LTE_US", "Verizon_Response_LTE_US", "Vodafone_au"};
    for (auto i : carr)
    {
        if (temp == i)
        {
            return true;
            break;
        }
    }
    return false;
}
