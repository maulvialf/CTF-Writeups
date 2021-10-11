# C1 - I think this should be C4
## TLDR
Breakpoint on the anonymous functions to analyse encryption function. Analysis aes functions. There are different how application expand keys round. Print generated keys on the application. Replace default expands key with generated from browser on the AES default implementation. Got the flag


## Complete write up
Access the Site, there are some form that validate the input. 
![](Pasted%20image%2020211011195807.png)
If input wrong there are input nope with red color font.

![](Pasted%20image%2020211011195946.png)

Looking on the source there are index html and 2 js files that loaded when open the sites.

Index html
```html
<html>
	<head>
		<title>DOCTF - C4</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="./styles.css" type="text/css">
	</head>

	<body id="rGZsYWd7UzFLM30=">

		<div class="container centered">
      <h2>NICOS' JAVASCRIPT TRIALS</h2>
      <h2>C4</h2>
      <br>
			<div class="form">
				<p for="input">Enter flag:</p>
        <br/>
				<input type="text" id="input" placeholder="DO{_____________________________}" autocomplete="off">
			</div>
			<div id="answer"></div>
		</div>
		<canvas class="background"></canvas>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js"></script>
	</body>
	
	<script src="./f0.js"></script>
	<script src="./f1.js"></script>
</html>
```

f0.js
```js
const m = {};
const input = document.getElementById('input');
const answer = document.getElementById('answer');

const txt = 'Over the horizon!<br/>~ <a href="https://twitter.com/AtomicNicos">AtomicNicos</a>@DigitalOverdose';
answer.innerHTML = txt;
window.onload = function() {
  Particles.init({
    selector: '.background',
    connectParticles: true,
    color: ['#20c20e', '#0c8900', '#39ff13'],
    speed: 0.3,
    sizeVariations: 4,
    maxParticles: 150
  });
};
input.addEventListener('input', e =>{
  const handler = o => {
    if (o.status) {
      answer.classList.add('green');
      answer.innerHTML = `Good job! You got the flag!`;
    } else {
      answer.classList.add('red');
      answer.innerText = `Nope!`;
      
      setTimeout(()=>{
        answer.classList = '';
        answer.innerHTML = txt;
      }, 500);
    }
  }
  
  if (!m[0](e.target.value, handler)) {
    handler({status: false});
  }
});
```

and f1.js that heavily obsfuscated

![](Pasted%20image%2020211011200142.png)


From file f0.js, we know checker called on this line code

```js
  if (!m[0](e.target.value, handler)) {
    handler({status: false});
  }
```

Try breakpoint on these lines and view the object of !m[0] on the console

![](Pasted%20image%2020211011200319.png)

![](Pasted%20image%2020211011200448.png)

There are function located on the VM18:3. View the functions code and prettied the code, we know the source code of validation code

![](Pasted%20image%2020211011200543.png).

Because code relied on the anonymous functions, its harder to debug the code in here. So I take the code and modified to running on the localhost to made debug more easy.

