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

# gdb.execute("b  *0x5555555563cd")

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
kamus = dict()
kamus2 = dict()
from string import printable
brute = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!_{}"
# brute = printable
flagcont = ""
for ff in range(1):
	tebak = brute[ff]
	flagcontx = "ABCDEFGH"
	# open("input", 'w').write("ABCDEFGHIJKLMNOP")
	open("input", 'w').write("c0d3_r3d_5h" + "\n"*2+"b"*14 + flagcontx)
	gdb.execute("delete breakpoints ")

	# inv
	gdb.execute("b *0x0000555555556159")


	gdb.execute("r ./bin8 < input")

	# cmp
	gdb.execute("b *0x000055555555570B")
	gdb.execute("c")


	parsed = open("parsed", 'a')
	parsed.write("############\n")
	parsed.close()


	# parsed = open("parsed", 'a')
	# parsed.write("rdi {}\n".format(data))
	# parsed.close()


	flag = ""
	# for i in range(11):
	# 	rax = gdb.parse_and_eval("$rax")
	# 	print(hex(rax))
	# 	rbp_minus_4_byte = int(gdb.execute("x/1xb $rbp-0x4", to_string=True).split(":")[1].strip(), 16)
	# 	print(chr(rbp_minus_4_byte))
	# 	gdb.execute("set *((unsigned char*) ($rbp-0x4)) = {}".format(rax))
	# 	flag += chr(rax)
	# 	print(flag)
	# 	gdb.execute("c")

	gdb.execute("c")
	# gdb.execute("c")

	from pprint import pprint as pp
	dapet = 0
	for z in range(len(flagcontx)):
		rax = gdb.parse_and_eval("$rax")
		print(hex(rax))
		rbp_minus_4_byte = int(gdb.execute("x/1xb $rbp-0x4", to_string=True).split(":")[1].strip(), 16)
		print(chr(rbp_minus_4_byte))
		gdb.execute("set *((unsigned char*) ($rbp-0x4)) = {}".format(rax))
		flag += chr(rbp_minus_4_byte)
		print(flag)
		print(rax)
		print(ord(tebak), int(rax))
		if(ord(tebak) == int(rax)):
			dapet = 1
			flagcont = flagcontx
			break
	if(dapet == 1):
		break