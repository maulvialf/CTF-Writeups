#include<stdio.h>


int comparison(unsigned int a1, unsigned int a2) {
  return a1 <= a2;
}

int kurang(int a1, int a2) {
  return a1 - a2;
}

int modulus(int a1, int a2) {
  while (comparison(a2, a1))
    a1 = kurang(a1, a2);
  return a1;
}

int tambah(int a1, int a2) {
  int v2; // eax

  v2 = kurang(0, a2);
  return kurang(a1, v2);
}

int perkalian(int a1, int a2) {
  int v3; // [esp+0h] [ebp-4h]

  v3 = 0;
  while (comparison(1, a2)) {
    v3 = tambah(v3, a1);
    a2 = kurang(a2, 1);
  }
  return v3;
}

int pembagian(int a1, unsigned int a2) {
  int v3; // [esp+0h] [ebp-4h]

  v3 = 0;
  while (comparison(a2, a1)) {
    v3 = tambah(v3, 1);
    a1 = kurang(a1, a2);
  }
  return v3;
}

// int test(){
//   for (int i = 0; i < 100; i++)
//   {
//     printf("%d\n", naon1(i, 5));  
//   }
// }

int trace2(int a1, int a2) {
  int v2; // eax
  int v3; // eax
  int v4; // eax
  int v6; // [esp-4h] [ebp-Ch]
  int v7; // [esp+0h] [ebp-8h]
  int v8; // [esp+4h] [ebp-4h]

  v8 = 0;
  v7 = 1;
  while (1) {
    v2 = tambah(a1, a2);
    if (!comparison(1, v2))
      break;
    v6 = modulus(a2, 2);
    v3 = modulus(a1, 2);
    v4 = tambah(v3, v6);
    if (comparison(1, v4))
      v8 = tambah(v8, v7);
    v7 = perkalian(v7, 2);
    a1 = pembagian(a1, 2);
    a2 = pembagian(a2, 2);
  }
  return v8;
}

int trace(int a1, int a2) {
  int v2; // eax
  int v3; // eax
  int v4; // eax
  int v6; // [esp-4h] [ebp-10h]
  int v7; // [esp+0h] [ebp-Ch]
  int v8; // [esp+4h] [ebp-8h]
  int v9; // [esp+8h] [ebp-4h]

  v9 = 0;
  v8 = 1;
  while (1) {
    v2 = tambah(a1, a2);
    if (!comparison(1, v2))
      break;
    v6 = modulus(a2, 2);
    v3 = modulus(a1, 2);
    v7 = tambah(v3, v6);
    if (comparison(v7, 1)) {
      v4 = perkalian(v7, v8);
      v9 = tambah(v9, v4);
    }
    v8 = perkalian(v8, 2);
    a1 = pembagian(a1, 2);
    a2 = pembagian(a2, 2);
  }
  return v9;
}
unsigned char ida_chars[] = {
  0xEB,
  0x3C,
  0xE7,
  0xEA,
  0xE8,
  0xD7,
  0xEE,
  0xDD,
  0xEA,
  0xE8,
  0xE9,
  0xD5,
  0xE0,
  0xD7,
  0xE1,
  0x35,
  0xDB,
  0xDC,
  0xDD,
  0xE6,
  0xD9,
  0xD7,
  0xE4,
  0xCA,
  0xE7,
  0xDF,
  0xEA,
  0xD5,
  0xE1,
  0xE1,
  0xD9,
  0xD8,
  0xD7,
  0xC8,
  0xE7,
  0xD7,
  0xCA,
  0xE9,
  0x3D,
  0xC6,
  0xD7,
  0xED,
  0xE7,
  0xE9,
  0xEA,
  0xD7,
  0xD8,
  0x35,
  0xED,
  0xF1,
};

int main(int argc, char
  const * argv[]) {

  // A
  int v3 = 0; // eax
  int v4 = 0; // eax
  int v5 = 0; // ebx
  int v6 = 0; // ecx
  int v7 = 0; // eax
  int v8 = 0; // eax
  int v9 = 0; // eax
  int v11 = 0; // [esp-24h] [ebp-28h]
  int harus0 = 0; // [esp+0h] [ebp-4h]
  printf("%d\n", trace2(0, 0xcf));
  int i;
    for (int x = 0; x < 100; x++)
    {

    
    for (int j = 0; j < 100; j++) {
      for (i = 0; i < 256; i++) {
        // i = 'A';
        harus0 = 0;
        v5 = i;
        v6 = 0x42;
        v11 = v6;
        // v7 = tambah(v5, 5);
        v7 = tambah(v5, x);
        v8 = trace(v7, v11);
        v9 = trace(v8, ida_chars[j]);
        harus0 = trace2(harus0, v9);
        // printf("%x\n", v7);
        // printf("%x\n", v8);
        // printf("%x\n", v9);
        // printf("%x %x\n", i, harus0);
        if (harus0 == 0) {
          // printf("%d\n", i);
          
          // printf("%d %c\n", j, i);
          if(isprint(i)){
            printf("%c", i);
          } 
          break;

          // kotak[j] = i;
          // break;
          // printf("%c\n", i);
          // printf("%d\n", harus0);
          // break;
        }
                
      }
      if(!isprint(i)){
        break;
      }       
      if(i == 256){
        // printf("error");
      }
    }
    printf("\n");
    }
  return 0;
}