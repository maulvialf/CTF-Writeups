
'''
0000000   00 52 c2 9c 7f 16 6e 64  43 05 c3 ae c2 93 4d c3  |.R....ndC.....M.|
00000010  ad c3 83 c3 97 7f c2 93  c2 90 7f 53 7d c2 ad c2  |...........S}...|
00000020  93 29 c3 bf c3 83 0c 30  c2 93 67 2f 03 c2 93 2b  |.).....0..g/...+|
00000030  c3 83 c2 b6 00 52 74 7f  16 c2 87 64 43 07 c3 ae  |.....Rt....dC...|
00000040  c2 93 70 c3 ad c3 83 38  7f c2 93 c2 93 7f 53 7a  |..p....8......Sz|
00000050  c2 ad c2 93 c3 87 c3 bf  c3 83 c3 93 30 c2 93 c2  |............0...|
00000060  86 2f 03 71 0a                                    |./.q.|

'''

data = [0x00 ,0x52 ,0xc2 ,0x9c ,0x7f ,0x16 ,0x6e ,0x64 ,0x43 ,0x05 ,0xc3 ,0xae ,0xc2 ,0x93 ,0x4d ,0xc3,
0xad ,0xc3 ,0x83 ,0xc3 ,0x97 ,0x7f ,0xc2 ,0x93 ,0xc2 ,0x90 ,0x7f ,0x53 ,0x7d ,0xc2 ,0xad ,0xc2,
0x93 ,0x29 ,0xc3 ,0xbf ,0xc3 ,0x83 ,0x0c ,0x30 ,0xc2 ,0x93 ,0x67 ,0x2f ,0x03 ,0xc2 ,0x93 ,0x2b,
0xc3 ,0x83 ,0xc2 ,0xb6 ,0x00 ,0x52 ,0x74 ,0x7f ,0x16 ,0xc2 ,0x87 ,0x64 ,0x43 ,0x07 ,0xc3 ,0xae,
0xc2 ,0x93 ,0x70 ,0xc3 ,0xad ,0xc3 ,0x83 ,0x38 ,0x7f ,0xc2 ,0x93 ,0xc2 ,0x93 ,0x7f ,0x53 ,0x7a,
0xc2 ,0xad ,0xc2 ,0x93 ,0xc3 ,0x87 ,0xc3 ,0xbf ,0xc3 ,0x83 ,0xc3 ,0x93 ,0x30 ,0xc2 ,0x93 ,0xc2,
0x86 ,0x2f ,0x03 ,0x71][::-1]
# newdata = []
# for i in range(0, len(data), 2):
# 	newdata.append((data[i] << 8) + data[i+1])

# data = newdata
data = data
print (data)
def rol(v, s):
	b = s % 8
	# data = (v << b | v >> (8 - b)) & 0xff
	data = ((v << b) | (v >> (8 - b))) & 0xff
	return data

text = "c4t3rp1114rz_s3cr3t1y_ru13_7h3_w0r1d"
print( len(data))
tebak = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ \n'
flag = ""
for x in range(100):g
	for i in tebak:
		# print i, chr(i)
		temp = ord(i)
		temp = rol(temp, 114)
		temp += 222
		temp ^= ord(text[x % len(text)])
		temp -= 127
		temp = rol(temp, 6)
		# print (data[x], temp, i, ord(i))
		if(i == "\n"):
			print (flag[::-1])
			print ("GETTER")
			# print (data[x], temp, i)
			# exit()
			flag += "."
		if(data[x] == temp):
			# print (flag[::-1], i)
			print ("GETTER")
			# print (data[x], temp, i)
			flag += i
			break
'''
\xDE\xAD\xBE\xEF
'''