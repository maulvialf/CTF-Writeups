import string
import gdb

gdb.execute("file babyrev")
gdb.execute("pie 0x000000000000158D")
def extract_mem(mem):
	'''
	0x7fffffffda54:	0x0008579700010441
	0x010441
	'''
	# print(repr(mem))
	valuemem = mem.split(":\t")[1][:-1]
	valuememint = int(valuemem, 16) & 0xffffffff
	return valuememint


flagchar = ' 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[]^_{|}~'
contoh = "corctf{AAAAAAAAAAAAAAAAAAAA}"
dataarr  = "A" * 20
dataarr  = list(dataarr)
for i in range(0, 20):
	for ch in flagchar:		
		dataarrtemp = dataarr
		# print(dataarr)
		dataarrtemp[i] = ch
		datatemp = ''.join(dataarrtemp)
		datatemp = "corctf{" + datatemp + "}"
		# print(datatemp)
		pload = datatemp
		open('/tmp/output', 'w').write(pload)
		gdb.execute("r < /tmp/output")

		memory1 = gdb.execute("x/c {}".format(0x7fffffffde30+i), False, True)
		memory2 = gdb.execute("x/c {}".format(0x555555558010+i), False, True)

		chmemory1 = extract_mem(memory1)
		chmemory2 = extract_mem(memory2)
		print(ch, datatemp)
		if(chmemory1 ==  chmemory2):
			print ("Acquired")
			print(ch, datatemp)
			dataarr[i] = ch
			print ("Acquired")
			break

# corctf{see?_rEv_aint_so_bad}