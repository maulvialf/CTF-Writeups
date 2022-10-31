import string
import gdb

gdb.execute("file chal")
gdb.execute("b *0x0000555555554000+0x000000000000164c")
gdb.execute("set print repeats 0")

def extract_mem(mem):
	print("debug")
	print(mem)
	print("debug")
	memx = mem.split(':	"')[1].split('"')[0]
	return memx
gett = "iCproposeCtoCP"
loads = ""
loads += gett
loads += "." * (53 - len(loads))

def similarity(mem1, mem2):
	get = 0
	for i in range(len(mem1)):
		if(mem1[i] == mem2[i]):
			get += 1

	return get

data = string.ascii_letters + "{_}" + string.digits
flag = list(loads)

high = len(gett)-1
for i in range(len(gett), 53):
	tempflag = flag
	chara = '.'
	for ch in data:
		tempflag[i] = ch
		tflag = ''.join(tempflag)
		open('payload', 'w').write(tflag)
		gdb.execute("r <'payload'")
		memory1 = gdb.execute("x/s (0x555555556050)", False, True)
		memory2 = gdb.execute("x/s (0x7fffffffdad0)", False, True)
		gdb.execute("c")
		mem1 = extract_mem(memory1)
		mem2 = extract_mem(memory2)
		sim = similarity(mem1, mem2)
		print(tflag, high, sim)
		if(sim > high):
			high = sim
			chara = ch
			break
	flag[i] = chara

# iCproposeCtoCconsiderCtheCquestionCcanCmachinesCthink
# uiuctf{i_propose_to_consider_the_question_can_machines_think}