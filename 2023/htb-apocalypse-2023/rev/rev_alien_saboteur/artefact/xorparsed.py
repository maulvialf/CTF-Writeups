data = list(open("bin8", 'rb').read())

for i in range(0x000002c0+13, 0x00000590+1):
	data[i] = chr(ord(data[i]) ^ 0x45)

databaru = ''.join(data)
open('bin9', 'wb').write(databaru)