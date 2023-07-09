import itertools
charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~"
import queue
kotak = queue.Queue()
# for combination in itertools.product(charset, repeat=4):
#     # combination.append(kotak)
#     # queue.push(combination)
#     kotak.put(combination)

# print(len(kotak))



import threading
import itertools

def xor_string(s1, s2):
    # Perform XOR operation on two strings and return the result
    return ''.join(chr(ord(c1) ^ ord(c2)) for c1, c2 in zip(s1, s2))



# Define the target result to obtain
target = "A\x1b/k"

# Define the character set to use for brute forcing
charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~"

# Define the number of threads to use
num_threads = 32

# Start the brute force process

# def worker():
#     while not kotak.empty():
#         password = kotak.get()
#         result = xor_string(password, target)
#         if result == target:
#             print(f"Found match: {password}")


# threads = []
# for _ in range(num_threads):
#     thread = threading.Thread(target=worker)
#     thread.start()
#     threads.append(thread)

# for thread in threads:
#     thread.join()
kotak1 = []
kotak2 = []
kotak3 = []
kotak4 = []
for x in charset:
    for y in charset:
        z = ord(x) ^ ord(y)
        if(z == ord(target[0])):
            kotak1.append((x, y))
        elif(z == ord(target[1])):
            kotak2.append((x, y))
        elif(z == ord(target[2])):
            kotak3.append((x, y))
        elif(z == ord(target[3])):
            kotak4.append((x, y))

print(len(kotak1))
print(len(kotak2))
print(len(kotak3))
print(len(kotak4))
x = 0
for i in kotak1:
    for j in kotak2:
        for k in kotak3:
            for l in kotak4:
                print(f"{x} {i[0]}{j[0]}{k[0]}{l[0]}{i[1]}{j[1]}{k[1]}{l[1]}")
