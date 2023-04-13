#!/usr/bin/env python3

import sys
from threading import Thread
from queue import Queue
from subprocess import check_output
passwords = Queue()
# nyoba
# for i in range(0, 10):
# asli
for i in range(0, 30000):
    passwords.put(i)

def worker(y):
    while not passwords.empty():
        password = passwords.get()
        pload = check_output(["gdb", "--batch", "-ex", "py arg0={};".format(password), "-x", "template.py"]).decode('utf8')
        if("success" in pload):
            print(pload)
            print(password)
            print(password)
            print(password)
            print(password)
            print(password)
            print(password)
            print(password)
            print(password)
            print(password)
            print(password)
            print(password)
            print(password)
            with passwords.mutex:
                passwords.queue.clear()
            
            return
        else:
            print(password, "failed")
            continue
    pass


threads = []
for i in range(1, 32):
    thread = Thread(target=worker, args=(i, ), daemon=True)
    thread.start()
    threads.append(thread)

for thread in threads:
    thread.join()