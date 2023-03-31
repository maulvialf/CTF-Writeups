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

enc = [  0x0E, 0xC9, 0x9D, 0xB8, 0x26, 0x83, 0x26, 0x41, 0x74, 0xE9,  0x26, 0xA5, 0x83, 0x94, 0x0E, 0x63, 0x37, 0x37, 0x37]
z = 0 
for i in range(len(enc)):
    s.add(enc[i] == bytes[i] * 17 % 253)

while True:
    www = s.check()    
    model = s.model()
    similar = [0 for i in range(LEN)]
    for i in range(LEN):
        index = eval(str(model[i])[2:])
        similar[index] = eval(str(model[model[i]]))
    
    b = "".join([chr(similar[i]) for i in range(LEN)])
    print(b)

# it's a log cabin!!!