#!/usr/bin/python3
from Crypto.Cipher import DES3
from sys import *
import requests
from libnum import *
from encryption import DES3_enc, encrypt_key
from binascii import *
import json
if(len(argv) == 2):
  p = "138.68.172.146:32515"
else:
  p = "testsite.com:5000"


def encrypt(key, msg):
	burp0_url = "http://{}/api/encrypt".format(p)
	burp0_headers = {"User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0", "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "Accept-Language": "en-US,en;q=0.5", "Accept-Encoding": "gzip, deflate", "Connection": "close", "Content-Type": "application/json", "Upgrade-Insecure-Requests": "1"}
	burp0_json={"msg": msg, "token": key}
	ret = requests.get(burp0_url, headers=burp0_headers, json=burp0_json)
	return ret.text

def flag(key):
	burp0_url = "http://{}/api/flag".format(p)
	burp0_headers = {"User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0", "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "Accept-Language": "en-US,en;q=0.5", "Accept-Encoding": "gzip, deflate", "Connection": "close", "Content-Type": "application/json", "Upgrade-Insecure-Requests": "1"}
	burp0_json={"token": key}
	ret = requests.get(burp0_url, headers=burp0_headers, json=burp0_json)
	return ret.text


tok = ""
for i in range(24):
	tok += chr(0x41 + i)

# print s2n(tok)
print (tok)
dummy = "ABC"
enc =  encrypt(hexlify(bytes(tok, 'ascii')), hexlify(bytes(dummy, 'ascii')))
data = json.loads(enc)
print('server ret', data['ct'])
get_key = ''
for i in range(0, 1000):
	secret_PIN = str(i).rjust(3, '0')
	print(tok)
	key = encrypt_key(hexlify(bytes(tok, 'ascii')).decode('ascii'), secret_PIN)
		print("key",key)
	ct = DES3_enc(key, b"ABC")
	print("self ct", ct)
	if(ct == data['ct']):
		get_pin = secret_PIN
		get_key = key
		print('get_pin', secret_PIN)
		break


enc = flag(hexlify(bytes(tok, 'ascii')))
data = json.loads(enc)
key = bytes.fromhex(get_key)
print("solver key", key)
cipher = DES3.new(key, DES3.MODE_ECB)
plain = cipher.decrypt(bytes.fromhex(data['ct']))
print(plain)