"use strict";
var q,
  aa =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
function ba(a) {
  a = [
    "object" == typeof globalThis && globalThis,
    a,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) return c;
  }
  throw Error("Cannot find global object");
}
var ca = ba(this);
function da(a, b) {
  if (b)
    a: {
      var c = ca;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        if (!(e in c)) break a;
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d &&
        null != b &&
        aa(c, a, { configurable: !0, writable: !0, value: b });
    }
}
function ea(a) {
  function b(d) {
    return a.next(d);
  }
  function c(d) {
    return a.throw(d);
  }
  return new Promise(function (d, e) {
    function f(g) {
      g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
    }
    f(a.next());
  });
}
function u(a) {
  return ea(a());
}
function fa(a, b) {
  a instanceof String && (a += "");
  var c = 0,
    d = !1,
    e = {
      next: function () {
        if (!d && c < a.length) {
          var f = c++;
          return { value: b(f, a[f]), done: !1 };
        }
        d = !0;
        return { done: !0, value: void 0 };
      },
    };
  e[Symbol.iterator] = function () {
    return e;
  };
  return e;
}
da("Array.prototype.values", function (a) {
  return a
    ? a
    : function () {
        return fa(this, function (b, c) {
          return c;
        });
      };
});
da("Object.values", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c;
      };
});
da("Array.prototype.includes", function (a) {
  return a
    ? a
    : function (b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
          var f = d[c];
          if (f === b || Object.is(f, b)) return !0;
        }
        return !1;
      };
});
da("Object.entries", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b)
          Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c;
      };
});
da("String.prototype.matchAll", function (a) {
  return a
    ? a
    : function (b) {
        if (b instanceof RegExp && !b.global)
          throw new TypeError(
            "RegExp passed into String.prototype.matchAll() must have global tag."
          );
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
          d = this,
          e = !1,
          f = {
            next: function () {
              if (e) return { value: void 0, done: !0 };
              var g = c.exec(d);
              if (!g) return (e = !0), { value: void 0, done: !0 };
              "" === g[0] && (c.lastIndex += 1);
              return { value: g, done: !1 };
            },
          };
        f[Symbol.iterator] = function () {
          return f;
        };
        return f;
      };
});
da("Promise.prototype.finally", function (a) {
  return a
    ? a
    : function (b) {
        return this.then(
          function (c) {
            return Promise.resolve(b()).then(function () {
              return c;
            });
          },
          function (c) {
            return Promise.resolve(b()).then(function () {
              throw c;
            });
          }
        );
      };
}); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var v = this || self;
function x(a, b) {
  a = a.split(".");
  b = b || v;
  for (var c = 0; c < a.length; c++)
    if (((b = b[a[c]]), null == b)) return null;
  return b;
}
function ha(a) {
  var b = typeof a;
  b = "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  return "array" == b || ("object" == b && "number" == typeof a.length);
}
function ia(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ja(a, b, c) {
  if (!a) throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e);
    };
  }
  return function () {
    return a.apply(b, arguments);
  };
}
function ka(a, b, c) {
  ka =
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? ia
      : ja;
  return ka.apply(null, arguments);
}
function y(a, b) {
  a = a.split(".");
  var c = v;
  a[0] in c ||
    "undefined" == typeof c.execScript ||
    c.execScript("var " + a[0]);
  for (var d; a.length && (d = a.shift()); )
    a.length || void 0 === b
      ? c[d] && c[d] !== Object.prototype[d]
        ? (c = c[d])
        : (c = c[d] = {})
      : (c[d] = b);
}
function la(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.Wa = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.Zb = function (d, e, f) {
    for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
      g[h - 2] = arguments[h];
    return b.prototype[e].apply(d, g);
  };
}
function ma(a) {
  return a;
}
function na(a, b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, na);
  else {
    const c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  void 0 !== b && (this.cause = b);
}
la(na, Error);
na.prototype.name = "CustomError";
function oa() {}
function pa(a, b) {
  Array.prototype.forEach.call(a, b, void 0);
}
function qa(a, b) {
  return Array.prototype.map.call(a, b, void 0);
}
function ra(a, b) {
  b = Array.prototype.indexOf.call(a, b, void 0);
  0 <= b && Array.prototype.splice.call(a, b, 1);
}
function sa(a, b) {
  for (let c = 1; c < arguments.length; c++) {
    const d = arguments[c];
    if (ha(d)) {
      const e = a.length || 0,
        f = d.length || 0;
      a.length = e + f;
      for (let g = 0; g < f; g++) a[e + g] = d[g];
    } else a.push(d);
  }
}
function ta(a) {
  for (const b in a) return !1;
  return !0;
}
function ua(a) {
  if (!a || "object" !== typeof a) return a;
  if ("function" === typeof a.clone) return a.clone();
  if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
  if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
  if (a instanceof Date) return new Date(a.getTime());
  const b = Array.isArray(a)
    ? []
    : "function" !== typeof ArrayBuffer ||
      "function" !== typeof ArrayBuffer.isView ||
      !ArrayBuffer.isView(a) ||
      a instanceof DataView
    ? {}
    : new a.constructor(a.length);
  for (const c in a) b[c] = ua(a[c]);
  return b;
}
const va =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  );
function wa(a, b) {
  let c, d;
  for (let e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (let f = 0; f < va.length; f++)
      (c = va[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
var xa;
function ya() {}
function za(a) {
  return new ya(Aa, a);
}
var Aa = {};
za("");
var Ba = class {
    constructor(a) {
      this.h = a;
    }
    toString() {
      return this.h + "";
    }
  },
  Ca = {};
var Da = String.prototype.trim
  ? function (a) {
      return a.trim();
    }
  : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    };
var Ea,
  Fa = x("CLOSURE_FLAGS"),
  Ga = Fa && Fa[610401301];
Ea = null != Ga ? Ga : !1;
function Ha() {
  var a = v.navigator;
  return a && (a = a.userAgent) ? a : "";
}
var Ia;
const Ja = v.navigator;
Ia = Ja ? Ja.userAgentData || null : null;
function Ka(a) {
  return Ea
    ? Ia
      ? Ia.brands.some(({ brand: b }) => b && -1 != b.indexOf(a))
      : !1
    : !1;
}
function z(a) {
  return -1 != Ha().indexOf(a);
}
function La() {
  return Ea ? !!Ia && 0 < Ia.brands.length : !1;
}
function Ma() {
  return La()
    ? Ka("Chromium")
    : ((z("Chrome") || z("CriOS")) && !(La() ? 0 : z("Edge"))) || z("Silk");
}
var Na = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
);
function Oa(a) {
  return a ? decodeURI(a) : a;
}
function Pa(a, b, c) {
  if (Array.isArray(b))
    for (var d = 0; d < b.length; d++) Pa(a, String(b[d]), c);
  else
    null != b &&
      c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
}
function Qa(a) {
  var b = [],
    c;
  for (c in a) Pa(c, a[c], b);
  return b.join("&");
}
function Ra() {
  this.j = this.j;
  this.l = this.l;
}
Ra.prototype.j = !1;
Ra.prototype.dispose = function () {
  this.j || ((this.j = !0), this.O());
};
Ra.prototype.O = function () {
  if (this.l) for (; this.l.length; ) this.l.shift()();
};
function Sa(a, b) {
  a.__closure__error__context__984382 ||
    (a.__closure__error__context__984382 = {});
  a.__closure__error__context__984382.severity = b;
}
function Ta(a) {
  var b = x("window.location.href");
  null == a && (a = 'Unknown Error of type "null/undefined"');
  if ("string" === typeof a)
    return {
      message: a,
      name: "Unknown error",
      lineNumber: "Not available",
      fileName: b,
      stack: "Not available",
    };
  var c = !1;
  try {
    var d = a.lineNumber || a.line || "Not available";
  } catch (g) {
    (d = "Not available"), (c = !0);
  }
  try {
    var e = a.fileName || a.filename || a.sourceURL || v.$googDebugFname || b;
  } catch (g) {
    (e = "Not available"), (c = !0);
  }
  b = Ua(a);
  if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
    c = a.message;
    if (null == c) {
      if (a.constructor && a.constructor instanceof Function) {
        if (a.constructor.name) c = a.constructor.name;
        else if (((c = a.constructor), Va[c])) c = Va[c];
        else {
          c = String(c);
          if (!Va[c]) {
            var f = /function\s+([^\(]+)/m.exec(c);
            Va[c] = f ? f[1] : "[Anonymous]";
          }
          c = Va[c];
        }
        c = 'Unknown Error of type "' + c + '"';
      } else c = "Unknown Error of unknown type";
      "function" === typeof a.toString &&
        Object.prototype.toString !== a.toString &&
        (c += ": " + a.toString());
    }
    return {
      message: c,
      name: a.name || "UnknownError",
      lineNumber: d,
      fileName: e,
      stack: b || "Not available",
    };
  }
  a.stack = b;
  return {
    message: a.message,
    name: a.name,
    lineNumber: a.lineNumber,
    fileName: a.fileName,
    stack: a.stack,
  };
}
function Ua(a, b) {
  b || (b = {});
  b[Wa(a)] = !0;
  var c = a.stack || "";
  (a = a.cause) &&
    !b[Wa(a)] &&
    ((c += "\nCaused by: "),
    (a.stack && 0 == a.stack.indexOf(a.toString())) ||
      (c += "string" === typeof a ? a : a.message + "\n"),
    (c += Ua(a, b)));
  return c;
}
function Wa(a) {
  var b = "";
  "function" === typeof a.toString && (b = "" + a);
  return b + a.stack;
}
var Va = {};
var Xa = La() ? !1 : z("Trident") || z("MSIE");
function Ya(a, b) {
  a.l(b);
  100 > a.i && (a.i++, (b.next = a.h), (a.h = b));
}
class Za {
  constructor(a, b) {
    this.j = a;
    this.l = b;
    this.i = 0;
    this.h = null;
  }
  get() {
    let a;
    0 < this.i
      ? (this.i--, (a = this.h), (this.h = a.next), (a.next = null))
      : (a = this.j());
    return a;
  }
}
function $a(a) {
  v.setTimeout(() => {
    throw a;
  }, 0);
}
class ab {
  constructor() {
    this.i = this.h = null;
  }
  add(a, b) {
    const c = bb.get();
    c.set(a, b);
    this.i ? (this.i.next = c) : (this.h = c);
    this.i = c;
  }
  remove() {
    let a = null;
    this.h &&
      ((a = this.h),
      (this.h = this.h.next),
      this.h || (this.i = null),
      (a.next = null));
    return a;
  }
}
var bb = new Za(
  () => new cb(),
  (a) => a.reset()
);
class cb {
  constructor() {
    this.next = this.scope = this.h = null;
  }
  set(a, b) {
    this.h = a;
    this.scope = b;
    this.next = null;
  }
  reset() {
    this.next = this.scope = this.h = null;
  }
}
let db,
  eb = !1,
  fb = new ab(),
  hb = (a, b) => {
    db || gb();
    eb || (db(), (eb = !0));
    fb.add(a, b);
  },
  gb = () => {
    const a = v.Promise.resolve(void 0);
    db = () => {
      a.then(ib);
    };
  };
var ib = () => {
  let a;
  for (; (a = fb.remove()); ) {
    try {
      a.h.call(a.scope);
    } catch (b) {
      $a(b);
    }
    Ya(bb, a);
  }
  eb = !1;
};
function A(a) {
  this.h = 0;
  this.A = void 0;
  this.l = this.i = this.j = null;
  this.m = this.s = !1;
  if (a != oa)
    try {
      var b = this;
      a.call(
        void 0,
        function (c) {
          jb(b, 2, c);
        },
        function (c) {
          jb(b, 3, c);
        }
      );
    } catch (c) {
      jb(this, 3, c);
    }
}
function kb() {
  this.next = this.context = this.i = this.j = this.h = null;
  this.l = !1;
}
kb.prototype.reset = function () {
  this.context = this.i = this.j = this.h = null;
  this.l = !1;
};
var lb = new Za(
  function () {
    return new kb();
  },
  function (a) {
    a.reset();
  }
);
function mb(a, b, c) {
  var d = lb.get();
  d.j = a;
  d.i = b;
  d.context = c;
  return d;
}
function nb(a) {
  if (a instanceof A) return a;
  var b = new A(oa);
  jb(b, 2, a);
  return b;
}
A.prototype.then = function (a, b, c) {
  return ob(
    this,
    "function" === typeof a ? a : null,
    "function" === typeof b ? b : null,
    c
  );
};
A.prototype.$goog_Thenable = !0;
q = A.prototype;
q.Za = function (a, b) {
  return ob(this, null, a, b);
};
q.catch = A.prototype.Za;
q.cancel = function (a) {
  if (0 == this.h) {
    var b = new pb(a);
    hb(function () {
      qb(this, b);
    }, this);
  }
};
function qb(a, b) {
  if (0 == a.h)
    if (a.j) {
      var c = a.j;
      if (c.i) {
        for (
          var d = 0, e = null, f = null, g = c.i;
          g && (g.l || (d++, g.h == a && (e = g), !(e && 1 < d)));
          g = g.next
        )
          e || (f = g);
        e &&
          (0 == c.h && 1 == d
            ? qb(c, b)
            : (f
                ? ((d = f), d.next == c.l && (c.l = d), (d.next = d.next.next))
                : rb(c),
              sb(c, e, 3, b)));
      }
      a.j = null;
    } else jb(a, 3, b);
}
function tb(a, b) {
  a.i || (2 != a.h && 3 != a.h) || ub(a);
  a.l ? (a.l.next = b) : (a.i = b);
  a.l = b;
}
function ob(a, b, c, d) {
  var e = mb(null, null, null);
  e.h = new A(function (f, g) {
    e.j = b
      ? function (h) {
          try {
            var k = b.call(d, h);
            f(k);
          } catch (l) {
            g(l);
          }
        }
      : f;
    e.i = c
      ? function (h) {
          try {
            var k = c.call(d, h);
            void 0 === k && h instanceof pb ? g(h) : f(k);
          } catch (l) {
            g(l);
          }
        }
      : g;
  });
  e.h.j = a;
  tb(a, e);
  return e.h;
}
q.ab = function (a) {
  this.h = 0;
  jb(this, 2, a);
};
q.bb = function (a) {
  this.h = 0;
  jb(this, 3, a);
};
function jb(a, b, c) {
  if (0 == a.h) {
    a === c &&
      ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
    a.h = 1;
    a: {
      var d = c,
        e = a.ab,
        f = a.bb;
      if (d instanceof A) {
        tb(d, mb(e || oa, f || null, a));
        var g = !0;
      } else {
        if (d)
          try {
            var h = !!d.$goog_Thenable;
          } catch (l) {
            h = !1;
          }
        else h = !1;
        if (h) d.then(e, f, a), (g = !0);
        else {
          h = typeof d;
          if (("object" == h && null != d) || "function" == h)
            try {
              var k = d.then;
              if ("function" === typeof k) {
                vb(d, k, e, f, a);
                g = !0;
                break a;
              }
            } catch (l) {
              f.call(a, l);
              g = !0;
              break a;
            }
          g = !1;
        }
      }
    }
    g ||
      ((a.A = c),
      (a.h = b),
      (a.j = null),
      ub(a),
      3 != b || c instanceof pb || wb(a, c));
  }
}
function vb(a, b, c, d, e) {
  function f(k) {
    h || ((h = !0), d.call(e, k));
  }
  function g(k) {
    h || ((h = !0), c.call(e, k));
  }
  var h = !1;
  try {
    b.call(a, g, f);
  } catch (k) {
    f(k);
  }
}
function ub(a) {
  a.s || ((a.s = !0), hb(a.Ia, a));
}
function rb(a) {
  var b = null;
  a.i && ((b = a.i), (a.i = b.next), (b.next = null));
  a.i || (a.l = null);
  return b;
}
q.Ia = function () {
  for (var a; (a = rb(this)); ) sb(this, a, this.h, this.A);
  this.s = !1;
};
function sb(a, b, c, d) {
  if (3 == c && b.i && !b.l) for (; a && a.m; a = a.j) a.m = !1;
  if (b.h) (b.h.j = null), xb(b, c, d);
  else
    try {
      b.l ? b.j.call(b.context) : xb(b, c, d);
    } catch (e) {
      yb.call(null, e);
    }
  Ya(lb, b);
}
function xb(a, b, c) {
  2 == b ? a.j.call(a.context, c) : a.i && a.i.call(a.context, c);
}
function wb(a, b) {
  a.m = !0;
  hb(function () {
    a.m && yb.call(null, b);
  });
}
var yb = $a;
function pb(a) {
  na.call(this, a);
}
la(pb, na);
pb.prototype.name = "cancel";
function zb() {
  throw Error("Invalid UTF8");
}
function Ab(a, b) {
  b = String.fromCharCode.apply(null, b);
  return null == a ? b : a + b;
}
let Bb = void 0,
  Cb;
const Db = "undefined" !== typeof TextDecoder;
!z("Android") || Ma();
Ma();
var Eb =
  z("Safari") &&
  !(
    Ma() ||
    (La() ? 0 : z("Coast")) ||
    (La() ? 0 : z("Opera")) ||
    (La() ? 0 : z("Edge")) ||
    (La() ? Ka("Microsoft Edge") : z("Edg/")) ||
    (La() ? Ka("Opera") : z("OPR")) ||
    z("Firefox") ||
    z("FxiOS") ||
    z("Silk") ||
    z("Android")
  ) &&
  !((z("iPhone") && !z("iPod") && !z("iPad")) || z("iPad") || z("iPod"));
var Fb = {},
  Gb = null;
function Hb(a, b) {
  void 0 === b && (b = 0);
  Ib();
  b = Fb[b];
  const c = Array(Math.floor(a.length / 3)),
    d = b[64] || "";
  let e = 0,
    f = 0;
  for (; e < a.length - 2; e += 3) {
    var g = a[e],
      h = a[e + 1],
      k = a[e + 2],
      l = b[g >> 2];
    g = b[((g & 3) << 4) | (h >> 4)];
    h = b[((h & 15) << 2) | (k >> 6)];
    k = b[k & 63];
    c[f++] = "" + l + g + h + k;
  }
  l = 0;
  k = d;
  switch (a.length - e) {
    case 2:
      (l = a[e + 1]), (k = b[(l & 15) << 2] || d);
    case 1:
      (a = a[e]),
        (c[f] = "" + b[a >> 2] + b[((a & 3) << 4) | (l >> 4)] + k + d);
  }
  return c.join("");
}
function Jb(a) {
  var b = a.length,
    c = (3 * b) / 4;
  c % 3
    ? (c = Math.floor(c))
    : -1 != "=.".indexOf(a[b - 1]) &&
      (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
  var d = new Uint8Array(c),
    e = 0;
  Kb(a, function (f) {
    d[e++] = f;
  });
  return e !== c ? d.subarray(0, e) : d;
}
function Kb(a, b) {
  function c(k) {
    for (; d < a.length; ) {
      var l = a.charAt(d++),
        n = Gb[l];
      if (null != n) return n;
      if (!/^[\s\xa0]*$/.test(l))
        throw Error("Unknown base64 encoding at char: " + l);
    }
    return k;
  }
  Ib();
  for (var d = 0; ; ) {
    var e = c(-1),
      f = c(0),
      g = c(64),
      h = c(64);
    if (64 === h && -1 === e) break;
    b((e << 2) | (f >> 4));
    64 != g &&
      (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h));
  }
}
function Ib() {
  if (!Gb) {
    Gb = {};
    for (
      var a =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
            ""
          ),
        b = ["+/=", "+/", "-_=", "-_.", "-_"],
        c = 0;
      5 > c;
      c++
    ) {
      var d = a.concat(b[c].split(""));
      Fb[c] = d;
      for (var e = 0; e < d.length; e++) {
        var f = d[e];
        void 0 === Gb[f] && (Gb[f] = e);
      }
    }
  }
}
var Lb = "undefined" !== typeof Uint8Array,
  Mb = !Xa && "function" === typeof btoa;
function Nb(a) {
  if (!Mb) return Hb(a);
  let b = "",
    c = 0;
  const d = a.length - 10240;
  for (; c < d; )
    b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
  b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
  return btoa(b);
}
const Ob = /[-_.]/g,
  Pb = { "-": "+", _: "/", ".": "=" };
function Qb(a) {
  return Pb[a] || "";
}
function Rb(a) {
  if (!Mb) return Jb(a);
  Ob.test(a) && (a = a.replace(Ob, Qb));
  a = atob(a);
  const b = new Uint8Array(a.length);
  for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
  return b;
}
function Sb(a) {
  return Lb && null != a && a instanceof Uint8Array;
}
let Tb;
var Ub = {};
let Vb;
function Wb(a) {
  if (a !== Ub) throw Error("illegal external caller");
}
function Xb() {
  return Vb || (Vb = new Yb(null, Ub));
}
function Zb(a) {
  Wb(Ub);
  var b = a.T;
  b = null == b || Sb(b) ? b : "string" === typeof b ? Rb(b) : null;
  return null == b ? b : (a.T = b);
}
var Yb = class {
  constructor(a, b) {
    Wb(b);
    this.T = a;
    if (null != a && 0 === a.length)
      throw Error("ByteString should be constructed with non-empty values");
  }
  ra() {
    return null == this.T;
  }
  sizeBytes() {
    const a = Zb(this);
    return a ? a.length : 0;
  }
};
function $b(a, b) {
  return Error(`Invalid wire type: ${a} (at position ${b})`);
}
function ac() {
  return Error("Failed to read varint, encoding is invalid.");
}
function bc(a, b) {
  return Error(`Tried to read past the end of the data ${b} > ${a}`);
}
function cc(a) {
  if ("string" === typeof a) return { buffer: Rb(a), K: !1 };
  if (Array.isArray(a)) return { buffer: new Uint8Array(a), K: !1 };
  if (a.constructor === Uint8Array) return { buffer: a, K: !1 };
  if (a.constructor === ArrayBuffer)
    return { buffer: new Uint8Array(a), K: !1 };
  if (a.constructor === Yb)
    return { buffer: Zb(a) || Tb || (Tb = new Uint8Array(0)), K: !0 };
  if (a instanceof Uint8Array)
    return {
      buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
      K: !1,
    };
  throw Error(
    "Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers"
  );
}
function dc() {
  return "function" === typeof BigInt;
}
const fc = "function" === typeof Uint8Array.prototype.slice;
let gc = 0,
  hc = 0;
function ic(a) {
  const b = 0 > a;
  a = Math.abs(a);
  let c = a >>> 0;
  a = Math.floor((a - c) / 4294967296);
  if (b) {
    const [d, e] = jc(c, a);
    a = e;
    c = d;
  }
  gc = c >>> 0;
  hc = a >>> 0;
}
function kc(a, b) {
  b >>>= 0;
  a >>>= 0;
  if (2097151 >= b) var c = "" + (4294967296 * b + a);
  else
    dc()
      ? (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)))
      : ((c = ((a >>> 24) | (b << 8)) & 16777215),
        (b = (b >> 16) & 65535),
        (a = (a & 16777215) + 6777216 * c + 6710656 * b),
        (c += 8147497 * b),
        (b *= 2),
        1e7 <= a && ((c += Math.floor(a / 1e7)), (a %= 1e7)),
        1e7 <= c && ((b += Math.floor(c / 1e7)), (c %= 1e7)),
        (c = b + lc(c) + lc(a)));
  return c;
}
function lc(a) {
  a = String(a);
  return "0000000".slice(a.length) + a;
}
function mc() {
  var a = gc,
    b = hc;
  if (b & 2147483648)
    if (dc()) a = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0));
    else {
      const [c, d] = jc(a, b);
      a = "-" + kc(c, d);
    }
  else a = kc(a, b);
  return a;
}
function jc(a, b) {
  b = ~b;
  a ? (a = ~a + 1) : (b += 1);
  return [a, b];
}
function nc(a, b) {
  a.h = b;
  if (b > a.i) throw bc(a.i, b);
}
function oc(a) {
  const b = a.j;
  let c = a.h,
    d = b[c++],
    e = d & 127;
  if (
    d & 128 &&
    ((d = b[c++]),
    (e |= (d & 127) << 7),
    d & 128 &&
      ((d = b[c++]),
      (e |= (d & 127) << 14),
      d & 128 &&
        ((d = b[c++]),
        (e |= (d & 127) << 21),
        d & 128 &&
          ((d = b[c++]),
          (e |= d << 28),
          d & 128 &&
            b[c++] & 128 &&
            b[c++] & 128 &&
            b[c++] & 128 &&
            b[c++] & 128 &&
            b[c++] & 128))))
  )
    throw ac();
  nc(a, c);
  return e;
}
function pc(a, b) {
  if (0 > b) throw Error(`Tried to read a negative byte length: ${b}`);
  const c = a.h,
    d = c + b;
  if (d > a.i) throw bc(b, a.i - c);
  a.h = d;
  return c;
}
var qc = class {
    constructor(a, b) {
      this.j = null;
      this.m = !1;
      this.h = this.i = this.l = 0;
      this.init(a, void 0, void 0, b);
    }
    init(a, b, c, { Z: d = !1 } = {}) {
      this.Z = d;
      a &&
        ((a = cc(a)),
        (this.j = a.buffer),
        (this.m = a.K),
        (this.l = b || 0),
        (this.i = void 0 !== c ? this.l + c : this.j.length),
        (this.h = this.l));
    }
    clear() {
      this.j = null;
      this.m = !1;
      this.h = this.i = this.l = 0;
      this.Z = !1;
    }
    reset() {
      this.h = this.l;
    }
    advance(a) {
      nc(this, this.h + a);
    }
  },
  rc = [];
function sc(a, { oa: b = !1 } = {}) {
  a.oa = b;
}
function tc(a) {
  var b = a.h;
  if (b.h == b.i) return !1;
  a.j = a.h.h;
  var c = oc(a.h) >>> 0;
  b = c >>> 3;
  c &= 7;
  if (!(0 <= c && 5 >= c)) throw $b(c, a.j);
  if (1 > b) throw Error(`Invalid field number: ${b} (at position ${a.j})`);
  a.l = b;
  a.i = c;
  return !0;
}
function uc(a) {
  switch (a.i) {
    case 0:
      if (0 != a.i) uc(a);
      else
        a: {
          a = a.h;
          var b = a.h;
          const c = b + 10,
            d = a.j;
          for (; b < c; )
            if (0 === (d[b++] & 128)) {
              nc(a, b);
              break a;
            }
          throw ac();
        }
      break;
    case 1:
      a.h.advance(8);
      break;
    case 2:
      2 != a.i ? uc(a) : ((b = oc(a.h) >>> 0), a.h.advance(b));
      break;
    case 5:
      a.h.advance(4);
      break;
    case 3:
      b = a.l;
      do {
        if (!tc(a)) throw Error("Unmatched start-group tag: stream EOF");
        if (4 == a.i) {
          if (a.l != b) throw Error("Unmatched end-group tag");
          break;
        }
        uc(a);
      } while (1);
      break;
    default:
      throw $b(a.i, a.j);
  }
}
var vc = class {
    constructor(a, b) {
      if (rc.length) {
        const c = rc.pop();
        c.init(a, void 0, void 0, b);
        a = c;
      } else a = new qc(a, b);
      this.h = a;
      this.j = this.h.h;
      this.i = this.l = -1;
      sc(this, b);
    }
    reset() {
      this.h.reset();
      this.j = this.h.h;
      this.i = this.l = -1;
    }
    advance(a) {
      this.h.advance(a);
    }
  },
  wc = [];
class xc {
  constructor(a, b) {
    this.h = a;
    this.i = b;
  }
}
function yc(a) {
  return Array.prototype.slice.call(a);
}
const C =
  "function" === typeof Symbol && "symbol" === typeof Symbol()
    ? Symbol()
    : void 0;
[
  ...Object.values({
    Lb: 1,
    Jb: 2,
    Ib: 4,
    Qb: 8,
    Pb: 16,
    Ob: 32,
    gb: 64,
    Vb: 128,
    nb: 256,
    mb: 512,
    Kb: 1024,
    kb: 2048,
    Ub: 4096,
    lb: 8192,
  }),
];
var zc = C
  ? (a, b) => {
      a[C] |= b;
    }
  : (a, b) => {
      void 0 !== a.C
        ? (a.C |= b)
        : Object.defineProperties(a, {
            C: { value: b, configurable: !0, writable: !0, enumerable: !1 },
          });
    };
function Ac(a) {
  const b = D(a);
  1 !== (b & 1) && (Object.isFrozen(a) && (a = yc(a)), E(a, b | 1));
}
var Bc = C
  ? (a, b) => {
      a[C] &= ~b;
    }
  : (a, b) => {
      void 0 !== a.C && (a.C &= ~b);
    };
function Cc(a, b, c) {
  return c ? a | b : a & ~b;
}
var D = C ? (a) => a[C] | 0 : (a) => a.C | 0,
  F = C ? (a) => a[C] : (a) => a.C,
  E = C
    ? (a, b) => {
        a[C] = b;
      }
    : (a, b) => {
        void 0 !== a.C
          ? (a.C = b)
          : Object.defineProperties(a, {
              C: { value: b, configurable: !0, writable: !0, enumerable: !1 },
            });
      };
