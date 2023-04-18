from pwn import *
from base64 import b64decode
from os import system
from pprint import pprint as pp
from z3 import *
import r2pipe

def solve1(p):
    p.recvline()
    p.recvuntil("'")
    data = p.recvuntil("'", drop=True)
    datadec = b64decode(data)
    open("./binary1", "wb").write(datadec)
    system("chmod +x ./binary1")
    input_data = "A" * 16

    cmd = "ltrace ./binary1".split()
    try:
        result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, input=input_data)
        print(result.stderr)
        output = result.stderr
    except:
        pass
    data = output.split(', "')[1].split('"')[0]
    print(data)

    p.sendline(data)


def solve2(p):
    p.recvuntil("'")
    data = p.recvuntil("'", drop=True)
    datadec = b64decode(data)
    open("./binary2", "wb").write(datadec)

    r2 = r2pipe.open('./binary2')
    r2.cmd('aaa')
    function_info = r2.cmdj(f'afij sym.validate')
    function_size = function_info[0]['size']
    function_offset = function_info[0]['offset']
    r2.quit()


    e = ELF("./binary2")

    function_addr = e.symbols["validate"]

    disfunc = disasm(e.read(function_addr, function_offset))
    hasil = b""
    for df in disfunc.split("\n"):
        if("cmp    al" in df ):
            hasil += chr(eval(df.split("cmp")[1].split(", ")[1].strip())).encode()
    print(hasil)
    p.sendline(hasil)

def solve3(p):
    p.recvuntil("'")
    data = p.recvuntil("'", drop=True)
    datadec = b64decode(data)
    open("./binary3", "wb").write(datadec)

    r2 = r2pipe.open('./binary3')
    r2.cmd('aaa')
    function_info = r2.cmdj(f'afij sym.validate')
    function_size = function_info[0]['size']
    function_offset = function_info[0]['offset']
    r2.quit()

    print(f'Function size: {function_size} bytes')
    print(f'Function offset: {function_offset} ')


    e = ELF("./binary3")
    function_addr = e.symbols["validate"]


    disfunc = disasm(e.read(function_addr, function_size))
    hasil = b""
    for df in disfunc.split("\n"):
        if("cmp" in df):
            hasil += chr(eval(df.split("cmp")[1].split(", ")[1].strip())).encode()
    print(hasil)
    p.sendline(hasil)

def solve4(p):

    p.recvuntil("'")
    data = p.recvuntil("'", drop=True)
    datadec = b64decode(data)
    open("./binary4", "wb").write(datadec)

    e = ELF("./binary4")

    function_addr = e.symbols["validate"]

    r2 = r2pipe.open('./binary4')
    r2.cmd('aaa')
    function_info = r2.cmdj(f'afij sym.validate')
    function_size = function_info[0]['size']
    function_offset = function_info[0]['offset']
    r2.quit()

    print(f'Function size: {function_size} bytes')
    print(f'Function offset: {function_offset} ')

    disfunc = disasm(e.read(function_addr, function_size))
    hasil = b""
    parsed = b""
    fail = []
    hasil = []
    for df in disfunc.split("\n"):
        if("cmp" in df):
            hasil.append(eval(df.split("cmp")[1].split(", ")[1].strip()))

    solp = Solver()
    LEN = 16

    s = [BitVec(i, 128) for i in range(LEN)]

    for i in range(0, LEN):
        solp.add(Or(And(s[i] >= ord('0'), s[i] <= ord('9')), And(s[i] >= ord('a'), s[i] <= ord('z')), And(s[i] >= ord('A'), s[i] <= ord('Z'))))

    for i in range(0, len(hasil)):
        solp.add(s[i] + s[i+1] == hasil[i])

    www = solp.check()    
    model = solp.model()
    LEN = 16
    manga = [0 for i in range(LEN )]

    for i in range(LEN):
        index = eval(str(model[i])[2:])
        manga[index] = eval(str(model[model[i]]))
    hasil = "".join([chr(i) for i in manga])
    print(hasil)
    p.sendline(hasil)


