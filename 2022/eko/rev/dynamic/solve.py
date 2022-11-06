import gdb

def extract_mem(parammem):
	'''
	0x7fffffffda54:	0x0008579700010441
	0x010441
	'''
	raw = gdb.execute("x/gx {}".format(parammem), False, True)
	parammem = gdb.parse_and_eval("{}".format(parammem))
	print('raw', raw)
	print('parammem', parammem)
	extract = raw.split("{}:".format(parammem))[1].strip()
	extractval = eval(extract)
	print('extract', hex(extractval))
	return extractval

flag = ""
def extract_reg(paramreg):
	return 0

init = 0x0000000000403F70
gdb.execute('b *{}'.format(init))
gdb.execute('file dynamic')
gdb.execute('r {}'.format("A" * 76))

for i in range(200):

	param = gdb.parse_and_eval("$eax")
	mem   = extract_mem("$rbp-{}".format(hex(0x54-i))) & 0xff
	compare = init + 0xa
	gdb.execute('b *{}'.format(compare))
	gdb.execute("c")
	hasil = mem ^ param
	second = gdb.parse_and_eval("$eax")
	flagchar = second ^ mem
	flag += chr(flagchar)
	print(hex(second), hex(mem))
	print(flag)

	gdb.execute("set $eax={}".format(hasil))	
	init = compare + 39 
	if(i > 0x48):
		init -= 3			
	print("next, ", hex(init))
	print("i", hex(i))
	gdb.execute('b *{}'.format(init))
	gdb.execute("c")


# EKO{AFLFTW_b2379f00aa927b1372e8af7cc5c89200d9da229fe183c8cd01dc1969164d99f}