function Dc() {
  var a = [];
  zc(a, 1);
  return a;
}
function Ec(a, b) {
  E(b, (a | 0) & -14591);
}
function Fc(a, b) {
  E(b, (a | 34) & -14557);
}
function Gc(a) {
  a = (a >> 14) & 1023;
  return 0 === a ? 536870912 : a;
}
var Hc = {};
function Ic(a) {
  return (
    null !== a &&
    "object" === typeof a &&
    !Array.isArray(a) &&
    a.constructor === Object
  );
}
let Jc;
function Kc(a, b, c) {
  if (!Array.isArray(a) || a.length) return !1;
  const d = D(a);
  if (d & 1) return !0;
  if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
  E(a, d | 1);
  return !0;
}
var Lc;
const Mc = [];
E(Mc, 55);
Lc = Object.freeze(Mc);
function Nc(a) {
  if (a & 2) throw Error();
}
let Oc;
function Pc(a, b) {
  (b = Oc ? b[Oc] : void 0) && (a[Oc] = yc(b));
}
let Qc;
function Rc() {
  const a = Error();
  Sa(a, "incident");
  $a(a);
}
function Sc(a) {
  a = Error(a);
  Sa(a, "warning");
  return a;
}
function Tc(a) {
  return a.displayName || a.name || "unknown type name";
}
const Uc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function Vc(a) {
  const b = typeof a;
  return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : Uc.test(a);
}
function Wc(a) {
  if (null == a) return a;
  if ("string" === typeof a) {
    if (!a) return;
    a = +a;
  }
  if ("number" === typeof a) return a;
}
function Xc(a, b) {
  b = !!b;
  if (!Vc(a)) throw Sc("int64");
  if ("string" === typeof a) {
    if ((Vc(a), b)) {
      var c = Math.trunc(Number(a));
      if (Number.isSafeInteger(c)) a = String(c);
      else if (((c = a.indexOf(".")), -1 !== c && (a = a.substring(0, c)), b)) {
        if (16 > a.length) ic(Number(a));
        else if (dc())
          (a = BigInt(a)),
            (gc = Number(a & BigInt(4294967295)) >>> 0),
            (hc = Number((a >> BigInt(32)) & BigInt(4294967295)));
        else {
          b = +("-" === a[0]);
          hc = gc = 0;
          c = a.length;
          for (let d = 0 + b, e = ((c - b) % 6) + b; e <= c; d = e, e += 6) {
            const f = Number(a.slice(d, e));
            hc *= 1e6;
            gc = 1e6 * gc + f;
            4294967296 <= gc &&
              ((hc += Math.trunc(gc / 4294967296)), (hc >>>= 0), (gc >>>= 0));
          }
          if (b) {
            const [d, e] = jc(gc, hc);
            gc = d;
            hc = e;
          }
        }
        a = mc();
      }
    }
  } else
    b
      ? (Vc(a),
        b
          ? ((a = Math.trunc(a)),
            !b || Number.isSafeInteger(a)
              ? (a = String(a))
              : (ic(a), (a = mc())))
          : (a = String(a)))
      : Vc(a);
  return a;
}
function Yc(a) {
  if (null != a && "string" !== typeof a) throw Error();
  return a;
}
function Zc(a, b) {
  if (!(a instanceof b))
    throw Error(
      `Expected instanceof ${Tc(b)} but got ${a && Tc(a.constructor)}`
    );
  return a;
}
function $c(a, b, c) {
  if (null != a && "object" === typeof a && a.ea === Hc) return a;
  if (Array.isArray(a)) {
    var d = D(a),
      e = d;
    0 === e && (e |= c & 32);
    e |= c & 2;
    e !== d && E(a, e);
    return new b(a);
  }
}
let ad, bd, cd;
function dd(a) {
  switch (typeof a) {
    case "boolean":
      return bd || (bd = [0, void 0, !0]);
    case "number":
      return 0 < a ? void 0 : 0 === a ? cd || (cd = [0, void 0]) : [-a, void 0];
    case "string":
      return [0, a];
    case "object":
      return a;
  }
}
function ed(a, b, c) {
  null == a && (a = ad);
  ad = void 0;
  if (null == a) {
    var d = 96;
    c ? ((a = [c]), (d |= 512)) : (a = []);
    b && (d = (d & -16760833) | ((b & 1023) << 14));
  } else {
    if (!Array.isArray(a)) throw Error();
    d = D(a);
    if (d & 64) return Qc && delete a[Qc], a;
    d |= 64;
    if (c && ((d |= 512), c !== a[0])) throw Error();
    a: {
      c = a;
      var e = c.length;
      if (e) {
        const g = e - 1;
        var f = c[g];
        if (Ic(f)) {
          d |= 256;
          b = +!!(d & 512) - 1;
          e = g - b;
          1024 <= e && (fd(c, b, f), (e = 1023));
          d = (d & -16760833) | ((e & 1023) << 14);
          break a;
        }
      }
      b &&
        ((f = +!!(d & 512) - 1),
        (b = Math.max(b, e - f)),
        1024 < b && (fd(c, f, {}), (d |= 256), (b = 1023)),
        (d = (d & -16760833) | ((b & 1023) << 14)));
    }
  }
  E(a, d);
  return a;
}
function fd(a, b, c) {
  const d = 1023 + b,
    e = a.length;
  for (let f = d; f < e; f++) {
    const g = a[f];
    null != g && g !== c && (c[f - b] = g);
  }
  a.length = d + 1;
  a[d] = c;
}
function gd(a, b) {
  return hd(b);
}
function hd(a) {
  switch (typeof a) {
    case "number":
      return isFinite(a) ? a : String(a);
    case "boolean":
      return a ? 1 : 0;
    case "object":
      if (a && !Array.isArray(a)) {
        if (Sb(a)) return Nb(a);
        if (a instanceof Yb) {
          const b = a.T;
          return null == b ? "" : "string" === typeof b ? b : (a.T = Nb(b));
        }
      }
  }
  return a;
}
function id(a, b, c) {
  const d = yc(a);
  var e = d.length;
  const f = b & 256 ? d[e - 1] : void 0;
  e += f ? -1 : 0;
  for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
  if (f) {
    b = d[b] = {};
    for (const g in f) b[g] = c(f[g]);
  }
  Pc(d, a);
  return d;
}
function jd(a, b, c, d, e, f) {
  if (null != a) {
    if (Array.isArray(a))
      a =
        e && 0 == a.length && D(a) & 1
          ? void 0
          : f && D(a) & 2
          ? a
          : kd(a, b, c, void 0 !== d, e, f);
    else if (Ic(a)) {
      const g = {};
      for (let h in a) g[h] = jd(a[h], b, c, d, e, f);
      a = g;
    } else a = b(a, d);
    return a;
  }
}
function kd(a, b, c, d, e, f) {
  const g = d || c ? D(a) : 0;
  d = d ? !!(g & 32) : void 0;
  const h = yc(a);
  for (let k = 0; k < h.length; k++) h[k] = jd(h[k], b, c, d, e, f);
  c && (Pc(h, a), c(g, h));
  return h;
}
function ld(a) {
  return a.ea === Hc ? a.toJSON() : hd(a);
}
function md(a, b, c = Fc) {
  if (null != a) {
    if (Lb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
    if (Array.isArray(a)) {
      var d = D(a);
      if (d & 2) return a;
      b && (b = 0 === d || (!!(d & 32) && !(d & 64 || !(d & 16))));
      return b
        ? (E(a, (d | 34) & -12293), a)
        : kd(a, md, d & 4 ? Fc : c, !0, !1, !0);
    }
    a.ea === Hc && ((c = a.o), (d = F(c)), (a = d & 2 ? a : nd(a, c, d, !0)));
    return a;
  }
}
function nd(a, b, c, d) {
  a = a.constructor;
  ad = b = od(b, c, d);
  b = new a(b);
  ad = void 0;
  return b;
}
function od(a, b, c) {
  const d = c || b & 2 ? Fc : Ec,
    e = !!(b & 32);
  a = id(a, b, (f) => md(f, e, d));
  zc(a, 32 | (c ? 2 : 0));
  return a;
}
function pd(a) {
  const b = a.o,
    c = F(b);
  return c & 2 ? nd(a, b, c, !1) : a;
}
Object.freeze({});
function qd(a, b) {
  a = a.o;
  return rd(a, F(a), b);
}
function rd(a, b, c, d) {
  if (-1 === c) return null;
  if (c >= Gc(b)) {
    if (b & 256) return a[a.length - 1][c];
  } else {
    var e = a.length;
    if (d && b & 256 && ((d = a[e - 1][c]), null != d)) return d;
    b = c + (+!!(b & 512) - 1);
    if (b < e) return a[b];
  }
}
function sd(a, b, c) {
  const d = a.o;
  let e = F(d);
  Nc(e);
  td(d, e, b, c);
  return a;
}
function td(a, b, c, d, e) {
  var f = Gc(b);
  if (c >= f || e) {
    e = b;
    if (b & 256) f = a[a.length - 1];
    else {
      if (null == d) return e;
      f = a[f + (+!!(b & 512) - 1)] = {};
      e |= 256;
    }
    f[c] = d;
    e !== b && E(a, e);
    return e;
  }
  a[c + (+!!(b & 512) - 1)] = d;
  b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
  return b;
}
function ud(a, b, c, d) {
  var e = b & 2;
  let f = rd(a, b, c);
  Array.isArray(f) || (f = Lc);
  const g = !(d & 2);
  d = !(d & 1);
  const h = !!(b & 32);
  let k = D(f);
  0 !== k || !h || e || g ? k & 1 || ((k |= 1), E(f, k)) : ((k |= 33), E(f, k));
  e
    ? ((a = !1),
      k & 2 || (zc(f, 34), (a = !!(4 & k))),
      (d || a) && Object.freeze(f))
    : ((e = !!(2 & k) || !!(2048 & k)),
      d && e
        ? ((f = yc(f)), (d = 1), h && !g && (d |= 32), E(f, d), td(a, b, c, f))
        : g && k & 32 && !e && Bc(f, 32));
  return f;
}
function vd(a, b, c, d) {
  const e = a.o;
  let f = F(e);
  Nc(f);
  (c = wd(e, f, c)) && c !== b && null != d && (f = td(e, f, c));
  td(e, f, b, d);
  return a;
}
function xd(a, b, c) {
  a = a.o;
  return wd(a, F(a), b) === c ? c : -1;
}
function wd(a, b, c) {
  let d = 0;
  for (let e = 0; e < c.length; e++) {
    const f = c[e];
    null != rd(a, b, f) && (0 !== d && (b = td(a, b, d)), (d = f));
  }
  return d;
}
function yd(a, b, c) {
  var d = a.o,
    e = F(d),
    f = rd(d, e, c, !1);
  b = $c(f, b, e);
  b !== f && null != b && td(d, e, c, b, !1);
  d = b;
  if (null == d) return d;
  a = a.o;
  e = F(a);
  e & 2 || ((f = pd(d)), f !== d && ((d = f), td(a, e, c, d, !1)));
  return d;
}
function zd(a, b, c, d, e, f, g) {
  const h = 1 === e;
  e = 2 === e;
  f = !!f;
  var k = !!(2 & b) && e;
  let l = ud(a, b, d, 3);
  b = F(a);
  var n = D(l),
    m = !!(2 & n);
  const r = !!(4 & n),
    p = !!(32 & n);
  let t = (m && r) || !!(2048 & n);
  if (!r) {
    var w = l,
      B = b,
      I;
    (I = !!(2 & n)) && (B = Cc(B, 2, !0));
    let G = !I,
      R = !0,
      ec = 0,
      Dd = 0;
    for (; ec < w.length; ec++) {
      const Ed = $c(w[ec], c, B);
      if (Ed instanceof c) {
        if (!I) {
          const Kg = !!(D(Ed.o) & 2);
          G && (G = !Kg);
          R && (R = Kg);
        }
        w[Dd++] = Ed;
      }
    }
    Dd < ec && (w.length = Dd);
    n = Cc(n, 4, !0);
    n = Cc(n, 16, R);
    n = Cc(n, 8, G);
    E(w, n);
    m && !k && (Object.freeze(l), (t = !0));
  }
  c = n;
  k = !!(8 & n) || (h && !l.length);
  if (g && !k) {
    t &&
      ((l = yc(l)), (t = !1), (c = 0), (n = Ad(n, b, f)), (b = td(a, b, d, l)));
    g = l;
    k = n;
    for (m = 0; m < g.length; m++)
      (w = g[m]), (n = pd(w)), w !== n && (g[m] = n);
    k = Cc(k, 8, !0);
    n = k = Cc(k, 16, !g.length);
  }
  t ||
    (h
      ? (n = Cc(n, !l.length || (16 & n && (!r || p)) ? 2 : 2048, !0))
      : f || (n = Cc(n, 32, !1)),
    n !== c && E(l, n),
    h && (Object.freeze(l), (t = !0)));
  e && t && ((l = yc(l)), (n = Ad(n, b, f)), E(l, n), td(a, b, d, l));
  return l;
}
function Bd(a) {
  a = a.o;
  const b = F(a),
    c = !!(2 & b);
  return zd(a, b, Cd, 1, c ? 1 : 2, !1, !c);
}
function H(a, b, c, d) {
  null != d ? Zc(d, b) : (d = void 0);
  return sd(a, c, d);
}
function Fd(a, b, c, d, e) {
  null != e ? Zc(e, b) : (e = void 0);
  vd(a, c, d, e);
}
function Ad(a, b, c) {
  a = Cc(a, 2, !!(2 & b));
  a = Cc(a, 32, !!(32 & b) && c);
  return (a = Cc(a, 2048, !1));
}
function Gd(a, b, c, d) {
  a = a.o;
  const e = F(a);
  Nc(e);
  b = zd(a, e, c, b, 2);
  c = null != d ? Zc(d, c) : new c();
  b.push(c);
  D(c.o) & 2 ? Bc(b, 8) : Bc(b, 16);
}
function Hd(a, b) {
  a = qd(a, b);
  return null == a || "string" === typeof a ? a : void 0;
}
function Id(a, b) {
  a = Hd(a, b);
  return null != a ? a : "";
}
function Jd(a, b, c) {
  if (null != c) {
    if ("number" !== typeof c) throw Sc("int32");
    Number.isFinite(c) || Rc();
  }
  return sd(a, b, c);
}
function Kd(a, b, c) {
  sd(a, b, null == c ? c : Xc(c));
}
function J(a, b, c) {
  return sd(a, b, Yc(c));
}
function K(a, b, c) {
  null != c && (Number.isFinite(c) || Rc());
  return sd(a, b, c);
}
var L = class {
  constructor(a, b, c) {
    this.o = ed(a, b, c);
  }
  toJSON() {
    if (Jc) var a = Ld(this, this.o, !1);
    else (a = kd(this.o, ld, void 0, void 0, !1, !1)), (a = Ld(this, a, !0));
    return a;
  }
  clone() {
    const a = this.o;
    return nd(this, a, F(a), !1);
  }
  K() {
    return !!(D(this.o) & 2);
  }
};
L.prototype.ea = Hc;
function Ld(a, b, c) {
  const d = a.constructor.v;
  var e = F(c ? a.o : b),
    f = Gc(e),
    g = !1;
  if (d) {
    if (!c) {
      b = yc(b);
      var h;
      if (b.length && Ic((h = b[b.length - 1])))
        for (g = 0; g < d.length; g++)
          if (d[g] >= f) {
            Object.assign((b[b.length - 1] = {}), h);
            break;
          }
      g = !0;
    }
    f = b;
    c = !c;
    h = F(a.o);
    a = Gc(h);
    h = +!!(h & 512) - 1;
    var k;
    for (let I = 0; I < d.length; I++) {
      var l = d[I];
      if (l < a) {
        l += h;
        var n = f[l];
        null == n ? (f[l] = c ? Lc : Dc()) : c && n !== Lc && Ac(n);
      } else {
        if (!k) {
          var m = void 0;
          f.length && Ic((m = f[f.length - 1])) ? (k = m) : f.push((k = {}));
        }
        n = k[l];
        null == k[l] ? (k[l] = c ? Lc : Dc()) : c && n !== Lc && Ac(n);
      }
    }
  }
  k = b.length;
  if (!k) return b;
  let r, p;
  if (Ic((m = b[k - 1]))) {
    a: {
      var t = m;
      f = {};
      c = !1;
      for (var w in t)
        (a = t[w]),
          Array.isArray(a) &&
            ((h = a), Kc(a, d, +w) && (a = null), a != h && (c = !0)),
          null != a ? (f[w] = a) : (c = !0);
      if (c) {
        for (let I in f) {
          t = f;
          break a;
        }
        t = null;
      }
    }
    t != m && (r = !0);
    k--;
  }
  for (e = +!!(e & 512) - 1; 0 < k; k--) {
    w = k - 1;
    m = b[w];
    if (null != m && !Kc(m, d, w - e)) break;
    p = !0;
  }
  if (!r && !p) return b;
  var B;
  g ? (B = b) : (B = Array.prototype.slice.call(b, 0, k));
  b = B;
  g && (b.length = k);
  t && b.push(t);
  return b;
}
const Md = Symbol();
function Nd(a) {
  let b = a[Md];
  if (!b) {
    const c = Od(a),
      d = Pd(a),
      e = d.h;
    b = e
      ? (f, g) => e(f, g, d)
      : (f, g) => {
          for (; tc(g) && 4 != g.i; ) {
            var h = g.l,
              k = d[h];
            if (!k) {
              var l = d.extensions;
              l && (l = l[h]) && (k = d[h] = Qd(l));
            }
            if (!k || !k(g, f, h)) {
              k = g;
              h = k.j;
              uc(k);
              if (k.oa) k = void 0;
              else {
                l = k.h.h - h;
                k.h.h = h;
                b: {
                  k = k.h;
                  h = l;
                  if (0 == h) {
                    k = Xb();
                    break b;
                  }
                  const n = pc(k, h);
                  k.Z && k.m
                    ? (h = k.j.subarray(n, n + h))
                    : ((k = k.j),
                      (l = n),
                      (h = n + h),
                      (h =
                        l === h
                          ? Tb || (Tb = new Uint8Array(0))
                          : fc
                          ? k.slice(l, h)
                          : new Uint8Array(k.subarray(l, h))));
                  k = 0 == h.length ? Xb() : new Yb(h, Ub);
                }
              }
              h = f;
              k &&
                (Oc || (Oc = Symbol()),
                (l = h[Oc]) ? l.push(k) : (h[Oc] = [k]));
            }
          }
          for (const n in c) {
            f[Qc || (Qc = Symbol())] = c;
            break;
          }
        };
    a[Md] = b;
  }
  return b;
}
function Rd(a) {
  if ((a = a.Ea)) return Nd(a);
}
function Qd(a) {
  const b = Rd(a),
    c = a.mc.h;
  if (b) {
    const d = Pd(a.Ea).da;
    return (e, f, g) => c(e, f, g, d, b);
  }
  return (d, e, f) => c(d, e, f);
}
const Sd = Symbol();
function Td(a, b, c, d) {
  let e;
  if (d) {
    const f = d[Sd];
    e = f ? f.da : dd(d[0]);
    c[a] = null != f ? f : d;
  }
  e && e === bd
    ? ((b = c.Pa), b || (c.Pa = b = []), b.push(a))
    : b.i && ((b = c.Ua), b || (c.Ua = b = []), b.push(a));
}
function Ud(a, b, c, d) {
  Td(a, b, d);
}
function Vd(a, b, c, d, e) {
  Td(a, b, e, c);
}
function Od(a) {
  let b = a[Sd];
  if (b) return b;
  b = a[Sd] = {};
  return (b = Wd(a, b, Ud, Vd, b));
}
function Wd(a, b, c, d, e) {
  b.da = dd(a[0]);
  let f = 1;
  if (a.length > f && !(a[f] instanceof xc)) {
    var g = a[f++];
    if (Array.isArray(g)) return (b.h = g[0]), (b.extensions = g[1]), b;
    b.extensions = g;
  }
  for (g = 0; f < a.length; ) {
    var h = a[f++],
      k = a[f];
    "number" === typeof k ? (f++, (g += k)) : g++;
    for (k = f; k < a.length && !(a[k] instanceof xc); ) k++;
    if ((k -= f)) {
      var l = a,
        n = f,
        m = l[n];
      "function" == typeof m && ((m = m()), (l[n] = m));
      if (
        (l = Array.isArray(m)) &&
        !(l = Xd in m || Yd in m) &&
        (l = 0 < m.length)
      ) {
        l = m;
        n = l[0];
        const r = dd(n);
        null != r && r !== n && (l[0] = r);
        l = null != r;
      }
      (m = l ? m : void 0)
        ? (f++,
          1 === k
            ? ((h = d(g, h, m, void 0, e)), void 0 !== h && (b[g] = h))
            : ((h = d(g, h, m, a[f++], e)), void 0 !== h && (b[g] = h)))
        : ((h = c(g, h, a[f++], e)), void 0 !== h && (b[g] = h));
    } else (h = c(g, h, void 0, e)), void 0 !== h && (b[g] = h);
  }
  return b;
}
const Yd = Symbol(),
  Xd = Symbol();
function Zd(a, b, c) {
  const d = b.h;
  return c ? (e, f, g) => d(e, f, g, c) : d;
}
function $d(a, b, c, d) {
  const e = b.h;
  let f, g;
  return (h, k, l) => e(h, k, l, g || (g = Pd(c).da), f || (f = Nd(c)), d);
}
function Pd(a) {
  let b = a[Xd];
  if (b) return b;
  Od(a);
  b = Wd(a, (a[Xd] = {}), Zd, $d);
  Xd in a && Yd in a && (a.length = 0);
  return b;
}
var ae;
ae = new xc(function (a, b, c) {
  if (2 !== a.i) return !1;
  var d = oc(a.h) >>> 0;
  a = a.h;
  var e = pc(a, d);
  a = a.j;
  if (Db) {
    var f = a,
      g;
    (g = Cb) || (g = Cb = new TextDecoder("utf-8", { fatal: !0 }));
    a = e + d;
    f = 0 === e && a === f.length ? f : f.subarray(e, a);
    try {
      var h = g.decode(f);
    } catch (l) {
      if (void 0 === Bb) {
        try {
          g.decode(new Uint8Array([128]));
        } catch (n) {}
        try {
          g.decode(new Uint8Array([97])), (Bb = !0);
        } catch (n) {
          Bb = !1;
        }
      }
      !Bb && (Cb = void 0);
      throw l;
    }
  } else {
    h = e;
    d = h + d;
    e = [];
    let l = null;
    let n;
    for (; h < d; ) {
      var k = a[h++];
      128 > k
        ? e.push(k)
        : 224 > k
        ? h >= d
          ? zb()
          : ((n = a[h++]),
            194 > k || 128 !== (n & 192)
              ? (h--, zb())
              : e.push(((k & 31) << 6) | (n & 63)))
        : 240 > k
        ? h >= d - 1
          ? zb()
          : ((n = a[h++]),
            128 !== (n & 192) ||
            (224 === k && 160 > n) ||
            (237 === k && 160 <= n) ||
            128 !== ((f = a[h++]) & 192)
              ? (h--, zb())
              : e.push(((k & 15) << 12) | ((n & 63) << 6) | (f & 63)))
        : 244 >= k
        ? h >= d - 2
          ? zb()
          : ((n = a[h++]),
            128 !== (n & 192) ||
            0 !== ((k << 28) + (n - 144)) >> 30 ||
            128 !== ((f = a[h++]) & 192) ||
            128 !== ((g = a[h++]) & 192)
              ? (h--, zb())
              : ((k =
                  ((k & 7) << 18) |
                  ((n & 63) << 12) |
                  ((f & 63) << 6) |
                  (g & 63)),
                (k -= 65536),
                e.push(((k >> 10) & 1023) + 55296, (k & 1023) + 56320)))
        : zb();
      8192 <= e.length && ((l = Ab(l, e)), (e.length = 0));
    }
    h = Ab(l, e);
  }
  td(b, F(b), c, h);
  return !0;
}, !1);
var be;
be = new xc(function (a, b, c, d, e) {
  if (2 !== a.i) return !1;
  d = ed(void 0, d[0], d[1]);
  var f = F(b);
  Nc(f);
  var g = ud(b, f, c, 3);
  f = F(b);
  D(g) & 4 && ((g = yc(g)), E(g, (D(g) | 1) & -2079), td(b, f, c, g));
  g.push(d);
  b = a.h.i;
  c = oc(a.h) >>> 0;
  f = a.h.h + c;
  g = f - b;
  0 >= g && ((a.h.i = f), e(d, a, void 0, void 0, void 0), (g = f - a.h.h));
  if (g)
    throw Error(
      "Message parsing ended unexpectedly. Expected to read " +
        `${c} bytes, instead read ${c - g} bytes, either the ` +
        "data ended unexpectedly or the message misreported its own length"
    );
  a.h.h = f;
  a.h.i = b;
  return !0;
}, !0);
za("csi.gstatic.com");
za("googleads.g.doubleclick.net");
za("partner.googleadservices.com");
za("pubads.g.doubleclick.net");
za("securepubads.g.doubleclick.net");
za("tpc.googlesyndication.com");
function ce(a, b = `unexpected value ${a}!`) {
  throw Error(b);
}
function de(a) {
  if (!a) return "";
  if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
  a.startsWith("blob:") && (a = a.substring(5));
  a = a.split("#")[0].split("?")[0];
  a = a.toLowerCase();
  0 == a.indexOf("//") && (a = window.location.protocol + a);
  /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
  var b = a.substring(a.indexOf("://") + 3),
    c = b.indexOf("/");
  -1 != c && (b = b.substring(0, c));
  c = a.substring(0, a.indexOf("://"));
  if (!c) throw Error("URI is missing protocol: " + a);
  if (
    "http" !== c &&
    "https" !== c &&
    "chrome-extension" !== c &&
    "moz-extension" !== c &&
    "file" !== c &&
    "android-app" !== c &&
    "chrome-search" !== c &&
    "chrome-untrusted" !== c &&
    "chrome" !== c &&
    "app" !== c &&
    "devtools" !== c
  )
    throw Error("Invalid URI scheme in origin: " + c);
  a = "";
  var d = b.indexOf(":");
  if (-1 != d) {
    var e = b.substring(d + 1);
    b = b.substring(0, d);
    if (("http" === c && "80" !== e) || ("https" === c && "443" !== e))
      a = ":" + e;
  }
  return c + "://" + b + a;
}
function ee() {
  function a() {
    e[0] = 1732584193;
    e[1] = 4023233417;
    e[2] = 2562383102;
    e[3] = 271733878;
    e[4] = 3285377520;
    n = l = 0;
  }
  function b(m) {
    for (var r = g, p = 0; 64 > p; p += 4)
      r[p / 4] = (m[p] << 24) | (m[p + 1] << 16) | (m[p + 2] << 8) | m[p + 3];
    for (p = 16; 80 > p; p++)
      (m = r[p - 3] ^ r[p - 8] ^ r[p - 14] ^ r[p - 16]),
        (r[p] = ((m << 1) | (m >>> 31)) & 4294967295);
    m = e[0];
    var t = e[1],
      w = e[2],
      B = e[3],
      I = e[4];
    for (p = 0; 80 > p; p++) {
      if (40 > p)
        if (20 > p) {
          var G = B ^ (t & (w ^ B));
          var R = 1518500249;
        } else (G = t ^ w ^ B), (R = 1859775393);
      else
        60 > p
          ? ((G = (t & w) | (B & (t | w))), (R = 2400959708))
          : ((G = t ^ w ^ B), (R = 3395469782));
      G =
        ((((m << 5) | (m >>> 27)) & 4294967295) + G + I + R + r[p]) &
        4294967295;
      I = B;
      B = w;
      w = ((t << 30) | (t >>> 2)) & 4294967295;
      t = m;
      m = G;
    }
    e[0] = (e[0] + m) & 4294967295;
    e[1] = (e[1] + t) & 4294967295;
    e[2] = (e[2] + w) & 4294967295;
    e[3] = (e[3] + B) & 4294967295;
    e[4] = (e[4] + I) & 4294967295;
  }
  function c(m, r) {
    if ("string" === typeof m) {
      m = unescape(encodeURIComponent(m));
      for (var p = [], t = 0, w = m.length; t < w; ++t) p.push(m.charCodeAt(t));
      m = p;
    }
    r || (r = m.length);
    p = 0;
    if (0 == l)
      for (; p + 64 < r; ) b(m.slice(p, p + 64)), (p += 64), (n += 64);
    for (; p < r; )
      if (((f[l++] = m[p++]), n++, 64 == l))
        for (l = 0, b(f); p + 64 < r; )
          b(m.slice(p, p + 64)), (p += 64), (n += 64);
  }
  function d() {
    var m = [],
      r = 8 * n;
    56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
    for (var p = 63; 56 <= p; p--) (f[p] = r & 255), (r >>>= 8);
    b(f);
    for (p = r = 0; 5 > p; p++)
      for (var t = 24; 0 <= t; t -= 8) m[r++] = (e[p] >> t) & 255;
    return m;
  }
  for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
  var l, n;
  a();
  return {
    reset: a,
    update: c,
    digest: d,
    Ha: function () {
      for (var m = d(), r = "", p = 0; p < m.length; p++)
        r +=
          "0123456789ABCDEF".charAt(Math.floor(m[p] / 16)) +
          "0123456789ABCDEF".charAt(m[p] % 16);
      return r;
    },
  };
}
function fe(a, b, c) {
  var d = String(v.location.href);
  return d && a && b ? [b, ge(de(d), a, c || null)].join(" ") : null;
}
function ge(a, b, c) {
  var d = [],
    e = [];
  if (1 == (Array.isArray(c) ? 2 : 1))
    return (
      (e = [b, a]),
      pa(d, function (h) {
        e.push(h);
      }),
      he(e.join(" "))
    );
  var f = [],
    g = [];
  pa(c, function (h) {
    g.push(h.key);
    f.push(h.value);
  });
  c = Math.floor(new Date().getTime() / 1e3);
  e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
  pa(d, function (h) {
    e.push(h);
  });
  a = he(e.join(" "));
  a = [c, a];
  0 == g.length || a.push(g.join(""));
  return a.join("_");
}
function he(a) {
  var b = ee();
  b.update(a);
  return b.Ha().toLowerCase();
}
const ie = {};
function je() {
  this.h = document || { cookie: "" };
}
q = je.prototype;
q.isEnabled = function () {
  if (!v.navigator.cookieEnabled) return !1;
  if (!this.ra()) return !0;
  this.set("TESTCOOKIESENABLED", "1", { sa: 60 });
  if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
  this.remove("TESTCOOKIESENABLED");
  return !0;
};
q.set = function (a, b, c) {
  let d,
    e,
    f,
    g = !1,
    h;
  "object" === typeof c &&
    ((h = c.qc),
    (g = c.sc || !1),
    (f = c.domain || void 0),
    (e = c.path || void 0),
    (d = c.sa));
  if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
  if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
  void 0 === d && (d = -1);
  this.h.cookie =
    a +
    "=" +
    b +
    (f ? ";domain=" + f : "") +
    (e ? ";path=" + e : "") +
    (0 > d
      ? ""
      : 0 == d
      ? ";expires=" + new Date(1970, 1, 1).toUTCString()
      : ";expires=" + new Date(Date.now() + 1e3 * d).toUTCString()) +
    (g ? ";secure" : "") +
    (null != h ? ";samesite=" + h : "");
};
q.get = function (a, b) {
  const c = a + "=",
    d = (this.h.cookie || "").split(";");
  for (let e = 0, f; e < d.length; e++) {
    f = Da(d[e]);
    if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
    if (f == a) return "";
  }
  return b;
};
q.remove = function (a, b, c) {
  const d = void 0 !== this.get(a);
  this.set(a, "", { sa: 0, path: b, domain: c });
  return d;
};
q.ra = function () {
  return !this.h.cookie;
};
q.clear = function () {
  var a = (this.h.cookie || "").split(";");
  const b = [],
    c = [];
  let d, e;
  for (let f = 0; f < a.length; f++)
    (e = Da(a[f])),
      (d = e.indexOf("=")),
      -1 == d
        ? (b.push(""), c.push(e))
        : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
  for (a = b.length - 1; 0 <= a; a--) this.remove(b[a]);
};
function ke() {
  return !!ie.FPA_SAMESITE_PHASE2_MOD || !1;
}
function le(a, b, c, d) {
  (a = v[a]) || "undefined" === typeof document || (a = new je().get(b));
  return a ? fe(a, c, d) : null;
}
"undefined" !== typeof TextDecoder && new TextDecoder();
"undefined" !== typeof TextEncoder && new TextEncoder();
const me = self;
class ne {
  constructor() {
    this.promise = new Promise((a) => {
      this.resolve = a;
    });
  }
}
function M(a) {
  Ra.call(this);
  this.A = 1;
  this.m = [];
  this.s = 0;
  this.h = [];
  this.i = {};
  this.G = !!a;
}
la(M, Ra);
q = M.prototype;
q.Aa = function (a, b, c) {
  var d = this.i[a];
  d || (d = this.i[a] = []);
  var e = this.A;
  this.h[e] = a;
  this.h[e + 1] = b;
  this.h[e + 2] = c;
  this.A = e + 3;
  d.push(e);
  return e;
};
q.ha = function (a) {
  var b = this.h[a];
  if (b) {
    var c = this.i[b];
    0 != this.s
      ? (this.m.push(a), (this.h[a + 1] = () => {}))
      : (c && ra(c, a),
        delete this.h[a],
        delete this.h[a + 1],
        delete this.h[a + 2]);
  }
  return !!b;
};
q.fa = function (a, b) {
  var c = this.i[a];
  if (c) {
    for (
      var d = Array(arguments.length - 1), e = 1, f = arguments.length;
      e < f;
      e++
    )
      d[e - 1] = arguments[e];
    if (this.G)
      for (e = 0; e < c.length; e++) {
        var g = c[e];
        oe(this.h[g + 1], this.h[g + 2], d);
      }
    else {
      this.s++;
      try {
        for (e = 0, f = c.length; e < f && !this.j; e++)
          (g = c[e]), this.h[g + 1].apply(this.h[g + 2], d);
      } finally {
        if ((this.s--, 0 < this.m.length && 0 == this.s))
          for (; (c = this.m.pop()); ) this.ha(c);
      }
    }
    return 0 != e;
  }
  return !1;
};
function oe(a, b, c) {
  hb(function () {
    a.apply(b, c);
  });
}
q.clear = function (a) {
  if (a) {
    var b = this.i[a];
    b && (b.forEach(this.ha, this), delete this.i[a]);
  } else (this.h.length = 0), (this.i = {});
};
q.O = function () {
  M.Wa.O.call(this);
  this.clear();
  this.m.length = 0;
}; /*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let N = {};
var pe =
  "undefined" !== typeof Uint8Array &&
  "undefined" !== typeof Uint16Array &&
  "undefined" !== typeof Int32Array;
N.assign = function (a) {
  for (var b = Array.prototype.slice.call(arguments, 1); b.length; ) {
    var c = b.shift();
    if (c) {
      if ("object" !== typeof c) throw new TypeError(c + "must be non-object");
      for (var d in c)
        Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
    }
  }
  return a;
};
N.vc = function (a, b) {
  if (a.length === b) return a;
  if (a.subarray) return a.subarray(0, b);
  a.length = b;
  return a;
};
var qe = {
    Da: function (a, b, c, d, e) {
      if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
      else for (var f = 0; f < d; f++) a[e + f] = b[c + f];
    },
    Ja: function (a) {
      var b, c;
      var d = (c = 0);
      for (b = a.length; d < b; d++) c += a[d].length;
      var e = new Uint8Array(c);
      d = c = 0;
      for (b = a.length; d < b; d++) {
        var f = a[d];
        e.set(f, c);
        c += f.length;
      }
      return e;
    },
  },
  re = {
    Da: function (a, b, c, d, e) {
      for (var f = 0; f < d; f++) a[e + f] = b[c + f];
    },
    Ja: function (a) {
      return [].concat.apply([], a);
    },
  };
N.Va = function () {
  pe
    ? ((N.ya = Uint8Array),
      (N.wa = Uint16Array),
      (N.xa = Int32Array),
      N.assign(N, qe))
    : ((N.ya = Array), (N.wa = Array), (N.xa = Array), N.assign(N, re));
};
N.Va();
try {
  new Uint8Array(1);
} catch (a) {}
function se(a) {
  for (var b = a.length; 0 <= --b; ) a[b] = 0;
}
se(Array(576));
se(Array(60));
se(Array(512));
se(Array(256));
se(Array(29));
se(Array(30)); /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var te = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
  ""
);
var ue = class {
  constructor(a) {
    this.name = a;
  }
};
var ve = new ue("rawColdConfigGroup");
var we = new ue("rawHotConfigGroup");
function xe(a, b) {
  return Jd(a, 1, b);
}
var ye = class extends L {
  constructor(a) {
    super(a);
  }
};
var ze = class extends L {
  constructor(a) {
    super(a);
  }
};
ze.v = [1];
var Ae = class extends L {
  constructor(a) {
    super(a);
  }
};
var Be = class extends L {
  constructor(a) {
    super(a);
  }
};
var Ce = class extends L {
  constructor(a) {
    super(a);
  }
};
Ce.v = [2];
var De = class extends L {
  constructor(a) {
    super(a);
  }
  getPlayerType() {
    var a = qd(this, 36);
    return null != a ? a : 0;
  }
  setHomeGroupInfo(a) {
    return H(this, Ce, 81, a);
  }
  clearLocationPlayabilityToken() {
    return sd(this, 89);
  }
};
De.v = [9, 66, 32, 86, 100, 101];
var Fe = class extends L {
    constructor(a) {
      super(a);
    }
    getKey() {
      return Id(this, 1);
    }
    J() {
      return Id(this, xd(this, Ee, 2));
    }
  },
  Ee = [2, 3, 4, 5, 6];
var Ge = class extends L {
  constructor(a) {
    super(a);
  }
};
Ge.v = [15, 26, 28];
var He = class extends L {
  constructor(a) {
    super(a);
  }
};
He.v = [5];
var Ie = class extends L {
  constructor(a) {
    super(a);
  }
};
var Je = class extends L {
  constructor(a) {
    super(a);
  }
  setSafetyMode(a) {
    return K(this, 5, a);
  }
};
Je.v = [12];
var Ke = class extends L {
  constructor(a) {
    super(a);
  }
  j(a) {
    return H(this, De, 1, a);
  }
};
Ke.v = [12];
var Le = class extends L {
  constructor(a) {
    super(a);
  }
  getKey() {
    return Id(this, 1);
  }
  J() {
    return Id(this, 2);
  }
};
var Me = class extends L {
  constructor(a) {
    super(a);
  }
};
Me.v = [4, 5];
var Ne = class extends L {
  constructor(a) {
    super(a);
  }
};
var Oe = class extends L {
    constructor(a) {
      super(a);
    }
  },
  Pe = [2, 3, 4, 5];
var Qe = class extends L {
  constructor(a) {
    super(a);
  }
  getMessage() {
    return Id(this, 1);
  }
};
var Re = class extends L {
  constructor(a) {
    super(a);
  }
};
var Se = class extends L {
  constructor(a) {
    super(a);
  }
};
var Te = class extends L {
  constructor(a) {
    super(a);
  }
};
Te.v = [10, 17];
var Ue = class extends L {
  constructor(a) {
    super(a);
  }
};
var Ve = class extends L {
  constructor(a) {
    super(a);
  }
};
var We = class extends L {
  constructor(a) {
    super(a);
  }
};
var Xe = class extends L {
  constructor(a) {
    super(a);
  }
};
var Ye = class extends L {
  constructor(a) {
    super(a);
  }
  getVideoData() {
    return yd(this, Xe, 15);
  }
};
Ye.v = [4];
function Ze(a, b) {
  H(a, Ve, 1, b);
}
var $e = class extends L {
  constructor(a) {
    super(a);
  }
};
function af(a, b) {
  return H(a, Ve, 1, b);
}
var bf = class extends L {
  constructor(a) {
    super(a);
  }
  h(a) {
    return J(this, 2, a);
  }
};
function cf(a, b) {
  return H(a, Ve, 2, b);
}
var df = class extends L {
  constructor(a) {
    super(a);
  }
  h(a) {
    return J(this, 1, a);
  }
};
df.v = [3];
var ef = class extends L {
  constructor(a) {
    super(a);
  }
  h(a) {
    return J(this, 1, a);
  }
};
var ff = class extends L {
  constructor(a) {
    super(a);
  }
  h(a) {
    return J(this, 1, a);
  }
};
var gf = class extends L {
  constructor(a) {
    super(a);
  }
  h(a) {
    return J(this, 1, a);
  }
};
var hf = class extends L {
  constructor(a) {
    super(a);
  }
  h(a) {
    return J(this, 1, a);
  }
};
var jf = class extends L {
  constructor(a) {
    super(a);
  }
};
var kf = class extends L {
  constructor(a) {
    super(a);
  }
};
var O = class extends L {
    constructor(a) {
      super(a, 487);
    }
  },
  lf = [
    2, 3, 5, 6, 7, 11, 13, 20, 21, 22, 23, 24, 28, 32, 37, 45, 59, 72, 73, 74,
    76, 78, 79, 80, 85, 91, 97, 100, 102, 105, 111, 117, 119, 126, 127, 136,
    146, 148, 151, 156, 157, 158, 159, 163, 164, 168, 176, 177, 178, 179, 184,
    188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203,
    204, 205, 206, 208, 209, 215, 219, 222, 225, 226, 227, 229, 232, 233, 234,
    240, 241, 244, 247, 248, 249, 251, 254, 255, 256, 257, 258, 259, 260, 261,
    266, 270, 272, 278, 288, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314,
    319, 320, 321, 323, 324, 327, 328, 330, 331, 332, 334, 337, 338, 340, 344,
    348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369,
    370, 373, 374, 375, 378, 380, 381, 383, 388, 389, 399, 402, 403, 410, 411,
    412, 413, 414, 415, 416, 417, 418, 423, 424, 425, 426, 427, 429, 430, 431,
    439, 441, 444, 448, 458, 469, 471, 473, 474, 480, 481, 482, 484, 485, 486,
  ];
var mf = {
  Hb: 0,
  ob: 1,
  ub: 2,
  vb: 4,
  Bb: 8,
  wb: 16,
  xb: 32,
  Gb: 64,
  Fb: 128,
  qb: 256,
  sb: 512,
  zb: 1024,
  rb: 2048,
  tb: 4096,
  pb: 8192,
  yb: 16384,
  Cb: 32768,
  Ab: 65536,
  Db: 131072,
  Eb: 262144,
};
var nf = class extends L {
  constructor(a) {
    super(a);
  }
};
var pf = class extends L {
    constructor(a) {
      super(a);
    }
    setVideoId(a) {
      return vd(this, 1, of, Yc(a));
    }
    getPlaylistId() {
      return Hd(this, xd(this, of, 2));
    }
  },
  of = [1, 2];
var qf = class extends L {
  constructor() {
    super();
  }
};
qf.v = [3];
var rf = new ue("recordNotificationInteractionsEndpoint");
var sf = ["notification/convert_endpoint_to_url"],
  tf = ["notification/record_interactions"],
  uf = ["notification_registration/set_registration"];
var vf = (a) =>
  self
    .btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a))))
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
var wf = ["notifications_register", "notifications_check_registration"];
var xf = class extends Error {
  constructor(a, ...b) {
    super(a);
    this.args = [...b];
  }
};
let yf = null;
function P(a, b) {
  const c = {};
  c.key = a;
  c.value = b;
  return zf().then(
    (d) =>
      new Promise((e, f) => {
        try {
          const g = d
            .transaction("swpushnotificationsstore", "readwrite")
            .objectStore("swpushnotificationsstore")
            .put(c);
          g.onsuccess = () => {
            e();
          };
          g.onerror = () => {
            f();
          };
        } catch (g) {
          f(g);
        }
      })
  );
}
function Af() {
  return P("IndexedDBCheck", "testing IndexedDB")
    .then(() => Bf("IndexedDBCheck"))
    .then((a) =>
      "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()
    )
    .then(() => !0)
    .catch(() => !1);
}
function Bf(a) {
  const b = new xf("Error accessing DB");
  return zf().then(
    (c) =>
      new Promise((d, e) => {
        try {
          const f = c
            .transaction("swpushnotificationsstore")
            .objectStore("swpushnotificationsstore")
            .get(a);
          f.onsuccess = () => {
            const g = f.result;
            d(g ? g.value : null);
          };
          f.onerror = () => {
            b.params = { key: a, source: "onerror" };
            e(b);
          };
        } catch (f) {
          (b.params = { key: a, thrownError: String(f) }), e(b);
        }
      }),
    () => null
  );
}
function zf() {
  return yf
    ? Promise.resolve(yf)
    : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
          const d = c.result;
          if (d.objectStoreNames.contains("swpushnotificationsstore"))
            (yf = d), a(yf);
          else
            return self.indexedDB.deleteDatabase("swpushnotificationsdb"), zf();
        };
        c.onupgradeneeded = Cf;
      });
}
function Cf(a) {
  a = a.target.result;
  a.objectStoreNames.contains("swpushnotificationsstore") &&
    a.deleteObjectStore("swpushnotificationsstore");
  a.createObjectStore("swpushnotificationsstore", { keyPath: "key" });
}
const Df = {
  WEB_UNPLUGGED: "^unplugged/",
  WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
  WEB_UNPLUGGED_OPS: "^unplugged/",
  WEB_UNPLUGGED_PUBLIC: "^unplugged/",
  WEB_CREATOR: "^creator/",
  WEB_KIDS: "^kids/",
  WEB_EXPERIMENTS: "^experiments/",
  WEB_MUSIC: "^music/",
  WEB_REMIX: "^music/",
  WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
  WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/",
};
function Ef(a) {
  if (1 === a.length) return a[0];
  var b = Df.UNKNOWN_INTERFACE;
  if (b) {
    b = new RegExp(b);
    for (var c of a) if (b.exec(c)) return c;
  }
  const d = [];
  Object.entries(Df).forEach(([e, f]) => {
    "UNKNOWN_INTERFACE" !== e && d.push(f);
  });
  c = new RegExp(d.join("|"));
  a.sort((e, f) => e.length - f.length);
  for (const e of a) if (!c.exec(e)) return e;
  return a[0];
}
function Ff(a) {
  return `/youtubei/v1/${Ef(a)}`;
}
var Gf = class extends L {
  constructor(a) {
    super(a);
  }
};
var Hf = class extends L {
  constructor(a) {
    super(a, 0, "yt.sw.adr");
  }
};
const If = v.window;
let Jf, Kf;
const Lf =
  (null == If ? void 0 : null == (Jf = If.yt) ? void 0 : Jf.config_) ||
  (null == If ? void 0 : null == (Kf = If.ytcfg) ? void 0 : Kf.data_) ||
  {};
y("yt.config_", Lf);
function Q(...a) {
  a = arguments;
  1 < a.length ? (Lf[a[0]] = a[1]) : 1 === a.length && Object.assign(Lf, a[0]);
}
function S(a, b) {
  return a in Lf ? Lf[a] : b;
}
function Mf() {
  return S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
}
function Nf() {
  const a = Lf.EXPERIMENT_FLAGS;
  return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0;
}
const Of = [];
function Pf(a) {
  Of.forEach((b) => b(a));
}
function Qf(a) {
  return a && window.yterr
    ? function () {
        try {
          return a.apply(this, arguments);
        } catch (b) {
          Rf(b);
        }
      }
    : a;
}
function Rf(a) {
  var b = x("yt.logging.errors.log");
  b
    ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0)
    : ((b = S("ERRORS", [])),
      b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]),
      Q("ERRORS", b));
  Pf(a);
}
function Sf(a) {
  var b = x("yt.logging.errors.log");
  b
    ? b(a, "WARNING", void 0, void 0, void 0, void 0, void 0)
    : ((b = S("ERRORS", [])),
      b.push([a, "WARNING", void 0, void 0, void 0, void 0, void 0]),
      Q("ERRORS", b));
}
const Tf = /^[\w.]*$/,
  Uf = { q: !0, search_query: !0 };
function Vf(a, b) {
  b = a.split(b);
  const c = {};
  for (let f = 0, g = b.length; f < g; f++) {
    const h = b[f].split("=");
    if ((1 == h.length && h[0]) || 2 == h.length)
      try {
        const k = Wf(h[0] || ""),
          l = Wf(h[1] || "");
        k in c
          ? Array.isArray(c[k])
            ? sa(c[k], l)
            : (c[k] = [c[k], l])
          : (c[k] = l);
      } catch (k) {
        var d = k,
          e = h[0];
        const l = String(Vf);
        d.args = [
          { key: e, value: h[1], query: a, method: Xf == l ? "unchanged" : l },
        ];
        Uf.hasOwnProperty(e) || Sf(d);
      }
  }
  return c;
}
const Xf = String(Vf);
function Yf(a) {
  "?" == a.charAt(0) && (a = a.substr(1));
  return Vf(a, "&");
}
function Zf(a, b, c) {
  var d = a.split("#", 2);
  a = d[0];
  d = 1 < d.length ? "#" + d[1] : "";
  var e = a.split("?", 2);
  a = e[0];
  e = Yf(e[1] || "");
  for (var f in b) (!c && null !== e && f in e) || (e[f] = b[f]);
  b = a;
  a = Qa(e);
  a
    ? ((c = b.indexOf("#")),
      0 > c && (c = b.length),
      (f = b.indexOf("?")),
      0 > f || f > c ? ((f = c), (e = "")) : (e = b.substring(f + 1, c)),
      (b = [b.slice(0, f), e, b.slice(c)]),
      (c = b[1]),
      (b[1] = a ? (c ? c + "&" + a : a) : c),
      (a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]))
    : (a = b);
  return a + d;
}
function $f(a) {
  if (!b) var b = window.location.href;
  const c = a.match(Na)[1] || null,
    d = Oa(a.match(Na)[3] || null);
  c && d
    ? ((a = a.match(Na)),
      (b = b.match(Na)),
      (a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]))
    : (a = d
        ? Oa(b.match(Na)[3] || null) == d &&
          (Number(b.match(Na)[4] || null) || null) ==
            (Number(a.match(Na)[4] || null) || null)
        : !0);
  return a;
}
function Wf(a) {
  return a && a.match(Tf) ? a : decodeURIComponent(a.replace(/\+/g, " "));
}
function T(a) {
  a = ag(a);
  return "string" === typeof a && "false" === a ? !1 : !!a;
}
function bg(a, b) {
  a = ag(a);
  return void 0 === a && void 0 !== b ? b : Number(a || 0);
}
function cg() {
  return S("EXPERIMENTS_TOKEN", "");
}
function ag(a) {
  return S("EXPERIMENT_FLAGS", {})[a];
}
function dg() {
  const a = [],
    b = S("EXPERIMENTS_FORCED_FLAGS", {});
  for (var c of Object.keys(b)) a.push({ key: c, value: String(b[c]) });
  c = S("EXPERIMENT_FLAGS", {});
  for (const d of Object.keys(c))
    d.startsWith("force_") &&
      void 0 === b[d] &&
      a.push({ key: d, value: String(c[d]) });
  return a;
}
function eg(a, b) {
  "function" === typeof a && (a = Qf(a));
  return window.setTimeout(a, b);
}
var fg =
    "client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(
      " "
    ),
  gg = [...fg, "client_dev_set_cookie"];
[...fg];
let hg = !1;
function ig(a, b) {
  const c = { method: b.method || "GET", credentials: "same-origin" };
  b.headers && (c.headers = b.headers);
  a = jg(a, b);
  const d = kg(a, b);
  d && (c.body = d);
  b.withCredentials && (c.credentials = "include");
  const e = b.context || v;
  let f = !1,
    g;
  fetch(a, c)
    .then((h) => {
      if (!f) {
        f = !0;
        g && window.clearTimeout(g);
        var k = h.ok,
          l = (n) => {
            n = n || {};
            k
              ? b.onSuccess && b.onSuccess.call(e, n, h)
              : b.onError && b.onError.call(e, n, h);
            b.onFinish && b.onFinish.call(e, n, h);
          };
        "JSON" == (b.format || "JSON") &&
        (k || (400 <= h.status && 500 > h.status))
          ? h.json().then(l, function () {
              l(null);
            })
          : l(null);
      }
    })
    .catch(() => {
      b.onError && b.onError.call(e, {}, {});
    });
  a = b.timeout || 0;
  b.onFetchTimeout &&
    0 < a &&
    (g = eg(() => {
      f ||
        ((f = !0),
        window.clearTimeout(g),
        b.onFetchTimeout.call(b.context || v));
    }, a));
}
function jg(a, b) {
  b.includeDomain &&
    (a =
      document.location.protocol +
      "//" +
      document.location.hostname +
      (document.location.port ? ":" + document.location.port : "") +
      a);
  const c = S("XSRF_FIELD_NAME");
  if ((b = b.urlParams)) b[c] && delete b[c], (a = Zf(a, b || {}, !0));
  return a;
}
function kg(a, b) {
  const c = S("XSRF_FIELD_NAME"),
    d = S("XSRF_TOKEN");
  var e = b.postBody || "",
    f = b.postParams;
  const g = S("XSRF_FIELD_NAME");
  let h;
  b.headers && (h = b.headers["Content-Type"]);
  b.excludeXsrf ||
    (Oa(a.match(Na)[3] || null) &&
      !b.withCredentials &&
      Oa(a.match(Na)[3] || null) != document.location.hostname) ||
    "POST" != b.method ||
    (h && "application/x-www-form-urlencoded" != h) ||
    (b.postParams && b.postParams[g]) ||
    (f || (f = {}), (f[c] = d));
  ((T("ajax_parse_query_data_only_when_filled") &&
    f &&
    0 < Object.keys(f).length) ||
    f) &&
    "string" === typeof e &&
    ((e = Yf(e)),
    wa(e, f),
    (e =
      b.postBodyFormat && "JSON" == b.postBodyFormat
        ? JSON.stringify(e)
        : Qa(e)));
  f = e || (f && !ta(f));
  !hg &&
    f &&
    "POST" != b.method &&
    ((hg = !0), Rf(Error("AJAX request with postData should use POST")));
  return e;
}
const lg = [
  {
    ca: (a) => `Cannot read property '${a.key}'`,
    W: {
      Error: [
        {
          u: /(Permission denied) to access property "([^']+)"/,
          groups: ["reason", "key"],
        },
      ],
      TypeError: [
        {
          u: /Cannot read property '([^']+)' of (null|undefined)/,
          groups: ["key", "value"],
        },
        {
          u: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
          groups: ["value", "key"],
        },
        {
          u: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
          groups: ["value", "key"],
        },
        {
          u: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
          groups: ["key"],
        },
        {
          u: /Unable to get property '([^']+)' of (undefined or null) reference/,
          groups: ["key", "value"],
        },
        {
          u: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
          groups: ["value", "base", "key"],
        },
      ],
    },
  },
  {
    ca: (a) => `Cannot call '${a.key}'`,
    W: {
      TypeError: [
        {
          u: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
          groups: ["base", "key"],
        },
        {
          u: /([^ ]+) called on (null or undefined)/,
          groups: ["key", "value"],
        },
        { u: /Object (.*) has no method '([^ ]+)'/, groups: ["base", "key"] },
        {
          u: /Object doesn't support property or method '([^ ]+)'/,
          groups: ["key"],
        },
        {
          u: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
          groups: ["key"],
        },
        {
          u: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
          groups: ["key"],
        },
      ],
    },
  },
  {
    ca: (a) => `${a.key} is not defined`,
    W: {
      ReferenceError: [
        { u: /(.*) is not defined/, groups: ["key"] },
        { u: /Can't find variable: (.*)/, groups: ["key"] },
      ],
    },
  },
];
var ng = { F: [], D: [{ callback: mg, weight: 500 }] };
function mg(a) {
  if ("JavaException" === a.name) return !0;
  a = a.stack;
  return (
    a.includes("chrome://") ||
    a.includes("chrome-extension://") ||
    a.includes("moz-extension://")
  );
}
function og() {
  if (!pg) {
    var a = (pg = new qg());
    a.F.length = 0;
    a.D.length = 0;
    rg(a, ng);
  }
  return pg;
}
function rg(a, b) {
  b.F && a.F.push.apply(a.F, b.F);
  b.D && a.D.push.apply(a.D, b.D);
}
var qg = class {
    constructor() {
      this.D = [];
      this.F = [];
    }
  },
  pg;
const sg = new M();
function tg(a) {
  const b = a.length;
  let c = 0;
  const d = () => a.charCodeAt(c++);
  do {
    var e = ug(d);
    if (Infinity === e) break;
    const f = e >> 3;
    switch (e & 7) {
      case 0:
        e = ug(d);
        if (2 === f) return e;
        break;
      case 1:
        if (2 === f) return;
        c += 8;
        break;
      case 2:
        e = ug(d);
        if (2 === f) return a.substr(c, e);
        c += e;
        break;
      case 5:
        if (2 === f) return;
        c += 4;
        break;
      default:
        return;
    }
  } while (c < b);
}
function ug(a) {
  let b = a(),
    c = b & 127;
  if (128 > b) return c;
  b = a();
  c |= (b & 127) << 7;
  if (128 > b) return c;
  b = a();
  c |= (b & 127) << 14;
  if (128 > b) return c;
  b = a();
  return 128 > b ? c | ((b & 127) << 21) : Infinity;
}
function vg(a, b, c, d) {
  if (a)
    if (Array.isArray(a)) {
      var e = d;
      for (
        d = 0;
        d < a.length && !(a[d] && ((e += wg(d, a[d], b, c)), 500 < e));
        d++
      );
      d = e;
    } else if ("object" === typeof a)
      for (e in a) {
        if (a[e]) {
          var f = a[e];
          var g = b;
          var h = c;
          g =
            "string" !== typeof f ||
            ("clickTrackingParams" !== e && "trackingParams" !== e)
              ? 0
              : (f = tg(atob(f.replace(/-/g, "+").replace(/_/g, "/"))))
              ? wg(`${e}.ve`, f, g, h)
              : 0;
          d += g;
          d += wg(e, a[e], b, c);
          if (500 < d) break;
        }
      }
    else (c[b] = xg(a)), (d += c[b].length);
  else (c[b] = xg(a)), (d += c[b].length);
  return d;
}
function wg(a, b, c, d) {
  c += `.${a}`;
  a = xg(b);
  d[c] = a;
  return c.length + a.length;
}
function xg(a) {
  try {
    return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(
      0,
      500
    );
  } catch (b) {
    return `unable to serialize ${typeof a} (${b.message})`;
  }
}
function yg() {
  zg.h || (zg.h = new zg());
  return zg.h;
}
function Ag(a, b) {
  a = {};
  var c = [],
    d = de(String(v.location.href));
  var e = [];
  var f = v.__SAPISID || v.__APISID || v.__3PSAPISID || v.__OVERRIDE_SID;
  ke() && (f = f || v.__1PSAPISID);
  if (f) f = !0;
  else {
    if ("undefined" !== typeof document) {
      const g = new je();
      f =
        g.get("SAPISID") ||
        g.get("APISID") ||
        g.get("__Secure-3PAPISID") ||
        g.get("SID") ||
        g.get("OSID");
      ke() && (f = f || g.get("__Secure-1PAPISID"));
    }
    f = !!f;
  }
  f &&
    ((f = (d =
      0 == d.indexOf("https:") ||
      0 == d.indexOf("chrome-extension:") ||
      0 == d.indexOf("moz-extension:"))
      ? v.__SAPISID
      : v.__APISID),
    f ||
      "undefined" === typeof document ||
      ((f = new je()),
      (f = f.get(d ? "SAPISID" : "APISID") || f.get("__Secure-3PAPISID"))),
    (f = f ? fe(f, d ? "SAPISIDHASH" : "APISIDHASH", c) : null) && e.push(f),
    d &&
      ke() &&
      ((d = le("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", c)) &&
        e.push(d),
      (c = le("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", c)) &&
        e.push(c)));
  if ((e = 0 == e.length ? null : e.join(" ")))
    (a.Authorization = e),
      (e = b = null == b ? void 0 : b.sessionIndex),
      void 0 === e &&
        ((e = Number(S("SESSION_INDEX", 0))), (e = isNaN(e) ? 0 : e)),
      T("voice_search_auth_header_removal") ||
        (a["X-Goog-AuthUser"] = e.toString()),
      "INNERTUBE_HOST_OVERRIDE" in Lf ||
        (a["X-Origin"] = window.location.origin),
      void 0 === b &&
        "DELEGATED_SESSION_ID" in Lf &&
        (a["X-Goog-PageId"] = S("DELEGATED_SESSION_ID"));
  return a;
}
var zg = class {
  constructor() {
    this.Xa = !0;
  }
};
var Bg = { identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN" };
function Cg(a) {
  switch (a) {
    case "DESKTOP":
      return 1;
    case "UNKNOWN_PLATFORM":
      return 0;
    case "TV":
      return 2;
    case "GAME_CONSOLE":
      return 3;
    case "MOBILE":
      return 4;
    case "TABLET":
      return 5;
  }
}
y("ytglobal.prefsUserPrefsPrefs_", x("ytglobal.prefsUserPrefsPrefs_") || {});
function Dg() {
  if (void 0 !== S("DATASYNC_ID")) return S("DATASYNC_ID");
  throw new xf("Datasync ID not set", "unknown");
}
function Eg(a, b) {
  return Fg(a, 0, b);
}
function Gg(a) {
  const b = x("yt.scheduler.instance.addImmediateJob");
  b ? b(a) : a();
}
var Hg = class {
  h(a) {
    Fg(a, 1);
  }
};
function Ig() {
  Jg.h || (Jg.h = new Jg());
  return Jg.h;
}
function Fg(a, b, c) {
  void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
  const d = x("yt.scheduler.instance.addJob");
  return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : eg(a, c || 0);
}
var Jg = class extends Hg {
    U(a) {
      if (void 0 === a || !Number.isNaN(Number(a))) {
        var b = x("yt.scheduler.instance.cancelJob");
        b ? b(a) : window.clearTimeout(a);
      }
    }
    start() {
      const a = x("yt.scheduler.instance.start");
      a && a();
    }
  },
  Lg = Ig();
const Mg = [];
let Ng,
  Og = !1;
function Pg(a) {
  Og ||
    (Ng
      ? Ng.handleError(a)
      : (Mg.push({ type: "ERROR", payload: a }), 10 < Mg.length && Mg.shift()));
}
function Qg(a, b) {
  Og ||
    (Ng
      ? Ng.V(a, b)
      : (Mg.push({ type: "EVENT", eventType: a, payload: b }),
        10 < Mg.length && Mg.shift()));
}
function Rg(a) {
  if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}
function Sg(a) {
  return a.substr(0, a.indexOf(":")) || a;
}
const Tg = {
    AUTH_INVALID: "No user identifier specified.",
    EXPLICIT_ABORT: "Transaction was explicitly aborted.",
    IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
    MISSING_INDEX: "Index not created.",
    MISSING_OBJECT_STORES: "Object stores not created.",
    DB_DELETED_BY_MISSING_OBJECT_STORES:
      "Database is deleted because expected object stores were not created.",
    DB_REOPENED_BY_MISSING_OBJECT_STORES:
      "Database is reopened because expected object stores were not created.",
    UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
    QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
    QUOTA_MAYBE_EXCEEDED:
      "The current transaction may have failed because of exceeding quota limitations.",
    EXECUTE_TRANSACTION_ON_CLOSED_DB:
      "Can't start a transaction on a closed database",
    INCOMPATIBLE_DB_VERSION:
      "The binary is incompatible with the database version",
  },
  Ug = {
    AUTH_INVALID: "ERROR",
    EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
    EXPLICIT_ABORT: "IGNORED",
    IDB_NOT_SUPPORTED: "ERROR",
    MISSING_INDEX: "WARNING",
    MISSING_OBJECT_STORES: "ERROR",
    DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
    DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
    QUOTA_EXCEEDED: "WARNING",
    QUOTA_MAYBE_EXCEEDED: "WARNING",
    UNKNOWN_ABORT: "WARNING",
    INCOMPATIBLE_DB_VERSION: "WARNING",
  },
  Vg = {
    AUTH_INVALID: !1,
    EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
    EXPLICIT_ABORT: !1,
    IDB_NOT_SUPPORTED: !1,
    MISSING_INDEX: !1,
    MISSING_OBJECT_STORES: !1,
    DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
    DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
    QUOTA_EXCEEDED: !1,
    QUOTA_MAYBE_EXCEEDED: !0,
    UNKNOWN_ABORT: !0,
    INCOMPATIBLE_DB_VERSION: !1,
  };
var U = class extends xf {
    constructor(a, b = {}, c = Tg[a], d = Ug[a], e = Vg[a]) {
      super(
        c,
        Object.assign(
          {},
          {
            name: "YtIdbKnownError",
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            type: a,
          },
          b
        )
      );
      this.type = a;
      this.message = c;
      this.level = d;
      this.h = e;
      Object.setPrototypeOf(this, U.prototype);
    }
  },
  Wg = class extends U {
    constructor(a, b) {
      super(
        "MISSING_OBJECT_STORES",
        { expectedObjectStores: b, foundObjectStores: a },
        Tg.MISSING_OBJECT_STORES
      );
      Object.setPrototypeOf(this, Wg.prototype);
    }
  },
  Xg = class extends Error {
    constructor(a, b) {
      super();
      this.index = a;
      this.objectStore = b;
      Object.setPrototypeOf(this, Xg.prototype);
    }
  };
const Yg = [
  "The database connection is closing",
  "Can't start a transaction on a closed database",
  "A mutation operation was attempted on a database that did not allow mutations",
];
function Zg(a, b, c, d) {
  b = Sg(b);
  let e;
  e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
  if (e instanceof U) return e;
  a = { objectStoreNames: c, dbName: b, dbVersion: d };
  if ("QuotaExceededError" === e.name) return new U("QUOTA_EXCEEDED", a);
  if (Eb && "UnknownError" === e.name) return new U("QUOTA_MAYBE_EXCEEDED", a);
  if (e instanceof Xg)
    return new U(
      "MISSING_INDEX",
      Object.assign({}, a, { objectStore: e.objectStore, index: e.index })
    );
  if ("InvalidStateError" === e.name && Yg.some((f) => e.message.includes(f)))
    return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB", a);
  if ("AbortError" === e.name) return new U("UNKNOWN_ABORT", a, e.message);
  e.args = [Object.assign({}, a, { name: "IdbError", ic: e.name })];
  e.level = "WARNING";
  return e;
}
function $g(a, b, c) {
  return new U("IDB_NOT_SUPPORTED", {
    context: { caller: a, publicName: b, version: c, hasSucceededOnce: void 0 },
  });
}
function ah(a) {
  if (!a) throw Error();
  throw a;
}
function bh(a) {
  return a;
}
var ch = class {
  constructor(a) {
    this.h = a;
  }
};
function dh(a, b, c, d, e) {
  try {
    if ("FULFILLED" !== a.state.status)
      throw Error("calling handleResolve before the promise is fulfilled.");
    const f = c(a.state.value);
    f instanceof eh ? fh(a, b, f, d, e) : d(f);
  } catch (f) {
    e(f);
  }
}
function gh(a, b, c, d, e) {
  try {
    if ("REJECTED" !== a.state.status)
      throw Error("calling handleReject before the promise is rejected.");
    const f = c(a.state.reason);
    f instanceof eh ? fh(a, b, f, d, e) : d(f);
  } catch (f) {
    e(f);
  }
}
function fh(a, b, c, d, e) {
  b === c
    ? e(new TypeError("Circular promise chain detected."))
    : c.then(
        (f) => {
          f instanceof eh ? fh(a, b, f, d, e) : d(f);
        },
        (f) => {
          e(f);
        }
      );
}
var eh = class {
  constructor(a) {
    this.state = { status: "PENDING" };
    this.h = [];
    this.i = [];
    a = a.h;
    const b = (d) => {
        if ("PENDING" === this.state.status) {
          this.state = { status: "FULFILLED", value: d };
          for (const e of this.h) e();
        }
      },
      c = (d) => {
        if ("PENDING" === this.state.status) {
          this.state = { status: "REJECTED", reason: d };
          for (const e of this.i) e();
        }
      };
    try {
      a(b, c);
    } catch (d) {
      c(d);
    }
  }
  static all(a) {
    return new eh(
      new ch((b, c) => {
        const d = [];
        let e = a.length;
        0 === e && b(d);
        for (let f = 0; f < a.length; ++f)
          eh.resolve(a[f])
            .then((g) => {
              d[f] = g;
              e--;
              0 === e && b(d);
            })
            .catch((g) => {
              c(g);
            });
      })
    );
  }
  static resolve(a) {
    return new eh(
      new ch((b, c) => {
        a instanceof eh ? a.then(b, c) : b(a);
      })
    );
  }
  then(a, b) {
    const c = null != a ? a : bh,
      d = null != b ? b : ah;
    return new eh(
      new ch((e, f) => {
        "PENDING" === this.state.status
          ? (this.h.push(() => {
              dh(this, this, c, e, f);
            }),
            this.i.push(() => {
              gh(this, this, d, e, f);
            }))
          : "FULFILLED" === this.state.status
          ? dh(this, this, c, e, f)
          : "REJECTED" === this.state.status && gh(this, this, d, e, f);
      })
    );
  }
  catch(a) {
    return this.then(void 0, a);
  }
};
function hh(a, b, c) {
  const d = () => {
      try {
        a.removeEventListener("success", e), a.removeEventListener("error", f);
      } catch (g) {}
    },
    e = () => {
      b(a.result);
      d();
    },
    f = () => {
      c(a.error);
      d();
    };
  a.addEventListener("success", e);
  a.addEventListener("error", f);
}
function ih(a) {
  return new Promise((b, c) => {
    hh(a, b, c);
  });
}
function V(a) {
  return new eh(
    new ch((b, c) => {
      hh(a, b, c);
    })
  );
}
function jh(a, b) {
  return new eh(
    new ch((c, d) => {
      const e = () => {
        const f = a ? b(a) : null;
        f
          ? f.then((g) => {
              a = g;
              e();
            }, d)
          : c();
      };
      e();
    })
  );
}
const kh = window;
var W =
  kh.ytcsi && kh.ytcsi.now
    ? kh.ytcsi.now
    : kh.performance &&
      kh.performance.timing &&
      kh.performance.now &&
      kh.performance.timing.navigationStart
    ? () => kh.performance.timing.navigationStart + kh.performance.now()
    : () => new Date().getTime();
function X(a, b, c, d) {
  return u(function* () {
    const e = { mode: "readonly", B: !1, tag: "IDB_TRANSACTION_TAG_UNKNOWN" };
    "string" === typeof c ? (e.mode = c) : Object.assign(e, c);
    a.transactionCount++;
    const f = e.B ? 3 : 1;
    let g = 0,
      h;
    for (; !h; ) {
      g++;
      const l = Math.round(W());
      try {
        const n = a.h.transaction(b, e.mode);
        var k = d;
        const m = new lh(n),
          r = yield mh(m, k),
          p = Math.round(W());
        nh(a, l, p, g, void 0, b.join(), e);
        return r;
      } catch (n) {
        k = Math.round(W());
        const m = Zg(n, a.h.name, b.join(), a.h.version);
        if ((m instanceof U && !m.h) || g >= f)
          nh(a, l, k, g, m, b.join(), e), (h = m);
      }
    }
    return Promise.reject(h);
  });
}
function oh(a, b, c) {
  a = a.h.createObjectStore(b, c);
  return new ph(a);
}
function qh(a, b, c, d) {
  return X(a, [b], { mode: "readwrite", B: !0 }, (e) => {
    e = e.objectStore(b);
    return V(e.h.put(c, d));
  });
}
function nh(a, b, c, d, e, f, g) {
  b = c - b;
  e
    ? (e instanceof U &&
        ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) &&
        Qg("QUOTA_EXCEEDED", {
          dbName: Sg(a.h.name),
          objectStoreNames: f,
          transactionCount: a.transactionCount,
          transactionMode: g.mode,
        }),
      e instanceof U &&
        "UNKNOWN_ABORT" === e.type &&
        ((c -= a.j),
        0 > c && c >= Math.pow(2, 31) && (c = 0),
        Qg("TRANSACTION_UNEXPECTEDLY_ABORTED", {
          objectStoreNames: f,
          transactionDuration: b,
          transactionCount: a.transactionCount,
          dbDuration: c,
        }),
        (a.i = !0)),
      rh(a, !1, d, f, b, g.tag),
      Pg(e))
    : rh(a, !0, d, f, b, g.tag);
}
function rh(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
  Qg("TRANSACTION_ENDED", {
    objectStoreNames: d,
    connectionHasUnknownAbortedTransaction: a.i,
    duration: e,
    isSuccessful: b,
    tryCount: c,
    tag: f,
  });
}
var sh = class {
  constructor(a, b) {
    this.h = a;
    this.options = b;
    this.transactionCount = 0;
    this.j = Math.round(W());
    this.i = !1;
  }
  add(a, b, c) {
    return X(this, [a], { mode: "readwrite", B: !0 }, (d) =>
      d.objectStore(a).add(b, c)
    );
  }
  clear(a) {
    return X(this, [a], { mode: "readwrite", B: !0 }, (b) =>
      b.objectStore(a).clear()
    );
  }
  close() {
    this.h.close();
    let a;
    (null == (a = this.options) ? 0 : a.closed) && this.options.closed();
  }
  count(a, b) {
    return X(this, [a], { mode: "readonly", B: !0 }, (c) =>
      c.objectStore(a).count(b)
    );
  }
  delete(a, b) {
    return X(this, [a], { mode: "readwrite", B: !0 }, (c) =>
      c.objectStore(a).delete(b)
    );
  }
  get(a, b) {
    return X(this, [a], { mode: "readonly", B: !0 }, (c) =>
      c.objectStore(a).get(b)
    );
  }
  getAll(a, b, c) {
    return X(this, [a], { mode: "readonly", B: !0 }, (d) =>
      d.objectStore(a).getAll(b, c)
    );
  }
  objectStoreNames() {
    return Array.from(this.h.objectStoreNames);
  }
  getName() {
    return this.h.name;
  }
};
function th(a, b, c) {
  a = a.h.openCursor(b.query, b.direction);
  return uh(a).then((d) => jh(d, c));
}
function vh(a, b) {
  return th(a, { query: b }, (c) => c.delete().then(() => c.continue())).then(
    () => {}
  );
}
function wh(a, b, c) {
  const d = [];
  return th(a, { query: b }, (e) => {
    if (!(void 0 !== c && d.length >= c)) return d.push(e.J()), e.continue();
  }).then(() => d);
}
var ph = class {
  constructor(a) {
    this.h = a;
  }
  add(a, b) {
    return V(this.h.add(a, b));
  }
  autoIncrement() {
    return this.h.autoIncrement;
  }
  clear() {
    return V(this.h.clear()).then(() => {});
  }
  count(a) {
    return V(this.h.count(a));
  }
  delete(a) {
    return a instanceof IDBKeyRange ? vh(this, a) : V(this.h.delete(a));
  }
  get(a) {
    return V(this.h.get(a));
  }
  getAll(a, b) {
    return "getAll" in IDBObjectStore.prototype
      ? V(this.h.getAll(a, b))
      : wh(this, a, b);
  }
  index(a) {
    try {
      return new xh(this.h.index(a));
    } catch (b) {
      if (b instanceof Error && "NotFoundError" === b.name)
        throw new Xg(a, this.h.name);
      throw b;
    }
  }
  getName() {
    return this.h.name;
  }
  keyPath() {
    return this.h.keyPath;
  }
};
function mh(a, b) {
  const c = new Promise((d, e) => {
    try {
      b(a)
        .then((f) => {
          d(f);
        })
        .catch(e);
    } catch (f) {
      e(f), a.abort();
    }
  });
  return Promise.all([c, a.done]).then(([d]) => d);
}
var lh = class {
  constructor(a) {
    this.h = a;
    this.j = new Map();
    this.i = !1;
    this.done = new Promise((b, c) => {
      this.h.addEventListener("complete", () => {
        b();
      });
      this.h.addEventListener("error", (d) => {
        d.currentTarget === d.target && c(this.h.error);
      });
      this.h.addEventListener("abort", () => {
        var d = this.h.error;
        if (d) c(d);
        else if (!this.i) {
          d = U;
          var e = this.h.objectStoreNames;
          const f = [];
          for (let g = 0; g < e.length; g++) {
            const h = e.item(g);
            if (null === h)
              throw Error("Invariant: item in DOMStringList is null");
            f.push(h);
          }
          d = new d("UNKNOWN_ABORT", {
            objectStoreNames: f.join(),
            dbName: this.h.db.name,
            mode: this.h.mode,
          });
          c(d);
        }
      });
    });
  }
  abort() {
    this.h.abort();
    this.i = !0;
    throw new U("EXPLICIT_ABORT");
  }
  objectStore(a) {
    a = this.h.objectStore(a);
    let b = this.j.get(a);
    b || ((b = new ph(a)), this.j.set(a, b));
    return b;
  }
};
function yh(a, b, c) {
  const { query: d = null, direction: e = "next" } = b;
  a = a.h.openCursor(d, e);
  return uh(a).then((f) => jh(f, c));
}
function zh(a, b, c) {
  const d = [];
  return yh(a, { query: b }, (e) => {
    if (!(void 0 !== c && d.length >= c)) return d.push(e.J()), e.continue();
  }).then(() => d);
}
var xh = class {
  constructor(a) {
    this.h = a;
  }
  count(a) {
    return V(this.h.count(a));
  }
  delete(a) {
    return yh(this, { query: a }, (b) => b.delete().then(() => b.continue()));
  }
  get(a) {
    return V(this.h.get(a));
  }
  getAll(a, b) {
    return "getAll" in IDBIndex.prototype
      ? V(this.h.getAll(a, b))
      : zh(this, a, b);
  }
  getKey(a) {
    return V(this.h.getKey(a));
  }
  keyPath() {
    return this.h.keyPath;
  }
  unique() {
    return this.h.unique;
  }
};
function uh(a) {
  return V(a).then((b) => (b ? new Ah(a, b) : null));
}
var Ah = class {
  constructor(a, b) {
    this.request = a;
    this.cursor = b;
  }
  advance(a) {
    this.cursor.advance(a);
    return uh(this.request);
  }
  continue(a) {
    this.cursor.continue(a);
    return uh(this.request);
  }
  delete() {
    return V(this.cursor.delete()).then(() => {});
  }
  getKey() {
    return this.cursor.key;
  }
  J() {
    return this.cursor.value;
  }
  update(a) {
    return V(this.cursor.update(a));
  }
};
function Bh(a, b, c) {
  return new Promise((d, e) => {
    let f;
    f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
    const g = c.Fa,
      h = c.blocking,
      k = c.Ya,
      l = c.upgrade,
      n = c.closed;
    let m;
    const r = () => {
      m || (m = new sh(f.result, { closed: n }));
      return m;
    };
    f.addEventListener("upgradeneeded", (p) => {
      try {
        if (null === p.newVersion)
          throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
        if (null === f.transaction)
          throw Error("Invariant: transaction on IDbOpenDbRequest is null");
        p.dataLoss &&
          "none" !== p.dataLoss &&
          Qg("IDB_DATA_CORRUPTED", {
            reason: p.dataLossMessage || "unknown reason",
            dbName: Sg(a),
          });
        const t = r(),
          w = new lh(f.transaction);
        l && l(t, (B) => p.oldVersion < B && p.newVersion >= B, w);
        w.done.catch((B) => {
          e(B);
        });
      } catch (t) {
        e(t);
      }
    });
    f.addEventListener("success", () => {
      const p = f.result;
      h &&
        p.addEventListener("versionchange", () => {
          h(r());
        });
      p.addEventListener("close", () => {
        Qg("IDB_UNEXPECTEDLY_CLOSED", { dbName: Sg(a), dbVersion: p.version });
        k && k();
      });
      d(r());
    });
    f.addEventListener("error", () => {
      e(f.error);
    });
    g &&
      f.addEventListener("blocked", () => {
        g();
      });
  });
}
function Ch(a, b, c = {}) {
  return Bh(a, b, c);
}
function Dh(a, b = {}) {
  return u(function* () {
    try {
      const c = self.indexedDB.deleteDatabase(a),
        d = b.Fa;
      d &&
        c.addEventListener("blocked", () => {
          d();
        });
      yield ih(c);
    } catch (c) {
      throw Zg(c, a, "", -1);
    }
  });
}
function Eh(a, b) {
  return new U("INCOMPATIBLE_DB_VERSION", {
    dbName: a.name,
    oldVersion: a.options.version,
    newVersion: b,
  });
}
function Fh(a, b) {
  if (!b) throw $g("openWithToken", Sg(a.name));
  return a.open();
}
var Gh = class {
  constructor(a, b) {
    this.name = a;
    this.options = b;
    this.j = !0;
    this.m = this.l = 0;
  }
  i(a, b, c = {}) {
    return Ch(a, b, c);
  }
  delete(a = {}) {
    return Dh(this.name, a);
  }
  open() {
    if (!this.j) throw Eh(this);
    if (this.h) return this.h;
    let a;
    const b = () => {
        this.h === a && (this.h = void 0);
      },
      c = {
        blocking: (e) => {
          e.close();
        },
        closed: b,
        Ya: b,
        upgrade: this.options.upgrade,
      },
      d = () => {
        const e = this;
        return u(function* () {
          var f,
            g = null != (f = Error().stack) ? f : "";
          try {
            const k = yield e.i(e.name, e.options.version, c);
            var h = e.options;
            f = [];
            for (const l of Object.keys(h.M)) {
              const { L: n, nc: m = Number.MAX_VALUE } = h.M[l];
              !(k.h.version >= n) ||
                k.h.version >= m ||
                k.h.objectStoreNames.contains(l) ||
                f.push(l);
            }
            if (0 !== f.length) {
              const l = Object.keys(e.options.M),
                n = k.objectStoreNames();
              if (e.m < bg("ytidb_reopen_db_retries", 0))
                return (
                  e.m++,
                  k.close(),
                  Pg(
                    new U("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                      dbName: e.name,
                      expectedObjectStores: l,
                      foundObjectStores: n,
                    })
                  ),
                  d()
                );
              if (e.l < bg("ytidb_remake_db_retries", 1))
                return (
                  e.l++,
                  yield e.delete(),
                  Pg(
                    new U("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                      dbName: e.name,
                      expectedObjectStores: l,
                      foundObjectStores: n,
                    })
                  ),
                  d()
                );
              throw new Wg(n, l);
            }
            return k;
          } catch (k) {
            if (
              k instanceof DOMException
                ? "VersionError" === k.name
                : "DOMError" in self && k instanceof DOMError
                ? "VersionError" === k.name
                : k instanceof Object &&
                  "message" in k &&
                  "An attempt was made to open a database using a lower version than the existing version." ===
                    k.message
            ) {
              g = yield e.i(
                e.name,
                void 0,
                Object.assign({}, c, { upgrade: void 0 })
              );
              h = g.h.version;
              if (void 0 !== e.options.version && h > e.options.version + 1)
                throw (g.close(), (e.j = !1), Eh(e, h));
              return g;
            }
            b();
            k instanceof Error &&
              !T("ytidb_async_stack_killswitch") &&
              (k.stack = `${k.stack}\n${g.substring(g.indexOf("\n") + 1)}`);
            let l;
            throw Zg(k, e.name, "", null != (l = e.options.version) ? l : -1);
          }
        });
      };
    return (this.h = a = d());
  }
};
const Hh = new Gh("YtIdbMeta", {
  M: { databases: { L: 1 } },
  upgrade(a, b) {
    b(1) && oh(a, "databases", { keyPath: "actualName" });
  },
});
function Ih(a, b) {
  return u(function* () {
    return X(
      yield Fh(Hh, b),
      ["databases"],
      { B: !0, mode: "readwrite" },
      (c) => {
        const d = c.objectStore("databases");
        return d.get(a.actualName).then((e) => {
          if (
            e
              ? a.actualName !== e.actualName ||
                a.publicName !== e.publicName ||
                a.userIdentifier !== e.userIdentifier
              : 1
          )
            return V(d.h.put(a, void 0)).then(() => {});
        });
      }
    );
  });
}
function Jh(a, b) {
  return u(function* () {
    if (a) return (yield Fh(Hh, b)).delete("databases", a);
  });
}
let Kh;
const Lh = new (class {
  constructor() {}
})(
  new (class {
    constructor() {}
  })()
);
function Mh() {
  return u(function* () {
    return !0;
  });
}
function Nh() {
  if (void 0 !== Kh) return Kh;
  Og = !0;
  return (Kh = Mh().then((a) => {
    Og = !1;
    return a;
  }));
}
function Oh() {
  return x("ytglobal.idbToken_") || void 0;
}
function Ph() {
  const a = Oh();
  return a
    ? Promise.resolve(a)
    : Nh().then((b) => {
        (b = b ? Lh : void 0) && y("ytglobal.idbToken_", b);
        return b;
      });
}
new ne();
function Qh(a) {
  try {
    Dg();
    var b = !0;
  } catch (c) {
    b = !1;
  }
  if (!b) throw ((a = new U("AUTH_INVALID", { dbName: a })), Pg(a), a);
  b = Dg();
  return { actualName: `${a}:${b}`, publicName: a, userIdentifier: b };
}
function Rh(a, b, c, d) {
  return u(function* () {
    var e,
      f = null != (e = Error().stack) ? e : "";
    e = yield Ph();
    if (!e)
      throw (
        ((e = $g("openDbImpl", a, b)),
        T("ytidb_async_stack_killswitch") ||
          (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n") + 1)}`),
        Pg(e),
        e)
      );
    Rg(a);
    f = c ? { actualName: a, publicName: a, userIdentifier: void 0 } : Qh(a);
    try {
      return yield Ih(f, e), yield Ch(f.actualName, b, d);
    } catch (g) {
      try {
        yield Jh(f.actualName, e);
      } catch (h) {}
      throw g;
    }
  });
}
function Sh(a, b, c = {}) {
  return Rh(a, b, !1, c);
}
function Th(a, b, c = {}) {
  return Rh(a, b, !0, c);
}
function Uh(a, b = {}) {
  return u(function* () {
    const c = yield Ph();
    if (c) {
      Rg(a);
      var d = Qh(a);
      yield Dh(d.actualName, b);
      yield Jh(d.actualName, c);
    }
  });
}
function Vh(a, b = {}) {
  return u(function* () {
    const c = yield Ph();
    c && (Rg(a), yield Dh(a, b), yield Jh(a, c));
  });
}
function Wh(a, b) {
  let c;
  return () => {
    c || (c = new Xh(a, b));
    return c;
  };
}
var Xh = class extends Gh {
  constructor(a, b) {
    super(a, b);
    this.options = b;
    Rg(a);
  }
  i(a, b, c = {}) {
    return (this.options.Y ? Th : Sh)(a, b, Object.assign({}, c));
  }
  delete(a = {}) {
    return (this.options.Y ? Vh : Uh)(this.name, a);
  }
};
function Yh(a, b) {
  return Wh(a, b);
}
var Zh = Yh("ytGcfConfig", {
  M: { coldConfigStore: { L: 1 }, hotConfigStore: { L: 1 } },
  Y: !1,
  upgrade(a, b) {
    b(1) &&
      (oh(a, "hotConfigStore", {
        keyPath: "key",
        autoIncrement: !0,
      }).h.createIndex("hotTimestampIndex", "timestamp", { unique: !1 }),
      oh(a, "coldConfigStore", {
        keyPath: "key",
        autoIncrement: !0,
      }).h.createIndex("coldTimestampIndex", "timestamp", { unique: !1 }));
  },
  version: 1,
});
function $h(a) {
  return Fh(Zh(), a);
}
function ai(a, b, c) {
  return u(function* () {
    const d = { config: a, hashData: b, timestamp: W() },
      e = yield $h(c);
    yield e.clear("hotConfigStore");
    return yield qh(e, "hotConfigStore", d);
  });
}
function bi(a, b, c, d) {
  return u(function* () {
    const e = { config: a, hashData: b, configData: c, timestamp: W() },
      f = yield $h(d);
    yield f.clear("coldConfigStore");
    return yield qh(f, "coldConfigStore", e);
  });
}
function ci(a) {
  return u(function* () {
    let b = void 0;
    yield X(
      yield $h(a),
      ["coldConfigStore"],
      { mode: "readwrite", B: !0 },
      (c) =>
        yh(
          c.objectStore("coldConfigStore").index("coldTimestampIndex"),
          { direction: "prev" },
          (d) => {
            b = d.J();
          }
        )
    );
    return b;
  });
}
function di(a) {
  return u(function* () {
    let b = void 0;
    yield X(
      yield $h(a),
      ["hotConfigStore"],
      { mode: "readwrite", B: !0 },
      (c) =>
        yh(
          c.objectStore("hotConfigStore").index("hotTimestampIndex"),
          { direction: "prev" },
          (d) => {
            b = d.J();
          }
        )
    );
    return b;
  });
}
var ei = class extends Ra {
  constructor() {
    super();
    this.i = [];
    this.h = [];
    const a = x("yt.gcf.config.hotUpdateCallbacks");
    a
      ? ((this.i = [...a]), (this.h = a))
      : ((this.h = []), y("yt.gcf.config.hotUpdateCallbacks", this.h));
  }
  O() {
    for (const b of this.i) {
      var a = this.h;
      const c = a.indexOf(b);
      0 <= c && a.splice(c, 1);
    }
    this.i.length = 0;
    super.O();
  }
};
function fi(a, b, c) {
  return u(function* () {
    if (T("start_client_gcf")) {
      c && ((a.j = c), y("yt.gcf.config.hotConfigGroup", a.j || null));
      a.hotHashData = b;
      y("yt.gcf.config.hotHashData", a.hotHashData || null);
      var d = Oh();
      if (d) {
        if (!c) {
          var e;
          c = null == (e = yield di(d)) ? void 0 : e.config;
        }
        yield ai(c, b, d);
      }
      if (c) {
        d = a.i;
        e = c;
        for (const f of d.h) f(e);
      }
    }
  });
}
function gi(a, b, c) {
  return u(function* () {
    if (T("start_client_gcf")) {
      a.coldHashData = b;
      y("yt.gcf.config.coldHashData", a.coldHashData || null);
      const d = Oh();
      if (d) {
        if (!c) {
          let e;
          c = null == (e = yield ci(d)) ? void 0 : e.config;
        }
        c && (yield bi(c, b, c.configData, d));
      }
    }
  });
}
var hi = class {
  constructor() {
    this.h = 0;
    this.i = new ei();
  }
};
function ii() {
  return "INNERTUBE_API_KEY" in Lf && "INNERTUBE_API_VERSION" in Lf;
}
function ji() {
  return {
    innertubeApiKey: S("INNERTUBE_API_KEY"),
    innertubeApiVersion: S("INNERTUBE_API_VERSION"),
    aa: S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
    Ka: S("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
    La: S("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
    innertubeContextClientVersion: S("INNERTUBE_CONTEXT_CLIENT_VERSION"),
    qa: S("INNERTUBE_CONTEXT_HL"),
    pa: S("INNERTUBE_CONTEXT_GL"),
    Ma: S("INNERTUBE_HOST_OVERRIDE") || "",
    Oa: !!S("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
    Na: !!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
    appInstallData: S("SERIALIZED_CLIENT_CONFIG_DATA"),
  };
}
function ki(a) {
  const b = {
    client: {
      hl: a.qa,
      gl: a.pa,
      clientName: a.Ka,
      clientVersion: a.innertubeContextClientVersion,
      configInfo: a.aa,
    },
  };
  navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
  var c = v.devicePixelRatio;
  c && 1 != c && (b.client.screenDensityFloat = String(c));
  c = cg();
  "" !== c && (b.client.experimentsToken = c);
  c = dg();
  0 < c.length && (b.request = { internalExperimentFlags: c });
  li(void 0, b);
  mi(a, void 0, b);
  T("start_client_gcf") && ni(void 0, b);
  S("DELEGATED_SESSION_ID") &&
    !T("pageid_as_header_web") &&
    (b.user = { onBehalfOfUser: S("DELEGATED_SESSION_ID") });
  !T("fill_delegate_context_in_gel_killswitch") &&
    (a = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) &&
    (b.user = Object.assign({}, b.user, { serializedDelegationContext: a }));
  a = Object;
  c = a.assign;
  var d = b.client,
    e = S("DEVICE", "");
  const f = {};
  for (const [g, h] of Object.entries(Yf(e))) {
    e = g;
    const k = h;
    "cbrand" === e
      ? (f.deviceMake = k)
      : "cmodel" === e
      ? (f.deviceModel = k)
      : "cbr" === e
      ? (f.browserName = k)
      : "cbrver" === e
      ? (f.browserVersion = k)
      : "cos" === e
      ? (f.osName = k)
      : "cosver" === e
      ? (f.osVersion = k)
      : "cplatform" === e && (f.platform = k);
  }
  b.client = c.call(a, d, f);
  return b;
}
function li(a, b) {
  const c = x("yt.embedded_player.embed_url");
  c &&
    (a
      ? ((b = yd(a, He, 7) || new He()), J(b, 4, c), H(a, He, 7, b))
      : b && (b.thirdParty = { embedUrl: c }));
}
function mi(a, b, c) {
  if (a.appInstallData)
    if (b) {
      let d;
      c = null != (d = yd(b, Be, 62)) ? d : new Be();
      J(c, 6, a.appInstallData);
      H(b, Be, 62, c);
    } else
      c &&
        ((c.client.configInfo = c.client.configInfo || {}),
        (c.client.configInfo.appInstallData = a.appInstallData));
}
function oi(a, b, c = {}) {
  let d = {};
  S("EOM_VISITOR_DATA")
    ? (d = { "X-Goog-EOM-Visitor-Id": S("EOM_VISITOR_DATA") })
    : (d = { "X-Goog-Visitor-Id": c.visitorData || S("VISITOR_DATA", "") });
  if (b && b.includes("www.youtube-nocookie.com")) return d;
  b = c.Yb || S("AUTHORIZATION");
  b ||
    (a
      ? (b = `Bearer ${x("gapi.auth.getToken")().Xb}`)
      : ((a = Ag(yg())),
        T("pageid_as_header_web") || delete a["X-Goog-PageId"],
        (d = Object.assign({}, d, a))));
  b && (d.Authorization = b);
  return d;
}
function ni(a, b) {
  if (!hi.h) {
    var c = new hi();
    hi.h = c;
  }
  c = hi.h;
  var d = W() - c.h;
  if (0 !== c.h && d < bg("send_config_hash_timer")) c = void 0;
  else {
    d = x("yt.gcf.config.coldConfigData");
    var e = x("yt.gcf.config.hotHashData"),
      f = x("yt.gcf.config.coldHashData");
    d && e && f && (c.h = W());
    c = { coldConfigData: d, hotHashData: e, coldHashData: f };
  }
  if ((e = c))
    if (
      ((c = e.coldConfigData),
      (d = e.coldHashData),
      (e = e.hotHashData),
      c && d && e)
    )
      if (a) {
        let g;
        b = null != (g = yd(a, Be, 62)) ? g : new Be();
        J(b, 1, c);
        J(b, 3, d);
        J(b, 5, e);
        H(a, Be, 62, b);
      } else
        b &&
          ((b.client.configInfo = b.client.configInfo || {}),
          (b.client.configInfo.coldConfigData = c),
          (b.client.configInfo.coldHashData = d),
          (b.client.configInfo.hotHashData = e));
}
function pi(a) {
  this.version = 1;
  this.args = a;
}
function qi() {
  var a = ri;
  this.topic = "screen-created";
  this.h = a;
}
qi.prototype.toString = function () {
  return this.topic;
};
const si = x("ytPubsub2Pubsub2Instance") || new M();
M.prototype.subscribe = M.prototype.Aa;
M.prototype.unsubscribeByKey = M.prototype.ha;
M.prototype.publish = M.prototype.fa;
M.prototype.clear = M.prototype.clear;
y("ytPubsub2Pubsub2Instance", si);
const ti = x("ytPubsub2Pubsub2SubscribedKeys") || {};
y("ytPubsub2Pubsub2SubscribedKeys", ti);
const ui = x("ytPubsub2Pubsub2TopicToKeys") || {};
y("ytPubsub2Pubsub2TopicToKeys", ui);
const vi = x("ytPubsub2Pubsub2IsAsync") || {};
y("ytPubsub2Pubsub2IsAsync", vi);
y("ytPubsub2Pubsub2SkipSubKey", null);
function wi(a, b) {
  const c = xi();
  c && c.publish.call(c, a.toString(), a, b);
}
function yi(a) {
  var b = zi;
  const c = xi();
  if (!c) return 0;
  const d = c.subscribe(b.toString(), (e, f) => {
    var g = x("ytPubsub2Pubsub2SkipSubKey");
    (g && g == d) ||
      ((g = () => {
        if (ti[d])
          try {
            if (f && b instanceof qi && b != e)
              try {
                var h = b.h,
                  k = f;
                if (!k.args || !k.version)
                  throw Error(
                    "yt.pubsub2.Data.deserialize(): serializedData is incomplete."
                  );
                try {
                  if (!h.va) {
                    const p = new h();
                    h.va = p.version;
                  }
                  var l = h.va;
                } catch (p) {}
                if (!l || k.version != l)
                  throw Error(
                    "yt.pubsub2.Data.deserialize(): serializedData version is incompatible."
                  );
                try {
                  l = Reflect;
                  var n = l.construct;
                  {
                    var m = k.args;
                    const p = m.length;
                    if (0 < p) {
                      const t = Array(p);
                      for (k = 0; k < p; k++) t[k] = m[k];
                      var r = t;
                    } else r = [];
                  }
                  f = n.call(l, h, r);
                } catch (p) {
                  throw (
                    ((p.message =
                      "yt.pubsub2.Data.deserialize(): " + p.message),
                    p)
                  );
                }
              } catch (p) {
                throw (
                  ((p.message =
                    "yt.pubsub2.pubsub2 cross-binary conversion error for " +
                    b.toString() +
                    ": " +
                    p.message),
                  p)
                );
              }
            a.call(window, f);
          } catch (p) {
            Rf(p);
          }
      }),
      vi[b.toString()]
        ? x("yt.scheduler.instance")
          ? Lg.h(g)
          : eg(g, 0)
        : g());
  });
  ti[d] = !0;
  ui[b.toString()] || (ui[b.toString()] = []);
  ui[b.toString()].push(d);
  return d;
}
function Ai() {
  var a = Bi;
  const b = yi(function (c) {
    a.apply(void 0, arguments);
    Ci(b);
  });
  return b;
}
function Ci(a) {
  const b = xi();
  b &&
    ("number" === typeof a && (a = [a]),
    pa(a, (c) => {
      b.unsubscribeByKey(c);
      delete ti[c];
    }));
}
function xi() {
  return x("ytPubsub2Pubsub2Instance");
}
let Di = void 0,
  Ei = void 0;
var Fi = {
  accountStateChangeSignedIn: 23,
  accountStateChangeSignedOut: 24,
  delayedEventMetricCaptured: 11,
  latencyActionBaselined: 6,
  latencyActionInfo: 7,
  latencyActionTicked: 5,
  offlineTransferStatusChanged: 2,
  offlineImageDownload: 335,
  playbackStartStateChanged: 9,
  systemHealthCaptured: 3,
  mangoOnboardingCompleted: 10,
  mangoPushNotificationReceived: 230,
  mangoUnforkDbMigrationError: 121,
  mangoUnforkDbMigrationSummary: 122,
  mangoUnforkDbMigrationPreunforkDbVersionNumber: 133,
  mangoUnforkDbMigrationPhoneMetadata: 134,
  mangoUnforkDbMigrationPhoneStorage: 135,
  mangoUnforkDbMigrationStep: 142,
  mangoAsyncApiMigrationEvent: 223,
  mangoDownloadVideoResult: 224,
  mangoHomepageVideoCount: 279,
  mangoHomeV3State: 295,
  mangoImageClientCacheHitEvent: 273,
  sdCardStatusChanged: 98,
  framesDropped: 12,
  thumbnailHovered: 13,
  deviceRetentionInfoCaptured: 14,
  thumbnailLoaded: 15,
  backToAppEvent: 318,
  streamingStatsCaptured: 17,
  offlineVideoShared: 19,
  appCrashed: 20,
  youThere: 21,
  offlineStateSnapshot: 22,
  mdxSessionStarted: 25,
  mdxSessionConnected: 26,
  mdxSessionDisconnected: 27,
  bedrockResourceConsumptionSnapshot: 28,
  nextGenWatchWatchSwiped: 29,
  kidsAccountsSnapshot: 30,
  zeroStepChannelCreated: 31,
  tvhtml5SearchCompleted: 32,
  offlineSharePairing: 34,
  offlineShareUnlock: 35,
  mdxRouteDistributionSnapshot: 36,
  bedrockRepetitiveActionTimed: 37,
  unpluggedDegradationInfo: 229,
  uploadMp4HeaderMoved: 38,
  uploadVideoTranscoded: 39,
  uploadProcessorStarted: 46,
  uploadProcessorEnded: 47,
  uploadProcessorReady: 94,
  uploadProcessorRequirementPending: 95,
  uploadProcessorInterrupted: 96,
  uploadFrontendEvent: 241,
  assetPackDownloadStarted: 41,
  assetPackDownloaded: 42,
  assetPackApplied: 43,
  assetPackDeleted: 44,
  appInstallAttributionEvent: 459,
  playbackSessionStopped: 45,
  adBlockerMessagingShown: 48,
  distributionChannelCaptured: 49,
  dataPlanCpidRequested: 51,
  detailedNetworkTypeCaptured: 52,
  sendStateUpdated: 53,
  receiveStateUpdated: 54,
  sendDebugStateUpdated: 55,
  receiveDebugStateUpdated: 56,
  kidsErrored: 57,
  mdxMsnSessionStatsFinished: 58,
  appSettingsCaptured: 59,
  mdxWebSocketServerHttpError: 60,
  mdxWebSocketServer: 61,
  startupCrashesDetected: 62,
  coldStartInfo: 435,
  offlinePlaybackStarted: 63,
  liveChatMessageSent: 225,
  liveChatUserPresent: 434,
  liveChatBeingModerated: 457,
  liveCreationCameraUpdated: 64,
  liveCreationEncodingCaptured: 65,
  liveCreationError: 66,
  liveCreationHealthUpdated: 67,
  liveCreationVideoEffectsCaptured: 68,
  liveCreationStageOccured: 75,
  liveCreationBroadcastScheduled: 123,
  liveCreationArchiveReplacement: 149,
  liveCreationCostreamingConnection: 421,
  liveCreationStreamWebrtcStats: 288,
  mdxSessionRecoveryStarted: 69,
  mdxSessionRecoveryCompleted: 70,
  mdxSessionRecoveryStopped: 71,
  visualElementShown: 72,
  visualElementHidden: 73,
  visualElementGestured: 78,
  visualElementStateChanged: 208,
  screenCreated: 156,
  playbackAssociated: 202,
  visualElementAttached: 215,
  playbackContextEvent: 214,
  cloudCastingPlaybackStarted: 74,
  webPlayerApiCalled: 76,
  tvhtml5AccountDialogOpened: 79,
  foregroundHeartbeat: 80,
  foregroundHeartbeatScreenAssociated: 111,
  kidsOfflineSnapshot: 81,
  mdxEncryptionSessionStatsFinished: 82,
  playerRequestCompleted: 83,
  liteSchedulerStatistics: 84,
  mdxSignIn: 85,
  spacecastMetadataLookupRequested: 86,
  spacecastBatchLookupRequested: 87,
  spacecastSummaryRequested: 88,
  spacecastPlayback: 89,
  spacecastDiscovery: 90,
  tvhtml5LaunchUrlComponentChanged: 91,
  mdxBackgroundPlaybackRequestCompleted: 92,
  mdxBrokenAdditionalDataDeviceDetected: 93,
  tvhtml5LocalStorage: 97,
  tvhtml5DeviceStorageStatus: 147,
  autoCaptionsAvailable: 99,
  playbackScrubbingEvent: 339,
  flexyState: 100,
  interfaceOrientationCaptured: 101,
  mainAppBrowseFragmentCache: 102,
  offlineCacheVerificationFailure: 103,
  offlinePlaybackExceptionDigest: 217,
  vrCopresenceStats: 104,
  vrCopresenceSyncStats: 130,
  vrCopresenceCommsStats: 137,
  vrCopresencePartyStats: 153,
  vrCopresenceEmojiStats: 213,
  vrCopresenceEvent: 141,
  vrCopresenceFlowTransitEvent: 160,
  vrPlaybackEvent: 345,
  kidsAgeGateTracking: 105,
  offlineDelayAllowedTracking: 106,
  mainAppAutoOfflineState: 107,
  videoAsThumbnailDownload: 108,
  videoAsThumbnailPlayback: 109,
  liteShowMore: 110,
  renderingError: 118,
  kidsProfilePinGateTracking: 119,
  abrTrajectory: 124,
  scrollEvent: 125,
  streamzIncremented: 126,
  kidsProfileSwitcherTracking: 127,
  kidsProfileCreationTracking: 129,
  buyFlowStarted: 136,
  mbsConnectionInitiated: 138,
  mbsPlaybackInitiated: 139,
  mbsLoadChildren: 140,
  liteProfileFetcher: 144,
  mdxRemoteTransaction: 146,
  reelPlaybackError: 148,
  reachabilityDetectionEvent: 150,
  mobilePlaybackEvent: 151,
  courtsidePlayerStateChanged: 152,
  musicPersistentCacheChecked: 154,
  musicPersistentCacheCleared: 155,
  playbackInterrupted: 157,
  playbackInterruptionResolved: 158,
  fixFopFlow: 159,
  anrDetection: 161,
  backstagePostCreationFlowEnded: 162,
  clientError: 163,
  gamingAccountLinkStatusChanged: 164,
  liteHousewarming: 165,
  buyFlowEvent: 167,
  kidsParentalGateTracking: 168,
  kidsSignedOutSettingsStatus: 437,
  kidsSignedOutPauseHistoryFixStatus: 438,
  tvhtml5WatchdogViolation: 444,
  ypcUpgradeFlow: 169,
  yongleStudy: 170,
  ypcUpdateFlowStarted: 171,
  ypcUpdateFlowCancelled: 172,
  ypcUpdateFlowSucceeded: 173,
  ypcUpdateFlowFailed: 174,
  liteGrowthkitPromo: 175,
  paymentFlowStarted: 341,
  transactionFlowShowPaymentDialog: 405,
  transactionFlowStarted: 176,
  transactionFlowSecondaryDeviceStarted: 222,
  transactionFlowSecondaryDeviceSignedOutStarted: 383,
  transactionFlowCancelled: 177,
  transactionFlowPaymentCallBackReceived: 387,
  transactionFlowPaymentSubmitted: 460,
  transactionFlowPaymentSucceeded: 329,
  transactionFlowSucceeded: 178,
  transactionFlowFailed: 179,
  transactionFlowPlayBillingConnectionStartEvent: 428,
  transactionFlowSecondaryDeviceSuccess: 458,
  transactionFlowErrorEvent: 411,
  liteVideoQualityChanged: 180,
  watchBreakEnablementSettingEvent: 181,
  watchBreakFrequencySettingEvent: 182,
  videoEffectsCameraPerformanceMetrics: 183,
  adNotify: 184,
  startupTelemetry: 185,
  playbackOfflineFallbackUsed: 186,
  outOfMemory: 187,
  ypcPauseFlowStarted: 188,
  ypcPauseFlowCancelled: 189,
  ypcPauseFlowSucceeded: 190,
  ypcPauseFlowFailed: 191,
  uploadFileSelected: 192,
  ypcResumeFlowStarted: 193,
  ypcResumeFlowCancelled: 194,
  ypcResumeFlowSucceeded: 195,
  ypcResumeFlowFailed: 196,
  adsClientStateChange: 197,
  ypcCancelFlowStarted: 198,
  ypcCancelFlowCancelled: 199,
  ypcCancelFlowSucceeded: 200,
  ypcCancelFlowFailed: 201,
  ypcCancelFlowGoToPaymentProcessor: 402,
  ypcDeactivateFlowStarted: 320,
  ypcRedeemFlowStarted: 203,
  ypcRedeemFlowCancelled: 204,
  ypcRedeemFlowSucceeded: 205,
  ypcRedeemFlowFailed: 206,
  ypcFamilyCreateFlowStarted: 258,
  ypcFamilyCreateFlowCancelled: 259,
  ypcFamilyCreateFlowSucceeded: 260,
  ypcFamilyCreateFlowFailed: 261,
  ypcFamilyManageFlowStarted: 262,
  ypcFamilyManageFlowCancelled: 263,
  ypcFamilyManageFlowSucceeded: 264,
  ypcFamilyManageFlowFailed: 265,
  restoreContextEvent: 207,
  embedsAdEvent: 327,
  autoplayTriggered: 209,
  clientDataErrorEvent: 210,
  experimentalVssValidation: 211,
  tvhtml5TriggeredEvent: 212,
  tvhtml5FrameworksFieldTrialResult: 216,
  tvhtml5FrameworksFieldTrialStart: 220,
  musicOfflinePreferences: 218,
  watchTimeSegment: 219,
  appWidthLayoutError: 221,
  accountRegistryChange: 226,
  userMentionAutoCompleteBoxEvent: 227,
  downloadRecommendationEnablementSettingEvent: 228,
  musicPlaybackContentModeChangeEvent: 231,
  offlineDbOpenCompleted: 232,
  kidsFlowEvent: 233,
  kidsFlowCorpusSelectedEvent: 234,
  videoEffectsEvent: 235,
  unpluggedOpsEogAnalyticsEvent: 236,
  playbackAudioRouteEvent: 237,
  interactionLoggingDebugModeError: 238,
  offlineYtbRefreshed: 239,
  kidsFlowError: 240,
  musicAutoplayOnLaunchAttempted: 242,
  deviceContextActivityEvent: 243,
  deviceContextEvent: 244,
  templateResolutionException: 245,
  musicSideloadedPlaylistServiceCalled: 246,
  embedsStorageAccessNotChecked: 247,
  embedsHasStorageAccessResult: 248,
  embedsItpPlayedOnReload: 249,
  embedsRequestStorageAccessResult: 250,
  embedsShouldRequestStorageAccessResult: 251,
  embedsRequestStorageAccessState: 256,
  embedsRequestStorageAccessFailedState: 257,
  embedsItpWatchLaterResult: 266,
  searchSuggestDecodingPayloadFailure: 252,
  siriShortcutActivated: 253,
  tvhtml5KeyboardPerformance: 254,
  latencyActionSpan: 255,
  elementsLog: 267,
  ytbFileOpened: 268,
  tfliteModelError: 269,
  apiTest: 270,
  yongleUsbSetup: 271,
  touStrikeInterstitialEvent: 272,
  liteStreamToSave: 274,
  appBundleClientEvent: 275,
  ytbFileCreationFailed: 276,
  adNotifyFailure: 278,
  ytbTransferFailed: 280,
  blockingRequestFailed: 281,
  liteAccountSelector: 282,
  liteAccountUiCallbacks: 283,
  dummyPayload: 284,
  browseResponseValidationEvent: 285,
  entitiesError: 286,
  musicIosBackgroundFetch: 287,
  mdxNotificationEvent: 289,
  layersValidationError: 290,
  musicPwaInstalled: 291,
  liteAccountCleanup: 292,
  html5PlayerHealthEvent: 293,
  watchRestoreAttempt: 294,
  liteAccountSignIn: 296,
  notaireEvent: 298,
  kidsVoiceSearchEvent: 299,
  adNotifyFilled: 300,
  delayedEventDropped: 301,
  analyticsSearchEvent: 302,
  systemDarkThemeOptOutEvent: 303,
  flowEvent: 304,
  networkConnectivityBaselineEvent: 305,
  ytbFileImported: 306,
  downloadStreamUrlExpired: 307,
  directSignInEvent: 308,
  lyricImpressionEvent: 309,
  accessibilityStateEvent: 310,
  tokenRefreshEvent: 311,
  genericAttestationExecution: 312,
  tvhtml5VideoSeek: 313,
  unpluggedAutoPause: 314,
  scrubbingEvent: 315,
  bedtimeReminderEvent: 317,
  tvhtml5UnexpectedRestart: 319,
  tvhtml5StabilityTraceEvent: 478,
  tvhtml5OperationHealth: 467,
  tvhtml5WatchKeyEvent: 321,
  voiceLanguageChanged: 322,
  tvhtml5LiveChatStatus: 323,
  parentToolsCorpusSelectedEvent: 324,
  offerAdsEnrollmentInitiated: 325,
  networkQualityIntervalEvent: 326,
  deviceStartupMetrics: 328,
  heartbeatActionPlayerTransitioned: 330,
  tvhtml5Lifecycle: 331,
  heartbeatActionPlayerHalted: 332,
  adaptiveInlineMutedSettingEvent: 333,
  mainAppLibraryLoadingState: 334,
  thirdPartyLogMonitoringEvent: 336,
  appShellAssetLoadReport: 337,
  tvhtml5AndroidAttestation: 338,
  tvhtml5StartupSoundEvent: 340,
  iosBackgroundRefreshTask: 342,
  iosBackgroundProcessingTask: 343,
  sliEventBatch: 344,
  postImpressionEvent: 346,
  musicSideloadedPlaylistExport: 347,
  idbUnexpectedlyClosed: 348,
  voiceSearchEvent: 349,
  mdxSessionCastEvent: 350,
  idbQuotaExceeded: 351,
  idbTransactionEnded: 352,
  idbTransactionAborted: 353,
  tvhtml5KeyboardLogging: 354,
  idbIsSupportedCompleted: 355,
  creatorStudioMobileEvent: 356,
  idbDataCorrupted: 357,
  parentToolsAppChosenEvent: 358,
  webViewBottomSheetResized: 359,
  activeStateControllerScrollPerformanceSummary: 360,
  navigatorValidation: 361,
  mdxSessionHeartbeat: 362,
  clientHintsPolyfillDiagnostics: 363,
  clientHintsPolyfillEvent: 364,
  proofOfOriginTokenError: 365,
  kidsAddedAccountSummary: 366,
  musicWearableDevice: 367,
  ypcRefundFlowEvent: 368,
  tvhtml5PlaybackMeasurementEvent: 369,
  tvhtml5WatermarkMeasurementEvent: 370,
  clientExpGcfPropagationEvent: 371,
  mainAppReferrerIntent: 372,
  leaderLockEnded: 373,
  leaderLockAcquired: 374,
  googleHatsEvent: 375,
  persistentLensLaunchEvent: 376,
  parentToolsChildWelcomeChosenEvent: 378,
  browseThumbnailPreloadEvent: 379,
  finalPayload: 380,
  mdxDialAdditionalDataUpdateEvent: 381,
  webOrchestrationTaskLifecycleRecord: 382,
  startupSignalEvent: 384,
  accountError: 385,
  gmsDeviceCheckEvent: 386,
  accountSelectorEvent: 388,
  accountUiCallbacks: 389,
  mdxDialAdditionalDataProbeEvent: 390,
  downloadsSearchIcingApiStats: 391,
  downloadsSearchIndexUpdatedEvent: 397,
  downloadsSearchIndexSnapshot: 398,
  dataPushClientEvent: 392,
  kidsCategorySelectedEvent: 393,
  mdxDeviceManagementSnapshotEvent: 394,
  prefetchRequested: 395,
  prefetchableCommandExecuted: 396,
  gelDebuggingEvent: 399,
  webLinkTtsPlayEnd: 400,
  clipViewInvalid: 401,
  persistentStorageStateChecked: 403,
  cacheWipeoutEvent: 404,
  playerEvent: 410,
  sfvEffectPipelineStartedEvent: 412,
  sfvEffectPipelinePausedEvent: 429,
  sfvEffectPipelineEndedEvent: 413,
  sfvEffectChosenEvent: 414,
  sfvEffectLoadedEvent: 415,
  sfvEffectUserInteractionEvent: 465,
  sfvEffectFirstFrameProcessedLatencyEvent: 416,
  sfvEffectAggregatedFramesProcessedLatencyEvent: 417,
  sfvEffectAggregatedFramesDroppedEvent: 418,
  sfvEffectPipelineErrorEvent: 430,
  sfvEffectGraphFrozenEvent: 419,
  sfvEffectGlThreadBlockedEvent: 420,
  mdeVideoChangedEvent: 442,
  mdePlayerPerformanceMetrics: 472,
  genericClientExperimentEvent: 423,
  homePreloadTaskScheduled: 424,
  homePreloadTaskExecuted: 425,
  homePreloadCacheHit: 426,
  polymerPropertyChangedInObserver: 427,
  applicationStarted: 431,
  networkCronetRttBatch: 432,
  networkCronetRttSummary: 433,
  repeatChapterLoopEvent: 436,
  seekCancellationEvent: 462,
  lockModeTimeoutEvent: 483,
  offlineTransferStarted: 4,
  musicOfflineMixtapePreferencesChanged: 16,
  mangoDailyNewVideosNotificationAttempt: 40,
  mangoDailyNewVideosNotificationError: 77,
  dtwsPlaybackStarted: 112,
  dtwsTileFetchStarted: 113,
  dtwsTileFetchCompleted: 114,
  dtwsTileFetchStatusChanged: 145,
  dtwsKeyframeDecoderBufferSent: 115,
  dtwsTileUnderflowedOnNonkeyframe: 116,
  dtwsBackfillFetchStatusChanged: 143,
  dtwsBackfillUnderflowed: 117,
  dtwsAdaptiveLevelChanged: 128,
  blockingVisitorIdTimeout: 277,
  liteSocial: 18,
  mobileJsInvocation: 297,
  biscottiBasedDetection: 439,
  coWatchStateChange: 440,
  embedsVideoDataDidChange: 441,
  shortsFirst: 443,
  cruiseControlEvent: 445,
  qoeClientLoggingContext: 446,
  atvRecommendationJobExecuted: 447,
  tvhtml5UserFeedback: 448,
  producerProjectCreated: 449,
  producerProjectOpened: 450,
  producerProjectDeleted: 451,
  producerProjectElementAdded: 453,
  producerProjectElementRemoved: 454,
  tvhtml5ShowClockEvent: 455,
  deviceCapabilityCheckMetrics: 456,
  youtubeClearcutEvent: 461,
  offlineBrowseFallbackEvent: 463,
  getCtvTokenEvent: 464,
  startupDroppedFramesSummary: 466,
  screenshotEvent: 468,
  miniAppPlayEvent: 469,
  elementsDebugCounters: 470,
  fontLoadEvent: 471,
  webKillswitchReceived: 473,
  webKillswitchExecuted: 474,
  cameraOpenEvent: 475,
  manualSmoothnessMeasurement: 476,
  tvhtml5AppQualityEvent: 477,
  polymerPropertyAccessEvent: 479,
  miniAppSdkUsage: 480,
  cobaltTelemetryEvent: 481,
  crossDevicePlayback: 482,
  channelCreatedWithObakeImage: 484,
  channelEditedWithObakeImage: 485,
  offlineDeleteEvent: 486,
  crossDeviceNotificationTransfer: 487,
  androidIntentEvent: 488,
};
const Gi = ["client.name", "client.version"];
function Hi(a) {
  if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
  a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter((b) =>
    b.key ? Gi.includes(b.key) : !1
  );
  return a;
}
var Ii = Yh("ServiceWorkerLogsDatabase", {
  M: { SWHealthLog: { L: 1 } },
  Y: !0,
  upgrade: (a, b) => {
    b(1) &&
      oh(a, "SWHealthLog", { keyPath: "id", autoIncrement: !0 }).h.createIndex(
        "swHealthNewRequest",
        ["interface", "timestamp"],
        { unique: !1 }
      );
  },
  version: 1,
});
function Ji(a, b) {
  return u(function* () {
    var c = yield Fh(Ii(), b),
      d = S("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
    const e = Object.assign({}, a);
    e.clientError && (e.clientError = Hi(e.clientError));
    e.interface = d;
    return qh(c, "SWHealthLog", e);
  });
}
y(
  "ytNetworklessLoggingInitializationOptions",
  v.ytNetworklessLoggingInitializationOptions || { isNwlInitialized: !1 }
);
function Ki(a, b, c, d) {
  !S("VISITOR_DATA") &&
    "visitor_id" !== b &&
    0.01 > Math.random() &&
    Sf(new xf("Missing VISITOR_DATA when sending innertube request.", b, c, d));
  if (!a.isReady())
    throw ((a = new xf("innertube xhrclient not ready", b, c, d)), Rf(a), a);
  c = {
    headers: d.headers || {},
    method: "POST",
    postParams: c,
    postBody: d.postBody,
    postBodyFormat: d.postBodyFormat || "JSON",
    onTimeout: () => {
      d.onTimeout();
    },
    onFetchTimeout: d.onTimeout,
    onSuccess: (k, l) => {
      if (d.onSuccess) d.onSuccess(l);
    },
    onFetchSuccess: (k) => {
      if (d.onSuccess) d.onSuccess(k);
    },
    onError: (k, l) => {
      if (d.onError) d.onError(l);
    },
    onFetchError: (k) => {
      if (d.onError) d.onError(k);
    },
    timeout: d.timeout,
    withCredentials: !0,
    compress: d.compress,
  };
  c.headers["Content-Type"] || (c.headers["Content-Type"] = "application/json");
  let e = "";
  var f = a.config_.Ma;
  f && (e = f);
  var g = a.config_.Oa || !1;
  f = oi(g, e, d);
  Object.assign(c.headers, f);
  (f = c.headers.Authorization) &&
    !e &&
    g &&
    (c.headers["x-origin"] = window.location.origin);
  b = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`;
  g = { alt: "json" };
  let h = a.config_.Na && f;
  h = h && f.startsWith("Bearer");
  h || (g.key = a.config_.innertubeApiKey);
  a = Zf(`${e}${b}`, g || {}, !0);
  try {
    ig(a, c);
  } catch (k) {
    if ("InvalidAccessError" == k.name)
      Sf(Error("An extension is blocking network request."));
    else throw k;
  }
}
class Li {
  constructor(a) {
    this.config_ = null;
    a ? (this.config_ = a) : ii() && (this.config_ = ji());
  }
  isReady() {
    !this.config_ && ii() && (this.config_ = ji());
    return !!this.config_;
  }
}
let Mi = 0;
y("ytDomDomGetNextId", x("ytDomDomGetNextId") || (() => ++Mi));
y("ytEventsEventsListeners", v.ytEventsEventsListeners || {});
y("ytEventsEventsCounter", v.ytEventsEventsCounter || { count: 0 });
function Ni() {
  const a = x("_lact", window);
  return null == a ? -1 : Math.max(Date.now() - a, 0);
}
v.ytPubsubPubsubInstance || new M();
var Oi = Symbol("injectionDeps"),
  Pi = class {
    constructor() {
      this.name = "INNERTUBE_TRANSPORT_TOKEN";
    }
    toString() {
      return `InjectionToken(${this.name})`;
    }
  },
  Qi = class {
    constructor() {
      this.key = hi;
    }
  };
function Ri(a) {
  var b = { Sa: Si, ta: Ti.h };
  a.i.set(b.Sa, b);
}
function Ui(a, b, c, d = !1) {
  if (-1 < c.indexOf(b)) throw Error(`Deps cycle for: ${b}`);
  if (a.h.has(b)) return a.h.get(b);
  if (!a.i.has(b)) {
    if (d) return;
    throw Error(`No provider for: ${b}`);
  }
  d = a.i.get(b);
  c.push(b);
  if (void 0 !== d.ta) var e = d.ta;
  else if (d.eb) (e = d[Oi] ? Vi(a, d[Oi], c) : []), (e = d.eb(...e));
  else if (d.cb) {
    e = d.cb;
    const f = e[Oi] ? Vi(a, e[Oi], c) : [];
    e = new e(...f);
  } else throw Error(`Could not resolve providers for: ${b}`);
  c.pop();
  d.wc || a.h.set(b, e);
  return e;
}
function Vi(a, b, c) {
  return b
    ? b.map((d) => (d instanceof Qi ? Ui(a, d.key, c, !0) : Ui(a, d, c)))
    : [];
}
var Wi = class {
  constructor() {
    this.i = new Map();
    this.h = new Map();
  }
  resolve(a) {
    return a instanceof Qi ? Ui(this, a.key, [], !0) : Ui(this, a, []);
  }
};
let Xi;
function Yi() {
  Xi || (Xi = new Wi());
  return Xi;
}
let Zi = window;
function $i() {
  let a, b;
  return "h5vcc" in Zi &&
    (null == (a = Zi.h5vcc.traceEvent) ? 0 : a.traceBegin) &&
    (null == (b = Zi.h5vcc.traceEvent) ? 0 : b.traceEnd)
    ? 1
    : "performance" in Zi && Zi.performance.mark && Zi.performance.measure
    ? 2
    : 0;
}
function aj(a) {
  const b = $i();
  switch (b) {
    case 1:
      Zi.h5vcc.traceEvent.traceBegin("YTLR", a);
      break;
    case 2:
      Zi.performance.mark(`${a}-start`);
      break;
    case 0:
      break;
    default:
      ce(b, "unknown trace type");
  }
}
function bj(a) {
  var b = $i();
  switch (b) {
    case 1:
      Zi.h5vcc.traceEvent.traceEnd("YTLR", a);
      break;
    case 2:
      b = `${a}-start`;
      const c = `${a}-end`;
      Zi.performance.mark(c);
      Zi.performance.measure(a, b, c);
      break;
    case 0:
      break;
    default:
      ce(b, "unknown trace type");
  }
}
var cj = T("web_enable_lifecycle_monitoring") && 0 !== $i(),
  dj = T("web_enable_lifecycle_monitoring");
function ej(a) {
  let b;
  return null != (b = a.priority) ? b : 0;
}
function fj(a) {
  var b = Array.from(a.h.keys()).sort((c, d) => ej(a.h[d]) - ej(a.h[c]));
  for (const c of b)
    (b = a.h[c]),
      void 0 === b.jobId || b.X || (a.scheduler.U(b.jobId), Fg(b.ba, 10));
}
var gj = class {
  constructor(a) {
    this.scheduler = Ig();
    this.i = new ne();
    this.h = a;
    for (let b = 0; b < this.h.length; b++) {
      const c = this.h[b];
      a = () => {
        c.ba();
        this.h[b].X = !0;
        this.h.every((e) => !0 === e.X) && this.i.resolve();
      };
      const d = Fg(a, ej(c));
      this.h[b] = Object.assign({}, c, { ba: a, jobId: d });
    }
  }
  cancel() {
    for (const a of this.h)
      void 0 === a.jobId || a.X || this.scheduler.U(a.jobId), (a.X = !0);
    this.i.resolve();
  }
};
function hj(a, b, c) {
  dj &&
    console.groupCollapsed &&
    console.groupEnd &&
    (console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`),
    console.log("with message: ", c),
    console.groupEnd());
}
function ij(a, b) {
  const c = b.filter((e) => 10 === jj(a, e)),
    d = b.filter((e) => 10 !== jj(a, e));
  return a.l.uc
    ? (...e) =>
        u(function* () {
          yield kj(c, ...e);
          lj(a, d, ...e);
        })
    : (...e) => {
        mj(c, ...e);
        lj(a, d, ...e);
      };
}
function jj(a, b) {
  let c, d;
  return null != (d = null != (c = a.j) ? c : b.priority) ? d : 0;
}
function kj(a, ...b) {
  return u(function* () {
    Ig();
    for (const c of a) {
      let d;
      Gg(() => {
        nj(c.name);
        const e = c.callback(...b);
        "function" === typeof (null == e ? void 0 : e.then)
          ? (d = e.then(() => {
              oj(c.name);
            }))
          : oj(c.name);
      });
      d && (yield d);
    }
  });
}
function lj(a, b, ...c) {
  b = b.map((d) => ({
    ba: () => {
      nj(d.name);
      d.callback(...c);
      oj(d.name);
    },
    priority: jj(a, d),
  }));
  b.length && (a.i = new gj(b));
}
function mj(a, ...b) {
  Ig();
  for (const c of a)
    Gg(() => {
      nj(c.name);
      c.callback(...b);
      oj(c.name);
    });
}
function nj(a) {
  cj && a && aj(a);
}
function oj(a) {
  cj && a && bj(a);
}
var pj = class {
  constructor() {
    this.state = "none";
    this.plugins = [];
    this.j = void 0;
    this.l = {};
    cj && aj(this.state);
  }
  get currentState() {
    return this.state;
  }
  install(a) {
    this.plugins.push(a);
    return this;
  }
  uninstall(...a) {
    a.forEach((b) => {
      b = this.plugins.indexOf(b);
      -1 < b && this.plugins.splice(b, 1);
    });
  }
  transition(a, b) {
    cj && bj(this.state);
    var c = this.transitions.find((d) =>
      Array.isArray(d.from)
        ? d.from.find((e) => e === this.state && d.R === a)
        : d.from === this.state && d.R === a
    );
    if (c) {
      this.i && (fj(this.i), (this.i = void 0));
      hj(this, a, b);
      this.state = a;
      cj && aj(this.state);
      c = c.action.bind(this);
      const d = this.plugins.filter((e) => e[a]).map((e) => e[a]);
      c(ij(this, d), b);
    } else throw Error(`no transition specified from ${this.state} to ${a}`);
  }
};
function qj() {
  rj || (rj = new sj());
  return rj;
}
var sj = class extends pj {
    constructor() {
      super();
      this.h = null;
      this.j = 10;
      this.transitions = [
        { from: "none", R: "application_navigating", action: this.m },
        { from: "application_navigating", R: "none", action: this.s },
        {
          from: "application_navigating",
          R: "application_navigating",
          action: () => {},
        },
        { from: "none", R: "none", action: () => {} },
      ];
    }
    m(a, b) {
      this.h = Eg(() => {
        "application_navigating" === this.currentState &&
          this.transition("none");
      }, 5e3);
      a(null == b ? void 0 : b.event);
    }
    s(a, b) {
      this.h && (Lg.U(this.h), (this.h = null));
      a(null == b ? void 0 : b.event);
    }
  },
  rj;
let tj = [];
y("yt.logging.transport.getScrapedGelPayloads", function () {
  return tj;
});
function uj(a, b) {
  const c = vj(b);
  if (a.h[c]) return a.h[c];
  const d = Object.keys(a.store) || [];
  if (1 >= d.length && vj(b) === d[0]) return d;
  const e = [];
  for (let g = 0; g < d.length; g++) {
    const h = d[g].split("/");
    if (wj(b.auth, h[0])) {
      var f = b.isJspb;
      wj(void 0 === f ? "undefined" : f ? "true" : "false", h[1]) &&
        wj(b.cttAuthInfo, h[2]) &&
        ((f = b.tier),
        (f = void 0 === f ? "undefined" : JSON.stringify(f)),
        wj(f, h[3]) && e.push(d[g]));
    }
  }
  return (a.h[c] = e);
}
function wj(a, b) {
  return void 0 === a || "undefined" === a ? !0 : a === b;
}
var xj = class {
  constructor() {
    this.store = {};
    this.h = {};
  }
  storePayload(a, b) {
    a = vj(a);
    this.store[a]
      ? this.store[a].push(b)
      : ((this.h = {}), (this.store[a] = [b]));
    return a;
  }
  smartExtractMatchingEntries(a) {
    if (!a.keys.length) return [];
    const b = uj(this, a.keys.splice(0, 1)[0]),
      c = [];
    for (let d = 0; d < b.length; d++)
      this.store[b[d]] &&
        a.sizeLimit &&
        (this.store[b[d]].length <= a.sizeLimit
          ? (c.push(...this.store[b[d]]), delete this.store[b[d]])
          : c.push(...this.store[b[d]].splice(0, a.sizeLimit)));
    (null == a ? 0 : a.sizeLimit) &&
      c.length < (null == a ? void 0 : a.sizeLimit) &&
      ((a.sizeLimit -= c.length),
      c.push(...this.smartExtractMatchingEntries(a)));
    return c;
  }
  extractMatchingEntries(a) {
    a = uj(this, a);
    const b = [];
    for (let c = 0; c < a.length; c++)
      this.store[a[c]] &&
        (b.push(...this.store[a[c]]), delete this.store[a[c]]);
    return b;
  }
  getSequenceCount(a) {
    a = uj(this, a);
    let b = 0;
    for (let c = 0; c < a.length; c++) {
      let d;
      b += (null == (d = this.store[a[c]]) ? void 0 : d.length) || 0;
    }
    return b;
  }
};
xj.prototype.getSequenceCount = xj.prototype.getSequenceCount;
xj.prototype.extractMatchingEntries = xj.prototype.extractMatchingEntries;
xj.prototype.smartExtractMatchingEntries =
  xj.prototype.smartExtractMatchingEntries;
xj.prototype.storePayload = xj.prototype.storePayload;
function vj(a) {
  return [
    void 0 === a.auth ? "undefined" : a.auth,
    void 0 === a.isJspb ? "undefined" : a.isJspb,
    void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo,
    void 0 === a.tier ? "undefined" : a.tier,
  ].join("/");
}
function yj(a, b) {
  if (a) return a[b.name];
} /*

 SPDX-License-Identifier: Apache-2.0
*/
const zj = bg("initial_gel_batch_timeout", 2e3),
  Aj = bg("gel_queue_timeout_max_ms", 6e4),
  Bj = Math.pow(2, 16) - 1,
  Cj = bg("gel_min_batch_size", 5);
let Dj = void 0;
class Ej {
  constructor() {
    this.l = this.h = this.i = 0;
    this.j = !1;
  }
}
const Fj = new Ej(),
  Gj = new Ej(),
  Hj = new Ej(),
  Ij = new Ej();
let Jj,
  Kj = !0,
  Lj = 1;
const Mj = new Map(),
  Nj = v.ytLoggingTransportTokensToCttTargetIds_ || {},
  Oj = v.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
let Pj = {};
function Qj() {
  let a = x("yt.logging.ims");
  a || ((a = new xj()), y("yt.logging.ims", a));
  return a;
}
function Rj(a, b) {
  if ("log_event" === a.endpoint) {
    Sj();
    var c = Tj(a),
      d = Uj(a.payload) || "",
      e = Vj(d),
      f = 200;
    if (e) {
      if (!1 === e.enabled && !T("web_payload_policy_disabled_killswitch"))
        return;
      f = Wj(e.tier);
      if (400 === f) {
        Xj(a, b);
        return;
      }
    }
    Pj[c] = !0;
    e = { cttAuthInfo: c, isJspb: !1, tier: f };
    Qj().storePayload(e, a.payload);
    Yj(b, c, !1, e, Zj(d));
  }
}
function ak(a, b, c) {
  if ("log_event" === b.endpoint) {
    Sj();
    var d = Tj(b, !0),
      e = Vj(a),
      f = 200;
    if (e) {
      if (!1 === e.enabled && !T("web_payload_policy_disabled_killswitch"))
        return;
      f = Wj(e.tier);
      if (400 === f) {
        bk(a, b, c);
        return;
      }
    }
    Pj[d] = !0;
    e = { cttAuthInfo: d, isJspb: !0, tier: f };
    Qj().storePayload(e, b.payload.toJSON());
    Yj(c, d, !0, e, Zj(a));
  }
}
function Yj(a, b, c = !1, d, e = !1) {
  a && (Dj = new a());
  a =
    bg("tvhtml5_logging_max_batch_ads_fork") ||
    bg("web_logging_max_batch") ||
    100;
  const f = W(),
    g = ck(c, d.tier),
    h = g.l;
  e && (g.j = !0);
  e = 0;
  d && (e = Qj().getSequenceCount(d));
  const k = () => {
    dk(
      { writeThenSend: !0 },
      T("flush_only_full_queue") ? b : void 0,
      c,
      d.tier
    );
  };
  1e3 <= e
    ? k()
    : e >= a
    ? Jj ||
      (Jj = ek(() => {
        k();
        Jj = void 0;
      }, 0))
    : 10 <= f - h && (fk(c, d.tier), (g.l = f));
}
function Xj(a, b) {
  if ("log_event" === a.endpoint) {
    Sj();
    var c = Tj(a),
      d = new Map();
    d.set(c, [a.payload]);
    var e = Uj(a.payload) || "";
    b && (Dj = new b());
    return new A((f, g) => {
      Dj && Dj.isReady()
        ? gk(d, Dj, f, g, { bypassNetworkless: !0 }, !0, Zj(e))
        : f();
    });
  }
}
function bk(a, b, c) {
  if ("log_event" === b.endpoint) {
    Sj();
    var d = Tj(b, !0),
      e = new Map();
    e.set(d, [b.payload.toJSON()]);
    c && (Dj = new c());
    return new A((f) => {
      Dj && Dj.isReady()
        ? hk(e, Dj, f, { bypassNetworkless: !0 }, !0, Zj(a))
        : f();
    });
  }
}
function Tj(a, b = !1) {
  var c = "";
  if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";
  else if (a.cttAuthInfo) {
    if (b) {
      b = a.cttAuthInfo.token;
      c = a.cttAuthInfo;
      const d = new pf();
      c.videoId
        ? d.setVideoId(c.videoId)
        : c.playlistId && vd(d, 2, of, Yc(c.playlistId));
      Oj[b] = d;
    } else
      (b = a.cttAuthInfo),
        (c = {}),
        b.videoId
          ? (c.videoId = b.videoId)
          : b.playlistId && (c.playlistId = b.playlistId),
        (Nj[a.cttAuthInfo.token] = c);
    c = a.cttAuthInfo.token;
  }
  return c;
}
function dk(a = {}, b, c = !1, d) {
  new A((e, f) => {
    const g = ck(c, d),
      h = g.j;
    g.j = !1;
    ik(g.i);
    ik(g.h);
    g.h = 0;
    Dj && Dj.isReady()
      ? void 0 === d && T("enable_web_tiered_gel")
        ? jk(e, f, a, b, c, 300, h)
        : jk(e, f, a, b, c, d, h)
      : (fk(c, d), e());
  });
}
function jk(a, b, c = {}, d, e = !1, f = 200, g = !1) {
  var h = Dj,
    k = new Map();
  const l = new Map(),
    n = { isJspb: e, cttAuthInfo: d, tier: f },
    m = { isJspb: e, cttAuthInfo: d };
  if (void 0 !== d)
    e
      ? ((b = T("enable_web_tiered_gel")
          ? Qj().smartExtractMatchingEntries({ keys: [n, m], sizeLimit: 1e3 })
          : Qj().extractMatchingEntries(m)),
        k.set(d, b),
        hk(k, h, a, c, !1, g))
      : ((k = T("enable_web_tiered_gel")
          ? Qj().smartExtractMatchingEntries({ keys: [n, m], sizeLimit: 1e3 })
          : Qj().extractMatchingEntries(m)),
        l.set(d, k),
        gk(l, h, a, b, c, !1, g));
  else if (e) {
    for (const r of Object.keys(Pj))
      (b = T("enable_web_tiered_gel")
        ? Qj().smartExtractMatchingEntries({ keys: [n, m], sizeLimit: 1e3 })
        : Qj().extractMatchingEntries({ isJspb: !0, cttAuthInfo: r })),
        0 < b.length && k.set(r, b),
        ((T("web_fp_via_jspb_and_json") && c.writeThenSend) ||
          !T("web_fp_via_jspb_and_json")) &&
          delete Pj[r];
    hk(k, h, a, c, !1, g);
  } else {
    for (const r of Object.keys(Pj))
      (d = T("enable_web_tiered_gel")
        ? Qj().smartExtractMatchingEntries({
            keys: [
              { isJspb: !1, cttAuthInfo: r, tier: f },
              { isJspb: !1, cttAuthInfo: r },
            ],
            sizeLimit: 1e3,
          })
        : Qj().extractMatchingEntries({ isJspb: !1, cttAuthInfo: r })),
        0 < d.length && l.set(r, d),
        ((T("web_fp_via_jspb_and_json") && c.writeThenSend) ||
          !T("web_fp_via_jspb_and_json")) &&
          delete Pj[r];
    gk(l, h, a, b, c, !1, g);
  }
}
function fk(a = !1, b = 200) {
  const c = () => {
      dk({ writeThenSend: !0 }, void 0, a, b);
    },
    d = ck(a, b);
  var e = d === Ij || d === Hj ? 5e3 : Aj;
  T("web_gel_timeout_cap") &&
    !d.h &&
    ((e = ek(() => {
      c();
    }, e)),
    (d.h = e));
  ik(d.i);
  e = S("LOGGING_BATCH_TIMEOUT", bg("web_gel_debounce_ms", 1e4));
  T("shorten_initial_gel_batch_timeout") && Kj && (e = zj);
  e = ek(() => {
    0 < bg("gel_min_batch_size")
      ? Qj().getSequenceCount({ cttAuthInfo: void 0, isJspb: a, tier: b }) >=
          Cj && c()
      : c();
  }, e);
  d.i = e;
}
function gk(a, b, c, d, e = {}, f, g) {
  const h = Math.round(W());
  let k = a.size;
  const l = kk(g);
  for (const [n, m] of a) {
    a = n;
    g = m;
    const r = ua({ context: ki(b.config_ || ji()) });
    if (!ha(g) && !T("throw_err_when_logevent_malformed_killswitch")) {
      d();
      break;
    }
    r.events = g;
    (g = Nj[a]) && lk(r, a, g);
    delete Nj[a];
    const p = "visitorOnlyApprovedKey" === a;
    mk(r, h, p);
    nk(e);
    const t = (I) => {
      T("start_client_gcf") &&
        Lg.h(() =>
          u(function* () {
            yield ok(I);
          })
        );
      k--;
      k || c();
    };
    let w = 0;
    const B = () => {
      w++;
      if (e.bypassNetworkless && 1 === w)
        try {
          Ki(b, l, r, pk({ writeThenSend: !0 }, p, t, B, f)), (Kj = !1);
        } catch (I) {
          Rf(I), d();
        }
      k--;
      k || c();
    };
    try {
      Ki(b, l, r, pk(e, p, t, B, f)), (Kj = !1);
    } catch (I) {
      Rf(I), d();
    }
  }
}
function hk(a, b, c, d = {}, e, f) {
  const g = Math.round(W()),
    h = { value: a.size };
  var k = new Map([...a]);
  for (const [I] of k) {
    var l = I,
      n = a.get(l);
    k = new qf();
    var m = b.config_ || ji(),
      r = new Ke(),
      p = new De();
    J(p, 1, m.qa);
    J(p, 2, m.pa);
    K(p, 16, m.La);
    J(p, 17, m.innertubeContextClientVersion);
    if (m.aa) {
      var t = m.aa,
        w = new Be();
      t.coldConfigData && J(w, 1, t.coldConfigData);
      t.appInstallData && J(w, 6, t.appInstallData);
      t.coldHashData && J(w, 3, t.coldHashData);
      t.hotHashData && J(w, 5, t.hotHashData);
      H(p, Be, 62, w);
    }
    if ((t = v.devicePixelRatio) && 1 != t) {
      if (null != t && "number" !== typeof t)
        throw Error(
          `Value of float/double field must be a number, found ${typeof t}: ${t}`
        );
      sd(p, 65, t);
    }
    t = cg();
    "" !== t && J(p, 54, t);
    t = dg();
    if (0 < t.length) {
      w = new Ge();
      for (let G = 0; G < t.length; G++) {
        const R = new Fe();
        J(R, 1, t[G].key);
        vd(R, 2, Ee, Yc(t[G].value));
        Gd(w, 15, Fe, R);
      }
      H(r, Ge, 5, w);
    }
    li(r);
    mi(m, p);
    T("start_client_gcf") && ni(p);
    S("DELEGATED_SESSION_ID") &&
      !T("pageid_as_header_web") &&
      ((m = new Je()), J(m, 3, S("DELEGATED_SESSION_ID")));
    !T("fill_delegate_context_in_gel_killswitch") &&
      (m = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) &&
      ((t = yd(r, Je, 3) || new Je()), (m = J(t, 18, m)), H(r, Je, 3, m));
    m = p;
    t = S("DEVICE", "");
    for (const [G, R] of Object.entries(Yf(t)))
      (t = G),
        (w = R),
        "cbrand" === t
          ? J(m, 12, w)
          : "cmodel" === t
          ? J(m, 13, w)
          : "cbr" === t
          ? J(m, 87, w)
          : "cbrver" === t
          ? J(m, 88, w)
          : "cos" === t
          ? J(m, 18, w)
          : "cosver" === t
          ? J(m, 19, w)
          : "cplatform" === t && K(m, 42, Cg(w));
    r.j(p);
    H(k, Ke, 1, r);
    if ((p = Oj[l]))
      a: {
        if (Hd(p, xd(p, of, 1))) r = 1;
        else if (p.getPlaylistId()) r = 2;
        else break a;
        H(k, pf, 4, p);
        p = yd(k, Ke, 1) || new Ke();
        m = yd(p, Je, 3) || new Je();
        t = new Ie();
        J(t, 2, l);
        K(t, 1, r);
        Gd(m, 12, Ie, t);
        H(p, Je, 3, m);
      }
    delete Oj[l];
    l = "visitorOnlyApprovedKey" === l;
    qk() || Kd(k, 2, g);
    !l &&
      (r = S("EVENT_ID")) &&
      ((p = rk()), (m = new nf()), J(m, 1, r), Kd(m, 2, p), H(k, nf, 5, m));
    nk(d);
    if (T("jspb_serialize_with_worker")) {
      if (!Ei)
        if ((r = S("WORKER_SERIALIZATION_URL"))) {
          if ((r = r.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)) {
            if (void 0 === xa)
              if (((p = null), (m = v.trustedTypes) && m.createPolicy)) {
                try {
                  p = m.createPolicy("goog#html", {
                    createHTML: ma,
                    createScript: ma,
                    createScriptURL: ma,
                  });
                } catch (G) {
                  v.console && v.console.error(G.message);
                }
                xa = p;
              } else xa = p;
            r = (p = xa) ? p.createScriptURL(r) : r;
            r = new Ba(r, Ca);
          } else r = null;
          Ei = r;
        } else Ei = null;
      r = Ei || void 0;
      Di ||
        void 0 === r ||
        (Di = new Worker(
          r instanceof Ba && r.constructor === Ba
            ? r.h
            : "type_error:TrustedResourceUrl",
          void 0
        ));
      if ((r = Di) && d.writeThenSend) {
        Mj.set(Lj, {
          client: b,
          resolve: c,
          networklessOptions: d,
          isIsolated: e,
          useVSSEndpoint: f,
          dangerousLogToVisitorSession: l,
          requestsOutstanding: h,
        });
        r.postMessage({
          op: "gelBatchToSerialize",
          batchRequest: k.toJSON(),
          clientEvents: n,
          key: Lj,
        });
        Lj++;
        break;
      }
    }
    if (n) {
      r = [];
      for (p = 0; p < n.length; p++)
        try {
          r.push(new O(n[p]));
        } catch (G) {
          Rf(new xf("Transport failed to deserialize " + String(n[p])));
        }
      n = r;
    } else n = [];
    for (const G of n) Gd(k, 3, O, G);
    n = { startTime: W(), ticks: {}, infos: {} };
    a: {
      Jc = !0;
      try {
        var B = JSON.stringify(k.toJSON(), gd);
        break a;
      } finally {
        Jc = !1;
      }
      B = void 0;
    }
    k = B;
    n.ticks.geljspc = W();
    T("log_jspb_serialize_latency") &&
      0.001 > Math.random() &&
      wi("meta_logging_csi_event", { timerName: "gel_jspb_serialize", xc: n });
    sk(k, b, c, d, e, f, l, h);
  }
}
function sk(a, b, c, d = {}, e, f, g, h = { value: 0 }) {
  f = kk(f);
  d = pk(
    d,
    g,
    (k) => {
      T("start_client_gcf") &&
        Lg.h(() =>
          u(function* () {
            yield ok(k);
          })
        );
      h.value--;
      h.value || c();
    },
    () => {
      h.value--;
      h.value || c();
    },
    e
  );
  d.headers["Content-Type"] = "application/json+protobuf";
  d.postBodyFormat = "JSPB";
  d.postBody = a;
  Ki(b, f, "", d);
  Kj = !1;
}
function nk(a) {
  T("always_send_and_write") && (a.writeThenSend = !1);
}
function pk(a, b, c, d, e) {
  a = {
    retry: !0,
    onSuccess: c,
    onError: d,
    networklessOptions: a,
    dangerousLogToVisitorSession: b,
    ac: !!e,
    headers: {},
    postBodyFormat: "",
    postBody: "",
    compress: T("compress_gel") || T("compress_gel_lr"),
  };
  qk() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(W())));
  return a;
}
function mk(a, b, c) {
  qk() || (a.requestTimeMs = String(b));
  T("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
  !c &&
    (b = S("EVENT_ID")) &&
    ((c = rk()),
    (a.serializedClientEventId = {
      serializedEventId: b,
      clientCounter: String(c),
    }));
}
function rk() {
  let a = S("BATCH_CLIENT_COUNTER") || 0;
  a || (a = Math.floor((Math.random() * Bj) / 2));
  a++;
  a > Bj && (a = 1);
  Q("BATCH_CLIENT_COUNTER", a);
  return a;
}
function lk(a, b, c) {
  let d;
  if (c.videoId) d = "VIDEO";
  else if (c.playlistId) d = "PLAYLIST";
  else return;
  a.credentialTransferTokenTargetId = c;
  a.context = a.context || {};
  a.context.user = a.context.user || {};
  a.context.user.credentialTransferTokens = [{ token: b, scope: d }];
}
function Sj() {
  var a;
  (a = x("yt.logging.transport.enableScrapingForTest")) ||
    ((a = ag("il_payload_scraping")),
    (a = "enable_il_payload_scraping" !== (void 0 !== a ? String(a) : "")));
  a ||
    ((tj = []),
    y("yt.logging.transport.enableScrapingForTest", !0),
    y("yt.logging.transport.scrapedPayloadsForTesting", tj),
    y(
      "yt.logging.transport.payloadToScrape",
      "visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(
        " "
      )
    ),
    y("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
    y("yt.logging.transport.scrapeClientEvent", !0));
}
function qk() {
  return T("use_request_time_ms_header") || T("lr_use_request_time_ms_header");
}
function ek(a, b) {
  return T("transport_use_scheduler")
    ? T("logging_avoid_blocking_during_navigation") ||
      T("lr_logging_avoid_blocking_during_navigation")
      ? Eg(() => {
          "none" === qj().currentState
            ? a()
            : qj().install({ none: { callback: a } });
        }, b)
      : Eg(a, b)
    : eg(a, b);
}
function ik(a) {
  T("transport_use_scheduler") ? Lg.U(a) : window.clearTimeout(a);
}
function ok(a) {
  return u(function* () {
    var b,
      c =
        null == a
          ? void 0
          : null == (b = a.responseContext)
          ? void 0
          : b.globalConfigGroup;
    b = yj(c, we);
    const d = null == c ? void 0 : c.hotHashData,
      e = yj(c, ve);
    c = null == c ? void 0 : c.coldHashData;
    const f = Yi().resolve(new Qi());
    f &&
      (d && (b ? yield fi(f, d, b) : yield fi(f, d)),
      c && (e ? yield gi(f, c, e) : yield gi(f, c)));
  });
}
function ck(a, b = 200) {
  return a ? (300 === b ? Ij : Gj) : 300 === b ? Hj : Fj;
}
function Vj(a) {
  if (T("enable_web_tiered_gel")) {
    a = Fi[a || ""];
    var b, c;
    if (null == Yi().resolve(new Qi())) var d = void 0;
    else {
      var e = null != (d = x("yt.gcf.config.hotConfigGroup")) ? d : null;
      d =
        null == e
          ? void 0
          : null == (b = e.loggingHotConfig)
          ? void 0
          : null == (c = b.eventLoggingConfig)
          ? void 0
          : c.payloadPolicies;
    }
    if ((b = d))
      for (c = 0; c < b.length; c++) if (b[c].payloadNumber === a) return b[c];
  }
}
function Uj(a) {
  a = Object.keys(a);
  for (const b of a) if (Fi[b]) return b;
}
function Wj(a) {
  switch (a) {
    case "DELAYED_EVENT_TIER_UNSPECIFIED":
      return 0;
    case "DELAYED_EVENT_TIER_DEFAULT":
      return 100;
    case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":
      return 200;
    case "DELAYED_EVENT_TIER_FAST":
      return 300;
    case "DELAYED_EVENT_TIER_IMMEDIATE":
      return 400;
    default:
      return 200;
  }
}
function Zj(a) {
  return "gelDebuggingEvent" === a;
}
function kk(a = !1) {
  return a && T("vss_through_gel_video_stats") ? "video_stats" : "log_event";
}
const tk = v.ytLoggingGelSequenceIdObj_ || {};
function uk(a, b, c, d = {}) {
  const e = {},
    f = Math.round(d.timestamp || W());
  e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
  e[a] = b;
  a = Ni();
  e.context = { lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a) };
  d.sequenceGroup &&
    !T("web_gel_sequence_info_killswitch") &&
    ((a = e.context),
    (b = d.sequenceGroup),
    (b = { index: vk(b), groupKey: b }),
    (a.sequence = b),
    d.endOfSequence && delete tk[d.sequenceGroup]);
  (d.sendIsolatedPayload ? Xj : Rj)(
    {
      endpoint: "log_event",
      payload: e,
      cttAuthInfo: d.cttAuthInfo,
      dangerousLogToVisitorSession: d.dangerousLogToVisitorSession,
    },
    c
  );
}
function wk(a = !1) {
  dk(void 0, void 0, a);
}
function vk(a) {
  tk[a] = a in tk ? tk[a] + 1 : 0;
  return tk[a];
}
let xk = Li,
  yk = [];
