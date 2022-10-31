import hashlib
from tqdm import tqdm

import sha3
import concurrent.futures as cf

flaghash = "1a5af994ebd3c33556f936d8cf5b0d84b7b7ee98313b2044902bc8efd2b6f60a"


def brute(i):
	if(i % 10000 == 1):
		print (i)
	data=str(i)
	guesshash = data
	for i in range(1000):
		guesshash = sha3.sha3_256(guesshash.encode('utf-8')).hexdigest()
		if(flaghash == guesshash):
			print("acquired ", i, flaghash, guesshash)
			return 1
	return 0

from time import time


def run():
	loop = [x for x in range(20000)]
	with cf.ThreadPoolExecutor() as p:
		processing = tqdm(p.map(brute,loop), total=len(loop))
	return processing


awal = time()
for i in range(20000):
	brute(i)

akhir = time()
print(akhir - awal)


awal = time()

run()

akhir = time()
print(akhir - awal)
