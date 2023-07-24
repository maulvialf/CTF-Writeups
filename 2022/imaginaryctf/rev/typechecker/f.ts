type arrayOfCutArrayLastItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 0]

type arrayOfLastCutArray = [66, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65]

type adder<
  number0 extends number,
  number1 extends number
> = number1 extends 0
  ? number0
  : adder<
      arrayOfCutArrayLastItem[number0],
      arrayOfLastCutArray[number1]
    >;

type multiply<
  number0 extends number,
  number1 extends number,
  numbersetto0 extends number = 0
> = number1 extends 0
  ? numbersetto0
  : multiply<
      number0,
      arrayOfLastCutArray[number1],
      adder<numbersetto0, number0>
    >;    

type adderArray<
  arrayLikeNumber extends ArrayLike<number>,
  number0 extends number = 0,
  arrayUnknown extends unknown[] = []
> = arrayUnknown["length"] extends arrayLikeNumber["length"]
  ? number0
  : adderArray<
      arrayLikeNumber,
      adder<
        number0,
        arrayLikeNumber[arrayUnknown["length"]]
      >,
      [...arrayUnknown, any]
    >;

type func21<
  unknownArray0 extends unknown[],
  numberGoblok1 extends number = blok,
  numberGoblok2 extends number = blok,
  unknownArray2D1 extends unknown[][] = [],
  unknownArray2D2 extends unknown[] = [],
  unknownArray2D3 extends unknown[] = []
> = unknownArray2D1["length"] extends numberGoblok1
  ? unknownArray2D1
  : unknownArray2D2["length"] extends numberGoblok2
  ? create2Darray<
      unknownArray0,
      numberGoblok1,
      numberGoblok2,
      [...unknownArray2D1, unknownArray2D2],
      [],
      unknownArray2D3
    >
  : create2Darray<
      unknownArray0,
      numberGoblok1,
      numberGoblok2,
      unknownArray2D1,
      [...unknownArray2D2, unknownArray0[unknownArray2D3["length"]]],
      [...unknownArray2D3, any]
    >;

type func24<
  kotak1 extends DictWithMatrixAsValue<
    number,
    numberblok1,
    numberblok2
  >,
  kotak2 extends DictWithMatrixAsValue<
    number,
    numberblok2,
    numberblok3
  >,
  numberblok1 extends number = blok,
  numberblok2 extends number = blok,
  numberblok3 extends number = blok
> = {
  [i in keyof initMatrix<numberblok1>]: {
    [k in keyof initMatrix<numberblok3>]: adderArray<
      {
        [j in keyof initMatrix<numberblok2>]: multiply<
          kotak1[i][j],
          kotak2[j][k]
        >;
      } & {
        length: numberblok2;
      }
    >;
  };
};


type func24x<
  kotak1 extends DictWithMatrixAsValue<
    number,
    numberblok1,
    numberblok2
  >,
  kotak2 extends DictWithMatrixAsValue<
    number,
    numberblok2,
    numberblok3
  >,
  numberblok1 extends number = 3,
  numberblok2 extends number = 3,
  numberblok3 extends number = 3
> = {
  [i in keyof initMatrix<numberblok1>]: {
    [k in keyof initMatrix<numberblok3>]: adderArray<
      {
        [j in keyof initMatrix<numberblok2>]: multiply<
          kotak1[i][j],
          kotak2[j][k]
        >;
      } & {
        length: numberblok2;
      }
    >;
  };
};

type initMatrix<
  param1,
  unknownArray extends unknown[] = [],
  kamus = {}
> = unknownArray["length"] extends param1
  ? kamus
  : initMatrix<
      param1,
      [...unknownArray, any],
      kamus & {
        [_ in unknownArray["length"]]: unknown;
      }
    >;



// shoe example of using func19
type number2 = adder<5, 12>; // 66


// show example of using func 20
type number3 = multiply<5, 12>; // 66

// show example of using func 23
type number4 = adderArray<[5, 12, 13]>; // 66




type blok = 8;
type panjang = 67;

// show example of using func 21
type number5 = create2Darray<[1,2,3,4,5,6,7,8,9,10,11,12]>; // 66



// show example of using  func 24
const enc1 = "eZ!gjyTdSLcJ3{!Y_pTcMqW7qu{cMoyb04JXFHUaXx{8gTCIwIGE-AAWb1_wu32{";
const enc2 = "HuuMKaxLVHVqC6NSB1Rwl2WC1F7zkxxrxAuZFpPogbBd4LGGgBfK9!eUaaSIuqJK";

type enc3 =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ{_-!}";
const flag = "________________________________________________________________";


type resolvedKey<
  kstringnumber extends {
    [k in string]: number;
  },
  keyofkeystringnumber extends (keyof kstringnumber)[],
  arrayNumber extends number[] = []
