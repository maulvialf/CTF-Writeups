from subprocess import check_output as co
from os import system
from multiprocessing.dummy import Pool as ThreadPool
hook = open('hook.js').read()
def execute_process(args):
    ch, j, pload = args
    # return pload, chr(j)
    pload_copy = pload[:]
    pload_copy.append("\x00")
    pload_copy[j] = chr(ch)

    ploadconv = map(ord, list(pload_copy))
    conv = (str(ploadconv))
    hook2 = hook.replace("REPLACER", conv)
    hook2fp = open('tmp/hook_{}_{}p.js'.format(ch,  j), 'w')
    hook2fp.write(hook2)
    hook2fp.close()

    hook2fp = open('tmp/test_{}_{}.txt'.format(ch,  j), 'w')
    hook2fp.write("test")
    hook2fp.close()

    print('loop')
    print("frida -f .\\fishing.exe -l .\\tmp\\hook_{}_{}p.js --no-pause < tmp\\test_{}_{}.txt  > tmp\\a_{}_{}".format(ch,  j,ch,  j,ch,  j))
    data  = system("frida -f .\\fishing.exe -l .\\tmp\\hook_{}_{}p.js --no-pause < tmp\\test_{}_{}.txt  > tmp\\a_{}_{}".format(ch,  j,ch,  j,ch,  j))
    print(data)

    a = open('tmp\\a_{}_{}'.format(ch,  j), 'r')
    data = a.read()
    a.close()
    # print(data)
    kotak = data.split("So: fishing.exe  Method: cmp: 0x3ff0")[1].split("0123456789ABCDEF")[2].split("\n")[1 + (j / 16)].split("  ")[1].split("  ")[0]
    print(j, 1 + (j % 16), kotak)
    kotak = kotak.strip()
    kotak = kotak.replace(" ", "")
    kotak = kotak.decode('hex')
    flag = "d0be9f5abdf034b5d06ffbe299baaed736d52dc22245b0039d636653c728cc2a2b14bb099be360463a".decode('hex')
    print(flag[j].encode('hex'), kotak[j % 16].encode('hex'))
    if(flag[j] == kotak[j % 16]):
        return pload_copy, chr(ch)
    return None, None

        

pload = ["A" for i in range(41)]
flag = ""
for i in range(len(flag)):
    pload[i] = flag[i]
import string
flagchr = string.letters + "{_}" + string.digits

for j in range(len(flag), 41):
    pool = ThreadPool(8)

    results = pool.map(execute_process, [(ord(chx), j, pload) for chx in flagchr])
    pool.close()
    pool.join()
    for payload_result, chr_result in results:
        if payload_result and chr_result:
            pload = payload_result
            flag += chr_result
            print(flag)
            print(flag)
            print(flag)
            print(flag)
            print(flag)
            print(flag)
            print(flag)
            print(flag)
            print(flag)
            print(flag)
            print(pload)
            print(chr_result)
            break