Below is code of anonymous functions that we already dump
```js
(function anonymous() {
    const _ = [0xf4, 0x39, 0xd1, 0xc0, 0x55, 0x84, 0x36, 0x28, 0xd7, 0x2a, 0xb9, 0x93, 0x2a, 0x18, 0xb1, 0x72, 0x6c, 0xcd, 0xcf, 0x4b, 0xd4, 0x4c, 0x7d, 0xe4, 0xab, 0xf0, 0x23, 0x53, 0x24, 0x5c, 0x2a, 0x42, 0xf8, 0x0e, 0x26, 0xfc, 0xd4, 0x5c, 0xc1, 0x71, 0xef, 0xa9, 0x82, 0x3d, 0x7b, 0x49, 0xa2, 0xdc];
    get__s = (__s_n)=>__s_n.map(x=>[0x63, 0x7C, 0x77, 0x7B, 0xF2, 0x6B, 0x6F, 0xC5, 0x30, 0x01, 0x67, 0x2B, 0xFE, 0xD7, 0xAB, 0x76, 0xCA, 0x82, 0xC9, 0x7D, 0xFA, 0x59, 0x47, 0xF0, 0xAD, 0xD4, 0xA2, 0xAF, 0x9C, 0xA4, 0x72, 0xC0, 0xB7, 0xFD, 0x93, 0x26, 0x36, 0x3F, 0xF7, 0xCC, 0x34, 0xA5, 0xE5, 0xF1, 0x71, 0xD8, 0x31, 0x15, 0x04, 0xC7, 0x23, 0xC3, 0x18, 0x96, 0x05, 0x9A, 0x07, 0x12, 0x80, 0xE2, 0xEB, 0x27, 0xB2, 0x75, 0x09, 0x83, 0x2C, 0x1A, 0x1B, 0x6E, 0x5A, 0xA0, 0x52, 0x3B, 0xD6, 0xB3, 0x29, 0xE3, 0x2F, 0x84, 0x53, 0xD1, 0x00, 0xED, 0x20, 0xFC, 0xB1, 0x5B, 0x6A, 0xCB, 0xBE, 0x39, 0x4A, 0x4C, 0x58, 0xCF, 0xD0, 0xEF, 0xAA, 0xFB, 0x43, 0x4D, 0x33, 0x85, 0x45, 0xF9, 0x02, 0x7F, 0x50, 0x3C, 0x9F, 0xA8, 0x51, 0xA3, 0x40, 0x8F, 0x92, 0x9D, 0x38, 0xF5, 0xBC, 0xB6, 0xDA, 0x21, 0x10, 0xFF, 0xF3, 0xD2, 0xCD, 0x0C, 0x13, 0xEC, 0x5F, 0x97, 0x44, 0x17, 0xC4, 0xA7, 0x7E, 0x3D, 0x64, 0x5D, 0x19, 0x73, 0x60, 0x81, 0x4F, 0xDC, 0x22, 0x2A, 0x90, 0x88, 0x46, 0xEE, 0xB8, 0x14, 0xDE, 0x5E, 0x0B, 0xDB, 0xE0, 0x32, 0x3A, 0x0A, 0x49, 0x06, 0x24, 0x5C, 0xC2, 0xD3, 0xAC, 0x62, 0x91, 0x95, 0xE4, 0x79, 0xE7, 0xC8, 0x37, 0x6D, 0x8D, 0xD5, 0x4E, 0xA9, 0x6C, 0x56, 0xF4, 0xEA, 0x65, 0x7A, 0xAE, 0x08, 0xBA, 0x78, 0x25, 0x2E, 0x1C, 0xA6, 0xB4, 0xC6, 0xE8, 0xDD, 0x74, 0x1F, 0x4B, 0xBD, 0x8B, 0x8A, 0x70, 0x3E, 0xB5, 0x66, 0x48, 0x03, 0xF6, 0x0E, 0x61, 0x35, 0x57, 0xB9, 0x86, 0xC1, 0x1D, 0x9E, 0xE1, 0xF8, 0x98, 0x11, 0x69, 0xD9, 0x8E, 0x94, 0x9B, 0x1E, 0x87, 0xE9, 0xCE, 0x55, 0x28, 0xDF, 0x8C, 0xA1, 0x89, 0x0D, 0xBF, 0xE6, 0x42, 0x68, 0x41, 0x99, 0x2D, 0x0F, 0xB0, 0x54, 0xBB, 0x16][x]);
    u = (u_m)=>Array.from(u_m).map(u_x=>u_x.charCodeAt(0));
    e = (e_m)=>{
        e_k = [0xAC, 0x46, 0x4C, 0x41, 0x47, 0x7B, 0x54, 0x48, 0x31, 0x24, 0x5F, 0x31, 0x24, 0x5F, 0x42, 0x31, 0x54, 0x5F, 0x54, 0x34, 0x4E, 0x47, 0x30, 0x7D];
        e_gfm = ((bm_bl)=>{
            bm_n = [];
            for (bm_j = 0; bm_j < 4; bm_j++) {
                bm_n.push([]);
                for (bm_i = 0; bm_i < 4; bm_i++)
                    bm_n[bm_j].push(bm_bl[bm_i * 4 + bm_j]);
            }
            ;return bm_n
        }
        )([0x02, 0x01, 0x01, 0x03, 0x03, 0x02, 0x01, 0x01, 0x01, 0x03, 0x02, 0x01, 0x01, 0x01, 0x03, 0x02]);
        e_sk = ((gsk_k)=>{
            gsk_N = ((n_k)=>[4, 6, 8][n_k.length * 2 / 16 - 2])(gsk_k);
            gsk_K = ((sk_k)=>{
                sk_bl = [];
                for (sk_i = 0; sk_i < sk_k.length / 4; sk_i++) {
                    sk_bl.push(sk_k.slice(sk_i * 4, (sk_i + 1) * 4))
                }
                ;return sk_bl
            }
            )(gsk_k);
            gsk_W = [];
            for (gsk_i = 0; gsk_i < (((r_k)=>[10, 12, 14][r_k.length * 2 / 16 - 2])(gsk_k) + 1) * 4; gsk_i++) {
                gsk_W.push([]);
                (gsk_i < gsk_N) ? gsk_W[gsk_W.length - 1] = gsk_K[gsk_i].slice() : ((gsk_i >= gsk_N && gsk_i % gsk_N == 0) ? gsk_W[gsk_W.length - 1] = ((...xr_v)=>{
                    xr_n = xr_v[0].slice();
                    for (xr_i = 1; xr_i < xr_v.length; xr_i++) {
                        for (xr_j = 0; xr_j < xr_v[xr_i].length; xr_j++) {
                            xr_n[xr_j] ^= xr_v[xr_i][xr_j];
                        }
                    }
                    ;return xr_n
                }
                )(gsk_W[gsk_i - gsk_N], get__s(((sk_n,sk_l)=>(sk_l ? [sk_n[1], sk_n[2], sk_n[3], sk_n[0]] : [sk_n[3], sk_n[0], sk_n[1], sk_n[2]]))(gsk_W[gsk_i - 1].slice(), true)), ((rcon_i)=>[[0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1B, 0x36][rcon_i], 0x00, 0x00, 0x00])((gsk_i / gsk_N) | 0)).slice() : ((gsk_i >= gsk_N && gsk_i % 4 == 0) ? gsk_W[gsk_W.length - 1] = ((...xr_v)=>{
                    xr_n = xr_v[0].slice();
                    for (xr_i = 1; xr_i < xr_v.length; xr_i++) {
                        for (xr_j = 0; xr_j < xr_v[xr_i].length; xr_j++) {
                            xr_n[xr_j] ^= xr_v[xr_i][xr_j];
                        }
                    }
                    ;return xr_n
                }
                )(gsk_W[gsk_i - gsk_N], get__s(gsk_W[gsk_i - 1])).slice() : gsk_W[gsk_W.length - 1] = ((...xr_v)=>{
                    xr_n = xr_v[0].slice();
                    for (xr_i = 1; xr_i < xr_v.length; xr_i++) {
                        for (xr_j = 0; xr_j < xr_v[xr_i].length; xr_j++) {
                            xr_n[xr_j] ^= xr_v[xr_i][xr_j];
                        }
                    }
                    ;return xr_n
                }
                )(gsk_W[gsk_i - gsk_N], gsk_W[gsk_i - 1]).slice()));
            }
            ;gsk_n = [];
            for (gsk_j = 0; gsk_j < gsk_W.length; gsk_j++) {
                if (gsk_j % 4 == 0)
                    gsk_n.push([]);
                gsk_n[gsk_n.length - 1].push(...gsk_W[gsk_j].slice());
            }
            ;return gsk_n
        }
        )(e_k);
        bs = ((stb_bl)=>{
            stb_n = [];
            for (stb_i = 0; stb_i < stb_bl.length / 16; stb_i++)
                stb_n.push(stb_bl.slice(stb_i * 16, (stb_i + 1) * 16));
            return stb_n
        }
        )(((p_bl)=>{
            p_n = p_bl.slice(0);
            p_mi = 16 - (p_n.length % 16);
            for (let i = 0; i < p_mi; i++) {
                p_n.push(p_mi)
            }
            ;return p_n
        }
        )(e_m));
        for (e_i = 0; e_i < bs.length; e_i++) {
            bs[e_i] = ((...xr_v)=>{
                xr_n = xr_v[0].slice();
                for (xr_i = 1; xr_i < xr_v.length; xr_i++) {
                    for (xr_j = 0; xr_j < xr_v[xr_i].length; xr_j++) {
                        xr_n[xr_j] ^= xr_v[xr_i][xr_j];
                    }
                }
                ;return xr_n
            }
            )(bs[e_i], e_sk[0]).slice();
            for (e_s = 1; e_s < e_sk.length; e_s++) {
                bs[e_i] = ((sr_m,sr_l)=>{
                    sr_n = [];
                    for (sr_i = 0; sr_i < sr_m.length; sr_i++) {
                        sr_n[sr_i] = sr_m[sr_i].slice();
                        for (sr_j = 1; sr_j < sr_i + 1; sr_j++)
                            sr_n[sr_i] = ((sk_n,sk_l)=>sk_l ? [sk_n[1], sk_n[2], sk_n[3], sk_n[0]] : [sk_n[3], sk_n[0], sk_n[1], sk_n[2]])(sr_n[sr_i].slice(), sr_l).slice();
                    }
                    return sr_n
                }
                )(((bm_bl)=>{
                    bm_n = [];
                    for (bm_j = 0; bm_j < 4; bm_j++) {
                        bm_n.push([]);
                        for (bm_i = 0; bm_i < 4; bm_i++)
                            bm_n[bm_j].push(bm_bl[bm_i * 4 + bm_j]);
                    }
                    ;return bm_n
                }
                )(get__s(bs[e_i]).slice()).slice(), true).slice();
                if (e_s != e_sk.length - 1)
                    bs[e_i] = ((mc_fm,mc_m)=>{
                        mc_tm = ((tsm_m)=>{
                            tsm_n = [];
                            for (tsm_i = 0; tsm_i < tsm_m.length; tsm_i++) {
                                tsm_n.push([]);
                                for (tsm_j = 0; tsm_j < tsm_m[tsm_i].length; tsm_j++)
                                    tsm_n[tsm_i].push(tsm_m[tsm_j][tsm_i]);
                            }
                            return tsm_n
                        }
                        )(mc_m);
                        mc_n = [];
                        for (mc_i = 0; mc_i < 4; mc_i++) {
                            mc_n[mc_i] = [];
                            for (mc_j = 0; mc_j < 4; mc_j++) {
                                mc_z = ((zip_a,zip_b)=>{
                                    zip_n = [];
                                    for (zip_i = 0; zip_i < zip_a.length; zip_i++)
                                        zip_n[zip_i] = {
                                            1: zip_a[zip_i],
                                            2: zip_b[zip_i]
                                        };
                                    return zip_n
                                }
                                )(mc_fm[mc_i], mc_tm[mc_j]);
                                mc_gf = [];
                                for (mc_k = 0; mc_k < mc_z.length; mc_k++)
                                    mc_gf.push(((gm_a,gm_b)=>{
                                        gm_p = 0;
                                        gm_a_ = gm_a;
                                        gm_b_ = gm_b;
                                        for (gm_i = 0; gm_i < 8; gm_i++) {
                                            gm_p ^= (gm_a_ & 1) * gm_b_;
                                            gm_b_ = (gm_b_ << 1) ^ ((gm_b_ >> 7) * 0x11b);
                                            gm_a_ >>= 1;
                                        }
                                        return gm_p
                                    }
                                    )(mc_z[mc_k][1], mc_z[mc_k][2]));
                                mc_x = mc_gf[0];
                                for (mc_l = 1; mc_l < mc_gf.length; mc_l++)
                                    mc_x ^= mc_gf[mc_l];
                                mc_n[mc_i].push(mc_x);
                            }
                        }
                        return mc_n;
                    }
                    )(e_gfm, bs[e_i]).slice();
                bs[e_i] = ((...xr_v)=>{
                    xr_n = xr_v[0].slice();
                    for (xr_i = 1; xr_i < xr_v.length; xr_i++) {
                        for (xr_j = 0; xr_j < xr_v[xr_i].length; xr_j++) {
                            xr_n[xr_j] ^= xr_v[xr_i][xr_j];
                        }
                    }
                    ;return xr_n
                }
                )(((mb_m)=>{
                    mb_n = [];
                    for (mb_i = 0; mb_i < 4; mb_i++) {
                        for (mb_j = 0; mb_j < 4; mb_j++)
                            mb_n.push(mb_m[mb_j][mb_i]);
                    }
                    return mb_n;
                }
                )(bs[e_i]).slice(), e_sk[e_s]).slice();
            }
        }
        ;return bs.flat()
    }
    ;
    h = (t)=>{
        return t.map(t=>{
            const n = t.toString(16);
            return 1 == n.length ? `0${n}` : `${n}`
        }
        ).join("")
    }
    ;
    t = (t)=>{
        return (t = h(e(((message)=>Array.from(message).map(x=>x.charCodeAt(0)))(t))) == h(_));
    }
    ;
    const c = (n,e)=>{
        if (document.getElementById("rGZsYWd7UzFLM30=") && n.length % 3 == 0) {
            if (t(n))
                return e({
                    status: !0,
                    flag: n
                }),
                !0
        } else
            e({
                status: !1
            });
        return !1;
    }
    ;
    this[0][0] = c;
}
)
```

Modify the code to made sure we can execute on self js files

local html files
```
<html>
	<head>
		<title>DOCTF - C4</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="./styles.css" type="text/css">
	</head>

	<script src="./sekrip.js"></script>
</html>
```

