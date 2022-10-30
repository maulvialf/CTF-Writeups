data = open("pagarin-baa9f63564a49e7f48a88fddf05220b0", 'rb').read()
datab = list(data)
for i in range(len(data)):
	if(data[i:i+2] == "\x0F\x0B"):
		print hex(0x0000555555554000+ i),  ord(data[i+2])
		# if(0x0000555555554000+ i < 0x00005555555560F5 and 0x0000555555554000+ i > 0000555555555340):
			# datab[i]   = "\x90"
			# datab[i+1] = "\x90"

data = ''.join(datab)
open('newpagarin', 'wb').write(data)


"""
.text	0000555555555340	00005555555560F5	R	.	X	.	L	para	000C	public	CODE	64	FFFFFFFFFFFFFFFF	FFFFFFFFFFFFFFFF	0014	FFFFFFFFFFFFFFFF	FFFFFFFFFFFFFFFF


0x55555555569b 3 print 
0x5555555558d0 2 naon ga diakses
0x555555555ec5 0 init func
0x555555555f05 1 init func
0x555555555fb6 0 main
0x555555557287 119

"""


