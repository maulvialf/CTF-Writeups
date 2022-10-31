from pprint import pprint as pp
kotak = '''
dword_202060 = byte_202100 - 50 + byte_202101;
dword_202064 = byte_202101 - 100 + byte_202102;
dword_202068 = 4 * byte_202102;
dword_20206C = byte_202103 ^ 0x46;
dword_202070 = 36 - (byte_202103 - byte_202104);
dword_202078 = byte_202106 * byte_202105 + 99;
dword_20207C = (char)(byte_202106 ^ byte_202107);
dword_202080 = (byte_202107 + 45) ^ byte_202108;
dword_202084 = (byte_202109 & 0x37) - 3;
dword_20208C = byte_20210B - 38;
dword_202090 = 4 * ((char)(byte_20210C ^ byte_202106) + 4);
dword_202074 = (byte_202115 - byte_202104) ^ 0x30;
dword_202094 = byte_20210D - byte_20210E - 1;
dword_202088 = byte_202111 - byte_202110 + 82;
dword_2020A0 = 6 * (char)(byte_202112 ^ byte_202113) + 54;
dword_2020A4 = byte_202115 + 49 + (byte_202114 ^ 0x73);
dword_202098 = byte_202116;
dword_2020A8 = byte_202117 ^ 0x42;
dword_20209C = byte_20211A + 5;
dword_2020AC = byte_202119 - byte_20211A / 2 - 55;
dword_2020B0 = 4 * byte_20211B - (byte_20211C + 128);
dword_2020B4 = byte_20211D - 32;



'''

kamus = dict()
j = 0
for i in range(0x202060, 0x202120, 4):
	key = "dword_{}".format(hex(i)[2:].upper())
	kamus[key] = "k[{}]".format(j)
	j += 1

x = 0
j = 0
for i in range(0x0000000000202100, 0x202120):
	key = "byte_{}".format(hex(i)[2:].upper())
	# kamus[key] = "((s[{}] >> {}) & 0xff)".format(j, 8 * (4-x-1))
	# x += 1
	# j += 1

	kamus[key] = "s[{}]".format(j)
	x += 1
	j += 1


for hehe in kamus:
	kotak = kotak.replace(hehe, kamus[hehe])
	# print hehe, kamus[hehe]
pp(kamus)
print kotak