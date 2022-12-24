from pwn import *
# folder path
dir_path = r'jpg/'

# list to store files
res = []

# Iterate directory
for path in os.listdir(dir_path):
    # check if current path is a file
    if os.path.isfile(os.path.join(dir_path, path)):
        res.append(path)

for kotak in res:
    # print(i)
    filename = "jpg/" + kotak
    data = open(filename, 'rb').read()
    length = data.split("ANTz")[1][0:4]
    # print(repr(length))
    from libnum import *
    length = (s2n(length))
    simpen = data.split("ANTz")[1][4:4+length]
    print(kotak)
    print('dua/{}.bzz'.format(kotak))
    open('dua/{}.bzz'.format(kotak), 'wb').write(simpen)
    os.system('bzz  -d dua/{}.bzz exploit/{}.sh'.format(kotak, kotak))