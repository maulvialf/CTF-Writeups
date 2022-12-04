from pwn import *
hasil = ""
for j in range(0, 591):
    data = open("bertanya" + str(j)).read()

    sleep = "48C7C023000000".decode('hex')
    x = 0
    for i in range(0, len(data)):
        if(data[i:i+len(sleep)] == sleep):
            x = i
            break

    z = data[x+18:x+24]
    op1 = z[2]
    op2 = z[5]
    # xor
    if(z[1].encode('hex') == 'f2'):
        hasil += (xor(op1, op2))

    # add
    if(z[1].encode('hex') == 'c2'):
        hasil += (chr(ord(op2) - ord(op1)))

    # sub
    if(z[1].encode('hex') == 'ea'):
        hasil += (chr((ord(op2) + ord(op1) )% 256))

    print(hasil)