local sekrip.js
```js
const _ = [0xf4, 0x39, 0xd1, 0xc0, 0x55, 0x84, 0x36, 0x28, 0xd7, 0x2a, 0xb9, 0x93, 0x2a, 0x18, 0xb1, 0x72, 0x6c, 0xcd, 0xcf, 0x4b, 0xd4, 0x4c, 0x7d, 0xe4, 0xab, 0xf0, 0x23, 0x53, 0x24, 0x5c, 0x2a, 0x42, 0xf8, 0x0e, 0x26, 0xfc, 0xd4, 0x5c, 0xc1, 0x71, 0xef, 0xa9, 0x82, 0x3d, 0x7b, 0x49, 0xa2, 0xdc];

// aes sbox
get__s = (__s_n) => __s_n.map(x => [0x63, 0x7C, 0x77, 0x7B, 0xF2, 0x6B, 0x6F, 0xC5, 0x30, 0x01, 0x67, 0x2B, 0xFE, 0xD7, 0xAB, 0x76, 0xCA, 0x82, 0xC9, 0x7D, 0xFA, 0x59, 0x47, 0xF0, 0xAD, 0xD4, 0xA2, 0xAF, 0x9C, 0xA4, 0x72, 0xC0, 0xB7, 0xFD, 0x93, 0x26, 0x36, 0x3F, 0xF7, 0xCC, 0x34, 0xA5, 0xE5, 0xF1, 0x71, 0xD8, 0x31, 0x15, 0x04, 0xC7, 0x23, 0xC3, 0x18, 0x96, 0x05, 0x9A, 0x07, 0x12, 0x80, 0xE2, 0xEB, 0x27, 0xB2, 0x75, 0x09, 0x83, 0x2C, 0x1A, 0x1B, 0x6E, 0x5A, 0xA0, 0x52, 0x3B, 0xD6, 0xB3, 0x29, 0xE3, 0x2F, 0x84, 0x53, 0xD1, 0x00, 0xED, 0x20, 0xFC, 0xB1, 0x5B, 0x6A, 0xCB, 0xBE, 0x39, 0x4A, 0x4C, 0x58, 0xCF, 0xD0, 0xEF, 0xAA, 0xFB, 0x43, 0x4D, 0x33, 0x85, 0x45, 0xF9, 0x02, 0x7F, 0x50, 0x3C, 0x9F, 0xA8, 0x51, 0xA3, 0x40, 0x8F, 0x92, 0x9D, 0x38, 0xF5, 0xBC, 0xB6, 0xDA, 0x21, 0x10, 0xFF, 0xF3, 0xD2, 0xCD, 0x0C, 0x13, 0xEC, 0x5F, 0x97, 0x44, 0x17, 0xC4, 0xA7, 0x7E, 0x3D, 0x64, 0x5D, 0x19, 0x73, 0x60, 0x81, 0x4F, 0xDC, 0x22, 0x2A, 0x90, 0x88, 0x46, 0xEE, 0xB8, 0x14, 0xDE, 0x5E, 0x0B, 0xDB, 0xE0, 0x32, 0x3A, 0x0A, 0x49, 0x06, 0x24, 0x5C, 0xC2, 0xD3, 0xAC, 0x62, 0x91, 0x95, 0xE4, 0x79, 0xE7, 0xC8, 0x37, 0x6D, 0x8D, 0xD5, 0x4E, 0xA9, 0x6C, 0x56, 0xF4, 0xEA, 0x65, 0x7A, 0xAE, 0x08, 0xBA, 0x78, 0x25, 0x2E, 0x1C, 0xA6, 0xB4, 0xC6, 0xE8, 0xDD, 0x74, 0x1F, 0x4B, 0xBD, 0x8B, 0x8A, 0x70, 0x3E, 0xB5, 0x66, 0x48, 0x03, 0xF6, 0x0E, 0x61, 0x35, 0x57, 0xB9, 0x86, 0xC1, 0x1D, 0x9E, 0xE1, 0xF8, 0x98, 0x11, 0x69, 0xD9, 0x8E, 0x94, 0x9B, 0x1E, 0x87, 0xE9, 0xCE, 0x55, 0x28, 0xDF, 0x8C, 0xA1, 0x89, 0x0D, 0xBF, 0xE6, 0x42, 0x68, 0x41, 0x99, 0x2D, 0x0F, 0xB0, 0x54, 0xBB, 0x16][x]);
u = (u_m) => Array.from(u_m).map(u_x => u_x.charCodeAt(0));
e = (e_m) => {
    e_k = [0xAC, 0x46, 0x4C, 0x41, 0x47, 0x7B, 0x54, 0x48, 0x31, 0x24, 0x5F, 0x31, 0x24, 0x5F, 0x42, 0x31, 0x54, 0x5F, 0x54, 0x34, 0x4E, 0x47, 0x30, 0x7D];
    // expansion box
    e_gfm = ((bm_bl) => {
        bm_n = [];
        for (bm_j = 0; bm_j < 4; bm_j++) {
            bm_n.push([]);
            for (bm_i = 0; bm_i < 4; bm_i++)
                bm_n[bm_j].push(bm_bl[bm_i * 4 + bm_j]);
        };
        return bm_n
    })([0x02, 0x01, 0x01, 0x03, 0x03, 0x02, 0x01, 0x01, 0x01, 0x03, 0x02, 0x01, 0x01, 0x01, 0x03, 0x02]);
    console.log(e_gfm)
    e_sk = ((gsk_k) => {
        gsk_N = ((n_k) => [4, 6, 8][n_k.length * 2 / 16 - 2])(gsk_k);
        console.log(gsk_N)
        gsk_K = ((sk_k) => {
            sk_bl = [];
            for (sk_i = 0; sk_i < sk_k.length / 4; sk_i++) {
                sk_bl.push(sk_k.slice(sk_i * 4, (sk_i + 1) * 4))
            };
            return sk_bl
        })(gsk_k);
        gsk_W = [];
        console.log(gsk_K)
        for (gsk_i = 0; gsk_i < (((r_k) => [10, 12, 14][r_k.length * 2 / 16 - 2])(gsk_k) + 1) * 4; gsk_i++) {
            gsk_W.push([]);
            (gsk_i < gsk_N) ? gsk_W[gsk_W.length - 1] = gsk_K[gsk_i].slice(): ((gsk_i >= gsk_N && gsk_i % gsk_N == 0) ? gsk_W[gsk_W.length - 1] = ((...xr_v) => {
                xr_n = xr_v[0].slice();
                for (xr_i = 1; xr_i < xr_v.length; xr_i++) {
                    console.log('awal xor');
                    console.log(xr_v[xr_i])
                    console.log(xr_n)
                    console.log('------------')
                    
                    for (xr_j = 0; xr_j < xr_v[xr_i].length; xr_j++) {
                        xr_n[xr_j] ^= xr_v[xr_i][xr_j];
                    }

                    console.log(xr_n)
                    console.log('akhir xor');

                };
                return xr_n
            })(gsk_W[gsk_i - gsk_N], get__s(((sk_n, sk_l) => (sk_l ? [sk_n[1], sk_n[2], sk_n[3], sk_n[0]] : [sk_n[3], sk_n[0], sk_n[1], sk_n[2]]))(gsk_W[gsk_i - 1].slice(), true)), ((rcon_i) => [
                [0x8d, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1B, 0x36][rcon_i], 0x00, 0x00, 0x00
            ])((gsk_i / gsk_N) | 0)).slice() : ((gsk_i >= gsk_N && gsk_i % 4 == 0) ? gsk_W[gsk_W.length - 1] = ((...xr_v) => {
                xr_n = xr_v[0].slice();
                for (xr_i = 1; xr_i < xr_v.length; xr_i++) {
                    console.log('awal xor');
                    console.log(xr_v[xr_i])
                    console.log(xr_n)
                    console.log('------------')

                    for (xr_j = 0; xr_j < xr_v[xr_i].length; xr_j++) {
                        xr_n[xr_j] ^= xr_v[xr_i][xr_j];
                    }
                    console.log(xr_n)
                    console.log('akhir xor');
                };
                return xr_n
            })(gsk_W[gsk_i - gsk_N], get__s(gsk_W[gsk_i - 1])).slice() : gsk_W[gsk_W.length - 1] = ((...xr_v) => {
                xr_n = xr_v[0].slice();
                for (xr_i = 1; xr_i < xr_v.length; xr_i++) {
                    console.log('awal xor');
                    console.log(xr_v[xr_i])
                    console.log(xr_n)
                    console.log('------------')
                    for (xr_j = 0; xr_j < xr_v[xr_i].length; xr_j++) {
                        xr_n[xr_j] ^= xr_v[xr_i][xr_j];
                    }
                    console.log(xr_n)
                    console.log('akhir xor');
                };
                return xr_n
            })(gsk_W[gsk_i - gsk_N], gsk_W[gsk_i - 1]).slice()));
        };
        gsk_n = [];
        for (gsk_j = 0; gsk_j < gsk_W.length; gsk_j++) {
            if (gsk_j % 4 == 0)
                gsk_n.push([]);
            gsk_n[gsk_n.length - 1].push(...gsk_W[gsk_j].slice());
        };
        return gsk_n
    })(e_k);
    console.log('expand')
    console.log(e_sk);
    console.log('expand')
    debugger;


    bs = ((stb_bl) => {
        console.log('muantap')
        console.log(stb_bl)
        stb_n = [];
        for (stb_i = 0; stb_i < stb_bl.length / 16; stb_i++)
            stb_n.push(stb_bl.slice(stb_i * 16, (stb_i + 1) * 16));

        console.log(stb_n);

        return stb_n
    })(((p_bl) => {
        console.log('tenan')
        console.log(p_bl)

        p_n = p_bl.slice(0);
        p_mi = 16 - (p_n.length % 16);
        for (let i = 0; i < p_mi; i++) {
            p_n.push(p_mi)
        }
        console.log(p_mi)

        ;
        return p_n
    })(e_m));
    
    for (e_i = 0; e_i < bs.length; e_i++) {
        console.log("debug this");
        console.log(bs);

        bs[e_i] = ((...xr_v) => {
                xr_n = xr_v[0].slice();
                for (xr_i = 1; xr_i < xr_v.length; xr_i++) {
                    console.log('loop');
                    console.log(xr_n);
                    console.log(xr_v);
                    for (xr_j = 0; xr_j < xr_v[xr_i].length; xr_j++) {
                        xr_n[xr_j] ^= xr_v[xr_i][xr_j];
                    }
                    console.log(xr_n);
                    console.log('end loop');

                };
                return xr_n
            }


        )(bs[e_i], e_sk[0]).slice();
        // tracker
        console.log("debug this");
        console.log(bs);
        // debugger
        for (e_s = 1; e_s < e_sk.length; e_s++) {
            // debugger
            bs[e_i] = ((sr_m, sr_l) => {
                sr_n = [];
                for (sr_i = 0; sr_i < sr_m.length; sr_i++) {
                    sr_n[sr_i] = sr_m[sr_i].slice();
                    for (sr_j = 1; sr_j < sr_i + 1; sr_j++)
                        sr_n[sr_i] = ((sk_n, sk_l) => sk_l ? [sk_n[1], sk_n[2], sk_n[3], sk_n[0]] : [sk_n[3], sk_n[0], sk_n[1], sk_n[2]])(sr_n[sr_i].slice(), sr_l).slice();
                }
                return sr_n
            })(((bm_bl) => {
                console.log("bantal");
                console.log(bm_bl);
                bm_n = [];
                for (bm_j = 0; bm_j < 4; bm_j++) {
                    bm_n.push([]);
                    for (bm_i = 0; bm_i < 4; bm_i++)
                        bm_n[bm_j].push(bm_bl[bm_i * 4 + bm_j]);
                };
                return bm_n
            })(get__s(bs[e_i]).slice()).slice(), true).slice();
            if (e_s != e_sk.length - 1)
                bs[e_i] = ((mc_fm, mc_m) => {
                    mc_tm = ((tsm_m) => {
                        tsm_n = [];
                        for (tsm_i = 0; tsm_i < tsm_m.length; tsm_i++) {
                            tsm_n.push([]);
                            for (tsm_j = 0; tsm_j < tsm_m[tsm_i].length; tsm_j++)
                                tsm_n[tsm_i].push(tsm_m[tsm_j][tsm_i]);
                        }
                        return tsm_n
                    })(mc_m);
                    mc_n = [];
                    for (mc_i = 0; mc_i < 4; mc_i++) {
                        mc_n[mc_i] = [];
                        for (mc_j = 0; mc_j < 4; mc_j++) {
                            mc_z = ((zip_a, zip_b) => {
                                zip_n = [];
                                for (zip_i = 0; zip_i < zip_a.length; zip_i++)
                                    zip_n[zip_i] = {
                                        1: zip_a[zip_i],
                                        2: zip_b[zip_i]
                                    };
                                return zip_n
                            })(mc_fm[mc_i], mc_tm[mc_j]);
                            mc_gf = [];
                            for (mc_k = 0; mc_k < mc_z.length; mc_k++)
                                mc_gf.push(((gm_a, gm_b) => {
                                    gm_p = 0;
                                    gm_a_ = gm_a;
                                    gm_b_ = gm_b;
                                    for (gm_i = 0; gm_i < 8; gm_i++) {
                                        gm_p ^= (gm_a_ & 1) * gm_b_;
                                        gm_b_ = (gm_b_ << 1) ^ ((gm_b_ >> 7) * 0x11b);
                                        gm_a_ >>= 1;
                                    }
                                    return gm_p
                                })(mc_z[mc_k][1], mc_z[mc_k][2]));
                            mc_x = mc_gf[0];
                            for (mc_l = 1; mc_l < mc_gf.length; mc_l++)
                                mc_x ^= mc_gf[mc_l];
                            mc_n[mc_i].push(mc_x);
                        }
                    }
                    return mc_n;
                })(e_gfm, bs[e_i]).slice();
            bs[e_i] = ((...xr_v) => {
                xr_n = xr_v[0].slice();
                for (xr_i = 1; xr_i < xr_v.length; xr_i++) {
                    for (xr_j = 0; xr_j < xr_v[xr_i].length; xr_j++) {
                        xr_n[xr_j] ^= xr_v[xr_i][xr_j];
                    }
                };
                return xr_n
            })(((mb_m) => {
                mb_n = [];
                for (mb_i = 0; mb_i < 4; mb_i++) {
                    for (mb_j = 0; mb_j < 4; mb_j++)
                        mb_n.push(mb_m[mb_j][mb_i]);
                }
                return mb_n;
            })(bs[e_i]).slice(), e_sk[e_s]).slice();
        }
    }
    console.log("finale")
    console.log(bs.flat())
    console.log("finale")
    return bs.flat()
};
h = (t) => {
    return t.map(t => {
        const n = t.toString(16);
        return 1 == n.length ? `0${n}` : `${n}`
    }).join("")
};
firstchalls = (t) => {
    var enc = e(((message) => Array.from(message).map(x => x.charCodeAt(0)))(t));
    console.log(h(enc))
    console.log(h(_))
    return (t = h(enc) == h(_));
}

var inputflag = "AAAAAAAAAAAAAAAA";
inputflag    += "AAAAAAAAAAAAAAAA";
inputflag    += "BBBBBBBBBBBBBBBB";
inputflag    += "BBBBBBBBBBBBBBBB";

firstchalls(inputflag)

```

