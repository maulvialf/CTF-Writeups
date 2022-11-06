x = "34MNOPQRAB34MNOPQRABCDEFSTUVWXEFSTUVWXGHIJKLYZ12"

y = "ss_is_beusss_is_beuse_sttter_isttter_iring_h_gue"

z = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234"
kamus = dict()

for i in range(len(x)):
	kamus[x[i]] = y[i]

flag = ""
for i in range(len(z)):
	flag +=   kamus[z[i]]
	print(flag)