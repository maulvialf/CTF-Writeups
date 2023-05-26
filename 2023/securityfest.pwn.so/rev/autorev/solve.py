from pprint import pprint as pp
from pwn import *
from base64 import b64decode
from os import system
from pprint import pprint as pp
from z3 import *
import r2pipe
i = 0
p = connect("autorev-1.ctf.hackaplaneten.se", 13337)

p.sendline(b"2")

for i in range(10):
    print(f"try {i}")
    p.recvuntil(b"10: \n")
    data = p.recvline()
    data = data.strip()
    data = bytes.fromhex(data.decode())

    # open(f"binary{i}.zip", "wb").write(data)

    # extract gzip compressed data
    import gzip
    data = gzip.decompress(data)
    open(f"binary{i}", "wb").write(data)
    check = 0

    e = ELF(f"./binary{i}")

    r2 = r2pipe.open(f"./binary{i}")
    r2.cmd('aaa')

    function_info = r2.cmdj(f'afij main')

    function_addr = function_info[0]['offset']
    function_size = function_info[0]['size']
    function_offset = function_info[0]['offset']

    if(function_size > 300):
        check = 2
    else:
        check = 1


    checkc = len(r2.cmdj("afij sym.imp.strcmp"))
    if(checkc > 0):
        check = 3




    print(f'Function size: {function_size} bytes')
    print(f'Function offset: {function_offset} ')

    disfunc = disasm(e.read(function_addr, function_size))

    print(disfunc)

    r2.quit()


    if(check == 3):
        print("detected check 3")

    if(check == 2):
        dis = disfunc.split("\n")
        kotak = []
        for i in dis:
            if("mov    WORD PTR [ebp-" in i and ", ax" not in i):
                print("TEST", i)

                num = i.split(", ")[1]
                kotak.append(eval(num))
                print(i)

        pp(kotak)
        print("detected check 2")



    if(check == 1):
        dis = disfunc.split("\n")
        kotak = []
        pxor = 0
        xorval = 0
        for i in dis:
            if("mov    BYTE PTR [ebp-" in i and ", ax" not in i):
                print("TEST", i)

                num = i.split(", ")[1]
                kotak.append(eval(num))
                print(i)
            if("xor    " in i and pxor != 1):
                print("TEST", i)
                pxor += 1        
            elif("xor    " in i and pxor == 1):
                print("TEST", i)
                num = i.split(", ")[1]
                xorval = eval(num)
                print(i)
                pxor += 1



        pp(kotak)
        print("xorval", xorval)
        print("detected check 1")

    if(check == 0):
        print("unknown")


    if(check == 1):
        print("try reverse 1")
        hasil = ""
        for i in kotak:
            hasil += (chr(i ^ xorval))
        print("pload", hasil)
        p.sendline(hasil)


    elif(check == 2):
        print("try reverse 2")
        kotak1 = []
        kotak2 = []
        for i in range(0, len(kotak) // 2):
            kotak1.append(kotak[i])
            kotak2.append(kotak[i + (len(kotak) // 2)])

        hasil = b""
        for i in range(len(kotak1)):
            el1 = kotak1[i]
            el2 = kotak2[i]
            kur = (el2 - el1) & (0xffff)
            from libnum import *
            hasil += n2s(kur)

        print(hasil)
        p.sendline(hasil)


    elif(check == 3):    
        print("try reverse 3")
        # Access the .rodata section
        rodata_section = e.get_section_by_name('.rodata')

        # Read the contents of the .rodata section
        rodata_data = rodata_section.data()

        ro = rodata_data.split(b"\x00")[-2]
        hasil = ro
        print("pload", hasil)
        p.sendline(hasil)


p.interactive()
# p.close()
