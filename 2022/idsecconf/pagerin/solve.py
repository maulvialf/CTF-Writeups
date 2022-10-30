#!/usr/bin/python2

# PAGARNYA_GAN=true ./solve.py
from pwn import *
from sys import *

context.arch = "amd64"
# context.arch = "i386"
# context.log_level = 'DEBUG'

#libc = ELF('libc.so.6', checksec=False)
#libc = ELF('/usr/lib32/libc.so.6')
libc = ELF('/lib/x86_64-linux-gnu/libc.so.6', checksec=False)       


e = ELF('pagarin-baa9f63564a49e7f48a88fddf05220b0')
elfROP = ROP(e)
# cmd = """
# b *{}
# b *{}
# b *{}
# """.format(0x0000555555554000+0x0000000000001FB6, 0x0000555555554000+0x0000000000001F4A, 0x0000555555554000+0x0000000000001F75)
    

# cmd = """
# b *{}
# b *{}
# """.format(0x0000555555554000+ 0x00000000000016FD, 0x0000555555554000+0x0000000000001736)
skip = "c\n" * 0x9a

cmd = """
handle SIGILL pass nostop noprint
set pagination off
set follow-fork-mode child
#b *{}
# b *{}
# c
# c
# set $rip={}
# b *{}
# b *{}
# b *0x555555555a6d
# b *0x0000555555555F75
# b *0x7ffff7adb520
# b __restore_rt+7
# b *0x0000555555555FCA
# b *0x0000555555556053
# b *0x00005555555558D0
# c



b *0x0000555555556077
# c
# set $rax=0x00005555555557CE
# context
b *0x0000555555555926
# c

# b *0x555555555926
# b *0x0000555555555FCA


# b *0x0000555555555EBC

b *0x0000555555555EC1
c
set $rax=0

""".format(0x0000555555554000+ 0x00000000000017B2,
    0x0000555555554000+0x0000000000001A76,
    0x0000555555554000+0x00000000000017CE,
    0x0000555555554000+0x0000000000001A73,
    0x0000555555554000+0x0000000000001AC2)
# cmd = """
# """.format()


if(len(argv) == 2):
    p = connect("193.57.159.27", 46343)
else:
    p = process('pagarin-baa9f63564a49e7f48a88fddf05220b0')
    # p = gdb.debug('./pagarin-baa9f63564a49e7f48a88fddf05220b0'.split(), cmd)


test =  [0xD3, 0xED, 0xB0, 0xED, 0xD3, 0x25, 0xED, 0x48, 0xD3, 0xED,    
  0xB0, 0xED, 0xD3, 0x25, 0xED, 0x48, 0xD3, 0xED, 0xB0, 0xED, 
  0xD3]

# kotak = ""
# for i in test:
#     value  += ((int((i / 13)+((i / 13)%13))))  
#     print(value)
#     kotak += chr(value)

# kotak = "_apa_yah_apa_yah_apa_"
# kotak = "2" * 310
import random
import string

def get_random_string(length):
    # choose from all lowercase letter
    # letters = string.ascii_lowercase
    letters = '1'
    result_str = ''.join(random.choice(letters) for i in range(length))
    # print("Random string of length", length, "is:", result_str)
    return result_str

# kotak = get_random_string(310)
# print(kotak)
p.sendline("1223312312233123122331231223312312233123122331231223312312233123312312233123122331231223312312233123122331231223312312233123312312233123122331231223312312233123122331231223312312233123312312233123122331231223312312233123122331231223312312233123122331233123122331231223312312233123122331231223312312233123122331")
p.interactive()

