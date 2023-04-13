import gdb
import string
import time
def clean_reg(_str):
    return int(_str.split("\t")[1].rstrip('\n'), 16)



gdb.execute('file t8.exe')
gdb.execute('set pagination off')
from binascii import unhexlify

for i in range(32767):
    print (i)

    gdb.execute('r')
    gdb.execute('set $ecx=0')
    gdb.execute("c")

    eax = gdb.execute('x/wx $eax', True, True)
    eax2 = gdb.execute('x/wx $eax+4', True, True)

    eax = (clean_reg(eax))
    eax2 = (clean_reg(eax2))
    
    harus1 = 92066761
    harus2 = 300529018
    if(eax == harus1 and eax2 == harus2):
        print( eax, harus1)
        print (eax2, harus2)
        print (i)
        print (i)
        print (i)
        print (i)
        print (i)
        break