def solve5(p):
    p.recvuntil("'")
    data = p.recvuntil("'", drop=True)
    datadec = b64decode(data)
    open("./binary5", "wb").write(datadec)
    e = ELF("./binary5")
    function_addr = e.symbols["validate"]

    r2 = r2pipe.open('./binary5')
    r2.cmd('aaa')
    function_info = r2.cmdj(f'afij sym.validate')
    function_size = function_info[0]['size']
    function_offset = function_info[0]['offset']
    r2.quit()

    print(f'Function size: {function_size} bytes')
    print(f'Function offset: {function_offset} ')

    disfunc = disasm(e.read(function_addr, function_size))
    hasil = b""
    parsed = b""
    # print(disfunc)
    fail = []
    hasil = []

    solp = Solver()
    LEN = 16


    s = [BitVec(i, 128) for i in range(LEN)]
    # for i in range(0x20, 0x7f):

    for i in range(0, LEN):
        solp.add(Or(And(s[i] >= ord('0'), s[i] <= ord('9')), And(s[i] >= ord('a'), s[i] <= ord('z')), And(s[i] >= ord('A'), s[i] <= ord('Z'))))


    yyy = 0
    persamaan = []
    for df in disfunc.split("\n"):
        if("cmp" in df):
            val = eval(df.split("cmp")[1].split(", ")[1].strip())
            hasil.append(val)
            if("eax" in df):
                solp.add(s[yyy] + s[yyy+1] == val)
                persamaan.append(f"s[{yyy}] + s[{yyy+1}] == {val}")
            else:
                solp.add(s[yyy] == val)
                persamaan.append(f"s[{yyy}] == {val}")
            yyy += 1
    www = solp.check()    
    model = solp.model()
    LEN = 16
    manga = [0 for i in range(LEN )]
    pp(persamaan)
    for i in range(LEN):
        index = eval(str(model[i])[2:])
        manga[index] = eval(str(model[model[i]]))
    # print(manga)
    hasil = "".join([chr(i) for i in manga])
    print(hasil)
    p.sendline(hasil)


def solve6(p):

    p.recvuntil("'")
    data = p.recvuntil("'", drop=True)
    datadec = b64decode(data)
    open("./binary6", "wb").write(datadec)
    e = ELF("./binary6")
    function_addr = e.symbols["validate"]


    r2 = r2pipe.open('./binary6')
    r2.cmd('aaa')
    function_info = r2.cmdj(f'afij sym.validate')
    function_size = function_info[0]['size']
    function_offset = function_info[0]['offset']
    r2.quit()

    print(f'Function size: {function_size} bytes')
    print(f'Function offset: {function_offset} ')

    disfunc = disasm(e.read(function_addr, function_size))
    hasil = b""
    parsed = b""
    fail = []
    hasil = []

    solp = Solver()
    LEN = 16


    s = [BitVec(i, 128) for i in range(LEN)]

    for i in range(0, LEN):
        solp.add(Or(And(s[i] >= ord('0'), s[i] <= ord('9')), And(s[i] >= ord('a'), s[i] <= ord('z')), And(s[i] >= ord('A'), s[i] <= ord('Z'))))


    yyy = 0
    persamaan = []
    for df in disfunc.split("\n"):
        if("cmp" in df):
            val = eval(df.split("cmp")[1].split(", ")[1].strip())
            hasil.append(val)
            if("eax" in df):
                solp.add(s[yyy] + s[yyy+1] == val)
                persamaan.append(f"s[{yyy}] + s[{yyy+1}] == {val}")
            else:
                solp.add(s[yyy] == val)
                persamaan.append(f"s[{yyy}] == {val}")
            yyy += 1
    www = solp.check()    
    model = solp.model()
    LEN = 16
    manga = [0 for i in range(LEN )]
    pp(persamaan)
    for i in range(LEN):
        index = eval(str(model[i])[2:])
        manga[index] = eval(str(model[model[i]]))
    hasil = "".join([chr(i) for i in manga])
    print(hasil)
    p.sendline(hasil)


p = connect("cha.hackpack.club", 41702)
solve1(p)
solve2(p)
solve3(p)
solve4(p)
solve5(p)
solve6(p)
p.interactive()