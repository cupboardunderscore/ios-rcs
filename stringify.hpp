#include <iostream>

std::string stringify(char* id, int lenght)
{
    std::string temp;
    temp.resize(lenght);
    for (int i = 0; i < lenght; i++)
    {
        temp[i] = id[i];
    }
    return temp;
}

const char* destringify(std::string id)
{
    char* temp = new char [id.length()+1];
    std::strcpy (temp, id.c_str());
    return temp;
}
