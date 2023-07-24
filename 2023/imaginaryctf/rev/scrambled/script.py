import gdb

brute = "zyx^wu%v!ts1r;q@op#nm$lk(ijgh*fed&ca0b-{})"

gdb.execute("file main")
gdb.execute("b *0x0000000000404C14")
# gdb.execute("b")

kamus = dict()
for i in range(len(brute)):
    open("input", "w").write(brute[i] * 42)
    gdb.execute("r < input")
    kotak = int(gdb.execute("x/1xb $r8+1", to_string=True).split(":")[1].strip(), 16)
    print("kotak", chr(kotak))
    kamus[brute[i]] = chr(kotak)
    
print(kamus)