import base64 
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad,unpad

#AES ECB mode without IV

key = 'Cia!fo2MPXZQvaVA39iuiokE6cvZUkqx' #Must Be 16 char for AES128

def encrypt(raw):
        raw = pad(raw.encode(),16)
        cipher = AES.new(key.encode('utf-8'), AES.MODE_ECB)
        return base64.b64encode(cipher.encrypt(raw))

def decrypt(enc):
        enc = base64.b64decode(enc)
        cipher = AES.new(key.encode('utf-8'), AES.MODE_ECB)
        print(cipher.decrypt(enc))
        # return unpad(cipher.decrypt(enc),16)

decrypted = decrypt("cWGTmeDlFsYEFI9E5mH/eCnQ1SNlWJlXj+klPLbWS/c/1vI7UPrO4dp41u2tTGM2")
print('data: ',decrypted)