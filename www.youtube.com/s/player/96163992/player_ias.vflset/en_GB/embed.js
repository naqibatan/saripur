(function (g) {
  var window = this; /*
 SPDX-License-Identifier: Apache-2.0 */
  /*

 Copyright 2017 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
  ("use strict");
  var Jlb = function (a) {
      a.mutedAutoplay = !1;
      a.endSeconds = NaN;
      a.limitedPlaybackDurationInSeconds = NaN;
      g.hT(a);
    },
    Klb = function () {
      return {
        I: "svg",
        W: {
          height: "100%",
          version: "1.1",
          viewBox: "0 0 110 26",
          width: "100%",
        },
        V: [
          {
            I: "path",
            Dc: !0,
            S: "ytp-svg-fill",
            W: {
              d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z",
            },
          },
        ],
      };
    },
    Llb = function (a) {
      var b = q5;
      try {
        return (q5 = !1), a();
      } finally {
        q5 = b;
      }
    },
    Mlb = function (a) {
      var b = q5;
      try {
        return (q5 = !0), a();
      } finally {
        q5 = b;
      }
    },
    Nlb = function (a, b) {
      var c = g.Ka.apply(2, arguments),
        d;
      b = null != (d = b) ? d : {};
      return { type: a, props: b, children: c };
    },
    Olb = function (a) {
      return a.children;
    },
    Plb = function (a) {
      var b = {},
        c;
      for (c in a)
        (b = { sQ: b.sQ, lP: b.lP }),
          (b.sQ = r5[c]),
          (b.lP = a[c]),
          (r5[c] = (function (d) {
            return function () {
              var e = g.Ka.apply(0, arguments);
              d.sQ.apply(null, g.pa(e));
              d.lP.apply(null, g.pa(e));
            };
          })(b));
    },
    Qlb = function () {},
    s5 = function (a, b) {
      for (; a.length > b; ) a.pop();
    },
    Rlb = function (a) {
      a = Array(a);
      s5(a, 0);
      return a;
    },
    Slb = function (a, b, c) {
      if (null == c) a.removeAttribute(b);
      else {
        var d =
          0 === b.lastIndexOf("xml:", 0)
            ? "http://www.w3.org/XML/1998/namespace"
            : 0 === b.lastIndexOf("xlink:", 0)
            ? "http://www.w3.org/1999/xlink"
            : null;
        d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c);
      }
    },
    Ulb = function (a, b, c) {
      a = a.style;
      if ("string" === typeof c) a.cssText = c;
      else {
        a.cssText = "";
        for (var d in c)
          if (Tlb.call(c, d)) {
            b = d;
            var e = c[d];
            0 <= b.indexOf("-") ? a.setProperty(b, e) : (a[b] = e);
          }
      }
    },
    Vlb = function (a, b, c) {
      var d = typeof c;
      "object" === d || "function" === d ? (a[b] = c) : Slb(a, b, c);
    },
    Wlb = function () {
      var a = new Qlb();
      a.__default = Vlb;
      a.style = Ulb;
      return a;
    },
    Xlb = function (a, b, c, d) {
      (d[b] || d.__default)(a, b, c);
    },
    Ylb = function (a) {
      this.created = [];
      this.j = [];
      this.node = a;
    },
    Zlb = function (a, b) {
      this.j = null;
      this.B = a;
      this.key = b;
      this.text = void 0;
    },
    $lb = function (a, b, c) {
      b = new Zlb(b, c);
      return (a.__incrementalDOMData = b);
    },
    t5 = function (a, b) {
      if (a.__incrementalDOMData) return a.__incrementalDOMData;
      var c = 1 === a.nodeType ? a.localName : a.nodeName,
        d = 1 === a.nodeType ? a.getAttribute("key") : null;
      b = $lb(a, c, 1 === a.nodeType ? d || b : null);
      if (1 === a.nodeType && ((a = a.attributes), (c = a.length))) {
        d = b.j || (b.j = Rlb(2 * c));
        for (var e = 0, f = 0; e < c; e += 1, f += 2) {
          var h = a[e],
            l = h.value;
          d[f] = h.name;
          d[f + 1] = l;
        }
      }
      return b;
    },
    amb = function (a, b, c, d, e) {
      return b == c && d == e;
    },
    x5 = function (a) {
      for (var b = u5, c = v5(); c !== a; ) {
        var d = c.nextSibling;
        b.removeChild(c);
        w5.j.push(c);
        c = d;
      }
    },
    v5 = function () {
      return y5 ? y5.nextSibling : u5.firstChild;
    },
    bmb = function (a, b) {
      y5 = v5();
      var c;
      a: {
        if ((c = y5)) {
          do {
            var d = c,
              e = a,
              f = b,
              h = t5(d, f);
            if (z5(d, e, h.B, f, h.key)) break a;
          } while (b && (c = c.nextSibling));
        }
        c = null;
      }
      c ||
        ("#text" === a
          ? ((a = A5.createTextNode("")), $lb(a, "#text", null))
          : ((c = A5),
            (d = u5),
            "function" === typeof a
              ? (c = new a())
              : (c = (d =
                  "svg" === a
                    ? "http://www.w3.org/2000/svg"
                    : "math" === a
                    ? "http://www.w3.org/1998/Math/MathML"
                    : null == d || "foreignObject" === t5(d).B
                    ? null
                    : d.namespaceURI)
                  ? c.createElementNS(d, a)
                  : c.createElement(a)),
            $lb(c, a, b),
            (a = c)),
        w5.created.push(a),
        (c = a));
      a = c;
      if (a !== y5) {
        if (0 <= B5.indexOf(a))
          for (b = u5, c = a.nextSibling, d = y5; null !== d && d !== a; )
            (e = d.nextSibling), b.insertBefore(d, c), (d = e);
        else u5.insertBefore(a, y5);
        y5 = a;
      }
    },
    cmb = function (a, b) {
      bmb(a, b);
      u5 = y5;
      y5 = null;
      return u5;
    },
    emb = function (a, b) {
      b = void 0 === b ? {} : b;
      var c = void 0 === b.matches ? amb : b.matches;
      return function (d, e, f) {
        var h = w5,
          l = A5,
          m = B5,
          n = C5,
          p = y5,
          q = u5,
          r = z5;
        A5 = d.ownerDocument;
        w5 = new Ylb(d);
        z5 = c;
        C5 = [];
        y5 = null;
        var t = (u5 = d.parentNode),
          v,
          x = dmb.call(d);
        if (
          (v =
            11 === x.nodeType || 9 === x.nodeType ? x.activeElement : null) &&
          d.contains(v)
        ) {
          for (x = []; v !== t; )
            x.push(v), (v = v.parentNode || (t ? v.host : null));
          t = x;
        } else t = [];
        B5 = t;
        try {
          return a(d, e, f);
        } finally {
          (d = w5),
            D5 && 0 < d.j.length && D5(d.j),
            (A5 = l),
            (w5 = h),
            (z5 = r),
            (C5 = n),
            (y5 = p),
            (u5 = q),
            (B5 = m);
        }
      };
    },
    fmb = function (a, b, c, d) {
      E5.push(Xlb);
      E5.push(a);
      E5.push(b);
      E5.push(c);
      E5.push(d);
    },
    gmb = function (a) {
      bmb("#text", null);
      var b = y5;
      var c = t5(b);
      if (c.text !== a) {
        c = c.text = a;
        for (var d = 1; d < arguments.length; d += 1) c = (0, arguments[d])(c);
        b.data !== c && (b.data = c);
      }
    },
    imb = function (a) {
      hmb.push(a);
      if (a.attributes) {
        var b = a.attributes,
          c;
        for (c in b) F5.attributes[c] = b[c](F5.attributes[c]);
      }
      a.jZ && Plb(a.jZ);
    },
    jmb = function (a) {
      var b;
      return void 0 === (null == (b = a.prototype) ? void 0 : b.Nw);
    },
    G5 = function (a) {
      function b() {
        return void kmb(c);
      }
      var c = lmb(!0);
      mmb(c, function () {
        return void a(b, c);
      });
    },
    nmb = function (a) {
      if (H5) {
        var b;
        (b = H5).tC || (b.tC = []);
        H5.tC.push(a);
      }
    },
    mmb = function (a, b) {
      var c = H5;
      H5 = a;
      try {
        return b();
      } finally {
        H5 = c;
      }
    },
    lmb = function (a) {
      var b = {};
      if ((void 0 === a || a) && H5) {
        var c;
        (c = H5).hQ || (c.hQ = []);
        H5.hQ.push(b);
      }
      return b;
    },
    omb = function (a) {
      var b;
      null == (b = a.hQ) || b.forEach(kmb);
      if (a.tC) {
        b = g.u(a.tC);
        for (var c = b.next(); !c.done; c = b.next()) (c = c.value), c();
        a.tC = [];
      }
    },
    kmb = function (a) {
      if (!a.isDisposed) {
        a.isDisposed = !0;
        var b;
        null == (b = a.R7) || b.call(a);
        omb(a);
      }
    },
    pmb = function (a, b) {
      if (a.Bm && a.Ir) {
        var c = a.Bm[b],
          d = a.Ir[b];
        if (c.YI && c.bE) {
          var e = c.YI.length - 1;
          I5(c.YI, d, e);
          I5(c.bE, d, e);
          c.YI.pop();
          c.bE.pop();
          e = c.YI[d];
          null != e && e.Ir && (e.Ir[c.bE[d]] = d);
        }
      }
      a.Bm &&
        a.Ir &&
        (I5(a.Bm, b, a.Bm.length - 1),
        I5(a.Ir, b, a.Ir.length - 1),
        a.Bm.pop(),
        a.Ir.pop(),
        (c = a.Bm[b]),
        (a = a.Ir[b]),
        null == c ? 0 : c.bE) &&
        (c.bE[a] = b);
    },
    I5 = function (a, b, c) {
      -1 === c && (c = a.length - 1);
      var d = a[b];
      a[b] = a[c];
      a[c] = d;
    },
    qmb = function (a) {
      if (0 !== a.state && !a.isDisposed) {
        if (1 === a.state && a.Bm)
          for (var b = g.u(a.Bm), c = b.next(); !c.done; c = b.next())
            (c = c.value), null != c.iF && qmb(c);
        2 === a.state && null != a.iF && a.iF(a);
        a.state = 0;
      }
    },
    rmb = function (a, b) {
      mmb(a, function () {
        return b(void 0);
      });
    },
    smb = function (a) {
      var b = a.QC;
      a.q$ = 0;
      omb(a);
      rmb(a, b);
      if (a.Bm && a.Ir) for (b = a.q$; b < a.Bm.length; b++) pmb(a, b);
    },
    umb = function (a) {
      var b = lmb();
      b.value = null;
      b.R7 = tmb.bind(null, b);
      b.QC = a;
      b.iF = smb;
      b.Ggb = !0;
      b.state = 2;
      return b;
    },
    tmb = function (a) {
      if (a.Bm) for (var b = 0; b < a.Bm.length; b++) pmb(a, b);
    },
    wmb = function () {
      var a = [].concat(g.pa(vmb));
      vmb.length = 0;
      a = g.u(a);
      for (var b = a.next(); !b.done; b = a.next()) qmb(b.value);
    },
    xmb = function (a) {
      1 === vmb.push(a) && Promise.resolve().then(wmb);
    },
    ymb = function (a) {
      a = umb(a);
      a.schedule = xmb;
      xmb(a);
    },
    zmb = function (a) {
      a = umb(a);
      qmb(a);
    },
    Cmb = function (a, b, c) {
      if (
        Object.hasOwnProperty.call(Amb, a) &&
        ((a = Amb[a]),
        Object.hasOwnProperty.call(a, b) && ((a = a[b]), a instanceof Array))
      ) {
        for (var d = null, e = !1, f = 0, h = a.length; f < h; ++f) {
          var l = a[f],
            m = l.Zh;
          if (!m) return l.Dd;
          null === d && (d = {});
          m = Object.hasOwnProperty.call(d, m) ? d[m] : (d[m] = c(m));
          if (m === l.Di) return l.Dd;
          null == m && (e = !0);
        }
        if (e) return null;
      }
      b = Bmb[b];
      return "number" === typeof b ? b : null;
    },
    J5 = function () {
      this.cX = "";
    },
    Emb = function (a, b, c) {
      if (null === c || void 0 === c) return c;
      var d = Cmb(a.tagName.toLowerCase(), b, function () {
        throw Error("Contingent attribute/property lookups are not supported.");
      });
      if (null === d) return c;
      d = Dmb[d];
      var e;
      if (null == (e = d.zt) ? 0 : e.call(d, c)) {
        if (d.Rr) return d.Rr(c);
        throw Error("Value Handler's unwrap function does not exist.");
      }
      c = c && c.yn ? c.Ok() : c;
      return d.rq ? d.rq(a.tagName, b, String(c)) : c;
    },
    Fmb = function (a, b) {
      var c = K5;
      null == a.hs &&
        null != a.pG &&
        G5(function (d) {
          a.hs = d;
          zmb(function () {
            for (var e = a.pG, f = [], h = 0; h < e.length; h++) {
              var l = e[h],
                m = b[l]();
              f[h] !== m && ((f[h] = m), c(a, l, m));
            }
          });
        });
    },
    Gmb = function (a) {
      var b = document.createTextNode("");
      G5(function (c) {
        b.vU = !0;
        b.hs = c;
        zmb(function () {
          var d = a();
          null == d && (d = "");
          var e = typeof d;
          if ("object" === e || "function" === e)
            throw Error(
              "Invalid text node kind: " +
                e +
                ". Text nodes must be primitives like numbers, strings, or null, but an object type was passed"
            );
          b.textContent = String(d);
        });
      });
      return b;
    },
    K5 = function (a, b, c) {
      !1 === c && Hmb.has(b)
        ? Slb(a, b, null)
        : "idomKey" !== b &&
          "skip" !== b &&
          "skipchildren" !== b &&
          "children" !== b &&
          "el" !== b &&
          (b.startsWith("on")
            ? ":" === b[2]
              ? (a["on" + b.slice(3)] = c.n5(0))
              : Imb(a, b, c)
            : "function" !== typeof c || null != a.hs
            ? (F5.M4 && (c = Emb(a, b, c)),
              "style" === b
                ? Jmb(a, b, c)
                : b.startsWith("prop:")
                ? (a[b.slice(5)] = c)
                : Imb(a, b, c))
            : (a.pG || (a.pG = []), a.pG.push(b)));
    },
    Kmb = function (a, b) {
      if (null == b ? 0 : b.el) {
        var c = b.el;
        if ("function" === typeof c) c(a);
        else {
          var d;
          null == (d = c.V8) || d.call(c, a);
          a._disposeRef ||
            ((a._disposeRef = function () {
              var e;
              null == (e = c.O9) || e.call(c);
              delete a._disposeRef;
            }),
            nmb(function () {
              var e;
              return void (null == (e = a._disposeRef) ? void 0 : e.call(a));
            }));
        }
      }
    },
    Nmb = function (a, b, c) {
      c = ((void 0 === c ? 0 : c) ? Lmb : Mmb)(a, function () {
        L5(b);
      });
      null != c || (c = a);
    },
    L5 = function (a) {
      if (void 0 !== a && null !== a)
        if (Array.isArray(a)) {
          a = g.u(a);
          for (var b = a.next(); !b.done; b = a.next()) L5(b.value);
        } else if (a instanceof g.$d || a instanceof g.ce || a instanceof g.ge)
          gmb(a.toString());
        else if (a instanceof Node) {
          if (v5() !== a)
            throw Error(
              "Encountered a real dom node where a vdom node was expected. Real dom nodes should only come from the reactive renderer, and they can't be passed in JSX expressions directly. Tag name: " +
                a.tagName
            );
          y5 = v5();
        } else if (
          ((b = typeof a), "boolean" === b || "number" === b || "string" === b)
        )
          gmb(a);
        else if ("function" === typeof a) {
          b = u5;
          var c = v5();
          (c && c.vU) || b.insertBefore(Gmb(a), c);
          y5 = v5();
        } else {
          if ("string" === typeof a.type) {
            a.gq || cmb(a.type, a.props.idomKey);
            b = u5;
            for (var d in a.props)
              if (a.props[d] !== Omb) {
                var e = a.props[d],
                  f = C5;
                f.push(d);
                f.push(e);
              }
            d = F5.attributes;
            d = void 0 === d ? Pmb : d;
            e = u5;
            var h = t5(e);
            f = d;
            d = C5;
            h = h.j || (h.j = Rlb(d.length));
            for (var l = !h.length || !1, m = 0; m < d.length; m += 2) {
              var n = d[m];
              if (l) h[m] = n;
              else if (h[m] !== n) break;
              var p = d[m + 1];
              if (l || h[m + 1] !== p) (h[m + 1] = p), fmb(e, n, p, f);
            }
            if (m < d.length || m < h.length) {
              for (m = l = m; m < h.length; m += 2) M5[h[m]] = h[m + 1];
              for (m = l; m < d.length; m += 2)
                (l = d[m]),
                  (n = d[m + 1]),
                  M5[l] !== n && fmb(e, l, n, f),
                  (h[m] = l),
                  (h[m + 1] = n),
                  delete M5[l];
              s5(h, d.length);
              for (c in M5) fmb(e, c, void 0, f), delete M5[c];
            }
            c = Qmb;
            Qmb = e = E5.length;
            for (f = c; f < e; f += 5)
              (0, E5[f])(E5[f + 1], E5[f + 2], E5[f + 3], E5[f + 4]);
            Qmb = c;
            s5(E5, c);
            s5(d, 0);
            Fmb(b, a.props);
            (a.props.skip || a.props.skipchildren) && u5.hasChildNodes()
              ? (y5 = u5.lastChild)
              : L5(a.children);
            x5(null);
            y5 = u5;
            u5 = u5.parentNode;
            a.gq && (a.gq = !1);
            Kmb(b, a.props);
            return b;
          }
          a.type === Olb ? L5(a.children) : F5.YN(a) || F5.kZ(a);
        }
    },
    N5 = function (a) {
      this.props = a;
      this.B = !1;
    },
    Rmb = function () {
      if (q5)
        throw Error(
          "Reactive components are not allowed to use useState or other memoization based hooks."
        );
      return O5;
    },
    P5 = function (a) {
      N5.call(this, a);
      var b = this;
      this.zz = [];
      this.D = 0;
      G5(function (c, d) {
        b.G = c;
        b.K = d;
      });
      nmb(function () {
        Smb(b, b.el);
      });
    },
    Smb = function (a, b) {
      if (!a.B && b) {
        a.B = !0;
        r5.cH(a);
        try {
          a.cH();
        } catch (e) {
          var c, d;
          null == (d = F5.rD) ||
            d.call(F5, null == (c = a.j) ? void 0 : c.iy, e);
        }
        a.el = null;
        b.__instance && delete b.__instance;
      }
    },
    Tmb = function (a) {
      if ("function" === typeof a.children) return a.children(), null;
      a = g.u(a.children);
      for (var b = a.next(); !b.done; b = a.next()) (b = b.value), b();
      return null;
    },
    Umb = function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = void 0,
          d = void 0,
          e = void 0,
          f = a[b];
        f &&
          (null == (e = f._disposeRef) || e.call(f),
          null == (d = f.hs) || d.call(f),
          f.__instance &&
            ((d = f.__instance), Smb(d, f), null == (c = d.G) || c.call(d)),
          Umb(f.childNodes));
      }
    },
    Wmb = function (a) {
      1 === Vmb.push(a) &&
        requestAnimationFrame(function () {
          setTimeout(function () {
            var b = [].concat(g.pa(Vmb));
            Vmb = [];
            b = g.u(b);
            for (var c = b.next(); !c.done; c = b.next()) {
              c = c.value;
              try {
                Umb(c);
              } catch (e) {
                var d = (c = void 0);
                null == (d = (c = F5).rD) || d.call(c, "unknown", e);
              }
            }
          });
        });
    },
    R5 = function (a, b) {
      return Q5.apply(null, [a, b].concat(g.pa(g.Ka.apply(2, arguments))));
    },
    S5 = function (a, b) {
      var c = Q5;
      Q5 = a;
      try {
        return b();
      } finally {
        Q5 = c;
      }
    },
    Xmb = function (a) {
      Llb(function () {
        return S5(Nlb, a);
      });
    },
    Ymb = function (a) {
      a = document.createTextNode(String(a));
      a.vU = !0;
      return a;
    },
    T5 = function (a) {
      a = typeof a;
      return "string" === a || "number" === a || "boolean" === a;
    },
    Zmb = function (a, b) {
      a.parentElement && a.parentElement.replaceChild(b, a);
      return b;
    },
    $mb = function (a, b) {
      var c = a[0].parentElement;
      if (c)
        if (a[0].previousSibling || a[a.length - 1].nextSibling) {
          c.insertBefore(b, a[0]);
          for (var d = a.length - 1; 0 <= d; d--) c.removeChild(a[d]);
        } else (c.textContent = ""), c.appendChild(b);
      return b;
    },
    anb = function (a, b) {
      if (a[0].parentElement)
        for (
          var c = a[0].parentElement,
            d = b.length,
            e = a.length,
            f = d,
            h = 0,
            l = 0,
            m = a[e - 1].nextSibling,
            n = null;
          h < e || l < f;

        )
          if (a[h] === b[l]) h++, l++;
          else {
            for (; a[e - 1] === b[f - 1]; ) e--, f--;
            if (e === h)
              for (
                var p = f < d ? (l ? b[l - 1].nextSibling : b[f - l]) : m;
                l < f;

              )
                c.insertBefore(b[l++], p);
            else if (f === l)
              for (; h < e; ) (n && n.has(a[h])) || c.removeChild(a[h]), h++;
            else if (a[h] === b[f - 1] && b[l] === a[e - 1])
              (p = a[--e].nextSibling),
                c.insertBefore(b[l++], a[h++].nextSibling),
                c.insertBefore(b[--f], p),
                (a[e] = b[f]);
            else {
              if (!n) for (n = new Map(), p = l; p < f; ) n.set(b[p], p++);
              p = n.get(a[h]);
              if (null == p) c.removeChild(a[h]), h++;
              else if (l < p && p < f) {
                for (
                  var q = h, r = 1, t = void 0;
                  ++q < e && q < f && null != (t = n.get(a[q])) && t === p + r;

                )
                  r++;
                if (r > p - l)
                  for (q = a[h]; l < p; ) c.insertBefore(b[l++], q);
                else c.replaceChild(b[l++], a[h++]);
              } else h++;
            }
          }
      return b;
    },
    bnb = function (a) {
      var b;
      zmb(function () {
        var c = S5(U5, a),
          d;
        for (d = b; "function" === typeof c; ) c = c();
        if (null == c ? 0 : c.type)
          throw Error("Encountered a VNode when only real nodes are expected.");
        null == d
          ? (d =
              null == c
                ? document.createTextNode("")
                : T5(c)
                ? Ymb(c)
                : c instanceof Node
                ? c
                : 0 === c.length
                ? document.createTextNode("")
                : V5(c))
          : d instanceof Node
          ? null == c
            ? (d = Zmb(d, document.createTextNode("")))
            : T5(c)
            ? d.textContent !== String(c) && (d.textContent = String(c))
            : (d =
                c instanceof Node
                  ? Zmb(d, c)
                  : 0 === c.length
                  ? Zmb(d, document.createTextNode(""))
                  : anb([d], V5(c)))
          : (d =
              null == c
                ? $mb(d, document.createTextNode(""))
                : T5(c)
                ? $mb(d, Ymb(c))
                : c instanceof Node
                ? anb(d, [c])
                : 0 === c.length
                ? $mb(d, document.createTextNode(""))
                : anb(d, V5(c)));
        if (b) {
          c = Array.isArray(b) ? b[0] : b;
          var e = c.wy,
            f = c.hs;
          c.hs = void 0;
          c = Array.isArray(d) ? d[0] : d;
          c.wy = e;
          c.wy && (c.wy.WX = c === d ? 1 : d.length);
          c.hs = f;
        }
        b = d;
      });
      return b;
    },
    V5 = function (a, b) {
      b = void 0 === b ? [] : b;
      if (null == a) return b;
      T5(a) && (a = Ymb(a));
      if (a instanceof Node) return cnb(b, a), b;
      if (Array.isArray(a)) {
        a = g.u(a);
        for (var c = a.next(); !c.done; c = a.next()) V5(c.value, b);
        return b;
      }
      if ("function" === typeof a) return V5(bnb(a), b);
      if (null == a ? 0 : a.type) {
        var d = a;
        a = S5(U5, function () {
          return R5.apply(null, [d.type, d.props].concat(g.pa(d.children)));
        });
        return V5(a, b);
      }
      throw Error("Unrecognized JSXResult type in flattening.");
    },
    cnb = function (a, b) {
      Array.isArray(a) ? a.push(b) : a.appendChild(b);
    },
    enb = function (a) {
      var b = a.type;
      if (!b.x6) return !1;
      a.props.children = 1 < a.children.length ? a.children : a.children[0];
      var c,
        d = null != (c = a.props.idomKey) ? c : a.type,
        e;
      if (v5() && (null == (e = v5().wy) ? void 0 : e.key) === d) {
        c = v5().wy;
        if (!c) throw Error("Reactive data has been lost.");
        if (!b.F_) {
          for (a = 0; a < c.WX; a++) y5 = v5();
          return !0;
        }
        b = b.F_(a.props);
        a = a.props;
        if ((c = c.props))
          (c.children = a.children), (c.L4 = a.L4), (c.fallback = a.fallback);
        L5(b);
        return !0;
      }
      a = dnb(a.type, a.props);
      a = Array.isArray(a) ? a : [a];
      a = g.u(a);
      for (b = a.next(); !b.done; b = a.next())
        u5.insertBefore(b.value, v5()), (y5 = v5());
      return !0;
    },
    dnb = function (a, b) {
      var c;
      G5(function (d) {
        c = S5(U5, function () {
          return Mlb(function () {
            return a(b);
          });
        });
        var e = Array.isArray(c) ? c[0] : c,
          f,
          h = null != (f = null == b ? void 0 : b.idomKey) ? f : a;
        f = c !== e;
        var l = a.F_;
        e.hs = d;
        e.wy = { key: h, props: l ? b : void 0, WX: f ? c.length : 1 };
      });
      return c;
    },
    gnb = function (a, b) {
      var c = g.Ka.apply(2, arguments);
      if (a === Olb) return c;
      if ("function" === typeof a) {
        var d = b;
        0 < c.length &&
          (null != d || (d = {}),
          1 === c.length ? (d.children = c[0]) : (d.children = c));
        c = fnb(a, d);
        !1 === c && (c = dnb(a, d));
        return c;
      }
      d = document.createElement(a);
      for (var e in b) K5(d, e, b[e]);
      Fmb(d, b);
      V5(c, d);
      Kmb(d, b);
      return d;
    },
    fnb = function (a, b) {
      if (a.ygb || a.x6) return !1;
      var c = new P5(null != b ? b : {});
      c.C = a;
      var d = Llb(function () {
        return c.Nw(b);
      });
      if (!(d instanceof HTMLElement)) return d;
      d.__instance = c;
      c.el = d;
      c.j = a;
      a.iy = d.tagName.toLowerCase();
      r5.BC(c);
      return d;
    },
    hnb = function (a) {
      ymb(function () {
        var b = a();
        b && nmb(b);
      });
    },
    inb = function (a) {
      var b = null,
        c;
      return {
        value: null,
        V8: function (d) {
          if (c && d !== c) {
            var e;
            null == (e = b) || e();
            c._disposeRef = void 0;
          }
          c = d;
          b = a(d) || null;
        },
        O9: function () {
          var d;
          null == (d = b) || d();
        },
      };
    },
    jnb = function (a) {
      var b = Rmb();
      if (null == b)
        throw Error(
          "A valid hook context was not found. Please ensure you are using components from TSX and not invoking the component function  directly"
        );
      var c = b.D++;
      b.zz || (b.zz = []);
      var d = b.zz;
      d[c] || (d[c] = { key: a, host: b });
      if (a !== d[c].key)
        throw Error(
          "Hook called out of order. Hooks must be invoked unconditionally and in the same order every render. This could happen if you conditionally invoke a hook."
        );
      return d[c];
    },
    knb = function (a, b) {
      return (
        !a ||
        a.length !== (null == b ? void 0 : b.length) ||
        a.some(function (c, d) {
          return c !== b[d];
        })
      );
    },
    W5 = function (a, b) {
      lnb(a, b);
    },
    mnb = function (a) {
      q5
        ? hnb(a)
        : lnb(function () {
            return Llb(a);
          }, []);
    },
    lnb = function (a, b) {
      var c = jnb("onChange"),
        d = Rmb();
      knb(c.Hg, b) &&
        ((c.Hg = b), (c.QY = a), d.vy || (d.vy = []), d.vy.push(c));
    },
    onb = function (a) {
      var b = [].concat(g.pa(a));
      a.length = 0;
      a = g.u(b);
      for (b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        nnb(b);
        var c = b.QY;
        b.QY = null;
        if ((c = null == c ? void 0 : c())) b.PY = c;
      }
    },
    nnb = function (a) {
      var b = a.PY;
      a.PY = null;
      null == b || b();
    },
    X5 = function (a) {
      var b = [];
      if (q5) return a();
      var c = jnb("useMemoInternal");
      knb(c.Hg, b) && ((c.Hg = b), (c.value = a()));
      return c.value;
    },
    Y5 = function () {
      var a = X5(function () {
        return inb(function (b) {
          a.value = b;
          return function () {
            a.value = null;
          };
        });
      });
      return a;
    },
    pnb = function (a) {
      return {
        n5: function () {
          return function (b) {
            !0 !== a(b) && b.stopPropagation();
          };
        },
      };
    },
    qnb = function (a) {
      var b = Rmb(),
        c = X5(function () {
          return { value: "function" === typeof a ? a() : a };
        });
      return [
        c.value,
        function (d) {
          if (null !== O5) throw Error("Can't set state during rendering");
          c.value = "function" === typeof d ? d(c.value) : d;
          b.SL = { mP: b.state, uO: !0 };
          Xmb(function () {
            if (b.el) {
              var e,
                f = {
                  props: b.props,
                  type: b.j,
                  children: null != (e = b.props.children) ? e : [],
                };
              try {
                Nmb(b.el, f, !0);
              } catch (m) {
                var h, l;
                null == (l = F5.rD) ||
                  l.call(F5, null == (h = b.j) ? void 0 : h.iy, m);
              }
            }
          });
        },
      ];
    },
    rnb = function () {
      return X5(function () {
        var a = null;
        return {
          get value() {
            return a;
          },
          set value(b) {
            if (null !== O5) throw Error("Can't update value during rendering");
            a = b;
          },
        };
      });
    },
    vnb = function (a) {
      var b = snb;
      tnb.push(a);
      unb ||
        (b(function () {
          for (var c = g.u(tnb), d = c.next(); !d.done; d = c.next())
            (d = d.value), d();
          tnb.length = 0;
          unb = !1;
        }),
        (unb = !0));
    },
    snb = function (a) {
      Promise.resolve().then(a);
    },
    wnb = function (a) {
      a = g.u(qnb(a));
      var b = a.next().value,
        c = a.next().value;
      return [
        b,
        function (d) {
          vnb(function () {
            c(d);
          });
        },
      ];
    },
    xnb = function (a) {
      function b() {
        var l = g.oU(a.J) ? "Hide more Shorts" : "Hide more videos";
        e(l);
      }
      var c = g.u(qnb("Hide more videos")),
        d = c.next().value,
        e = c.next().value;
      W5(
        function () {
          var l = a.J;
          l.addEventListener("videodatachange", b);
          return function () {
            l.removeEventListener("videodatachange", b);
          };
        },
        [a.J]
      );
      var f = X5(function () {
          return new g.hG(g.uG()).element;
        }),
        h = Y5();
      mnb(function () {
        h.value.appendChild(f);
      });
      return R5(
        "button",
        {
          class: "ytp-button ytp-collapse",
          "aria-label": d,
          "on:click": pnb(function () {
            a.action && a.action();
          }),
        },
        R5("div", { class: "ytp-collapse-icon", el: h, skip: !0 })
      );
    },
    ynb = function (a) {
      function b() {
        var h = g.oU(a.J) ? "More Shorts" : "More videos";
        e(h);
      }
      var c = g.u(wnb("More videos")),
        d = c.next().value,
        e = c.next().value,
        f = Y5();
      W5(
        function () {
          a.JQ && (a.JQ.value = f.value);
        },
        [a.JQ]
      );
      W5(
        function () {
          var h = a.J;
          h.addEventListener("videodatachange", b);
          return function () {
            h.removeEventListener("videodatachange", b);
          };
        },
        [a.J]
      );
      return R5(
        "button",
        {
          el: f,
          class: "ytp-button ytp-expand",
          "on:click": pnb(function () {
            a.action && a.action();
          }),
        },
        d
      );
    },
    znb = function (a, b) {
      var c = rnb();
      W5(
        function () {
          var d = new g.u2(a, b);
          d.B = !0;
          c.value = d;
          return function () {
            var e;
            null == (e = c.value) || e.dispose();
          };
        },
        [a, b]
      );
      return c;
    },
    Anb = function (a) {
      function b(x) {
        a: {
          var C = g.u([1, 16, 32]);
          for (var F = C.next(); !F.done; F = C.next())
            if (g.TG(x, F.value)) {
              C = !0;
              break a;
            }
          C = !1;
        }
        if (!C) {
          var G;
          null != (G = p.value) &&
            G.vD() &&
            h(g.TG(x, 4) && !g.TG(x, 2) && !g.TG(x, 1024));
        }
      }
      function c() {
        b(a.J.Sb());
      }
      function d(x) {
        b(x.state);
      }
      var e = g.u(wnb(!1)),
        f = e.next().value,
        h = e.next().value,
        l = g.u(wnb(!1));
      e = l.next().value;
      var m = l.next().value,
        n = Y5(),
        p = znb(a.J, a.rb),
        q = Y5();
      l = rnb();
      var r = rnb();
      W5(
        function () {
          var x = a.J,
            C = g.oU(x) ? 157212 : 172777;
          r.value = new g.J();
          x.xb(q.value, r.value, C);
          x.addEventListener("presentingplayerstatechange", d);
          x.addEventListener("videodatachange", c);
          C = "0" === x.U().controlsType;
          g.Fu(x.getRootNode(), "ytp-pause-overlay-controls-hidden", C);
          return function () {
            x.removeEventListener("videodatachange", c);
            x.removeEventListener("presentingplayerstatechange", d);
            var F;
            null == (F = r.value) || F.dispose();
          };
        },
        [a.J]
      );
      W5(
        function () {
          var x;
          null == (x = p.value) || x.Fa(n.value);
        },
        [p]
      );
      var t = a.J;
      if (f)
        if ((g.Fu(t.getRootNode(), "ytp-expand-pause-overlay", !e), e))
          l.value.focus();
        else {
          var v = p.value;
          g.v2(v);
          v.show();
          q.value.focus();
        }
      q.value && t.Wa(q.value, f && !e);
      return R5(
        "ytp-pause-overlay",
        { el: q, class: "ytp-pause-overlay", "aria-hidden": !f },
        R5(xnb, {
          J: a.J,
          rb: a.rb,
          action: function () {
            m(!0);
          },
        }),
        R5(ynb, {
          J: a.J,
          rb: a.rb,
          action: function () {
            m(!1);
          },
          JQ: l,
        }),
        R5("div", { el: n, skip: !0 })
      );
    },
    Bnb = function (a) {
      g.U.call(this, { I: "div", S: "ytp-related-on-error-overlay" });
      var b = this;
      this.api = a;
      this.K = this.B = 0;
      this.G = new g.QK(this);
      this.j = [];
      this.suggestionData = [];
      this.columns = this.containerWidth = 0;
      this.title = new g.U({
        I: "h2",
        S: "ytp-related-title",
        xa: "{{title}}",
      });
      this.previous = new g.U({
        I: "button",
        Ma: ["ytp-button", "ytp-previous"],
        W: { "aria-label": "Show previous suggested videos" },
        V: [g.qG()],
      });
      this.ma = new g.t2(function (f) {
        b.suggestions.element.scrollLeft = -f;
      });
      this.D = this.C = 0;
      this.N = !0;
      this.next = new g.U({
        I: "button",
        Ma: ["ytp-button", "ytp-next"],
        W: { "aria-label": "Show more suggested videos" },
        V: [g.rG()],
      });
      g.L(this, this.G);
      a = a.U();
      this.Y = a.D;
      g.L(this, this.title);
      this.title.Fa(this.element);
      this.suggestions = new g.U({ I: "div", S: "ytp-suggestions" });
      g.L(this, this.suggestions);
      this.suggestions.Fa(this.element);
      g.L(this, this.previous);
      this.previous.Fa(this.element);
      this.previous.Sa("click", this.T0, this);
      g.L(this, this.ma);
      for (var c = { Dz: 0 }; 16 > c.Dz; c = { Dz: c.Dz }, c.Dz++) {
        var d = new g.U({
          I: "a",
          S: "ytp-suggestion-link",
          W: { href: "{{link}}", target: a.Y, "aria-label": "{{aria_label}}" },
          V: [
            {
              I: "div",
              S: "ytp-suggestion-image",
              V: [
                {
                  I: "div",
                  W: { "data-is-live": "{{is_live}}" },
                  S: "ytp-suggestion-duration",
                  xa: "{{duration}}",
                },
              ],
            },
            {
              I: "div",
              S: "ytp-suggestion-title",
              W: { title: "{{hover_title}}" },
              xa: "{{title}}",
            },
            { I: "div", S: "ytp-suggestion-author", xa: "{{views_or_author}}" },
          ],
        });
        g.L(this, d);
        d.Fa(this.suggestions.element);
        var e = d.Ga("ytp-suggestion-link");
        g.Qr(e, "transitionDelay", c.Dz / 20 + "s");
        this.G.T(
          e,
          "click",
          (function (f) {
            return function (h) {
              var l = f.Dz,
                m = b.suggestionData[l],
                n = m.sessionData;
              g.bS(b.api.U()) &&
              b.api.L(
                "web_player_log_click_before_generating_ve_conversion_params"
              )
                ? (b.api.tb(b.j[l].element),
                  (l = m.Qk()),
                  (m = {}),
                  g.eSa(b.api, m, "emb_rel_err"),
                  (l = g.Bl(l, m)),
                  g.KU(l, b.api, h))
                : g.JU(h, b.api, b.Y, n || void 0) &&
                  b.api.zo(m.videoId, n, m.playlistId);
            };
          })(c)
        );
        this.j.push(d);
      }
      g.L(this, this.next);
      this.next.Fa(this.element);
      this.next.Sa("click", this.S0, this);
      this.G.T(this.api, "videodatachange", this.onVideoDataChange);
      this.resize(this.api.qb().getPlayerSize());
      this.onVideoDataChange();
      this.show();
    },
    Cnb = function (a, b) {
      if (
        a.api
          .U()
          .L("web_player_log_click_before_generating_ve_conversion_params")
      )
        for (
          var c = Math.floor(-a.C / (a.D + a.B)),
            d = Math.min(c + a.columns, a.suggestionData.length) - 1;
          c <= d;
          c++
        )
          a.api.Wa(a.j[c].element, b);
    },
    Dnb = function (a) {
      a.next.element.style.bottom = a.K + "px";
      a.previous.element.style.bottom = a.K + "px";
      var b = a.C,
        c = a.containerWidth - a.suggestionData.length * (a.D + a.B);
      g.Fu(a.element, "ytp-scroll-min", 0 <= b);
      g.Fu(a.element, "ytp-scroll-max", b <= c);
    },
    Enb = function (a) {
      for (var b = 0; b < a.suggestionData.length; b++) {
        var c = a.suggestionData[b],
          d = a.j[b],
          e = c.shortViewCount ? c.shortViewCount : c.author,
          f = c.Qk(),
          h = a.api.U();
        if (
          g.bS(h) &&
          !h.L("web_player_log_click_before_generating_ve_conversion_params")
        ) {
          var l = {};
          g.bU(a.api, "addEmbedsConversionTrackingParams", [l]);
          f = g.Bl(f, g.BP(l, "emb_rel_err"));
        }
        d.element.style.display = "";
        l = d.Ga("ytp-suggestion-title");
        g.Ru.test(c.title)
          ? (l.dir = "rtl")
          : g.meb.test(c.title) && (l.dir = "ltr");
        l = d.Ga("ytp-suggestion-author");
        g.Ru.test(e) ? (l.dir = "rtl") : g.meb.test(e) && (l.dir = "ltr");
        d.update({
          views_or_author: e,
          duration: c.isLivePlayback
            ? "Live"
            : c.lengthSeconds
            ? g.bH(c.lengthSeconds)
            : "",
          link: f,
          hover_title: c.title,
          title: c.title,
          aria_label: c.ariaLabel || null,
          is_live: c.isLivePlayback,
        });
        e = d.Ga("ytp-suggestion-image");
        f = c.Ug();
        e.style.backgroundImage = f ? "url(" + f + ")" : "";
        h.L("web_player_log_click_before_generating_ve_conversion_params") &&
          (a.api.jg(d.element, d),
          (c = (c = c.sessionData) && c.itct) && a.api.Fg(d.element, c));
      }
      for (; b < a.j.length; b++) a.j[b].element.style.display = "none";
      Dnb(a);
    },
    Z5 = function (a) {
      g.VV.call(this, a);
      var b = this;
      this.j = null;
      var c = a.U(),
        d = {
          I: "svg",
          W: {
            fill: "#fff",
            height: "100%",
            viewBox: "0 0 24 24",
            width: "100%",
          },
          V: [
            { I: "path", W: { d: "M0 0h24v24H0V0z", fill: "none" } },
            {
              I: "path",
              W: {
                d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z",
              },
            },
          ],
        };
      g.jS(c) &&
        (d = {
          I: "svg",
          W: {
            fill: "none",
            height: "100%",
            viewBox: "0 0 25 25",
            width: "100%",
          },
          V: [
            {
              I: "g",
              W: { "clip-path": "url(#clip0)", fill: "#fff" },
              V: [
                {
                  I: "path",
                  W: {
                    d: "M12.57.98C6.21.98 1.05 6.14 1.05 12.5c0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52C24.09 6.14 18.93.98 12.57.98zm0 18.34c-3.77 0-6.82-3.05-6.82-6.82 0-3.77 3.05-6.82 6.82-6.82 3.77 0 6.82 3.05 6.82 6.82 0 3.77-3.05 6.82-6.82 6.82z",
                  },
                },
                {
                  I: "path",
                  W: {
                    d: "M12.57 6.52c-3.29 0-5.98 2.68-5.98 5.98 0 3.3 2.68 5.98 5.98 5.98 3.3 0 5.98-2.68 5.98-5.98 0-3.3-2.69-5.98-5.98-5.98zm-2.25 9.38V9.1l5.88 3.4-5.88 3.4z",
                  },
                },
              ],
            },
            {
              I: "defs",
              V: [
                {
                  I: "clipPath",
                  W: { id: "clip0" },
                  V: [
                    {
                      I: "path",
                      W: {
                        d: "M0 0h24v24H0z",
                        fill: "#fff",
                        transform: "translate(.57 .5)",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        });
      var e = { target: c.Y },
        f = ["ytp-small-redirect"];
      c.C
        ? f.push("no-link")
        : ((c = g.zS(c)),
          (e.href = c),
          (e["aria-label"] = "Visit YouTube to search for more videos"));
      var h = new g.U({ I: "a", Ma: f, W: e, V: [d] });
      h.Fa(this.element);
      a.xb(h.element, this, 178053);
      this.T(h.element, "click", function (l) {
        Fnb(b, l, h.element);
      });
      g.L(this, h);
      a.U().C ||
        ((this.j = new Bnb(a)), this.j.Fa(this.element), g.L(this, this.j));
      this.T(a, "videodatachange", function () {
        b.show();
      });
      this.resize(this.api.qb().getPlayerSize());
    },
    Fnb = function (a, b, c) {
      b.preventDefault();
      a.api.tb(c);
      b = c.getAttribute("href");
      c = {};
      g.bU(a.api, "addEmbedsConversionTrackingParams", [c]);
      b = g.kd(c) ? b : g.Bl(b, c);
      g.Dn(b);
    },
    Gnb = function (a, b) {
      a.Ga("ytp-error-content").style.paddingTop = "0px";
      var c = a.Ga("ytp-error-content"),
        d = c.clientHeight;
      a.j && a.j.resize(b, b.height - d);
      c.style.paddingTop =
        (b.height - (a.j ? a.j.element.clientHeight : 0)) / 2 - d / 2 + "px";
    },
    Jnb = function (a, b) {
      var c = a.api.U(),
        d;
      b.reason &&
        (Hnb(b.reason) ? (d = g.pG(b.reason)) : (d = g.WV(g.oG(b.reason))),
        a.le(d, "content"));
      var e;
      b.subreason &&
        (Hnb(b.subreason)
          ? (e = g.pG(b.subreason))
          : (e = g.WV(g.oG(b.subreason))),
        a.le(e, "subreason"));
      if (b.proceedButton && b.proceedButton.buttonRenderer) {
        d = a.Ga("ytp-error-content-wrap-subreason");
        b = b.proceedButton.buttonRenderer;
        var f = g.vf("A");
        if (
          b.text &&
          b.text.simpleText &&
          ((e = b.text.simpleText),
          (f.textContent = e),
          !Inb(d, e) && (!c.C || c.embedsErrorLinks))
        ) {
          var h;
          c =
            null == (h = g.T(null == b ? void 0 : b.navigationEndpoint, g.AG))
              ? void 0
              : h.url;
          var l;
          h =
            null == (l = g.T(null == b ? void 0 : b.navigationEndpoint, g.AG))
              ? void 0
              : l.target;
          c &&
            (f.setAttribute("href", c),
            a.api.xb(f, a, 178424),
            a.T(f, "click", function (m) {
              Fnb(a, m, f);
            }));
          h && f.setAttribute("target", h);
          l = g.vf("DIV");
          l.appendChild(f);
          d.appendChild(l);
        }
      }
    },
    Hnb = function (a) {
      if (a.runs)
        for (var b = 0; b < a.runs.length; b++)
          if (a.runs[b].navigationEndpoint) return !0;
      return !1;
    },
    Inb = function (a, b) {
      a = g.Xe("A", a);
      for (var c = 0; c < a.length; c++) if (a[c].textContent === b) return !0;
      return !1;
    },
    $5 = function (a, b) {
      g.U.call(this, {
        I: "a",
        Ma: ["ytp-impression-link"],
        W: {
          target: "{{target}}",
          href: "{{url}}",
          "aria-label": "Watch on YouTube",
        },
        V: [
          {
            I: "div",
            S: "ytp-impression-link-content",
            W: { "aria-hidden": "true" },
            V: [
              { I: "div", S: "ytp-impression-link-text", xa: "Watch on" },
              { I: "div", S: "ytp-impression-link-logo", V: [Klb()] },
            ],
          },
        ],
      });
      this.api = a;
      this.rb = b;
      this.updateValue("target", a.U().Y);
      this.api.xb(this.element, this, 96714);
      this.T(this.api, "presentingplayerstatechange", this.Vi);
      this.T(this.api, "videoplayerreset", this.j);
      this.T(this.element, "click", this.onClick);
      this.j();
    },
    Knb = function (a) {
      var b = {};
      g.bU(a.api, "addEmbedsConversionTrackingParams", [b]);
      return g.Bl(a.api.getVideoUrl(), g.BP(b, "emb_imp_woyt"));
    },
    a6 = function (a) {
      g.U.call(this, {
        I: "div",
        Ma: ["ytp-mobile-a11y-hidden-seek-button"],
        V: [
          {
            I: "button",
            Ma: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"],
            W: { "aria-label": "Rewind 10 seconds", "aria-hidden": "false" },
          },
          {
            I: "button",
            Ma: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"],
            W: {
              "aria-label": "Fast forward 10 seconds",
              "aria-hidden": "false",
            },
          },
        ],
      });
      this.api = a;
      this.j = this.Ga("ytp-mobile-a11y-hidden-seek-button-rewind");
      this.forwardButton = this.Ga(
        "ytp-mobile-a11y-hidden-seek-button-forward"
      );
      this.api.xb(this.j, this, 141902);
      this.api.xb(this.forwardButton, this, 141903);
      this.T(this.api, "presentingplayerstatechange", this.Vi);
      this.T(this.j, "click", this.B);
      this.T(this.forwardButton, "click", this.C);
      this.Vi();
    },
    b6 = function (a) {
      g.U.call(this, {
        I: "div",
        S: "ytp-muted-autoplay-endscreen-overlay",
        V: [
          {
            I: "div",
            S: "ytp-muted-autoplay-end-panel",
            V: [
              {
                I: "button",
                Ma: ["ytp-muted-autoplay-end-text", "ytp-button"],
                xa: "{{text}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.D = this.Ga("ytp-muted-autoplay-end-panel");
      this.B = !1;
      this.api.xb(this.element, this, 52428);
      this.T(this.api, "presentingplayerstatechange", this.C);
      this.T(a, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
      this.Sa("click", this.onClick);
      this.hide();
    },
    c6 = function (a) {
      var b = a.U();
      g.U.call(this, {
        I: "a",
        Ma: ["ytp-watermark", "yt-uix-sessionlink"],
        W: {
          target: b.Y,
          href: "{{url}}",
          "aria-label": g.mK("Watch on $WEBSITE", { WEBSITE: g.oS(b) }),
          "data-sessionlink": "feature=player-watermark",
        },
        V: [Klb()],
      });
      this.api = a;
      this.j = null;
      this.B = !1;
      this.state = a.Sb();
      a.xb(this.element, this, 76758);
      this.T(a, "videodatachange", this.J_);
      this.T(a, "videodatachange", this.onVideoDataChange);
      this.T(a, "presentingplayerstatechange", this.onStateChange);
      this.T(a, "appresize", this.Kb);
      this.Gc(this.state);
      this.onVideoDataChange();
      this.Kb(a.qb().getPlayerSize());
    },
    Nnb = function (a) {
      g.U.call(this, {
        I: "div",
        S: "ytp-muted-autoplay-overlay",
        V: [
          {
            I: "div",
            S: "ytp-muted-autoplay-bottom-buttons",
            V: [
              {
                I: "button",
                Ma: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                W: { "aria-label": "Muted playback indicator" },
                V: [
                  {
                    I: "div",
                    Ma: ["ytp-muted-autoplay-equalizer-icon"],
                    V: [
                      {
                        I: "svg",
                        W: {
                          height: "100%",
                          version: "1.1",
                          viewBox: "-4 -4 24 24",
                          width: "100%",
                        },
                        V: [
                          {
                            I: "g",
                            W: { fill: "#fff" },
                            V: [
                              {
                                I: "rect",
                                S: "ytp-equalizer-bar-left",
                                W: { height: "9", width: "4", x: "1", y: "7" },
                              },
                              {
                                I: "rect",
                                S: "ytp-equalizer-bar-middle",
                                W: { height: "14", width: "4", x: "6", y: "2" },
                              },
                              {
                                I: "rect",
                                S: "ytp-equalizer-bar-right",
                                W: {
                                  height: "12",
                                  width: "4",
                                  x: "11",
                                  y: "4",
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
      var b = this;
      this.api = a;
      this.bottomButtons = this.Ga("ytp-muted-autoplay-bottom-buttons");
      this.Ga("ytp-muted-autoplay-equalizer");
      this.C = new g.tu(this.f6, 4e3, this);
      this.B = !1;
      a.xb(this.element, this, 39306);
      this.T(a, "presentingplayerstatechange", this.YK);
      this.T(a, "onMutedAutoplayStarts", function () {
        Lnb(b);
        b.YK();
        Mnb(b);
        b.B = !1;
      });
      this.T(a, "onAutoplayBlocked", this.onAutoplayBlocked);
      this.Sa("click", this.onClick);
      this.T(a, "onMutedAutoplayEnds", this.onMutedAutoplayEnds);
      this.hide();
      g.cU(a.app) && (Lnb(this), this.YK(), Mnb(this));
    },
    Mnb = function (a) {
      a.Gb && a.j && (a.j.show(), a.C.start());
    },
    Lnb = function (a) {
      a.watermark ||
        ((a.watermark = new c6(a.api)),
        g.L(a, a.watermark),
        a.watermark.Fa(a.bottomButtons, 0),
        g.Fu(a.watermark.element, "ytp-muted-autoplay-watermark", !0),
        (a.j = new g.NG(a.watermark, 0, !0, 100)),
        g.L(a, a.j));
    },
    d6 = function (a, b) {
      g.U.call(this, {
        I: "div",
        S: "ytp-pause-overlay",
        W: { tabIndex: "-1" },
      });
      var c = this;
      this.api = a;
      this.C = new g.QK(this);
      this.D = new g.NG(
        this,
        1e3,
        !1,
        100,
        function () {
          c.j.B = !1;
        },
        function () {
          c.j.B = !0;
        }
      );
      this.B = !1;
      this.expandButton = new g.U({
        I: "button",
        Ma: ["ytp-button", "ytp-expand"],
        xa: g.oU(this.api) ? "More Shorts" : "More videos",
      });
      "0" === a.U().controlsType &&
        g.Bu(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
      g.L(this, this.C);
      g.L(this, this.D);
      var d = new g.U({
        I: "button",
        Ma: ["ytp-button", "ytp-collapse"],
        W: {
          "aria-label": g.oU(this.api)
            ? "Hide more Shorts"
            : "Hide more videos",
        },
        V: [{ I: "div", S: "ytp-collapse-icon", V: [g.uG()] }],
      });
      g.L(this, d);
      d.Fa(this.element);
      d.Sa("click", this.G, this);
      g.L(this, this.expandButton);
      this.expandButton.Fa(this.element);
      this.expandButton.Sa("click", this.K, this);
      this.j = new g.u2(a, b);
      g.L(this, this.j);
      this.j.B = !1;
      this.j.Fa(this.element);
      g.oU(this.api)
        ? this.api.xb(this.element, this, 157212)
        : this.api.xb(this.element, this, 172777);
      this.C.T(this.api, "presentingplayerstatechange", this.Ta);
      this.C.T(this.api, "videodatachange", this.Ta);
      this.hide();
    },
    e6 = function (a) {
      g.U.call(this, {
        I: "div",
        Ma: ["ytp-player-content", "ytp-iv-player-content"],
        V: [
          {
            I: "div",
            S: "ytp-countdown-timer",
            V: [
              {
                I: "svg",
                W: {
                  height: "100%",
                  version: "1.1",
                  viewBox: "0 0 72 72",
                  width: "100%",
                },
                V: [
                  {
                    I: "circle",
                    S: "ytp-svg-countdown-timer-ring",
                    W: {
                      cx: "-36",
                      cy: "36",
                      "fill-opacity": "0",
                      r: "33.5",
                      stroke: "#FFFFFF",
                      "stroke-dasharray": "211",
                      "stroke-dashoffset": "-211",
                      "stroke-width": "4",
                      transform: "rotate(-90)",
                    },
                  },
                  {
                    I: "circle",
                    S: "ytp-svg-countdown-timer-background",
                    W: {
                      cx: "-36",
                      cy: "36",
                      "fill-opacity": "0",
                      r: "33.5",
                      stroke: "#FFFFFF",
                      "stroke-opacity": "0.3",
                      "stroke-width": "4",
                      transform: "rotate(-90)",
                    },
                  },
                ],
              },
              { I: "span", S: "ytp-countdown-timer-time", xa: "{{duration}}" },
            ],
          },
        ],
      });
      this.api = a;
      this.K = this.Ga("ytp-svg-countdown-timer-ring");
      this.j = null;
      this.D = this.C = 0;
      this.B = !1;
      this.G = 0;
      this.api.xb(this.element, this, 159628);
    },
    Pnb = function (a) {
      a.j ||
        ((a.C = 5e3),
        (a.D = (0, g.FD)()),
        (a.j = new g.qu(function () {
          Onb(a);
        }, null)),
        Onb(a));
    },
    Onb = function (a) {
      if (!a.B) {
        var b = Math.min((0, g.FD)() - a.D, a.C);
        var c = a.C - b;
        b = 0 === a.C ? 0 : Math.max(c / a.C, 0);
        c = Math.round(c / 1e3);
        a.K.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
        a.updateValue("duration", c);
        0 >= b && a.j ? f6(a) : a.j && a.j.start();
      }
    },
    f6 = function (a) {
      a.j && (a.j.dispose(), (a.j = null), (a.B = !1));
    },
    Rnb = function (a) {
      g.zV.call(this, a);
      this.J = a;
      this.j = new g.QK(this);
      this.B = null;
      this.N = !1;
      this.countdownTimer = null;
      this.Y = !1;
      Qnb(this);
      g.L(this, this.j);
      this.load();
    },
    Tnb = function (a) {
      var b = g.Acb(a.J);
      b !== a.Y &&
        ((a.Y = b),
        a.G && (a.G.dispose(), (a.G = null)),
        a.C && (a.C.dispose(), (a.C = null)),
        a.D && (a.D.dispose(), (a.D = null)),
        a.B && (a.B.stop(), a.B.dispose(), (a.B = null)),
        b &&
          ((b = g.eU(a.J)),
          g.oU(a.J) &&
            ((a.D = new g.U({
              I: "div",
              S: "ytp-pause-overlay-backdrop",
              W: { tabIndex: "-1" },
            })),
            g.L(a, a.D),
            g.rU(a.J, a.D.element, 4),
            (a.B = new g.NG(a.D, 1e3, !1, 100)),
            g.L(a, a.B),
            a.D.hide()),
          (a.G = new g.U({
            I: "div",
            S: "ytp-pause-overlay-container",
            W: { tabIndex: "-1" },
          })),
          g.L(a, a.G),
          a.J.L("embeds_web_enable_keto_pause_overlay")
            ? Nmb(a.G.element, R5(Anb, { J: a.J, rb: b }))
            : ((a.C = new d6(a.J, b)), g.L(a, a.C), a.C.Fa(a.G.element)),
          g.rU(a.J, a.G.element, 4),
          Snb(a, a.J.Sb())));
    },
    Snb = function (a, b) {
      a.B &&
        ((!g.TG(b, 4) && !g.TG(b, 2)) || g.TG(b, 1024)
          ? a.B.hide()
          : a.B.show());
    },
    Qnb = function (a) {
      var b = a.J;
      a = !!g.oU(b);
      g.Fu(b.getRootNode(), "ytp-shorts-mode", a);
      if ((b = b.getVideoData())) b.eU = a;
    },
    g6 = function (a, b) {
      var c = a.J.U();
      a = {
        adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
        breakType:
          0 === a.J.getCurrentTime()
            ? "EMBEDS_AD_BREAK_TYPE_PRE_ROLL"
            : 0 === a.J.getPlayerState()
            ? "EMBEDS_AD_BREAK_TYPE_POST_ROLL"
            : "EMBEDS_AD_BREAK_TYPE_MID_ROLL",
        embedUrl: g.Sea(a.J.U().loaderUrl),
        eventType: b,
        youtubeHost: g.vl(a.J.U().Ka) || "",
      };
      c.L("embeds_add_player_mode_to_ad_events") &&
        (a.embeddedPlayerMode = c.Da);
      g.qD("embedsAdEvent", a);
    };
  var q5 = !1;
  var r5 = {
    efb: function () {},
    ffb: function () {},
    bhb: function () {},
    ifb: function () {},
    MU: function () {},
    gfb: function () {},
    B4: function () {},
    BC: function () {},
    cH: function () {},
    C4: function () {},
  };
  var Tlb = Object.prototype.hasOwnProperty;
  Qlb.prototype = Object.create(null);
  var Pmb = Wlb();
  var D5 = null;
  var dmb =
    ("undefined" !== typeof Node && Node.prototype.getRootNode) ||
    function () {
      for (var a = this, b = a; a; ) (b = a), (a = a.parentNode);
      return b;
    };
  var w5 = null,
    y5 = null,
    u5 = null,
    A5 = null,
    B5 = [],
    z5 = amb,
    C5 = [],
    Mmb = (function (a) {
      return emb(function (b, c, d) {
        u5 = y5 = b;
        y5 = null;
        c(d);
        x5(null);
        y5 = u5;
        u5 = u5.parentNode;
        return b;
      }, a);
    })(),
    Lmb = (function (a) {
      return emb(function (b, c, d) {
        var e = { nextSibling: b };
        y5 = e;
        c(d);
        u5 && x5(b.nextSibling);
        return e === y5 ? null : y5;
      }, a);
    })();
  var E5 = [],
    Qmb = 0;
  var M5 = new Qlb();
  var F5 = {
      iH: !1,
      attributes: Wlb(),
      rD: function (a, b) {
        throw b;
      },
      kZ: function () {
        throw Error("renderComponent not implemented");
      },
      YN: function () {
        return !1;
      },
      H$: function (a) {
        if (F5.iH) return a;
      },
      M4: g.Ncb,
    },
    hmb = [];
  var H5 = null;
  var vmb = [];
  var Hmb = new Set(
    "allowfullscreen async autofocus autoplay checked controls default defer disabled formnovalidate hidden ismap itemscope jsshadow jsslot loop multiple muted novalidate open playsinline readonly required reversed scoped seamless selected spellcheck sortable typemustmatch".split(
      " "
    )
  );
  var Bmb = {
      align: 1,
      alt: 1,
      "aria-activedescendant": 10,
      "aria-atomic": 1,
      "aria-autocomplete": 1,
      "aria-busy": 1,
      "aria-checked": 1,
      "aria-controls": 10,
      "aria-current": 1,
      "aria-disabled": 1,
      "aria-dropeffect": 1,
      "aria-expanded": 1,
      "aria-haspopup": 1,
      "aria-hidden": 1,
      "aria-invalid": 1,
      "aria-label": 1,
      "aria-labelledby": 10,
      "aria-level": 1,
      "aria-live": 1,
      "aria-multiline": 1,
      "aria-multiselectable": 1,
      "aria-orientation": 1,
      "aria-owns": 10,
      "aria-posinset": 1,
      "aria-pressed": 1,
      "aria-readonly": 1,
      "aria-relevant": 1,
      "aria-required": 1,
      "aria-selected": 1,
      "aria-setsize": 1,
      "aria-sort": 1,
      "aria-valuemax": 1,
      "aria-valuemin": 1,
      "aria-valuenow": 1,
      "aria-valuetext": 1,
      async: 8,
      autocapitalize: 1,
      autocomplete: 1,
      autocorrect: 1,
      autofocus: 1,
      autoplay: 1,
      bgcolor: 1,
      border: 1,
      cellpadding: 1,
      cellspacing: 1,
      checked: 1,
      cite: 3,
      class: 1,
      color: 1,
      cols: 1,
      colspan: 1,
      contenteditable: 1,
      controls: 1,
      datetime: 1,
      dir: 8,
      disabled: 1,
      download: 1,
      draggable: 1,
      enctype: 1,
      face: 1,
      for: 10,
      formenctype: 1,
      frameborder: 1,
      height: 1,
      hidden: 1,
      href: 4,
      hreflang: 1,
      id: 10,
      ismap: 1,
      itemid: 1,
      itemprop: 1,
      itemref: 1,
      itemscope: 1,
      itemtype: 1,
      label: 1,
      lang: 1,
      list: 10,
      loading: 8,
      loop: 1,
      max: 1,
      maxlength: 1,
      media: 1,
      min: 1,
      minlength: 1,
      multiple: 1,
      muted: 1,
      name: 10,
      nonce: 1,
      open: 1,
      placeholder: 1,
      poster: 3,
      preload: 1,
      rel: 1,
      required: 1,
      reversed: 1,
      role: 1,
      rows: 1,
      rowspan: 1,
      selected: 1,
      shape: 1,
      size: 1,
      sizes: 1,
      slot: 1,
      span: 1,
      spellcheck: 1,
      src: 4,
      srcset: 11,
      start: 1,
      step: 1,
      style: 5,
      summary: 1,
      tabindex: 1,
      target: 8,
      title: 1,
      translate: 1,
      type: 1,
      valign: 1,
      value: 1,
      width: 1,
      wrap: 1,
    },
    Amb = {
      a: { href: [{ Dd: 3 }] },
      area: { href: [{ Dd: 3 }] },
      audio: { src: [{ Dd: 3 }] },
      button: { formaction: [{ Dd: 3 }], formmethod: [{ Dd: 1 }] },
      form: { action: [{ Dd: 3 }], method: [{ Dd: 1 }] },
      iframe: { srcdoc: [{ Dd: 2 }] },
      img: { src: [{ Dd: 3 }] },
      input: {
        accept: [{ Dd: 1 }],
        formaction: [{ Dd: 3 }],
        formmethod: [{ Dd: 1 }],
        pattern: [{ Dd: 1 }],
        readonly: [{ Dd: 1 }],
        src: [{ Dd: 3 }],
      },
      link: {
        href: [
          { Dd: 3, Zh: "rel", Di: "alternate" },
          { Dd: 3, Zh: "rel", Di: "author" },
          { Dd: 3, Zh: "rel", Di: "bookmark" },
          { Dd: 3, Zh: "rel", Di: "canonical" },
          { Dd: 3, Zh: "rel", Di: "cite" },
          { Dd: 3, Zh: "rel", Di: "help" },
          { Dd: 3, Zh: "rel", Di: "icon" },
          { Dd: 3, Zh: "rel", Di: "license" },
          { Dd: 3, Zh: "rel", Di: "next" },
          { Dd: 3, Zh: "rel", Di: "prefetch" },
          { Dd: 3, Zh: "rel", Di: "dns-prefetch" },
          { Dd: 3, Zh: "rel", Di: "prerender" },
          { Dd: 3, Zh: "rel", Di: "preconnect" },
          { Dd: 3, Zh: "rel", Di: "preload" },
          { Dd: 3, Zh: "rel", Di: "prev" },
          { Dd: 3, Zh: "rel", Di: "search" },
          { Dd: 3, Zh: "rel", Di: "subresource" },
        ],
      },
      script: { defer: [{ Dd: 1 }] },
      source: { src: [{ Dd: 3 }] },
      textarea: { readonly: [{ Dd: 1 }] },
      video: { src: [{ Dd: 3 }] },
    };
  g.nv.getInstance();
  J5.prototype.toString = function () {
    return this.cX;
  };
  var Unb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
    h6 = {},
    Dmb =
      ((h6[1] = { rq: null, zt: null, Rr: null }),
      (h6[2] = {
        rq: function () {
          return g.ke.toString();
        },
        zt: function (a) {
          return a instanceof g.le;
        },
        Rr: function (a) {
          return g.me(a);
        },
      }),
      (h6[3] = {
        rq: function (a, b, c) {
          return Unb.test(c) ? c : g.ke.toString();
        },
        zt: function (a) {
          return a instanceof g.ce;
        },
        Rr: function (a) {
          return g.de(a);
        },
      }),
      (h6[4] = {
        rq: function () {
          return g.ke.toString();
        },
        zt: function (a) {
          return a instanceof g.$d;
        },
        Rr: function (a) {
          return g.ae(a);
        },
      }),
      (h6[5] = { rq: null, zt: null, Rr: null }),
      (h6[7] = { rq: null, zt: null, Rr: null }),
      (h6[8] = { rq: null, zt: null, Rr: null }),
      (h6[10] = {
        rq: null,
        zt: function (a) {
          return a instanceof J5 || a instanceof g.Sd;
        },
        Rr: function (a) {
          if (a instanceof g.Sd) a = g.Td(a);
          else {
            if (!(a instanceof J5 && a.constructor === J5))
              throw Error("Unwrap non-TrustedId");
            a = a.cX;
          }
          return a;
        },
      }),
      h6);
  var Vnb = Wlb(),
    Imb = Vnb.__default,
    Jmb = Vnb.style;
  var Omb = Symbol("ATTR_TAG_VALUE");
  var Wnb = {};
  imb({
    attributes:
      ((Wnb.__default = function () {
        return K5;
      }),
      (Wnb.style = function () {
        return K5;
      }),
      Wnb),
  });
  N5.prototype.BC = function () {};
  N5.prototype.B4 = function () {};
  N5.prototype.cH = function () {};
  N5.prototype.C4 = function () {};
  var O5 = null;
  g.w(P5, N5);
  P5.prototype.Nw = function (a) {
    var b = this,
      c = O5;
    O5 = this;
    this.D = 0;
    try {
      return mmb(this.K, function () {
        return b.C(a);
      });
    } finally {
      g.Ocb ? (O5 = c) : (O5 = null);
    }
  };
  var Vmb = [];
  F5.kZ = function (a) {
    try {
      var b = a.type,
        c = b.iy;
      if (g.Ocb && b === Tmb) (a.props.children = a.children), b(a.props);
      else if (jmb(b) && !F5.iH) L5(b(a.props));
      else {
        0 < a.children.length && (a.props.children = a.children);
        if (F5.iH) {
          var d;
          (d = a.props).idomKey || (d.idomKey = F5.H$(b));
        }
        d = !1;
        if (c) {
          var e = cmb(c, a.props.idomKey);
          a.gq = !0;
          var f = e.__instance;
        }
        if (!f) {
          d = !0;
          var h = a.props;
          if (jmb(b)) {
            var l = new P5(h);
            l.C = b;
          } else l = new b(h);
          l.j = b;
          l.SL = { mP: l.state, uO: !1 };
          f = l;
          f.props = null;
          e && ((e.__instance = f), (f.el = e));
        }
        var m,
          n = null != (m = f.SL) ? m : { mP: f.state, uO: !1 },
          p = n.uO,
          q = n.mP;
        f.SL = void 0;
        b.m5 && (q = b.m5(a.props, q));
        c = !d && !p && !1;
        f.props = a.props;
        f.state = q;
        if (c) y5 = u5.lastChild;
        else {
          r5.MU(f);
          var r = f.Nw(f.props);
          if (r) {
            f.props.idomKey && (r.props.idomKey = f.props.idomKey);
            r.gq = a.gq;
            var t = L5(r);
            a.gq = r.gq;
            if (!b.iy)
              if (t)
                (b.iy = t.tagName.toLowerCase()),
                  (t.__instance = f),
                  (f.el = t);
              else {
                var v;
                if (null == (v = f.zz) ? 0 : v.length) {
                  var x;
                  null == (x = F5.rD) ||
                    x.call(
                      F5,
                      "unknown",
                      Error(
                        "A component used hooks, but failed to return a host element"
                      )
                    );
                }
              }
          }
          f.BC();
          r5.BC(f);
        }
      }
    } catch (G) {
      b = G;
      var C, F;
      null == (F = F5.rD) ||
        F.call(F5, null == (C = a.type) ? void 0 : C.iy, b);
    }
    a.gq && (x5(null), (y5 = u5), (u5 = u5.parentNode), (a.gq = !1));
  };
  F5.iH = !0;
  (function () {
    var a = D5;
    D5 = function (b) {
      null == a || a(b);
      Wmb(b);
    };
  })();
  var Q5 = Nlb;
  var U5;
  F5.YN = enb;
  U5 = gnb;
  F5.YN = enb;
  imb({
    jZ: {
      MU: function (a) {
        var b;
        (null == (b = a.vy) ? 0 : b.length) && onb(a.vy);
      },
      BC: function (a) {
        var b;
        (null == (b = a.vy) ? 0 : b.length) && onb(a.vy);
      },
      cH: function (a) {
        var b;
        (null == (b = a.zz) ? 0 : b.length) && a.zz.forEach(nnb);
      },
    },
  });
  var tnb = [],
    unb = !1;
  g.w(Bnb, g.U);
  g.k = Bnb.prototype;
  g.k.hide = function () {
    this.N = !0;
    g.U.prototype.hide.call(this);
    Cnb(this, !1);
  };
  g.k.show = function () {
    this.N = !1;
    g.U.prototype.show.call(this);
    Cnb(this, !0);
  };
  g.k.isHidden = function () {
    return this.N;
  };
  g.k.S0 = function () {
    this.scrollTo(this.C - this.containerWidth);
  };
  g.k.T0 = function () {
    this.scrollTo(this.C + this.containerWidth);
  };
  g.k.resize = function (a, b) {
    var c = this.api.U(),
      d = 16 / 9,
      e = 650 <= a.width,
      f = 480 > a.width || 290 > a.height,
      h = Math.min(this.suggestionData.length, this.j.length);
    if (150 >= Math.min(a.width, a.height) || 0 === h || !c.Kd) this.hide();
    else {
      var l;
      if (e) {
        var m = (l = 28);
        this.B = 16;
      } else this.B = m = l = 8;
      if (f) {
        var n = 6;
        e = 14;
        var p = 12;
        f = 24;
        c = 12;
      } else (n = 8), (e = 18), (p = 16), (f = 36), (c = 16);
      a = a.width - (48 + l + m);
      l = Math.ceil(a / 150);
      l = Math.min(3, l);
      m = a / l - this.B;
      var q = Math.floor(m / d);
      b &&
        q + 100 > b &&
        50 < m &&
        ((q = Math.max(b, 50 / d)),
        (l = Math.ceil(a / (d * (q - 100) + this.B))),
        (m = a / l - this.B),
        (q = Math.floor(m / d)));
      50 > m || g.nU(this.api) ? this.hide() : this.show();
      for (b = 0; b < h; b++) {
        d = this.j[b];
        var r = d.Ga("ytp-suggestion-image");
        r.style.width = m + "px";
        r.style.height = q + "px";
        d.Ga("ytp-suggestion-title").style.width = m + "px";
        d.Ga("ytp-suggestion-author").style.width = m + "px";
        d = d.Ga("ytp-suggestion-duration");
        d.style.display = d && 100 > m ? "none" : "";
      }
      h = e + n + p + 4;
      this.K = h + c + (q - f) / 2;
      this.suggestions.element.style.height = q + h + "px";
      this.D = m;
      this.containerWidth = a;
      this.columns = l;
      this.C = 0;
      this.suggestions.element.scrollLeft = -0;
      Dnb(this);
    }
  };
  g.k.onVideoDataChange = function () {
    var a = this.api.getVideoData(),
      b = this.api.U();
    this.Y = a.Pd ? !1 : b.D;
    a.suggestions
      ? (this.suggestionData = g.Rs(a.suggestions, function (c) {
          return c && !c.playlistId;
        }))
      : (this.suggestionData.length = 0);
    Enb(this);
    a.Pd
      ? this.title.update({
          title: g.mK("More videos from $DNI_RELATED_CHANNEL", {
            DNI_RELATED_CHANNEL: a.author,
          }),
        })
      : this.title.update({ title: "More videos on YouTube" });
  };
  g.k.scrollTo = function (a) {
    a = g.qe(
      a,
      this.containerWidth - this.suggestionData.length * (this.D + this.B),
      0
    );
    this.ma.start(this.C, a, 1e3);
    this.C = a;
    Dnb(this);
    Cnb(this, !0);
  };
  g.w(Z5, g.VV);
  Z5.prototype.show = function () {
    g.VV.prototype.show.call(this);
    Gnb(this, this.api.qb().getPlayerSize());
  };
  Z5.prototype.resize = function (a) {
    g.VV.prototype.resize.call(this, a);
    this.j &&
      (Gnb(this, a),
      g.Fu(
        this.element,
        "related-on-error-overlay-visible",
        !this.j.isHidden()
      ));
  };
  Z5.prototype.B = function (a) {
    g.VV.prototype.B.call(this, a);
    var b = this.api.getVideoData();
    if (b.WB || b.playerErrorMessageRenderer)
      (a = b.WB)
        ? Jnb(this, a)
        : b.playerErrorMessageRenderer &&
          Jnb(this, b.playerErrorMessageRenderer);
    else {
      var c;
      a.Ym &&
        (b.Vx
          ? Hnb(b.Vx)
            ? (c = g.pG(b.Vx))
            : (c = g.WV(g.oG(b.Vx)))
          : (c = g.WV(a.Ym)),
        this.le(c, "subreason"));
    }
  };
  g.w($5, g.U);
  $5.prototype.Vi = function () {
    this.api.Sb().isCued() || (this.hide(), this.api.Wa(this.element, !1));
  };
  $5.prototype.j = function () {
    var a = this.api.getVideoData(),
      b = this.api.U(),
      c = this.api.getVideoData().Pd,
      d = b.Ud,
      e = !b.Kd,
      f = this.rb.wg(),
      h = g.jS(b);
    b = b.C;
    d || f || c || e || h || b || g.oU(this.api) || !a.videoId
      ? (this.hide(), this.api.Wa(this.element, !1))
      : ((a = Knb(this)), this.updateValue("url", a), this.show());
  };
  $5.prototype.onClick = function (a) {
    this.api.L("web_player_log_click_before_generating_ve_conversion_params") &&
      this.api.tb(this.element);
    var b = Knb(this);
    g.KU(b, this.api, a);
    this.api.L("web_player_log_click_before_generating_ve_conversion_params") ||
      this.api.tb(this.element);
  };
  $5.prototype.show = function () {
    this.api.Sb().isCued() &&
      (g.U.prototype.show.call(this),
      this.api.Xj(this.element) && this.api.Wa(this.element, !0));
  };
  g.w(a6, g.U);
  a6.prototype.Vi = function () {
    var a = this.api.Sb();
    !this.api.Oh() || (g.TG(a, 2) && g.kU(this.api)) || g.TG(a, 64)
      ? (this.api.Wa(this.j, !1),
        this.api.Wa(this.forwardButton, !1),
        this.hide())
      : (this.show(),
        this.api.Wa(this.j, !0),
        this.api.Wa(this.forwardButton, !0));
  };
  a6.prototype.B = function () {
    this.api.seekBy(-10 * this.api.getPlaybackRate());
    this.api.tb(this.j);
  };
  a6.prototype.C = function () {
    this.api.seekBy(10 * this.api.getPlaybackRate());
    this.api.tb(this.forwardButton);
  };
  g.w(b6, g.U);
  b6.prototype.C = function () {
    var a = this.api.Sb(),
      b = this.api.getVideoData();
    this.api.U().L("embeds_enable_muted_autoplay") &&
      b.mutedAutoplay &&
      (g.TG(a, 2) && !this.Gb
        ? (this.show(),
          this.j ||
            ((this.j = new g.TV(this.api)),
            g.L(this, this.j),
            this.j.Fa(this.D, 0),
            this.j.show()),
          (a = this.api.getVideoData()),
          this.updateValue("text", a.d0),
          g.Fu(this.element, "ytp-muted-autoplay-show-end-panel", !0),
          this.api.Wa(this.element, this.Gb),
          this.api.Qa("onMutedAutoplayEnds"))
        : this.hide());
  };
  b6.prototype.onClick = function () {
    if (!this.B) {
      this.j && (this.j.ya(), (this.j = null));
      g.Fu(this.api.getRootNode(), "ytp-muted-autoplay", !1);
      var a = this.api.getVideoData(),
        b = this.api.getCurrentTime();
      Jlb(a);
      this.api.loadVideoById(a.videoId, b);
      this.api.aA();
      this.api.tb(this.element);
      this.hide();
      this.B = !0;
    }
  };
  b6.prototype.onMutedAutoplayStarts = function () {
    this.B = !1;
    this.j && (this.j.ya(), (this.j = null));
  };
  g.w(c6, g.U);
  g.k = c6.prototype;
  g.k.J_ = function () {
    var a = this.api.getVideoData(),
      b = this.api.getVideoData(1).Pd,
      c = this.api.U();
    b = c.Ud && !g.TG(this.state, 2) && !(b && c.ma);
    a.mutedAutoplay || g.kG(this, b);
    this.api.Wa(this.element, b);
  };
  g.k.onStateChange = function (a) {
    this.Gc(a.state);
  };
  g.k.Gc = function (a) {
    this.state !== a && (this.state = a);
    this.J_();
  };
  g.k.onVideoDataChange = function () {
    var a = this.api.U();
    a.C && g.Bu(this.element, "ytp-no-hover");
    this.api.getVideoData().videoId && !a.C
      ? ((a = this.api.getVideoUrl(!0, !1, !1, !0)),
        this.updateValue("url", a),
        this.j || (this.j = this.Sa("click", this.onClick)))
      : this.j &&
        (this.updateValue("url", null), this.Pc(this.j), (this.j = null));
  };
  g.k.onClick = function (a) {
    this.api.L("web_player_log_click_before_generating_ve_conversion_params") &&
      this.api.tb(this.element);
    var b = this.api.getVideoUrl(!g.cH(a), !1, !0, !0);
    if (
      this.api.L("web_player_log_click_before_generating_ve_conversion_params")
    ) {
      var c = {};
      g.bU(this.api, "addEmbedsConversionTrackingParams", [c]);
      b = g.Bl(b, g.BP(c, "emb_yt_watermark"));
    }
    g.KU(b, this.api, a);
    this.api.L("web_player_log_click_before_generating_ve_conversion_params") ||
      this.api.tb(this.element);
  };
  g.k.Kb = function (a) {
    if (((a = 480 > a.width) && !this.B) || (!a && this.B)) {
      var b = new g.U(Klb()),
        c = this.Ga("ytp-watermark");
      g.Fu(c, "ytp-watermark-small", a);
      g.yf(c);
      b.Fa(c);
      this.B = a;
    }
  };
  g.w(Nnb, g.U);
  g.k = Nnb.prototype;
  g.k.YK = function () {
    var a = this.api.Sb(),
      b = this.api.getVideoData();
    this.api.U().L("embeds_enable_muted_autoplay") &&
    b.mutedAutoplay &&
    !g.TG(a, 2)
      ? this.Gb ||
        (g.U.prototype.show.call(this), this.api.Wa(this.element, this.Gb))
      : this.hide();
  };
  g.k.f6 = function () {
    this.j && this.j.hide();
  };
  g.k.onAutoplayBlocked = function () {
    this.hide();
    Jlb(this.api.getVideoData());
  };
  g.k.onClick = function () {
    if (!this.B) {
      g.Fu(this.api.getRootNode(), "ytp-muted-autoplay", !1);
      var a = this.api.getVideoData(),
        b = this.api.getCurrentTime();
      Jlb(a);
      this.api.loadVideoById(a.videoId, b);
      this.api.aA();
      this.api.tb(this.element);
      this.api.Qa("onMutedAutoplayEnds");
      this.B = !0;
    }
  };
  g.k.onMutedAutoplayEnds = function () {
    this.watermark && (this.watermark.ya(), (this.watermark = null));
  };
  g.w(d6, g.U);
  d6.prototype.hide = function () {
    g.Du(this.api.getRootNode(), "ytp-expand-pause-overlay");
    g.U.prototype.hide.call(this);
  };
  d6.prototype.G = function () {
    this.B = !0;
    g.Du(this.api.getRootNode(), "ytp-expand-pause-overlay");
    g.oU(this.api) && this.api.Wa(this.element, !1);
    this.expandButton.focus();
  };
  d6.prototype.K = function () {
    this.B = !1;
    g.Bu(this.api.getRootNode(), "ytp-expand-pause-overlay");
    g.oU(this.api) && this.api.Wa(this.element, !0);
    this.focus();
  };
  d6.prototype.Ta = function () {
    var a = this.api.Sb();
    g.TG(a, 1) ||
      g.TG(a, 16) ||
      g.TG(a, 32) ||
      (!g.TG(a, 4) || g.TG(a, 2) || g.TG(a, 1024)
        ? (this.B || this.api.Wa(this.element, !1), this.D.hide())
        : this.j.vD() &&
          (this.B ||
            (g.Bu(this.api.getRootNode(), "ytp-expand-pause-overlay"),
            g.v2(this.j),
            this.j.show(),
            this.api.Wa(this.element, !0)),
          this.D.show()));
  };
  g.w(e6, g.U);
  e6.prototype.show = function () {
    g.U.prototype.show.call(this);
    this.api.Wa(this.element, !0);
  };
  e6.prototype.ya = function () {
    f6(this);
    g.U.prototype.ya.call(this);
  };
  g.w(Rnb, g.zV);
  g.k = Rnb.prototype;
  g.k.wl = function () {
    return !1;
  };
  g.k.create = function () {
    var a = this.J.U(),
      b = g.eU(this.J),
      c,
      d = null == (c = this.J.getVideoData()) ? void 0 : c.clientPlaybackNonce;
    d && g.$H({ clientPlaybackNonce: d });
    Tnb(this);
    a.L("embeds_enable_muted_autoplay") &&
      ((this.Z = new Nnb(this.J)),
      g.L(this, this.Z),
      g.rU(this.J, this.Z.element, 4),
      (this.qa = new b6(this.J)),
      g.L(this, this.qa),
      g.rU(this.J, this.qa.element, 4));
    a.Ud &&
      ((this.watermark = new c6(this.J)),
      g.L(this, this.watermark),
      g.rU(this.J, this.watermark.element, 8));
    this.K = new $5(this.J, b);
    g.L(this, this.K);
    g.rU(this.J, this.K.element, 8);
    g.cU(this.J.app) && (this.onMutedAutoplayStarts(), this.K.hide());
    a.B &&
      ((this.ma = new a6(this.J)),
      g.L(this, this.ma),
      g.rU(this.J, this.ma.element, 4));
    this.j.T(this.J, "appresize", this.Kb);
    this.j.T(this.J, "presentingplayerstatechange", this.Vi);
    this.j.T(this.J, "videodatachange", this.onVideoDataChange);
    this.j.T(this.J, "videoplayerreset", this.xw);
    this.j.T(this.J, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
    this.j.T(this.J, "onAdStart", this.onAdStart);
    this.j.T(this.J, "onAdComplete", this.onAdComplete);
    this.j.T(this.J, "onAdSkip", this.onAdSkip);
    this.j.T(this.J, "onAdStateChange", this.onAdStateChange);
    if ((this.N = g.FC(g.kS(a))))
      (this.countdownTimer = new e6(this.J)),
        g.L(this, this.countdownTimer),
        g.rU(this.J, this.countdownTimer.element, 4),
        this.countdownTimer.hide(),
        this.j.T(this.J, g.gK("embeds"), this.onCueRangeEnter),
        this.j.T(this.J, g.hK("embeds"), this.onCueRangeExit);
    this.zc(this.J.Sb());
    this.player.Eg("embed");
    var e, f;
    (null == (e = this.J.U().webPlayerContextConfig)
      ? 0
      : null == (f = e.embedsHostFlags)
      ? 0
      : f.allowOverridingVisitorDataPlayerVars) &&
      (a = g.IB("IDENTITY_MEMENTO")) &&
      this.J.Qa("onMementoChange", a);
  };
  g.k.onCueRangeEnter = function (a) {
    "countdown timer" === a.getId() &&
      this.countdownTimer &&
      (this.countdownTimer.show(), Pnb(this.countdownTimer));
  };
  g.k.onCueRangeExit = function (a) {
    "countdown timer" === a.getId() &&
      this.countdownTimer &&
      (f6(this.countdownTimer), this.countdownTimer.hide());
  };
  g.k.Kb = function () {
    var a = this.J.qb().getPlayerSize();
    this.Jg && this.Jg.resize(a);
  };
  g.k.xw = function () {
    Qnb(this);
  };
  g.k.Vi = function (a) {
    this.zc(a.state);
  };
  g.k.zc = function (a) {
    g.TG(a, 128)
      ? (this.Jg ||
          ((this.Jg = new Z5(this.J)),
          g.L(this, this.Jg),
          g.rU(this.J, this.Jg.element, 4)),
        this.Jg.B(a.wh),
        this.Jg.show(),
        g.Bu(this.J.getRootNode(), "ytp-embed-error"))
      : this.Jg &&
        (this.Jg.dispose(),
        (this.Jg = null),
        g.Du(this.J.getRootNode(), "ytp-embed-error"));
    if (this.countdownTimer && this.countdownTimer.j)
      if (g.TG(a, 64)) this.countdownTimer.hide(), f6(this.countdownTimer);
      else if (a.isPaused()) {
        var b = this.countdownTimer;
        b.B || ((b.B = !0), (b.G = (0, g.FD)()));
      } else
        a.isPlaying() &&
          this.countdownTimer.B &&
          ((b = this.countdownTimer),
          b.B && ((b.D += (0, g.FD)() - b.G), (b.B = !1), Onb(b)));
    Snb(this, a);
  };
  g.k.onMutedAutoplayStarts = function () {
    this.J.getVideoData().mutedAutoplay &&
      this.Z &&
      g.Fu(this.J.getRootNode(), "ytp-muted-autoplay", !0);
  };
  g.k.onVideoDataChange = function (a, b) {
    var c = this.ND !== b.videoId;
    a = !c && "dataloaded" === a;
    var d = { isShortsModeEnabled: !!g.oU(this.J) };
    g.qD("embedsVideoDataDidChange", {
      clientPlaybackNonce: b.clientPlaybackNonce,
      isReload: a,
      runtimeEnabledFeatures: d,
    });
    c &&
      ((this.ND = b.videoId),
      this.countdownTimer &&
        (this.countdownTimer.show(), this.countdownTimer.hide()),
      this.N &&
        (this.J.hf("embeds"),
        b.isAd() ||
          5 > b.limitedPlaybackDurationInSeconds ||
          g.nU(this.J) ||
          ((b = Math.max(
            1e3 * (b.startSeconds + b.limitedPlaybackDurationInSeconds - 5),
            0
          )),
          (b = new g.fK(b, b + 5e3, {
            id: "countdown timer",
            namespace: "embeds",
          })),
          this.J.wf([b]))),
      Qnb(this),
      Tnb(this));
    this.J.U().C && this.C && this.C.detach();
  };
  g.k.onAdStart = function () {
    g6(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED");
  };
  g.k.onAdComplete = function () {
    g6(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED");
  };
  g.k.onAdSkip = function () {
    g6(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED");
  };
  g.k.onAdStateChange = function (a) {
    2 === a && g6(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED");
  };
  g.yV("embed", Rnb);
})(_yt_player);
