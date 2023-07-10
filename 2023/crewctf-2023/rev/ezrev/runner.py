#!/usr/bin/env python3

import hashlib
import sys
from threading import Thread
from queue import Queue
from subprocess import check_output

workersctemplate = open("worker.py").read()
def worker(y):
    while not passwords.empty():
        password = passwords.get()
        ch = password[1]
        x = password[2]
        password = password[0]
        workersc = workersctemplate
        workersc = workersc.replace("INPUTHERE", password) 
        workersc = workersc.replace("LOOPHERE", str(x)) 
        inpbytes = password.encode('utf-8')
        hexdigest = hashlib.sha256(inpbytes).hexdigest()

        open(f"scriptbrute/{hexdigest}.py", "w").write(workersc)
        pload = check_output(["gdb", "-x", "scriptbrute/{}.py".format(hexdigest)]).decode('utf8')

        if("success" in pload):
            # print(pload)
            print(password)
            global flag
            flag += ch
            with passwords.mutex:
                passwords.queue.clear()            
            return
        else:
            print(password, "failed")
            continue
    pass


threads = []
import string

flag = "crewctf{well_i_didnt_know_rop_can_be_so_obnoxious_especially_for_rever_but_if_you_can_find_this_you_are_a_god_rever}"
brute = string.ascii_letters + "_{}" + string.digits + string.punctuation
brute = brute.replace("\"", "")
brute = brute.replace("\\", "")
brute = brute.replace("'", "")

for x in range(len(flag), 300):
    passwords = Queue()
    for ch in brute:
        passwords.put((flag + ch, ch, x) )

    for i in range(1, 17):
        thread = Thread(target=worker, args=(i, ), daemon=True)
        thread.start()
        threads.append(thread)

    for thread in threads:
        thread.join()