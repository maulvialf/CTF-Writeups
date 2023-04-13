from subprocess import check_output
# from pwn import *

# context.arch = 'i386'


v5 = [0 for i in range(36)]
v5[0] = 80
v5[1] = 94
v5[2] = 94
v5[3] = -93
v5[4] = 79
v5[5] = 91
v5[6] = 81
v5[7] = 94
v5[8] = 94
v5[9] = -105
v5[10] = -93
v5[11] = 128
v5[12] = -112
v5[13] = -93
v5[14] = 128
v5[15] = -112
v5[16] = -93
v5[17] = 128
v5[18] = -112
v5[19] = -93
v5[20] = 128
v5[21] = -112
v5[22] = -93
v5[23] = 128
v5[24] = -112
v5[25] = -93
v5[26] = 128
v5[27] = -112
v5[28] = -93
v5[29] = 128
v5[30] = -112
v5[31] = -94
v5[32] = -93
v5[33] = 107
v5[34] = 127
v5[35] = 0
shellcode = b""
for i in range(36):
    shellcode += bytes(chr((v5[i]) % 256 ), 'utf-8')

# print (disasm(shellcode))


hasil = ""

for i in range(35):
    hasil += chr((0xc3 - v5[i]) % 256 )
from binascii import hexlify as encode
print(hasil)
# print(encode(pload))
# ploadhex = str(encode(pload))
# hasil = ""
# for i in range(0, len(ploadhex), 2):
# for i in range(0, 32, 2):
#     hasil += ploadhex[i:i+2]
#     hasil += " "

# print (hasil)
# print(hasil.encode('hex'))
# system(".\darn_mice.exe {}".format(hasil))
# try:
print(repr(hasil))

print(check_output([".\darn_mice2.exe", hasil]))
    
# except:
#     pass