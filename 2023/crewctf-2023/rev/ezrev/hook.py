import gdb
"""
libc_2.31.so:00007FFFF7E72186 38 10                   cmp     [rax], dl
libc_2.31.so:00007FFFF7E72188 C3                      retn
"""
import string
brute = string.ascii_letters + "_{}" + string.digits + string.punctuation
gdb.execute("file ./a.out_patched")

flag = "crewctf{well_"
for x in range(len(flag), 100):
    for ch in brute:
        output = flag + ch + "AAAAAAAAAAAAAAAAAAA"
        open("input", "w").write(output)
        # for i in range(256):
        gdb.execute("b *0x000000000041D97E")

        gdb.execute("r < input")
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
        open("flag", "w").write(f"{output}{data}{dl}")
        if(data == dl):
            # print(f"Found {ch}")
            flag += ch
            break