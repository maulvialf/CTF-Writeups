import gdb
"""
libc_2.31.so:00007FFFF7E72186 38 10                   cmp     [rax], dl
libc_2.31.so:00007FFFF7E72188 C3                      retn
"""
import string
import time

gdb.execute("""define hook-quit
    set confirm off
end""")


gdb.execute('file a.out_patched')
gdb.execute('set pagination off')
from binascii import unhexlify
import hashlib 



inp = "INPUTHERE"
x = LOOPHERE
inpbytes = inp.encode('utf-8')
hexdigest = hashlib.sha256(inpbytes).hexdigest()

open(f"inputbrute/{hexdigest}", "w").write(inp)

gdb.execute("b *0x000000000041D97E")

gdb.execute(f'r < inputbrute/{hexdigest}')

gdb.execute("b *0x00007FFFF7E72186")
for z in range(x+1):
    gdb.execute("c")

# Function to extract memory using GDB
def extract_memory(address, num_bytes):
    # Run GDB in non-interactive mode
    # gdb.execute("set pagination off")
    # gdb.execute("set logging on")

    # Execute the x/16bx command to extract memory
    gdb_output = gdb.execute("x/{}bx {}".format(num_bytes, address), to_string=True)

    # Parse the GDB output to extract the bytes
    byte_array = []
    lines = gdb_output.strip().split("\n")
    for line in lines:
        byte_str = line.split(":")[1].strip()
        byte_str = byte_str.replace("0x", "")
        byte_str = byte_str.replace("\t", "")
        byte = int(byte_str, 16)
        byte_array.append(byte)

    # Save the output to a log file
    # gdb.execute("quit", to_string=True)

    return byte_array

gdb.execute("del")
data = extract_memory(0x420220+x, 1)[0]
dl = int(gdb.parse_and_eval("$rdx"))
# print(output, data, dl)
if(data == dl):
    # print(f"Found {ch}")
    # break
    print(("status","success"))
else:
    print(("status","failed"))

gdb.execute('quit')