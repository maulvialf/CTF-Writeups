/*
 *  Simple shellcode tester for Windows. Takes in a raw shellcode
 *  file name as its only input. Otherwise executes the shellcode
 *  in the file named "shellcode", if any.
 *
 *  To compile you need "cl.exe" from Visual Studio. GCC compiles
 *  without issues but messes up the binary so it's impossible
 *  to run it correctly.
 *
 *  (C) 2016, 0xBADCA7
**/
#define _CRT_SECURE_NO_DEPRECATE

#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include <inttypes.h>
#include <string.h>
#include <windows.h>
#define FILENAME_LEN 255
#include <emmintrin.h>

int test(unsigned int brute)
{
    const char* filename = "shellcode";

    FILE* fp = fopen(filename, "rb");

    if (fp == NULL)
    {
        printf("File could not be open, errno = %d\n", errno);
        return 1;
    }

    /* Print shellcode size */
    fseek(fp, 0, SEEK_END);
    uint64_t size = ftell(fp);

    /* Read the shellcode in */
    fseek(fp, 0, SEEK_SET);
    char* shellcode = (char*)calloc(1, size);
    memset(shellcode, 0x90, size);

    uint64_t bytes_read = fread((void*)shellcode, 1, size, fp);
    if (bytes_read != size)
    {
        printf("Couldn't read all the file, errno = %d\n", errno);
        return 1;
    }
    fclose(fp);

    /* Mark memory as RWX */
    //printf("\r\nPaused for debugger. Last chance before jumping to shellcode.\r\n");
    //system("PAUSE");
    DWORD oldProtect;
    BOOL ret = VirtualProtect(shellcode, bytes_read, PAGE_EXECUTE_READWRITE, &oldProtect);

    if (!ret)
    {
        printf("VirtualProtect failed ...\n");
        return EXIT_FAILURE;
    }

    __m128i key[] =
    {
      0x4D, 0x79, 0x61, 0x27, 0x67, 0x28, 0x68, 0x19, 0x59, 0x1A,
      0x74, 0x18, 0x75, 0x09, 0x6E, 0x76
    };

    // call encrypting key from shellcode
    ((void (*)(void*, int))(shellcode + 0x12A0))(key, brute);

    unsigned char space[] =
    {
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    };

    /// <summary>
    /// 
    /// </summary>
    /// <param name="brute"></param>
    /// <returns></returns>
    HFILE v14; // eax
    void* v15; // rsi
    DWORD FileSize; // edi
    //DWORD size; // r14d
    void* data; // r15
    void* datax; // r15

    char* v19; // rcx
    void* v21; // rbx
    DWORD FileSizeHigh[2]; // [rsp+30h] [rbp-D0h] BYREF
    DWORD NumberOfBytesRead; // [rsp+38h] [rbp-C8h] BYREF
    DWORD NumberOfBytesWritten; // [rsp+3Ch] [rbp-C4h] BYREF
    struct _WIN32_FIND_DATAW FindFileData; // [rsp+40h] [rbp-C0h] BYREF
    struct _OFSTRUCT ReOpenBuff; // [rsp+290h] [rbp+190h] BYREF
    struct _OFSTRUCT v28; // [rsp+320h] [rbp+220h] BYREF
    char v29; // [rsp+3AFh] [rbp+2AFh] BYREF
    CHAR FileName[256] = "vessel_map.jpeg.owo"; // [rsp+3B0h] [rbp+2B0h] BYREF

    v14 = OpenFile(FileName, &ReOpenBuff, 0);
    *FileSizeHigh = 0i64;
    v15 = (void*)v14;
    NumberOfBytesRead = 0;
    FileSize = GetFileSize((HANDLE)v14, FileSizeHigh);
    size = FileSize - (FileSize & 0xF) + 16;
    data = malloc(size);

    memset(data, 0, size);
    ReadFile(v15, data, FileSize, &NumberOfBytesRead, 0i64);
    CloseHandle(v15);
    printf("%d %d %d \n", size, FileSize, NumberOfBytesRead);

    printf("\n");
    // call decryptor in the shellcode
    ((void (*)(void*, long, void*, void*))(shellcode + 0x1250))(data, size, key, space);

    FILE* fptr;
    char namafile[256];

    // Open file for writing
    sprintf(namafile, "flag-owo.%d.jpeg", brute); // construct filename
    fptr = fopen(namafile, "wb");
    printf("%s", namafile);
    // Check if file was opened successfully
    if (fptr == NULL) {
        printf("Failed to open file.");
        return 1;
    }

    // Write text to file
    // fprintf(fptr, "%s", data);
    fwrite(data, sizeof(unsigned char), FileSize, fptr); // write bytes to file


    // Close file
    fclose(fptr);

    return 0;
}

int main() {
    for (size_t i = 0; i < 400; i++)
    {
        test(i);
    }
}
