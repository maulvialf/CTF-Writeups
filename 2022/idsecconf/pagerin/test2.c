#include <stdio.h>

int paramdua[4] = {};
int paramsatu[4] = {};

int compariso1 = 0;
int compariso2 = 0;
int compariso3 = 0;


int dua = 0;
int satu = 0;

unsigned long input(char *a1, int a2)
{
  unsigned long result; // rax
  int i; // [rsp+1Ch] [rbp-4h]

  fflush(stdout);
  if ( !fgets(a1, a2, stdin) )
  {
    if ( feof(stdin) )
      exit(0);
    puts("Something went wrong.");
    exit(1);
  }
  for ( i = 0; ; ++i )
  {
    result = i;
    if ( i >= a2 )
      break;
    if ( a1[i] == 10 )
    {
      a1[i] = 0;
      result = &a1[i];
      return result;
    }
    result = a1[i];
    if ( !result )
      return result;
  }
  return result;
}

void checker() {
  long v0; // rax
  long v1; // rax
  int length; // [rsp+4h] [rbp-15Ch]
  int i; // [rsp+8h] [rbp-158h]
  int j; // [rsp+Ch] [rbp-154h]
  unsigned long v6; // [rsp+158h] [rbp-8h]
  int v5;


  // for (length = 0; length <= 0x135; ++length) {
  //   if (INPUT[length] <= '0' || INPUT[length] > '3'){
  //     printf("failed 1\n");
  //     exit(0);
  //   }
  // }
  while (1){
  char INPUT[3000] = {0};
  puts("=*=*=*=*=*=*=*=*=*=*=*=*\n");
  input(INPUT, 3000) ;
  printf("INPUT: %s\n", INPUT);
  printf("%d\n", strlen(INPUT));
  for (i = 0; i <= strlen(INPUT); ++i) {
    satu = INPUT[2 * i] - '1';
    dua = INPUT[2 * i + 1] - '1';
    if (dua != satu) {
        printf("=========\n");
        printf("chosen  %x %x\n", satu, dua);
        printf("=========\n");
        printf("before\n");
        printf("=========\n");
        printf("paramsatu %x %x\n", paramsatu[satu], paramsatu[dua]);
        printf("paramdua  %x %x\n", paramdua[satu], paramdua[dua]);
        printf("=========\n");
        printf("paramsatu %x %x\n", i, paramsatu[0]);
        printf("paramsatu %x %x\n", i, paramsatu[1]);
        printf("paramsatu %x %x\n", i, paramsatu[2]);
        printf("=========\n");

        printf("paramdua  %x %x\n", i, paramdua[0]);
        printf("paramdua  %x %x\n", i, paramdua[1]);
        printf("paramdua  %x %x\n", i, paramdua[2]);
        printf("=========\n");
        printf("%x\n", v5);
        printf("=========\n");


      v5 = paramsatu[satu];
      if (paramdua[dua] - paramsatu[dua] < v5)
        v5 = paramdua[dua] - paramsatu[dua];
      paramsatu[satu] -= v5;
      paramsatu[dua] += v5;

        printf("after\n");
        printf("=========\n");
        printf("%x\n", v5);

        printf("=========\n");
        printf("paramsatu %d %d\n", i, paramsatu[0]);
        printf("paramsatu %d %d\n", i, paramsatu[1]);
        printf("paramsatu %d %d\n", i, paramsatu[2]);
        printf("=========\n");

        printf("paramdua  %d %d\n", i, paramdua[0]);
        printf("paramdua  %d %d\n", i, paramdua[1]);
        printf("paramdua  %d %d\n", i, paramdua[2]);
        printf("=========\n");
        printf("%d %d\n", i, compariso1);
        printf("%d %d\n", i, compariso2);
        printf("%d %d\n", i, compariso3);
        printf("%d\n", v5);
        printf("=========\n");

    }

  }

  puts("=*=*=*=*=*=*=*=*=*=*=*=*\n");
  }
}

int main(int argc, char const * argv[]) {
  // b5 be a4 1b 6c 62 3f 7c 09f1bf24dcae58ebab3c0cdd90ad966bc43a45b44867e12b
  paramdua[0] = 0xb5 ^ 0x29;//  0x9c
  paramdua[1] = 0xbe ^ 0xED;//  0x53
  paramdua[2] = 0xa4 ^ 0xED;//  0x49
  paramdua[3] = 0;//  0x0
  
  paramsatu[0] = 0x1b ^ 0x87;// 0x9c
  paramsatu[1] = 0;// 0x0
  paramsatu[2] = 0;// 0x0
  paramsatu[3] = 0;// 0x0

  // paramsatu[0] = 0x4e;// 0x9c
  // paramsatu[1] = 0x4e;// 0x0
  // paramsatu[2] = 0;// 0x0
  // paramsatu[3] = 0;// 0x0

  compariso1 = 0x6c ^ 0x22;//   0x4e
  compariso2 = 0x62 ^ 0x2C;//   0x4e
  compariso3 = 0x3f ^ 0x3F;//   0x0

  checker();
  return 0;
}