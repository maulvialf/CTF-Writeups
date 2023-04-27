from pwn import *
e = ELF("moon")
context.arch = 'amd64'
import pickle
def parsing(func, start, length):
    # print(kotak)
    instance = kotak
    bc = e.read(start, length)
    operand = []
    bcx = disasm(bc)
    if("sub    rax, " in bcx):
        bcx = bcx.replace("sub    rax, ", "add    rax, -")

    bc = bcx.split("\n")
    from pprint import pprint as pp
    open(f"disasmpack/disasmpacket_{func}", "w").write(bcx)
                
    for i in range(len(bc)):
        if("mov    QWORD PTR " in bc[i]):
            if("add    " not in bc[i-1] and "sub    " not in bc[i-1]):
                print(func)
                print(bc[i-1])
                if(len(operand) == 0):
                    value = 0
                else:
                    value = 0
                operand.append(value)
            else:
                value = bc[i-1].split(", ")[1]
                if("-" in value):
                    # print(value)
                    assert value == "-" + "0xffffffffffffff80"
                    value = "0x80"
                operand.append(int(value, 16))

    # print(len(operand))
    assert len(operand) == 1293
    return operand

moona = open("moon", "rb").read()
dataset = open("dataset").read()
dataset = dataset.split("\n")
kotak = {}
for data in dataset:
    name, start, length = data.split("\t")
    start = int(start, 16)
    length = int(length, 16)
    operand = parsing(name, start, length)
    kotak[name] = start, length, operand
    # print(name)


with open('allcalcfinal.pickle', 'wb') as output:
    pickle.dump(kotak, output)