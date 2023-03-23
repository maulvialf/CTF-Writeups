s = [' ' for i in range(8)]
v5 = [' ' for i in range(8)]
v6 = [' ' for i in range(8)]
v7 = [' ' for i in range(8)]
v8 = [' ' for i in range(8)]
v9 = [' ' for i in range(8)]
v10 = [' ' for i in range(8)]
v11 = [' ' for i in range(8)]

s[1] = chr(84)
s[7] = chr(107)
s[0] = chr(72)
s[2] = chr(66)
s[3] = chr(123)
s[5] = chr(114)
s[4] = chr(98)
s[6] = chr(48)

v7[7] = chr(112)
v8[4] = chr(100)
v5[3] = chr(52)
v6[4] = chr(101)
v5[2] = chr(95)
v7[1] = chr(95)
v7[5] = chr(114)
v7[2] = chr(98)
v5[5] = chr(52)
v7[6] = chr(51)
v6[3] = chr(118)
v5[4] = chr(112)
v8[1] = chr(49)
v7[3] = chr(51)
v6[1] = chr(110)
v8[0] = chr(52)
v5[1] = chr(110)
v6[0] = chr(44)
v5[0] = chr(51)
v6[7] = chr(116)
v5[7] = chr(116)
v7[0] = chr(48)
v5[6] = chr(114)
v8[5] = chr(125)
v6[2] = chr(51)
v7[4] = chr(95)

print(''.join(s), ''.join(v5), ''.join(v6),''.join(v7), ''.join(v8))
('HTB{br0k3n_4p4rt,n3vet0_b3_r3p41d}')