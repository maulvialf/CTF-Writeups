from subprocess import check_output as co
from os import system
from multiprocessing.dummy import Pool as ThreadPool
from multiprocessing import Value
import traceback

enc = [0x7DAEF55BC795022E,
0x421278310E76B63E,
0xD75260E6A26ECDBA,
0xE0916731F8D17F06,
0x1A9A683712F44CDA,
0x8BBF2B328413959E,
0x16808A6FED34DF86,
0xF9F177CBA60985EA,
0xF53998BD117049A,
0x1AE7C50293394A26,
0xAE31D0A896854396,
0x4D19AE6FBA8AA,
0xF9F177CBA60985EA,
0xAE31D0A896854396,
0xED1A26065041E532,
0x183EA30AAAADEC1E,
0xF9F177CBA60985EA,
0x183EA30AAAADEC1E,
0xF937CA7197EA0C36,
0xF53998BD117049A,
0xAE31D0A896854396,
0x183EA30AAAADEC1E,
0xAE31D0A896854396,
0x4D19AE6FBA8AA,
0xD4CDABE505AE9EF6,
0x6B7E41EA4C3F5D5A,
0xF9F177CBA60985EA,
0x135485E24FFE11E6,
0x4CA368D97A6E4DFE,
0x183EA30AAAADEC1E,
0xDED734EEA5CEB0F6,
0xE97857F3B797E04A,
0xF9F177CBA60985EA,
0x135485E24FFE11E6,
0x5079737C1799AA26,
0xB6E2B60BAE2E1746,
0x2C15D29C90412652,
0xE97857F3B797E04A,
0x39808167B11B1862]
"""
rm -rf tmp; mkdir tmp; python2 brute.py 
"""

solution_found = Value("i", 0)

kamus = dict()
# read base frida script
hook = open('hook2.js').read()
def execute_process(args):
    try:

        global solution_found

        if solution_found.value:
            return None, None


        # defined var
        ch, j, pload = args
        pload_copy = pload[:]
        # append null byte as end string
        pload_copy[j] = chr(ch)
        ploadinp = ''.join(pload_copy)
        

        
        # replace hex value with brute input
        hook2 = hook.replace("NUMBNUMB", str(j))
        hook2fp = open('tmp/hook_{}_{}p.js'.format(ch,  j), 'w')
        hook2fp.write(hook2)
        hook2fp.close()

        # fake input
        hook2fp = open('tmp/test_{}_{}.txt'.format(ch,  j), 'w')
        hook2fp.write("")
        hook2fp.close()

        # execute frida script
        print('loop')
        cmd = "frida  -l ./tmp/hook_{}_{}p.js -f  ./threads '{}' < tmp/test_{}_{}.txt  > tmp/a_{}_{}".format(ch,  j,ploadinp,ch,  j,ch,  j)
        print(cmd)
        data  = system(cmd)
        kotak = []

        # parsing frida output
        a = open('tmp/a_{}_{}'.format(ch,  j), 'r')
        data = a.read()

        datas = data.split("] ")
        for d in datas[1:]:
            dint = d.split("\n")[0]
            # print(dint.strip())
            kotak.append(eval(dint))
            
        from pprint import pprint as pp

        # pp(kotak)
        a.close()
        # print(data)
        
        # exit()
        print(j)
        print("COMPARE {} | {} {}", chr(ch), hex(kotak[j]), hex(enc[j]))
        kamus[kotak[j]] = ch
        if(kotak[j] == enc[j]):
            with solution_found.get_lock():
                solution_found.value = 1
            return pload_copy, chr(ch)
        return None, None

    except Exception as e:
        print("error on ", kotak, j)
        print("error cmd", cmd)
        print("Exception in execute_process: {}".format(e))
        traceback.print_exc()

# init input bruteforce
pload = ["A" for i in range(39)]
flag = ""
for i in range(len(flag)):
    pload[i] = flag[i]
import string

# brute space
flagchr = string.letters + "{_}" + string.digits

# loop flag character
for j in range(len(flag), 39):
    pool = ThreadPool(16)
    with solution_found.get_lock():
        solution_found.value = 0
    results = pool.map(execute_process, [(ord(chx), j, pload) for chx in flagchr])
    pool.close()
    pool.join()
    print(kamus)
    for payload_result, chr_result in results:
        
        # if brute found solution append to flag character
        if payload_result and chr_result:
            pload = payload_result
            flag += chr_result
            print(flag)
            print(flag)
            print(pload)
            print(chr_result)
            break
