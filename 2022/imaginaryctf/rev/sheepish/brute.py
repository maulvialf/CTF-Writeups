from pwn import *

context.log_level = 'critical'

brute = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
import string
# brute = string.printable
print(repr(brute))
flag = "ictf{d0_sh33p_b@@@?}"
for i in range(100):
    for ch in brute:
        flagsubmit =  flag + ch
        p = process("python3 beauti.py".split())
        p.sendline(flagsubmit)
        out = p.recvall()
        # print(out)
        print(i, flagsubmit)
        p.close()

        if(b"is not callable" in out):
            print(flag)
            flag += ch
            break
