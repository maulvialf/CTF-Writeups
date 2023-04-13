data = open("kamus").read()
skrip = open("asli.js").read()
kotak = []
ran = []
for i in data.strip().split("\n"):
    if("random" in i):
        ran.append(i.split(" ")[1])
    else:
        kotak.append(i.split(" "))

kotak = kotak[::-1]
ran = ran[::-1]
rint = 0
for ko in kotak:
    sign,stat = ko

    segment = skrip.split(sign)[1].split("continue;")[0]
    # print(sign, stat)
    if(stat == "1"):
        # perm = segment.split("{")[0].strip().split("}")[0].strip()
        perm = segment.split("{")[1].strip().split("}")[0].strip()
        perm = perm.replace("+=", "Z=")
        perm = perm.replace("-=", "+=")
        perm = perm.replace("Z=", "-=")
        if("Math.random()" in perm):
            perm = perm.replace("Math.random()", ran[rint])
            perm = perm.replace("Math.floor", "math.floor")
            rint += 1
        for i in perm.split("\n"):
            print(i.strip())
    else:
        perm = segment.split("{")[2].strip().split("}")[0].strip()
        perm = perm.replace("+=", "Z=")
        perm = perm.replace("-=", "+=")
        perm = perm.replace("Z=", "-=")
        if("Math.random()" in perm):
            perm = perm.replace("Math.random()", ran[rint])
            perm = perm.replace("Math.floor", "math.floor")
            rint += 1
        for i in perm.split("\n"):
            print(i.strip())

    """
        case 210975861:
            if (55514709) {
            b[18] -= b[0] + b[12] + b[19] + b[10] + b[29] + b[34] + 226;
            b[18] &= 0xFF;
            } else {
            b[39] += b[18] + b[16] + b[8] + b[19] + b[5] + b[23] + 36;
            b[39] &= 0xFF;
            }
            state = 1058358019;
            continue;
    """