![](Pasted%20image%2020211011202336.png)

Open the local page, and check the console. We know that now application running successfully. *(There already some information printed, because i already add there to know execution flow)*

Now we try to analyse what the validation check happened.

After analyze the code, we know few things

1. This functions (we name firstchalls) is call first. Functions get parameter that we input, and call functions e that encrypt the character. And compare with variable "_". 
![](Pasted%20image%2020211011201825.png)
![](Pasted%20image%2020211011201954.png)
2. There some AES encryption used to encrypt the input. There are sbox constant and rcon constant in the execution.
![](Pasted%20image%2020211011202101.png)
![](Pasted%20image%2020211011202156.png)

3. Our input somehow processed as AES ECB encrypted. Our input is encrypted each 16 bytes block. 
![](Pasted%20image%2020211011202409.png)
Block 1 and Block 2 output same. Because our input on block1 and block2 is all "A"  bytes

4. We know that for AES ECB encryption we need keys. Keys defined in this variable
![](Pasted%20image%2020211011202557.png)

5. Keysize is 24 bytes, is indicate AES used is 192 bytes.

After we know all about these information, maybe we can try to decrypt the flag on parameter "\_" But these assumptions is wrong.

Code to try decrypt the encrypted secret
```python
from pwn import *
from sys import *


from tqdm import tqdm

from pwn import *
from sys import *
from hashlib import md5
from base64 import b64decode
from base64 import b64encode

from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
from Crypto.Util.Padding import pad, unpad


class AESCipher:
    def __init__(self, key):
        self.key = key

    def encrypt(self, data):
        self.cipher = AES.new(self.key, AES.MODE_ECB)
        return self.cipher.encrypt(data)

    def decrypt(self, data):
        self.cipher = AES.new(self.key, AES.MODE_ECB)
        return self.cipher.decrypt(data)


x = [0xf4, 0x39, 0xd1, 0xc0, 0x55, 0x84, 0x36, 0x28, 0xd7, 0x2a, 0xb9, 0x93, 0x2a, 0x18, 0xb1, 0x72, 0x6c, 0xcd, 0xcf, 0x4b, 0xd4, 0x4c, 0x7d, 0xe4, 0xab, 0xf0, 0x23, 0x53, 0x24, 0x5c, 0x2a, 0x42, 0xf8, 0x0e, 0x26, 0xfc, 0xd4, 0x5c, 0xc1, 0x71, 0xef, 0xa9, 0x82, 0x3d, 0x7b, 0x49, 0xa2, 0xdc];
x = map(chr, x)
x = ''.join(x)


key = [0xAC, 0x46, 0x4C, 0x41, 0x47, 0x7B, 0x54, 0x48, 0x31, 0x24, 0x5F, 0x31, 0x24, 0x5F, 0x42, 0x31, 0x54, 0x5F, 0x54, 0x34, 0x4E, 0x47, 0x30, 0x7D]
key = map(chr, key)
key = ''.join(key)

out = AESCipher(key).decrypt(x)

print repr(out)
```

![](Pasted%20image%2020211011203116.png)

Sad moment. So maybe there are another assumption, maybe there are custom / specific things that appended to the execution that differ from standard of AES execution. 

To made easier to found different behavour between how application aes and standard aes works, i use this aes script https://github.com/boppreh/aes/blob/master/aes.py. Input same keys, same mode (theres assumption earlier apps used ECB) and same input and debug the behaviour on real AES implementation.

aes.py with modified script
```python
#!/usr/bin/env python3
from pprint import pprint as pp
"""
This is an exercise in secure symmetric-key encryption, implemented in pure
Python (no external libraries needed).

Original AES-128 implementation by Bo Zhu (http://about.bozhu.me) at 
https://github.com/bozhu/AES-Python . PKCS#7 padding, CBC mode, PKBDF2, HMAC,
byte array and string support added by me at https://github.com/boppreh/aes. 
Other block modes contributed by @righthandabacus.


Although this is an exercise, the `encrypt` and `decrypt` functions should
provide reasonable security to encrypted messages.
"""


s_box = (
    0x63, 0x7C, 0x77, 0x7B, 0xF2, 0x6B, 0x6F, 0xC5, 0x30, 0x01, 0x67, 0x2B, 0xFE, 0xD7, 0xAB, 0x76,
    0xCA, 0x82, 0xC9, 0x7D, 0xFA, 0x59, 0x47, 0xF0, 0xAD, 0xD4, 0xA2, 0xAF, 0x9C, 0xA4, 0x72, 0xC0,
.
.
.
# key = [0xAC, 0x46, 0x4C, 0x41, 0x47, 0x7B, 0x54, 0x48, 0x31, 0x24, 0x5F, 0x31, 0x24, 0x5F, 0x42, 0x31, 0x54, 0x5F, 0x54, 0x34, 0x4E, 0x47, 0x30, 0x7D]
# print (len(key))
# key = map(chr, key)
# key = ''.join(key)
# decoded on chars instead on chr convert
key = b'\xacFLAG{TH1$_1$_B1T_T4NG0}'

# init aes key
aes = AES(key)

```

At first, we try to analyze how real AES generated the key expand. AES would expand key that we input to satisfied round operation on the encryption / decryption.

Some code that i modified

Expand behaviour
```python
    def _expand_key(self, master_key):
        """
        Expands and returns a list of key matrices for the given master_key.
        """
        # Initialize round keys with raw key material.
        key_columns = bytes2matrix(master_key)
        iteration_size = len(master_key) // 4
        print(key_columns)
        # Each iteration has exactly as many columns as the key material.
        columns_per_iteration = len(key_columns)

        i = 1
        while len(key_columns) < (self.n_rounds + 1) * 4:
            # Copy previous word.
            word = list(key_columns[-1])
            print ('loop', (len(key_columns)))
            # Perform schedule_core once every "row".
            if len(key_columns) % iteration_size == 0:
                # Circular shift.
                word.append(word.pop(0))
                # Map to S-BOX.
                pp('mapping')
                pp(word)
                word = [s_box[b] for b in word]
                pp(word)
                pp('mapping')
                
                # XOR with first byte of R-CON, since the others bytes of R-CON are 0.
                word[0] ^= r_con[i]
                pp('xored with rcon')

                i += 1

            # XOR with equivalent word from previous iteration.
            pp(word)
            pp(key_columns[-iteration_size])
            pp('xor')

            word = xor_bytes(word, key_columns[-iteration_size])
            print ('aa')
            print (list(word))
            print (word)
            print ('aa')

            # kotak = []
            # for xood in range(len(word)):
            #     print('a')
            #     print (repr(xood[i]))
            #     print('a')
            #     kotak += [ord(xood[i])]
            # pp(kotak)
            # pp(word)
            pp('debug')
            kword = []
            for ch in word:
                kword += [int(ch)]
            key_columns.append(kword)

        print (len(key_columns))
        for x in range(12):
            print (key_columns[4 * x: 4 * (x+1)])

        return [key_columns[4*i : 4*(i+1)] for i in range(len(key_columns) // 4)]

```

