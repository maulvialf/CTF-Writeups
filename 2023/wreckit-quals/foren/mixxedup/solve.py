from PIL import Image
import numpy as np

image = Image.open('flag.png')
image_array = np.array(image)

flag = np.zeros((2000, 2000, 3), dtype=np.uint8)

m = 0
for x in range(m, 2000, 5):
    z = 0
    for y in range(400):
        flag[y][x] = image_array[y][x]

akhir = Image.fromarray(flag)

akhir.save('output{}.png'.format(m))


flag = np.zeros((2000, 2000, 3), dtype=np.uint8)

m = 1
for x in range(m, 2000, 5):
    z = 0
    for y in range(400):
        flag[y][x] = image_array[y][x]

akhir = Image.fromarray(flag)

akhir.save('output{}.png'.format(m))


flag = np.zeros((2000, 2000, 3), dtype=np.uint8)

m = 2
for x in range(m, 2000, 5):
    z = 0
    for y in range(400):
        flag[y][x] = image_array[y][x]

akhir = Image.fromarray(flag)

akhir.save('output{}.png'.format(m))


flag = np.zeros((2000, 2000, 3), dtype=np.uint8)

m = 3
for x in range(m, 2000, 5):
    z = 0
    for y in range(400):
        flag[y][x] = image_array[y][x]

akhir = Image.fromarray(flag)

akhir.save('output{}.png'.format(m))


flag = np.zeros((2000, 2000, 3), dtype=np.uint8)

m = 4
for x in range(m, 2000, 5):
    z = 0
    for y in range(400):
        flag[y][x] = image_array[y][x]

akhir = Image.fromarray(flag)

akhir.save('output{}.png'.format(m))