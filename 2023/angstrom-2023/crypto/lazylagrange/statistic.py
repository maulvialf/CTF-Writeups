from pwn import *
import concurrent.futures
from pprint import pprint as pp
import threading

def query1(num, p):
    p.recvuntil(": ")
    p.sendline("1")
    p.recvuntil("> ")
    p.sendline(str(num))
    data = p.recvline()
    data = data.strip()
    return int(data)

def worker():
    global uniq
    while True:
        p = connect("challs.actf.co", 32100)
        while True:
            try:
                ch = query1(0, p)
                ch = chr(ch)
                with lock:
                    if ch not in uniq:
                        uniq[ch] = 1
                    else:
                        uniq[ch] = uniq[ch] + 1
                pp(uniq)
            except EOFError:
                p.close()
                break

uniq = {}
lock = threading.Lock()
num_threads = 4  # You can adjust the number of threads here
with concurrent.futures.ThreadPoolExecutor(max_workers=num_threads) as executor:
    futures = [executor.submit(worker) for _ in range(num_threads)]

    for future in concurrent.futures.as_completed(futures):
        try:
            future.result()
        except Exception as e:
            print(f"Thread raised an exception: {e}")