'''
b *0x0000555555554000+0x000000000000130C
b *0x555555558038
b *0x55555555803b
'''

chara = "_" + string.ascii_letters + "{}" + string.digits
# guess chara1
def extract(data):
	return eval(data.split(":	")[1])

# print(repr())
gdb.execute("file signals")

flag = "ui"
dummy = "." * 100
for j in range(100):
	tempflag = flag + '.'
	gdb.execute("del")
	gdb.execute("b *0x0000555555554000+0x000000000000130C")
	gdb.execute("r {}".format(tempflag))
	gdb.execute("si")
	
	for i in range(len(tempflag)):
		gdb.execute("b *$rip+0x1b")
		gdb.execute("c")
		gdb.execute("si")

	data = gdb.execute("x/10i $rip",  False, True)
	print("debug")
	print(tempflag)
	print(chara)
	print(data)
	print("debug")
	kotak = gdb.execute("x/c $rip",  False, True)
	kotak = extract(kotak)
	acq = kotak ^ ord('.') ^ 0x48
	flag += chr(acq)
	print (flag)
	print (flag)
	print (flag)