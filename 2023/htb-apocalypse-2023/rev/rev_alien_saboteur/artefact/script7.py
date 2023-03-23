import gdb

# class SaveRaxByte(gdb.Breakpoint):
#     def __init__(self):
#         super().__init__("*0x5555555563cd")
#         self.silent = True

#     def stop(self):
#         with open("test", "wb") as f:
#             rax = int(gdb.parse_and_eval("$rax"))
#             rax_byte = rax & 0xFF
#             f.write(bytes([rax_byte]))
#         return False

# SaveRaxByte()


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
one = 0
# asffasf
# gdb.execute("b *0x00005555555559DB")
# gdb.execute("b *0x00005555555555FF")
# gdb.execute("b *0x0000555555555409")
gdb.execute("b *0x000055555555570B")

gdb.execute("file vm")


hole = ""

"""
B => @
A => C
"""
kamus = dict()

from string import printable
brute = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!_{}"
tebak = "_"
# open("input", 'w').write("ABCDEFGHIJKLMNOP")
# open("input", 'w').write("c0d3_r3d_5h" + tebak * 100)

default = "A" * 100
out = ""
kamus = {7: 3,
 8: 6,
 9: 5,
 10: 23,
 11: 9,
 12: 8,
 13: 4,
 14: 26,
 15: 13,
 16: 1,
 17: 32,
 18: 18,
 19: 31,
 20: 2,
 21: 16,
 22: 14,
 23: 10,
 24: 11,
 25: 21,
 26: 34,
 27: 24,
 28: 17,
 29: 12,
 30: 30,
 31: 22,
 32: 28,
 33: 35,
 34: 29,
 35: 33,
 36: 7,
 37: 0,
 38: 20,
 39: 15,
 40: 19,
 41: 25,
 42: 27}

for xyz in range(42,100):
	hole = list(default)
	hole[xyz] = "B"
	hole = ''.join(hole)
	open("input", 'w').write("c0d3_r3d_5h" + hole)
	# open("input", 'w').write("c0d3_r3d_5h" + "{}\n".format(tebak * 10) +"{}\n".format(tebak * 10)+"{}\n".format(tebak * 10)+"{}\n".format(tebak * 10))

	gdb.execute("r ./bin8 < input")
	parsed = open("parsed", 'a')
	parsed.write("############\n")
	parsed.close()


	# parsed = open("parsed", 'a')
	# parsed.write("rdi {}\n".format(data))
	# parsed.close()


	flag = ""
	for i in range(11):
		rax = gdb.parse_and_eval("$rax")
		print(hex(rax))
		rbp_minus_4_byte = int(gdb.execute("x/1xb $rbp-0x4", to_string=True).split(":")[1].strip(), 16)
		print(chr(rbp_minus_4_byte))
		gdb.execute("set *((unsigned char*) ($rbp-0x4)) = {}".format(rax))
		flag += chr(rax)
		print(flag)
		gdb.execute("c")

	gdb.execute("c")
	# e]wJ3@Vlu7]5nnf6l6pewj1y]1pln32661]
	# g_uH1BTnw5_7lld4n4rguh3{_3rnl10443_
	#             HTB{5w1rl_4r4und_7h__4l03l


	for i in range(36):
		rax = gdb.parse_and_eval("$rax")
		print(hex(rax))

		rbp_minus_4_byte = int(gdb.execute("x/1xb $rbp-0x4", to_string=True).split(":")[1].strip(), 16)
		print(chr(rbp_minus_4_byte))
		gdb.execute("set *((unsigned char*) ($rbp-0x4)) = {}".format(rax))
		from pprint import pprint as pp
		if(chr(rax) == "@"):
			kamus[xyz] = i 
			pp(kamus)

		print("kamus")
		print(xyz, i)
		pp(kamus)
		flag += chr(rbp_minus_4_byte)
		print(flag)
		gdb.execute("c")	
		print(rax)
		# kamus[i] = tebak
		# exit()

