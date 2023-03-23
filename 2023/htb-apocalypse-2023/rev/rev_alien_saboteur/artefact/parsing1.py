from pwn import *
from sys import *
kotak = []
kotak.append("vm_addi")
kotak.append("vm_sub")
kotak.append("vm_subi")
kotak.append("vm_mul")
kotak.append("vm_muli")
kotak.append("vm_div")
kotak.append("vm_cmp")
kotak.append("vm_jmp")
kotak.append("vm_inv")
kotak.append("vm_push")
kotak.append("vm_pop")
kotak.append("vm_mov")
kotak.append("vm_nop")
kotak.append("vm_exit")
kotak.append("vm_print")
kotak.append("vm_putc")
kotak.append("vm_je")
kotak.append("vm_jne")
kotak.append("vm_jle")
kotak.append("vm_jge")
kotak.append("vm_xor")
kotak.append("vm_store")
kotak.append("vm_load")
kotak.append("vm_input")

# print(len(kotak))
# print(hex(len(kotak)))

# print(kotak)

data = open("bin9", 'rb').read()
data = data[3:]
x = 0
for i in range(0, len(data), 6):
	inst = (ord(data[i]) - 1)
	# print(inst)
	x += 1
	# print(inst)
	print(hex(x-1), kotak[inst], ((data[i+1])), hex(ord(data[i+1])), hex(ord(data[i+2])), hex(ord(data[i+3])), hex(ord(data[i+4])), hex(ord(data[i+5])))