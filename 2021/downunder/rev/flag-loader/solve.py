#!/usr/bin/python2
from pwn import *
from sys import *
from z3 import *
import hashlib
from sys import *

context.arch = "amd64"
# context.arch = "i386"

e = ELF('flag_loader')
# libc = ELF("libc-2.27.so")
# ld = ELF("./ld-2.27.so")
if(len(argv) == 2):
    p = connect("pwn-2021.duc.tf", 31919)
else:
    p = process('flag_loader')
context.arch = "amd64"
cmd = """
pie 0x00000000000015FC
pie 0x000000000000160C
pie 0x000000000000161C
# pie 0x0000000000001524
# pie 0x0000000000001556
# pie 0x000000000000159B
# pie 0x0000000000001575
# pie 0x0000000000001656
"""
if(len(argv) == 3):
    gdb.attach(p, cmd)
v1 = 0;
v2 = 1;
X = [0x44, 0x55, 0x43, 0x54, 0x46]
huruf = []



LEN = 5 
solp = Solver()
s1 = [BitVec(i, 8) for i in range(LEN)]
for i in range(5):
    solp.add(0x20 < s1[i])
    solp.add(0x7f > s1[i])


for i in range(5):
   v1 += (X[i] ^ s1[i]) & 0xff
   v2 *= ((i + 1) * s1[i])& 0xff

solp.add(v1 == 0)
solp.add(v2 != 0)
www = solp.check()    
model = solp.model()
print model
LEN = 5
manga = [0 for i in range(LEN)]
for i in range(LEN):
    index = eval(str(model[i])[2:])
    manga[index] = eval(str(model[model[i]]))
# print "".join([chr(eval(str(model[model[i]]))) for i in range(13)])
b = "".join([chr(manga[i]) for i in range(LEN)])

kotak = 1
v1 = 0;
v2 = 1;
for i in range(5):
   v1 += (X[i] ^ manga[i]) & 0xff
   v2 *= ((i + 1) * manga[i])& 0xff
v2 = v2 & 0xff
kotak = (kotak * (v2))
print kotak
print 'v2', v2, hex(v2)

p.sendline(b)
p.recvuntil('=')
angka = p.recvline()
angka = eval(angka)

print angka
# p.sendline('{} {}'.format(1, angka-1))



LEN  = 2
s2 = [BitVec(i, 32) for i in range(LEN)]
solp = Solver()
solp.add(s2[0] != 0)
solp.add(s2[1] != 0)
solp.add(s2[0] + s2[1] == angka)
# solp.add((s2[0] * s2[1]) > 0x3B)
solp.add(s2[1] > 0)
solp.add(s2[0] < 0)


www = solp.check()    
model = solp.model()
print model


manga = [0 for i in range(LEN)]
for i in range(LEN):
    index = eval(str(model[i])[2:])
    manga[index] = eval(str(model[model[i]]))
print manga
p.sendline('{} {}'.format(manga[0], manga[1]))

ret = (manga[0] * manga[1]) & 0xffff

kotak = (kotak * ret) & 0xffffffff

print 'ret', hex(ret), hex(kotak)

p.recvuntil('=')
angka = p.recvline()
angka = eval(angka)
print angka


LEN  = 5
s3 = [BitVec(i, 32) for i in range(LEN)]
solp = Solver()
for i in range(5):
    solp.add(s3[i] != 0)
    solp.add(s3[i] > 0)
solp.add(s3[0] < s3[1])
solp.add(s3[1] < s3[2])
solp.add(s3[2] < s3[3])
solp.add(s3[3] < s3[4])
solp.add( (   ((s3[2] - s3[1])  * (   s3[4] -s3[3] )  & 0xffff) > 0x3b ))
solp.add(s3[0] + s3[1]+ s3[2]+ s3[3]+ s3[4] == angka)

solp.add( (kotak * ((s3[2] - s3[1])  * (s3[4] - s3[3]) & 0xffff) & 0xffffffff) == 0  )

www = solp.check()    
model = solp.model()
print model


manga = [0 for i in range(LEN)]
for i in range(LEN):
    index = eval(str(model[i])[2:])
    manga[index] = eval(str(model[model[i]]))
print manga
p.sendline('{} {} {} {} {}'.format(manga[0], manga[1], manga[2], manga[3], manga[4]))

ret = (manga[2] - manga[1])  * (   manga[4] -manga[3]   )

ret = ret & 0xffff
kotak = (kotak * ret) & 0xffffffff
print hex(kotak), hex(ret)
'''
DUCTF{y0u_sur3_kn0w_y0ur_int3gr4l_d4t4_typ3s!}

'''
p.interactive()
