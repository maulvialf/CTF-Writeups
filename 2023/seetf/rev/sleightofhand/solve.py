from subprocess import check_output as co
enc = b"fde5f5e12640b9860f526a9601861e752e84d866825c415549f454fe8ba3"
#       fde5f5e12640b9860f526a9601861e752e84d866825c415549f454fee7
import string

brute = string.ascii_letters + string.digits + string.punctuation
flag = ""
for i in range(len(enc) // 2):
    for ch in brute:
        pload = flag + ch
        print(pload)
        hasil = co(f"./sleight-of-hand.exe '{pload}'").split(b": ")[1]
        check = hasil[i * 2: i * 2 + 2]
        if check == enc[i * 2: i * 2 + 2]:
            flag += ch
            break