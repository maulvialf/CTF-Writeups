import gdb

brute = "zyx^wu%v!ts1r;q@op#nm$lk(ijgh*fed&ca0b-{})"

gdb.execute("file main")
gdb.execute("b *0x0000000000404C14")
# gdb.execute("b")
kamus = dict()

for w in range(42):
    kotak = ["z" for n in range(42)]
    kotak[w] = "x"
    open("input", "w").write(''.join(kotak))
    gdb.execute("r < input")
    hasil = ""
    dapet = 0
    for i in range(42):
        chara = int(gdb.execute(f"x/1xb $r8+{i}", to_string=True).split(":")[1].strip(), 16)
        chara = chr(chara)
        hasil += chara
        if(chara == "{"):
            print(i, chara)
            dapet = 1
            kamus[i] = w
            # break
        
        # print("chara", chr(chara))
    print("str", hasil)
    # exit()
print(kamus)