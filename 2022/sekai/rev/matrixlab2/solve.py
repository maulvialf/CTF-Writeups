#!/usr/bin/python3

import numpy
import numpy as np
#!/usr/bin/python2
from sys import *
import hashlib
from z3 import *
from pprint import pprint as pp

from pprint import pprint as pp
print('Welcome to Matrix Lab 2! Hope you enjoy the journey.')
print('Lab initializing...')


LEN = 36
s = Solver()
a1 = [BitVec(x, 8) for x in range(LEN)]
length = 6
# ========================================
for i in range(LEN):
    s.add(0x20 < a1[i])
    s.add(0x7f > a1[i])


def magic(n):
  n = int(n)
  if n < 3:
    raise ValueError("Size must be at least 3")
  if n % 2 == 1:
    p = np.arange(1, n+1)
    return n*np.mod(p[:, None] + p - (n+3)//2, n) + np.mod(p[:, None] + 2*p-2, n) + 1
  elif n % 4 == 0:
    J = np.mod(np.arange(1, n+1), 4) // 2
    K = J[:, None] == J
    M = np.arange(1, n*n+1, n)[:, None] + np.arange(n)
    M[K] = n*n + 1 - M[K]
  else:
    p = n//2
    M = magic(p)
    M = np.block([[M, M+2*p*p], [M+3*p*p, M+p*p]])
    i = np.arange(p)
    k = (n-2)//4
    j = np.concatenate((np.arange(k), np.arange(n-k+1, n)))
    M[np.ix_(np.concatenate((i, i+p)), j)] = M[np.ix_(np.concatenate((i+p, i)), j)]
    M[np.ix_([k, k+p], [0, k])] = M[np.ix_([k+p, k], [0, k])]
  return M 



# try:
# import matlab.engine
# engine = matlab.engine.start_matlab()
"""
SEKAI{ABCDEFGHIJKLMNOPQRS}
"""

LEN = 16
s = Solver()
a1 = [BitVec(x, 32) for x in range(LEN)]
length = 6
# ========================================
for i in range(LEN):
    s.add(0x20 < a1[i])
    s.add(0x7f > a1[i])


# flag = input('Enter the lab passcode: ').strip()
flag = list(map(ord, list("SEKAI{BBCDEFGHIJKLMNOP}")))
# message = list(map(ord, list("BBCDEFGHIJKLMNOP")))
message = a1
outcome = False

# if len(flag) == 23 and flag[:6] == 'SEKAI{' and flag[-1:] == '}':
A = [i ^ 42 for i in message]
# B = matlab.double([A[i:i + 4] for i in range(0, len(A), 4)])
# B = numpy.double([A[i:i + 4] for i in range(0, len(A), 4)])
B = [A[i:i + 4] for i in range(0, len(A), 4)]
pp(A)
pp(B)
# M = np.array([[1, 1, ,1], [3, 4]])
P = np.array([[1, 1, 1, 1], [1, 2, 3, 4], [1, 3, 6, 10], [1, 4, 10, 20]])
X = [list(map(int, i)) for i in magic(4)]
# Y = [list(map(int, i)) for i in pascal(4)]
# X = [list(map(int, i)) for i in M]
Y = [list(map(int, i)) for i in P]
C = [[None for _ in range(len(X))] for _ in range(len(X))]
for i in range(len(X)):
    for j in range(len(X[i])):
        C[i][j] = X[i][j] + Y[i][j]

# C = matlab.double(C)
# C = numpy.double(C)
print( 'aaa'  )
print( numpy.matmul(C, numpy.rot90(numpy.transpose(B), 1337))  )
print( 'aaa'  )
print(numpy.double([[2094, 2962, 1014, 2102], [2172, 3955, 1174, 3266], [3186, 4188, 1462, 3936], [3583, 5995, 1859, 5150]])   )
print( 'aaa'  )
print((numpy.matmul(C, numpy.rot90(numpy.transpose(B), 1337)) == numpy.double([[2094, 2962, 1014, 2102], [2172, 3955, 1174, 3266], [3186, 4188, 1462, 3936], [3583, 5995, 1859, 5150]])).all())
print( 'aaa'  )
Z = numpy.matmul(C, numpy.rot90(numpy.transpose(B), 1337))
compute = [[2094, 2962, 1014, 2102], [2172, 3955, 1174, 3266], [3186, 4188, 1462, 3936], [3583, 5995, 1859, 5150]]
# print(len(Z))
for x in range(4):
    for y in range(4):
        s.add(Z[x][y] == compute[x][y])

www = s.check()    
model = s.model()


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

print('EXIT')