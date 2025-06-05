#include <iostream>
#include <fstream>
#include "stringify.hpp"

extern "C" bool carrde(char* id, int lenght)
{
    std::string temp = stringify(id, lenght);
    std::ifstream in("carr.txt");
    std::vector<std::string> carrlist;
    while (!in.eof())
    {
        std::string tmp;
        std::getline(in, tmp);
        carrlist.push_back(tmp);
    }
    for (auto i : carrlist)
    {
        if (temp == i)
        {
            return true;
        }
    }
    std::ofstream out("carr.txt");
    for (auto i : carrlist)
    {
        out << i << std::endl;
    }
    out << temp;
    out.close();
    return false;
}
