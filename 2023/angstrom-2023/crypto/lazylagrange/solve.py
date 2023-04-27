from pwn import *

def query1(num):
        

    p.recvuntil(": ")
    p.sendline("1")
    p.recvuntil("> ")
    p.sendline(str(num))
    data = p.recvline()
    data = data.strip()
    # if(debug == 1):
        
    return int(data)


from libnum import *
debug = 1
# p = process("python3 lazylagrange.py".split())
p = connect("challs.actf.co", 32100)

x = query1(128)
s = n2s(x)
b = s2b(s)
b = b[-18*7:]
flag = [chr(int(b[i:i+7], 2)) for i in range(0, len(b), 7)]
flag = flag[::-1]
print(flag)
kotak = ""
for i in flag:
    kotak += f"{ord(i)} "
kotak = kotak.strip()
print(kotak)
p.recvuntil(": ")
p.sendline("2")
p.recvuntil("> ")
p.sendline(kotak)
k  = p.recvline()
print(k)
k = list(k.split())
hasil = ""

hasil = [" " for i in range(18)]
y = 0
for i in k:
    hasil[int(i)] = flag[y]
    print("".join(hasil))
    y +=1
# print(kotak)
p.interactive()