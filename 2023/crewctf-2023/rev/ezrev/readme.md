# ezrev

Cari libc yang pas di constraints yang ada di program. Download dulu semua libc pake https://github.com/niklasb/libc-database, lalu di brute constraint nya ke semua libc symbols yang ada

script brute libc

```py
from pwn import *

lib = []

def list_files(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            if(".symbols" in file_path):
                lib.append(file_path)

"""
  puts = (unsigned __int64)&::puts & 0xFFF;
  ptrace = (unsigned __int64)&::ptrace & 0xFFF;
  exit = (unsigned __int64)&::exit & 0xFFF;
  if ( ((unsigned __int64)&::ptrace & 0xFFF) + ((unsigned __int64)&::puts & 0xFFF) + ((unsigned __int64)&::exit & 0xFFF) == 5920
    && ptrace - puts - exit == -1440LL
    && puts - ptrace - exit == -3808LL )
"""

from pprint import pprint as pp
list_files("db")
for sim in lib:
    data = open(sim).read()
    data = data.strip()
    for s in data.split("\n"):
        name, addr = s.split(" ")
        if(name == "puts"):
            # print(name, addr[-3:])
            addrputs = int(addr[-3:], 16)
        elif(name == "ptrace"):
            # print(name, addr[-3:])
            addrptrace = int(addr[-3:], 16)
        elif(name == "exit"):
            # print(name, addr[-3:])
            addrexit = int(addr[-3:], 16)

    if(addrptrace - addrputs - addrexit  == -1440 and addrputs - addrptrace - addrexit == -3808 and addrputs + addrptrace + addrexit == 5920):
        print(sim)
        # break
```

Setelah itu bisa patch ptrace nya biar ga masuk ke fake flag pas di run di gdb dan bisa masuk ke payload rop

Didalem rop ada, program bakal nge lakuin cmp [rax], dl. Disini flag checkernya. Bisa dibruteforce pake gdbscript. Karena flag nya panjang (lebih dari 150 character), gdbscript nya mesti dibikin multithread biar cepet. Another tips, jangan running gdbscript nya di vm (bakal lebih lama).

Script template worker gdbscript

```py
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
```

script runner gdbscript

```py
#!/usr/bin/env python3

import hashlib
import sys
from threading import Thread
from queue import Queue
from subprocess import check_output

workersctemplate = open("worker.py").read()
def worker(y):
    while not passwords.empty():
        password = passwords.get()
        ch = password[1]
        x = password[2]
        password = password[0]
        workersc = workersctemplate
        workersc = workersc.replace("INPUTHERE", password) 
        workersc = workersc.replace("LOOPHERE", str(x)) 
        inpbytes = password.encode('utf-8')
        hexdigest = hashlib.sha256(inpbytes).hexdigest()

        open(f"scriptbrute/{hexdigest}.py", "w").write(workersc)
        pload = check_output(["gdb", "-x", "scriptbrute/{}.py".format(hexdigest)]).decode('utf8')

        if("success" in pload):
            # print(pload)
            print(password)
    