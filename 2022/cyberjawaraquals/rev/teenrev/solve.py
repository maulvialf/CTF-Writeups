from sys import *
import hashlib
from z3 import *

LEN = 50 
s = Solver()
a1 = [BitVec(i, 32) for i in range(LEN)]

# ========================================
for i in range(LEN):
    s.add(0x0 < a1[i])
    s.add(0xff > a1[i])
from subprocess import check_output as co
sc = open('writerTEMP.py').read()

datas = open('data2', 'r').read()
datas = datas.split("off")
kotak = ['' for i  in range(50)]
z = 0
kamus = dict()
kamus[65] = "^"
kamus[24] = "-"
kamus[23] = "+"
for i in range(1, len(datas) - 1):
    z += 1
    data = datas[i]
    arr = data.split("loads(x))\np[")[1].split("]")[0]
    op1 = data.split("x[94] = ")[1].split("\n")[0]
    op2 = data.split("x[78] = ")[1].split("\n")[0]
    arr = eval(arr)
    op1 = eval(op1)
    op2 = eval(op2)
    cmd = "a1[{0}] = (a1[{0}] {1} {2}) % 256".format(arr, kamus[op2], op1)
    exec(cmd)

akhir = 'ns@\xf5Y^\x12\x1fDb6.\x9f\xcb\x0b>\x98Se7\xc0\x10B\x1d^O+*\x88\xb4r\xa4\x81\x08\x88VV\xb8\xf1"a\x0bc\x91_;)\xd3\xfcB'
for i in range(50):
    s.add(a1[i] == ord(akhir[i]))

while True:
    www = s.check()    
    model = s.model()
    manga = [0 for i in range(LEN)]
    for i in range(LEN):
        index = eval(str(model[i])[2:])
        manga[index] = eval(str(model[model[i]]))
    
    b = "".join([chr(manga[i]) for i in range(LEN)])
    print(b)