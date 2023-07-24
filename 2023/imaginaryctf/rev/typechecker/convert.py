import numpy as np
from scipy.linalg import solve_sylvester



enc1 = "eZ!gjyTdSLcJ3{!Y_pTcMqW7qu{cMoyb04JXFHUaXx{8gTCIwIGE-AAWb1_wu32{"
enc2 = "HuuMKaxLVHVqC6NSB1Rwl2WC1F7zkxxrxAuZFpPogbBd4LGGgBfK9!eUaaSIuqJK"

pos = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ{_-!}'

enc1num = []
enc2num = []
enc1x = []
enc1x = []
# for i in range(len(enc1)):
#     enc1num.append(pos.index(enc1[i]))
#     enc2num.append(pos.index(enc2[i]))
#     if(i % 8 == 0):
#         enc
for i in range(0, 8):
    enc1temp = []
    enc2temp = []
    for j in range(0, 8):
        enc1temp.append(pos.index(enc1[i*8+j]))
        enc2temp.append(pos.index(enc2[i*8+j]))
    enc1num.append(enc1temp)
    enc2num.append(enc2temp)



print(enc1num)
print(enc2num)

import numpy
enc1num = [[14, 61, 65, 16, 19, 34, 55, 13], [54, 47, 12, 45, 3, 62, 65, 60], [63, 25, 55, 12, 48, 26, 58, 7], [26, 30, 62, 12, 48, 24, 34, 11], [0, 4, 45, 59, 41, 43, 56, 10], [59, 33, 62, 8, 16, 55, 38, 44], [32, 44, 42, 40, 64, 36, 36, 58], [11, 1, 63, 32, 30, 3, 2, 62]]
enc2num = [[43, 30, 30, 48, 46, 10, 33, 47], [57, 43, 57, 26, 38, 6, 49, 54], [37, 1, 53, 32, 21, 2, 58, 38], [1, 41, 7, 35, 20, 33, 33, 27], [33, 36, 30, 61, 41, 25, 51, 24], [16, 11, 37, 13, 4, 47, 42, 42], [16, 37, 15, 46, 9, 65, 14, 56], [10, 10, 54, 44, 30, 26, 45, 46]]

# Your known 8x8 matrices A and B
A = np.array(enc1num)
B = np.array(enc2num)

# flag = [[]]
# assert np.matmul(flag, A) == np.matmul(B, flag)
