p = 67

ct_1 = [[14, 61, 65, 16, 19, 34, 55, 13], [54, 47, 12, 45, 3, 62, 65, 60], [63, 25, 55, 12, 48, 26, 58, 7], [26, 30, 62, 12, 48, 24, 34, 11], [0, 4, 45, 59, 41, 43, 56, 10], [59, 33, 62, 8, 16, 55, 38, 44], [32, 44, 42, 40, 64, 36, 36, 58], [11, 1, 63, 32, 30, 3, 2, 62]]
ct_2 = [[43, 30, 30, 48, 46, 10, 33, 47], [57, 43, 57, 26, 38, 6, 49, 54], [37, 1, 53, 32, 21, 2, 58, 38], [1, 41, 7, 35, 20, 33, 33, 27], [33, 36, 30, 61, 41, 25, 51, 24], [16, 11, 37, 13, 4, 47, 42, 42], [16, 37, 15, 46, 9, 65, 14, 56], [10, 10, 54, 44, 30, 26, 45, 46]]

M1 = matrix(GF(p), ct_1)
M2 = matrix(GF(p), ct_2)

charss = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ{_-!}'

F = PolynomialRing(GF(p), [f"A{i + 1}" for i in range(64-8)])
mat = tuple([charss.index(c) for c in 'ictf{']) + F.gens() + (charss.index('}'), 0, 0)
A = matrix(8, mat)

print(A)

polynomials = []
polynomials.extend([x - y for x, y in zip((M1 * A).list(), (A * M2).list())])
I = F.ideal(polynomials)
assert I.dimension() == 0

Q = F.quotient(I.groebner_basis(), [f"A{i + 1}" for i in range(64-8)])
A = A.change_ring(Q)

F = PolynomialRing(GF(p), ["A56"])
sol = matrix(GF(p), 8, [F(str(a))(0) for a in A.list()])

print(sol)

flag = ""
for i in range(8):
    for j in range(8):
        flag += charss[sol[i][j]]

print(flag)