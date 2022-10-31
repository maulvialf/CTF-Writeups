from sys import *
import requests

# burp0_url = "http://142.93.38.188:31877/api/reset/"
burp0_url = "http://localhost:5000/api/reset/"
burp0_json={"token": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"}
requests.post(burp0_url, json=burp0_json)



import requests


for i in range(0, 256):
	burp0_url = "http://142.93.38.188:31877/api/login/"
	ct = (chr(i) * 53).encode('hex')
	print ct
	burp0_json={"password": ct}
	r = requests.post(burp0_url, json=burp0_json)
	if("HTB" in r.text):
		print (i)
		print (r.text)
		exit()