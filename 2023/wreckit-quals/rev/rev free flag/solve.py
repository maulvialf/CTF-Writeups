from pwn import *
k = [119, 74, 101, 91, 107, 81, 116, 44, 16, 99, 20, 107, 76, 41, 127, 122, 20, 118, 71, 71, 80, 125, 82, 117, 17, 118, 84, 44, 20, 118, 127, 44, 84, 44, 83, 44, 78, 71, 78, 43, 87, 122, 73, 43, 127, 126, 82, 113, 69, 118, 68, 116, 89, 101]
hasil = ""
for i in range(len(k)):
    if(i%2 == 1):
        hasil += chr(k[i] ^ 24)
    else:
        hasil += chr(k[i] ^ 32)
print(hasil)
