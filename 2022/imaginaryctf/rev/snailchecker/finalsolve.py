import libnum
finalhasil = b""
out = b'L\xe8\xc6\xd2f\xde\xd4\xf6j\xd0\xe0\xcad\xe0\xbe\xe6J\xd8\xc4\xde`\xe6\xbe\xda>\xc8\xca\xca^\xde\xde\xc4^\xde\xde\xdez\xe8\xe6\xde'
for i in range(0, len(out), 4):
    hasil = libnum.s2n(out[i:i+4])
    abin = bin(hasil)
    abin = (abin[2:])
    ax = abin.replace("0", "1")
    axnum = int(ax, 2)
    axsub = axnum - hasil
    # print(axsub)
    axhasil = round(hasil + (axsub / 2)) + 1
    # print(axhasil)
    finalhasil += (libnum.n2s(axhasil))[::-1]
    print(finalhasil)