> = arrayNumber["length"] extends keyofkeystringnumber["length"]
  ? arrayNumber
  : resolvedKey<
      kstringnumber,
      keyofkeystringnumber,
      [
        ...arrayNumber,
        kstringnumber[keyofkeystringnumber[arrayNumber["length"]]]
      ]
    >;


// type translate2DarrayList<extstring extends string> = create2Darray<
//   resolvedKey<dictionaryString, listfunction<extstring>>
// >;

// type flagResolvedToKey = translate2DarrayList<typeof flag>;
// type fenc1 = translate2DarrayList<typeof enc1>;
// type fenc2 = translate2DarrayList<typeof enc2>;

// const enc1a = "eZ!gjyTdSLcJ3{!Y_pTcMqW7qu{cMoyb04JXFHUaXx{8gTCIwIGE-AAWb1_wu32{";
const enc1a = "2222222222222222222222222222222222222222222222222222222222222222";
// const enc1a = "HuuMKaxLVHVqC6NSB1Rwl2WC1F7zkxxrxAuZFpPogbBd4LGGgBfK9!eUaaSIuqJK";
// const enc2a = "HuuMKaxLVHVqC6NSB1Rwl2WC1F7zkxxrxAuZFpPogbBd4LGGgBfK9!eUaaSIuqJK";
const enc2a = "3333333333333333333333333333333333333333333333333333333333333333";
// 0000000000000000000000000000000000000000000000000000000000000000
type enc3a =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ{_-!}";
const flag2 = "4000000000000000000000000000000000000000000000000000000000000000";
// const flag = "0_______________________________________________________________";


type flagResolvedToKeyx = translate2DarrayList<typeof flag2>;
type fenc1x = translate2DarrayList<typeof enc1a>;
type fenc2x = translate2DarrayList<typeof enc2a>;


type enc1ax = [[14, 61, 65, 16, 19, 34, 55, 13], [54, 47, 12, 45, 3, 62, 65, 60], [63, 25, 55, 12, 48, 26, 58, 7], [26, 30, 62, 12, 48, 24, 34, 11], [0, 4, 45, 59, 41, 43, 56, 10], [59, 33, 62, 8, 16, 55, 38, 44], [32, 44, 42, 40, 64, 36, 36, 58], [11, 1, 63, 32, 30, 3, 2, 62]];
type enc2ax = [[43, 30, 30, 48, 46, 10, 33, 47], [57, 43, 57, 26, 38, 6, 49, 54], [37, 1, 53, 32, 21, 2, 58, 38], [1, 41, 7, 35, 20, 33, 33, 27], [33, 36, 30, 61, 41, 25, 51, 24], [16, 11, 37, 13, 4, 47, 42, 42], [16, 37, 15, 46, 9, 65, 14, 56], [10, 10, 54, 44, 30, 26, 45, 46]];
type flagax = [[1, 0,0,0,0,0,0,0,0], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]];


type minienc1 = [[3,4,5],[0,0,0],[0,0,0]]
type minienc2 = [[4,1,0],[0,0,0],[0,0,0]]
type miniflag = [[6,7,8],[2,2,2],[3,3,3]]

type part1xa = func24x<miniflag, minienc1>; 
type part2xa = func24x<minienc2, miniflag>; 

`
6 * 3 + 7 * 0 + 8 * 0 == 18
6 * 4 + 7 * 0 + 8 * 0 == 24
6 * 5 + 7 * 0 + 8 * 0 == 30

2 * 3 + 2 * 0 + 2 * 0 == 6
2 * 4 + 2 * 0 + 2 * 0 == 8
2 * 5 + 2 * 0 + 2 * 0 == 10

3 * 3 + 3 * 0 + 3 * 0 == 6
3 * 4 + 3 * 0 + 3 * 0 == 8
3 * 5 + 3 * 0 + 3 * 0 == 10


type part1xa = {
  0: {
      0: 18;
      1: 24;
      2: 30;
  };
  1: {
      0: 6;
      1: 8;
      2: 10;
  };
  2: {
      0: 6;
      1: 8;
      2: 10;
  };
}
ype part2xa = {
  0: {
      0: 10;
      1: 10;
      2: 10;
  };
  1: {
      0: 0;
      1: 0;
      2: 0;
  };
  2: {
      0: 0;
      1: 0;
      2: 0;
  };
`






type part1x = func24<flagax, enc1ax>; 
type part2 = func24<enc2ax, flagax>; 

type comparisonFinal<interface1, interface2> = (<
    T
  >() => T extends interface1 ? 1 : 2) extends <
    T
  >() => T extends interface2 ? 1 : 2
    ? true
    : false;


type corr = comparisonFinal<part1, part2>; // true