import gdb


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
# gdb.execute("b *0x000055555555570B")
flagcont = ""
brute = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!{}"
for zz in range(100):
	for ff in range(len(brute)):
		tebak = brute[ff]
		flagcontx = flagcont + tebak

		gdb.execute("file vm")

		from string import printable

		open("input", 'w').write("c0d3_r3d_5h" +"b"*37 + flagcontx )

		gdb.execute("b *0x000055555555570B")

		gdb.execute("r ./bin8 < input")

		flag = ""

		for i in range(11):
			rax = gdb.parse_and_eval("$rax")
			print(hex(rax))
			rbp_minus_4_byte = int(gdb.execute("x/1xb $rbp-0x4", to_string=True).split(":")[1].strip(), 16)
			print(chr(rbp_minus_4_byte))
			gdb.execute("set *((unsigned char*) ($rbp-0x4)) = {}".format(rax))
			flag += chr(rax)
			print(flag)
			print("finalflag", flagcontx)

			gdb.execute("c")


		kamus = dict()
		dapet = 0
		for yy in range(len(flagcont)):
			gdb.execute("c")
		gdb.execute("c")

		rax = int(gdb.parse_and_eval("$rax"))
		rcx = int(gdb.parse_and_eval("$rcx"))
		print(rax, rcx)

		if(rax == rcx):
			print("finalflag", flagcontx)
			dapet = 1
			flagcont = flagcontx
			break
