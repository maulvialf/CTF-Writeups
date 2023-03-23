#include <stdio.h>

unsigned char t[] =
{
  0x2C, 0x4A, 0xB7, 0x99, 0xA3, 0xE5, 0x70, 0x78, 0x93, 0x6E, 
  0x97, 0xD9, 0x47, 0x6D, 0x38, 0xBD, 0xFF, 0xBB, 0x85, 0x99, 
  0x6F, 0xE1, 0x4A, 0xAB, 0x74, 0xC3, 0x7B, 0xA8, 0xB2, 0x9F, 
  0xD7, 0xEC, 0xEB, 0xCD, 0x63, 0xB2, 0x39, 0x23, 0xE1, 0x84, 
  0x92, 0x96, 0x09, 0xC6, 0x99, 0xF2, 0x58, 0xFA, 0xCB, 0x6F, 
  0x6F, 0x5E, 0x1F, 0xBE, 0x2B, 0x13, 0x8E, 0xA5, 0xA9, 0x99, 
  0x93, 0xAB, 0x8F, 0x70, 0x1C, 0xC0, 0xC4, 0x3E, 0xA6, 0xFE, 
  0x93, 0x35, 0x90, 0xC3, 0xC9, 0x10, 0xE9, 0x00, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
  0x00, 0x00, 0x00
};


unsigned char m2[] =
{
  0x64, 0x1E, 0xF5, 0xE2, 0xC0, 0x97, 0x44, 0x1B, 0xF8, 0x5F, 
  0xF9, 0xBE, 0x18, 0x5D, 0x48, 0x8E, 0x91, 0xE4, 0xF6, 0xF1, 
  0x5C, 0x8D, 0x26, 0x9E, 0x2B, 0xA1, 0x02, 0xF7, 0xC6, 0xF7, 
  0xE4, 0xB3, 0x98, 0xFE, 0x57, 0xED, 0x4A, 0x4B, 0xD1, 0xF6, 
  0xA1, 0xEB, 0x09, 0xC6, 0x99, 0xF2, 0x58, 0xFA, 0xCB, 0x6F, 
  0x6F, 0x5E, 0x1F, 0xBE, 0x2B, 0x13, 0x8E, 0xA5, 0xA9, 0x99, 
  0x93, 0xAB, 0x8F, 0x70, 0x1C, 0xC0, 0xC4, 0x3E, 0xA6, 0xFE, 
  0x93, 0x35, 0x90, 0xC3, 0xC9, 0x10, 0xE9
};


unsigned char m1[] =
{
  0x6E, 0x3F, 0xC3, 0xB9, 0xD7, 0x8D, 0x15, 0x58, 0xE5, 0x0F, 
  0xFB, 0xAC, 0x22, 0x4D, 0x57, 0xDB, 0xDF, 0xCF, 0xED, 0xFC, 
  0x1C, 0x84, 0x6A, 0xD8, 0x1C, 0xA6, 0x17, 0xC4, 0xC1, 0xBF, 
  0xA0, 0x85, 0x87, 0xA1, 0x43, 0xD4, 0x58, 0x4F, 0x8D, 0xA8, 
  0xB2, 0xF2, 0x7C, 0xA3, 0xB9, 0x86, 0x37, 0xDA, 0xBF, 0x07, 
  0x0A, 0x7E, 0x73, 0xDF, 0x5C, 0x60, 0xAE, 0xCA, 0xCF, 0xB9, 
  0xE0, 0xDE, 0xFF, 0x00, 0x70, 0xB9, 0xE4, 0x5F, 0xC8, 0x9A, 
  0xB3, 0x51, 0xF5, 0xAE, 0xA8, 0x7E, 0x8D, 0x00, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00
};

int main() {
  unsigned char password[77];
  unsigned char flag[77];

  for (unsigned int i = 0; i <= 0x4C; ++i) {
    password[i] = t[i] ^ m1[i];
  }

  for (unsigned int j = 0; j <= 0x4C; ++j) {
    flag[j] = password[j] ^ m2[j];
  }

  printf("Password: %s\n", password);
  // getflag
  // Password: But the value of these shells will fall, due to the laws of supply and demand
  // Flag: HTB{cr4ck1ng_0p3n_sh3ll5_by_th3_s34_sh0r3}
  return 0;
}