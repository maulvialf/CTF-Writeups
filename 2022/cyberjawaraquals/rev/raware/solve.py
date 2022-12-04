filename = "./flag.docx.sad"
data = open(filename, 'rb').read()
decode = ""
abc = 0
def randomseeder(seeder):
    cmd  = "ConsoleApplication1.exe"
    from subprocess import check_output as co
    return co([cmd, str(seeder)])
    
for z in range(0, len(data), 72):
    kotak = ""
    for i in range(z+0, z+72, 9):
        kotak += data[i].encode('hex')

    seed = int(kotak, 16)
    seed = seed & 0xffffffff
    dapet = randomseeder(seed)
    dapet = dapet.strip()
    dapet = dapet.split('\n')
    dapet = map(int, dapet)
    x = -1
    xxx = ""
    for i in range(z+0, z+72):
        if(i % 9 != 0):
            x += 1
            xxx += chr(ord(data[i]) ^ dapet[x])
    decode += xxx
    # print(abc, xxx)
    abc += 1

open(filename+".dec", 'wb').write(decode)
# print(decode)