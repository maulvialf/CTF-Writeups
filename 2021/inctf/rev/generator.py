from pprint import pprint as pp
kotak = '''
byte_2020E0 == (k[0] ^ 2) - 31;
byte_2020E1 == ((k[1] % 2) ^ *k) - 29;
byte_2020E2 == (4 * k[1]) ^ 0x97;
byte_2020E3 == k[2] ^ 0xA0;
byte_2020E4 == (k[3] ^ 0x4D) + 7;
byte_2020E5 == 4 * k[5] - 1;
byte_2020E3 == k[4] + 116;
byte_2020E6 == k[6] + 21;
byte_2020E7 == k[7] - 20;
byte_2020E8 == k[8] ^ 0x63;
byte_2020E9 == (k[10] ^ 3) - k[8] + 54;
byte_2020EA == k[9] ^ 0x42;
byte_2020EB == k[11] + 51;
byte_2020EB == k[12] ^ 0xB3;
byte_2020EC == (k[13] + 18) ^ 0x1A;
byte_2020ED == k[14] - 7;
byte_2020EE == k[15] - 37;
byte_2020EF == k[17] ^ 0xE5;
byte_2020F0 == (k[18] & 0x36) + 53;
byte_2020EE == k[19] ^ 0x34;
byte_2020F1 == k[20] ^ 0xFD;
byte_2020F2 == ((int)k[20] >> k[21]) ^ 0x1C;




'''

kamus = dict()

j = 0
for i in range(0x2020e0, 0x2020f3):
	key = "byte_{}".format(hex(i)[2:].upper())
	kamus[key] = "s2[{}]".format(j)
	j += 1

for hehe in kamus:
	kotak = kotak.replace(hehe, kamus[hehe])
	# print hehe, kamus[hehe]
pp(kamus)
print kotak