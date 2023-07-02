data = [114,29,111,10,121,25,101,2,119,71,29,99,80,34,120,79,21,96,80,55,93,7,118,29,71,55,89,105,28,44,118,92,61,74,57,99,2,50,90,106,31,40,91,107,9,83,32,78,124,8,82,50,0,55,86,125,7]
hasil = ""
simpen = 0
for i in data:
    ch = i // 16
    # print(ch)
    # chx = int(ch)
    # print(chx)
    print(f"{hex(i)} ^ {ch} ^ {hex(simpen)}")
    hasil += chr(i ^ ch ^ simpen)
    simpen = i ^ ch 
    print(repr(hasil))

# uiuBCDEFGHIJKLOP
