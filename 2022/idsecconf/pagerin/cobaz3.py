from pwn import *
from sys import *

# p = process('./a.out')

# kotak = ""
# for i in range(310/2):
# 	kotak += "1"
# 	kotak += "2"
# p.sendline(kotak)
# p.interactive()

from sys import *
import hashlib
from z3 import *

LEN = 310
s = Solver()
a1 = [Int(i) for i in range(LEN)]

"""
  for (i = 0; i <= 154; ++i) {
	satu = INPUT[2 * i] - '1';
	dua = INPUT[2 * i + 1] - '1';
	if (dua != satu) {
		// printf("%d %d %d\n", i, compariso1, paramsatu[1]);
	  v5 = paramsatu[satu];
	  if (paramdua[dua] - paramsatu[dua] < v5)
		v5 = paramdua[dua] - paramsatu[dua];
	  paramsatu[satu] -= v5;
	  paramsatu[dua] += v5;
	}
  }


   paramdua[0] = 0xb5 ^ 0x29;//  0x9c
  paramdua[1] = 0xbe ^ 0xED;//  0x53
  paramdua[2] = 0xa4 ^ 0xED;//  0x49
  paramdua[3] = 0;//  0x0
  
  paramsatu[0] = 0x1b ^ 0x87;// 0x9c
  paramsatu[1] = 0;// 0x0
  paramsatu[2] = 0;// 0x0
  paramsatu[3] = 0;// 0x0

  compariso1 = 0x6c ^ 0x22;//   0x4e
  compariso2 = 0x62 ^ 0x2C;//   0x4e
  compariso3 = 0x3f ^ 0x3F;//   0x0
 
"""
# paramsatu = [0, 0, 0]
# paramdua  = [0x9c, 0x53, 0x49]

paramsatu = Array('paramsatu', IntSort(), IntSort())
paramdua  = Array('paramdua', IntSort(), IntSort())
paramsatu = Store(paramsatu, 0, 0x9c)
paramsatu = Store(paramsatu, 1, 0)
paramsatu = Store(paramsatu, 2, 0)
paramsatu = Store(paramsatu, 3, 0)

paramdua = Store(paramdua, 0, 0x9c)
paramdua = Store(paramdua, 1, 0x53)
paramdua = Store(paramdua, 2, 0x49)
paramdua = Store(paramdua, 3, 0)

compare  = [0x49, 0x53, 0]
v5 = 0
for i in range(LEN):
    s.add(a1[i] > 0)
    # s.add(a1[i] < 4)

for i in range(10):
	satu = a1[2 * i]
	dua  = a1[(2 * i) + 1]
	# if(dua != satu):
	# 	v5 = paramsatu[satu]
	# 	if (paramdua[dua] - paramsatu[dua] < v5):
	# 		v5 = paramdua[dua] - paramsatu[dua];
	# If(dua != satu, paramsatu[satu], x)
	
	v5 = paramsatu[satu]
	x = paramdua[dua] - paramsatu[dua]
	zzz = If(x < v5, x, v5)
	www = If(dua != satu, zzz, 0)

	paramsatu = Store(paramsatu, satu, paramsatu[satu] - www)
	paramsatu = Store(paramsatu, dua, paramsatu[dua] + www)


for i in range(3):
	s.add(paramsatu[i] == compare[i])
# s.add(paramdua[2] == 0x49)
# s.add()

print (s.check())
print (s.model()) 