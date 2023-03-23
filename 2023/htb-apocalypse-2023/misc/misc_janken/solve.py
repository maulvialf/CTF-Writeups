from pwn import *
from sys import *

p = connect("167.172.49.140", 30693)

# p.recvuntil(">> ")
p.sendline("1")

for i in range(99):
	print(i)
	p.recvuntil(">> ")
	p.sendline("rockscissorspaper")

p.interactive()