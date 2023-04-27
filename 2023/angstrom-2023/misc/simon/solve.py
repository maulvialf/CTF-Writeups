# run on the vps to beat connection limit :)
from pwn import *

p = connect("challs.actf.co", 31402)

j = 0
while True:
    try:
        print(j)
        data = p.recvline()
        print(data)
        data = data.split(b"letters of ")
        word = []
        for i in range(1, len(data)):
            fw = data[i].split(b" ")[0]
            fw = fw.strip()
            word.append(fw)
        from pprint import pprint as pp
        # print(word)
        hasil = word[0][:3] + word[1][-3:]
        print(hasil, j)
        p.sendline(hasil)
        j += 1
    except Exception as e:
        print(e)
        break

p.interactive()