function Y(a, b, c = {}) {
  let d = xk;
  S("ytLoggingEventsDefaultDisabled", !1) && xk === Li && (d = null);
  T("web_all_payloads_via_jspb") &&
    !c.timestamp &&
    ((c.lact = Ni()), (c.timestamp = W()));
  uk(a, b, d, c);
}
const zk = v.ytLoggingGelSequenceIdObj_ || {};
function Ak(a, b, c, d = {}) {
  var e = Math.round(d.timestamp || W());
  Kd(b, 1, e < Number.MAX_SAFE_INTEGER ? e : 0);
  e = new kf();
  if (d.lact) Kd(e, 1, isFinite(d.lact) ? d.lact : -1);
  else if (d.timestamp) Kd(e, 1, -1);
  else {
    var f = Ni();
    Kd(e, 1, isFinite(f) ? f : -1);
  }
  if (d.sequenceGroup && !T("web_gel_sequence_info_killswitch")) {
    f = d.sequenceGroup;
    const g = vk(f),
      h = new jf();
    Kd(h, 2, g);
    J(h, 1, f);
    H(e, jf, 3, h);
    d.endOfSequence && delete zk[d.sequenceGroup];
  }
  H(b, kf, 33, e);
  (d.sendIsolatedPayload ? bk : ak)(
    a,
    {
      endpoint: "log_event",
      payload: b,
      cttAuthInfo: d.cttAuthInfo,
      dangerousLogToVisitorSession: d.dangerousLogToVisitorSession,
    },
    c
  );
}
function Bk(a, b, c = {}) {
  let d = !1;
  S("ytLoggingEventsDefaultDisabled", !1) && (d = !0);
  Ak(a, b, d ? null : Li, c);
}
function Ck(a, b, c) {
  const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O();
  Fd(d, gf, 72, lf, a);
  c ? Ak("visualElementShown", d, c, b) : Bk("visualElementShown", d, b);
}
function Dk(a, b, c) {
  const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O();
  Fd(d, ff, 73, lf, a);
  c ? Ak("visualElementHidden", d, c, b) : Bk("visualElementHidden", d, b);
}
function Ek(a, b, c) {
  const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O();
  Fd(d, ef, 78, lf, a);
  c ? Ak("visualElementGestured", d, c, b) : Bk("visualElementGestured", d, b);
}
function Fk(a, b, c) {
  const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O();
  Fd(d, hf, 208, lf, a);
  c
    ? Ak("visualElementStateChanged", d, c, b)
    : Bk("visualElementStateChanged", d, b);
}
function Gk(a, b, c) {
  const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O();
  Fd(d, bf, 156, lf, a);
  c ? Ak("screenCreated", d, c, b) : Bk("screenCreated", d, b);
}
function Hk(a, b, c) {
  const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O();
  Fd(d, df, 215, lf, a);
  c ? Ak("visualElementAttached", d, c, b) : Bk("visualElementAttached", d, b);
}
var Ik = new Set(),
  Jk = 0,
  Kk = 0,
  Lk = 0,
  Mk = [];
