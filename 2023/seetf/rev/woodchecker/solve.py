from subprocess import check_output as co
pload = "A" * 20

# print("\n".join(hasil))

# for i in range(0, total, 4):

import string
# brute = string.ascii_letters + string.digits + string.punctuation.replace("|", "")
brute = string.ascii_letters + string.digits + "{_}"
flag = ""
pload = ["*"] * 20
for j in range(0, 20):
    for ch in brute:
        ploadbaru = pload
        ploadbaru[j] = ch
        ploadbaru = "".join(ploadbaru)
        ploadbaru = ploadbaru[::-1]
        hasil = co(f"python3 cpu.py {ploadbaru}".split()).decode()
        hasil = hasil.split("\n")
        hasil = hasil[28084:]
        total = len(hasil)
        check = 1
        z = 0
        for x in range(1, 16, 2):
            line = hasil[x + (j * (2 * 8))]
            print(line)
            if(f"store=1" not in line):
                check = 0
                break
            z += 1
        print(j, ch, ploadbaru, check)
        if(check == 1):
            pload = list(ploadbaru[::-1])
            break

    print("".join(pload))