from pwn import *
import math

# while true ; do python3 final-final.py ; done
# while true ; do python3 solve.py ; done


ITERATIONS = 47
SIDE_LENGTH = 2 * 10 ** 9
ATTEMPTS = 300
HI = SIDE_LENGTH // 2
LO = -SIDE_LENGTH // 2
e = 2

# Connect to the challenge server
conn = remote('165.232.98.11', 30970)
# conn = process('python3 src/server.py'.split())

# print(log)
# Define binary search function
z = 0
global before

def binary_search(lo, hi):
    # before = (lo, hi)
    while lo <= hi:
        mid = (lo + hi) // 2
        conn.sendline(f"{mid} {mid}")
        response = conn.recvline().decode().strip()
        global z 
        print(z, lo, hi, mid, mid, repr(response))
        z += 1
        if mid == lo and mid == hi:
            return (mid, mid)
        elif "UNDETECTED" in response:
            x, y = binary_search(lo, mid - 1)
            if x is not None and y is not None:
                return (x, y)
            x, y = binary_search(mid - 1, mid - 1)
            if x is not None and y is not None:
                return (x, y)

        elif "DETECTED" in response:
            x, y = binary_search(mid + 1, hi)
            if x is not None and y is not None:
                return (x, y)
            x, y = binary_search(mid + 1, mid + 1)
            if x is not None and y is not None:
                return (x, y)

    return (None, None)


def binary_search_x(x_lo, x_hi, y, r):
    while x_lo <= x_hi:
        x_mid = (x_lo + x_hi) // 2
        conn.sendline(f"{x_mid} {y}")
        response = conn.recvline().decode().strip()
        global z
        print(z, x_mid, y, "|", x_mid, x_lo, x_hi, repr(response))
        z += 1

        if x_mid == x_hi and x_mid == x_lo :
            return x_mid

        elif "UNDETECTED" in response:
            x = binary_search_x(x_lo, x_mid - 1, y, r)
            if x is not None:
                return x
            x = binary_search_x(x_mid - 1, x_mid - 1, y, r)
            if x is not None:
                return x
        elif "DETECTED" in response:
            x = binary_search_x(x_mid + 1, x_hi, y, r)
            if x is not None:
                return x
            x = binary_search_x(x_mid + 1, x_mid + 1, y, r)
            if x is not None:
                return x
    
    return None

def binary_search_y(y_lo, y_hi, x, r):
    while y_lo <= y_hi:
        y_mid = (y_lo + y_hi) // 2
        conn.sendline(f"{x} {y_mid}")
        response = conn.recvline().decode().strip()

        global z
        print(z, x, y_mid, "|", y_mid, y_lo, y_hi, repr(response))
        z += 1

        if y_mid == y_hi and y_mid == y_lo :
            return y_mid
        elif "UNDETECTED" in response:
            y = binary_search_y(y_mid + 1, y_hi, x, r)
            if y is not None:
                return y
            y = binary_search_y(y_mid + 1, y_mid + 1, x, r)
            if y is not None:
                return y
        elif "DETECTED" in response:
            y = binary_search_y(y_lo, y_mid - 1, x, r)
            if y is not None:
                return y
            y = binary_search_y(y_mid - 1, y_mid - 1, x, r)
            if y is not None:
                return y
    return None

# Loop through iterations
for i in range(47):
    z = 0
    logx = conn.recvuntil("> ")

    # Generate random circle parameters
    R = random.randint(SIDE_LENGTH // 4, SIDE_LENGTH // 2)
    X = random.randint(LO + R, HI - R)
    Y = random.randint(LO + R, HI - R)

    # Perform binary search

    points = []


    x, y = binary_search(LO, HI)
    points.append((x, y))

    # z = 0
    MET = SIDE_LENGTH // 1000
    x_mid = binary_search_x(LO, HI, MET, R)
    # print(x_mid, MET)
    points.append((x_mid, MET))

    # z = 0
    MET = -SIDE_LENGTH // 1000
    x_mid = binary_search_x(LO, HI, MET, R)
    # print(x_mid, MET)
    points.append((x_mid, MET))

    # z = 0
    MET = SIDE_LENGTH // 100
    x_mid = binary_search_x(LO, HI, MET, R)
    # print(x_mid, MET)
    points.append((x_mid, MET))

    # z = 0
    MET = -SIDE_LENGTH // 100

    x_mid = binary_search_x(LO, HI, MET, R)
    # print(x_mid, MET)
    points.append((x_mid, MET))

    # z = 0
    MET = SIDE_LENGTH // 1000

    y_mid = binary_search_y(LO, HI, MET, R)
    # print(MET, y_mid)
    points.append((MET, y_mid))

    # z = 0
    MET = -SIDE_LENGTH // 1000

    y_mid = binary_search_y(LO, HI, MET, R)
    # print(MET, y_mid)
    points.append((MET, y_mid))

    # z = 0
    MET = SIDE_LENGTH // 100

    y_mid = binary_search_y(LO, HI, MET, R)
    # print(MET, y_mid)
    points.append((MET, y_mid))

    # z = 0
    MET = -SIDE_LENGTH // 100

    y_mid = binary_search_y(LO, HI, MET, R)
    # print(MET, y_mid)
    points.append((MET, y_mid))


    # Input a list of points on the circle circumference
    import numpy as np
    # Create a matrix A and a vector b for the least squares circle fit equation
    A = np.array([[2 * p[0], 2 * p[1], 1] for p in points])
    b = np.array([-p[0] ** 2 - p[1] ** 2 for p in points])

    # Solve the least squares circle fit equation to find the center of the circle
    x, y, r = np.linalg.lstsq(A, b, rcond=None)[0]
    center_x, center_y = int(-x), int(-y)

    # Print the x and y coordinates of the center of the circle
    print("The center of the circle is ({}, {}) {}".format(center_x, center_y, z))

    if(b"DEBUGGGGG" in logx):
        print(logx.split(b"DEBUGGGGG")[1].split(b"DEBUGGGGG")[0])

    # conn.interactive()
    # Send solution to challenge server
    conn.sendline(f"{center_x} {center_y}")
    # conn.interactive()
    sisa = 300 - z
    # tengah = int(sisa ** -1)
    import math
    tengah = int(math.sqrt(sisa)/2)
    
    print(tengah)
    print(z + tengah * 4, sisa)

    data = conn.recvline()
    print("CHECK COOR")
    print(data)

    if(b"REFERENCE" not in data):
        print("FIXING COODINATE", tengah)
        for aa in range(-tengah, tengah):
            for bb in range(-tengah, tengah):
                conn.sendline(f"{center_x+aa} {center_y+bb}")
                z += 1
                data = conn.recvline()
                print(z, f"{center_x+aa} {center_y+bb}", repr(data))
                if(b"REFERENCE" in data):
                    break
            if(b"REFERENCE" in data):
                break    
    print(i)
    print(i)
    print(i)
    print(i)
    print(i)
    print(i)
    print(i)
    print(i)
    print(i)
    print(i)
    print(i)
    print(i)
    print(i)
    print(i)
    print(i)
    print(data)

conn.interactive()