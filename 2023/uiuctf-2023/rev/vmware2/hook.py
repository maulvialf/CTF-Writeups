import gdb
peta = dict()
peta2 = dict()

gdb.execute("file chal2")
gdb.execute("b *0x0000555555555615")
import string
brute = string.ascii_letters + string.digits + string.punctuation
print(brute)

for i in brute:
    bruteinput = b"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    bruteinput = i.encode() + bruteinput
    
    open("input", "wb").write(bruteinput)
    gdb.execute("r program2 < input")
    gdb.execute("c")
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

    # view bytes on 000055555555A493
    gdb.execute("x/20xb 0x000055555555A493")
    # gdb_output = gdb.execute("x/20bx {}".format(0x000055555555A493), to_string=True)

    data = extract_memory(0x555555559483, 1)
    print("fan")
    print(data)
    peta[ i ] = data[0]
    peta2[ data[0] ] = i
    print(peta)
    print(peta2)
    print("fan")
    # break
    # exit()