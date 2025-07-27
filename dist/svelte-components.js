typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
let ye = !1, Nn = !1;
function On() {
  ye = !0;
}
On();
const Rn = 2, An = 8, Dn = 2, Ft = "[", qt = "[!", Ht = "]", me = {}, C = Symbol(), Bt = !1;
var Wt = Array.isArray, Ln = Array.prototype.indexOf, Pn = Array.from, Ie = Object.keys, be = Object.defineProperty, re = Object.getOwnPropertyDescriptor, Mn = Object.getOwnPropertyDescriptors, jn = Object.prototype, In = Array.prototype, zt = Object.getPrototypeOf, xt = Object.isExtensible;
function Fn(e) {
  return e();
}
function Fe(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function qn() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const I = 2, ft = 4, Ve = 8, De = 16, K = 32, ee = 64, Ut = 128, q = 256, qe = 512, O = 1024, H = 2048, te = 4096, J = 8192, de = 16384, ut = 32768, ct = 65536, kt = 1 << 17, Hn = 1 << 18, dt = 1 << 19, ht = 1 << 20, et = 1 << 21, vt = 1 << 22, se = 1 << 23, ie = Symbol("$state"), Vt = Symbol("legacy props"), _t = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), pt = 3, He = 8;
function Bn() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Wn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function zn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Un(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Vn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Yn(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Kn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Gn(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Jn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Zn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Qn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ye(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let N = !1;
function pe(e) {
  N = e;
}
let S;
function Y(e) {
  if (e === null)
    throw Ye(), me;
  return S = e;
}
function Ke() {
  return Y(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ee(S)
  );
}
function xe(e) {
  if (N) {
    if (/* @__PURE__ */ Ee(S) !== null)
      throw Ye(), me;
    S = e;
  }
}
function er() {
  for (var e = 0, t = S; ; ) {
    if (t.nodeType === He) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Ht) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Ft || n === qt) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ee(t)
    );
    t.remove(), t = r;
  }
}
function tr(e) {
  if (!e || e.nodeType !== He)
    throw Ye(), me;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Yt(e) {
  return e === this.v;
}
function nr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Kt(e) {
  return !nr(e, this.v);
}
let k = null;
function Be(e) {
  k = e;
}
function Xt(e, t = !1, n) {
  k = {
    p: k,
    c: null,
    e: null,
    s: e,
    x: null,
    l: ye && !t ? { s: null, u: null, $: [] } : null
  };
}
function Gt(e) {
  var t = (
    /** @type {ComponentContext} */
    k
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      dn(r);
  }
  return e !== void 0 && (t.x = e), k = t.p, e ?? /** @type {T} */
  {};
}
function Le() {
  return !ye || k !== null && k.l === null;
}
const rr = /* @__PURE__ */ new WeakMap();
function sr(e) {
  var t = g;
  if (t === null)
    return m.f |= se, e;
  if ((t.f & ut) === 0) {
    if ((t.f & Ut) === 0)
      throw !t.parent && e instanceof Error && Jt(e), e;
    t.b.error(e);
  } else
    gt(e, t);
}
function gt(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ut) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && Jt(e), e;
}
function Jt(e) {
  const t = rr.get(e);
  t && (be(e, "message", {
    value: t.message
  }), be(e, "stack", {
    value: t.stack
  }));
}
let Oe = [], tt = [];
function Zt() {
  var e = Oe;
  Oe = [], Fe(e);
}
function ir() {
  var e = tt;
  tt = [], Fe(e);
}
function mt(e) {
  Oe.length === 0 && queueMicrotask(Zt), Oe.push(e);
}
function lr() {
  Oe.length > 0 && Zt(), tt.length > 0 && ir();
}
function or() {
  for (var e = (
    /** @type {Effect} */
    g.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && Bn(), e;
}
// @__NO_SIDE_EFFECTS__
function wt(e) {
  var t = I | H, n = m !== null && (m.f & I) !== 0 ? (
    /** @type {Derived} */
    m
  ) : null;
  return g === null || n !== null && (n.f & q) !== 0 ? t |= q : g.f |= dt, {
    ctx: k,
    deps: null,
    effects: null,
    equals: Yt,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      C
    ),
    wv: 0,
    parent: n ?? g,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ar(e, t) {
  let n = (
    /** @type {Effect | null} */
    g
  );
  n === null && zn();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = $t(
    /** @type {V} */
    C
  ), l = null, a = !m;
  return $r(() => {
    try {
      var o = e();
    } catch (u) {
      o = Promise.reject(u);
    }
    var f = () => o;
    i = l?.then(f, f) ?? Promise.resolve(o), l = i;
    var c = (
      /** @type {Batch} */
      x
    ), h = r.pending;
    a && (r.update_pending_count(1), h || c.increment());
    const d = (u, p = void 0) => {
      l = null, h || c.activate(), p ? p !== _t && (s.f |= se, rt(s, p)) : ((s.f & se) !== 0 && (s.f ^= se), rt(s, u)), a && (r.update_pending_count(-1), h || c.decrement()), nn();
    };
    if (i.then(d, (u) => d(null, u || "unknown")), c)
      return () => {
        queueMicrotask(() => c.neuter());
      };
  }), new Promise((o) => {
    function f(c) {
      function h() {
        c === i ? o(s) : f(i);
      }
      c.then(h, h);
    }
    f(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  const t = /* @__PURE__ */ wt(e);
  return t.equals = Kt, t;
}
function en(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Z(
        /** @type {Effect} */
        t[n]
      );
  }
}
function fr(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & I) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function bt(e) {
  var t, n = g;
  Q(fr(e));
  try {
    en(e), t = En(e);
  } finally {
    Q(n);
  }
  return t;
}
function tn(e) {
  var t = bt(e);
  if (e.equals(t) || (e.v = t, e.wv = $n()), !he)
    if ($e !== null)
      $e.set(e, e.v);
    else {
      var n = (G || (e.f & q) !== 0) && e.deps !== null ? te : O;
      P(e, n);
    }
}
function ur(e, t, n) {
  const r = Le() ? wt : Qt;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var i = x, s = (
    /** @type {Effect} */
    g
  ), l = cr(), a = or();
  Promise.all(t.map((o) => /* @__PURE__ */ ar(o))).then((o) => {
    i?.activate(), l();
    try {
      n([...e.map(r), ...o]);
    } catch (f) {
      (s.f & de) === 0 && gt(f, s);
    }
    i?.deactivate(), nn();
  }).catch((o) => {
    a.error(o);
  });
}
function cr() {
  var e = g, t = m, n = k;
  return function() {
    Q(e), U(t), Be(n);
  };
}
function nn() {
  Q(null), U(null), Be(null);
}
const ke = /* @__PURE__ */ new Set();
let x = null, $e = null, Tt = /* @__PURE__ */ new Set(), We = [];
function rn() {
  const e = (
    /** @type {() => void} */
    We.shift()
  );
  We.length > 0 && queueMicrotask(rn), e();
}
let ae = [], Xe = null, nt = !1, Me = !1;
class fe {
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  #t = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #n = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #f = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #u = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #s = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #l = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #i = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #r = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #o = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #c = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #d = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    ae = [];
    var n = null;
    if (ke.size > 1) {
      n = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
      for (const [s, l] of this.current)
        n.set(s, { v: s.v, wv: s.wv }), s.v = l;
      for (const s of ke)
        if (s !== this)
          for (const [l, a] of s.#t)
            n.has(l) || (n.set(l, { v: l.v, wv: l.wv }), l.v = a);
    }
    for (const s of t)
      this.#v(s);
    if (this.#s.length === 0 && this.#n === 0) {
      this.#h();
      var r = this.#i, i = this.#r;
      this.#i = [], this.#r = [], this.#o = [], x = null, St(r), St(i), x === null ? x = this : ke.delete(this), this.#f?.resolve();
    } else
      this.#a(this.#i), this.#a(this.#r), this.#a(this.#o);
    if (n) {
      for (const [s, { v: l, wv: a }] of n)
        s.wv <= a && (s.v = l);
      $e = null;
    }
    for (const s of this.#s)
      Ne(s);
    for (const s of this.#l)
      Ne(s);
    this.#s = [], this.#l = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #v(t) {
    t.f ^= O;
    for (var n = t.first; n !== null; ) {
      var r = n.f, i = (r & (K | ee)) !== 0, s = i && (r & O) !== 0, l = s || (r & J) !== 0 || this.skipped_effects.has(n);
      if (!l && n.fn !== null) {
        if (i)
          n.f ^= O;
        else if ((r & O) === 0)
          if ((r & ft) !== 0)
            this.#r.push(n);
          else if ((r & vt) !== 0) {
            var a = n.b?.pending ? this.#l : this.#s;
            a.push(n);
          } else Ge(n) && ((n.f & De) !== 0 && this.#o.push(n), Ne(n));
        var o = n.first;
        if (o !== null) {
          n = o;
          continue;
        }
      }
      var f = n.parent;
      for (n = n.next; n === null && f !== null; )
        n = f.next, f = f.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #a(t) {
    for (const n of t)
      ((n.f & H) !== 0 ? this.#c : this.#d).push(n), P(n, O);
    t.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.#t.has(t) || this.#t.set(t, n), this.current.set(t, t.v);
  }
  activate() {
    x = this;
  }
  deactivate() {
    x = null;
    for (const t of Tt)
      if (Tt.delete(t), t(), x !== null)
        break;
  }
  neuter() {
    this.#u = !0;
  }
  flush() {
    ae.length > 0 ? sn() : this.#h(), x === this && (this.#n === 0 && ke.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #h() {
    if (!this.#u)
      for (const t of this.#e)
        t();
    this.#e.clear();
  }
  increment() {
    this.#n += 1;
  }
  decrement() {
    if (this.#n -= 1, this.#n === 0) {
      for (const t of this.#c)
        P(t, H), ue(t);
      for (const t of this.#d)
        P(t, te), ue(t);
      this.#i = [], this.#r = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#f ??= qn()).promise;
  }
  static ensure() {
    if (x === null) {
      const t = x = new fe();
      ke.add(x), Me || fe.enqueue(() => {
        x === t && t.flush();
      });
    }
    return x;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    We.length === 0 && queueMicrotask(rn), We.unshift(t);
  }
}
function ne(e) {
  var t = Me;
  Me = !0;
  try {
    for (var n; ; ) {
      if (lr(), ae.length === 0 && (x?.flush(), ae.length === 0))
        return Xe = null, /** @type {T} */
        n;
      sn();
    }
  } finally {
    Me = t;
  }
}
function sn() {
  var e = we;
  nt = !0;
  try {
    var t = 0;
    for (Ot(!0); ae.length > 0; ) {
      var n = fe.ensure();
      if (t++ > 1e3) {
        var r, i;
        dr();
      }
      n.process(ae), le.clear();
    }
  } finally {
    nt = !1, Ot(e), Xe = null;
  }
}
function dr() {
  try {
    Kn();
  } catch (e) {
    gt(e, Xe);
  }
}
function St(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (de | J)) === 0 && Ge(r)) {
        var i = x ? x.current.size : 0;
        if (Ne(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? pn(r) : r.fn = null), x !== null && x.current.size > i && (r.f & ht) !== 0)
          break;
      }
    }
    for (; n < t; )
      ue(e[n++]);
  }
}
function ue(e) {
  for (var t = Xe = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (nt && t === g && (n & De) !== 0)
      return;
    if ((n & (ee | K)) !== 0) {
      if ((n & O) === 0) return;
      t.f ^= O;
    }
  }
  ae.push(t);
}
const le = /* @__PURE__ */ new Map();
function $t(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Yt,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function X(e, t) {
  const n = $t(e);
  return Sr(n), n;
}
// @__NO_SIDE_EFFECTS__
function ln(e, t = !1, n = !0) {
  const r = $t(e);
  return t || (r.equals = Kt), ye && n && k !== null && k.l !== null && (k.l.s ??= []).push(r), r;
}
function W(e, t, n = !1) {
  m !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!z || (m.f & kt) !== 0) && Le() && (m.f & (I | De | vt | kt)) !== 0 && !V?.includes(e) && Qn();
  let r = n ? ge(t) : t;
  return rt(e, r);
}
function rt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    he ? le.set(e, t) : le.set(e, n), e.v = t;
    var r = fe.ensure();
    r.capture(e, n), (e.f & I) !== 0 && ((e.f & H) !== 0 && bt(
      /** @type {Derived} */
      e
    ), P(e, (e.f & q) === 0 ? O : te)), e.wv = $n(), on(e, H), Le() && g !== null && (g.f & O) !== 0 && (g.f & (K | ee)) === 0 && (F === null ? Cr([e]) : F.push(e));
  }
  return t;
}
function Ze(e) {
  W(e, e.v + 1);
}
function on(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Le(), i = n.length, s = 0; s < i; s++) {
      var l = n[s], a = l.f;
      if (!(!r && l === g)) {
        var o = (a & H) === 0;
        o && P(l, t), (a & I) !== 0 ? on(
          /** @type {Derived} */
          l,
          te
        ) : o && ue(
          /** @type {Effect} */
          l
        );
      }
    }
}
function ge(e) {
  if (typeof e != "object" || e === null || ie in e)
    return e;
  const t = zt(e);
  if (t !== jn && t !== In)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Wt(e), i = /* @__PURE__ */ X(0), s = oe, l = (a) => {
    if (oe === s)
      return a();
    var o = m, f = oe;
    U(null), At(s);
    var c = a();
    return U(o), At(f), c;
  };
  return r && n.set("length", /* @__PURE__ */ X(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, o, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Jn();
        var c = n.get(o);
        return c === void 0 ? c = l(() => {
          var h = /* @__PURE__ */ X(f.value);
          return n.set(o, h), h;
        }) : W(c, f.value, !0), !0;
      },
      deleteProperty(a, o) {
        var f = n.get(o);
        if (f === void 0) {
          if (o in a) {
            const c = l(() => /* @__PURE__ */ X(C));
            n.set(o, c), Ze(i);
          }
        } else
          W(f, C), Ze(i);
        return !0;
      },
      get(a, o, f) {
        if (o === ie)
          return e;
        var c = n.get(o), h = o in a;
        if (c === void 0 && (!h || re(a, o)?.writable) && (c = l(() => {
          var u = ge(h ? a[o] : C), p = /* @__PURE__ */ X(u);
          return p;
        }), n.set(o, c)), c !== void 0) {
          var d = E(c);
          return d === C ? void 0 : d;
        }
        return Reflect.get(a, o, f);
      },
      getOwnPropertyDescriptor(a, o) {
        var f = Reflect.getOwnPropertyDescriptor(a, o);
        if (f && "value" in f) {
          var c = n.get(o);
          c && (f.value = E(c));
        } else if (f === void 0) {
          var h = n.get(o), d = h?.v;
          if (h !== void 0 && d !== C)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return f;
      },
      has(a, o) {
        if (o === ie)
          return !0;
        var f = n.get(o), c = f !== void 0 && f.v !== C || Reflect.has(a, o);
        if (f !== void 0 || g !== null && (!c || re(a, o)?.writable)) {
          f === void 0 && (f = l(() => {
            var d = c ? ge(a[o]) : C, u = /* @__PURE__ */ X(d);
            return u;
          }), n.set(o, f));
          var h = E(f);
          if (h === C)
            return !1;
        }
        return c;
      },
      set(a, o, f, c) {
        var h = n.get(o), d = o in a;
        if (r && o === "length")
          for (var u = f; u < /** @type {Source<number>} */
          h.v; u += 1) {
            var p = n.get(u + "");
            p !== void 0 ? W(p, C) : u in a && (p = l(() => /* @__PURE__ */ X(C)), n.set(u + "", p));
          }
        if (h === void 0)
          (!d || re(a, o)?.writable) && (h = l(() => /* @__PURE__ */ X(void 0)), W(h, ge(f)), n.set(o, h));
        else {
          d = h.v !== C;
          var T = l(() => ge(f));
          W(h, T);
        }
        var R = Reflect.getOwnPropertyDescriptor(a, o);
        if (R?.set && R.set.call(c, f), !d) {
          if (r && typeof o == "string") {
            var v = (
              /** @type {Source<number>} */
              n.get("length")
            ), _ = Number(o);
            Number.isInteger(_) && _ >= v.v && W(v, _ + 1);
          }
          Ze(i);
        }
        return !0;
      },
      ownKeys(a) {
        E(i);
        var o = Reflect.ownKeys(a).filter((h) => {
          var d = n.get(h);
          return d === void 0 || d.v !== C;
        });
        for (var [f, c] of n)
          c.v !== C && !(f in a) && o.push(f);
        return o;
      },
      setPrototypeOf() {
        Zn();
      }
    }
  );
}
var Ct, an, fn, un;
function st() {
  if (Ct === void 0) {
    Ct = window, an = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    fn = re(t, "firstChild").get, un = re(t, "nextSibling").get, xt(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), xt(n) && (n.__t = void 0);
  }
}
function ce(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  return fn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ee(e) {
  return un.call(e);
}
function Te(e, t) {
  if (!N)
    return /* @__PURE__ */ ze(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ze(S)
  );
  if (n === null)
    n = S.appendChild(ce());
  else if (t && n.nodeType !== pt) {
    var r = ce();
    return n?.before(r), Y(r), r;
  }
  return Y(n), n;
}
function Qe(e, t = 1, n = !1) {
  let r = N ? S : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ee(r);
  if (!N)
    return r;
  if (n && r?.nodeType !== pt) {
    var s = ce();
    return r === null ? i?.after(s) : r.before(s), Y(s), s;
  }
  return Y(r), /** @type {TemplateNode} */
  r;
}
function hr(e) {
  e.textContent = "";
}
function vr() {
  return !1;
}
function cn(e) {
  g === null && m === null && Yn(), m !== null && (m.f & q) !== 0 && g === null && Vn(), he && Un();
}
function _r(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function B(e, t, n, r = !0) {
  var i = g;
  i !== null && (i.f & J) !== 0 && (e |= J);
  var s = {
    ctx: k,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | H,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Ne(s), s.f |= ut;
    } catch (o) {
      throw Z(s), o;
    }
  else t !== null && ue(s);
  var l = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & dt) === 0;
  if (!l && r && (i !== null && _r(s, i), m !== null && (m.f & I) !== 0 && (e & ee) === 0)) {
    var a = (
      /** @type {Derived} */
      m
    );
    (a.effects ??= []).push(s);
  }
  return s;
}
function pr(e) {
  const t = B(Ve, null, !1);
  return P(t, O), t.teardown = e, t;
}
function it(e) {
  cn();
  var t = (
    /** @type {Effect} */
    g.f
  ), n = !m && (t & K) !== 0 && (t & ut) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      k
    );
    (r.e ??= []).push(e);
  } else
    return dn(e);
}
function dn(e) {
  return B(ft | ht, e, !1);
}
function gr(e) {
  return cn(), B(Ve | ht, e, !0);
}
function mr(e) {
  fe.ensure();
  const t = B(ee, e, !0);
  return () => {
    Z(t);
  };
}
function wr(e) {
  fe.ensure();
  const t = B(ee, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? gn(t, () => {
      Z(t), r(void 0);
    }) : (Z(t), r(void 0));
  });
}
function br(e) {
  return B(ft, e, !1);
}
function $r(e) {
  return B(vt | dt, e, !0);
}
function hn(e, t = 0) {
  return B(Ve | t, e, !0);
}
function Nt(e, t = [], n = []) {
  ur(t, n, (r) => {
    B(Ve, () => e(...r.map(E)), !0);
  });
}
function yr(e, t = 0) {
  var n = B(De | t, e, !0);
  return n;
}
function lt(e, t = !0) {
  return B(K, e, !0, t);
}
function vn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = he, r = m;
    Rt(!0), U(null);
    try {
      t.call(null);
    } finally {
      Rt(n), U(r);
    }
  }
}
function _n(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    n.ac?.abort(_t);
    var r = n.next;
    (n.f & ee) !== 0 ? n.parent = null : Z(n, t), n = r;
  }
}
function Er(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & K) === 0 && Z(t), t = n;
  }
}
function Z(e, t = !0) {
  var n = !1;
  (t || (e.f & Hn) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (xr(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), _n(e, t && !n), Ue(e, 0), P(e, de);
  var r = e.transitions;
  if (r !== null)
    for (const s of r)
      s.stop();
  vn(e);
  var i = e.parent;
  i !== null && i.first !== null && pn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function xr(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ee(e)
    );
    e.remove(), e = n;
  }
}
function pn(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function gn(e, t) {
  var n = [];
  mn(e, n, !0), kr(n, () => {
    Z(e), t && t();
  });
}
function kr(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var i of e)
      i.out(r);
  } else
    t();
}
function mn(e, t, n) {
  if ((e.f & J) === 0) {
    if (e.f ^= J, e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || n) && t.push(l);
    for (var r = e.first; r !== null; ) {
      var i = r.next, s = (r.f & ct) !== 0 || (r.f & K) !== 0;
      mn(r, t, s ? n : !1), r = i;
    }
  }
}
function Tr(e) {
  wn(e, !0);
}
function wn(e, t) {
  if ((e.f & J) !== 0) {
    e.f ^= J, (e.f & O) === 0 && (P(e, H), ue(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & ct) !== 0 || (n.f & K) !== 0;
      wn(n, i ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && s.in();
  }
}
let we = !1;
function Ot(e) {
  we = e;
}
let he = !1;
function Rt(e) {
  he = e;
}
let m = null, z = !1;
function U(e) {
  m = e;
}
let g = null;
function Q(e) {
  g = e;
}
let V = null;
function Sr(e) {
  m !== null && (V === null ? V = [e] : V.push(e));
}
let L = null, j = 0, F = null;
function Cr(e) {
  F = e;
}
let bn = 1, Re = 0, oe = Re;
function At(e) {
  oe = e;
}
let G = !1;
function $n() {
  return ++bn;
}
function Ge(e) {
  var t = e.f;
  if ((t & H) !== 0)
    return !0;
  if ((t & te) !== 0) {
    var n = e.deps, r = (t & q) !== 0;
    if (n !== null) {
      var i, s, l = (t & qe) !== 0, a = r && g !== null && !G, o = n.length;
      if ((l || a) && (g === null || (g.f & de) === 0)) {
        var f = (
          /** @type {Derived} */
          e
        ), c = f.parent;
        for (i = 0; i < o; i++)
          s = n[i], (l || !s?.reactions?.includes(f)) && (s.reactions ??= []).push(f);
        l && (f.f ^= qe), a && c !== null && (c.f & q) === 0 && (f.f ^= q);
      }
      for (i = 0; i < o; i++)
        if (s = n[i], Ge(
          /** @type {Derived} */
          s
        ) && tn(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
    }
    (!r || g !== null && !G) && P(e, O);
  }
  return !1;
}
function yn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !V?.includes(e))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & I) !== 0 ? yn(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? P(s, H) : (s.f & O) !== 0 && P(s, te), ue(
        /** @type {Effect} */
        s
      ));
    }
}
function En(e) {
  var t = L, n = j, r = F, i = m, s = G, l = V, a = k, o = z, f = oe, c = e.f;
  L = /** @type {null | Value[]} */
  null, j = 0, F = null, G = (c & q) !== 0 && (z || !we || m === null), m = (c & (K | ee)) === 0 ? e : null, V = null, Be(e.ctx), z = !1, oe = ++Re, e.ac !== null && (e.ac.abort(_t), e.ac = null);
  try {
    e.f |= et;
    var h = (
      /** @type {Function} */
      (0, e.fn)()
    ), d = e.deps;
    if (L !== null) {
      var u;
      if (Ue(e, j), d !== null && j > 0)
        for (d.length = j + L.length, u = 0; u < L.length; u++)
          d[j + u] = L[u];
      else
        e.deps = d = L;
      if (!G || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (c & I) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (u = j; u < d.length; u++)
          (d[u].reactions ??= []).push(e);
    } else d !== null && j < d.length && (Ue(e, j), d.length = j);
    if (Le() && F !== null && !z && d !== null && (e.f & (I | te | H)) === 0)
      for (u = 0; u < /** @type {Source[]} */
      F.length; u++)
        yn(
          F[u],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Re++, F !== null && (r === null ? r = F : r.push(.../** @type {Source[]} */
    F))), (e.f & se) !== 0 && (e.f ^= se), h;
  } catch (p) {
    return sr(p);
  } finally {
    e.f ^= et, L = t, j = n, F = r, m = i, G = s, V = l, Be(a), z = o, oe = f;
  }
}
function Nr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ln.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (t.f & I) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (L === null || !L.includes(t)) && (P(t, te), (t.f & (q | qe)) === 0 && (t.f ^= qe), en(
    /** @type {Derived} **/
    t
  ), Ue(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ue(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Nr(e, n[r]);
}
function Ne(e) {
  var t = e.f;
  if ((t & de) === 0) {
    P(e, O);
    var n = g, r = we;
    g = e, we = !0;
    try {
      (t & De) !== 0 ? Er(e) : _n(e), vn(e);
      var i = En(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = bn;
      var s;
      Bt && Nn && (e.f & H) !== 0 && e.deps;
    } finally {
      we = r, g = n;
    }
  }
}
function E(e) {
  var t = e.f, n = (t & I) !== 0;
  if (m !== null && !z) {
    var r = g !== null && (g.f & de) !== 0;
    if (!r && !V?.includes(e)) {
      var i = m.deps;
      if ((m.f & et) !== 0)
        e.rv < Re && (e.rv = Re, L === null && i !== null && i[j] === e ? j++ : L === null ? L = [e] : (!G || !L.includes(e)) && L.push(e));
      else {
        (m.deps ??= []).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [m] : s.includes(m) || s.push(m);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), a = l.parent;
    a !== null && (a.f & q) === 0 && (l.f ^= q);
  }
  if (he) {
    if (le.has(e))
      return le.get(e);
    if (n) {
      l = /** @type {Derived} */
      e;
      var o = l.v;
      return ((l.f & O) === 0 && l.reactions !== null || xn(l)) && (o = bt(l)), le.set(l, o), o;
    }
  } else if (n) {
    if (l = /** @type {Derived} */
    e, $e?.has(l))
      return $e.get(l);
    Ge(l) && tn(l);
  }
  if ((e.f & se) !== 0)
    throw e.v;
  return e.v;
}
function xn(e) {
  if (e.v === C) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (le.has(t) || (t.f & I) !== 0 && xn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function yt(e) {
  var t = z;
  try {
    return z = !0, e();
  } finally {
    z = t;
  }
}
const Or = -7169;
function P(e, t) {
  e.f = e.f & Or | t;
}
function Rr(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ie in e)
      ot(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && ie in n && ot(n);
      }
  }
}
function ot(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        ot(e[r], t);
      } catch {
      }
    const n = zt(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Mn(n);
      for (let i in r) {
        const s = r[i].get;
        if (s)
          try {
            s.call(e);
          } catch {
          }
      }
    }
  }
}
function Ar(e) {
  var t = m, n = g;
  U(null), Q(null);
  try {
    return e();
  } finally {
    U(t), Q(n);
  }
}
const Dr = /* @__PURE__ */ new Set(), Dt = /* @__PURE__ */ new Set();
function Lr(e, t, n, r = {}) {
  function i(s) {
    if (r.capture || Se.call(t, s), !s.cancelBubble)
      return Ar(() => n?.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? mt(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Pr(e, t, n, r, i) {
  var s = { capture: r, passive: i }, l = Lr(e, t, n, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && pr(() => {
    t.removeEventListener(e, l, s);
  });
}
function Se(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  ), l = 0, a = e.__root;
  if (a) {
    var o = i.indexOf(a);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var f = i.indexOf(t);
    if (f === -1)
      return;
    o <= f && (l = o);
  }
  if (s = /** @type {Element} */
  i[l] || e.target, s !== t) {
    be(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var c = m, h = g;
    U(null), Q(null);
    try {
      for (var d, u = []; s !== null; ) {
        var p = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var T = s["__" + r];
          if (T != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s))
            if (Wt(T)) {
              var [R, ...v] = T;
              R.apply(s, [e, ...v]);
            } else
              T.call(s, e);
        } catch (_) {
          d ? u.push(_) : d = _;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        s = p;
      }
      if (d) {
        for (let _ of u)
          queueMicrotask(() => {
            throw _;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, U(c), Q(h);
    }
  }
}
function Mr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Ae(e, t) {
  var n = (
    /** @type {Effect} */
    g
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Et(e, t) {
  var n = (t & Dn) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    if (N)
      return Ae(S, null), S;
    r === void 0 && (r = Mr(i ? e : "<!>" + e), r = /** @type {Node} */
    /* @__PURE__ */ ze(r));
    var s = (
      /** @type {TemplateNode} */
      n || an ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return Ae(s, s), s;
  };
}
function jr(e = "") {
  if (!N) {
    var t = ce(e + "");
    return Ae(t, t), t;
  }
  var n = S;
  return n.nodeType !== pt && (n.before(n = ce()), Y(n)), Ae(n, n), n;
}
function Ce(e, t) {
  if (N) {
    g.nodes_end = S, Ke();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Ir = ["touchstart", "touchmove"];
function Fr(e) {
  return Ir.includes(e);
}
function qr(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function kn(e, t) {
  return Tn(e, t);
}
function Hr(e, t) {
  st(), t.intro = t.intro ?? !1;
  const n = t.target, r = N, i = S;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ze(n)
    ); s && (s.nodeType !== He || /** @type {Comment} */
    s.data !== Ft); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ Ee(s);
    if (!s)
      throw me;
    pe(!0), Y(
      /** @type {Comment} */
      s
    ), Ke();
    const l = Tn(e, { ...t, anchor: s });
    if (S === null || S.nodeType !== He || /** @type {Comment} */
    S.data !== Ht)
      throw Ye(), me;
    return pe(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === me)
      return t.recover === !1 && Xn(), st(), hr(n), pe(!1), kn(e, t);
    throw l;
  } finally {
    pe(r), Y(i);
  }
}
const ve = /* @__PURE__ */ new Map();
function Tn(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: l = !0 }) {
  st();
  var a = /* @__PURE__ */ new Set(), o = (h) => {
    for (var d = 0; d < h.length; d++) {
      var u = h[d];
      if (!a.has(u)) {
        a.add(u);
        var p = Fr(u);
        t.addEventListener(u, Se, { passive: p });
        var T = ve.get(u);
        T === void 0 ? (document.addEventListener(u, Se, { passive: p }), ve.set(u, 1)) : ve.set(u, T + 1);
      }
    }
  };
  o(Pn(Dr)), Dt.add(o);
  var f = void 0, c = wr(() => {
    var h = n ?? t.appendChild(ce());
    return lt(() => {
      if (s) {
        Xt({});
        var d = (
          /** @type {ComponentContext} */
          k
        );
        d.c = s;
      }
      i && (r.$$events = i), N && Ae(
        /** @type {TemplateNode} */
        h,
        null
      ), f = e(h, r) || {}, N && (g.nodes_end = S), s && Gt();
    }), () => {
      for (var d of a) {
        t.removeEventListener(d, Se);
        var u = (
          /** @type {number} */
          ve.get(d)
        );
        --u === 0 ? (document.removeEventListener(d, Se), ve.delete(d)) : ve.set(d, u);
      }
      Dt.delete(o), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return at.set(f, c), f;
}
let at = /* @__PURE__ */ new WeakMap();
function Br(e, t) {
  const n = at.get(e);
  return n ? (at.delete(e), n(t)) : Promise.resolve();
}
function Wr(e) {
  k === null && Wn(), ye && k.l !== null ? zr(k).m.push(e) : it(() => {
    const t = yt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function zr(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function Lt(e, t, n = !1) {
  N && Ke();
  var r = e, i = null, s = null, l = C, a = n ? ct : 0, o = !1;
  const f = (u, p = !0) => {
    o = !0, d(p, u);
  };
  var c = null;
  function h() {
    c !== null && (c.lastChild.remove(), r.before(c), c = null);
    var u = l ? i : s, p = l ? s : i;
    u && Tr(u), p && gn(p, () => {
      l ? s = null : i = null;
    });
  }
  const d = (u, p) => {
    if (l === (l = u)) return;
    let T = !1;
    if (N) {
      const A = tr(r) === qt;
      !!l === A && (r = er(), Y(r), pe(!1), T = !0);
    }
    var R = vr(), v = r;
    if (R && (c = document.createDocumentFragment(), c.append(v = ce())), l ? i ??= p && lt(() => p(v)) : s ??= p && lt(() => p(v)), R) {
      var _ = (
        /** @type {Batch} */
        x
      ), b = l ? i : s, $ = l ? s : i;
      b && _.skipped_effects.delete(b), $ && _.skipped_effects.add($), _.add_callback(h);
    } else
      h();
    T && pe(!0);
  };
  yr(() => {
    o = !1, t(f), o || d(null, null);
  }, a), N && (r = S);
}
function Ur(e, t, n, r, i) {
  N && Ke();
  var s = t.$$slots?.[n], l = !1;
  s === !0 && (s = t.children, l = !0), s === void 0 ? i !== null && i(e) : s(e, l ? () => r : r);
}
function Vr(e, t) {
  mt(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const i = document.createElement("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
const Pt = [...` 	
\r\f \v\uFEFF`];
function Yr(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, l = 0; (l = r.indexOf(i, l)) >= 0; ) {
          var a = l + s;
          (l === 0 || Pt.includes(r[l - 1])) && (a === r.length || Pt.includes(r[a])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(a + 1) : l = a;
        }
  }
  return r === "" ? null : r;
}
function Mt(e, t, n, r, i, s) {
  var l = e.__className;
  if (N || l !== n || l === void 0) {
    var a = Yr(n, r, s);
    (!N || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : e.className = a), e.__className = n;
  } else if (s && i !== s)
    for (var o in s) {
      var f = !!s[o];
      (i == null || f !== !!i[o]) && e.classList.toggle(o, f);
    }
  return s;
}
function jt(e, t) {
  return e === t || e?.[ie] === t;
}
function Kr(e = {}, t, n, r) {
  return br(() => {
    var i, s;
    return hn(() => {
      i = s, s = [], yt(() => {
        e !== n(...s) && (t(e, ...s), i && jt(n(...i), e) && t(null, ...i));
      });
    }), () => {
      mt(() => {
        s && jt(n(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
function Xr(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    k
  ), n = t.l.u;
  if (!n) return;
  let r = () => Rr(t.s);
  if (e) {
    let i = 0, s = (
      /** @type {Record<string, any>} */
      {}
    );
    const l = /* @__PURE__ */ wt(() => {
      let a = !1;
      const o = t.s;
      for (const f in o)
        o[f] !== s[f] && (s[f] = o[f], a = !0);
      return a && i++, i;
    });
    r = () => E(l);
  }
  n.b.length && gr(() => {
    It(t, r), Fe(n.b);
  }), it(() => {
    const i = yt(() => n.m.map(Fn));
    return () => {
      for (const s of i)
        typeof s == "function" && s();
    };
  }), n.a.length && it(() => {
    It(t, r), Fe(n.a);
  });
}
function It(e, t) {
  if (e.l.s)
    for (const n of e.l.s) E(n);
  t();
}
let Pe = !1;
function Gr(e) {
  var t = Pe;
  try {
    return Pe = !1, [e(), Pe];
  } finally {
    Pe = t;
  }
}
function _e(e, t, n, r) {
  var i = !ye || (n & Rn) !== 0, s = (n & An) !== 0, l = (
    /** @type {V} */
    r
  ), a = !0, o = () => (a && (a = !1, l = /** @type {V} */
  r), l), f;
  {
    var c = ie in e || Vt in e;
    f = re(e, t)?.set ?? (c && t in e ? (_) => e[t] = _ : void 0);
  }
  var h, d = !1;
  [h, d] = Gr(() => (
    /** @type {V} */
    e[t]
  )), h === void 0 && r !== void 0 && (h = o(), f && (i && Gn(), f(h)));
  var u;
  if (i ? u = () => {
    var _ = (
      /** @type {V} */
      e[t]
    );
    return _ === void 0 ? o() : (a = !0, _);
  } : u = () => {
    var _ = (
      /** @type {V} */
      e[t]
    );
    return _ !== void 0 && (l = /** @type {V} */
    void 0), _ === void 0 ? l : _;
  }, f) {
    var p = e.$$legacy;
    return function(_, b) {
      return arguments.length > 0 ? ((!i || !b || p || d) && f(b ? u() : _), _) : u();
    };
  }
  var T = !1, R = /* @__PURE__ */ Qt(() => (T = !1, u()));
  E(R);
  var v = (
    /** @type {Effect} */
    g
  );
  return function(_, b) {
    if (arguments.length > 0) {
      const $ = b ? E(R) : i && s ? ge(_) : _;
      return W(R, $), T = !0, l !== void 0 && (l = $), _;
    }
    return he && T || (v.f & de) !== 0 ? R.v : E(R);
  };
}
function Jr(e) {
  return new Zr(e);
}
class Zr {
  /** @type {any} */
  #t;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var n = /* @__PURE__ */ new Map(), r = (s, l) => {
      var a = /* @__PURE__ */ ln(l, !1, !1);
      return n.set(s, a), a;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, l) {
          return E(n.get(l) ?? r(l, Reflect.get(s, l)));
        },
        has(s, l) {
          return l === Vt ? !0 : (E(n.get(l) ?? r(l, Reflect.get(s, l))), Reflect.has(s, l));
        },
        set(s, l, a) {
          return W(n.get(l) ?? r(l, a), a), Reflect.set(s, l, a);
        }
      }
    );
    this.#e = (t.hydrate ? Hr : kn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && ne(), this.#t = i.$$events;
    for (const s of Object.keys(this.#e))
      s === "$set" || s === "$destroy" || s === "$on" || be(this, s, {
        get() {
          return this.#e[s];
        },
        /** @param {any} value */
        set(l) {
          this.#e[s] = l;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, this.#e.$destroy = () => {
      Br(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#e.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    this.#t[t] = this.#t[t] || [];
    const r = (...i) => n.call(this, ...i);
    return this.#t[t].push(r), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let Sn;
typeof HTMLElement == "function" && (Sn = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const r = this.$$c.$on(e, t);
      this.$$l_u.set(t, r);
    }
    super.addEventListener(e, t, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, n) {
    if (super.removeEventListener(e, t, n), this.$$c) {
      const r = this.$$l_u.get(t);
      r && (r(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(r) {
        return (i) => {
          const s = document.createElement("slot");
          r !== "default" && (s.name = r), Ce(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Qr(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const i = this.$$g_p(r.name);
        i in this.$$d || (this.$$d[i] = je(i, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Jr({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = mr(() => {
        hn(() => {
          this.$$r = !0;
          for (const r of Ie(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const i = je(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, i);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const i of this.$$l[r]) {
          const s = this.$$c.$on(r, i);
          this.$$l_u.set(i, s);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, t, n) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = je(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return Ie(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function je(e, t, n, r) {
  const i = n[e]?.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Qr(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function es(e, t, n, r, i, s) {
  let l = class extends Sn {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ie(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Ie(t).forEach((a) => {
    be(l.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(o) {
        o = je(a, o, t), this.$$d[a] = o;
        var f = this.$$c;
        if (f) {
          var c = re(f, a)?.get;
          c ? f[a] = o : f.$set({ [a]: o });
        }
      }
    });
  }), r.forEach((a) => {
    be(l.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
var ts = /* @__PURE__ */ Et('<div class="terminal-buttons svelte-1snd9pe"><span class="btn red svelte-1snd9pe"></span> <span class="btn yellow svelte-1snd9pe"></span> <span class="btn green svelte-1snd9pe"></span></div>'), ns = /* @__PURE__ */ Et('<div class="terminal-header svelte-1snd9pe"><!> <div class="terminal-title svelte-1snd9pe"> </div> <div class="terminal-actions svelte-1snd9pe"><button class="action-btn svelte-1snd9pe" title="Copy Commands">📋</button></div></div>'), rs = /* @__PURE__ */ Et("<div><!> <div><!></div></div>");
const ss = {
  hash: "svelte-1snd9pe",
  code: `.terminal.svelte-1snd9pe {border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0, 0, 0, 0.15);font-family:'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'DejaVu Sans Mono', monospace;max-width:100%;}
	
	/* Themes */.dark.svelte-1snd9pe {background-color:#1e1e1e;color:#d4d4d4;border:1px solid #333;}.light.svelte-1snd9pe {background-color:#ffffff;color:#333333;border:1px solid #e1e1e1;}
	
	/* Header */.terminal-header.svelte-1snd9pe {display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border-bottom:1px solid;}.dark.svelte-1snd9pe .terminal-header:where(.svelte-1snd9pe) {background-color:#2d2d2d;border-bottom-color:#404040;}.light.svelte-1snd9pe .terminal-header:where(.svelte-1snd9pe) {background-color:#f5f5f5;border-bottom-color:#e1e1e1;}.terminal-buttons.svelte-1snd9pe {display:flex;gap:6px;}.btn.svelte-1snd9pe {width:12px;height:12px;border-radius:50%;display:block;}.btn.red.svelte-1snd9pe {background-color:#ff5f57;}.btn.yellow.svelte-1snd9pe {background-color:#ffbd2e;}.btn.green.svelte-1snd9pe {background-color:#28ca42;}.terminal-title.svelte-1snd9pe {font-size:12px;font-weight:500;opacity:0.8;flex:1;text-align:center;}.terminal-actions.svelte-1snd9pe {display:flex;gap:4px;}.action-btn.svelte-1snd9pe {background:none;border:none;font-size:12px;cursor:pointer;padding:2px 4px;border-radius:3px;opacity:0.7;transition:opacity 0.2s;}.action-btn.svelte-1snd9pe:hover {opacity:1;}.dark.svelte-1snd9pe .action-btn:where(.svelte-1snd9pe):hover {background-color:rgba(255, 255, 255, 0.1);}.light.svelte-1snd9pe .action-btn:where(.svelte-1snd9pe):hover {background-color:rgba(0, 0, 0, 0.1);}
	
	/* Content */.terminal-content.svelte-1snd9pe {padding:12px;min-height:100px;white-space:pre-wrap;word-break:break-word;line-height:1.4;overflow-x:auto;}.terminal-content.readonly.svelte-1snd9pe {-webkit-user-select:text;-moz-user-select:text;user-select:text;}
	
	/* Sizes */.small.svelte-1snd9pe {font-size:12px;}.small.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe) {padding:8px;min-height:60px;}.medium.svelte-1snd9pe {font-size:14px;}.large.svelte-1snd9pe {font-size:16px;}.large.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe) {padding:16px;min-height:120px;}
	
	/* Scrollbar styling for dark theme */.dark.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe)::-webkit-scrollbar {height:8px;}.dark.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe)::-webkit-scrollbar-track {background:#2d2d2d;}.dark.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe)::-webkit-scrollbar-thumb {background:#555;border-radius:4px;}.dark.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe)::-webkit-scrollbar-thumb:hover {background:#666;}
	
	/* Scrollbar styling for light theme */.light.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe)::-webkit-scrollbar {height:8px;}.light.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe)::-webkit-scrollbar-track {background:#f1f1f1;}.light.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe)::-webkit-scrollbar-thumb {background:#c1c1c1;border-radius:4px;}.light.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe)::-webkit-scrollbar-thumb:hover {background:#a1a1a1;}
	
	/* Syntax highlighting styles */.terminal-content.svelte-1snd9pe .highlighted-content {white-space:pre-wrap;word-break:break-word;line-height:inherit;}.terminal-content.svelte-1snd9pe .prompt {color:#569cd6;font-weight:bold;}.terminal-content.svelte-1snd9pe .command {color:#dcdcaa;}.terminal-content.svelte-1snd9pe .output {color:inherit;opacity:0.9;}.terminal-content.svelte-1snd9pe .diff-add {color:#608b4e;}.terminal-content.svelte-1snd9pe .diff-remove {color:#f44747;}.terminal-content.svelte-1snd9pe .error {color:#f44747;}.terminal-content.svelte-1snd9pe .success {color:#608b4e;}.terminal-content.svelte-1snd9pe .code {color:#9cdcfe;font-style:italic;}
	
	/* Light theme syntax highlighting */.light.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe) .prompt {color:#0066cc;}.light.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe) .command {color:#333333;font-weight:500;}.light.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe) .diff-add {color:#22863a;}.light.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe) .diff-remove {color:#d73a49;}.light.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe) .error {color:#d73a49;}.light.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe) .success {color:#22863a;}.light.svelte-1snd9pe .terminal-content:where(.svelte-1snd9pe) .code {color:#6f42c1;font-style:italic;}`
};
function is(e, t) {
  Xt(t, !1), Vr(e, ss);
  let n = _e(t, "title", 12, "Terminal"), r = _e(t, "theme", 12, "dark"), i = _e(t, "size", 12, "medium"), s = _e(t, "showHeader", 12, !0), l = _e(t, "showButtons", 12, !0), a = _e(t, "readonly", 12, !1), o = /* @__PURE__ */ ln();
  Wr(() => {
    setTimeout(
      () => {
        if (E(o)) {
          const v = E(o).querySelector("slot");
          if (v) {
            const _ = v;
            if (_.assignedNodes) {
              const $ = _.assignedNodes();
              let A = "";
              if ($.forEach((D) => {
                D.nodeType === Node.TEXT_NODE && (A += D.textContent || "");
              }), A) {
                const D = A.trim();
                D !== A && $.forEach((y) => {
                  if (y.nodeType === Node.TEXT_NODE) {
                    const w = y.textContent || "", M = w.trim();
                    M !== w && (y.textContent = M);
                  }
                }), f(D);
              }
            }
            const b = v.textContent || v.innerHTML;
            if (b && !assignedContent) {
              const $ = b.trim();
              $ !== b && (v.textContent = $), f($);
            }
          }
        }
      },
      10
    );
  });
  function f(v) {
    if (!E(o)) return;
    const _ = v.split(`
`), b = [];
    _.forEach((D) => {
      const y = D.match(/^(\s*)/)?.[1] || "", w = D.trim();
      if (!w)
        b.push("");
      else if (w.startsWith("$") || w.startsWith("#")) {
        const M = w.indexOf(" ");
        if (M > 0) {
          const Je = w.substring(0, M), Cn = w.substring(M + 1);
          b.push(`${y}<span class="prompt">${Je}</span> <span class="command">${Cn}</span>`);
        } else
          b.push(`${y}<span class="prompt">${w}</span>`);
      } else w.startsWith("+") ? b.push(`${y}<span class="diff-add">${w}</span>`) : w.startsWith("-") ? b.push(`${y}<span class="diff-remove">${w}</span>`) : w.toLowerCase().includes("error") || w.includes("Error") || w.includes("✗") ? b.push(`${y}<span class="error">${w}</span>`) : w.startsWith("✓") || w.toLowerCase().includes("success") || w.toLowerCase().includes("built") ? b.push(`${y}<span class="success">${w}</span>`) : w.startsWith("#!/") || w.startsWith("def ") || w.startsWith("if ") || w.startsWith("import ") ? b.push(`${y}<span class="code">${w}</span>`) : b.push(`${y}<span class="output">${w}</span>`);
    });
    let $ = E(o).querySelector(".highlighted-content");
    $ || ($ = document.createElement("div"), $.className = "highlighted-content", $.style.whiteSpace = "pre-wrap", $.style.wordBreak = "break-word", $.style.lineHeight = "inherit", E(o).appendChild($)), $.innerHTML = b.join(`
`);
    const A = E(o).querySelector("slot");
    A && (A.style.display = "none");
  }
  function c() {
    let v = "";
    if (E(o)) {
      const D = E(o).querySelector("slot");
      if (D) {
        const y = D;
        y.assignedNodes && y.assignedNodes().forEach((M) => {
          M.nodeType === Node.TEXT_NODE && (v += M.textContent || "");
        });
      }
    }
    const _ = v.trim().split(`
`), b = [];
    _.forEach((D) => {
      const y = D.trim();
      (y.startsWith("$ ") || y.startsWith("# ")) && b.push(y.substring(2));
    });
    const $ = b.join(`
`);
    navigator.clipboard?.writeText($);
    const A = new CustomEvent("terminalCopy", {
      detail: { content: $, commandCount: b.length },
      bubbles: !0
    });
    document.dispatchEvent(A);
  }
  Xr();
  var h = rs(), d = Te(h);
  {
    var u = (v) => {
      var _ = ns(), b = Te(_);
      {
        var $ = (M) => {
          var Je = ts();
          Ce(M, Je);
        };
        Lt(b, (M) => {
          l() && M($);
        });
      }
      var A = Qe(b, 2), D = Te(A, !0);
      xe(A);
      var y = Qe(A, 2), w = Te(y);
      xe(y), xe(_), Nt(() => qr(D, n())), Pr("click", w, c), Ce(v, _);
    };
    Lt(d, (v) => {
      s() && v(u);
    });
  }
  var p = Qe(d, 2);
  let T;
  var R = Te(p);
  return Ur(R, t, "default", {}, (v) => {
    var _ = jr('$ echo "Hello, World!"');
    Ce(v, _);
  }), xe(p), Kr(p, (v) => W(o, v), () => E(o)), xe(h), Nt(
    (v) => {
      Mt(h, 1, `terminal ${r() ?? ""} ${i() ?? ""}`, "svelte-1snd9pe"), T = Mt(p, 1, "terminal-content svelte-1snd9pe", null, T, v);
    },
    [() => ({ readonly: a() })]
  ), Ce(e, h), Gt({
    get title() {
      return n();
    },
    set title(v) {
      n(v), ne();
    },
    get theme() {
      return r();
    },
    set theme(v) {
      r(v), ne();
    },
    get size() {
      return i();
    },
    set size(v) {
      i(v), ne();
    },
    get showHeader() {
      return s();
    },
    set showHeader(v) {
      s(v), ne();
    },
    get showButtons() {
      return l();
    },
    set showButtons(v) {
      l(v), ne();
    },
    get readonly() {
      return a();
    },
    set readonly(v) {
      a(v), ne();
    }
  });
}
customElements.define("my-terminal", es(
  is,
  {
    title: {},
    theme: {},
    size: {},
    showHeader: {},
    showButtons: {},
    readonly: {}
  },
  ["default"],
  [],
  !0
));
export {
  is as Terminal
};
