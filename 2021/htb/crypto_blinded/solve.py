#!/usr/bin/env python
from pwn import *
import gmpy2
from gmpy2 import gcd

from sys import *

 
m = int('Hello, I am an admin of this server'.encode('hex'), 16)
def ext_gcd(a, b):
    c0, c1 = a, b
    a0, a1 = 1, 0
    b0, b1 = 0, 1

    while c1 != 0:
        q, m = divmod(c0, c1)
        c0, c1 = c1, m
        a0, a1 = a1, (a0 - q*a1)
        b0, b1 = b1, (b0 - q*b1)
    return a0, b0, c0

def inv(a, n):
    s, _, _ = ext_gcd(a, n)
    return s%n

if(len(argv) == 2):
  p = connect("206.189.21.230", 32167)
else:
  p = process('python3 server.py'.split())
print p.recvline()
p.recvuntil('is (')
n = eval(p.recvuntil(",", drop=True))
e = (p.recvuntil(" ", drop=True))
e = eval(p.recvuntil(")", drop=True))
print (n)
print (e)

def sign(message):
  p.sendline("1")
  print("MESSAGE")
  print(str(message))
  print("MESSAGE")
  p.sendline(str(message))
  p.recvuntil("Signature for ")
  p.recvuntil(":")
  signing = p.recvline()
  return eval(signing)

r = 3

def blinding_attack(n, e, m):
    r = None
    while True:
        a = randint(2, n-1)
        if gcd(a, n) == 1:
            r = a
            break

    m_ = pow(r, e, n) * m % n
    r_ = inv(r, n)
    return m_, r_


ma, ra = blinding_attack(n, e , m)

sa = sign(ma)

signed_cmd = sa*ra%n

print "signed", signed_cmd
p.sendline("2")
p.sendline(str(m))
p.sendline(str(signed_cmd))
p.interactive()