#!/usr/bin/python2
from sys import *
import hashlib
from z3 import *
from pprint import pprint as pp
LEN = 36
s = Solver()
a1 = [BitVec(x, 8) for x in range(LEN)]
length = 6
# ========================================
for i in range(LEN):
    s.add(0x20 < a1[i])
    s.add(0x7f > a1[i])


def transform_func(cArr, i):
    cArr2 = [[0 for x in range(length)] for y in range(length)]
    for i2 in range(0, i * i):
        cArr2[i2 / i][i2 % i] = cArr[i2];

    return cArr2

def getArray(cArr, i , i2):
    cArr2 = [0 for x in range(length * 2)]
    i3 = 0
    for i4 in range(0, length):
        cArr2[i3] = cArr[i][i4]
        i3 += 1
    for i5 in range(0, length):
        cArr2[i3] = cArr[i2][(length - 1) - i5]
        i3 += 1
        print(i3)

    return cArr2

def encrypt(cArr, i):
    cArr2 = [0 for x in range(length * 2)]
    i2 = length - 1 
    i3 = length
    for i4 in range(0, length * 2, 2):
        i5 = i2
        i2 -= 1
        cArr2[i4] = cArr[i5]
        i6 = i3
        i3 += 1
        cArr2[i4 + 1] = cArr[i6]
    for i7 in range(0, length * 2, 1):
        i8 = i7
        cArr2[i8] = (cArr2[i8] % 256) ^ (i % 256)
    
    return cArr2

"""
>>> "A" * 14
'AAAAAAAAAAAAAA'
>>> "B" * 14
'BBBBBBBBBBBBBB'
>>> "C" * 14
'CCCCCCCCCCCCCC'
SEKAI{ABCDEFGHIJKLMNOPRSTUV123456789ABCDEF}
SEKAI{00000000(00000000000000000000@000000}
AAAAAAAAAAAAAABBBBBBBBBBBBBBCCCCCCCCCCCCCCC
"""
# solver

transform = transform_func(a1, length)
# transform = transform_func(map(ord, list("ABCDEFGHIJKLMNOPRSTUV123456789ABCDEF")), 6)
# transform = transform_func((("ABCDEFGHIJKLMNOPRSTUV123456789ABCDEF")), 6)

# pp(getArray(transform, 0, 5))
# pp(transform)

# for i in range(0, length, 1):
#     print map(chr, transform[i])

for i in range(0, (length / 2) + 1, 1):
    for i2 in range(0, length - (2 * i) - 1, 1):
        c = transform[i][i + i2] % 256
        transform[i][i + i2] = transform[((length - 1) - i) - i2][i]
        transform[((length - 1) - i) - i2][i] = transform[(length - 1) - i][((length - 1) - i) - i2]
        transform[(length - 1) - i][((length - 1) - i) - i2] = transform[i + i2][(length - 1) - i]
        transform[i + i2][(length - 1) - i] = c        

form  = encrypt(getArray(transform, 0, 5), 2) + encrypt(getArray(transform, 1, 4), 1) + encrypt(getArray(transform, 2, 3), 0)


# print('')
# for i in range(0, length, 1):
#     print map(chr, transform[i])

# pp(transform)

# print "aflan"

# print map(chr, getArray(transform, 0, 5))
# print map(chr, getArray(transform, 1, 4))
# print map(chr, getArray(transform, 2, 3))

# fr = map(chr, form)
# print(fr)

enc = "oz]{R]3l]]B#50es6O4tL23Etr3c10_F4TD2"
enc = list(enc)
enc = map(ord, enc)
# print (enc)


for i in range(len(enc)):
    # print(form[i])
    # print(enc[i])
    s.add(enc[i] == form[i])


www = s.check()    
model = s.model()

# print(model)

manga = [0 for i in range(LEN)]
for i in range(LEN):
    try:
        index = eval(str(model[i])[2:])
        manga[index] = eval(str(model[model[i]]))
    except:
        continue

b = "".join([chr(manga[i]) for i in range(LEN)])
print(b)
print(repr(b))
print(b.encode('hex'))


