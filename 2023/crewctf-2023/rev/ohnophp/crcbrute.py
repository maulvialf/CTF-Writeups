import itertools
import string
import zlib
import threading

target_crc = 3629437067  # Replace with your desired target CRC value
NUM_THREADS = 32  # Number of threads to use for parallel processing

def calculate_crc(data):
    return zlib.crc32(data.encode()) & 0xffffffff

def worker(thread_id):
    for combination in itertools.islice(itertools.product(string.printable, repeat=4), thread_id, None, NUM_THREADS):
        data = ''.join(combination)
        # print(data)
        crc = calculate_crc(data)
        if crc == target_crc:
            print("Matching data found:", data)
            return

threads = []

for i in range(NUM_THREADS):
    thread = threading.Thread(target=worker, args=(i,))
    threads.append(thread)
    thread.start()

for thread in threads:
    thread.join()

print("No matching data found.")


"crew{php_AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA}"