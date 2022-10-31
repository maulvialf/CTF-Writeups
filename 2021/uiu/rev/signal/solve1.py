'''
b *0x0000555555554000+0x000000000000130C
b *0x555555558038
b *0x55555555803b
'''

chara = "_" + string.ascii_letters + "{}" + string.digits
# guess chara1


# print(repr())
gdb.execute("file signals")

flag = "uiuctf{another"
for j in range(100):
	for i in chara:
		tempflag = flag
		tempflag += i
		gdb.execute("del")
		gdb.execute("b *0x0000555555554000+0x000000000000130C")
		gdb.execute("r {}".format(tempflag))
		gdb.execute("si")
		
		for i in range(len(tempflag)):
			gdb.execute("b *$rip+0x1b")
			gdb.execute("c")
			gdb.execute("si")

		# gdb.execute("b *$rip+{}".format(0x1b * len(tempflag)))
		# gdb.execute("c")
		# gdb.execute("si")


		

		data = gdb.execute("x/10i $rip",  False, True)
		print("debug")
		print(tempflag)
		print(chara)
		print(data)
		print("debug")

		if("xor    rbx,rbx" in data):
			print("FOUND")
			print("FOUND")
			print("FOUND")
			print("FOUND")
			print("FOUND")
			print("FOUND")
			print("FOUND")
			print(tempflag)
			flag = tempflag
			break