Running the script we would get expanded keys like this
```bash
[[172, 70, 76, 65], [71, 123, 84, 72], [49, 36, 95, 49], [36, 95, 66, 49]]
[[84, 95, 84, 52], [78, 71, 48, 125], [13, 66, 179, 110], [74, 57, 231, 38]]
[[123, 29, 184, 23], [95, 66, 250, 38], [11, 29, 174, 18], [69, 90, 158, 111]]
[[177, 73, 27, 0], [251, 112, 252, 38], [128, 109, 68, 49], [223, 47, 190, 23]]
[[212, 50, 16, 5], [145, 104, 142, 106], [240, 80, 25, 129], [11, 32, 229, 167]]
[[139, 77, 161, 150], [84, 98, 31, 129], [128, 80, 15, 132], [17, 56, 129, 238]]
[[255, 92, 49, 3], [244, 124, 212, 164], [127, 49, 117, 50], [43, 83, 106, 179]]
[[171, 3, 101, 55], [186, 59, 228, 217], [13, 53, 4, 247], [249, 73, 208, 83]]
[[134, 120, 165, 97], [173, 43, 207, 210], [6, 40, 170, 229], [188, 19, 78, 60]]
[[80, 26, 239, 146], [169, 83, 63, 193], [47, 43, 154, 160], [130, 0, 85, 114]]
[[132, 40, 255, 151], [56, 59, 177, 171], [242, 210, 141, 149], [91, 129, 178, 84]]
[[116, 170, 40, 244], [246, 170, 125, 134], [114, 130, 130, 17], [74, 185, 51, 186]]
[[[172, 70, 76, 65], [71, 123, 84, 72], [49, 36, 95, 49], [36, 95, 66, 49]],
 [[84, 95, 84, 52], [78, 71, 48, 125], [13, 66, 179, 110], [74, 57, 231, 38]],
 [[123, 29, 184, 23], [95, 66, 250, 38], [11, 29, 174, 18], [69, 90, 158, 111]]
```

We can see our first block is our keys. So the expansion works as our expected. Now we want to know what is expanded keys on the challs.

On the JS files there are codes like this

```js
    e_sk = ((gsk_k) => {
        gsk_N = ((n_k) => [4, 6, 8][n_k.length * 2 / 16 - 2])(gsk_k);
        console.log(gsk_N)
        gsk_K = ((sk_k) => {
            sk_bl = [];
            for (sk_i = 0; sk_i < sk_k.length / 4; sk_i++) {
                sk_bl.push(sk_k.slice(sk_i * 4, (sk_i + 1) * 4))
            };
            return sk_bl
        })(gsk_k);
        gsk_W = [];
        console.log(gsk_K)
        for (gsk_i = 0; gsk_i < (((r_k) => [10, 12, 14][r_k.length * 2 / 16 - 2])(gsk_k) + 1) * 4; gsk_i++) {
            gsk_W.push([]);
            (gsk_i < gsk_N) ? gsk_W[gsk_W.length - 1] = gsk_K[gsk_i].slice(): ((gsk_i >= gsk_N && gsk_i % gsk_N == 0) ? gsk_W[gsk_W.length - 1] = ((...xr_v) => {
                xr_n = xr_v[0].slice();
                for (xr_i = 1; xr_i < xr_v.length; xr_i++) {
                    console.log('awal xor');
                    console.log(xr_v[xr_i])
                    console.log(xr_n)
                    console.log('------------')
                    
                    for (xr_j = 0; xr_j < xr_v[xr_i].length; xr_j++) {
                        xr_n[xr_j] ^= xr_v[xr_i][xr_j];
                    }

                    console.log(xr_n)
                    console.log('akhir xor');

                };
                return xr_n
            })(gsk_W[gsk_i - gsk_N], get__s(((sk_n, sk_l) => (sk_l ? [sk_n[1], sk_n[2], sk_n[3], sk_n[0]] : [sk_n[3], sk_n[0], sk_n[1], sk_n[2]]))(gsk_W[gsk_i - 1].slice(), true)), ((rcon_i) => [
                [0x8d, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1B, 0x36][rcon_i], 0x00, 0x00, 0x00
            ])((gsk_i / gsk_N) | 0)).slice() : ((gsk_i >= gsk_N && gsk_i % 4 == 0) ? gsk_W[gsk_W.length - 1] = ((...xr_v) => {
                xr_n = xr_v[0].slice();
                for (xr_i = 1; xr_i < xr_v.length; xr_i++) {
                    console.log('awal xor');
                    console.log(xr_v[xr_i])
                    console.log(xr_n)
                    console.log('------------')

                    for (xr_j = 0; xr_j < xr_v[xr_i].length; xr_j++) {
                        xr_n[xr_j] ^= xr_v[xr_i][xr_j];
                    }
                    console.log(xr_n)
                    console.log('akhir xor');
                };
                return xr_n
            })(gsk_W[gsk_i - gsk_N], get__s(gsk_W[gsk_i - 1])).slice() : gsk_W[gsk_W.length - 1] = ((...xr_v) => {
                xr_n = xr_v[0].slice();
                for (xr_i = 1; xr_i < xr_v.length; xr_i++) {
                    console.log('awal xor');
                    console.log(xr_v[xr_i])
                    console.log(xr_n)
                    console.log('------------')
                    for (xr_j = 0; xr_j < xr_v[xr_i].length; xr_j++) {
                        xr_n[xr_j] ^= xr_v[xr_i][xr_j];
                    }
                    console.log(xr_n)
                    console.log('akhir xor');
                };
                return xr_n
            })(gsk_W[gsk_i - gsk_N], gsk_W[gsk_i - 1]).slice()));
        };
        gsk_n = [];
        for (gsk_j = 0; gsk_j < gsk_W.length; gsk_j++) {
            if (gsk_j % 4 == 0)
                gsk_n.push([]);
            gsk_n[gsk_n.length - 1].push(...gsk_W[gsk_j].slice());
        };
        return gsk_n
    })(e_k);
```
This codes get our keys as parameter, processing and return variable. Debug this variable. We got result like this
![](Pasted%20image%2020211011204826.png)

This is expanded keys that would use by AES later. But notice the different on the real AES implementation?

```bash
[[172, 70, 76, 65], [71, 123, 84, 72], [49, 36, 95, 49], [36, 95, 66, 49]]
[[84, 95, 84, 52], [78, 71, 48, 125], [13, 66, 179, 110], [74, 57, 231, 38]]
[[123, 29, 184, 23], [95, 66, 250, 38], [11, 29, 174, 18], [69, 90, 158, 111]]
[[177, 73, 27, 0], [251, 112, 252, 38], [128, 109, 68, 49], [223, 47, 190, 23]]
[[212, 50, 16, 5], [145, 104, 142, 106], [240, 80, 25, 129], [11, 32, 229, 167]]
[[139, 77, 161, 150], [84, 98, 31, 129], [128, 80, 15, 132], [17, 56, 129, 238]]
[[255, 92, 49, 3], [244, 124, 212, 164], [127, 49, 117, 50], [43, 83, 106, 179]]
[[171, 3, 101, 55], [186, 59, 228, 217], [13, 53, 4, 247], [249, 73, 208, 83]]
[[134, 120, 165, 97], [173, 43, 207, 210], [6, 40, 170, 229], [188, 19, 78, 60]]
[[80, 26, 239, 146], [169, 83, 63, 193], [47, 43, 154, 160], [130, 0, 85, 114]]
[[132, 40, 255, 151], [56, 59, 177, 171], [242, 210, 141, 149], [91, 129, 178, 84]]
[[116, 170, 40, 244], [246, 170, 125, 134], [114, 130, 130, 17], [74, 185, 51, 186]]
[[[172, 70, 76, 65], [71, 123, 84, 72], [49, 36, 95, 49], [36, 95, 66, 49]],
 [[84, 95, 84, 52], [78, 71, 48, 125], [13, 66, 179, 110], [74, 57, 231, 38]],
 [[123, 29, 184, 23], [95, 66, 250, 38], [11, 29, 174, 18], [69, 90, 158, 111]]
```

js implementation expand
```bash
0: (16) [172, 70, 76, 65, 71, 123, 84, 72, 49, 36, 95, 49, 36, 95, 66, 49]
1: (16) [84, 95, 84, 52, 78, 71, 48, 125, 13, 66, 179, 110, 74, 57, 231, 38]
2: (16) [231, 54, 203, 198, 195, 105, 137, 247, 151, 54, 221, 195, 217, 113, 237, 190]
3: (16) [172, 23, 29, 91, 230, 46, 250, 125, 1, 24, 49, 187, 194, 113, 184, 76]
4: (16) [178, 149, 177, 234, 107, 228, 92, 84, 193, 93, 61, 36, 39, 115, 199, 89]
5: (16) [205, 151, 247, 112, 15, 230, 79, 60, 189, 115, 254, 214, 214, 151, 162, 130]
6: (16) [65, 103, 46, 210, 102, 20, 233, 139, 171, 131, 30, 251, 164, 101, 81, 199]
7: (16) [244, 62, 47, 16, 34, 169, 141, 146, 130, 58, 97, 65, 228, 46, 136, 202]
8: (16) [194, 178, 218, 143, 102, 215, 139, 72, 146, 233, 164, 88, 176, 64, 41, 202]
9: (16) [171, 159, 21, 166, 79, 177, 157, 108, 141, 3, 71, 227, 235, 212, 204, 171]
10: (16) [123, 161, 239, 58, 203, 225, 198, 240, 19, 43, 153, 185, 92, 154, 4, 213]
11: (16) [199, 187, 181, 224, 44, 111, 121, 75, 87, 206, 150, 113, 156, 47, 80, 129]
12: (16) [134, 120, 149, 103, 218, 226, 145, 178, 29, 89, 36, 82, 49, 54, 93, 25]
```

