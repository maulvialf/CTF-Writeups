import gdb
import string
import time
def clean_reg(_str):
    return int(_str.split("\t")[1].rstrip('\n'), 16)
gdb.execute("""define hook-quit
    set confirm off
end""")


gdb.execute('file ctfd_plus')
a = "A" * 47

open('a', 'w').write(a)
gdb.execute('b *0x000055555555510B')
gdb.execute('r < a')
dec = ""
for i in range(47):
    second = gdb.parse_and_eval("$eax")
    flag = second & 0xff
    dec += chr(flag)
    print(chr(flag))
    print(dec)
    gdb.execute("set $eax=0x41")
    gdb.execute("c")