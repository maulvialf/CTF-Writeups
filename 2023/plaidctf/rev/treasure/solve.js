const b64 = `
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
P
Q
R
S
T
U
V
W
X
Y
Z
a
b
c
d
e
f
g
h
i
j
k
l
m
n
o
p
q
r
s
t
u
v
w
x
y
z
0
1
2
3
4
5
6
7
8
9
+
/
=`;

const fs = require('fs').promises;
var fileContent;

async function readFileContent(filePath) {
    try {
      const data = await fs.readFile(filePath, 'utf-8');
        return data;
    } catch (error) {
      console.error('Error while reading the file:', error);
    }
  }
  

async function go(char, position){
    const bti = b64.trim().split("\n").reduce((acc, x, i) => (acc.set(x, i), acc), new Map());
    var flag = char.repeat(25);
    var flagarr = flag.split(""); 
    var upc = flagarr.shift();
    var moi = await readFileContent("0.js")
    var jsonraw = await readFileContent(`${position}.js.map`)
    var tg = JSON.parse(jsonraw)
    const fl = tg.mappings.split(";").flatMap((v, l) =>v.split(",").filter((x) => !!x).map((input) => input.split("").map((x) => bti.get(x)).reduce((acc, i) => (i & 32 ? [...acc.slice(0, -1), [...acc.slice(-1)[0], (i & 31)]] : [...acc.slice(0, -1), [[...acc.slice(-1)[0], i].reverse().reduce((acc, i) => (acc << 5) + i, 0)]].map((x) => typeof x === "number" ? x : x[0] & 0x1 ? (x[0] >>> 1) === 0 ? -0x80000000 : -(x[0] >>> 1) : (x[0] >>> 1)).concat([[]])), [[]]).slice(0, -1)).map(([c, s, ol, oc, n]) => [l,c,s??0,ol??0,oc??0,n??0]).reduce((acc, e, i) => [...acc, [l, e[1] + (acc[i - 1]?.[1]??0), ...e.slice(2)]], [])).reduce((acc, e, i) => [...acc, [...e.slice(0, 2), ...e.slice(2).map((x, c) => x + (acc[i - 1]?.[c + 2] ?? 0))]], []).map(([l, c, s, ol, oc, n], i, ls) => [tg.sources[s],moi.split("\n").slice(l, ls[i+1] ? ls[i+1]?.[0] + 1 : undefined).map((x, ix, nl) => ix === 0 ? l === ls[i+1]?.[0] ? x.slice(c, ls[i+1]?.[1]) : x.slice(c) : ix === nl.length - 1 ? x.slice(0, ls[i+1]?.[1]) : x).join("\n").trim()]).filter(([_, x]) => x === upc).map(([x]) => x)?.[0] ?? tg.sources.slice(-2, -1)[0];
    return fl.split(".js")[0]
}

async function loop(goals){
    // var goals = "32";
    for (let pos = 0; pos < 200; pos++) {
        // Loop through ASCII codes from 32 to 126
        for (let i = 32; i <= 126; i++) {
            // Convert the ASCII code to a character
            const character = String.fromCharCode(i);

            // Do something with the character, like logging it to the console
            // console.log(character);
            var simpen = await go(character,  pos)        
            if(simpen == goals){
                console.log(character, simpen, pos)
                // return [character, pos]
            }
            
        }        
    }
   
}
async function solve(){
    var flag = "!002+tuoba+woH/pam+a+deeN";
    // manually  
    // var flag = "";
    var goals = "137";
    while (true){
        var ret = await loop(goals)
        var [char, pos] = ret
        flag += char
        goals = pos
        console.log(flag)
    }

}

solve()
// Nd+a+map/How+about+200!