const Nk = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];
function Ok(a) {
  Pk(a);
}
function Qk(a) {
  Pk(a, "WARNING");
}
function Pk(a, b = "ERROR") {
  var c = {};
  c.name = S("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
  c.version = S("INNERTUBE_CONTEXT_CLIENT_VERSION");
  Rk(a, c, b);
}
function Rk(a, b, c = "ERROR") {
  if (a) {
    a.hasOwnProperty("level") && a.level && (c = a.level);
    if (T("console_log_js_exceptions")) {
      var d = [];
      d.push(`Name: ${a.name}`);
      d.push(`Message: ${a.message}`);
      a.hasOwnProperty("params") &&
        d.push(`Error Params: ${JSON.stringify(a.params)}`);
      a.hasOwnProperty("args") &&
        d.push(`Error args: ${JSON.stringify(a.args)}`);
      d.push(`File name: ${a.fileName}`);
      d.push(`Stacktrace: ${a.stack}`);
      window.console.log(d.join("\n"), a);
    }
    if (!(5 <= Jk)) {
      d = Mk;
      var e = Ta(a);
      const m = e.message || "Unknown Error",
        r = e.name || "UnknownError";
      var f = e.stack || a.i || "Not available";
      if (f.startsWith(`${r}: ${m}`)) {
        var g = f.split("\n");
        g.shift();
        f = g.join("\n");
      }
      g = e.lineNumber || "Not available";
      e = e.fileName || "Not available";
      let p = 0;
      if (a.hasOwnProperty("args") && a.args && a.args.length)
        for (
          var h = 0;
          h < a.args.length &&
          !((p = vg(a.args[h], `params.${h}`, b, p)), 500 <= p);
          h++
        );
      else if (a.hasOwnProperty("params") && a.params) {
        const t = a.params;
        if ("object" === typeof a.params)
          for (h in t) {
            if (!t[h]) continue;
            const w = `params.${h}`,
              B = xg(t[h]);
            b[w] = B;
            p += w.length + B.length;
            if (500 < p) break;
          }
        else b.params = xg(t);
      }
      if (d.length)
        for (
          h = 0;
          h < d.length &&
          !((p = vg(d[h], `params.context.${h}`, b, p)), 500 <= p);
          h++
        );
      navigator.vendor &&
        !b.hasOwnProperty("vendor") &&
        (b["device.vendor"] = navigator.vendor);
      b = {
        message: m,
        name: r,
        lineNumber: g,
        fileName: e,
        stack: f,
        params: b,
        sampleWeight: 1,
      };
      d = Number(a.columnNumber);
      isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
      if ("IGNORED" === a.level) var k = 0;
      else
        a: {
          a = og();
          for (k of a.F)
            if (b.message && b.message.match(k.Qa)) {
              k = k.weight;
              break a;
            }
          for (var l of a.D)
            if (l.callback(b)) {
              k = l.weight;
              break a;
            }
          k = 1;
        }
      b.sampleWeight = k;
      k = b;
      for (var n of lg)
        if (n.W[k.name]) {
          l = n.W[k.name];
          for (const t of l)
            if ((l = k.message.match(t.u))) {
              k.params["params.error.original"] = l[0];
              a = t.groups;
              b = {};
              for (d = 0; d < a.length; d++)
                (b[a[d]] = l[d + 1]),
                  (k.params[`params.error.${a[d]}`] = l[d + 1]);
              k.message = n.ca(b);
              break;
            }
        }
      k.params || (k.params = {});
      n = og();
      k.params[
        "params.errorServiceSignature"
      ] = `msg=${n.F.length}&cb=${n.D.length}`;
      k.params["params.serviceWorker"] = "true";
      v.document &&
        v.document.querySelectorAll &&
        (k.params["params.fscripts"] = String(
          document.querySelectorAll("script:not([nonce])").length
        ));
      za("sample").constructor !== ya && (k.params["params.fconst"] = "true");
      window.yterr && "function" === typeof window.yterr && window.yterr(k);
      0 === k.sampleWeight || Ik.has(k.message) || Sk(k, c);
    }
  }
}
function Sk(a, b = "ERROR") {
  if ("ERROR" === b) {
    sg.fa("handleError", a);
    if (T("record_app_crashed_web") && 0 === Lk && 1 === a.sampleWeight)
      if ((Lk++, T("errors_via_jspb"))) {
        var c = new Ue();
        c = K(c, 1, 1);
        if (!T("report_client_error_with_app_crash_ks")) {
          var d = new Te();
          var e = new Se();
          var f = new Re();
          var g = new Qe();
          g = J(g, 1, a.message);
          f = H(f, Qe, 3, g);
          e = H(e, Re, 5, f);
          d = H(d, Se, 9, e);
          H(c, Te, 4, d);
        }
        d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O();
        Fd(d, Ue, 20, lf, c);
        Bk("appCrashed", d);
      } else
        (c = { appCrashType: "APP_CRASH_TYPE_BREAKPAD" }),
          T("report_client_error_with_app_crash_ks") ||
            (c.systemHealth = {
              crashData: {
                clientError: { logMessage: { message: a.message } },
              },
            }),
          Y("appCrashed", c);
    Kk++;
  } else "WARNING" === b && sg.fa("handleWarning", a);
  a: {
    if (T("errors_via_jspb")) {
      if (Tk()) var h = void 0;
      else {
        c = new Ne();
        J(c, 1, a.stack);
        a.fileName && J(c, 4, a.fileName);
        var k =
          a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
        0 !== k.length &&
          (1 !== k.length || isNaN(Number(k[0]))
            ? 2 !== k.length ||
              isNaN(Number(k[0])) ||
              isNaN(Number(k[1])) ||
              (Jd(c, 2, Number(k[0])), Jd(c, 3, Number(k[1])))
            : Jd(c, 2, Number(k[0])));
        k = new Qe();
        J(k, 1, a.message);
        J(k, 3, a.name);
        Jd(k, 6, a.sampleWeight);
        "ERROR" === b ? K(k, 2, 2) : "WARNING" === b ? K(k, 2, 1) : K(k, 2, 0);
        var l = new Oe();
        sd(l, 1, !0);
        Fd(l, Ne, 3, Pe, c);
        c = new Me();
        J(c, 3, window.location.href);
        d = S("FEXP_EXPERIMENTS", []);
        for (f = 0; f < d.length; f++) {
          g = c.o;
          e = d[f];
          var n = F(g);
          Nc(n);
          g = ud(g, n, 5, 2);
          n = D(g);
          e = Xc(e, !!(4 & n) && !!(4096 & n));
          g.push(e);
        }
        d = Mf();
        if (!Nf() && d)
          for (var m of Object.keys(d))
            (e = new Le()), J(e, 1, m), J(e, 2, String(d[m])), Gd(c, 4, Le, e);
        if ((m = a.params))
          for (h of Object.keys(m))
            (d = new Le()),
              J(d, 1, `client.${h}`),
              J(d, 2, String(m[h])),
              Gd(c, 4, Le, d);
        m = S("SERVER_NAME");
        h = S("SERVER_VERSION");
        m &&
          h &&
          ((d = new Le()),
          J(d, 1, "server.name"),
          J(d, 2, m),
          Gd(c, 4, Le, d),
          (m = new Le()),
          J(m, 1, "server.version"),
          J(m, 2, h),
          Gd(c, 4, Le, m));
        h = new Re();
        H(h, Me, 1, c);
        H(h, Oe, 2, l);
        H(h, Qe, 3, k);
      }
      if (!h) break a;
      m = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O();
      Fd(m, Re, 163, lf, h);
      Bk("clientError", m);
    } else {
      h = {};
      if (Tk()) h = void 0;
      else {
        c = { stackTrace: a.stack };
        a.fileName && (c.filename = a.fileName);
        m = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
        0 !== m.length &&
          (1 !== m.length || isNaN(Number(m[0]))
            ? 2 !== m.length ||
              isNaN(Number(m[0])) ||
              isNaN(Number(m[1])) ||
              ((c.lineNumber = Number(m[0])), (c.columnNumber = Number(m[1])))
            : (c.lineNumber = Number(m[0])));
        m = {
          level: "ERROR_LEVEL_UNKNOWN",
          message: a.message,
          errorClassName: a.name,
          sampleWeight: a.sampleWeight,
        };
        "ERROR" === b
          ? (m.level = "ERROR_LEVEL_ERROR")
          : "WARNING" === b && (m.level = "ERROR_LEVEL_WARNNING");
        c = { isObfuscated: !0, browserStackInfo: c };
        h.pageUrl = window.location.href;
        h.kvPairs = [];
        S("FEXP_EXPERIMENTS") && (h.experimentIds = S("FEXP_EXPERIMENTS"));
        d = Mf();
        if (!Nf() && d)
          for (l of Object.keys(d))
            h.kvPairs.push({ key: l, value: String(d[l]) });
        if ((l = a.params))
          for (k of Object.keys(l))
            h.kvPairs.push({ key: `client.${k}`, value: String(l[k]) });
        k = S("SERVER_NAME");
        l = S("SERVER_VERSION");
        k &&
          l &&
          (h.kvPairs.push({ key: "server.name", value: k }),
          h.kvPairs.push({ key: "server.version", value: l }));
        h = { errorMetadata: h, stackTrace: c, logMessage: m };
      }
      if (!h) break a;
      Y("clientError", h);
    }
    if ("ERROR" === b || T("errors_flush_gel_always_killswitch"))
      b: {
        if (T("web_fp_via_jspb")) {
          b = yk;
          yk = [];
          if (b) for (const r of b) uk(r.N, r.payload, xk, r.options);
          wk(!0);
          if (!T("web_fp_via_jspb_and_json")) break b;
        }
        wk();
      }
  }
  try {
    Ik.add(a.message);
  } catch (r) {}
  Jk++;
}
function Tk() {
  for (const a of Nk) {
    const b = Ha();
    if (b && 0 <= b.toLowerCase().indexOf(a.toLowerCase())) return !0;
  }
  return !1;
}
function Uk(a, ...b) {
  a.args || (a.args = []);
  a.args.push(...b);
}
function Vk(a) {
  return u(function* () {
    var b = yield v.fetch(a.i);
    if (200 !== b.status)
      return Promise.reject("Server error when retrieving AmbientData");
    b = yield b.text();
    if (!b.startsWith(")]}'\n"))
      return Promise.reject("Incorrect JSPB formatting");
    a: {
      b = JSON.parse(b.substring(5));
      for (let c = 0; c < b.length; c++)
        if ("yt.sw.adr" === b[c][0]) {
          b = new Hf(b[c]);
          break a;
        }
      b = null;
    }
    return b ? b : Promise.reject("AmbientData missing from response");
  });
}
function Wk(a = !1) {
  const b = Xk.h;
  return u(function* () {
    if (a || !b.h)
      b.h = Vk(b)
        .then(b.j)
        .catch((c) => {
          delete b.h;
          Pk(c);
        });
    return b.h;
  });
}
var Xk = class {
  constructor() {
    this.i = Yk("/sw.js_data");
  }
  j(a) {
    const b = yd(a, Gf, 2);
    if (b) {
      var c = Id(b, 5);
      c && (v.__SAPISID = c);
      null != Hd(b, 10)
        ? Q("EOM_VISITOR_DATA", Id(b, 10))
        : null != Hd(b, 7) && Q("VISITOR_DATA", Id(b, 7));
      if (null != Wc(qd(b, 4))) {
        c = String;
        var d = Wc(qd(b, 4));
        Q("SESSION_INDEX", c(null != d ? d : 0));
      }
      null != Hd(b, 8) && Q("DELEGATED_SESSION_ID", Id(b, 8));
      null != Hd(b, 11) &&
        Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", Id(b, 11));
    }
    return a;
  }
};
function Zk(a, b) {
  b.encryptedTokenJarContents &&
    ((a.h[b.encryptedTokenJarContents] = b),
    "string" === typeof b.expirationSeconds &&
      setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents];
      }, 1e3 * Number(b.expirationSeconds)));
}
var $k = class {
  constructor() {
    this.h = {};
  }
  handleResponse(a, b) {
    if (!b) throw Error("request needs to be passed into ConsistencyService");
    let c, d;
    b =
      (null == (c = b.H.context)
        ? void 0
        : null == (d = c.request)
        ? void 0
        : d.consistencyTokenJars) || [];
    let e;
    if (
      (a = null == (e = a.responseContext) ? void 0 : e.consistencyTokenJar)
    ) {
      for (const f of b) delete this.h[f.encryptedTokenJarContents];
      Zk(this, a);
    }
  }
};
let al = Date.now().toString();
function bl() {
  const a = Array(16);
  for (var b = 0; 16 > b; b++) {
    var c = Date.now();
    for (let d = 0; d < c % 23; d++) a[b] = Math.random();
    a[b] = Math.floor(256 * Math.random());
  }
  if (al)
    for (b = 1, c = 0; c < al.length; c++)
      (a[b % 16] = a[b % 16] ^ (a[(b - 1) % 16] / 4) ^ al.charCodeAt(c)), b++;
  return a;
}
function cl() {
  if (window.crypto && window.crypto.getRandomValues)
    try {
      const a = Array(16),
        b = new Uint8Array(16);
      window.crypto.getRandomValues(b);
      for (let c = 0; c < a.length; c++) a[c] = b[c];
      return a;
    } catch (a) {}
  return bl();
}
let dl = v.ytLoggingDocDocumentNonce_;
if (!dl) {
  const a = cl(),
    b = [];
  for (let c = 0; c < a.length; c++)
    b.push(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
        a[c] & 63
      )
    );
  dl = b.join("");
}
var el = dl;
var fl = {
  ib: 0,
  fb: 1,
  hb: 2,
  Mb: 3,
  jb: 4,
  Wb: 5,
  Nb: 6,
  Tb: 7,
  Rb: 8,
  Sb: 9,
  0: "DEFAULT",
  1: "CHAT",
  2: "CONVERSATIONS",
  3: "MINIPLAYER",
  4: "DIALOG",
  5: "VOZ",
  6: "MUSIC_WATCH_TABS",
  7: "SHARE",
  8: "PUSH_NOTIFICATIONS",
  9: "RICH_GRID_WATCH",
};
let gl = 1;
function hl(a) {
  return new il({ trackingParams: a });
}
function jl(a) {
  const b = gl++;
  return new il({
    veType: a,
    veCounter: b,
    elementIndex: void 0,
    dataElement: void 0,
    youtubeData: void 0,
    jspbYoutubeData: void 0,
    loggingDirectives: void 0,
  });
}
var il = class {
  constructor(a) {
    this.h = a;
  }
  getAsJson() {
    const a = {};
    void 0 !== this.h.trackingParams
      ? (a.trackingParams = this.h.trackingParams)
      : ((a.veType = this.h.veType),
        void 0 !== this.h.veCounter && (a.veCounter = this.h.veCounter),
        void 0 !== this.h.elementIndex &&
          (a.elementIndex = this.h.elementIndex));
    void 0 !== this.h.dataElement &&
      (a.dataElement = this.h.dataElement.getAsJson());
    void 0 !== this.h.youtubeData && (a.youtubeData = this.h.youtubeData);
    this.h.isCounterfactual && (a.isCounterfactual = !0);
    return a;
  }
  getAsJspb() {
    const a = new Ve();
    if (void 0 !== this.h.trackingParams) {
      var b = this.h.trackingParams;
      if (null != b)
        if ("string" === typeof b) b = b ? new Yb(b, Ub) : Xb();
        else if (b.constructor !== Yb)
          if (Sb(b)) b = b.length ? new Yb(new Uint8Array(b), Ub) : Xb();
          else throw Error();
      sd(a, 1, b);
    } else
      void 0 !== this.h.veType && Jd(a, 2, this.h.veType),
        void 0 !== this.h.veCounter && Jd(a, 6, this.h.veCounter),
        void 0 !== this.h.elementIndex && Jd(a, 3, this.h.elementIndex),
        this.h.isCounterfactual && sd(a, 5, !0);
    void 0 !== this.h.dataElement &&
      ((b = this.h.dataElement.getAsJspb()), H(a, Ve, 7, b));
    void 0 !== this.h.youtubeData && H(a, Ae, 8, this.h.jspbYoutubeData);
    return a;
  }
  toString() {
    return JSON.stringify(this.getAsJson());
  }
  isClientVe() {
    return !this.h.trackingParams && !!this.h.veType;
  }
  getLoggingDirectives() {
    return this.h.loggingDirectives;
  }
};
function kl(a = 0) {
  return S("client-screen-nonce-store", {})[a];
}
function ll(a, b = 0) {
  let c = S("client-screen-nonce-store");
  c || ((c = {}), Q("client-screen-nonce-store", c));
  c[b] = a;
}
function ml(a = 0) {
  return 0 === a ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`;
}
function nl(a = 0) {
  return S(ml(a));
}
function ol(a = 0) {
  return (a = nl(a))
    ? new il({ veType: a, youtubeData: void 0, jspbYoutubeData: void 0 })
    : null;
}
function pl() {
  let a = S("csn-to-ctt-auth-info");
  a || ((a = {}), Q("csn-to-ctt-auth-info", a));
  return a;
}
function ql() {
  return Object.values(S("client-screen-nonce-store", {})).filter(
    (a) => void 0 !== a
  );
}
function rl(a = 0) {
  a = kl(a);
  if (!a && !S("USE_CSN_FALLBACK", !0)) return null;
  a || (a = "UNDEFINED_CSN");
  return a ? a : null;
}
function sl(a) {
  for (const b of Object.values(fl)) if (rl(b) === a) return !0;
  return !1;
}
function tl(a, b, c) {
  const d = pl();
  (c = rl(c)) && delete d[c];
  b && (d[a] = b);
}
function ul(a) {
  return pl()[a];
}
function vl(a, b, c = 0, d) {
  if (a !== kl(c) || b !== S(ml(c)))
    if (
      (tl(a, d, c),
      ll(a, c),
      Q(ml(c), b),
      (b = () => {
        setTimeout(() => {
          if (a)
            if (T("web_time_via_jspb")) {
              const e = new We();
              J(e, 1, el);
              J(e, 2, a);
              const f = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O();
              Fd(f, We, 111, lf, e);
              Bk("foregroundHeartbeatScreenAssociated", f);
            } else
              Y("foregroundHeartbeatScreenAssociated", {
                clientDocumentNonce: el,
                clientScreenNonce: a,
              });
        }, 0);
      }),
      "requestAnimationFrame" in window)
    )
      try {
        window.requestAnimationFrame(b);
      } catch (e) {
        b();
      }
    else b();
}
function wl() {
  var a = S("INNERTUBE_CONTEXT");
  if (!a)
    return (
      Pk(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {}
    );
  a = ua(a);
  T("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
  a.client || (a.client = {});
  var b = a.client;
  b.utcOffsetMinutes = -Math.floor(new Date().getTimezoneOffset());
  var c = cg();
  c ? (b.experimentsToken = c) : delete b.experimentsToken;
  $k.h || ($k.h = new $k());
  b = $k.h.h;
  c = [];
  let d = 0;
  for (var e in b) c[d++] = b[e];
  a.request = Object.assign({}, a.request, { consistencyTokenJars: c });
  a.user = Object.assign({}, a.user);
  if ((e = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")))
    a.user.serializedDelegationContext = e;
  return a;
}
function xl(a) {
  var b = a;
  if ((a = S("INNERTUBE_HOST_OVERRIDE"))) {
    a = String(a);
    var c = String,
      d = b.match(Na);
    b = d[5];
    var e = d[6];
    d = d[7];
    var f = "";
    b && (f += b);
    e && (f += "?" + e);
    d && (f += "#" + d);
    b = a + c(f);
  }
  return b;
}
var yl = class {};
const zl = {
  GET_DATASYNC_IDS: (function (a) {
    return () => new a();
  })(class extends yl {}),
};
function Al(a = !0) {
  a = a ? cl() : bl();
  const b = [];
  for (let c = 0; c < a.length; c++)
    b.push(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
        a[c] & 63
      )
    );
  return b.join("");
}
y("ytLoggingLatencyUsageStats_", v.ytLoggingLatencyUsageStats_ || {});
const Bl = window;
class Cl {
  constructor() {
    this.timing = {};
    this.clearResourceTimings = () => {};
    this.webkitClearResourceTimings = () => {};
    this.mozClearResourceTimings = () => {};
    this.msClearResourceTimings = () => {};
    this.oClearResourceTimings = () => {};
  }
}
var Dl =
  Bl.performance ||
  Bl.mozPerformance ||
  Bl.msPerformance ||
  Bl.webkitPerformance ||
  new Cl();
ka(
  Dl.clearResourceTimings ||
    Dl.webkitClearResourceTimings ||
    Dl.mozClearResourceTimings ||
    Dl.msClearResourceTimings ||
    Dl.oClearResourceTimings ||
    oa,
  Dl
);
const El = [
  "type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse",
];
function Fl(a) {
  var b = { cc: {} },
    c = yg();
  if (void 0 !== Ti.h) {
    const d = Ti.h;
    a = [b !== d.m, a !== d.l, c !== d.j, !1, !1, !1, void 0 !== d.i];
    if (a.some((e) => e))
      throw new xf("InnerTubeTransportService is already initialized", a);
  } else Ti.h = new Ti(b, a, c);
}
function Gl(a, b) {
  return u(function* () {
    var c,
      d = {
        sessionIndex:
          null == a ? void 0 : null == (c = a.la) ? void 0 : c.sessionIndex,
      };
    c = yield nb(Ag(0, d));
    return Promise.resolve(Object.assign({}, Hl(b), c));
  });
}
function Il(a, b, c) {
  return u(function* () {
    var d;
    if (null == b ? 0 : null == (d = b.H) ? 0 : d.context) {
      d = b.H.context;
      for (var e of []) yield e.lc(d);
    }
    var f;
    if (null == (f = a.i) ? 0 : f.tc(b.input, b.H))
      return yield a.i.hc(b.input, b.H);
    var g;
    if (
      (f = null == (g = b.config) ? void 0 : g.oc) &&
      a.h.has(f) &&
      T("web_memoize_inflight_requests")
    )
      var h = a.h.get(f);
    else {
      g = JSON.stringify(b.H);
      let m;
      e = null != (m = null == (h = b.P) ? void 0 : h.headers) ? m : {};
      b.P = Object.assign({}, b.P, { headers: Object.assign({}, e, c) });
      h = Object.assign({}, b.P);
      "POST" === b.P.method && (h = Object.assign({}, h, { body: g }));
      h = a.l.fetch(b.input, h, b.config);
      f && a.h.set(f, h);
    }
    h = yield h;
    var k;
    let l;
    if (
      h &&
      "error" in h &&
      (null == (k = h) ? 0 : null == (l = k.error) ? 0 : l.details)
    ) {
      k = h.error.details;
      for (const m of k)
        (k = m["@type"]) && -1 < El.indexOf(k) && (delete m["@type"], (h = m));
    }
    f && a.h.has(f) && a.h.delete(f);
    let n;
    !h &&
      (null == (n = a.i) ? 0 : n.bc(b.input, b.H)) &&
      (h = yield a.i.fc(b.input, b.H));
    return h || void 0;
  });
}
function Jl(a, b, c) {
  var d = { la: { identity: Bg } };
  b.context || (b.context = wl());
  return new A((e) =>
    u(function* () {
      var f = xl(c);
      f = $f(f) ? "same-origin" : "cors";
      if (a.j.Xa) {
        var g,
          h = null == d ? void 0 : null == (g = d.la) ? void 0 : g.sessionIndex;
        g = Ag(0, { sessionIndex: h });
        f = Object.assign({}, Hl(f), g);
      } else f = yield Gl(d, f);
      g = xl(c);
      h = {};
      (S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") &&
        (null == f ? 0 : f.Authorization)) ||
        (h.key = S("INNERTUBE_API_KEY"));
      T("json_condensed_response") && (h.prettyPrint = "false");
      g = Zf(g, h || {}, !1);
      h = {
        method: "POST",
        mode: $f(g) ? "same-origin" : "cors",
        credentials: $f(g) ? "same-origin" : "include",
      };
      var k = {};
      const l = {};
      for (const n of Object.keys(k)) k[n] && (l[n] = k[n]);
      0 < Object.keys(l).length && (h.headers = l);
      e(Il(a, { input: g, P: h, H: b, config: d }, f));
    })
  );
}
function Hl(a) {
  const b = { "Content-Type": "application/json" };
  S("EOM_VISITOR_DATA")
    ? (b["X-Goog-EOM-Visitor-Id"] = S("EOM_VISITOR_DATA"))
    : S("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = S("VISITOR_DATA"));
  S("WEBVIEW_EOM", !1) && (b["X-Yt-Webview-Eom"] = "1");
  b["X-Youtube-Bootstrap-Logged-In"] = S("LOGGED_IN", !1);
  S("DEBUG_SETTINGS_METADATA") &&
    (b["X-Debug-Settings-Metadata"] = S("DEBUG_SETTINGS_METADATA"));
  "cors" !== a &&
    ((a = S("INNERTUBE_CONTEXT_CLIENT_NAME")) &&
      (b["X-Youtube-Client-Name"] = a),
    (a = S("INNERTUBE_CONTEXT_CLIENT_VERSION")) &&
      (b["X-Youtube-Client-Version"] = a),
    (a = S("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a),
    (a = S("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
  return b;
}
var Ti = class {
  constructor(a, b, c) {
    this.m = a;
    this.l = b;
    this.j = c;
    this.i = void 0;
    this.h = new Map();
    a.ga || (a.ga = {});
    a.ga = Object.assign({}, zl, a.ga);
  }
};
var Si = new Pi();
let Kl;
function Ll() {
  if (!Kl) {
    const a = Yi();
    Fl({ fetch: (b, c) => nb(fetch(new Request(b, c))) });
    Ri(a);
    Kl = a.resolve(Si);
  }
  return Kl;
}
function Ml(a) {
  return u(function* () {
    yield Nl();
    Qk(a);
  });
}
function Ol(a) {
  return u(function* () {
    yield Nl();
    Pk(a);
  });
}
function Pl(a) {
  u(function* () {
    var b = yield Ph();
    b
      ? yield Ji(a, b)
      : (yield Wk(),
        (b = { timestamp: a.timestamp }),
        (b = a.appShellAssetLoadReport
          ? {
              N: "appShellAssetLoadReport",
              payload: a.appShellAssetLoadReport,
              options: b,
            }
          : a.clientError
          ? { N: "clientError", payload: a.clientError, options: b }
          : void 0),
        b && Y(b.N, b.payload));
  });
}
function Nl() {
  return u(function* () {
    try {
      yield Wk();
    } catch (a) {}
  });
}
class ri extends pi {
  constructor(a) {
    super(arguments);
    this.csn = a;
  }
}
const zi = new qi(),
  Ql = [];
let Sl = Rl,
  Tl = 0;
const Ul = new Map(),
  Vl = new Map(),
  Wl = new Map();
function Xl(a, b, c, d, e, f, g, h) {
  const k = Sl(),
    l = new il({ veType: b, youtubeData: f, jspbYoutubeData: void 0 });
  f = Yl({}, k);
  e && (f.cttAuthInfo = e);
  var n = () => {
    Qk(new xf("newScreen() parent element does not have a VE - rootVe", b));
  };
  if (T("il_via_jspb")) {
    e = af(new bf().h(k), l.getAsJspb());
    c && c.visualElement
      ? ((n = new $e()),
        c.clientScreenNonce && J(n, 2, c.clientScreenNonce),
        Ze(n, c.visualElement.getAsJspb()),
        g && K(n, 4, mf[g]),
        H(e, $e, 5, n))
      : c && n();
    d && J(e, 3, d);
    if (T("expectation_logging") && h && h.screenCreatedLoggingExpectations) {
      c = new ze();
      h = h.screenCreatedLoggingExpectations.expectedParentScreens || [];
      for (var m of h)
        m.screenVeType && ((h = xe(new ye(), m.screenVeType)), Gd(c, 1, ye, h));
      H(e, ze, 7, c);
    }
    Gk(e, f, a);
  } else
    (m = { csn: k, pageVe: l.getAsJson() }),
      T("expectation_logging") &&
        h &&
        h.screenCreatedLoggingExpectations &&
        (m.screenCreatedLoggingExpectations =
          h.screenCreatedLoggingExpectations),
      c && c.visualElement
        ? ((m.implicitGesture = {
            parentCsn: c.clientScreenNonce,
            gesturedVe: c.visualElement.getAsJson(),
          }),
          g && (m.implicitGesture.gestureType = g))
        : c && n(),
      d && (m.cloneCsn = d),
      a ? uk("screenCreated", m, a, f) : Y("screenCreated", m, f);
  wi(zi, new ri(k));
  Ul.clear();
  Vl.clear();
  Wl.clear();
  return k;
}
function Zl(a, b, c, d, e = !1) {
  $l(a, b, c, [d], e);
}
function $l(a, b, c, d, e = !1) {
  const f = Yl({ cttAuthInfo: ul(b) || void 0 }, b);
  for (const h of d) {
    var g = h.getAsJson();
    (ta(g) || (!g.trackingParams && !g.veType)) &&
      Qk(Error("Child VE logged with no data"));
    if (T("no_client_ve_attach_unless_shown")) {
      const k = am(h, b);
      if (g.veType && !Vl.has(k) && !Wl.has(k) && !e) {
        Ul.set(k, [a, b, c, h]);
        return;
      }
      g = am(c, b);
      Ul.has(g) ? bm(c, b) : Wl.set(g, !0);
    }
  }
  d = d.filter((h) => {
    h.csn !== b ? ((h.csn = b), (h = !0)) : (h = !1);
    return h;
  });
  if (T("il_via_jspb")) {
    const h = cf(new df().h(b), c.getAsJspb());
    qa(d, (k) => {
      k = k.getAsJspb();
      Gd(h, 3, Ve, k);
    });
    "UNDEFINED_CSN" === b
      ? Z("visualElementAttached", f, void 0, h)
      : Hk(h, f, a);
  } else
    (c = {
      csn: b,
      parentVe: c.getAsJson(),
      childVes: qa(d, (h) => h.getAsJson()),
    }),
      "UNDEFINED_CSN" === b
        ? Z("visualElementAttached", f, c)
        : a
        ? uk("visualElementAttached", c, a, f)
        : Y("visualElementAttached", c, f);
}
function cm(a, b, c, d, e, f) {
  dm(a, b, c, e, f);
}
function dm(a, b, c, d, e) {
  em(c, b);
  const f = Yl({ cttAuthInfo: ul(b) || void 0 }, b);
  T("il_via_jspb")
    ? ((d = new gf().h(b)),
      (c = c.getAsJspb()),
      (c = H(d, Ve, 2, c)),
      (c = K(c, 4, 1)),
      e && H(c, Ye, 3, e),
      "UNDEFINED_CSN" === b
        ? Z("visualElementShown", f, void 0, c)
        : Ck(c, f, a))
    : ((e = { csn: b, ve: c.getAsJson(), eventType: 1 }),
      d && (e.clientData = d),
      "UNDEFINED_CSN" === b
        ? Z("visualElementShown", f, e)
        : a
        ? uk("visualElementShown", e, a, f)
        : Y("visualElementShown", e, f));
}
function fm(a, b, c, d = !1) {
  var e = d ? 16 : 8;
  const f = Yl({ cttAuthInfo: ul(b) || void 0, endOfSequence: d }, b);
  T("il_via_jspb")
    ? ((e = new ff().h(b)),
      (c = c.getAsJspb()),
      (c = H(e, Ve, 2, c)),
      K(c, 4, d ? 16 : 8),
      "UNDEFINED_CSN" === b
        ? Z("visualElementHidden", f, void 0, c)
        : Dk(c, f, a))
    : ((d = { csn: b, ve: c.getAsJson(), eventType: e }),
      "UNDEFINED_CSN" === b
        ? Z("visualElementHidden", f, d)
        : a
        ? uk("visualElementHidden", d, a, f)
        : Y("visualElementHidden", d, f));
}
function gm(a, b, c, d) {
  var e = void 0;
  em(c, b);
  e = e || "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";
  const f = Yl({ cttAuthInfo: ul(b) || void 0 }, b);
  T("il_via_jspb")
    ? ((d = new ef().h(b)),
      (c = c.getAsJspb()),
      (c = H(d, Ve, 2, c)),
      K(c, 4, mf[e]),
      "UNDEFINED_CSN" === b
        ? Z("visualElementGestured", f, void 0, c)
        : Ek(c, f, a))
    : ((e = { csn: b, ve: c.getAsJson(), gestureType: e }),
      d && (e.clientData = d),
      "UNDEFINED_CSN" === b
        ? Z("visualElementGestured", f, e)
        : a
        ? uk("visualElementGestured", e, a, f)
        : Y("visualElementGestured", e, f));
}
function Rl() {
  if (T("enable_web_96_bit_csn")) var a = Al();
  else if (T("enable_web_96_bit_csn_no_crypto")) a = Al(!1);
  else {
    a = Math.random() + "";
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    a = Hb(b, 3);
  }
  return a;
}
function Z(a, b, c, d) {
  Ql.push({ N: a, payload: c, I: d, options: b });
  Tl || (Tl = Ai());
}
function Bi(a) {
  if (Ql) {
    for (const b of Ql)
      if (T("il_via_jspb") && b.I)
        switch ((b.I.h(a.csn), b.N)) {
          case "screenCreated":
            Gk(b.I, b.options);
            break;
          case "visualElementAttached":
            Hk(b.I, b.options);
            break;
          case "visualElementShown":
            Ck(b.I, b.options);
            break;
          case "visualElementHidden":
            Dk(b.I, b.options);
            break;
          case "visualElementGestured":
            Ek(b.I, b.options);
            break;
          case "visualElementStateChanged":
            Fk(b.I, b.options);
            break;
          default:
            Qk(new xf("flushQueue unable to map payloadName to JSPB setter"));
        }
      else b.payload && ((b.payload.csn = a.csn), Y(b.N, b.payload, b.options));
    Ql.length = 0;
  }
  Tl = 0;
}
function am(a, b) {
  return `${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`;
}
function em(a, b) {
  if (T("no_client_ve_attach_unless_shown")) {
    var c = am(a, b);
    Vl.set(c, !0);
    bm(a, b);
  }
}
function bm(a, b) {
  a = am(a, b);
  Ul.has(a) &&
    ((b = Ul.get(a) || []), Zl(b[0], b[1], b[2], b[3], !0), Ul.delete(a));
}
function Yl(a, b) {
  T("log_sequence_info_on_gel_web") && (a.sequenceGroup = b);
  return a;
}
function hm() {
  im.h || (im.h = new im());
  return im.h;
}
function jm(a, b, c) {
  const d = rl(c);
  return null === a.csn || d === a.csn || c
    ? d
    : ((a = new xf("VisibilityLogger called before newScreen", {
        caller: b.tagName,
        previous_csn: a.csn,
        current_csn: d,
      })),
      Qk(a),
      null);
}
function km(a) {
  return (
    Math.floor(
      Number(
        (a.data &&
          a.data.loggingDirectives &&
          a.data.loggingDirectives.visibility &&
          a.data.loggingDirectives.visibility.types) ||
          ""
      )
    ) || 1
  );
}
var im = class {
  constructor() {
    this.m = new Set();
    this.l = new Set();
    this.h = new Map();
    this.client = void 0;
    this.csn = null;
  }
  j(a) {
    this.client = a;
  }
  s() {
    this.clear();
    this.csn = rl();
  }
  clear() {
    this.m.clear();
    this.l.clear();
    this.h.clear();
    this.csn = null;
  }
  G(a, b, c) {
    b = this.i(a);
    var d = a.visualElement ? a.visualElement : b,
      e = this.m.has(d),
      f = this.h.get(d);
    this.m.add(d);
    this.h.set(d, !0);
    a.impressionLog && !e && a.impressionLog();
    if (b || a.visualElement)
      if ((c = jm(this, a, c))) {
        var g = !(!a.data || !a.data.loggingDirectives);
        if (km(a) || g) {
          d = a.visualElement ? a.visualElement : hl(b);
          var h = a.interactionLoggingClientData;
          b = a.interactionLoggingClientDataJspbType;
          g || e
            ? km(a) & 4
              ? f ||
                ((a = this.client),
                em(d, c),
                (e = Yl({ cttAuthInfo: ul(c) || void 0 }, c)),
                T("il_via_jspb")
                  ? ((f = new gf().h(c)),
                    (d = d.getAsJspb()),
                    (f = H(f, Ve, 2, d)),
                    (f = K(f, 4, 4)),
                    b && H(f, Ye, 3, b),
                    "UNDEFINED_CSN" === c
                      ? Z("visualElementShown", e, void 0, f)
                      : Ck(f, e, a))
                  : ((b = { csn: c, ve: d.getAsJson(), eventType: 4 }),
                    h && (b.clientData = h),
                    "UNDEFINED_CSN" === c
                      ? Z("visualElementShown", e, b)
                      : a
                      ? uk("visualElementShown", b, a, e)
                      : Y("visualElementShown", b, e)))
              : km(a) & 1 && !e && dm(this.client, c, d, h, b)
            : dm(this.client, c, d, h, b);
        }
      }
  }
  A(a, b, c) {
    var d = this.i(a),
      e = a.visualElement ? a.visualElement : d;
    b = this.l.has(e);
    const f = this.h.get(e);
    this.l.add(e);
    this.h.set(e, !1);
    if (!1 === f) return !0;
    if (!d && !a.visualElement) return !1;
    c = jm(this, a, c);
    if (!c || (!km(a) && a.data && a.data.loggingDirectives)) return !1;
    d = a.visualElement ? a.visualElement : hl(d);
    km(a) & 8
      ? fm(this.client, c, d)
      : km(a) & 2 &&
        !b &&
        ((a = this.client),
        (b = Yl({ cttAuthInfo: ul(c) || void 0 }, c)),
        T("il_via_jspb")
          ? ((e = new ff().h(c)),
            (d = d.getAsJspb()),
            (d = H(e, Ve, 2, d)),
            (d = K(d, 4, 2)),
            "UNDEFINED_CSN" === c
              ? Z("visualElementHidden", b, void 0, d)
              : Dk(d, b, a))
          : ((d = { csn: c, ve: d.getAsJson(), eventType: 2 }),
            "UNDEFINED_CSN" === c
              ? Z("visualElementHidden", b, d)
              : a
              ? uk("visualElementHidden", d, a, b)
              : Y("visualElementHidden", d, b)));
    return !0;
  }
  i(a) {
    let b;
    const c = a.data || (null == (b = a.props) ? void 0 : b.data);
    let d, e;
    if (
      T("il_use_view_model_logging_context") &&
      (null == c
        ? 0
        : null == (d = c.context)
        ? 0
        : null == (e = d.loggingContext)
        ? 0
        : e.loggingDirectives)
    )
      return c.context.loggingContext.loggingDirectives.trackingParams || "";
    let f, g;
    if (
      T("enable_loggingcontext_trackingparams") &&
      (null == c
        ? 0
        : null == (f = c.rendererContext)
        ? 0
        : null == (g = f.loggingContext)
        ? 0
        : g.loggingDirectives)
    )
      return (
        c.rendererContext.loggingContext.loggingDirectives.trackingParams || ""
      );
    if (null == c ? 0 : c.loggingDirectives)
      return c.loggingDirectives.trackingParams || "";
    let h;
    return (null == (h = a.veContainer) ? 0 : h.trackingParams)
      ? a.veContainer.trackingParams
      : (null == c ? void 0 : c.trackingParams) || "";
  }
};
function lm() {
  mm.h || (mm.h = new mm());
}
function nm(a) {
  lm();
  Qf(hm().G).bind(hm())(a, void 0, 8);
}
function om(a) {
  lm();
  Qf(hm().A).bind(hm())(a, void 0, 8);
}
var mm = class {
  j(a) {
    Qf(hm().j).bind(hm())(a);
  }
  clear() {
    Qf(hm().clear).bind(hm())();
  }
};
function pm() {
  qm.h || (qm.h = new qm());
  return qm.h;
}
function rm(a, b, c = {}) {
  a.i.add(c.layer || 0);
  a.m = () => {
    sm(a, b, c);
    const d = ol(c.layer);
    if (d) {
      for (const e of a.G) tm(a, e[0], e[1] || d, c.layer);
      for (const e of a.S) um(a, e[0], e[1]);
    }
  };
  rl(c.layer) || a.m();
  if (c.na) for (const d of c.na) vm(a, d, c.layer);
  else Pk(Error("Delayed screen needs a data promise."));
}
function sm(a, b, c = {}) {
  var d = void 0;
  c.layer || (c.layer = 0);
  d = void 0 !== c.Ra ? c.Ra : c.layer;
  const e = rl(d);
  d = ol(d);
  let f;
  d &&
    (void 0 !== c.parentCsn
      ? (f = { clientScreenNonce: c.parentCsn, visualElement: d })
      : e &&
        "UNDEFINED_CSN" !== e &&
        (f = { clientScreenNonce: e, visualElement: d }));
  let g;
  const h = S("EVENT_ID");
  "UNDEFINED_CSN" === e &&
    h &&
    (g = { servletData: { serializedServletEventId: h } });
  T("combine_ve_grafts") && e && wm(a, e);
  T("no_client_ve_attach_unless_shown") && d && e && bm(d, e);
  let k;
  try {
    k = Xl(a.client, b, f, c.ma, c.cttAuthInfo, g, c.ec, c.loggingExpectations);
  } catch (m) {
    Uk(m, { pc: b, rootVe: d, kc: void 0, dc: e, jc: f, ma: c.ma });
    Pk(m);
    return;
  }
  vl(k, b, c.layer, c.cttAuthInfo);
  e && "UNDEFINED_CSN" !== e && d && !sl(e) && fm(a.client, e, d, !0);
  a.h[a.h.length - 1] &&
    !a.h[a.h.length - 1].csn &&
    (a.h[a.h.length - 1].csn = k || "");
  lm();
  Qf(hm().s).bind(hm())();
  const l = ol(c.layer);
  e &&
    "UNDEFINED_CSN" !== e &&
    l &&
    (T("web_mark_root_visible") || T("music_web_mark_root_visible")) &&
    Qf(cm)(void 0, k, l, void 0, void 0, void 0);
  a.i.delete(c.layer || 0);
  a.m = void 0;
  let n;
  null == (n = a.za.get(c.layer)) ||
    n.forEach((m, r) => {
      m ? tm(a, r, m, c.layer) : l && tm(a, r, l, c.layer);
    });
  xm(a);
}
function ym(a) {
  var b = 28631,
    c = { layer: 8 };
  Qf(() => {
    [28631].includes(b) ||
      (Qk(new xf("createClientScreen() called with a non-page VE", b)),
      (b = 83769));
    c.isHistoryNavigation || a.h.push({ rootVe: b, key: c.key || "" });
    a.G = [];
    a.S = [];
    c.na ? rm(a, b, c) : sm(a, b, c);
  })();
}
function vm(a, b, c = 0) {
  Qf(() => {
    b.then((d) => {
      a.i.has(c) && a.m && a.m();
      const e = rl(c),
        f = ol(c);
      if (e && f) {
        var g;
        (null == d ? 0 : null == (g = d.response) ? 0 : g.trackingParams) &&
          Zl(a.client, e, f, hl(d.response.trackingParams));
        var h;
        (null == d
          ? 0
          : null == (h = d.playerResponse)
          ? 0
          : h.trackingParams) &&
          Zl(a.client, e, f, hl(d.playerResponse.trackingParams));
      }
    });
  })();
}
function tm(a, b, c, d = 0) {
  Qf(() => {
    if (a.i.has(d)) return a.G.push([b, c]), !0;
    const e = rl(d),
      f = c || ol(d);
    if (e && f) {
      if (T("combine_ve_grafts")) {
        const g = a.l.get(f.toString());
        g ? g.push(b) : (a.A.set(f.toString(), f), a.l.set(f.toString(), [b]));
        a.ja ||
          (a.ja = Eg(() => {
            wm(a, e);
          }, 1200));
      } else Zl(a.client, e, f, b);
      return !0;
    }
    return !1;
  })();
}
function zm(a, b) {
  return Qf(() => {
    const c = hl(b);
    tm(a, c, void 0, 8);
    return c;
  })();
}
function wm(a, b) {
  if (void 0 === b) {
    const c = ql();
    for (let d = 0; d < c.length; d++) void 0 !== c[d] && wm(a, c[d]);
  } else
    a.l.forEach((c, d) => {
      (d = a.A.get(d)) && $l(a.client, b, d, c);
    }),
      a.l.clear(),
      a.A.clear(),
      (a.ja = void 0);
}
function Am(a, b, c = 0) {
  (c = rl(c)) && gm(a.client, c, b);
}
function Bm(a, b, c, d = 0) {
  if (!b) return !1;
  d = rl(d);
  if (!d) return !1;
  gm(a.client, d, hl(b), c);
  return !0;
}
function Cm(a, b) {
  const c = b.getScreenLayer && b.getScreenLayer();
  b.visualElement
    ? Am(a, b.visualElement, c)
    : (lm(), (b = Qf(hm().i).bind(hm())(b)), Bm(a, b, void 0, c));
}
function um(a, b, c, d = 0) {
  const e = rl(d);
  d = b || ol(d);
  e &&
    d &&
    ((a = a.client),
    (b = Yl({ cttAuthInfo: ul(e) || void 0 }, e)),
    T("il_via_jspb")
      ? ((c = new hf()),
        c.h(e),
        (d = d.getAsJspb()),
        H(c, Ve, 2, d),
        "UNDEFINED_CSN" === e
          ? Z("visualElementStateChanged", b, void 0, c)
          : Fk(c, b, a))
      : ((c = { csn: e, ve: d.getAsJson(), clientData: c }),
        "UNDEFINED_CSN" === e
          ? Z("visualElementStateChanged", b, c)
          : a
          ? uk("visualElementStateChanged", c, a, b)
          : Y("visualElementStateChanged", c, b)));
}
function xm(a) {
  for (var b = 0; b < a.s.length; b++) {
    var c = a.s[b];
    try {
      c();
    } catch (d) {
      Pk(d);
    }
  }
  a.s.length = 0;
  for (b = 0; b < a.ia.length; b++) {
    c = a.ia[b];
    try {
      c();
    } catch (d) {
      Pk(d);
    }
  }
}
var qm = class {
  constructor() {
    this.G = [];
    this.S = [];
    this.h = [];
    this.s = [];
    this.ia = [];
    this.l = new Map();
    this.A = new Map();
    this.i = new Set();
    this.za = new Map();
  }
  j(a) {
    this.client = a;
  }
  clickCommand(a, b, c = 0) {
    return Bm(this, a.clickTrackingParams, b, c);
  }
  stateChanged(a, b, c = 0) {
    this.visualElementStateChanged(hl(a), b, c);
  }
  visualElementStateChanged(a, b, c = 0) {
    0 === c && this.i.has(c) ? this.S.push([a, b]) : um(this, a, b, c);
  }
};
const Dm = { granted: "GRANTED", denied: "DENIED", unknown: "UNKNOWN" },
  Em = RegExp("^(?:[a-z]+:)?//", "i");
function Fm(a) {
  var b = a.data;
  a = b.type;
  b = b.data;
  "notifications_register" === a
    ? (P("IDToken", b), Gm())
    : "notifications_check_registration" === a && Hm(b);
}
function Im() {
  return self.clients
    .matchAll({ type: "window", includeUncontrolled: !0 })
    .then((a) => {
      if (a)
        for (const b of a)
          b.postMessage({ type: "update_unseen_notifications_count_signal" });
    });
}
function Jm(a) {
  const b = [];
  a.forEach((c) => {
    b.push({ key: c.key, value: c.value });
  });
  return b;
}
function Km(a) {
  return u(function* () {
    const b = Jm(a.payload.chrome.extraUrlParams),
      c = {
        recipientId: a.recipientId,
        endpoint: a.payload.chrome.endpoint,
        extraUrlParams: b,
      },
      d = Ff(sf);
    return Lm().then((e) =>
      Jl(e, c, d).then((f) => {
        f.json()
          .then((g) =>
            g && g.endpointUrl ? Mm(a, g.endpointUrl) : Promise.resolve()
          )
          .catch((g) => {
            Ol(g);
            Promise.reject(g);
          });
      })
    );
  });
}
function Nm(a, b) {
  var c = rl(8);
  if (null == c || !b) return a;
  a = Em.test(a) ? new URL(a) : new URL(a, self.registration.scope);
  a.searchParams.set("parentCsn", c);
  a.searchParams.set("parentTrackingParams", b);
  return a.toString();
}
function Mm(a, b) {
  a.deviceId && P("DeviceId", a.deviceId);
  a.timestampSec && P("TimestampLowerBound", a.timestampSec);
  const c = a.payload.chrome,
    d = pm();
  ym(d);
  var e;
  const f = null == (e = c.postedEndpoint) ? void 0 : e.clickTrackingParams;
  e = c.title;
  const g = {
    body: c.body,
    icon: c.iconUrl,
    data: {
      nav: Nm(b, f),
      id: c.notificationId,
      attributionTag: c.attributionTag,
      clickEndpoint: c.clickEndpoint,
      postedEndpoint: c.postedEndpoint,
      clickTrackingParams: f,
      isDismissed: !0,
    },
    tag: c.notificationTag || c.title + c.body + c.iconUrl,
    requireInteraction: !0,
  };
  return self.registration
    .showNotification(e, g)
    .then(() => {
      var h;
      (null == (h = g.data) ? 0 : h.postedEndpoint) &&
        Om(g.data.postedEndpoint);
      let k;
      if (null == (k = g.data) ? 0 : k.clickTrackingParams)
        (h = {
          screenLayer: 8,
          visualElement: zm(d, g.data.clickTrackingParams),
        }),
          nm(h);
      Pm(a.displayCap);
    })
    .catch(() => {});
}
function Om(a) {
  if (!yj(a, rf)) return Promise.reject();
  const b = {
      serializedRecordNotificationInteractionsRequest: yj(a, rf)
        .serializedInteractionsRequest,
    },
    c = Ff(tf);
  return Lm()
    .then((d) => Jl(d, b, c))
    .then((d) => d);
}
function Pm(a) {
  -1 !== a &&
    self.registration.getNotifications().then((b) => {
      for (let d = 0; d < b.length - a; d++) {
        b[d].data.isDismissed = !1;
        b[d].close();
        let e;
        if (null == (e = b[d].data) ? 0 : e.clickTrackingParams) {
          let f;
          var c = hl(null == (f = b[d].data) ? void 0 : f.clickTrackingParams);
          const g = { screenLayer: 8, visualElement: c },
            h = jl(82046),
            k = pm();
          tm(k, h, c, 8);
          c = { screenLayer: 8, visualElement: h };
          nm(c);
          Cm(k, c);
          om(g);
        }
      }
    });
}
function Hm(a) {
  const b = [Qm(a), Bf("RegistrationTimestamp").then(Rm), Sm(), Tm(), Um()];
  Promise.all(b).catch(() => {
    P("IDToken", a);
    Gm();
    return Promise.resolve();
  });
}
function Rm(a) {
  return 9e7 >= Date.now() - (a || 0) ? Promise.resolve() : Promise.reject();
}
function Qm(a) {
  return Bf("IDToken").then((b) =>
    a === b ? Promise.resolve() : Promise.reject()
  );
}
function Sm() {
  return Bf("Permission").then((a) =>
    Notification.permission === a ? Promise.resolve() : Promise.reject()
  );
}
function Tm() {
  return Bf("Endpoint").then((a) =>
    Vm().then((b) => (a === b ? Promise.resolve() : Promise.reject()))
  );
}
function Um() {
  return Bf("application_server_key").then((a) =>
    Wm().then((b) => (a === b ? Promise.resolve() : Promise.reject()))
  );
}
function Xm() {
  var a = Notification.permission;
  if (Dm[a]) return Dm[a];
}
function Gm() {
  P("RegistrationTimestamp", 0);
  Promise.all([Vm(), Ym(), Zm(), Wm()])
    .then(([a, b, c, d]) => {
      b = b ? vf(b) : null;
      c = c ? vf(c) : null;
      d = d ? Hb(new Uint8Array(d), 4) : null;
      $m(a, b, c, d);
    })
    .catch(() => {
      $m();
    });
}
function $m(a = null, b = null, c = null, d = null) {
  Af().then((e) => {
    e &&
      (P("Endpoint", a),
      P("P256dhKey", b),
      P("AuthKey", c),
      P("application_server_key", d),
      P("Permission", Notification.permission),
      Promise.all([Bf("DeviceId"), Bf("NotificationsDisabled")]).then(
        ([f, g]) => {
          if (null != f) var h = f;
          else {
            f = [];
            var k;
            h = h || te.length;
            for (k = 0; 256 > k; k++) f[k] = te[0 | (Math.random() * h)];
            h = f.join("");
          }
          an(
            h,
            null != a ? a : void 0,
            null != b ? b : void 0,
            null != c ? c : void 0,
            null != d ? d : void 0,
            null != g ? g : void 0
          );
        }
      ));
  });
}
function an(a, b, c, d, e, f) {
  u(function* () {
    const g = {
        notificationRegistration: {
          chromeRegistration: {
            deviceId: a,
            pushParams: {
              applicationServerKey: e,
              authKey: d,
              p256dhKey: c,
              browserEndpoint: b,
            },
            notificationsDisabledInApp: f,
            permission: Xm(),
          },
        },
      },
      h = Ff(uf);
    return Lm().then((k) =>
      Jl(k, g, h).then(
        () => {
          P("DeviceId", a);
          P("RegistrationTimestamp", Date.now());
          P("TimestampLowerBound", Date.now());
        },
        (l) => {
          Ml(l);
        }
      )
    );
  });
}
function Vm() {
  return self.registration.pushManager
    .getSubscription()
    .then((a) => (a ? Promise.resolve(a.endpoint) : Promise.resolve(null)));
}
function Ym() {
  return self.registration.pushManager
    .getSubscription()
    .then((a) =>
      a && a.getKey
        ? Promise.resolve(a.getKey("p256dh"))
        : Promise.resolve(null)
    );
}
function Zm() {
  return self.registration.pushManager
    .getSubscription()
    .then((a) =>
      a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null)
    );
}
function Wm() {
  return self.registration.pushManager
    .getSubscription()
    .then((a) =>
      a
        ? Promise.resolve(a.options.applicationServerKey)
        : Promise.resolve(null)
    );
}
function Lm() {
  return u(function* () {
    try {
      return yield Wk(!0), Ll();
    } catch (a) {
      return yield Ml(a), Promise.reject(a);
    }
  });
}
let bn = self.location.origin + "/";
function Yk(a) {
  let b =
    "undefined" !== typeof ServiceWorkerGlobalScope &&
    self instanceof ServiceWorkerGlobalScope
      ? me.registration.scope
      : bn;
  b.endsWith("/") && (b = b.slice(0, -1));
  return b + a;
}
let cn = void 0;
function dn(a) {
  return u(function* () {
    cn || (cn = yield a.open("yt-appshell-assets"));
    return cn;
  });
}
function en(a, b) {
  return u(function* () {
    const c = yield dn(a),
      d = b.map((e) => fn(c, e));
    return Promise.all(d);
  });
}
function gn(a, b) {
  return u(function* () {
    let c;
    try {
      c = yield a.match(b, { cacheName: "yt-appshell-assets" });
    } catch (d) {}
    return c;
  });
}
function hn(a, b) {
  return u(function* () {
    const c = yield dn(a),
      d = (yield c.keys())
        .filter((e) => !b.includes(e.url))
        .map((e) => c.delete(e));
    return Promise.all(d);
  });
}
function jn(a, b, c) {
  return u(function* () {
    yield (yield dn(a)).put(b, c);
  });
}
function kn(a, b) {
  u(function* () {
    yield (yield dn(a)).delete(b);
  });
}
function fn(a, b) {
  return u(function* () {
    return (yield a.match(b)) ? Promise.resolve() : a.add(b);
  });
}
var ln = Yh("yt-serviceworker-metadata", {
  M: { auth: { L: 1 }, ["resource-manifest-assets"]: { L: 2 } },
  Y: !0,
  upgrade(a, b) {
    b(1) && oh(a, "resource-manifest-assets");
    b(2) && oh(a, "auth");
  },
  version: 2,
});
let mn = null;
function nn(a) {
  return Fh(ln(), a);
}
function on() {
  return u(function* () {
    const a = yield Ph();
    if (a) return pn.h || (pn.h = new pn(a)), pn.h;
  });
}
function qn(a, b) {
  return u(function* () {
    yield X(
      yield nn(a.token),
      ["resource-manifest-assets"],
      "readwrite",
      (c) => {
        const d = c.objectStore("resource-manifest-assets"),
          e = Date.now();
        return V(d.h.put(b, e)).then(() => {
          mn = e;
          let f = !0;
          return th(
            d,
            { query: IDBKeyRange.bound(0, Date.now()), direction: "prev" },
            (g) =>
              f
                ? ((f = !1), g.advance(5))
                : d.delete(g.getKey()).then(() => g.continue())
          );
        });
      }
    );
  });
}
function rn(a, b) {
  return u(function* () {
    let c = !1,
      d = 0;
    yield X(yield nn(a.token), ["resource-manifest-assets"], "readonly", (e) =>
      th(
        e.objectStore("resource-manifest-assets"),
        { query: IDBKeyRange.bound(0, Date.now()), direction: "prev" },
        (f) => {
          if (f.J().includes(b)) c = !0;
          else return (d += 1), f.continue();
        }
      )
    );
    return c ? d : -1;
  });
}
function sn(a) {
  return u(function* () {
    mn ||
      (yield X(
        yield nn(a.token),
        ["resource-manifest-assets"],
        "readonly",
        (b) =>
          th(
            b.objectStore("resource-manifest-assets"),
            { query: IDBKeyRange.bound(0, Date.now()), direction: "prev" },
            (c) => {
              mn = c.getKey();
            }
          )
      ));
    return mn;
  });
}
var pn = class {
  constructor(a) {
    this.token = a;
  }
};
function tn() {
  return u(function* () {
    const a = yield Ph();
    if (a) return un.h || (un.h = new un(a)), un.h;
  });
}
function vn(a, b) {
  return u(function* () {
    yield qh(yield nn(a.token), "auth", b, "shell_identifier_key");
  });
}
function wn(a) {
  return u(function* () {
    return (
      (yield (yield nn(a.token)).get("auth", "shell_identifier_key")) || ""
    );
  });
}
function xn(a) {
  return u(function* () {
    yield (yield nn(a.token)).clear("auth");
  });
}
var un = class {
  constructor(a) {
    this.token = a;
  }
};
function yn() {
  u(function* () {
    const a = yield tn();
    a && (yield xn(a));
  });
}
var Cd = class extends L {
    constructor(a) {
      super(a);
    }
    hasUrl() {
      return null != Hd(this, 1);
    }
  },
  zn = [0, ae];
var An = class extends L {
  constructor(a) {
    super(a);
  }
};
An.v = [1];
var Bn = (function (a, b) {
  return (c, d) => {
    a: {
      if (wc.length) {
        const f = wc.pop();
        sc(f, d);
        f.h.init(c, void 0, void 0, d);
        c = f;
      } else c = new vc(c, d);
      try {
        const f = new a(),
          g = f.o;
        Nd(b)(g, c);
        Qc && delete g[Qc];
        var e = f;
        break a;
      } finally {
        c.h.clear(), (c.l = -1), (c.i = -1), 100 > wc.length && wc.push(c);
      }
      e = void 0;
    }
    return e;
  };
})(An, [0, be, zn]);
function Cn(a) {
  return u(function* () {
    const b = a.headers.get("X-Resource-Manifest");
    return b
      ? Promise.resolve(Dn(b))
      : Promise.reject(Error("No resource manifest header"));
  });
}
function Dn(a) {
  return Bd(Bn(decodeURIComponent(a))).reduce((b, c) => {
    (c = Id(c, 1)) && b.push(c);
    return b;
  }, []);
}
function En(a) {
  return u(function* () {
    const b = yield Wk();
    if (b && null != Hd(b, 3)) {
      var c = yield tn();
      c && ((c = yield wn(c)), Hd(b, 3) !== c && (kn(a.caches, a.h), yn()));
    }
  });
}
function Fn(a) {
  return u(function* () {
    let b, c;
    try {
      (c = yield Gn(a.i)), (b = yield Cn(c)), yield en(a.caches, b);
    } catch (d) {
      return Promise.reject(d);
    }
    try {
      yield Hn(), yield jn(a.caches, a.h, c);
    } catch (d) {
      return Promise.reject(d);
    }
    if (b)
      try {
        yield In(a, b, a.h);
      } catch (d) {}
    return Promise.resolve();
  });
}
function Jn(a) {
  return u(function* () {
    yield En(a);
    return Fn(a);
  });
}
function Gn(a) {
  return u(function* () {
    try {
      return yield v.fetch(new Request(a));
    } catch (b) {
      return Promise.reject(b);
    }
  });
}
function Hn() {
  return u(function* () {
    var a = yield Wk();
    let b;
    a && null != Hd(a, 3) && (b = Id(a, 3));
    return b
      ? (a = yield tn())
        ? Promise.resolve(vn(a, b))
        : Promise.reject(Error("Could not get AuthMonitor instance"))
      : Promise.reject(Error("Could not get datasync ID"));
  });
}
function In(a, b, c) {
  return u(function* () {
    const d = yield on();
    if (d)
      try {
        yield qn(d, b);
      } catch (e) {
        yield Ml(e);
      }
    b.push(c);
    try {
      yield hn(a.caches, b);
    } catch (e) {
      yield Ml(e);
    }
    return Promise.resolve();
  });
}
function Kn(a, b) {
  return u(function* () {
    return gn(a.caches, b);
  });
}
function Ln(a) {
  return u(function* () {
    return gn(a.caches, a.h);
  });
}
var Mn = class {
  constructor() {
    var a = self.caches;
    let b = Yk("/app_shell");
    T("service_worker_forward_exp_params") && (b += self.location.search);
    var c = Yk("/app_shell_home");
    this.caches = a;
    this.i = b;
    this.h = c;
  }
};
var Nn = class {
  constructor() {
    const a = this;
    this.stream = new ReadableStream({
      start(b) {
        a.close = () => void b.close();
        a.h = (c) => {
          const d = c.getReader();
          return d.read().then(function h({ done: f, value: g }) {
            if (f) return Promise.resolve();
            b.enqueue(g);
            return d.read().then(h);
          });
        };
        a.i = () => {
          const c = new TextEncoder().encode(
            "<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>"
          );
          b.enqueue(c);
        };
      },
    });
  }
};
function On(a, b) {
  return u(function* () {
    const c = b.request,
      d = yield Kn(a.h, c.url);
    if (d)
      return (
        Pl({
          appShellAssetLoadReport: { assetPath: c.url, cacheHit: !0 },
          timestamp: W(),
        }),
        d
      );
    Pn(c);
    return Qn(b);
  });
}
function Rn(a, b) {
  return u(function* () {
    const c = yield Sn(b);
    if (
      c.response &&
      (c.response.ok ||
        "opaqueredirect" === c.response.type ||
        429 === c.response.status ||
        303 === c.response.status ||
        (300 <= c.response.status && 400 > c.response.status))
    )
      return c.response;
    const d = yield Ln(a.h);
    if (d) return Tn(a), Un(d, b);
    Vn(a);
    return c.response ? c.response : Promise.reject(c.error);
  });
}
function Wn(a, b) {
  b = new URL(b);
  if (!a.config.ka.includes(b.pathname)) return !1;
  if (!b.search) return !0;
  b = new URLSearchParams(b.search);
  for (const c of a.config.Ca)
    if (((a = b.get(c.key)), void 0 === c.value || a === c.value))
      if ((b.delete(c.key), !b.toString())) return !0;
  return !1;
}
function Xn(a, b) {
  return u(function* () {
    const c = yield Ln(a.h);
    if (!c) return Vn(a), Qn(b);
    Tn(a);
    var d;
    a: {
      if (
        c.headers &&
        (d = c.headers.get("date")) &&
        ((d = Date.parse(d)), !isNaN(d))
      ) {
        d = Math.round(W() - d);
        break a;
      }
      d = -1;
    }
    if (!(-1 < d && 7 <= d / 864e5)) return Un(c, b);
    d = yield Sn(b);
    return d.response && d.response.ok ? d.response : Un(c, b);
  });
}
function Qn(a) {
  return Promise.resolve(a.preloadResponse).then((b) =>
    b && !Yn(b) ? b : v.fetch(a.request)
  );
}
function Pn(a) {
  const b = { assetPath: a.url, cacheHit: !1 };
  on().then((c) => {
    if (c) {
      var d = sn(c).then((e) => {
        e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1e3)));
      });
      c = rn(c, a.url).then((e) => {
        b.appBundleVersionDiffCount = e;
      });
      Promise.all([d, c])
        .catch((e) => {
          Ml(e);
        })
        .finally(() => {
          Pl({ appShellAssetLoadReport: b, timestamp: W() });
        });
    } else Pl({ appShellAssetLoadReport: b, timestamp: W() });
  });
}
function Tn(a) {
  Pl({
    appShellAssetLoadReport: { assetPath: a.h.h, cacheHit: !0 },
    timestamp: W(),
  });
}
function Vn(a) {
  Pl({
    appShellAssetLoadReport: { assetPath: a.h.h, cacheHit: !1 },
    timestamp: W(),
  });
}
function Un(a, b) {
  if (!T("sw_nav_preload_pbj")) return a;
  const c = new Nn(),
    d = c.h(a.body);
  Promise.resolve(b.preloadResponse)
    .then((e) => {
      if (!e || !Yn(e)) throw Error("no pbj preload response available");
      d.then(() => c.h(e.body)).then(() => void c.close());
    })
    .catch(() => {
      d.then(() => {
        c.i();
        c.close();
      });
    });
  return new Response(c.stream, {
    status: a.status,
    statusText: a.statusText,
    headers: a.headers,
  });
}
function Sn(a) {
  return u(function* () {
    try {
      return { response: yield Qn(a) };
    } catch (b) {
      return { error: b };
    }
  });
}
function Yn(a) {
  return "pbj" === a.headers.get("x-navigation-preload-response-type");
}
var ho = class {
  constructor() {
    var a = Zn;
    var b = {
      Ga: $n,
      Ta: ao([bo, /\/signin/, /\/logout/]),
      ka: ["/", "/feed/downloads"],
      Ca: co([{ key: "feature", value: "ytca" }]),
      Ba: eo(T("kevlar_sw_app_wide_fallback") ? fo : go),
    };
    this.h = a;
    this.config = b;
  }
};
const io = /^\/$/,
  go = [io, /^\/feed\/downloads$/],
  fo = [
    io,
    /^\/feed\/\w*/,
    /^\/results$/,
    /^\/playlist$/,
    /^\/watch$/,
    /^\/channel\/\w*/,
  ];
function eo(a) {
  return new RegExp(a.map((b) => b.source).join("|"));
}
const jo = /^https:\/\/([\w-]*\.)*youtube\.com.*/;
function ao(a) {
  a = eo(a);
  return new RegExp(`${jo.source}(${a.source})`);
}
const ko = eo([
    /\.css$/,
    /\.js$/,
    /\.ico$/,
    /\/ytmweb\/_\/js\//,
    /\/ytmweb\/_\/ss\//,
    /\/kabuki\/_\/js\//,
    /\/kabuki\/_\/ss\//,
    /\/ytmainappweb\/_\/ss\//,
  ]),
  $n = new RegExp(`${jo.source}(${ko.source})`),
  bo = /purge_shell=1/;
function co(a = []) {
  const b = [];
  for (const c of gg) b.push({ key: c });
  for (const c of a) b.push(c);
  return b;
}
ao([bo]);
co();
var mo = class {
  constructor() {
    var a = Zn,
      b = lo,
      c = self;
    if (v.URLPattern) {
      var d = [];
      T("service_worker_static_routing_exclude_embed") &&
        d.push({
          condition: { urlPattern: new URLPattern({ pathname: "/embed*" }) },
          source: "network",
        });
      T("service_worker_static_routing_exclude_innertube") &&
        d.push({
          condition: {
            urlPattern: new URLPattern({ pathname: "/youtubei/v1/*" }),
          },
          source: "network",
        });
    } else d = [];
    this.h = c;
    this.i = a;
    this.s = b;
    this.S = wf;
    this.j = d;
  }
  init() {
    this.h.oninstall = this.A.bind(this);
    this.h.onactivate = this.l.bind(this);
    this.h.onfetch = this.m.bind(this);
    this.h.onmessage = this.G.bind(this);
  }
  A(a) {
    this.h.skipWaiting();
    if (
      T("service_worker_static_routing_registration") &&
      0 < this.j.length &&
      a.registerRouter
    )
      try {
        a.registerRouter(this.j);
      } catch (c) {}
    const b = Jn(this.i).catch((c) => {
      Ml(c);
      return Promise.resolve();
    });
    a.waitUntil(b);
  }
  l(a) {
    const b = [this.h.clients.claim()],
      c = this.h.registration;
    c.navigationPreload &&
      (b.push(c.navigationPreload.enable()),
      T("sw_nav_preload_pbj") &&
        b.push(c.navigationPreload.setHeaderValue("pbj")));
    a.waitUntil(Promise.all(b));
  }
  m(a) {
    const b = this;
    return u(function* () {
      var c = b.s,
        d = !!b.h.registration.navigationPreload;
      const e = a.request;
      if (c.config.Ta.test(e.url))
        Xk.h &&
          (delete Xk.h.h,
          (v.__SAPISID = void 0),
          Q("VISITOR_DATA", void 0),
          Q("SESSION_INDEX", void 0),
          Q("DELEGATED_SESSION_ID", void 0),
          Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", void 0)),
          (d = a.respondWith),
          (c = c.h),
          kn(c.caches, c.h),
          yn(),
          (c = Qn(a)),
          d.call(a, c);
      else if (c.config.Ga.test(e.url)) a.respondWith(On(c, a));
      else if ("navigate" === e.mode) {
        const f = new URL(e.url),
          g = c.config.ka;
        (
          !T("sw_nav_request_network_first") && g.includes(f.pathname)
            ? 0
            : c.config.Ba.test(f.pathname)
        )
          ? a.respondWith(Rn(c, a))
          : Wn(c, e.url)
          ? a.respondWith(Xn(c, a))
          : d && a.respondWith(Qn(a));
      }
    });
  }
  G(a) {
    const b = a.data;
    this.S.includes(b.type)
      ? Fm(a)
      : "refresh_shell" === b.type &&
        Fn(this.i).catch((c) => {
          Ml(c);
        });
  }
};
function no() {
  let a = x("ytglobal.storage_");
  a || ((a = new oo()), y("ytglobal.storage_", a));
  return a;
}
var oo = class {
  estimate() {
    return u(function* () {
      const a = navigator;
      let b;
      if (null == (b = a.storage) ? 0 : b.estimate) return a.storage.estimate();
      let c;
      if (null == (c = a.webkitTemporaryStorage) ? 0 : c.queryUsageAndQuota)
        return po();
    });
  }
};
function po() {
  const a = navigator;
  return new Promise((b, c) => {
    let d;
    null != (d = a.webkitTemporaryStorage) && d.queryUsageAndQuota
      ? a.webkitTemporaryStorage.queryUsageAndQuota(
          (e, f) => {
            b({ usage: e, quota: f });
          },
          (e) => {
            c(e);
          }
        )
      : c(Error("webkitTemporaryStorage is not supported."));
  });
}
y("ytglobal.storageClass_", oo);
function qo(a, b) {
  no()
    .estimate()
    .then((c) => {
      c = Object.assign({}, b, {
        isSw: void 0 === self.document,
        isIframe: self !== self.top,
        deviceStorageUsageMbytes: ro(null == c ? void 0 : c.usage),
        deviceStorageQuotaMbytes: ro(null == c ? void 0 : c.quota),
      });
      a.h("idbQuotaExceeded", c);
    });
}
class so {
  constructor() {
    var a = to;
    this.handleError = uo;
    this.h = a;
    this.i = !1;
    void 0 === self.document ||
      self.addEventListener("beforeunload", () => {
        this.i = !0;
      });
    this.j =
      Math.random() <=
      bg("ytidb_transaction_ended_event_rate_limit_session", 0.2);
  }
  V(a, b) {
    switch (a) {
      case "IDB_DATA_CORRUPTED":
        T("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
        break;
      case "IDB_UNEXPECTEDLY_CLOSED":
        this.h("idbUnexpectedlyClosed", b);
        break;
      case "IS_SUPPORTED_COMPLETED":
        T("idb_is_supported_completed_killswitch") ||
          this.h("idbIsSupportedCompleted", b);
        break;
      case "QUOTA_EXCEEDED":
        qo(this, b);
        break;
      case "TRANSACTION_ENDED":
        this.j &&
          Math.random() <=
            bg("ytidb_transaction_ended_event_rate_limit_transaction", 0.1) &&
          this.h("idbTransactionEnded", b);
        break;
      case "TRANSACTION_UNEXPECTEDLY_ABORTED":
        (a = Object.assign({}, b, { hasWindowUnloaded: this.i })),
          this.h("idbTransactionAborted", a);
    }
  }
}
function ro(a) {
  return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576));
}
rg(og(), { F: [{ Qa: /Failed to fetch/, weight: 500 }], D: [] });
var { handleError: uo = Ok, V: to = Y } = {
  handleError: Ol,
  V: function (a, b) {
    return u(function* () {
      yield Nl();
      Y(a, b);
    });
  },
};
for (Ng = new so(); 0 < Mg.length; ) {
  const a = Mg.shift();
  switch (a.type) {
    case "ERROR":
      Ng.handleError(a.payload);
      break;
    case "EVENT":
      Ng.V(a.eventType, a.payload);
  }
}
Xk.h = new Xk();
self.onnotificationclick = function (a) {
  a.notification.close();
  const b = a.notification.data;
  b.isDismissed = !1;
  const c = self.clients.matchAll({ type: "window", includeUncontrolled: !0 });
  c.then((d) => {
    a: {
      var e = b.nav;
      for (const f of d)
        if (f.url === e) {
          f.focus();
          break a;
        }
      self.clients.openWindow(e);
    }
  });
  a.waitUntil(c);
  a.waitUntil(Om(b.clickEndpoint));
};
self.onnotificationclose = function (a) {
  var b = a.notification.data;
  if (null == b ? 0 : b.clickTrackingParams) {
    var c = hl(b.clickTrackingParams);
    a = { screenLayer: 8, visualElement: c };
    if (b.isDismissed) {
      const d = jl(74726);
      b = pm();
      tm(b, d, c, 8);
      c = { screenLayer: 8, visualElement: d };
      nm(c);
      Cm(b, c);
    }
    om(a);
  }
};
self.onpush = function (a) {
  a.waitUntil(
    Bf("NotificationsDisabled").then((b) => {
      if (b) return Promise.resolve();
      if (a.data && a.data.text().length)
        try {
          return Km(a.data.json());
        } catch (c) {
          return Promise.resolve(c.message);
        }
      return Promise.resolve();
    })
  );
  a.waitUntil(Im());
};
self.onpushsubscriptionchange = function () {
  Gm();
};
const Zn = new Mn(),
  lo = new ho();
new mo().init();
