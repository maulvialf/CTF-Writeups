const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Enter flag: `, flag => {
    readline.close();
    if (flag.length !== 44) {
      console.log("Try again.");
      process.exit(0);
    }
    var b = [];
    for (var i = 0; i < flag.length; i++) {
      b.push(flag.charCodeAt(i));
    }
  
    // something strange is happening...
    if (1n) {
      console.log("uh-oh, math is too correct...");
      process.exit(0);
    }
  
    var state = 1337;;
    var a = 0;
    while (true) {
      state ^= Math.floor(Math.random() * (2 ** 30));;
      a = 0;
      switch (state) {
        case 306211:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[30] -= b[34] + b[23] + b[5] + b[37] + b[33] + b[12] + Math.floor(A * 256);
  
            b[30] &= 0xFF;
          } else {
            b[26] -= b[24] + b[41] + b[13] + b[43] + b[6] + b[30] + 225;
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 868071080;
          continue;
        case 311489:
          if (Math.random() < 0.5) {
            a = 1;
            b[10] -= b[32] + b[1] + b[20] + b[30] + b[23] + b[9] + 115;
            b[10] &= 0xFF;
          } else {
            b[7] ^= (b[18] + b[14] + b[11] + b[25] + b[31] + b[21] + 19) & 0xFF;
          };
          console.log(state, a);
          state = 22167546;
          continue;
        case 755154:
          if (93909087n) {
            a = 1;
            b[4] -= b[42] + b[6] + b[26] + b[39] + b[35] + b[16] + 80;
            b[4] &= 0xFF;
          } else {
            b[16] += b[36] + b[2] + b[29] + b[10] + b[12] + b[18] + 202;
            b[16] &= 0xFF;
          };
          console.log(state, a);
          state = 857247560;
          continue;
        case 832320:
          if (720624460) {
            a = 1;
            b[40] -= b[12] + b[9] + b[27] + b[39] + b[26] + b[4] + 199;
            b[40] &= 0xFF;
          } else {
            b[11] ^= (b[30] + b[38] + b[6] + b[22] + b[3] + b[18] + 218) & 0xFF;
          };
          console.log(state, a);
          state = 420839059;
          continue;
        case 3396517:
          if (70881172) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[9] ^= (b[12] + b[32] + b[28] + b[43] + b[16] + b[27] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[23] += b[34] + b[7] + b[32] + b[2] + b[12] + b[11] + Math.floor(A * 256);
  
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 981691089;
          continue;
        case 4634906:
          if (35127076n) {
            a = 1;
            b[24] += b[39] + b[14] + b[18] + b[36] + b[15] + b[27] + 142;
            b[24] &= 0xFF;
          } else {
            b[8] ^= (b[1] + b[39] + b[16] + b[38] + b[40] + b[25] + 144) & 0xFF;
          };
          console.log(state, a);
          state = 1009116244;
          continue;
        case 7607673:
          if (254681112) {
            a = 1;
            b[12] += b[10] + b[38] + b[16] + b[31] + b[43] + b[26] + 96;
            b[12] &= 0xFF;
          } else {
            b[27] += b[18] + b[23] + b[22] + b[8] + b[2] + b[9] + 98;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 801997414;
          continue;
        case 8385273:
          if (738704438) {
            a = 1;
            b[28] += b[41] + b[43] + b[4] + b[6] + b[38] + b[10] + 43;
            b[28] &= 0xFF;
          } else {
            b[10] -= b[9] + b[32] + b[42] + b[41] + b[21] + b[8] + 100;
            b[10] &= 0xFF;
          };
          console.log(state, a);
          state = 395953466;
          continue;
        case 8624110:
          if (794146476) {
            a = 1;
            b[24] -= b[11] + b[16] + b[38] + b[1] + b[23] + b[17] + 168;
            b[24] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[24] -= b[22] + b[38] + b[33] + b[36] + b[15] + b[43] + Math.floor(A * 256);
  
            b[24] &= 0xFF;
          };
          console.log(state, a);
          state = 855479214;
          continue;
        case 8969443:
          if (Math.random() < 0.5) {
            a = 1;
            b[1] += b[2] + b[28] + b[40] + b[37] + b[34] + b[11] + 25;
            b[1] &= 0xFF;
          } else {
            b[11] += b[12] + b[27] + b[21] + b[34] + b[8] + b[9] + 86;
            b[11] &= 0xFF;
          };
          console.log(state, a);
          state = 1021591257;
          continue;
        case 10705897:
          if (82750014n) {
            a = 1;
            b[37] += b[8] + b[6] + b[10] + b[2] + b[36] + b[14] + 116;
            b[37] &= 0xFF;
          } else {
            b[38] += b[5] + b[10] + b[40] + b[19] + b[33] + b[29] + 48;
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 633534954;
          continue;
        case 13789280:
          if (63441291n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[9] -= b[1] + b[37] + b[40] + b[15] + b[11] + b[10] + Math.floor(A * 256);
  
            b[9] &= 0xFF;
          } else {
            b[3] -= b[31] + b[37] + b[33] + b[7] + b[23] + b[32] + 157;
            b[3] &= 0xFF;
          };
          console.log(state, a);
          state = 73809693;
          continue;
        case 15648489:
          if (Math.random() < 0.5) {
            a = 1;
            b[25] -= b[33] + b[26] + b[2] + b[29] + b[17] + b[4] + 52;
            b[25] &= 0xFF;
          } else {
            b[12] += b[2] + b[25] + b[28] + b[6] + b[34] + b[7] + 222;
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 289786620;
          continue;
        case 16997611:
          if (51321786n) {
            a = 1;
            b[37] -= b[28] + b[31] + b[17] + b[42] + b[16] + b[40] + 244;
            b[37] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[5] ^= (b[35] + b[39] + b[40] + b[16] + b[10] + b[13] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 919058588;
          continue;
        case 17290114:
          if (Math.random() < 0.5) {
            a = 1;
            b[5] -= b[20] + b[43] + b[9] + b[3] + b[40] + b[25] + 50;
            b[5] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[40] += b[24] + b[16] + b[5] + b[33] + b[35] + b[14] + Math.floor(A * 256);
  
            b[40] &= 0xFF;
          };
          console.log(state, a);
          state = 372794266;
          continue;
        case 18752034:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[9] += b[4] + b[43] + b[39] + b[16] + b[15] + b[22] + Math.floor(A * 256);          b[9] &= 0xFF;
          } else {
            b[22] -= b[21] + b[1] + b[9] + b[27] + b[42] + b[32] + 120;
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 343127230;
          continue;
        case 19165082:
          if (256406096) {
            a = 1;
            b[39] += b[3] + b[26] + b[19] + b[31] + b[37] + b[8] + 23;
            b[39] &= 0xFF;
          } else {
            b[33] -= b[30] + b[12] + b[32] + b[34] + b[18] + b[40] + 2;
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 302103001;
          continue;
        case 20347334:
          if (157077096) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[35] += b[4] + b[25] + b[42] + b[41] + b[17] + b[10] + Math.floor(A * 256);
  
            b[35] &= 0xFF;
          } else {
            b[21] ^= (b[2] + b[3] + b[12] + b[16] + b[6] + b[15] + 100) & 0xFF;
          };
          console.log(state, a);
          state = 302039243;
          continue;
        case 22221850:
          if (1052707195) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[13] ^= (b[30] + b[33] + b[28] + b[32] + b[12] + b[41] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[2] ^= (b[29] + b[1] + b[26] + b[42] + b[12] + b[10] + 81) & 0xFF;
          };
          console.log(state, a);
          state = 554472923;
          continue;
        case 22756596:
          if (572655368) {
            a = 1;
            b[15] ^= (b[2] + b[3] + b[17] + b[10] + b[13] + b[24] + 118) & 0xFF;
          } else {
            b[1] ^= (b[16] + b[36] + b[17] + b[39] + b[35] + b[9] + 108) & 0xFF;
          };
          console.log(state, a);
          state = 399237037;
          continue;
        case 24385348:
          if (Math.random() < 0.5) {
            a = 1;
            b[11] ^= (b[31] + b[20] + b[13] + b[27] + b[24] + b[21] + 114) & 0xFF;
          } else {
            b[42] += b[10] + b[12] + b[19] + b[30] + b[5] + b[11] + 156;
            b[42] &= 0xFF;
          };
          console.log(state, a);
          state = 1056987786;
          continue;
        case 24833479:
          if (Math.random() < 0.5) {
            a = 1;
            b[31] += b[8] + b[5] + b[3] + b[13] + b[6] + b[39] + 14;
            b[31] &= 0xFF;
          } else {
            b[39] += b[24] + b[12] + b[9] + b[25] + b[42] + b[37] + 160;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 750166606;
          continue;
        case 27587950:
          if (57380710n) {
            a = 1;
            b[38] += b[1] + b[8] + b[31] + b[39] + b[7] + b[18] + 150;
            b[38] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[17] -= b[34] + b[35] + b[16] + b[9] + b[14] + b[8] + Math.floor(A * 256);
  
            b[17] &= 0xFF;
          };
          console.log(state, a);
          state = 620289833;
          continue;
        case 27798221:
          if (Math.random() < 0.5) {
            a = 1;
            b[14] ^= (b[31] + b[42] + b[35] + b[4] + b[11] + b[19] + 206) & 0xFF;
          } else {
            b[29] += b[39] + b[36] + b[23] + b[31] + b[5] + b[26] + 105;
            b[29] &= 0xFF;
          };
          console.log(state, a);
          state = 894374157;
          continue;
        case 28799325:
          if (62542139n) {
            a = 1;
            b[25] -= b[31] + b[29] + b[8] + b[36] + b[23] + b[40] + 216;
            b[25] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[4] -= b[40] + b[9] + b[23] + b[38] + b[18] + b[6] + Math.floor(A * 256);
  
            b[4] &= 0xFF;
          };
          console.log(state, a);
          state = 984870261;
          continue;
        case 28925148:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[34] -= b[24] + b[36] + b[5] + b[6] + b[22] + b[11] + Math.floor(A * 256);
  
            b[34] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[26] += b[16] + b[36] + b[33] + b[2] + b[13] + b[20] + Math.floor(A * 256);
  
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 909491047;
          continue;
        case 30908364:
          if (35931224n) {
            a = 1;
            b[14] ^= (b[30] + b[15] + b[38] + b[22] + b[16] + b[35] + 132) & 0xFF;
          } else {
            b[35] ^= (b[37] + b[43] + b[27] + b[22] + b[31] + b[15] + 150) & 0xFF;
          };
          console.log(state, a);
          state = 1062403814;
          continue;
        case 34833634:
          if (375677031) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[37] += b[35] + b[19] + b[32] + b[7] + b[41] + b[0] + Math.floor(A * 256);
  
            b[37] &= 0xFF;
          } else {
            b[5] += b[11] + b[20] + b[24] + b[37] + b[33] + b[38] + 113;
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 740484943;
          continue;
        case 34947844:
          if (447103476) {
            a = 1;
            b[14] += b[23] + b[4] + b[27] + b[20] + b[29] + b[0] + 166;
            b[14] &= 0xFF;
          } else {
            b[8] += b[1] + b[25] + b[39] + b[34] + b[24] + b[9] + 172;
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 843006226;
          continue;
        case 34972620:
          if (345553606) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[23] += b[10] + b[40] + b[26] + b[0] + b[28] + b[19] + Math.floor(A * 256);
  
            b[23] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[42] += b[1] + b[29] + b[8] + b[32] + b[23] + b[16] + Math.floor(A * 256);
  
            b[42] &= 0xFF;
          };
          console.log(state, a);
          state = 299526397;
          continue;
        case 38681753:
          if (Math.random() < 0.5) {
            a = 1;
            b[15] += b[36] + b[13] + b[25] + b[9] + b[0] + b[24] + 18;
            b[15] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[41] += b[33] + b[12] + b[27] + b[40] + b[9] + b[4] + Math.floor(A * 256);
  
            b[41] &= 0xFF;
          };
          console.log(state, a);
          state = 277618656;
          continue;
        case 39901217:
          if (781285820) {
            a = 1;
            b[10] ^= (b[30] + b[33] + b[41] + b[12] + b[26] + b[31] + 216) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[34] -= b[43] + b[0] + b[24] + b[6] + b[36] + b[41] + Math.floor(A * 256);
  
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 465346590;
          continue;
        case 39933208:
          if (927103657) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[18] -= b[2] + b[10] + b[6] + b[19] + b[9] + b[15] + Math.floor(A * 256);
  
            b[18] &= 0xFF;
          } else {
            b[23] -= b[32] + b[13] + b[35] + b[34] + b[14] + b[1] + 195;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 374789219;
          continue;
        case 42721917:
          if (69259497n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[28] ^= (b[10] + b[34] + b[31] + b[29] + b[17] + b[11] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[7] += b[4] + b[34] + b[24] + b[30] + b[35] + b[20] + 225;
            b[7] &= 0xFF;
          };
          console.log(state, a);
          state = 278335386;
          continue;
        case 44075365:
          if (419589377) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[24] ^= (b[32] + b[6] + b[39] + b[21] + b[16] + b[15] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[18] -= b[25] + b[39] + b[0] + b[35] + b[42] + b[6] + 84;
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 773690009;
          continue;
        case 45845929:
          if (893934628) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[30] += b[13] + b[41] + b[10] + b[19] + b[24] + b[2] + Math.floor(A * 256);
  
            b[30] &= 0xFF;
          } else {
            b[8] += b[30] + b[1] + b[37] + b[6] + b[26] + b[10] + 198;
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 345530955;
          continue;
        case 46607160:
          if (Math.random() < 0.5) {
            a = 1;
            b[6] += b[43] + b[36] + b[42] + b[4] + b[19] + b[24] + 91;
            b[6] &= 0xFF;
          } else {
            b[13] -= b[7] + b[34] + b[31] + b[25] + b[14] + b[6] + 174;
            b[13] &= 0xFF;
          };
          console.log(state, a);
          state = 996693809;
          continue;
        case 46747763:
          if (76892474n) {
            a = 1;
            b[23] -= b[32] + b[11] + b[36] + b[20] + b[35] + b[34] + 25;
            b[23] &= 0xFF;
          } else {
            b[1] -= b[0] + b[22] + b[29] + b[31] + b[18] + b[9] + 50;
            b[1] &= 0xFF;
          };
          console.log(state, a);
          state = 648867131;
          continue;
        case 46928954:
          if (Math.random() < 0.5) {
            a = 1;
            b[17] += b[3] + b[13] + b[37] + b[25] + b[8] + b[0] + 53;
            b[17] &= 0xFF;
          } else {
            b[25] ^= (b[2] + b[27] + b[23] + b[4] + b[34] + b[0] + 133) & 0xFF;
          };
          console.log(state, a);
          state = 240398672;
          continue;
        case 48246086:
          if (588937531) {
            a = 1;
            b[11] -= b[26] + b[13] + b[17] + b[10] + b[14] + b[42] + 62;
            b[11] &= 0xFF;
          } else {
            b[35] += b[37] + b[23] + b[18] + b[26] + b[20] + b[30] + 140;
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 794163495;
          continue;
        case 49148585:
          if (417990032) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[1] -= b[9] + b[24] + b[17] + b[40] + b[14] + b[26] + Math.floor(A * 256);
  
            b[1] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[4] ^= (b[22] + b[2] + b[17] + b[1] + b[9] + b[40] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 487330863;
          continue;
        case 49324191:
          if (95502376n) {
            a = 1;
            b[26] -= b[27] + b[9] + b[21] + b[39] + b[6] + b[25] + 65;
            b[26] &= 0xFF;
          } else {
            b[19] -= b[24] + b[30] + b[42] + b[11] + b[43] + b[17] + 163;
            b[19] &= 0xFF;
          };
          console.log(state, a);
          state = 71981081;
          continue;
        case 50858850:
          if (796808282) {
            a = 1;
            b[21] -= b[8] + b[14] + b[15] + b[0] + b[26] + b[10] + 71;
            b[21] &= 0xFF;
          } else {
            b[12] ^= (b[19] + b[16] + b[28] + b[14] + b[40] + b[33] + 158) & 0xFF;
          };
          console.log(state, a);
          state = 465897814;
          continue;
        case 54109746:
          if (Math.random() < 0.5) {
            a = 1;
            b[20] ^= (b[40] + b[15] + b[25] + b[34] + b[19] + b[42] + 251) & 0xFF;
          } else {
            b[3] -= b[29] + b[39] + b[8] + b[19] + b[10] + b[5] + 132;
            b[3] &= 0xFF;
          };
          console.log(state, a);
          state = 551432967;
          continue;
        case 59933137:
          if (13822198n) {
            a = 1;
            b[27] += b[5] + b[28] + b[42] + b[4] + b[38] + b[3] + 221;
            b[27] &= 0xFF;
          } else {
            b[0] ^= (b[26] + b[4] + b[34] + b[16] + b[15] + b[7] + 115) & 0xFF;
          };
          console.log(state, a);
          state = 762796303;
          continue;
        case 61896397:
          if (17375720n) {
            a = 1;
            b[31] -= b[29] + b[40] + b[13] + b[24] + b[43] + b[30] + 59;
            b[31] &= 0xFF;
          } else {
            b[33] += b[17] + b[11] + b[40] + b[2] + b[20] + b[42] + 39;
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 620414172;
          continue;
        case 62103505:
          if (Math.random() < 0.5) {
            a = 1;
            b[6] ^= (b[35] + b[37] + b[7] + b[31] + b[29] + b[15] + 217) & 0xFF;
          } else {
            b[25] ^= (b[3] + b[37] + b[35] + b[23] + b[24] + b[27] + 77) & 0xFF;
          };
          console.log(state, a);
          state = 1029688904;
          continue;
        case 62120866:
          if (82193589n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[19] += b[21] + b[17] + b[10] + b[33] + b[28] + b[34] + Math.floor(A * 256);
  
            b[19] &= 0xFF;
          } else {
            b[42] ^= (b[8] + b[4] + b[28] + b[10] + b[33] + b[6] + 226) & 0xFF;
          };
          console.log(state, a);
          state = 900361163;
          continue;
        case 62123647:
          if (10182515n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[5] -= b[39] + b[26] + b[32] + b[13] + b[40] + b[31] + Math.floor(A * 256);
  
            b[5] &= 0xFF;
          } else {
            b[41] ^= (b[24] + b[30] + b[0] + b[26] + b[25] + b[3] + 85) & 0xFF;
          };
          console.log(state, a);
          state = 9530685;
          continue;
        case 62823208:
          if (55503888n) {
            a = 1;
            b[16] -= b[13] + b[41] + b[6] + b[15] + b[20] + b[10] + 21;
            b[16] &= 0xFF;
          } else {
            b[8] -= b[11] + b[9] + b[32] + b[5] + b[22] + b[42] + 4;
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 71885864;
          continue;
        case 64944481:
          if (Math.random() < 0.5) {
            a = 1;
            b[30] += b[13] + b[3] + b[31] + b[16] + b[7] + b[34] + 200;
            b[30] &= 0xFF;
          } else {
            b[8] += b[2] + b[14] + b[13] + b[15] + b[7] + b[9] + 91;
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 1069782404;
          continue;
        case 65487162:
          if (92018218n) {
            a = 1;
            b[24] -= b[33] + b[37] + b[21] + b[1] + b[36] + b[12] + 29;
            b[24] &= 0xFF;
          } else {
            b[17] -= b[3] + b[5] + b[14] + b[40] + b[27] + b[24] + 29;
            b[17] &= 0xFF;
          };
          console.log(state, a);
          state = 595543388;
          continue;
        case 67023845:
          if (Math.random() < 0.5) {
            a = 1;
            b[19] += b[31] + b[26] + b[18] + b[27] + b[22] + b[5] + 222;
            b[19] &= 0xFF;
          } else {
            b[20] += b[35] + b[19] + b[11] + b[14] + b[12] + b[25] + 29;
            b[20] &= 0xFF;
          };
          console.log(state, a);
          state = 553195647;
          continue;
        case 67652373:
          if (824219142) {
            a = 1;
            b[13] ^= (b[8] + b[24] + b[29] + b[10] + b[12] + b[20] + 19) & 0xFF;
          } else {
            b[43] ^= (b[11] + b[17] + b[36] + b[26] + b[30] + b[8] + 200) & 0xFF;
          };
          console.log(state, a);
          state = 319612083;
          continue;
        case 68328143:
          if (802998580) {
            a = 1;
            b[12] += b[37] + b[17] + b[6] + b[23] + b[5] + b[14] + 88;
            b[12] &= 0xFF;
          } else {
            b[12] -= b[21] + b[23] + b[0] + b[32] + b[28] + b[17] + 252;
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 958557393;
          continue;
        case 69352640:
          if (56702756) {
            a = 1;
            b[3] ^= (b[14] + b[35] + b[9] + b[16] + b[38] + b[27] + 168) & 0xFF;
          } else {
            b[39] ^= (b[1] + b[38] + b[10] + b[5] + b[23] + b[19] + 138) & 0xFF;
          };
          console.log(state, a);
          state = 183100909;
          continue;
        case 70871791:
          if (Math.random() < 0.5) {
            a = 1;
            b[9] += b[14] + b[38] + b[21] + b[30] + b[8] + b[40] + 179;
            b[9] &= 0xFF;
          } else {
            b[2] += b[40] + b[42] + b[9] + b[28] + b[14] + b[30] + 126;
            b[2] &= 0xFF;
          };
          console.log(state, a);
          state = 561771291;
          continue;
        case 72161969:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[5] += b[30] + b[23] + b[6] + b[24] + b[15] + b[18] + Math.floor(A * 256);
  
            b[5] &= 0xFF;
          } else {
            b[10] += b[1] + b[6] + b[3] + b[15] + b[38] + b[35] + 252;
            b[10] &= 0xFF;
          };
          console.log(state, a);
          state = 743467963;
          continue;
        case 72439384:
          if (70328947n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[24] -= b[8] + b[35] + b[21] + b[9] + b[2] + b[22] + Math.floor(A * 256);
  
            b[24] &= 0xFF;
          } else {
            b[6] += b[36] + b[18] + b[31] + b[1] + b[43] + b[5] + 4;
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 565201962;
          continue;
        case 72654807:
          if (639707451) {
            a = 1;
            b[18] -= b[5] + b[11] + b[28] + b[8] + b[19] + b[24] + 10;
            b[18] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[21] += b[24] + b[22] + b[26] + b[0] + b[36] + b[6] + Math.floor(A * 256);
  
            b[21] &= 0xFF;
          };
          console.log(state, a);
          state = 200999436;
          continue;
        case 73566854:
          if (29773184n) {
            a = 1;
            b[16] -= b[38] + b[2] + b[13] + b[22] + b[40] + b[7] + 98;
            b[16] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[25] -= b[17] + b[0] + b[37] + b[39] + b[11] + b[28] + Math.floor(A * 256);
  
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 647560898;
          continue;
        case 74663331:
          if (Math.random() < 0.5) {
            a = 1;
            b[3] -= b[4] + b[16] + b[36] + b[24] + b[19] + b[12] + 53;
            b[3] &= 0xFF;
          } else {
            b[14] -= b[3] + b[12] + b[22] + b[19] + b[35] + b[38] + 115;
            b[14] &= 0xFF;
          };
          console.log(state, a);
          state = 120002893;
          continue;
        case 74705707:
          if (56658661n) {
            a = 1;
            b[7] += b[29] + b[21] + b[22] + b[3] + b[1] + b[38] + 169;
            b[7] &= 0xFF;
          } else {
            b[26] -= b[29] + b[20] + b[22] + b[5] + b[13] + b[27] + 202;
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 241317555;
          continue;
        case 75488718:
          if (55862869n) {
            a = 1;
            b[6] ^= (b[26] + b[43] + b[28] + b[36] + b[25] + b[30] + 159) & 0xFF;
          } else {
            b[12] ^= (b[7] + b[38] + b[20] + b[21] + b[1] + b[36] + 136) & 0xFF;
          };
          console.log(state, a);
          state = 585049676;
          continue;
        case 76812692:
          if (205705560) {
            a = 1;
            b[38] += b[21] + b[37] + b[13] + b[28] + b[16] + b[39] + 8;
            b[38] &= 0xFF;
          } else {
            b[21] -= b[31] + b[13] + b[2] + b[15] + b[34] + b[37] + 41;
            b[21] &= 0xFF;
          };
          console.log(state, a);
          state = 850695262;
          continue;
        case 76961033:
          if (31646617n) {
            a = 1;
            b[24] ^= (b[17] + b[38] + b[32] + b[14] + b[35] + b[28] + 96) & 0xFF;
          } else {
            b[33] ^= (b[8] + b[26] + b[23] + b[0] + b[30] + b[9] + 207) & 0xFF;
          };
          console.log(state, a);
          state = 1037693180;
          continue;
        case 77583880:
          if (62485669n) {
            a = 1;
            b[10] -= b[41] + b[29] + b[42] + b[37] + b[4] + b[23] + 211;
            b[10] &= 0xFF;
          } else {
            b[1] ^= (b[29] + b[38] + b[34] + b[42] + b[13] + b[41] + 214) & 0xFF;
          };
          console.log(state, a);
          state = 296344129;
          continue;
        case 77910142:
          if (600975230) {
            a = 1;
            b[38] += b[24] + b[26] + b[22] + b[3] + b[11] + b[12] + 33;
            b[38] &= 0xFF;
          } else {
            b[10] -= b[32] + b[39] + b[7] + b[21] + b[30] + b[1] + 90;
            b[10] &= 0xFF;
          };
          console.log(state, a);
          state = 782879555;
          continue;
        case 78399834:
          if (56847919n) {
            a = 1;
            b[1] -= b[30] + b[27] + b[38] + b[28] + b[11] + b[0] + 42;
            b[1] &= 0xFF;
          } else {
            b[41] -= b[42] + b[29] + b[35] + b[11] + b[6] + b[34] + 83;
            b[41] &= 0xFF;
          };
          console.log(state, a);
          state = 513256234;
          continue;
        case 79593073:
          if (Math.random() < 0.5) {
            a = 1;
            b[32] ^= (b[33] + b[12] + b[21] + b[7] + b[36] + b[2] + 173) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[37] += b[29] + b[35] + b[20] + b[22] + b[43] + b[32] + Math.floor(A * 256);
  
            b[37] &= 0xFF;
          };
          console.log(state, a);
          state = 384670766;
          continue;
        case 81117788:
          if (801248195) {
            a = 1;
            b[30] -= b[32] + b[19] + b[29] + b[5] + b[16] + b[21] + 34;
            b[30] &= 0xFF;
          } else {
            b[3] -= b[38] + b[9] + b[11] + b[8] + b[34] + b[7] + 167;
            b[3] &= 0xFF;
          };
          console.log(state, a);
          state = 999933095;
          continue;
        case 82799741:
          if (Math.random() < 0.5) {
            a = 1;
            b[4] -= b[21] + b[9] + b[40] + b[6] + b[12] + b[28] + 181;
            b[4] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[29] += b[23] + b[31] + b[18] + b[15] + b[11] + b[37] + Math.floor(A * 256);
  
            b[29] &= 0xFF;
          };
          console.log(state, a);
          state = 385701510;
          continue;
        case 84809963:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[26] += b[8] + b[12] + b[33] + b[39] + b[19] + b[29] + Math.floor(A * 256);
  
            b[26] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[32] ^= (b[23] + b[14] + b[39] + b[41] + b[42] + b[18] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 504774667;
          continue;
        case 85080588:
          if (762957074) {
            a = 1;
            b[10] += b[9] + b[30] + b[24] + b[32] + b[42] + b[25] + 245;
            b[10] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[29] += b[13] + b[1] + b[28] + b[14] + b[41] + b[26] + Math.floor(A * 256);
  
            b[29] &= 0xFF;
          };
          console.log(state, a);
          state = 670620031;
          continue;
        case 86006683:
          if (26903160n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[22] += b[29] + b[42] + b[40] + b[38] + b[8] + b[6] + Math.floor(A * 256);
  
            b[22] &= 0xFF;
          } else {
            b[38] += b[6] + b[32] + b[40] + b[20] + b[2] + b[35] + 35;
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 73230932;
          continue;
        case 86029451:
          if (28417424n) {
            a = 1;
            b[4] ^= (b[42] + b[8] + b[12] + b[1] + b[16] + b[41] + 71) & 0xFF;
          } else {
            b[24] ^= (b[31] + b[0] + b[27] + b[28] + b[14] + b[34] + 22) & 0xFF;
          };
          console.log(state, a);
          state = 657193974;
          continue;
        case 89525183:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[16] += b[8] + b[41] + b[28] + b[0] + b[21] + b[34] + Math.floor(A * 256);
  
            b[16] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[25] += b[16] + b[21] + b[28] + b[35] + b[14] + b[37] + Math.floor(A * 256);
  
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 845956452;
          continue;
        case 90236103:
          if (69736832n) {
            a = 1;
            b[39] += b[24] + b[41] + b[16] + b[18] + b[14] + b[36] + 176;
            b[39] &= 0xFF;
          } else {
            b[42] += b[43] + b[24] + b[7] + b[35] + b[30] + b[3] + 1;
            b[42] &= 0xFF;
          };
          console.log(state, a);
          state = 507899681;
          continue;
        case 90412683:
          if (24252696n) {
            a = 1;
            b[38] ^= (b[25] + b[40] + b[30] + b[15] + b[5] + b[2] + 46) & 0xFF;
          } else {
            b[25] += b[15] + b[16] + b[29] + b[37] + b[1] + b[40] + 24;
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 1013386123;
          continue;
        case 93408349:
          if (1031269396) {
            a = 1;
            b[35] += b[25] + b[2] + b[10] + b[12] + b[21] + b[31] + 252;
            b[35] &= 0xFF;
          } else {
            b[27] -= b[13] + b[36] + b[10] + b[40] + b[35] + b[42] + 138;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 57422384;
          continue;
        case 93795926:
          if (354560856) {
            a = 1;
            b[17] += b[8] + b[26] + b[24] + b[0] + b[19] + b[40] + 59;
            b[17] &= 0xFF;
          } else {
            b[22] ^= (b[1] + b[5] + b[10] + b[3] + b[12] + b[16] + 207) & 0xFF;
          };
          console.log(state, a);
          state = 963963899;
          continue;
        case 94971741:
          if (1003392644) {
            a = 1;
            b[27] -= b[37] + b[35] + b[33] + b[32] + b[24] + b[20] + 156;
            b[27] &= 0xFF;
          } else {
            b[3] ^= (b[22] + b[15] + b[43] + b[26] + b[13] + b[41] + 238) & 0xFF;
          };
          console.log(state, a);
          state = 704120363;
          continue;
        case 95593244:
          if (581345812) {
            a = 1;
            b[27] += b[5] + b[42] + b[17] + b[16] + b[8] + b[18] + 55;
            b[27] &= 0xFF;
          } else {
            b[33] ^= (b[39] + b[15] + b[37] + b[20] + b[5] + b[29] + 42) & 0xFF;
          };
          console.log(state, a);
          state = 1059203392;
          continue;
        case 95732224:
          if (54814413n) {
            a = 1;
            b[37] -= b[13] + b[12] + b[18] + b[35] + b[11] + b[2] + 24;
            b[37] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[19] ^= (b[13] + b[36] + b[38] + b[1] + b[2] + b[24] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 42840541;
          continue;
        case 96456627:
          if (576136258) {
            a = 1;
            b[24] += b[35] + b[10] + b[42] + b[2] + b[41] + b[34] + 230;
            b[24] &= 0xFF;
          } else {
            b[1] -= b[36] + b[28] + b[19] + b[30] + b[21] + b[17] + 98;
            b[1] &= 0xFF;
          };
          console.log(state, a);
          state = 914544092;
          continue;
        case 96633871:
          if (837439616) {
            a = 1;
            b[3] -= b[16] + b[5] + b[28] + b[29] + b[13] + b[36] + 15;
            b[3] &= 0xFF;
          } else {
            b[9] += b[7] + b[19] + b[29] + b[30] + b[38] + b[13] + 60;
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 583517047;
          continue;
        case 96720363:
          if (751417871) {
            a = 1;
            b[14] += b[25] + b[22] + b[41] + b[16] + b[37] + b[33] + 24;
            b[14] &= 0xFF;
          } else {
            b[30] -= b[33] + b[40] + b[38] + b[19] + b[36] + b[16] + 196;
            b[30] &= 0xFF;
          };
          console.log(state, a);
          state = 1007008023;
          continue;
        case 98917269:
          if (41809322n) {
            a = 1;
            b[26] += b[8] + b[15] + b[16] + b[17] + b[39] + b[42] + 151;
            b[26] &= 0xFF;
          } else {
            b[23] += b[29] + b[20] + b[26] + b[28] + b[38] + b[14] + 39;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 565836977;
          continue;
        case 100256691:
          if (288189111) {
            a = 1;
            b[9] += b[28] + b[2] + b[24] + b[7] + b[14] + b[40] + 223;
            b[9] &= 0xFF;
          } else {
            b[5] += b[6] + b[36] + b[20] + b[33] + b[23] + b[26] + 186;
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 278446337;
          continue;
        case 100604142:
          if (Math.random() < 0.5) {
            a = 1;
            b[30] ^= (b[35] + b[42] + b[39] + b[19] + b[17] + b[18] + 118) & 0xFF;
          } else {
            b[7] ^= (b[26] + b[4] + b[20] + b[34] + b[9] + b[38] + 2) & 0xFF;
          };
          console.log(state, a);
          state = 256573723;
          continue;
        case 100730117:
          if (423881324) {
            a = 1;
            b[7] -= b[12] + b[27] + b[25] + b[16] + b[29] + b[13] + 146;
            b[7] &= 0xFF;
          } else {
            b[39] += b[18] + b[27] + b[15] + b[20] + b[28] + b[9] + 242;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 291298603;
          continue;
        case 100941470:
          if (61552821n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[10] += b[35] + b[24] + b[36] + b[12] + b[18] + b[7] + Math.floor(A * 256);
  
            b[10] &= 0xFF;
          } else {
            b[4] += b[23] + b[19] + b[28] + b[41] + b[31] + b[43] + 205;
            b[4] &= 0xFF;
          };
          console.log(state, a);
          state = 477286010;
          continue;
        case 100980325:
          if (339440603) {
            a = 1;
            b[33] -= b[23] + b[19] + b[12] + b[38] + b[0] + b[15] + 136;
            b[33] &= 0xFF;
          } else {
            b[43] += b[1] + b[24] + b[31] + b[29] + b[35] + b[42] + 3;
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 448764168;
          continue;
        case 102772698:
          if (94641526) {
            a = 1;
            b[22] -= b[11] + b[3] + b[29] + b[10] + b[36] + b[28] + 48;
            b[22] &= 0xFF;
          } else {
            b[24] ^= (b[38] + b[40] + b[42] + b[25] + b[13] + b[43] + 64) & 0xFF;
          };
          console.log(state, a);
          state = 190977891;
          continue;
        case 103663748:
          if (Math.random() < 0.5) {
            a = 1;
            b[19] ^= (b[27] + b[4] + b[28] + b[18] + b[8] + b[3] + 162) & 0xFF;
          } else {
            b[7] ^= (b[31] + b[32] + b[1] + b[36] + b[12] + b[40] + 68) & 0xFF;
          };
          console.log(state, a);
          state = 535511042;
          continue;
        case 103901370:
          if (466215850) {
            a = 1;
            b[30] ^= (b[10] + b[6] + b[14] + b[9] + b[28] + b[27] + 98) & 0xFF;
          } else {
            b[23] += b[0] + b[25] + b[10] + b[26] + b[38] + b[24] + 236;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 345722137;
          continue;
        case 104812740:
          if (282147743) {
            a = 1;
            b[27] ^= (b[28] + b[17] + b[3] + b[8] + b[18] + b[36] + 245) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[41] += b[33] + b[9] + b[34] + b[26] + b[3] + b[14] + Math.floor(A * 256);
  
            b[41] &= 0xFF;
          };
          console.log(state, a);
          state = 625809930;
          continue;
        case 105007401:
          if (369756360) {
            a = 1;
            b[17] -= b[42] + b[25] + b[26] + b[19] + b[35] + b[4] + 55;
            b[17] &= 0xFF;
          } else {
            b[12] += b[39] + b[11] + b[40] + b[18] + b[8] + b[17] + 210;
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 203996210;
          continue;
        case 105766033:
          if (73139772n) {
            a = 1;
            b[3] -= b[12] + b[8] + b[4] + b[42] + b[30] + b[13] + 44;
            b[3] &= 0xFF;
          } else {
            b[33] += b[21] + b[13] + b[25] + b[29] + b[36] + b[18] + 139;
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 200659076;
          continue;
        case 105837962:
          if (25999949n) {
            a = 1;
            b[6] += b[27] + b[2] + b[33] + b[29] + b[12] + b[25] + 252;
            b[6] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[40] ^= (b[13] + b[15] + b[22] + b[24] + b[43] + b[39] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 548604337;
          continue;
        case 107012627:
          if (843375165) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[19] -= b[26] + b[43] + b[15] + b[22] + b[35] + b[25] + Math.floor(A * 256);
  
            b[19] &= 0xFF;
          } else {
            b[12] -= b[1] + b[33] + b[11] + b[10] + b[37] + b[8] + 155;
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 706921542;
          continue;
        case 107361852:
          if (71427674n) {
            a = 1;
            b[41] += b[3] + b[14] + b[19] + b[6] + b[13] + b[25] + 168;
            b[41] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[2] ^= (b[32] + b[41] + b[24] + b[22] + b[17] + b[21] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 533630845;
          continue;
        case 107684849:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[31] ^= (b[16] + b[13] + b[28] + b[21] + b[0] + b[27] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[42] ^= (b[43] + b[41] + b[15] + b[4] + b[21] + b[29] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 353740394;
          continue;
        case 107948494:
          if (70229755n) {
            a = 1;
            b[13] -= b[34] + b[1] + b[31] + b[15] + b[12] + b[8] + 206;
            b[13] &= 0xFF;
          } else {
            b[20] += b[8] + b[11] + b[41] + b[14] + b[9] + b[40] + 69;
            b[20] &= 0xFF;
          };
          console.log(state, a);
          state = 625310147;
          continue;
        case 108953795:
          if (Math.random() < 0.5) {
            a = 1;
            b[28] += b[40] + b[43] + b[5] + b[21] + b[3] + b[24] + 231;
            b[28] &= 0xFF;
          } else {
            b[35] -= b[32] + b[42] + b[11] + b[0] + b[28] + b[14] + 229;
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 471309236;
          continue;
        case 109814501:
          if (61688459n) {
            a = 1;
            b[15] -= b[31] + b[14] + b[41] + b[18] + b[39] + b[21] + 4;
            b[15] &= 0xFF;
          } else {
            b[18] ^= (b[33] + b[23] + b[19] + b[34] + b[3] + b[42] + 133) & 0xFF;
          };
          console.log(state, a);
          state = 625666051;
          continue;
        case 110286030:
          if (185368972) {
            a = 1;
            b[2] += b[5] + b[34] + b[30] + b[39] + b[28] + b[21] + 199;
            b[2] &= 0xFF;
          } else {
            b[13] += b[25] + b[26] + b[22] + b[15] + b[19] + b[14] + 68;
            b[13] &= 0xFF;
          };
          console.log(state, a);
          state = 923831682;
          continue;
        case 110430724:
          if (Math.random() < 0.5) {
            a = 1;
            b[42] ^= (b[3] + b[16] + b[27] + b[19] + b[13] + b[30] + 88) & 0xFF;
          } else {
            b[10] += b[9] + b[39] + b[6] + b[32] + b[11] + b[35] + 18;
            b[10] &= 0xFF;
          };
          console.log(state, a);
          state = 342092904;
          continue;
        case 110713232:
          if (Math.random() < 0.5) {
            a = 1;
            b[10] += b[39] + b[37] + b[32] + b[9] + b[29] + b[0] + 138;
            b[10] &= 0xFF;
          } else {
            b[37] ^= (b[24] + b[6] + b[33] + b[31] + b[12] + b[29] + 132) & 0xFF;
          };
          console.log(state, a);
          state = 976020731;
          continue;
        case 111025682:
          if (Math.random() < 0.5) {
            a = 1;
            b[42] -= b[35] + b[20] + b[11] + b[0] + b[31] + b[33] + 171;
            b[42] &= 0xFF;
          } else {
            b[16] += b[30] + b[0] + b[3] + b[34] + b[15] + b[21] + 26;
            b[16] &= 0xFF;
          };
          console.log(state, a);
          state = 92909967;
          continue;
        case 111161662:
          if (Math.random() < 0.5) {
            a = 1;
            b[40] ^= (b[26] + b[25] + b[5] + b[36] + b[7] + b[22] + 225) & 0xFF;
          } else {
            b[19] -= b[5] + b[4] + b[26] + b[1] + b[39] + b[16] + 76;
            b[19] &= 0xFF;
          };
          console.log(state, a);
          state = 554498806;
          continue;
        case 113700411:
          if (74917685n) {
            a = 1;
            b[11] ^= (b[28] + b[15] + b[29] + b[34] + b[4] + b[41] + 142) & 0xFF;
          } else {
            b[35] ^= (b[12] + b[18] + b[39] + b[0] + b[10] + b[3] + 148) & 0xFF;
          };
          console.log(state, a);
          state = 753568692;
          continue;
        case 114492214:
          if (133555304) {
            a = 1;
            b[26] ^= (b[19] + b[22] + b[36] + b[25] + b[35] + b[29] + 115) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[7] ^= (b[16] + b[24] + b[28] + b[32] + b[4] + b[5] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 593990082;
          continue;
        case 117244801:
          if (2243214) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[32] += b[2] + b[14] + b[19] + b[43] + b[4] + b[30] + Math.floor(A * 256);
  
            b[32] &= 0xFF;
          } else {
            b[32] -= b[4] + b[35] + b[22] + b[40] + b[28] + b[39] + 46;
            b[32] &= 0xFF;
          };
          console.log(state, a);
          state = 739966340;
          continue;
        case 118934062:
          if (822632380) {
            a = 1;
            b[33] -= b[26] + b[12] + b[28] + b[43] + b[38] + b[22] + 59;
            b[33] &= 0xFF;
          } else {
            b[33] += b[11] + b[10] + b[29] + b[31] + b[42] + b[1] + 145;
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 851877108;
          continue;
        case 120900299:
          if (976215988) {
            a = 1;
            b[26] -= b[29] + b[10] + b[2] + b[13] + b[0] + b[5] + 27;
            b[26] &= 0xFF;
          } else {
            b[43] ^= (b[41] + b[14] + b[37] + b[38] + b[15] + b[10] + 217) & 0xFF;
          };
          console.log(state, a);
          state = 1001894258;
          continue;
        case 122546316:
          if (24322464n) {
            a = 1;
            b[18] ^= (b[14] + b[1] + b[20] + b[0] + b[6] + b[25] + 126) & 0xFF;
          } else {
            b[5] -= b[22] + b[8] + b[12] + b[24] + b[37] + b[31] + 149;
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 823812251;
          continue;
        case 124291036:
          if (71613682n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[2] += b[43] + b[27] + b[6] + b[32] + b[34] + b[14] + Math.floor(A * 256);
  
            b[2] &= 0xFF;
          } else {
            b[12] -= b[8] + b[0] + b[3] + b[24] + b[33] + b[42] + 152;
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 656479648;
          continue;
        case 124331859:
          if (909168317) {
            a = 1;
            b[39] ^= (b[31] + b[21] + b[11] + b[25] + b[42] + b[27] + 96) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[42] ^= (b[13] + b[2] + b[20] + b[16] + b[6] + b[34] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 341128420;
          continue;
        case 124690486:
          if (77264479n) {
            a = 1;
            b[13] -= b[30] + b[17] + b[4] + b[11] + b[29] + b[19] + 93;
            b[13] &= 0xFF;
          } else {
            b[6] ^= (b[24] + b[19] + b[12] + b[10] + b[8] + b[34] + 3) & 0xFF;
          };
          console.log(state, a);
          state = 735389915;
          continue;
        case 125689889:
          if (81753748n) {
            a = 1;
            b[13] += b[4] + b[24] + b[35] + b[34] + b[43] + b[32] + 26;
            b[13] &= 0xFF;
          } else {
            b[3] -= b[29] + b[14] + b[12] + b[39] + b[32] + b[28] + 145;
            b[3] &= 0xFF;
          };
          console.log(state, a);
          state = 22742525;
          continue;
        case 129013201:
          if (93110533n) {
            a = 1;
            b[24] ^= (b[8] + b[30] + b[3] + b[41] + b[36] + b[7] + 136) & 0xFF;
          } else {
            b[14] += b[5] + b[19] + b[11] + b[36] + b[26] + b[1] + 55;
            b[14] &= 0xFF;
          };
          console.log(state, a);
          state = 897709913;
          continue;
        case 129226256:
          if (691330426) {
            a = 1;
            b[17] += b[26] + b[2] + b[5] + b[41] + b[16] + b[29] + 17;
            b[17] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[8] -= b[40] + b[12] + b[41] + b[20] + b[5] + b[30] + Math.floor(A * 256);
  
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 210970895;
          continue;
        case 129895060:
          if (862732011) {
            a = 1;
            b[1] += b[35] + b[20] + b[37] + b[28] + b[19] + b[36] + 82;
            b[1] &= 0xFF;
          } else {
            b[14] -= b[30] + b[5] + b[35] + b[41] + b[3] + b[17] + 119;
            b[14] &= 0xFF;
          };
          console.log(state, a);
          state = 613921509;
          continue;
        case 130000735:
          if (22750621n) {
            a = 1;
            b[39] -= b[43] + b[35] + b[4] + b[37] + b[9] + b[32] + 223;
            b[39] &= 0xFF;
          } else {
            b[32] -= b[18] + b[13] + b[30] + b[33] + b[23] + b[35] + 80;
            b[32] &= 0xFF;
          };
          console.log(state, a);
          state = 628365389;
          continue;
        case 131273933:
          if (651761731) {
            a = 1;
            b[2] ^= (b[18] + b[29] + b[1] + b[7] + b[31] + b[17] + 119) & 0xFF;
          } else {
            b[6] -= b[30] + b[21] + b[2] + b[19] + b[35] + b[20] + 249;
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 353570504;
          continue;
        case 132987555:
          if (228460182) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[35] += b[1] + b[37] + b[3] + b[10] + b[28] + b[4] + Math.floor(A * 256);
  
            b[35] &= 0xFF;
          } else {
            b[12] += b[13] + b[21] + b[20] + b[15] + b[31] + b[16] + 13;
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 636639591;
          continue;
        case 134845953:
          if (51096671n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[42] += b[29] + b[14] + b[31] + b[22] + b[36] + b[33] + Math.floor(A * 256);
  
            b[42] &= 0xFF;
          } else {
            b[21] += b[24] + b[11] + b[18] + b[35] + b[17] + b[23] + 242;
            b[21] &= 0xFF;
          };
          console.log(state, a);
          state = 817628987;
          continue;
        case 135863760:
          if (68677418n) {
            a = 1;
            b[2] -= b[27] + b[43] + b[1] + b[19] + b[34] + b[30] + 91;
            b[2] &= 0xFF;
          } else {
            b[5] ^= (b[36] + b[41] + b[6] + b[26] + b[18] + b[4] + 29) & 0xFF;
          };
          console.log(state, a);
          state = 924220962;
          continue;
        case 136698433:
          if (384726620) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[24] += b[14] + b[38] + b[4] + b[12] + b[5] + b[0] + Math.floor(A * 256);
  
            b[24] &= 0xFF;
          } else {
            b[1] ^= (b[21] + b[7] + b[37] + b[30] + b[28] + b[32] + 188) & 0xFF;
          };
          console.log(state, a);
          state = 212469830;
          continue;
        case 137156820:
          if (92958307n) {
            a = 1;
            b[5] += b[4] + b[7] + b[28] + b[43] + b[12] + b[26] + 54;
            b[5] &= 0xFF;
          } else {
            b[39] ^= (b[2] + b[13] + b[40] + b[8] + b[23] + b[14] + 143) & 0xFF;
          };
          console.log(state, a);
          state = 579328230;
          continue;
        case 137590596:
          if (802464505) {
            a = 1;
            b[33] ^= (b[19] + b[35] + b[24] + b[40] + b[30] + b[26] + 99) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[41] ^= (b[28] + b[0] + b[23] + b[12] + b[37] + b[29] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 875069506;
          continue;
        case 137630475:
          if (Math.random() < 0.5) {
            a = 1;
            b[38] ^= (b[39] + b[2] + b[0] + b[31] + b[29] + b[5] + 160) & 0xFF;
          } else {
            b[6] ^= (b[29] + b[32] + b[33] + b[21] + b[37] + b[13] + 49) & 0xFF;
          };
          console.log(state, a);
          state = 768231765;
          continue;
        case 138090095:
          if (Math.random() < 0.5) {
            a = 1;
            b[40] += b[17] + b[11] + b[23] + b[6] + b[10] + b[14] + 171;
            b[40] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[3] ^= (b[1] + b[38] + b[15] + b[35] + b[25] + b[23] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 587130542;
          continue;
        case 141811531:
          if (11783528n) {
            a = 1;
            b[15] ^= (b[16] + b[10] + b[9] + b[6] + b[21] + b[26] + 223) & 0xFF;
          } else {
            b[16] -= b[5] + b[15] + b[14] + b[6] + b[17] + b[33] + 51;
            b[16] &= 0xFF;
          };
          console.log(state, a);
          state = 205756057;
          continue;
        case 148008988:
          if (824341643) {
            a = 1;
            b[11] += b[42] + b[6] + b[21] + b[9] + b[8] + b[7] + 135;
            b[11] &= 0xFF;
          } else {
            b[31] += b[2] + b[8] + b[32] + b[27] + b[18] + b[35] + 193;
            b[31] &= 0xFF;
          };
          console.log(state, a);
          state = 211673876;
          continue;
        case 149778348:
          if (372901593) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[14] ^= (b[42] + b[15] + b[25] + b[38] + b[1] + b[0] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[16] -= b[15] + b[17] + b[42] + b[22] + b[32] + b[30] + 64;
            b[16] &= 0xFF;
          };
          console.log(state, a);
          state = 1006836235;
          continue;
        case 150199466:
          if (Math.random() < 0.5) {
            a = 1;
            b[42] ^= (b[37] + b[35] + b[18] + b[36] + b[1] + b[14] + 95) & 0xFF;
          } else {
            b[36] ^= (b[2] + b[41] + b[0] + b[11] + b[4] + b[38] + 190) & 0xFF;
          };
          console.log(state, a);
          state = 41994990;
          continue;
        case 150806942:
          if (93610461n) {
            a = 1;
            b[20] += b[42] + b[21] + b[32] + b[30] + b[33] + b[39] + 230;
            b[20] &= 0xFF;
          } else {
            b[22] += b[38] + b[34] + b[17] + b[25] + b[31] + b[0] + 242;
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 1360917;
          continue;
        case 150911405:
          if (Math.random() < 0.5) {
            a = 1;
            b[34] += b[11] + b[6] + b[35] + b[15] + b[36] + b[21] + 159;
            b[34] &= 0xFF;
          } else {
            b[13] ^= (b[19] + b[34] + b[27] + b[39] + b[23] + b[17] + 3) & 0xFF;
          };
          console.log(state, a);
          state = 1053950993;
          continue;
        case 151729253:
          if (11042741n) {
            a = 1;
            b[21] ^= (b[30] + b[4] + b[41] + b[6] + b[22] + b[9] + 224) & 0xFF;
          } else {
            b[11] ^= (b[13] + b[34] + b[30] + b[32] + b[43] + b[25] + 129) & 0xFF;
          };
          console.log(state, a);
          state = 144233693;
          continue;
        case 151969372:
          if (31121498n) {
            a = 1;
            b[27] += b[28] + b[0] + b[33] + b[40] + b[1] + b[7] + 108;
            b[27] &= 0xFF;
          } else {
            b[39] += b[27] + b[20] + b[15] + b[29] + b[36] + b[16] + 196;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 768100694;
          continue;
        case 152320376:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[4] -= b[5] + b[36] + b[6] + b[8] + b[7] + b[35] + Math.floor(A * 256);
  
            b[4] &= 0xFF;
          } else {
            b[12] += b[41] + b[21] + b[40] + b[31] + b[17] + b[9] + 143;
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 149400501;
          continue;
        case 152458462:
          if (21140334n) {
            a = 1;
            b[26] += b[40] + b[6] + b[36] + b[21] + b[19] + b[28] + 41;
            b[26] &= 0xFF;
          } else {
            b[0] -= b[35] + b[31] + b[5] + b[10] + b[39] + b[3] + 104;
            b[0] &= 0xFF;
          };
          console.log(state, a);
          state = 20673211;
          continue;
        case 154630273:
          if (150347198) {
            a = 1;
            b[32] ^= (b[4] + b[34] + b[2] + b[5] + b[7] + b[37] + 113) & 0xFF;
          } else {
            b[36] -= b[34] + b[10] + b[18] + b[14] + b[30] + b[7] + 71;
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 497191526;
          continue;
        case 155874172:
          if (27695290n) {
            a = 1;
            b[43] -= b[1] + b[32] + b[9] + b[4] + b[33] + b[22] + 217;
            b[43] &= 0xFF;
          } else {
            b[43] ^= (b[9] + b[42] + b[26] + b[19] + b[15] + b[8] + 79) & 0xFF;
          };
          console.log(state, a);
          state = 472924099;
          continue;
        case 156265595:
          if (Math.random() < 0.5) {
            a = 1;
            b[7] ^= (b[24] + b[2] + b[42] + b[33] + b[11] + b[13] + 36) & 0xFF;
          } else {
            b[5] ^= (b[17] + b[31] + b[28] + b[9] + b[0] + b[34] + 142) & 0xFF;
          };
          console.log(state, a);
          state = 925920849;
          continue;
        case 157380093:
          if (950484477) {
            a = 1;
            b[22] ^= (b[32] + b[18] + b[16] + b[7] + b[27] + b[8] + 186) & 0xFF;
          } else {
            b[12] ^= (b[25] + b[5] + b[15] + b[11] + b[1] + b[9] + 8) & 0xFF;
          };
          console.log(state, a);
          state = 784521278;
          continue;
        case 158215884:
          if (10930022n) {
            a = 1;
            b[4] ^= (b[36] + b[42] + b[22] + b[20] + b[15] + b[0] + 219) & 0xFF;
          } else {
            b[18] -= b[8] + b[32] + b[13] + b[23] + b[43] + b[29] + 139;
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 930444353;
          continue;
        case 158440818:
          if (Math.random() < 0.5) {
            a = 1;
            b[11] ^= (b[5] + b[20] + b[14] + b[28] + b[42] + b[22] + 149) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[11] ^= (b[9] + b[29] + b[14] + b[12] + b[5] + b[15] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 68807763;
          continue;
        case 160122652:
          if (98910848) {
            a = 1;
            b[26] ^= (b[14] + b[27] + b[38] + b[10] + b[37] + b[18] + 89) & 0xFF;
          } else {
            b[25] ^= (b[10] + b[33] + b[24] + b[5] + b[12] + b[38] + 112) & 0xFF;
          };
          console.log(state, a);
          state = 206050454;
          continue;
        case 160364872:
          if (407632658) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[16] ^= (b[9] + b[41] + b[1] + b[4] + b[42] + b[29] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[27] -= b[10] + b[22] + b[17] + b[9] + b[24] + b[26] + 43;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 511113659;
          continue;
        case 162618506:
          if (36454975n) {
            a = 1;
            b[6] += b[30] + b[37] + b[40] + b[9] + b[8] + b[25] + 39;
            b[6] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[25] += b[34] + b[28] + b[19] + b[36] + b[0] + b[3] + Math.floor(A * 256);
  
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 10280958;
          continue;
        case 163000418:
          if (Math.random() < 0.5) {
            a = 1;
            b[23] -= b[24] + b[43] + b[30] + b[37] + b[6] + b[36] + 58;
            b[23] &= 0xFF;
          } else {
            b[9] ^= (b[17] + b[42] + b[26] + b[5] + b[30] + b[22] + 181) & 0xFF;
          };
          console.log(state, a);
          state = 467811485;
          continue;
        case 163327990:
          if (80981608n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[40] += b[37] + b[29] + b[8] + b[19] + b[0] + b[27] + Math.floor(A * 256);
  
            b[40] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[3] -= b[9] + b[26] + b[6] + b[29] + b[5] + b[20] + Math.floor(A * 256);
  
            b[3] &= 0xFF;
          };
          console.log(state, a);
          state = 778318794;
          continue;
        case 163703821:
          if (30589913n) {
            a = 1;
            b[7] ^= (b[6] + b[43] + b[37] + b[12] + b[38] + b[32] + 9) & 0xFF;
          } else {
            b[41] ^= (b[30] + b[43] + b[14] + b[3] + b[34] + b[4] + 47) & 0xFF;
          };
          console.log(state, a);
          state = 881680178;
          continue;
        case 164257914:
          if (Math.random() < 0.5) {
            a = 1;
            b[36] += b[6] + b[43] + b[42] + b[2] + b[12] + b[31] + 245;
            b[36] &= 0xFF;
          } else {
            b[23] += b[21] + b[42] + b[18] + b[5] + b[7] + b[22] + 2;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 413794989;
          continue;
        case 165136772:
          if (1052278988) {
            a = 1;
            b[10] ^= (b[12] + b[34] + b[5] + b[35] + b[18] + b[24] + 228) & 0xFF;
          } else {
            b[27] -= b[0] + b[6] + b[21] + b[29] + b[38] + b[1] + 32;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 877411063;
          continue;
        case 167029715:
          if (762913095) {
            a = 1;
            b[19] ^= (b[41] + b[21] + b[20] + b[24] + b[31] + b[5] + 197) & 0xFF;
          } else {
            b[36] -= b[7] + b[3] + b[10] + b[5] + b[13] + b[2] + 23;
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 177041070;
          continue;
        case 167118666:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[21] += b[23] + b[34] + b[14] + b[30] + b[39] + b[35] + Math.floor(A * 256);
  
            b[21] &= 0xFF;
          } else {
            b[22] += b[6] + b[25] + b[18] + b[11] + b[40] + b[4] + 103;
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 928095411;
          continue;
        case 167389661:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[6] -= b[2] + b[13] + b[39] + b[16] + b[11] + b[38] + Math.floor(A * 256);
  
            b[6] &= 0xFF;
          } else {
            b[22] -= b[1] + b[40] + b[13] + b[17] + b[38] + b[20] + 151;
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 348302371;
          continue;
        case 167821939:
          if (722316389) {
            a = 1;
            b[30] -= b[29] + b[41] + b[0] + b[3] + b[21] + b[34] + 236;
            b[30] &= 0xFF;
          } else {
            b[28] += b[19] + b[37] + b[21] + b[20] + b[14] + b[23] + 72;
            b[28] &= 0xFF;
          };
          console.log(state, a);
          state = 219973336;
          continue;
        case 168874559:
          if (38875854n) {
            a = 1;
            b[34] -= b[31] + b[11] + b[40] + b[28] + b[36] + b[12] + 173;
            b[34] &= 0xFF;
          } else {
            b[21] += b[32] + b[24] + b[34] + b[28] + b[15] + b[0] + 63;
            b[21] &= 0xFF;
          };
          console.log(state, a);
          state = 748280776;
          continue;
        case 169583868:
          if (456603541) {
            a = 1;
            b[24] += b[17] + b[3] + b[25] + b[4] + b[33] + b[11] + 56;
            b[24] &= 0xFF;
          } else {
            b[23] -= b[14] + b[37] + b[42] + b[11] + b[28] + b[34] + 104;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 1048209677;
          continue;
        case 170126216:
          if (702042048) {
            a = 1;
            b[4] += b[33] + b[8] + b[29] + b[26] + b[34] + b[19] + 54;
            b[4] &= 0xFF;
          } else {
            b[26] -= b[16] + b[8] + b[35] + b[4] + b[32] + b[22] + 55;
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 825063852;
          continue;
        case 170255883:
          if (11255342n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[0] ^= (b[32] + b[31] + b[26] + b[4] + b[27] + b[10] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[0] ^= (b[17] + b[32] + b[8] + b[37] + b[14] + b[1] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 183251124;
          continue;
        case 170938055:
          if (Math.random() < 0.5) {
            a = 1;
            b[39] += b[15] + b[43] + b[20] + b[5] + b[6] + b[22] + 227;
            b[39] &= 0xFF;
          } else {
            b[25] -= b[2] + b[19] + b[29] + b[3] + b[14] + b[40] + 151;
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 310460500;
          continue;
        case 170953037:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[25] += b[7] + b[21] + b[12] + b[24] + b[35] + b[42] + Math.floor(A * 256);
  
            b[25] &= 0xFF;
          } else {
            b[25] += b[17] + b[12] + b[35] + b[39] + b[7] + b[4] + 120;
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 195213298;
          continue;
        case 171560204:
          if (95901281n) {
            a = 1;
            b[6] ^= (b[12] + b[33] + b[15] + b[35] + b[11] + b[2] + 164) & 0xFF;
          } else {
            b[27] += b[37] + b[15] + b[3] + b[35] + b[26] + b[2] + 181;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 1033531864;
          continue;
        case 171959181:
          if (941297648) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[15] ^= (b[0] + b[28] + b[38] + b[18] + b[6] + b[24] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[13] -= b[8] + b[21] + b[24] + b[23] + b[3] + b[27] + 201;
            b[13] &= 0xFF;
          };
          console.log(state, a);
          state = 2554649;
          continue;
        case 172327403:
          if (19191755n) {
            a = 1;
            b[2] += b[24] + b[23] + b[43] + b[36] + b[6] + b[18] + 60;
            b[2] &= 0xFF;
          } else {
            b[30] ^= (b[40] + b[36] + b[43] + b[6] + b[11] + b[2] + 57) & 0xFF;
          };
          console.log(state, a);
          state = 541134788;
          continue;
        case 173142711:
          if (315425082) {
            a = 1;
            b[23] ^= (b[20] + b[5] + b[42] + b[19] + b[31] + b[3] + 211) & 0xFF;
          } else {
            b[33] += b[17] + b[7] + b[26] + b[18] + b[36] + b[11] + 113;
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 639473643;
          continue;
        case 174428270:
          if (897865398) {
            a = 1;
            b[5] += b[17] + b[40] + b[8] + b[4] + b[15] + b[12] + 221;
            b[5] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[32] += b[22] + b[25] + b[2] + b[43] + b[37] + b[28] + Math.floor(A * 256);
  
            b[32] &= 0xFF;
          };
          console.log(state, a);
          state = 480041842;
          continue;
        case 176965404:
          if (Math.random() < 0.5) {
            a = 1;
            b[10] -= b[38] + b[34] + b[35] + b[24] + b[5] + b[16] + 241;
            b[10] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[1] -= b[32] + b[31] + b[34] + b[16] + b[28] + b[35] + Math.floor(A * 256);
  
            b[1] &= 0xFF;
          };
          console.log(state, a);
          state = 942374808;
          continue;
        case 177511412:
          if (206667095) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[12] += b[38] + b[35] + b[5] + b[0] + b[33] + b[6] + Math.floor(A * 256);
  
            b[12] &= 0xFF;
          } else {
            b[3] -= b[42] + b[17] + b[24] + b[16] + b[41] + b[1] + 61;
            b[3] &= 0xFF;
          };
          console.log(state, a);
          state = 902795827;
          continue;
        case 177706338:
          if (63824188n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[2] ^= (b[23] + b[1] + b[14] + b[22] + b[38] + b[26] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[3] ^= (b[31] + b[13] + b[37] + b[39] + b[8] + b[29] + 76) & 0xFF;
          };
          console.log(state, a);
          state = 634776425;
          continue;
        case 180361118:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[12] += b[17] + b[8] + b[37] + b[39] + b[22] + b[35] + Math.floor(A * 256);
  
            b[12] &= 0xFF;
          } else {
            b[35] += b[32] + b[29] + b[42] + b[30] + b[43] + b[33] + 155;
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 129696583;
          continue;
        case 181384715:
          if (Math.random() < 0.5) {
            a = 1;
            b[19] ^= (b[26] + b[0] + b[40] + b[37] + b[23] + b[32] + 255) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[5] ^= (b[27] + b[33] + b[10] + b[3] + b[42] + b[40] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 110990963;
          continue;
        case 182615591:
          if (Math.random() < 0.5) {
            a = 1;
            b[30] ^= (b[8] + b[21] + b[37] + b[17] + b[10] + b[24] + 32) & 0xFF;
          } else {
            b[29] -= b[5] + b[7] + b[4] + b[40] + b[0] + b[39] + 41;
            b[29] &= 0xFF;
          };
          console.log(state, a);
          state = 565304124;
          continue;
        case 184001838:
          if (Math.random() < 0.5) {
            a = 1;
            b[37] -= b[32] + b[29] + b[4] + b[19] + b[38] + b[9] + 252;
            b[37] &= 0xFF;
          } else {
            b[16] ^= (b[13] + b[41] + b[3] + b[40] + b[8] + b[14] + 17) & 0xFF;
          };
          console.log(state, a);
          state = 526415422;
          continue;
        case 184226734:
          if (79685309n) {
            a = 1;
            b[25] += b[22] + b[3] + b[0] + b[43] + b[40] + b[26] + 76;
            b[25] &= 0xFF;
          } else {
            b[5] -= b[42] + b[40] + b[11] + b[0] + b[8] + b[36] + 18;
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 453999162;
          continue;
        case 184337331:
          if (85032682n) {
            a = 1;
            b[34] ^= (b[35] + b[4] + b[22] + b[41] + b[36] + b[40] + 159) & 0xFF;
          } else {
            b[38] += b[42] + b[19] + b[12] + b[40] + b[43] + b[27] + 44;
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 297410300;
          continue;
        case 184565984:
          if (Math.random() < 0.5) {
            a = 1;
            b[43] += b[6] + b[16] + b[5] + b[20] + b[37] + b[33] + 21;
            b[43] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[6] -= b[16] + b[25] + b[36] + b[40] + b[31] + b[5] + Math.floor(A * 256);
  
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 666284843;
          continue;
        case 184938092:
          if (58279263n) {
            a = 1;
            b[31] += b[43] + b[21] + b[9] + b[15] + b[0] + b[14] + 40;
            b[31] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[22] += b[10] + b[37] + b[34] + b[12] + b[16] + b[2] + Math.floor(A * 256);
  
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 788352180;
          continue;
        case 185078700:
          break;
        case 188837611:
          if (509459627) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[2] ^= (b[26] + b[29] + b[30] + b[33] + b[27] + b[1] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[35] -= b[43] + b[23] + b[22] + b[33] + b[30] + b[0] + 147;
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 618073582;
          continue;
        case 190154779:
          if (Math.random() < 0.5) {
            a = 1;
            b[23] ^= (b[5] + b[42] + b[17] + b[39] + b[8] + b[21] + 110) & 0xFF;
          } else {
            b[36] += b[10] + b[24] + b[34] + b[28] + b[0] + b[3] + 178;
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 225795742;
          continue;
        case 192326207:
          if (Math.random() < 0.5) {
            a = 1;
            b[6] += b[26] + b[1] + b[14] + b[28] + b[39] + b[18] + 180;
            b[6] &= 0xFF;
          } else {
            b[18] += b[19] + b[6] + b[15] + b[40] + b[3] + b[32] + 191;
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 71789518;
          continue;
        case 194022714:
          if (Math.random() < 0.5) {
            a = 1;
            b[20] -= b[28] + b[43] + b[3] + b[29] + b[14] + b[39] + 113;
            b[20] &= 0xFF;
          } else {
            b[5] += b[8] + b[16] + b[38] + b[37] + b[1] + b[18] + 148;
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 151702023;
          continue;
        case 194234029:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[22] += b[11] + b[42] + b[30] + b[20] + b[28] + b[4] + Math.floor(A * 256);
  
            b[22] &= 0xFF;
          } else {
            b[6] ^= (b[8] + b[23] + b[28] + b[17] + b[32] + b[12] + 66) & 0xFF;
          };
          console.log(state, a);
          state = 432353446;
          continue;
        case 194691887:
          if (75933549) {
            a = 1;
            b[12] += b[22] + b[23] + b[1] + b[6] + b[37] + b[4] + 96;
            b[12] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[33] -= b[28] + b[34] + b[27] + b[36] + b[3] + b[39] + Math.floor(A * 256);
  
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 397807652;
          continue;
        case 198364009:
          if (Math.random() < 0.5) {
            a = 1;
            b[13] ^= (b[6] + b[31] + b[8] + b[15] + b[27] + b[3] + 46) & 0xFF;
          } else {
            b[20] ^= (b[14] + b[7] + b[4] + b[0] + b[29] + b[8] + 172) & 0xFF;
          };
          console.log(state, a);
          state = 311775975;
          continue;
        case 201264604:
          if (65033003n) {
            a = 1;
            b[5] ^= (b[35] + b[9] + b[30] + b[8] + b[27] + b[26] + 113) & 0xFF;
          } else {
            b[41] -= b[39] + b[3] + b[7] + b[21] + b[17] + b[29] + 117;
            b[41] &= 0xFF;
          };
          console.log(state, a);
          state = 100732102;
          continue;
        case 204547457:
          if (46005347n) {
            a = 1;
            b[42] += b[16] + b[29] + b[3] + b[32] + b[4] + b[5] + 217;
            b[42] &= 0xFF;
          } else {
            b[19] ^= (b[12] + b[4] + b[16] + b[6] + b[9] + b[13] + 174) & 0xFF;
          };
          console.log(state, a);
          state = 958409490;
          continue;
        case 206186554:
          if (78711938n) {
            a = 1;
            b[33] ^= (b[30] + b[17] + b[31] + b[21] + b[23] + b[25] + 88) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[37] += b[20] + b[11] + b[16] + b[31] + b[22] + b[0] + Math.floor(A * 256);
  
            b[37] &= 0xFF;
          };
          console.log(state, a);
          state = 825535610;
          continue;
        case 208944610:
          if (193271221) {
            a = 1;
            b[12] ^= (b[43] + b[25] + b[35] + b[39] + b[17] + b[3] + 98) & 0xFF;
          } else {
            b[39] += b[24] + b[5] + b[41] + b[6] + b[8] + b[33] + 137;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 614635127;
          continue;
        case 209432887:
          if (93470664n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[34] += b[42] + b[35] + b[11] + b[29] + b[22] + b[20] + Math.floor(A * 256);
  
            b[34] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[10] ^= (b[29] + b[32] + b[8] + b[4] + b[30] + b[23] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 1038100041;
          continue;
        case 209848935:
          if (28362108n) {
            a = 1;
            b[19] -= b[36] + b[41] + b[28] + b[22] + b[12] + b[32] + 163;
            b[19] &= 0xFF;
          } else {
            b[17] += b[5] + b[16] + b[6] + b[18] + b[37] + b[29] + 159;
            b[17] &= 0xFF;
          };
          console.log(state, a);
          state = 536174126;
          continue;
        case 210975861:
          if (55514709) {
            a = 1;
            b[18] -= b[0] + b[12] + b[19] + b[10] + b[29] + b[34] + 226;
            b[18] &= 0xFF;
          } else {
            b[39] += b[18] + b[16] + b[8] + b[19] + b[5] + b[23] + 36;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 1058358019;
          continue;
        case 211163838:
          if (42216406n) {
            a = 1;
            b[23] ^= (b[33] + b[16] + b[31] + b[26] + b[15] + b[1] + 3) & 0xFF;
          } else {
            b[32] ^= (b[6] + b[36] + b[41] + b[15] + b[31] + b[7] + 77) & 0xFF;
          };
          console.log(state, a);
          state = 559549544;
          continue;
        case 211248456:
          if (856534920) {
            a = 1;
            b[19] -= b[18] + b[26] + b[1] + b[42] + b[23] + b[25] + 164;
            b[19] &= 0xFF;
          } else {
            b[11] += b[15] + b[43] + b[24] + b[34] + b[16] + b[9] + 166;
            b[11] &= 0xFF;
          };
          console.log(state, a);
          state = 805733218;
          continue;
        case 213185957:
          if (26081165n) {
            a = 1;
            b[23] ^= (b[30] + b[1] + b[2] + b[25] + b[42] + b[36] + 233) & 0xFF;
          } else {
            b[29] -= b[37] + b[21] + b[17] + b[13] + b[33] + b[28] + 4;
            b[29] &= 0xFF;
          };
          console.log(state, a);
          state = 693640144;
          continue;
        case 217091233:
          if (933239764) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[0] += b[31] + b[33] + b[25] + b[29] + b[43] + b[26] + Math.floor(A * 256);
  
            b[0] &= 0xFF;
          } else {
            b[8] -= b[4] + b[19] + b[32] + b[43] + b[16] + b[27] + 75;
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 430801263;
          continue;
        case 219024877:
          if (69768241n) {
            a = 1;
            b[5] ^= (b[26] + b[37] + b[28] + b[13] + b[41] + b[15] + 44) & 0xFF;
          } else {
            b[27] -= b[16] + b[1] + b[25] + b[34] + b[21] + b[30] + 43;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 986437216;
          continue;
        case 220609761:
          if (58258984n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[31] -= b[22] + b[30] + b[4] + b[35] + b[20] + b[26] + Math.floor(A * 256);
  
            b[31] &= 0xFF;
          } else {
            b[27] -= b[10] + b[33] + b[16] + b[22] + b[25] + b[4] + 212;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 873207146;
          continue;
        case 220618710:
          if (92040774n) {
            a = 1;
            b[34] ^= (b[19] + b[42] + b[22] + b[13] + b[8] + b[3] + 68) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[10] -= b[20] + b[39] + b[25] + b[17] + b[26] + b[22] + Math.floor(A * 256);
  
            b[10] &= 0xFF;
          };
          console.log(state, a);
          state = 620893593;
          continue;
        case 220984231:
          if (53390257n) {
            a = 1;
            b[25] -= b[3] + b[24] + b[18] + b[15] + b[2] + b[12] + 33;
            b[25] &= 0xFF;
          } else {
            b[0] ^= (b[7] + b[24] + b[19] + b[38] + b[11] + b[36] + 155) & 0xFF;
          };
          console.log(state, a);
          state = 860000418;
          continue;
        case 221619054:
          if (959659211) {
            a = 1;
            b[35] -= b[9] + b[23] + b[12] + b[16] + b[36] + b[14] + 145;
            b[35] &= 0xFF;
          } else {
            b[24] ^= (b[29] + b[39] + b[20] + b[38] + b[37] + b[10] + 148) & 0xFF;
          };
          console.log(state, a);
          state = 612933473;
          continue;
        case 221781532:
          if (72652111n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[26] ^= (b[35] + b[31] + b[12] + b[1] + b[15] + b[27] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[25] += b[40] + b[2] + b[18] + b[35] + b[15] + b[32] + 16;
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 908639392;
          continue;
        case 224518174:
          if (21603730n) {
            a = 1;
            b[36] ^= (b[28] + b[6] + b[34] + b[21] + b[41] + b[35] + 245) & 0xFF;
          } else {
            b[23] += b[20] + b[15] + b[25] + b[32] + b[30] + b[10] + 242;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 884575876;
          continue;
        case 225422723:
          if (Math.random() < 0.5) {
            a = 1;
            b[4] -= b[8] + b[24] + b[29] + b[30] + b[41] + b[43] + 121;
            b[4] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[28] += b[7] + b[16] + b[42] + b[25] + b[24] + b[13] + Math.floor(A * 256);
  
            b[28] &= 0xFF;
          };
          console.log(state, a);
          state = 189630997;
          continue;
        case 229494579:
          if (Math.random() < 0.5) {
            a = 1;
            b[0] += b[33] + b[15] + b[10] + b[24] + b[19] + b[21] + 91;
            b[0] &= 0xFF;
          } else {
            b[4] += b[29] + b[33] + b[34] + b[20] + b[9] + b[17] + 77;
            b[4] &= 0xFF;
          };
          console.log(state, a);
          state = 472186968;
          continue;
        case 230205454:
          if (44456754n) {
            a = 1;
            b[27] -= b[18] + b[31] + b[35] + b[1] + b[10] + b[23] + 88;
            b[27] &= 0xFF;
          } else {
            b[22] += b[5] + b[4] + b[2] + b[15] + b[25] + b[23] + 123;
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 312893244;
          continue;
        case 230923361:
          if (Math.random() < 0.5) {
            a = 1;
            b[5] += b[12] + b[13] + b[18] + b[35] + b[9] + b[15] + 115;
            b[5] &= 0xFF;
          } else {
            b[1] += b[36] + b[10] + b[37] + b[29] + b[30] + b[12] + 2;
            b[1] &= 0xFF;
          };
          console.log(state, a);
          state = 258957044;
          continue;
        case 230930038:
          if (386539893) {
            a = 1;
            b[26] += b[4] + b[40] + b[10] + b[15] + b[42] + b[27] + 211;
            b[26] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[40] -= b[8] + b[26] + b[31] + b[38] + b[32] + b[37] + Math.floor(A * 256);
  
            b[40] &= 0xFF;
          };
          console.log(state, a);
          state = 746309371;
          continue;
        case 231432592:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[4] += b[43] + b[32] + b[12] + b[24] + b[3] + b[9] + Math.floor(A * 256);
  
            b[4] &= 0xFF;
          } else {
            b[25] -= b[31] + b[7] + b[30] + b[38] + b[39] + b[29] + 174;
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 987221748;
          continue;
        case 234522330:
          if (59337487n) {
            a = 1;
            b[41] += b[2] + b[32] + b[15] + b[12] + b[26] + b[36] + 98;
            b[41] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[29] -= b[38] + b[14] + b[34] + b[18] + b[43] + b[35] + Math.floor(A * 256);
  
            b[29] &= 0xFF;
          };
          console.log(state, a);
          state = 1068988450;
          continue;
        case 237337400:
          if (804085173) {
            a = 1;
            b[23] -= b[5] + b[19] + b[34] + b[11] + b[42] + b[29] + 250;
            b[23] &= 0xFF;
          } else {
            b[1] ^= (b[40] + b[42] + b[33] + b[23] + b[7] + b[19] + 10) & 0xFF;
          };
          console.log(state, a);
          state = 201488550;
          continue;
        case 238161391:
          if (17051732n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[11] -= b[43] + b[24] + b[34] + b[5] + b[32] + b[17] + Math.floor(A * 256);
  
            b[11] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[28] += b[26] + b[18] + b[1] + b[5] + b[32] + b[19] + Math.floor(A * 256);
  
            b[28] &= 0xFF;
          };
          console.log(state, a);
          state = 586451322;
          continue;
        case 238416598:
          if (372666475) {
            a = 1;
            b[28] += b[25] + b[26] + b[11] + b[39] + b[18] + b[0] + 75;
            b[28] &= 0xFF;
          } else {
            b[36] ^= (b[18] + b[42] + b[9] + b[34] + b[12] + b[29] + 242) & 0xFF;
          };
          console.log(state, a);
          state = 780905302;
          continue;
        case 242387230:
          if (19562795n) {
            a = 1;
            b[10] += b[19] + b[43] + b[8] + b[13] + b[14] + b[38] + 116;
            b[10] &= 0xFF;
          } else {
            b[23] ^= (b[15] + b[41] + b[29] + b[12] + b[39] + b[24] + 173) & 0xFF;
          };
          console.log(state, a);
          state = 175872557;
          continue;
        case 242494677:
          if (Math.random() < 0.5) {
            a = 1;
            b[31] -= b[22] + b[41] + b[24] + b[34] + b[3] + b[37] + 95;
            b[31] &= 0xFF;
          } else {
            b[43] += b[16] + b[17] + b[22] + b[23] + b[31] + b[11] + 211;
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 723841222;
          continue;
        case 243572122:
          if (653528729) {
            a = 1;
            b[30] ^= (b[2] + b[1] + b[21] + b[9] + b[11] + b[7] + 145) & 0xFF;
          } else {
            b[17] += b[29] + b[43] + b[1] + b[8] + b[32] + b[35] + 126;
            b[17] &= 0xFF;
          };
          console.log(state, a);
          state = 33640968;
          continue;
        case 244842414:
          if (Math.random() < 0.5) {
            a = 1;
            b[39] ^= (b[34] + b[3] + b[1] + b[14] + b[42] + b[35] + 131) & 0xFF;
          } else {
            b[5] -= b[15] + b[33] + b[18] + b[20] + b[3] + b[22] + 88;
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 852100699;
          continue;
        case 246084964:
          if (693526256) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[34] ^= (b[6] + b[0] + b[12] + b[25] + b[41] + b[43] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[4] -= b[37] + b[2] + b[27] + b[13] + b[21] + b[35] + 194;
            b[4] &= 0xFF;
          };
          console.log(state, a);
          state = 506894636;
          continue;
        case 246196592:
          if (Math.random() < 0.5) {
            a = 1;
            b[9] ^= (b[1] + b[20] + b[23] + b[27] + b[13] + b[33] + 130) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[24] -= b[36] + b[39] + b[27] + b[8] + b[14] + b[34] + Math.floor(A * 256);
  
            b[24] &= 0xFF;
          };
          console.log(state, a);
          state = 467042858;
          continue;
        case 246665663:
          if (179082165) {
            a = 1;
            b[13] += b[16] + b[33] + b[41] + b[1] + b[20] + b[12] + 104;
            b[13] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[27] += b[13] + b[37] + b[23] + b[17] + b[2] + b[43] + Math.floor(A * 256);
  
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 618341793;
          continue;
        case 246675300:
          if (707107748) {
            a = 1;
            b[2] ^= (b[9] + b[3] + b[42] + b[13] + b[38] + b[37] + 162) & 0xFF;
          } else {
            b[18] ^= (b[1] + b[7] + b[23] + b[2] + b[37] + b[4] + 152) & 0xFF;
          };
          console.log(state, a);
          state = 40772717;
          continue;
        case 249647999:
          if (48742755n) {
            a = 1;
            b[8] -= b[7] + b[6] + b[28] + b[27] + b[18] + b[17] + 239;
            b[8] &= 0xFF;
          } else {
            b[11] += b[29] + b[21] + b[41] + b[30] + b[14] + b[23] + 20;
            b[11] &= 0xFF;
          };
          console.log(state, a);
          state = 1053090044;
          continue;
        case 250006002:
          if (55634345n) {
            a = 1;
            b[12] ^= (b[38] + b[7] + b[43] + b[0] + b[37] + b[42] + 242) & 0xFF;
          } else {
            b[40] -= b[13] + b[21] + b[8] + b[3] + b[10] + b[17] + 248;
            b[40] &= 0xFF;
          };
          console.log(state, a);
          state = 865238636;
          continue;
        case 252277940:
          if (Math.random() < 0.5) {
            a = 1;
            b[20] ^= (b[12] + b[16] + b[11] + b[2] + b[18] + b[21] + 57) & 0xFF;
          } else {
            b[38] -= b[25] + b[32] + b[36] + b[37] + b[26] + b[35] + 147;
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 219958944;
          continue;
        case 254614724:
          if (Math.random() < 0.5) {
            a = 1;
            b[26] ^= (b[32] + b[0] + b[13] + b[27] + b[43] + b[31] + 179) & 0xFF;
          } else {
            b[35] += b[0] + b[29] + b[10] + b[24] + b[26] + b[32] + 229;
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 112270672;
          continue;
        case 260248466:
          if (14496527n) {
            a = 1;
            b[29] -= b[9] + b[5] + b[30] + b[38] + b[1] + b[28] + 221;
            b[29] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[43] -= b[4] + b[20] + b[36] + b[25] + b[22] + b[7] + Math.floor(A * 256);
  
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 649829285;
          continue;
        case 261461743:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[31] -= b[14] + b[43] + b[19] + b[36] + b[41] + b[8] + Math.floor(A * 256);
  
            b[31] &= 0xFF;
          } else {
            b[20] ^= (b[7] + b[23] + b[36] + b[43] + b[33] + b[25] + 177) & 0xFF;
          };
          console.log(state, a);
          state = 719855432;
          continue;
        case 261889048:
          if (419825796) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[1] -= b[35] + b[43] + b[16] + b[15] + b[13] + b[2] + Math.floor(A * 256);
  
            b[1] &= 0xFF;
          } else {
            b[27] -= b[17] + b[28] + b[29] + b[2] + b[38] + b[9] + 9;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 240270477;
          continue;
        case 262657052:
          if (Math.random() < 0.5) {
            a = 1;
            b[12] ^= (b[3] + b[22] + b[38] + b[29] + b[26] + b[4] + 213) & 0xFF;
          } else {
            b[6] -= b[17] + b[13] + b[2] + b[28] + b[37] + b[15] + 95;
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 351832632;
          continue;
        case 264634585:
          if (276553388) {
            a = 1;
            b[13] -= b[11] + b[0] + b[40] + b[37] + b[8] + b[4] + 105;
            b[13] &= 0xFF;
          } else {
            b[37] -= b[39] + b[43] + b[28] + b[17] + b[24] + b[7] + 3;
            b[37] &= 0xFF;
          };
          console.log(state, a);
          state = 995713489;
          continue;
        case 266322968:
          if (65586349n) {
            a = 1;
            b[10] ^= (b[20] + b[35] + b[3] + b[17] + b[1] + b[41] + 172) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[42] -= b[32] + b[27] + b[40] + b[28] + b[33] + b[9] + Math.floor(A * 256);
  
            b[42] &= 0xFF;
          };
          console.log(state, a);
          state = 796003565;
          continue;
        case 267460296:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[19] -= b[34] + b[15] + b[42] + b[20] + b[37] + b[33] + Math.floor(A * 256);
  
            b[19] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[5] -= b[29] + b[22] + b[2] + b[30] + b[19] + b[7] + Math.floor(A * 256);
  
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 455908408;
          continue;
        case 268121630:
          if (17167199n) {
            a = 1;
            b[35] -= b[34] + b[41] + b[31] + b[42] + b[27] + b[19] + 135;
            b[35] &= 0xFF;
          } else {
            b[41] ^= (b[30] + b[13] + b[21] + b[0] + b[24] + b[1] + 247) & 0xFF;
          };
          console.log(state, a);
          state = 913709221;
          continue;
        case 269695589:
          if (81888862n) {
            a = 1;
            b[13] -= b[9] + b[8] + b[12] + b[22] + b[24] + b[19] + 142;
            b[13] &= 0xFF;
          } else {
            b[9] ^= (b[2] + b[13] + b[15] + b[42] + b[39] + b[4] + 52) & 0xFF;
          };
          console.log(state, a);
          state = 1026937852;
          continue;
        case 271112798:
          if (401684922) {
            a = 1;
            b[13] ^= (b[14] + b[30] + b[21] + b[39] + b[16] + b[17] + 63) & 0xFF;
          } else {
            b[39] -= b[19] + b[17] + b[33] + b[22] + b[31] + b[10] + 166;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 270336697;
          continue;
        case 271627321:
          if (95572677n) {
            a = 1;
            b[34] ^= (b[24] + b[19] + b[14] + b[9] + b[6] + b[1] + 162) & 0xFF;
          } else {
            b[4] ^= (b[24] + b[17] + b[36] + b[13] + b[10] + b[41] + 197) & 0xFF;
          };
          console.log(state, a);
          state = 802205526;
          continue;
        case 274221760:
          if (Math.random() < 0.5) {
            a = 1;
            b[27] ^= (b[6] + b[24] + b[16] + b[19] + b[13] + b[14] + 35) & 0xFF;
          } else {
            b[10] -= b[3] + b[21] + b[37] + b[30] + b[34] + b[29] + 240;
            b[10] &= 0xFF;
          };
          console.log(state, a);
          state = 492731019;
          continue;
        case 275097633:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[12] ^= (b[27] + b[41] + b[29] + b[26] + b[36] + b[31] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[9] += b[41] + b[31] + b[7] + b[36] + b[20] + b[42] + 182;
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 543524764;
          continue;
        case 275378278:
          if (45412373n) {
            a = 1;
            b[39] += b[0] + b[34] + b[21] + b[23] + b[17] + b[22] + 54;
            b[39] &= 0xFF;
          } else {
            b[38] += b[4] + b[32] + b[6] + b[26] + b[25] + b[22] + 44;
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 210341530;
          continue;
        case 275423299:
          if (16039728n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[7] ^= (b[19] + b[3] + b[16] + b[1] + b[34] + b[33] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[0] ^= (b[20] + b[26] + b[24] + b[34] + b[19] + b[32] + 89) & 0xFF;
          };
          console.log(state, a);
          state = 1003454329;
          continue;
        case 275553514:
          if (232479927) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[42] -= b[21] + b[25] + b[29] + b[24] + b[6] + b[33] + Math.floor(A * 256);
  
            b[42] &= 0xFF;
          } else {
            b[25] ^= (b[9] + b[26] + b[29] + b[23] + b[35] + b[24] + 65) & 0xFF;
          };
          console.log(state, a);
          state = 284164352;
          continue;
        case 277251462:
          if (347510130) {
            a = 1;
            b[0] ^= (b[38] + b[17] + b[43] + b[3] + b[35] + b[6] + 63) & 0xFF;
          } else {
            b[33] ^= (b[43] + b[30] + b[42] + b[0] + b[8] + b[2] + 121) & 0xFF;
          };
          console.log(state, a);
          state = 806104766;
          continue;
        case 277284985:
          if (Math.random() < 0.5) {
            a = 1;
            b[22] -= b[28] + b[19] + b[39] + b[20] + b[14] + b[4] + 88;
            b[22] &= 0xFF;
          } else {
            b[35] ^= (b[0] + b[39] + b[17] + b[16] + b[1] + b[42] + 208) & 0xFF;
          };
          console.log(state, a);
          state = 795669700;
          continue;
        case 279165449:
          if (Math.random() < 0.5) {
            a = 1;
            b[5] ^= (b[16] + b[3] + b[1] + b[12] + b[17] + b[4] + 44) & 0xFF;
          } else {
            b[25] -= b[20] + b[5] + b[21] + b[22] + b[17] + b[1] + 130;
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 647961758;
          continue;
        case 280767414:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[11] += b[14] + b[0] + b[4] + b[20] + b[7] + b[27] + Math.floor(A * 256);
  
            b[11] &= 0xFF;
          } else {
            b[3] += b[13] + b[7] + b[42] + b[5] + b[40] + b[39] + 239;
            b[3] &= 0xFF;
          };
          console.log(state, a);
          state = 419731386;
          continue;
        case 281004428:
          if (379750618) {
            a = 1;
            b[33] -= b[39] + b[12] + b[34] + b[38] + b[8] + b[37] + 200;
            b[33] &= 0xFF;
          } else {
            b[34] -= b[5] + b[10] + b[15] + b[2] + b[25] + b[26] + 41;
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 948650807;
          continue;
        case 282083183:
          if (Math.random() < 0.5) {
            a = 1;
            b[38] += b[14] + b[6] + b[23] + b[27] + b[10] + b[42] + 54;
            b[38] &= 0xFF;
          } else {
            b[43] ^= (b[31] + b[1] + b[33] + b[13] + b[15] + b[3] + 216) & 0xFF;
          };
          console.log(state, a);
          state = 41718568;
          continue;
        case 283679858:
          if (477182091) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[31] += b[21] + b[41] + b[26] + b[27] + b[6] + b[43] + Math.floor(A * 256);
  
            b[31] &= 0xFF;
          } else {
            b[6] ^= (b[23] + b[13] + b[20] + b[11] + b[40] + b[16] + 23) & 0xFF;
          };
          console.log(state, a);
          state = 931354157;
          continue;
        case 285069999:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[14] += b[0] + b[28] + b[10] + b[6] + b[2] + b[8] + Math.floor(A * 256);
  
            b[14] &= 0xFF;
          } else {
            b[20] ^= (b[24] + b[32] + b[29] + b[9] + b[6] + b[35] + 217) & 0xFF;
          };
          console.log(state, a);
          state = 66690864;
          continue;
        case 287357895:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[5] ^= (b[17] + b[26] + b[15] + b[24] + b[40] + b[29] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[1] -= b[27] + b[6] + b[10] + b[23] + b[35] + b[22] + Math.floor(A * 256);
  
            b[1] &= 0xFF;
          };
          console.log(state, a);
          state = 145686511;
          continue;
        case 287782403:
          if (12365573n) {
            a = 1;
            b[33] ^= (b[16] + b[31] + b[13] + b[17] + b[6] + b[21] + 112) & 0xFF;
          } else {
            b[40] ^= (b[33] + b[23] + b[24] + b[41] + b[31] + b[27] + 58) & 0xFF;
          };
          console.log(state, a);
          state = 263494323;
          continue;
        case 288255168:
          if (972634646) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[36] ^= (b[23] + b[35] + b[41] + b[15] + b[24] + b[17] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[0] -= b[15] + b[3] + b[29] + b[10] + b[20] + b[39] + 93;
            b[0] &= 0xFF;
          };
          console.log(state, a);
          state = 567345515;
          continue;
        case 288574193:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[34] += b[32] + b[2] + b[1] + b[42] + b[40] + b[31] + Math.floor(A * 256);
  
            b[34] &= 0xFF;
          } else {
            b[22] ^= (b[29] + b[33] + b[20] + b[30] + b[0] + b[25] + 9) & 0xFF;
          };
          console.log(state, a);
          state = 579458529;
          continue;
        case 288734789:
          if (Math.random() < 0.5) {
            a = 1;
            b[18] += b[35] + b[2] + b[15] + b[13] + b[10] + b[27] + 210;
            b[18] &= 0xFF;
          } else {
            b[34] ^= (b[12] + b[0] + b[35] + b[9] + b[38] + b[30] + 1) & 0xFF;
          };
          console.log(state, a);
          state = 235211605;
          continue;
        case 290491044:
          if (444003861) {
            a = 1;
            b[21] -= b[5] + b[43] + b[39] + b[42] + b[9] + b[4] + 228;
            b[21] &= 0xFF;
          } else {
            b[12] -= b[15] + b[34] + b[31] + b[30] + b[37] + b[0] + 234;
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 990371719;
          continue;
        case 291625724:
          if (42294967n) {
            a = 1;
            b[7] -= b[41] + b[24] + b[26] + b[32] + b[15] + b[17] + 13;
            b[7] &= 0xFF;
          } else {
            b[15] ^= (b[1] + b[17] + b[43] + b[19] + b[11] + b[39] + 153) & 0xFF;
          };
          console.log(state, a);
          state = 871413126;
          continue;
        case 292965864:
          if (88816545n) {
            a = 1;
            b[42] += b[21] + b[3] + b[24] + b[39] + b[43] + b[18] + 213;
            b[42] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[27] ^= (b[25] + b[29] + b[34] + b[13] + b[41] + b[5] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 926464768;
          continue;
        case 293954309:
          if (283202612) {
            a = 1;
            b[38] ^= (b[42] + b[9] + b[25] + b[35] + b[28] + b[27] + 51) & 0xFF;
          } else {
            b[34] -= b[4] + b[3] + b[43] + b[38] + b[23] + b[7] + 236;
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 985018515;
          continue;
        case 294180573:
          if (603296406) {
            a = 1;
            b[4] ^= (b[18] + b[36] + b[10] + b[23] + b[35] + b[43] + 201) & 0xFF;
          } else {
            b[41] -= b[27] + b[21] + b[24] + b[22] + b[28] + b[12] + 139;
            b[41] &= 0xFF;
          };
          console.log(state, a);
          state = 727215764;
          continue;
        case 294271724:
          if (72079500n) {
            a = 1;
            b[25] -= b[18] + b[32] + b[12] + b[2] + b[27] + b[8] + 127;
            b[25] &= 0xFF;
          } else {
            b[4] ^= (b[22] + b[40] + b[23] + b[36] + b[28] + b[21] + 139) & 0xFF;
          };
          console.log(state, a);
          state = 14196407;
          continue;
        case 294918952:
          if (33776471n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[10] += b[20] + b[16] + b[0] + b[17] + b[14] + b[5] + Math.floor(A * 256);
  
            b[10] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[42] += b[7] + b[13] + b[3] + b[6] + b[28] + b[5] + Math.floor(A * 256);
  
            b[42] &= 0xFF;
          };
          console.log(state, a);
          state = 677579458;
          continue;
        case 296261627:
          if (Math.random() < 0.5) {
            a = 1;
            b[21] -= b[1] + b[3] + b[8] + b[15] + b[39] + b[4] + 237;
            b[21] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[3] ^= (b[34] + b[14] + b[33] + b[28] + b[15] + b[36] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 786912410;
          continue;
        case 297638766:
          if (57257075n) {
            a = 1;
            b[37] -= b[24] + b[39] + b[15] + b[10] + b[13] + b[35] + 225;
            b[37] &= 0xFF;
          } else {
            b[25] ^= (b[9] + b[5] + b[3] + b[14] + b[40] + b[41] + 157) & 0xFF;
          };
          console.log(state, a);
          state = 594094305;
          continue;
        case 299520450:
          if (939457130) {
            a = 1;
            b[7] ^= (b[22] + b[3] + b[9] + b[23] + b[21] + b[27] + 226) & 0xFF;
          } else {
            b[37] += b[10] + b[15] + b[41] + b[36] + b[1] + b[38] + 181;
            b[37] &= 0xFF;
          };
          console.log(state, a);
          state = 944434393;
          continue;
        case 300912847:
          if (360549626) {
            a = 1;
            b[26] ^= (b[29] + b[12] + b[24] + b[41] + b[9] + b[11] + 242) & 0xFF;
          } else {
            b[8] ^= (b[21] + b[43] + b[14] + b[32] + b[26] + b[11] + 230) & 0xFF;
          };
          console.log(state, a);
          state = 916753703;
          continue;
        case 302795555:
          if (623409292) {
            a = 1;
            b[11] += b[35] + b[20] + b[5] + b[38] + b[13] + b[22] + 63;
            b[11] &= 0xFF;
          } else {
            b[16] -= b[25] + b[37] + b[42] + b[23] + b[3] + b[1] + 157;
            b[16] &= 0xFF;
          };
          console.log(state, a);
          state = 907929871;
          continue;
        case 304382579:
          if (Math.random() < 0.5) {
            a = 1;
            b[31] ^= (b[11] + b[2] + b[42] + b[1] + b[26] + b[13] + 252) & 0xFF;
          } else {
            b[43] += b[21] + b[17] + b[34] + b[38] + b[40] + b[29] + 248;
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 162299957;
          continue;
        case 304625349:
          if (852763113) {
            a = 1;
            b[29] += b[30] + b[3] + b[20] + b[8] + b[39] + b[36] + 43;
            b[29] &= 0xFF;
          } else {
            b[14] -= b[4] + b[5] + b[31] + b[15] + b[36] + b[40] + 67;
            b[14] &= 0xFF;
          };
          console.log(state, a);
          state = 68078983;
          continue;
        case 305375521:
          if (97867755n) {
            a = 1;
            b[32] -= b[16] + b[21] + b[4] + b[17] + b[28] + b[22] + 18;
            b[32] &= 0xFF;
          } else {
            b[25] -= b[37] + b[40] + b[17] + b[21] + b[14] + b[33] + 52;
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 838732416;
          continue;
        case 307715980:
          if (37421593n) {
            a = 1;
            b[16] += b[15] + b[10] + b[26] + b[2] + b[17] + b[14] + 233;
            b[16] &= 0xFF;
          } else {
            b[18] -= b[23] + b[10] + b[2] + b[30] + b[6] + b[17] + 44;
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 798465969;
          continue;
        case 308137512:
          if (84118768n) {
            a = 1;
            b[34] += b[25] + b[28] + b[24] + b[31] + b[41] + b[2] + 60;
            b[34] &= 0xFF;
          } else {
            b[15] -= b[17] + b[29] + b[20] + b[9] + b[0] + b[43] + 229;
            b[15] &= 0xFF;
          };
          console.log(state, a);
          state = 302678208;
          continue;
        case 308307937:
          if (830173059) {
            a = 1;
            b[16] -= b[41] + b[36] + b[5] + b[11] + b[21] + b[27] + 9;
            b[16] &= 0xFF;
          } else {
            b[17] -= b[34] + b[1] + b[14] + b[19] + b[29] + b[18] + 164;
            b[17] &= 0xFF;
          };
          console.log(state, a);
          state = 841512768;
          continue;
        case 308969481:
          if (61075735n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[31] -= b[33] + b[6] + b[1] + b[29] + b[23] + b[4] + Math.floor(A * 256);
  
            b[31] &= 0xFF;
          } else {
            b[8] += b[41] + b[7] + b[32] + b[17] + b[40] + b[22] + 77;
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 545102990;
          continue;
        case 310172561:
          if (59015155n) {
            a = 1;
            b[26] -= b[23] + b[16] + b[41] + b[7] + b[27] + b[18] + 119;
            b[26] &= 0xFF;
          } else {
            b[20] ^= (b[5] + b[30] + b[18] + b[4] + b[7] + b[13] + 174) & 0xFF;
          };
          console.log(state, a);
          state = 750063720;
          continue;
        case 310398609:
          if (Math.random() < 0.5) {
            a = 1;
            b[40] += b[35] + b[42] + b[2] + b[24] + b[22] + b[0] + 14;
            b[40] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[41] -= b[18] + b[30] + b[14] + b[38] + b[5] + b[26] + Math.floor(A * 256);
  
            b[41] &= 0xFF;
          };
          console.log(state, a);
          state = 627325155;
          continue;
        case 310481047:
          if (619140230) {
            a = 1;
            b[39] += b[41] + b[22] + b[17] + b[4] + b[0] + b[35] + 168;
            b[39] &= 0xFF;
          } else {
            b[34] -= b[2] + b[27] + b[31] + b[28] + b[18] + b[5] + 29;
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 103230408;
          continue;
        case 311777325:
          if (Math.random() < 0.5) {
            a = 1;
            b[42] += b[18] + b[37] + b[23] + b[21] + b[41] + b[38] + 64;
            b[42] &= 0xFF;
          } else {
            b[30] -= b[37] + b[35] + b[1] + b[10] + b[43] + b[36] + 152;
            b[30] &= 0xFF;
          };
          console.log(state, a);
          state = 947180378;
          continue;
        case 314005330:
          if (72635016n) {
            a = 1;
            b[1] -= b[14] + b[10] + b[9] + b[33] + b[41] + b[15] + 240;
            b[1] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[17] ^= (b[18] + b[42] + b[33] + b[21] + b[29] + b[7] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 771896895;
          continue;
        case 316553773:
          if (64078358n) {
            a = 1;
            b[23] += b[30] + b[6] + b[10] + b[40] + b[15] + b[37] + 35;
            b[23] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[18] += b[42] + b[17] + b[26] + b[39] + b[4] + b[43] + Math.floor(A * 256);
  
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 962667923;
          continue;
        case 316759147:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[21] += b[42] + b[12] + b[8] + b[25] + b[27] + b[6] + Math.floor(A * 256);
  
            b[21] &= 0xFF;
          } else {
            b[11] -= b[3] + b[20] + b[30] + b[18] + b[1] + b[17] + 21;
            b[11] &= 0xFF;
          };
          console.log(state, a);
          state = 120860048;
          continue;
        case 322224592:
          if (51026408n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[19] ^= (b[16] + b[10] + b[3] + b[5] + b[39] + b[0] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[41] ^= (b[42] + b[38] + b[1] + b[17] + b[24] + b[9] + 68) & 0xFF;
          };
          console.log(state, a);
          state = 294571306;
          continue;
        case 323794006:
          if (398232492) {
            a = 1;
            b[12] -= b[9] + b[10] + b[35] + b[4] + b[29] + b[11] + 198;
            b[12] &= 0xFF;
          } else {
            b[23] ^= (b[11] + b[15] + b[34] + b[8] + b[36] + b[16] + 62) & 0xFF;
          };
          console.log(state, a);
          state = 428579655;
          continue;
        case 324375396:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[16] -= b[39] + b[1] + b[19] + b[10] + b[14] + b[26] + Math.floor(A * 256);
  
            b[16] &= 0xFF;
          } else {
            b[30] += b[17] + b[26] + b[21] + b[4] + b[6] + b[28] + 84;
            b[30] &= 0xFF;
          };
          console.log(state, a);
          state = 357530869;
          continue;
        case 326353561:
          if (477283788) {
            a = 1;
            b[24] -= b[41] + b[34] + b[27] + b[37] + b[36] + b[15] + 0;
            b[24] &= 0xFF;
          } else {
            b[22] -= b[33] + b[18] + b[11] + b[27] + b[41] + b[31] + 208;
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 221435762;
          continue;
        case 326512739:
          if (57599802n) {
            a = 1;
            b[24] ^= (b[15] + b[38] + b[27] + b[23] + b[21] + b[1] + 244) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[15] ^= (b[2] + b[39] + b[21] + b[11] + b[10] + b[5] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 881516063;
          continue;
        case 326894214:
          if (Math.random() < 0.5) {
            a = 1;
            b[33] -= b[8] + b[10] + b[30] + b[31] + b[20] + b[42] + 105;
            b[33] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[0] += b[21] + b[26] + b[20] + b[27] + b[33] + b[29] + Math.floor(A * 256);
  
            b[0] &= 0xFF;
          };
          console.log(state, a);
          state = 469020671;
          continue;
        case 327658034:
          if (87861049) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[35] ^= (b[8] + b[16] + b[9] + b[23] + b[29] + b[12] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[3] ^= (b[18] + b[9] + b[2] + b[35] + b[34] + b[30] + 185) & 0xFF;
          };
          console.log(state, a);
          state = 936987221;
          continue;
        case 328293975:
          if (487164505) {
            a = 1;
            b[31] += b[27] + b[6] + b[10] + b[40] + b[38] + b[17] + 15;
            b[31] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[7] -= b[38] + b[42] + b[28] + b[6] + b[16] + b[25] + Math.floor(A * 256);
  
            b[7] &= 0xFF;
          };
          console.log(state, a);
          state = 242015430;
          continue;
        case 332288104:
          if (83622609n) {
            a = 1;
            b[34] ^= (b[42] + b[18] + b[9] + b[32] + b[3] + b[11] + 182) & 0xFF;
          } else {
            b[27] -= b[30] + b[34] + b[0] + b[18] + b[16] + b[11] + 141;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 1014119894;
          continue;
        case 333008690:
          if (81927720n) {
            a = 1;
            b[11] -= b[24] + b[13] + b[3] + b[6] + b[27] + b[7] + 206;
            b[11] &= 0xFF;
          } else {
            b[12] ^= (b[1] + b[18] + b[36] + b[13] + b[14] + b[33] + 207) & 0xFF;
          };
          console.log(state, a);
          state = 962184579;
          continue;
        case 333278516:
          if (Math.random() < 0.5) {
            a = 1;
            b[11] -= b[4] + b[37] + b[2] + b[32] + b[5] + b[1] + 102;
            b[11] &= 0xFF;
          } else {
            b[13] -= b[7] + b[18] + b[41] + b[2] + b[31] + b[3] + 214;
            b[13] &= 0xFF;
          };
          console.log(state, a);
          state = 573116411;
          continue;
        case 333327748:
          if (Math.random() < 0.5) {
            a = 1;
            b[39] += b[37] + b[17] + b[14] + b[5] + b[10] + b[34] + 198;
            b[39] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[16] ^= (b[11] + b[33] + b[22] + b[7] + b[0] + b[29] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 503956735;
          continue;
        case 333413964:
          if (Math.random() < 0.5) {
            a = 1;
            b[1] += b[13] + b[35] + b[18] + b[2] + b[5] + b[21] + 159;
            b[1] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[2] += b[26] + b[41] + b[35] + b[1] + b[18] + b[34] + Math.floor(A * 256);
  
            b[2] &= 0xFF;
          };
          console.log(state, a);
          state = 743277227;
          continue;
        case 333723469:
          if (311653695) {
            a = 1;
            b[13] -= b[40] + b[43] + b[26] + b[38] + b[31] + b[41] + 77;
            b[13] &= 0xFF;
          } else {
            b[32] ^= (b[28] + b[16] + b[41] + b[36] + b[22] + b[33] + 146) & 0xFF;
          };
          console.log(state, a);
          state = 681620340;
          continue;
        case 336652146:
          if (64507966n) {
            a = 1;
            b[7] -= b[14] + b[33] + b[30] + b[6] + b[31] + b[16] + 185;
            b[7] &= 0xFF;
          } else {
            b[26] += b[23] + b[30] + b[43] + b[13] + b[20] + b[24] + 124;
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 700219153;
          continue;
        case 337528737:
          if (65777729n) {
            a = 1;
            b[31] -= b[4] + b[32] + b[10] + b[39] + b[37] + b[13] + 28;
            b[31] &= 0xFF;
          } else {
            b[11] += b[15] + b[21] + b[35] + b[19] + b[42] + b[24] + 152;
            b[11] &= 0xFF;
          };
          console.log(state, a);
          state = 444449293;
          continue;
        case 337619620:
          if (844294543) {
            a = 1;
            b[32] ^= (b[0] + b[27] + b[39] + b[15] + b[24] + b[5] + 129) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[34] -= b[21] + b[5] + b[41] + b[10] + b[24] + b[38] + Math.floor(A * 256);
  
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 648181894;
          continue;
        case 338410070:
          if (Math.random() < 0.5) {
            a = 1;
            b[20] ^= (b[15] + b[7] + b[21] + b[26] + b[41] + b[9] + 93) & 0xFF;
          } else {
            b[25] += b[29] + b[8] + b[18] + b[33] + b[23] + b[10] + 43;
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 876061876;
          continue;
        case 338972092:
          if (488876856) {
            a = 1;
            b[2] -= b[21] + b[17] + b[14] + b[7] + b[40] + b[1] + 191;
            b[2] &= 0xFF;
          } else {
            b[16] ^= (b[31] + b[22] + b[41] + b[14] + b[35] + b[37] + 74) & 0xFF;
          };
          console.log(state, a);
          state = 750227539;
          continue;
        case 340838771:
          if (65067412n) {
            a = 1;
            b[35] ^= (b[34] + b[36] + b[8] + b[19] + b[3] + b[14] + 74) & 0xFF;
          } else {
            b[41] -= b[31] + b[25] + b[7] + b[36] + b[4] + b[1] + 33;
            b[41] &= 0xFF;
          };
          console.log(state, a);
          state = 1054455207;
          continue;
        case 340943616:
          if (480735617) {
            a = 1;
            b[20] ^= (b[24] + b[21] + b[39] + b[27] + b[8] + b[32] + 168) & 0xFF;
          } else {
            b[28] += b[0] + b[23] + b[14] + b[16] + b[20] + b[25] + 31;
            b[28] &= 0xFF;
          };
          console.log(state, a);
          state = 943639861;
          continue;
        case 343068132:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[43] += b[13] + b[27] + b[15] + b[12] + b[6] + b[5] + Math.floor(A * 256);
  
            b[43] &= 0xFF;
          } else {
            b[43] += b[22] + b[29] + b[16] + b[28] + b[12] + b[38] + 87;
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 604380114;
          continue;
        case 344569583:
          if (13706660n) {
            a = 1;
            b[13] ^= (b[32] + b[35] + b[10] + b[16] + b[40] + b[22] + 187) & 0xFF;
          } else {
            b[42] -= b[16] + b[0] + b[32] + b[23] + b[2] + b[24] + 228;
            b[42] &= 0xFF;
          };
          console.log(state, a);
          state = 55662707;
          continue;
        case 345294165:
          if (99319925n) {
            a = 1;
            b[6] -= b[23] + b[39] + b[7] + b[22] + b[26] + b[21] + 223;
            b[6] &= 0xFF;
          } else {
            b[38] += b[43] + b[17] + b[14] + b[27] + b[0] + b[22] + 167;
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 973059351;
          continue;
        case 345615088:
          if (100997494) {
            a = 1;
            b[35] += b[23] + b[9] + b[20] + b[18] + b[42] + b[0] + 40;
            b[35] &= 0xFF;
          } else {
            b[41] ^= (b[17] + b[25] + b[9] + b[42] + b[36] + b[10] + 170) & 0xFF;
          };
          console.log(state, a);
          state = 1050414580;
          continue;
        case 345757846:
          if (Math.random() < 0.5) {
            a = 1;
            b[8] ^= (b[33] + b[32] + b[39] + b[12] + b[20] + b[7] + 34) & 0xFF;
          } else {
            b[17] ^= (b[4] + b[29] + b[21] + b[43] + b[13] + b[3] + 100) & 0xFF;
          };
          console.log(state, a);
          state = 324216333;
          continue;
        case 346115220:
          if (953618142) {
            a = 1;
            b[6] ^= (b[35] + b[20] + b[32] + b[22] + b[24] + b[14] + 156) & 0xFF;
          } else {
            b[28] += b[36] + b[26] + b[17] + b[5] + b[1] + b[13] + 245;
            b[28] &= 0xFF;
          };
          console.log(state, a);
          state = 1050865314;
          continue;
        case 346310778:
          if (26889902n) {
            a = 1;
            b[21] -= b[40] + b[1] + b[9] + b[38] + b[34] + b[25] + 186;
            b[21] &= 0xFF;
          } else {
            b[36] -= b[2] + b[23] + b[8] + b[28] + b[19] + b[34] + 235;
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 788772522;
          continue;
        case 346377456:
          if (Math.random() < 0.5) {
            a = 1;
            b[34] -= b[41] + b[14] + b[13] + b[20] + b[17] + b[7] + 29;
            b[34] &= 0xFF;
          } else {
            b[28] -= b[22] + b[43] + b[36] + b[25] + b[16] + b[12] + 102;
            b[28] &= 0xFF;
          };
          console.log(state, a);
          state = 398388097;
          continue;
        case 347190308:
          if (Math.random() < 0.5) {
            a = 1;
            b[40] += b[16] + b[24] + b[12] + b[5] + b[26] + b[38] + 53;
            b[40] &= 0xFF;
          } else {
            b[34] += b[9] + b[24] + b[14] + b[5] + b[40] + b[7] + 158;
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 916116227;
          continue;
        case 348173505:
          if (593370103) {
            a = 1;
            b[16] -= b[10] + b[42] + b[23] + b[38] + b[2] + b[28] + 182;
            b[16] &= 0xFF;
          } else {
            b[28] += b[12] + b[26] + b[3] + b[22] + b[41] + b[36] + 178;
            b[28] &= 0xFF;
          };
          console.log(state, a);
          state = 902345362;
          continue;
        case 351641283:
          if (839941505) {
            a = 1;
            b[32] += b[26] + b[29] + b[36] + b[9] + b[42] + b[4] + 155;
            b[32] &= 0xFF;
          } else {
            b[10] -= b[23] + b[32] + b[37] + b[28] + b[39] + b[21] + 233;
            b[10] &= 0xFF;
          };
          console.log(state, a);
          state = 859857603;
          continue;
        case 353246766:
          if (Math.random() < 0.5) {
            a = 1;
            b[32] += b[7] + b[36] + b[14] + b[0] + b[10] + b[31] + 104;
            b[32] &= 0xFF;
          } else {
            b[12] -= b[23] + b[2] + b[10] + b[5] + b[30] + b[27] + 195;
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 931163953;
          continue;
        case 354670641:
          if (890018195) {
            a = 1;
            b[37] -= b[36] + b[43] + b[1] + b[7] + b[28] + b[9] + 48;
            b[37] &= 0xFF;
          } else {
            b[22] -= b[21] + b[32] + b[36] + b[31] + b[33] + b[12] + 209;
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 940005195;
          continue;
        case 355872836:
          if (660850287) {
            a = 1;
            b[15] += b[21] + b[24] + b[0] + b[8] + b[23] + b[11] + 177;
            b[15] &= 0xFF;
          } else {
            b[22] ^= (b[32] + b[13] + b[42] + b[12] + b[33] + b[25] + 4) & 0xFF;
          };
          console.log(state, a);
          state = 839318347;
          continue;
        case 355878506:
          if (36769050n) {
            a = 1;
            b[6] ^= (b[41] + b[28] + b[20] + b[36] + b[40] + b[13] + 212) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[2] ^= (b[12] + b[11] + b[39] + b[31] + b[43] + b[36] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 899648181;
          continue;
        case 356968013:
          if (86808995n) {
            a = 1;
            b[25] -= b[42] + b[24] + b[41] + b[14] + b[36] + b[17] + 58;
            b[25] &= 0xFF;
          } else {
            b[2] ^= (b[35] + b[18] + b[25] + b[39] + b[23] + b[14] + 230) & 0xFF;
          };
          console.log(state, a);
          state = 308945835;
          continue;
        case 357341428:
          if (29320591n) {
            a = 1;
            b[35] ^= (b[2] + b[18] + b[4] + b[1] + b[24] + b[21] + 103) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[14] ^= (b[0] + b[21] + b[12] + b[31] + b[11] + b[5] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 206476859;
          continue;
        case 358432243:
          if (Math.random() < 0.5) {
            a = 1;
            b[38] -= b[16] + b[22] + b[43] + b[11] + b[13] + b[5] + 23;
            b[38] &= 0xFF;
          } else {
            b[23] += b[7] + b[30] + b[27] + b[35] + b[43] + b[10] + 164;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 620986063;
          continue;
        case 364059800:
          if (439881210) {
            a = 1;
            b[14] -= b[18] + b[24] + b[22] + b[32] + b[41] + b[9] + 6;
            b[14] &= 0xFF;
          } else {
            b[15] -= b[25] + b[43] + b[8] + b[19] + b[42] + b[36] + 163;
            b[15] &= 0xFF;
          };
          console.log(state, a);
          state = 637537818;
          continue;
        case 365857434:
          if (Math.random() < 0.5) {
            a = 1;
            b[18] -= b[14] + b[23] + b[13] + b[37] + b[20] + b[32] + 70;
            b[18] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[7] ^= (b[41] + b[42] + b[5] + b[39] + b[33] + b[18] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 306782152;
          continue;
        case 366327144:
          if (60557216n) {
            a = 1;
            b[9] += b[27] + b[39] + b[31] + b[43] + b[22] + b[28] + 229;
            b[9] &= 0xFF;
          } else {
            b[23] ^= (b[28] + b[0] + b[14] + b[1] + b[18] + b[17] + 45) & 0xFF;
          };
          console.log(state, a);
          state = 159027065;
          continue;
        case 376132195:
          if (39731571n) {
            a = 1;
            b[7] ^= (b[10] + b[16] + b[2] + b[11] + b[13] + b[33] + 131) & 0xFF;
          } else {
            b[41] -= b[27] + b[6] + b[15] + b[42] + b[7] + b[17] + 162;
            b[41] &= 0xFF;
          };
          console.log(state, a);
          state = 467271741;
          continue;
        case 376310042:
          if (Math.random() < 0.5) {
            a = 1;
            b[40] ^= (b[35] + b[9] + b[27] + b[28] + b[3] + b[36] + 118) & 0xFF;
          } else {
            b[6] -= b[2] + b[41] + b[37] + b[12] + b[14] + b[33] + 57;
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 1005231032;
          continue;
        case 376455206:
          if (Math.random() < 0.5) {
            a = 1;
            b[34] += b[32] + b[5] + b[20] + b[17] + b[15] + b[19] + 25;
            b[34] &= 0xFF;
          } else {
            b[17] -= b[16] + b[43] + b[31] + b[15] + b[41] + b[21] + 248;
            b[17] &= 0xFF;
          };
          console.log(state, a);
          state = 488570004;
          continue;
        case 377623173:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[25] ^= (b[10] + b[19] + b[34] + b[40] + b[12] + b[6] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[30] ^= (b[19] + b[9] + b[25] + b[11] + b[18] + b[23] + 2) & 0xFF;
          };
          console.log(state, a);
          state = 793835102;
          continue;
        case 377916788:
          if (922263820) {
            a = 1;
            b[8] ^= (b[32] + b[26] + b[21] + b[1] + b[30] + b[41] + 172) & 0xFF;
          } else {
            b[32] += b[42] + b[43] + b[34] + b[17] + b[5] + b[0] + 94;
            b[32] &= 0xFF;
          };
          console.log(state, a);
          state = 735781200;
          continue;
        case 379529415:
          if (31575299n) {
            a = 1;
            b[24] -= b[1] + b[6] + b[28] + b[4] + b[13] + b[9] + 56;
            b[24] &= 0xFF;
          } else {
            b[42] -= b[26] + b[43] + b[0] + b[21] + b[4] + b[20] + 173;
            b[42] &= 0xFF;
          };
          console.log(state, a);
          state = 54757828;
          continue;
        case 381813752:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[25] ^= (b[6] + b[43] + b[29] + b[27] + b[13] + b[14] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[16] += b[42] + b[29] + b[25] + b[0] + b[12] + b[26] + 92;
            b[16] &= 0xFF;
          };
          console.log(state, a);
          state = 958508071;
          continue;
        case 382922372:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[27] ^= (b[39] + b[14] + b[33] + b[22] + b[6] + b[28] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[22] += b[21] + b[29] + b[9] + b[38] + b[20] + b[18] + 213;
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 15866745;
          continue;
        case 383403877:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[42] ^= (b[20] + b[38] + b[37] + b[12] + b[35] + b[41] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[32] -= b[29] + b[31] + b[24] + b[43] + b[12] + b[20] + 249;
            b[32] &= 0xFF;
          };
          console.log(state, a);
          state = 1058982649;
          continue;
        case 384516053:
          if (354815298) {
            a = 1;
            b[18] += b[24] + b[0] + b[3] + b[13] + b[30] + b[22] + 34;
            b[18] &= 0xFF;
          } else {
            b[1] -= b[27] + b[4] + b[7] + b[21] + b[32] + b[31] + 165;
            b[1] &= 0xFF;
          };
          console.log(state, a);
          state = 735087160;
          continue;
        case 387100740:
          if (Math.random() < 0.5) {
            a = 1;
            b[35] ^= (b[20] + b[41] + b[32] + b[8] + b[24] + b[11] + 111) & 0xFF;
          } else {
            b[18] ^= (b[9] + b[21] + b[4] + b[2] + b[42] + b[5] + 103) & 0xFF;
          };
          console.log(state, a);
          state = 718864653;
          continue;
        case 387974948:
          if (Math.random() < 0.5) {
            a = 1;
            b[21] -= b[18] + b[13] + b[28] + b[31] + b[26] + b[29] + 93;
            b[21] &= 0xFF;
          } else {
            b[36] += b[30] + b[3] + b[32] + b[37] + b[24] + b[18] + 148;
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 829863547;
          continue;
        case 388219024:
          if (66330494n) {
            a = 1;
            b[13] ^= (b[37] + b[21] + b[22] + b[23] + b[31] + b[26] + 247) & 0xFF;
          } else {
            b[4] -= b[9] + b[31] + b[41] + b[21] + b[8] + b[5] + 215;
            b[4] &= 0xFF;
          };
          console.log(state, a);
          state = 798136234;
          continue;
        case 388611681:
          if (942571809) {
            a = 1;
            b[5] -= b[14] + b[0] + b[43] + b[41] + b[10] + b[20] + 219;
            b[5] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[43] += b[40] + b[23] + b[21] + b[26] + b[6] + b[33] + Math.floor(A * 256);
  
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 116844593;
          continue;
        case 390035647:
          if (88803738n) {
            a = 1;
            b[31] += b[42] + b[30] + b[1] + b[20] + b[40] + b[18] + 198;
            b[31] &= 0xFF;
          } else {
            b[15] += b[23] + b[8] + b[4] + b[38] + b[37] + b[29] + 82;
            b[15] &= 0xFF;
          };
          console.log(state, a);
          state = 1036870181;
          continue;
        case 391748300:
          if (892824005) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[16] += b[21] + b[33] + b[35] + b[22] + b[31] + b[13] + Math.floor(A * 256);
  
            b[16] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[16] -= b[32] + b[4] + b[31] + b[8] + b[29] + b[14] + Math.floor(A * 256);
  
            b[16] &= 0xFF;
          };
          console.log(state, a);
          state = 865534450;
          continue;
        case 392984751:
          if (620312508) {
            a = 1;
            b[12] -= b[10] + b[26] + b[6] + b[19] + b[23] + b[41] + 127;
            b[12] &= 0xFF;
          } else {
            b[13] ^= (b[8] + b[22] + b[33] + b[29] + b[5] + b[17] + 167) & 0xFF;
          };
          console.log(state, a);
          state = 853233897;
          continue;
        case 393219787:
          if (919953243) {
            a = 1;
            b[3] ^= (b[19] + b[40] + b[12] + b[27] + b[8] + b[18] + 67) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[30] -= b[6] + b[14] + b[28] + b[29] + b[24] + b[15] + Math.floor(A * 256);
  
            b[30] &= 0xFF;
          };
          console.log(state, a);
          state = 231414023;
          continue;
        case 394460282:
          if (31684156n) {
            a = 1;
            b[15] -= b[36] + b[16] + b[25] + b[33] + b[21] + b[43] + 226;
            b[15] &= 0xFF;
          } else {
            b[28] += b[40] + b[23] + b[20] + b[36] + b[22] + b[27] + 232;
            b[28] &= 0xFF;
          };
          console.log(state, a);
          state = 120145493;
          continue;
        case 394802322:
          if (67677057n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[36] ^= (b[40] + b[22] + b[17] + b[27] + b[0] + b[39] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[2] -= b[15] + b[41] + b[7] + b[29] + b[23] + b[24] + Math.floor(A * 256);
  
            b[2] &= 0xFF;
          };
          console.log(state, a);
          state = 336616975;
          continue;
        case 395862207:
          if (638293354) {
            a = 1;
            b[16] += b[17] + b[3] + b[38] + b[9] + b[11] + b[6] + 27;
            b[16] &= 0xFF;
          } else {
            b[9] += b[1] + b[10] + b[23] + b[22] + b[37] + b[21] + 129;
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 907324772;
          continue;
        case 397157371:
          if (33892584n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[43] += b[28] + b[14] + b[12] + b[40] + b[16] + b[39] + Math.floor(A * 256);
  
            b[43] &= 0xFF;
          } else {
            b[18] -= b[38] + b[20] + b[16] + b[24] + b[34] + b[26] + 49;
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 165366900;
          continue;
        case 399226168:
          if (218386278) {
            a = 1;
            b[5] ^= (b[41] + b[0] + b[39] + b[18] + b[23] + b[14] + 22) & 0xFF;
          } else {
            b[16] ^= (b[41] + b[35] + b[32] + b[27] + b[42] + b[43] + 137) & 0xFF;
          };
          console.log(state, a);
          state = 300948554;
          continue;
        case 400398773:
          if (Math.random() < 0.5) {
            a = 1;
            b[9] += b[26] + b[20] + b[29] + b[25] + b[6] + b[12] + 183;
            b[9] &= 0xFF;
          } else {
            b[29] ^= (b[41] + b[39] + b[15] + b[0] + b[19] + b[12] + 213) & 0xFF;
          };
          console.log(state, a);
          state = 419219886;
          continue;
        case 402456529:
          if (63651937n) {
            a = 1;
            b[24] ^= (b[42] + b[18] + b[35] + b[2] + b[41] + b[27] + 91) & 0xFF;
          } else {
            b[36] += b[30] + b[26] + b[3] + b[37] + b[4] + b[28] + 207;
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 537912203;
          continue;
        case 402768593:
          if (365193231) {
            a = 1;
            b[11] ^= (b[7] + b[28] + b[16] + b[9] + b[5] + b[10] + 36) & 0xFF;
          } else {
            b[17] += b[18] + b[4] + b[15] + b[34] + b[16] + b[31] + 215;
            b[17] &= 0xFF;
          };
          console.log(state, a);
          state = 603034106;
          continue;
        case 406937840:
          if (Math.random() < 0.5) {
            a = 1;
            b[11] += b[17] + b[25] + b[9] + b[2] + b[34] + b[18] + 115;
            b[11] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[13] ^= (b[37] + b[3] + b[36] + b[17] + b[12] + b[2] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 48873310;
          continue;
        case 407028537:
          if (351206548) {
            a = 1;
            b[13] -= b[22] + b[14] + b[39] + b[9] + b[36] + b[4] + 212;
            b[13] &= 0xFF;
          } else {
            b[27] += b[16] + b[5] + b[12] + b[2] + b[43] + b[20] + 84;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 847042938;
          continue;
        case 408646337:
          if (60744659n) {
            a = 1;
            b[6] ^= (b[2] + b[9] + b[16] + b[5] + b[10] + b[12] + 37) & 0xFF;
          } else {
            b[28] ^= (b[8] + b[39] + b[18] + b[25] + b[13] + b[17] + 172) & 0xFF;
          };
          console.log(state, a);
          state = 638885455;
          continue;
        case 409252293:
          if (52905300n) {
            a = 1;
            b[22] ^= (b[6] + b[32] + b[27] + b[2] + b[13] + b[3] + 191) & 0xFF;
          } else {
            b[31] += b[10] + b[28] + b[13] + b[1] + b[38] + b[12] + 162;
            b[31] &= 0xFF;
          };
          console.log(state, a);
          state = 514932023;
          continue;
        case 410002593:
          if (1050330741) {
            a = 1;
            b[24] -= b[41] + b[11] + b[43] + b[26] + b[16] + b[42] + 156;
            b[24] &= 0xFF;
          } else {
            b[39] -= b[18] + b[28] + b[42] + b[40] + b[2] + b[11] + 91;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 316775632;
          continue;
        case 410332197:
          if (Math.random() < 0.5) {
            a = 1;
            b[31] += b[21] + b[35] + b[22] + b[17] + b[7] + b[0] + 20;
            b[31] &= 0xFF;
          } else {
            b[15] ^= (b[30] + b[3] + b[18] + b[31] + b[27] + b[8] + 92) & 0xFF;
          };
          console.log(state, a);
          state = 207481335;
          continue;
        case 410802044:
          if (11042713n) {
            a = 1;
            b[3] ^= (b[14] + b[26] + b[33] + b[17] + b[32] + b[1] + 230) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[42] ^= (b[20] + b[31] + b[38] + b[36] + b[0] + b[19] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 936452181;
          continue;
        case 410923009:
          if (679203260) {
            a = 1;
            b[34] += b[1] + b[41] + b[13] + b[30] + b[17] + b[33] + 42;
            b[34] &= 0xFF;
          } else {
            b[40] += b[39] + b[38] + b[24] + b[20] + b[1] + b[9] + 228;
            b[40] &= 0xFF;
          };
          console.log(state, a);
          state = 939859661;
          continue;
        case 412251143:
          if (62372014n) {
            a = 1;
            b[11] -= b[26] + b[43] + b[14] + b[4] + b[30] + b[8] + 96;
            b[11] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[36] += b[33] + b[13] + b[26] + b[27] + b[5] + b[24] + Math.floor(A * 256);
  
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 490551708;
          continue;
        case 412918289:
          if (808576349) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[38] += b[22] + b[8] + b[3] + b[10] + b[7] + b[35] + Math.floor(A * 256);
  
            b[38] &= 0xFF;
          } else {
            b[37] -= b[3] + b[31] + b[12] + b[28] + b[41] + b[2] + 222;
            b[37] &= 0xFF;
          };
          console.log(state, a);
          state = 356129539;
          continue;
        case 413054705:
          if (262554705) {
            a = 1;
            b[21] -= b[24] + b[31] + b[10] + b[2] + b[22] + b[40] + 179;
            b[21] &= 0xFF;
          } else {
            b[23] -= b[22] + b[15] + b[20] + b[10] + b[37] + b[33] + 163;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 862239116;
          continue;
        case 413338388:
          if (Math.random() < 0.5) {
            a = 1;
            b[19] -= b[38] + b[6] + b[28] + b[33] + b[39] + b[43] + 139;
            b[19] &= 0xFF;
          } else {
            b[19] ^= (b[0] + b[35] + b[14] + b[30] + b[21] + b[33] + 213) & 0xFF;
          };
          console.log(state, a);
          state = 925193711;
          continue;
        case 413708432:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[18] += b[4] + b[9] + b[3] + b[12] + b[26] + b[1] + Math.floor(A * 256);
  
            b[18] &= 0xFF;
          } else {
            b[11] += b[40] + b[33] + b[34] + b[28] + b[24] + b[35] + 172;
            b[11] &= 0xFF;
          };
          console.log(state, a);
          state = 938456085;
          continue;
        case 414443906:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[33] -= b[5] + b[41] + b[16] + b[32] + b[35] + b[36] + Math.floor(A * 256);
  
            b[33] &= 0xFF;
          } else {
            b[29] ^= (b[37] + b[1] + b[15] + b[38] + b[8] + b[7] + 123) & 0xFF;
          };
          console.log(state, a);
          state = 596977915;
          continue;
        case 414456846:
          if (13208116n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[6] -= b[30] + b[29] + b[14] + b[35] + b[15] + b[20] + Math.floor(A * 256);
  
            b[6] &= 0xFF;
          } else {
            b[21] += b[13] + b[41] + b[19] + b[12] + b[34] + b[39] + 10;
            b[21] &= 0xFF;
          };
          console.log(state, a);
          state = 971106962;
          continue;
        case 415110917:
          if (971641145) {
            a = 1;
            b[33] += b[13] + b[20] + b[16] + b[17] + b[24] + b[6] + 192;
            b[33] &= 0xFF;
          } else {
            b[35] += b[18] + b[17] + b[30] + b[15] + b[21] + b[6] + 215;
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 274895311;
          continue;
        case 418085472:
          if (449660790) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[42] -= b[35] + b[40] + b[1] + b[29] + b[30] + b[15] + Math.floor(A * 256);
  
            b[42] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[13] -= b[33] + b[28] + b[19] + b[27] + b[6] + b[12] + Math.floor(A * 256);
  
            b[13] &= 0xFF;
          };
          console.log(state, a);
          state = 445117433;
          continue;
        case 419650888:
          if (804235477) {
            a = 1;
            b[8] -= b[10] + b[37] + b[20] + b[15] + b[31] + b[38] + 146;
            b[8] &= 0xFF;
          } else {
            b[26] ^= (b[33] + b[15] + b[20] + b[37] + b[5] + b[36] + 78) & 0xFF;
          };
          console.log(state, a);
          state = 369689767;
          continue;
        case 419988815:
          if (51896074n) {
            a = 1;
            b[41] ^= (b[10] + b[17] + b[0] + b[1] + b[40] + b[5] + 80) & 0xFF;
          } else {
            b[16] ^= (b[10] + b[37] + b[38] + b[27] + b[6] + b[18] + 208) & 0xFF;
          };
          console.log(state, a);
          state = 723179055;
          continue;
        case 420148501:
          if (Math.random() < 0.5) {
            a = 1;
            b[20] -= b[1] + b[8] + b[9] + b[32] + b[25] + b[0] + 58;
            b[20] &= 0xFF;
          } else {
            b[38] -= b[24] + b[23] + b[36] + b[32] + b[7] + b[2] + 136;
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 931323440;
          continue;
        case 421002955:
          if (Math.random() < 0.5) {
            a = 1;
            b[43] -= b[16] + b[1] + b[14] + b[32] + b[30] + b[7] + 150;
            b[43] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[20] += b[3] + b[12] + b[40] + b[43] + b[15] + b[28] + Math.floor(A * 256);
  
            b[20] &= 0xFF;
          };
          console.log(state, a);
          state = 346979242;
          continue;
        case 421677992:
          if (610991075) {
            a = 1;
            b[30] -= b[17] + b[16] + b[2] + b[28] + b[3] + b[1] + 94;
            b[30] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[43] += b[35] + b[40] + b[41] + b[36] + b[10] + b[39] + Math.floor(A * 256);
  
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 11258425;
          continue;
        case 422010113:
          if (14463569n) {
            a = 1;
            b[11] += b[28] + b[17] + b[40] + b[37] + b[1] + b[0] + 45;
            b[11] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[35] += b[13] + b[21] + b[32] + b[1] + b[10] + b[43] + Math.floor(A * 256);
  
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 207711035;
          continue;
        case 422356995:
          if (Math.random() < 0.5) {
            a = 1;
            b[7] -= b[41] + b[40] + b[13] + b[19] + b[17] + b[38] + 45;
            b[7] &= 0xFF;
          } else {
            b[33] += b[2] + b[5] + b[23] + b[14] + b[19] + b[38] + 175;
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 151665240;
          continue;
        case 425518304:
          if (27257617n) {
            a = 1;
            b[27] -= b[17] + b[9] + b[20] + b[16] + b[38] + b[24] + 60;
            b[27] &= 0xFF;
          } else {
            b[43] -= b[18] + b[14] + b[4] + b[20] + b[40] + b[27] + 107;
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 17949248;
          continue;
        case 425700802:
          if (614470116) {
            a = 1;
            b[11] ^= (b[34] + b[13] + b[36] + b[15] + b[5] + b[40] + 60) & 0xFF;
          } else {
            b[11] -= b[32] + b[8] + b[9] + b[34] + b[39] + b[19] + 185;
            b[11] &= 0xFF;
          };
          console.log(state, a);
          state = 417303028;
          continue;
        case 425993177:
          if (Math.random() < 0.5) {
            a = 1;
            b[8] -= b[5] + b[14] + b[0] + b[11] + b[36] + b[35] + 211;
            b[8] &= 0xFF;
          } else {
            b[3] += b[5] + b[18] + b[10] + b[14] + b[43] + b[31] + 44;
            b[3] &= 0xFF;
          };
          console.log(state, a);
          state = 801284520;
          continue;
        case 426062705:
          if (Math.random() < 0.5) {
            a = 1;
            b[21] += b[1] + b[30] + b[36] + b[43] + b[3] + b[25] + 219;
            b[21] &= 0xFF;
          } else {
            b[43] += b[4] + b[19] + b[16] + b[36] + b[35] + b[25] + 198;
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 465688620;
          continue;
        case 427112169:
          if (62515986n) {
            a = 1;
            b[41] ^= (b[5] + b[16] + b[21] + b[17] + b[19] + b[15] + 187) & 0xFF;
          } else {
            b[15] -= b[26] + b[41] + b[19] + b[24] + b[21] + b[20] + 77;
            b[15] &= 0xFF;
          };
          console.log(state, a);
          state = 998851471;
          continue;
        case 429116243:
          if (449857890) {
            a = 1;
            b[29] ^= (b[40] + b[43] + b[24] + b[3] + b[35] + b[42] + 27) & 0xFF;
          } else {
            b[9] -= b[20] + b[19] + b[22] + b[5] + b[32] + b[35] + 151;
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 929475057;
          continue;
        case 430915810:
          if (33047836n) {
            a = 1;
            b[14] -= b[24] + b[16] + b[41] + b[28] + b[34] + b[5] + 255;
            b[14] &= 0xFF;
          } else {
            b[10] += b[12] + b[31] + b[35] + b[29] + b[19] + b[4] + 153;
            b[10] &= 0xFF;
          };
          console.log(state, a);
          state = 504733291;
          continue;
        case 431298389:
          if (20560274n) {
            a = 1;
            b[20] ^= (b[34] + b[23] + b[21] + b[0] + b[25] + b[12] + 14) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[42] -= b[5] + b[27] + b[38] + b[26] + b[41] + b[21] + Math.floor(A * 256);
  
            b[42] &= 0xFF;
          };
          console.log(state, a);
          state = 434234745;
          continue;
        case 432599280:
          if (Math.random() < 0.5) {
            a = 1;
            b[29] += b[6] + b[10] + b[31] + b[4] + b[19] + b[5] + 135;
            b[29] &= 0xFF;
          } else {
            b[26] -= b[8] + b[3] + b[27] + b[28] + b[6] + b[34] + 7;
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 716406816;
          continue;
        case 432794620:
          if (Math.random() < 0.5) {
            a = 1;
            b[27] ^= (b[17] + b[13] + b[28] + b[12] + b[24] + b[3] + 116) & 0xFF;
          } else {
            b[20] ^= (b[39] + b[22] + b[2] + b[27] + b[3] + b[28] + 218) & 0xFF;
          };
          console.log(state, a);
          state = 449054072;
          continue;
        case 433190983:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[43] -= b[28] + b[41] + b[5] + b[32] + b[36] + b[1] + Math.floor(A * 256);
  
            b[43] &= 0xFF;
          } else {
            b[31] += b[4] + b[21] + b[19] + b[27] + b[37] + b[33] + 251;
            b[31] &= 0xFF;
          };
          console.log(state, a);
          state = 225013121;
          continue;
        case 435026594:
          if (37718035n) {
            a = 1;
            b[4] ^= (b[16] + b[43] + b[41] + b[8] + b[3] + b[37] + 224) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[19] += b[27] + b[15] + b[21] + b[26] + b[31] + b[33] + Math.floor(A * 256);
  
            b[19] &= 0xFF;
          };
          console.log(state, a);
          state = 479609427;
          continue;
        case 435082171:
          if (432348810) {
            a = 1;
            b[28] ^= (b[15] + b[8] + b[22] + b[33] + b[23] + b[9] + 195) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[10] += b[5] + b[31] + b[18] + b[9] + b[24] + b[27] + Math.floor(A * 256);
  
            b[10] &= 0xFF;
          };
          console.log(state, a);
          state = 716798066;
          continue;
        case 436308333:
          if (637554787) {
            a = 1;
            b[41] -= b[5] + b[2] + b[39] + b[30] + b[20] + b[33] + 189;
            b[41] &= 0xFF;
          } else {
            b[6] -= b[20] + b[41] + b[0] + b[42] + b[12] + b[19] + 131;
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 565356050;
          continue;
        case 436361812:
          if (38134580n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[2] -= b[36] + b[1] + b[26] + b[30] + b[6] + b[13] + Math.floor(A * 256);
  
            b[2] &= 0xFF;
          } else {
            b[32] += b[18] + b[30] + b[15] + b[35] + b[11] + b[29] + 178;
            b[32] &= 0xFF;
          };
          console.log(state, a);
          state = 164111264;
          continue;
        case 436860761:
          if (25722626n) {
            a = 1;
            b[13] ^= (b[38] + b[41] + b[31] + b[9] + b[1] + b[40] + 57) & 0xFF;
          } else {
            b[39] -= b[23] + b[17] + b[21] + b[36] + b[20] + b[34] + 12;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 992124543;
          continue;
        case 438031715:
          if (72676851) {
            a = 1;
            b[30] -= b[8] + b[43] + b[37] + b[4] + b[31] + b[20] + 97;
            b[30] &= 0xFF;
          } else {
            b[17] ^= (b[20] + b[32] + b[10] + b[38] + b[24] + b[29] + 57) & 0xFF;
          };
          console.log(state, a);
          state = 780263901;
          continue;
        case 439230522:
          if (Math.random() < 0.5) {
            a = 1;
            b[38] -= b[15] + b[13] + b[3] + b[22] + b[34] + b[12] + 184;
            b[38] &= 0xFF;
          } else {
            b[28] -= b[43] + b[38] + b[13] + b[27] + b[8] + b[17] + 90;
            b[28] &= 0xFF;
          };
          console.log(state, a);
          state = 318198986;
          continue;
        case 439858784:
          if (48127012n) {
            a = 1;
            b[11] ^= (b[18] + b[37] + b[23] + b[5] + b[3] + b[7] + 53) & 0xFF;
          } else {
            b[15] -= b[34] + b[39] + b[42] + b[43] + b[28] + b[9] + 202;
            b[15] &= 0xFF;
          };
          console.log(state, a);
          state = 810171096;
          continue;
        case 440354165:
          if (Math.random() < 0.5) {
            a = 1;
            b[18] ^= (b[11] + b[5] + b[42] + b[38] + b[39] + b[41] + 129) & 0xFF;
          } else {
            b[31] ^= (b[8] + b[33] + b[38] + b[40] + b[13] + b[16] + 112) & 0xFF;
          };
          console.log(state, a);
          state = 1056735643;
          continue;
        case 440786193:
          if (67667498n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[39] -= b[4] + b[31] + b[22] + b[5] + b[17] + b[1] + Math.floor(A * 256);
  
            b[39] &= 0xFF;
          } else {
            b[4] -= b[36] + b[16] + b[6] + b[3] + b[33] + b[23] + 217;
            b[4] &= 0xFF;
          };
          console.log(state, a);
          state = 688759459;
          continue;
        case 442381073:
          if (244973440) {
            a = 1;
            b[32] ^= (b[37] + b[43] + b[30] + b[14] + b[29] + b[21] + 157) & 0xFF;
          } else {
            b[19] += b[38] + b[8] + b[11] + b[35] + b[36] + b[29] + 241;
            b[19] &= 0xFF;
          };
          console.log(state, a);
          state = 762144692;
          continue;
        case 443632296:
          if (Math.random() < 0.5) {
            a = 1;
            b[34] += b[35] + b[40] + b[13] + b[41] + b[23] + b[25] + 14;
            b[34] &= 0xFF;
          } else {
            b[24] ^= (b[21] + b[8] + b[37] + b[18] + b[26] + b[23] + 226) & 0xFF;
          };
          console.log(state, a);
          state = 608591871;
          continue;
        case 444613685:
          if (Math.random() < 0.5) {
            a = 1;
            b[26] ^= (b[18] + b[21] + b[8] + b[28] + b[12] + b[15] + 98) & 0xFF;
          } else {
            b[7] += b[10] + b[2] + b[25] + b[27] + b[5] + b[23] + 165;
            b[7] &= 0xFF;
          };
          console.log(state, a);
          state = 365681559;
          continue;
        case 444826173:
          if (446404210) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[43] ^= (b[17] + b[37] + b[31] + b[14] + b[5] + b[16] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[30] ^= (b[29] + b[4] + b[10] + b[40] + b[7] + b[9] + 189) & 0xFF;
          };
          console.log(state, a);
          state = 906239198;
          continue;
        case 445253239:
          if (327650681) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[28] += b[23] + b[10] + b[6] + b[1] + b[9] + b[39] + Math.floor(A * 256);
  
            b[28] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[0] += b[25] + b[13] + b[38] + b[31] + b[14] + b[30] + Math.floor(A * 256);
  
            b[0] &= 0xFF;
          };
          console.log(state, a);
          state = 1024125547;
          continue;
        case 449523591:
          if (754273526) {
            a = 1;
            b[21] += b[8] + b[35] + b[22] + b[2] + b[24] + b[18] + 150;
            b[21] &= 0xFF;
          } else {
            b[31] ^= (b[26] + b[43] + b[7] + b[37] + b[25] + b[34] + 192) & 0xFF;
          };
          console.log(state, a);
          state = 733956233;
          continue;
        case 449801452:
          if (47269895n) {
            a = 1;
            b[41] += b[6] + b[23] + b[20] + b[4] + b[28] + b[16] + 8;
            b[41] &= 0xFF;
          } else {
            b[12] -= b[26] + b[30] + b[17] + b[32] + b[22] + b[43] + 72;
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 63589848;
          continue;
        case 451400056:
          if (73596086n) {
            a = 1;
            b[16] ^= (b[4] + b[22] + b[18] + b[13] + b[8] + b[9] + 84) & 0xFF;
          } else {
            b[38] += b[18] + b[5] + b[31] + b[19] + b[2] + b[15] + 112;
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 357681166;
          continue;
        case 451948137:
          if (94497704n) {
            a = 1;
            b[3] -= b[35] + b[28] + b[24] + b[7] + b[17] + b[6] + 202;
            b[3] &= 0xFF;
          } else {
            b[40] ^= (b[2] + b[8] + b[42] + b[30] + b[38] + b[21] + 222) & 0xFF;
          };
          console.log(state, a);
          state = 822608816;
          continue;
        case 454175396:
          if (Math.random() < 0.5) {
            a = 1;
            b[33] -= b[43] + b[9] + b[28] + b[10] + b[22] + b[31] + 125;
            b[33] &= 0xFF;
          } else {
            b[14] ^= (b[27] + b[4] + b[33] + b[22] + b[43] + b[5] + 82) & 0xFF;
          };
          console.log(state, a);
          state = 628101179;
          continue;
        case 454239079:
          if (89679766) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[4] ^= (b[6] + b[1] + b[24] + b[14] + b[3] + b[31] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[25] -= b[38] + b[26] + b[39] + b[33] + b[40] + b[20] + 129;
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 11942341;
          continue;
        case 455195714:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[29] ^= (b[27] + b[23] + b[8] + b[14] + b[16] + b[10] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[34] -= b[41] + b[40] + b[30] + b[23] + b[26] + b[27] + 190;
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 709748243;
          continue;
        case 457466717:
          if (1014689134) {
            a = 1;
            b[23] += b[31] + b[2] + b[25] + b[16] + b[15] + b[0] + 245;
            b[23] &= 0xFF;
          } else {
            b[33] += b[12] + b[21] + b[4] + b[37] + b[7] + b[9] + 124;
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 108637663;
          continue;
        case 458923952:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[21] ^= (b[36] + b[31] + b[1] + b[20] + b[43] + b[17] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[41] -= b[2] + b[43] + b[23] + b[8] + b[40] + b[7] + Math.floor(A * 256);
  
            b[41] &= 0xFF;
          };
          console.log(state, a);
          state = 702149658;
          continue;
        case 460713018:
          if (Math.random() < 0.5) {
            a = 1;
            b[11] += b[42] + b[27] + b[40] + b[0] + b[6] + b[26] + 177;
            b[11] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[12] ^= (b[32] + b[14] + b[5] + b[30] + b[42] + b[33] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 229819407;
          continue;
        case 461379671:
          if (47840585n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[41] -= b[28] + b[21] + b[25] + b[31] + b[2] + b[36] + Math.floor(A * 256);
  
            b[41] &= 0xFF;
          } else {
            b[2] -= b[27] + b[25] + b[4] + b[13] + b[18] + b[15] + 204;
            b[2] &= 0xFF;
          };
          console.log(state, a);
          state = 486662911;
          continue;
        case 462197583:
          if (89691202n) {
            a = 1;
            b[10] ^= (b[3] + b[11] + b[8] + b[26] + b[36] + b[6] + 6) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[32] -= b[11] + b[19] + b[2] + b[5] + b[6] + b[35] + Math.floor(A * 256);
  
            b[32] &= 0xFF;
          };
          console.log(state, a);
          state = 218242848;
          continue;
        case 462595729:
          if (93249648n) {
            a = 1;
            b[37] ^= (b[39] + b[13] + b[18] + b[11] + b[31] + b[29] + 42) & 0xFF;
          } else {
            b[12] -= b[29] + b[2] + b[32] + b[7] + b[6] + b[23] + 5;
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 277174297;
          continue;
        case 463080223:
          if (Math.random() < 0.5) {
            a = 1;
            b[27] ^= (b[23] + b[31] + b[37] + b[34] + b[12] + b[6] + 96) & 0xFF;
          } else {
            b[17] -= b[20] + b[31] + b[1] + b[37] + b[32] + b[38] + 221;
            b[17] &= 0xFF;
          };
          console.log(state, a);
          state = 1003492583;
          continue;
        case 463157616:
          if (Math.random() < 0.5) {
            a = 1;
            b[4] -= b[1] + b[17] + b[0] + b[15] + b[19] + b[41] + 192;
            b[4] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[40] += b[30] + b[29] + b[16] + b[39] + b[9] + b[6] + Math.floor(A * 256);
  
            b[40] &= 0xFF;
          };
          console.log(state, a);
          state = 168379940;
          continue;
        case 465610305:
          if (75946403n) {
            a = 1;
            b[4] -= b[11] + b[36] + b[40] + b[38] + b[16] + b[6] + 149;
            b[4] &= 0xFF;
          } else {
            b[6] -= b[15] + b[25] + b[3] + b[33] + b[12] + b[20] + 94;
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 540767803;
          continue;
        case 467053882:
          if (58120271n) {
            a = 1;
            b[8] -= b[12] + b[6] + b[1] + b[21] + b[28] + b[25] + 55;
            b[8] &= 0xFF;
          } else {
            b[27] -= b[38] + b[18] + b[11] + b[16] + b[25] + b[40] + 250;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 975416110;
          continue;
        case 468600845:
          if (Math.random() < 0.5) {
            a = 1;
            b[35] += b[5] + b[0] + b[14] + b[2] + b[20] + b[6] + 241;
            b[35] &= 0xFF;
          } else {
            b[25] += b[1] + b[21] + b[15] + b[35] + b[28] + b[7] + 214;
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 934711763;
          continue;
        case 469496696:
          if (703534930) {
            a = 1;
            b[21] ^= (b[8] + b[2] + b[11] + b[39] + b[36] + b[10] + 71) & 0xFF;
          } else {
            b[14] += b[6] + b[26] + b[3] + b[23] + b[17] + b[43] + 15;
            b[14] &= 0xFF;
          };
          console.log(state, a);
          state = 163026493;
          continue;
        case 469950833:
          if (Math.random() < 0.5) {
            a = 1;
            b[17] += b[23] + b[10] + b[35] + b[3] + b[19] + b[22] + 140;
            b[17] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[25] -= b[34] + b[32] + b[43] + b[22] + b[39] + b[17] + Math.floor(A * 256);
  
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 65139032;
          continue;
        case 470915230:
          if (655599971) {
            a = 1;
            b[4] -= b[22] + b[21] + b[31] + b[1] + b[34] + b[41] + 237;
            b[4] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[38] -= b[14] + b[3] + b[35] + b[40] + b[6] + b[5] + Math.floor(A * 256);
  
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 115237491;
          continue;
        case 472968028:
          if (24605414n) {
            a = 1;
            b[9] ^= (b[27] + b[15] + b[21] + b[36] + b[29] + b[25] + 178) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[11] ^= (b[21] + b[28] + b[23] + b[7] + b[31] + b[26] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 256880408;
          continue;
        case 472997066:
          if (886419875) {
            a = 1;
            b[25] ^= (b[21] + b[43] + b[16] + b[1] + b[14] + b[39] + 186) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[20] -= b[19] + b[7] + b[11] + b[33] + b[18] + b[1] + Math.floor(A * 256);
  
            b[20] &= 0xFF;
          };
          console.log(state, a);
          state = 300099556;
          continue;
        case 475240679:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[40] -= b[42] + b[17] + b[38] + b[14] + b[41] + b[30] + Math.floor(A * 256);
  
            b[40] &= 0xFF;
          } else {
            b[34] += b[10] + b[1] + b[13] + b[2] + b[7] + b[12] + 14;
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 800650205;
          continue;
        case 475745844:
          if (64868979n) {
            a = 1;
            b[13] -= b[29] + b[14] + b[15] + b[17] + b[2] + b[38] + 2;
            b[13] &= 0xFF;
          } else {
            b[27] += b[17] + b[7] + b[0] + b[1] + b[34] + b[14] + 128;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 474381926;
          continue;
        case 476113183:
          if (142127748) {
            a = 1;
            b[34] ^= (b[10] + b[32] + b[3] + b[29] + b[8] + b[17] + 246) & 0xFF;
          } else {
            b[7] += b[1] + b[32] + b[35] + b[21] + b[23] + b[4] + 89;
            b[7] &= 0xFF;
          };
          console.log(state, a);
          state = 527068867;
          continue;
        case 477914619:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[37] ^= (b[28] + b[5] + b[29] + b[0] + b[10] + b[41] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[1] -= b[32] + b[42] + b[41] + b[33] + b[39] + b[28] + 75;
            b[1] &= 0xFF;
          };
          console.log(state, a);
          state = 430080227;
          continue;
        case 478053888:
          if (Math.random() < 0.5) {
            a = 1;
            b[14] -= b[40] + b[34] + b[43] + b[23] + b[18] + b[29] + 111;
            b[14] &= 0xFF;
          } else {
            b[3] ^= (b[17] + b[22] + b[20] + b[7] + b[12] + b[14] + 152) & 0xFF;
          };
          console.log(state, a);
          state = 577331484;
          continue;
        case 478340892:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[5] += b[39] + b[18] + b[43] + b[8] + b[15] + b[14] + Math.floor(A * 256);
  
            b[5] &= 0xFF;
          } else {
            b[31] ^= (b[3] + b[18] + b[16] + b[8] + b[28] + b[2] + 188) & 0xFF;
          };
          console.log(state, a);
          state = 523416510;
          continue;
        case 479865795:
          if (Math.random() < 0.5) {
            a = 1;
            b[7] ^= (b[19] + b[8] + b[34] + b[24] + b[37] + b[14] + 126) & 0xFF;
          } else {
            b[37] ^= (b[6] + b[3] + b[31] + b[9] + b[42] + b[32] + 22) & 0xFF;
          };
          console.log(state, a);
          state = 212840603;
          continue;
        case 479868974:
          if (42718766n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[41] -= b[32] + b[42] + b[15] + b[9] + b[17] + b[0] + Math.floor(A * 256);
  
            b[41] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[19] ^= (b[3] + b[30] + b[17] + b[15] + b[13] + b[18] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 65570416;
          continue;
        case 479895768:
          if (89471903n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[26] ^= (b[24] + b[7] + b[11] + b[12] + b[38] + b[3] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[30] -= b[12] + b[25] + b[21] + b[7] + b[35] + b[18] + 252;
            b[30] &= 0xFF;
          };
          console.log(state, a);
          state = 143026402;
          continue;
        case 481236269:
          if (79766523n) {
            a = 1;
            b[19] ^= (b[15] + b[0] + b[42] + b[4] + b[10] + b[33] + 73) & 0xFF;
          } else {
            b[3] ^= (b[35] + b[2] + b[26] + b[24] + b[17] + b[14] + 66) & 0xFF;
          };
          console.log(state, a);
          state = 329045785;
          continue;
        case 481264118:
          if (600803035) {
            a = 1;
            b[33] -= b[17] + b[16] + b[39] + b[32] + b[21] + b[12] + 247;
            b[33] &= 0xFF;
          } else {
            b[24] += b[5] + b[42] + b[28] + b[18] + b[13] + b[43] + 10;
            b[24] &= 0xFF;
          };
          console.log(state, a);
          state = 832419112;
          continue;
        case 482034949:
          if (41347143n) {
            a = 1;
            b[23] -= b[13] + b[17] + b[19] + b[34] + b[16] + b[25] + 81;
            b[23] &= 0xFF;
          } else {
            b[40] ^= (b[0] + b[36] + b[43] + b[31] + b[15] + b[27] + 217) & 0xFF;
          };
          console.log(state, a);
          state = 144600737;
          continue;
        case 484432842:
          if (898392674) {
            a = 1;
            b[14] ^= (b[30] + b[35] + b[39] + b[8] + b[1] + b[0] + 252) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[28] += b[16] + b[25] + b[40] + b[23] + b[0] + b[24] + Math.floor(A * 256);
  
            b[28] &= 0xFF;
          };
          console.log(state, a);
          state = 787080846;
          continue;
        case 485214937:
          if (42159721n) {
            a = 1;
            b[21] ^= (b[7] + b[18] + b[19] + b[23] + b[5] + b[11] + 243) & 0xFF;
          } else {
            b[24] -= b[10] + b[39] + b[23] + b[28] + b[14] + b[2] + 121;
            b[24] &= 0xFF;
          };
          console.log(state, a);
          state = 660465379;
          continue;
        case 485391444:
          if (34486563n) {
            a = 1;
            b[3] ^= (b[34] + b[14] + b[7] + b[29] + b[43] + b[17] + 70) & 0xFF;
          } else {
            b[40] += b[12] + b[8] + b[31] + b[28] + b[4] + b[2] + 26;
            b[40] &= 0xFF;
          };
          console.log(state, a);
          state = 447130134;
          continue;
        case 487366741:
          if (316085581) {
            a = 1;
            b[5] -= b[43] + b[16] + b[4] + b[32] + b[37] + b[26] + 76;
            b[5] &= 0xFF;
          } else {
            b[27] -= b[12] + b[17] + b[9] + b[33] + b[3] + b[21] + 161;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 598678520;
          continue;
        case 487732442:
          if (Math.random() < 0.5) {
            a = 1;
            b[5] += b[37] + b[29] + b[15] + b[13] + b[9] + b[35] + 74;
            b[5] &= 0xFF;
          } else {
            b[33] ^= (b[39] + b[12] + b[10] + b[18] + b[37] + b[15] + 22) & 0xFF;
          };
          console.log(state, a);
          state = 185416230;
          continue;
        case 488117931:
          if (72782462) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[29] += b[42] + b[36] + b[3] + b[16] + b[30] + b[5] + Math.floor(A * 256);
  
            b[29] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[34] += b[12] + b[20] + b[15] + b[38] + b[23] + b[11] + Math.floor(A * 256);
  
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 653944692;
          continue;
        case 489644900:
          if (Math.random() < 0.5) {
            a = 1;
            b[15] -= b[12] + b[3] + b[28] + b[37] + b[32] + b[33] + 24;
            b[15] &= 0xFF;
          } else {
            b[33] -= b[43] + b[24] + b[16] + b[7] + b[17] + b[6] + 156;
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 983139333;
          continue;
        case 492685924:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[37] ^= (b[23] + b[8] + b[1] + b[14] + b[43] + b[17] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[36] ^= (b[11] + b[9] + b[37] + b[32] + b[12] + b[27] + 20) & 0xFF;
          };
          console.log(state, a);
          state = 523656839;
          continue;
        case 493010987:
          if (504291992) {
            a = 1;
            b[38] += b[7] + b[31] + b[16] + b[22] + b[3] + b[6] + 131;
            b[38] &= 0xFF;
          } else {
            b[34] += b[2] + b[22] + b[15] + b[18] + b[7] + b[33] + 43;
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 1017701949;
          continue;
        case 495535675:
          if (46430234n) {
            a = 1;
            b[29] += b[43] + b[39] + b[38] + b[26] + b[28] + b[17] + 103;
            b[29] &= 0xFF;
          } else {
            b[5] -= b[35] + b[11] + b[28] + b[1] + b[7] + b[18] + 36;
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 797290468;
          continue;
        case 495847681:
          if (85080805n) {
            a = 1;
            b[9] -= b[33] + b[20] + b[43] + b[17] + b[15] + b[28] + 13;
            b[9] &= 0xFF;
          } else {
            b[43] += b[12] + b[22] + b[36] + b[32] + b[11] + b[17] + 12;
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 84878614;
          continue;
        case 495921857:
          if (Math.random() < 0.5) {
            a = 1;
            b[17] -= b[11] + b[32] + b[14] + b[16] + b[28] + b[9] + 167;
            b[17] &= 0xFF;
          } else {
            b[23] += b[11] + b[34] + b[39] + b[16] + b[28] + b[4] + 214;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 544245134;
          continue;
        case 496002193:
          if (98253584n) {
            a = 1;
            b[3] ^= (b[5] + b[41] + b[30] + b[14] + b[7] + b[28] + 157) & 0xFF;
          } else {
            b[33] ^= (b[35] + b[30] + b[36] + b[41] + b[3] + b[28] + 231) & 0xFF;
          };
          console.log(state, a);
          state = 524554106;
          continue;
        case 497039019:
          if (43116320n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[32] -= b[8] + b[19] + b[43] + b[0] + b[2] + b[1] + Math.floor(A * 256);
  
            b[32] &= 0xFF;
          } else {
            b[33] ^= (b[34] + b[32] + b[6] + b[16] + b[41] + b[10] + 87) & 0xFF;
          };
          console.log(state, a);
          state = 25913363;
          continue;
        case 497278214:
          if (959009418) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[12] += b[14] + b[13] + b[17] + b[22] + b[25] + b[38] + Math.floor(A * 256);
  
            b[12] &= 0xFF;
          } else {
            b[39] += b[34] + b[2] + b[1] + b[43] + b[20] + b[9] + 79;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 616505830;
          continue;
        case 504039263:
          if (66702658n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[0] += b[17] + b[10] + b[16] + b[38] + b[22] + b[15] + Math.floor(A * 256);
  
            b[0] &= 0xFF;
          } else {
            b[23] -= b[7] + b[37] + b[17] + b[29] + b[16] + b[33] + 209;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 75120729;
          continue;
        case 504478655:
          if (15907738n) {
            a = 1;
            b[40] ^= (b[15] + b[39] + b[14] + b[17] + b[16] + b[9] + 206) & 0xFF;
          } else {
            b[27] -= b[10] + b[38] + b[4] + b[26] + b[22] + b[12] + 228;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 776455031;
          continue;
        case 504890843:
          if (Math.random() < 0.5) {
            a = 1;
            b[20] += b[34] + b[10] + b[12] + b[41] + b[18] + b[43] + 147;
            b[20] &= 0xFF;
          } else {
            b[19] -= b[37] + b[1] + b[17] + b[20] + b[23] + b[10] + 230;
            b[19] &= 0xFF;
          };
          console.log(state, a);
          state = 516579404;
          continue;
        case 505192518:
          if (470097413) {
            a = 1;
            b[4] ^= (b[22] + b[19] + b[43] + b[13] + b[42] + b[23] + 56) & 0xFF;
          } else {
            b[31] += b[13] + b[16] + b[43] + b[33] + b[35] + b[41] + 129;
            b[31] &= 0xFF;
          };
          console.log(state, a);
          state = 571842760;
          continue;
        case 505561575:
          if (Math.random() < 0.5) {
            a = 1;
            b[34] ^= (b[9] + b[5] + b[31] + b[42] + b[1] + b[3] + 244) & 0xFF;
          } else {
            b[23] ^= (b[41] + b[10] + b[8] + b[3] + b[0] + b[19] + 51) & 0xFF;
          };
          console.log(state, a);
          state = 833272276;
          continue;
        case 506148129:
          if (80897206n) {
            a = 1;
            b[37] ^= (b[2] + b[27] + b[7] + b[20] + b[22] + b[32] + 130) & 0xFF;
          } else {
            b[18] -= b[43] + b[21] + b[23] + b[7] + b[11] + b[39] + 51;
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 719135794;
          continue;
        case 506773855:
          if (54120581n) {
            a = 1;
            b[11] -= b[42] + b[40] + b[38] + b[3] + b[26] + b[1] + 101;
            b[11] &= 0xFF;
          } else {
            b[42] -= b[21] + b[14] + b[22] + b[32] + b[34] + b[40] + 221;
            b[42] &= 0xFF;
          };
          console.log(state, a);
          state = 237054350;
          continue;
        case 506966062:
          if (Math.random() < 0.5) {
            a = 1;
            b[5] += b[29] + b[23] + b[15] + b[0] + b[14] + b[28] + 198;
            b[5] &= 0xFF;
          } else {
            b[41] += b[19] + b[3] + b[12] + b[13] + b[9] + b[17] + 0;
            b[41] &= 0xFF;
          };
          console.log(state, a);
          state = 419926580;
          continue;
        case 507505767:
          if (274685363) {
            a = 1;
            b[14] += b[24] + b[4] + b[25] + b[12] + b[29] + b[38] + 169;
            b[14] &= 0xFF;
          } else {
            b[6] ^= (b[12] + b[30] + b[10] + b[41] + b[3] + b[37] + 121) & 0xFF;
          };
          console.log(state, a);
          state = 866756613;
          continue;
        case 508081179:
          if (Math.random() < 0.5) {
            a = 1;
            b[38] ^= (b[25] + b[28] + b[12] + b[23] + b[20] + b[4] + 220) & 0xFF;
          } else {
            b[38] -= b[30] + b[3] + b[22] + b[32] + b[1] + b[29] + 254;
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 813166976;
          continue;
        case 508258165:
          if (Math.random() < 0.5) {
            a = 1;
            b[11] -= b[3] + b[34] + b[1] + b[14] + b[20] + b[22] + 237;
            b[11] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[31] -= b[40] + b[9] + b[21] + b[34] + b[7] + b[12] + Math.floor(A * 256);
  
            b[31] &= 0xFF;
          };
          console.log(state, a);
          state = 78331563;
          continue;
        case 509219317:
          if (624740198) {
            a = 1;
            b[43] ^= (b[28] + b[7] + b[5] + b[27] + b[31] + b[41] + 38) & 0xFF;
          } else {
            b[23] += b[33] + b[15] + b[16] + b[41] + b[12] + b[25] + 182;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 353292093;
          continue;
        case 509314672:
          if (Math.random() < 0.5) {
            a = 1;
            b[41] ^= (b[16] + b[14] + b[13] + b[18] + b[17] + b[10] + 101) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[19] += b[28] + b[30] + b[4] + b[10] + b[15] + b[17] + Math.floor(A * 256);
  
            b[19] &= 0xFF;
          };
          console.log(state, a);
          state = 291891829;
          continue;
        case 509659873:
          if (46683819) {
            a = 1;
            b[14] ^= (b[41] + b[29] + b[2] + b[28] + b[3] + b[13] + 21) & 0xFF;
          } else {
            b[22] ^= (b[6] + b[10] + b[5] + b[40] + b[17] + b[28] + 173) & 0xFF;
          };
          console.log(state, a);
          state = 131731400;
          continue;
        case 510460050:
          if (72881791n) {
            a = 1;
            b[21] -= b[34] + b[37] + b[22] + b[30] + b[9] + b[40] + 25;
            b[21] &= 0xFF;
          } else {
            b[13] -= b[26] + b[37] + b[30] + b[27] + b[22] + b[32] + 167;
            b[13] &= 0xFF;
          };
          console.log(state, a);
          state = 315739374;
          continue;
        case 512178077:
          if (732450855) {
            a = 1;
            b[28] ^= (b[4] + b[6] + b[13] + b[41] + b[7] + b[24] + 100) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[32] ^= (b[16] + b[4] + b[23] + b[8] + b[41] + b[29] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 740993309;
          continue;
        case 513668468:
          if (Math.random() < 0.5) {
            a = 1;
            b[21] -= b[7] + b[39] + b[40] + b[15] + b[0] + b[25] + 42;
            b[21] &= 0xFF;
          } else {
            b[20] ^= (b[2] + b[16] + b[34] + b[1] + b[36] + b[33] + 189) & 0xFF;
          };
          console.log(state, a);
          state = 1056580359;
          continue;
        case 514347277:
          if (42732613n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[12] ^= (b[37] + b[8] + b[16] + b[20] + b[17] + b[1] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[33] ^= (b[10] + b[22] + b[2] + b[1] + b[30] + b[11] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 385158166;
          continue;
        case 515148309:
          if (289376824) {
            a = 1;
            b[39] += b[23] + b[12] + b[29] + b[16] + b[28] + b[43] + 50;
            b[39] &= 0xFF;
          } else {
            b[32] += b[38] + b[28] + b[42] + b[1] + b[35] + b[17] + 235;
            b[32] &= 0xFF;
          };
          console.log(state, a);
          state = 428711142;
          continue;
        case 516077630:
          if (882468081) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[0] -= b[35] + b[19] + b[7] + b[40] + b[22] + b[33] + Math.floor(A * 256);
  
            b[0] &= 0xFF;
          } else {
            b[0] ^= (b[32] + b[20] + b[30] + b[10] + b[37] + b[35] + 204) & 0xFF;
          };
          console.log(state, a);
          state = 851529129;
          continue;
        case 517062528:
          if (107333336) {
            a = 1;
            b[24] += b[33] + b[16] + b[25] + b[12] + b[28] + b[8] + 11;
            b[24] &= 0xFF;
          } else {
            b[37] ^= (b[28] + b[39] + b[41] + b[11] + b[10] + b[9] + 223) & 0xFF;
          };
          console.log(state, a);
          state = 611428905;
          continue;
        case 518976161:
          if (Math.random() < 0.5) {
            a = 1;
            b[6] += b[13] + b[43] + b[8] + b[14] + b[17] + b[2] + 135;
            b[6] &= 0xFF;
          } else {
            b[12] ^= (b[42] + b[25] + b[19] + b[7] + b[16] + b[43] + 245) & 0xFF;
          };
          console.log(state, a);
          state = 344022322;
          continue;
        case 522741887:
          if (641476389) {
            a = 1;
            b[39] += b[9] + b[5] + b[43] + b[25] + b[18] + b[27] + 206;
            b[39] &= 0xFF;
          } else {
            b[27] -= b[1] + b[26] + b[10] + b[29] + b[14] + b[4] + 32;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 107869899;
          continue;
        case 522895656:
          if (299124257) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[26] -= b[24] + b[6] + b[3] + b[23] + b[31] + b[41] + Math.floor(A * 256);
  
            b[26] &= 0xFF;
          } else {
            b[14] += b[39] + b[4] + b[25] + b[27] + b[35] + b[7] + 0;
            b[14] &= 0xFF;
          };
          console.log(state, a);
          state = 428160326;
          continue;
        case 525162538:
          if (292477912) {
            a = 1;
            b[40] -= b[27] + b[20] + b[12] + b[33] + b[16] + b[29] + 193;
            b[40] &= 0xFF;
          } else {
            b[8] ^= (b[12] + b[10] + b[3] + b[2] + b[34] + b[31] + 203) & 0xFF;
          };
          console.log(state, a);
          state = 842785514;
          continue;
        case 525513317:
          if (1045931426) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[33] += b[35] + b[8] + b[12] + b[18] + b[14] + b[17] + Math.floor(A * 256);
  
            b[33] &= 0xFF;
          } else {
            b[43] -= b[22] + b[17] + b[6] + b[10] + b[2] + b[5] + 126;
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 629047482;
          continue;
        case 526095888:
          if (54386730n) {
            a = 1;
            b[19] += b[31] + b[15] + b[6] + b[20] + b[26] + b[25] + 254;
            b[19] &= 0xFF;
          } else {
            b[1] -= b[42] + b[28] + b[9] + b[29] + b[14] + b[3] + 245;
            b[1] &= 0xFF;
          };
          console.log(state, a);
          state = 120434431;
          continue;
        case 527194655:
          if (Math.random() < 0.5) {
            a = 1;
            b[41] ^= (b[4] + b[8] + b[26] + b[43] + b[18] + b[24] + 1) & 0xFF;
          } else {
            b[33] ^= (b[40] + b[20] + b[19] + b[16] + b[5] + b[37] + 240) & 0xFF;
          };
          console.log(state, a);
          state = 117035775;
          continue;
        case 527233541:
          if (413972649) {
            a = 1;
            b[43] -= b[8] + b[9] + b[22] + b[33] + b[41] + b[1] + 156;
            b[43] &= 0xFF;
          } else {
            b[18] += b[22] + b[13] + b[43] + b[2] + b[14] + b[4] + 10;
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 539733327;
          continue;
        case 527739369:
          if (909199331) {
            a = 1;
            b[10] ^= (b[16] + b[38] + b[22] + b[3] + b[1] + b[7] + 209) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[39] ^= (b[15] + b[14] + b[31] + b[23] + b[27] + b[41] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 681218012;
          continue;
        case 527973694:
          if (739335238) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[16] += b[1] + b[5] + b[4] + b[37] + b[27] + b[43] + Math.floor(A * 256);
  
            b[16] &= 0xFF;
          } else {
            b[21] -= b[8] + b[30] + b[13] + b[22] + b[0] + b[5] + 34;
            b[21] &= 0xFF;
          };
          console.log(state, a);
          state = 383562953;
          continue;
        case 528361686:
          if (96633358n) {
            a = 1;
            b[42] ^= (b[0] + b[22] + b[21] + b[39] + b[27] + b[32] + 119) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[38] += b[22] + b[26] + b[9] + b[29] + b[40] + b[1] + Math.floor(A * 256);
  
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 527147759;
          continue;
        case 529404720:
          if (468566471) {
            a = 1;
            b[11] += b[24] + b[9] + b[39] + b[33] + b[0] + b[22] + 22;
            b[11] &= 0xFF;
          } else {
            b[18] -= b[5] + b[42] + b[22] + b[0] + b[23] + b[28] + 19;
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 338562817;
          continue;
        case 529667627:
          if (34842670n) {
            a = 1;
            b[40] -= b[29] + b[0] + b[14] + b[10] + b[15] + b[31] + 244;
            b[40] &= 0xFF;
          } else {
            b[32] ^= (b[30] + b[18] + b[21] + b[19] + b[0] + b[4] + 37) & 0xFF;
          };
          console.log(state, a);
          state = 698292025;
          continue;
        case 530885266:
          if (83924104n) {
            a = 1;
            b[26] -= b[25] + b[2] + b[16] + b[19] + b[23] + b[32] + 119;
            b[26] &= 0xFF;
          } else {
            b[39] += b[26] + b[19] + b[3] + b[14] + b[33] + b[29] + 47;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 323709686;
          continue;
        case 530940714:
          if (333972956) {
            a = 1;
            b[20] -= b[38] + b[12] + b[2] + b[39] + b[42] + b[18] + 166;
            b[20] &= 0xFF;
          } else {
            b[32] += b[26] + b[15] + b[4] + b[21] + b[6] + b[29] + 27;
            b[32] &= 0xFF;
          };
          console.log(state, a);
          state = 796549726;
          continue;
        case 531048198:
          if (77940094n) {
            a = 1;
            b[39] ^= (b[12] + b[16] + b[35] + b[0] + b[41] + b[2] + 229) & 0xFF;
          } else {
            b[16] ^= (b[26] + b[25] + b[20] + b[2] + b[37] + b[0] + 129) & 0xFF;
          };
          console.log(state, a);
          state = 181616358;
          continue;
        case 533103436:
          if (65086260n) {
            a = 1;
            b[41] ^= (b[5] + b[40] + b[39] + b[2] + b[3] + b[31] + 16) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[36] -= b[1] + b[30] + b[11] + b[22] + b[16] + b[14] + Math.floor(A * 256);
  
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 1055933180;
          continue;
        case 533553662:
          if (311223286) {
            a = 1;
            b[20] -= b[43] + b[28] + b[11] + b[10] + b[42] + b[22] + 137;
            b[20] &= 0xFF;
          } else {
            b[28] ^= (b[23] + b[19] + b[38] + b[31] + b[32] + b[18] + 118) & 0xFF;
          };
          console.log(state, a);
          state = 886427273;
          continue;
        case 533941089:
          if (69372947n) {
            a = 1;
            b[29] += b[12] + b[26] + b[2] + b[14] + b[21] + b[36] + 110;
            b[29] &= 0xFF;
          } else {
            b[27] -= b[14] + b[28] + b[34] + b[16] + b[41] + b[31] + 225;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 416679206;
          continue;
        case 533953311:
          if (49659177n) {
            a = 1;
            b[35] -= b[39] + b[19] + b[4] + b[15] + b[41] + b[31] + 98;
            b[35] &= 0xFF;
          } else {
            b[27] -= b[21] + b[18] + b[38] + b[1] + b[40] + b[12] + 174;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 1005986656;
          continue;
        case 535029726:
          if (712958263) {
            a = 1;
            b[11] += b[27] + b[31] + b[26] + b[24] + b[9] + b[32] + 56;
            b[11] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[42] ^= (b[43] + b[39] + b[36] + b[3] + b[26] + b[23] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 366542916;
          continue;
        case 536345467:
          if (49354738n) {
            a = 1;
            b[34] ^= (b[4] + b[10] + b[41] + b[7] + b[23] + b[11] + 238) & 0xFF;
          } else {
            b[16] += b[34] + b[25] + b[24] + b[23] + b[42] + b[14] + 168;
            b[16] &= 0xFF;
          };
          console.log(state, a);
          state = 566051337;
          continue;
        case 537237003:
          if (33162942n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[13] ^= (b[1] + b[38] + b[24] + b[40] + b[35] + b[2] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[24] -= b[39] + b[14] + b[26] + b[12] + b[13] + b[41] + Math.floor(A * 256);
  
            b[24] &= 0xFF;
          };
          console.log(state, a);
          state = 890665433;
          continue;
        case 537347423:
          if (Math.random() < 0.5) {
            a = 1;
            b[33] ^= (b[34] + b[36] + b[2] + b[8] + b[20] + b[22] + 40) & 0xFF;
          } else {
            b[3] ^= (b[13] + b[29] + b[8] + b[11] + b[38] + b[21] + 140) & 0xFF;
          };
          console.log(state, a);
          state = 723908396;
          continue;
        case 540405567:
          if (10151601n) {
            a = 1;
            b[16] ^= (b[32] + b[39] + b[13] + b[21] + b[20] + b[2] + 28) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[6] += b[20] + b[13] + b[31] + b[26] + b[43] + b[7] + Math.floor(A * 256);
  
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 689542006;
          continue;
        case 541057851:
          if (Math.random() < 0.5) {
            a = 1;
            b[15] -= b[33] + b[16] + b[11] + b[3] + b[14] + b[38] + 250;
            b[15] &= 0xFF;
          } else {
            b[9] += b[31] + b[37] + b[29] + b[27] + b[11] + b[13] + 216;
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 290173932;
          continue;
        case 542039106:
          if (1062580192) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[28] ^= (b[13] + b[3] + b[36] + b[26] + b[40] + b[16] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[43] += b[10] + b[15] + b[28] + b[29] + b[27] + b[26] + 168;
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 198158056;
          continue;
        case 542432804:
          if (63018993n) {
            a = 1;
            b[1] -= b[41] + b[33] + b[32] + b[17] + b[35] + b[2] + 65;
            b[1] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[16] -= b[7] + b[19] + b[39] + b[4] + b[36] + b[34] + Math.floor(A * 256);
  
            b[16] &= 0xFF;
          };
          console.log(state, a);
          state = 1037670780;
          continue;
        case 543401869:
          if (379629600) {
            a = 1;
            b[11] -= b[1] + b[17] + b[28] + b[18] + b[35] + b[37] + 76;
            b[11] &= 0xFF;
          } else {
            b[14] -= b[30] + b[33] + b[8] + b[1] + b[10] + b[26] + 203;
            b[14] &= 0xFF;
          };
          console.log(state, a);
          state = 1006148099;
          continue;
        case 547061522:
          if (775060694) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[33] += b[32] + b[19] + b[4] + b[28] + b[11] + b[15] + Math.floor(A * 256);
  
            b[33] &= 0xFF;
          } else {
            b[35] ^= (b[12] + b[20] + b[21] + b[18] + b[13] + b[14] + 241) & 0xFF;
          };
          console.log(state, a);
          state = 449033011;
          continue;
        case 549494432:
          if (735134521) {
            a = 1;
            b[4] += b[38] + b[26] + b[18] + b[33] + b[25] + b[41] + 55;
            b[4] &= 0xFF;
          } else {
            b[18] ^= (b[32] + b[30] + b[26] + b[22] + b[9] + b[33] + 19) & 0xFF;
          };
          console.log(state, a);
          state = 578604559;
          continue;
        case 551829021:
          if (314069234) {
            a = 1;
            b[18] ^= (b[20] + b[15] + b[1] + b[12] + b[39] + b[21] + 97) & 0xFF;
          } else {
            b[32] += b[29] + b[21] + b[6] + b[4] + b[39] + b[42] + 251;
            b[32] &= 0xFF;
          };
          console.log(state, a);
          state = 899931277;
          continue;
        case 553402117:
          if (26378540n) {
            a = 1;
            b[14] -= b[35] + b[18] + b[2] + b[22] + b[33] + b[25] + 213;
            b[14] &= 0xFF;
          } else {
            b[4] ^= (b[27] + b[32] + b[9] + b[26] + b[0] + b[22] + 3) & 0xFF;
          };
          console.log(state, a);
          state = 14136054;
          continue;
        case 554560760:
          if (318838448) {
            a = 1;
            b[36] ^= (b[5] + b[29] + b[38] + b[0] + b[11] + b[33] + 237) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[33] += b[34] + b[30] + b[39] + b[37] + b[13] + b[4] + Math.floor(A * 256);
  
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 686518099;
          continue;
        case 554792969:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[34] += b[37] + b[2] + b[43] + b[28] + b[16] + b[30] + Math.floor(A * 256);
  
            b[34] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[43] -= b[26] + b[31] + b[27] + b[15] + b[3] + b[2] + Math.floor(A * 256);
  
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 35618104;
          continue;
        case 555231932:
          if (Math.random() < 0.5) {
            a = 1;
            b[43] -= b[12] + b[26] + b[7] + b[22] + b[6] + b[36] + 171;
            b[43] &= 0xFF;
          } else {
            b[27] ^= (b[19] + b[2] + b[40] + b[14] + b[9] + b[36] + 147) & 0xFF;
          };
          console.log(state, a);
          state = 199784487;
          continue;
        case 555609705:
          if (16585972n) {
            a = 1;
            b[5] += b[28] + b[42] + b[41] + b[4] + b[27] + b[29] + 58;
            b[5] &= 0xFF;
          } else {
            b[14] ^= (b[17] + b[37] + b[26] + b[33] + b[3] + b[30] + 57) & 0xFF;
          };
          console.log(state, a);
          state = 792426478;
          continue;
        case 556468793:
          if (89742293n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[42] ^= (b[39] + b[34] + b[12] + b[22] + b[19] + b[7] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[33] ^= (b[27] + b[25] + b[4] + b[20] + b[16] + b[26] + 206) & 0xFF;
          };
          console.log(state, a);
          state = 15344400;
          continue;
        case 557105857:
          if (310911925) {
            a = 1;
            b[40] ^= (b[20] + b[38] + b[12] + b[11] + b[25] + b[5] + 85) & 0xFF;
          } else {
            b[39] += b[28] + b[8] + b[36] + b[42] + b[11] + b[13] + 68;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 209310950;
          continue;
        case 558792733:
          if (687814616) {
            a = 1;
            b[40] -= b[32] + b[5] + b[6] + b[19] + b[10] + b[25] + 165;
            b[40] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[14] += b[20] + b[11] + b[21] + b[38] + b[28] + b[6] + Math.floor(A * 256);
  
            b[14] &= 0xFF;
          };
          console.log(state, a);
          state = 674074337;
          continue;
        case 560046327:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[28] -= b[0] + b[37] + b[38] + b[2] + b[14] + b[35] + Math.floor(A * 256);
  
            b[28] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[5] += b[25] + b[38] + b[18] + b[34] + b[24] + b[20] + Math.floor(A * 256);
  
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 254183340;
          continue;
        case 560687081:
          if (548224734) {
            a = 1;
            b[20] -= b[11] + b[23] + b[2] + b[40] + b[26] + b[42] + 150;
            b[20] &= 0xFF;
          } else {
            b[26] -= b[23] + b[24] + b[34] + b[11] + b[15] + b[3] + 125;
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 72472653;
          continue;
        case 561687718:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[7] -= b[19] + b[32] + b[13] + b[29] + b[35] + b[43] + Math.floor(A * 256);
  
            b[7] &= 0xFF;
          } else {
            b[8] ^= (b[39] + b[36] + b[30] + b[29] + b[4] + b[12] + 210) & 0xFF;
          };
          console.log(state, a);
          state = 274096784;
          continue;
        case 562103074:
          if (Math.random() < 0.5) {
            a = 1;
            b[31] += b[18] + b[27] + b[4] + b[7] + b[2] + b[1] + 49;
            b[31] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[28] ^= (b[40] + b[17] + b[20] + b[35] + b[1] + b[6] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 317299350;
          continue;
        case 562827068:
          if (Math.random() < 0.5) {
            a = 1;
            b[41] ^= (b[4] + b[20] + b[27] + b[2] + b[43] + b[14] + 188) & 0xFF;
          } else {
            b[11] += b[17] + b[6] + b[7] + b[32] + b[3] + b[33] + 162;
            b[11] &= 0xFF;
          };
          console.log(state, a);
          state = 184931823;
          continue;
        case 563644357:
          if (26552054n) {
            a = 1;
            b[30] ^= (b[43] + b[42] + b[19] + b[3] + b[11] + b[23] + 221) & 0xFF;
          } else {
            b[20] ^= (b[36] + b[42] + b[19] + b[35] + b[31] + b[7] + 177) & 0xFF;
          };
          console.log(state, a);
          state = 1007616046;
          continue;
        case 564468417:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[21] += b[30] + b[35] + b[32] + b[5] + b[27] + b[41] + Math.floor(A * 256);
  
            b[21] &= 0xFF;
          } else {
            b[38] ^= (b[20] + b[9] + b[32] + b[2] + b[17] + b[3] + 160) & 0xFF;
          };
          console.log(state, a);
          state = 927050473;
          continue;
        case 564903350:
          if (95267329n) {
            a = 1;
            b[29] += b[34] + b[20] + b[11] + b[42] + b[8] + b[4] + 206;
            b[29] &= 0xFF;
          } else {
            b[13] += b[14] + b[35] + b[43] + b[3] + b[16] + b[31] + 210;
            b[13] &= 0xFF;
          };
          console.log(state, a);
          state = 50284561;
          continue;
        case 565632760:
          if (339196849) {
            a = 1;
            b[20] += b[32] + b[27] + b[24] + b[15] + b[29] + b[23] + 216;
            b[20] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[17] ^= (b[21] + b[31] + b[9] + b[10] + b[1] + b[18] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 563121711;
          continue;
        case 566073241:
          if (Math.random() < 0.5) {
            a = 1;
            b[33] += b[18] + b[31] + b[4] + b[9] + b[35] + b[10] + 49;
            b[33] &= 0xFF;
          } else {
            b[34] -= b[20] + b[26] + b[1] + b[21] + b[12] + b[28] + 37;
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 477963635;
          continue;
        case 566575688:
          if (31552222n) {
            a = 1;
            b[34] += b[43] + b[38] + b[21] + b[19] + b[27] + b[22] + 45;
            b[34] &= 0xFF;
          } else {
            b[2] ^= (b[8] + b[28] + b[29] + b[26] + b[37] + b[39] + 54) & 0xFF;
          };
          console.log(state, a);
          state = 259570273;
          continue;
        case 568152286:
          if (44960329n) {
            a = 1;
            b[22] ^= (b[42] + b[30] + b[35] + b[29] + b[31] + b[17] + 146) & 0xFF;
          } else {
            b[37] ^= (b[25] + b[1] + b[15] + b[42] + b[3] + b[40] + 77) & 0xFF;
          };
          console.log(state, a);
          state = 748081104;
          continue;
        case 570515134:
          if (979576217) {
            a = 1;
            b[36] ^= (b[23] + b[6] + b[35] + b[12] + b[37] + b[42] + 82) & 0xFF;
          } else {
            b[12] += b[40] + b[9] + b[38] + b[37] + b[36] + b[31] + 169;
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 789323608;
          continue;
        case 572264589:
          if (166324608) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[15] ^= (b[24] + b[23] + b[35] + b[30] + b[27] + b[21] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[29] -= b[42] + b[12] + b[2] + b[24] + b[6] + b[39] + Math.floor(A * 256);
  
            b[29] &= 0xFF;
          };
          console.log(state, a);
          state = 447942078;
          continue;
        case 572340455:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[18] += b[22] + b[24] + b[25] + b[40] + b[27] + b[42] + Math.floor(A * 256);
  
            b[18] &= 0xFF;
          } else {
            b[4] += b[42] + b[8] + b[39] + b[2] + b[33] + b[40] + 238;
            b[4] &= 0xFF;
          };
          console.log(state, a);
          state = 585321356;
          continue;
        case 572478164:
          if (231317713) {
            a = 1;
            b[26] += b[24] + b[27] + b[2] + b[16] + b[13] + b[17] + 8;
            b[26] &= 0xFF;
          } else {
            b[35] ^= (b[4] + b[0] + b[29] + b[18] + b[28] + b[22] + 218) & 0xFF;
          };
          console.log(state, a);
          state = 412568688;
          continue;
        case 574228050:
          if (868513606) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[18] += b[22] + b[2] + b[36] + b[0] + b[23] + b[10] + Math.floor(A * 256);
  
            b[18] &= 0xFF;
          } else {
            b[34] ^= (b[23] + b[28] + b[8] + b[20] + b[33] + b[5] + 71) & 0xFF;
          };
          console.log(state, a);
          state = 716822359;
          continue;
        case 574604877:
          if (69552519) {
            a = 1;
            b[13] ^= (b[12] + b[30] + b[24] + b[35] + b[42] + b[25] + 30) & 0xFF;
          } else {
            b[5] += b[0] + b[12] + b[27] + b[2] + b[1] + b[35] + 45;
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 967061579;
          continue;
        case 576084841:
          if (Math.random() < 0.5) {
            a = 1;
            b[33] += b[34] + b[4] + b[21] + b[12] + b[8] + b[14] + 197;
            b[33] &= 0xFF;
          } else {
            b[29] -= b[40] + b[39] + b[8] + b[19] + b[37] + b[11] + 9;
            b[29] &= 0xFF;
          };
          console.log(state, a);
          state = 594479345;
          continue;
        case 576314831:
          if (Math.random() < 0.5) {
            a = 1;
            b[14] ^= (b[32] + b[41] + b[35] + b[40] + b[9] + b[22] + 63) & 0xFF;
          } else {
            b[20] ^= (b[2] + b[40] + b[1] + b[41] + b[11] + b[38] + 151) & 0xFF;
          };
          console.log(state, a);
          state = 48990882;
          continue;
        case 576642022:
          if (62603993n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[3] += b[39] + b[2] + b[43] + b[24] + b[5] + b[23] + Math.floor(A * 256);
  
            b[3] &= 0xFF;
          } else {
            b[43] -= b[22] + b[36] + b[21] + b[13] + b[6] + b[8] + 202;
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 581077939;
          continue;
        case 577785340:
          if (165327969) {
            a = 1;
            b[10] -= b[31] + b[29] + b[28] + b[26] + b[18] + b[22] + 107;
            b[10] &= 0xFF;
          } else {
            b[27] -= b[7] + b[1] + b[42] + b[29] + b[32] + b[16] + 128;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 915743214;
          continue;
        case 578359911:
          if (320874086) {
            a = 1;
            b[36] ^= (b[26] + b[23] + b[38] + b[28] + b[13] + b[11] + 113) & 0xFF;
          } else {
            b[33] += b[4] + b[27] + b[32] + b[43] + b[42] + b[36] + 209;
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 409377776;
          continue;
        case 578413895:
          if (Math.random() < 0.5) {
            a = 1;
            b[6] -= b[28] + b[7] + b[35] + b[4] + b[21] + b[27] + 125;
            b[6] &= 0xFF;
          } else {
            b[1] ^= (b[12] + b[17] + b[21] + b[38] + b[34] + b[39] + 199) & 0xFF;
          };
          console.log(state, a);
          state = 692575212;
          continue;
        case 578961221:
          if (58528544n) {
            a = 1;
            b[40] ^= (b[7] + b[4] + b[6] + b[31] + b[16] + b[35] + 33) & 0xFF;
          } else {
            b[37] ^= (b[33] + b[7] + b[1] + b[35] + b[36] + b[19] + 206) & 0xFF;
          };
          console.log(state, a);
          state = 270652468;
          continue;
        case 580191415:
          if (Math.random() < 0.5) {
            a = 1;
            b[33] += b[25] + b[12] + b[14] + b[34] + b[4] + b[36] + 185;
            b[33] &= 0xFF;
          } else {
            b[12] ^= (b[33] + b[5] + b[0] + b[38] + b[27] + b[37] + 160) & 0xFF;
          };
          console.log(state, a);
          state = 308723491;
          continue;
        case 580712029:
          if (899628882) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[16] ^= (b[37] + b[14] + b[38] + b[3] + b[23] + b[31] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[9] += b[37] + b[41] + b[4] + b[20] + b[0] + b[18] + 175;
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 37616705;
          continue;
        case 581736057:
          if (1035931366) {
            a = 1;
            b[43] += b[20] + b[38] + b[23] + b[31] + b[32] + b[2] + 73;
            b[43] &= 0xFF;
          } else {
            b[6] ^= (b[36] + b[13] + b[4] + b[38] + b[16] + b[14] + 53) & 0xFF;
          };
          console.log(state, a);
          state = 78689437;
          continue;
        case 582215318:
          if (167363775) {
            a = 1;
            b[18] ^= (b[31] + b[40] + b[4] + b[2] + b[36] + b[43] + 107) & 0xFF;
          } else {
            b[31] ^= (b[28] + b[32] + b[14] + b[26] + b[18] + b[35] + 246) & 0xFF;
          };
          console.log(state, a);
          state = 929898000;
          continue;
        case 582631280:
          if (Math.random() < 0.5) {
            a = 1;
            b[13] += b[5] + b[19] + b[4] + b[33] + b[21] + b[23] + 189;
            b[13] &= 0xFF;
          } else {
            b[13] ^= (b[34] + b[25] + b[40] + b[6] + b[39] + b[17] + 19) & 0xFF;
          };
          console.log(state, a);
          state = 490243398;
          continue;
        case 583775143:
          if (811609953) {
            a = 1;
            b[31] += b[23] + b[43] + b[37] + b[32] + b[19] + b[11] + 188;
            b[31] &= 0xFF;
          } else {
            b[4] ^= (b[8] + b[33] + b[19] + b[12] + b[25] + b[15] + 101) & 0xFF;
          };
          console.log(state, a);
          state = 661538186;
          continue;
        case 585159232:
          if (76612926n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[39] -= b[6] + b[26] + b[22] + b[12] + b[14] + b[11] + Math.floor(A * 256);
  
            b[39] &= 0xFF;
          } else {
            b[34] -= b[33] + b[41] + b[11] + b[15] + b[32] + b[31] + 254;
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 814764410;
          continue;
        case 585872335:
          if (Math.random() < 0.5) {
            a = 1;
            b[3] ^= (b[4] + b[30] + b[13] + b[42] + b[16] + b[43] + 240) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[36] += b[9] + b[3] + b[31] + b[41] + b[8] + b[22] + Math.floor(A * 256);
  
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 765137136;
          continue;
        case 586332565:
          if (825998263) {
            a = 1;
            b[7] += b[16] + b[22] + b[40] + b[12] + b[31] + b[30] + 5;
            b[7] &= 0xFF;
          } else {
            b[15] ^= (b[2] + b[43] + b[3] + b[5] + b[0] + b[35] + 10) & 0xFF;
          };
          console.log(state, a);
          state = 1031907891;
          continue;
        case 586678375:
          if (77156621n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[11] ^= (b[17] + b[13] + b[40] + b[26] + b[24] + b[8] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[13] ^= (b[41] + b[12] + b[22] + b[28] + b[42] + b[40] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 428507411;
          continue;
        case 588207953:
          if (Math.random() < 0.5) {
            a = 1;
            b[38] ^= (b[30] + b[0] + b[1] + b[40] + b[6] + b[39] + 113) & 0xFF;
          } else {
            b[24] ^= (b[14] + b[33] + b[2] + b[26] + b[19] + b[8] + 75) & 0xFF;
          };
          console.log(state, a);
          state = 497816624;
          continue;
        case 588222361:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[8] += b[20] + b[37] + b[25] + b[4] + b[41] + b[38] + Math.floor(A * 256);
  
            b[8] &= 0xFF;
          } else {
            b[16] ^= (b[11] + b[30] + b[37] + b[26] + b[6] + b[33] + 43) & 0xFF;
          };
          console.log(state, a);
          state = 651965560;
          continue;
        case 589379043:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[33] += b[21] + b[9] + b[31] + b[6] + b[20] + b[11] + Math.floor(A * 256);
  
            b[33] &= 0xFF;
          } else {
            b[34] ^= (b[38] + b[33] + b[13] + b[26] + b[6] + b[5] + 67) & 0xFF;
          };
          console.log(state, a);
          state = 713170640;
          continue;
        case 590666725:
          if (19494224n) {
            a = 1;
            b[23] -= b[0] + b[35] + b[11] + b[34] + b[13] + b[27] + 241;
            b[23] &= 0xFF;
          } else {
            b[38] ^= (b[17] + b[28] + b[4] + b[18] + b[11] + b[3] + 133) & 0xFF;
          };
          console.log(state, a);
          state = 896388973;
          continue;
        case 591243892:
          if (40429544n) {
            a = 1;
            b[10] += b[24] + b[28] + b[12] + b[3] + b[34] + b[8] + 83;
            b[10] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[24] ^= (b[9] + b[0] + b[28] + b[27] + b[21] + b[33] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 593902528;
          continue;
        case 593231004:
          if (Math.random() < 0.5) {
            a = 1;
            b[35] -= b[39] + b[12] + b[36] + b[2] + b[9] + b[30] + 167;
            b[35] &= 0xFF;
          } else {
            b[16] += b[43] + b[4] + b[3] + b[35] + b[14] + b[31] + 187;
            b[16] &= 0xFF;
          };
          console.log(state, a);
          state = 220027931;
          continue;
        case 594440623:
          if (88077007n) {
            a = 1;
            b[3] -= b[26] + b[35] + b[23] + b[36] + b[10] + b[5] + 33;
            b[3] &= 0xFF;
          } else {
            b[0] += b[24] + b[29] + b[41] + b[6] + b[19] + b[13] + 57;
            b[0] &= 0xFF;
          };
          console.log(state, a);
          state = 940304756;
          continue;
        case 596471964:
          if (958012310) {
            a = 1;
            b[39] += b[23] + b[34] + b[11] + b[26] + b[18] + b[27] + 88;
            b[39] &= 0xFF;
          } else {
            b[11] ^= (b[40] + b[18] + b[21] + b[31] + b[5] + b[15] + 125) & 0xFF;
          };
          console.log(state, a);
          state = 960293800;
          continue;
        case 598167998:
          if (72917820n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[7] += b[1] + b[26] + b[15] + b[24] + b[13] + b[31] + Math.floor(A * 256);
  
            b[7] &= 0xFF;
          } else {
            b[13] -= b[2] + b[17] + b[41] + b[14] + b[1] + b[18] + 68;
            b[13] &= 0xFF;
          };
          console.log(state, a);
          state = 1019853179;
          continue;
        case 598261111:
          if (Math.random() < 0.5) {
            a = 1;
            b[3] += b[0] + b[4] + b[40] + b[37] + b[27] + b[18] + 99;
            b[3] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[7] ^= (b[5] + b[37] + b[18] + b[12] + b[27] + b[21] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 3871500;
          continue;
        case 602845621:
          if (Math.random() < 0.5) {
            a = 1;
            b[4] -= b[14] + b[8] + b[32] + b[27] + b[35] + b[36] + 124;
            b[4] &= 0xFF;
          } else {
            b[31] += b[29] + b[22] + b[15] + b[10] + b[36] + b[18] + 227;
            b[31] &= 0xFF;
          };
          console.log(state, a);
          state = 646498467;
          continue;
        case 604377705:
          if (63685605n) {
            a = 1;
            b[31] ^= (b[1] + b[16] + b[23] + b[25] + b[29] + b[4] + 2) & 0xFF;
          } else {
            b[33] += b[38] + b[9] + b[6] + b[28] + b[37] + b[32] + 174;
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 92754704;
          continue;
        case 605458814:
          if (226426204) {
            a = 1;
            b[14] += b[23] + b[25] + b[33] + b[8] + b[13] + b[31] + 132;
            b[14] &= 0xFF;
          } else {
            b[39] += b[42] + b[10] + b[3] + b[41] + b[14] + b[26] + 177;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 37622359;
          continue;
        case 606417521:
          if (95776195n) {
            a = 1;
            b[42] ^= (b[3] + b[8] + b[11] + b[31] + b[20] + b[15] + 1) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[29] += b[10] + b[28] + b[19] + b[38] + b[1] + b[31] + Math.floor(A * 256);
  
            b[29] &= 0xFF;
          };
          console.log(state, a);
          state = 274960738;
          continue;
        case 607021784:
          if (51319275n) {
            a = 1;
            b[23] -= b[16] + b[12] + b[33] + b[43] + b[24] + b[41] + 233;
            b[23] &= 0xFF;
          } else {
            b[36] -= b[7] + b[21] + b[15] + b[29] + b[31] + b[2] + 130;
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 864278364;
          continue;
        case 607284248:
          if (2932515) {
            a = 1;
            b[30] -= b[4] + b[3] + b[13] + b[38] + b[7] + b[31] + 90;
            b[30] &= 0xFF;
          } else {
            b[23] += b[18] + b[1] + b[38] + b[22] + b[20] + b[4] + 124;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 271342539;
          continue;
        case 607680747:
          if (Math.random() < 0.5) {
            a = 1;
            b[16] += b[13] + b[41] + b[6] + b[3] + b[29] + b[39] + 206;
            b[16] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[39] += b[29] + b[17] + b[11] + b[14] + b[37] + b[12] + Math.floor(A * 256);
  
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 348572019;
          continue;
        case 609213482:
          if (63582671n) {
            a = 1;
            b[5] ^= (b[36] + b[13] + b[3] + b[12] + b[2] + b[39] + 175) & 0xFF;
          } else {
            b[21] += b[32] + b[16] + b[27] + b[17] + b[10] + b[15] + 37;
            b[21] &= 0xFF;
          };
          console.log(state, a);
          state = 56000485;
          continue;
        case 610067499:
          if (16096322n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[7] -= b[11] + b[43] + b[13] + b[8] + b[19] + b[23] + Math.floor(A * 256);
  
            b[7] &= 0xFF;
          } else {
            b[34] += b[16] + b[38] + b[1] + b[42] + b[14] + b[9] + 192;
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 30360870;
          continue;
        case 610287656:
          if (Math.random() < 0.5) {
            a = 1;
            b[9] ^= (b[4] + b[11] + b[37] + b[14] + b[41] + b[33] + 247) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[2] ^= (b[15] + b[40] + b[14] + b[19] + b[8] + b[25] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 386676293;
          continue;
        case 610501194:
          if (483948646) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[0] += b[18] + b[32] + b[30] + b[39] + b[37] + b[1] + Math.floor(A * 256);
  
            b[0] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[41] += b[13] + b[30] + b[12] + b[1] + b[22] + b[16] + Math.floor(A * 256);
  
            b[41] &= 0xFF;
          };
          console.log(state, a);
          state = 444526998;
          continue;
        case 610772468:
          if (Math.random() < 0.5) {
            a = 1;
            b[28] += b[43] + b[23] + b[7] + b[18] + b[25] + b[30] + 99;
            b[28] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[0] ^= (b[21] + b[1] + b[27] + b[17] + b[8] + b[31] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 926668633;
          continue;
        case 613252913:
          if (366977379) {
            a = 1;
            b[18] -= b[19] + b[11] + b[38] + b[5] + b[14] + b[26] + 52;
            b[18] &= 0xFF;
          } else {
            b[21] ^= (b[20] + b[38] + b[14] + b[15] + b[1] + b[13] + 81) & 0xFF;
          };
          console.log(state, a);
          state = 109283112;
          continue;
        case 613597816:
          if (206260547) {
            a = 1;
            b[36] += b[20] + b[14] + b[3] + b[41] + b[10] + b[31] + 237;
            b[36] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[42] += b[36] + b[41] + b[12] + b[21] + b[19] + b[23] + Math.floor(A * 256);
  
            b[42] &= 0xFF;
          };
          console.log(state, a);
          state = 786401873;
          continue;
        case 613821870:
          if (Math.random() < 0.5) {
            a = 1;
            b[19] ^= (b[12] + b[1] + b[34] + b[8] + b[4] + b[37] + 22) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[28] += b[13] + b[38] + b[12] + b[17] + b[7] + b[22] + Math.floor(A * 256);
  
            b[28] &= 0xFF;
          };
          console.log(state, a);
          state = 538093015;
          continue;
        case 615167515:
          if (325293838) {
            a = 1;
            b[10] ^= (b[36] + b[1] + b[15] + b[31] + b[14] + b[32] + 177) & 0xFF;
          } else {
            b[5] -= b[31] + b[43] + b[1] + b[8] + b[6] + b[41] + 246;
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 409990561;
          continue;
        case 617252180:
          if (Math.random() < 0.5) {
            a = 1;
            b[10] -= b[37] + b[36] + b[26] + b[9] + b[24] + b[7] + 86;
            b[10] &= 0xFF;
          } else {
            b[21] += b[4] + b[33] + b[30] + b[16] + b[27] + b[5] + 192;
            b[21] &= 0xFF;
          };
          console.log(state, a);
          state = 104808741;
          continue;
        case 617270605:
          if (40813803n) {
            a = 1;
            b[4] -= b[28] + b[38] + b[37] + b[5] + b[32] + b[13] + 47;
            b[4] &= 0xFF;
          } else {
            b[15] -= b[38] + b[43] + b[7] + b[11] + b[22] + b[18] + 164;
            b[15] &= 0xFF;
          };
          console.log(state, a);
          state = 233632316;
          continue;
        case 618349901:
          if (26484079n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[11] ^= (b[24] + b[26] + b[20] + b[28] + b[15] + b[35] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[19] -= b[22] + b[18] + b[8] + b[10] + b[34] + b[14] + 150;
            b[19] &= 0xFF;
          };
          console.log(state, a);
          state = 886795061;
          continue;
        case 618469040:
          if (898758855) {
            a = 1;
            b[21] += b[12] + b[27] + b[43] + b[38] + b[36] + b[16] + 206;
            b[21] &= 0xFF;
          } else {
            b[20] -= b[6] + b[41] + b[42] + b[28] + b[30] + b[12] + 226;
            b[20] &= 0xFF;
          };
          console.log(state, a);
          state = 243547964;
          continue;
        case 619249680:
          if (48705217n) {
            a = 1;
            b[21] -= b[4] + b[31] + b[25] + b[22] + b[2] + b[3] + 237;
            b[21] &= 0xFF;
          } else {
            b[1] ^= (b[7] + b[15] + b[29] + b[26] + b[37] + b[18] + 154) & 0xFF;
          };
          console.log(state, a);
          state = 469446573;
          continue;
        case 619255339:
          if (Math.random() < 0.5) {
            a = 1;
            b[8] += b[31] + b[12] + b[36] + b[11] + b[13] + b[43] + 149;
            b[8] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[34] += b[30] + b[17] + b[38] + b[41] + b[5] + b[42] + Math.floor(A * 256);
  
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 562829538;
          continue;
        case 620144002:
          if (575631725) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[11] -= b[24] + b[43] + b[29] + b[7] + b[35] + b[20] + Math.floor(A * 256);
  
            b[11] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[40] ^= (b[35] + b[22] + b[9] + b[31] + b[23] + b[12] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 188924010;
          continue;
        case 623102886:
          if (215125179) {
            a = 1;
            b[18] += b[36] + b[23] + b[30] + b[7] + b[37] + b[6] + 255;
            b[18] &= 0xFF;
          } else {
            b[43] -= b[36] + b[23] + b[15] + b[21] + b[32] + b[38] + 79;
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 233083443;
          continue;
        case 624024080:
          if (Math.random() < 0.5) {
            a = 1;
            b[12] -= b[4] + b[24] + b[1] + b[18] + b[40] + b[33] + 48;
            b[12] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[22] -= b[41] + b[21] + b[8] + b[10] + b[27] + b[31] + Math.floor(A * 256);
  
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 1036651800;
          continue;
        case 624483777:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[12] -= b[18] + b[2] + b[17] + b[7] + b[41] + b[32] + Math.floor(A * 256);
  
            b[12] &= 0xFF;
          } else {
            b[15] -= b[28] + b[4] + b[23] + b[16] + b[17] + b[20] + 168;
            b[15] &= 0xFF;
          };
          console.log(state, a);
          state = 330849011;
          continue;
        case 625706758:
          if (185443289) {
            a = 1;
            b[5] ^= (b[21] + b[38] + b[28] + b[43] + b[42] + b[33] + 1) & 0xFF;
          } else {
            b[43] += b[26] + b[3] + b[25] + b[0] + b[31] + b[21] + 81;
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 828428928;
          continue;
        case 627583527:
          if (Math.random() < 0.5) {
            a = 1;
            b[6] -= b[30] + b[19] + b[40] + b[22] + b[26] + b[10] + 35;
            b[6] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[35] ^= (b[14] + b[24] + b[26] + b[32] + b[7] + b[19] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 358665688;
          continue;
        case 627838396:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[39] -= b[26] + b[2] + b[35] + b[11] + b[23] + b[14] + Math.floor(A * 256);
  
            b[39] &= 0xFF;
          } else {
            b[20] += b[34] + b[25] + b[10] + b[3] + b[31] + b[37] + 136;
            b[20] &= 0xFF;
          };
          console.log(state, a);
          state = 859357642;
          continue;
        case 629242776:
          if (497580571) {
            a = 1;
            b[16] ^= (b[37] + b[41] + b[6] + b[0] + b[20] + b[40] + 1) & 0xFF;
          } else {
            b[11] += b[5] + b[30] + b[23] + b[35] + b[26] + b[41] + 80;
            b[11] &= 0xFF;
          };
          console.log(state, a);
          state = 429343547;
          continue;
        case 630925076:
          if (894602643) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[16] ^= (b[5] + b[35] + b[12] + b[29] + b[9] + b[36] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[10] -= b[12] + b[16] + b[30] + b[9] + b[34] + b[13] + 121;
            b[10] &= 0xFF;
          };
          console.log(state, a);
          state = 663095210;
          continue;
        case 631842634:
          if (88975787n) {
            a = 1;
            b[42] += b[31] + b[14] + b[24] + b[28] + b[11] + b[10] + 23;
            b[42] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[41] ^= (b[2] + b[38] + b[5] + b[9] + b[23] + b[31] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 34893457;
          continue;
        case 631991648:
          if (33861635n) {
            a = 1;
            b[13] += b[39] + b[5] + b[27] + b[43] + b[23] + b[31] + 30;
            b[13] &= 0xFF;
          } else {
            b[23] += b[38] + b[34] + b[9] + b[36] + b[1] + b[3] + 112;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 116368186;
          continue;
        case 632677318:
          if (116397922) {
            a = 1;
            b[34] -= b[16] + b[22] + b[17] + b[6] + b[15] + b[32] + 5;
            b[34] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[8] += b[36] + b[38] + b[6] + b[33] + b[27] + b[32] + Math.floor(A * 256);
  
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 848123506;
          continue;
        case 633013038:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[34] -= b[6] + b[41] + b[33] + b[2] + b[31] + b[24] + Math.floor(A * 256);
  
            b[34] &= 0xFF;
          } else {
            b[30] ^= (b[14] + b[19] + b[24] + b[22] + b[6] + b[10] + 80) & 0xFF;
          };
          console.log(state, a);
          state = 159141862;
          continue;
        case 633234283:
          if (172370898) {
            a = 1;
            b[11] ^= (b[4] + b[21] + b[31] + b[28] + b[41] + b[30] + 50) & 0xFF;
          } else {
            b[6] += b[17] + b[7] + b[32] + b[39] + b[31] + b[14] + 1;
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 848576990;
          continue;
        case 633718801:
          if (436903069) {
            a = 1;
            b[37] -= b[35] + b[30] + b[18] + b[20] + b[24] + b[13] + 32;
            b[37] &= 0xFF;
          } else {
            b[5] += b[26] + b[22] + b[39] + b[0] + b[36] + b[4] + 1;
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 469553896;
          continue;
        case 635066656:
          if (13205359n) {
            a = 1;
            b[33] -= b[12] + b[5] + b[42] + b[2] + b[21] + b[15] + 201;
            b[33] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[36] ^= (b[35] + b[5] + b[6] + b[37] + b[17] + b[4] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 413758209;
          continue;
        case 635490398:
          if (Math.random() < 0.5) {
            a = 1;
            b[28] -= b[7] + b[12] + b[18] + b[30] + b[27] + b[10] + 24;
            b[28] &= 0xFF;
          } else {
            b[6] ^= (b[5] + b[30] + b[4] + b[39] + b[23] + b[18] + 216) & 0xFF;
          };
          console.log(state, a);
          state = 881210763;
          continue;
        case 635714957:
          if (821608104) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[9] += b[36] + b[23] + b[18] + b[0] + b[17] + b[15] + Math.floor(A * 256);
  
            b[9] &= 0xFF;
          } else {
            b[40] += b[13] + b[3] + b[43] + b[31] + b[22] + b[25] + 49;
            b[40] &= 0xFF;
          };
          console.log(state, a);
          state = 209721591;
          continue;
        case 636356544:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[23] += b[3] + b[28] + b[4] + b[27] + b[25] + b[10] + Math.floor(A * 256);
  
            b[23] &= 0xFF;
          } else {
            b[27] -= b[15] + b[24] + b[39] + b[35] + b[28] + b[29] + 155;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 1069796829;
          continue;
        case 638017835:
          if (Math.random() < 0.5) {
            a = 1;
            b[11] += b[2] + b[6] + b[43] + b[25] + b[35] + b[26] + 210;
            b[11] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[15] += b[36] + b[14] + b[31] + b[0] + b[7] + b[10] + Math.floor(A * 256);
  
            b[15] &= 0xFF;
          };
          console.log(state, a);
          state = 688954724;
          continue;
        case 638200464:
          if (83839119n) {
            a = 1;
            b[20] += b[16] + b[41] + b[24] + b[25] + b[19] + b[43] + 117;
            b[20] &= 0xFF;
          } else {
            b[35] += b[30] + b[7] + b[3] + b[40] + b[20] + b[34] + 255;
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 923299951;
          continue;
        case 639015755:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[20] += b[36] + b[42] + b[12] + b[24] + b[10] + b[14] + Math.floor(A * 256);
  
            b[20] &= 0xFF;
          } else {
            b[16] ^= (b[25] + b[38] + b[43] + b[0] + b[9] + b[15] + 214) & 0xFF;
          };
          console.log(state, a);
          state = 351723496;
          continue;
        case 639995512:
          if (298240906) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[2] -= b[13] + b[43] + b[15] + b[20] + b[31] + b[40] + Math.floor(A * 256);
  
            b[2] &= 0xFF;
          } else {
            b[8] += b[13] + b[4] + b[36] + b[28] + b[17] + b[39] + 118;
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 56462499;
          continue;
        case 640695661:
          if (773031528) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[0] += b[35] + b[27] + b[26] + b[6] + b[37] + b[39] + Math.floor(A * 256);
  
            b[0] &= 0xFF;
          } else {
            b[13] -= b[27] + b[28] + b[15] + b[40] + b[14] + b[8] + 70;
            b[13] &= 0xFF;
          };
          console.log(state, a);
          state = 1026335212;
          continue;
        case 640966734:
          if (Math.random() < 0.5) {
            a = 1;
            b[43] += b[13] + b[2] + b[35] + b[18] + b[32] + b[33] + 61;
            b[43] &= 0xFF;
          } else {
            b[14] -= b[33] + b[36] + b[8] + b[6] + b[9] + b[43] + 114;
            b[14] &= 0xFF;
          };
          console.log(state, a);
          state = 656625414;
          continue;
        case 641186517:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[34] += b[26] + b[0] + b[30] + b[18] + b[29] + b[39] + Math.floor(A * 256);
  
            b[34] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[10] -= b[25] + b[0] + b[28] + b[35] + b[5] + b[30] + Math.floor(A * 256);
  
            b[10] &= 0xFF;
          };
          console.log(state, a);
          state = 1036876601;
          continue;
        case 641228928:
          if (942556861) {
            a = 1;
            b[25] ^= (b[38] + b[39] + b[2] + b[42] + b[21] + b[27] + 32) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[14] ^= (b[32] + b[30] + b[20] + b[11] + b[3] + b[41] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 81518900;
          continue;
        case 642986604:
          if (Math.random() < 0.5) {
            a = 1;
            b[20] ^= (b[26] + b[32] + b[10] + b[2] + b[14] + b[21] + 195) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[28] ^= (b[41] + b[26] + b[27] + b[37] + b[21] + b[6] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 800885008;
          continue;
        case 643486477:
          if (59362548n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[26] -= b[7] + b[8] + b[17] + b[31] + b[29] + b[3] + Math.floor(A * 256);
  
            b[26] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[22] += b[43] + b[18] + b[23] + b[42] + b[17] + b[33] + Math.floor(A * 256);
  
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 240796634;
          continue;
        case 644273762:
          if (905282220) {
            a = 1;
            b[16] -= b[36] + b[35] + b[15] + b[39] + b[21] + b[3] + 95;
            b[16] &= 0xFF;
          } else {
            b[26] -= b[15] + b[43] + b[11] + b[16] + b[28] + b[30] + 150;
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 445266410;
          continue;
        case 644692480:
          if (Math.random() < 0.5) {
            a = 1;
            b[11] ^= (b[36] + b[0] + b[6] + b[21] + b[32] + b[18] + 134) & 0xFF;
          } else {
            b[9] ^= (b[38] + b[1] + b[4] + b[8] + b[39] + b[24] + 95) & 0xFF;
          };
          console.log(state, a);
          state = 694856073;
          continue;
        case 644893890:
          if (56320674n) {
            a = 1;
            b[11] -= b[6] + b[19] + b[33] + b[43] + b[3] + b[21] + 60;
            b[11] &= 0xFF;
          } else {
            b[28] += b[24] + b[26] + b[38] + b[16] + b[14] + b[43] + 119;
            b[28] &= 0xFF;
          };
          console.log(state, a);
          state = 338601963;
          continue;
        case 644948966:
          if (Math.random() < 0.5) {
            a = 1;
            b[29] += b[10] + b[1] + b[9] + b[30] + b[18] + b[37] + 138;
            b[29] &= 0xFF;
          } else {
            b[18] ^= (b[17] + b[23] + b[35] + b[0] + b[41] + b[5] + 77) & 0xFF;
          };
          console.log(state, a);
          state = 194721612;
          continue;
        case 647939351:
          if (Math.random() < 0.5) {
            a = 1;
            b[16] -= b[35] + b[11] + b[36] + b[29] + b[10] + b[26] + 70;
            b[16] &= 0xFF;
          } else {
            b[8] += b[30] + b[22] + b[17] + b[0] + b[27] + b[21] + 117;
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 59076117;
          continue;
        case 648641891:
          if (408308558) {
            a = 1;
            b[39] ^= (b[7] + b[32] + b[11] + b[35] + b[10] + b[17] + 101) & 0xFF;
          } else {
            b[25] ^= (b[26] + b[5] + b[0] + b[31] + b[6] + b[39] + 207) & 0xFF;
          };
          console.log(state, a);
          state = 215228651;
          continue;
        case 648694757:
          if (35072631n) {
            a = 1;
            b[4] -= b[38] + b[0] + b[13] + b[16] + b[3] + b[18] + 170;
            b[4] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[11] ^= (b[25] + b[14] + b[10] + b[15] + b[23] + b[38] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 439715360;
          continue;
        case 650908334:
          if (632156730) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[1] ^= (b[3] + b[12] + b[11] + b[4] + b[28] + b[31] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[42] ^= (b[12] + b[43] + b[37] + b[6] + b[19] + b[40] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 722855241;
          continue;
        case 651944800:
          if (97668371n) {
            a = 1;
            b[39] ^= (b[18] + b[42] + b[32] + b[14] + b[29] + b[10] + 96) & 0xFF;
          } else {
            b[1] ^= (b[25] + b[41] + b[12] + b[36] + b[34] + b[5] + 14) & 0xFF;
          };
          console.log(state, a);
          state = 720801952;
          continue;
        case 652341782:
          if (852347526) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[27] -= b[38] + b[37] + b[15] + b[0] + b[19] + b[40] + Math.floor(A * 256);
  
            b[27] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[41] -= b[25] + b[0] + b[40] + b[8] + b[5] + b[26] + Math.floor(A * 256);
  
            b[41] &= 0xFF;
          };
          console.log(state, a);
          state = 422798983;
          continue;
        case 652355755:
          if (976614841) {
            a = 1;
            b[5] += b[43] + b[40] + b[19] + b[26] + b[29] + b[17] + 102;
            b[5] &= 0xFF;
          } else {
            b[39] ^= (b[41] + b[25] + b[43] + b[30] + b[11] + b[1] + 63) & 0xFF;
          };
          console.log(state, a);
          state = 617635709;
          continue;
        case 652875761:
          if (416219648) {
            a = 1;
            b[38] ^= (b[31] + b[9] + b[8] + b[12] + b[14] + b[16] + 224) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[23] ^= (b[17] + b[16] + b[3] + b[30] + b[24] + b[43] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 856977353;
          continue;
        case 653960194:
          if (604879063) {
            a = 1;
            b[29] += b[7] + b[3] + b[34] + b[26] + b[19] + b[21] + 147;
            b[29] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[43] += b[40] + b[19] + b[26] + b[4] + b[10] + b[7] + Math.floor(A * 256);
  
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 440659815;
          continue;
        case 654069315:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[43] -= b[39] + b[2] + b[7] + b[3] + b[24] + b[41] + Math.floor(A * 256);
  
            b[43] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[12] += b[0] + b[13] + b[28] + b[38] + b[43] + b[1] + Math.floor(A * 256);
  
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 920953908;
          continue;
        case 657379399:
          if (Math.random() < 0.5) {
            a = 1;
            b[18] += b[11] + b[16] + b[1] + b[23] + b[28] + b[34] + 35;
            b[18] &= 0xFF;
          } else {
            b[36] -= b[39] + b[34] + b[20] + b[4] + b[17] + b[26] + 178;
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 631856256;
          continue;
        case 657690603:
          if (50326544n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[15] -= b[28] + b[7] + b[29] + b[13] + b[0] + b[22] + Math.floor(A * 256);
  
            b[15] &= 0xFF;
          } else {
            b[37] -= b[42] + b[4] + b[0] + b[35] + b[13] + b[25] + 225;
            b[37] &= 0xFF;
          };
          console.log(state, a);
          state = 772757637;
          continue;
        case 658314850:
          if (79341258n) {
            a = 1;
            b[3] -= b[41] + b[23] + b[38] + b[24] + b[30] + b[39] + 192;
            b[3] &= 0xFF;
          } else {
            b[30] ^= (b[43] + b[38] + b[12] + b[33] + b[34] + b[11] + 8) & 0xFF;
          };
          console.log(state, a);
          state = 140504036;
          continue;
        case 659273600:
          if (Math.random() < 0.5) {
            a = 1;
            b[18] -= b[32] + b[0] + b[43] + b[7] + b[20] + b[22] + 86;
            b[18] &= 0xFF;
          } else {
            b[18] += b[31] + b[6] + b[17] + b[12] + b[11] + b[19] + 220;
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 858930996;
          continue;
        case 659598115:
          if (888464228) {
            a = 1;
            b[31] -= b[35] + b[19] + b[42] + b[25] + b[5] + b[41] + 183;
            b[31] &= 0xFF;
          } else {
            b[8] -= b[10] + b[36] + b[38] + b[20] + b[39] + b[41] + 105;
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 756680650;
          continue;
        case 659612427:
          if (314962921) {
            a = 1;
            b[18] += b[29] + b[9] + b[24] + b[43] + b[0] + b[40] + 30;
            b[18] &= 0xFF;
          } else {
            b[1] += b[32] + b[4] + b[0] + b[5] + b[17] + b[2] + 159;
            b[1] &= 0xFF;
          };
          console.log(state, a);
          state = 922136400;
          continue;
        case 660852152:
          if (Math.random() < 0.5) {
            a = 1;
            b[42] += b[43] + b[7] + b[18] + b[20] + b[2] + b[9] + 43;
            b[42] &= 0xFF;
          } else {
            b[26] -= b[2] + b[40] + b[35] + b[9] + b[33] + b[23] + 97;
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 446247064;
          continue;
        case 661359257:
          if (Math.random() < 0.5) {
            a = 1;
            b[3] += b[9] + b[12] + b[0] + b[40] + b[23] + b[21] + 227;
            b[3] &= 0xFF;
          } else {
            b[41] += b[24] + b[30] + b[13] + b[23] + b[5] + b[17] + 64;
            b[41] &= 0xFF;
          };
          console.log(state, a);
          state = 38718632;
          continue;
        case 662440992:
          if (Math.random() < 0.5) {
            a = 1;
            b[6] ^= (b[31] + b[21] + b[28] + b[13] + b[42] + b[35] + 156) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[23] += b[17] + b[34] + b[39] + b[3] + b[21] + b[26] + Math.floor(A * 256);
  
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 624840521;
          continue;
        case 662940026:
          if (47631812n) {
            a = 1;
            b[15] -= b[27] + b[42] + b[10] + b[20] + b[19] + b[29] + 238;
            b[15] &= 0xFF;
          } else {
            b[30] ^= (b[17] + b[15] + b[18] + b[43] + b[29] + b[16] + 27) & 0xFF;
          };
          console.log(state, a);
          state = 1042806170;
          continue;
        case 663555074:
          if (Math.random() < 0.5) {
            a = 1;
            b[23] += b[42] + b[33] + b[32] + b[19] + b[3] + b[35] + 112;
            b[23] &= 0xFF;
          } else {
            b[35] += b[41] + b[40] + b[27] + b[23] + b[31] + b[37] + 213;
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 682380126;
          continue;
        case 664160105:
          if (85595404n) {
            a = 1;
            b[15] += b[24] + b[16] + b[38] + b[22] + b[18] + b[19] + 18;
            b[15] &= 0xFF;
          } else {
            b[31] -= b[28] + b[22] + b[8] + b[3] + b[38] + b[23] + 0;
            b[31] &= 0xFF;
          };
          console.log(state, a);
          state = 262546450;
          continue;
        case 665367266:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[43] -= b[32] + b[34] + b[16] + b[29] + b[39] + b[4] + Math.floor(A * 256);
  
            b[43] &= 0xFF;
          } else {
            b[24] -= b[10] + b[11] + b[14] + b[17] + b[1] + b[20] + 161;
            b[24] &= 0xFF;
          };
          console.log(state, a);
          state = 83618854;
          continue;
        case 667976664:
          if (604457272) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[15] -= b[41] + b[29] + b[17] + b[31] + b[37] + b[5] + Math.floor(A * 256);
  
            b[15] &= 0xFF;
          } else {
            b[18] -= b[29] + b[0] + b[14] + b[21] + b[24] + b[2] + 70;
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 968886840;
          continue;
        case 668502108:
          if (63895761n) {
            a = 1;
            b[15] ^= (b[1] + b[10] + b[21] + b[29] + b[30] + b[18] + 61) & 0xFF;
          } else {
            b[25] += b[41] + b[17] + b[14] + b[10] + b[35] + b[2] + 41;
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 958689612;
          continue;
        case 668741963:
          if (Math.random() < 0.5) {
            a = 1;
            b[43] += b[33] + b[20] + b[5] + b[29] + b[42] + b[7] + 7;
            b[43] &= 0xFF;
          } else {
            b[15] ^= (b[36] + b[23] + b[31] + b[0] + b[20] + b[5] + 20) & 0xFF;
          };
          console.log(state, a);
          state = 37306313;
          continue;
        case 668916821:
          if (521046947) {
            a = 1;
            b[10] += b[5] + b[14] + b[25] + b[38] + b[26] + b[20] + 130;
            b[10] &= 0xFF;
          } else {
            b[19] -= b[7] + b[41] + b[32] + b[18] + b[1] + b[23] + 19;
            b[19] &= 0xFF;
          };
          console.log(state, a);
          state = 295760848;
          continue;
        case 669523539:
          if (Math.random() < 0.5) {
            a = 1;
            b[15] += b[28] + b[16] + b[1] + b[8] + b[3] + b[19] + 5;
            b[15] &= 0xFF;
          } else {
            b[5] += b[28] + b[9] + b[25] + b[27] + b[32] + b[21] + 108;
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 802679489;
          continue;
        case 671130340:
          if (44289887n) {
            a = 1;
            b[23] ^= (b[18] + b[10] + b[20] + b[17] + b[4] + b[38] + 214) & 0xFF;
          } else {
            b[1] -= b[37] + b[40] + b[30] + b[6] + b[38] + b[19] + 192;
            b[1] &= 0xFF;
          };
          console.log(state, a);
          state = 311481896;
          continue;
        case 671468345:
          if (78983600n) {
            a = 1;
            b[18] += b[19] + b[28] + b[40] + b[22] + b[5] + b[17] + 162;
            b[18] &= 0xFF;
          } else {
            b[10] ^= (b[5] + b[33] + b[37] + b[20] + b[18] + b[6] + 232) & 0xFF;
          };
          console.log(state, a);
          state = 901814663;
          continue;
        case 672968190:
          if (Math.random() < 0.5) {
            a = 1;
            b[37] ^= (b[22] + b[28] + b[32] + b[41] + b[2] + b[19] + 59) & 0xFF;
          } else {
            b[31] += b[40] + b[21] + b[2] + b[43] + b[4] + b[0] + 116;
            b[31] &= 0xFF;
          };
          console.log(state, a);
          state = 279283983;
          continue;
        case 673415921:
          if (549939447) {
            a = 1;
            b[43] -= b[28] + b[36] + b[13] + b[16] + b[41] + b[19] + 14;
            b[43] &= 0xFF;
          } else {
            b[22] += b[37] + b[26] + b[14] + b[41] + b[30] + b[6] + 248;
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 405450021;
          continue;
        case 674866669:
          if (15952499n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[8] ^= (b[4] + b[13] + b[43] + b[26] + b[9] + b[21] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[4] += b[5] + b[28] + b[39] + b[15] + b[6] + b[3] + 154;
            b[4] &= 0xFF;
          };
          console.log(state, a);
          state = 815863967;
          continue;
        case 676900802:
          if (Math.random() < 0.5) {
            a = 1;
            b[8] += b[14] + b[40] + b[10] + b[1] + b[28] + b[6] + 110;
            b[8] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[30] -= b[33] + b[42] + b[2] + b[39] + b[1] + b[14] + Math.floor(A * 256);
  
            b[30] &= 0xFF;
          };
          console.log(state, a);
          state = 581381813;
          continue;
        case 679907763:
          if (Math.random() < 0.5) {
            a = 1;
            b[30] ^= (b[17] + b[5] + b[35] + b[26] + b[0] + b[11] + 197) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[20] += b[34] + b[11] + b[21] + b[0] + b[43] + b[13] + Math.floor(A * 256);
  
            b[20] &= 0xFF;
          };
          console.log(state, a);
          state = 91915693;
          continue;
        case 680818939:
          if (14322765) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[20] += b[37] + b[7] + b[18] + b[1] + b[8] + b[28] + Math.floor(A * 256);
  
            b[20] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[9] += b[18] + b[4] + b[7] + b[13] + b[29] + b[26] + Math.floor(A * 256);
  
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 285191804;
          continue;
        case 682257123:
          if (Math.random() < 0.5) {
            a = 1;
            b[21] += b[10] + b[17] + b[34] + b[14] + b[4] + b[43] + 30;
            b[21] &= 0xFF;
          } else {
            b[36] += b[37] + b[30] + b[5] + b[2] + b[42] + b[29] + 103;
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 989947333;
          continue;
        case 686997760:
          if (Math.random() < 0.5) {
            a = 1;
            b[33] += b[15] + b[4] + b[12] + b[18] + b[23] + b[16] + 224;
            b[33] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[6] ^= (b[14] + b[34] + b[37] + b[12] + b[24] + b[25] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 718964675;
          continue;
        case 687112427:
          if (251903815) {
            a = 1;
            b[9] -= b[33] + b[21] + b[31] + b[23] + b[20] + b[37] + 125;
            b[9] &= 0xFF;
          } else {
            b[31] ^= (b[38] + b[0] + b[11] + b[29] + b[4] + b[42] + 220) & 0xFF;
          };
          console.log(state, a);
          state = 525709580;
          continue;
        case 689966138:
          if (673751904) {
            a = 1;
            b[18] += b[15] + b[0] + b[12] + b[23] + b[32] + b[31] + 242;
            b[18] &= 0xFF;
          } else {
            b[28] ^= (b[10] + b[37] + b[8] + b[12] + b[17] + b[30] + 58) & 0xFF;
          };
          console.log(state, a);
          state = 693919401;
          continue;
        case 690810179:
          if (470067365) {
            a = 1;
            b[37] ^= (b[5] + b[10] + b[25] + b[23] + b[29] + b[2] + 224) & 0xFF;
          } else {
            b[25] += b[10] + b[31] + b[30] + b[21] + b[3] + b[40] + 227;
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 358221569;
          continue;
        case 690944261:
          if (89710082n) {
            a = 1;
            b[26] += b[29] + b[27] + b[2] + b[3] + b[5] + b[9] + 244;
            b[26] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[37] -= b[28] + b[25] + b[17] + b[43] + b[31] + b[32] + Math.floor(A * 256);
  
            b[37] &= 0xFF;
          };
          console.log(state, a);
          state = 392099329;
          continue;
        case 691686948:
          if (Math.random() < 0.5) {
            a = 1;
            b[24] -= b[9] + b[0] + b[6] + b[18] + b[10] + b[14] + 202;
            b[24] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[16] += b[38] + b[6] + b[21] + b[34] + b[27] + b[10] + Math.floor(A * 256);
  
            b[16] &= 0xFF;
          };
          console.log(state, a);
          state = 154011094;
          continue;
        case 692337316:
          if (Math.random() < 0.5) {
            a = 1;
            b[7] -= b[36] + b[10] + b[29] + b[27] + b[22] + b[28] + 183;
            b[7] &= 0xFF;
          } else {
            b[26] += b[9] + b[2] + b[43] + b[10] + b[18] + b[11] + 190;
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 998016485;
          continue;
        case 694178482:
          if (Math.random() < 0.5) {
            a = 1;
            b[31] -= b[14] + b[29] + b[42] + b[40] + b[30] + b[33] + 202;
            b[31] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[35] += b[31] + b[37] + b[38] + b[21] + b[28] + b[11] + Math.floor(A * 256);
  
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 840687699;
          continue;
        case 694236448:
          if (79037095n) {
            a = 1;
            b[14] ^= (b[27] + b[11] + b[31] + b[38] + b[16] + b[19] + 72) & 0xFF;
          } else {
            b[7] += b[9] + b[18] + b[41] + b[1] + b[27] + b[2] + 19;
            b[7] &= 0xFF;
          };
          console.log(state, a);
          state = 875466494;
          continue;
        case 694925458:
          if (430396022) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[9] ^= (b[33] + b[32] + b[2] + b[19] + b[15] + b[36] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[7] += b[3] + b[0] + b[14] + b[31] + b[40] + b[5] + 226;
            b[7] &= 0xFF;
          };
          console.log(state, a);
          state = 253379921;
          continue;
        case 695348820:
          if (Math.random() < 0.5) {
            a = 1;
            b[39] ^= (b[11] + b[23] + b[31] + b[20] + b[42] + b[30] + 94) & 0xFF;
          } else {
            b[2] ^= (b[40] + b[18] + b[1] + b[20] + b[23] + b[35] + 176) & 0xFF;
          };
          console.log(state, a);
          state = 443107925;
          continue;
        case 695393418:
          if (Math.random() < 0.5) {
            a = 1;
            b[4] ^= (b[38] + b[9] + b[12] + b[31] + b[16] + b[7] + 47) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[6] += b[36] + b[29] + b[27] + b[23] + b[3] + b[19] + Math.floor(A * 256);
  
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 420210625;
          continue;
        case 696914010:
          if (824577734) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[0] ^= (b[32] + b[37] + b[1] + b[18] + b[8] + b[3] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[40] ^= (b[10] + b[30] + b[6] + b[27] + b[39] + b[9] + 254) & 0xFF;
          };
          console.log(state, a);
          state = 485888781;
          continue;
        case 699096503:
          if (40576212n) {
            a = 1;
            b[43] += b[28] + b[32] + b[27] + b[18] + b[16] + b[31] + 15;
            b[43] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[39] += b[0] + b[18] + b[21] + b[22] + b[31] + b[6] + Math.floor(A * 256);
  
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 542565287;
          continue;
        case 700493929:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[10] -= b[17] + b[25] + b[43] + b[12] + b[30] + b[4] + Math.floor(A * 256);
  
            b[10] &= 0xFF;
          } else {
            b[18] += b[41] + b[12] + b[19] + b[4] + b[9] + b[21] + 22;
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 209770528;
          continue;
        case 700644156:
          if (799352716) {
            a = 1;
            b[3] -= b[39] + b[35] + b[17] + b[40] + b[12] + b[20] + 250;
            b[3] &= 0xFF;
          } else {
            b[24] ^= (b[41] + b[19] + b[4] + b[16] + b[37] + b[20] + 80) & 0xFF;
          };
          console.log(state, a);
          state = 922747286;
          continue;
        case 703070146:
          if (246078512) {
            a = 1;
            b[33] += b[22] + b[38] + b[17] + b[24] + b[23] + b[31] + 187;
            b[33] &= 0xFF;
          } else {
            b[13] ^= (b[14] + b[35] + b[22] + b[4] + b[23] + b[20] + 101) & 0xFF;
          };
          console.log(state, a);
          state = 859962578;
          continue;
        case 703638644:
          if (826923791) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[8] -= b[17] + b[31] + b[30] + b[19] + b[40] + b[39] + Math.floor(A * 256);
  
            b[8] &= 0xFF;
          } else {
            b[9] += b[13] + b[1] + b[5] + b[8] + b[11] + b[32] + 52;
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 174326191;
          continue;
        case 703648569:
          if (811838484) {
            a = 1;
            b[9] ^= (b[31] + b[13] + b[38] + b[17] + b[12] + b[29] + 172) & 0xFF;
          } else {
            b[25] += b[31] + b[36] + b[12] + b[5] + b[9] + b[3] + 94;
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 192873313;
          continue;
        case 703712893:
          if (157809807) {
            a = 1;
            b[11] -= b[18] + b[31] + b[10] + b[37] + b[34] + b[21] + 38;
            b[11] &= 0xFF;
          } else {
            b[9] += b[5] + b[15] + b[19] + b[27] + b[17] + b[25] + 161;
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 457346847;
          continue;
        case 704462675:
          if (Math.random() < 0.5) {
            a = 1;
            b[17] ^= (b[41] + b[14] + b[43] + b[6] + b[7] + b[28] + 196) & 0xFF;
          } else {
            b[38] += b[18] + b[13] + b[28] + b[41] + b[22] + b[26] + 9;
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 476949533;
          continue;
        case 705428670:
          if (23225055n) {
            a = 1;
            b[17] ^= (b[24] + b[7] + b[35] + b[31] + b[28] + b[29] + 64) & 0xFF;
          } else {
            b[37] += b[28] + b[43] + b[14] + b[13] + b[2] + b[16] + 210;
            b[37] &= 0xFF;
          };
          console.log(state, a);
          state = 243078604;
          continue;
        case 706248766:
          if (Math.random() < 0.5) {
            a = 1;
            b[33] ^= (b[3] + b[16] + b[35] + b[6] + b[12] + b[34] + 213) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[25] += b[6] + b[4] + b[7] + b[3] + b[26] + b[12] + Math.floor(A * 256);
  
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 40024592;
          continue;
        case 708088836:
          if (Math.random() < 0.5) {
            a = 1;
            b[28] ^= (b[13] + b[9] + b[35] + b[23] + b[18] + b[39] + 117) & 0xFF;
          } else {
            b[17] ^= (b[3] + b[34] + b[36] + b[5] + b[9] + b[33] + 53) & 0xFF;
          };
          console.log(state, a);
          state = 22699493;
          continue;
        case 710626576:
          if (836463217) {
            a = 1;
            b[26] += b[22] + b[1] + b[12] + b[0] + b[40] + b[19] + 174;
            b[26] &= 0xFF;
          } else {
            b[0] ^= (b[41] + b[16] + b[15] + b[39] + b[18] + b[9] + 175) & 0xFF;
          };
          console.log(state, a);
          state = 304984812;
          continue;
        case 711458388:
          if (82803055n) {
            a = 1;
            b[6] -= b[10] + b[34] + b[17] + b[28] + b[26] + b[13] + 142;
            b[6] &= 0xFF;
          } else {
            b[8] += b[6] + b[10] + b[9] + b[2] + b[37] + b[38] + 213;
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 280600972;
          continue;
        case 714437222:
          if (Math.random() < 0.5) {
            a = 1;
            b[27] += b[29] + b[16] + b[33] + b[18] + b[19] + b[35] + 222;
            b[27] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[9] += b[17] + b[34] + b[18] + b[26] + b[42] + b[13] + Math.floor(A * 256);
  
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 908578754;
          continue;
        case 715652268:
          if (Math.random() < 0.5) {
            a = 1;
            b[40] ^= (b[42] + b[31] + b[25] + b[26] + b[21] + b[28] + 35) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[26] -= b[6] + b[10] + b[7] + b[2] + b[11] + b[32] + Math.floor(A * 256);
  
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 16449040;
          continue;
        case 716459371:
          if (Math.random() < 0.5) {
            a = 1;
            b[10] ^= (b[18] + b[1] + b[20] + b[11] + b[31] + b[41] + 10) & 0xFF;
          } else {
            b[11] ^= (b[21] + b[42] + b[26] + b[40] + b[22] + b[30] + 169) & 0xFF;
          };
          console.log(state, a);
          state = 183777945;
          continue;
        case 716894268:
          if (Math.random() < 0.5) {
            a = 1;
            b[18] ^= (b[36] + b[26] + b[27] + b[7] + b[14] + b[15] + 22) & 0xFF;
          } else {
            b[40] += b[8] + b[9] + b[38] + b[33] + b[27] + b[7] + 66;
            b[40] &= 0xFF;
          };
          console.log(state, a);
          state = 816060033;
          continue;
        case 717447985:
          if (781719997) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[22] -= b[27] + b[41] + b[18] + b[36] + b[2] + b[3] + Math.floor(A * 256);
  
            b[22] &= 0xFF;
          } else {
            b[32] += b[10] + b[26] + b[4] + b[7] + b[43] + b[2] + 145;
            b[32] &= 0xFF;
          };
          console.log(state, a);
          state = 950032801;
          continue;
        case 717701475:
          if (Math.random() < 0.5) {
            a = 1;
            b[6] += b[37] + b[38] + b[32] + b[26] + b[22] + b[14] + 92;
            b[6] &= 0xFF;
          } else {
            b[13] += b[11] + b[41] + b[17] + b[6] + b[22] + b[8] + 130;
            b[13] &= 0xFF;
          };
          console.log(state, a);
          state = 949761243;
          continue;
        case 717893810:
          if (107934763) {
            a = 1;
            b[33] ^= (b[11] + b[43] + b[25] + b[37] + b[19] + b[36] + 207) & 0xFF;
          } else {
            b[13] += b[17] + b[40] + b[32] + b[21] + b[5] + b[12] + 5;
            b[13] &= 0xFF;
          };
          console.log(state, a);
          state = 575406215;
          continue;
        case 718127991:
          if (Math.random() < 0.5) {
            a = 1;
            b[32] ^= (b[36] + b[41] + b[5] + b[3] + b[30] + b[35] + 126) & 0xFF;
          } else {
            b[25] += b[12] + b[27] + b[43] + b[10] + b[36] + b[24] + 15;
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 874900017;
          continue;
        case 718295275:
          if (869773898) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[23] ^= (b[12] + b[4] + b[31] + b[42] + b[35] + b[41] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[32] ^= (b[41] + b[30] + b[5] + b[23] + b[28] + b[39] + 217) & 0xFF;
          };
          console.log(state, a);
          state = 1032188356;
          continue;
        case 719294338:
          if (155480875) {
            a = 1;
            b[32] -= b[26] + b[13] + b[28] + b[15] + b[9] + b[7] + 49;
            b[32] &= 0xFF;
          } else {
            b[24] += b[29] + b[40] + b[37] + b[33] + b[28] + b[43] + 128;
            b[24] &= 0xFF;
          };
          console.log(state, a);
          state = 496498620;
          continue;
        case 719604778:
          if (48467378n) {
            a = 1;
            b[40] ^= (b[15] + b[5] + b[34] + b[17] + b[36] + b[23] + 221) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[14] ^= (b[25] + b[4] + b[33] + b[9] + b[17] + b[0] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 394356229;
          continue;
        case 721440911:
          if (72730479n) {
            a = 1;
            b[1] += b[37] + b[20] + b[11] + b[15] + b[8] + b[27] + 26;
            b[1] &= 0xFF;
          } else {
            b[22] ^= (b[34] + b[4] + b[9] + b[18] + b[28] + b[31] + 222) & 0xFF;
          };
          console.log(state, a);
          state = 948854573;
          continue;
        case 721721344:
          if (12408061n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[13] += b[31] + b[43] + b[26] + b[41] + b[24] + b[42] + Math.floor(A * 256);
  
            b[13] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[9] += b[21] + b[0] + b[27] + b[6] + b[36] + b[24] + Math.floor(A * 256);
  
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 906715513;
          continue;
        case 724665382:
          if (Math.random() < 0.5) {
            a = 1;
            b[1] ^= (b[17] + b[35] + b[21] + b[3] + b[22] + b[41] + 5) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[9] += b[5] + b[43] + b[42] + b[7] + b[1] + b[28] + Math.floor(A * 256);
  
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 711141192;
          continue;
        case 724809866:
          if (878045687) {
            a = 1;
            b[42] ^= (b[15] + b[19] + b[2] + b[1] + b[40] + b[9] + 207) & 0xFF;
          } else {
            b[1] += b[20] + b[2] + b[25] + b[31] + b[4] + b[18] + 7;
            b[1] &= 0xFF;
          };
          console.log(state, a);
          state = 972963306;
          continue;
        case 726887314:
          if (589762261) {
            a = 1;
            b[17] += b[24] + b[13] + b[23] + b[27] + b[20] + b[30] + 199;
            b[17] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[43] ^= (b[34] + b[28] + b[20] + b[31] + b[7] + b[5] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 451022489;
          continue;
        case 727581920:
          if (Math.random() < 0.5) {
            a = 1;
            b[36] -= b[38] + b[4] + b[40] + b[28] + b[24] + b[21] + 194;
            b[36] &= 0xFF;
          } else {
            b[14] ^= (b[38] + b[43] + b[18] + b[22] + b[17] + b[35] + 133) & 0xFF;
          };
          console.log(state, a);
          state = 570311642;
          continue;
        case 728063058:
          if (808590105) {
            a = 1;
            b[15] ^= (b[33] + b[8] + b[16] + b[9] + b[38] + b[22] + 163) & 0xFF;
          } else {
            b[31] -= b[39] + b[35] + b[34] + b[43] + b[38] + b[20] + 173;
            b[31] &= 0xFF;
          };
          console.log(state, a);
          state = 248270043;
          continue;
        case 728604419:
          if (Math.random() < 0.5) {
            a = 1;
            b[29] ^= (b[19] + b[0] + b[11] + b[25] + b[4] + b[36] + 32) & 0xFF;
          } else {
            b[20] += b[7] + b[32] + b[0] + b[18] + b[38] + b[29] + 45;
            b[20] &= 0xFF;
          };
          console.log(state, a);
          state = 740606242;
          continue;
        case 728750373:
          if (50562265n) {
            a = 1;
            b[38] += b[20] + b[30] + b[31] + b[8] + b[37] + b[33] + 54;
            b[38] &= 0xFF;
          } else {
            b[2] ^= (b[37] + b[8] + b[24] + b[29] + b[11] + b[41] + 24) & 0xFF;
          };
          console.log(state, a);
          state = 68986913;
          continue;
        case 734932685:
          if (97460879) {
            a = 1;
            b[32] += b[20] + b[31] + b[7] + b[21] + b[41] + b[13] + 134;
            b[32] &= 0xFF;
          } else {
            b[2] += b[15] + b[16] + b[6] + b[34] + b[39] + b[12] + 131;
            b[2] &= 0xFF;
          };
          console.log(state, a);
          state = 618745399;
          continue;
        case 735283656:
          if (50627304n) {
            a = 1;
            b[4] -= b[2] + b[31] + b[11] + b[16] + b[8] + b[23] + 245;
            b[4] &= 0xFF;
          } else {
            b[29] -= b[36] + b[30] + b[13] + b[22] + b[16] + b[10] + 195;
            b[29] &= 0xFF;
          };
          console.log(state, a);
          state = 728781020;
          continue;
        case 737600074:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[34] -= b[19] + b[7] + b[18] + b[17] + b[31] + b[23] + Math.floor(A * 256);
  
            b[34] &= 0xFF;
          } else {
            b[3] -= b[31] + b[37] + b[34] + b[25] + b[11] + b[13] + 6;
            b[3] &= 0xFF;
          };
          console.log(state, a);
          state = 715943837;
          continue;
        case 738234691:
          if (Math.random() < 0.5) {
            a = 1;
            b[34] -= b[36] + b[4] + b[30] + b[43] + b[22] + b[37] + 19;
            b[34] &= 0xFF;
          } else {
            b[13] ^= (b[27] + b[19] + b[31] + b[38] + b[43] + b[23] + 33) & 0xFF;
          };
          console.log(state, a);
          state = 730006451;
          continue;
        case 738349727:
          if (1029881146) {
            a = 1;
            b[38] ^= (b[26] + b[30] + b[35] + b[11] + b[14] + b[39] + 22) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[39] ^= (b[9] + b[18] + b[20] + b[15] + b[40] + b[10] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 260627984;
          continue;
        case 738393887:
          if (31405760n) {
            a = 1;
            b[18] += b[26] + b[6] + b[37] + b[36] + b[33] + b[5] + 177;
            b[18] &= 0xFF;
          } else {
            b[33] += b[40] + b[9] + b[3] + b[34] + b[42] + b[36] + 129;
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 901504696;
          continue;
        case 740369788:
          if (282301570) {
            a = 1;
            b[15] -= b[33] + b[5] + b[31] + b[6] + b[12] + b[36] + 131;
            b[15] &= 0xFF;
          } else {
            b[41] += b[1] + b[4] + b[10] + b[16] + b[13] + b[11] + 6;
            b[41] &= 0xFF;
          };
          console.log(state, a);
          state = 732745038;
          continue;
        case 741568164:
          if (161224872) {
            a = 1;
            b[3] -= b[36] + b[42] + b[38] + b[25] + b[17] + b[4] + 227;
            b[3] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[2] ^= (b[1] + b[40] + b[32] + b[37] + b[21] + b[35] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 1024767413;
          continue;
        case 742853454:
          if (217661996) {
            a = 1;
            b[21] ^= (b[33] + b[3] + b[40] + b[1] + b[37] + b[15] + 98) & 0xFF;
          } else {
            b[16] -= b[5] + b[27] + b[21] + b[8] + b[22] + b[28] + 254;
            b[16] &= 0xFF;
          };
          console.log(state, a);
          state = 636024289;
          continue;
        case 742863292:
          if (60469374n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[21] ^= (b[12] + b[43] + b[41] + b[37] + b[11] + b[26] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[41] ^= (b[43] + b[40] + b[42] + b[16] + b[19] + b[33] + 95) & 0xFF;
          };
          console.log(state, a);
          state = 267194974;
          continue;
        case 745685328:
          if (308460658) {
            a = 1;
            b[4] ^= (b[13] + b[42] + b[41] + b[43] + b[22] + b[12] + 30) & 0xFF;
          } else {
            b[37] ^= (b[39] + b[32] + b[40] + b[5] + b[41] + b[10] + 146) & 0xFF;
          };
          console.log(state, a);
          state = 999651373;
          continue;
        case 746082457:
          if (114873052) {
            a = 1;
            b[22] ^= (b[42] + b[11] + b[20] + b[41] + b[14] + b[6] + 151) & 0xFF;
          } else {
            b[11] ^= (b[8] + b[33] + b[17] + b[27] + b[2] + b[28] + 196) & 0xFF;
          };
          console.log(state, a);
          state = 771350879;
          continue;
        case 746695087:
          if (Math.random() < 0.5) {
            a = 1;
            b[35] ^= (b[19] + b[24] + b[39] + b[42] + b[28] + b[4] + 184) & 0xFF;
          } else {
            b[25] ^= (b[22] + b[6] + b[26] + b[23] + b[42] + b[10] + 52) & 0xFF;
          };
          console.log(state, a);
          state = 394346422;
          continue;
        case 747124022:
          if (65982759n) {
            a = 1;
            b[40] += b[28] + b[1] + b[5] + b[38] + b[33] + b[31] + 67;
            b[40] &= 0xFF;
          } else {
            b[22] ^= (b[34] + b[42] + b[20] + b[14] + b[1] + b[7] + 41) & 0xFF;
          };
          console.log(state, a);
          state = 286357295;
          continue;
        case 747515263:
          if (135963965) {
            a = 1;
            b[27] += b[23] + b[34] + b[12] + b[26] + b[16] + b[32] + 42;
            b[27] &= 0xFF;
          } else {
            b[36] -= b[1] + b[33] + b[27] + b[20] + b[42] + b[17] + 173;
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 108234550;
          continue;
        case 747625031:
          if (22180196) {
            a = 1;
            b[4] -= b[6] + b[16] + b[10] + b[43] + b[36] + b[35] + 214;
            b[4] &= 0xFF;
          } else {
            b[38] += b[37] + b[13] + b[8] + b[23] + b[22] + b[27] + 86;
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 34575358;
          continue;
        case 748439402:
          if (Math.random() < 0.5) {
            a = 1;
            b[29] -= b[19] + b[32] + b[6] + b[40] + b[14] + b[8] + 162;
            b[29] &= 0xFF;
          } else {
            b[39] += b[33] + b[2] + b[37] + b[28] + b[1] + b[22] + 38;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 378838591;
          continue;
        case 750243255:
          if (697637626) {
            a = 1;
            b[31] += b[24] + b[39] + b[30] + b[27] + b[11] + b[34] + 174;
            b[31] &= 0xFF;
          } else {
            b[16] ^= (b[24] + b[29] + b[6] + b[35] + b[0] + b[9] + 70) & 0xFF;
          };
          console.log(state, a);
          state = 253123439;
          continue;
        case 752415474:
          if (84999181n) {
            a = 1;
            b[0] ^= (b[31] + b[6] + b[22] + b[25] + b[19] + b[4] + 133) & 0xFF;
          } else {
            b[42] -= b[24] + b[9] + b[29] + b[41] + b[23] + b[33] + 28;
            b[42] &= 0xFF;
          };
          console.log(state, a);
          state = 491479638;
          continue;
        case 752876803:
          if (Math.random() < 0.5) {
            a = 1;
            b[23] += b[25] + b[41] + b[40] + b[5] + b[34] + b[38] + 111;
            b[23] &= 0xFF;
          } else {
            b[2] -= b[29] + b[9] + b[11] + b[19] + b[0] + b[27] + 89;
            b[2] &= 0xFF;
          };
          console.log(state, a);
          state = 418849118;
          continue;
        case 753140202:
          if (66254653n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[9] ^= (b[12] + b[1] + b[11] + b[33] + b[4] + b[8] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[2] += b[41] + b[12] + b[4] + b[6] + b[31] + b[28] + 90;
            b[2] &= 0xFF;
          };
          console.log(state, a);
          state = 128078743;
          continue;
        case 754053251:
          if (Math.random() < 0.5) {
            a = 1;
            b[5] -= b[33] + b[23] + b[15] + b[39] + b[2] + b[31] + 222;
            b[5] &= 0xFF;
          } else {
            b[31] += b[35] + b[13] + b[2] + b[39] + b[40] + b[11] + 80;
            b[31] &= 0xFF;
          };
          console.log(state, a);
          state = 203627414;
          continue;
        case 754246359:
          if (33102920) {
            a = 1;
            b[4] += b[15] + b[2] + b[12] + b[5] + b[6] + b[16] + 139;
            b[4] &= 0xFF;
          } else {
            b[6] += b[11] + b[38] + b[32] + b[41] + b[24] + b[40] + 79;
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 908502221;
          continue;
        case 754435174:
          if (786480690) {
            a = 1;
            b[1] -= b[43] + b[39] + b[4] + b[41] + b[5] + b[0] + 149;
            b[1] &= 0xFF;
          } else {
            b[3] -= b[23] + b[36] + b[41] + b[17] + b[18] + b[22] + 172;
            b[3] &= 0xFF;
          };
          console.log(state, a);
          state = 692626545;
          continue;
        case 756608088:
          if (25242983n) {
            a = 1;
            b[6] ^= (b[28] + b[9] + b[22] + b[21] + b[0] + b[4] + 89) & 0xFF;
          } else {
            b[38] -= b[0] + b[1] + b[27] + b[36] + b[31] + b[17] + 247;
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 921995790;
          continue;
        case 757641439:
          if (505551856) {
            a = 1;
            b[41] -= b[12] + b[27] + b[31] + b[28] + b[42] + b[26] + 63;
            b[41] &= 0xFF;
          } else {
            b[22] += b[39] + b[27] + b[19] + b[9] + b[7] + b[1] + 84;
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 919384361;
          continue;
        case 758478334:
          if (43384771n) {
            a = 1;
            b[43] -= b[15] + b[25] + b[14] + b[8] + b[29] + b[31] + 30;
            b[43] &= 0xFF;
          } else {
            b[36] -= b[5] + b[41] + b[23] + b[27] + b[16] + b[31] + 110;
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 475120120;
          continue;
        case 759656823:
          if (505461787) {
            a = 1;
            b[39] += b[9] + b[35] + b[1] + b[28] + b[6] + b[10] + 187;
            b[39] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[27] += b[13] + b[14] + b[35] + b[37] + b[23] + b[31] + Math.floor(A * 256);
  
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 946348328;
          continue;
        case 760544713:
          if (142754310) {
            a = 1;
            b[43] += b[15] + b[31] + b[8] + b[3] + b[42] + b[30] + 102;
            b[43] &= 0xFF;
          } else {
            b[6] += b[33] + b[12] + b[41] + b[15] + b[19] + b[11] + 154;
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 610917268;
          continue;
        case 761621198:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[8] += b[41] + b[24] + b[2] + b[6] + b[1] + b[31] + Math.floor(A * 256);
  
            b[8] &= 0xFF;
          } else {
            b[18] -= b[37] + b[15] + b[16] + b[27] + b[14] + b[0] + 161;
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 403438631;
          continue;
        case 764848634:
          if (25710910n) {
            a = 1;
            b[0] ^= (b[21] + b[10] + b[29] + b[30] + b[13] + b[17] + 60) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[16] ^= (b[14] + b[5] + b[24] + b[39] + b[36] + b[29] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 456603755;
          continue;
        case 767096117:
          if (13616352n) {
            a = 1;
            b[25] += b[5] + b[21] + b[14] + b[18] + b[0] + b[41] + 170;
            b[25] &= 0xFF;
          } else {
            b[24] -= b[43] + b[5] + b[36] + b[9] + b[30] + b[3] + 160;
            b[24] &= 0xFF;
          };
          console.log(state, a);
          state = 120549532;
          continue;
        case 768056640:
          if (Math.random() < 0.5) {
            a = 1;
            b[18] += b[12] + b[0] + b[23] + b[38] + b[37] + b[24] + 223;
            b[18] &= 0xFF;
          } else {
            b[22] += b[31] + b[37] + b[17] + b[14] + b[15] + b[2] + 92;
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 623836773;
          continue;
        case 769036486:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[36] += b[16] + b[12] + b[10] + b[32] + b[19] + b[5] + Math.floor(A * 256);
  
            b[36] &= 0xFF;
          } else {
            b[38] ^= (b[22] + b[36] + b[17] + b[14] + b[35] + b[25] + 55) & 0xFF;
          };
          console.log(state, a);
          state = 580938788;
          continue;
        case 770907936:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[43] += b[8] + b[39] + b[2] + b[40] + b[37] + b[10] + Math.floor(A * 256);
  
            b[43] &= 0xFF;
          } else {
            b[32] -= b[4] + b[37] + b[3] + b[36] + b[6] + b[38] + 250;
            b[32] &= 0xFF;
          };
          console.log(state, a);
          state = 300529284;
          continue;
        case 771105345:
          if (16397822n) {
            a = 1;
            b[21] -= b[9] + b[20] + b[43] + b[33] + b[24] + b[3] + 54;
            b[21] &= 0xFF;
          } else {
            b[43] += b[41] + b[14] + b[0] + b[35] + b[34] + b[13] + 16;
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 778057547;
          continue;
        case 772657164:
          if (Math.random() < 0.5) {
            a = 1;
            b[13] -= b[10] + b[17] + b[39] + b[18] + b[22] + b[14] + 6;
            b[13] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[11] ^= (b[25] + b[18] + b[38] + b[35] + b[39] + b[34] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 392668663;
          continue;
        case 772702548:
          if (857553112) {
            a = 1;
            b[28] += b[21] + b[2] + b[41] + b[3] + b[8] + b[24] + 40;
            b[28] &= 0xFF;
          } else {
            b[0] ^= (b[6] + b[24] + b[12] + b[35] + b[18] + b[20] + 222) & 0xFF;
          };
          console.log(state, a);
          state = 740583470;
          continue;
        case 773635926:
          if (825147063) {
            a = 1;
            b[43] -= b[39] + b[3] + b[29] + b[38] + b[7] + b[0] + 243;
            b[43] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[40] ^= (b[30] + b[32] + b[11] + b[24] + b[2] + b[7] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 616957437;
          continue;
        case 776373276:
          if (423205447) {
            a = 1;
            b[30] -= b[25] + b[34] + b[4] + b[11] + b[6] + b[5] + 181;
            b[30] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[21] += b[39] + b[6] + b[0] + b[33] + b[8] + b[40] + Math.floor(A * 256);
  
            b[21] &= 0xFF;
          };
          console.log(state, a);
          state = 1006005727;
          continue;
        case 779328580:
          if (1022791685) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[18] ^= (b[35] + b[0] + b[8] + b[16] + b[1] + b[6] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[40] ^= (b[30] + b[28] + b[20] + b[33] + b[9] + b[22] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 778837714;
          continue;
        case 779958856:
          if (66892556n) {
            a = 1;
            b[39] ^= (b[3] + b[12] + b[37] + b[15] + b[26] + b[18] + 204) & 0xFF;
          } else {
            b[8] += b[16] + b[38] + b[27] + b[21] + b[31] + b[3] + 10;
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 829615148;
          continue;
        case 780429714:
          if (19238184n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[26] ^= (b[40] + b[39] + b[1] + b[36] + b[4] + b[42] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[39] -= b[8] + b[14] + b[41] + b[13] + b[15] + b[33] + 164;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 624047744;
          continue;
        case 780480466:
          if (869806366) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[32] += b[41] + b[27] + b[17] + b[38] + b[9] + b[25] + Math.floor(A * 256);
  
            b[32] &= 0xFF;
          } else {
            b[7] += b[6] + b[35] + b[1] + b[40] + b[36] + b[33] + 95;
            b[7] &= 0xFF;
          };
          console.log(state, a);
          state = 954247137;
          continue;
        case 781937258:
          if (540383326) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[28] -= b[40] + b[3] + b[32] + b[34] + b[42] + b[20] + Math.floor(A * 256);
  
            b[28] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[41] ^= (b[31] + b[36] + b[2] + b[42] + b[43] + b[4] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 897885654;
          continue;
        case 784248654:
          if (8301924) {
            a = 1;
            b[18] -= b[41] + b[21] + b[32] + b[3] + b[7] + b[27] + 238;
            b[18] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[6] += b[43] + b[35] + b[2] + b[27] + b[21] + b[30] + Math.floor(A * 256);
  
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 125306521;
          continue;
        case 784551218:
          if (62812649n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[21] ^= (b[32] + b[23] + b[39] + b[17] + b[33] + b[29] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[40] -= b[27] + b[21] + b[22] + b[28] + b[11] + b[15] + 134;
            b[40] &= 0xFF;
          };
          console.log(state, a);
          state = 917712377;
          continue;
        case 784888727:
          if (378672444) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[25] ^= (b[37] + b[5] + b[4] + b[7] + b[38] + b[26] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[28] += b[11] + b[22] + b[17] + b[0] + b[8] + b[31] + 109;
            b[28] &= 0xFF;
          };
          console.log(state, a);
          state = 940496708;
          continue;
        case 785338584:
          if (83354649n) {
            a = 1;
            b[30] += b[28] + b[29] + b[20] + b[5] + b[14] + b[24] + 107;
            b[30] &= 0xFF;
          } else {
            b[2] += b[39] + b[43] + b[38] + b[6] + b[18] + b[5] + 22;
            b[2] &= 0xFF;
          };
          console.log(state, a);
          state = 410681826;
          continue;
        case 786459983:
          if (62104356n) {
            a = 1;
            b[24] -= b[9] + b[4] + b[28] + b[23] + b[3] + b[14] + 217;
            b[24] &= 0xFF;
          } else {
            b[32] += b[9] + b[6] + b[40] + b[22] + b[4] + b[13] + 162;
            b[32] &= 0xFF;
          };
          console.log(state, a);
          state = 190067285;
          continue;
        case 787067102:
          if (17308771n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[22] -= b[13] + b[6] + b[1] + b[23] + b[43] + b[32] + Math.floor(A * 256);
  
            b[22] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[14] += b[23] + b[0] + b[10] + b[42] + b[38] + b[2] + Math.floor(A * 256);
  
            b[14] &= 0xFF;
          };
          console.log(state, a);
          state = 976615861;
          continue;
        case 789883991:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[17] += b[26] + b[12] + b[4] + b[18] + b[29] + b[25] + Math.floor(A * 256);
  
            b[17] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[41] ^= (b[2] + b[1] + b[19] + b[17] + b[15] + b[3] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 965410634;
          continue;
        case 790738357:
          if (657295693) {
            a = 1;
            b[5] -= b[19] + b[31] + b[39] + b[38] + b[0] + b[36] + 62;
            b[5] &= 0xFF;
          } else {
            b[30] += b[17] + b[24] + b[8] + b[9] + b[16] + b[18] + 104;
            b[30] &= 0xFF;
          };
          console.log(state, a);
          state = 790778736;
          continue;
        case 791903896:
          if (64085983n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[18] += b[39] + b[9] + b[29] + b[33] + b[32] + b[3] + Math.floor(A * 256);
  
            b[18] &= 0xFF;
          } else {
            b[35] ^= (b[3] + b[22] + b[4] + b[14] + b[41] + b[10] + 230) & 0xFF;
          };
          console.log(state, a);
          state = 478242659;
          continue;
        case 793300376:
          if (56756954n) {
            a = 1;
            b[16] += b[23] + b[1] + b[0] + b[14] + b[37] + b[36] + 69;
            b[16] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[43] += b[11] + b[15] + b[33] + b[35] + b[21] + b[25] + Math.floor(A * 256);
  
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 1039563113;
          continue;
        case 793788927:
          if (26014551n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[26] -= b[18] + b[1] + b[32] + b[39] + b[0] + b[7] + Math.floor(A * 256);
  
            b[26] &= 0xFF;
          } else {
            b[0] -= b[30] + b[24] + b[37] + b[38] + b[14] + b[25] + 43;
            b[0] &= 0xFF;
          };
          console.log(state, a);
          state = 149837851;
          continue;
        case 797141609:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[18] -= b[8] + b[33] + b[11] + b[36] + b[25] + b[31] + Math.floor(A * 256);
  
            b[18] &= 0xFF;
          } else {
            b[23] += b[36] + b[26] + b[8] + b[4] + b[10] + b[7] + 147;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 1017148224;
          continue;
        case 797360669:
          if (58321764n) {
            a = 1;
            b[10] += b[39] + b[5] + b[42] + b[19] + b[36] + b[0] + 176;
            b[10] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[1] += b[14] + b[33] + b[4] + b[34] + b[13] + b[18] + Math.floor(A * 256);
  
            b[1] &= 0xFF;
          };
          console.log(state, a);
          state = 112359771;
          continue;
        case 797682017:
          if (Math.random() < 0.5) {
            a = 1;
            b[36] ^= (b[42] + b[6] + b[11] + b[40] + b[33] + b[7] + 207) & 0xFF;
          } else {
            b[31] ^= (b[13] + b[23] + b[21] + b[16] + b[32] + b[33] + 48) & 0xFF;
          };
          console.log(state, a);
          state = 966366253;
          continue;
        case 797748313:
          if (Math.random() < 0.5) {
            a = 1;
            b[25] -= b[11] + b[17] + b[34] + b[36] + b[4] + b[41] + 109;
            b[25] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[22] ^= (b[26] + b[31] + b[9] + b[15] + b[14] + b[17] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 1017282126;
          continue;
        case 798743267:
          if (923972252) {
            a = 1;
            b[1] ^= (b[2] + b[30] + b[29] + b[20] + b[37] + b[12] + 46) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[33] += b[27] + b[9] + b[21] + b[38] + b[23] + b[5] + Math.floor(A * 256);
  
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 663527695;
          continue;
        case 799331279:
          if (94155583n) {
            a = 1;
            b[34] += b[15] + b[18] + b[26] + b[22] + b[38] + b[1] + 130;
            b[34] &= 0xFF;
          } else {
            b[15] += b[32] + b[31] + b[9] + b[20] + b[36] + b[18] + 132;
            b[15] &= 0xFF;
          };
          console.log(state, a);
          state = 470325773;
          continue;
        case 800362995:
          if (83638494n) {
            a = 1;
            b[14] ^= (b[23] + b[20] + b[9] + b[27] + b[2] + b[32] + 187) & 0xFF;
          } else {
            b[27] ^= (b[29] + b[21] + b[26] + b[33] + b[10] + b[31] + 111) & 0xFF;
          };
          console.log(state, a);
          state = 1046932675;
          continue;
        case 800418041:
          if (1014699138) {
            a = 1;
            b[26] -= b[43] + b[2] + b[13] + b[34] + b[3] + b[37] + 164;
            b[26] &= 0xFF;
          } else {
            b[11] -= b[16] + b[9] + b[43] + b[21] + b[7] + b[25] + 219;
            b[11] &= 0xFF;
          };
          console.log(state, a);
          state = 491600773;
          continue;
        case 800562337:
          if (86330299n) {
            a = 1;
            b[8] ^= (b[33] + b[18] + b[35] + b[41] + b[39] + b[36] + 142) & 0xFF;
          } else {
            b[26] -= b[2] + b[1] + b[17] + b[29] + b[10] + b[0] + 30;
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 587165694;
          continue;
        case 805377128:
          if (79102690n) {
            a = 1;
            b[25] -= b[9] + b[26] + b[41] + b[43] + b[5] + b[20] + 3;
            b[25] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[5] += b[21] + b[2] + b[19] + b[16] + b[6] + b[23] + Math.floor(A * 256);
  
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 382251608;
          continue;
        case 805449259:
          if (Math.random() < 0.5) {
            a = 1;
            b[15] -= b[13] + b[42] + b[32] + b[39] + b[34] + b[28] + 116;
            b[15] &= 0xFF;
          } else {
            b[2] -= b[29] + b[11] + b[17] + b[33] + b[15] + b[40] + 207;
            b[2] &= 0xFF;
          };
          console.log(state, a);
          state = 517174329;
          continue;
        case 805877939:
          if (178794287) {
            a = 1;
            b[26] += b[35] + b[40] + b[43] + b[28] + b[18] + b[21] + 201;
            b[26] &= 0xFF;
          } else {
            b[26] += b[35] + b[37] + b[34] + b[43] + b[4] + b[19] + 244;
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 874470674;
          continue;
        case 806112829:
          if (66941747n) {
            a = 1;
            b[21] -= b[29] + b[20] + b[33] + b[0] + b[39] + b[27] + 230;
            b[21] &= 0xFF;
          } else {
            b[12] ^= (b[9] + b[23] + b[34] + b[14] + b[13] + b[10] + 147) & 0xFF;
          };
          console.log(state, a);
          state = 807116734;
          continue;
        case 806248070:
          if (1073448998) {
            a = 1;
            b[13] ^= (b[24] + b[17] + b[29] + b[14] + b[27] + b[31] + 48) & 0xFF;
          } else {
            b[11] ^= (b[15] + b[36] + b[35] + b[38] + b[21] + b[43] + 45) & 0xFF;
          };
          console.log(state, a);
          state = 291619859;
          continue;
        case 807171433:
          if (829909768) {
            a = 1;
            b[1] -= b[30] + b[11] + b[24] + b[29] + b[36] + b[18] + 213;
            b[1] &= 0xFF;
          } else {
            b[5] ^= (b[20] + b[25] + b[35] + b[42] + b[18] + b[12] + 137) & 0xFF;
          };
          console.log(state, a);
          state = 354099766;
          continue;
        case 810628019:
          if (87396112n) {
            a = 1;
            b[17] += b[11] + b[26] + b[14] + b[30] + b[28] + b[12] + 137;
            b[17] &= 0xFF;
          } else {
            b[15] += b[21] + b[42] + b[25] + b[1] + b[18] + b[32] + 251;
            b[15] &= 0xFF;
          };
          console.log(state, a);
          state = 172627353;
          continue;
        case 811423735:
          if (403559033) {
            a = 1;
            b[25] ^= (b[38] + b[33] + b[24] + b[40] + b[13] + b[32] + 63) & 0xFF;
          } else {
            b[12] += b[14] + b[31] + b[17] + b[5] + b[22] + b[11] + 29;
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 900748558;
          continue;
        case 811858629:
          if (Math.random() < 0.5) {
            a = 1;
            b[29] ^= (b[34] + b[20] + b[30] + b[35] + b[8] + b[5] + 90) & 0xFF;
          } else {
            b[40] += b[33] + b[12] + b[5] + b[27] + b[38] + b[2] + 118;
            b[40] &= 0xFF;
          };
          console.log(state, a);
          state = 2533527;
          continue;
        case 811872807:
          if (662232298) {
            a = 1;
            b[9] -= b[21] + b[23] + b[14] + b[25] + b[43] + b[10] + 58;
            b[9] &= 0xFF;
          } else {
            b[21] -= b[16] + b[41] + b[5] + b[30] + b[20] + b[32] + 51;
            b[21] &= 0xFF;
          };
          console.log(state, a);
          state = 964411127;
          continue;
        case 812348187:
          if (112807228) {
            a = 1;
            b[32] -= b[33] + b[9] + b[40] + b[15] + b[20] + b[24] + 105;
            b[32] &= 0xFF;
          } else {
            b[18] ^= (b[9] + b[25] + b[13] + b[29] + b[0] + b[24] + 21) & 0xFF;
          };
          console.log(state, a);
          state = 576985818;
          continue;
        case 813144274:
          if (640866493) {
            a = 1;
            b[4] += b[32] + b[28] + b[30] + b[42] + b[24] + b[34] + 208;
            b[4] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[0] += b[37] + b[26] + b[14] + b[22] + b[21] + b[12] + Math.floor(A * 256);
  
            b[0] &= 0xFF;
          };
          console.log(state, a);
          state = 303626156;
          continue;
        case 813512048:
          if (73234172n) {
            a = 1;
            b[2] ^= (b[17] + b[30] + b[20] + b[3] + b[11] + b[25] + 212) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[4] ^= (b[42] + b[18] + b[12] + b[5] + b[16] + b[37] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 1033659483;
          continue;
        case 814323669:
          if (1017264808) {
            a = 1;
            b[2] += b[26] + b[18] + b[14] + b[40] + b[34] + b[29] + 126;
            b[2] &= 0xFF;
          } else {
            b[33] += b[4] + b[41] + b[18] + b[43] + b[28] + b[25] + 2;
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 687416720;
          continue;
        case 814967729:
          if (320507011) {
            a = 1;
            b[15] ^= (b[31] + b[11] + b[18] + b[30] + b[4] + b[40] + 189) & 0xFF;
          } else {
            b[26] -= b[4] + b[11] + b[31] + b[32] + b[28] + b[16] + 165;
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 788749664;
          continue;
        case 816828515:
          if (277611201) {
            a = 1;
            b[20] ^= (b[19] + b[13] + b[25] + b[39] + b[28] + b[36] + 178) & 0xFF;
          } else {
            b[28] -= b[1] + b[9] + b[6] + b[43] + b[3] + b[10] + 51;
            b[28] &= 0xFF;
          };
          console.log(state, a);
          state = 812491792;
          continue;
        case 817291488:
          if (494633775) {
            a = 1;
            b[28] ^= (b[1] + b[9] + b[7] + b[32] + b[18] + b[42] + 240) & 0xFF;
          } else {
            b[38] += b[4] + b[29] + b[22] + b[2] + b[14] + b[37] + 224;
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 199536660;
          continue;
        case 818621328:
          if (979366561) {
            a = 1;
            b[22] += b[34] + b[39] + b[18] + b[9] + b[24] + b[0] + 74;
            b[22] &= 0xFF;
          } else {
            b[2] ^= (b[32] + b[25] + b[29] + b[23] + b[11] + b[7] + 58) & 0xFF;
          };
          console.log(state, a);
          state = 693801922;
          continue;
        case 818877870:
          if (779676322) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[14] -= b[35] + b[18] + b[20] + b[33] + b[2] + b[3] + Math.floor(A * 256);
  
            b[14] &= 0xFF;
          } else {
            b[18] -= b[41] + b[12] + b[21] + b[27] + b[24] + b[6] + 193;
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 92859514;
          continue;
        case 818884951:
          if (1038928111) {
            a = 1;
            b[41] -= b[24] + b[26] + b[19] + b[8] + b[12] + b[6] + 228;
            b[41] &= 0xFF;
          } else {
            b[28] += b[40] + b[23] + b[19] + b[20] + b[13] + b[43] + 220;
            b[28] &= 0xFF;
          };
          console.log(state, a);
          state = 859561268;
          continue;
        case 819632228:
          if (Math.random() < 0.5) {
            a = 1;
            b[26] += b[14] + b[39] + b[18] + b[38] + b[23] + b[3] + 212;
            b[26] &= 0xFF;
          } else {
            b[29] ^= (b[31] + b[38] + b[2] + b[43] + b[15] + b[33] + 61) & 0xFF;
          };
          console.log(state, a);
          state = 633227651;
          continue;
        case 820331184:
          if (37573668n) {
            a = 1;
            b[2] += b[27] + b[28] + b[20] + b[15] + b[22] + b[36] + 79;
            b[2] &= 0xFF;
          } else {
            b[21] -= b[22] + b[2] + b[33] + b[28] + b[10] + b[31] + 98;
            b[21] &= 0xFF;
          };
          console.log(state, a);
          state = 190025954;
          continue;
        case 823596773:
          if (Math.random() < 0.5) {
            a = 1;
            b[0] ^= (b[20] + b[18] + b[34] + b[43] + b[26] + b[2] + 224) & 0xFF;
          } else {
            b[42] ^= (b[11] + b[7] + b[23] + b[13] + b[37] + b[43] + 216) & 0xFF;
          };
          console.log(state, a);
          state = 888771028;
          continue;
        case 823741785:
          if (708381980) {
            a = 1;
            b[7] += b[32] + b[31] + b[38] + b[9] + b[11] + b[23] + 161;
            b[7] &= 0xFF;
          } else {
            b[36] -= b[8] + b[7] + b[27] + b[43] + b[24] + b[15] + 174;
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 956927383;
          continue;
        case 824267648:
          if (78309846n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[22] -= b[29] + b[7] + b[32] + b[34] + b[4] + b[36] + Math.floor(A * 256);
  
            b[22] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[30] -= b[22] + b[29] + b[18] + b[17] + b[35] + b[6] + Math.floor(A * 256);
  
            b[30] &= 0xFF;
          };
          console.log(state, a);
          state = 605829637;
          continue;
        case 824342282:
          if (45885881n) {
            a = 1;
            b[4] -= b[36] + b[39] + b[23] + b[24] + b[37] + b[5] + 157;
            b[4] &= 0xFF;
          } else {
            b[3] -= b[37] + b[33] + b[6] + b[19] + b[22] + b[21] + 15;
            b[3] &= 0xFF;
          };
          console.log(state, a);
          state = 110180607;
          continue;
        case 827518754:
          if (Math.random() < 0.5) {
            a = 1;
            b[35] ^= (b[24] + b[43] + b[21] + b[2] + b[34] + b[40] + 28) & 0xFF;
          } else {
            b[7] ^= (b[43] + b[20] + b[16] + b[11] + b[13] + b[1] + 210) & 0xFF;
          };
          console.log(state, a);
          state = 84285850;
          continue;
        case 828950227:
          if (18378014n) {
            a = 1;
            b[0] ^= (b[7] + b[11] + b[4] + b[23] + b[42] + b[14] + 73) & 0xFF;
          } else {
            b[30] += b[2] + b[1] + b[4] + b[24] + b[5] + b[12] + 220;
            b[30] &= 0xFF;
          };
          console.log(state, a);
          state = 339810937;
          continue;
        case 829813710:
          if (Math.random() < 0.5) {
            a = 1;
            b[12] ^= (b[20] + b[27] + b[40] + b[34] + b[23] + b[21] + 195) & 0xFF;
          } else {
            b[40] ^= (b[35] + b[22] + b[17] + b[2] + b[20] + b[18] + 80) & 0xFF;
          };
          console.log(state, a);
          state = 109608343;
          continue;
        case 830396152:
          if (Math.random() < 0.5) {
            a = 1;
            b[7] ^= (b[23] + b[6] + b[21] + b[43] + b[26] + b[22] + 145) & 0xFF;
          } else {
            b[24] ^= (b[11] + b[25] + b[36] + b[21] + b[2] + b[7] + 127) & 0xFF;
          };
          console.log(state, a);
          state = 209126072;
          continue;
        case 831762542:
          if (935391580) {
            a = 1;
            b[0] -= b[41] + b[2] + b[40] + b[9] + b[3] + b[7] + 255;
            b[0] &= 0xFF;
          } else {
            b[33] ^= (b[4] + b[43] + b[36] + b[16] + b[41] + b[18] + 146) & 0xFF;
          };
          console.log(state, a);
          state = 1039585871;
          continue;
        case 831977705:
          if (58133538n) {
            a = 1;
            b[0] ^= (b[26] + b[43] + b[25] + b[6] + b[33] + b[39] + 126) & 0xFF;
          } else {
            b[35] += b[3] + b[12] + b[36] + b[28] + b[7] + b[41] + 227;
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 585745858;
          continue;
        case 832291230:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[0] -= b[34] + b[3] + b[41] + b[28] + b[29] + b[36] + Math.floor(A * 256);
  
            b[0] &= 0xFF;
          } else {
            b[29] += b[12] + b[28] + b[39] + b[2] + b[30] + b[14] + 128;
            b[29] &= 0xFF;
          };
          console.log(state, a);
          state = 157390982;
          continue;
        case 834936404:
          if (1015569248) {
            a = 1;
            b[20] += b[32] + b[24] + b[15] + b[30] + b[16] + b[5] + 55;
            b[20] &= 0xFF;
          } else {
            b[0] += b[39] + b[5] + b[14] + b[43] + b[25] + b[36] + 164;
            b[0] &= 0xFF;
          };
          console.log(state, a);
          state = 145715616;
          continue;
        case 835741624:
          if (45808178n) {
            a = 1;
            b[6] -= b[11] + b[8] + b[37] + b[39] + b[12] + b[33] + 185;
            b[6] &= 0xFF;
          } else {
            b[23] += b[26] + b[37] + b[5] + b[12] + b[34] + b[39] + 90;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 452747552;
          continue;
        case 836184180:
          if (1052269683) {
            a = 1;
            b[42] -= b[40] + b[36] + b[22] + b[27] + b[5] + b[13] + 142;
            b[42] &= 0xFF;
          } else {
            b[42] -= b[23] + b[28] + b[39] + b[16] + b[17] + b[2] + 49;
            b[42] &= 0xFF;
          };
          console.log(state, a);
          state = 706884477;
          continue;
        case 837292277:
          if (52531050n) {
            a = 1;
            b[31] += b[8] + b[42] + b[38] + b[19] + b[22] + b[25] + 138;
            b[31] &= 0xFF;
          } else {
            b[19] -= b[27] + b[25] + b[34] + b[14] + b[11] + b[28] + 139;
            b[19] &= 0xFF;
          };
          console.log(state, a);
          state = 537574977;
          continue;
        case 838818428:
          if (54642374n) {
            a = 1;
            b[3] ^= (b[2] + b[26] + b[25] + b[36] + b[42] + b[23] + 150) & 0xFF;
          } else {
            b[3] ^= (b[19] + b[31] + b[1] + b[26] + b[6] + b[36] + 149) & 0xFF;
          };
          console.log(state, a);
          state = 757570921;
          continue;
        case 839201324:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[9] += b[27] + b[19] + b[33] + b[24] + b[10] + b[17] + Math.floor(A * 256);
  
            b[9] &= 0xFF;
          } else {
            b[11] -= b[12] + b[27] + b[40] + b[37] + b[16] + b[14] + 190;
            b[11] &= 0xFF;
          };
          console.log(state, a);
          state = 693243499;
          continue;
        case 839728295:
          if (379163964) {
            a = 1;
            b[7] -= b[14] + b[41] + b[37] + b[34] + b[3] + b[5] + 152;
            b[7] &= 0xFF;
          } else {
            b[27] -= b[15] + b[14] + b[1] + b[28] + b[18] + b[13] + 139;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 156129988;
          continue;
        case 843507186:
          if (70702504n) {
            a = 1;
            b[28] += b[41] + b[9] + b[22] + b[29] + b[18] + b[14] + 14;
            b[28] &= 0xFF;
          } else {
            b[4] += b[7] + b[36] + b[25] + b[22] + b[30] + b[42] + 121;
            b[4] &= 0xFF;
          };
          console.log(state, a);
          state = 747622287;
          continue;
        case 843821990:
          if (Math.random() < 0.5) {
            a = 1;
            b[0] ^= (b[12] + b[30] + b[6] + b[17] + b[4] + b[20] + 92) & 0xFF;
          } else {
            b[28] -= b[18] + b[17] + b[40] + b[12] + b[24] + b[2] + 116;
            b[28] &= 0xFF;
          };
          console.log(state, a);
          state = 826598582;
          continue;
        case 846465521:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[25] -= b[16] + b[15] + b[13] + b[24] + b[3] + b[7] + Math.floor(A * 256);
  
            b[25] &= 0xFF;
          } else {
            b[19] ^= (b[8] + b[3] + b[22] + b[30] + b[26] + b[2] + 4) & 0xFF;
          };
          console.log(state, a);
          state = 539175862;
          continue;
        case 847448000:
          if (Math.random() < 0.5) {
            a = 1;
            b[39] ^= (b[13] + b[29] + b[1] + b[3] + b[22] + b[16] + 37) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[19] += b[26] + b[27] + b[29] + b[32] + b[14] + b[21] + Math.floor(A * 256);
  
            b[19] &= 0xFF;
          };
          console.log(state, a);
          state = 1029815228;
          continue;
        case 847930810:
          if (Math.random() < 0.5) {
            a = 1;
            b[15] ^= (b[5] + b[24] + b[22] + b[34] + b[8] + b[25] + 210) & 0xFF;
          } else {
            b[36] += b[19] + b[12] + b[38] + b[14] + b[42] + b[41] + 10;
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 73190189;
          continue;
        case 848118829:
          if (277861827) {
            a = 1;
            b[31] -= b[11] + b[37] + b[3] + b[30] + b[17] + b[8] + 72;
            b[31] &= 0xFF;
          } else {
            b[8] ^= (b[1] + b[12] + b[11] + b[17] + b[37] + b[2] + 55) & 0xFF;
          };
          console.log(state, a);
          state = 550028400;
          continue;
        case 848323846:
          if (353491624) {
            a = 1;
            b[42] += b[20] + b[34] + b[22] + b[16] + b[39] + b[38] + 196;
            b[42] &= 0xFF;
          } else {
            b[34] -= b[28] + b[8] + b[13] + b[16] + b[24] + b[1] + 237;
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 823142988;
          continue;
        case 848669108:
          if (Math.random() < 0.5) {
            a = 1;
            b[20] += b[21] + b[0] + b[32] + b[13] + b[8] + b[11] + 37;
            b[20] &= 0xFF;
          } else {
            b[14] += b[32] + b[1] + b[4] + b[6] + b[16] + b[33] + 70;
            b[14] &= 0xFF;
          };
          console.log(state, a);
          state = 562978730;
          continue;
        case 849052831:
          if (58722981n) {
            a = 1;
            b[32] += b[1] + b[8] + b[21] + b[43] + b[36] + b[30] + 126;
            b[32] &= 0xFF;
          } else {
            b[23] += b[13] + b[24] + b[18] + b[36] + b[34] + b[14] + 232;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 616958451;
          continue;
        case 849670022:
          if (44976030n) {
            a = 1;
            b[18] ^= (b[28] + b[23] + b[35] + b[29] + b[13] + b[24] + 57) & 0xFF;
          } else {
            b[18] ^= (b[8] + b[23] + b[27] + b[30] + b[25] + b[32] + 74) & 0xFF;
          };
          console.log(state, a);
          state = 1014090476;
          continue;
        case 851842599:
          if (Math.random() < 0.5) {
            a = 1;
            b[17] -= b[31] + b[10] + b[41] + b[43] + b[16] + b[11] + 98;
            b[17] &= 0xFF;
          } else {
            b[30] ^= (b[34] + b[4] + b[2] + b[13] + b[12] + b[35] + 110) & 0xFF;
          };
          console.log(state, a);
          state = 641913492;
          continue;
        case 852370076:
          if (51835112n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[6] -= b[27] + b[26] + b[3] + b[13] + b[32] + b[20] + Math.floor(A * 256);
  
            b[6] &= 0xFF;
          } else {
            b[25] += b[13] + b[34] + b[7] + b[39] + b[19] + b[5] + 96;
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 120623554;
          continue;
        case 852933629:
          if (97919922n) {
            a = 1;
            b[42] -= b[0] + b[7] + b[22] + b[14] + b[24] + b[33] + 163;
            b[42] &= 0xFF;
          } else {
            b[43] ^= (b[20] + b[34] + b[21] + b[6] + b[17] + b[16] + 92) & 0xFF;
          };
          console.log(state, a);
          state = 360676433;
          continue;
        case 856154656:
          if (Math.random() < 0.5) {
            a = 1;
            b[33] += b[29] + b[1] + b[18] + b[15] + b[34] + b[2] + 94;
            b[33] &= 0xFF;
          } else {
            b[7] ^= (b[5] + b[40] + b[15] + b[22] + b[1] + b[10] + 209) & 0xFF;
          };
          console.log(state, a);
          state = 173309449;
          continue;
        case 856589568:
          if (138968097) {
            a = 1;
            b[28] ^= (b[30] + b[13] + b[39] + b[2] + b[7] + b[8] + 19) & 0xFF;
          } else {
            b[32] += b[40] + b[41] + b[19] + b[7] + b[36] + b[18] + 29;
            b[32] &= 0xFF;
          };
          console.log(state, a);
          state = 825154919;
          continue;
        case 857076787:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[7] ^= (b[29] + b[41] + b[34] + b[9] + b[32] + b[16] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[31] -= b[35] + b[37] + b[5] + b[42] + b[33] + b[41] + 16;
            b[31] &= 0xFF;
          };
          console.log(state, a);
          state = 552909367;
          continue;
        case 858931501:
          if (88828338n) {
            a = 1;
            b[1] += b[32] + b[28] + b[16] + b[2] + b[29] + b[37] + 132;
            b[1] &= 0xFF;
          } else {
            b[43] ^= (b[31] + b[10] + b[36] + b[24] + b[9] + b[27] + 11) & 0xFF;
          };
          console.log(state, a);
          state = 924359637;
          continue;
        case 860011824:
          if (79631691n) {
            a = 1;
            b[43] ^= (b[9] + b[6] + b[0] + b[20] + b[40] + b[39] + 115) & 0xFF;
          } else {
            b[8] += b[30] + b[19] + b[3] + b[13] + b[35] + b[18] + 222;
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 220262346;
          continue;
        case 860260968:
          if (913529630) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[41] -= b[2] + b[12] + b[28] + b[9] + b[16] + b[26] + Math.floor(A * 256);
  
            b[41] &= 0xFF;
          } else {
            b[8] ^= (b[13] + b[26] + b[10] + b[4] + b[32] + b[21] + 142) & 0xFF;
          };
          console.log(state, a);
          state = 295831432;
          continue;
        case 860441400:
          if (916316270) {
            a = 1;
            b[1] ^= (b[7] + b[40] + b[25] + b[37] + b[30] + b[18] + 215) & 0xFF;
          } else {
            b[39] -= b[40] + b[2] + b[22] + b[25] + b[10] + b[13] + 94;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 450749684;
          continue;
        case 861075392:
          if (28208555n) {
            a = 1;
            b[40] += b[11] + b[28] + b[42] + b[20] + b[27] + b[13] + 142;
            b[40] &= 0xFF;
          } else {
            b[23] += b[29] + b[0] + b[4] + b[18] + b[39] + b[36] + 111;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 44718802;
          continue;
        case 861510777:
          if (46567275n) {
            a = 1;
            b[10] -= b[41] + b[9] + b[25] + b[20] + b[28] + b[27] + 235;
            b[10] &= 0xFF;
          } else {
            b[20] += b[28] + b[15] + b[21] + b[33] + b[14] + b[9] + 201;
            b[20] &= 0xFF;
          };
          console.log(state, a);
          state = 79140047;
          continue;
        case 861726887:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[24] += b[8] + b[33] + b[10] + b[36] + b[18] + b[11] + Math.floor(A * 256);
  
            b[24] &= 0xFF;
          } else {
            b[19] ^= (b[3] + b[6] + b[5] + b[33] + b[32] + b[10] + 194) & 0xFF;
          };
          console.log(state, a);
          state = 100909921;
          continue;
        case 862518440:
          if (Math.random() < 0.5) {
            a = 1;
            b[1] += b[3] + b[28] + b[42] + b[41] + b[27] + b[7] + 98;
            b[1] &= 0xFF;
          } else {
            b[7] -= b[23] + b[4] + b[20] + b[22] + b[0] + b[11] + 113;
            b[7] &= 0xFF;
          };
          console.log(state, a);
          state = 717799117;
          continue;
        case 862632486:
          if (986135796) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[43] ^= (b[13] + b[8] + b[35] + b[18] + b[2] + b[32] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[0] ^= (b[40] + b[36] + b[42] + b[23] + b[17] + b[34] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 1073280106;
          continue;
        case 864991412:
          if (995008496) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[17] += b[15] + b[38] + b[2] + b[35] + b[34] + b[39] + Math.floor(A * 256);
  
            b[17] &= 0xFF;
          } else {
            b[33] += b[16] + b[29] + b[3] + b[37] + b[30] + b[41] + 204;
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 705243277;
          continue;
        case 865663178:
          if (Math.random() < 0.5) {
            a = 1;
            b[39] -= b[0] + b[37] + b[12] + b[4] + b[29] + b[22] + 114;
            b[39] &= 0xFF;
          } else {
            b[18] -= b[10] + b[5] + b[25] + b[35] + b[34] + b[20] + 228;
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 815767968;
          continue;
        case 866514753:
          if (61186797n) {
            a = 1;
            b[42] += b[8] + b[9] + b[31] + b[32] + b[20] + b[17] + 135;
            b[42] &= 0xFF;
          } else {
            b[25] -= b[37] + b[8] + b[39] + b[17] + b[9] + b[43] + 3;
            b[25] &= 0xFF;
          };
          console.log(state, a);
          state = 134900190;
          continue;
        case 867656279:
          if (47870775n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[3] -= b[34] + b[43] + b[8] + b[1] + b[14] + b[30] + Math.floor(A * 256);
  
            b[3] &= 0xFF;
          } else {
            b[19] ^= (b[42] + b[12] + b[25] + b[8] + b[28] + b[11] + 49) & 0xFF;
          };
          console.log(state, a);
          state = 1018641108;
          continue;
        case 872415933:
          if (Math.random() < 0.5) {
            a = 1;
            b[28] -= b[22] + b[23] + b[10] + b[20] + b[11] + b[0] + 191;
            b[28] &= 0xFF;
          } else {
            b[37] += b[16] + b[38] + b[1] + b[19] + b[33] + b[25] + 125;
            b[37] &= 0xFF;
          };
          console.log(state, a);
          state = 291220038;
          continue;
        case 874527885:
          if (85573290n) {
            a = 1;
            b[32] -= b[4] + b[22] + b[25] + b[13] + b[27] + b[1] + 79;
            b[32] &= 0xFF;
          } else {
            b[3] ^= (b[41] + b[28] + b[4] + b[37] + b[14] + b[24] + 235) & 0xFF;
          };
          console.log(state, a);
          state = 626533280;
          continue;
        case 875167420:
          if (Math.random() < 0.5) {
            a = 1;
            b[0] ^= (b[19] + b[25] + b[10] + b[18] + b[13] + b[43] + 141) & 0xFF;
          } else {
            b[21] += b[29] + b[3] + b[17] + b[22] + b[41] + b[18] + 133;
            b[21] &= 0xFF;
          };
          console.log(state, a);
          state = 947679299;
          continue;
        case 875196562:
          if (863169366) {
            a = 1;
            b[34] += b[6] + b[43] + b[35] + b[1] + b[31] + b[28] + 122;
            b[34] &= 0xFF;
          } else {
            b[35] -= b[33] + b[31] + b[40] + b[41] + b[0] + b[32] + 134;
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 206024304;
          continue;
        case 876140638:
          if (Math.random() < 0.5) {
            a = 1;
            b[33] ^= (b[4] + b[39] + b[6] + b[5] + b[1] + b[34] + 129) & 0xFF;
          } else {
            b[3] -= b[8] + b[40] + b[10] + b[39] + b[16] + b[28] + 98;
            b[3] &= 0xFF;
          };
          console.log(state, a);
          state = 908241978;
          continue;
        case 880735562:
          if (864008641) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[5] += b[1] + b[24] + b[18] + b[34] + b[43] + b[8] + Math.floor(A * 256);
  
            b[5] &= 0xFF;
          } else {
            b[24] ^= (b[23] + b[19] + b[1] + b[13] + b[3] + b[2] + 245) & 0xFF;
          };
          console.log(state, a);
          state = 689259308;
          continue;
        case 881121355:
          if (1026376468) {
            a = 1;
            b[35] -= b[24] + b[21] + b[27] + b[16] + b[1] + b[25] + 206;
            b[35] &= 0xFF;
          } else {
            b[42] ^= (b[43] + b[6] + b[18] + b[1] + b[12] + b[23] + 96) & 0xFF;
          };
          console.log(state, a);
          state = 814791371;
          continue;
        case 881412225:
          if (152230884) {
            a = 1;
            b[26] -= b[11] + b[0] + b[4] + b[29] + b[18] + b[10] + 32;
            b[26] &= 0xFF;
          } else {
            b[0] -= b[43] + b[4] + b[5] + b[29] + b[6] + b[24] + 208;
            b[0] &= 0xFF;
          };
          console.log(state, a);
          state = 687219669;
          continue;
        case 881440612:
          if (159908227) {
            a = 1;
            b[3] ^= (b[12] + b[41] + b[34] + b[23] + b[1] + b[36] + 109) & 0xFF;
          } else {
            b[17] -= b[16] + b[19] + b[4] + b[9] + b[36] + b[11] + 80;
            b[17] &= 0xFF;
          };
          console.log(state, a);
          state = 172219356;
          continue;
        case 881848114:
          if (185191464) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[40] -= b[39] + b[30] + b[4] + b[41] + b[38] + b[35] + Math.floor(A * 256);
  
            b[40] &= 0xFF;
          } else {
            b[39] += b[42] + b[37] + b[40] + b[30] + b[3] + b[29] + 55;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 760718050;
          continue;
        case 882184715:
          if (70257542n) {
            a = 1;
            b[14] -= b[35] + b[20] + b[10] + b[4] + b[16] + b[28] + 173;
            b[14] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[18] -= b[30] + b[35] + b[15] + b[41] + b[34] + b[22] + Math.floor(A * 256);
  
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 573249288;
          continue;
        case 882237139:
          if (73870344n) {
            a = 1;
            b[18] -= b[13] + b[0] + b[42] + b[43] + b[12] + b[21] + 130;
            b[18] &= 0xFF;
          } else {
            b[4] ^= (b[41] + b[37] + b[19] + b[0] + b[18] + b[43] + 248) & 0xFF;
          };
          console.log(state, a);
          state = 1035749047;
          continue;
        case 887720569:
          if (955008247) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[11] -= b[42] + b[26] + b[29] + b[30] + b[33] + b[0] + Math.floor(A * 256);
  
            b[11] &= 0xFF;
          } else {
            b[12] ^= (b[5] + b[8] + b[25] + b[3] + b[7] + b[13] + 145) & 0xFF;
          };
          console.log(state, a);
          state = 63390636;
          continue;
        case 888027124:
          if (35518629n) {
            a = 1;
            b[18] -= b[19] + b[6] + b[34] + b[32] + b[20] + b[39] + 211;
            b[18] &= 0xFF;
          } else {
            b[27] -= b[13] + b[31] + b[1] + b[23] + b[43] + b[17] + 248;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 31680780;
          continue;
        case 889551494:
          if (58238441n) {
            a = 1;
            b[21] -= b[23] + b[33] + b[27] + b[28] + b[2] + b[25] + 52;
            b[21] &= 0xFF;
          } else {
            b[1] ^= (b[21] + b[5] + b[27] + b[36] + b[9] + b[23] + 51) & 0xFF;
          };
          console.log(state, a);
          state = 444475662;
          continue;
        case 891821885:
          if (639214279) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[21] ^= (b[27] + b[13] + b[17] + b[34] + b[40] + b[14] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[28] ^= (b[5] + b[19] + b[41] + b[23] + b[34] + b[32] + 227) & 0xFF;
          };
          console.log(state, a);
          state = 994661253;
          continue;
        case 892268737:
          if (497933808) {
            a = 1;
            b[23] += b[16] + b[22] + b[17] + b[37] + b[3] + b[29] + 52;
            b[23] &= 0xFF;
          } else {
            b[5] ^= (b[20] + b[31] + b[40] + b[10] + b[39] + b[16] + 196) & 0xFF;
          };
          console.log(state, a);
          state = 926975771;
          continue;
        case 892829538:
          if (Math.random() < 0.5) {
            a = 1;
            b[1] -= b[0] + b[6] + b[4] + b[30] + b[36] + b[40] + 69;
            b[1] &= 0xFF;
          } else {
            b[13] += b[12] + b[41] + b[29] + b[27] + b[7] + b[5] + 91;
            b[13] &= 0xFF;
          };
          console.log(state, a);
          state = 463297346;
          continue;
        case 895117942:
          if (700243138) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[33] -= b[16] + b[2] + b[43] + b[1] + b[35] + b[34] + Math.floor(A * 256);
  
            b[33] &= 0xFF;
          } else {
            b[13] ^= (b[20] + b[26] + b[37] + b[9] + b[29] + b[16] + 195) & 0xFF;
          };
          console.log(state, a);
          state = 7499478;
          continue;
        case 895572296:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[15] ^= (b[12] + b[27] + b[32] + b[35] + b[40] + b[0] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[24] += b[33] + b[38] + b[21] + b[42] + b[23] + b[17] + 94;
            b[24] &= 0xFF;
          };
          console.log(state, a);
          state = 302957949;
          continue;
        case 897152026:
          if (83052088) {
            a = 1;
            b[29] -= b[30] + b[34] + b[15] + b[42] + b[23] + b[16] + 4;
            b[29] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[8] += b[12] + b[16] + b[14] + b[4] + b[34] + b[23] + Math.floor(A * 256);
  
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 386052172;
          continue;
        case 897254511:
          if (99197999n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[0] -= b[13] + b[33] + b[34] + b[27] + b[21] + b[24] + Math.floor(A * 256);
  
            b[0] &= 0xFF;
          } else {
            b[9] += b[38] + b[29] + b[25] + b[2] + b[32] + b[21] + 73;
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 696295201;
          continue;
        case 897843229:
          if (378121307) {
            a = 1;
            b[30] ^= (b[35] + b[3] + b[20] + b[26] + b[37] + b[32] + 10) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[29] ^= (b[14] + b[1] + b[18] + b[20] + b[17] + b[34] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 662540068;
          continue;
        case 898171258:
          if (Math.random() < 0.5) {
            a = 1;
            b[4] += b[35] + b[24] + b[25] + b[36] + b[29] + b[20] + 234;
            b[4] &= 0xFF;
          } else {
            b[29] -= b[2] + b[18] + b[36] + b[27] + b[0] + b[33] + 254;
            b[29] &= 0xFF;
          };
          console.log(state, a);
          state = 700848921;
          continue;
        case 898191023:
          if (80740723n) {
            a = 1;
            b[33] -= b[16] + b[13] + b[1] + b[29] + b[30] + b[40] + 77;
            b[33] &= 0xFF;
          } else {
            b[43] -= b[21] + b[36] + b[6] + b[27] + b[37] + b[24] + 237;
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 283987884;
          continue;
        case 899494737:
          if (57773420n) {
            a = 1;
            b[30] ^= (b[23] + b[12] + b[3] + b[28] + b[2] + b[18] + 53) & 0xFF;
          } else {
            b[35] += b[38] + b[34] + b[24] + b[28] + b[5] + b[23] + 226;
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 458610491;
          continue;
        case 899930749:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[11] ^= (b[2] + b[21] + b[40] + b[42] + b[43] + b[35] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[26] -= b[38] + b[36] + b[35] + b[24] + b[3] + b[1] + 26;
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 445153744;
          continue;
        case 900576857:
          if (238361334) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[34] += b[42] + b[11] + b[1] + b[19] + b[4] + b[18] + Math.floor(A * 256);
  
            b[34] &= 0xFF;
          } else {
            b[27] ^= (b[31] + b[7] + b[29] + b[33] + b[25] + b[38] + 60) & 0xFF;
          };
          console.log(state, a);
          state = 391179986;
          continue;
        case 900591134:
          if (38067744n) {
            a = 1;
            b[32] ^= (b[0] + b[40] + b[41] + b[24] + b[22] + b[3] + 232) & 0xFF;
          } else {
            b[12] ^= (b[10] + b[15] + b[16] + b[34] + b[27] + b[14] + 89) & 0xFF;
          };
          console.log(state, a);
          state = 881590759;
          continue;
        case 900739574:
          if (16520121n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[32] += b[7] + b[37] + b[29] + b[16] + b[3] + b[25] + Math.floor(A * 256);
  
            b[32] &= 0xFF;
          } else {
            b[14] -= b[18] + b[0] + b[42] + b[4] + b[6] + b[41] + 130;
            b[14] &= 0xFF;
          };
          console.log(state, a);
          state = 733065495;
          continue;
        case 901371023:
          if (222235966) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[12] ^= (b[34] + b[26] + b[5] + b[32] + b[36] + b[8] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[6] -= b[33] + b[11] + b[20] + b[15] + b[1] + b[31] + 62;
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 1056362419;
          continue;
        case 901377278:
          if (Math.random() < 0.5) {
            a = 1;
            b[15] ^= (b[32] + b[26] + b[30] + b[28] + b[40] + b[38] + 179) & 0xFF;
          } else {
            b[9] += b[14] + b[2] + b[38] + b[20] + b[12] + b[35] + 108;
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 404533668;
          continue;
        case 903508757:
          if (788010403) {
            a = 1;
            b[36] -= b[3] + b[31] + b[12] + b[16] + b[24] + b[43] + 185;
            b[36] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[42] ^= (b[14] + b[6] + b[29] + b[16] + b[10] + b[43] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 66245927;
          continue;
        case 906680424:
          if (Math.random() < 0.5) {
            a = 1;
            b[10] += b[13] + b[27] + b[23] + b[38] + b[2] + b[18] + 18;
            b[10] &= 0xFF;
          } else {
            b[1] ^= (b[0] + b[36] + b[39] + b[25] + b[30] + b[28] + 186) & 0xFF;
          };
          console.log(state, a);
          state = 828506322;
          continue;
        case 907717109:
          if (895984808) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[7] ^= (b[23] + b[8] + b[16] + b[39] + b[31] + b[34] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[25] ^= (b[43] + b[5] + b[32] + b[38] + b[35] + b[21] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 556046909;
          continue;
        case 908446718:
          if (26273804n) {
            a = 1;
            b[24] ^= (b[39] + b[38] + b[0] + b[20] + b[5] + b[10] + 158) & 0xFF;
          } else {
            b[1] ^= (b[35] + b[23] + b[37] + b[25] + b[20] + b[32] + 88) & 0xFF;
          };
          console.log(state, a);
          state = 294000735;
          continue;
        case 909404652:
          if (30056150n) {
            a = 1;
            b[27] -= b[43] + b[35] + b[6] + b[22] + b[12] + b[42] + 49;
            b[27] &= 0xFF;
          } else {
            b[22] += b[10] + b[29] + b[24] + b[23] + b[5] + b[12] + 161;
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 408191047;
          continue;
        case 913546258:
          if (Math.random() < 0.5) {
            a = 1;
            b[8] += b[41] + b[25] + b[32] + b[1] + b[15] + b[6] + 182;
            b[8] &= 0xFF;
          } else {
            b[31] ^= (b[16] + b[29] + b[11] + b[7] + b[26] + b[25] + 12) & 0xFF;
          };
          console.log(state, a);
          state = 659809382;
          continue;
        case 914596104:
          if (Math.random() < 0.5) {
            a = 1;
            b[21] ^= (b[5] + b[27] + b[17] + b[2] + b[9] + b[6] + 122) & 0xFF;
          } else {
            b[29] += b[33] + b[35] + b[23] + b[13] + b[15] + b[19] + 105;
            b[29] &= 0xFF;
          };
          console.log(state, a);
          state = 215751625;
          continue;
        case 915580084:
          if (629393213) {
            a = 1;
            b[36] += b[43] + b[21] + b[38] + b[33] + b[20] + b[26] + 170;
            b[36] &= 0xFF;
          } else {
            b[23] ^= (b[27] + b[35] + b[43] + b[19] + b[12] + b[20] + 111) & 0xFF;
          };
          console.log(state, a);
          state = 412101769;
          continue;
        case 915985451:
          if (70134898n) {
            a = 1;
            b[34] -= b[15] + b[29] + b[5] + b[2] + b[39] + b[0] + 153;
            b[34] &= 0xFF;
          } else {
            b[40] ^= (b[7] + b[18] + b[10] + b[8] + b[38] + b[30] + 56) & 0xFF;
          };
          console.log(state, a);
          state = 944009572;
          continue;
        case 916126752:
          if (Math.random() < 0.5) {
            a = 1;
            b[25] ^= (b[26] + b[32] + b[12] + b[27] + b[28] + b[7] + 178) & 0xFF;
          } else {
            b[36] += b[31] + b[15] + b[3] + b[5] + b[6] + b[10] + 179;
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 298541990;
          continue;
        case 916517681:
          if (270906257) {
            a = 1;
            b[11] -= b[28] + b[40] + b[14] + b[37] + b[8] + b[13] + 168;
            b[11] &= 0xFF;
          } else {
            b[6] += b[24] + b[36] + b[43] + b[29] + b[16] + b[10] + 182;
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 71229022;
          continue;
        case 916699096:
          if (76348309n) {
            a = 1;
            b[38] ^= (b[29] + b[9] + b[15] + b[33] + b[32] + b[3] + 187) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[27] ^= (b[30] + b[19] + b[18] + b[23] + b[11] + b[25] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 705074829;
          continue;
        case 917008021:
          if (311158600) {
            a = 1;
            b[19] -= b[21] + b[10] + b[37] + b[40] + b[23] + b[27] + 116;
            b[19] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[35] ^= (b[1] + b[29] + b[25] + b[5] + b[16] + b[10] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 386755595;
          continue;
        case 922049847:
          if (Math.random() < 0.5) {
            a = 1;
            b[38] -= b[26] + b[22] + b[3] + b[43] + b[33] + b[13] + 10;
            b[38] &= 0xFF;
          } else {
            b[13] ^= (b[0] + b[29] + b[26] + b[14] + b[15] + b[7] + 31) & 0xFF;
          };
          console.log(state, a);
          state = 995642932;
          continue;
        case 922670184:
          if (64596098) {
            a = 1;
            b[37] ^= (b[20] + b[32] + b[18] + b[28] + b[7] + b[25] + 2) & 0xFF;
          } else {
            b[34] += b[33] + b[2] + b[32] + b[6] + b[3] + b[21] + 216;
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 3058241;
          continue;
        case 923850245:
          if (72387310n) {
            a = 1;
            b[32] += b[1] + b[2] + b[18] + b[43] + b[27] + b[29] + 127;
            b[32] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[26] ^= (b[19] + b[37] + b[12] + b[22] + b[43] + b[25] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 873425347;
          continue;
        case 923876614:
          if (29192855n) {
            a = 1;
            b[39] ^= (b[9] + b[24] + b[40] + b[42] + b[8] + b[38] + 252) & 0xFF;
          } else {
            b[39] ^= (b[38] + b[37] + b[22] + b[32] + b[26] + b[9] + 229) & 0xFF;
          };
          console.log(state, a);
          state = 858216126;
          continue;
        case 925520064:
          if (Math.random() < 0.5) {
            a = 1;
            b[10] -= b[6] + b[4] + b[5] + b[14] + b[25] + b[9] + 78;
            b[10] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[36] += b[6] + b[21] + b[18] + b[31] + b[15] + b[7] + Math.floor(A * 256);
  
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 212640615;
          continue;
        case 926634219:
          if (Math.random() < 0.5) {
            a = 1;
            b[7] -= b[42] + b[12] + b[1] + b[9] + b[36] + b[18] + 84;
            b[7] &= 0xFF;
          } else {
            b[32] += b[38] + b[20] + b[26] + b[35] + b[24] + b[14] + 217;
            b[32] &= 0xFF;
          };
          console.log(state, a);
          state = 896030833;
          continue;
        case 927296609:
          if (70785154) {
            a = 1;
            b[15] -= b[11] + b[31] + b[41] + b[21] + b[8] + b[5] + 247;
            b[15] &= 0xFF;
          } else {
            b[7] += b[29] + b[38] + b[39] + b[26] + b[23] + b[36] + 86;
            b[7] &= 0xFF;
          };
          console.log(state, a);
          state = 427618707;
          continue;
        case 927672194:
          if (Math.random() < 0.5) {
            a = 1;
            b[18] -= b[11] + b[27] + b[32] + b[8] + b[37] + b[4] + 51;
            b[18] &= 0xFF;
          } else {
            b[1] ^= (b[21] + b[2] + b[4] + b[35] + b[36] + b[40] + 66) & 0xFF;
          };
          console.log(state, a);
          state = 294875064;
          continue;
        case 929229353:
          if (Math.random() < 0.5) {
            a = 1;
            b[37] += b[18] + b[29] + b[11] + b[28] + b[13] + b[3] + 248;
            b[37] &= 0xFF;
          } else {
            b[39] += b[29] + b[18] + b[31] + b[23] + b[21] + b[0] + 45;
            b[39] &= 0xFF;
          };
          console.log(state, a);
          state = 775086306;
          continue;
        case 930229865:
          if (187629038) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[21] -= b[12] + b[42] + b[26] + b[13] + b[27] + b[3] + Math.floor(A * 256);
  
            b[21] &= 0xFF;
          } else {
            b[19] += b[9] + b[41] + b[42] + b[31] + b[32] + b[15] + 14;
            b[19] &= 0xFF;
          };
          console.log(state, a);
          state = 885910004;
          continue;
        case 931486041:
          if (141053168) {
            a = 1;
            b[20] -= b[31] + b[40] + b[8] + b[37] + b[29] + b[18] + 133;
            b[20] &= 0xFF;
          } else {
            b[38] ^= (b[6] + b[42] + b[15] + b[31] + b[36] + b[7] + 155) & 0xFF;
          };
          console.log(state, a);
          state = 341906838;
          continue;
        case 932044333:
          if (14067390n) {
            a = 1;
            b[12] -= b[30] + b[29] + b[10] + b[25] + b[33] + b[23] + 180;
            b[12] &= 0xFF;
          } else {
            b[14] ^= (b[34] + b[41] + b[13] + b[28] + b[1] + b[21] + 163) & 0xFF;
          };
          console.log(state, a);
          state = 739154907;
          continue;
        case 932811414:
          if (551698634) {
            a = 1;
            b[29] -= b[42] + b[25] + b[34] + b[35] + b[3] + b[22] + 89;
            b[29] &= 0xFF;
          } else {
            b[20] += b[30] + b[8] + b[11] + b[34] + b[21] + b[0] + 118;
            b[20] &= 0xFF;
          };
          console.log(state, a);
          state = 325335257;
          continue;
        case 933425415:
          if (62291502n) {
            a = 1;
            b[30] ^= (b[27] + b[40] + b[17] + b[43] + b[16] + b[6] + 73) & 0xFF;
          } else {
            b[26] -= b[21] + b[12] + b[19] + b[40] + b[5] + b[25] + 19;
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 789581177;
          continue;
        case 933907593:
          if (54935273) {
            a = 1;
            b[13] += b[17] + b[8] + b[7] + b[42] + b[3] + b[32] + 189;
            b[13] &= 0xFF;
          } else {
            b[18] ^= (b[41] + b[15] + b[32] + b[16] + b[26] + b[23] + 205) & 0xFF;
          };
          console.log(state, a);
          state = 706840833;
          continue;
        case 934739973:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[20] += b[7] + b[37] + b[5] + b[0] + b[34] + b[17] + Math.floor(A * 256);
  
            b[20] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[35] -= b[25] + b[23] + b[41] + b[26] + b[0] + b[20] + Math.floor(A * 256);
  
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 1064137877;
          continue;
        case 934870917:
          if (12180354n) {
            a = 1;
            b[14] -= b[28] + b[12] + b[36] + b[39] + b[37] + b[40] + 87;
            b[14] &= 0xFF;
          } else {
            b[23] ^= (b[25] + b[32] + b[30] + b[16] + b[1] + b[43] + 75) & 0xFF;
          };
          console.log(state, a);
          state = 306905017;
          continue;
        case 934956011:
          if (812385208) {
            a = 1;
            b[39] -= b[30] + b[19] + b[18] + b[2] + b[22] + b[25] + 181;
            b[39] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[19] -= b[38] + b[31] + b[9] + b[35] + b[29] + b[39] + Math.floor(A * 256);
  
            b[19] &= 0xFF;
          };
          console.log(state, a);
          state = 296633824;
          continue;
        case 935030589:
          if (750736072) {
            a = 1;
            b[24] ^= (b[13] + b[25] + b[8] + b[17] + b[12] + b[30] + 163) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[10] += b[15] + b[21] + b[0] + b[42] + b[31] + b[9] + Math.floor(A * 256);
  
            b[10] &= 0xFF;
          };
          console.log(state, a);
          state = 894072943;
          continue;
        case 936214335:
          if (92001583n) {
            a = 1;
            b[28] ^= (b[0] + b[6] + b[22] + b[7] + b[39] + b[2] + 151) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[24] ^= (b[29] + b[1] + b[2] + b[21] + b[31] + b[9] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 865297185;
          continue;
        case 938822551:
          if (46888413n) {
            a = 1;
            b[14] += b[43] + b[6] + b[0] + b[26] + b[2] + b[20] + 116;
            b[14] &= 0xFF;
          } else {
            b[4] += b[34] + b[7] + b[2] + b[39] + b[5] + b[43] + 139;
            b[4] &= 0xFF;
          };
          console.log(state, a);
          state = 583795792;
          continue;
        case 940416943:
          if (63696991n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[12] ^= (b[7] + b[28] + b[36] + b[42] + b[17] + b[13] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[8] += b[3] + b[20] + b[16] + b[17] + b[22] + b[24] + 15;
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 427183539;
          continue;
        case 940887364:
          if (981305315) {
            a = 1;
            b[29] ^= (b[22] + b[16] + b[4] + b[33] + b[20] + b[9] + 204) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[24] -= b[37] + b[42] + b[7] + b[5] + b[22] + b[11] + Math.floor(A * 256);
  
            b[24] &= 0xFF;
          };
          console.log(state, a);
          state = 202412843;
          continue;
        case 942994641:
          if (53464414n) {
            a = 1;
            b[11] -= b[22] + b[29] + b[38] + b[40] + b[1] + b[0] + 171;
            b[11] &= 0xFF;
          } else {
            b[31] -= b[19] + b[4] + b[43] + b[41] + b[36] + b[7] + 105;
            b[31] &= 0xFF;
          };
          console.log(state, a);
          state = 368791401;
          continue;
        case 943408141:
          if (813203056) {
            a = 1;
            b[37] -= b[18] + b[2] + b[8] + b[35] + b[15] + b[34] + 173;
            b[37] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[0] ^= (b[11] + b[37] + b[33] + b[36] + b[38] + b[3] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 1071572916;
          continue;
        case 943451716:
          if (62464654n) {
            a = 1;
            b[31] -= b[35] + b[39] + b[27] + b[41] + b[7] + b[42] + 225;
            b[31] &= 0xFF;
          } else {
            b[4] += b[8] + b[13] + b[3] + b[34] + b[22] + b[14] + 246;
            b[4] &= 0xFF;
          };
          console.log(state, a);
          state = 552719392;
          continue;
        case 944233129:
          if (305302826) {
            a = 1;
            b[38] ^= (b[20] + b[8] + b[31] + b[30] + b[14] + b[32] + 168) & 0xFF;
          } else {
            b[12] += b[7] + b[31] + b[37] + b[14] + b[29] + b[9] + 180;
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 424126643;
          continue;
        case 946927507:
          if (575865303) {
            a = 1;
            b[23] += b[13] + b[15] + b[29] + b[20] + b[3] + b[10] + 241;
            b[23] &= 0xFF;
          } else {
            b[2] -= b[10] + b[36] + b[13] + b[22] + b[27] + b[14] + 61;
            b[2] &= 0xFF;
          };
          console.log(state, a);
          state = 249324802;
          continue;
        case 947199551:
          if (61082285n) {
            a = 1;
            b[1] ^= (b[22] + b[43] + b[37] + b[11] + b[27] + b[15] + 99) & 0xFF;
          } else {
            b[0] += b[10] + b[3] + b[19] + b[5] + b[31] + b[2] + 135;
            b[0] &= 0xFF;
          };
          console.log(state, a);
          state = 422022133;
          continue;
        case 950500871:
          if (72963199n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[25] += b[33] + b[17] + b[37] + b[34] + b[43] + b[40] + Math.floor(A * 256);
  
            b[25] &= 0xFF;
          } else {
            b[32] ^= (b[4] + b[14] + b[43] + b[42] + b[9] + b[27] + 187) & 0xFF;
          };
          console.log(state, a);
          state = 672902766;
          continue;
        case 951171326:
          if (69325676n) {
            a = 1;
            b[30] += b[38] + b[4] + b[34] + b[33] + b[22] + b[43] + 49;
            b[30] &= 0xFF;
          } else {
            b[19] -= b[36] + b[41] + b[40] + b[24] + b[33] + b[10] + 138;
            b[19] &= 0xFF;
          };
          console.log(state, a);
          state = 825357574;
          continue;
        case 953701085:
          if (Math.random() < 0.5) {
            a = 1;
            b[40] ^= (b[39] + b[17] + b[41] + b[35] + b[9] + b[19] + 221) & 0xFF;
          } else {
            b[22] ^= (b[0] + b[36] + b[28] + b[14] + b[4] + b[18] + 25) & 0xFF;
          };
          console.log(state, a);
          state = 172654831;
          continue;
        case 956147074:
          if (12485691n) {
            a = 1;
            b[17] += b[25] + b[23] + b[12] + b[43] + b[39] + b[19] + 16;
            b[17] &= 0xFF;
          } else {
            b[22] ^= (b[17] + b[0] + b[40] + b[34] + b[4] + b[5] + 36) & 0xFF;
          };
          console.log(state, a);
          state = 131998784;
          continue;
        case 957436102:
          if (Math.random() < 0.5) {
            a = 1;
            b[29] -= b[0] + b[41] + b[34] + b[24] + b[17] + b[3] + 7;
            b[29] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[28] ^= (b[1] + b[23] + b[37] + b[31] + b[43] + b[42] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 10023459;
          continue;
        case 958174320:
          if (324755369) {
            a = 1;
            b[27] -= b[35] + b[3] + b[17] + b[34] + b[7] + b[31] + 72;
            b[27] &= 0xFF;
          } else {
            b[22] += b[3] + b[21] + b[6] + b[18] + b[43] + b[0] + 13;
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 237862146;
          continue;
        case 959452706:
          if (513885887) {
            a = 1;
            b[21] ^= (b[11] + b[29] + b[30] + b[7] + b[20] + b[16] + 230) & 0xFF;
          } else {
            b[16] += b[5] + b[21] + b[39] + b[25] + b[43] + b[8] + 100;
            b[16] &= 0xFF;
          };
          console.log(state, a);
          state = 323232511;
          continue;
        case 959614683:
          if (93578063n) {
            a = 1;
            b[39] ^= (b[30] + b[13] + b[42] + b[17] + b[37] + b[1] + 213) & 0xFF;
          } else {
            b[23] ^= (b[5] + b[10] + b[31] + b[36] + b[42] + b[30] + 84) & 0xFF;
          };
          console.log(state, a);
          state = 329532238;
          continue;
        case 960357655:
          if (32760615) {
            a = 1;
            b[36] += b[32] + b[6] + b[9] + b[42] + b[38] + b[25] + 193;
            b[36] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[15] ^= (b[20] + b[3] + b[36] + b[7] + b[9] + b[39] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 653166564;
          continue;
        case 960991331:
          if (95628851n) {
            a = 1;
            b[3] ^= (b[0] + b[38] + b[29] + b[1] + b[11] + b[16] + 57) & 0xFF;
          } else {
            b[38] += b[10] + b[18] + b[39] + b[0] + b[35] + b[37] + 69;
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 1019638033;
          continue;
        case 961374201:
          if (56599935n) {
            a = 1;
            b[10] -= b[33] + b[17] + b[36] + b[30] + b[24] + b[40] + 23;
            b[10] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[21] -= b[20] + b[13] + b[41] + b[1] + b[7] + b[33] + Math.floor(A * 256);
  
            b[21] &= 0xFF;
          };
          console.log(state, a);
          state = 828519420;
          continue;
        case 961924244:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[6] += b[34] + b[1] + b[29] + b[26] + b[39] + b[22] + Math.floor(A * 256);
  
            b[6] &= 0xFF;
          } else {
            b[23] += b[15] + b[32] + b[35] + b[0] + b[8] + b[22] + 146;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 927770297;
          continue;
        case 962077432:
          if (378371632) {
            a = 1;
            b[16] -= b[5] + b[0] + b[31] + b[4] + b[38] + b[33] + 60;
            b[16] &= 0xFF;
          } else {
            b[14] ^= (b[41] + b[5] + b[40] + b[33] + b[35] + b[10] + 94) & 0xFF;
          };
          console.log(state, a);
          state = 174373421;
          continue;
        case 963449270:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[14] += b[40] + b[33] + b[29] + b[36] + b[20] + b[42] + Math.floor(A * 256);
  
            b[14] &= 0xFF;
          } else {
            b[30] -= b[35] + b[40] + b[33] + b[4] + b[18] + b[29] + 149;
            b[30] &= 0xFF;
          };
          console.log(state, a);
          state = 384192227;
          continue;
        case 965140015:
          if (Math.random() < 0.5) {
            a = 1;
            b[34] -= b[19] + b[30] + b[10] + b[18] + b[11] + b[15] + 126;
            b[34] &= 0xFF;
          } else {
            b[12] += b[23] + b[43] + b[17] + b[19] + b[3] + b[30] + 82;
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 1027772866;
          continue;
        case 965766581:
          if (Math.random() < 0.5) {
            a = 1;
            b[14] += b[24] + b[26] + b[11] + b[19] + b[6] + b[17] + 150;
            b[14] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[35] -= b[32] + b[36] + b[9] + b[17] + b[37] + b[26] + Math.floor(A * 256);
  
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 408850718;
          continue;
        case 967654317:
          if (580972453) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[21] -= b[25] + b[31] + b[39] + b[24] + b[17] + b[18] + Math.floor(A * 256);
  
            b[21] &= 0xFF;
          } else {
            b[26] -= b[31] + b[22] + b[40] + b[23] + b[4] + b[25] + 15;
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 490898484;
          continue;
        case 968134268:
          if (90448955n) {
            a = 1;
            b[37] -= b[30] + b[21] + b[35] + b[13] + b[19] + b[26] + 208;
            b[37] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[20] ^= (b[0] + b[17] + b[24] + b[37] + b[2] + b[6] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 163298870;
          continue;
        case 968337128:
          if (12970189) {
            a = 1;
            b[26] -= b[13] + b[3] + b[18] + b[40] + b[10] + b[8] + 191;
            b[26] &= 0xFF;
          } else {
            b[31] -= b[29] + b[17] + b[0] + b[13] + b[5] + b[40] + 136;
            b[31] &= 0xFF;
          };
          console.log(state, a);
          state = 538008977;
          continue;
        case 969714121:
          if (Math.random() < 0.5) {
            a = 1;
            b[6] ^= (b[16] + b[2] + b[25] + b[1] + b[28] + b[3] + 185) & 0xFF;
          } else {
            b[2] -= b[21] + b[30] + b[16] + b[41] + b[10] + b[11] + 235;
            b[2] &= 0xFF;
          };
          console.log(state, a);
          state = 998411271;
          continue;
        case 970962237:
          if (343016624) {
            a = 1;
            b[0] -= b[2] + b[35] + b[21] + b[37] + b[31] + b[24] + 159;
            b[0] &= 0xFF;
          } else {
            b[22] += b[16] + b[36] + b[10] + b[41] + b[11] + b[15] + 18;
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 915555692;
          continue;
        case 971183007:
          if (Math.random() < 0.5) {
            a = 1;
            b[25] ^= (b[29] + b[41] + b[32] + b[27] + b[3] + b[33] + 34) & 0xFF;
          } else {
            b[30] ^= (b[14] + b[35] + b[34] + b[9] + b[36] + b[10] + 118) & 0xFF;
          };
          console.log(state, a);
          state = 633388402;
          continue;
        case 971907876:
          if (572913008) {
            a = 1;
            b[35] += b[30] + b[4] + b[20] + b[15] + b[32] + b[40] + 214;
            b[35] &= 0xFF;
          } else {
            b[20] ^= (b[28] + b[7] + b[15] + b[3] + b[12] + b[19] + 246) & 0xFF;
          };
          console.log(state, a);
          state = 426931476;
          continue;
        case 972033212:
          if (51692245n) {
            a = 1;
            b[25] -= b[14] + b[9] + b[24] + b[7] + b[26] + b[18] + 92;
            b[25] &= 0xFF;
          } else {
            b[23] ^= (b[11] + b[32] + b[35] + b[5] + b[10] + b[18] + 150) & 0xFF;
          };
          console.log(state, a);
          state = 515834590;
          continue;
        case 972593536:
          if (19020555n) {
            a = 1;
            b[22] += b[41] + b[28] + b[25] + b[26] + b[0] + b[23] + 162;
            b[22] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[4] += b[30] + b[14] + b[36] + b[32] + b[20] + b[0] + Math.floor(A * 256);
  
            b[4] &= 0xFF;
          };
          console.log(state, a);
          state = 172583856;
          continue;
        case 975388468:
          if (128832933) {
            a = 1;
            b[41] += b[33] + b[26] + b[37] + b[7] + b[22] + b[18] + 4;
            b[41] &= 0xFF;
          } else {
            b[15] ^= (b[42] + b[21] + b[12] + b[34] + b[26] + b[22] + 30) & 0xFF;
          };
          console.log(state, a);
          state = 162438337;
          continue;
        case 975988778:
          if (259368239) {
            a = 1;
            b[20] += b[27] + b[22] + b[25] + b[17] + b[10] + b[14] + 34;
            b[20] &= 0xFF;
          } else {
            b[26] += b[16] + b[38] + b[12] + b[25] + b[24] + b[0] + 68;
            b[26] &= 0xFF;
          };
          console.log(state, a);
          state = 13899054;
          continue;
        case 976014478:
          if (619391634) {
            a = 1;
            b[26] ^= (b[18] + b[40] + b[16] + b[15] + b[30] + b[33] + 25) & 0xFF;
          } else {
            b[34] += b[1] + b[43] + b[3] + b[41] + b[38] + b[31] + 168;
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 1016166149;
          continue;
        case 976505001:
          if (62600601n) {
            a = 1;
            b[16] += b[20] + b[35] + b[30] + b[1] + b[8] + b[37] + 181;
            b[16] &= 0xFF;
          } else {
            b[41] -= b[20] + b[0] + b[33] + b[17] + b[30] + b[32] + 1;
            b[41] &= 0xFF;
          };
          console.log(state, a);
          state = 329325674;
          continue;
        case 977373188:
          if (52740692n) {
            a = 1;
            b[14] -= b[7] + b[16] + b[5] + b[26] + b[21] + b[28] + 65;
            b[14] &= 0xFF;
          } else {
            b[18] ^= (b[9] + b[8] + b[20] + b[42] + b[12] + b[15] + 32) & 0xFF;
          };
          console.log(state, a);
          state = 553125374;
          continue;
        case 979486492:
          if (45112725n) {
            a = 1;
            b[27] ^= (b[34] + b[10] + b[36] + b[22] + b[25] + b[31] + 175) & 0xFF;
          } else {
            b[43] += b[29] + b[35] + b[36] + b[2] + b[33] + b[28] + 236;
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 731637595;
          continue;
        case 980186436:
          if (66114638n) {
            a = 1;
            b[20] ^= (b[32] + b[30] + b[16] + b[34] + b[29] + b[8] + 22) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[9] -= b[10] + b[18] + b[25] + b[31] + b[7] + b[40] + Math.floor(A * 256);
  
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 1021362401;
          continue;
        case 980801854:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[41] ^= (b[28] + b[7] + b[11] + b[8] + b[20] + b[9] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[17] ^= (b[28] + b[14] + b[16] + b[31] + b[41] + b[43] + 36) & 0xFF;
          };
          console.log(state, a);
          state = 1067845410;
          continue;
        case 981432595:
          if (24002080n) {
            a = 1;
            b[41] -= b[17] + b[20] + b[19] + b[38] + b[18] + b[29] + 30;
            b[41] &= 0xFF;
          } else {
            b[23] += b[18] + b[17] + b[2] + b[6] + b[13] + b[41] + 46;
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 494370317;
          continue;
        case 981450373:
          if (Math.random() < 0.5) {
            a = 1;
            b[13] += b[25] + b[35] + b[16] + b[39] + b[23] + b[28] + 2;
            b[13] &= 0xFF;
          } else {
            b[22] += b[37] + b[10] + b[38] + b[39] + b[40] + b[23] + 205;
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 223621298;
          continue;
        case 982330101:
          if (848284052) {
            a = 1;
            b[13] ^= (b[25] + b[30] + b[29] + b[17] + b[9] + b[11] + 85) & 0xFF;
          } else {
            b[0] -= b[43] + b[42] + b[30] + b[40] + b[11] + b[29] + 98;
            b[0] &= 0xFF;
          };
          console.log(state, a);
          state = 685117268;
          continue;
        case 982360340:
          if (383767699) {
            a = 1;
            b[37] -= b[12] + b[9] + b[40] + b[18] + b[35] + b[38] + 50;
            b[37] &= 0xFF;
          } else {
            b[17] ^= (b[10] + b[0] + b[43] + b[36] + b[26] + b[33] + 175) & 0xFF;
          };
          console.log(state, a);
          state = 898507949;
          continue;
        case 983134450:
          if (Math.random() < 0.5) {
            a = 1;
            b[8] -= b[7] + b[23] + b[20] + b[13] + b[1] + b[36] + 64;
            b[8] &= 0xFF;
          } else {
            b[21] ^= (b[9] + b[5] + b[38] + b[14] + b[43] + b[7] + 217) & 0xFF;
          };
          console.log(state, a);
          state = 292002073;
          continue;
        case 984240743:
          if (8246483) {
            a = 1;
            b[20] -= b[27] + b[36] + b[23] + b[19] + b[31] + b[32] + 210;
            b[20] &= 0xFF;
          } else {
            b[34] ^= (b[30] + b[6] + b[13] + b[35] + b[3] + b[26] + 241) & 0xFF;
          };
          console.log(state, a);
          state = 356704383;
          continue;
        case 984396248:
          if (Math.random() < 0.5) {
            a = 1;
            b[23] ^= (b[39] + b[33] + b[27] + b[43] + b[12] + b[2] + 78) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[15] -= b[21] + b[27] + b[36] + b[40] + b[37] + b[20] + Math.floor(A * 256);
  
            b[15] &= 0xFF;
          };
          console.log(state, a);
          state = 958145418;
          continue;
        case 984960420:
          if (Math.random() < 0.5) {
            a = 1;
            b[28] ^= (b[41] + b[20] + b[12] + b[22] + b[11] + b[38] + 171) & 0xFF;
          } else {
            b[1] -= b[12] + b[17] + b[2] + b[36] + b[4] + b[35] + 13;
            b[1] &= 0xFF;
          };
          console.log(state, a);
          state = 252555670;
          continue;
        case 986654093:
          if (740095820) {
            a = 1;
            b[33] += b[23] + b[43] + b[14] + b[19] + b[38] + b[17] + 227;
            b[33] &= 0xFF;
          } else {
            b[11] ^= (b[25] + b[10] + b[9] + b[2] + b[8] + b[26] + 44) & 0xFF;
          };
          console.log(state, a);
          state = 389482423;
          continue;
        case 987159526:
          if (67930109n) {
            a = 1;
            b[20] -= b[40] + b[10] + b[19] + b[24] + b[0] + b[11] + 147;
            b[20] &= 0xFF;
          } else {
            b[40] += b[42] + b[0] + b[6] + b[31] + b[33] + b[30] + 0;
            b[40] &= 0xFF;
          };
          console.log(state, a);
          state = 462226532;
          continue;
        case 987447585:
          if (31410266n) {
            a = 1;
            b[38] += b[2] + b[5] + b[24] + b[8] + b[11] + b[20] + 115;
            b[38] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[24] -= b[5] + b[29] + b[33] + b[1] + b[0] + b[6] + Math.floor(A * 256);
  
            b[24] &= 0xFF;
          };
          console.log(state, a);
          state = 346635123;
          continue;
        case 992775814:
          if (186069466) {
            a = 1;
            b[30] ^= (b[5] + b[36] + b[1] + b[19] + b[25] + b[27] + 7) & 0xFF;
          } else {
            b[37] += b[30] + b[10] + b[11] + b[2] + b[34] + b[41] + 206;
            b[37] &= 0xFF;
          };
          console.log(state, a);
          state = 904444081;
          continue;
        case 996305121:
          if (995188177) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[38] += b[18] + b[4] + b[27] + b[25] + b[14] + b[40] + Math.floor(A * 256);
  
            b[38] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[11] -= b[24] + b[9] + b[13] + b[33] + b[39] + b[22] + Math.floor(A * 256);
  
            b[11] &= 0xFF;
          };
          console.log(state, a);
          state = 64857213;
          continue;
        case 996361116:
          if (Math.random() < 0.5) {
            a = 1;
            b[2] -= b[16] + b[37] + b[40] + b[27] + b[14] + b[4] + 110;
            b[2] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[40] -= b[22] + b[0] + b[28] + b[17] + b[31] + b[11] + Math.floor(A * 256);
  
            b[40] &= 0xFF;
          };
          console.log(state, a);
          state = 269458850;
          continue;
        case 998309844:
          if (253411493) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[23] -= b[2] + b[1] + b[25] + b[31] + b[10] + b[41] + Math.floor(A * 256);
  
            b[23] &= 0xFF;
          } else {
            b[5] -= b[28] + b[39] + b[25] + b[43] + b[15] + b[7] + 203;
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 653106531;
          continue;
        case 998903508:
          if (Math.random() < 0.5) {
            a = 1;
            b[19] += b[6] + b[14] + b[35] + b[39] + b[21] + b[42] + 253;
            b[19] &= 0xFF;
          } else {
            b[19] += b[33] + b[34] + b[38] + b[2] + b[14] + b[22] + 92;
            b[19] &= 0xFF;
          };
          console.log(state, a);
          state = 562578026;
          continue;
        case 999324458:
          if (112278826) {
            a = 1;
            b[33] -= b[0] + b[36] + b[23] + b[34] + b[37] + b[29] + 253;
            b[33] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[7] -= b[30] + b[35] + b[16] + b[23] + b[40] + b[22] + Math.floor(A * 256);
  
            b[7] &= 0xFF;
          };
          console.log(state, a);
          state = 770651828;
          continue;
        case 1001050053:
          if (15391122n) {
            a = 1;
            b[2] += b[6] + b[23] + b[22] + b[31] + b[26] + b[37] + 120;
            b[2] &= 0xFF;
          } else {
            b[3] ^= (b[28] + b[41] + b[27] + b[1] + b[15] + b[26] + 116) & 0xFF;
          };
          console.log(state, a);
          state = 522159053;
          continue;
        case 1002376488:
          if (Math.random() < 0.5) {
            a = 1;
            b[4] -= b[10] + b[21] + b[40] + b[19] + b[38] + b[14] + 129;
            b[4] &= 0xFF;
          } else {
            b[4] ^= (b[22] + b[25] + b[28] + b[6] + b[7] + b[24] + 23) & 0xFF;
          };
          console.log(state, a);
          state = 245087473;
          continue;
        case 1003847695:
          if (388975924) {
            a = 1;
            b[36] ^= (b[28] + b[5] + b[23] + b[4] + b[15] + b[31] + 216) & 0xFF;
          } else {
            b[24] -= b[34] + b[12] + b[14] + b[41] + b[21] + b[11] + 223;
            b[24] &= 0xFF;
          };
          console.log(state, a);
          state = 101627354;
          continue;
        case 1004734575:
          if (26382457n) {
            a = 1;
            b[32] += b[18] + b[14] + b[23] + b[35] + b[42] + b[39] + 145;
            b[32] &= 0xFF;
          } else {
            b[27] -= b[41] + b[26] + b[11] + b[22] + b[17] + b[16] + 244;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 797717963;
          continue;
        case 1006187624:
          if (Math.random() < 0.5) {
            a = 1;
            b[30] ^= (b[18] + b[9] + b[37] + b[25] + b[32] + b[35] + 0) & 0xFF;
          } else {
            b[27] += b[8] + b[11] + b[32] + b[3] + b[24] + b[16] + 126;
            b[27] &= 0xFF;
          };
          console.log(state, a);
          state = 502464297;
          continue;
        case 1006204370:
          if (250293893) {
            a = 1;
            b[20] += b[18] + b[5] + b[17] + b[4] + b[1] + b[24] + 207;
            b[20] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[40] -= b[21] + b[3] + b[14] + b[13] + b[20] + b[5] + Math.floor(A * 256);
  
            b[40] &= 0xFF;
          };
          console.log(state, a);
          state = 639983618;
          continue;
        case 1007745471:
          if (758792626) {
            a = 1;
            b[14] ^= (b[17] + b[18] + b[13] + b[29] + b[35] + b[38] + 26) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[35] -= b[4] + b[29] + b[25] + b[9] + b[6] + b[3] + Math.floor(A * 256);
  
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 754946132;
          continue;
        case 1007784734:
          if (349045045) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[11] += b[27] + b[31] + b[2] + b[7] + b[43] + b[38] + Math.floor(A * 256);
  
            b[11] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[29] ^= (b[24] + b[9] + b[33] + b[36] + b[28] + b[17] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 37958807;
          continue;
        case 1009568819:
          if (163685368) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[41] ^= (b[4] + b[1] + b[25] + b[16] + b[10] + b[33] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[19] ^= (b[26] + b[28] + b[24] + b[20] + b[29] + b[30] + 198) & 0xFF;
          };
          console.log(state, a);
          state = 490009395;
          continue;
        case 1009817857:
          if (18234293n) {
            a = 1;
            b[22] += b[29] + b[0] + b[8] + b[43] + b[38] + b[10] + 149;
            b[22] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[40] += b[1] + b[9] + b[18] + b[17] + b[33] + b[39] + Math.floor(A * 256);
  
            b[40] &= 0xFF;
          };
          console.log(state, a);
          state = 916573862;
          continue;
        case 1010317137:
          if (10319998n) {
            a = 1;
            b[3] -= b[38] + b[37] + b[22] + b[10] + b[8] + b[25] + 181;
            b[3] &= 0xFF;
          } else {
            b[7] ^= (b[31] + b[28] + b[17] + b[14] + b[30] + b[41] + 64) & 0xFF;
          };
          console.log(state, a);
          state = 682318978;
          continue;
        case 1010356043:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[42] += b[4] + b[5] + b[35] + b[12] + b[22] + b[19] + Math.floor(A * 256);
  
            b[42] &= 0xFF;
          } else {
            b[29] -= b[37] + b[23] + b[22] + b[24] + b[26] + b[10] + 7;
            b[29] &= 0xFF;
          };
          console.log(state, a);
          state = 1031173583;
          continue;
        case 1012665353:
          if (270968034) {
            a = 1;
            b[30] += b[15] + b[3] + b[32] + b[33] + b[39] + b[17] + 62;
            b[30] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[1] += b[4] + b[25] + b[41] + b[21] + b[22] + b[10] + Math.floor(A * 256);
  
            b[1] &= 0xFF;
          };
          console.log(state, a);
          state = 567106632;
          continue;
        case 1013605951:
          if (Math.random() < 0.5) {
            a = 1;
            b[26] -= b[34] + b[12] + b[28] + b[15] + b[23] + b[0] + 52;
            b[26] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[23] -= b[30] + b[36] + b[5] + b[7] + b[22] + b[39] + Math.floor(A * 256);
  
            b[23] &= 0xFF;
          };
          console.log(state, a);
          state = 1014671117;
          continue;
        case 1014985015:
          if (955930035) {
            a = 1;
            b[7] ^= (b[35] + b[18] + b[5] + b[42] + b[43] + b[6] + 247) & 0xFF;
          } else {
            b[3] += b[6] + b[26] + b[32] + b[22] + b[39] + b[25] + 119;
            b[3] &= 0xFF;
          };
          console.log(state, a);
          state = 898056003;
          continue;
        case 1017668994:
          if (899322950) {
            a = 1;
            b[28] ^= (b[21] + b[24] + b[4] + b[11] + b[26] + b[36] + 94) & 0xFF;
          } else {
            b[18] ^= (b[2] + b[41] + b[31] + b[4] + b[6] + b[13] + 157) & 0xFF;
          };
          console.log(state, a);
          state = 850415905;
          continue;
        case 1020092396:
          if (Math.random() < 0.5) {
            a = 1;
            b[10] ^= (b[26] + b[29] + b[19] + b[31] + b[39] + b[28] + 142) & 0xFF;
          } else {
            b[22] ^= (b[19] + b[24] + b[25] + b[12] + b[10] + b[7] + 249) & 0xFF;
          };
          console.log(state, a);
          state = 644418210;
          continue;
        case 1020638245:
          if (341042742) {
            a = 1;
            b[9] += b[10] + b[4] + b[20] + b[28] + b[43] + b[24] + 29;
            b[9] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[8] -= b[41] + b[23] + b[11] + b[17] + b[5] + b[39] + Math.floor(A * 256);
  
            b[8] &= 0xFF;
          };
          console.log(state, a);
          state = 656679814;
          continue;
        case 1020799775:
          if (71122535n) {
            a = 1;
            b[40] += b[10] + b[25] + b[4] + b[13] + b[38] + b[21] + 84;
            b[40] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[42] ^= (b[25] + b[34] + b[32] + b[0] + b[5] + b[17] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 413962209;
          continue;
        case 1021595414:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[26] += b[2] + b[21] + b[0] + b[40] + b[5] + b[24] + Math.floor(A * 256);
  
            b[26] &= 0xFF;
          } else {
            b[10] ^= (b[4] + b[2] + b[18] + b[38] + b[22] + b[27] + 40) & 0xFF;
          };
          console.log(state, a);
          state = 880786011;
          continue;
        case 1022290916:
          if (95886560n) {
            a = 1;
            b[14] += b[35] + b[22] + b[0] + b[1] + b[42] + b[25] + 206;
            b[14] &= 0xFF;
          } else {
            b[33] ^= (b[6] + b[23] + b[22] + b[8] + b[37] + b[16] + 3) & 0xFF;
          };
          console.log(state, a);
          state = 916520749;
          continue;
        case 1022867386:
          if (971264745) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[38] ^= (b[25] + b[17] + b[43] + b[42] + b[14] + b[8] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[18] += b[13] + b[28] + b[30] + b[22] + b[1] + b[11] + 104;
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 900279088;
          continue;
        case 1023914457:
          if (Math.random() < 0.5) {
            a = 1;
            b[11] -= b[15] + b[36] + b[39] + b[37] + b[29] + b[28] + 120;
            b[11] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[30] ^= (b[16] + b[40] + b[42] + b[32] + b[2] + b[41] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 448550515;
          continue;
        case 1025916139:
          if (485162058) {
            a = 1;
            b[13] += b[30] + b[18] + b[40] + b[26] + b[22] + b[29] + 57;
            b[13] &= 0xFF;
          } else {
            b[9] += b[2] + b[29] + b[42] + b[19] + b[31] + b[40] + 131;
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 1056280566;
          continue;
        case 1027336899:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[18] -= b[21] + b[5] + b[40] + b[34] + b[43] + b[41] + Math.floor(A * 256);
  
            b[18] &= 0xFF;
          } else {
            b[34] ^= (b[6] + b[3] + b[20] + b[39] + b[32] + b[43] + 11) & 0xFF;
          };
          console.log(state, a);
          state = 378864171;
          continue;
        case 1027590517:
          if (896562078) {
            a = 1;
            b[39] -= b[1] + b[28] + b[11] + b[6] + b[4] + b[23] + 187;
            b[39] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[43] += b[32] + b[27] + b[4] + b[25] + b[8] + b[11] + Math.floor(A * 256);
  
            b[43] &= 0xFF;
          };
          console.log(state, a);
          state = 198957017;
          continue;
        case 1030212277:
          if (Math.random() < 0.5) {
            a = 1;
            b[17] += b[35] + b[3] + b[13] + b[19] + b[6] + b[36] + 120;
            b[17] &= 0xFF;
          } else {
            b[9] -= b[27] + b[26] + b[37] + b[12] + b[31] + b[30] + 208;
            b[9] &= 0xFF;
          };
          console.log(state, a);
          state = 503819895;
          continue;
        case 1030660026:
          if (Math.random() < 0.5) {
            a = 1;
            b[7] -= b[8] + b[0] + b[12] + b[28] + b[40] + b[32] + 7;
            b[7] &= 0xFF;
          } else {
            b[33] -= b[14] + b[35] + b[41] + b[0] + b[6] + b[8] + 45;
            b[33] &= 0xFF;
          };
          console.log(state, a);
          state = 779013490;
          continue;
        case 1030774184:
          if (869017612) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[36] ^= (b[34] + b[23] + b[11] + b[39] + b[1] + b[41] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[29] -= b[37] + b[9] + b[0] + b[16] + b[2] + b[28] + 203;
            b[29] &= 0xFF;
          };
          console.log(state, a);
          state = 774025472;
          continue;
        case 1031385455:
          if (71620143n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[14] ^= (b[0] + b[7] + b[13] + b[39] + b[21] + b[22] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[10] -= b[33] + b[41] + b[14] + b[6] + b[12] + b[42] + 110;
            b[10] &= 0xFF;
          };
          console.log(state, a);
          state = 1031693647;
          continue;
        case 1031764577:
          if (109808949) {
            a = 1;
            b[33] += b[12] + b[40] + b[36] + b[32] + b[29] + b[31] + 1;
            b[33] &= 0xFF;
          } else {
            b[3] -= b[13] + b[30] + b[9] + b[28] + b[32] + b[38] + 241;
            b[3] &= 0xFF;
          };
          console.log(state, a);
          state = 969748666;
          continue;
        case 1032070313:
          if (655549483) {
            a = 1;
            b[22] ^= (b[2] + b[1] + b[42] + b[0] + b[40] + b[32] + 249) & 0xFF;
          } else {
            b[35] -= b[19] + b[17] + b[37] + b[26] + b[10] + b[13] + 230;
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 1048423734;
          continue;
        case 1032477597:
          if (80270086n) {
            a = 1;
            b[8] += b[21] + b[2] + b[30] + b[15] + b[41] + b[31] + 202;
            b[8] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[36] -= b[38] + b[17] + b[14] + b[26] + b[32] + b[40] + Math.floor(A * 256);
  
            b[36] &= 0xFF;
          };
          console.log(state, a);
          state = 1030500729;
          continue;
        case 1032623622:
          if (Math.random() < 0.5) {
            a = 1;
            b[7] += b[0] + b[15] + b[16] + b[30] + b[18] + b[12] + 60;
            b[7] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[5] -= b[19] + b[9] + b[32] + b[7] + b[18] + b[24] + Math.floor(A * 256);
  
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 220941052;
          continue;
        case 1032872541:
          if (93895156n) {
            a = 1;
            b[22] += b[24] + b[42] + b[16] + b[18] + b[7] + b[27] + 116;
            b[22] &= 0xFF;
          } else {
            b[5] += b[15] + b[20] + b[28] + b[38] + b[35] + b[16] + 190;
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 527699122;
          continue;
        case 1033010155:
          if (95198055n) {
            a = 1;
            b[18] ^= (b[30] + b[23] + b[36] + b[40] + b[10] + b[33] + 192) & 0xFF;
          } else {
            b[18] += b[4] + b[28] + b[23] + b[19] + b[25] + b[3] + 232;
            b[18] &= 0xFF;
          };
          console.log(state, a);
          state = 549402220;
          continue;
        case 1034586722:
          if (897353558) {
            a = 1;
            b[9] ^= (b[18] + b[37] + b[13] + b[33] + b[22] + b[27] + 182) & 0xFF;
          } else {
            b[13] -= b[22] + b[4] + b[26] + b[5] + b[10] + b[7] + 76;
            b[13] &= 0xFF;
          };
          console.log(state, a);
          state = 564568308;
          continue;
        case 1035069239:
          if (476687695) {
            a = 1;
            b[18] -= b[13] + b[38] + b[24] + b[8] + b[2] + b[30] + 219;
            b[18] &= 0xFF;
          } else {
            b[17] -= b[2] + b[34] + b[10] + b[20] + b[13] + b[37] + 205;
            b[17] &= 0xFF;
          };
          console.log(state, a);
          state = 980409186;
          continue;
        case 1035147988:
          if (Math.random() < 0.5) {
            a = 1;
            b[8] += b[18] + b[41] + b[1] + b[3] + b[16] + b[43] + 139;
            b[8] &= 0xFF;
          } else {
            b[6] += b[43] + b[33] + b[31] + b[3] + b[19] + b[41] + 244;
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 297178418;
          continue;
        case 1036669856:
          if (Math.random() < 0.5) {
            a = 1;
            b[8] ^= (b[39] + b[10] + b[15] + b[14] + b[19] + b[0] + 177) & 0xFF;
          } else {
            b[5] += b[35] + b[4] + b[33] + b[21] + b[36] + b[31] + 225;
            b[5] &= 0xFF;
          };
          console.log(state, a);
          state = 452259210;
          continue;
        case 1037327395:
          if (Math.random() < 0.5) {
            a = 1;
            b[2] -= b[4] + b[34] + b[19] + b[37] + b[26] + b[30] + 45;
            b[2] &= 0xFF;
          } else {
            b[38] += b[27] + b[5] + b[3] + b[19] + b[2] + b[18] + 8;
            b[38] &= 0xFF;
          };
          console.log(state, a);
          state = 318932189;
          continue;
        case 1038162449:
          if (68176465) {
            a = 1;
            b[10] += b[19] + b[6] + b[30] + b[12] + b[2] + b[9] + 229;
            b[10] &= 0xFF;
          } else {
            b[15] -= b[14] + b[16] + b[36] + b[40] + b[10] + b[3] + 204;
            b[15] &= 0xFF;
          };
          console.log(state, a);
          state = 841404255;
          continue;
        case 1043589810:
          if (Math.random() < 0.5) {
            a = 1;
            b[4] ^= (b[43] + b[8] + b[16] + b[27] + b[6] + b[0] + 114) & 0xFF;
          } else {
            b[7] += b[21] + b[25] + b[38] + b[43] + b[42] + b[41] + 22;
            b[7] &= 0xFF;
          };
          console.log(state, a);
          state = 345784016;
          continue;
        case 1045321173:
          if (80349184n) {
            a = 1;
            b[21] -= b[5] + b[9] + b[19] + b[7] + b[26] + b[18] + 114;
            b[21] &= 0xFF;
          } else {
            b[14] ^= (b[21] + b[3] + b[35] + b[19] + b[23] + b[20] + 96) & 0xFF;
          };
          console.log(state, a);
          state = 248744368;
          continue;
        case 1045388446:
          if (Math.random() < 0.5) {
            a = 1;
            b[33] += b[40] + b[17] + b[43] + b[21] + b[36] + b[23] + 76;
            b[33] &= 0xFF;
          } else {
            b[20] -= b[37] + b[30] + b[12] + b[15] + b[6] + b[7] + 88;
            b[20] &= 0xFF;
          };
          console.log(state, a);
          state = 204284567;
          continue;
        case 1048216731:
          if (77511183n) {
            a = 1;
            b[18] -= b[7] + b[12] + b[5] + b[26] + b[9] + b[6] + 196;
            b[18] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[22] += b[16] + b[18] + b[7] + b[23] + b[1] + b[27] + Math.floor(A * 256);
  
            b[22] &= 0xFF;
          };
          console.log(state, a);
          state = 598763014;
          continue;
        case 1050270889:
          if (Math.random() < 0.5) {
            a = 1;
            b[39] -= b[12] + b[36] + b[0] + b[41] + b[38] + b[35] + 102;
            b[39] &= 0xFF;
          } else {
            b[16] += b[3] + b[30] + b[5] + b[36] + b[27] + b[28] + 30;
            b[16] &= 0xFF;
          };
          console.log(state, a);
          state = 649908962;
          continue;
        case 1050297000:
          if (Math.random() < 0.5) {
            a = 1;
            b[40] += b[22] + b[4] + b[28] + b[3] + b[18] + b[23] + 3;
            b[40] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[0] ^= (b[19] + b[7] + b[16] + b[35] + b[25] + b[17] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 1038369278;
          continue;
        case 1051637796:
          if (709602957) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[31] -= b[40] + b[17] + b[29] + b[22] + b[23] + b[7] + Math.floor(A * 256);
  
            b[31] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[11] += b[43] + b[37] + b[41] + b[18] + b[29] + b[33] + Math.floor(A * 256);
  
            b[11] &= 0xFF;
          };
          console.log(state, a);
          state = 427285211;
          continue;
        case 1052448154:
          if (Math.random() < 0.5) {
            a = 1;
            b[5] += b[30] + b[35] + b[37] + b[25] + b[0] + b[10] + 27;
            b[5] &= 0xFF;
          } else {
            b[9] ^= (b[30] + b[12] + b[23] + b[2] + b[13] + b[34] + 165) & 0xFF;
          };
          console.log(state, a);
          state = 86264343;
          continue;
        case 1054182512:
          if (Math.random() < 0.5) {
            a = 1;
            b[14] ^= (b[4] + b[35] + b[26] + b[1] + b[0] + b[7] + 81) & 0xFF;
          } else {
            b[4] += b[10] + b[17] + b[21] + b[36] + b[1] + b[13] + 155;
            b[4] &= 0xFF;
          };
          console.log(state, a);
          state = 420579324;
          continue;
        case 1055058931:
          if (344970600) {
            a = 1;
            b[32] ^= (b[33] + b[42] + b[30] + b[8] + b[6] + b[17] + 170) & 0xFF;
          } else {
            b[19] ^= (b[16] + b[17] + b[11] + b[12] + b[37] + b[31] + 52) & 0xFF;
          };
          console.log(state, a);
          state = 339565981;
          continue;
        case 1056873066:
          if (Math.random() < 0.5) {
            a = 1;
            b[18] += b[17] + b[43] + b[26] + b[10] + b[30] + b[16] + 6;
            b[18] &= 0xFF;
          } else {
            b[7] -= b[8] + b[23] + b[25] + b[17] + b[33] + b[28] + 77;
            b[7] &= 0xFF;
          };
          console.log(state, a);
          state = 580258836;
          continue;
        case 1056913712:
          if (Math.random() < 0.5) {
            a = 1;
            b[29] ^= (b[24] + b[6] + b[31] + b[41] + b[42] + b[22] + 12) & 0xFF;
          } else {
            b[1] -= b[20] + b[32] + b[25] + b[35] + b[10] + b[18] + 147;
            b[1] &= 0xFF;
          };
          console.log(state, a);
          state = 320204800;
          continue;
        case 1058172980:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[40] -= b[17] + b[26] + b[34] + b[13] + b[27] + b[6] + Math.floor(A * 256);
  
            b[40] &= 0xFF;
          } else {
            b[35] += b[6] + b[1] + b[37] + b[15] + b[40] + b[25] + 133;
            b[35] &= 0xFF;
          };
          console.log(state, a);
          state = 342467768;
          continue;
        case 1059150294:
          if (Math.random() < 0.5) {
            a = 1;
            b[13] += b[16] + b[21] + b[6] + b[9] + b[26] + b[34] + 247;
            b[13] &= 0xFF;
          } else {
            b[32] ^= (b[18] + b[11] + b[42] + b[1] + b[27] + b[14] + 241) & 0xFF;
          };
          console.log(state, a);
          state = 573062015;
          continue;
        case 1060070784:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[9] ^= (b[43] + b[21] + b[32] + b[33] + b[25] + b[42] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            b[34] += b[14] + b[10] + b[4] + b[29] + b[12] + b[30] + 205;
            b[34] &= 0xFF;
          };
          console.log(state, a);
          state = 1032232784;
          continue;
        case 1066734042:
          if (769282608) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[25] ^= (b[42] + b[5] + b[6] + b[12] + b[15] + b[22] + Math.floor(A * 256)) & 0xFF;
  
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[6] += b[4] + b[40] + b[15] + b[37] + b[12] + b[23] + Math.floor(A * 256);
  
            b[6] &= 0xFF;
          };
          console.log(state, a);
          state = 826829071;
          continue;
        case 1066991154:
          if (717298020) {
            a = 1;
            b[27] += b[38] + b[12] + b[7] + b[18] + b[26] + b[30] + 79;
            b[27] &= 0xFF;
          } else {
            b[4] ^= (b[37] + b[43] + b[15] + b[8] + b[2] + b[10] + 199) & 0xFF;
          };
          console.log(state, a);
          state = 51803158;
          continue;
        case 1067849720:
          if (19983457n) {
            a = 1;
            b[35] -= b[4] + b[41] + b[23] + b[2] + b[14] + b[9] + 245;
            b[35] &= 0xFF;
          } else {
            b[37] -= b[18] + b[14] + b[30] + b[10] + b[22] + b[5] + 175;
            b[37] &= 0xFF;
          };
          console.log(state, a);
          state = 371460526;
          continue;
        case 1067938463:
          if (722589847) {
            a = 1;
            b[12] ^= (b[40] + b[25] + b[19] + b[16] + b[20] + b[27] + 147) & 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[40] -= b[2] + b[17] + b[26] + b[8] + b[24] + b[23] + Math.floor(A * 256);
  
            b[40] &= 0xFF;
          };
          console.log(state, a);
          state = 382387218;
          continue;
        case 1068427493:
          if (832507300) {
            a = 1;
            b[34] += b[39] + b[18] + b[15] + b[43] + b[2] + b[17] + 102;
            b[34] &= 0xFF;
          } else {
            b[1] += b[5] + b[17] + b[20] + b[43] + b[39] + b[25] + 81;
            b[1] &= 0xFF;
          };
          console.log(state, a);
          state = 211738091;
          continue;
        case 1069041735:
          if (98837473n) {
            a = 1;
            b[42] += b[9] + b[26] + b[14] + b[31] + b[43] + b[34] + 103;
            b[42] &= 0xFF;
          } else {
            b[36] ^= (b[12] + b[21] + b[34] + b[29] + b[28] + b[7] + 141) & 0xFF;
          };
          console.log(state, a);
          state = 662693666;
          continue;
        case 1069471290:
          if (Math.random() < 0.5) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[39] -= b[30] + b[27] + b[6] + b[31] + b[13] + b[42] + Math.floor(A * 256);
  
            b[39] &= 0xFF;
          } else {
            b[12] += b[13] + b[22] + b[15] + b[16] + b[10] + b[11] + 14;
            b[12] &= 0xFF;
          };
          console.log(state, a);
          state = 763623205;
          continue;
        case 1071145532:
          if (75430430n) {
            a = 1;
            b[30] -= b[25] + b[34] + b[36] + b[6] + b[41] + b[11] + 108;
            b[30] &= 0xFF;
          } else {
            b[10] -= b[30] + b[42] + b[20] + b[18] + b[17] + b[23] + 146;
            b[10] &= 0xFF;
          };
          console.log(state, a);
          state = 584411822;
          continue;
        case 1071248168:
          if (56916210n) {
            a = 1;;
            var A = Math.random();
            console.log('random', A);
            b[41] -= b[11] + b[27] + b[37] + b[2] + b[18] + b[35] + Math.floor(A * 256);
  
            b[41] &= 0xFF;
          } else {
            b[11] += b[21] + b[25] + b[13] + b[15] + b[7] + b[36] + 236;
            b[11] &= 0xFF;
          };
          console.log(state, a);
          state = 290861842;
          continue;
        case 1071664271:
          if (Math.random() < 0.5) {
            a = 1;
            b[17] += b[0] + b[35] + b[12] + b[42] + b[14] + b[3] + 8;
            b[17] &= 0xFF;
          } else {
            ;
            var A = Math.random();
            console.log('random', A);
            b[18] ^= (b[20] + b[23] + b[6] + b[12] + b[4] + b[25] + Math.floor(A * 256)) & 0xFF;
  
          };
          console.log(state, a);
          state = 175099911;
          continue;
        case 1071767211:
          if (Math.random() < 0.5) {
            a = 1;
            b[30] ^= (b[42] + b[9] + b[2] + b[36] + b[12] + b[16] + 241) & 0xFF;
          } else {
            b[20] ^= (b[41] + b[2] + b[40] + b[21] + b[36] + b[17] + 37) & 0xFF;
          };
          console.log(state, a);
          state = 109621765;
          continue;
        default:
          console.log("uh-oh, math.random() is too random...");
          process.exit(0);
      }
      break;
    }
  
    var target = [106, 196, 106, 178, 174, 102, 31, 91, 66, 255, 86, 196, 74, 139, 219, 166, 106, 4, 211, 68, 227, 72, 156, 38, 239, 153, 223, 225, 73, 171, 51, 4, 234, 50, 207, 82, 18, 111, 180, 212, 81, 189, 73, 76];
    if (b.every((x, i) => x === target[i])) {
      console.log('Congrats!');
    } else {
      console.log('Try again.');
    }
  });