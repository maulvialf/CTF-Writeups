import gdb
import string
import time
def clean_reg(_str):
    return int(_str.split("\t")[1].rstrip('\n'), 16)
gdb.execute("""define hook-quit
    set confirm off
end""")


gdb.execute('file t8.exe')
gdb.execute('set pagination off')
from binascii import unhexlify
ecx = 0

gdb.execute('r')
gdb.execute('func')
gdb.execute('set $ecx = {}'.format(arg0))
ecx = gdb.execute('info register', True, True)
print(ecx)

gdb.execute("c")

eax = gdb.execute('x/wx $eax', True, True)
eax2 = gdb.execute('x/wx $eax+4', True, True)

eax = (clean_reg(eax))
eax2 = (clean_reg(eax2))

# asli
harus1 = 92066761
harus2 = 300529018

# nyoba
# harus1 = 1342820626
# harus2 = 483847753

if(eax == harus1 and eax2 == harus2):
    print( hex(eax), harus1)
    print( hex(eax2), harus2)
    print(("status","success", arg0))

else:
    print(("status","failed", "arg0"))

gdb.execute('exit')
gdb.execute('y')