On the first and second line output is same. However output differ on third line forward. After notice this we know default AES decryption not gonna work. After trying a few things, i got alternative answer, how if we just replaced the default expanded keys generated with js expanded keys and try to decrypt the flag.

check how expanded keys assigned on the aes.py script
```python
    def __init__(self, master_key):
        """
        Initializes the object with a given key.
        """
        assert len(master_key) in AES.rounds_by_key_size
        self.n_rounds = AES.rounds_by_key_size[len(master_key)]
        self._key_matrices = self._expand_key(master_key)
        print(self._key_matrices)

```

Run the script we got output like this

![](Pasted%20image%2020211011205917.png)

Try writing parser to put generated js expanded keys with aes.py keys
```python
x = [[172, 70, 76, 65, 71, 123, 84, 72, 49, 36, 95, 49, 36, 95, 66, 49]
,[84, 95, 84, 52, 78, 71, 48, 125, 13, 66, 179, 110, 74, 57, 231, 38]
,[231, 54, 203, 198, 195, 105, 137, 247, 151, 54, 221, 195, 217, 113, 237, 190]
,[172, 23, 29, 91, 230, 46, 250, 125, 1, 24, 49, 187, 194, 113, 184, 76]
,[178, 149, 177, 234, 107, 228, 92, 84, 193, 93, 61, 36, 39, 115, 199, 89]
,[205, 151, 247, 112, 15, 230, 79, 60, 189, 115, 254, 214, 214, 151, 162, 130]
,[65, 103, 46, 210, 102, 20, 233, 139, 171, 131, 30, 251, 164, 101, 81, 199]
,[244, 62, 47, 16, 34, 169, 141, 146, 130, 58, 97, 65, 228, 46, 136, 202]
,[194, 178, 218, 143, 102, 215, 139, 72, 146, 233, 164, 88, 176, 64, 41, 202]
,[171, 159, 21, 166, 79, 177, 157, 108, 141, 3, 71, 227, 235, 212, 204, 171]
,[123, 161, 239, 58, 203, 225, 198, 240, 19, 43, 153, 185, 92, 154, 4, 213]
,[199, 187, 181, 224, 44, 111, 121, 75, 87, 206, 150, 113, 156, 47, 80, 129]
,[134, 120, 149, 103, 218, 226, 145, 178, 29, 89, 36, 82, 49, 54, 93, 25]]

a = 0 
b = 0
kotak = []
z = 1
for i in x:
	box = []
	for j in range(0, len(i), 4):
		if(z < 6):
			box.append(i[j:j+4])
		else:
			box.append(bytes(i[j:j+4]))
		z += 1
	kotak.append(box)
print (kotak)
```

![](Pasted%20image%2020211011210126.png)

Replaced the keys with our generated keys
```python
    def __init__(self, master_key):
        """
        Initializes the object with a given key.
        """
        assert len(master_key) in AES.rounds_by_key_size
        self.n_rounds = AES.rounds_by_key_size[len(master_key)]
        self._key_matrices = self._expand_key(master_key)
        # replaced with self generated expanded keys
        self._key_matrices =         [[[172, 70, 76, 65], [71, 123, 84, 72], [49, 36, 95, 49], [36, 95, 66, 49]], [[84, 95, 84, 52], b'NG0}', b'\rB\xb3n', b'J9\xe7&'], [b'\xe76\xcb\xc6', b'\xc3i\x89\xf7', b'\x976\xdd\xc3', b'\xd9q\xed\xbe'], [b'\xac\x17\x1d[', b'\xe6.\xfa}', b'\x01\x181\xbb', b'\xc2q\xb8L'], [b'\xb2\x95\xb1\xea', b'k\xe4\\T', b'\xc1]=$', b"'s\xc7Y"], [b'\xcd\x97\xf7p', b'\x0f\xe6O<', b'\xbds\xfe\xd6', b'\xd6\x97\xa2\x82'], [b'Ag.\xd2', b'f\x14\xe9\x8b', b'\xab\x83\x1e\xfb', b'\xa4eQ\xc7'], [b'\xf4>/\x10', b'"\xa9\x8d\x92', b'\x82:aA', b'\xe4.\x88\xca'], [b'\xc2\xb2\xda\x8f', b'f\xd7\x8bH', b'\x92\xe9\xa4X', b'\xb0@)\xca'], [b'\xab\x9f\x15\xa6', b'O\xb1\x9dl', b'\x8d\x03G\xe3', b'\xeb\xd4\xcc\xab'], [b'{\xa1\xef:', b'\xcb\xe1\xc6\xf0', b'\x13+\x99\xb9', b'\\\x9a\x04\xd5'], [b'\xc7\xbb\xb5\xe0', b',oyK', b'W\xce\x96q', b'\x9c/P\x81'], [b'\x86x\x95g', b'\xda\xe2\x91\xb2', b'\x1dY$R', b'16]\x19']]

        # print(self._key_matrices)
```

Use the script to decrypt the ciphertext

```python
ciphertext = [0xf4, 0x39, 0xd1, 0xc0, 0x55, 0x84, 0x36, 0x28, 0xd7, 0x2a, 0xb9, 0x93, 0x2a, 0x18, 0xb1, 0x72, 0x6c, 0xcd, 0xcf, 0x4b, 0xd4, 0x4c, 0x7d, 0xe4, 0xab, 0xf0, 0x23, 0x53, 0x24, 0x5c, 0x2a, 0x42, 0xf8, 0x0e, 0x26, 0xfc, 0xd4, 0x5c, 0xc1, 0x71, 0xef, 0xa9, 0x82, 0x3d, 0x7b, 0x49, 0xa2, 0xdc]

key = b'\xacFLAG{TH1$_1$_B1T_T4NG0}'
aes = AES(key)
for i in range(0, len(ciphertext), 16):
    ciphertext_block = bytes(ciphertext[i:i+16])
    print (aes.decrypt_block(ciphertext_block))
```
![](Pasted%20image%2020211011210414.png)
And flag acquired

