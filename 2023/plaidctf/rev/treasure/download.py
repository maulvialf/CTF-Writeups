import os

url = f"http://treasure.chal.pwni.ng/index.html"
os.system("wget {}".format(url))

url = f"http://treasure.chal.pwni.ng/fail.js"
os.system("wget {}".format(url))

url = f"http://treasure.chal.pwni.ng/success.js"
os.system("wget {}".format(url))

for i in range(0, 205):
    url = f"http://treasure.chal.pwni.ng/{i}.js"
    os.system("wget {}".format(url))
    url = f"http://treasure.chal.pwni.ng/{i}.js.map"
    os.system("wget {}".format(url))
