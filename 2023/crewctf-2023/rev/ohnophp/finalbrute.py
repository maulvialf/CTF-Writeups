flag = "crew{php_1s_4_l4ngu4ge_0f_m4g1c_5b0e7b6a}"

"crew{php_AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA}"
"crew{php_1s_l4ngu4ge_0f_m4g1c_AAAAAAAAAA}"

# import hashlib
# hashlib.
"crew{php_1s_4_l4ngu4ge_0f_m4g1c_"


k = "BwdRVwUHBQVF"
import base64
k = base64.b64decode(k)
import hashlib
x = hashlib.sha256(flag.encode('ascii')).hexdigest()
from pwn import *
print(len(k), len(x))
print(xor(x, k))