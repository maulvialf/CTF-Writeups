from sys import *
import hashlib
from z3 import *

LEN = 50 
s = Solver()
bytes = [BitVec(i, 32) for i in range(LEN)]

# ========================================
for i in range(LEN):
    s.add(0x0 < bytes[i])
    s.add(0xff > bytes[i])

# s.add(  (bytes[34] ^ (bytes[23] * 7)) ^ ((bytes[36] ^ (-1)) + 13)) & 255) == 182 
s.add(  (((bytes[37] ^ (bytes[10] * 7)) ^ ((bytes[21] ^ (-1)) + 13)) & 255) == 223 )
s.add(  (((bytes[24] ^ (bytes[23] * 7)) ^ ((bytes[19] ^ (-1)) + 13)) & 255) == 205 )
s.add(  (((bytes[25] ^ (bytes[13] * 7)) ^ ((bytes[23] ^ (-1)) + 13)) & 255) == 144 )
s.add(  (((bytes[6] ^ (bytes[27] * 7)) ^ ((bytes[25] ^ (-1)) + 13)) & 255) == 138 )
s.add(  (((bytes[4] ^ (bytes[32] * 7)) ^ ((bytes[22] ^ (-1)) + 13)) & 255) == 227 )
s.add(  (((bytes[25] ^ (bytes[19] * 7)) ^ ((bytes[1] ^ (-1)) + 13)) & 255) == 107 )
s.add(  (((bytes[22] ^ (bytes[7] * 7)) ^ ((bytes[29] ^ (-1)) + 13)) & 255) == 85 )
s.add(  (((bytes[15] ^ (bytes[10] * 7)) ^ ((bytes[20] ^ (-1)) + 13)) & 255) == 188 )
s.add(  (((bytes[29] ^ (bytes[16] * 7)) ^ ((bytes[12] ^ (-1)) + 13)) & 255) == 88 )
s.add(  (((bytes[35] ^ (bytes[4] * 7)) ^ ((bytes[33] ^ (-1)) + 13)) & 255) == 84 )
s.add(  (((bytes[36] ^ (bytes[2] * 7)) ^ ((bytes[4] ^ (-1)) + 13)) & 255) == 103 )
s.add(  (((bytes[26] ^ (bytes[3] * 7)) ^ ((bytes[1] ^ (-1)) + 13)) & 255) == 216 )
s.add(  (((bytes[12] ^ (bytes[6] * 7)) ^ ((bytes[18] ^ (-1)) + 13)) & 255) == 165 )
s.add(  (((bytes[12] ^ (bytes[28] * 7)) ^ ((bytes[36] ^ (-1)) + 13)) & 255) == 151 )
s.add(  (((bytes[20] ^ (bytes[0] * 7)) ^ ((bytes[21] ^ (-1)) + 13)) & 255) == 101 )
s.add(  (((bytes[27] ^ (bytes[36] * 7)) ^ ((bytes[14] ^ (-1)) + 13)) & 255) == 248 )
s.add(  (((bytes[35] ^ (bytes[2] * 7)) ^ ((bytes[19] ^ (-1)) + 13)) & 255) == 44 )
s.add(  (((bytes[13] ^ (bytes[11] * 7)) ^ ((bytes[33] ^ (-1)) + 13)) & 255) == 242 )
s.add(  (((bytes[33] ^ (bytes[11] * 7)) ^ ((bytes[3] ^ (-1)) + 13)) & 255) == 235 )
s.add(  (((bytes[31] ^ (bytes[37] * 7)) ^ ((bytes[29] ^ (-1)) + 13)) & 255) == 248 )
s.add(  (((bytes[1] ^ (bytes[33] * 7)) ^ ((bytes[31] ^ (-1)) + 13)) & 255) == 33 )
s.add(  (((bytes[34] ^ (bytes[22] * 7)) ^ ((bytes[35] ^ (-1)) + 13)) & 255) == 84 )
s.add(  (((bytes[36] ^ (bytes[16] * 7)) ^ ((bytes[4] ^ (-1)) + 13)) & 255) == 75 )
s.add(  (((bytes[8] ^ (bytes[3] * 7)) ^ ((bytes[10] ^ (-1)) + 13)) & 255) == 214 )
s.add(  (((bytes[20] ^ (bytes[5] * 7)) ^ ((bytes[12] ^ (-1)) + 13)) & 255) == 193 )
s.add(  (((bytes[28] ^ (bytes[34] * 7)) ^ ((bytes[16] ^ (-1)) + 13)) & 255) == 210 )
s.add(  (((bytes[3] ^ (bytes[35] * 7)) ^ ((bytes[9] ^ (-1)) + 13)) & 255) == 205 )
s.add(  (((bytes[27] ^ (bytes[22] * 7)) ^ ((bytes[2] ^ (-1)) + 13)) & 255) == 46 )
s.add(  (((bytes[27] ^ (bytes[18] * 7)) ^ ((bytes[9] ^ (-1)) + 13)) & 255) == 54 )
s.add(  (((bytes[3] ^ (bytes[29] * 7)) ^ ((bytes[22] ^ (-1)) + 13)) & 255) == 32 )
s.add(  (((bytes[24] ^ (bytes[4] * 7)) ^ ((bytes[13] ^ (-1)) + 13)) & 255) == 99 )
s.add(  (((bytes[22] ^ (bytes[16] * 7)) ^ ((bytes[13] ^ (-1)) + 13)) & 255) == 108 )
s.add(  (((bytes[12] ^ (bytes[8] * 7)) ^ ((bytes[30] ^ (-1)) + 13)) & 255) == 117 )
s.add(  (((bytes[25] ^ (bytes[27] * 7)) ^ ((bytes[35] ^ (-1)) + 13)) & 255) == 146 )
s.add(  (((bytes[16] ^ (bytes[10] * 7)) ^ ((bytes[14] ^ (-1)) + 13)) & 255) == 250 )
s.add(  (((bytes[21] ^ (bytes[25] * 7)) ^ ((bytes[12] ^ (-1)) + 13)) & 255) == 195 )
s.add(  (((bytes[26] ^ (bytes[10] * 7)) ^ ((bytes[30] ^ (-1)) + 13)) & 255) == 203 )
s.add(  (((bytes[20] ^ (bytes[2] * 7)) ^ ((bytes[1] ^ (-1)) + 13)) & 255) == 47 )
s.add(  (((bytes[34] ^ (bytes[12] * 7)) ^ ((bytes[27] ^ (-1)) + 13)) & 255) == 121 )
s.add(  (((bytes[19] ^ (bytes[34] * 7)) ^ ((bytes[20] ^ (-1)) + 13)) & 255) == 246 )
s.add(  (((bytes[25] ^ (bytes[22] * 7)) ^ ((bytes[14] ^ (-1)) + 13)) & 255) == 61 )
s.add(  (((bytes[19] ^ (bytes[28] * 7)) ^ ((bytes[37] ^ (-1)) + 13)) & 255) == 189 )
s.add(  (((bytes[24] ^ (bytes[9] * 7)) ^ ((bytes[17] ^ (-1)) + 13)) & 255) == 185 )

while True:
    www = s.check()    
    model = s.model()
    similar = [0 for i in range(LEN)]
    for i in range(LEN):
        index = eval(str(model[i])[2:])
        similar[index] = eval(str(model[model[i]]))
    
    b = "".join([chr(similar[i]) for i in range(LEN)])
    print(b)