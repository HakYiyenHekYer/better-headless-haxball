/*
 HaxBall @ 2023 - Mario Carbajal - All rights reserved.
 8846047b
*/
PlayerList = new Array();
PlayerList[0] = {
    name:"",
    id:0,
    auth: "",
    conn: "",
    ip: "",
    input: {
        x: 0,
        y: 0,
        kicking: false
    }
}
window.parent.console.log("Better Headless installed!")
'use strict';
(function(ua) {
    function mb() {
        return q.Yb(this, "")
    }
    function gb(a, b) {
        if (null == b)
            return null;
        null == b.qd && (b.qd = ua.re++);
        var c;
        null == a.fe ? a.fe = {} : c = a.fe[b.qd];
        null == c && (c = b.bind(a),
        a.fe[b.qd] = c);
        return c
    }
    class va {
        constructor() {
            this.kf = 0;
            this.c = this.m = 63;
            this.S = 16777215;
            this.ga = .99;
            this.L = 1;
            this.i = .5;
            this.M = 10;
            this.la = new I(0,0);
            this.u = new I(0,0);
            this.a = new I(0,0)
        }
        G(a) {
            var b = this.a;
            a.g(b.x);
            a.g(b.y);
            b = this.u;
            a.g(b.x);
            a.g(b.y);
            b = this.la;
            a.g(b.x);
            a.g(b.y);
            a.g(this.M);
            a.g(this.i);
            a.g(this.L);
            a.g(this.ga);
            a.xa(this.S);
            a.w(this.c);
            a.w(this.m)
        }
        ug(a) {
            var b = this.a
              , c = a.a
              , d = b.x - c.x;
            b = b.y - c.y;
            var e = a.M + this.M
              , f = d * d + b * b;
            if (0 < f && f <= e * e) {
                f = Math.sqrt(f);
                d /= f;
                b /= f;
                c = this.L / (this.L + a.L);
                e -= f;
                f = e * c;
                var g = this.a
                  , k = this.a;
                g.x = k.x + d * f;
                g.y = k.y + b * f;
                k = g = a.a;
                e -= f;
                g.x = k.x - d * e;
                g.y = k.y - b * e;
                e = this.u;
                f = a.u;
                e = d * (e.x - f.x) + b * (e.y - f.y);
                0 > e && (e *= this.i * a.i + 1,
                c *= e,
                g = f = this.u,
                f.x = g.x - d * c,
                f.y = g.y - b * c,
                a = f = a.u,
                c = e - c,
                f.x = a.x + d * c,
                f.y = a.y + b * c)
            }
        }
        vg(a) {
            if (0 != 0 * a.Ha) {
                var b = a.F.a;
                var c = a.K.a;
                var d = c.x - b.x;
                var e = c.y - b.y
                  , f = this.a;
                var g = f.x - c.x;
                c = f.y - c.y;
                f = this.a;
                if (0 >= (f.x - b.x) * d + (f.y - b.y) * e || 0 <= g * d + c * e)
                    return;
                d = a.X;
                b = d.x;
                d = d.y;
                g = b * g + d * c
            } else {
                d = a.dc;
                g = this.a;
                b = g.x - d.x;
                d = g.y - d.y;
                g = a.fd;
                c = a.gd;
                if ((0 < g.x * b + g.y * d && 0 < c.x * b + c.y * d) == 0 >= a.Ha)
                    return;
                c = Math.sqrt(b * b + d * d);
                if (0 == c)
                    return;
                g = c - a.Ie;
                b /= c;
                d /= c
            }
            c = a.ub;
            if (0 == c)
                0 > g && (g = -g,
                b = -b,
                d = -d);
            else if (0 > c && (c = -c,
            g = -g,
            b = -b,
            d = -d),
            g < -c)
                return;
            g >= this.M || (g = this.M - g,
            e = c = this.a,
            c.x = e.x + b * g,
            c.y = e.y + d * g,
            g = this.u,
            g = b * g.x + d * g.y,
            0 > g && (g *= this.i * a.i + 1,
            c = a = this.u,
            a.x = c.x - b * g,
            a.y = c.y - d * g))
        }
    }
    class wa {
        constructor() {
            this.ja = u.na;
            this.N = null;
            this.Vb = this.rc = 0;
            this.Cb = !1;
            this.Jb = this.ma = 0;
            this.oa = "Player";
            this.ti = this.Yc = 0;
            this.country = null;
            this.ee = !1;
            this.Db = this.Qf = null;
            this.Eb = 0;
            this.Tb = !1
        }
        P(a) {
            a.f(this.Tb ? 1 : 0);
            a.w(this.Eb);
            a.Ca(this.Db);
            a.Ca(this.Qf);
            a.f(this.ee ? 1 : 0);
            a.Ca(this.country);
            a.w(this.ti);
            a.Ca(this.oa);
            a.w(this.Jb);
            a.Da(this.ma);
            a.f(this.Cb ? 1 : 0);
            a.Zd(this.Vb);
            a.f(this.rc);
            a.f(this.ja.R);
            a.Zd(null == this.N ? -1 : this.N.kf)
        }
    }
    class Va {
        constructor() {}
        qg() {
            this.oa = R.pb(this.oa, 40);
            this.hb = R.pb(this.hb, 3)
        }
        G(a) {
            this.qg();
            a.ra = !0;
            a.Oa(this.ii);
            a.Pf(this.oa);
            a.Pf(this.hb);
            a.Yd(this.Pc);
            a.Yd(this.Rc);
            a.f(this.kb ? 1 : 0);
            a.f(this.rh);
            a.f(this.ba);
            a.ra = !1
        }
    }
    class xa {
        constructor() {}
    }
    class B {
        constructor() {
            this.Ic = 0;
            this.m = 32;
            this.c = 63;
            this.i = 1;
            this.a = new I(0,0)
        }
        G(a) {
            let b = this.a;
            a.g(b.x);
            a.g(b.y);
            a.g(this.i);
            a.w(this.c);
            a.w(this.m)
        }
        pa(a) {
            let b = this.a;
            b.x = a.o();
            b.y = a.o();
            this.i = a.o();
            this.c = a.H();
            this.m = a.H()
        }
    }
    class Wa {
        constructor(a) {
            this.gb = null;
            this.Kh = 1E4;
            this.Jc = !0;
            a.Ge();
            this.qa = a.qa;
            this.ib = a.ib;
            this.Qb = a.Qb;
            this.gb = a.gb;
            this.If = window.performance.now();
            let b = null
              , c = this;
            b = function() {
                var e = c.Kh - c.di();
                0 >= e ? c.cb() : (window.clearTimeout(c.Jf),
                e = window.setTimeout(b, e + 1E3),
                c.Jf = e)
            }
            ;
            b();
            this.qa.oniceconnectionstatechange = function() {
                let e = c.qa.iceConnectionState;
                "closed" != e && "failed" != e || c.cb()
            }
            ;
            a = 0;
            let d = this.ib;
            for (; a < d.length; ) {
                let e = d[a];
                ++a;
                e.onmessage = function(f) {
                    c.Jc && (c.If = window.performance.now(),
                    null != c.gf && c.gf(f.data))
                }
                ;
                e.onclose = function() {
                    c.cb()
                }
            }
        }
        di() {
            return window.performance.now() - this.If
        }
        nb(a, b) {
            if (this.Jc && (a = this.ib[a],
            "open" == a.readyState)) {
                b = b.Xd();
                try {
                    a.send(b)
                } catch (c) {
                    b = t.Ub(c).Hb(),
                    ua.console.log(b)
                }
            }
        }
        cb() {
            window.clearTimeout(this.Jf);
            this.Jc && (this.Jc = !1,
            this.qa.close(),
            null != this.ff && this.ff())
        }
    }
    class A {
        constructor(a, b) {
            null == b && (b = !1);
            this.j = a;
            this.ra = b;
            this.a = 0
        }
        Xd() {
            let a = new ArrayBuffer(this.a)
              , b = new Uint8Array(this.j.buffer,this.j.byteOffset,this.a);
            (new Uint8Array(a)).set(b);
            return a
        }
        Bb() {
            return new Uint8Array(this.j.buffer,this.j.byteOffset,this.a)
        }
        Rb() {
            return new DataView(this.j.buffer,this.j.byteOffset,this.a)
        }
        fi() {
            return new L(this.Rb(),this.ra)
        }
        Ia(a) {
            this.j.byteLength < a && this.Lh(2 * this.j.byteLength >= a ? 2 * this.j.byteLength : a)
        }
        Lh(a) {
            if (1 > a)
                throw t.s("Can't resize buffer to a capacity lower than 1");
            if (this.j.byteLength < a) {
                let b = new Uint8Array(this.j.buffer);
                a = new ArrayBuffer(a);
                (new Uint8Array(a)).set(b);
                this.j = new DataView(a)
            }
        }
        f(a) {
            let b = this.a++;
            this.Ia(this.a);
            this.j.setUint8(b, a)
        }
        Zd(a) {
            let b = this.a;
            this.a += 2;
            this.Ia(this.a);
            this.j.setInt16(b, a, this.ra)
        }
        Oa(a) {
            let b = this.a;
            this.a += 2;
            this.Ia(this.a);
            this.j.setUint16(b, a, this.ra)
        }
        w(a) {
            let b = this.a;
            this.a += 4;
            this.Ia(this.a);
            this.j.setInt32(b, a, this.ra)
        }
        xa(a) {
            let b = this.a;
            this.a += 4;
            this.Ia(this.a);
            this.j.setUint32(b, a, this.ra)
        }
        Yd(a) {
            let b = this.a;
            this.a += 4;
            this.Ia(this.a);
            this.j.setFloat32(b, a, this.ra)
        }
        g(a) {
            let b = this.a;
            this.a += 8;
            this.Ia(this.a);
            this.j.setFloat64(b, a, this.ra)
        }
        ob(a) {
            let b = this.a;
            this.a += a.byteLength;
            this.Ia(this.a);
            (new Uint8Array(this.j.buffer,this.j.byteOffset,this.j.byteLength)).set(a, b)
        }
        li(a) {
            a = new Uint8Array(a.buffer,a.byteOffset,a.byteLength);
            this.ob(a)
        }
        Nf(a) {
            this.ob(new Uint8Array(a))
        }
        Sb(a) {
            this.Da(A.sd(a));
            this.$d(a)
        }
        Ca(a) {
            null == a ? this.Da(0) : (this.Da(A.sd(a) + 1),
            this.$d(a))
        }
        Pf(a) {
            a = (new TextEncoder).encode(a);
            let b = a.length;
            if (255 < b)
                throw t.s(null);
            this.f(b);
            this.li(a)
        }
        Of(a) {
            this.Sb(JSON.stringify(a))
        }
        $d(a) {
            let b = this.a;
            this.Ia(b + A.sd(a));
            let c = a.length
              , d = 0;
            for (; d < c; )
                b += A.Gg(P.Rf(a, d++), this.j, b);
            this.a = b
        }
        Da(a) {
            let b = this.a;
            a >>>= 0;
            this.Ia(b + A.pg(a));
            this.j.setUint8(b, a | 128);
            128 <= a ? (this.j.setUint8(b + 1, a >> 7 | 128),
            16384 <= a ? (this.j.setUint8(b + 2, a >> 14 | 128),
            2097152 <= a ? (this.j.setUint8(b + 3, a >> 21 | 128),
            268435456 <= a ? (this.j.setUint8(b + 4, a >> 28 & 127),
            a = 5) : (this.j.setUint8(b + 3, this.j.getUint8(b + 3) & 127),
            a = 4)) : (this.j.setUint8(b + 2, this.j.getUint8(b + 2) & 127),
            a = 3)) : (this.j.setUint8(b + 1, this.j.getUint8(b + 1) & 127),
            a = 2)) : (this.j.setUint8(b, this.j.getUint8(b) & 127),
            a = 1);
            this.a += a
        }
        static aa(a, b) {
            null == b && (b = !1);
            null == a && (a = 16);
            return new A(new DataView(new ArrayBuffer(a)),b)
        }
        static Gg(a, b, c) {
            let d = c;
            if (0 > a)
                throw t.s("Cannot encode UTF8 character: charCode (" + a + ") is negative");
            if (128 > a)
                b.setUint8(c, a & 127),
                ++c;
            else if (2048 > a)
                b.setUint8(c, a >> 6 & 31 | 192),
                b.setUint8(c + 1, a & 63 | 128),
                c += 2;
            else if (65536 > a)
                b.setUint8(c, a >> 12 & 15 | 224),
                b.setUint8(c + 1, a >> 6 & 63 | 128),
                b.setUint8(c + 2, a & 63 | 128),
                c += 3;
            else if (2097152 > a)
                b.setUint8(c, a >> 18 & 7 | 240),
                b.setUint8(c + 1, a >> 12 & 63 | 128),
                b.setUint8(c + 2, a >> 6 & 63 | 128),
                b.setUint8(c + 3, a & 63 | 128),
                c += 4;
            else if (67108864 > a)
                b.setUint8(c, a >> 24 & 3 | 248),
                b.setUint8(c + 1, a >> 18 & 63 | 128),
                b.setUint8(c + 2, a >> 12 & 63 | 128),
                b.setUint8(c + 3, a >> 6 & 63 | 128),
                b.setUint8(c + 4, a & 63 | 128),
                c += 5;
            else if (-2147483648 > a)
                b.setUint8(c, a >> 30 & 1 | 252),
                b.setUint8(c + 1, a >> 24 & 63 | 128),
                b.setUint8(c + 2, a >> 18 & 63 | 128),
                b.setUint8(c + 3, a >> 12 & 63 | 128),
                b.setUint8(c + 4, a >> 6 & 63 | 128),
                b.setUint8(c + 5, a & 63 | 128),
                c += 6;
            else
                throw t.s("Cannot encode UTF8 character: charCode (" + a + ") is too large (>= 0x80000000)");
            return c - d
        }
        static og(a) {
            if (0 > a)
                throw t.s("Cannot calculate length of UTF8 character: charCode (" + a + ") is negative");
            if (128 > a)
                return 1;
            if (2048 > a)
                return 2;
            if (65536 > a)
                return 3;
            if (2097152 > a)
                return 4;
            if (67108864 > a)
                return 5;
            if (-2147483648 > a)
                return 6;
            throw t.s("Cannot calculate length of UTF8 character: charCode (" + a + ") is too large (>= 0x80000000)");
        }
        static sd(a) {
            let b = 0
              , c = a.length
              , d = 0;
            for (; d < c; )
                b += A.og(P.Rf(a, d++));
            return b
        }
        static pg(a) {
            a >>>= 0;
            return 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5
        }
    }
    class Na {
        constructor() {
            this.Lc = 0;
            this.M = 15;
            this.m = 0;
            this.la = new I(0,0);
            this.L = this.i = .5;
            this.ga = .96;
            this.wc = .1;
            this.Mc = .07;
            this.Nc = .96;
            this.Kc = 5
        }
        G(a) {
            a.g(this.i);
            a.g(this.L);
            a.g(this.ga);
            a.g(this.wc);
            a.g(this.Mc);
            a.g(this.Nc);
            a.g(this.Kc);
            let b = this.la;
            a.g(b.x);
            a.g(b.y);
            a.w(this.m);
            a.g(this.M);
            a.g(this.Lc)
        }
        pa(a) {
            this.i = a.o();
            this.L = a.o();
            this.ga = a.o();
            this.wc = a.o();
            this.Mc = a.o();
            this.Nc = a.o();
            this.Kc = a.o();
            let b = this.la;
            b.x = a.o();
            b.y = a.o();
            this.m = a.H();
            this.M = a.o();
            this.Lc = a.o()
        }
    }
    class W {
        constructor() {
            this.c = this.m = 63;
            this.S = 16777215;
            this.ga = .99;
            this.L = 1;
            this.i = .5;
            this.M = 10;
            this.la = new I(0,0);
            this.u = new I(0,0);
            this.a = new I(0,0)
        }
        G(a) {
            var b = this.a;
            a.g(b.x);
            a.g(b.y);
            b = this.u;
            a.g(b.x);
            a.g(b.y);
            b = this.la;
            a.g(b.x);
            a.g(b.y);
            a.g(this.M);
            a.g(this.i);
            a.g(this.L);
            a.g(this.ga);
            a.xa(this.S);
            a.w(this.c);
            a.w(this.m)
        }
        pa(a) {
            var b = this.a;
            b.x = a.o();
            b.y = a.o();
            b = this.u;
            b.x = a.o();
            b.y = a.o();
            b = this.la;
            b.x = a.o();
            b.y = a.o();
            this.M = a.o();
            this.i = a.o();
            this.L = a.o();
            this.ga = a.o();
            this.S = a.Ob();
            this.c = a.H();
            this.m = a.H()
        }
        nh() {
            let a = new va;
            this.Te(a);
            return a
        }
        Te(a) {
            var b = a.a
              , c = this.a;
            b.x = c.x;
            b.y = c.y;
            b = a.u;
            c = this.u;
            b.x = c.x;
            b.y = c.y;
            b = a.la;
            c = this.la;
            b.x = c.x;
            b.y = c.y;
            a.M = this.M;
            a.i = this.i;
            a.L = this.L;
            a.ga = this.ga;
            a.S = this.S;
            a.c = this.c;
            a.m = this.m
        }
    }
    class nb {
        static ui(a) {
            let b = "";
            do
                b = "0123456789ABCDEF".charAt(a & 15) + b,
                a >>>= 4;
            while (0 < a);
            for (; 2 > b.length; )
                b = "0" + b;
            return b
        }
    }
    class Xa {
        constructor() {
            this.list = []
        }
        wi(a) {
            let b = 0
              , c = a.eb
              , d = a.fb
              , e = 0
              , f = this.list;
            for (; e < f.length; ) {
                var g = f[e];
                ++e;
                let k = g.eb;
                if (k > c)
                    break;
                if (k == c) {
                    g = g.fb;
                    if (g > d)
                        break;
                    g == d && ++d
                }
                ++b
            }
            a.fb = d;
            this.list.splice(b, 0, a)
        }
    }
    class u {
        constructor(a, b, c, d, e, f, g, k) {
            this.Xc = null;
            this.R = a;
            this.S = b;
            this.Ke = c;
            this.bh = d;
            this.oa = e;
            this.m = k;
            this.bi = new X;
            this.bi.Qa.push(b)
        }
    }
    class ka {
        static ji(a, b) {
            try {
                let c = new L(new DataView(a.buffer,a.byteOffset,a.byteLength),!1);
                c.C();
                let d = c.La(c.ic())
                  , e = c.La()
                  , f = new L(new DataView(d.buffer,d.byteOffset,d.byteLength),!1)
                  , g = f.lb()
                  , k = f.lb()
                  , l = f.La();
                if (l.byteLength != b.byteLength)
                    return Promise.reject(null);
                a = 0;
                let p = l.byteLength;
                for (; a < p; ) {
                    let r = a++;
                    if (l[r] != b[r])
                        return Promise.reject(null)
                }
                return ka.mi(g, k).then(function(r) {
                    return window.crypto.subtle.verify(ka.Xh, r, e, d)
                }).then(function(r) {
                    if (!r)
                        throw t.s(null);
                    return g
                })
            } catch (c) {
                return Promise.reject(t.Ub(c).Hb())
            }
        }
        static mi(a, b) {
            try {
                return window.crypto.subtle.importKey("jwk", {
                    crv: "P-256",
                    ext: !0,
                    key_ops: ["verify"],
                    kty: "EC",
                    x: a,
                    y: b
                }, ka.lg, !0, ["verify"])
            } catch (c) {
                return Promise.reject(t.Ub(c).Hb())
            }
        }
    }
    class T {
        static tf(a, b, c, d) {
            return new Promise(function(e, f) {
                let g = new XMLHttpRequest;
                g.open(b, a);
                g.responseType = "json";
                g.onload = function() {
                    200 <= g.status && 300 > g.status ? null != g.response ? e(g.response) : f(null) : f("status: " + g.status)
                }
                ;
                g.onerror = function(k) {
                    f(k)
                }
                ;
                null != d && g.setRequestHeader("Content-type", d);
                g.send(c)
            }
            )
        }
        static Ig(a) {
            return T.tf(a, "GET", null)
        }
        static Kg(a) {
            return T.Ig(a).then(function(b) {
                let c = b.error;
                if (null != c)
                    throw t.s(c);
                return b.data
            })
        }
        static Bh(a, b, c) {
            return T.tf(a, "POST", b, c)
        }
        static Ch(a, b, c) {
            return T.Bh(a, b, c).then(function(d) {
                let e = d.error;
                if (null != e)
                    throw t.s(e);
                return d.data
            })
        }
    }
    class m {
        constructor() {
            m.Ja || this.Aa()
        }
        Aa() {
            this.fb = 0
        }
        Zf() {
            return !0
        }
        apply() {
            throw t.s("missing implementation");
        }
        W() {
            throw t.s("missing implementation");
        }
        P() {
            throw t.s("missing implementation");
        }
        static Z(a) {
            null == a.delay && (a.delay = !0);
            null == a.ca && (a.ca = !0);
            return a
        }
        static $(a) {
            a.eg = m.ae;
            if (null == a.U)
                throw t.s("Class doesn't have a config");
            a.prototype.Sf = a.U;
            m.Vf.set(m.ae, a);
            m.ae++
        }
        static le(a, b) {
            let c = q.Uf(a).eg;
            if (null == c)
                throw t.s("Tried to pack unregistered action");
            b.f(c);
            a.P(b)
        }
        static Ai(a) {
            var b = a.C();
            b = Object.create(m.Vf.get(b).prototype);
            b.fb = 0;
            b.eb = 0;
            b.W(a);
            return b
        }
    }
    class Oa {
        constructor(a, b) {
            this.Fe = a;
            this.Kf = b;
            this.tb = a;
            this.Oc = window.performance.now()
        }
        Lf() {
            var a;
            null == a && (a = 1);
            this.Ba();
            return a <= this.tb ? (this.tb -= a,
            !0) : !1
        }
        Ba() {
            let a = window.performance.now()
              , b = Math.floor((a - this.Oc) / this.Kf);
            this.Oc += b * this.Kf;
            this.tb += b;
            this.tb >= this.Fe && (this.tb = this.Fe,
            this.Oc = a)
        }
    }
    class hb {
        constructor(a, b) {
            this.x = a;
            this.y = b
        }
    }
    class ob {
        static ei(a) {
            return new Promise(function(b, c) {
                let d = window.setTimeout(function() {
                    c("Timed out")
                }, 500);
                a.then(function(e) {
                    window.clearTimeout(d);
                    b(e)
                }, function(e) {
                    window.clearTimeout(d);
                    c(e)
                })
            }
            )
        }
    }
    class Ya {
        constructor(a) {
            this.Be = new Map;
            this.Mg = new Oa(100,16);
            this.ad = !1;
            this.Yc = 0;
            this.hc = a;
            a = A.aa(8);
            a.g(Math.random());
            this.cc = a.Bb()
        }
        nb(a, b) {
            null == b && (b = 0);
            this.hc.nb(b, a)
        }
    }
    class ib {
    }
    class I {
        constructor(a, b) {
            this.x = a;
            this.y = b
        }
    }
    class Y {
        constructor() {
            this.hb = "";
            this.Pc = this.Rc = 0
        }
        static Ne(a) {
            let b = new Y;
            b.Pc = a.lat;
            b.Rc = a.lon;
            b.hb = a.code.toLowerCase();
            return b
        }
        static Lg() {
            return T.Kg(ya.Ee + "api/geo").then(function(a) {
                return Y.Ne(a)
            })
        }
    }
    class pb {
        static vi() {
            m.$(Z);
            m.$(za);
            m.$(la);
            m.$(Aa);
            m.$(ma);
            m.$(aa);
            m.$(S);
            m.$(na);
            m.$(oa);
            m.$(pa);
            m.$(U);
            m.$(V);
            m.$(ba);
            m.$(qa);
            m.$(ca);
            m.$(Ba);
            m.$(Ca);
            m.$(da);
            m.$(Da);
            m.$(ra);
            m.$(ea);
            m.$(fa);
            m.$(ha);
            m.$(M)
        }
    }
    class P {
        static Rf(a, b) {
            a = a.charCodeAt(b);
            if (a == a)
                return a
        }
        static substr(a, b, c) {
            if (null == c)
                c = a.length;
            else if (0 > c)
                if (0 == b)
                    c = a.length + c;
                else
                    return "";
            return a.substr(b, c)
        }
        static remove(a, b) {
            b = a.indexOf(b);
            if (-1 == b)
                return !1;
            a.splice(b, 1);
            return !0
        }
        static now() {
            return Date.now()
        }
    }
    class qb {
        static si(a) {
            let b = [];
            if (null != a) {
                let d = Object.prototype.hasOwnProperty;
                for (var c in a)
                    "__id__" != c && "hx__closures__" != c && d.call(a, c) && b.push(c)
            }
            return b
        }
    }
    class ya {
    }
    class Ea {
        constructor(a, b, c) {
            this.gb = this.Wd = null;
            this.Qb = [];
            this.Je = 0;
            this.hf = !1;
            this.Bd = [];
            this.ib = [];
            this.qa = new RTCPeerConnection({
                iceServers: b
            },Ea.xg);
            let d = this;
            this.Se = new Promise(function(e) {
                d.Xg = e
            }
            );
            this.qa.onicecandidate = function(e) {
                null == e.candidate ? d.Xg(d.Bd) : (e = e.candidate,
                null != e.candidate && "" != e.candidate && (null != d.Jd && d.Jd(e),
                d.Bd.push(e)))
            }
            ;
            for (b = 0; b < c.length; )
                this.zg(c[b++]);
            this.R = a
        }
        ai() {
            var a;
            null == a && (a = 1E4);
            window.clearTimeout(this.Wd);
            this.Wd = window.setTimeout(gb(this, this.Wg), a)
        }
        yg(a, b) {
            let c = this;
            this.Dg(this.qa.setRemoteDescription(a).then(function() {
                return c.qa.createAnswer()
            }), b)
        }
        Dg(a, b) {
            let c = this;
            a.then(function(d) {
                return c.qa.setLocalDescription(d).then(function() {
                    return d
                })
            }).then(function(d) {
                function e() {
                    return d
                }
                let f = 0;
                for (; f < b.length; )
                    c.Ce(b[f++]);
                return ob.ei(c.Se).then(e, e)
            }).then(function(d) {
                c.ef(d)
            }).catch(function() {
                c.Hc()
            })
        }
        zg(a) {
            let b = {
                id: this.ib.length,
                negotiated: !0,
                ordered: a.ordered
            };
            a.reliable || (b.maxRetransmits = 0);
            a = this.qa.createDataChannel(a.name, b);
            a.binaryType = "arraybuffer";
            let c = this;
            a.onopen = function() {
                let d = 0
                  , e = c.ib;
                for (; d < e.length; )
                    if ("open" != e[d++].readyState)
                        return;
                null != c.Hd && c.Hd()
            }
            ;
            a.onclose = function() {
                c.Hc()
            }
            ;
            a.onmessage = function() {
                c.Hc()
            }
            ;
            this.ib.push(a)
        }
        Ce(a) {
            let b = this;
            window.setTimeout(function() {
                b.qa.addIceCandidate(a)
            }, this.Je)
        }
        Wg() {
            this.Hc()
        }
        Hc() {
            null != this.Id && this.Id();
            this.cb()
        }
        cb() {
            this.Ge();
            this.qa.close()
        }
        Ge() {
            window.clearTimeout(this.Wd);
            this.ef = this.Hd = this.Jd = this.Id = null;
            this.qa.onicecandidate = null;
            this.qa.ondatachannel = null;
            this.qa.onsignalingstatechange = null;
            this.qa.oniceconnectionstatechange = null;
            let a = 0
              , b = this.ib;
            for (; a < b.length; ) {
                let c = b[a];
                ++a;
                c.onopen = null;
                c.onclose = null;
                c.onmessage = null
            }
        }
    }
    class Pa {
        constructor() {
            this.ea = null;
            this.Vc = 2;
            this.ec = 0;
            this.Fd = 1;
            this.ab = this.Na = 3;
            this.Ud = !1;
            this.D = null;
            this.ba = [];
            this.Nd = "";
            this.ea = v.yd()[0];
            this.qc = [null, new X, new X];
            this.qc[1].Qa.push(u.fa.S);
            this.qc[2].Qa.push(u.sa.S)
        }
        Zh(a) {
            if (null == this.D) {
                this.D = new Q;
                for (var b = 0, c = this.ba; b < c.length; ) {
                    let d = c[b];
                    ++b;
                    d.N = null;
                    d.Eb = 0
                }
                this.D.Yg(this);
                null != this.Ef && this.Ef(a)
            }
        }
        Ec(a, b, c) {
            if (b.ja != c) {
                b.ja = c;
                P.remove(this.ba, b);
                this.ba.push(b);
                if (null != this.D) {
                    null != b.N && (P.remove(this.D.ia.A, b.N),
                    b.N = null);
                    this.D.Ue(b);
                    let d = 0
                      , e = !1;
                    for (; !e; ) {
                        ++d;
                        e = !0;
                        let f = 0
                          , g = this.ba;
                        for (; f < g.length; ) {
                            let k = g[f];
                            ++f;
                            if (k != b && k.ja == b.ja && k.Eb == d) {
                                e = !1;
                                break
                            }
                        }
                    }
                    b.Eb = d
                }
                jb.va(this.Ah, a, b, c)
            }
        }
        T(a) {
            let b = 0
              , c = this.ba;
            for (; b < c.length; ) {
                let d = c[b];
                ++b;
                if (d.ma == a)
                    return d
            }
            return null
        }
        Ba(a) {
            null != this.D && this.D.Ba(a)
        }
        G(a) {
            a.Ca(this.Nd);
            a.f(this.Ud ? 1 : 0);
            a.w(this.ab);
            a.w(this.Na);
            a.Zd(this.Fd);
            a.f(this.ec);
            a.f(this.Vc);
            this.ea.G(a);
            a.f(null != this.D ? 1 : 0);
            null != this.D && this.D.G(a);
            a.f(this.ba.length);
            let b = 0
              , c = this.ba;
            for (; b < c.length; )
                c[b++].P(a);
            this.qc[1].G(a);
            this.qc[2].G(a)
        }
        Oe() {
            let a = 0;
            var b = A.aa();
            this.G(b);
            for (b = b.fi(); 4 <= b.j.byteLength - b.a; )
                a ^= b.H();
            return a
        }
        Jg() {
            let a = A.aa(4);
            a.w(this.Oe());
            return a.Xd()
        }
        wg(a) {
            a = (new L(new DataView(a))).H();
            Qa.va(this.Bi, this.Oe() != a)
        }
        Bf(a) {
            this.sf = a
        }
        za(a) {
            if (0 == a)
                return !0;
            a = this.T(a);
            return null != a && a.Tb ? !0 : !1
        }
        Vh(a, b, c, d) {
            this.Vc = 0 > b ? 0 : 255 < b ? 255 : b;
            this.ec = 0 > c ? 0 : 255 < c ? 255 : c;
            0 > d ? d = 0 : 100 < d && (d = 100);
            this.Fd = this.ec * d;
            Za.va(this.ah, a, this.Vc, this.ec, d)
        }
    }
    class X {
        constructor() {
            this.Vd = 16777215;
            this.Qa = []
        }
        G(a) {
            a.f(this.De);
            a.w(this.Vd);
            a.f(this.Qa.length);
            let b = 0
              , c = this.Qa;
            for (; b < c.length; )
                a.w(c[b++])
        }
        pa(a) {
            this.De = a.C();
            this.Vd = a.H();
            let b = a.C();
            if (3 < b)
                throw t.s("too many");
            this.Qa = [];
            let c = 0;
            for (; c < b; )
                ++c,
                this.Qa.push(a.H())
        }
    }
    class ia {
    }
    class Ra {
        static pe(a) {
            return q.Yb(a, "")
        }
        static parseInt(a) {
            a = parseInt(a);
            return isNaN(a) ? null : a
        }
    }
    class Qa {
        static va(a, b) {
            null != a && a(b)
        }
    }
    class kb {
        constructor(a) {
            this.current = 0;
            this.pi = a
        }
        next() {
            return this.pi[this.current++]
        }
    }
    class v {
        constructor() {
            this.v = [];
            this.I = [];
            this.Y = [];
            this.Sa = [];
            this.A = [];
            this.Ta = [];
            this.Pb = [];
            this.Ib = [];
            this.Mb = new Na;
            this.xd = 255;
            this.td = this.Gd = 0;
            this.ud = !0;
            this.bd = !1
        }
        Sc() {
            let a = new W;
            a.S = 16777215;
            a.c = 63;
            a.m = 193;
            a.M = 10;
            a.ga = .99;
            a.L = 1;
            a.i = .5;
            return a
        }
        G(a) {
            a.f(this.xd);
            if (!this.$g()) {
                a.Ca(this.oa);
                a.w(this.Bc);
                a.g(this.Cc);
                a.g(this.Ac);
                a.g(this.ac);
                a.g(this.$b);
                a.g(this.rd);
                a.w(this.zc);
                a.g(this.bc);
                a.g(this.Dc);
                a.g(this.Ma);
                this.Mb.G(a);
                a.Oa(this.Gd);
                a.f(this.td);
                a.f(this.ud ? 1 : 0);
                a.f(this.bd ? 1 : 0);
                a.f(this.v.length);
                for (var b = 0, c = this.v.length; b < c; ) {
                    var d = b++;
                    let e = this.v[d];
                    e.Ic = d;
                    e.G(a)
                }
                a.f(this.I.length);
                b = 0;
                for (c = this.I; b < c.length; )
                    c[b++].G(a);
                a.f(this.Y.length);
                b = 0;
                for (c = this.Y; b < c.length; )
                    c[b++].G(a);
                a.f(this.Sa.length);
                b = 0;
                for (c = this.Sa; b < c.length; )
                    c[b++].G(a);
                a.f(this.A.length);
                b = 0;
                for (c = this.A; b < c.length; )
                    c[b++].G(a);
                a.f(this.Ta.length);
                b = 0;
                for (c = this.Ta; b < c.length; )
                    c[b++].G(a);
                a.f(this.Pb.length);
                b = 0;
                for (c = this.Pb; b < c.length; )
                    d = c[b],
                    ++b,
                    a.g(d.x),
                    a.g(d.y);
                a.f(this.Ib.length);
                b = 0;
                for (c = this.Ib; b < c.length; )
                    d = c[b],
                    ++b,
                    a.g(d.x),
                    a.g(d.y)
            }
        }
        hi(a) {
            function b() {
                let f = []
                  , g = a.C()
                  , k = 0;
                for (; k < g; ) {
                    ++k;
                    let l = new I(0,0);
                    l.x = a.o();
                    l.y = a.o();
                    f.push(l)
                }
                return f
            }
            this.oa = a.Ya();
            this.Bc = a.H();
            this.Cc = a.o();
            this.Ac = a.o();
            this.ac = a.o();
            this.$b = a.o();
            this.rd = a.o();
            this.zc = a.H();
            this.bc = a.o();
            this.Dc = a.o();
            this.Ma = a.o();
            this.Mb.pa(a);
            this.Gd = a.ic();
            this.td = a.C();
            this.ud = 0 != a.C();
            this.bd = 0 != a.C();
            this.v = [];
            for (var c = a.C(), d = 0; d < c; ) {
                var e = new B;
                e.pa(a);
                e.Ic = d++;
                this.v.push(e)
            }
            this.I = [];
            c = a.C();
            for (d = 0; d < c; )
                ++d,
                e = new E,
                e.pa(a, this.v),
                this.I.push(e);
            this.Y = [];
            c = a.C();
            for (d = 0; d < c; )
                ++d,
                e = new J,
                e.pa(a),
                this.Y.push(e);
            this.Sa = [];
            c = a.C();
            for (d = 0; d < c; )
                ++d,
                e = new Fa,
                e.pa(a),
                this.Sa.push(e);
            this.A = [];
            c = a.C();
            for (d = 0; d < c; )
                ++d,
                e = new W,
                e.pa(a),
                this.A.push(e);
            this.Ta = [];
            c = a.C();
            for (d = 0; d < c; )
                ++d,
                e = new Ga,
                e.pa(a),
                this.Ta.push(e);
            this.Pb = b();
            this.Ib = b();
            this.Nb();
            if (!this.Mf())
                throw t.s(new xa("Invalid stadium"));
        }
        Mf() {
            return 0 >= this.A.length || 0 > this.$b || 0 > this.ac || 0 > this.Mb.M ? !1 : !0
        }
        Nb() {
            let a = 0
              , b = this.I;
            for (; a < b.length; )
                b[a++].Nb()
        }
        $g() {
            return 255 != this.xd
        }
        Kb(a, b) {
            a = a[b];
            return null != a ? q.l(a, z) : 0
        }
        lh(a) {
            a = a.canBeStored;
            return null != a ? q.l(a, $a) : !0
        }
        eh(a) {
            function b(k) {
                let l = q.l(k[0], z);
                k = q.l(k[1], z);
                null == k && (k = 0);
                null == l && (l = 0);
                return new I(l,k)
            }
            function c(k, l, p, r) {
                null == r && (r = !1);
                var x = d[l];
                if (!r || null != x)
                    if (r = q.l(x, Array),
                    null != r)
                        for (x = 0; x < r.length; ) {
                            let C = r[x];
                            ++x;
                            try {
                                v.mg(C, f),
                                k.push(p(C))
                            } catch (N) {
                                throw t.s(new xa('Error in "' + l + '" index: ' + k.length));
                            }
                        }
            }
            let d = JSON5.parse(a);
            this.v = [];
            this.I = [];
            this.Y = [];
            this.Sa = [];
            this.A = [];
            this.Ta = [];
            this.oa = q.l(d.name, String);
            this.bc = q.l(d.width, z);
            this.Dc = q.l(d.height, z);
            this.Gd = this.Kb(d, "maxViewWidth") | 0;
            "player" == d.cameraFollow && (this.td = 1);
            this.Ma = 200;
            a = d.spawnDistance;
            null != a && (this.Ma = q.l(a, z));
            a = d.bg;
            let e;
            switch (a.type) {
            case "grass":
                e = 1;
                break;
            case "hockey":
                e = 2;
                break;
            default:
                e = 0
            }
            this.Bc = e;
            this.Cc = this.Kb(a, "width");
            this.Ac = this.Kb(a, "height");
            this.ac = this.Kb(a, "kickOffRadius");
            this.$b = this.Kb(a, "cornerRadius");
            this.zc = 7441498;
            null != a.color && (this.zc = v.Qc(a.color));
            this.rd = this.Kb(a, "goalLine");
            this.ud = this.lh(d);
            this.bd = "full" == d.kickOffReset;
            let f = d.traits;
            a = d.ballPhysics;
            "disc0" != a && (null != a ? (a = v.Ye(a, this.Sc()),
            a.m |= 192,
            this.A.push(a)) : this.A.push(this.Sc()));
            c(this.v, "vertexes", v.kh);
            let g = this;
            c(this.I, "segments", function(k) {
                return v.jh(k, g.v)
            });
            c(this.Sa, "goals", v.fh);
            c(this.A, "discs", function(k) {
                return v.Ye(k, new W)
            });
            c(this.Y, "planes", v.hh);
            c(this.Ta, "joints", function(k) {
                return v.gh(k, g.A)
            }, !0);
            c(this.Pb, "redSpawnPoints", b, !0);
            c(this.Ib, "blueSpawnPoints", b, !0);
            a = d.playerPhysics;
            null != a && (this.Mb = v.ih(a));
            if (255 < this.v.length || 255 < this.I.length || 255 < this.Y.length || 255 < this.Sa.length || 255 < this.A.length)
                throw t.s("Error");
            this.Nb();
            if (!this.Mf())
                throw t.s(new xa("Invalid stadium"));
        }
        sg(a, b) {
            let c = 0
              , d = this.Sa;
            for (; c < d.length; ) {
                let k = d[c];
                ++c;
                var e = k.F
                  , f = k.K
                  , g = b.x - a.x;
                let l = b.y - a.y;
                0 < -(e.y - a.y) * g + (e.x - a.x) * l == 0 < -(f.y - a.y) * g + (f.x - a.x) * l ? e = !1 : (g = f.x - e.x,
                f = f.y - e.y,
                e = 0 < -(a.y - e.y) * g + (a.x - e.x) * f == 0 < -(b.y - e.y) * g + (b.x - e.x) * f ? !1 : !0);
                if (e)
                    return k.pc
            }
            return u.na
        }
        jb(a, b, c, d, e, f, g, k) {
            null == k && (k = 0);
            this.oa = a;
            this.A.push(this.Sc());
            this.bc = b;
            this.Dc = c;
            this.Bc = 1;
            this.zc = 7441498;
            this.Cc = d;
            this.Ac = e;
            this.ac = g;
            this.$b = k;
            this.Ma = .75 * d;
            400 < this.Ma && (this.Ma = 400);
            a = new J;
            var l = a.X;
            l.x = 0;
            l.y = 1;
            a.ka = -c;
            a.i = 0;
            this.Y.push(a);
            a = new J;
            l = a.X;
            l.x = 0;
            l.y = -1;
            a.ka = -c;
            a.i = 0;
            this.Y.push(a);
            a = new J;
            l = a.X;
            l.x = 1;
            l.y = 0;
            a.ka = -b;
            a.i = 0;
            this.Y.push(a);
            a = new J;
            l = a.X;
            l.x = -1;
            l.y = 0;
            a.ka = -b;
            a.i = 0;
            this.Y.push(a);
            this.Tc(d, 1, f, 13421823, u.sa);
            this.Tc(-d, -1, f, 16764108, u.fa);
            this.af(g, c);
            b = new J;
            c = b.X;
            c.x = 0;
            c.y = 1;
            b.ka = -e;
            b.c = 1;
            this.Y.push(b);
            b = new J;
            c = b.X;
            c.x = 0;
            c.y = -1;
            b.ka = -e;
            b.c = 1;
            this.Y.push(b);
            b = new B;
            c = b.a;
            c.x = -d;
            c.y = -e;
            b.c = 0;
            c = new B;
            g = c.a;
            g.x = d;
            g.y = -e;
            c.c = 0;
            g = new B;
            a = g.a;
            a.x = d;
            a.y = -f;
            g.c = 0;
            a = new B;
            l = a.a;
            l.x = d;
            l.y = f;
            a.c = 0;
            l = new B;
            var p = l.a;
            p.x = d;
            p.y = e;
            l.c = 0;
            p = new B;
            var r = p.a;
            r.x = -d;
            r.y = e;
            p.c = 0;
            r = new B;
            var x = r.a;
            x.x = -d;
            x.y = f;
            r.c = 0;
            x = new B;
            var C = x.a;
            C.x = -d;
            C.y = -f;
            x.c = 0;
            f = new E;
            f.F = c;
            f.K = g;
            f.c = 1;
            f.ua = !1;
            C = new E;
            C.F = a;
            C.K = l;
            C.c = 1;
            C.ua = !1;
            let N = new E;
            N.F = p;
            N.K = r;
            N.c = 1;
            N.ua = !1;
            let sa = new E;
            sa.F = x;
            sa.K = b;
            sa.c = 1;
            sa.ua = !1;
            this.v.push(b);
            this.v.push(c);
            this.v.push(g);
            this.v.push(a);
            this.v.push(l);
            this.v.push(p);
            this.v.push(r);
            this.v.push(x);
            this.I.push(f);
            this.I.push(C);
            this.I.push(N);
            this.I.push(sa);
            this.Ze(d, e, k);
            this.Nb()
        }
        $e(a, b, c, d, e, f, g, k) {
            this.oa = a;
            this.A.push(this.Sc());
            this.bc = b;
            this.Dc = c;
            this.Bc = 2;
            this.Cc = d;
            this.Ac = e;
            this.ac = 75;
            this.$b = k;
            this.rd = g;
            this.Ma = .75 * (d - g);
            400 < this.Ma && (this.Ma = 400);
            a = new J;
            var l = a.X;
            l.x = 0;
            l.y = 1;
            a.ka = -c;
            a.i = 0;
            this.Y.push(a);
            a = new J;
            l = a.X;
            l.x = 0;
            l.y = -1;
            a.ka = -c;
            a.i = 0;
            this.Y.push(a);
            a = new J;
            l = a.X;
            l.x = 1;
            l.y = 0;
            a.ka = -b;
            a.i = 0;
            this.Y.push(a);
            a = new J;
            l = a.X;
            l.x = -1;
            l.y = 0;
            a.ka = -b;
            a.i = 0;
            this.Y.push(a);
            this.Tc(d - g, 1, f, 13421823, u.sa, 63);
            this.Tc(-d + g, -1, f, 16764108, u.fa, 63);
            this.af(75, c);
            b = new J;
            c = b.X;
            c.x = 0;
            c.y = 1;
            b.ka = -e;
            b.c = 1;
            this.Y.push(b);
            b = new J;
            c = b.X;
            c.x = 0;
            c.y = -1;
            b.ka = -e;
            b.c = 1;
            this.Y.push(b);
            b = new J;
            c = b.X;
            c.x = 1;
            c.y = 0;
            b.ka = -d;
            b.c = 1;
            this.Y.push(b);
            b = new J;
            c = b.X;
            c.x = -1;
            c.y = 0;
            b.ka = -d;
            b.c = 1;
            this.Y.push(b);
            this.Ze(d, e, k);
            this.Nb()
        }
        Tc(a, b, c, d, e, f) {
            var g;
            null == g && (g = 32);
            null == f && (f = 1);
            var k = new B
              , l = k.a;
            l.x = a + 8 * b;
            l.y = -c;
            l = new B;
            var p = l.a;
            p.x = a + 8 * b;
            p.y = c;
            let r = new B;
            p = r.a;
            p.x = k.a.x + 22 * b;
            p.y = k.a.y + 22;
            let x = new B;
            p = x.a;
            p.x = l.a.x + 22 * b;
            p.y = l.a.y - 22;
            p = new E;
            p.F = k;
            p.K = r;
            p.bb(90 * b);
            let C = new E;
            C.F = x;
            C.K = r;
            let N = new E;
            N.F = x;
            N.K = l;
            N.bb(90 * b);
            b = this.v.length;
            this.v.push(k);
            this.v.push(l);
            this.v.push(r);
            this.v.push(x);
            k = b;
            for (b = this.v.length; k < b; )
                l = k++,
                this.v[l].c = f,
                this.v[l].m = g,
                this.v[l].i = .1;
            b = this.I.length;
            this.I.push(p);
            this.I.push(C);
            this.I.push(N);
            k = b;
            for (b = this.I.length; k < b; )
                l = k++,
                this.I[l].c = f,
                this.I[l].m = g,
                this.I[l].i = .1;
            f = new W;
            g = f.a;
            g.x = a;
            g.y = -c;
            f.L = 0;
            f.M = 8;
            f.S = d;
            this.A.push(f);
            f = new W;
            g = f.a;
            g.x = a;
            g.y = c;
            f.L = 0;
            f.M = 8;
            f.S = d;
            this.A.push(f);
            d = new Fa;
            f = d.F;
            f.x = a;
            f.y = -c;
            f = d.K;
            f.x = a;
            f.y = c;
            d.pc = e;
            this.Sa.push(d)
        }
        af(a, b) {
            let c = new B;
            var d = c.a;
            d.x = 0;
            d.y = -b;
            c.i = .1;
            c.m = 24;
            c.c = 6;
            d = new B;
            var e = d.a;
            e.x = 0;
            e.y = -a;
            d.i = .1;
            d.m = 24;
            d.c = 6;
            e = new B;
            var f = e.a;
            f.x = 0;
            f.y = a;
            e.i = .1;
            e.m = 24;
            e.c = 6;
            a = new B;
            f = a.a;
            f.x = 0;
            f.y = b;
            a.i = .1;
            a.m = 24;
            a.c = 6;
            b = new E;
            b.F = c;
            b.K = d;
            b.m = 24;
            b.c = 6;
            b.ua = !1;
            b.i = .1;
            f = new E;
            f.F = e;
            f.K = a;
            f.m = 24;
            f.c = 6;
            f.ua = !1;
            f.i = .1;
            let g = new E;
            g.F = d;
            g.K = e;
            g.m = 8;
            g.c = 6;
            g.ua = !1;
            g.bb(180);
            g.i = .1;
            let k = new E;
            k.F = e;
            k.K = d;
            k.m = 16;
            k.c = 6;
            k.ua = !1;
            k.bb(180);
            k.i = .1;
            this.v.push(c);
            this.v.push(d);
            this.v.push(e);
            this.v.push(a);
            this.I.push(b);
            this.I.push(f);
            this.I.push(g);
            this.I.push(k)
        }
        Ze(a, b, c) {
            if (!(0 >= c)) {
                var d = new B
                  , e = d.a;
                e.x = -a + c;
                e.y = -b;
                d.c = 0;
                e = new B;
                var f = e.a;
                f.x = -a;
                f.y = -b + c;
                e.c = 0;
                f = new B;
                var g = f.a;
                g.x = -a + c;
                g.y = b;
                f.c = 0;
                g = new B;
                var k = g.a;
                k.x = -a;
                k.y = b - c;
                g.c = 0;
                k = new B;
                var l = k.a;
                l.x = a - c;
                l.y = b;
                k.c = 0;
                l = new B;
                var p = l.a;
                p.x = a;
                p.y = b - c;
                l.c = 0;
                p = new B;
                var r = p.a;
                r.x = a - c;
                r.y = -b;
                p.c = 0;
                r = new B;
                var x = r.a;
                x.x = a;
                x.y = -b + c;
                r.c = 0;
                a = new E;
                a.F = d;
                a.K = e;
                a.c = 1;
                a.ua = !1;
                a.i = 1;
                a.bb(-90);
                b = new E;
                b.F = f;
                b.K = g;
                b.c = 1;
                b.ua = !1;
                b.i = 1;
                b.bb(90);
                c = new E;
                c.F = k;
                c.K = l;
                c.c = 1;
                c.ua = !1;
                c.i = 1;
                c.bb(-90);
                x = new E;
                x.F = p;
                x.K = r;
                x.c = 1;
                x.ua = !1;
                x.i = 1;
                x.bb(90);
                this.v.push(d);
                this.v.push(e);
                this.v.push(f);
                this.v.push(g);
                this.v.push(k);
                this.v.push(l);
                this.v.push(p);
                this.v.push(r);
                this.I.push(a);
                this.I.push(b);
                this.I.push(c);
                this.I.push(x)
            }
        }
        static pa(a) {
            var b = a.C();
            return 255 == b ? (b = new v,
            b.hi(a),
            b) : v.yd()[b]
        }
        static yd() {
            if (null == v.wa) {
                v.wa = [];
                var a = new v;
                a.jb("Classic", 420, 200, 370, 170, 64, 75);
                v.wa.push(a);
                a = new v;
                a.jb("Easy", 420, 200, 370, 170, 90, 75);
                v.wa.push(a);
                a = new v;
                a.jb("Small", 420, 200, 320, 130, 55, 70);
                v.wa.push(a);
                a = new v;
                a.jb("Big", 600, 270, 550, 240, 80, 80);
                v.wa.push(a);
                a = new v;
                a.jb("Rounded", 420, 200, 370, 170, 64, 75, 75);
                v.wa.push(a);
                a = new v;
                a.$e("Hockey", 420, 204, 398, 182, 68, 120, 100);
                v.wa.push(a);
                a = new v;
                a.$e("Big Hockey", 600, 270, 550, 240, 90, 160, 150);
                v.wa.push(a);
                a = new v;
                a.jb("Big Easy", 600, 270, 550, 240, 95, 80);
                v.wa.push(a);
                a = new v;
                a.jb("Big Rounded", 600, 270, 550, 240, 80, 75, 100);
                v.wa.push(a);
                a = new v;
                a.jb("Huge", 750, 350, 700, 320, 100, 80);
                v.wa.push(a);
                a = 0;
                let b = v.wa.length;
                for (; a < b; ) {
                    let c = a++;
                    v.wa[c].xd = c
                }
            }
            return v.wa
        }
        static mg(a, b) {
            if (null != a.trait && (b = b[q.l(a.trait, String)],
            null != b)) {
                let c = 0
                  , d = qb.si(b);
                for (; c < d.length; ) {
                    let e = d[c];
                    ++c;
                    null == a[e] && (a[e] = b[e])
                }
            }
        }
        static Ua(a) {
            a = q.l(a, Array);
            let b = 0
              , c = 0;
            for (; c < a.length; )
                switch (a[c++]) {
                case "all":
                    b |= 63;
                    break;
                case "ball":
                    b |= 1;
                    break;
                case "blue":
                    b |= 4;
                    break;
                case "blueKO":
                    b |= 16;
                    break;
                case "c0":
                    b |= 268435456;
                    break;
                case "c1":
                    b |= 536870912;
                    break;
                case "c2":
                    b |= 1073741824;
                    break;
                case "c3":
                    b |= -2147483648;
                    break;
                case "kick":
                    b |= 64;
                    break;
                case "red":
                    b |= 2;
                    break;
                case "redKO":
                    b |= 8;
                    break;
                case "score":
                    b |= 128;
                    break;
                case "wall":
                    b |= 32
                }
            return b
        }
        static Qc(a) {
            if ("transparent" == a)
                return -1;
            if ("string" == typeof a)
                return Ra.parseInt("0x" + Ra.pe(a));
            if (a instanceof Array)
                return ((a[0] | 0) << 16) + ((a[1] | 0) << 8) + (a[2] | 0);
            throw t.s("Bad color");
        }
        static kh(a) {
            let b = new B;
            b.a.x = q.l(a.x, z);
            b.a.y = q.l(a.y, z);
            var c = a.bCoef;
            null != c && (b.i = q.l(c, z));
            c = a.cMask;
            null != c && (b.c = v.Ua(c));
            a = a.cGroup;
            null != a && (b.m = v.Ua(a));
            return b
        }
        static jh(a, b) {
            let c = new E;
            var d = q.l(a.v1, Ha);
            c.F = b[q.l(a.v0, Ha)];
            c.K = b[d];
            b = a.bias;
            d = a.bCoef;
            let e = a.curve
              , f = a.curveF
              , g = a.vis
              , k = a.cMask
              , l = a.cGroup;
            a = a.color;
            null != b && (c.ub = q.l(b, z));
            null != d && (c.i = q.l(d, z));
            null != f ? c.Ha = q.l(f, z) : null != e && c.bb(q.l(e, z));
            null != g && (c.ua = q.l(g, $a));
            null != k && (c.c = v.Ua(k));
            null != l && (c.m = v.Ua(l));
            null != a && (c.S = v.Qc(a));
            return c
        }
        static gh(a, b) {
            let c = new Ga;
            var d = q.l(a.d0, Ha)
              , e = q.l(a.d1, Ha);
            let f = a.color
              , g = a.strength;
            a = a.length;
            if (d >= b.length || 0 > d)
                throw t.s(null);
            if (e >= b.length || 0 > e)
                throw t.s(null);
            c.Fc = d;
            c.Gc = e;
            null == a ? (d = b[d],
            e = b[e],
            null == d || null == e ? c.Va = c.Ka = 100 : (b = d.a,
            d = e.a,
            e = b.x - d.x,
            b = b.y - d.y,
            c.Va = c.Ka = Math.sqrt(e * e + b * b))) : a instanceof Array ? (c.Ka = q.l(a[0], z),
            c.Va = q.l(a[1], z)) : c.Va = c.Ka = q.l(a, z);
            c.oc = null == g || "rigid" == g ? 1 / 0 : q.l(g, z);
            null != f && (c.S = v.Qc(f));
            return c
        }
        static hh(a) {
            let b = new J;
            var c = q.l(a.normal, Array)
              , d = q.l(c[0], z)
              , e = q.l(c[1], z);
            c = b.X;
            let f = d;
            var g = e;
            null == e && (g = 0);
            null == d && (f = 0);
            d = f;
            e = Math.sqrt(d * d + g * g);
            c.x = d / e;
            c.y = g / e;
            b.ka = q.l(a.dist, z);
            c = a.bCoef;
            d = a.cMask;
            a = a.cGroup;
            null != c && (b.i = q.l(c, z));
            null != d && (b.c = v.Ua(d));
            null != a && (b.m = v.Ua(a));
            return b
        }
        static fh(a) {
            let b = new Fa;
            var c = q.l(a.p0, Array);
            let d = q.l(a.p1, Array)
              , e = b.F;
            e.x = c[0];
            e.y = c[1];
            c = b.K;
            c.x = d[0];
            c.y = d[1];
            switch (a.team) {
            case "blue":
                a = u.sa;
                break;
            case "red":
                a = u.fa;
                break;
            default:
                throw t.s("Bad team value");
            }
            b.pc = a;
            return b
        }
        static ih(a) {
            let b = new Na;
            var c = a.bCoef
              , d = a.invMass;
            let e = a.damping
              , f = a.acceleration
              , g = a.kickingAcceleration
              , k = a.kickingDamping
              , l = a.kickStrength
              , p = a.gravity
              , r = a.cGroup
              , x = a.radius;
            a = a.kickback;
            null != c && (b.i = q.l(c, z));
            null != d && (b.L = q.l(d, z));
            null != e && (b.ga = q.l(e, z));
            null != f && (b.wc = q.l(f, z));
            null != g && (b.Mc = q.l(g, z));
            null != k && (b.Nc = q.l(k, z));
            null != l && (b.Kc = q.l(l, z));
            null != p && (c = b.la,
            d = q.l(p[1], z),
            c.x = q.l(p[0], z),
            c.y = d);
            null != r && (b.m = v.Ua(r));
            null != x && (b.M = q.l(x, z));
            null != a && (b.Lc = q.l(a, z));
            return b
        }
        static Ye(a, b) {
            var c = a.pos
              , d = a.speed;
            let e = a.gravity
              , f = a.radius
              , g = a.bCoef
              , k = a.invMass
              , l = a.damping
              , p = a.color
              , r = a.cMask;
            a = a.cGroup;
            if (null != c) {
                let x = b.a;
                x.x = c[0];
                x.y = c[1]
            }
            null != d && (c = b.u,
            c.x = d[0],
            c.y = d[1]);
            null != e && (d = b.la,
            d.x = e[0],
            d.y = e[1]);
            null != f && (b.M = q.l(f, z));
            null != g && (b.i = q.l(g, z));
            null != k && (b.L = q.l(k, z));
            null != l && (b.ga = q.l(l, z));
            null != p && (b.S = v.Qc(p));
            null != r && (b.c = v.Ua(r));
            null != a && (b.m = v.Ua(a));
            return b
        }
    }
    class rb {
        static vh(a) {
            a = a.split(" ");
            let b = a[4];
            if ("typ" != a[6])
                throw t.s(null);
            return {
                gi: a[7],
                Zg: b
            }
        }
    }
    class Q {
        constructor() {
            this.zb = this.vb = this.Lb = this.Xa = 0;
            this.Dd = u.fa;
            this.Ab = this.$a = 0;
            this.ia = new Sa;
            this.Na = 0;
            this.ab = 5;
            this.ea = null
        }
        Yg(a) {
            this.ha = a;
            this.ab = a.ab;
            this.Na = a.Na;
            this.ea = a.ea;
            this.ia.v = this.ea.v;
            this.ia.Y = this.ea.Y;
            this.ia.I = this.ea.I;
            this.ia.Ta = this.ea.Ta;
            a = 0;
            let b = this.ea.A;
            for (; a < b.length; )
                this.ia.A.push(b[a++].nh());
            this.Ve()
        }
        Ue(a) {
            if (a.ja == u.na)
                a.N = null;
            else {
                a.Jb = 0;
                var b = a.N;
                null == b && (b = new va,
                a.N = b,
                this.ia.A.push(b));
                var c = this.ea.Mb;
                b.S = 0;
                b.M = c.M;
                b.L = c.L;
                b.ga = c.ga;
                b.i = c.i;
                b.c = 39;
                b.m = a.ja.m | c.m;
                var d = a.ja == u.fa ? this.ea.Pb : this.ea.Ib;
                0 == d.length ? (b.a.x = a.ja.Ke * this.ea.bc,
                b.a.y = 0) : (a = b.a,
                d = d[d.length - 1],
                a.x = d.x,
                a.y = d.y);
                d = b.u;
                d.x = 0;
                d.y = 0;
                b = b.la;
                c = c.la;
                b.x = c.x;
                b.y = c.y
            }
        }
        Ba(a) {
            if (0 < this.Xa)
                120 > this.Xa && this.Xa--;
            else {
                var b = this.ha.Hg;
                null != b && b();
                b = this.ha.ba;
                for (var c = 0; c < b.length; ) {
                    var d = b[c];
                    ++c;
                    if (null != d.N) {
                        0 == (d.Jb & 16) && (d.Cb = !1);
                        var e = this.ea.Mb;
                        0 < d.rc && d.rc--;
                        d.Vb < this.ha.Fd && d.Vb++;
                        if (d.Cb && 0 >= d.rc && 0 <= d.Vb) {
                            for (var f = !1, g = 0, k = this.ia.A; g < k.length; ) {
                                var l = k[g];
                                ++g;
                                if (0 != (l.m & 64) && l != d.N) {
                                    var p = l.a
                                      , r = d.N.a
                                      , x = p.x - r.x;
                                    p = p.y - r.y;
                                    r = Math.sqrt(x * x + p * p);
                                    if (4 > r - l.M - d.N.M) {
                                        f = x / r;
                                        x = p / r;
                                        p = e.Kc;
                                        var C = r = l.u;
                                        l = l.L;
                                        r.x = C.x + f * p * l;
                                        r.y = C.y + x * p * l;
                                        C = d.N;
                                        l = -e.Lc;
                                        r = p = C.u;
                                        C = C.L;
                                        p.x = r.x + f * l * C;
                                        p.y = r.y + x * l * C;
                                        f = !0
                                    }
                                }
                            }
                            f && (null != this.ha.pf && this.ha.pf(d),
                            d.Cb = !1,
                            d.rc = this.ha.Vc,
                            d.Vb -= this.ha.ec)
                        }
                        f = d.Jb;
                        k = g = 0;
                        0 != (f & 1) && --k;
                        0 != (f & 2) && ++k;
                        0 != (f & 4) && --g;
                        0 != (f & 8) && ++g;
                        0 != g && 0 != k && (f = Math.sqrt(g * g + k * k),
                        g /= f,
                        k /= f);
                        f = d.N.u;
                        l = d.Cb ? e.Mc : e.wc;
                        f.x += g * l;
                        f.y += k * l;
                        d.N.ga = d.Cb ? e.Nc : e.ga
                    }
                }
                c = 0;
                d = this.ia.A;
                e = 0;
                for (g = d.length; e < g; )
                    f = e++,
                    k = d[f],
                    0 != (k.m & 128) && (Q.Le[c] = f,
                    f = Q.bf[c],
                    k = k.a,
                    f.x = k.x,
                    f.y = k.y,
                    ++c);
                this.ia.Ba(a);
                if (0 == this.$a) {
                    for (a = 0; a < b.length; )
                        c = b[a],
                        ++a,
                        null != c.N && (c.N.c = 39 | this.Dd.bh);
                    b = this.ia.A[0].u;
                    0 < b.x * b.x + b.y * b.y && (this.$a = 1)
                } else if (1 == this.$a) {
                    this.Lb += .016666666666666666;
                    for (a = 0; a < b.length; )
                        d = b[a],
                        ++a,
                        null != d.N && (d.N.c = 39);
                    d = u.na;
                    b = this.ia.A;
                    for (a = 0; a < c && (d = a++,
                    d = this.ea.sg(b[Q.Le[d]].a, Q.bf[d]),
                    d == u.na); )
                        ;
                    d != u.na ? (this.$a = 2,
                    this.Ab = 150,
                    this.Dd = d,
                    d == u.fa ? this.vb++ : this.zb++,
                    null != this.ha.Gf && this.ha.Gf(d.Xc),
                    null != this.ha.sf && this.ha.sf(d.R)) : 0 < this.Na && this.Lb >= 60 * this.Na && this.zb != this.vb && (null != this.ha.ci && this.ha.ci(),
                    this.Df())
                } else if (2 == this.$a)
                    this.Ab--,
                    0 >= this.Ab && (0 < this.ab && (this.zb >= this.ab || this.vb >= this.ab) || 0 < this.Na && this.Lb >= 60 * this.Na && this.zb != this.vb ? this.Df() : (this.Ve(),
                    null != this.ha.qf && this.ha.qf()));
                else if (3 == this.$a && (this.Ab--,
                0 >= this.Ab && (b = this.ha,
                null != b.D))) {
                    b.D = null;
                    a = 0;
                    for (c = b.ba; a < c.length; )
                        d = c[a],
                        ++a,
                        d.N = null,
                        d.Eb = 0;
                    null != b.hd && b.hd(null)
                }
            }
        }
        Df() {
            this.Ab = 300;
            this.$a = 3;
            null != this.ha.Hf && this.ha.Hf(this.zb > this.vb ? u.fa : u.sa)
        }
        Ve() {
            let a = this.ha.ba;
            this.$a = 0;
            for (var b = this.ea.A, c = this.ia.A, d = 0, e = this.ea.bd ? b.length : 1; d < e; ) {
                var f = d++;
                b[f].Te(c[f])
            }
            b = [0, 0, 0];
            for (c = 0; c < a.length; )
                if (d = a[c],
                ++c,
                this.Ue(d),
                e = d.ja,
                e != u.na) {
                    f = d.N.a;
                    var g = this.ea
                      , k = b[e.R]
                      , l = e == u.fa ? g.Pb : g.Ib;
                    0 == l.length ? (l = k + 1 >> 1,
                    0 == (k & 1) && (l = -l),
                    g = g.Ma * e.Ke,
                    k = 55 * l) : (k >= l.length && (k = l.length - 1),
                    k = l[k],
                    g = k.x,
                    k = k.y);
                    f.x = g;
                    f.y = k;
                    b[e.R]++;
                    d.Eb = b[e.R]
                }
        }
        G(a) {
            this.ia.G(a);
            a.w(this.Ab);
            a.w(this.$a);
            a.w(this.zb);
            a.w(this.vb);
            a.g(this.Lb);
            a.w(this.Xa);
            a.f(this.Dd.R)
        }
    }
    class Ia {
        static dh() {
            if (null != Ia.Kd)
                return Ia.Kd;
            Ia.Kd = new Promise(function(a, b) {
                var c = window.grecaptcha;
                null != c ? a(c) : (c = window.document.createElement("script"),
                c.src = "https://www.google.com/recaptcha/api.js?onload=___recaptchaload&render=explicit",
                window.document.head.appendChild(c),
                window.___recaptchaload = function() {
                    a(window.grecaptcha)
                }
                ,
                c.onerror = function() {
                    b(null)
                }
                )
            }
            );
            return Ia.Kd
        }
    }
    class jb {
        static va(a, b, c, d) {
            null != a && a(b, c, d)
        }
    }
    class Ta {
    }
    class E {
        constructor() {
            this.fd = this.gd = this.X = null;
            this.Ie = 0;
            this.K = this.F = this.dc = null;
            this.ub = 0;
            this.i = 1;
            this.c = 63;
            this.m = 32;
            this.Ha = 1 / 0;
            this.ua = !0;
            this.S = 0
        }
        G(a) {
            let b = 0
              , c = a.a;
            a.f(0);
            a.f(this.F.Ic);
            a.f(this.K.Ic);
            0 != this.ub && (b = 1,
            a.g(this.ub));
            this.Ha != 1 / 0 && (b |= 2,
            a.g(this.Ha));
            0 != this.S && (b |= 4,
            a.w(this.S));
            this.ua && (b |= 8);
            a.j.setUint8(c, b);
            a.g(this.i);
            a.w(this.c);
            a.w(this.m)
        }
        pa(a, b) {
            let c = a.C();
            this.F = b[a.C()];
            this.K = b[a.C()];
            this.ub = 0 != (c & 1) ? a.o() : 0;
            this.Ha = 0 != (c & 2) ? a.o() : 1 / 0;
            this.S = 0 != (c & 4) ? a.H() : 0;
            this.ua = 0 != (c & 8);
            this.i = a.o();
            this.c = a.H();
            this.m = a.H()
        }
        bb(a) {
            a *= .017453292519943295;
            if (0 > a) {
                a = -a;
                let b = this.F;
                this.F = this.K;
                this.K = b;
                this.ub = -this.ub
            }
            a > E.dg && a < E.cg && (this.Ha = 1 / Math.tan(a / 2))
        }
        Nb() {
            if (0 == 0 * this.Ha) {
                var a = this.K.a
                  , b = this.F.a
                  , c = .5 * (a.x - b.x);
                a = .5 * (a.y - b.y);
                b = this.F.a;
                let d = this.Ha;
                this.dc = new I(b.x + c + -a * d,b.y + a + c * d);
                a = this.F.a;
                b = this.dc;
                c = a.x - b.x;
                a = a.y - b.y;
                this.Ie = Math.sqrt(c * c + a * a);
                c = this.F.a;
                a = this.dc;
                this.fd = new I(-(c.y - a.y),c.x - a.x);
                c = this.dc;
                a = this.K.a;
                this.gd = new I(-(c.y - a.y),c.x - a.x);
                0 >= this.Ha && (a = c = this.fd,
                c.x = -a.x,
                c.y = -a.y,
                a = c = this.gd,
                c.x = -a.x,
                c.y = -a.y)
            } else
                a = this.F.a,
                b = this.K.a,
                c = a.x - b.x,
                a = -(a.y - b.y),
                b = Math.sqrt(a * a + c * c),
                this.X = new I(a / b,c / b)
        }
    }
    class L {
        constructor(a, b) {
            null == b && (b = !1);
            this.j = a;
            this.ra = b;
            this.a = 0
        }
        La(a) {
            null == a && (a = this.j.byteLength - this.a);
            if (this.a + a > this.j.byteLength)
                throw t.s("Read too much");
            let b = new Uint8Array(this.j.buffer,this.j.byteOffset + this.a,a);
            this.a += a;
            return b
        }
        Hh(a) {
            let b = this.La(a);
            a = new ArrayBuffer(a);
            (new Uint8Array(a)).set(b);
            return a
        }
        Ld() {
            return this.j.getInt8(this.a++)
        }
        C() {
            return this.j.getUint8(this.a++)
        }
        ic() {
            let a = this.j.getUint16(this.a, this.ra);
            this.a += 2;
            return a
        }
        H() {
            let a = this.j.getInt32(this.a, this.ra);
            this.a += 4;
            return a
        }
        Ob() {
            let a = this.j.getUint32(this.a, this.ra);
            this.a += 4;
            return a
        }
        Ih() {
            let a = this.j.getFloat32(this.a, this.ra);
            this.a += 4;
            return a
        }
        o() {
            let a = this.j.getFloat64(this.a, this.ra);
            this.a += 8;
            return a
        }
        mb() {
            let a = this.a, b = 0, c, d = 0;
            do
                c = this.j.getUint8(a + b),
                5 > b && (d |= (c & 127) << 7 * b >>> 0),
                ++b;
            while (0 != (c & 128));
            this.a += b;
            return d | 0
        }
        Zc(a) {
            let b = this.a, c, d = "";
            for (a = b + a; b < a; )
                c = L.Bg(this.j, b),
                b += c.length,
                d += String.fromCodePoint(c.char);
            if (b != a)
                throw t.s("Actual string length differs from the specified: " + (b - a) + " bytes");
            this.a = b;
            return d
        }
        Ya() {
            let a = this.mb();
            return 0 >= a ? null : this.Zc(a - 1)
        }
        lb() {
            return this.Zc(this.mb())
        }
        rf() {
            let a = this.lb();
            return JSON.parse(a)
        }
        static Bg(a, b) {
            var c = a.getUint8(b);
            let d, e, f, g, k = b;
            if (0 == (c & 128))
                ++b;
            else if (192 == (c & 224))
                d = a.getUint8(b + 1),
                c = (c & 31) << 6 | d & 63,
                b += 2;
            else if (224 == (c & 240))
                d = a.getUint8(b + 1),
                e = a.getUint8(b + 2),
                c = (c & 15) << 12 | (d & 63) << 6 | e & 63,
                b += 3;
            else if (240 == (c & 248))
                d = a.getUint8(b + 1),
                e = a.getUint8(b + 2),
                f = a.getUint8(b + 3),
                c = (c & 7) << 18 | (d & 63) << 12 | (e & 63) << 6 | f & 63,
                b += 4;
            else if (248 == (c & 252))
                d = a.getUint8(b + 1),
                e = a.getUint8(b + 2),
                f = a.getUint8(b + 3),
                g = a.getUint8(b + 4),
                c = (c & 3) << 24 | (d & 63) << 18 | (e & 63) << 12 | (f & 63) << 6 | g & 63,
                b += 5;
            else if (252 == (c & 254))
                d = a.getUint8(b + 1),
                e = a.getUint8(b + 2),
                f = a.getUint8(b + 3),
                g = a.getUint8(b + 4),
                a = a.getUint8(b + 5),
                c = (c & 1) << 30 | (d & 63) << 24 | (e & 63) << 18 | (f & 63) << 12 | (g & 63) << 6 | a & 63,
                b += 6;
            else
                throw t.s("Cannot decode UTF8 character at offset " + b + ": charCode (" + c + ") is invalid");
            return {
                char: c,
                length: b - k
            }
        }
    }
    class ab {
        constructor(a, b) {
            this.Yf = 0;
            this.version = 1;
            this.od = 0;
            this.Gb = A.aa(1E3);
            this.uc = A.aa(16384);
            this.version = b;
            let c = this.od = a.da;
            this.he = a;
            a.Fa.G(this.uc);
            let d = this;
            a.yb = function(f) {
                let g = a.da;
                d.uc.Da(g - c);
                c = g;
                d.uc.Oa(f.B);
                m.le(f, d.uc)
            }
            ;
            this.Gb.Oa(0);
            let e = this.od;
            a.Fa.Bf(function(f) {
                let g = a.da;
                d.Gb.Da(g - e);
                d.Gb.f(f);
                d.Yf++;
                e = g
            })
        }
        stop() {
            this.he.yb = null;
            this.he.Fa.Bf(null);
            this.Gb.j.setUint16(0, this.Yf, this.Gb.ra);
            this.Gb.ob(this.uc.Bb());
            let a = pako.deflateRaw(this.Gb.Bb())
              , b = A.aa(a.byteLength + 32);
            b.$d("HBR2");
            b.xa(this.version);
            b.xa(this.he.da - this.od);
            b.ob(a);
            return b.Bb()
        }
    }
    class q {
        static Uf(a) {
            if (null == a)
                return null;
            if (a instanceof Array)
                return Array;
            {
                let b = a.h;
                if (null != b)
                    return b;
                a = q.ye(a);
                return null != a ? q.ig(a) : null
            }
        }
        static Yb(a, b) {
            if (null == a)
                return "null";
            if (5 <= b.length)
                return "<...>";
            var c = typeof a;
            "function" == c && (a.b || a.ve) && (c = "object");
            switch (c) {
            case "function":
                return "<function>";
            case "object":
                if (a.Xb) {
                    var d = bb[a.Xb].ue[a.Ad];
                    c = d.Re;
                    if (d.Ae) {
                        b += "\t";
                        var e = []
                          , f = 0;
                        for (d = d.Ae; f < d.length; ) {
                            let g = d[f];
                            f += 1;
                            e.push(q.Yb(a[g], b))
                        }
                        a = e;
                        return c + "(" + a.join(",") + ")"
                    }
                    return c
                }
                if (a instanceof Array) {
                    c = "[";
                    b += "\t";
                    e = 0;
                    for (f = a.length; e < f; )
                        d = e++,
                        c += (0 < d ? "," : "") + q.Yb(a[d], b);
                    return c += "]"
                }
                try {
                    e = a.toString
                } catch (g) {
                    return "???"
                }
                if (null != e && e != Object.toString && "function" == typeof e && (c = a.toString(),
                "[object Object]" != c))
                    return c;
                c = "{\n";
                b += "\t";
                e = null != a.hasOwnProperty;
                f = null;
                for (f in a)
                    e && !a.hasOwnProperty(f) || "prototype" == f || "__class__" == f || "__super__" == f || "__interfaces__" == f || "__properties__" == f || (2 != c.length && (c += ", \n"),
                    c += b + f + " : " + q.Yb(a[f], b));
                b = b.substring(1);
                return c += "\n" + b + "}";
            case "string":
                return a;
            default:
                return String(a)
            }
        }
        static we(a, b) {
            for (; ; ) {
                if (null == a)
                    return !1;
                if (a == b)
                    return !0;
                let c = a.sb;
                if (null != c && (null == a.J || a.J.sb != c)) {
                    let d = 0
                      , e = c.length;
                    for (; d < e; ) {
                        let f = c[d++];
                        if (f == b || q.we(f, b))
                            return !0
                    }
                }
                a = a.J
            }
        }
        static gg(a, b) {
            if (null == b)
                return !1;
            switch (b) {
            case Array:
                return a instanceof Array;
            case $a:
                return "boolean" == typeof a;
            case tb:
                return null != a;
            case z:
                return "number" == typeof a;
            case Ha:
                return "number" == typeof a ? (a | 0) === a : !1;
            case String:
                return "string" == typeof a;
            default:
                if (null != a)
                    if ("function" == typeof b) {
                        if (q.fg(a, b))
                            return !0
                    } else {
                        if ("object" == typeof b && q.hg(b) && a instanceof b)
                            return !0
                    }
                else
                    return !1;
                return b == ub && null != a.b || b == vb && null != a.ve ? !0 : null != a.Xb ? bb[a.Xb] == b : !1
            }
        }
        static fg(a, b) {
            return a instanceof b ? !0 : b.xe ? q.we(q.Uf(a), b) : !1
        }
        static l(a, b) {
            if (null == a || q.gg(a, b))
                return a;
            throw t.s("Cannot cast " + Ra.pe(a) + " to " + Ra.pe(b));
        }
        static ye(a) {
            a = q.jg.call(a).slice(8, -1);
            return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
        }
        static hg(a) {
            return null != q.ye(a)
        }
        static ig(a) {
            return ua[a]
        }
    }
    class J {
        constructor() {
            this.m = 32;
            this.c = 63;
            this.i = 1;
            this.ka = 0;
            this.X = new I(0,0)
        }
        G(a) {
            let b = this.X;
            a.g(b.x);
            a.g(b.y);
            a.g(this.ka);
            a.g(this.i);
            a.w(this.c);
            a.w(this.m)
        }
        pa(a) {
            let b = this.X;
            b.x = a.o();
            b.y = a.o();
            this.ka = a.o();
            this.i = a.o();
            this.c = a.H();
            this.m = a.H()
        }
    }
    class Ga {
        constructor() {
            this.S = 0;
            this.oc = 1 / 0;
            this.Ka = this.Va = 100;
            this.Fc = this.Gc = 0
        }
        G(a) {
            a.f(this.Fc);
            a.f(this.Gc);
            a.g(this.Ka);
            a.g(this.Va);
            a.g(this.oc);
            a.w(this.S)
        }
        pa(a) {
            this.Fc = a.C();
            this.Gc = a.C();
            this.Ka = a.o();
            this.Va = a.o();
            this.oc = a.o();
            this.S = a.H()
        }
        Ba(a) {
            var b = a[this.Fc];
            a = a[this.Gc];
            if (null != b && null != a) {
                var c = b.a
                  , d = a.a
                  , e = c.x - d.x;
                c = c.y - d.y;
                var f = Math.sqrt(e * e + c * c);
                if (!(0 >= f)) {
                    e /= f;
                    c /= f;
                    d = b.L / (b.L + a.L);
                    d != d && (d = .5);
                    if (this.Ka >= this.Va) {
                        var g = this.Ka;
                        var k = 0
                    } else if (f <= this.Ka)
                        g = this.Ka,
                        k = 1;
                    else if (f >= this.Va)
                        g = this.Va,
                        k = -1;
                    else
                        return;
                    f = g - f;
                    if (0 == 0 * this.oc)
                        d = this.oc * f * .5,
                        e *= d,
                        c *= d,
                        k = d = b.u,
                        b = b.L,
                        d.x = k.x + e * b,
                        d.y = k.y + c * b,
                        d = b = a.u,
                        a = a.L,
                        b.x = d.x + -e * a,
                        b.y = d.y + -c * a;
                    else {
                        g = f * d;
                        var l = b.a
                          , p = b.a;
                        l.x = p.x + e * g * .5;
                        l.y = p.y + c * g * .5;
                        p = l = a.a;
                        f -= g;
                        l.x = p.x - e * f * .5;
                        l.y = p.y - c * f * .5;
                        f = b.u;
                        g = a.u;
                        f = e * (f.x - g.x) + c * (f.y - g.y);
                        0 >= f * k && (d *= f,
                        b = k = b.u,
                        k.x = b.x - e * d,
                        k.y = b.y - c * d,
                        a = b = a.u,
                        d = f - d,
                        b.x = a.x + e * d,
                        b.y = a.y + c * d)
                    }
                }
            }
        }
    }
    class Ja {
        constructor(a, b, c, d) {
            this.xc = new Set;
            this.Zb = new Set;
            this.cd = this.jc = this.zf = !1;
            this.Za = null;
            this.kc = this.R = "";
            this.Nh = 5E4;
            this.Mh = 1E4;
            this.xb = new Map;
            this.Yh = a;
            this.Cd = b;
            this.rg = c;
            this.kc = d;
            null == this.kc && (this.kc = "");
            this.Td()
        }
        Sd(a) {
            if (null != this.Za || null != a) {
                if (null != this.Za && null != a && this.Za.byteLength == a.byteLength) {
                    let c = new Uint8Array(this.Za)
                      , d = new Uint8Array(a)
                      , e = !1
                      , f = 0
                      , g = this.Za.byteLength;
                    for (; f < g; ) {
                        let k = f++;
                        if (c[k] != d[k]) {
                            e = !0;
                            break
                        }
                    }
                    if (!e)
                        return
                }
                this.Za = a.slice(0);
                this.cd = !0;
                var b = this;
                null != this.ta && 1 == this.ta.readyState && null == this.dd && (this.Pd(),
                this.dd = window.setTimeout(function() {
                    b.dd = null;
                    1 == b.ta.readyState && b.cd && b.Pd()
                }, 1E4))
            }
        }
        Rd(a) {
            function b() {
                null != c.ta && 1 == c.ta.readyState && c.jc != c.zf && c.xf();
                c.uf = null
            }
            this.jc = a;
            let c = this;
            null == this.uf && (b(),
            this.uf = window.setTimeout(b, 1E3))
        }
        Td(a) {
            function b(e) {
                e = e.sitekey;
                if (null == e)
                    throw t.s(null);
                null != d.fc && d.fc(e, function(f) {
                    d.Td(f)
                })
            }
            function c(e) {
                let f = e.url;
                if (null == f)
                    throw t.s(null);
                e = e.token;
                if (null == e)
                    throw t.s(null);
                d.ta = new WebSocket(f + "?token=" + e);
                d.ta.binaryType = "arraybuffer";
                d.ta.onopen = function() {
                    d.Vg()
                }
                ;
                d.ta.onclose = function(g) {
                    d.zd(4001 != g.code)
                }
                ;
                d.ta.onerror = function() {
                    d.zd(!0)
                }
                ;
                d.ta.onmessage = gb(d, d.Ug)
            }
            null == a && (a = "");
            let d = this;
            T.Ch(this.Yh, "token=" + this.kc + "&rcr=" + a, T.ag).then(function(e) {
                switch (e.action) {
                case "connect":
                    c(e);
                    break;
                case "recaptcha":
                    b(e)
                }
            }).catch(function() {
                d.zd(!0)
            })
        }
        Vg() {
            null != this.Za && this.Pd();
            0 != this.jc && this.xf();
            let a = this;
            this.xh = window.setInterval(function() {
                a.Sh()
            }, 4E4)
        }
        Ug(a) {
            a = new L(new DataView(a.data),!1);
            switch (a.C()) {
            case 1:
                this.Sg(a);
                break;
            case 4:
                this.Ng(a);
                break;
            case 5:
                this.Pg(a);
                break;
            case 6:
                this.Rg(a)
            }
        }
        Sg(a) {
            let b = a.Ob(), c = R.ri(a.La(a.C())), d, e, f;
            try {
                a = new L(new DataView(pako.inflateRaw(a.La()).buffer),!1);
                d = 0 != a.C();
                e = a.lb();
                let g = a.rf()
                  , k = []
                  , l = 0;
                for (; l < g.length; )
                    k.push(new RTCIceCandidate(g[l++]));
                f = k
            } catch (g) {
                this.mc(b, 0);
                return
            }
            this.Tg(b, c, e, f, a, d)
        }
        Tg(a, b, c, d, e, f) {
            if (16 <= this.xb.size)
                this.mc(a, 4104);
            else if (this.xc.has(b))
                this.mc(a, 4102);
            else {
                for (var g = [], k = 0; k < d.length; ) {
                    let r = Ja.Pe(d[k++]);
                    if (null != r) {
                        if (this.Zb.has(r)) {
                            this.mc(a, 4102);
                            return
                        }
                        g.push(r)
                    }
                }
                if (null != this.He && (k = new L(e.j),
                k.a = e.a,
                e = this.He(b, k),
                1 == e.Ad)) {
                    this.mc(a, e.reason);
                    return
                }
                var l = new Ea(a,this.Cd,this.rg);
                f && (l.Je = 2500);
                l.Qb = g;
                l.gb = b;
                this.xb.set(a, l);
                var p = this;
                l.Id = function() {
                    p.nc(0, l, null);
                    p.xb.delete(l.R)
                }
                ;
                l.Hd = function() {
                    p.xb.delete(l.R);
                    p.nc(0, l, null);
                    null != p.df && p.df(new Wa(l))
                }
                ;
                l.ef = function(r) {
                    p.Th(l, r, l.Bd);
                    l.Se.then(function() {
                        p.nc(0, l, null)
                    });
                    l.Jd = function(x) {
                        p.Rh(l, x)
                    }
                }
                ;
                l.ai();
                l.yg(new RTCSessionDescription({
                    sdp: c,
                    type: "offer"
                }), d)
            }
        }
        Ng(a) {
            let b = a.Ob(), c;
            try {
                a = new L(new DataView(pako.inflateRaw(a.La()).buffer),!1),
                c = new RTCIceCandidate(a.rf())
            } catch (d) {
                return
            }
            this.Og(b, c)
        }
        Og(a, b) {
            a = this.xb.get(a);
            if (null != a) {
                let c = Ja.Pe(b);
                if (null != c && (a.Qb.push(c),
                this.Zb.has(c)))
                    return;
                a.Ce(b)
            }
        }
        Pg(a) {
            this.R = a.Zc(a.C());
            null != this.Wc && this.Wc(this.R)
        }
        Rg(a) {
            this.kc = a.Zc(a.j.byteLength - a.a)
        }
        nc(a, b, c) {
            if (!b.hf) {
                0 == a && (b.hf = !0);
                var d = b.R;
                b = A.aa(32, !1);
                b.f(a);
                b.xa(d);
                null != c && (a = pako.deflateRaw(c.Bb()),
                b.ob(a));
                this.ta.send(b.Rb())
            }
        }
        mc(a, b) {
            let c = A.aa(16, !1);
            c.f(0);
            c.xa(a);
            c.Oa(b);
            this.ta.send(c.Rb())
        }
        Sh() {
            let a = A.aa(1, !1);
            a.f(8);
            this.ta.send(a.Rb())
        }
        Pd() {
            this.cd = !1;
            let a = A.aa(256, !1);
            a.f(7);
            null != this.Za && a.Nf(this.Za);
            this.ta.send(a.Rb())
        }
        xf() {
            let a = A.aa(2, !1);
            a.f(9);
            a.f(this.jc ? 1 : 0);
            this.ta.send(a.Rb());
            this.zf = this.jc
        }
        Th(a, b, c) {
            let d = A.aa(32, !1);
            d.Sb(b.sdp);
            d.Of(c);
            this.nc(1, a, d)
        }
        Rh(a, b) {
            let c = A.aa(32, !1);
            c.Of(b);
            this.nc(4, a, c)
        }
        Eg() {
            let a = this.xb.values()
              , b = a.next();
            for (; !b.done; ) {
                let c = b.value;
                b = a.next();
                c.cb()
            }
            this.xb.clear()
        }
        zd(a) {
            this.Eg();
            window.clearTimeout(this.dd);
            this.dd = null;
            this.cd = !1;
            window.clearInterval(this.xh);
            window.clearTimeout(this.Oh);
            let b = this;
            a && (this.Oh = window.setTimeout(function() {
                b.Td()
            }, this.Mh + Math.random() * this.Nh | 0))
        }
        ng(a) {
            let b = 0
              , c = a.Qb;
            for (; b < c.length; )
                this.Zb.add(c[b++]);
            null != a.gb && this.xc.add(a.gb);
            return {
                yi: a.Qb,
                oi: a.gb
            }
        }
        wd() {
            this.Zb.clear();
            this.xc.clear()
        }
        vd(a) {
            let b = 0
              , c = a.yi;
            for (; b < c.length; )
                this.Zb.delete(c[b++]);
            this.xc.delete(a.oi)
        }
        static Pe(a) {
            try {
                let b = rb.vh(a.candidate);
                if ("srflx" == b.gi)
                    return b.Zg
            } catch (b) {}
            return null
        }
    }
    class R {
        static pb(a, b) {
            return a.length <= b ? a : P.substr(a, 0, b)
        }
        static ri(a) {
            let b = ""
              , c = 0
              , d = a.byteLength;
            for (; c < d; )
                b += nb.ui(a[c++]);
            return b
        }
    }
    class Sa {
        constructor() {
            this.A = []
        }
        G(a) {
            a.f(this.A.length);
            let b = 0
              , c = this.A.length;
            for (; b < c; ) {
                let d = b++
                  , e = this.A[d];
                e.kf = d;
                e.G(a)
            }
        }
        Ba(a) {
            for (var b = 0, c = this.A; b < c.length; ) {
                var d = c[b];
                ++b;
                var e = d.a
                  , f = d.a
                  , g = d.u;
                e.x = f.x + g.x * a;
                e.y = f.y + g.y * a;
                f = e = d.u;
                g = d.la;
                d = d.ga;
                e.x = (f.x + g.x) * d;
                e.y = (f.y + g.y) * d
            }
            a = 0;
            for (b = this.A.length; a < b; ) {
                d = a++;
                c = this.A[d];
                d += 1;
                for (e = this.A.length; d < e; )
                    f = this.A[d++],
                    0 != (f.c & c.m) && 0 != (f.m & c.c) && c.ug(f);
                if (0 != c.L) {
                    d = 0;
                    for (e = this.Y; d < e.length; )
                        if (f = e[d],
                        ++d,
                        0 != (f.c & c.m) && 0 != (f.m & c.c)) {
                            g = f.X;
                            var k = c.a;
                            g = f.ka - (g.x * k.x + g.y * k.y) + c.M;
                            if (0 < g) {
                                var l = k = c.a
                                  , p = f.X;
                                k.x = l.x + p.x * g;
                                k.y = l.y + p.y * g;
                                g = c.u;
                                k = f.X;
                                g = g.x * k.x + g.y * k.y;
                                0 > g && (g *= c.i * f.i + 1,
                                l = k = c.u,
                                f = f.X,
                                k.x = l.x - f.x * g,
                                k.y = l.y - f.y * g)
                            }
                        }
                    d = 0;
                    for (e = this.I; d < e.length; )
                        f = e[d],
                        ++d,
                        0 != (f.c & c.m) && 0 != (f.m & c.c) && c.vg(f);
                    d = 0;
                    for (e = this.v; d < e.length; )
                        if (f = e[d],
                        ++d,
                        0 != (f.c & c.m) && 0 != (f.m & c.c) && (k = c.a,
                        l = f.a,
                        g = k.x - l.x,
                        k = k.y - l.y,
                        l = g * g + k * k,
                        0 < l && l <= c.M * c.M)) {
                            l = Math.sqrt(l);
                            g /= l;
                            k /= l;
                            l = c.M - l;
                            let r = p = c.a;
                            p.x = r.x + g * l;
                            p.y = r.y + k * l;
                            l = c.u;
                            l = g * l.x + k * l.y;
                            0 > l && (l *= c.i * f.i + 1,
                            p = f = c.u,
                            f.x = p.x - g * l,
                            f.y = p.y - k * l)
                        }
                }
            }
            for (a = 0; 2 > a; )
                for (++a,
                b = 0,
                c = this.Ta; b < c.length; )
                    c[b++].Ba(this.A)
        }
    }
    class Fa {
        constructor() {
            this.pc = u.na;
            this.K = new I(0,0);
            this.F = new I(0,0)
        }
        G(a) {
            var b = this.F;
            a.g(b.x);
            a.g(b.y);
            b = this.K;
            a.g(b.x);
            a.g(b.y);
            a.f(this.pc.R)
        }
        pa(a) {
            var b = this.F;
            b.x = a.o();
            b.y = a.o();
            b = this.K;
            b.x = a.o();
            b.y = a.o();
            a = a.Ld();
            this.pc = 1 == a ? u.fa : 2 == a ? u.sa : u.na
        }
    }
    class F {
        static mh() {
            pb.vi();
            Y.Lg().then(function(a) {
                F.Me = a
            }, function() {}).then(function() {
                window.parent.HBInit = F.$h;
                let a = window.parent.onHBLoaded;
                null != a && a()
            });
            F.Ph = window.document.getElementById("roomlink")
        }
        static Wh(a, b, c) {
            null == F.$c && (F.$c = window.document.getElementById("recaptcha"),
            F.Jh = a.render(F.$c, {
                sitekey: b,
                callback: function(d) {
                    null != F.Md && F.Md(d)
                }
            }));
            F.$c.hidden = !1;
            a.reset(F.Jh);
            F.Md = function(d) {
                window.setTimeout(function() {
                    F.$c.hidden = !0;
                    c(d)
                }, 1E3);
                F.Md = null
            }
        }
        static oh(a, b) {
            return "https://www.haxball.com/play?c=" + a + (b ? "&p=1" : "")
        }
        static $h(a) {
            function b() {
                if (!l) {
                    // window.parent.console.log("b has been triggered!")
                    var h = new Va;
                    h.ii = 9;
                    h.oa = y.Nd;
                    h.ba = y.ba.length - (x ? 0 : 1);
                    h.rh = D.Uc;
                    h.hb = Ka.hb;
                    h.kb = null != D.kb;
                    h.Pc = Ka.Pc;
                    h.Rc = Ka.Rc;
                  
                    var n = A.aa(16);
                    h.G(n);
                    // window.parent.console.log(n)
                    D.Sd(n.Xd())
                }
            }
            function c(h) {
                lb.then(function() {
                    D.lc(h)
                })
            }
            function d(h) {
                return null == h ? null : {
                    x: h.a.x,
                    y: h.a.y,
                    xspeed: h.u.x,
                    yspeed: h.u.y,
                    xgravity: h.la.x,
                    ygravity: h.la.y,
                    radius: h.M,
                    bCoeff: h.i,
                    invMass: h.L,
                    damping: h.ga,
                    color: h.S,
                    cMask: h.c,
                    cGroup: h.m,
                    test: window.parent.console.log(h)
                }

            }
            function e() {
                return null == y.D ? null : {
                    red: y.D.zb,
                    blue: y.D.vb,
                    time: y.D.Lb,
                    scoreLimit: y.D.ab,
                    timeLimit: 60 * y.D.Na
                }
            }
            function f(h) {
                if (null == h)
                    return null;
                let n = null
                  , w = h.N;
                null != w && (n = {
                    x: w.a.x,
                    y: w.a.y
                });
                return {
                    name: h.oa,
                    team: h.ja.R,
                    id: h.ma,
                    admin: h.Tb,
                    position: n
                }
            }
            function g(h, n) {
                h = a[h];
                return null == h ? n : q.l(h, String)
            }
            function k(h, n) {
                h = a[h];
                return null == h ? n : h
            }
            if (F.Af)
                throw t.s("Can't init twice");
            F.Af = !0;
            let l = !k("public", !1);
            var p = g("roomName", "Headless Room");
            let r = g("playerName", "Host")
              , x = k("noPlayer", !1)
              , C = q.l(k("maxPlayers", 12), Ha)
              , N = g("password", null)
              , sa = g("token", null)
              , sb = k("geo", null)
              , Ka = F.Me;
            if (null != sb && (Ka = Y.Ne(sb),
            3 < Ka.hb.length))
                throw t.s("Invalid country code");
            let y = new Pa;
            y.Nd = p;
            x || (p = new wa,
            p.oa = r,
            p.Tb = !0,
            p.country = Ka.hb,
            y.ba.push(p));
            let D = new Ua({
                iceServers: ya.Cd,
                xi: ya.Ee + "api/host",
                state: y,
                version: 9,
                zi: sa
            });
            D.Uc = 2 > C ? 2 : 30 < C ? 30 : C;
            D.kb = N;
            let lb = Promise.resolve();
            b();
            let cb = null
              , K = {
                sendChat: function(h, n) {
                    let w = new ma;
                    w.Pa = h;
                    null != n ? lb.then(function() {
                        D.yf(w, n)
                    }) : c(w)
                },
                sendAnnouncement: function(h, n, w, G, H) {
                    G = {
                        bold: 1,
                        italic: 2,
                        small: 3,
                        "small-bold": 4,
                        "small-italic": 5
                    }[G];
                    null == G && (G = 0);
                    null == w && (w = -1);
                    null == H && (H = 1);
                    let ja = Z.V(h, w, G, H);
                    null != n ? lb.then(function() {
                        D.yf(ja, n)
                    }) : c(ja)
                },
                setPlayerAdmin: function(h, n) {
                    c(ca.V(h, n))
                },
                setPlayerTeam: function(h, n) {
                    c(ba.V(h, 1 == n ? u.fa : 2 == n ? u.sa : u.na))
                },
                setPlayerAvatar: function(h, n) {
                    c(ha.V(h, n))
                },
                kickPlayer: function(h, n, w) {
                    null == n && (n = "");
                    c(S.V(h, n, w))
                },
                clearBan: function(h) {
                    D.vd(h)
                },
                clearBans: function() {
                    D.wd()
                },
                setScoreLimit: function(h) {
                    c(U.V(0, h))
                },
                setTimeLimit: function(h) {
                    c(U.V(1, h))
                },
                setCustomStadium: function(h) {
                    let n = new v;
                    try {
                        n.eh(h)
                    } catch (w) {
                        throw t.s(t.Ub(w).Hb());
                    }
                    c(V.V(n))
                },
                setDefaultStadium: function(h) {
                    let n = v.yd()
                      , w = null
                      , G = 0;
                    for (; G < n.length; ) {
                        let H = n[G];
                        ++G;
                        if (H.oa == h) {
                            w = H;
                            break
                        }
                    }
                    if (null == w)
                        throw t.s("Stadium doesn't exist");
                    c(V.V(w))
                },
                setDiscProperties: function(h, n) {
                    c(M.Xf(h, !1, n))
                },
                setPlayerDiscProperties: function(h, n) {
                    c(M.Xf(h, !0, n))
                },
                setTeamColors: function(h, n, w, G) {
                    let H = new ra
                      , ja = new X;
                    H.md = ja;
                    H.ja = 1 == h ? u.fa : 2 == h ? u.sa : u.na;
                    ja.Qa = [];
                    var db = G.length;
                    h = 0;
                    for (db = 3 > db ? db : 3; h < db; )
                        ja.Qa.push(G[h++] | 0);
                    ja.Vd = w | 0;
                    ja.De = 256 * n / 360 | 0;
                    c(H)
                },
                setKickRateLimit: function(h, n, w) {
                    null == h && (h = 2);
                    null == n && (n = 0);
                    null == w && (w = 0);
                    h = fa.V(h, n, w);
                    c(h)
                },
                startGame: function() {
                    c(new na)
                },
                stopGame: function() {
                    c(new oa)
                },
                pauseGame: function(h) {
                    let n = new pa;
                    n.tc = h;
                    c(n)
                },
                setTeamsLock: function(h) {
                    let n = new qa;
                    n.newValue = h;
                    c(n)
                },
                setPassword: function(h) {
                    D.kb = null == h ? null : q.l(h, String);
                    b()
                },
                setRequireRecaptcha: function(h) {
                    D.Rd(q.l(h, $a))
                },
                getPlayerList: function() {
                    let h = []
                      , n = 0
                      , w = y.ba;
                    for (; n < w.length; )
                        h.push(f(w[n++]));
                    return h
                },
                getPlayer: function(h) {
                    h = y.T(h);
                    return null == h ? null : f(h)
                },
                getScores: function() {
                    return e()
                },
                getBallPosition: function() {
                    var h = y.D;
                    if (null == h)
                        return null;
                    h = h.ia.A[0].a;
                    return {
                        x: h.x,
                        y: h.y
                    }
                },
                getPlayerDiscProperties: function(h) {
                    if (null == y.D)
                        return null;
                    h = y.T(h);
                    return null == h ? null : d(h.N)
                },
                getDiscProperties: function(h) {
                    let n = y.D;
                    return null == n ? null : d(n.ia.A[h])
                },
                getDiscCount: function() {
                    let h = y.D;
                    return null == h ? 0 : h.ia.A.length
                },
                startRecording: function() {
                    cb = new ab(D,3)
                },
                stopRecording: function() {
                    if (null == cb)
                        return null;
                    let h = cb.stop();
                    cb = null;
                    return h
                },
                reorderPlayers: function(h, n) {
                    c(ea.V(h, n))
                },
                CollisionFlags: {
                    ball: 1,
                    red: 2,
                    blue: 4,
                    redKO: 8,
                    blueKO: 16,
                    wall: 32,
                    kick: 64,
                    score: 128,
                    c0: 268435456,
                    c1: 536870912,
                    c2: 1073741824,
                    c3: -2147483648,
                    all: 63
                }
            };
            D.fc = function(h, n) {
                Ia.dh().then(function(w) {
                    F.Wh(w, h, n)
                })
            }
            ;
            window.setInterval(function() {
                D.Ba()
            }, 50);
            window.setInterval(function() {
                D.lc(da.V(D))
            }, 3E3);
            D.cf = function(h) {
                null != y.T(h) && D.lc(S.V(h, "Bad actor", !1))
            }
            ;
            D.sh = function(h, n) {
                // window.parent.console.log("Someone actually joined")
                let w = n.lb();
                // let titles = ["Çömez ", "Amatör ", "Toy ", "Köftehor ", "Çaylak ", "Yeniyetme "]
                // let RNG = Math.floor(Math.random()*titles.length)
                // let tempName = titles[RNG]+w
                // let tempName;
                let auth = D.wb.get(h).Ag
                let ip = D.wb.get(h).hc.Qb[0]
                PlayerList[h] = {
                    name: "feco"
                }
                // if (window.parent.bannedNameAuth.has(auth)) tempName = window.parent.bannedNameTarget
                // if (window.parent.VIPAuth.has(auth)) tempName = w
                // w = tempName
                if (35 < w.length)
                    throw t.s("name too long");
                let G = n.lb();
                if (3 < G.length)
                    throw t.s("country too long");
                n = n.Ya();
                if (null != n && 2 < n.length)
                    throw t.s("avatar too long");
                D.lc(aa.V(h, w, G, n));
                b()
            }
            ;
            D.th = function(h) {
                null != y.T(h) && D.lc(S.V(h, null, !1))
            }
            ;
            D.Wc = function(h) {
                // room link
                h = F.oh(h, null != D.kb);
                F.Ph.innerHTML = '<p>Room Link: <a href="' + h + '">' + h + "</a></p>";
                {
                    let n = K.onRoomLink;
                    null != n && n(h)
                }
            }
            ;
            y.yh = function(h) {
                var n = D.wb.get(h.ma)
                  , w = null
                  , G = null;
                null != n && (w = n.Ag,
                G = n.hc.gb);
                n = w;
                w = K.onPlayerJoin;
                null != w && (h = f(h),
                h.auth = n,
                h.conn = G,
                w(h))
            }
            ;
            y.Hf = function() {
                {
                    let h = K.onTeamVictory;
                    null != h && null != y.D && h(e())
                }
            }
            ;
            y.mf = function(h, n) {
                let w = K.onPlayerChat;
                return null == w ? !0 : 0 != w(f(h), n)
            }
            ;
            y.pf = function(h) {
                let n = K.onPlayerBallKick;
                null != n && n(f(h))
            }
            ;
            y.Gf = function(h) {
                let n = K.onTeamGoal;
                null != n && null != y.D && n(h.R)
            }
            ;
            y.Ef = function(h) {
                let n = K.onGameStart;
                null != n && n(f(h))
            }
            ;
            y.hd = function(h) {
                let n = K.onGameStop;
                null != n && n(f(h))
            }
            ;
            y.Ah = function(h, n) {
                let w = K.onPlayerTeamChange;
                null != w && w(f(n), f(h))
            }
            ;
            y.lf = function(h, n) {
                let w = K.onPlayerAdminChange;
                null != w && w(f(n), f(h))
            }
            ;
            y.Hg = function() {
                let h = K.onGameTick;
                null != h && h()
            }
            ;
            y.wh = function(h, n) {
                n = K[n ? "onGamePause" : "onGameUnpause"];
                null != n && n(f(h))
            }
            ;
            y.qf = function() {
                let h = K.onPositionsReset;
                null != h && h()
            }
            ;
            y.nf = function(h) {
                let n = K.onPlayerActivity;
                null != n && n(f(h))
            }
            ;
            y.Cf = function(h, n) {
                let w = K.onStadiumChange;
                null != w && w(n.oa, f(h))
            }
            ;
            y.zh = function(h, n, w, G) {
                b();
                var H = K.onPlayerLeave;
                null != H && H(f(h));
                null != n && (H = null,
                null != G && (H = G.oa),
                D.Fg(h.ma, n, H, w),
                H = K.onPlayerKicked,
                null != H && H(f(h), n, w, f(G)))
            }
            ;
            y.ah = function(h, n, w, G) {
                let H = K.onKickRateLimitSet;
                null != H && H(n, w, G, f(h))
            }
            ;
            return K
        }
    }
    class Za {
        static va(a, b, c, d, e) {
            null != a && a(b, c, d, e)
        }
    }
    class eb {
        static va(a, b, c) {
            null != a && a(b, c)
        }
    }
    class O {
        constructor(a) {
            O.Ja || this.Aa(a)
        }
        Aa(a) {
            this.da = 0;
            this.Fa = a
        }
    }
    class la extends m {
        constructor() {
            super()
        }
        apply(a) {
            a.wg(this.ld)
        }
        P(a) {
            a.Da(this.ld.byteLength);
            a.Nf(this.ld)
        }
        W(a) {
            this.ld = a.Hh(a.mb())
        }
    }
    class La extends O {
        constructor(a) {
            O.Ja ? super() : (O.Ja = !0,
            super(),
            O.Ja = !1,
            this.Aa(a))
        }
        Aa(a) {
            this.jd = this.Ra = 0;
            this.Od = new Xa;
            this.Cg = 0;
            this.te = .06;
            super.Aa(a)
        }
        kg(a) {
            let b = this.Od.list
              , c = 0
              , d = b.length
              , e = 0;
            for (; e < a; ) {
                for (++e; c < d; ) {
                    let f = b[c];
                    if (f.eb != this.da)
                        break;
                    f.apply(this.Fa);
                    null != this.yb && this.yb(f);
                    this.Ra++;
                    ++c
                }
                this.Fa.Ba(1);
                this.jd += this.Ra;
                this.Ra = 0;
                this.da++
            }
            for (; c < d; ) {
                a = b[c];
                if (a.eb != this.da || a.fb != this.Ra)
                    break;
                a.apply(this.Fa);
                null != this.yb && this.yb(a);
                this.Ra++;
                ++c
            }
            b.splice(0, c)
        }
        vf(a) {
            a.eb == this.da && a.fb <= this.Ra ? (a.fb = this.Ra++,
            a.apply(this.Fa),
            null != this.yb && this.yb(a)) : this.Od.wi(a)
        }
    }
    class Ua extends La {
        constructor(a) {
            O.Ja = !0;
            super();
            O.Ja = !1;
            this.Aa(a)
        }
        Aa(a) {
            this.yc = new Map;
            this.kb = null;
            this.Uc = 32;
            this.wb = new Map;
            this.Ga = [];
            this.wf = 2;
            this.tg = 600;
            super.Aa(a.state);
            this.ph = a.xi;
            this.ki = a.version;
            this.qh = 1;
            this.We = 0;
            this.Ff = window.performance.now();
            this.Wa = new Ja(this.ph,a.iceServers,ib.channels,a.zi);
            this.Wa.He = gb(this, this.Qg);
            let b = this;
            this.Wa.df = function(c) {
                b.uh(c)
            }
            ;
            this.Wa.Wc = function(c) {
                Qa.va(b.Wc, c)
            }
            ;
            this.Wa.fc = function(c, d) {
                null != b.fc && b.fc(c, d)
            }
        }
        Fg(a, b, c, d) {
            let e = this.wb.get(a);
            if (null != e) {
                if (d) {
                    let f = this.Wa.ng(e.hc);
                    this.yc.set(a, f)
                }
                a = A.aa();
                a.f(5);
                a.f(d ? 1 : 0);
                a.Sb(b);
                null == c && (c = "");
                a.Sb(c);
                e.nb(a);
                e.hc.cb()
            }
        }
        wd() {
            this.Wa.wd();
            this.yc.clear()
        }
        vd(a) {
            let b = this.yc.get(a);
            null != b && this.Wa.vd(b);
            this.yc.delete(a)
        }
        Sd(a) {
            this.Wa.Sd(a)
        }
        Rd(a) {
            this.Wa.Rd(a)
        }
        lc(a) {
            a.B = 0;
            let b = this.da + this.wf + this.Cg;
            a.Sf.delay || (b = this.da);
            a.eb = b;
            this.vf(a);
            this.Qd();
            0 < this.Ga.length && this.ed(this.Ed(a), 1)
        }
        yf(a, b) {
            b = this.wb.get(b);
            if (null != b) {
                a.B = 0;
                var c = A.aa();
                c.f(6);
                m.le(a, c);
                b.nb(c, 0)
            }
        }
        Ba() {
            let a = ((window.performance.now() - this.Ff) * this.te | 0) - this.da;
            0 < a && this.kg(a);
            7 <= this.da - this.Xe && this.Qd();
            this.da - this.We >= this.tg && (this.Qd(),
            this.Qh())
        }
        Qg(a, b) {
            if (this.Ga.length >= this.Uc)
                return ta.vc(4100);
            try {
                if (b.ic() != this.ki)
                    throw t.s(null);
            } catch (c) {
                return ta.vc(4103)
            }
            try {
                let c = b.Ya();
                if (null != this.kb && c != this.kb)
                    throw t.s(null);
            } catch (c) {
                return ta.vc(4101)
            }
            return ta.se
        }
        uh(a) {
            if (this.Ga.length >= this.Uc)
                a.cb();
            else {
                var b = new Ya(a);
                this.Ga.push(b);
                var c = this;
                a.gf = function(d) {
                    d = new L(new DataView(d));
                    c.Dh(d, b)
                }
                ;
                a.ff = function() {
                    P.remove(c.Ga, b);
                    c.wb.delete(b.R);
                    Qa.va(c.th, b.R)
                }
                ;
                a = A.aa(1 + b.cc.byteLength);
                a.f(0);
                a.Da(b.cc.byteLength);
                a.ob(b.cc);
                b.nb(a)
            }
        }
        Ed(a) {
            let b = A.aa();
            b.f(2);
            this.jf(a, b);
            return b
        }
        jf(a, b) {
            b.xa(a.eb);
            b.Da(a.fb);
            b.Oa(a.B);
            b.xa(a.ni);
            m.le(a, b)
        }
        Qd() {
            if (!(0 >= this.da - this.Xe) && 0 != this.Ga.length) {
                var a = A.aa();
                a.f(3);
                a.xa(this.da);
                a.xa(this.jd);
                this.ed(a, 2);
                this.Xe = this.da
            }
        }
        ed(a, b) {
            null == b && (b = 0);
            let c = 0
              , d = this.Ga;
            for (; c < d.length; ) {
                let e = d[c];
                ++c;
                e.ad && e.nb(a, b)
            }
        }
        Uh(a) {
            let b = A.aa();
            b.f(1);
            let c = A.aa();
            c.Oa(a.R);
            c.xa(this.da);
            c.xa(this.jd);
            c.Da(this.Ra);
            this.Fa.G(c);
            let d = this.Od.list
              , e = 0
              , f = d.length;
            for (; e < f; )
                this.jf(d[e++], c);
            b.ob(pako.deflateRaw(c.Bb()));
            a.nb(b)
        }
        Qh() {
            this.We = this.da;
            if (0 != this.Ga.length) {
                var a = new la;
                a.eb = this.da;
                a.fb = this.Ra++;
                a.B = 0;
                a.ld = this.Fa.Jg();
                this.ed(this.Ed(a))
            }
        }
        Fh(a, b) {
            let c = a.La(a.mb())
              , d = a.La(a.mb());
            a = b.cc;
            b.cc = null;
            let e = this;
            ka.ji(c, a).catch(function() {
                return null
            }).then(function(f) {
                try {
                    if (-1 != e.Ga.indexOf(b)) {
                        b.Ag = f;
                        var g = e.qh++;
                        b.R = g;
                        e.wb.set(g, b);
                        eb.va(e.sh, g, new L(new DataView(d.buffer,d.byteOffset,d.byteLength),!1));
                        b.ad = !0;
                        e.Uh(b)
                    }
                } catch (k) {
                    f = t.Ub(k).Hb(),
                    e.Qe(b, f)
                }
            })
        }
        Dh(a, b) {
            this.Ba();
            try {
                if (!b.Mg.Lf())
                    throw t.s(1);
                let c = a.C();
                if (b.ad)
                    switch (c) {
                    case 1:
                        this.Gh(a, b);
                        break;
                    case 2:
                        this.Eh(a, b);
                        break;
                    default:
                        throw t.s(0);
                    }
                else if (0 == c)
                    this.Fh(a, b);
                else
                    throw t.s(0);
                if (0 < a.j.byteLength - a.a)
                    throw t.s(2);
            } catch (c) {
                this.Qe(b, t.Ub(c).Hb())
            }
        }
        Qe(a, b) {
            ua.console.log(b);
            this.wb.delete(a.R);
            P.remove(this.Ga, a);
            a.ad && null != this.cf && this.cf(a.R);
            a.hc.cb()
        }
        Eh(a, b) {
            let c = a.o();
            b.Yc = a.mb();
            a = A.aa();
            a.f(4);
            a.g((window.performance.now() - this.Ff) * this.te + this.wf);
            a.g(c);
            b.nb(a, 2)
        }
        Gh(a, b) {
            let c = a.Ob()
              , d = a.Ob();
            a = m.Ai(a);
            var e = a.Sf.me;
            if (null != e) {
                var f = b.Be.get(e);
                null == f && (f = new Oa(e.be,e.qe),
                b.Be.set(e, f));
                if (!f.Lf())
                    throw t.s(3);
            }
            e = this.da;
            f = this.da + 20;
            c < e ? c = e : c > f && (c = f);
            a.ni = d;
            a.B = b.R;
            a.eb = c;
            a.Zf(this.Fa) && (this.vf(a),
            this.ed(this.Ed(a), 1))
        }
    }
    class Ca extends m {
        constructor() {
            super()
        }
        apply(a) {
            let b = a.T(this.B);
            null != b && this.ie != b.ee && (b.ee = this.ie,
            Qa.va(a.Di, b))
        }
        P(a) {
            a.f(this.ie ? 1 : 0)
        }
        W(a) {
            this.ie = 0 != a.C()
        }
    }
    class Z extends m {
        constructor() {
            super()
        }
        apply(a) {
            0 == this.B && Za.va(a.Fi, this.Pa, this.color, this.style, this.oe)
        }
        P(a) {
            a.Sb(R.pb(this.Pa, 1E3));
            a.w(this.color);
            a.f(this.style);
            a.f(this.oe)
        }
        W(a) {
            this.Pa = a.lb();
            if (1E3 < this.Pa.length)
                throw t.s("message too long");
            this.color = a.H();
            this.style = a.C();
            this.oe = a.C()

        }
        static V(a, b, c, d) {
            let e = new Z;
            e.Pa = a;
            e.color = b;
            e.style = c;
            e.oe = d;
            
            return e
        }
    }
    class Ba extends m {
        constructor() {
            super()
        }
        apply(a) {
            if (a.za(this.B)) {
                for (var b = a.T(this.B), c = a.ba, d = [], e = 0, f = 0, g = 0; g < c.length; ) {
                    let k = c[g];
                    ++g;
                    k.ja == u.na && d.push(k);
                    k.ja == u.fa ? ++e : k.ja == u.sa && ++f
                }
                c = d.length;
                0 != c && (f == e ? 2 > c || (a.Ec(b, d[0], u.fa),
                a.Ec(b, d[1], u.sa)) : a.Ec(b, d[0], f > e ? u.fa : u.sa))
            }
        }
        P() {}
        W() {}
    }
    class U extends m {
        constructor() {
            super()
        }
        apply(a) {
            if (a.za(this.B) && null == a.D)
                switch (this.ne) {
                case 0:
                    var b = this.newValue;
                    a.ab = 0 > b ? 0 : 99 < b ? 99 : b;
                    break;
                case 1:
                    b = this.newValue,
                    a.Na = 0 > b ? 0 : 99 < b ? 99 : b
                }
        }
        P(a) {
            a.w(this.ne);
            a.w(this.newValue)
        }
        W(a) {
            this.ne = a.H();
            this.newValue = a.H()
        }
        static V(a, b) {
            let c = new U;
            c.ne = a;
            c.newValue = b;
            return c
        }
    }
    class ca extends m {
        constructor() {
            super()
        }
        apply(a) {
            if (a.za(this.B)) {
                var b = a.T(this.B)
                  , c = a.T(this.Fb);
                null != c && 0 != c.ma && c.Tb != this.nd && (c.Tb = this.nd,
                null != a.lf && a.lf(b, c))
            }
        }
        P(a) {
            a.w(this.Fb);
            a.f(this.nd ? 1 : 0)
        }
        W(a) {
            this.Fb = a.H();
            this.nd = 0 != a.C()
        }
        static V(a, b) {
            let c = new ca;
            c.Fb = a;
            c.nd = b;
            return c
        }
    }
    class Da extends m {
        constructor() {
            super()
        }
        apply(a) {
            a = a.T(this.B);
            null != a && (a.Db = this.Ea)
        }
        P(a) {
            a.Ca(this.Ea)
        }
        W(a) {
            this.Ea = a.Ya();
            null != this.Ea && (this.Ea = R.pb(this.Ea, 2))
        }
    }
    class ba extends m {
        constructor() {
            super()
        }
        apply(a) {
            let b = a.T(this.Fb);
            if (null != b) {
                var c = a.T(this.B)
                  , d = a.za(this.B);
                (d = d || b == c && !a.Ud && null == a.D) && a.Ec(c, b, this.je)
            }
        }
        P(a) {
            a.w(this.Fb);
            a.f(this.je.R)
        }
        W(a) {
            this.Fb = a.H();
            a = a.Ld();
            this.je = 1 == a ? u.fa : 2 == a ? u.sa : u.na
        }
        static V(a, b) {
            let c = new ba;
            c.Fb = a;
            c.je = b;
            return c
        }
    }
    class V extends m {
        constructor() {
            super()
        }
        apply(a) {
            if (a.za(this.B)) {
                var b = a.T(this.B);
                null == a.D && (a.ea = this.pd,
                null != a.Cf && a.Cf(b, this.pd))
            }
        }
        P(a) {
            var b = A.aa();
            this.pd.G(b);
            b = pako.deflateRaw(b.Bb());
            a.Oa(b.byteLength);
            a.ob(b)
        }
        W(a) {
            a = pako.inflateRaw(a.La(a.ic()));
            this.pd = v.pa(new L(new DataView(a.buffer,a.byteOffset,a.byteLength)))
        }
        static V(a) {
            let b = new V;
            b.pd = a;
            return b
        }
    }
    class ra extends m {
        constructor() {
            super()
        }
        apply(a) {
            a.za(this.B) && this.ja != u.na && (a.qc[this.ja.R] = this.md)
        }
        P(a) {
            a.f(this.ja.R);
            this.md.G(a)
        }
        W(a) {
            let b = a.Ld();
            this.ja = 1 == b ? u.fa : 2 == b ? u.sa : u.na;
            this.md = new X;
            this.md.pa(a)
        }
    }
    class qa extends m {
        constructor() {
            super()
        }
        apply(a) {
            a.za(this.B) && (a.Ud = this.newValue)
        }
        P(a) {
            a.f(this.newValue ? 1 : 0)
        }
        W(a) {
            this.newValue = 0 != a.C()
        }
    }
    class aa extends m {
        constructor() {
            super()
        }
        apply(a) {
            if (0 == this.B) {
                var b = new wa;
                b.ma = this.ma;
                b.oa = this.name;
                b.country = this.de;
                b.Db = this.Db;
                a.ba.push(b);
                a = a.yh;
                null != a && a(b)
            }
        }
        P(a) {
            a.w(this.ma);
            a.Ca(this.name);
            a.Ca(this.de);
            a.Ca(this.Db)
        }
        W(a) {
            this.ma = a.H();
            this.name = a.Ya();
            this.de = a.Ya();
            this.Db = a.Ya()
        }
        static V(a, b, c, d) {
            let e = new aa;
            e.ma = a;
            e.name = b;
            e.de = c;
            e.Db = d;
            return e
        }
    }
    class ha extends m {
        constructor() {
            super()
        }
        apply(a) {
            a = a.T(this.rb);
            null != a && 0 == this.B && (a.Qf = this.Ea)
        }
        P(a) {
            a.Ca(this.Ea);
            a.w(this.rb)
        }
        W(a) {
            this.Ea = a.Ya();
            this.rb = a.H();
            null != this.Ea && (this.Ea = R.pb(this.Ea, 2))
        }
        static V(a, b) {
            let c = new ha;
            c.Ea = null != b ? R.pb(b, 2) : null;
            c.rb = a;
            return c
        }
    }
    class pa extends m {
        constructor() {
            super()
        }
        apply(a) {
            let b = a.D;
            if (null != b && a.za(this.B)) {
                var c = a.T(this.B)
                  , d = 120 == b.Xa
                  , e = 0 < b.Xa;
                this.tc ? b.Xa = 120 : 120 == b.Xa && (b.Xa = 119);
                d != this.tc && jb.va(a.wh, c, this.tc, e)
            }
        }
        P(a) {
            a.f(this.tc ? 1 : 0)
        }
        W(a) {
            this.tc = 0 != a.C()
        }
    }
    class ma extends m {
        constructor() {
            super()
        }
        Zf(a) {
            if (null != a.mf) {
                let b = a.T(this.B);
                return null == b ? !1 : a.mf(b, this.Pa)
            }
            return !0
        }
        apply(a) {
            let b = a.T(this.B);
            null != b && eb.va(a.Ci, b, this.Pa)
        }
        P(a) {
            a.Sb(R.pb(this.Pa, 140))
        }
        W(a) {
            this.Pa = a.lb();
            if (140 < this.Pa.length)
                throw t.s("message too long");
        }
    }
    class Aa extends m {
        constructor() {
            super()
        }
        apply(a) {
            let b = a.T(this.B);
            if (null != b) {
                var c = this.input;
                0 == (b.Jb & 16) && 0 != (c & 16) && (b.Cb = !0);
                b.Jb = c;
                null != a.nf && a.nf(b)
            }
        }
        P(a) {
            a.xa(this.input)
            let pid = this.B
           let tempX = 0;
           let tempY = 0;
           let kicking = 0;
           if (this.input & 1) PlayerList[pid].input.y = -1
           if (this.input & 2) PlayerList[pid].input.y = 1
           if (this.input & 4) PlayerList[pid].input.x = -1
           if (this.input & 8) PlayerList[pid].input.x = 1
           if (this.input & 16) PlayerList[pid].input.kicking = true
           else PlayerList[pid].input.kicking = false

        }
        W(a) {
            this.input = a.Ob()

        }
    }
    class za extends m {
        constructor() {
            super()
        }
        apply(a) {
            let b = a.T(this.B);
            null != b && eb.va(a.Ei, b, this.$f)
        }
        P(a) {
            a.f(this.$f)
        }
        W(a) {
            this.$f = a.C()
        }
    }
    class S extends m {
        constructor() {
            m.Ja = !0;
            super();
            m.Ja = !1;
            this.Aa()
        }
        Aa() {
            this.kd = !1;
            super.Aa()
        }
        apply(a) {
            if (0 != this.ma && a.za(this.B)) {
                var b = a.T(this.ma);
                if (null != b) {
                    var c = a.T(this.B);
                    P.remove(a.ba, b);
                    null != a.D && P.remove(a.D.ia.A, b.N);
                    Za.va(a.zh, b, this.qb, this.kd, c)
                }
            }
        }
        P(a) {
            null != this.qb && (this.qb = R.pb(this.qb, 100));
            a.w(this.ma);
            a.Ca(this.qb);
            a.f(this.kd ? 1 : 0)
        }
        W(a) {
            this.ma = a.H();
            this.qb = a.Ya();
            this.kd = 0 != a.C();
            if (null != this.qb && 100 < this.qb.length)
                throw t.s("string too long");
        }
        static V(a, b, c) {
            let d = new S;
            d.ma = a;
            d.qb = b;
            d.kd = c;
            return d
        }
    }
    class ea extends m {
        constructor() {
            super()
        }
        apply(a) {
            if (0 == this.B) {
                for (var b = new Map, c = 0, d = a.ba; c < d.length; ) {
                    var e = d[c];
                    ++c;
                    b.set(e.ma, e)
                }
                c = [];
                d = 0;
                for (e = this.sc; d < e.length; ) {
                    var f = e[d];
                    ++d;
                    let g = b.get(f);
                    null != g && (b.delete(f),
                    c.push(g))
                }
                d = [];
                b = b.values();
                for (e = b.next(); !e.done; )
                    f = e.value,
                    e = b.next(),
                    d.push(f);
                a.ba = this.ke ? c.concat(d) : d.concat(c)
            }
        }
        P(a) {
            a.f(this.ke ? 1 : 0);
            a.f(this.sc.length);
            let b = 0
              , c = this.sc;
            for (; b < c.length; )
                a.w(c[b++])
        }
        W(a) {
            this.ke = 0 != a.C();
            let b = a.C();
            this.sc = [];
            let c = 0;
            for (; c < b; )
                ++c,
                this.sc.push(a.H())
        }
        static V(a, b) {
            let c = new ea;
            for (var d = new Set, e = 0; e < a.length; )
                d.add(a[e++]);
            a = [];
            e = 0;
            d = d.values();
            let f = d.next();
            for (; !f.done; ) {
                let g = f.value;
                f = d.next();
                a.push(g);
                ++e;
                if (40 <= e)
                    break
            }
            c.sc = a;
            c.ke = b;
            return c
        }
    }
    class M extends m {
        constructor() {
            super()
        }
        apply(a) {
            if (0 == this.B) {
                var b = a.D;
                if (null != b) {
                    if (this.ge) {
                        a = a.T(this.rb);
                        if (null == a)
                            return;
                        a = a.N
                    } else
                        a = b.ia.A[this.rb];
                    null != a && (null != this.O[0] && (a.a.x = this.O[0]),
                    null != this.O[1] && (a.a.y = this.O[1]),
                    null != this.O[2] && (a.u.x = this.O[2]),
                    null != this.O[3] && (a.u.y = this.O[3]),
                    null != this.O[4] && (a.la.x = this.O[4]),
                    null != this.O[5] && (a.la.y = this.O[5]),
                    null != this.O[6] && (a.M = this.O[6]),
                    null != this.O[7] && (a.i = this.O[7]),
                    null != this.O[8] && (a.L = this.O[8]),
                    null != this.O[9] && (a.ga = this.O[9]),
                    null != this.ya[0] && (a.S = this.ya[0]),
                    null != this.ya[1] && (a.c = this.ya[1]),
                    null != this.ya[2] && (a.m = this.ya[2]))
                }
            }
        }
        P(a) {
            a.w(this.rb);
            a.f(this.ge ? 1 : 0);
            let b = a.a;
            a.Oa(0);
            let c = 0;
            for (var d = 1, e = 0, f = this.O; e < f.length; ) {
                var g = f[e];
                ++e;
                null != g && (c |= d,
                a.Yd(g));
                d <<= 1
            }
            e = 0;
            for (f = this.ya; e < f.length; )
                g = f[e],
                ++e,
                null != g && (c |= d,
                a.w(g)),
                d <<= 1;
            d = a.a;
            a.a = b;
            a.Oa(c);
            a.a = d
        }
        W(a) {
            this.rb = a.H();
            this.ge = 0 != a.C();
            let b = a.ic();
            this.O = [];
            for (var c = 0; 10 > c; ) {
                var d = c++;
                this.O[d] = null;
                0 != (b & 1) && (this.O[d] = a.Ih());
                b >>>= 1
            }
            this.ya = [];
            for (c = 0; 3 > c; )
                d = c++,
                this.ya[d] = null,
                0 != (b & 1) && (this.ya[d] = a.H()),
                b >>>= 1
        }
        static Xf(a, b, c) {
            let d = new M;
            d.rb = a;
            d.ge = b;
            d.O = [c.x, c.y, c.xspeed, c.yspeed, c.xgravity, c.ygravity, c.radius, c.bCoeff, c.invMass, c.damping];
            d.ya = [c.color, c.cMask, c.cGroup];
            a = 0;
            for (b = d.O.length; a < b; ) {
                c = a++;
                var e = d.O[c];
                null != e && (M.Tf[0] = e,
                d.O[c] = M.Tf[0])
            }
            a = 0;
            for (b = d.ya.length; a < b; )
                c = a++,
                e = d.ya[c],
                null != e && (M.Wf[0] = e,
                d.ya[c] = M.Wf[0]);
            return d
        }
    }
    class fa extends m {
        constructor() {
            super()
        }
        apply(a) {
            a.za(this.B) && a.Vh(a.T(this.B), this.min, this.rate, this.ce)
        }
        P(a) {
            a.w(this.min);
            a.w(this.rate);
            a.w(this.ce)
        }
        W(a) {
            this.min = a.H();
            this.rate = a.H();
            this.ce = a.H()
        }
        static V(a, b, c) {
            let d = new fa;
            d.min = a;
            d.rate = b;
            d.ce = c;
            return d
        }
    }
    class na extends m {
        constructor() {
            super()
        }
        apply(a) {
            a.za(this.B) && a.Zh(a.T(this.B))
        }
        P() {}
        W() {}
    }
    class oa extends m {
        constructor() {
            super()
        }
        apply(a) {
            if (a.za(this.B)) {
                var b = a.T(this.B);
                if (null != a.D) {
                    a.D = null;
                    let c = 0
                      , d = a.ba;
                    for (; c < d.length; ) {
                        let e = d[c];
                        ++c;
                        e.N = null;
                        e.Eb = 0
                    }
                    null != a.hd && a.hd(b)
                }
            }
        }
        P() {}
        W() {}
    }
    class da extends m {
        constructor() {
            super()
        }
        apply(a) {
            if (0 == this.B) {
                a = a.ba;
                for (var b = 0, c = a.length; b < c; ) {
                    let d = b++;
                    if (d >= this.Wb.length)
                        break;
                    a[d].Yc = this.Wb[d]
                }
            }
        }
        P(a) {
            a.Da(this.Wb.length);
            let b = 0
              , c = this.Wb;
            for (; b < c.length; )
                a.Da(c[b++])
        }
        W(a) {
            this.Wb = [];
            let b = a.mb()
              , c = 0;
            for (; c < b; )
                ++c,
                this.Wb.push(a.mb())
        }
        static V(a) {
            let b = new da
              , c = a.Fa.ba
              , d = []
              , e = 0;
            for (; e < c.length; ) {
                let f = a.wb.get(c[e++].ma);
                d.push(null == f ? 0 : f.Yc)
            }
            b.Wb = d;
            return b
        }
    }
    class t extends Error {
        constructor(a, b, c) {
            super(a);
            this.message = a;
            this.ze = null != c ? c : this
        }
        Hb() {
            return this.ze
        }
        toString() {
            return this.message
        }
        static Ub(a) {
            return a instanceof t ? a : a instanceof Error ? new t(a.message,null,a) : new Ma(a,null,a)
        }
        static s(a) {
            return a instanceof t ? a.ze : a instanceof Error ? a : new Ma(a)
        }
    }
    class Ma extends t {
        constructor(a, b, c) {
            super(String(a), b, c);
            this.value = a
        }
        Hb() {
            return this.value
        }
    }
    var bb = bb || {}, fb;
    P.b = !0;
    Math.b = !0;
    qb.b = !0;
    Ra.b = !0;
    nb.b = !0;
    R.b = !0;
    Ea.b = !0;
    Object.assign(Ea.prototype, {
        h: Ea
    });
    var ta = bb["bas.basnet.ConnectionRequestResponse"] = {
        ve: !0,
        ue: null,
        se: {
            Re: "Accept",
            Ad: 0,
            Xb: "bas.basnet.ConnectionRequestResponse",
            toString: mb
        },
        vc: (fb = function(a) {
            return {
                Ad: 1,
                reason: a,
                Xb: "bas.basnet.ConnectionRequestResponse",
                toString: mb
            }
        }
        ,
        fb.Re = "Reject",
        fb.Ae = ["reason"],
        fb)
    };
    ta.ue = [ta.se, ta.vc];
    Ja.b = !0;
    Object.assign(Ja.prototype, {
        h: Ja
    });
    rb.b = !0;
    Wa.b = !0;
    Object.assign(Wa.prototype, {
        h: Wa
    });
    L.b = !0;
    Object.assign(L.prototype, {
        h: L
    });
    A.b = !0;
    Object.assign(A.prototype, {
        h: A
    });
    ka.b = !0;
    Ia.b = !0;
    ob.b = !0;
    m.b = !0;
    Object.assign(m.prototype, {
        h: m
    });
    Xa.b = !0;
    Object.assign(Xa.prototype, {
        h: Xa
    });
    O.b = !0;
    Object.assign(O.prototype, {
        h: O
    });
    la.b = !0;
    la.J = m;
    Object.assign(la.prototype, {
        h: la
    });
    Ta.b = !0;
    Ta.xe = !0;
    Object.assign(Ta.prototype, {
        h: Ta
    });
    ab.b = !0;
    Object.assign(ab.prototype, {
        h: ab
    });
    ia.b = !0;
    ia.xe = !0;
    La.b = !0;
    La.J = O;
    Object.assign(La.prototype, {
        h: La
    });
    Ua.b = !0;
    Ua.J = La;
    Object.assign(Ua.prototype, {
        h: Ua
    });
    Ya.b = !0;
    Object.assign(Ya.prototype, {
        h: Ya
    });
    ib.b = !0;
    hb.b = !0;
    Object.assign(hb.prototype, {
        h: hb
    });
    I.b = !0;
    Object.assign(I.prototype, {
        h: I
    });
    T.b = !0;
    Qa.b = !0;
    eb.b = !0;
    jb.b = !0;
    Za.b = !0;
    Oa.b = !0;
    Object.assign(Oa.prototype, {
        h: Oa
    });
    Y.b = !0;
    Object.assign(Y.prototype, {
        h: Y
    });
    ya.b = !0;
    F.b = !0;
    Va.b = !0;
    Object.assign(Va.prototype, {
        h: Va
    });
    W.b = !0;
    Object.assign(W.prototype, {
        h: W
    });
    Q.b = !0;
    Q.sb = [ia];
    Object.assign(Q.prototype, {
        h: Q
    });
    Fa.b = !0;
    Object.assign(Fa.prototype, {
        h: Fa
    });
    Na.b = !0;
    Object.assign(Na.prototype, {
        h: Na
    });
    xa.b = !0;
    Object.assign(xa.prototype, {
        h: xa
    });
    v.b = !0;
    Object.assign(v.prototype, {
        h: v
    });
    X.b = !0;
    Object.assign(X.prototype, {
        h: X
    });
    u.b = !0;
    Object.assign(u.prototype, {
        h: u
    });
    Pa.b = !0;
    Pa.sb = [ia, Ta];
    Object.assign(Pa.prototype, {
        h: Pa
    });
    wa.b = !0;
    wa.sb = [ia];
    Object.assign(wa.prototype, {
        h: wa
    });
    Ca.b = !0;
    Ca.J = m;
    Object.assign(Ca.prototype, {
        h: Ca
    });
    Z.b = !0;
    Z.J = m;
    Object.assign(Z.prototype, {
        h: Z
    });
    Ba.b = !0;
    Ba.J = m;
    Object.assign(Ba.prototype, {
        h: Ba
    });
    U.b = !0;
    U.J = m;
    Object.assign(U.prototype, {
        h: U
    });
    ca.b = !0;
    ca.J = m;
    Object.assign(ca.prototype, {
        h: ca
    });
    Da.b = !0;
    Da.J = m;
    Object.assign(Da.prototype, {
        h: Da
    });
    ba.b = !0;
    ba.J = m;
    Object.assign(ba.prototype, {
        h: ba
    });
    V.b = !0;
    V.J = m;
    Object.assign(V.prototype, {
        h: V
    });
    ra.b = !0;
    ra.J = m;
    Object.assign(ra.prototype, {
        h: ra
    });
    qa.b = !0;
    qa.J = m;
    Object.assign(qa.prototype, {
        h: qa
    });
    aa.b = !0;
    aa.J = m;
    Object.assign(aa.prototype, {
        h: aa
    });
    ha.b = !0;
    ha.J = m;
    Object.assign(ha.prototype, {
        h: ha
    });
    pa.b = !0;
    pa.J = m;
    Object.assign(pa.prototype, {
        h: pa
    });
    ma.b = !0;
    ma.J = m;
    Object.assign(ma.prototype, {
        h: ma
    });
    Aa.b = !0;
    Aa.J = m;
    Object.assign(Aa.prototype, {
        h: Aa
    });
    za.b = !0;
    za.J = m;
    Object.assign(za.prototype, {
        h: za
    });
    pb.b = !0;
    S.b = !0;
    S.J = m;
    Object.assign(S.prototype, {
        h: S
    });
    ea.b = !0;
    ea.J = m;
    Object.assign(ea.prototype, {
        h: ea
    });
    M.b = !0;
    M.J = m;
    Object.assign(M.prototype, {
        h: M
    });
    fa.b = !0;
    fa.J = m;
    Object.assign(fa.prototype, {
        h: fa
    });
    na.b = !0;
    na.J = m;
    Object.assign(na.prototype, {
        h: na
    });
    oa.b = !0;
    oa.J = m;
    Object.assign(oa.prototype, {
        h: oa
    });
    da.b = !0;
    da.J = m;
    Object.assign(da.prototype, {
        h: da
    });
    va.b = !0;
    va.sb = [ia];
    Object.assign(va.prototype, {
        h: va
    });
    Ga.b = !0;
    Ga.sb = [ia];
    Object.assign(Ga.prototype, {
        h: Ga
    });
    Sa.b = !0;
    Sa.sb = [ia];
    Object.assign(Sa.prototype, {
        h: Sa
    });
    J.b = !0;
    Object.assign(J.prototype, {
        h: J
    });
    E.b = !0;
    Object.assign(E.prototype, {
        h: E
    });
    B.b = !0;
    Object.assign(B.prototype, {
        h: B
    });
    t.b = !0;
    t.J = Error;
    Object.assign(t.prototype, {
        h: t
    });
    Ma.b = !0;
    Ma.J = t;
    Object.assign(Ma.prototype, {
        h: Ma
    });
    kb.b = !0;
    Object.assign(kb.prototype, {
        h: kb
    });
    q.b = !0;
    ua.re |= 0;
    "undefined" != typeof performance && "function" == typeof performance.now && (P.now = performance.now.bind(performance));
    null == String.fromCodePoint && (String.fromCodePoint = function(a) {
        return 65536 > a ? String.fromCharCode(a) : String.fromCharCode((a >> 10) + 55232) + String.fromCharCode((a & 1023) + 56320)
    }
    );
    Object.defineProperty(String.prototype, "__class__", {
        value: String,
        enumerable: !1,
        writable: !0
    });
    String.b = !0;
    Array.b = !0;
    var Ha = {}
      , tb = {}
      , z = Number
      , $a = Boolean
      , ub = {}
      , vb = {};
    u.na = new u(0,16777215,0,-1,"Spectators","t-spec",0,0);
    u.fa = new u(1,15035990,-1,8,"Red","t-red",15035990,2);
    u.sa = new u(2,5671397,1,16,"Blue","t-blue",625603,4);
    u.na.Xc = u.na;
    u.fa.Xc = u.sa;
    u.sa.Xc = u.fa;
    q.jg = {}.toString;
    Ea.xg = {
        mandatory: {
            OfferToReceiveAudio: !1,
            OfferToReceiveVideo: !1
        }
    };
    ka.lg = {
        name: "ECDSA",
        namedCurve: "P-256"
    };
    ka.Xh = {
        name: "ECDSA",
        hash: {
            name: "SHA-256"
        }
    };
    m.Ja = !1;
    m.Vf = new Map;
    m.ae = 0;
    O.Ja = !1;
    la.U = m.Z({
        ca: !1,
        delay: !1
    });
    ib.channels = [{
        name: "ro",
        reliable: !0,
        ordered: !0
    }, {
        name: "ru",
        reliable: !0,
        ordered: !1
    }, {
        name: "uu",
        reliable: !1,
        ordered: !1
    }];
    T.ag = "application/x-www-form-urlencoded";
    ya.Ee = "https://www.haxball.com/rs/";
    ya.Cd = [{
        urls: "stun:stun.l.google.com:19302"
    }];
    F.Me = new Y;
    F.Af = !1;
    Q.bf = function() {
        let a = [];
        {
            let b = 0;
            for (; 256 > b; )
                ++b,
                a.push(new I(0,0))
        }
        return a
    }(this);
    Q.Le = function() {
        let a = [];
        {
            let b = 0;
            for (; 256 > b; )
                ++b,
                a.push(0)
        }
        return a
    }(this);
    Ca.U = m.Z({
        ca: !1,
        delay: !1
    });
    Z.U = m.Z({
        ca: !1,
        delay: !1,
        me: {
            be: 10,
            qe: 900
        }
    });
    Ba.U = m.Z({
        ca: !1,
        delay: !1
    });
    U.U = m.Z({
        ca: !1,
        delay: !1
    });
    ca.U = m.Z({
        ca: !1,
        delay: !1
    });
    Da.U = m.Z({
        ca: !1,
        delay: !1
    });
    ba.U = m.Z({
        ca: !1,
        delay: !1
    });
    V.U = m.Z({
        ca: !1,
        delay: !1,
        me: {
            be: 10,
            qe: 2E3
        }
    });
    ra.U = m.Z({
        ca: !1,
        delay: !1
    });
    qa.U = m.Z({
        ca: !1,
        delay: !1
    });
    aa.U = m.Z({
        ca: !1,
        delay: !1
    });
    ha.U = m.Z({
        ca: !1,
        delay: !1
    });
    pa.U = m.Z({});
    ma.U = m.Z({
        ca: !1,
        delay: !1,
        me: {
            be: 10,
            qe: 900
        }
    });
    Aa.U = m.Z({});
    za.U = m.Z({
        ca: !1,
        delay: !1
    });
    S.U = m.Z({
        ca: !1,
        delay: !1
    });
    ea.U = m.Z({
        ca: !1,
        delay: !1
    });
    M.U = m.Z({
        ca: !1,
        delay: !1
    });
    M.Tf = new Float32Array(1);
    M.Wf = new Int32Array(1);
    fa.U = m.Z({
        ca: !1,
        delay: !1
    });
    na.U = m.Z({
        ca: !1,
        delay: !1
    });
    oa.U = m.Z({
        ca: !1,
        delay: !1
    });
    da.U = m.Z({
        ca: !1,
        delay: !1
    });
    E.dg = .17435839227423353;
    E.cg = 5.934119456780721;
    F.mh()
}
)("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);
