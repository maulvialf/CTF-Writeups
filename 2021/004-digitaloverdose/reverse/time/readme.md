# Time
## TLDR
Replicate decrypt function on the python. Brute time seed on 21 february according to the description.

## Complete write up
To do soon

## Solution
```python
from tqdm import tqdm

from pwn import *
from sys import *
from hashlib import md5
from base64 import b64decode
from base64 import b64encode

from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
from Crypto.Util.Padding import pad, unpad

iv = '\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0A\x0B\x0C\x0D\x0E\x0F\x10'

class AESCipher:
    def __init__(self, key):
        self.key = key
    # def encrypt(self, data):
    #     iv = get_random_bytes(AES.block_size)
    #     self.cipher = AES.new(self.key, AES.MODE_CBC, iv)
    #     return b64encode(iv + self.cipher.encrypt(pad(data.encode('utf-8'), 
    #         AES.block_size)))

    def decrypt(self, data):
        # raw = b64decode(data)
        self.cipher = AES.new(self.key, AES.MODE_CBC, iv)
        return self.cipher.decrypt(data)
        # return unpad(self.cipher.decrypt(raw[AES.block_size:]), AES.block_size)

# pload = '\xa87\xf4\xc7R<(\x11iv\xec\x98\r\x12\x92\xda\xc8H\xbc\x02\xfa\xfa\xd2{\x9cG\xdb\x82i\xcf\xb0\x8f'
pload = p64(0x11283c52c7f437a8)
pload += p64(0xda92120d98ec7669)
pload += p64(0x7bd2fafa02bc48c8)
pload += p64(0x8fb0cf6982db479c)



for i in tqdm(range(1612153254, 1615263654)):
    # t = 1633730930
    # pwd = str(t-i)
    pwd = str(i+1453146)
    # pwd = str(t+i)
    # pwd = str(1633730930+i)
    pwd = pwd.ljust(16, '\x00')
    decipher = (AESCipher(pwd).decrypt(pload))
    if("DO{" == decipher[0:3]):
        print decipher, pwd
        break


# True seed
# 1613606400
```