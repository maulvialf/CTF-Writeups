import gdb

# class SaveRaxByte(gdb.Breakpoint):
#     def __init__(self):
#         super().__init__("*0x5555555563cd")
#         self.silent = True

#     def stop(self):
#         with open("test", "wb") as f:
#             rax = int(gdb.parse_and_eval("$rax"))
#             rax_byte = rax & 0xFF
#             f.write(bytes([rax_byte]))
#         return False

# SaveRaxByte()

gdb.execute("b  *0x5555555563cd")

kotak = []
kotak.append("vm_addi")
kotak.append("vm_sub")
kotak.append("vm_subi")
kotak.append("vm_mul")
kotak.append("vm_muli")
kotak.append("vm_div")
kotak.append("vm_cmp")
kotak.append("vm_jmp")
kotak.append("vm_inv")
kotak.append("vm_push")
kotak.append("vm_pop")
kotak.append("vm_mov")
kotak.append("vm_nop")
kotak.append("vm_exit")
kotak.append("vm_print")
kotak.append("vm_putc")
kotak.append("vm_je")
kotak.append("vm_jne")
kotak.append("vm_jle")
kotak.append("vm_jge")
kotak.append("vm_xor")
kotak.append("vm_store")
kotak.append("vm_load")
kotak.append("vm_input")
one = 0
# asffasf
# gdb.execute("b *0x00005555555559DB")
# gdb.execute("b *0x00005555555555FF")
gdb.execute("b *0x0000555555555409")

gdb.execute("file vm")

# open("input", 'w').write("ABCDEFGHIJKLMNOP")
open("input", 'w').write("A" * 0x11 + "\n\n\n" + "A" * 100)
gdb.execute("r ./bin8 < input")
parsed = open("parsed", 'a')
parsed.write("############\n")
parsed.close()
data = gdb.parse_and_eval("$rdi")
print(hex(data))

parsed = open("parsed", 'a')
parsed.write("rdi {}\n".format(data))
parsed.close()
gdb.execute("c")

while True:
    # try:
    parsed = open("parsed", 'a')
    raxaddr = int(gdb.parse_and_eval("$rax"))
    rax_byte = int(gdb.execute("x/1b $rax", to_string=True).split(":")[1].strip(), 16)

    rax_bytes = gdb.execute("x/12xb $rax", to_string=True).split(":")[1].strip().split()
    rax_12_bytes = [int(b, 16) for b in rax_bytes]
    print(rax_12_bytes)
    inst = kotak[int(rax_byte-1)]

    print("FASFASFASF")
    print(rax_byte)
    print("FASFASFASF")
    # def parse_addr():

    if(inst in ["vm_xor", "vm_mov"]):
        parse = chr
    else:
        parse = chr
# x/gx 0x55555555e8a0+0x1b*4+0x8
# x/gx $rax+$rdx*4+0x8



    pload = "{} {} {}({}) {}({}) {}({}) {}({})\n".format(hex(raxaddr), kotak[int(rax_byte-1)], parse(rax_12_bytes[1]), hex(rax_12_bytes[1]), parse(rax_12_bytes[2]), hex(rax_12_bytes[2]), parse(rax_12_bytes[3]), hex(rax_12_bytes[3]), parse(rax_12_bytes[4]), hex(rax_12_bytes[4]), parse(rax_12_bytes[5]), hex(rax_12_bytes[5]), parse(rax_12_bytes[5]), hex(rax_12_bytes[5]) )
    parsed.write(pload)
    parsed.close()


    # if(one == 0):
    #     gdb.execute("b *0x00005555555555D2")
    #     one = 1
    # if(inst == "vm_xor"):
    #     break

    if(one == 0):
        gdb.execute("b *0x000055555555638A")
        one = 1
    if(inst == "vm_mov"):
        break

    
    """
    => 0x555555555670 <vm_xor+158>: xor    eax,DWORD PTR [rbp-0x4]
    RAX: 0xca 
    gdb-peda$ x/gx $rbp-0x4
    0x7fffffffda2c: 0xffffda60000000a9

    """

    gdb.execute('c')
    # break
    # except:
    #   break