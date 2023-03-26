data = open("fishing.exe", "rb").read()
databyte = list(data)
for i in range(len(data)):
    if(data[i:i+2] == "ebff".decode('hex')):
        print(databyte[i:i+3])
        for j in range(3):
            databyte[i+j] = chr(0x90)
        print(databyte[i:i+3])

newdata = ''.join(databyte)
open('fishing-patch.exe', 'wb').write(newdata)