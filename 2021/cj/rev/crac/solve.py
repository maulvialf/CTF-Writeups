import string
import gdb

gdb.execute("file crac")
gdb.execute("b *0x0000555555400000+0x0000000000000A7C")

# memory = gdb.execute("x/gx $rbp-0x3ec", False, True)
# reg_eax = gdb.execute("i r eax", False, True)

def extract_mem(mem):
	'''
	0x7fffffffda54:	0x0008579700010441
	0x010441
	'''
	valuemem = mem.split("          ")[1][:-1]
	valuememint = int(valuemem, 16) & 0xffffffff
	return valuememint

def extract_reg(reg):
	reg = reg.split("            ")[1].split('          ')[0]
	regint = int(reg, 16)	
	return regint

# print("DEBUG")
# print(extract_mem(memory))
# print(extract_reg(reg_eax))
# print("DEBUG")

panjangflag = 44
data = "A" * panjangflag
dataarr = list(data)

# flagchar = string.letters + "{_}" + string.digits
flagchar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_{}'

# flagchar = ' 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[]^_{|}~'

for i in range(0, panjangflag):
	for ch in flagchar:		
		dataarrtemp = dataarr
		# print(dataarr)
		dataarrtemp[i] = ch
		datatemp = ''.join(dataarrtemp)
		# print(datatemp)

		open('tmp', 'w').write(datatemp)
		gdb.execute("r < tmp ")
		
		for j in range(i):
			gdb.execute("c")
		reg_eax = gdb.execute("i r eax", False, True)
		reg_edx = gdb.execute("i r edx", False, True)
		print(extract_reg(reg_edx))

		regeaxint = extract_reg(reg_eax)
		regedxint = extract_reg(reg_edx)
		print(ch, regeaxint, regedxint)
		if(regeaxint ==  regedxint):
			print ("Acquired")
			print(ch, regeaxint, regedxint)
			dataarr[i] = ch
			print ("Acquired")
			break