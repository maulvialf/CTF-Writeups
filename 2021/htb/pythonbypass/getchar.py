from pprint import pprint as pp 

kotak = dict()
for i in range(100):
	try:
		docs = ().__class__.__base__.__subclasses__()[i].__doc__
		for j in range(len(docs)):
			kotak[docs[j]] = i, j
	except:
		continue

pp(kotak)