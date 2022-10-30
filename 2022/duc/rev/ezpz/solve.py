from sys import *
import hashlib
from z3 import *
from pprint import pprint as pp

LEN = 14
s = Solver()

kotak = [[BitVec(((j * 14) + i), 8) for i in range(LEN)] for j in range(LEN)]

for j in range(LEN):
	for i in range(LEN):
		s.add(kotak[j][i] <= 1)
		s.add(kotak[j][i] >= 0)
# pp(kotak)

for j in range(LEN):
	ev = "3 == ("
	for i in range(LEN):
		if(i == 0):
			ev += "kotak[{}][{}]".format(j, i)
		else:
			ev += "+kotak[{}][{}]".format(j, i)
		
	exec("s.add({}))".format(ev))


for j in range(LEN):
	ev = "3 == " 
	for i in range(LEN):
		if(i == 0):
			ev += "kotak[{}][{}]".format(i, j)
		else:
			ev += "+kotak[{}][{}]".format(i, j)
		
	exec("s.add({})".format(ev))



kureng = """aaaaabbbbcccdd 
aaaaabbbbccccd 
aaeaaabbbccccd 
aaefaabbbcccgd 
eeefffffbccggd 
feeffffggggggd 
fffffffhhhgggd 
ffffhhhhhhgggd 
ffijjjjhkkllmd 
iiijjkkkkkllmm 
iijjjkkkklllmm 
iijjjkkkklllmm 
ijjjjjkknnllmm 
ijjjjnnnnnllll""".split("\n")

charmap = [[0 for i in range(LEN)] for j in range(LEN)]

for j in range(LEN):
	for i in range(LEN):
		charmap[j][i] = ord(kureng[j][i]) - ord('a') + 1


for x in range(1, 15):
	ev = ""
	for j in range(LEN):
		for i in range(LEN):
			if(charmap[j][i] == x):
				append = "kotak[{}][{}] * 1 + ".format(j, i)
				ev += append
	ev += "0"
	exec("s.add(3 == {})".format(ev))

jum = 0
for j in range(LEN-1):
	for i in range(LEN-1):
		ev = ""
		ev += "kotak[{}][{}] + kotak[{}][{}] + kotak[{}][{}] + kotak[{}][{}]".format(j, i, j+1, i, j, i+1, j+1, i+1)
		exec("s.add(({}) <= 1)".format(ev))
		print("s.add(({}) <= 1)".format(ev))


www = s.check()    
model = s.model()
def drawmodel(model):
	manga = [[0 for i in range(LEN)] for j in range(LEN)]
	for j in range(LEN):
		for i in range(LEN):
			index = eval(str(model[(j * 14) + i])[2:])
			value = eval(str(model[model[(j * 14) + i]]))
			
			manga[index // 14][index % 14] = value
	return manga
manga = drawmodel(model)

ev = "Or("
for j in range(LEN):
	for i in range(LEN):
		ev += "kotak[{}][{}] != {} , ".format(j, i, manga[j][i])
ev = ev[:-2]
ev += ")"
exec("s.add({})".format(ev))

def joining(model):
	x = ""
	for i in model:
		x += ''.join(map(str, i))
		# x += "\n"
	return x
model = joining(manga)
pp(manga)
print(jum, model)
jum += 1