import gdb
gdb.execute("file vm")
gdb.execute("b *0x00005555555565B0")

"""
*RAX  0x1a2c
 RBX  0x0
*RCX  0x1010
*RDX  0x154a


 RAX  0xfca
 RBX  0x0
 RCX  0x1010
 RDX  0x11a3

 RAX  0xfca
 RBX  0x0
 RCX  0x1010
 RDX  0x11a3
 """

# for i in range(1000):
gdb.execute("context")

defaultkotak = [6700, 4042, 5883, 4788, 7124, 8140, 7810, 5350, 2772, 12876, 6460, 7038, 7918, 2496, 17400, 4788, 1050, 11500, 4200, 2976, 3432, 3480, 19032, 8176, 12960, 16200, 8712, 3937, 6930, 11968, 5928, 17280, 13310, 4379, 1380, 7384, 555, 8607, 12584, 5658, 1224, 4785, 5390, 11481, 3773, 3317, 10692, 15408, 1441, 5529, 18860, 5405, 1045, 6272, 13462, 18271, 15836, 8282, 15908, 9760, 8827, 14231, 13344, 532, 5680, 15554, 749, 7808, 4949, 7568, 9462, 8760, 1629, 13800, 9944, 11304, 11712, 3680, 12240, 360, 3400, 11590]

import string
brute = string.ascii_letters + string.digits + string.punctuation
brute = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!{}_@#$%&()*+,-./:;<=>?[]^|~'

flag = ["A" for i in range(82)]
for loop in range(82):
    for ch in brute:
        # print(repr(brute))
        kamus = dict()
        flag[len(flag) - 1 - loop] = ch
        strflag = "".join(flag)
        pload = strflag 

        gdb.execute(f"r ./program <<< '{strflag}'")
        for x in range(len(flag)+1):
            gdb.execute("c")
        kotak = []
        kotak2 = []
        for j in range(loop):
            gdb.execute("c")

        eax = gdb.parse_and_eval("$eax")
        edx = gdb.parse_and_eval("$edx")
        eax = int(eax)
        edx = int(edx)
        print(strflag, ch, eax, edx)
        if(eax == edx):
            print("found", ch, strflag)   
            break

        gdb.execute("c")