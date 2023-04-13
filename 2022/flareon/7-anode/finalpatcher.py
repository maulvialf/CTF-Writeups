from jsmin import jsmin
data = open("asli.js", 'rb').read()
awalpatt = b"state ^= Math.floor(Math.random() * (2**30));"
data = data.replace(awalpatt, awalpatt + b";a=0;")

awalpatt = b"var state = 1337;"
data = data.replace(awalpatt, awalpatt + b";var a=0;")



pattern = b""":
        if ("""
datalist = data.split(pattern)
newdata = b""
newdata += datalist[0]
x = 0
for dataone in datalist[1:]:
    x += 1
    patt = b""") {
          """
    dataonespl = dataone.split(patt)
    # print(x, dataonespl[1])
    newdataline = b""
    for line in dataonespl[1].split(b"\n"):
        if(b"Math.random()" in line):
            print(line)
            awalline = line
            line = line.replace(b"Math.random()", b"A")
            print(line)
            line =  b";var A=Math.random();console.log('random', A);"+line + b"\n"
            newdataline += line + b"\n"
        else:
            newdataline += line + b"\n"

    injected = b"a=1;"
    # newdatarow = pattern + dataonespl[0] + patt + injected + dataonespl[1]
    newdatarow = pattern + dataonespl[0] + patt + injected + newdataline

    newdata += newdatarow


awalpatt = b"""        state = """
newdata = newdata.replace(awalpatt, b";console.log(state, a);"+awalpatt)

minified = jsmin(newdata.decode())

open("patched-nominified.js", 'wb').write(newdata)
open("patched.js", 'wb').write(minified.encode())


asli = open("asli.js", "rb").read()
fake = open("patched.js", "rb").read()

assert len(fake) <= len(asli)

fake = fake.rjust(len(asli), b" ")

print(len(asli), len(fake))
assert len(asli) == len(fake)
data = open("anode.exe", "rb").read()
i = 56506374

data = data[:i] + fake + data[i+len(asli):]

open("anode-patch.exe", "wb").write(data)



# AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

