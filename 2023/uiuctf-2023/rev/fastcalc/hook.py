import gdb
kotak = []
gdb.execute("file calc")
data = "73511018.7121349 ^  0.5"
# data = "73511018.7121349 ^  0.5"
open("input", "w").write(data)
kotak = []

# gdb.execute("b *0x4020ac")
# gdb.execute("r < input")
# for i in range(58):
gdb.execute("b *0x4020ac")
gdb.execute("r < input")
i=0
while True:

    # gdb.execute("")
    data = int(gdb.parse_and_eval("$rax"))
    kotak.append((i, data, hex(data)))
    # print(hex(data))
    print(kotak)
    gdb.execute("c")
    i += 1
    # exit()

# while True:
#     data = int(gdb.parse_and_eval("$eax"))
#     kotak.append(data)
#     print("fan")
#     print(kotak)
#     print("fan")
#     gdb.execute("c")