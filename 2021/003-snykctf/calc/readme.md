Simple Z3 to parse calculation

```py
#!/usr/bin/python2
from z3 import *
from pwn import *
from sys import *


huha = connect("35.211.207.36", 8000)


huha.recvuntil("\n\n")

dec = "1234567890 +=*-/"

context.log_level = 'DEBUG'

while True:
    try:
        data =  huha.recvline()
        for i in data:
            if(i not in dec):  
                print i
                break

        data = data.replace("=", "==")

        kotak = Solver()
        exec("{} = Int(0)".format(i))
        exec("kotak.add({})".format(data))

        www = kotak.check()    
        model = kotak.model()
        print model

        index = eval(str(model[0])[2:])
        hehe = eval(str(model[model[0]]))
        print repr(hehe)

        huha.sendline(str(hehe))
        huha.recvline()
    except:
        huha.interactive()


huha.interactive()


# SNYK{37d779963c037715c02624b6963008f55e92d12e8714a15b7a905c1c997d1afc}

```