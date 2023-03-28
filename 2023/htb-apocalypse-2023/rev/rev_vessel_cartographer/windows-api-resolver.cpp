#include <iostream>
#include <string>
#include <Windows.h>

__int64 hashed(const char* a1)
{
    const char* v1;
    unsigned int v3;
    unsigned __int64 v4;
    int i;
    int v6;

    v1 = a1;
    if (a1 && !*a1)
        return 0i64;
    v3 = 10408992;
    v4 = -1i64;
    do
        ++v4;
    while (a1[v4]);
    for (i = 0; i < v4; v3 = 4919 * (v3 ^ v6))
    {
        v6 = *v1++;
        ++i;
    }
    return v3;
}

int main() {
    HMODULE result = GetModuleHandleA("ntdll.dll");
    if (!result) {
        std::cerr << "Failed to get handle to ntdll.dll" << std::endl;
        return 1;
    }

    PIMAGE_DOS_HEADER dosHeader = reinterpret_cast<PIMAGE_DOS_HEADER>(result);
    PIMAGE_NT_HEADERS ntHeaders = reinterpret_cast<PIMAGE_NT_HEADERS>(reinterpret_cast<BYTE*>(result) + dosHeader->e_lfanew);
    PIMAGE_EXPORT_DIRECTORY exportDirectory = reinterpret_cast<PIMAGE_EXPORT_DIRECTORY>(reinterpret_cast<BYTE*>(result) + ntHeaders->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_EXPORT].VirtualAddress);

    DWORD* functionAddresses = reinterpret_cast<DWORD*>(reinterpret_cast<BYTE*>(result) + exportDirectory->AddressOfFunctions);
    DWORD* nameAddresses = reinterpret_cast<DWORD*>(reinterpret_cast<BYTE*>(result) + exportDirectory->AddressOfNames);
    WORD* ordinalTable = reinterpret_cast<WORD*>(reinterpret_cast<BYTE*>(result) + exportDirectory->AddressOfNameOrdinals);

    bool found = false;
    for (DWORD i = 0; i < exportDirectory->NumberOfNames; ++i) {
        const char* functionName = reinterpret_cast<const char*>(reinterpret_cast<BYTE*>(result) + static_cast<DWORD_PTR>(nameAddresses[i]));
        // replaced this code to find api
        if (hashed(functionName) == 0xD026C5E3) {
            std::cout << "Found function " << functionName  << std::endl;
            found = true;
            break;
        }
    }

    if (!found) {
        std::cout << "NtQuerySystemInformation function not found" << std::endl;
    }

    return 0;
}
