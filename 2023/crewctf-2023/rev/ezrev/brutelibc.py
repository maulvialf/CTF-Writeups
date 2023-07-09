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