## Solution
```python
#!/usr/bin/env python3
"""
This is an exercise in secure symmetric-key encryption, implemented in pure
Python (no external libraries needed).

Original AES-128 implementation by Bo Zhu (http://about.bozhu.me) at 
https://github.com/bozhu/AES-Python . PKCS#7 padding, CBC mode, PKBDF2, HMAC,
byte array and string support added by me at https://github.com/boppreh/aes. 
Other block modes contributed by @righthandabacus.


Although this is an exercise, the `encrypt` and `decrypt` functions should
provide reasonable security to encrypted messages.
"""


s_box = (
    0x63, 0x7C, 0x77, 0x7B, 0xF2, 0x6B, 0x6F, 0xC5, 0x30, 0x01, 0x67, 0x2B, 0xFE, 0xD7, 0xAB, 0x76,
    0xCA, 0x82, 0xC9, 0x7D, 0xFA, 0x59, 0x47, 0xF0, 0xAD, 0xD4, 0xA2, 0xAF, 0x9C, 0xA4, 0x72, 0xC0,
    0xB7, 0xFD, 0x93, 0x26, 0x36, 0x3F, 0xF7, 0xCC, 0x34, 0xA5, 0xE5, 0xF1, 0x71, 0xD8, 0x31, 0x15,
    0x04, 0xC7, 0x23, 0xC3, 0x18, 0x96, 0x05, 0x9A, 0x07, 0x12, 0x80, 0xE2, 0xEB, 0x27, 0xB2, 0x75,
    0x09, 0x83, 0x2C, 0x1A, 0x1B, 0x6E, 0x5A, 0xA0, 0x52, 0x3B, 0xD6, 0xB3, 0x29, 0xE3, 0x2F, 0x84,
    0x53, 0xD1, 0x00, 0xED, 0x20, 0xFC, 0xB1, 0x5B, 0x6A, 0xCB, 0xBE, 0x39, 0x4A, 0x4C, 0x58, 0xCF,
    0xD0, 0xEF, 0xAA, 0xFB, 0x43, 0x4D, 0x33, 0x85, 0x45, 0xF9, 0x02, 0x7F, 0x50, 0x3C, 0x9F, 0xA8,
    0x51, 0xA3, 0x40, 0x8F, 0x92, 0x9D, 0x38, 0xF5, 0xBC, 0xB6, 0xDA, 0x21, 0x10, 0xFF, 0xF3, 0xD2,
    0xCD, 0x0C, 0x13, 0xEC, 0x5F, 0x97, 0x44, 0x17, 0xC4, 0xA7, 0x7E, 0x3D, 0x64, 0x5D, 0x19, 0x73,
    0x60, 0x81, 0x4F, 0xDC, 0x22, 0x2A, 0x90, 0x88, 0x46, 0xEE, 0xB8, 0x14, 0xDE, 0x5E, 0x0B, 0xDB,
    0xE0, 0x32, 0x3A, 0x0A, 0x49, 0x06, 0x24, 0x5C, 0xC2, 0xD3, 0xAC, 0x62, 0x91, 0x95, 0xE4, 0x79,
    0xE7, 0xC8, 0x37, 0x6D, 0x8D, 0xD5, 0x4E, 0xA9, 0x6C, 0x56, 0xF4, 0xEA, 0x65, 0x7A, 0xAE, 0x08,
    0xBA, 0x78, 0x25, 0x2E, 0x1C, 0xA6, 0xB4, 0xC6, 0xE8, 0xDD, 0x74, 0x1F, 0x4B, 0xBD, 0x8B, 0x8A,
    0x70, 0x3E, 0xB5, 0x66, 0x48, 0x03, 0xF6, 0x0E, 0x61, 0x35, 0x57, 0xB9, 0x86, 0xC1, 0x1D, 0x9E,
    0xE1, 0xF8, 0x98, 0x11, 0x69, 0xD9, 0x8E, 0x94, 0x9B, 0x1E, 0x87, 0xE9, 0xCE, 0x55, 0x28, 0xDF,
    0x8C, 0xA1, 0x89, 0x0D, 0xBF, 0xE6, 0x42, 0x68, 0x41, 0x99, 0x2D, 0x0F, 0xB0, 0x54, 0xBB, 0x16,
)

inv_s_box = (
    0x52, 0x09, 0x6A, 0xD5, 0x30, 0x36, 0xA5, 0x38, 0xBF, 0x40, 0xA3, 0x9E, 0x81, 0xF3, 0xD7, 0xFB,
    0x7C, 0xE3, 0x39, 0x82, 0x9B, 0x2F, 0xFF, 0x87, 0x34, 0x8E, 0x43, 0x44, 0xC4, 0xDE, 0xE9, 0xCB,
    0x54, 0x7B, 0x94, 0x32, 0xA6, 0xC2, 0x23, 0x3D, 0xEE, 0x4C, 0x95, 0x0B, 0x42, 0xFA, 0xC3, 0x4E,
    0x08, 0x2E, 0xA1, 0x66, 0x28, 0xD9, 0x24, 0xB2, 0x76, 0x5B, 0xA2, 0x49, 0x6D, 0x8B, 0xD1, 0x25,
    0x72, 0xF8, 0xF6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xD4, 0xA4, 0x5C, 0xCC, 0x5D, 0x65, 0xB6, 0x92,
    0x6C, 0x70, 0x48, 0x50, 0xFD, 0xED, 0xB9, 0xDA, 0x5E, 0x15, 0x46, 0x57, 0xA7, 0x8D, 0x9D, 0x84,
    0x90, 0xD8, 0xAB, 0x00, 0x8C, 0xBC, 0xD3, 0x0A, 0xF7, 0xE4, 0x58, 0x05, 0xB8, 0xB3, 0x45, 0x06,
    0xD0, 0x2C, 0x1E, 0x8F, 0xCA, 0x3F, 0x0F, 0x02, 0xC1, 0xAF, 0xBD, 0x03, 0x01, 0x13, 0x8A, 0x6B,
    0x3A, 0x91, 0x11, 0x41, 0x4F, 0x67, 0xDC, 0xEA, 0x97, 0xF2, 0xCF, 0xCE, 0xF0, 0xB4, 0xE6, 0x73,
    0x96, 0xAC, 0x74, 0x22, 0xE7, 0xAD, 0x35, 0x85, 0xE2, 0xF9, 0x37, 0xE8, 0x1C, 0x75, 0xDF, 0x6E,
    0x47, 0xF1, 0x1A, 0x71, 0x1D, 0x29, 0xC5, 0x89, 0x6F, 0xB7, 0x62, 0x0E, 0xAA, 0x18, 0xBE, 0x1B,
    0xFC, 0x56, 0x3E, 0x4B, 0xC6, 0xD2, 0x79, 0x20, 0x9A, 0xDB, 0xC0, 0xFE, 0x78, 0xCD, 0x5A, 0xF4,
    0x1F, 0xDD, 0xA8, 0x33, 0x88, 0x07, 0xC7, 0x31, 0xB1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xEC, 0x5F,
    0x60, 0x51, 0x7F, 0xA9, 0x19, 0xB5, 0x4A, 0x0D, 0x2D, 0xE5, 0x7A, 0x9F, 0x93, 0xC9, 0x9C, 0xEF,
    0xA0, 0xE0, 0x3B, 0x4D, 0xAE, 0x2A, 0xF5, 0xB0, 0xC8, 0xEB, 0xBB, 0x3C, 0x83, 0x53, 0x99, 0x61,
    0x17, 0x2B, 0x04, 0x7E, 0xBA, 0x77, 0xD6, 0x26, 0xE1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0C, 0x7D,
)


def sub_bytes(s):
    for i in range(4):
        for j in range(4):
            s[i][j] = s_box[s[i][j]]


def inv_sub_bytes(s):
    for i in range(4):
        for j in range(4):
            s[i][j] = inv_s_box[s[i][j]]


def shift_rows(s):
    s[0][1], s[1][1], s[2][1], s[3][1] = s[1][1], s[2][1], s[3][1], s[0][1]
    s[0][2], s[1][2], s[2][2], s[3][2] = s[2][2], s[3][2], s[0][2], s[1][2]
    s[0][3], s[1][3], s[2][3], s[3][3] = s[3][3], s[0][3], s[1][3], s[2][3]


def inv_shift_rows(s):
    s[0][1], s[1][1], s[2][1], s[3][1] = s[3][1], s[0][1], s[1][1], s[2][1]
    s[0][2], s[1][2], s[2][2], s[3][2] = s[2][2], s[3][2], s[0][2], s[1][2]
    s[0][3], s[1][3], s[2][3], s[3][3] = s[1][3], s[2][3], s[3][3], s[0][3]

def add_round_key(s, k):
    for i in range(4):
        for j in range(4):
            s[i][j] ^= k[i][j]


# learned from http://cs.ucsb.edu/~koc/cs178/projects/JT/aes.c
xtime = lambda a: (((a << 1) ^ 0x1B) & 0xFF) if (a & 0x80) else (a << 1)


def mix_single_column(a):
    # see Sec 4.1.2 in The Design of Rijndael
    t = a[0] ^ a[1] ^ a[2] ^ a[3]
    u = a[0]
    a[0] ^= t ^ xtime(a[0] ^ a[1])
    a[1] ^= t ^ xtime(a[1] ^ a[2])
    a[2] ^= t ^ xtime(a[2] ^ a[3])
    a[3] ^= t ^ xtime(a[3] ^ u)


def mix_columns(s):
    for i in range(4):
        mix_single_column(s[i])


def inv_mix_columns(s):
    # see Sec 4.1.3 in The Design of Rijndael
    for i in range(4):
        u = xtime(xtime(s[i][0] ^ s[i][2]))
        v = xtime(xtime(s[i][1] ^ s[i][3]))
        s[i][0] ^= u
        s[i][1] ^= v
        s[i][2] ^= u
        s[i][3] ^= v

    mix_columns(s)


r_con = (
    0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40,
    0x80, 0x1B, 0x36, 0x6C, 0xD8, 0xAB, 0x4D, 0x9A,
    0x2F, 0x5E, 0xBC, 0x63, 0xC6, 0x97, 0x35, 0x6A,
    0xD4, 0xB3, 0x7D, 0xFA, 0xEF, 0xC5, 0x91, 0x39,
)


def bytes2matrix(text):
    """ Converts a 16-byte array into a 4x4 matrix.  """
    return [list(text[i:i+4]) for i in range(0, len(text), 4)]

def matrix2bytes(matrix):
    """ Converts a 4x4 matrix into a 16-byte array.  """
    return bytes(sum(matrix, []))

def xor_bytes(a, b):
    """ Returns a new byte array with the elements xor'ed. """
    return bytes(i^j for i, j in zip(a, b))

def inc_bytes(a):
    """ Returns a new byte array with the value increment by 1 """
    out = list(a)
    for i in reversed(range(len(out))):
        if out[i] == 0xFF:
            out[i] = 0
        else:
            out[i] += 1
            break
    return bytes(out)

def pad(plaintext):
    """
    Pads the given plaintext with PKCS#7 padding to a multiple of 16 bytes.
    Note that if the plaintext size is a multiple of 16,
    a whole block will be added.
    """
    padding_len = 16 - (len(plaintext) % 16)
    padding = bytes([padding_len] * padding_len)
    return plaintext + padding

def unpad(plaintext):
    """
    Removes a PKCS#7 padding, returning the unpadded text and ensuring the
    padding was correct.
    """
    padding_len = plaintext[-1]
    assert padding_len > 0
    message, padding = plaintext[:-padding_len], plaintext[-padding_len:]
    assert all(p == padding_len for p in padding)
    return message

def split_blocks(message, block_size=16, require_padding=True):
        assert len(message) % block_size == 0 or not require_padding
        return [message[i:i+16] for i in range(0, len(message), block_size)]


class AES:
    """
    Class for AES-128 encryption with CBC mode and PKCS#7.

    This is a raw implementation of AES, without key stretching or IV
    management. Unless you need that, please use `encrypt` and `decrypt`.
    """
    rounds_by_key_size = {16: 10, 24: 12, 32: 14}
    def __init__(self, master_key):
        """
        Initializes the object with a given key.
        """
        assert len(master_key) in AES.rounds_by_key_size
        self.n_rounds = AES.rounds_by_key_size[len(master_key)]
        self._key_matrices = self._expand_key(master_key)
        # replaced with self generated expanded keys
        self._key_matrices =         [[[172, 70, 76, 65], [71, 123, 84, 72], [49, 36, 95, 49], [36, 95, 66, 49]], [[84, 95, 84, 52], b'NG0}', b'\rB\xb3n', b'J9\xe7&'], [b'\xe76\xcb\xc6', b'\xc3i\x89\xf7', b'\x976\xdd\xc3', b'\xd9q\xed\xbe'], [b'\xac\x17\x1d[', b'\xe6.\xfa}', b'\x01\x181\xbb', b'\xc2q\xb8L'], [b'\xb2\x95\xb1\xea', b'k\xe4\\T', b'\xc1]=$', b"'s\xc7Y"], [b'\xcd\x97\xf7p', b'\x0f\xe6O<', b'\xbds\xfe\xd6', b'\xd6\x97\xa2\x82'], [b'Ag.\xd2', b'f\x14\xe9\x8b', b'\xab\x83\x1e\xfb', b'\xa4eQ\xc7'], [b'\xf4>/\x10', b'"\xa9\x8d\x92', b'\x82:aA', b'\xe4.\x88\xca'], [b'\xc2\xb2\xda\x8f', b'f\xd7\x8bH', b'\x92\xe9\xa4X', b'\xb0@)\xca'], [b'\xab\x9f\x15\xa6', b'O\xb1\x9dl', b'\x8d\x03G\xe3', b'\xeb\xd4\xcc\xab'], [b'{\xa1\xef:', b'\xcb\xe1\xc6\xf0', b'\x13+\x99\xb9', b'\\\x9a\x04\xd5'], [b'\xc7\xbb\xb5\xe0', b',oyK', b'W\xce\x96q', b'\x9c/P\x81'], [b'\x86x\x95g', b'\xda\xe2\x91\xb2', b'\x1dY$R', b'16]\x19']]

        # print(self._key_matrices)

    def _expand_key(self, master_key):
        """
        Expands and returns a list of key matrices for the given master_key.
        """
        # Initialize round keys with raw key material.
        key_columns = bytes2matrix(master_key)
        iteration_size = len(master_key) // 4

        # Each iteration has exactly as many columns as the key material.
        columns_per_iteration = len(key_columns)
        i = 1
        while len(key_columns) < (self.n_rounds + 1) * 4:
            # Copy previous word.
            word = list(key_columns[-1])

            # Perform schedule_core once every "row".
            if len(key_columns) % iteration_size == 0:
                # Circular shift.
                word.append(word.pop(0))
                # Map to S-BOX.
                word = [s_box[b] for b in word]
                # XOR with first byte of R-CON, since the others bytes of R-CON are 0.
                word[0] ^= r_con[i]
                i += 1
            elif len(master_key) == 32 and len(key_columns) % iteration_size == 4:
                # Run word through S-box in the fourth iteration when using a
                # 256-bit key.
                word = [s_box[b] for b in word]

            # XOR with equivalent word from previous iteration.
            word = xor_bytes(word, key_columns[-iteration_size])
            key_columns.append(word)

        # Group key words in 4x4 byte matrices.
        return [key_columns[4*i : 4*(i+1)] for i in range(len(key_columns) // 4)]

    def encrypt_block(self, plaintext):
        """
        Encrypts a single block of 16 byte long plaintext.
        """
        assert len(plaintext) == 16

        plain_state = bytes2matrix(plaintext)

        add_round_key(plain_state, self._key_matrices[0])

        for i in range(1, self.n_rounds):
            sub_bytes(plain_state)
            shift_rows(plain_state)
            mix_columns(plain_state)
            add_round_key(plain_state, self._key_matrices[i])

        sub_bytes(plain_state)
        shift_rows(plain_state)
        add_round_key(plain_state, self._key_matrices[-1])

        return matrix2bytes(plain_state)

    def decrypt_block(self, ciphertext):
        """
        Decrypts a single block of 16 byte long ciphertext.
        """
        assert len(ciphertext) == 16

        cipher_state = bytes2matrix(ciphertext)

        add_round_key(cipher_state, self._key_matrices[-1])
        inv_shift_rows(cipher_state)
        inv_sub_bytes(cipher_state)

        for i in range(self.n_rounds - 1, 0, -1):
            add_round_key(cipher_state, self._key_matrices[i])
            inv_mix_columns(cipher_state)
            inv_shift_rows(cipher_state)
            inv_sub_bytes(cipher_state)

        add_round_key(cipher_state, self._key_matrices[0])

        return matrix2bytes(cipher_state)

    def encrypt_cbc(self, plaintext, iv):
        """
        Encrypts `plaintext` using CBC mode and PKCS#7 padding, with the given
        initialization vector (iv).
        """
        assert len(iv) == 16

        plaintext = pad(plaintext)

        blocks = []
        previous = iv
        for plaintext_block in split_blocks(plaintext):
            # CBC mode encrypt: encrypt(plaintext_block XOR previous)
            block = self.encrypt_block(xor_bytes(plaintext_block, previous))
            blocks.append(block)
            previous = block

        return b''.join(blocks)

    def decrypt_cbc(self, ciphertext, iv):
        """
        Decrypts `ciphertext` using CBC mode and PKCS#7 padding, with the given
        initialization vector (iv).
        """
        assert len(iv) == 16

        blocks = []
        previous = iv
        for ciphertext_block in split_blocks(ciphertext):
            # CBC mode decrypt: previous XOR decrypt(ciphertext)
            blocks.append(xor_bytes(previous, self.decrypt_block(ciphertext_block)))
            previous = ciphertext_block

        return unpad(b''.join(blocks))

    def encrypt_pcbc(self, plaintext, iv):
        """
        Encrypts `plaintext` using PCBC mode and PKCS#7 padding, with the given
        initialization vector (iv).
        """
        assert len(iv) == 16

        plaintext = pad(plaintext)

        blocks = []
        prev_ciphertext = iv
        prev_plaintext = bytes(16)
        for plaintext_block in split_blocks(plaintext):
            # PCBC mode encrypt: encrypt(plaintext_block XOR (prev_ciphertext XOR prev_plaintext))
            ciphertext_block = self.encrypt_block(xor_bytes(plaintext_block, xor_bytes(prev_ciphertext, prev_plaintext)))
            blocks.append(ciphertext_block)
            prev_ciphertext = ciphertext_block
            prev_plaintext = plaintext_block

        return b''.join(blocks)

    def decrypt_pcbc(self, ciphertext, iv):
        """
        Decrypts `ciphertext` using PCBC mode and PKCS#7 padding, with the given
        initialization vector (iv).
        """
        assert len(iv) == 16

        blocks = []
        prev_ciphertext = iv
        prev_plaintext = bytes(16)
        for ciphertext_block in split_blocks(ciphertext):
            # PCBC mode decrypt: (prev_plaintext XOR prev_ciphertext) XOR decrypt(ciphertext_block)
            plaintext_block = xor_bytes(xor_bytes(prev_ciphertext, prev_plaintext), self.decrypt_block(ciphertext_block))
            blocks.append(plaintext_block)
            prev_ciphertext = ciphertext_block
            prev_plaintext = plaintext_block

        return unpad(b''.join(blocks))

    def encrypt_cfb(self, plaintext, iv):
        """
        Encrypts `plaintext` with the given initialization vector (iv).
        """
        assert len(iv) == 16

        blocks = []
        prev_ciphertext = iv
        for plaintext_block in split_blocks(plaintext, require_padding=False):
            # CFB mode encrypt: plaintext_block XOR encrypt(prev_ciphertext)
            ciphertext_block = xor_bytes(plaintext_block, self.encrypt_block(prev_ciphertext))
            blocks.append(ciphertext_block)
            prev_ciphertext = ciphertext_block

        return b''.join(blocks)

    def decrypt_cfb(self, ciphertext, iv):
        """
        Decrypts `ciphertext` with the given initialization vector (iv).
        """
        assert len(iv) == 16

        blocks = []
        prev_ciphertext = iv
        for ciphertext_block in split_blocks(ciphertext, require_padding=False):
            # CFB mode decrypt: ciphertext XOR decrypt(prev_ciphertext)
            plaintext_block = xor_bytes(ciphertext_block, self.encrypt_block(prev_ciphertext))
            blocks.append(plaintext_block)
            prev_ciphertext = ciphertext_block

        return b''.join(blocks)

    def encrypt_ofb(self, plaintext, iv):
        """
        Encrypts `plaintext` using OFB mode initialization vector (iv).
        """
        assert len(iv) == 16

        blocks = []
        previous = iv
        for plaintext_block in split_blocks(plaintext, require_padding=False):
            # OFB mode encrypt: plaintext_block XOR encrypt(previous)
            block = self.encrypt_block(previous)
            ciphertext_block = xor_bytes(plaintext_block, block)
            blocks.append(ciphertext_block)
            previous = block

        return b''.join(blocks)

    def decrypt_ofb(self, ciphertext, iv):
        """
        Decrypts `ciphertext` using OFB mode initialization vector (iv).
        """
        assert len(iv) == 16

        blocks = []
        previous = iv
        for ciphertext_block in split_blocks(ciphertext, require_padding=False):
            # OFB mode decrypt: ciphertext XOR encrypt(previous)
            block = self.encrypt_block(previous)
            plaintext_block = xor_bytes(ciphertext_block, block)
            blocks.append(plaintext_block)
            previous = block

        return b''.join(blocks)

    def encrypt_ctr(self, plaintext, iv):
        """
        Encrypts `plaintext` using CTR mode with the given nounce/IV.
        """
        assert len(iv) == 16

        blocks = []
        nonce = iv
        for plaintext_block in split_blocks(plaintext, require_padding=False):
            # CTR mode encrypt: plaintext_block XOR encrypt(nonce)
            block = xor_bytes(plaintext_block, self.encrypt_block(nonce))
            blocks.append(block)
            nonce = inc_bytes(nonce)

        return b''.join(blocks)

    def decrypt_ctr(self, ciphertext, iv):
        """
        Decrypts `ciphertext` using CTR mode with the given nounce/IV.
        """
        assert len(iv) == 16

        blocks = []
        nonce = iv
        for ciphertext_block in split_blocks(ciphertext, require_padding=False):
            # CTR mode decrypt: ciphertext XOR encrypt(nonce)
            block = xor_bytes(ciphertext_block, self.encrypt_block(nonce))
            blocks.append(block)
            nonce = inc_bytes(nonce)

        return b''.join(blocks)


import os
from hashlib import pbkdf2_hmac
from hmac import new as new_hmac, compare_digest


ciphertext = [0xf4, 0x39, 0xd1, 0xc0, 0x55, 0x84, 0x36, 0x28, 0xd7, 0x2a, 0xb9, 0x93, 0x2a, 0x18, 0xb1, 0x72, 0x6c, 0xcd, 0xcf, 0x4b, 0xd4, 0x4c, 0x7d, 0xe4, 0xab, 0xf0, 0x23, 0x53, 0x24, 0x5c, 0x2a, 0x42, 0xf8, 0x0e, 0x26, 0xfc, 0xd4, 0x5c, 0xc1, 0x71, 0xef, 0xa9, 0x82, 0x3d, 0x7b, 0x49, 0xa2, 0xdc]

key = b'\xacFLAG{TH1$_1$_B1T_T4NG0}'
aes = AES(key)
for i in range(0, len(ciphertext), 16):
    ciphertext_block = bytes(ciphertext[i:i+16])
    print (aes.decrypt_block(ciphertext_block))

'''
DO{Y0UVE_JU$T_D34LT_W1TH_AES-ECB}
'''
```


![](Pasted%20image%2020211011130141.png)