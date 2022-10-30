def jalanpair(pair, paramsatu):
	satu = ord(pair[0]) - ord("1")
	dua = ord(pair[1])- ord("1")
	xparamsatu = paramsatu.copy()
	v5 = paramsatu[satu]
	if (paramdua[dua] - paramsatu[dua] < v5):
		v5 = paramdua[dua] - paramsatu[dua]

	xparamsatu[satu] -= v5
	xparamsatu[dua] += v5
	return xparamsatu

from pprint import pprint as pp
def printparam():
	pp(paramsatu)
	pp(paramdua)

def check(paramsatu):
	if (paramsatu[0] ==  0x4e and paramsatu[1] == 0x4e and paramsatu[2] == 0):
		return True
	else:
		return False


kotak = ["12", "21", "31", "13", "23", "32"]

paramdua = [0 for i in range(4)];
paramsatu = [0 for i in range(4)];

compariso1 = 0
compariso2 = 0
compariso3 = 0

dua = 0
satu = 0
paramdua[0] =   0x9c
paramdua[1] =   0x53
paramdua[2] =   0x49
paramdua[3] = 	0

paramsatu[0] = 0x9c
paramsatu[1] = 0
paramsatu[2] = 0
paramsatu[3] = 0

kotakx = ["12", "21", "31", "13", "23", "32"]
from collections import defaultdict
from collections import deque
kotak = deque()
# kotak.append(kotakx)
for x in kotakx:
	kotak.append(("", x, [], paramsatu.copy()))

graph = defaultdict(list)
# distances of nodes
dist = {}

while kotak:
	u = kotak.popleft()
	curr    = u[0]
	move    = u[1]
	deadend = u[2]
	param   = u[3]
	newparamsatu = jalanpair(move, param)
	print(curr, move, param, newparamsatu, deadend, newparamsatu in deadend)
	if(check(newparamsatu)):
		print(curr + move)
		break
	elif(newparamsatu in deadend):
		continue
	else:
		newdeadend = deadend.copy()
		newdeadend.append(newparamsatu)
		deadend.append(newparamsatu)
		for x in kotakx:
			kotak.append((curr + move, x, newdeadend, newparamsatu))
