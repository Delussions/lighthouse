import {
  B as e,
  C as t,
  Et as n,
  F as r,
  G as i,
  H as a,
  J as o,
  M as s,
  P as c,
  Q as l,
  V as u,
  W as d,
  _ as f,
  i as p,
  it as m,
  n as h,
  nt as g,
  q as _,
  r as v,
  rt as y,
  v as b,
  w as x,
} from './lh-c00.js'
import { On as S, Yn as C, er as w, qn as T, rr as E } from './lh-c01.js'
import {
  a as ee,
  c as te,
  d as ne,
  i as re,
  l as D,
  n as O,
  o as k,
  p as A,
  r as j,
  s as ie,
  t as ae,
  u as oe,
  v as M,
} from './lh-c03.js'
import {
  D as se,
  E as ce,
  T as le,
  _ as ue,
  a as de,
  b as fe,
  c as pe,
  f as me,
  g as he,
  h as ge,
  i as _e,
  m as ve,
  p as ye,
  u as be,
  x as xe,
  y as N,
} from './lh-c04.js'
import {
  C as Se,
  S as Ce,
  T as we,
  _ as Te,
  a as Ee,
  b as De,
  c as Oe,
  d as ke,
  f as Ae,
  g as je,
  h as P,
  i as Me,
  l as Ne,
  m as Pe,
  n as Fe,
  o as Ie,
  p as Le,
  r as Re,
  s as ze,
  t as Be,
  u as Ve,
  v as He,
  w as Ue,
  x as We,
  y as Ge,
} from './lh-c05.js'
import {
  HOTBAR_ITEMS as X,
  TERRAFORM_TOOLS as wn,
  PHASE_LABELS as En,
  GIL_DIALOGS,
} from './data/index'
import { notifyGameReady } from './bridge'
var Ke = [`day`, `sunset`, `night`, `dawn`],
  qe = [
    [0, 2],
    [4, 2],
    [5.4, 3],
    [6.2, 3],
    [7.4, 4],
    [16.8, 4],
    [18.2, 5],
    [19.1, 5],
    [20.6, 6],
    [24, 6],
  ]
function Je(e) {
  for (let t = 1; t < qe.length; t++) {
    let [n, r] = qe[t]
    if (e <= n) {
      let [i, a] = qe[t - 1]
      return A(a, r, (e - i) / (n - i)) % 4
    }
  }
  return 2
}
var Ye = 5.4,
  Xe = 19.6,
  Ze = { az: 35, el: 50 },
  Qe = 1.4
function $e(e) {
  let t = ne(e, 0, 1)
  return {
    az: t < 0.46 ? A(72, -20, t / 0.46) : A(-20, -72, (t - 0.46) / 0.54),
    el: 9 + 49 * Math.sin(Math.PI * t),
  }
}
function et(e) {
  let t = (e - Ye) / 14.200000000000001
  if (t >= 0 && t <= 1) return { ...$e(t), handover: 0 }
  let n, r, i
  if (e > Xe && e < 21) ((n = (e - Xe) / Qe), (r = $e(1)), (i = Ze))
  else if (e < Ye && e > 4) ((n = (e - 4) / Qe), (r = Ze), (i = $e(0)))
  else return { ...Ze, handover: 0 }
  let a = M(0, 1, n),
    o = i.az - r.az
  return (
    o > 180 && (o -= 360),
    o < -180 && (o += 360),
    { az: r.az + o * a, el: A(r.el, i.el, a), handover: 1 - Math.abs(2 * n - 1) }
  )
}
var tt = { day: 12, sunset: 18.6, night: 23, dawn: 6 },
  nt = {
    day: {
      sun: `#FFE6C2`,
      sunI: 2.6,
      shadow: 0.92,
      hemiSky: `#C4E4F6`,
      hemiGround: `#E8D3A2`,
      hemiI: 1.35,
      fog: `#BFE3EE`,
      zenith: `#86CDEE`,
      horizon: `#F5E8CC`,
      water: `#FFFFFF`,
      glow: 0,
      sparkle: 1,
      clouds: 0.32,
      lamp: 2.2,
      windows: 0,
      beam: 0,
    },
    sunset: {
      sun: `#FFBE8A`,
      sunI: 2.3,
      shadow: 0.8,
      hemiSky: `#E9C2D2`,
      hemiGround: `#D6B196`,
      hemiI: 1.3,
      fog: `#F2C6AE`,
      zenith: `#8C92D6`,
      horizon: `#FFC79A`,
      water: `#F7D2D6`,
      glow: 0.5,
      sparkle: 1.3,
      clouds: 0.26,
      lamp: 5,
      windows: 0.9,
      beam: 0.3,
    },
    night: {
      sun: `#B8CCFF`,
      sunI: 0.9,
      shadow: 0.65,
      hemiSky: `#6682CC`,
      hemiGround: `#34486E`,
      hemiI: 1.55,
      fog: `#22365E`,
      zenith: `#101C40`,
      horizon: `#2A3D68`,
      water: `#6F88C4`,
      glow: 0,
      sparkle: 0.7,
      clouds: 0.12,
      lamp: 14,
      windows: 2.4,
      beam: 1,
    },
    dawn: {
      sun: `#FFC8B4`,
      sunI: 2,
      shadow: 0.85,
      hemiSky: `#CBC4EE`,
      hemiGround: `#D9B9A8`,
      hemiI: 1.1,
      fog: `#F0D2CE`,
      zenith: `#9FB4EE`,
      horizon: `#FFD7C4`,
      water: `#F0E4EC`,
      glow: 0.4,
      sparkle: 1.1,
      clouds: 0.25,
      lamp: 4,
      windows: 0.5,
      beam: 0.15,
    },
  },
  F = (e) => new a(e),
  rt = class {
    t
    clock
    phase = 0
    cache = new Map()
    lastHour = -1
    constructor(e, t) {
      ;((this.t = e), (this.clock = t))
      for (let e of Ke) {
        let t = nt[e]
        this.cache.set(e, {
          sun: F(t.sun),
          hemiSky: F(t.hemiSky),
          hemiGround: F(t.hemiGround),
          fog: F(t.fog),
          zenith: F(t.zenith),
          horizon: F(t.horizon),
          water: F(t.water),
        })
      }
      this.apply()
    }
    get nightness() {
      let e = ((this.phase % 4) + 4) % 4
      return Math.max(0, 1 - Math.abs(e - 2))
    }
    get current() {
      return this.clock.phase
    }
    set(e, t = !1) {
      ;(this.clock.skipTo(tt[e]), this.update())
    }
    update() {
      let e = this.clock.hour
      e !== this.lastHour && ((this.lastHour = e), (this.phase = Je(e)), this.apply())
    }
    apply() {
      let e = Math.floor(this.phase),
        t = M(0, 1, this.phase - e),
        n = Ke[((e % 4) + 4) % 4],
        r = Ke[(((e + 1) % 4) + 4) % 4],
        i = nt[n],
        a = nt[r],
        o = this.cache.get(n),
        s = this.cache.get(r),
        c = (e, n) => n.lerpColors(o[e], s[e], t),
        l = (e) => A(i[e], a[e], t),
        { t: u } = this,
        d = this.lightNow()
      ;(u.setSun(d.az, d.el),
        c(`sun`, u.sun.color),
        (u.sun.intensity = l(`sunI`) * (1 - 0.45 * d.handover)),
        (u.sun.shadow.intensity = l(`shadow`) * (1 - 0.8 * d.handover)),
        c(`hemiSky`, u.hemi.color),
        c(`hemiGround`, u.hemi.groundColor),
        (u.hemi.intensity = l(`hemiI`)),
        c(`fog`, u.fog.color),
        c(`fog`, O.fog),
        c(`zenith`, O.skyZenith),
        c(`horizon`, O.skyHorizon),
        c(`water`, u.waterTint),
        c(`sun`, O.sun),
        (u.sparkle.value = l(`sparkle`)),
        (u.glow.value = l(`glow`)),
        (N.uCloudStrength.value = l(`clouds`)))
      for (let e of u.lampMaterials) e.emissiveIntensity = l(`lamp`)
      let f = l(`windows`)
      for (let e of u.windowMaterials) (e.emissive.set(`#FFC873`), (e.emissiveIntensity = f))
      u.beam.intensity = ne(l(`beam`), 0, 1)
    }
    lightNow() {
      return et(this.clock.hour)
    }
  },
  it = 512,
  I = class e {
    cells = new Map()
    listeners = new Set()
    static key(e, t, n) {
      return ((e + it) * 1024 + (n + it)) * 64 + t
    }
    static unkey(e) {
      let t = e % 64,
        n = (e - t) / 64,
        r = (n % 1024) - it
      return [Math.floor(n / 1024) - it, t, r]
    }
    get size() {
      return this.cells.size
    }
    get(t, n, r) {
      return n < 0 || n >= 16 ? 0 : (this.cells.get(e.key(t, n, r)) ?? 0)
    }
    has(e, t, n) {
      return this.get(e, t, n) !== 0
    }
    set(t, n, r, i) {
      if (n < 0 || n >= 16) return
      let a = e.key(t, n, r)
      if (i === 0) {
        if (!this.cells.delete(a)) return
      } else {
        if (this.cells.get(a) === i) return
        this.cells.set(a, i)
      }
      for (let e of this.listeners) e(t, n, r, i)
    }
    onChange(e) {
      return (this.listeners.add(e), () => this.listeners.delete(e))
    }
    *entries() {
      for (let [t, n] of this.cells) {
        let [r, i, a] = e.unkey(t)
        yield [r, i, a, n]
      }
    }
    load(t) {
      this.cells.clear()
      for (let [n, r, i, a] of t) r >= 0 && r < 16 && a && this.cells.set(e.key(n, r, i), a)
    }
    toJSON() {
      return [...this.entries()]
    }
  },
  at = 0.13,
  ot = 0.14,
  st = 0.06,
  ct = 0.07,
  lt = 20,
  ut = 5,
  dt = class {
    p = []
    n = []
    ao = []
    ix = []
    count = 0
    v(e, t, n, r, i, a, o = 1) {
      return (this.p.push(e, t + D, n), this.n.push(r, i, a), this.ao.push(o), this.count++)
    }
    tri(e, t, n) {
      this.ix.push(e, t, n)
    }
    quad(e, t, n, r) {
      this.ix.push(e, t, n, e, n, r)
    }
  },
  ft = class {
    ctx
    shape
    ring = []
    constructor(e, t) {
      ;((this.ctx = e), (this.shape = t))
      for (let e = 0; e < lt; e++) {
        let n = (e / lt) * Math.PI * 2
        this.ring.push([Math.cos(n) * t.radius, Math.sin(n) * t.radius, Math.cos(n), Math.sin(n)])
      }
    }
    postAt(e, t, n) {
      if (t < 0) return !1
      let { occ: r } = this.ctx,
        i = r(e - 1, t, n - 1),
        a = r(e, t, n - 1),
        o = r(e - 1, t, n),
        s = r(e, t, n),
        c = +i + +a + +o + +s
      return c === 1 || (c === 2 && ((i && s) || (a && o)))
    }
    resting(e, t, n) {
      let { occ: r, groundLevel: i } = this.ctx
      for (let [a, o] of [
        [e - 1, n - 1],
        [e, n - 1],
        [e - 1, n],
        [e, n],
      ])
        if (r(a, t, o) && i(a, o) === t) return !0
      return !1
    }
    anyAt(e, t, n) {
      let { occ: r } = this.ctx
      return r(e - 1, t, n - 1) || r(e, t, n - 1) || r(e - 1, t, n) || r(e, t, n)
    }
    offset(e, t, n) {
      let { inset: r } = this.shape
      if (!r || t < 0) return [0, 0]
      let { occ: i } = this.ctx,
        a = 0,
        o = 0,
        s = 0
      for (let [r, c, l, u] of [
        [e - 1, n - 1, -1, -1],
        [e, n - 1, 1, -1],
        [e - 1, n, -1, 1],
        [e, n, 1, 1],
      ])
        i(r, t, c) && ((a = l), (o = u), s++)
      return s === 1 ? [a * r, o * r] : [0, 0]
    }
    continues(e, t, n, r) {
      if (!this.postAt(e, t + r, n)) return !1
      let i = this.offset(e, t, n),
        a = this.offset(e, t + r, n)
      return i[0] === a[0] && i[1] === a[1]
    }
    postsIn(e, t, n, r, i) {
      let a = new Set(),
        o = []
      for (let [s, c, l] of e)
        for (let e = 0; e <= 1; e++)
          for (let u = 0; u <= 1; u++) {
            let d = s + e,
              f = l + u
            if (d < t || d >= r || f < n || f >= i) continue
            let p = `${d},${c},${f}`
            a.has(p) || (a.add(p), this.postAt(d, c, f) && o.push([d, c, f]))
          }
      return o
    }
    emit(e, t, n, r) {
      let i = this.shape.radius,
        [a, o] = this.offset(t, n, r),
        s = t + a,
        c = r + o,
        l = [],
        u = !1,
        d = null,
        f = this.ctx.floor(s, c) - D
      this.continues(t, n, r, -1)
        ? l.push([n, 1])
        : this.anyAt(t, n - 1, r)
          ? l.push([n, 0.6], [n + 0.26, 1])
          : f > n - 0.03 || this.resting(t, n, r)
            ? l.push([Math.max(Math.min(n - ot, f - 0.1), n - 0.4), 0.5], [n, 0.6], [n + 0.26, 1])
            : n === Math.max(0, Math.ceil(f - 0.03))
              ? (l.push([f - 0.3, 0.55], [f, 0.62], [f + 0.3, 1]), f + 0.6 < 0.1 && (d = [s, c]))
              : (u = !0)
      let p = this.continues(t, n, r, 1),
        m = n + 1 + (p ? 0 : this.anyAt(t, n + 1, r) ? st : at),
        h = [],
        g = (t, n, r, i) => {
          let a = Math.sqrt(Math.max(0, 1 - r * r))
          h.push(this.ring.map(([o, l, u, d]) => e.v(s + o * n, t, c + l * n, u * a, r, d * a, i)))
        },
        _ = -1
      if (u) {
        let t = n + ct + i
        _ = e.v(s, t - i, c, 0, -1, 0, 0.8)
        for (let e = 4; e >= 1; e--) {
          let n = (e / ut) * (Math.PI / 2)
          g(t - Math.sin(n) * i, Math.cos(n), -Math.sin(n), 0.82)
        }
        g(t, 1, 0, 0.9)
      }
      for (let [e, t] of l) g(e, 1, 0, t)
      if (p) g(m, 1, 0, 1)
      else {
        g(m - i, 1, 0, 1)
        for (let e = 1; e < ut; e++) {
          let t = (e / ut) * (Math.PI / 2)
          g(m - i + Math.sin(t) * i, Math.cos(t), Math.sin(t), 1)
        }
      }
      let v = this.ring.length
      for (let t = 0; t < h.length - 1; t++) {
        let n = h[t],
          r = h[t + 1]
        for (let t = 0; t < v; t++) {
          let i = (t + 1) % v
          e.quad(n[t], r[t], r[i], n[i])
        }
      }
      if (!p) {
        let t = h[h.length - 1],
          n = e.v(s, m, c, 0, 1, 0)
        for (let r = 0; r < v; r++) e.tri(n, t[(r + 1) % v], t[r])
      }
      if (_ >= 0) {
        let t = h[0]
        for (let n = 0; n < v; n++) e.tri(_, t[n], t[(n + 1) % v])
      }
      return d
    }
  },
  L = (e) => new a(e),
  R = {
    a: L(`#DDA86C`),
    b: L(`#CD9459`),
    c: L(`#E6B983`),
    d: L(`#C4894F`),
    post: L(`#8F5B37`),
    postLight: L(`#A26D45`),
    groove: L(`#6B4127`),
  }
function pt() {
  let e = new T({ roughness: 0.8, metalness: 0 }),
    t = {
      uRestOffset: { value: new g() },
      uTint: { value: new l(1, 1, 1, 0) },
      uOpacity: { value: 1 },
      uAnimCell: { value: Array.from({ length: 4 }, () => new l(0, 0, 0, 0)) },
      uAnimXform: { value: Array.from({ length: 4 }, () => new l(1, 1, 1, 0)) },
      uWoodA: { value: R.a },
      uWoodB: { value: R.b },
      uWoodC: { value: R.c },
      uWoodD: { value: R.d },
      uPost: { value: R.post },
      uPostLight: { value: R.postLight },
      uGroove: { value: R.groove },
      uGrassA: { value: O.grassA },
      uGrassB: { value: O.grassB },
      uGrassC: { value: O.grassC },
      uSand: { value: O.sand },
      ...me,
    }
  return (
    (e.userData.uniforms = t),
    fe(e, {
      key: `wood`,
      uniforms: t,
      vertexHead: `
attribute float aKind;
attribute float aBase;
attribute float aAO;
uniform vec3 uRestOffset;
uniform vec4 uAnimCell[4];
uniform vec4 uAnimXform[4];
varying float vKind;
varying float vBase;
varying float vAO;
varying vec3 vRest;
varying vec3 vRestN;
`,
      vertexMain: `
vKind = aKind;
vBase = aBase;
vAO = aAO;
vRest = position + uRestOffset;
vRestN = normal;
// Squash / lift any geometry inside an animating cell (the flare and posts reach a little outside it).
for (int i = 0; i < 4; i++) {
  vec4 ac = uAnimCell[i];
  if (ac.w > 0.5) {
    vec3 lo = ac.xyz - vec3(0.45, 0.02, 0.45);
    vec3 hi = ac.xyz + vec3(1.45, 1.2, 1.45);
    vec3 rp = vRest;
    if (all(greaterThanEqual(rp, lo)) && all(lessThanEqual(rp, hi))) {
      vec3 pivot = ac.xyz + vec3(0.5, 0.0, 0.5);
      vec4 xf = uAnimXform[i];
      transformed = pivot - uRestOffset + (rp - pivot) * xf.xyz + vec3(0.0, xf.w, 0.0);
    }
  }
}
`,
      fragmentHead: `
#define GROUND_Y ${D.toFixed(4)}
uniform vec3 uWoodA, uWoodB, uWoodC, uWoodD, uPost, uPostLight, uGroove;
uniform vec4 uTint;
uniform float uOpacity;
uniform sampler2D uTerrainData;
uniform vec4 uTerrainRect;
uniform sampler2D uContactAO;
uniform vec4 uContactRect;
uniform vec3 uSand;
varying float vKind;
varying float vBase;
varying float vAO;
varying vec3 vRest;
varying vec3 vRestN;
${xe}

// One warm timber: most boards between the two middle tones, now and then a paler or a darker one.
vec3 lhPlankTone(float h, float h2) {
  vec3 c = mix(uWoodB, uWoodA, 0.3 + 0.55 * h);
  c = mix(c, uWoodC, smoothstep(0.8, 0.98, h2) * 0.55);
  c = mix(c, uWoodD, smoothstep(0.8, 0.98, 1.0 - h2) * 0.45);
  return c;
}

// The ground's own colour at a point (as the terrain paints it: grass or sand, with its contact shadow),
// so a soft block's base can let the meadow climb onto it.
vec3 lhGroundColor(vec2 xz) {
  vec4 td = textureLod(uTerrainData, (xz - uTerrainRect.xy) * uTerrainRect.zw, 0.0);
  float grassSdf = td.g + (lhNoise(xz * 1.6) - 0.5) * 0.28 + (lhNoise(xz * 5.3) - 0.5) * 0.06;
  vec3 grass = lhGrassColor(xz) * (0.95 + 0.1 * lhNoise(xz * 2.7));
  vec3 sand = uSand * (0.97 + 0.06 * lhNoise(xz * 3.7));
  vec3 col = mix(sand, grass, 1.0 - smoothstep(-0.025, 0.025, grassSdf));
  float cao = textureLod(uContactAO, (xz - uContactRect.xy) * uContactRect.zw, 0.0).r;
  return col * (1.0 - 0.42 * cao);
}

// Board layout along a surface: x = across (0 at the board's lower edge, 1 at its upper), y = distance to
// the nearer butt joint, z = board id hash, w = row; pos is the distance from the board's start and
// len its length.
vec4 lhBoards(float along, float acrossCoord, float width, float seed, out float pos, out float len) {
  float rowF = acrossCoord / width;
  float row = floor(rowF);
  len = mix(2.2, 4.4, lhHash12(vec2(row, seed)));
  float off = lhHash12(vec2(row * 1.7 + 3.1, seed + 11.0)) * len;
  float u = (along + off) / len;
  float seg = floor(u);
  pos = fract(u) * len;
  float id = lhHash12(vec2(row * 13.1 + seg * 7.7, seed * 3.3 + 1.0));
  return vec4(fract(rowF), min(pos, len - pos), id, row);
}

// The boards seen along one axis (0: walls facing ±x, 1: decks and undersides, 2: walls facing ±z).
// Walls are lap siding: each board's lower edge laps over the one below, so the band under the lip lies in
// its shade. Decks are flat floorboards with narrow gaps. Returns the colour and writes the shading normal;
// relief (0..1) fades the detail out across the soft curves between layouts.
vec3 lhWoodAxis(vec3 wP, vec3 wN, int axis, float px, float relief, out vec3 nOut) {
  float along, acrossCoord, seed;
  vec3 T, B;
  if (axis == 1) {
    along = wP.x;
    acrossCoord = wP.z;
    seed = floor(wP.y - GROUND_Y + 0.5) * 5.0 + 0.5;
    T = vec3(1.0, 0.0, 0.0);
    B = vec3(0.0, 0.0, 1.0);
  } else if (axis == 0) {
    along = wP.z;
    acrossCoord = wP.y - GROUND_Y;
    seed = floor(wP.x + 0.5) * 7.0 + 1.0 + sign(wN.x) * 0.37;
    T = vec3(0.0, 0.0, 1.0);
    B = vec3(0.0, 1.0, 0.0);
  } else {
    along = wP.x;
    acrossCoord = wP.y - GROUND_Y;
    seed = floor(wP.z + 0.5) * 7.0 + 2.0 + sign(wN.z) * 0.37;
    T = vec3(1.0, 0.0, 0.0);
    B = vec3(0.0, 1.0, 0.0);
  }
  float width = 0.25;
  float pos, len;
  vec4 bd = lhBoards(along, acrossCoord, width, seed, pos, len);
  float id = bd.z;
  vec3 col = lhPlankTone(id, lhHash12(vec2(id * 37.1, seed + 2.0)));
  if (axis == 1) col *= 1.03;
  float y = bd.x * width; // across the board, from its lower edge (world units)
  float detail = clamp(0.03 / max(px, 1e-4), 0.0, 1.0) * relief;
  // Grain: long soft streaks that wander a little, and fine lines along the board.
  float wave = (lhNoise(vec2(along * 0.6 + id * 7.0, id * 3.0)) - 0.5) * 0.1;
  float g1 = lhNoise(vec2(along * 0.7 + id * 17.0, (y + wave) * 16.0 + id * 5.0));
  float g2 = lhNoise(vec2(along * 3.0 + id * 9.0, (y + wave) * 70.0));
  col *= 0.95 + 0.08 * g1 + 0.05 * (g2 - 0.5) * detail;
  // Now and then a knot: a darker eye with a faint ring.
  float kh = lhHash12(vec2(id * 71.3, seed + 5.0));
  if (kh < 0.4) {
    vec2 kp = vec2(pos - mix(0.3, len - 0.3, lhHash12(vec2(id * 13.7, seed))), (y - width * mix(0.35, 0.65, kh / 0.4)) * 1.8);
    float kd = length(kp);
    col *= 1.0 - (0.26 * (1.0 - smoothstep(0.012, 0.028, kd)) + 0.06 * (1.0 - smoothstep(0.03, 0.055, kd))) * detail;
  }
  vec2 grad = vec2(0.0); // how the shading normal tilts: along the board, across it
  float dLow = y;
  float dHigh = width - y;
  if (axis != 1) {
    // Lap siding: the band under the board above is in its shade; each board leans out a touch at the
    // bottom and its lip rounds over.
    float under = smoothstep(0.5, 1.0, bd.x);
    col *= 1.0 - 0.17 * under * under * detail;
    float lip = 1.0 - smoothstep(0.0, 0.028, dLow);
    grad.y = (0.1 + 0.45 * lip) * detail;
  } else {
    // Floorboards: a small bevel on each edge.
    grad.y = ((1.0 - smoothstep(0.0, 0.022, dLow)) - (1.0 - smoothstep(0.0, 0.022, dHigh))) * 0.5 * detail;
  }
  grad.x = (1.0 - smoothstep(0.0, 0.022, bd.y)) * (pos < len * 0.5 ? 0.5 : -0.5) * detail;
  // The grain is raised a little too (seen close up; finer than a few pixels it would only shimmer).
  grad.y += ((g1 - 0.5) * 0.12 * clamp(0.016 / max(px, 1e-4) - 1.0, 0.0, 1.0)
    + (g2 - 0.5) * 0.1 * clamp(0.004 / max(px, 1e-4) - 1.0, 0.0, 1.0)) * relief;
  // Narrow grooves between boards and at butt joints, anti-aliased (faded when sub-pixel), with a soft
  // darkening into each gap.
  float edge = min(min(dLow, dHigh), bd.y);
  float gw = 0.008;
  float groove = (1.0 - smoothstep(gw, gw + px, edge)) * clamp(gw * 3.0 / max(px, 1e-4), 0.0, 1.0) * relief;
  col *= 1.0 - 0.1 * (1.0 - smoothstep(0.0, 0.035, edge)) * detail;
  col = mix(col, uGroove, groove * 0.8);
  // Two nails at each end of a board.
  vec2 nq = vec2(bd.y - 0.045, abs((bd.x - 0.5) * width) - width * 0.22);
  float nail = 1.0 - smoothstep(0.008, 0.008 + px, length(nq));
  col = mix(col, uGroove * 1.25, nail * 0.55 * detail);
  nOut = normalize(wN - (T * grad.x + B * grad.y) * 0.5);
  return col;
}
`,
      albedo: `
vec3 wN = normalize(vRestN);
vec3 wP = vRest;
float wPx = length(fwidth(vRest));
vec3 woodCol;
vec3 lhNW = wN;

if (vKind > 0.5) {
  // Post: vertical grain, darker timber; end grain rings on the dome.
  vec2 cen = floor(wP.xz + 0.5);
  vec2 loc = wP.xz - cen;
  float hsh = lhHash12(cen * 1.37 + 0.5);
  float ang = atan(loc.y, loc.x);
  float grain = lhNoise(vec2(ang * 2.2 + hsh * 9.0, wP.y * 1.6)) * 0.6 + lhNoise(vec2(ang * 6.0, wP.y * 5.0 + hsh * 20.0)) * 0.4;
  woodCol = mix(uPost, uPostLight, hsh * 0.6) * (0.9 + 0.2 * grain);
  // hand-hewn: the grain ripples round the post
  lhNW = normalize(wN + vec3(-wN.z, 0.0, wN.x) * (grain - 0.5) * 0.35 * (1.0 - smoothstep(0.4, 0.7, wN.y)));
  if (wN.y > 0.55) {
    float rings = sin(length(loc) * 110.0 + hsh * 6.0) * 0.5 + 0.5;
    woodCol = mix(woodCol, mix(uPostLight * 1.12, uPostLight * 0.94, rings * 0.5), smoothstep(0.55, 0.8, wN.y));
  }
} else {
  // Boards follow whichever axis the surface faces; across a curve two layouts blend and the grooves fade.
  vec3 an = abs(wN);
  int a0 = an.x > an.y ? (an.x > an.z ? 0 : 2) : (an.y > an.z ? 1 : 2);
  float d0 = a0 == 0 ? an.x : a0 == 1 ? an.y : an.z;
  int a1 = a0 == 0 ? (an.y > an.z ? 1 : 2) : a0 == 1 ? (an.x > an.z ? 0 : 2) : (an.x > an.y ? 0 : 1);
  float d1 = a1 == 0 ? an.x : a1 == 1 ? an.y : an.z;
  float relief = smoothstep(0.78, 0.97, d0);
  vec3 n0;
  woodCol = lhWoodAxis(wP, wN, a0, wPx, relief, n0);
  lhNW = n0;
  float w0 = pow(d0, 6.0);
  float w1 = pow(d1, 6.0);
  float t = w1 / (w0 + w1);
  if (t > 0.01) {
    vec3 n1;
    vec3 c1 = lhWoodAxis(wP, wN, a1, wPx, relief, n1);
    woodCol = mix(woodCol, c1, t);
    lhNW = normalize(mix(n0, n1, t));
  }
  woodCol *= mix(1.0, 0.8, smoothstep(-0.4, -0.8, wN.y)); // undersides
}
woodCol *= vAO;
// Where a soft base meets the ground (vBase marks it), the meadow grows up the flare for as long as the
// surface still faces up, and stops with a ragged edge where it turns into the wall.
if (vBase > 0.01) {
  float lhH = wP.y - GROUND_Y;
  float lhRag = 0.5 + 0.28 * (lhNoise(wP.xz * 6.0 + wP.y * 3.0) - 0.5) + 0.12 * (lhNoise(wP.xz * 21.0) - 0.5);
  float lhUp = wN.y - lhRag;
  float lhSkirt = smoothstep(-0.03, 0.03, lhUp) * (1.0 - smoothstep(0.26, 0.32, lhH)) * vBase;
  if (lhSkirt > 0.0) {
    // A darker, earthy fringe right at the edge, then the meadow itself.
    vec3 lhG = lhGroundColor(wP.xz);
    lhG *= mix(0.7, 1.0, smoothstep(0.0, 0.14, lhUp));
    woodCol = mix(woodCol, lhG, lhSkirt);
    lhNW = normalize(mix(lhNW, wN, lhSkirt));
  }
}
woodCol = mix(woodCol, uTint.rgb, uTint.a);
diffuseColor.rgb = woodCol;
diffuseColor.a *= uOpacity;
`,
      normal: `
normal = normalize((viewMatrix * vec4(lhNW, 0.0)).xyz);
`,
    }),
    e
  )
}
var mt = {
  n: 8,
  roundH: 0.12,
  roundV: 0.08,
  flare: 0.26,
  sink: 0.04,
  iso: 0.5,
  postRadius: 0.105,
  postInset: 0.035,
  posts: !0,
}
function z(e, t) {
  if (e <= -t) return 0
  if (e >= t) return 1
  let n = (e + t) / (2 * t)
  return n * n * n * (n * (n * 6 - 15) + 10)
}
function ht(e, t) {
  if (e <= -t || e >= t) return 0
  let n = (e + t) / (2 * t)
  return (30 * n * n * (1 - n) * (1 - n)) / (2 * t)
}
var gt = [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [0, 2],
    [1, 3],
    [4, 6],
    [5, 7],
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 7],
  ],
  _t = {
    pos: new Float64Array(),
    nrm: new Float32Array(),
    ao: new Float32Array(),
    base: new Uint8Array(),
    idx: new Uint16Array(),
  },
  vt = new Map(),
  yt = 8e3,
  bt = 0,
  B = 1,
  xt = 2,
  St = 3,
  Ct = 0.06,
  wt = [
    [0.12, 0.7],
    [0.3, 0.45],
  ],
  Tt = class {
    N
    H
    P
    o
    lutH
    lutV
    occ = new Uint8Array(27)
    gnd = new Uint8Array(9)
    gx = 0
    gy = 0
    gz = 0
    bx = new Float64Array(6)
    by = new Float64Array(6)
    bz = new Float64Array(6)
    f
    fb
    Tz
    Tyz
    Gz
    Gxz
    gyl
    vid
    constructor(e) {
      ;((this.o = e), (this.N = e.n), (this.H = 1 / e.n), (this.P = e.n + 2))
      let t = this.P
      ;((this.lutH = new Float64Array(3 * t)), (this.lutV = new Float64Array(3 * t)))
      for (let e = -1; e <= 1; e++)
        for (let n = 0; n < t; n++) {
          let r = (n - 0.5) / this.N - e
          ;((this.lutH[(e + 1) * t + n] = this.boxH(r)),
            (this.lutV[(e + 1) * t + n] = this.boxV(r)))
        }
      ;((this.f = new Float64Array(t * t * t)),
        (this.fb = new Float64Array(t * t * t)),
        (this.Tz = new Float64Array(9 * t)),
        (this.Tyz = new Float64Array(3 * t * t)),
        (this.Gz = new Float64Array(3 * t)),
        (this.Gxz = new Float64Array(t * t)),
        (this.gyl = new Float64Array(t)),
        (this.vid = new Int32Array((this.N + 1) ** 3)))
    }
    boxH(e) {
      return z(e, this.o.roundH) - z(e - 1, this.o.roundH)
    }
    dboxH(e) {
      return ht(e, this.o.roundH) - ht(e - 1, this.o.roundH)
    }
    boxV(e) {
      return z(e, this.o.roundV) - z(e - 1, this.o.roundV)
    }
    dboxV(e) {
      return ht(e, this.o.roundV) - ht(e - 1, this.o.roundV)
    }
    groundY(e) {
      return 1 - z(e + this.o.sink, this.o.flare)
    }
    sample(e, t, n, r) {
      let i = Math.floor(e),
        a = Math.floor(t),
        o = Math.floor(n),
        { bx: s, by: c, bz: l, occ: u, gnd: d } = this
      for (let u = 0; u < 3; u++) {
        let d = e - (i - 1 + u),
          f = t - (a - 1 + u),
          p = n - (o - 1 + u)
        ;((s[u] = this.boxH(d)),
          (c[u] = this.boxV(f)),
          (l[u] = this.boxH(p)),
          r && ((s[u + 3] = this.dboxH(d)), (c[u + 3] = this.dboxV(f)), (l[u + 3] = this.dboxH(p))))
      }
      let f = this.groundY(t),
        p = this.groundY(t - 1),
        m = r ? -ht(t + this.o.sink, this.o.flare) : 0,
        h = r ? -ht(t - 1 + this.o.sink, this.o.flare) : 0,
        g = 0,
        _ = 0,
        v = 0,
        y = 0
      for (let e = 0; e < 3; e++) {
        let t = i - 1 + e
        if (t < -1 || t > 1) continue
        let n = s[e],
          b = r ? s[e + 3] : 0
        if (n !== 0 || b !== 0)
          for (let e = 0; e < 3; e++) {
            let i = o - 1 + e
            if (i < -1 || i > 1) continue
            let s = l[e],
              x = r ? l[e + 3] : 0
            if (s === 0 && x === 0) continue
            for (let e = 0; e < 3; e++) {
              let o = a - 1 + e
              if (o < -1 || o > 1 || !u[(t + 1) * 9 + (o + 1) * 3 + (i + 1)]) continue
              let l = c[e],
                d = r ? c[e + 3] : 0
              ;((g += n * l * s), r && ((_ += b * l * s), (v += n * d * s), (y += n * l * x)))
            }
            let S = d[(t + 1) * 3 + (i + 1)]
            if (S !== bt) {
              let e = S === St ? 1 : S === B ? f : p,
                t = S === St ? 0 : S === B ? m : h
              ;((g += n * s * e), r && ((_ += b * s * e), (v += n * s * t), (y += n * x * e)))
            }
          }
      }
      return ((this.gx = _), (this.gy = v), (this.gz = y), g)
    }
    make(e, t) {
      ;(this.occ.set(e), this.gnd.set(t))
      let { N: n, P: r, H: i, f: a, Tz: o, Tyz: s, lutH: c, lutV: l } = this,
        u = r * r,
        d = this.o.iso
      for (let t = 0; t < 3; t++)
        for (let n = 0; n < 3; n++) {
          let i = e[t * 9 + n * 3],
            a = e[t * 9 + n * 3 + 1],
            s = e[t * 9 + n * 3 + 2]
          for (let e = 0; e < r; e++)
            o[(t * 3 + n) * r + e] = i * c[e] + a * c[r + e] + s * c[2 * r + e]
        }
      for (let e = 0; e < 3; e++)
        for (let t = 0; t < r; t++) {
          let n = l[t],
            i = l[r + t],
            a = l[2 * r + t]
          for (let c = 0; c < r; c++)
            s[e * u + t * r + c] =
              n * o[e * 3 * r + c] + i * o[(e * 3 + 1) * r + c] + a * o[(e * 3 + 2) * r + c]
        }
      for (let e = 0; e < r; e++) {
        let t = c[e],
          n = c[r + e],
          i = c[2 * r + e],
          o = e * u
        for (let e = 0; e < u; e++) a[o + e] = t * s[e] + n * s[u + e] + i * s[2 * u + e]
      }
      this.fb.set(a)
      for (let e = B; e <= St; e++) {
        let i = !1
        for (let n = 0; n < 9; n++) t[n] === e && (i = !0)
        if (!i) continue
        let { Gz: o, Gxz: s, gyl: l } = this
        for (let t = 0; t < r; t++) {
          let r = (t - 0.5) / n
          l[t] = e === St ? 1 : this.groundY(e === B ? r : r - 1)
        }
        let d = (n) => +(t[n] === e)
        for (let e = 0; e < 3; e++) {
          let t = d(e * 3),
            n = d(e * 3 + 1),
            i = d(e * 3 + 2)
          for (let a = 0; a < r; a++) o[e * r + a] = t * c[a] + n * c[r + a] + i * c[2 * r + a]
        }
        for (let e = 0; e < r; e++)
          for (let t = 0; t < r; t++)
            s[e * r + t] = c[e] * o[t] + c[r + e] * o[r + t] + c[2 * r + e] * o[2 * r + t]
        for (let e = 0; e < r; e++)
          for (let t = 0; t < r; t++) {
            let n = l[t]
            if (n === 0) continue
            let i = e * u + t * r
            for (let t = 0; t < r; t++) a[i + t] += n * s[e * r + t]
          }
      }
      let f = 0,
        p = 0
      for (let e = 1; e < r; e++) {
        for (let t = 1; t < r; t++) {
          let n = e * u + t * r
          for (let e = 1; e < r; e++) a[n + e] > d ? f++ : p++
        }
        if (f && p) break
      }
      if (!f || !p) return _t
      let m = n + 1,
        h = this.vid.fill(-1),
        g = [],
        _ = [],
        v = this.fb,
        y = new Float64Array(8),
        b = (e, t, n) => {
          let o = ((e + 1) * m + (t + 1)) * m + (n + 1)
          if (h[o] >= 0) return h[o]
          let s = 0,
            c = 0
          for (let i = 0; i < 8; i++) {
            let o = (e + 1 + (i >> 2)) * u + (t + 1 + ((i >> 1) & 1)) * r + (n + 1 + (i & 1)),
              l = a[o]
            ;((y[i] = l), l > d && (s |= 1 << i), v[o] > c && (c = v[o]))
          }
          _.push(c < Ct)
          let l = 0.5,
            f = 0.5,
            p = 0.5
          if (s !== 0 && s !== 255) {
            l = f = p = 0
            let e = 0
            for (let [t, n] of gt) {
              if (((s >> t) & 1) == ((s >> n) & 1)) continue
              let r = (d - y[t]) / (y[n] - y[t])
              ;((l += (t >> 2) + ((n >> 2) - (t >> 2)) * r),
                (f += ((t >> 1) & 1) + (((n >> 1) & 1) - ((t >> 1) & 1)) * r),
                (p += (t & 1) + ((n & 1) - (t & 1)) * r),
                e++)
            }
            ;((l /= e), (f /= e), (p /= e))
          }
          let b = g.length / 3
          return ((h[o] = b), g.push((e + 0.5 + l) * i, (t + 0.5 + f) * i, (n + 0.5 + p) * i), b)
        },
        x = (e, n) => {
          let r = Math.floor(e),
            i = Math.floor(n)
          if (r < -1 || r > 1 || i < -1 || i > 1) return -1 / 0
          let a = t[(r + 1) * 3 + (i + 1)]
          return a === bt ? -1 / 0 : a === B ? 0 : a === xt ? 1 : 1 / 0
        },
        S = (e) => g[e * 3 + 1] < x(g[e * 3], g[e * 3 + 2]) - 0.003 || _[e],
        C = []
      for (let e = 0; e < n; e++)
        for (let t = 0; t < n; t++)
          for (let i = 0; i < n; i++) {
            let n = (e + 1) * u + (t + 1) * r + (i + 1),
              o = a[n] > d
            for (let s = 0; s < 3; s++) {
              if (o === a[n + (s === 0 ? u : s === 1 ? r : 1)] > d) continue
              let c, l, f, p
              ;(s === 0
                ? ((c = b(e, t - 1, i - 1)),
                  (l = b(e, t, i - 1)),
                  (f = b(e, t, i)),
                  (p = b(e, t - 1, i)))
                : s === 1
                  ? ((c = b(e - 1, t, i - 1)),
                    (l = b(e - 1, t, i)),
                    (f = b(e, t, i)),
                    (p = b(e, t, i - 1)))
                  : ((c = b(e - 1, t - 1, i)),
                    (l = b(e, t - 1, i)),
                    (f = b(e, t, i)),
                    (p = b(e - 1, t, i))),
                !(S(c) && S(l) && S(f) && S(p)) &&
                  (o ? C.push(c, l, f, p, s * 2) : C.push(c, p, f, l, s * 2 + 1)))
            }
          }
      if (!C.length) return _t
      let w = g.length / 3,
        T = new Float64Array(w * 3),
        E = new Float64Array(w * 3),
        ee = new Float64Array(w),
        te = new Uint8Array(w),
        ne = new Uint8Array(w),
        { roundH: re, roundV: D } = this.o,
        O = (e) => {
          if (ne[e]) return
          ne[e] = 1
          let t = g[e * 3],
            n = g[e * 3 + 1],
            r = g[e * 3 + 2],
            a = this.sample(t, n, r, !0),
            o = this.gx * this.gx + this.gy * this.gy + this.gz * this.gz,
            s = Math.sqrt(o) || 1
          if (o > 1e-10) {
            let e = (a - d) / o,
              c = Math.abs(e) * s
            ;(c > i * 0.5 && (e *= (i * 0.5) / c),
              (t -= this.gx * e),
              (n -= this.gy * e),
              (r -= this.gz * e))
          }
          let c = o < 1e-12,
            l = c ? 0 : -this.gx / s,
            u = c ? 1 : -this.gy / s,
            f = c ? 0 : -this.gz / s,
            p = 0
          for (let [e, i] of wt) {
            let a = u * u * (1 - z(e, D)) + (1 - u * u) * (1 - z(e, re))
            p += i * Math.max(0, this.sample(t + l * e, n + u * e, r + f * e, !1) - a)
          }
          let m = n - x(t, r),
            h = m > -1 && m < 0.3,
            _ = h ? 0.55 + 0.45 * z(m - 0.22, 0.2) : 1
          ;((T[e * 3] = t),
            (T[e * 3 + 1] = n),
            (T[e * 3 + 2] = r),
            (E[e * 3] = l),
            (E[e * 3 + 1] = u),
            (E[e * 3 + 2] = f),
            (ee[e] = (1 - Math.min(0.62, p * 0.85)) * _),
            (te[e] = +!!h))
        }
      for (let e = 0; e < C.length; e += 5) for (let t = 0; t < 4; t++) O(C[e + t])
      let k = [],
        A = [],
        j = Et(C, T, E, ee, te, k, A, w)
      for (let e = 0; e < C.length; e += 5) {
        if (!j[e / 5]) continue
        let t = C[e],
          n = C[e + 1],
          r = C[e + 2],
          i = C[e + 3]
        ;(T[t * 3] - T[r * 3]) ** 2 +
          (T[t * 3 + 1] - T[r * 3 + 1]) ** 2 +
          (T[t * 3 + 2] - T[r * 3 + 2]) ** 2 <=
        (T[n * 3] - T[i * 3]) ** 2 +
          (T[n * 3 + 1] - T[i * 3 + 1]) ** 2 +
          (T[n * 3 + 2] - T[i * 3 + 2]) ** 2
          ? k.push(t, n, r, t, r, i)
          : k.push(t, n, i, n, r, i)
      }
      let ie = w + A.length / 4,
        ae = new Int32Array(ie).fill(-1),
        oe = 0
      for (let e of k) ae[e] < 0 && (ae[e] = oe++)
      let M = {
        pos: new Float64Array(oe * 3),
        nrm: new Float32Array(oe * 3),
        ao: new Float32Array(oe),
        base: new Uint8Array(oe),
        idx: new Uint16Array(k.length),
      }
      for (let e = 0; e < ie; e++) {
        let t = ae[e]
        if (!(t < 0)) {
          if (e < w) {
            for (let n = 0; n < 3; n++)
              ((M.pos[t * 3 + n] = T[e * 3 + n]), (M.nrm[t * 3 + n] = E[e * 3 + n]))
            ;((M.ao[t] = ee[e]), (M.base[t] = te[e]))
          } else {
            let n = (e - w) * 4,
              r = A[n + 3]
            for (let e = 0; e < 3; e++)
              ((M.pos[t * 3 + e] = A[n + e]),
                (M.nrm[t * 3 + e] = e === r >> 1 ? (r & 1 ? -1 : 1) : 0))
            ;((M.ao[t] = 1), (M.base[t] = 0))
          }
        }
      }
      for (let e = 0; e < k.length; e++) M.idx[e] = ae[k[e]]
      return M
    }
  }
function Et(e, t, n, r, i, a, o, s) {
  let c = e.length / 5,
    l = new Uint8Array(c).fill(1),
    u = new Map()
  for (let a = 0; a < c; a++) {
    let o = e[a * 5 + 4],
      s = o >> 1,
      c = o & 1 ? -1 : 1,
      l = !0,
      d = 0
    for (let o = 0; o < 4 && l; o++) {
      let u = e[a * 5 + o]
      ;(r[u] < 0.999 || i[u] || n[u * 3 + s] * c < 0.99999) && (l = !1)
      let f = t[u * 3 + s]
      o === 0 ? (d = f) : Math.abs(f - d) > 1e-5 && (l = !1)
    }
    if (!l) continue
    let f = o * 1e6 + Math.round(d * 1e4) + 5e5,
      p = u.get(f)
    ;(p || u.set(f, (p = [])), p.push(a))
  }
  for (let [n, r] of u) {
    if (r.length < 4) continue
    let i = Math.floor(n / 1e6),
      c = i >> 1,
      u = (c + 1) % 3,
      d = (c + 2) % 3,
      f = new Map()
    for (let t of r)
      for (let n = 0; n < 4; n++) {
        let r = e[t * 5 + n],
          i = e[t * 5 + ((n + 1) % 4)],
          a = r < i ? r * 65536 + i : i * 65536 + r
        f.set(a, (f.get(a) ?? 0) + 1)
      }
    let p = new Set()
    for (let [e, t] of f) t === 1 && (p.add(Math.floor(e / 65536)), p.add(e % 65536))
    let m = 1 / 0,
      h = -1 / 0,
      g = 1 / 0,
      _ = -1 / 0
    for (let e of p)
      ((m = Math.min(m, t[e * 3 + u])),
        (h = Math.max(h, t[e * 3 + u])),
        (g = Math.min(g, t[e * 3 + d])),
        (_ = Math.max(_, t[e * 3 + d])))
    let v = 0
    for (let n of r) {
      let r = e[n * 5],
        i = e[n * 5 + 2]
      v += Math.abs((t[i * 3 + u] - t[r * 3 + u]) * (t[i * 3 + d] - t[r * 3 + d]))
    }
    if (Math.abs(v - (h - m) * (_ - g)) > 1e-6) continue
    let y = 1e-5,
      b = !0
    for (let e of p) {
      let n = t[e * 3 + u],
        r = t[e * 3 + d]
      Math.abs(n - m) > y &&
        Math.abs(n - h) > y &&
        Math.abs(r - g) > y &&
        Math.abs(r - _) > y &&
        (b = !1)
    }
    if (!b) continue
    let x = (m + h) / 2,
      S = (g + _) / 2,
      C = [...p].sort(
        (e, n) =>
          Math.atan2(t[e * 3 + d] - S, t[e * 3 + u] - x) -
          Math.atan2(t[n * 3 + d] - S, t[n * 3 + u] - x)
      ),
      w = s + o.length / 4,
      T = [0, 0, 0]
    ;((T[c] = t[e[r[0] * 5] * 3 + c]), (T[u] = x), (T[d] = S), o.push(T[0], T[1], T[2], i))
    let E = (i & 1) == 1
    for (let e = 0; e < C.length; e++) {
      let t = C[e],
        n = C[(e + 1) % C.length]
      E ? a.push(w, n, t) : a.push(w, t, n)
    }
    for (let e of r) l[e] = 0
  }
  return l
}
var Dt = class {
    pos = new Float32Array(12288)
    nrm = new Float32Array(12288)
    ao = new Float32Array(4096)
    base = new Float32Array(4096)
    idx = new Uint32Array(24576)
    nv = 0
    ni = 0
    reserve(e, t) {
      if (this.nv + e > this.ao.length) {
        let t = Math.max(this.ao.length * 2, this.nv + e),
          n = (e, n) => {
            let r = new Float32Array(t * n)
            return (r.set(e), r)
          }
        ;((this.pos = n(this.pos, 3)),
          (this.nrm = n(this.nrm, 3)),
          (this.ao = n(this.ao, 1)),
          (this.base = n(this.base, 1)))
      }
      if (this.ni + t > this.idx.length) {
        let e = new Uint32Array(Math.max(this.idx.length * 2, this.ni + t))
        ;(e.set(this.idx), (this.idx = e))
      }
    }
    stamp(e, t, n, r) {
      let i = e.ao.length
      if (!i) return
      this.reserve(i, e.idx.length)
      let a = this.nv,
        o = this.pos
      for (let s = 0; s < i; s++) {
        let i = (a + s) * 3
        ;((o[i] = e.pos[s * 3] + t),
          (o[i + 1] = e.pos[s * 3 + 1] + n),
          (o[i + 2] = e.pos[s * 3 + 2] + r))
      }
      ;(this.nrm.set(e.nrm, a * 3), this.ao.set(e.ao, a))
      for (let t = 0; t < i; t++) this.base[a + t] = e.base[t]
      for (let t = 0; t < e.idx.length; t++) this.idx[this.ni + t] = e.idx[t] + a
      ;((this.nv += i), (this.ni += e.idx.length))
    }
    posts(e) {
      this.reserve(e.count, e.ix.length)
      let t = this.nv
      ;(this.pos.set(e.p, t * 3),
        this.nrm.set(e.n, t * 3),
        this.ao.set(e.ao, t),
        this.base.fill(0, t, t + e.count))
      for (let n = 0; n < e.ix.length; n++) this.idx[this.ni + n] = e.ix[n] + t
      ;((this.nv += e.count), (this.ni += e.ix.length))
    }
    build(e) {
      if (!this.nv) return null
      let t = this.nv,
        n = new s()
      return (
        n.setAttribute(`position`, new c(this.pos.slice(0, t * 3), 3)),
        n.setAttribute(`normal`, new c(this.nrm.slice(0, t * 3), 3)),
        n.setAttribute(`aKind`, new c(e, 1)),
        n.setAttribute(`aBase`, new c(this.base.slice(0, t), 1)),
        n.setAttribute(`aAO`, new c(this.ao.slice(0, t), 1)),
        n.setIndex(
          t > 65535
            ? new c(this.idx.slice(0, this.ni), 1)
            : new c(Uint16Array.from(this.idx.subarray(0, this.ni)), 1)
        ),
        n.computeBoundingSphere(),
        n.computeBoundingBox(),
        n
      )
    }
  },
  Ot = class {
    ctx
    lastPiles = []
    kernel
    cache
    posts
    lastMisses = 0
    constructor(e, t = {}) {
      this.ctx = e
      let n = { ...mt, ...t }
      ;((n.roundH = Math.min(n.roundH, 0.4)),
        (n.roundV = Math.min(n.roundV, 0.4)),
        (this.kernel = new Tt(n)))
      let r = JSON.stringify([n.n, n.roundH, n.roundV, n.flare, n.sink, n.iso]),
        i = vt.get(r)
      ;(i || vt.set(r, (i = new Map())),
        (this.cache = i),
        (this.posts = new ft(e, { radius: n.postRadius, inset: n.postInset })))
    }
    buildRegion(e, t, n, r, i) {
      let { ctx: a, kernel: o, cache: s } = this
      ;((this.lastPiles = []), (this.lastMisses = 0))
      let c = [...e],
        l = 0
      for (let e of c) l = Math.max(l, e[1])
      let u = t - 2,
        d = n - 2,
        f = r - t + 4,
        p = i - n + 4,
        m = l + 5,
        h = new Uint8Array(f * m * p),
        g = new Int16Array(f * p)
      for (let e = 0; e < f; e++)
        for (let t = 0; t < p; t++) {
          let n = u + e,
            r = d + t
          g[e * p + t] = a.groundLevel(n, r) ?? -100
          for (let i = 2; i < m; i++) a.occ(n, i - 2, r) && (h[(e * m + i) * p + t] = 1)
        }
      let _ = new Uint8Array(f * m * p),
        v = []
      for (let [e, a, o] of c)
        for (let s = -1; s <= 1; s++) {
          let c = e + s
          if (!(c < t || c >= r))
            for (let e = -1; e <= 1; e++) {
              let t = o + e
              if (!(t < n || t >= i))
                for (let e = -1; e <= 1; e++) {
                  let n = ((c - u) * m + (a + e - -2)) * p + (t - d)
                  _[n] || ((_[n] = 1), v.push(n))
                }
            }
        }
      let y = new Uint8Array(27),
        b = new Uint8Array(9),
        x = new Dt()
      for (let e of v) {
        let t = Math.floor(e / (m * p)),
          n = Math.floor(e / p) % m,
          r = e % p,
          i = -2 + n,
          a = 0,
          c = 1,
          l = 0
        for (let e = -1; e <= 1; e++)
          for (let i = -1; i <= 1; i++)
            for (let o = -1; o <= 1; o++) {
              let s = h[((t + e) * m + (n + i)) * p + (r + o)]
              ;((y[(e + 1) * 9 + (i + 1) * 3 + (o + 1)] = s), s && ((a += c), l++), (c *= 2))
            }
        if (l === 0 || l === 27) continue
        c = 2 ** 27
        for (let e = -1; e <= 1; e++)
          for (let n = -1; n <= 1; n++) {
            let o = g[(t + e) * p + (r + n)] - i,
              s = o <= -1 ? bt : o === 0 ? B : o === 1 ? xt : St
            ;((b[(e + 1) * 3 + (n + 1)] = s), (a += s * c), (c *= 4))
          }
        let f = s.get(a)
        ;(f || ((f = o.make(y, b)), s.size >= yt && s.clear(), s.set(a, f), this.lastMisses++),
          x.stamp(f, u + t, D + i, d + r))
      }
      let S = x.nv
      if (o.o.posts) {
        let e = new dt()
        for (let [a, o, s] of this.posts.postsIn(c, t, n, r, i)) {
          let t = this.posts.emit(e, a, o, s)
          t && this.lastPiles.push(t)
        }
        x.posts(e)
      }
      let C = new Float32Array(x.nv)
      return (C.fill(0, 0, S), C.fill(1, S), x.build(C))
    }
  }
function kt() {
  return new Ot(
    { occ: (e, t, n) => e === 0 && t === 0 && n === 0, groundLevel: () => null, floor: () => -10 },
    { posts: !1 }
  )
    .buildRegion([[0, 0, 0]], -1, -1, 2, 2)
    .translate(-0.5, -D - 0.5, -0.5)
}
var V = 16,
  At = class e {
    grid
    island
    group = new d()
    material = pt()
    mesher
    meshOpts
    chunks = new Map()
    chunkPiles = new Map()
    pileMarkers = new f(new v(he, 16).rotateX(-Math.PI / 2), new x(), 512)
    dirty = new Set()
    hidden = new Set()
    groundTouches = []
    constructor(e, t, n) {
      ;((this.grid = e), (this.island = t), (this.meshOpts = n === `low` ? { n: 6 } : {}))
      let r = new URLSearchParams(location.search).get(`round`)?.split(`,`).map(Number)
      ;(r &&
        r.length === 2 &&
        r.every((e) => e > 0 && e <= 0.4) &&
        Object.assign(this.meshOpts, { roundH: r[0], roundV: r[1] }),
        (this.group.name = `blocks`))
      let i = {
        occ: (t, n, r) => e.has(t, n, r) && !this.hidden.has(I.key(t, n, r)),
        groundLevel: (e, n) => t.groundLevel(e, n),
        floor: (e, n) => t.height(e, n),
      }
      ;((this.mesher = new Ot(i, this.meshOpts)),
        this.pileMarkers.layers.set(7),
        (this.pileMarkers.frustumCulled = !1),
        (this.pileMarkers.count = 0),
        this.group.add(this.pileMarkers),
        e.onChange((e, t, n) => this.touch(e, n)))
    }
    groundChanged(e, t = 0) {
      let n = N.uTime.value + t
      for (let [r, i] of e)
        for (let e = -3; e <= 3; e += 3)
          for (let a = -3; a <= 3; a += 3)
            t > 0
              ? this.groundTouches.push({ x: r + e, z: i + a, at: n })
              : this.touch(r + e, i + a)
    }
    static chunkKey(e, t) {
      return `${e},${t}`
    }
    touch(t, n) {
      for (let r = -1; r <= 1; r++)
        for (let i = -1; i <= 1; i++)
          this.dirty.add(e.chunkKey(Math.floor((t + r) / V), Math.floor((n + i) / V)))
    }
    setHidden(e, t, n, r) {
      let i = I.key(e, t, n)
      ;(r ? this.hidden.add(i) : this.hidden.delete(i), this.touch(e, n))
    }
    rebuildAll() {
      for (let [e, , t] of this.grid.entries()) this.touch(e, t)
      for (let e of this.chunks.keys()) this.dirty.add(e)
      this.flush()
    }
    flush() {
      if (this.groundTouches.length) {
        let e = N.uTime.value,
          t = this.groundTouches.filter((t) => t.at <= e)
        if (t.length) {
          this.groundTouches = this.groundTouches.filter((t) => t.at > e)
          for (let e of t) this.touch(e.x, e.z)
        }
      }
      if (this.dirty.size === 0) return !1
      let e = [...this.grid.entries()].filter(([e, t, n]) => !this.hidden.has(I.key(e, t, n)))
      for (let n of this.dirty) {
        let [r, i] = n.split(`,`).map(Number),
          a = r * V,
          o = i * V,
          s = e
            .filter(([e, , t]) => e >= a - 1 && e <= a + V && t >= o - 1 && t <= o + V)
            .map(([e, t, n]) => [e, t, n]),
          c = s.length ? this.mesher.buildRegion(s, a, o, a + V, o + V) : null
        this.chunkPiles.set(n, c ? this.mesher.lastPiles : [])
        let l = this.chunks.get(n)
        if ((l && (l.geometry.dispose(), this.group.remove(l), this.chunks.delete(n)), c)) {
          let e = new t(c, this.material)
          ;((e.castShadow = !0),
            (e.receiveShadow = !0),
            e.layers.enable(5),
            (e.name = `chunk ${n}`),
            this.group.add(e),
            this.chunks.set(n, e))
        }
      }
      return (this.dirty.clear(), this.updatePileMarkers(), !0)
    }
    updatePileMarkers() {
      let e = new o(),
        t = 0
      for (let n of this.chunkPiles.values())
        for (let [r, i] of n) {
          if (t >= this.pileMarkers.instanceMatrix.count) break
          this.pileMarkers.setMatrixAt(t++, e.makeTranslation(r, 0.2, i))
        }
      ;((this.pileMarkers.count = t), (this.pileMarkers.instanceMatrix.needsUpdate = !0))
    }
    buildLoneBlock(e, t, n) {
      return new Ot(
        {
          occ: (r, i, a) => r === e && i === t && a === n,
          groundLevel: () => null,
          floor: (e, t) => this.island.height(e, t),
        },
        this.meshOpts
      ).buildRegion([[e, t, n]], e - 1, n - 1, e + 2, n + 2)
    }
    prewarm(e) {
      if (!e.length) return
      let t = new Set(e.map(([e, t, n]) => I.key(e, t, n))),
        n = new Ot(
          {
            occ: (e, n, r) => n >= 0 && t.has(I.key(e, n, r)),
            groundLevel: (e, t) => this.island.groundLevel(e, t),
            floor: (e, t) => this.island.height(e, t),
          },
          this.meshOpts
        ),
        r = e.map((e) => e[0]),
        i = e.map((e) => e[2])
      n.buildRegion(
        e,
        Math.min(...r) - 1,
        Math.min(...i) - 1,
        Math.max(...r) + 2,
        Math.max(...i) + 2
      )?.dispose()
    }
    get chunkMeshes() {
      return [...this.chunks.values()]
    }
  },
  jt = 0.17,
  Mt = 0.42,
  Nt = 0.26,
  Pt = 24,
  Ft = 0.035,
  It = 0.4,
  Lt = [0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1],
  Rt = (e) => e * e,
  zt = class {
    grid
    blocks
    island
    terrain
    rig
    fx
    sound
    history
    tool = `build`
    group = new d()
    obstacles = []
    onPlace
    onRemove
    onCeiling
    budget = () => 1 / 0
    onShort
    row = null
    rowMesh
    brush = null
    lastPopFx = 0
    lastLandFx = 0
    hover = null
    target = null
    anims = []
    slots = [, , , ,].fill(null)
    ghost
    ghostVis = 0
    ghostPos = new g()
    ghostPrevKey = ``
    ghostBounce = 0
    constructor(e, n, r, i, a, o, s, c) {
      ;((this.grid = e),
        (this.blocks = n),
        (this.island = r),
        (this.terrain = i),
        (this.rig = a),
        (this.fx = o),
        (this.sound = s),
        (this.history = c),
        (this.group.name = `builder`))
      let l = Ee(),
        u = kt().scale(1.04, 1.04, 1.04)
      ;((this.ghost = new t(u, l)),
        (this.ghost.renderOrder = 15),
        (this.ghost.visible = !1),
        this.group.add(this.ghost))
      let d = l.clone()
      ;((d.uniforms.uTime = N.uTime),
        (d.uniforms.uAlpha.value = 1),
        (this.rowMesh = new f(u, d, Pt)),
        (this.rowMesh.instanceColor = new b(new Float32Array(72), 3)),
        (this.rowMesh.renderOrder = 15),
        (this.rowMesh.frustumCulled = !1),
        (this.rowMesh.count = 0),
        (this.rowMesh.visible = !1),
        this.group.add(this.rowMesh))
    }
    warmMesh = null
    warmup(e) {
      if (
        ((this.ghost.visible = e),
        (this.rowMesh.visible = e),
        (this.rowMesh.count = +!!e),
        e && !this.warmMesh)
      ) {
        let e = this.blocks.buildLoneBlock(0, 0, 0)
        e &&
          ((this.warmMesh = new t(e, this.makeAnimMaterial(0, 0, 0))),
          (this.warmMesh.castShadow = this.warmMesh.receiveShadow = !0),
          (this.warmMesh.position.y = -6),
          this.group.add(this.warmMesh))
      } else
        !e &&
          this.warmMesh &&
          (this.group.remove(this.warmMesh),
          this.warmMesh.geometry.dispose(),
          this.releaseMaterial(this.warmMesh.material),
          (this.warmMesh = null))
    }
    setTool(e) {
      ;((this.tool = e), this.refreshTarget())
    }
    setHover(e) {
      ;((this.hover = e), this.refreshTarget())
    }
    rowStart(e, t, n = !1) {
      this.row = null
      let r = (this.tool === `remove`) !== t,
        i = this.pick(e.ndcX, e.ndcY)
      if (!i) return
      let a,
        o = !1
      if (r) {
        if (i.kind !== `block`) return
        a = i.cell
      } else {
        let e = this.placementFor(i)
        if (!e) return
        ;((a = e.cell), (o = i.kind === `block`))
      }
      let s = n ? this.rig.groundAt(e.ndcX, e.ndcY, new g()) : null
      ;((this.row = {
        removing: r,
        start: a,
        fromBlock: o,
        px: e.x,
        py: e.y,
        ndcX: e.ndcX,
        ndcY: e.ndcY,
        axis: null,
        vertical: !1,
        cells: [],
        ceiling: !1,
        follow: n,
        anchor: s,
      }),
        this.rowMove(e, !1))
    }
    rowMove(e, t) {
      let n = this.row
      if (!n) return
      t !== n.vertical && ((n.vertical = t), (n.axis = null))
      let r = 0
      if (n.follow) {
        let t = this.rig.groundAt(e.ndcX, e.ndcY, new g())
        if (t && n.anchor && !n.vertical) {
          let e = t.x - n.anchor.x,
            i = t.z - n.anchor.z
          ;(!n.axis &&
            Math.hypot(e, i) > 0.6 &&
            (n.axis = Math.abs(e) > Math.abs(i) ? [1, 0, 0] : [0, 0, 1]),
            n.axis && (r = Math.round(Vt(e * n.axis[0] + i * n.axis[2], -23, 23))))
        }
      } else
        (!n.axis && Math.hypot(e.x - n.px, e.y - n.py) > 10 && (n.axis = this.rowAxis(n, e)),
          n.axis && (r = Math.round(Vt(this.alongAxis(n.start, n.axis, e), -23, 23))))
      let i = new Map(n.cells.map((e) => [e.cell.join(`,`), e.born])),
        a = performance.now(),
        o = Math.sign(r)
      n.cells = []
      let s = !1,
        c = !1,
        l = n.removing ? 1 / 0 : this.budget()
      n.short = !1
      for (let e = 0; e <= Math.abs(r); e++) {
        let t = n.axis ?? [0, 0, 0],
          r = [n.start[0] + t[0] * e * o, n.start[1] + t[1] * e * o, n.start[2] + t[2] * e * o],
          u
        if (n.removing) {
          if (((u = r[1] >= 0 && this.grid.has(...r) && !this.busy(...r)), !u)) continue
        } else
          ((u = this.canPlace(r, e === 0 ? n.fromBlock : s)),
            (s = u),
            u && l-- <= 0 && ((u = !1), (n.short = !0)))
        if (
          (n.cells.push({ cell: r, valid: u, born: i.get(r.join(`,`)) ?? a }),
          !n.removing && r[1] >= 8)
        ) {
          c = !0
          break
        }
      }
      ;(c && !n.ceiling && this.onCeiling?.(), (n.ceiling = c))
    }
    rowEnd() {
      let e = this.row
      if (((this.row = null), !e)) return
      let t = e.cells.filter((e) => e.valid).map((e) => e.cell)
      if ((e.short && this.onShort?.(), !t.length)) {
        e.removing || this.sound.deny()
        return
      }
      ;(e.removing
        ? t.forEach((e, t) => this.remove(...e, !1, t * Ft))
        : t.forEach((e, t) => this.place(...e, !1, t * Ft, Lt[t % Lt.length])),
        this.record(e.removing ? `remove` : `place`, t))
    }
    rowCancel() {
      this.row = null
    }
    rowAxis(e, t) {
      if (e.vertical) return [0, 1, 0]
      let n = this.rig.camera,
        r = new g(e.start[0] + 0.5, D + e.start[1] + 0.5, e.start[2] + 0.5),
        i = r.clone().project(n),
        a = new m((t.ndcX - e.ndcX) * n.aspect, t.ndcY - e.ndcY).normalize(),
        o = [1, 0, 0],
        s = -1
      for (let e of [
        [1, 0, 0],
        [0, 0, 1],
      ]) {
        let t = r
            .clone()
            .add(new g(...e))
            .project(n),
          c = new m((t.x - i.x) * n.aspect, t.y - i.y).normalize(),
          l = Math.abs(c.dot(a))
        l > s && ((s = l), (o = e))
      }
      return o
    }
    alongAxis(e, t, n) {
      let r = this.rig.rayFrom(n.ndcX, n.ndcY),
        i = new g(...t),
        a = new g(e[0] + 0.5, D + e[1] + 0.5, e[2] + 0.5).sub(r.origin),
        o = i.dot(r.direction),
        s = 1 - o * o
      return s < 1e-4 ? 0 : (o * r.direction.dot(a) - i.dot(a)) / s
    }
    brushProbe(e) {
      return this.tool === `remove` && this.pick(e.ndcX, e.ndcY)?.kind === `block`
    }
    brushStart(e) {
      if (this.tool !== `remove`) return !1
      let t = this.pick(e.ndcX, e.ndcY)
      return !t || t.kind !== `block`
        ? !1
        : ((this.brush = {
            cells: [],
            last: this.rig.groundAt(e.ndcX, e.ndcY, new g()),
            travel: 0,
          }),
          this.brushAt(e.ndcX, e.ndcY),
          !0)
    }
    brushMove(e) {
      let t = this.brush
      if (!t) return
      let n = t.last,
        r = this.rig.groundAt(e.ndcX, e.ndcY, new g()),
        i = n && r ? Math.hypot(r.x - n.x, r.z - n.z) : 0,
        a = It - t.travel,
        o = new g()
      for (; n && r && i > 0 && a <= i; )
        (o
          .copy(n)
          .lerp(r, a / i)
          .project(this.rig.camera),
          this.brushAt(o.x, o.y),
          (a += It))
      ;((t.travel = i > 0 ? It - (a - i) : t.travel), r && (t.last = r), this.setHover(e))
    }
    brushEnd() {
      let e = this.brush
      ;((this.brush = null), e?.cells.length && this.record(`remove`, e.cells))
    }
    brushAt(e, t) {
      let n = this.pick(e, t)
      n?.kind !== `block` ||
        this.busy(...n.cell) ||
        (this.remove(...n.cell, !1), this.brush.cells.push(n.cell))
    }
    act(e, t) {
      let n = (this.tool === `remove`) !== t,
        r = this.pick(e.ndcX, e.ndcY)
      if (!r) return
      if (n) {
        r.kind === `block` && this.remove(...r.cell)
        return
      }
      let i = this.placementFor(r)
      i?.valid && this.budget() < 1
        ? (this.sound.deny(), this.onShort?.())
        : i?.valid
          ? this.place(...i.cell)
          : (this.sound.deny(), i?.ceiling && this.onCeiling?.())
    }
    get pending() {
      let e = 0
      for (let t of this.anims) t.kind === `drop` && !t.started && e++
      return e
    }
    pick(e, t, n = !1) {
      let r = this.rig.rayFrom(e, t),
        i = r.origin,
        a = r.direction,
        o = 500
      for (let e of this.obstacles) {
        let t = Bt(i, a, e)
        t < o && (o = t)
      }
      let s = this.dda(i, a, o),
        c = null,
        l = this.island.raycast(i, a, s ? s.t : o, !0)
      if (l) {
        let e = (this.island.levelAt(Math.floor(l.x), Math.floor(l.z)) ?? 0) < 0
        ;(n || e || (!l.water && this.island.landSdf(l.x, l.z) < 0)) &&
          (c = { kind: `ground`, ...l })
      }
      return s && (!c || s.t <= c.t) ? s : c
    }
    dda(e, t, n) {
      let r = e.y - D,
        i = Math.floor(e.x),
        a = Math.floor(r),
        o = Math.floor(e.z),
        s = Math.sign(t.x),
        c = Math.sign(t.y),
        l = Math.sign(t.z),
        u = s === 0 ? 1 / 0 : Math.abs(1 / t.x),
        d = c === 0 ? 1 / 0 : Math.abs(1 / t.y),
        f = l === 0 ? 1 / 0 : Math.abs(1 / t.z),
        p = s > 0 ? (i + 1 - e.x) * u : s < 0 ? (e.x - i) * u : 1 / 0,
        m = c > 0 ? (a + 1 - r) * d : c < 0 ? (r - a) * d : 1 / 0,
        h = l > 0 ? (o + 1 - e.z) * f : l < 0 ? (e.z - o) * f : 1 / 0,
        g = 0,
        _ = [0, 0, 0]
      for (let e = 0; e < 600; e++) {
        if (a < 0 && c <= 0) return null
        if (a >= 0 && a < 16 && this.grid.has(i, a, o))
          return { kind: `block`, t: g, cell: [i, a, o], normal: _ }
        if (
          (p < m && p < h
            ? ((i += s), (g = p), (p += u), (_ = [-s, 0, 0]))
            : m < h
              ? ((a += c), (g = m), (m += d), (_ = [0, -c, 0]))
              : ((o += l), (g = h), (h += f), (_ = [0, 0, -l])),
          g > n)
        )
          return null
      }
      return null
    }
    placementFor(e) {
      let t,
        n = !1
      if (e.kind === `block`)
        ((t = [e.cell[0] + e.normal[0], e.cell[1] + e.normal[1], e.cell[2] + e.normal[2]]),
          (n = !0))
      else {
        let n = Math.floor(e.x),
          r = Math.floor(e.z)
        t = [n, this.island.groundLevel(n, r) ?? 0, r]
      }
      let r = this.canPlace(t, n)
      return { cell: t, valid: r, ceiling: !r && t[1] >= 8 }
    }
    canPlace([e, t, n], r) {
      if (
        t < 0 ||
        t >= 8 ||
        this.grid.has(e, t, n) ||
        this.island.isReserved(e, n) ||
        this.animating(e, t, n)
      )
        return !1
      let i = this.island.groundLevel(e, n)
      return i === null
        ? (this.island.levelAt(e, n) ?? 0) < 0 ||
            t !== 0 ||
            (r && this.island.minHeightUnder(e, n, e + 1, n + 1) > -2.6)
        : t >= i
    }
    animating(e, t, n) {
      return this.anims.some((r) => r.cell[0] === e && r.cell[1] === t && r.cell[2] === n)
    }
    busy(e, t, n) {
      return this.anims.some(
        (r) => r.kind !== `squash` && r.cell[0] === e && r.cell[1] === t && r.cell[2] === n
      )
    }
    cancelSquash(e, t, n) {
      let r = this.anims.findIndex(
        (r) => r.kind === `squash` && r.cell[0] === e && r.cell[1] === t && r.cell[2] === n
      )
      if (r < 0) return
      let i = this.anims[r]
      if (i.slot !== void 0) {
        let e = this.blocks.material.userData.uniforms
        ;((e.uAnimCell.value[i.slot].w = 0),
          e.uAnimXform.value[i.slot].set(1, 1, 1, 0),
          (this.slots[i.slot] = null))
      }
      this.anims.splice(r, 1)
    }
    refreshTarget() {
      if (((this.target = null), !this.hover || (this.tool !== `build` && this.tool !== `remove`)))
        return
      let e = this.pick(this.hover.ndcX, this.hover.ndcY)
      e &&
        (this.tool === `remove`
          ? e.kind === `block` && (this.target = { cell: e.cell, valid: !0 })
          : ((this.target = this.placementFor(e)),
            this.target?.valid &&
              this.budget() < 1 &&
              (this.target = { ...this.target, valid: !1, short: !0 })))
    }
    undo(e) {
      if (
        e.cells.some((e) => this.busy(...e)) ||
        (e.op === `remove` && !this.afford(e.cells.length))
      )
        return !1
      let t = [...e.cells].reverse(),
        n = Math.min(Ft, 0.9 / t.length)
      return (
        e.op === `place`
          ? t.forEach((e, t) => this.remove(...e, !1, t * n))
          : t.forEach((e, t) => this.place(...e, !1, t * n, Lt[t % Lt.length])),
        !0
      )
    }
    redo(e) {
      if (
        e.cells.some((e) => this.busy(...e)) ||
        (e.op === `place` && !this.afford(e.cells.length))
      )
        return !1
      let t = Math.min(Ft, 0.9 / e.cells.length)
      return (
        e.op === `place`
          ? e.cells.forEach((e, n) => this.place(...e, !1, n * t, Lt[n % Lt.length]))
          : e.cells.forEach((e, n) => this.remove(...e, !1, n * t)),
        !0
      )
    }
    afford(e) {
      return this.budget() >= e || (this.sound.deny(), this.onShort?.(), !1)
    }
    record(e, t) {
      this.history.record({ kind: `blocks`, op: e, cells: t })
    }
    place(e, t, n, r = !0, i = 0, a = 0) {
      if (this.grid.has(e, t, n) || this.animating(e, t, n)) return
      r && this.record(`place`, [[e, t, n]])
      let o = { kind: `drop`, cell: [e, t, n], t: -i, note: a }
      ;(this.anims.push(o), i <= 0 && this.startDrop(o))
    }
    startDrop(e) {
      e.started = !0
      let [n, r, i] = e.cell
      ;(this.grid.set(n, r, i, 1), this.blocks.setHidden(n, r, i, !0))
      let a = this.blocks.buildLoneBlock(n, r, i)
      if (a) {
        let o = this.makeAnimMaterial(n, r, i),
          s = new t(a, o)
        ;((s.castShadow = !0),
          (s.receiveShadow = !0),
          (s.position.y = 0.9),
          this.group.add(s),
          (e.mesh = s),
          (e.mat = o))
      }
      ;((this.ghostVis = 0), this.onPlace?.([n, r, i]))
    }
    remove(e, t, n, r = !0, i = 0) {
      if (this.busy(e, t, n) || !this.grid.has(e, t, n)) return
      ;(this.cancelSquash(e, t, n), r && this.record(`remove`, [[e, t, n]]))
      let a = { kind: `pop`, cell: [e, t, n], t: -i }
      ;(this.anims.push(a), i <= 0 && this.startPop(a))
    }
    startPop(e) {
      e.started = !0
      let [n, r, i] = e.cell,
        o = this.blocks.buildLoneBlock(n, r, i)
      if ((this.grid.set(n, r, i, 0), o)) {
        let a = this.makeAnimMaterial(n, r, i),
          s = new t(o, a)
        ;((s.castShadow = !0), (s.receiveShadow = !0), this.group.add(s), (e.mesh = s), (e.mat = a))
      }
      let s = performance.now(),
        c = s - this.lastPopFx < 30
      this.lastPopFx = s
      let l = new g(n + 0.5, D + r, i + 0.5)
      ;(this.fx.splinters(l, c ? 3 : 14, Math.max(this.island.height(n + 0.5, i + 0.5), 0)),
        this.fx.dust(l.clone().setY(l.y + 0.3), 0.45, c ? 3 : 10, new a(`#EBD9B8`)),
        c || this.sound.remove(),
        this.onRemove?.([n, r, i]),
        this.refreshTarget())
    }
    clearAll(e = !0) {
      this.row = null
      for (let e = this.anims.length - 1; e >= 0; e--) {
        let t = this.anims[e]
        t.kind === `drop` &&
          (t.started || this.startDrop(t),
          t.mesh &&
            (this.group.remove(t.mesh), t.mesh.geometry.dispose(), this.releaseMaterial(t.mat)),
          this.blocks.setHidden(...t.cell, !1),
          this.anims.splice(e, 1))
      }
      let t = []
      for (let [e, n, r] of this.grid.entries()) this.busy(e, n, r) || t.push([e, n, r])
      if (!t.length) return null
      let n = t.reduce((e, t) => e + t[0], 0) / t.length,
        r = t.reduce((e, t) => e + t[2], 0) / t.length,
        i = (e) => Math.round(Math.hypot(e[0] - n, e[2] - r) * 2)
      t.sort((e, t) => i(e) - i(t) || t[1] - e[1])
      let a = Math.min(Ft, 0.9 / t.length)
      return (t.forEach((e, t) => this.remove(...e, !1, t * a)), e && this.record(`remove`, t), t)
    }
    ready(e) {
      return !e.cells.some((e) => this.busy(...e))
    }
    matPool = []
    makeAnimMaterial(e, t, n) {
      let r = this.matPool.pop() ?? pt(),
        i = r.userData.uniforms
      return (i.uAnimCell.value[0].set(e, D + t, n, 1), i.uAnimXform.value[0].set(1, 1, 1, 0), r)
    }
    releaseMaterial(e) {
      e && this.matPool.push(e)
    }
    landed(e) {
      let [t, n, r] = e.cell
      ;(e.mesh &&
        (this.group.remove(e.mesh), e.mesh.geometry.dispose(), this.releaseMaterial(e.mat)),
        this.blocks.setHidden(t, n, r, !1))
      let i = this.slots.indexOf(null)
      ;((e.kind = `squash`),
        (e.t = 0),
        (e.mesh = void 0),
        (e.mat = void 0),
        i >= 0 &&
          ((this.slots[i] = e),
          (e.slot = i),
          this.blocks.material.userData.uniforms.uAnimCell.value[i].set(t, D + n, r, 1)))
      let a = new g(t + 0.5, D + n, r + 0.5),
        o = performance.now(),
        s = o - this.lastLandFx < 30
      ;((this.lastLandFx = o),
        this.fx.dust(a, 0.55, s ? 4 : 16),
        this.fx.sparkles(a.clone().setY(a.y + 0.5), s ? 1 : 4),
        s || this.sound.place(n + (e.note ?? 0)),
        this.refreshTarget())
    }
    update(e) {
      let t = this.blocks.material.userData.uniforms
      for (let n = this.anims.length - 1; n >= 0; n--) {
        let r = this.anims[n]
        if (((r.t += e), !(r.t < 0))) {
          if (r.kind === `drop`) {
            if ((r.started || this.startDrop(r), !r.mesh)) {
              this.landed(r)
              continue
            }
            let e = Math.min(r.t / jt, 1),
              t = Rt(e)
            r.mesh.position.y = 0.9 * (1 - t)
            let n = r.mat.userData.uniforms,
              i = 1 + 0.14 * t,
              a = 1 / Math.sqrt(i),
              o = 0.82 + 0.18 * Math.min(e * 2.5, 1)
            ;(n.uAnimXform.value[0].set(a * o, i * o, a * o, 0), e >= 1 && this.landed(r))
          } else if (r.kind === `squash`) {
            let e = Math.min(r.t / Mt, 1),
              i = -0.2 * Math.exp(-7 * e) * Math.cos(e * 13.5),
              a = 1 + i,
              o = 1 - i * 0.55
            ;(r.slot !== void 0 && t.uAnimXform.value[r.slot].set(o, a, o, 0),
              e >= 1 &&
                (r.slot !== void 0 &&
                  ((t.uAnimCell.value[r.slot].w = 0),
                  t.uAnimXform.value[r.slot].set(1, 1, 1, 0),
                  (this.slots[r.slot] = null)),
                this.anims.splice(n, 1)))
          } else if (r.kind === `pop`) {
            r.started || this.startPop(r)
            let e = Math.min(r.t / Nt, 1)
            if (!r.mat) {
              e >= 1 && this.anims.splice(n, 1)
              continue
            }
            let t = r.mat.userData.uniforms,
              i =
                e < 0.3
                  ? 1 + 0.12 * Math.sin((e / 0.3) * Math.PI * 0.5)
                  : 1.12 * (1 - Rt((e - 0.3) / 0.7))
            ;(t.uAnimXform.value[0].set(i, i, i, 0.25 * e),
              e >= 1 &&
                (this.group.remove(r.mesh),
                r.mesh.geometry.dispose(),
                this.releaseMaterial(r.mat),
                this.anims.splice(n, 1)))
          }
        }
      }
      ;(this.updateRow(),
        this.hover && this.hover.type === `mouse` && this.refreshTarget(),
        this.updateGhost(e))
    }
    updateRow() {
      let e = this.row,
        t = this.rowMesh
      if (!e || !e.cells.length) {
        ;((t.visible = !1), e && (this.terrain.cursor.w = 0))
        return
      }
      let n = performance.now(),
        r = new o(),
        i = new y(),
        s = new a(),
        c = new g(),
        l = new g()
      ;(e.cells.forEach((a, o) => {
        let u = Math.min((n - a.born) / 140, 1),
          d = 1 + 0.12 * Math.sin(u * Math.PI) - 0.35 * (1 - u),
          f = (a.valid ? 1 : 0.86) * d * (e.removing ? 1.06 : 1)
        ;(c.set(a.cell[0] + 0.5, D + a.cell[1] + 0.5, a.cell[2] + 0.5),
          t.setMatrixAt(o, r.compose(c, i, l.setScalar(f))),
          t.setColorAt(o, s.set(e.removing ? `#FF8A7A` : a.valid ? `#FFFFFF` : `#FF6B5E`)))
      }),
        (t.count = e.cells.length),
        (t.material.uniforms.uFill.value = e.removing ? 0.24 : 0),
        (t.instanceMatrix.needsUpdate = !0),
        (t.instanceColor.needsUpdate = !0),
        (t.visible = !0))
      let u = e.cells[e.cells.length - 1].cell
      !e.removing && u[1] === (this.island.groundLevel(u[0], u[2]) ?? 0)
        ? this.terrain.cursor.set(u[0] + 0.5, D + u[1], u[2] + 0.5, 2.6)
        : (this.terrain.cursor.w = 0)
    }
    updateGhost(e) {
      if (this.row) {
        ;((this.ghostVis = 0), (this.ghost.visible = !1))
        return
      }
      let t = this.target,
        n = !!t && (t.valid || !!t.ceiling || !!t.short),
        r = this.ghost.material
      if (n) {
        let [n, i, a] = t.cell,
          o = !t.valid,
          s = `${n},${i},${a},${this.tool}`,
          c = new g(n + 0.5, D + i + 0.5, a + 0.5)
        ;((!this.ghost.visible || this.ghostVis < 0.05) && this.ghostPos.copy(c),
          s !== this.ghostPrevKey && ((this.ghostBounce = 1), (this.ghostPrevKey = s)),
          this.ghostPos.lerp(c, 1 - Math.exp(-28 * e)),
          this.ghost.position.copy(this.ghostPos),
          (this.ghostVis = Math.min(1, this.ghostVis + e * 8)),
          (this.ghostBounce = Math.max(0, this.ghostBounce - e * 6)))
        let l =
          this.tool === `remove`
            ? 1.06
            : (o ? 0.86 : 1) * (1 + 0.06 * Math.sin(this.ghostBounce * Math.PI))
        ;(this.ghost.scale.setScalar(l),
          r.uniforms.uColor.value.set(
            this.tool === `remove` ? `#FF8A7A` : o ? `#FF6B5E` : `#FFFFFF`
          ),
          (r.uniforms.uFill.value = this.tool === `remove` ? 0.24 : o ? 0.1 : 0),
          this.tool === `build` && i === (this.island.groundLevel(n, a) ?? 0) && !o
            ? this.terrain.cursor.set(n + 0.5, D + i, a + 0.5, 2.6)
            : (this.terrain.cursor.w = 0))
      } else ((this.ghostVis = Math.max(0, this.ghostVis - e * 10)), (this.terrain.cursor.w = 0))
      ;((r.uniforms.uAlpha.value = this.ghostVis), (this.ghost.visible = this.ghostVis > 0.01))
    }
  }
function Bt(e, t, n) {
  let r = e.x - n.x,
    i = e.z - n.z,
    a = t.x * t.x + t.z * t.z,
    o = 2 * (r * t.x + i * t.z),
    s = r * r + i * i - n.r * n.r,
    c = o * o - 4 * a * s
  if (a < 1e-8 || c < 0) return 1 / 0
  let l = Math.sqrt(c)
  for (let r of [(-o - l) / (2 * a), (-o + l) / (2 * a)]) {
    if (r <= 0) continue
    let i = e.y + t.y * r
    if (i >= n.y0 && i <= n.y1) return r
  }
  if (t.y < 0) {
    let r = (n.y1 - e.y) / t.y,
      i = e.x + t.x * r - n.x,
      a = e.z + t.z * r - n.z
    if (r > 0 && i * i + a * a <= n.r * n.r) return r
  }
  return 1 / 0
}
var Vt = (e, t, n) => Math.min(n, Math.max(t, e)),
  Ht = class {
    past = []
    future = []
    onChange
    record(e) {
      ;(this.past.push(e),
        this.past.length > 200 && this.past.shift(),
        (this.future.length = 0),
        this.emit())
    }
    peekUndo() {
      return this.past[this.past.length - 1]
    }
    peekRedo() {
      return this.future[this.future.length - 1]
    }
    undone() {
      let e = this.past.pop()
      ;(e && this.future.push(e), this.emit())
    }
    redone() {
      let e = this.future.pop()
      ;(e && this.past.push(e), this.emit())
    }
    emit() {
      this.onChange?.(this.past.length > 0, this.future.length > 0)
    }
  },
  Ut = new g()
function H(e, t, n, r, i, a) {
  let o = (2 * Math.PI * i) / 4,
    s = Math.max(a - 2 * i, 0),
    c = Math.PI / 4
  ;(Ut.copy(t), (Ut[r] = 0), Ut.normalize())
  let l = (0.5 * o) / (o + s),
    u = 1 - Ut.angleTo(e) / c
  return Math.sign(Ut[n]) === 1 ? u * l : s / (o + s) + l + l * (1 - u)
}
var Wt = class e extends p {
    constructor(e = 1, t = 1, n = 1, r = 2, i = 0.1) {
      let a = r * 2 + 1
      if (
        ((i = Math.min(e / 2, t / 2, n / 2, i)),
        super(1, 1, 1, a, a, a),
        (this.type = `RoundedBoxGeometry`),
        (this.parameters = { width: e, height: t, depth: n, segments: r, radius: i }),
        a === 1)
      )
        return
      let o = this.toNonIndexed()
      ;((this.index = null),
        (this.attributes.position = o.attributes.position),
        (this.attributes.normal = o.attributes.normal),
        (this.attributes.uv = o.attributes.uv))
      let s = new g(),
        c = new g(),
        l = new g(e, t, n).divideScalar(2).subScalar(i),
        u = this.attributes.position.array,
        d = this.attributes.normal.array,
        f = this.attributes.uv.array,
        p = u.length / 6,
        m = new g(),
        h = 0.5 / a
      for (let r = 0, a = 0; r < u.length; r += 3, a += 2)
        switch (
          (s.fromArray(u, r),
          c.copy(s),
          (c.x -= Math.sign(c.x) * h),
          (c.y -= Math.sign(c.y) * h),
          (c.z -= Math.sign(c.z) * h),
          c.normalize(),
          (u[r + 0] = l.x * Math.sign(s.x) + c.x * i),
          (u[r + 1] = l.y * Math.sign(s.y) + c.y * i),
          (u[r + 2] = l.z * Math.sign(s.z) + c.z * i),
          (d[r + 0] = c.x),
          (d[r + 1] = c.y),
          (d[r + 2] = c.z),
          Math.floor(r / p))
        ) {
          case 0:
            ;(m.set(1, 0, 0),
              (f[a + 0] = H(m, c, `z`, `y`, i, n)),
              (f[a + 1] = 1 - H(m, c, `y`, `z`, i, t)))
            break
          case 1:
            ;(m.set(-1, 0, 0),
              (f[a + 0] = 1 - H(m, c, `z`, `y`, i, n)),
              (f[a + 1] = 1 - H(m, c, `y`, `z`, i, t)))
            break
          case 2:
            ;(m.set(0, 1, 0),
              (f[a + 0] = 1 - H(m, c, `x`, `z`, i, e)),
              (f[a + 1] = H(m, c, `z`, `x`, i, n)))
            break
          case 3:
            ;(m.set(0, -1, 0),
              (f[a + 0] = 1 - H(m, c, `x`, `z`, i, e)),
              (f[a + 1] = 1 - H(m, c, `z`, `x`, i, n)))
            break
          case 4:
            ;(m.set(0, 0, 1),
              (f[a + 0] = 1 - H(m, c, `x`, `y`, i, e)),
              (f[a + 1] = 1 - H(m, c, `y`, `x`, i, t)))
            break
          case 5:
            ;(m.set(0, 0, -1),
              (f[a + 0] = H(m, c, `x`, `y`, i, e)),
              (f[a + 1] = 1 - H(m, c, `y`, `x`, i, t)))
        }
    }
    static fromJSON(t) {
      return new e(t.width, t.height, t.depth, t.segments, t.radius)
    }
  },
  Gt = 4,
  Kt = 0.25,
  qt = class {
    island
    terrain
    grid
    builder
    rig
    fx
    sound
    history
    apply
    tool = `raise`
    group = new d()
    onRefuse
    onEdit
    occupied = () => !1
    active = !1
    hover = null
    target = null
    stroke = null
    ghost
    ghostPlain
    ghostX
    shapes = new Map()
    ghostVis = 0
    ghostKey = ``
    ghostBounce = 0
    ghostPos = new g()
    constructor(e, n, r, i, a, o, s, c, l) {
      ;((this.island = e),
        (this.terrain = n),
        (this.grid = r),
        (this.builder = i),
        (this.rig = a),
        (this.fx = o),
        (this.sound = s),
        (this.history = c),
        (this.apply = l),
        (this.group.name = `terraformer`),
        (this.ghostPlain = Ee()),
        (this.ghostX = Ee()),
        (this.ghostX.depthTest = !1),
        (this.ghost = new t(this.shape(1), this.ghostPlain)),
        (this.ghost.renderOrder = 15),
        (this.ghost.visible = !1),
        this.group.add(this.ghost))
    }
    setTool(e) {
      ;((this.active = e === `raise` || e === `dig`),
        (e === `raise` || e === `dig`) && (this.tool = e),
        (this.stroke = null),
        this.refreshTarget())
    }
    setHover(e) {
      ;((this.hover = e), this.refreshTarget())
    }
    plan(e, t, n) {
      let r = this.island.levelAt(e, t),
        i = this.island.level(e, t),
        a,
        o
      return (
        n
          ? i === void 0
            ? ((a = 0), this.fillable(e, t) || (o = `deep`))
            : i >= 5
              ? (o = `top`)
              : (a = i + 1)
          : i === void 0
            ? ((a = this.cuts(e, t, -1) ? -1 : void 0), a === void 0 && (o = `wet`))
            : i <= -1
              ? (o = `bottom`)
              : (a = i - 1),
        (o = this.refusal(e, t, n) ?? o),
        { cx: e, cz: t, from: r, to: a, ok: !o, why: o }
      )
    }
    strokePlan(e, t, n, r) {
      let i = this.island.level(e, t),
        a = this.refusal(e, t, n)
      if (n) {
        if (i !== void 0 && i >= r) return null
        i === void 0 && !this.fillable(e, t) && (a ??= `deep`)
      } else if (i === void 0 ? !this.cuts(e, t, r) : i <= r) return null
      return { cx: e, cz: t, from: this.island.levelAt(e, t), to: r, ok: !a, why: a }
    }
    cuts(e, t, n) {
      let r = ge(n) + 0.05
      for (let n = 0; n <= 2; n++)
        for (let i = 0; i <= 2; i++) if (this.island.height(e + n / 2, t + i / 2) > r) return !0
      return !1
    }
    refusal(e, t, n) {
      if (this.island.isReserved(e, t)) return `reserved`
      let r = oe
      if (e < r.minX + Gt || e >= r.maxX - Gt || t < r.minZ + Gt || t >= r.maxZ - Gt) return `edge`
      for (let n = 0; n < 16; n++) if (this.grid.has(e, n, t)) return `blocks`
      if (n && this.occupied(e, t)) return `boat`
    }
    fillable(e, t) {
      for (let n = 0; n <= 2; n++)
        for (let r = 0; r <= 2; r++)
          if (this.island.baseHeight(e + n / 2, t + r / 2) < -1.2) return !1
      return !0
    }
    cellAt(e, t) {
      let n = this.hitAt(e, t)
      return n
        ? n.kind === `block`
          ? [n.cell[0], n.cell[2]]
          : [Math.floor(n.x), Math.floor(n.z)]
        : null
    }
    hitAt(e, t) {
      return this.builder.pick(e, t, !0)
    }
    cellOnPlane(e, t, n) {
      let r = this.rig.rayFrom(e, t)
      if (r.direction.y > -1e-4) return null
      let i = (n - r.origin.y) / r.direction.y
      return i <= 0
        ? null
        : [Math.floor(r.origin.x + r.direction.x * i), Math.floor(r.origin.z + r.direction.z * i)]
    }
    refreshTarget() {
      if (((this.target = null), !this.active || !this.hover)) return
      if (this.stroke) {
        let e = this.cellOnPlane(this.hover.ndcX, this.hover.ndcY, this.stroke.planeY)
        this.target = e && this.strokePlan(e[0], e[1], this.stroke.raise, this.stroke.level)
        return
      }
      let e = this.cellAt(this.hover.ndcX, this.hover.ndcY)
      if (!e) return
      let t = this.plan(e[0], e[1], this.tool === `raise`)
      ;(t.ok || (t.why !== `deep` && t.why !== `wet` && t.why !== `edge`)) && (this.target = t)
    }
    reshape(e, t = 0) {
      let n = e.map((e) => {
        let t = this.island.level(e.cx, e.cz)
        return t === void 0 || (e.to ?? 0) > t
      })
      ;(this.apply(e.map((e) => [e.cx, e.cz, e.to])),
        e.forEach((e, r) => this.juice(e.cx, e.cz, n[r], e.to, t + r)),
        this.onEdit?.(n[0]))
    }
    juice(e, t, n, r, i) {
      let o = r === void 0 ? this.island.height(e + 0.5, t + 0.5) : ge(r),
        s = this.island.baseGrassSdf(e + 0.5, t + 0.5) > 0,
        c = [O.earth, O.earthDark, O.earthLight],
        l = s ? [O.sand, O.sandWet, O.earthLight] : [...c, O.grassB],
        u = new g(e + 0.5, Math.max(o, 0), t + 0.5)
      ;(n
        ? (this.fx.dust(u.clone().setY(o - 0.05), 0.62, 12, new a(s ? `#F6EBCB` : `#EFE3CC`)),
          this.fx.clods(u.clone().setY(o), 5, l, D - 0.4, 0.5, 0.7),
          this.sound.raise((r ?? 0) + i))
        : (this.fx.clods(u.clone().setY(o + 0.05), 9, l, o, 0.35, 1),
          this.fx.dust(u.clone().setY(o + 0.1), 0.4, 8, new a(s ? `#F3E6C4` : `#E4D3B6`)),
          this.sound.dig()),
        r === -1 && this.sound.slosh(0.25))
    }
    record(e) {
      e.length && this.history.record({ kind: `terrain`, cells: e })
    }
    act(e, t) {
      let n = this.cellAt(e.ndcX, e.ndcY)
      if (!n) return
      let r = this.plan(n[0], n[1], (this.tool === `raise`) !== t)
      if (!r.ok) {
        this.refuse(r)
        return
      }
      ;(this.reshape([r]), this.record([[r.cx, r.cz, r.from, r.to]]), this.refreshTarget())
    }
    refuse(e) {
      ;(this.sound.deny(), e.why && this.onRefuse?.(e.why))
    }
    brushProbe(e) {
      return !!this.pressPlan(e, !1, !0)
    }
    pressPlan(e, t, n) {
      if (!this.active) return null
      let r = this.hitAt(e.ndcX, e.ndcY)
      if (!r || r.kind !== `ground`) return null
      let i = this.plan(Math.floor(r.x), Math.floor(r.z), (this.tool === `raise`) !== t)
      return !i.ok || i.to === void 0
        ? (!n && i.why && i.why !== `deep` && i.why !== `edge` && this.refuse(i), null)
        : { plan: i, y: r.y }
    }
    brushStart(e, t = !1) {
      let n = this.pressPlan(e, t, !1)
      if (!n) return !1
      let { plan: r } = n
      return (
        (this.stroke = {
          raise: (this.tool === `raise`) !== t,
          level: r.to,
          planeY: n.y,
          cells: new Map(),
          ndcX: e.ndcX,
          ndcY: e.ndcY,
          travel: 0,
        }),
        this.paint([r]),
        !0
      )
    }
    brushMove(e) {
      let t = this.stroke
      if (!t) return
      let n = this.rig.groundAt(t.ndcX, t.ndcY, new g()),
        r = this.rig.groundAt(e.ndcX, e.ndcY, new g()),
        i = n && r ? Math.hypot(r.x - n.x, r.z - n.z) : 0,
        a = Math.max(1, Math.ceil(i / Kt)),
        o = [],
        s = new Set()
      for (let n = 1; n <= a; n++) {
        let r = n / a,
          i = this.cellOnPlane(
            t.ndcX + (e.ndcX - t.ndcX) * r,
            t.ndcY + (e.ndcY - t.ndcY) * r,
            t.planeY
          )
        if (!i) continue
        let c = `${i[0]},${i[1]}`
        if (t.cells.has(c) || s.has(c)) continue
        s.add(c)
        let l = this.strokePlan(i[0], i[1], t.raise, t.level)
        l?.ok && o.push(l)
      }
      ;(o.length && this.paint(o), (t.ndcX = e.ndcX), (t.ndcY = e.ndcY), this.setHover(e))
    }
    brushEnd() {
      let e = this.stroke
      ;((this.stroke = null), e && this.record([...e.cells.values()]), this.refreshTarget())
    }
    paint(e) {
      let t = this.stroke,
        n = t.cells.size
      for (let n of e) t.cells.set(`${n.cx},${n.cz}`, [n.cx, n.cz, n.from, n.to])
      this.reshape(e, n)
    }
    shape(e) {
      let t = Math.max(1, Math.round(e * 20)),
        n = this.shapes.get(t)
      if (!n) {
        let e = t / 20
        ;((n = new Wt(1, e, 1, 2, Math.min(0.1, e * 0.45))), this.shapes.set(t, n))
      }
      return n
    }
    span(e) {
      let t = this.island.level(e.cx, e.cz),
        n = t === void 0 ? this.island.minHeightUnder(e.cx, e.cz, e.cx + 1, e.cz + 1) : ge(t)
      return [n, e.to === void 0 ? n : ge(e.to)]
    }
    update(e) {
      ;(this.hover?.type === `mouse` && !this.stroke && this.refreshTarget(), this.updateGhost(e))
    }
    updateGhost(e) {
      let t = this.target
      if (t && this.active) {
        let [n, r] = this.span(t),
          i = t.ok && r > n,
          a = t.ok ? Math.min(n, r) : n - 0.02,
          o = t.ok ? Math.max(n, r) : n + 0.1,
          s = `${t.cx},${t.cz},${t.ok},${a.toFixed(2)},${o.toFixed(2)}`,
          c = new g(t.cx + 0.5, (a + o) / 2, t.cz + 0.5)
        s !== this.ghostKey &&
          ((this.ghost.geometry = this.shape(o - a)),
          (this.ghostBounce = 1),
          (!this.ghost.visible || this.ghostVis < 0.05) && this.ghostPos.copy(c),
          (this.ghostKey = s))
        let l = i || !t.ok ? this.ghostPlain : this.ghostX
        ;((this.ghost.material = l),
          this.ghostPos.lerp(c, 1 - Math.exp(-28 * e)),
          this.ghost.position.copy(this.ghostPos),
          (this.ghostVis = Math.min(1, this.ghostVis + e * 8)),
          (this.ghostBounce = Math.max(0, this.ghostBounce - e * 6)))
        let u = (t.ok ? 1.02 : 0.86) * (1 + 0.05 * Math.sin(this.ghostBounce * Math.PI))
        ;(this.ghost.scale.set(u, 1, u),
          l.uniforms.uColor.value.set(t.ok ? (i ? `#FFFFFF` : `#FF8A7A`) : `#FF6B5E`),
          (l.uniforms.uFill.value = t.ok ? (i ? 0.04 : 0.22) : 0.1),
          (l.uniforms.uAlpha.value = this.ghostVis * (i || !t.ok ? 1 : 0.8)),
          this.terrain.cursor.set(t.cx + 0.5, n, t.cz + 0.5, 2.6))
      } else
        ((this.ghostVis = Math.max(0, this.ghostVis - e * 10)),
          (this.ghost.material.uniforms.uAlpha.value = this.ghostVis),
          this.active && (this.terrain.cursor.w = 0))
      this.ghost.visible = this.ghostVis > 0.01
    }
  },
  Jt = 384,
  U = 96,
  Yt = class {
    group = new d()
    puffAttr
    puffHead = 0
    chipMesh
    clodMesh
    chips = []
    tones = [R.a, R.b, R.c, R.d, R.post]
    m4 = new o()
    tmpQ = new y()
    tmpE = new _()
    tmpS = new g()
    constructor() {
      this.group.name = `particles`
      let e = new S()
      ;(e.setAttribute(
        `position`,
        new r([-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0], 3)
      ),
        e.setIndex([0, 1, 2, 0, 2, 3]))
      let i = (e) => new b(new Float32Array(Jt * e), e).setUsage(n)
      this.puffAttr = { aStart: i(3), aVel: i(3), aTime: i(4), aSize: i(3), aColor: i(4) }
      for (let [t, n] of Object.entries(this.puffAttr)) e.setAttribute(t, n)
      this.puffAttr.aTime.array.fill(-1e3)
      for (let e = 0; e < Jt; e++) this.puffAttr.aTime.setXYZW(e, -1e3, 0.001, 0, 0)
      e.instanceCount = Jt
      let a = new C({
          transparent: !0,
          depthWrite: !1,
          uniforms: { uTime: N.uTime },
          vertexShader: `
        attribute vec3 aStart;
        attribute vec3 aVel;
        attribute vec4 aTime;
        attribute vec3 aSize;
        attribute vec4 aColor;
        uniform float uTime;
        varying vec2 vUv;
        varying vec4 vColor;
        varying float vT;
        varying float vKind;
        void main() {
          float age = uTime - aTime.x;
          float t = age / aTime.y;
          vKind = aTime.w;
          if (t < 0.0 || t > 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
          float drag = 1.0 - exp(-age * 3.5);
          vec3 p = aStart + aVel * drag / 3.5 + vec3(0.0, 0.5 * aTime.z * age * age, 0.0);
          float grow = 1.0 - pow(1.0 - min(t * 2.2, 1.0), 3.0);
          float size = mix(aSize.x, aSize.y, grow);
          if (vKind > 0.5) size *= sin(t * 3.14159) * (0.8 + 0.2 * sin(age * 30.0));
          else size *= 1.0 - smoothstep(0.45, 1.0, t);
          float ang = aSize.z * age + aSize.z;
          vec2 c = position.xy;
          c = vec2(c.x * cos(ang) - c.y * sin(ang), c.x * sin(ang) + c.y * cos(ang));
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          mv.xy += c * size;
          gl_Position = projectionMatrix * mv;
          vUv = position.xy + 0.5;
          vColor = aColor;
          vT = t;
        }`,
          fragmentShader: `
        varying vec2 vUv;
        varying vec4 vColor;
        varying float vT;
        varying float vKind;
        void main() {
          vec2 q = vUv - 0.5;
          float a;
          if (vKind > 0.5) {
            // Four-point twinkle star.
            vec2 aq = abs(q);
            float star = max(1.0 - smoothstep(0.0, 0.06, min(aq.x, aq.y) + max(aq.x, aq.y) * 0.18), 0.0);
            float core = 1.0 - smoothstep(0.0, 0.14, length(q));
            a = max(star * (1.0 - smoothstep(0.3, 0.5, max(aq.x, aq.y))), core);
          } else {
            float d = length(q) * 2.0;
            a = 1.0 - smoothstep(0.62, 0.98, d);
          }
          if (a < 0.01) discard;
          // Cartoon shading: lit top-left, soft shade bottom-right.
          float shade = vKind > 0.5 ? 1.0 : 0.9 + 0.12 * clamp((q.y - q.x) * 2.0, -1.0, 1.0);
          gl_FragColor = vec4(vColor.rgb * shade, vColor.a * a);
          #include <colorspace_fragment>
        }`,
        }),
        o = new t(e, a)
      ;((o.frustumCulled = !1), (o.renderOrder = 20), this.group.add(o))
      let s = new p(0.13, 0.035, 0.07),
        c = new T({ roughness: 0.85 })
      ;((this.chipMesh = new f(s, c, U)),
        this.chipMesh.instanceMatrix.setUsage(n),
        (this.chipMesh.count = 0),
        (this.chipMesh.castShadow = !0),
        (this.chipMesh.frustumCulled = !1))
      for (let e = 0; e < U; e++) this.chipMesh.setColorAt(e, this.tones[e % this.tones.length])
      ;(this.group.add(this.chipMesh),
        (this.clodMesh = new f(new E(0.06, 0), new T({ roughness: 0.95 }), U)),
        this.clodMesh.instanceMatrix.setUsage(n),
        (this.clodMesh.count = 0),
        (this.clodMesh.castShadow = !0),
        (this.clodMesh.frustumCulled = !1))
      for (let e = 0; e < U; e++) this.clodMesh.setColorAt(e, this.tones[0])
      this.group.add(this.clodMesh)
    }
    puff(e, t, n, r, i, a, o, s, c, l = 0) {
      let u = this.puffHead
      this.puffHead = (this.puffHead + 1) % Jt
      let d = this.puffAttr
      ;(d.aStart.setXYZ(u, e.x, e.y, e.z),
        d.aVel.setXYZ(u, t.x, t.y, t.z),
        d.aTime.setXYZW(u, N.uTime.value + l, n, s, c),
        d.aSize.setXYZ(u, r, i, (Math.random() - 0.5) * 3),
        d.aColor.setXYZW(u, a.r, a.g, a.b, o))
      for (let e of Object.values(d))
        (e.addUpdateRange(u * e.itemSize, e.itemSize), (e.needsUpdate = !0))
    }
    dust(e, t, n = 14, r = new a(`#FFF8EA`)) {
      let i = new g(),
        o = new g()
      for (let a = 0; a < n; a++) {
        let s = (a / n) * Math.PI * 2 + Math.random() * 0.4,
          c = Math.cos(s),
          l = Math.sin(s)
        o.set(e.x + c * t, e.y + 0.08 + Math.random() * 0.08, e.z + l * t)
        let u = 1.6 + Math.random() * 1.4
        ;(i.set(c * u, 0.3 + Math.random() * 0.6, l * u),
          this.puff(
            o,
            i,
            0.4 + Math.random() * 0.2,
            0.08 + Math.random() * 0.05,
            0.22 + Math.random() * 0.12,
            r,
            0.92,
            0.5,
            0
          ))
      }
    }
    sparkles(e, t = 5, n = new a(`#FFF6D8`)) {
      let r = new g(),
        i = new g()
      for (let a = 0; a < t; a++)
        (i.set(
          e.x + (Math.random() - 0.5) * 1.1,
          e.y + Math.random() * 0.9,
          e.z + (Math.random() - 0.5) * 1.1
        ),
          r.set(
            (Math.random() - 0.5) * 0.4,
            0.6 + Math.random() * 0.5,
            (Math.random() - 0.5) * 0.4
          ),
          this.puff(
            i,
            r,
            0.5 + Math.random() * 0.3,
            0.22,
            0.32,
            n,
            1,
            -0.6,
            1,
            Math.random() * 0.12
          ))
    }
    splash(e, t = new a(`#E6FBF4`), n = 0) {
      let r = new g(),
        i = new g()
      for (let a = 0; a < 10; a++) {
        let o = (a / 10) * Math.PI * 2 + Math.random() * 0.5,
          s = 0.2 + Math.random() * 0.2
        i.set(e.x + Math.cos(o) * s, e.y + 0.02, e.z + Math.sin(o) * s)
        let c = 0.6 + Math.random() * 0.7
        ;(r.set(Math.cos(o) * c, 2.4 + Math.random() * 1.4, Math.sin(o) * c),
          this.puff(
            i,
            r,
            0.42 + Math.random() * 0.12,
            0.11 + Math.random() * 0.04,
            0.07,
            t,
            0.95,
            -9,
            0,
            n + Math.random() * 0.06
          ))
      }
      this.bubbles(e, 0.4, 8, t, n + 0.15)
    }
    bubbles(e, t, n, r = new a(`#E6FBF4`), i = 0) {
      let o = new g(),
        s = new g()
      for (let a = 0; a < n; a++) {
        let n = Math.random() * Math.PI * 2,
          a = Math.sqrt(Math.random()) * t
        ;(s.set(e.x + Math.cos(n) * a, e.y - 0.05, e.z + Math.sin(n) * a),
          o.set(
            (Math.random() - 0.5) * 0.2,
            0.25 + Math.random() * 0.2,
            (Math.random() - 0.5) * 0.2
          ),
          this.puff(
            s,
            o,
            0.35 + Math.random() * 0.3,
            0.03,
            0.07 + Math.random() * 0.03,
            r,
            0.7,
            0.2,
            0,
            i + Math.random() * 0.9
          ))
      }
    }
    splinters(e, t = 12, n = D) {
      for (let r = 0; r < t; r++) {
        this.chips.length >= U && this.chips.shift()
        let t = Math.random() * Math.PI * 2,
          r = 1.2 + Math.random() * 2.2
        this.chips.push({
          p: new g(
            e.x + (Math.random() - 0.5) * 0.7,
            e.y + Math.random() * 0.8,
            e.z + (Math.random() - 0.5) * 0.7
          ),
          v: new g(Math.cos(t) * r, 2.8 + Math.random() * 2.4, Math.sin(t) * r),
          q: new y().setFromEuler(new _(Math.random() * 6, Math.random() * 6, Math.random() * 6)),
          w: new g(
            (Math.random() - 0.5) * 18,
            (Math.random() - 0.5) * 18,
            (Math.random() - 0.5) * 18
          ),
          age: 0,
          life: 0.9 + Math.random() * 0.5,
          floor: n + 0.02,
          s: 0.7 + Math.random() * 0.7,
          tone: Math.floor(Math.random() * this.tones.length),
        })
      }
    }
    clods(e, t, n, r, i = 0.45, a = 1) {
      for (let o = 0; o < t; o++) {
        this.chips.length >= U && this.chips.shift()
        let t = Math.random() * Math.PI * 2,
          o = Math.sqrt(Math.random()) * i,
          s = (0.8 + Math.random() * 1.6) * a
        this.chips.push({
          p: new g(e.x + Math.cos(t) * o, e.y + Math.random() * 0.1, e.z + Math.sin(t) * o),
          v: new g(Math.cos(t) * s, (2.6 + Math.random() * 2.2) * a, Math.sin(t) * s),
          q: new y().setFromEuler(new _(Math.random() * 6, Math.random() * 6, Math.random() * 6)),
          w: new g(
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 12
          ),
          age: 0,
          life: 0.7 + Math.random() * 0.45,
          floor: r,
          s: 0.6 + Math.random() * 0.9,
          tone: 0,
          clod: n[Math.floor(Math.random() * n.length)],
        })
      }
    }
    warmup() {
      let e = new g(0, -3, 0)
      ;(this.puff(e, new g(), 0.05, 0.1, 0.1, new a(), 0, 0, 0),
        this.splinters(e, 1),
        this.clods(e, 1, [new a(`#8A5A42`)], -60))
      for (let e of this.chips.slice(-2)) ((e.floor = -60), (e.life = 0.05))
    }
    update(e) {
      let t = 0
      for (let t = this.chips.length - 1; t >= 0; t--) {
        let n = this.chips[t]
        if (((n.age += e), n.age > n.life)) {
          this.chips.splice(t, 1)
          continue
        }
        ;((n.v.y -= 14 * e),
          n.p.addScaledVector(n.v, e),
          n.p.y < n.floor &&
            ((n.p.y = n.floor),
            (n.v.y = Math.abs(n.v.y) * 0.32),
            (n.v.x *= 0.55),
            (n.v.z *= 0.55),
            n.w.multiplyScalar(0.5)),
          this.tmpE.set(n.w.x * e, n.w.y * e, n.w.z * e),
          n.q.multiply(this.tmpQ.setFromEuler(this.tmpE)))
      }
      let n = 0
      for (let e of this.chips) {
        let r = e.age / e.life,
          i = e.s * (r > 0.75 ? 1 - (r - 0.75) / 0.25 : 1)
        ;(this.m4.compose(e.p, e.q, this.tmpS.set(i, i, i)),
          e.clod
            ? (this.clodMesh.setColorAt(n, e.clod), this.clodMesh.setMatrixAt(n++, this.m4))
            : (this.chipMesh.setColorAt(t, this.tones[e.tone]),
              this.chipMesh.setMatrixAt(t++, this.m4)))
      }
      ;((this.chipMesh.count = t),
        (this.chipMesh.instanceMatrix.needsUpdate = !0),
        t && this.chipMesh.instanceColor && (this.chipMesh.instanceColor.needsUpdate = !0),
        (this.clodMesh.count = n),
        (this.clodMesh.instanceMatrix.needsUpdate = !0),
        n && this.clodMesh.instanceColor && (this.clodMesh.instanceColor.needsUpdate = !0))
    }
  },
  Xt = [0, 2, 4, 7, 9],
  Zt = `lighthouse.muted`,
  Qt = `lighthouse.music`,
  $t = 0.22,
  en = [
    [48, !1],
    [45, !0],
    [41, !1],
    [43, !1],
  ],
  tn = [72, 74, 76, 79, 81, 84, 86, 88, 91],
  nn = {
    day: { bpm: 76, density: 0.34, cutoff: 1500, shift: 0, chime: 0.12 },
    sunset: { bpm: 70, density: 0.28, cutoff: 1100, shift: 0, chime: 0.15 },
    night: { bpm: 62, density: 0.16, cutoff: 800, shift: -12, chime: 0.3 },
    dawn: { bpm: 68, density: 0.24, cutoff: 1200, shift: 0, chime: 0.2 },
  },
  rn = (e) => 440 * 2 ** ((e - 69) / 12),
  an = class {
    ctx = null
    master
    sfx
    amb
    noise
    surfGain
    fizzGain
    nextWave = 0
    lastNoteIdx = -1
    muted
    musicOn = !0
    musicBus
    musicPlaying = !1
    nextBeat = 0
    beat = 0
    mel = 4
    mood = `day`
    constructor() {
      let e = !1
      try {
        ;((e = localStorage.getItem(Zt) === `1`), (this.musicOn = localStorage.getItem(Qt) !== `0`))
      } catch {}
      this.muted = e
      let t = () => {
        document.visibilityState !== `hidden` &&
          (this.ensure(),
          this.ctx && this.ctx.state !== `running` && this.ctx.resume().catch(() => {}))
      }
      for (let e of [`pointerdown`, `pointerup`, `touchend`, `click`, `keydown`])
        window.addEventListener(e, t, { capture: !0, passive: !0 })
      document.addEventListener(`visibilitychange`, () => {
        this.ctx &&
          (document.visibilityState === `hidden`
            ? this.ctx.suspend()
            : this.ctx.resume().catch(() => {}))
      })
    }
    get live() {
      return !!this.ctx && this.ctx.state === `running`
    }
    ensure() {
      if (this.ctx) return
      let e = new (window.AudioContext ?? window.webkitAudioContext)()
      ;((this.ctx = e),
        (this.master = e.createGain()),
        (this.master.gain.value = this.muted ? 0 : 0.9))
      let t = e.createDynamicsCompressor()
      ;((t.threshold.value = -14),
        (t.ratio.value = 3),
        this.master.connect(t).connect(e.destination),
        (this.sfx = e.createGain()),
        (this.sfx.gain.value = 0.8),
        this.sfx.connect(this.master),
        (this.amb = e.createGain()),
        (this.amb.gain.value = 0),
        this.amb.connect(this.master),
        this.amb.gain.setTargetAtTime(0.55, e.currentTime + 0.3, 1.5),
        (this.noise = this.makeBrownNoise(e, 6)),
        this.startAmbience(),
        (this.musicBus = e.createGain()),
        (this.musicBus.gain.value = 0))
      let n = e.createConvolver()
      n.buffer = this.makeReverb(e, 2.6)
      let r = e.createGain()
      r.gain.value = 0.55
      let i = e.createGain()
      ;((i.gain.value = 0.75),
        this.musicBus.connect(i).connect(this.master),
        this.musicBus.connect(n).connect(r).connect(this.master),
        this.fadeMusic())
      let a = e.createBufferSource()
      ;((a.buffer = e.createBuffer(1, 1, e.sampleRate)), a.connect(e.destination), a.start())
    }
    setMuted(e) {
      this.muted = e
      try {
        localStorage.setItem(Zt, e ? `1` : `0`)
      } catch {}
      this.ctx && this.master.gain.setTargetAtTime(e ? 0 : 0.9, this.ctx.currentTime, 0.08)
    }
    music() {
      ;((this.musicPlaying = !0), this.fadeMusic())
    }
    setMusic(e) {
      this.musicOn = e
      try {
        localStorage.setItem(Qt, e ? `1` : `0`)
      } catch {}
      this.fadeMusic()
    }
    setMood(e) {
      e in nn && (this.mood = e)
    }
    fadeMusic() {
      let e = this.ctx
      if (!e || !this.musicBus) return
      let t = this.musicPlaying && this.musicOn,
        n = this.musicBus.gain
      ;(n.cancelScheduledValues(e.currentTime),
        n.setValueAtTime(n.value, e.currentTime),
        n.setTargetAtTime(t ? $t : 0, e.currentTime + 0.1, t ? 2.2 : 0.35))
    }
    makeReverb(e, t) {
      let n = Math.floor(e.sampleRate * t),
        r = e.createBuffer(2, n, e.sampleRate)
      for (let t = 0; t < 2; t++) {
        let i = r.getChannelData(t),
          a = 0
        for (let t = 0; t < n; t++) {
          let r = t / n,
            o = Math.random() * 2 - 1
          ;((a += (o - a) * (0.9 - 0.6 * r)),
            (i[t] =
              a * (1 - r) ** 2.6 * (t < e.sampleRate * 0.012 ? t / (e.sampleRate * 0.012) : 1)))
        }
      }
      return r
    }
    updateMusic(e) {
      if (this.musicPlaying && this.musicOn && this.musicBus)
        for (this.nextBeat < e + 0.1 && (this.nextBeat = e + 0.25); this.nextBeat < e + 0.4; )
          (this.musicBeat(this.nextBeat), (this.nextBeat += 60 / nn[this.mood].bpm))
    }
    musicBeat(e) {
      let t = nn[this.mood],
        n = 60 / t.bpm,
        r = this.beat++,
        i = Math.floor(r / 4),
        [a, o] = en[Math.floor(i / 2) % en.length],
        s = r % 8
      if (
        (s === 0 &&
          (this.padChord(e, a, o, n * 8, t.cutoff),
          Math.random() < t.chime && this.chimes(e + n * (2 + Math.floor(Math.random() * 4)))),
        (s === 0 || s === 4) && this.bass(e, a, n * 3.5),
        !(this.mood === `night` ? i % 2 == 1 : i % 4 == 3))
      )
        for (let i = 0; i < 2; i++) {
          let s = i === 0 && r % 2 == 0
          if (Math.random() > t.density * (s ? 1.5 : 0.75)) continue
          this.melodyStep(a, o, s)
          let c = Math.max(e + (i * n) / 2 + (Math.random() - 0.5) * 0.02, this.ctx.currentTime)
          this.pluck(c, tn[this.mel] + t.shift, (s ? 0.075 : 0.055) * (0.8 + Math.random() * 0.4))
        }
    }
    melodyStep(e, t, n) {
      let r = [-2, -1, -1, 0, 1, 1, 2],
        i = this.mel + r[Math.floor(Math.random() * r.length)]
      if ((i < 1 && (i = 2), i > tn.length - 2 && (i = tn.length - 3), n)) {
        let n = [e % 12, (e + (t ? 3 : 4)) % 12, (e + 7) % 12]
        for (let e of [0, 1, -1, 2, -2]) {
          let t = i + e
          if (t >= 0 && t < tn.length && n.includes(tn[t] % 12)) {
            i = t
            break
          }
        }
      }
      this.mel = i
    }
    pluck(e, t, n) {
      let r = this.ctx,
        i = rn(t),
        a = r.createOscillator(),
        o = r.createGain()
      ;((a.type = `sine`),
        (a.frequency.value = i),
        o.gain.setValueAtTime(1e-4, e),
        o.gain.linearRampToValueAtTime(n, e + 0.006),
        o.gain.exponentialRampToValueAtTime(1e-4, e + 1.8))
      let s = r.createOscillator(),
        c = r.createGain()
      ;((s.type = `sine`),
        (s.frequency.value = i * 3.02),
        c.gain.setValueAtTime(1e-4, e),
        c.gain.linearRampToValueAtTime(n * 0.18, e + 0.004),
        c.gain.exponentialRampToValueAtTime(1e-4, e + 0.32),
        a.connect(o).connect(this.musicBus),
        s.connect(c).connect(this.musicBus),
        a.start(e),
        s.start(e),
        a.stop(e + 1.9),
        s.stop(e + 0.4))
    }
    padChord(e, t, n, r, i) {
      let a = this.ctx,
        o = a.createBiquadFilter()
      ;((o.type = `lowpass`), (o.frequency.value = i), (o.Q.value = 0.4))
      let s = a.createGain()
      ;(s.gain.setValueAtTime(1e-4, e),
        s.gain.linearRampToValueAtTime(0.03, e + 1.6),
        s.gain.setValueAtTime(0.03, e + Math.max(r - 0.6, 1.7)),
        s.gain.exponentialRampToValueAtTime(1e-4, e + r + 1.6),
        o.connect(s).connect(this.musicBus))
      for (let i of [t + 12, t + 12 + (n ? 3 : 4), t + 19])
        for (let t of [-5, 5]) {
          let n = a.createOscillator()
          ;((n.type = `triangle`),
            (n.frequency.value = rn(i)),
            (n.detune.value = t),
            n.connect(o),
            n.start(e),
            n.stop(e + r + 1.7))
        }
    }
    bass(e, t, n) {
      let r = this.ctx,
        i = r.createOscillator(),
        a = r.createGain()
      ;((i.type = `sine`),
        (i.frequency.value = rn(t)),
        a.gain.setValueAtTime(1e-4, e),
        a.gain.linearRampToValueAtTime(0.06, e + 0.03),
        a.gain.exponentialRampToValueAtTime(1e-4, e + n),
        i.connect(a).connect(this.musicBus),
        i.start(e),
        i.stop(e + n + 0.05))
    }
    chimes(e) {
      let t = [96, 93, 91, 88, 86, 84],
        n = Math.floor(Math.random() * 3)
      for (let r = 0; r < 3; r++) this.pluck(e + r * 0.14, t[n + r] + nn[this.mood].shift, 0.022)
    }
    makeBrownNoise(e, t) {
      let n = Math.floor(e.sampleRate * t),
        r = e.createBuffer(2, n, e.sampleRate)
      for (let e = 0; e < 2; e++) {
        let t = r.getChannelData(e),
          i = 0
        for (let e = 0; e < n; e++) {
          let n = Math.random() * 2 - 1
          ;((i = (i + 0.02 * n) / 1.02), (t[e] = i * 3.5))
        }
      }
      return r
    }
    startAmbience() {
      let e = this.ctx,
        t = e.createBufferSource()
      ;((t.buffer = this.noise), (t.loop = !0))
      let n = e.createBiquadFilter()
      ;((n.type = `lowpass`),
        (n.frequency.value = 520),
        (n.Q.value = 0.5),
        (this.surfGain = e.createGain()),
        (this.surfGain.gain.value = 0.12),
        t.connect(n).connect(this.surfGain).connect(this.amb),
        t.start())
      let r = e.createBufferSource()
      ;((r.buffer = this.noise), (r.loop = !0), (r.playbackRate.value = 1.7))
      let i = e.createBiquadFilter()
      ;((i.type = `bandpass`),
        (i.frequency.value = 2400),
        (i.Q.value = 0.6),
        (this.fizzGain = e.createGain()),
        (this.fizzGain.gain.value = 0),
        r.connect(i).connect(this.fizzGain).connect(this.amb),
        r.start(e.currentTime, 2.5))
      let a = e.createBufferSource()
      ;((a.buffer = this.noise), (a.loop = !0), (a.playbackRate.value = 0.6))
      let o = e.createBiquadFilter()
      ;((o.type = `bandpass`), (o.frequency.value = 900), (o.Q.value = 1.2))
      let s = e.createGain()
      s.gain.value = 0.035
      let c = e.createOscillator()
      c.frequency.value = 0.07
      let l = e.createGain()
      ;((l.gain.value = 0.025),
        c.connect(l).connect(s.gain),
        c.start(),
        a.connect(o).connect(s).connect(this.amb),
        a.start(e.currentTime, 1.1),
        (this.nextWave = e.currentTime + 0.5))
    }
    update() {
      let e = this.ctx
      if (!e || e.state !== `running`) return
      let t = e.currentTime
      try {
        this.updateMusic(t)
      } catch (e) {
        ;(console.warn(`[lighthouse] music`, e), (this.musicPlaying = !1))
      }
      if (t < this.nextWave) return
      let n = 2.2 + Math.random() * 1.2,
        r = 3.2 + Math.random() * 2,
        i = 0.34 + Math.random() * 0.16,
        a = this.surfGain.gain
      ;(a.cancelScheduledValues(t),
        a.setValueAtTime(a.value, t),
        a.linearRampToValueAtTime(i, t + n),
        a.linearRampToValueAtTime(0.1, t + n + r))
      let o = this.fizzGain.gain
      ;(o.cancelScheduledValues(t),
        o.setValueAtTime(o.value, t),
        o.linearRampToValueAtTime(0, t + n * 0.8),
        o.linearRampToValueAtTime(0.05 + Math.random() * 0.03, t + n + 0.4),
        o.linearRampToValueAtTime(0, t + n + r * 0.8),
        (this.nextWave = t + n + r * 0.9))
    }
    place(e) {
      let t = this.ctx
      if (!t || !this.live) return
      let n = e
      ;(n === this.lastNoteIdx && Math.random() < 0.5 && (n += Math.random() < 0.5 ? 1 : -1),
        (n = Math.max(0, n)),
        (this.lastNoteIdx = n))
      let r = 261.6 * 2 ** ((Xt[n % 5] + 12 * Math.floor(n / 5)) / 12),
        i = t.currentTime + 0.005
      for (let [e, t, n] of [
        [1, 0.55, 0.22],
        [2.57, 0.22, 0.09],
        [4.9, 0.08, 0.045],
        [0.5, 0.35, 0.09],
      ])
        this.tone(r * e, t, n, i, `sine`)
      ;(this.click(i, 2600, 0.18, 0.012), this.thump(i, 150, 0.35))
    }
    remove() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.005,
        n = e.createOscillator(),
        r = e.createGain()
      ;((n.type = `sine`),
        n.frequency.setValueAtTime(320, t),
        n.frequency.exponentialRampToValueAtTime(860, t + 0.07),
        r.gain.setValueAtTime(1e-4, t),
        r.gain.linearRampToValueAtTime(0.32, t + 0.008),
        r.gain.exponentialRampToValueAtTime(1e-4, t + 0.12),
        n.connect(r).connect(this.sfx),
        n.start(t),
        n.stop(t + 0.14))
      for (let e = 0; e < 5; e++)
        this.click(
          t + 0.02 + e * 0.022 + Math.random() * 0.012,
          1400 + Math.random() * 1800,
          0.12,
          0.02
        )
    }
    raise(e) {
      let t = this.ctx
      if (!t || !this.live) return
      let n = t.currentTime + 0.005,
        r = Math.max(0, e + 1),
        i = 98 * 2 ** ((Xt[r % 5] + 12 * Math.floor(r / 5)) / 12)
      ;(this.thump(n, i * 1.6, 0.5),
        this.tone(i, 0.28, 0.07, n + 0.01, `sine`),
        this.tone(i * 2.01, 0.1, 0.05, n + 0.01, `triangle`),
        this.rumble(n, 520, 180, 0.22, 0.2))
      for (let e = 0; e < 4; e++)
        this.click(n + 0.09 + e * 0.03 + Math.random() * 0.02, 700 + Math.random() * 700, 0.1, 0.03)
    }
    dig() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.005
      ;(this.rumble(t, 1500, 380, 0.3, 0.16), this.thump(t + 0.02, 120, 0.3))
      for (let e = 0; e < 5; e++)
        this.click(
          t + 0.12 + e * 0.035 + Math.random() * 0.02,
          500 + Math.random() * 900,
          0.12,
          0.035
        )
    }
    slosh(e = 0) {
      let t = this.ctx
      if (!t || !this.live) return
      let n = t.currentTime + 0.005 + e
      this.rumble(n, 420, 1300, 0.22, 0.32)
      for (let e = 0; e < 3; e++) {
        let r = n + 0.06 + e * 0.09 + Math.random() * 0.04,
          i = t.createOscillator(),
          a = t.createGain()
        i.type = `sine`
        let o = 260 + Math.random() * 180
        ;(i.frequency.setValueAtTime(o, r),
          i.frequency.exponentialRampToValueAtTime(o * 2.4, r + 0.07),
          a.gain.setValueAtTime(1e-4, r),
          a.gain.linearRampToValueAtTime(0.13, r + 0.01),
          a.gain.exponentialRampToValueAtTime(1e-4, r + 0.09),
          i.connect(a).connect(this.sfx),
          i.start(r),
          i.stop(r + 0.11))
      }
    }
    ui() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.005
      ;(this.tone(784, 0.12, 0.08, t, `triangle`), this.tone(1175, 0.05, 0.06, t + 0.03, `sine`))
    }
    select(e) {
      let t = this.ctx
      if (!t || !this.live) return
      let n = t.currentTime + 0.005,
        r = 523 * 2 ** ((Xt[e % 5] + 12 * Math.floor(e / 5)) / 12)
      ;(this.tone(r, 0.11, 0.06, n, `triangle`),
        this.tone(r * 2, 0.04, 0.05, n + 0.02, `sine`),
        this.click(n, 3200, 0.05, 0.01))
    }
    tick() {
      let e = this.ctx
      e && this.live && this.click(e.currentTime + 0.003, 3600, 0.035, 0.012)
    }
    panel(e) {
      let t = this.ctx
      if (!t || !this.live) return
      let n = t.currentTime + 0.005
      ;(this.rumble(n, e ? 700 : 2200, e ? 2400 : 600, 0.1, 0.18),
        this.tone(e ? 659 : 523, 0.07, 0.07, n + 0.05, `sine`))
    }
    chop(e) {
      let t = this.ctx
      if (!t || !this.live) return
      let n = t.currentTime + 0.005,
        r = 150 * 2 ** ((e * 2) / 12)
      for (let [e, t, i] of [
        [1, 0.5, 0.07],
        [2.3, 0.2, 0.04],
        [3.9, 0.08, 0.025],
      ])
        this.tone(r * e, t, i, n, `sine`)
      ;(this.thump(n, 110, 0.45),
        this.click(n, 1900, 0.3, 0.03),
        this.click(n + 0.004, 4200, 0.12, 0.02),
        this.rustle(n + 0.03, 0.08, 0.35))
    }
    creak() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.12,
        n = e.createOscillator(),
        r = e.createBiquadFilter(),
        i = e.createGain()
      ;((n.type = `sawtooth`),
        n.frequency.setValueAtTime(92, t),
        n.frequency.linearRampToValueAtTime(64, t + 0.8))
      let a = e.createOscillator(),
        o = e.createGain()
      ;((a.frequency.value = 19),
        (o.gain.value = 5),
        a.connect(o).connect(n.frequency),
        (r.type = `bandpass`),
        (r.frequency.value = 420),
        (r.Q.value = 3),
        i.gain.setValueAtTime(1e-4, t),
        i.gain.linearRampToValueAtTime(0.09, t + 0.12),
        i.gain.linearRampToValueAtTime(0.06, t + 0.6),
        i.gain.exponentialRampToValueAtTime(1e-4, t + 0.9),
        n.connect(r).connect(i).connect(this.sfx),
        n.start(t),
        a.start(t),
        n.stop(t + 0.95),
        a.stop(t + 0.95))
    }
    fall() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.005
      ;(this.thump(t, 90, 0.8),
        this.thump(t + 0.09, 70, 0.5),
        this.rumble(t, 900, 160, 0.45, 0.7),
        this.rustle(t + 0.02, 0.5, 0.5))
      for (let e = 0; e < 6; e++)
        this.click(
          t + 0.05 + e * 0.05 + Math.random() * 0.03,
          600 + Math.random() * 900,
          0.14,
          0.04
        )
    }
    collect(e) {
      let t = this.ctx
      if (!t || !this.live) return
      let n = t.currentTime + 0.005,
        r = 784 * 2 ** ((Xt[e % 5] + 12 * Math.floor(e / 5)) / 12)
      ;(this.tone(r, 0.1, 0.07, n, `sine`),
        this.tone(r * 2, 0.04, 0.05, n + 0.01, `sine`),
        this.tone(r * 1.5, 0.03, 0.06, n + 0.03, `triangle`))
    }
    craft() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.005
      for (let e = 0; e < 2; e++)
        this.rumble(t + e * 0.16, e ? 1800 : 1300, e ? 2600 : 2200, 0.22, 0.14)
      ;(this.place(4),
        this.tone(1047, 0.08, 0.1, t + 0.34, `sine`),
        this.tone(1568, 0.05, 0.12, t + 0.38, `sine`))
    }
    bench() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.005
      ;(this.thump(t, 120, 0.7),
        this.tone(196, 0.3, 0.09, t, `sine`),
        this.tone(509.6, 0.1, 0.05, t, `sine`))
      for (let e = 0; e < 4; e++)
        this.click(
          t + 0.05 + e * 0.04 + Math.random() * 0.02,
          2400 + Math.random() * 2e3,
          0.08,
          0.02
        )
    }
    found() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.01
      ;([0, 5, 9, 12, 17].forEach((e, n) => {
        let r = 523 * 2 ** (e / 12)
        ;(this.tone(r, n === 4 ? 0.12 : 0.08, n === 4 ? 0.2 : 0.09, t + n * 0.075, `triangle`),
          this.tone(r * 2, 0.03, 0.08, t + n * 0.075 + 0.01, `sine`))
      }),
        this.click(t, 3800, 0.06, 0.02))
    }
    start() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.02
      ;[0, 4, 7, 12, 16].forEach((e, n) => {
        let r = 392 * 2 ** (e / 12)
        ;(this.tone(r, 0.09, 0.14, t + n * 0.07, `sine`),
          this.tone(r * 2, 0.025, 0.1, t + n * 0.07 + 0.01, `triangle`))
      })
    }
    shake() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.01
      ;(this.rustle(t, 0.32, 0.7), this.rustle(t + 0.16, 0.36, 0.5), this.thump(t, 140, 0.18))
    }
    fadeOut() {
      this.ctx && this.master.gain.setTargetAtTime(0, this.ctx.currentTime, 0.12)
    }
    mine(e) {
      let t = this.ctx
      if (!t || !this.live) return
      let n = t.currentTime + 0.005,
        r = 1650 * 2 ** ((e % 3) / 12)
      ;(this.tone(r, 0.12, 0.05, n, `sine`),
        this.tone(r * 1.52, 0.06, 0.035, n, `sine`),
        this.tone(r * 2.73, 0.03, 0.02, n, `triangle`),
        this.thump(n, 160, 0.35),
        this.click(n, 900, 0.3, 0.05))
      for (let e = 0; e < 5; e++)
        this.click(
          n + 0.05 + e * 0.035 + Math.random() * 0.02,
          2800 + Math.random() * 2600,
          0.05,
          0.02
        )
    }
    spent() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.005
      ;(this.thump(t, 110, 0.5), this.click(t, 600, 0.2, 0.06))
    }
    pebble(e) {
      let t = this.ctx
      if (!t || !this.live) return
      let n = t.currentTime + 0.005
      ;(this.click(n, 3200, 0.14, 0.018), this.click(n + 0.045, 3600, 0.1, 0.015))
      let r = 659 * 2 ** ((Xt[e % 5] + 12 * Math.floor(e / 5)) / 12)
      this.tone(r, 0.07, 0.06, n + 0.03, `sine`)
    }
    cast() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.005
      this.rumble(t, 700, 3400, 0.25, 0.32)
      for (let e = 0; e < 9; e++) this.click(t + 0.05 + e * 0.03, 5200, 0.05 * (1 - e / 10), 0.008)
    }
    plop(e = !1) {
      let t = this.ctx
      if (!t || !this.live) return
      let n = t.currentTime + 0.005,
        r = t.createOscillator(),
        i = t.createGain()
      ;((r.type = `sine`),
        r.frequency.setValueAtTime(e ? 520 : 900, n),
        r.frequency.exponentialRampToValueAtTime(e ? 140 : 320, n + (e ? 0.16 : 0.09)),
        i.gain.setValueAtTime(1e-4, n),
        i.gain.linearRampToValueAtTime(e ? 0.34 : 0.16, n + 0.006),
        i.gain.exponentialRampToValueAtTime(1e-4, n + (e ? 0.25 : 0.13)),
        r.connect(i).connect(this.sfx),
        r.start(n),
        r.stop(n + 0.3),
        this.rumble(n, e ? 700 : 1400, e ? 2400 : 3200, e ? 0.3 : 0.08, e ? 0.35 : 0.12))
    }
    nibble() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.005
      ;(this.click(t, 2400, 0.1, 0.02), this.tone(1318, 0.03, 0.03, t, `sine`))
    }
    reel() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.005
      for (let e = 0; e < 14; e++) this.click(t + e * 0.022, 3e3 + (e % 2) * 700, 0.07, 0.01)
    }
    caught() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.01
      ;(this.rumble(t, 900, 2600, 0.28, 0.4),
        [0, 4, 7, 12, 16, 19].forEach((e, n) => {
          let r = 523 * 2 ** (e / 12)
          this.tone(
            r,
            n === 5 ? 0.11 : 0.08,
            n === 5 ? 0.22 : 0.08,
            t + 0.12 + n * 0.065,
            `triangle`
          )
        }))
    }
    escape() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.01
      ;(this.tone(392, 0.09, 0.12, t, `triangle`),
        this.tone(311, 0.09, 0.2, t + 0.16, `triangle`),
        this.plop(!1))
    }
    eat() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.005
      for (let e = 0; e < 3; e++) this.rumble(t + e * 0.13, 1200, 2600, 0.2, 0.08)
      let n = e.createOscillator(),
        r = e.createGain()
      ;((n.type = `sine`),
        n.frequency.setValueAtTime(330, t + 0.42),
        n.frequency.linearRampToValueAtTime(440, t + 0.62),
        r.gain.setValueAtTime(1e-4, t + 0.42),
        r.gain.linearRampToValueAtTime(0.09, t + 0.46),
        r.gain.exponentialRampToValueAtTime(1e-4, t + 0.75),
        n.connect(r).connect(this.sfx),
        n.start(t + 0.42),
        n.stop(t + 0.8))
    }
    growl() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.01
      ;(this.rumble(t, 90, 150, 0.4, 0.5), this.rumble(t + 0.4, 130, 80, 0.3, 0.45))
    }
    sizzle() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.005
      this.rumble(t, 3200, 5200, 0.16, 0.7)
      for (let e = 0; e < 10; e++)
        this.click(t + Math.random() * 0.7, 2e3 + Math.random() * 3e3, 0.06, 0.012)
    }
    coins(e = 3) {
      let t = this.ctx
      if (!t || !this.live) return
      let n = t.currentTime + 0.005
      for (let t = 0; t < Math.min(e, 6); t++) {
        let e = 1976 * 2 ** (((t * 5) % 12) / 12)
        ;(this.tone(e, 0.06, 0.05, n + t * 0.06, `sine`),
          this.tone(e * 2.4, 0.025, 0.03, n + t * 0.06, `sine`))
      }
    }
    whoomph() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.005
      this.rumble(t, 200, 900, 0.4, 0.5)
      for (let e = 0; e < 8; e++)
        this.click(t + 0.1 + Math.random() * 0.6, 1500 + Math.random() * 2500, 0.07, 0.015)
    }
    bell() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.01
      for (let [e, n] of [
        [0, 1175],
        [0.5, 1175],
      ])
        (this.tone(n, 0.1, 0.35, t + e, `sine`),
          this.tone(n * 2.76, 0.03, 0.15, t + e, `sine`),
          this.tone(n * 5.4, 0.012, 0.08, t + e, `sine`))
    }
    babble(e, t = 190) {
      let n = this.ctx
      if (!n || !this.live) return
      let r = n.currentTime + 0.01,
        i = e.replace(/[^a-z]/gi, ``).slice(0, 40)
      for (let e = 0; e < i.length; e += 2) {
        let a = i.charCodeAt(e) | 32,
          o = `aeiou`.includes(String.fromCharCode(a)),
          s = r + (e / 2) * 0.062,
          c = t * 2 ** ((((a * 7) % 9) - 3) / 12) * (o ? 1.12 : 1),
          l = n.createOscillator(),
          u = n.createBiquadFilter(),
          d = n.createGain()
        ;((l.type = `sawtooth`),
          l.frequency.setValueAtTime(c, s),
          l.frequency.linearRampToValueAtTime(c * (o ? 1.06 : 0.94), s + 0.05),
          (u.type = `bandpass`),
          (u.frequency.value = o ? 900 + ((a * 53) % 700) : 1500 + ((a * 31) % 900)),
          (u.Q.value = 2.2),
          d.gain.setValueAtTime(1e-4, s),
          d.gain.linearRampToValueAtTime(0.07, s + 0.008),
          d.gain.exponentialRampToValueAtTime(1e-4, s + 0.055),
          l.connect(u).connect(d).connect(this.sfx),
          l.start(s),
          l.stop(s + 0.07))
      }
    }
    rustle(e, t, n) {
      let r = this.ctx,
        i = r.createBufferSource()
      ;((i.buffer = this.noise), (i.playbackRate.value = 2.2))
      let a = r.createBiquadFilter()
      ;((a.type = `highpass`), (a.frequency.value = 2600))
      let o = r.createGain()
      ;(o.gain.setValueAtTime(1e-4, e),
        o.gain.linearRampToValueAtTime(n * 0.25, e + t * 0.2),
        o.gain.exponentialRampToValueAtTime(1e-4, e + t),
        i.connect(a).connect(o).connect(this.sfx),
        i.start(e, Math.random() * 3),
        i.stop(e + t + 0.02))
    }
    deny() {
      let e = this.ctx
      if (!e || !this.live) return
      let t = e.currentTime + 0.005
      ;(this.tone(220, 0.18, 0.1, t, `triangle`), this.tone(196, 0.14, 0.12, t + 0.07, `triangle`))
    }
    tone(e, t, n, r, i) {
      let a = this.ctx,
        o = a.createOscillator(),
        s = a.createGain()
      ;((o.type = i),
        (o.frequency.value = e),
        s.gain.setValueAtTime(1e-4, r),
        s.gain.linearRampToValueAtTime(t, r + 0.003),
        s.gain.exponentialRampToValueAtTime(1e-4, r + n * 4),
        o.connect(s).connect(this.sfx),
        o.start(r),
        o.stop(r + n * 4 + 0.05))
    }
    click(e, t, n, r) {
      let i = this.ctx,
        a = i.createBufferSource()
      a.buffer = this.noise
      let o = i.createBiquadFilter()
      ;((o.type = `bandpass`), (o.frequency.value = t), (o.Q.value = 1.4))
      let s = i.createGain()
      ;(s.gain.setValueAtTime(n, e),
        s.gain.exponentialRampToValueAtTime(1e-4, e + r),
        a.connect(o).connect(s).connect(this.sfx),
        a.start(e, Math.random() * 4),
        a.stop(e + r + 0.02))
    }
    rumble(e, t, n, r, i) {
      let a = this.ctx,
        o = a.createBufferSource()
      o.buffer = this.noise
      let s = a.createBiquadFilter()
      ;((s.type = `bandpass`),
        (s.Q.value = 1.1),
        s.frequency.setValueAtTime(t, e),
        s.frequency.exponentialRampToValueAtTime(n, e + i))
      let c = a.createGain()
      ;(c.gain.setValueAtTime(1e-4, e),
        c.gain.linearRampToValueAtTime(r, e + i * 0.15),
        c.gain.exponentialRampToValueAtTime(1e-4, e + i),
        o.connect(s).connect(c).connect(this.sfx),
        o.start(e, Math.random() * 4),
        o.stop(e + i + 0.02))
    }
    thump(e, t, n) {
      let r = this.ctx,
        i = r.createOscillator(),
        a = r.createGain()
      ;((i.type = `sine`),
        i.frequency.setValueAtTime(t, e),
        i.frequency.exponentialRampToValueAtTime(t * 0.45, e + 0.08),
        a.gain.setValueAtTime(1e-4, e),
        a.gain.linearRampToValueAtTime(n, e + 0.004),
        a.gain.exponentialRampToValueAtTime(1e-4, e + 0.12),
        i.connect(a).connect(this.sfx),
        i.start(e),
        i.stop(e + 0.15))
    }
  }
;[...Ae.map((e) => `fish_${e}`), ...Ae.map((e) => `cooked_${e}`)]
function on(e, t = !1) {
  return globalThis.__lhIconUrl(`${e}${t ? `@512` : ``}`)
}
function W(e, t = ``, n = !1) {
  return `<img class="ic ${t}" src="${on(e, n)}" alt="" draggable="false" decoding="async" data-icon="${e}">`
}
var sn = 1440,
  cn = 7
function ln(e) {
  return e >= 5 && e < 7
    ? `dawn`
    : e >= 7 && e < 17.5
      ? `day`
      : e >= 17.5 && e < 20
        ? `sunset`
        : `night`
}
function un(e) {
  let t = Math.floor(e) % 24,
    n = Math.floor((e - Math.floor(e)) * 60)
  return new Date(2e3, 0, 1, t, n).toLocaleTimeString([], { hour: `numeric`, minute: `2-digit` })
}
var dn = class {
    day = 1
    hour = cn
    speed = 1
    held = !0
    onPhase
    onNewDay
    lastPhase = ln(cn)
    lastWorkDay = 1
    get time() {
      return (this.day - 1) * 24 + this.hour
    }
    get workDay() {
      return Math.floor((this.time - 5) / 24) + 1
    }
    get phase() {
      return ln(this.hour)
    }
    update(e) {
      this.held || this.speed <= 0 || e <= 0 || this.advance((e * this.speed * 24) / sn)
    }
    advance(e) {
      for (this.hour += e; this.hour >= 24; ) ((this.hour -= 24), this.day++)
      this.check()
    }
    skipTo(e) {
      let t = (((e - this.hour) % 24) + 24) % 24
      this.advance(t)
    }
    check() {
      let e = this.phase
      e !== this.lastPhase && ((this.lastPhase = e), this.onPhase?.(e))
      let t = this.workDay
      t !== this.lastWorkDay && ((this.lastWorkDay = t), this.onNewDay?.(t))
    }
    load(e) {
      let t = (e) => typeof e == `number` && Number.isFinite(e)
      ;(e && t(e.day) && t(e.hour) && e.day >= 1 && e.hour >= 0 && e.hour < 24
        ? ((this.day = Math.floor(e.day)),
          (this.hour = e.hour),
          (this.speed = e.speed === 0 || e.speed === 20 ? e.speed : 1))
        : ((this.day = 1), (this.hour = cn), (this.speed = 1)),
        (this.lastPhase = this.phase),
        (this.lastWorkDay = this.workDay))
    }
    toJSON() {
      return {
        day: this.day,
        hour: Math.round(this.hour * 1e3) / 1e3,
        ...(this.speed === 1 ? {} : { speed: this.speed }),
      }
    }
  },
  fn = { day: `day`, sunset: `sunset`, night: `night`, dawn: `dawn` },
  pn = {
    stop: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4.4" height="14" rx="1.8" fill="currentColor"/><rect x="13.6" y="5" width="4.4" height="14" rx="1.8" fill="currentColor"/></svg>`,
    play: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.6c0-1.1 1.2-1.8 2.2-1.2l9 6.1c.9.6.9 1.9 0 2.5l-9 6.1c-1 .6-2.2-.1-2.2-1.2z" fill="currentColor"/></svg>`,
    fast: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7.1c0-1 1.1-1.6 1.9-1l6.2 4.4c.7.5.7 1.5 0 2l-6.2 4.4c-.8.6-1.9 0-1.9-1zM12.4 7.1c0-1 1.1-1.6 1.9-1l6.2 4.4c.7.5.7 1.5 0 2l-6.2 4.4c-.8.6-1.9 0-1.9-1z" fill="currentColor"/></svg>`,
  },
  mn = class {
    el
    hourHand
    minuteHand
    timeText
    dayText
    stopBtn
    fastBtn
    phaseIc
    shownMinute = -1
    shownDay = -1
    speed = 1
    phase = ``
    constructor(e) {
      let t = Array.from({ length: 12 }, (e, t) => {
          let n = (t / 12) * Math.PI * 2,
            r = t % 3 == 0 ? 14.2 : 15.6,
            [i, a, o, s] = [
              22 + Math.sin(n) * r,
              22 - Math.cos(n) * r,
              22 + Math.sin(n) * 17.4,
              22 - Math.cos(n) * 17.4,
            ]
          return `<line x1="${i.toFixed(2)}" y1="${a.toFixed(2)}" x2="${o.toFixed(2)}" y2="${s.toFixed(2)}" class="${t % 3 == 0 ? `tick big` : `tick`}"/>`
        }).join(``),
        n = document.createElement(`div`)
      ;((n.className = `clock`),
        (n.innerHTML = `
      <div class="dial" data-tip="clock">
        <svg viewBox="0 0 44 44" aria-hidden="true">
          <circle class="face" cx="22" cy="22" r="20.5"/>
          ${t}
          <line class="hand hour" x1="22" y1="23.5" x2="22" y2="12.5"/>
          <line class="hand minute" x1="22" y1="24" x2="22" y2="7.5"/>
          <circle class="pin" cx="22" cy="22" r="2.3"/>
        </svg>
        <span class="phase-ic"></span>
      </div>
      <div class="clock-text" data-tip="clock"><b></b><small></small></div>
      <button class="speed stop" aria-label="Detener el tiempo" data-tip="stop">${pn.stop}</button>
      <button class="speed fast" aria-label="Avance rápido" data-tip="fast" aria-pressed="false">${pn.fast}<span class="tag"></span></button>`),
        (this.el = n),
        (this.hourHand = n.querySelector(`.hand.hour`)),
        (this.minuteHand = n.querySelector(`.hand.minute`)),
        (this.timeText = n.querySelector(`.clock-text b`)),
        (this.dayText = n.querySelector(`.clock-text small`)),
        (this.stopBtn = n.querySelector(`.speed.stop`)),
        (this.fastBtn = n.querySelector(`.speed.fast`)),
        (this.phaseIc = n.querySelector(`.phase-ic`)),
        this.stopBtn.addEventListener(`click`, () => e(+(this.speed === 0))),
        this.fastBtn.addEventListener(`click`, () => e(this.speed === 20 ? 1 : 20)))
    }
    setPadTag(e) {
      this.fastBtn.querySelector(`.tag`).innerHTML = e
    }
    set(e, t, n, r) {
      let i = Math.floor(e * 60)
      ;(this.hourHand.setAttribute(
        `transform`,
        `rotate(${(((e % 12) / 12) * 360).toFixed(2)} 22 22)`
      ),
        this.minuteHand.setAttribute(`transform`, `rotate(${((e % 1) * 360).toFixed(1)} 22 22)`),
        i !== this.shownMinute && ((this.shownMinute = i), (this.timeText.textContent = un(e))),
        (t !== this.shownDay || n !== this.speed) &&
          ((this.shownDay = t),
          (this.dayText.textContent = n === 0 ? `Tiempo detenido` : `Día ${t}`)),
        (n !== this.speed || !this.el.dataset.speed) &&
          ((this.speed = n),
          (this.el.dataset.speed = n === 0 ? `stopped` : n === 20 ? `fast` : `normal`),
          (this.stopBtn.innerHTML = n === 0 ? pn.play : pn.stop),
          this.stopBtn.setAttribute(
            `aria-label`,
            n === 0 ? `Reanudar el tiempo` : `Detener el tiempo`
          ),
          this.fastBtn.setAttribute(`aria-pressed`, String(n === 20))),
        r !== this.phase && ((this.phase = r), (this.phaseIc.innerHTML = W(fn[r]))))
    }
  },
  G = `#2C2622`,
  hn = `#4A3F36`,
  gn = (e) =>
    `<svg class="glyph pad" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="15" fill="${G}"/><circle cx="16" cy="16" r="13.6" fill="none" stroke="${hn}" stroke-width="1.2"/>${e}</svg>`,
  _n = (e, t = !1) =>
    `<svg class="glyph pad wide" viewBox="0 0 44 32" aria-hidden="true"><path d="${t ? `M6 30V12Q6 3 16 3H28Q38 3 38 12V30Z` : `M3 8Q3 4 8 4H36Q41 4 41 8V24Q41 28 36 28H8Q3 28 3 24Z`}" fill="${G}"/><text x="22" y="${t ? 22 : 20.5}" text-anchor="middle" font-size="13" font-weight="700" fill="#FFF8EC" font-family="Fredoka Variable, ui-rounded, sans-serif">${e}</text></svg>`,
  vn = (e) => {
    let t = (t) => (t === e ? `#FFF8EC` : `#6E6258`)
    return `<svg class="glyph pad" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="15" fill="${G}"/><path d="M13 5.5h6v7.5h-6z" fill="${t(`up`)}"/><path d="M13 19h6v7.5h-6z" fill="${t(`down`)}"/><path d="M5.5 13h7.5v6H5.5z" fill="${t(`left`)}"/><path d="M19 13h7.5v6H19z" fill="${t(`right`)}"/></svg>`
  },
  yn = (e) =>
    `<svg class="glyph pad" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="15" fill="${G}"/><circle cx="16" cy="16" r="9" fill="none" stroke="#FFF8EC" stroke-width="2"/><text x="16" y="20.5" text-anchor="middle" font-size="12" font-weight="700" fill="#FFF8EC" font-family="Fredoka Variable, ui-rounded, sans-serif">${e}</text></svg>`,
  bn = {
    cross: gn(
      `<path d="M10.5 10.5l11 11M21.5 10.5l-11 11" stroke="#8DB6F2" stroke-width="3" stroke-linecap="round"/>`
    ),
    circle: gn(`<circle cx="16" cy="16" r="6.4" fill="none" stroke="#F3897C" stroke-width="3"/>`),
    square: gn(
      `<rect x="10.2" y="10.2" width="11.6" height="11.6" rx="1.6" fill="none" stroke="#EFA2D4" stroke-width="3"/>`
    ),
    triangle: gn(
      `<path d="M16 9.2 22.6 20.8H9.4Z" fill="none" stroke="#6FD6B2" stroke-width="3" stroke-linejoin="round"/>`
    ),
    l1: _n(`L1`),
    r1: _n(`R1`),
    l2: _n(`L2`, !0),
    r2: _n(`R2`, !0),
    options: `<svg class="glyph pad" viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="7" width="26" height="18" rx="9" fill="${G}"/><path d="M10.5 12.5h11M10.5 16h11M10.5 19.5h11" stroke="#FFF8EC" stroke-width="2" stroke-linecap="round"/></svg>`,
    create: `<svg class="glyph pad" viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="7" width="26" height="18" rx="9" fill="${G}"/><path d="M16 10.5v3.2M11.2 12.6l1.9 2.2M20.8 12.6l-1.9 2.2" stroke="#FFF8EC" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="19" r="2.3" fill="#FFF8EC"/></svg>`,
    dup: vn(`up`),
    ddown: vn(`down`),
    dleft: vn(`left`),
    dright: vn(`right`),
    lstick: yn(`L`),
    rstick: yn(`R`),
  }
function K(e) {
  return bn[e]
}
function q(e) {
  return `<kbd class="glyph key">${e}</kbd>`
}
function J(e) {
  let t = `#FFB547`
  return `<svg class="glyph mouse" viewBox="0 0 24 32" aria-hidden="true"><path d="M12 2.5C6.8 2.5 3.5 6 3.5 11.5v8C3.5 25.5 7.2 29.5 12 29.5s8.5-4 8.5-10v-8C20.5 6 17.2 2.5 12 2.5z" fill="${G}"/><path d="M11 3.6C7.2 4 5 6.8 5 11.2V13h6z" fill="${e === `left` || e === `drag` ? t : `none`}"/><path d="M13 3.6c3.8.4 6 3.2 6 7.6V13h-6z" fill="${e === `right` ? t : `none`}"/><path d="M4.5 13.6h15M12 3.4v10" stroke="#FFF8EC" stroke-width="1.4" opacity=".7"/><rect x="10.6" y="6.2" width="2.8" height="5" rx="1.4" fill="${e === `wheel` ? t : `#FFF8EC`}"/></svg>`
}
function Y() {
  return `<svg class="glyph touch" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="15" fill="${G}"/><circle cx="16" cy="16" r="6" fill="#FFF8EC"/><circle cx="16" cy="16" r="10" fill="none" stroke="#FFF8EC" stroke-width="1.6" opacity=".55"/></svg>`
}
var xn = 34,
  Sn = 0.28,
  Cn = class {
    voice
    tick
    el
    nameEl
    textEl
    choicesEl
    lines = []
    line = 0
    shown = 0
    wait = 0
    choices = []
    onChoice = null
    onEnd = null
    last = 0
    raf = 0
    active = !1
    constructor(e, t, n) {
      ;((this.voice = t), (this.tick = n))
      let r = document.createElement(`div`)
      ;((r.className = `dialog`),
        (r.innerHTML = `
      <div class="dialog-box" role="dialog" aria-live="polite">
        <div class="dialog-name"><span class="dialog-face"></span><b></b></div>
        <p class="dialog-text"></p>
        <span class="dialog-next" aria-hidden="true"><svg viewBox="0 0 20 14"><path d="M2 2h16l-8 10z" fill="currentColor"/></svg><span class="pad-only">${K(`cross`)}</span></span>
      </div>
      <div class="dialog-choices" role="menu"></div>`),
        e.appendChild(r),
        (this.el = r),
        (this.nameEl = r.querySelector(`.dialog-name`)),
        (this.textEl = r.querySelector(`.dialog-text`)),
        (this.choicesEl = r.querySelector(`.dialog-choices`)),
        r.querySelector(`.dialog-box`).addEventListener(`click`, () => this.advance()))
    }
    say(e, t, n, r = [], i, a) {
      ;((this.nameEl.querySelector(`b`).textContent = e),
        (this.nameEl.querySelector(`.dialog-face`).innerHTML = W(t)),
        (this.lines = n),
        (this.line = 0),
        (this.choices = r),
        (this.onChoice = i ?? null),
        (this.onEnd = a ?? null),
        (this.active = !0),
        this.el.classList.add(`on`),
        this.start())
    }
    hide() {
      ;((this.active = !1),
        this.el.classList.remove(`on`),
        (this.choicesEl.innerHTML = ``),
        cancelAnimationFrame(this.raf))
    }
    start() {
      ;((this.shown = 0),
        (this.wait = 0),
        (this.textEl.textContent = ``),
        (this.choicesEl.innerHTML = ``),
        this.el.classList.remove(`more`),
        this.voice(this.lines[this.line]),
        (this.last = performance.now()),
        cancelAnimationFrame(this.raf),
        (this.raf = requestAnimationFrame(this.type)))
    }
    type = (e) => {
      let t = this.lines[this.line],
        n = Math.min((e - this.last) / 1e3, 0.1)
      if (((this.last = e), this.wait > 0)) this.wait -= n
      else {
        let e = Math.floor(this.shown)
        this.shown = Math.min(t.length, this.shown + n * xn)
        let r = Math.floor(this.shown)
        r > e &&
          ((this.textEl.textContent = t.slice(0, r)),
          /[.!?…]/.test(t[r - 1]) && r < t.length && (this.wait = Sn))
      }
      this.shown < t.length ? (this.raf = requestAnimationFrame(this.type)) : this.finished()
    }
    finished() {
      if (!(this.line >= this.lines.length - 1) || !this.choices.length) {
        this.el.classList.add(`more`)
        return
      }
      ;((this.choicesEl.innerHTML = this.choices
        .map(
          (e, t) =>
            `<button class="choice" role="menuitem" data-key="${e.key}"${e.disabled ? ` aria-disabled="true"` : ``} style="--i:${t}">${e.label}</button>`
        )
        .join(``)),
        this.choicesEl.querySelectorAll(`.choice`).forEach((e) =>
          e.addEventListener(`click`, (t) => {
            if ((t.stopPropagation(), e.getAttribute(`aria-disabled`) === `true`)) {
              this.tick()
              return
            }
            this.onChoice?.(e.dataset.key)
          })
        ),
        this.choicesEl
          .querySelector(`.choice:not([aria-disabled="true"])`)
          ?.focus({ preventScroll: !0 }))
    }
    advance() {
      if (!this.active) return
      let e = this.lines[this.line]
      if (this.shown < e.length) {
        ;((this.shown = e.length),
          (this.textEl.textContent = e),
          cancelAnimationFrame(this.raf),
          this.finished())
        return
      }
      if (this.line < this.lines.length - 1) {
        ;(this.tick(), this.line++, this.start())
        return
      }
      if (!this.choices.length) {
        this.tick()
        let e = this.onEnd
        ;(this.hide(), e?.())
      }
    }
    choose(e) {
      return !this.choosing || !this.choices.some((t) => t.key === e && !t.disabled)
        ? !1
        : (this.onChoice?.(e), !0)
    }
    get choosing() {
      return this.active && this.choicesEl.childElementCount > 0
    }
  },
  Tn = { day: `day`, sunset: `sunset`, night: `night`, dawn: `dawn` },
  Dn = 550,
  On = `lighthouse.tutorial`,
  Z = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? `⌘` : `Ctrl`,
  Q = matchMedia(`(prefers-reduced-motion: reduce)`).matches,
  kn = class {
    handlers
    root
    slots = new Map()
    itemsBar
    packBtn
    pack
    woodCount
    woodCounter
    stoneCounter
    coinCounter
    hungerEl
    hungerNow = { value: 100, on: !1, cold: !1 }
    toastEl
    promptEl
    clock
    clockNow = { hour: 7, day: 1, speed: 1 }
    undoBtn
    redoBtn
    ring
    flyers
    title
    crafting
    menu
    cook
    shop
    orderEl
    dialog
    wanted = null
    scrim
    soundSwitch
    musicSwitch
    creativeSwitch
    clearRow
    newRow
    tool = `hand`
    inv = {
      wood: 0,
      stone: 0,
      coins: 0,
      blocks: 0,
      benches: 0,
      bonfires: 0,
      axe: !1,
      pickaxe: !1,
      rod: !1,
      fish: [],
      blueprints: [],
      benchesPlaced: 0,
      earned: !1,
      pockets: 12,
    }
    freshPocket = ``
    phase = `day`
    tipEl
    tipTimer = 0
    tipHideTimer = 0
    tipAt = null
    tipOn = !1
    tipWarmUntil = 0
    tipMuted = null
    swallowClickUntil = 0
    newTimer = 0
    mode
    panel = null
    titleUp = !1
    playing = !1
    photo = !1
    toastTimer = 0
    ringTimer = 0
    clearTimer = 0
    tutorialStep = 0
    inFlight = { wood: 0, stone: 0, coins: 0, blocks: 0, axe: 0, fish: 0 }
    fresh = !1
    craftAmount = 1
    openedAt = 0
    shown = new Set()
    lastPrompt = ``
    constructor(e, t, n) {
      ;((this.handlers = t),
        (this.root = e),
        (this.mode = matchMedia(`(pointer: coarse)`).matches ? `touch` : `mouse`),
        (e.innerHTML = `
      <div class="title" aria-hidden="true">
        <div class="title-top">
          <svg class="wordmark" viewBox="0 0 600 150" role="img" aria-label="Lighthouse">
            <text x="300" y="112" text-anchor="middle" class="wm-shadow">Lighthouse</text>
            <text x="300" y="104" text-anchor="middle" class="wm-stroke">Lighthouse</text>
            <text x="300" y="104" text-anchor="middle" class="wm-fill">Lighthouse</text>
          </svg>
          <p class="tagline">Una pequeña isla acogedora donde construir</p>
        </div>
        <div class="title-bottom">
          <button class="btn primary big play"><span class="play-label">Jugar</span><span class="pad-only">${K(`cross`)}</span></button>
          <div class="title-inputs">
            <span>${J(`left`)} Ratón y teclado</span>
            <span>${Y()} Táctil</span>
            <span>${K(`cross`)} Mando de PS5</span>
          </div>
        </div>
      </div>
      <div class="hud-counters">
        <button class="round pack-btn" aria-label="Mochila" data-tip="pack">${W(`backpack`)}<span class="new-dot"></span><span class="tag">${K(`ddown`)}</span></button>
        <div class="hud-resources">
          <div class="counter wood" data-tip="wood">${W(`wood`)}<b>0</b></div>
          <div class="counter stone" data-tip="stone" hidden>${W(`stone`)}<b>0</b></div>
          <div class="counter coins" data-tip="coins" hidden>${W(`coin`)}<b>0</b></div>
          <div class="hunger" data-tip="hunger" hidden>${W(`hunger`)}<span class="meter"><span class="fill"></span></span><span class="cold" aria-label="Frío">${jn()}</span></div>
        </div>
      </div>
      <div class="hud-corner">
        <button class="round menu-btn" aria-label="Menú" data-tip="menu">${W(`menu`)}<span class="tag">${K(`options`)}</span></button>
      </div>
      <div class="toast" role="status" aria-live="polite"><span class="toast-ic"></span><span class="toast-text"></span></div>
      <div class="prompt" aria-hidden="true"><span class="prompt-glyph"></span><span class="prompt-text"></span></div>
      <div class="reticle" aria-hidden="true"></div>
      <svg class="press-ring" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="26"/></svg>
      <div class="hotbar">
        <div class="history">
          <button class="round small undo" aria-label="Deshacer" data-tip="undo" disabled>${W(`undo`)}<span class="tag">${K(`square`)}</span></button>
          <button class="round small redo" aria-label="Rehacer" data-tip="redo" disabled>${W(`redo`)}<span class="tag">${K(`triangle`)}</span></button>
        </div>
        <div class="tray" role="toolbar" aria-label="Barra rápida">
          <span class="bumper">${K(`l1`)}</span>
          <div class="group items" aria-label="Objetos"></div>
          <div class="group tools" aria-label="Herramientas">${wn.map((e) => An(e, `tool`)).join(``)}</div>
          <span class="bumper">${K(`r1`)}</span>
        </div>
      </div>
      <div class="flyers"></div>
      <div class="scrim"></div>
      <section class="panel crafting" role="dialog" aria-label="Mesa de trabajo">
        <header>${W(`bench`, `panel-ic`)}<h2>Mesa de trabajo</h2><button class="close" aria-label="Cerrar">${Mn()}</button></header>
        <div class="split">
        <div class="split-main">
        <div class="recipe">
          <div class="item">${W(`wood`)}<span class="qty">×<b class="in">1</b></span><small>Madera</small></div>
          <svg class="arrow" viewBox="0 0 48 32" aria-hidden="true"><path d="M4 16h34M28 6l12 10-12 10" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <div class="item">${W(`block`)}<span class="qty">×<b class="out">3</b></span><small>Bloques de madera</small></div>
        </div>
        <div class="amounts" role="radiogroup" aria-label="Cantidad">
          <button class="chip on" data-n="1" role="radio" aria-checked="true">×1</button>
          <button class="chip" data-n="5" role="radio" aria-checked="false">×5</button>
          <button class="chip" data-n="all" role="radio" aria-checked="false">Todo</button>
        </div>
        <button class="btn primary craft"><span class="pad-only">${K(`cross`)}</span><span class="craft-label">Fabricar</span></button>
        <p class="have"></p>
        </div>
        <div class="split-side bench-side" hidden>
          <h3 class="make-title">Herramientas</h3>
          <div class="make-list bench-list"></div>
        </div>
        </div>
      </section>
      <section class="panel pack wide" role="dialog" aria-label="Mochila">
        <header>${W(`backpack`, `panel-ic`)}<h2>Mochila</h2><span class="pocket-count"></span><button class="close" aria-label="Cerrar">${Mn()}</button></header>
        <div class="split">
          <div class="split-main">
            <div class="pockets"></div>
            <p class="pocket-info">Aquí van las cosas que haces o encuentras.</p>
          </div>
          <div class="split-side">
            <h3 class="make-title">Hacer a mano</h3>
            <div class="make-list hand-list"></div>
          </div>
        </div>
      </section>
      <section class="panel cook wide" role="dialog" aria-label="Fogata">
        <header>${W(`bonfire`, `panel-ic`)}<h2>Fogata</h2><button class="close" aria-label="Cerrar">${Mn()}</button></header>
        <p class="cook-note">El pescado a la brasa alimenta el triple y se vende por el triple de precio.</p>
        <div class="make-list cook-list"></div>
      </section>
      <section class="panel shop wide" role="dialog" aria-label="Vender pescado">
        <header>${W(`gil`, `panel-ic`)}<h2>Barril de pescado de Gil</h2><span class="shop-coins">${W(`coin`, `mini`)}<b>0</b></span><button class="close" aria-label="Cerrar">${Mn()}</button></header>
        <div class="make-list shop-list"></div>
        <div class="shop-total"><span class="row-text">Todo<small class="shop-sum"></small></span><button class="btn primary sell-all"><span class="pad-only">${K(`triangle`)}</span>Vender todo</button></div>
      </section>
      <section class="panel order" role="dialog" aria-label="Pedido especial">
        <header>${W(`request`, `panel-ic`)}<h2>Pedido especial</h2><button class="close" aria-label="Cerrar">${Mn()}</button></header>
        <p class="order-note">Un lote para el mercado de la isla de Gil. Tráele todo esto y te recompensará muy bien.</p>
        <div class="order-items"></div>
        <div class="order-reward">${W(`coin`)}<span class="row-text">Recompensa épica<small class="reward-sum"></small></span><button class="btn primary hand-over"><span class="pad-only">${K(`cross`)}</span>Entregar</button></div>
      </section>
      <section class="panel menu" role="dialog" aria-label="Menú">
        <header>${W(`menu`, `panel-ic`)}<h2>Menú</h2><button class="close" aria-label="Cerrar">${Mn()}</button></header>
        <div class="menu-main">
          <button class="row sound-row" role="switch" aria-checked="false">${W(`sound`)}<span class="row-text">Sonido<small>Olas, pájaros y cada golpe</small></span><span class="switch"></span></button>
          <button class="row music-row" role="switch" aria-checked="false">${W(`music`)}<span class="row-text">Música<small>Melodías suaves según la hora del día</small></span><span class="switch"></span></button>
          <button class="row creative-row" role="switch" aria-checked="false">${W(`block`)}<span class="row-text">Modo creativo<small>Bloques y madera gratis</small></span><span class="switch"></span></button>
          <button class="row photo-row">${W(`photo`)}<span class="row-text">Modo foto<small>Oculta todo menos la isla</small></span><span class="go">${Nn()}</span></button>
          <button class="row controls-row">${W(`controls`)}<span class="row-text">Controles<small>Ratón, táctil y mando de PS5</small></span><span class="go">${Nn()}</span></button>
          <button class="row danger clear-row">${W(`clear`)}<span class="row-text">Limpiar la isla<small>Bloques y terreno modificado · deshacer lo restaura</small></span><span class="go">${Nn()}</span></button>
          <button class="row danger new-row">${W(`palm`)}<span class="row-text">Empezar de nuevo<small>Una isla nueva: despierta con los bolsillos vacíos</small></span><span class="go">${Nn()}</span></button>
        </div>
        <div class="menu-controls" hidden>
          <div class="tabs" role="tablist">
            <button class="chip on" data-tab="mouse" role="tab">Ratón y teclado</button>
            <button class="chip" data-tab="touch" role="tab">Táctil</button>
            <button class="chip" data-tab="pad" role="tab">Mando</button>
          </div>
          <div class="control-list" data-tab="mouse">${Pn(`mouse`)}</div>
          <div class="control-list" data-tab="touch" hidden>${Pn(`touch`)}</div>
          <div class="control-list" data-tab="pad" hidden>${Pn(`pad`)}</div>
          <button class="btn back">${Nn(!0)} Volver</button>
        </div>
      </section>
      <div class="tip" aria-hidden="true"><div class="tip-card"></div></div>
      <button class="photo-exit" aria-label="Salir del modo foto">${W(`photo`)}<span>Modo foto</span><span class="pad-only">${K(`circle`)}</span><span class="key-only">${q(`Esc`)}</span></button>`))
      let r = (t) => e.querySelector(t)
      ;((this.title = r(`.title`)),
        (this.woodCounter = r(`.counter.wood`)),
        (this.woodCount = r(`.counter.wood b`)),
        (this.stoneCounter = r(`.counter.stone`)),
        (this.coinCounter = r(`.counter.coins`)),
        (this.hungerEl = r(`.hunger`)),
        (this.itemsBar = r(`.hotbar .items`)),
        (this.packBtn = r(`.pack-btn`)),
        (this.pack = r(`.panel.pack`)),
        (this.toastEl = r(`.toast`)),
        (this.promptEl = r(`.prompt`)),
        (this.clock = new mn((e) => {
          ;(this.handlers.onUi(), this.handlers.onSpeed(e))
        })),
        this.clock.setPadTag(K(`dup`)),
        r(`.hud-corner`).prepend(this.clock.el),
        (this.undoBtn = r(`.undo`)),
        (this.redoBtn = r(`.redo`)),
        (this.ring = r(`.press-ring`)),
        (this.flyers = r(`.flyers`)),
        (this.crafting = r(`.panel.crafting`)),
        (this.menu = r(`.panel.menu`)),
        (this.cook = r(`.panel.cook`)),
        (this.shop = r(`.panel.shop`)),
        (this.orderEl = r(`.panel.order`)),
        (this.dialog = new Cn(
          e,
          (e) => this.handlers.onVoice(e),
          () => this.handlers.onUi()
        )),
        this.shop.querySelector(`.sell-all`).addEventListener(`click`, () => {
          let e = this.inv.fish
          if (!e.length) return this.handlers.onUi()
          for (let t of e) this.handlers.onSell(t.id, t.cooked, t.n)
        }),
        this.orderEl
          .querySelector(`.hand-over`)
          .addEventListener(`click`, () => this.handlers.onHandOver()),
        (this.scrim = r(`.scrim`)),
        (this.soundSwitch = r(`.sound-row`)),
        (this.musicSwitch = r(`.music-row`)),
        (this.creativeSwitch = r(`.creative-row`)),
        (this.clearRow = r(`.clear-row`)),
        (this.newRow = r(`.new-row`)),
        (this.tipEl = r(`.tip`)),
        r(`.play`).addEventListener(`click`, () => this.play()),
        e.querySelectorAll(`.tools .slot`).forEach((e) => this.wireSlot(e)),
        this.renumber(),
        this.packBtn.addEventListener(`click`, () => this.togglePack()),
        this.undoBtn.addEventListener(`click`, () => this.handlers.onUndo()),
        this.redoBtn.addEventListener(`click`, () => this.handlers.onRedo()),
        r(`.menu-btn`).addEventListener(`click`, () => this.open(`menu`)),
        this.scrim.addEventListener(`click`, () => {
          performance.now() - this.openedAt < 450 ||
            (this.panel === `talk` ? this.back() : this.close())
        }),
        e
          .querySelectorAll(`.panel .close`)
          .forEach((e) => e.addEventListener(`click`, () => this.close())),
        e.querySelectorAll(`.amounts .chip`).forEach((e) =>
          e.addEventListener(`click`, () => {
            let t = e.dataset.n === `all` ? `all` : Number(e.dataset.n)
            ;((this.craftAmount = t), this.handlers.onUi(), this.refreshCrafting())
          })
        ),
        r(`.craft`).addEventListener(`click`, () => {
          let e = this.craftTimes()
          e > 0 ? this.handlers.onCraft(e) : this.handlers.onUi()
        }),
        this.soundSwitch.addEventListener(`click`, () => {
          let e = this.soundSwitch.getAttribute(`aria-checked`) !== `true`
          ;(this.setMuted(!e), this.handlers.onMute(!e), e && this.handlers.onUi())
        }),
        this.musicSwitch.addEventListener(`click`, () => {
          let e = this.musicSwitch.getAttribute(`aria-checked`) !== `true`
          ;(this.musicSwitch.setAttribute(`aria-checked`, String(e)),
            this.handlers.onUi(),
            this.handlers.onMusic(e))
        }),
        this.creativeSwitch.addEventListener(`click`, () => {
          let e = this.creativeSwitch.getAttribute(`aria-checked`) !== `true`
          ;(this.setCreative(e), this.handlers.onUi(), this.handlers.onCreative(e))
        }),
        r(`.photo-row`).addEventListener(`click`, () => {
          ;(this.close(), this.setPhoto(!0))
        }),
        r(`.controls-row`).addEventListener(`click`, () => {
          ;(this.handlers.onUi(), this.showControls(!0))
        }),
        r(`.menu-controls .back`).addEventListener(`click`, () => {
          ;(this.handlers.onUi(), this.showControls(!1))
        }),
        e.querySelectorAll(`.tabs .chip`).forEach((e) =>
          e.addEventListener(`click`, () => {
            ;(this.handlers.onUi(), this.showTab(e.dataset.tab))
          })
        ),
        this.clearRow.addEventListener(`click`, () => {
          if (this.clearRow.classList.contains(`armed`)) {
            ;(this.disarmClear(), this.close(), this.handlers.onClear())
            return
          }
          ;(this.clearRow.classList.add(`armed`),
            (this.clearRow.querySelector(`small`).textContent = `Pulsa de nuevo para limpiarlo todo`),
            this.handlers.onUi(),
            window.clearTimeout(this.clearTimer),
            (this.clearTimer = window.setTimeout(() => this.disarmClear(), 3500)))
        }),
        this.newRow.addEventListener(`click`, () => {
          if (this.newRow.classList.contains(`armed`)) {
            ;(this.disarmClear(), this.handlers.onStartOver())
            return
          }
          ;(this.newRow.classList.add(`armed`),
            (this.newRow.querySelector(`small`).textContent = `Pulsa de nuevo para empezar una isla nueva`),
            this.handlers.onUi(),
            window.clearTimeout(this.newTimer),
            (this.newTimer = window.setTimeout(() => this.disarmClear(), 3500)))
        }),
        r(`.photo-exit`).addEventListener(`click`, () => this.setPhoto(!1)),
        e.addEventListener(`pointerover`, (e) => {
          if (e.pointerType !== `mouse`) return
          let t = e.target.closest?.(`button`)
          t &&
            !e.relatedTarget?.closest?.(`button`)?.isSameNode(t) &&
            !t.disabled &&
            this.handlers.onHover()
        }),
        this.wireTips(e),
        window.addEventListener(`keydown`, (e) => {
          if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return
          let t = e.key.toLowerCase()
          if (t === `escape`) {
            this.photo
              ? this.setPhoto(!1)
              : this.panel
                ? this.back()
                : this.playing && this.open(`menu`, !0)
            return
          }
          if (this.titleUp) {
            ;(t === `enter` || t === ` `) && this.play()
            return
          }
          if (this.panel === `pack` && (t === `i` || t === `b`)) {
            this.close()
            return
          }
          if (
            this.panel === `talk` &&
            !this.dialog.choosing &&
            (t === `enter` || t === ` ` || t === `e`)
          ) {
            ;(e.preventDefault(), this.dialog.advance())
            return
          }
          if (this.panel) {
            let n = { arrowup: [0, -1], arrowdown: [0, 1], arrowleft: [-1, 0], arrowright: [1, 0] }
            n[t] && (e.preventDefault(), this.navigate(...n[t]))
            return
          }
          if (!this.playing) return
          let n = Number(t)
          n >= 1 && n <= 9
            ? this.pick(n - 1)
            : t === `i` || t === `b`
              ? this.togglePack(!0)
              : t === `t`
                ? this.setSpeed(this.clockNow.speed === 20 ? 1 : 20)
                : t === ` `
                  ? (e.preventDefault(), this.setSpeed(+(this.clockNow.speed === 0)))
                  : t === `m`
                    ? this.soundSwitch.click()
                    : (t === `h` || t === `p`) && this.setPhoto(!this.photo)
        }),
        window.addEventListener(
          `pointerdown`,
          (e) => {
            ;(this.setMode(e.pointerType === `mouse` ? `mouse` : `touch`),
              !this.clearRow.contains(e.target) &&
                !this.newRow.contains(e.target) &&
                this.disarmClear())
          },
          !0
        ),
        window.addEventListener(`pointermove`, (e) => {
          e.pointerType === `mouse` &&
            this.mode !== `mouse` &&
            Math.abs(e.movementX) + Math.abs(e.movementY) > 3 &&
            this.setMode(`mouse`)
        }))
      try {
        this.tutorialStep = localStorage.getItem(On) === `done` ? 3 : 0
      } catch {}
      ;(this.setMuted(n.muted),
        this.musicSwitch.setAttribute(`aria-checked`, String(n.music)),
        this.setCreative(n.creative),
        this.setMode(this.mode),
        this.showTab(this.mode))
    }
    showTitle(e) {
      ;((this.titleUp = !0),
        this.root.classList.add(`titled`),
        this.title.setAttribute(`aria-hidden`, `false`),
        (this.root.querySelector(`.play-label`).textContent = e ? `Continuar` : `Jugar`),
        requestAnimationFrame(() => this.title.classList.add(`on`)))
    }
    get onTitle() {
      return this.titleUp
    }
    play() {
      this.titleUp &&
        ((this.titleUp = !1),
        this.title.classList.remove(`on`),
        this.title.classList.add(`leaving`),
        this.title.setAttribute(`aria-hidden`, `true`),
        window.setTimeout(() => this.title.remove(), 900),
        this.handlers.onPlay(),
        window.setTimeout(() => this.reveal(), 350))
    }
    reveal() {
      ;((this.playing = !0),
        this.root.classList.remove(`titled`),
        this.root.classList.add(`ready`),
        this.fresh &&
          (window.setTimeout(
            () =>
              this.once(
                `hint.wake`,
                `Te despiertas en una pequeña isla… ¿cómo has llegado hasta aquí?`,
                `palm`,
                4400
              ),
            1300
          ),
          window.setTimeout(() => {
            this.inv.axe ||
              this.once(
                `hint.glint`,
                `Algo brilla en la pradera — ${this.verb(`recogerlo`)}`,
                `axe`,
                6e3
              )
          }, 6200)))
    }
    verb(e) {
      return this.mode === `touch`
        ? `tócalo para ${e}`
        : this.mode === `pad`
          ? `apunta y pulsa ✕ para ${e}`
          : `haz clic para ${e}`
    }
    setFresh(e) {
      this.fresh = e
    }
    get isPlaying() {
      return this.playing && !this.photo
    }
    setTool(e) {
      let t = e !== this.tool
      ;((this.tool = e), this.renderItems())
      for (let [n, r] of this.slots) {
        let i = n === e
        ;(r.classList.toggle(`active`, i),
          r.setAttribute(`aria-pressed`, String(i)),
          i &&
            t &&
            !Q &&
            r.animate(
              [
                { transform: `translateY(-8px) scale(0.86)` },
                { transform: `translateY(-11px) scale(1.06)` },
                { transform: `translateY(-8px) scale(1)` },
              ],
              { duration: 360, easing: `ease-out` }
            ))
      }
      if (
        ((this.root.dataset.tool = e),
        this.panel === `pack` && this.renderPack(),
        !this.playing || !t)
      )
        return
      let n = this.mode
      ;(e === `axe` &&
        this.once(
          `hint.axe`,
          n === `pad`
            ? `Apunta a una palmera y pulsa ✕ para talar`
            : n === `touch`
              ? `Toca una palmera para talarla — cae con tres golpes`
              : `Haz clic en una palmera para talarla — cae con tres golpes`,
          `axe`
        ),
        e === `pickaxe` &&
          this.once(
            `hint.pickaxe`,
            n === `pad`
              ? `Apunta a una roca y pulsa ✕ para romper piedras · mantén ✕ para seguir`
              : `${n === `touch` ? `Toca` : `Haz clic en`} una roca para romper piedras · mantén pulsado para seguir`,
            `pickaxe`,
            5200
          ),
        e === `rod` &&
          this.once(
            `hint.rod`,
            n === `pad`
              ? `Apunta al mar cerca de la sombra de un pez y pulsa ✕ para lanzar · cuando el corcho se hunda, ¡pulsa ✕ otra vez!`
              : `${n === `touch` ? `Toca` : `Haz clic en`} el mar cerca de la sombra de un pez para lanzar · cuando el corcho se hunda, ¡${n === `touch` ? `toca` : `haz clic`} otra vez!`,
            `rod`,
            6400
          ),
        e === `bonfire` &&
          this.once(
            `hint.bonfire`,
            n === `pad`
              ? `Apunta a un sitio y pulsa ✕ para colocar la fogata`
              : `${n === `touch` ? `Toca` : `Haz clic en`} un sitio para colocar la fogata`,
            `bonfire`,
            4200
          ),
        e === `bench` &&
          this.once(
            `hint.bench3`,
            n === `pad`
              ? `Apunta a un buen sitio y pulsa ✕ para colocar la mesa de trabajo`
              : `${n === `touch` ? `Toca` : `Haz clic en`} un buen sitio para colocar la mesa de trabajo`,
            `bench`,
            4600
          ),
        e === `build` &&
          this.tutorialStep === 0 &&
          !this.shown.has(`tut0`) &&
          (this.shown.add(`tut0`),
          this.toast(
            n === `touch`
              ? `Toca la hierba para colocar un bloque de madera`
              : n === `pad`
                ? `Pulsa ✕ para colocar un bloque de madera`
                : `Haz clic en la hierba para colocar un bloque de madera`,
            `block`,
            5200
          )),
        e === `raise` &&
          this.once(
            `hint.raise2`,
            n === `touch`
              ? `Toca para elevar el terreno · mantén y arrastra para crear una terraza`
              : n === `pad`
                ? `✕ eleva el terreno · mantén ✕ y muévete para moldear`
                : `Haz clic para elevar el terreno · ${Z}+arrastrar para crear una terraza`,
            `raise`
          ),
        e === `dig` &&
          this.once(
            `hint.dig3`,
            n === `touch`
              ? `Toca para cavar un estanque · mantén y arrastra para extenderlo`
              : n === `pad`
                ? `✕ cava · mantén ✕ y muévete para hacer un estanque`
                : `Haz clic para cavar un estanque · ${Z}+arrastrar para extenderlo`,
            `lower`
          ),
        e === `remove` &&
          this.once(
            `hint.shovel`,
            n === `touch`
              ? `La pala recoge bloques · mantén y arrastra para barrer`
              : n === `pad`
                ? `La pala recoge bloques · mantén ✕ y muévete para barrer`
                : `La pala recoge bloques · ${Z}+arrastrar para quitar una fila`,
            `shovel`
          ))
    }
    cycleTool(e) {
      let t = this.order()
      if (!t.length) return
      let n = t.findIndex((e) => e.tool === this.tool),
        r = n < 0 ? (e > 0 ? 0 : t.length - 1) : (n + e + t.length) % t.length
      ;(this.handlers.onSelect(r), this.handlers.onTool(t[r].tool))
    }
    pick(e) {
      let t = this.order()[e]
      if (t) {
        if (t.tool === this.tool) {
          ;(this.handlers.onUi(), this.handlers.onTool(`hand`))
          return
        }
        ;(this.handlers.onSelect(e), this.handlers.onTool(t.tool))
      }
    }
    wireSlot(e) {
      let t = e.dataset.tool
      ;(this.slots.set(t, e),
        e.addEventListener(`click`, () => {
          let e = this.order().findIndex((e) => e.tool === t)
          e >= 0 && this.pick(e)
        }))
    }
    order() {
      return [...X, ...wn].filter((e) => this.slots.has(e.tool))
    }
    renumber() {
      this.order().forEach((e, t) => {
        let n = this.slots.get(e.tool)
        ;((n.querySelector(`.num`).textContent = t < 9 ? String(t + 1) : ``),
          t < 9
            ? n.setAttribute(`aria-keyshortcuts`, String(t + 1))
            : n.removeAttribute(`aria-keyshortcuts`))
      })
    }
    itemCount(e) {
      let t = this.inv
      return e === `axe`
        ? t.axe && (this.inFlight.axe === 0 || t.blocks === 1 / 0)
          ? 1
          : 0
        : e === `pickaxe`
          ? +!!t.pickaxe
          : e === `rod`
            ? +!!t.rod
            : e === `build`
              ? t.blocks === 1 / 0
                ? 1 / 0
                : Math.max(0, t.blocks - this.inFlight.blocks)
              : e === `bench`
                ? t.benches
                : e === `bonfire`
                  ? t.bonfires
                  : 0
    }
    renderItems() {
      let e = X.filter((e) => this.itemCount(e.tool) > 0 || this.tool === e.tool),
        t = !1
      for (let n of X) {
        let r = this.slots.get(n.tool)
        r &&
          !e.includes(n) &&
          (this.slots.delete(n.tool),
          (t = !0),
          (r.disabled = !0),
          r.classList.add(`leaving`),
          Q
            ? r.remove()
            : (r.animate(
                [
                  { transform: `scale(1)`, opacity: 1 },
                  { transform: `scale(0.2)`, opacity: 0 },
                ],
                { duration: 220, easing: `ease-in` }
              ).onfinish = () => r.remove()))
      }
      ;(e.forEach((e, n) => {
        let r = this.slots.get(e.tool)
        if (!r) {
          let n = document.createElement(`div`)
          ;((n.innerHTML = An(e, `item`)),
            (r = n.firstElementChild),
            this.wireSlot(r),
            (t = !0),
            this.playing &&
              !Q &&
              r.animate(
                [
                  { transform: `scale(0.2) rotate(-20deg)`, opacity: 0 },
                  { transform: `scale(1.15) rotate(6deg)`, opacity: 1, offset: 0.6 },
                  { transform: `none`, opacity: 1 },
                ],
                { duration: 520, easing: `ease-out` }
              ))
        }
        let i = [...this.itemsBar.children].filter((e) => !e.classList.contains(`leaving`))
        i[n] !== r && this.itemsBar.insertBefore(r, i[n] ?? null)
      }),
        t &&
          (this.renumber(),
          this.root.classList.toggle(`has-items`, e.length > 0),
          this.tipAt?.classList.contains(`leaving`) && this.hideTip(),
          this.fitHotbar()))
      let n = (e) => (e === 1 / 0 ? `∞` : String(e)),
        r = this.slots.get(`build`)?.querySelector(`.badge`)
      if (r) {
        let e = this.itemCount(`build`)
        ;((r.textContent = n(e)), r.classList.toggle(`empty`, e === 0))
      }
      for (let e of [`bench`, `bonfire`]) {
        let t = this.slots.get(e)?.querySelector(`.badge`)
        if (!t) continue
        let r = this.itemCount(e)
        ;((t.textContent = n(r)), (t.hidden = r === 1), t.classList.toggle(`empty`, r === 0))
      }
    }
    fitHotbar() {
      let e = this.root.querySelector(`.hotbar`)
      e.classList.remove(`stacked`)
      let t = e.querySelector(`.tray`),
        n = window.innerWidth - 28
      t.scrollWidth > n && e.classList.add(`stacked`)
    }
    setInventory(e) {
      let t = this.inv
      if (
        ((this.inv = { ...e, fish: e.fish.map((e) => ({ ...e })), blueprints: [...e.blueprints] }),
        this.playing && e.blocks !== 1 / 0)
      ) {
        let n = new Set(this.stacksOf(t).map((e) => e.key)),
          r = this.stacksOf(e).find((e) => !n.has(e.key))
        r &&
          this.panel !== `pack` &&
          (this.packBtn.classList.add(`new`), (this.freshPocket = r.key))
      }
      ;(this.renderCounts(),
        this.renderItems(),
        this.panel === `crafting` && this.refreshCrafting(),
        this.panel === `pack` && this.renderPack(),
        this.panel === `cook` && this.renderCooking(),
        this.panel === `shop` && this.renderShop(),
        this.panel === `order` && this.renderOrder(),
        this.nudgeRecipes())
    }
    renderCounts() {
      let e = this.inv,
        t = e.blocks === 1 / 0,
        n = (e, n) => (t ? `∞` : String(Math.max(0, e - n)))
      ;((this.woodCount.textContent = n(e.wood, this.inFlight.wood)),
        (this.stoneCounter.hidden = !t && !e.pickaxe && e.stone === 0),
        (this.stoneCounter.querySelector(`b`).textContent = n(e.stone, this.inFlight.stone)),
        (this.coinCounter.hidden = !t && !e.earned),
        (this.coinCounter.querySelector(`b`).textContent = t
          ? `∞`
          : String(Math.max(0, e.coins - this.inFlight.coins))))
    }
    setHistory(e, t) {
      ;((this.undoBtn.disabled = !e), (this.redoBtn.disabled = !t))
    }
    setHunger(e, t, n) {
      let r = this.hungerNow
      this.hungerNow = { value: e, on: t, cold: n }
      let i = this.hungerEl
      ;(i.hidden === t &&
        ((i.hidden = !t),
        t &&
          this.playing &&
          !Q &&
          i.animate(
            [
              { transform: `scale(0.3)`, opacity: 0 },
              { transform: `scale(1.15)`, opacity: 1, offset: 0.6 },
              { transform: `none` },
            ],
            { duration: 560, easing: `ease-out` }
          )),
        (i.querySelector(`.fill`).style.width = `${Math.max(0, Math.min(100, e))}%`),
        (i.dataset.level = e <= 0 ? `empty` : e < 25 ? `low` : e < 55 ? `mid` : `full`),
        i.classList.toggle(`is-cold`, n),
        t && r.on && e > r.value + 1 && this.bump(i))
    }
    setTime(e) {
      ;((this.phase = e), this.root.classList.toggle(`night`, e === `night`))
    }
    setClock(e, t, n, r) {
      ;((this.clockNow = { hour: e, day: t, speed: n }), this.clock.set(e, t, n, r))
    }
    setSpeed(e) {
      ;(this.handlers.onUi(), this.handlers.onSpeed(e))
    }
    cycleSpeed() {
      let e = this.clockNow.speed
      this.setSpeed(e === 1 ? 20 : e === 20 ? 0 : 1)
    }
    setMuted(e) {
      ;(this.soundSwitch.setAttribute(`aria-checked`, String(!e)),
        (this.soundSwitch.querySelector(`img`).outerHTML = W(e ? `muted` : `sound`)))
    }
    setCreative(e) {
      ;(this.creativeSwitch.setAttribute(`aria-checked`, String(e)),
        this.root.classList.toggle(`creative`, e))
    }
    setMode(e) {
      ;(e === this.mode && this.root.classList.contains(`mode-${e}`)) ||
        ((this.mode = e),
        this.root.classList.remove(`mode-mouse`, `mode-touch`, `mode-pad`),
        this.root.classList.add(`mode-${e}`),
        (this.lastPrompt = ``),
        this.hideTip())
    }
    get inputMode() {
      return this.mode
    }
    toast(e, t, n = 3200) {
      ;(window.clearTimeout(this.toastTimer),
        (this.toastEl.querySelector(`.toast-ic`).innerHTML = t ? W(t) : ``),
        (this.toastEl.querySelector(`.toast-text`).textContent = e),
        this.toastEl.classList.remove(`on`),
        this.toastEl.offsetWidth,
        this.toastEl.classList.add(`on`),
        (this.toastUntil = performance.now() + n),
        (this.toastTimer = window.setTimeout(() => {
          this.toastEl.classList.remove(`on`)
          let e = this.toastQueue.shift()
          e && (this.toastTimer = window.setTimeout(() => this.toast(...e), 380))
        }, n)))
    }
    announce(e, t, n = 4800) {
      performance.now() < this.toastUntil ? this.toastQueue.push([e, t, n]) : this.toast(e, t, n)
    }
    toastQueue = []
    toastUntil = 0
    caught(e) {
      this.toast(e.line, `fish_${e.id}`, 4200)
    }
    escaped(e) {
      this.toast(
        e === `early`
          ? `¡Demasiado pronto! Se escapó nadando… espera a que el corcho se hunda`
          : `Se escapó… recoge en cuanto el corcho se hunda`,
        `rod`,
        3400
      )
    }
    bite() {
      this.biteUntil = performance.now() + 900
    }
    biteUntil = 0
    notFishy() {
      performance.now() - this.fishyAt < 3e3 ||
        ((this.fishyAt = performance.now()),
        this.toast(
          `Lanza al mar cerca de la orilla — busca sombras de peces en el agua`,
          `rod`,
          3400
        ))
    }
    fishyAt = 0
    once(e, t, n, r = 4800) {
      if (!this.shown.has(e)) {
        this.shown.add(e)
        try {
          if (localStorage.getItem(`lighthouse.${e}`) === `done`) return
          localStorage.setItem(`lighthouse.${e}`, `done`)
        } catch {}
        this.toast(t, n, r)
      }
    }
    prompt(e, t = ``, n = !1) {
      let r = this.promptEl,
        i = t.endsWith(`!`) && performance.now() < this.biteUntil + 2e3
      if (!e || !t || (this.mode === `touch` && !i) || this.panel || !this.isPlaying) {
        r.classList.remove(`on`)
        return
      }
      r.classList.toggle(`urgent`, i)
      let a = `${t}|${n}|${this.mode}`
      ;(a !== this.lastPrompt &&
        ((this.lastPrompt = a),
        (r.querySelector(`.prompt-glyph`).innerHTML =
          this.mode === `pad` ? K(n ? `circle` : `cross`) : J(n ? `right` : `left`)),
        (r.querySelector(`.prompt-text`).textContent = t)),
        (r.style.transform = `translate3d(${Math.round(e.x)}px, ${Math.round(e.y)}px, 0) translate(-50%, -100%)`),
        r.classList.add(`on`))
    }
    short() {
      if ((this.bump(this.slots.get(`build`) ?? this.packBtn), !this.shown.has(`short`))) {
        ;(this.shown.add(`short`),
          (this.shortExplained = performance.now()),
          this.toast(
            `¡Sin bloques! Tala palmeras para obtener madera y conviértela en bloques en una mesa de trabajo`,
            `block`,
            6e3
          ))
        return
      }
      performance.now() - this.shortExplained > 6e3 &&
        this.toast(`No quedan bloques — fabrica más en una mesa de trabajo`, `block`, 2600)
    }
    shortExplained = 0
    poor(e) {
      ;(this.toast(
        e === `bench`
          ? `Fabrica primero una mesa de trabajo en tu mochila`
          : `Fabrica primero una fogata en tu mochila`,
        `backpack`,
        3400
      ),
        this.bump(this.packBtn))
    }
    packKey() {
      return this.mode === `pad` ? ` (cruceta ↓)` : this.mode === `mouse` ? ` (I)` : ``
    }
    nudgeRecipes() {
      let e = this.inv
      if (e.blocks !== 1 / 0 && this.playing)
        for (let t of this.makeable(`hand`).concat(this.makeable(`bench`))) {
          if (
            e.wood < t.wood ||
            e.stone < t.stone ||
            (t.id === `bench` && (e.benches > 0 || e.benchesPlaced > 0)) ||
            (t.id === `bonfire` && e.bonfires > 0)
          )
            continue
          let n = `hint.can.${t.id}`
          if (!this.shown.has(n)) {
            t.at === `hand`
              ? (this.packBtn.classList.add(`new`),
                this.once(
                  n,
                  `¡Tienes suficiente para: ${t.name.toLowerCase()}! Hazlo en tu mochila${this.packKey()}`,
                  t.icon,
                  6e3
                ))
              : e.benchesPlaced > 0 &&
                this.once(
                  n,
                  `¡Tienes suficiente para: ${t.name.toLowerCase()}! Hazlo en la mesa de trabajo`,
                  t.icon,
                  6e3
                )
            return
          }
        }
    }
    makeable(e) {
      let t = this.inv,
        n = t.blocks === 1 / 0
      return Ve.filter(
        (r) =>
          r.at === e &&
          (!r.blueprint || n || t.blueprints.includes(r.id)) &&
          !(r.id === `pickaxe` && t.pickaxe) &&
          !(r.id === `rod` && t.rod)
      )
    }
    benchPlaced() {
      this.once(
        `hint.benchPlaced`,
        this.mode === `touch`
          ? `Toca la mesa de trabajo para convertir madera en bloques`
          : this.mode === `pad`
            ? `Apunta a la mesa de trabajo y pulsa ✕ para hacer bloques`
            : `Haz clic en la mesa de trabajo para convertir madera en bloques`,
        `bench`,
        5200
      )
    }
    bonfirePlaced() {
      this.once(
        `hint.bonfirePlaced`,
        `${this.mode === `touch` ? `Toca` : this.mode === `pad` ? `Apunta a` : `Haz clic en`} la fogata para cocinar pescado. También calienta por la noche`,
        `bonfire`,
        5200
      )
    }
    cooked(e, t) {
      let n = Pe(e)
      this.toast(
        t > 1
          ? `¡${n.name} a la brasa (×${t})! ¡Qué bien huele!`
          : `¡${n.name} a la brasa! ¡Qué bien huele!`,
        `cooked_${e}`,
        2600
      )
    }
    foundAxe() {
      ;(this.toast(`¡Encontraste un hacha vieja! Las palmeras dan madera — caen con tres golpes`, `axe`, 5200),
        this.shown.add(`hint.axe`))
    }
    needAxe() {
      if (this.shown.has(`needAxe`)) return
      this.shown.add(`needAxe`)
      let e =
        this.mode === `pad`
          ? `L1 / R1`
          : this.mode === `mouse`
            ? `el hacha (${this.order().findIndex((e) => e.tool === `axe`) + 1})`
            : `el hacha`
      this.toast(
        this.inv.axe
          ? `Equipa ${e} para talar palmeras`
          : `Bonita palmera… ojalá tuvieras algo con qué talarla`,
        this.inv.axe ? `axe` : `palm`,
        3600
      )
    }
    gotBlocks() {
      this.once(
        `hint.blocks`,
        this.mode === `pad`
          ? `¡Bloques! Elígelos con L1 / R1 y ponte a construir`
          : this.mode === `touch`
            ? `¡Bloques! Elígelos en la barra rápida y ponte a construir`
            : `¡Bloques! Elígelos en la barra rápida (${this.order().findIndex((e) => e.tool === `build`) + 1}) y ponte a construir`,
        `block`,
        5200
      )
    }
    growing(e) {
      this.toast(`Esta palmera está volviendo a crecer — estará lista a las ${un(e)}`, `palm`, 2600)
    }
    spentRock() {
      ;(this.shown.has(`spent`) && performance.now() - this.spentAt < 4e3) ||
        (this.shown.add(`spent`),
        (this.spentAt = performance.now()),
        this.toast(
          `Esta roca ya no da más por hoy — prueba con otra o vuelve mañana`,
          `stone`,
          3200
        ))
    }
    spentAt = 0
    tooHungry() {
      performance.now() - this.hungryAt < 3500 ||
        ((this.hungryAt = performance.now()),
        this.toast(`Tienes demasiada hambre para trabajar… come algo de tu mochila primero`, `hunger`, 3400),
        this.bump(this.hungerEl))
    }
    hungryAt = 0
    refused(e) {
      let t = {
        deep: `Aquí es demasiado profundo — la tierra nueva surge desde la orilla`,
        top: `El terreno no puede subir más`,
        bottom: `No se puede cavar más hondo`,
        blocks: `Quita primero los bloques de encima`,
        wet: `Eso ya está bajo el agua`,
        boat: `¡Cuidado con el bote!`,
        reserved: `Hay algo colocado ahí`,
      }
      t[e] &&
        !this.shown.has(`refused.${e}`) &&
        (this.shown.add(`refused.${e}`),
        this.toast(t[e], e === `boat` ? void 0 : e === `top` ? `raise` : `lower`, 3200))
    }
    ceiling() {
      this.once(
        `hint.ceiling`,
        `No se puede construir más alto — el faro se queda con la cima`,
        `lighthouse`,
        4600
      )
    }
    placed(e) {
      if (this.tutorialStep === 0)
        ((this.tutorialStep = 1),
          this.toast(
            this.mode === `touch`
              ? `¡Genial! Apílalos — mantén pulsado para quitar uno`
              : this.mode === `pad`
                ? `¡Genial! Mantén ✕ y muévete para hacer una fila · ○ quita uno`
                : `¡Genial! ${Z}+arrastrar crea una fila · clic derecho quita uno`,
            `block`,
            5600
          ))
      else if (this.tutorialStep === 1 && e >= 6) {
        ;((this.tutorialStep = 2),
          this.toast(
            this.mode === `touch`
              ? `Arrastra para mirar · pellizca para acercar · gira con dos dedos`
              : this.mode === `pad`
                ? `Stick izquierdo mueve · stick derecho gira · L2 / R2 zoom`
                : `Arrastra para mirar · clic derecho+arrastrar para mover · rueda para zoom`,
            void 0,
            5200
          ))
        try {
          localStorage.setItem(On, `done`)
        } catch {}
      }
    }
    fly(e, t, n = 0, r, i = 1, a) {
      ;((this.inFlight[e] += i), this.renderCounts(), this.renderItems())
      let o =
        e === `wood`
          ? this.woodCounter
          : e === `stone`
            ? this.stoneCounter
            : e === `coins`
              ? this.coinCounter
              : this.packBtn
      o.hidden &&= !1
      let s = o.querySelector(`img`).getBoundingClientRect(),
        c = s.left + s.width / 2,
        l = s.top + s.height / 2,
        u = document.createElement(`div`)
      ;((u.className = e === `axe` || e === `fish` ? `flyer big` : `flyer`),
        (u.innerHTML = W(
          a ??
            (e === `wood`
              ? `wood`
              : e === `stone`
                ? `stone`
                : e === `coins`
                  ? `coin`
                  : e === `axe`
                    ? `axe`
                    : `block`)
        )),
        this.flyers.appendChild(u))
      let d = () => {
        ;(u.remove(),
          (this.inFlight[e] = Math.max(0, this.inFlight[e] - i)),
          this.renderCounts(),
          this.renderItems(),
          this.panel === `pack` && this.renderPack(),
          this.bump(o),
          r?.())
      }
      if (Q) {
        window.setTimeout(d, n)
        return
      }
      let f = t.x + (c - t.x) * 0.35 + (Math.random() - 0.5) * 60,
        p = Math.min(t.y, l) - 70 - Math.random() * 40,
        m = []
      for (let e = 0; e <= 10; e++) {
        let n = e / 10,
          r = (1 - n) * (1 - n) * t.x + 2 * (1 - n) * n * f + n * n * c,
          i = (1 - n) * (1 - n) * t.y + 2 * (1 - n) * n * p + n * n * l,
          a = n < 0.15 ? 0.4 + (n / 0.15) * 0.8 : 1.2 - (n - 0.15) * 0.7
        m.push({
          transform: `translate3d(${r}px, ${i}px, 0) translate(-50%, -50%) scale(${a}) rotate(${(1 - n) * 30}deg)`,
          opacity: n < 0.05 ? 0 : 1,
        })
      }
      u.style.transform = m[0].transform
      let h = u.animate(m, {
        duration: e === `axe` ? 1100 : 720,
        delay: n,
        easing: `cubic-bezier(0.45, 0, 0.55, 1)`,
        fill: `backwards`,
      })
      h.onfinish = d
    }
    bump(e) {
      Q ||
        e.animate(
          [
            { transform: `scale(1)` },
            { transform: `scale(1.18)` },
            { transform: `scale(0.96)` },
            { transform: `scale(1)` },
          ],
          { duration: 380, easing: `ease-out` }
        )
    }
    pressStart(e, t, n) {
      ;(this.pressEnd(),
        (this.ring.style.left = `${e}px`),
        (this.ring.style.top = `${t}px`),
        this.ring.style.setProperty(`--ring-ms`, `${n - 150}ms`),
        (this.ringTimer = window.setTimeout(() => this.ring.classList.add(`on`), 150)))
    }
    pressEnd() {
      ;(window.clearTimeout(this.ringTimer), this.ring.classList.remove(`on`))
    }
    get panelOpen() {
      return this.panel !== null
    }
    get craftingOpen() {
      return this.panel === `crafting`
    }
    openCrafting() {
      this.open(`crafting`)
    }
    togglePack(e = !1) {
      this.panel === `pack` ? this.close() : this.open(`pack`, e || this.mode === `pad`)
    }
    panelEl(e) {
      return e === `crafting`
        ? this.crafting
        : e === `pack`
          ? this.pack
          : e === `cook`
            ? this.cook
            : e === `shop`
              ? this.shop
              : e === `order`
                ? this.orderEl
                : e === `talk`
                  ? this.dialog.el
                  : this.menu
    }
    talk(e, t, n, r = [], i, a) {
      ;(this.panel && this.panel !== `talk` && this.close(),
        this.open(`talk`),
        this.dialog.say(e, t, n, r, i, () => {
          ;(this.panel === `talk` && this.close(), a?.())
        }))
    }
    get talking() {
      return this.panel === `talk`
    }
    openShop() {
      this.open(`shop`)
    }
    renderShop() {
      let e = this.shop.querySelector(`.shop-list`),
        t = this.inv.fish
      ;((this.shop.querySelector(`.shop-coins b`).textContent = String(this.inv.coins)),
        t.length
          ? ((e.innerHTML = t
              .map((e) => {
                let t = Pe(e.id),
                  n = e.cooked ? `${t.name} a la brasa` : t.name,
                  r = P(e.id, e.cooked)
                return (
                  `<div class="make-row">${W(`${e.cooked ? `cooked` : `fish`}_${e.id}`)}<span class="row-text">${n}<span class="costs"><span class="cost">${W(`coin`, `mini`)}<b>${r}</b></span><small>×${e.n}</small></span></span><button class="btn small sell" data-fish="${e.id}" data-cooked="${e.cooked}" data-n="1"><span class="pad-only">${K(`cross`)}</span>Vender 1</button>` +
                  (e.n > 1
                    ? `<button class="btn primary small sell" data-fish="${e.id}" data-cooked="${e.cooked}" data-n="${e.n}">Los ${e.n}</button>`
                    : ``) +
                  `</div>`
                )
              })
              .join(``)),
            e
              .querySelectorAll(`.sell`)
              .forEach((e) =>
                e.addEventListener(`click`, () =>
                  this.handlers.onSell(
                    e.dataset.fish,
                    e.dataset.cooked === `true`,
                    Number(e.dataset.n)
                  )
                )
              ))
          : (e.innerHTML = `<p class="cook-empty">No queda nada por vender. ¡Gracias por el pescado!</p>`))
      let n = t.reduce((e, t) => e + P(t.id, t.cooked) * t.n, 0)
      ;((this.shop.querySelector(`.shop-sum`).textContent = n
        ? `${n} monedas por todo`
        : `Nada que vender`),
        this.shop.querySelector(`.sell-all`).classList.toggle(`disabled`, !n))
    }
    sold(e, t) {
      let n = t ?? this.centreOf(this.shop.querySelector(`.shop-coins`)),
        r = Math.min(6, Math.max(1, Math.ceil(e / 20)))
      for (let t = 0; t < r; t++)
        this.fly(
          `coins`,
          n,
          60 + t * 70,
          void 0,
          t === r - 1 ? e - Math.floor(e / r) * (r - 1) : Math.floor(e / r)
        )
    }
    centreOf(e) {
      let t = e.getBoundingClientRect()
      return { x: t.left + t.width / 2, y: t.top + t.height / 2 }
    }
    openOrder(e, t) {
      ;((this.wanted = { want: e, reward: t }), this.open(`order`))
    }
    renderOrder() {
      let e = this.wanted
      if (!e) return
      let t = !0,
        n = (e, t) => this.inv.fish.find((n) => n.id === e && n.cooked === t)?.n ?? 0
      ;((this.orderEl.querySelector(`.order-items`).innerHTML = e.want
        .map(([e, r, i]) => {
          let a = n(e, r)
          a < i && (t = !1)
          let o = Pe(e)
          return `<div class="order-item${a >= i ? ` got` : ``}">${W(`${r ? `cooked` : `fish`}_${e}`)}<b>${r ? `${o.name} a la brasa` : o.name}</b><small>${Math.min(a, i)}/${i}</small><span class="tick">${a >= i ? `✓` : ``}</span></div>`
        })
        .join(``)),
        (this.orderEl.querySelector(`.reward-sum`).textContent =
          `${e.reward} monedas por todo el lote`),
        this.orderEl.querySelector(`.hand-over`).classList.toggle(`disabled`, !t))
    }
    orderDone(e) {
      let t = this.centreOf(this.orderEl.querySelector(`.order-reward`))
      ;(this.confetti(t), this.sold(e, t))
    }
    confetti(e) {
      if (Q) return
      let t = [`#E8604F`, `#F5BD4F`, `#6CC35A`, `#29ADC4`, `#FFF8EC`, `#B679E8`]
      for (let n = 0; n < 46; n++) {
        let r = document.createElement(`i`)
        ;((r.className = `confetti`),
          (r.style.background = t[n % t.length]),
          this.flyers.appendChild(r))
        let i = Math.random() * Math.PI * 2,
          a = 160 + Math.random() * 260,
          o = Math.cos(i) * a,
          s = Math.sin(i) * a - 180,
          c = (Math.random() - 0.5) * 900,
          l = r.animate(
            [
              { transform: `translate3d(${e.x}px, ${e.y}px, 0) rotate(0deg)`, opacity: 1 },
              {
                transform: `translate3d(${e.x + o}px, ${e.y + s}px, 0) rotate(${c * 0.6}deg)`,
                opacity: 1,
                offset: 0.45,
              },
              {
                transform: `translate3d(${e.x + o * 1.3}px, ${e.y + s + 420}px, 0) rotate(${c}deg)`,
                opacity: 0,
              },
            ],
            { duration: 1500 + Math.random() * 700, easing: `cubic-bezier(0.2, 0.7, 0.4, 1)` }
          )
        l.onfinish = () => r.remove()
      }
    }
    openCooking() {
      this.open(`cook`)
    }
    get cookingOpen() {
      return this.panel === `cook`
    }
    renderCooking() {
      let e = this.cook.querySelector(`.cook-list`),
        t = this.inv.fish.filter((e) => !e.cooked)
      if (!t.length) {
        e.innerHTML = `<p class="cook-empty">No tienes pescado crudo para cocinar. ¡Atrapa alguno con la caña de pescar!</p>`
        return
      }
      ;((e.innerHTML = t
        .map((e) => {
          let t = Pe(e.id)
          return (
            `<div class="make-row" data-fish="${e.id}">${W(`fish_${e.id}`)}<span class="row-text">${t.name}<small>×${e.n} crudo · a la brasa llena ${Le(e.id, !0)}, vale ${P(e.id, !0)}</small></span><button class="btn small cook-one" data-fish="${e.id}"><span class="pad-only">${K(`cross`)}</span>Cocinar 1</button>` +
            (e.n > 1
              ? `<button class="btn primary small cook-all" data-fish="${e.id}">Cocinar todo</button>`
              : ``) +
            `</div>`
          )
        })
        .join(``)),
        e.querySelectorAll(`.cook-one, .cook-all`).forEach((e) =>
          e.addEventListener(`click`, () => {
            let n = t.find((t) => t.id === e.dataset.fish)
            this.handlers.onCook(n.id, e.classList.contains(`cook-all`) ? n.n : 1)
          })
        ))
    }
    open(e, t = this.mode === `pad`) {
      if (!this.playing || this.photo || this.panel === e) return
      ;(this.panel && this.hidePanel(this.panel),
        (this.panel = e),
        (this.openedAt = performance.now()),
        this.hideTip())
      let n = this.panelEl(e)
      if (
        (e === `menu` && this.showControls(!1, !1),
        e === `crafting` && this.refreshCrafting(),
        e === `cook` && this.renderCooking(),
        e === `shop` && this.renderShop(),
        e === `order` && this.renderOrder(),
        this.root.classList.toggle(`talking`, e === `talk`),
        e === `pack` && (this.packBtn.classList.remove(`new`), this.renderPack()),
        n.classList.add(`open`),
        this.scrim.classList.add(`on`),
        this.root.classList.add(`panel-open`),
        this.promptEl.classList.remove(`on`),
        this.handlers.onPanel(!0),
        !t)
      ) {
        document.activeElement?.blur?.()
        return
      }
      e !== `talk` &&
        (
          n.querySelector(
            e === `crafting`
              ? `.craft`
              : e === `pack`
                ? `.pocket[data-key]`
                : e === `cook`
                  ? `.cook-one`
                  : e === `shop`
                    ? `.sell`
                    : e === `order`
                       ? `.hand-over:not(.disabled)`
                      : `.row`
          ) ?? n.querySelector(`.make, .close`)
        )?.focus({ preventScroll: !0 })
    }
    close() {
      if (!this.panel) return
      let e = this.panel
      ;(this.hidePanel(this.panel),
        (this.panel = null),
        (this.closedPanel = e),
        this.hideTip(),
        e === `talk` && this.dialog.hide(),
        this.root.classList.remove(`talking`),
        this.scrim.classList.remove(`on`),
        this.root.classList.remove(`panel-open`),
        this.disarmClear(),
        document.activeElement?.blur?.(),
        this.handlers.onPanel(!1))
    }
    back() {
      if (this.panel === `talk`) {
        this.dialog.choose(`bye`) || this.dialog.advance()
        return
      }
      if (this.foodMenu) {
        this.handlers.onUi()
        let e = this.pack.querySelector(`.pocket.picked`)?.dataset.key
        ;(this.closeFoodMenu(),
          e && this.pack.querySelector(`.pocket[data-key="${e}"]`)?.focus({ preventScroll: !0 }))
        return
      }
      if (this.panel === `menu` && !this.menu.querySelector(`.menu-controls`).hidden) {
        ;(this.handlers.onUi(), this.showControls(!1))
        return
      }
      this.close()
    }
    toggleMenu() {
      this.panel === `menu` ? this.close() : this.open(`menu`)
    }
    hidePanel(e) {
      ;(this.panelEl(e).classList.remove(`open`),
        e === `talk` && (this.dialog.hide(), this.root.classList.remove(`talking`)))
    }
    closedPanel = null
    showControls(e, t = !0) {
      ;((this.menu.querySelector(`.menu-main`).hidden = e),
        (this.menu.querySelector(`.menu-controls`).hidden = !e),
        (this.menu.querySelector(`h2`).textContent = e ? `Controles` : `Menú`),
        t &&
          this.menu
            .querySelector(e ? `.tabs .chip.on` : `.controls-row`)
            ?.focus({ preventScroll: !0 }))
    }
    showTab(e) {
      ;(this.menu.querySelectorAll(`.tabs .chip`).forEach((t) => {
        let n = t.dataset.tab === e
        ;(t.classList.toggle(`on`, n), t.setAttribute(`aria-selected`, String(n)))
      }),
        this.menu
          .querySelectorAll(`.control-list`)
          .forEach((t) => (t.hidden = t.dataset.tab !== e)))
    }
    disarmClear() {
      ;(window.clearTimeout(this.clearTimer),
        window.clearTimeout(this.newTimer),
        this.clearRow.classList.contains(`armed`) &&
          (this.clearRow.classList.remove(`armed`),
          (this.clearRow.querySelector(`small`).textContent =
            `Bloques y terreno modificado · deshacer lo restaura`)),
        this.newRow.classList.contains(`armed`) &&
          (this.newRow.classList.remove(`armed`),
          (this.newRow.querySelector(`small`).textContent =
            `Una isla nueva: despierta con los bolsillos vacíos`)))
    }
    stacksOf(e) {
      let t = this.inv
      this.inv = e
      let n = X.map((e) => ({
        key: e.tool,
        icon: e.icon,
        name: e.name,
        n: this.itemCount(e.tool),
        tool: e.tool,
      })).filter((e) => e.n > 0)
      this.inv = t
      for (let t of e.fish) {
        let e = Pe(t.id)
        n.push({
          key: `${t.cooked ? `cooked` : `fish`}_${t.id}`,
          icon: `${t.cooked ? `cooked` : `fish`}_${t.id}`,
          name: t.cooked ? `${e.name} a la brasa` : e.name,
          n: t.n,
          fish: { id: t.id, cooked: t.cooked },
        })
      }
      return n
    }
    renderPack() {
      let e = this.pack,
        t = document.activeElement?.closest?.(`.pocket, .make`),
        n = t
          ? (t.dataset.key ?? (t.classList.contains(`make`) ? `make:${t.dataset.recipe}` : ``))
          : ``,
        r = this.stacksOf(this.inv),
        i = e.querySelector(`.pockets`),
        a = ``,
        o = Math.max(this.inv.pockets, r.length)
      for (let e = 0; e < o; e++) {
        let t = r[e]
        a += t
          ? `<button class="pocket${t.tool && this.tool === t.tool ? ` held` : ``}${t.fish ? ` food` : ``}" data-key="${t.key}"${t.tool ? ` data-tool="${t.tool}"` : ``} data-tip="${t.fish ? `pocket` : `slot`}" aria-label="${t.name}${t.n > 1 ? `, ${t.n}` : ``}">${W(t.icon)}${t.n === 1 ? `` : `<span class="badge">${t.n === 1 / 0 ? `∞` : t.n}</span>`}</button>`
          : `<span class="pocket empty" aria-hidden="true"></span>`
      }
      i.innerHTML = a
      let s = e.querySelector(`.pocket-info`),
        c = r.length
          ? this.mode === `touch`
            ? `Toca algo para equiparlo (o comerlo)`
            : `Elige algo para equiparlo (o comerlo)`
          : `¡Vacía! Aquí van las cosas que haces, encuentras o pescas`
      if (
        ((s.textContent = c),
        i.querySelectorAll(`.pocket[data-key]`).forEach((e) => {
          let t = r.find((t) => t.key === e.dataset.key)
          ;(e.addEventListener(`focus`, () => (s.innerHTML = this.describe(t))),
            e.addEventListener(`blur`, () => (s.textContent = c)),
            e.addEventListener(`click`, () => {
              if (t.fish) {
                this.openFoodMenu(e, t)
                return
              }
              let n = this.order().findIndex((e) => e.tool === t.tool)
              ;(this.handlers.onSelect(Math.max(0, n)), this.handlers.onTool(t.tool), this.close())
            }))
        }),
        this.freshPocket)
      ) {
        let e = i.querySelector(`.pocket[data-key="${this.freshPocket}"]`)
        ;(e &&
          !Q &&
          e.animate(
            [
              { transform: `scale(0.5) rotate(-10deg)` },
              { transform: `scale(1.18) rotate(4deg)`, offset: 0.55 },
              { transform: `none` },
            ],
            { duration: 560, delay: 120, easing: `ease-out`, fill: `backwards` }
          ),
          (this.freshPocket = ``))
      }
      e.querySelector(`.pocket-count`).innerHTML =
        this.inv.blocks === 1 / 0
          ? ``
          : `${Math.min(r.length, this.inv.pockets)}/${this.inv.pockets}<span> bolsillos</span>`
      let l = this.makeable(`hand`)
      ;(this.renderMakeList(e.querySelector(`.hand-list`), l),
        (e.querySelector(`.split-side`).hidden = !l.length),
        this.tipAt && !this.tipAt.isConnected && this.hideTip(),
        this.closeFoodMenu(),
        n &&
          (
            (n.startsWith(`make:`)
              ? e.querySelector(`.make[data-recipe="${n.slice(5)}"]`)
              : i.querySelector(`.pocket[data-key="${n}"]`)) ??
            i.querySelector(`.pocket[data-key]`) ??
            e.querySelector(`.make`)
          )?.focus({ preventScroll: !0 }))
    }
    describe(e) {
      if (e.fish) {
        let { id: t, cooked: n } = e.fish
        return `<b>${e.name}</b> · te llena ${Le(t, n)} · vale ${P(t, n)} monedas`
      }
      let t = X.find((t) => t.tool === e.tool)
      return `<b>${e.name}</b> · ${t?.tip ?? ``}`
    }
    renderMakeList(e, t) {
      let n = this.inv,
        r = n.blocks === 1 / 0,
        i = (e, t, n) => {
          if (!t) return ``
          let i = !r && n < t
          return `<span class="cost${i ? ` short` : ``}" aria-label="${t} ${e}">${W(e, `mini`)}<b>${i ? `${n}<i>/${t}</i>` : t}</b></span>`
        }
      ;((e.innerHTML = t
        .map((e) => {
          let t = r || (n.wood >= e.wood && n.stone >= e.stone)
          return `<div class="make-row" data-recipe="${e.id}" data-tip="recipe">${W(e.icon)}<span class="row-text">${e.name}<span class="costs">${r ? `<small>Gratis en modo creativo</small>` : i(`wood`, e.wood, n.wood) + i(`stone`, e.stone, n.stone)}</span></span><button class="btn primary small make${t ? `` : ` disabled`}" data-recipe="${e.id}"><span class="pad-only">${K(`cross`)}</span>Hacer</button></div>`
        })
        .join(``)),
        e
          .querySelectorAll(`.make`)
          .forEach((e) =>
            e.addEventListener(`click`, () => this.handlers.onMake(e.dataset.recipe))
          ))
    }
    foodMenu = null
    openFoodMenu(e, t) {
      this.closeFoodMenu()
      let { id: n, cooked: r } = t.fish,
        i = document.createElement(`div`)
      ;((i.className = `food-menu`),
        (i.innerHTML = `<button class="btn primary small eat"><span class="pad-only">${K(`cross`)}</span>Comer <small>+${Le(n, r)}</small></button><button class="btn small keep"><span class="pad-only">${K(`circle`)}</span>Guardar</button>`),
        this.pack.appendChild(i))
      let a = e.getBoundingClientRect(),
        o = this.pack.getBoundingClientRect()
      ;((i.style.left = `${Math.min(Math.max(a.left + a.width / 2 - o.left, 90), o.width - 90)}px`),
        (i.style.top = `${a.bottom - o.top + this.pack.scrollTop + 6}px`),
        i.querySelector(`.eat`).addEventListener(`click`, () => this.handlers.onEat(n, r)),
        i.querySelector(`.keep`).addEventListener(`click`, () => {
          ;(this.handlers.onUi(), this.closeFoodMenu(), e.focus({ preventScroll: !0 }))
        }),
        e.classList.add(`picked`),
        (this.foodMenu = i),
        this.handlers.onUi(),
        (this.mode === `pad` || document.activeElement === e) &&
          i.querySelector(`.eat`).focus({ preventScroll: !0 }))
    }
    closeFoodMenu() {
      ;(this.foodMenu?.remove(),
        (this.foodMenu = null),
        this.pack.querySelector(`.pocket.picked`)?.classList.remove(`picked`))
    }
    made(e) {
      let t = e === `bench` ? `bench` : e
      if (this.panel === `pack`) {
        this.renderPack()
        let e = this.pack.querySelector(`.pocket[data-key="${t}"]`)
        e &&
          !Q &&
          e.animate(
            [
              { transform: `scale(0.4) rotate(-12deg)` },
              { transform: `scale(1.2) rotate(4deg)`, offset: 0.55 },
              { transform: `none` },
            ],
            { duration: 520, easing: `ease-out` }
          )
      }
      ;(e === `bench` || e === `bonfire`) &&
        window.setTimeout(() => {
          ;(this.panel === `pack` && this.close(), this.handlers.onTool(e))
        }, 750)
    }
    short4(e) {
      let t = this.inv,
        n = []
      ;(t.wood < e.wood && n.push(`${e.wood - t.wood} más de madera`),
        t.stone < e.stone &&
          n.push(`${e.stone - t.stone} más de piedra`),
        this.toast(`${e.name}: te faltan ${n.join(` y `)}`, t.wood < e.wood ? `wood` : `stone`, 3200),
        t.wood < e.wood && this.bump(this.woodCounter),
        t.stone < e.stone && this.bump(this.stoneCounter))
    }
    craftTimes() {
      let e = this.inv.wood
      if (this.inv.blocks === 1 / 0) return this.craftAmount === `all` ? 10 : this.craftAmount
      let t = this.craftAmount === `all` ? e : this.craftAmount
      return Math.min(t, e)
    }
    refreshCrafting() {
      let e = this.crafting
      e.querySelectorAll(`.amounts .chip`).forEach((e) => {
        let t = (e.dataset.n === `all` ? `all` : Number(e.dataset.n)) === this.craftAmount
        ;(e.classList.toggle(`on`, t), e.setAttribute(`aria-checked`, String(t)))
      })
      let t = this.inv.blocks === 1 / 0,
        n = this.craftTimes(),
        r = Math.max(n, 1)
      ;((e.querySelector(`.recipe .in`).textContent = String(r)),
        (e.querySelector(`.recipe .out`).textContent = String(r * 3)),
        e.querySelector(`.craft`).classList.toggle(`disabled`, n <= 0),
        (e.querySelector(`.craft-label`).textContent =
          n > 0 ? `Fabricar ${n * 3} bloques` : `Falta madera`),
        (e.querySelector(`.have`).innerHTML = t
          ? `Modo creativo: la madera es gratis`
          : n > 0
            ? `Tienes <b>${this.inv.wood}</b> de madera`
            : `Tala palmeras con el hacha para conseguir madera`))
      let i = this.makeable(`bench`)
      ;((e.querySelector(`.bench-side`).hidden = !i.length),
        e.classList.toggle(`wide`, i.length > 0),
        this.renderMakeList(e.querySelector(`.bench-list`), i))
    }
    crafted() {
      let e = this.crafting.querySelector(`.recipe .item:last-child img`)
      ;(e &&
        !Q &&
        e.animate(
          [
            { transform: `scale(1)` },
            { transform: `scale(1.3) rotate(-8deg)` },
            { transform: `scale(1)` },
          ],
          { duration: 420, easing: `cubic-bezier(0.3, 1.6, 0.5, 1)` }
        ),
        this.refreshCrafting())
    }
    craftOrigin() {
      let e = this.crafting.querySelector(`.recipe .item:last-child img`).getBoundingClientRect()
      return { x: e.left + e.width / 2, y: e.top + e.height / 2 }
    }
    wireTips(e) {
      let t = (e) => e?.closest?.(`[data-tip]`) ?? null
      ;(e.addEventListener(`pointerover`, (e) => {
        if (e.pointerType !== `mouse`) return
        let n = t(e.target)
        n &&
          n !== this.tipMuted &&
          (window.clearTimeout(this.tipHideTimer),
          n !== this.tipAt &&
            (this.tipOn
              ? this.showTip(n)
              : this.queueTip(n, performance.now() < this.tipWarmUntil ? 40 : Dn)))
      }),
        e.addEventListener(`pointerout`, (e) => {
          if (e.pointerType !== `mouse`) return
          let n = t(e.target)
          n &&
            !n.contains(e.relatedTarget) &&
            (n === this.tipMuted && (this.tipMuted = null),
            n === this.tipAt &&
              (window.clearTimeout(this.tipTimer),
              this.tipOn
                ? (this.tipHideTimer = window.setTimeout(() => this.hideTip(), 90))
                : (this.tipAt = null)))
        }),
        e.addEventListener(
          `pointerdown`,
          (e) => {
            let n = t(e.target)
            if ((this.hideTip(), (this.tipMuted = n), e.pointerType !== `touch` || !n)) return
            let r = e.clientX,
              i = e.clientY,
              a = !1,
              o = window.setTimeout(() => {
                ;((a = !0), navigator.vibrate?.(8), this.showTip(n))
              }, 420),
              s = () => {
                ;(window.clearTimeout(o),
                  n.removeEventListener(`pointerup`, c),
                  n.removeEventListener(`pointercancel`, c),
                  n.removeEventListener(`pointermove`, l))
              },
              c = () => {
                ;(s(),
                  a &&
                    ((this.swallowClickUntil = performance.now() + 600),
                    (this.tipHideTimer = window.setTimeout(() => this.hideTip(), 1600))))
              },
              l = (e) => {
                Math.hypot(e.clientX - r, e.clientY - i) > 12 && s()
              }
            ;(n.addEventListener(`pointerup`, c),
              n.addEventListener(`pointercancel`, c),
              n.addEventListener(`pointermove`, l))
          },
          !0
        ),
        e.addEventListener(
          `click`,
          (e) => {
            performance.now() > this.swallowClickUntil ||
              ((this.swallowClickUntil = 0), e.stopPropagation(), e.preventDefault())
          },
          !0
        ),
        e.addEventListener(`contextmenu`, (e) => e.preventDefault()),
        window.addEventListener(`keydown`, () => this.hideTip(), !0),
        window.addEventListener(`resize`, () => {
          ;(this.hideTip(), this.fitHotbar())
        }))
    }
    queueTip(e, t) {
      ;(window.clearTimeout(this.tipTimer),
        (this.tipAt = e),
        (this.tipTimer = window.setTimeout(() => this.showTip(e), t)))
    }
    showTip(e) {
      ;(window.clearTimeout(this.tipTimer), window.clearTimeout(this.tipHideTimer))
      let t = e.isConnected && this.playing && !this.photo ? this.tipContent(e) : null
      if (!t) {
        this.hideTip()
        return
      }
      let n = this.tipEl,
        r = this.tipOn
      ;((n.firstElementChild.innerHTML = `${t.icon ? W(t.icon, `tip-ic`) : ``}<div class="tip-body"><div class="tip-head"><b>${t.title}</b>${t.qty ? `<span class="tip-qty">${t.qty}</span>` : ``}</div><p>${t.text}</p>${t.foot ? `<div class="tip-foot">${t.foot}</div>` : ``}</div>`),
        this.tipAt?.classList.remove(`tipped`),
        (this.tipAt = e),
        e.classList.add(`tipped`))
      let i = e.getBoundingClientRect(),
        a = i.top + i.height / 2 < window.innerHeight * 0.4
      ;(n.classList.toggle(`below`, a), n.classList.toggle(`moving`, r))
      let o = n.offsetWidth,
        s = n.offsetHeight,
        c = i.left + i.width / 2,
        l = Math.min(Math.max(c - o / 2, 10), window.innerWidth - o - 10),
        u = a ? i.bottom + 14 : i.top - s - 14
      ;((n.style.transform = `translate3d(${Math.round(l)}px, ${Math.round(u)}px, 0)`),
        n.style.setProperty(`--ax`, `${Math.round(Math.min(Math.max(c - l, 22), o - 22))}px`),
        n.classList.add(`on`),
        (this.tipOn = !0))
    }
    hideTip() {
      ;(window.clearTimeout(this.tipTimer),
        window.clearTimeout(this.tipHideTimer),
        this.tipOn && (this.tipWarmUntil = performance.now() + 500),
        (this.tipOn = !1),
        this.tipEl.classList.remove(`on`, `moving`),
        this.tipAt?.classList.remove(`tipped`),
        (this.tipAt = null))
    }
    tipContent(e) {
      let t = this.mode,
        n = (...e) => (t === `mouse` ? e.map((e) => q(e)).join(``) : ``),
        r = e.dataset.tip
      if (r === `slot`) {
        let n = e.dataset.tool,
          r = [...X, ...wn].find((e) => e.tool === n)
        if (!r) return null
        let i = X.includes(r),
          a = this.itemCount(n),
          o = this.tool === n,
          s = this.order().findIndex((e) => e.tool === n),
          c = ``
        return (
          e.classList.contains(`pocket`)
            ? (c = o ? `En tu mano` : `${t === `touch` ? `Toca` : `Haz clic`} para equiparlo`)
            : t === `mouse` && s >= 0 && s < 9
              ? (c = `${q(String(s + 1))}<span>${o ? `lo guarda` : `para equiparlo`}</span>`)
              : o && (c = `En tu mano`),
          {
            icon: r.icon,
            title: r.name,
            qty: i && a !== 1 ? (a === 1 / 0 ? `∞` : `×${a}`) : void 0,
            text: r.info,
            foot: c,
          }
        )
      }
      let i = this.inv.blocks === 1 / 0
      switch (r) {
        case `pack`:
          return {
            icon: `backpack`,
            title: `Mochila`,
            text: `Todo lo que has hecho o encontrado. Aquí también puedes hacer cosas a mano.`,
            foot: n(`I`) && `${n(`I`)}<span>la abre</span>`,
          }
        case `wood`:
          return {
            icon: `wood`,
            title: `Madera`,
            qty: i ? `∞` : `×${this.inv.wood}`,
            text: i
              ? `Gratis en modo creativo.`
              : `Tala palmeras con el hacha para conseguir más. La mesa de trabajo convierte la madera en bloques.`,
          }
        case `stone`:
          return {
            icon: `stone`,
            title: `Piedra`,
            qty: i ? `∞` : `×${this.inv.stone}`,
            text: i
              ? `Gratis en modo creativo.`
              : `Golpea las rocas con el pico. Cada roca da unas pocas piedras al día.`,
          }
        case `recipe`: {
          let t = Ve.find((t) => t.id === e.dataset.recipe)
          if (!t) return null
          let n = [
            t.wood ? `${t.wood} de madera` : ``,
            t.stone ? `${t.stone} de piedra` : ``,
          ]
            .filter(Boolean)
            .join(` y `)
          return {
            icon: t.icon,
            title: t.name,
            text: `${t.blurb}. Requiere ${n}.`,
            foot: t.at === `hand` ? `Se hace a mano` : `Se hace en la mesa de trabajo`,
          }
        }
        case `hunger`: {
          let { value: e, cold: t } = this.hungerNow,
            n =
              e <= 0
                ? `¡Vacío! Demasiado débil para talar o picar piedra.`
                : e < 25
                  ? `Te está entrando hambre…`
                  : e < 55
                    ? `Podrías comer algo.`
                    : `Bien lleno.`
          return {
            icon: `hunger`,
            title: `Hambre`,
            qty: `${Math.round(e)}%`,
            text: `${n} Come pescado de tu mochila: a la brasa alimenta tres veces más.${t ? ` Hace frío esta noche: una fogata te mantendría caliente.` : ``}`,
          }
        }
        case `coins`:
          return {
            icon: `coin`,
            title: `Monedas`,
            qty: i ? `∞` : `×${this.inv.coins}`,
            text: `Te las paga el pescador por tus peces. ¿Para qué servirán? Ya veremos…`,
          }
        case `pocket`: {
          let t = e.dataset.key ?? ``,
            n = this.stacksOf(this.inv).find((e) => e.key === t)
          if (!n?.fish) return null
          let { id: r, cooked: i } = n.fish,
            a = Pe(r)
          return {
            icon: n.icon,
            title: n.name,
            qty: n.n > 1 ? `×${n.n}` : void 0,
            text: i
              ? `Te llena ${Le(r, !0)}. El pescador paga ${P(r, !0)} monedas por cada uno.`
              : `Te llena ${a.food} (${Le(r, !0)} a la brasa). El pescador paga ${a.price} monedas (${P(r, !0)} a la brasa).`,
            foot: `${this.mode === `touch` ? `Toca` : `Haz clic`} para comer uno`,
          }
        }
        case `clock`: {
          let { hour: e, day: t, speed: n } = this.clockNow,
            r =
              n === 0
                ? `El tiempo está detenido: el reloj te espera.`
                : n === 20
                  ? `El tiempo pasa volando: un día dura cerca de un minuto.`
                  : `El tiempo fluye, una hora por minuto.`
          return {
            icon: Tn[this.phase] ?? `day`,
            title: `${un(e)} · Día ${t}`,
            text: `${En[this.phase] ? `${En[this.phase]}. ` : ``}${r}`,
          }
        }
        case `stop`:
          return this.clockNow.speed === 0
            ? {
                title: `Reanudar el tiempo`,
                text: `El reloj vuelve a avanzar desde donde se detuvo.`,
                foot: n(`Espacio`),
              }
            : {
                title: `Detener el tiempo`,
                text: `El reloj espera (el mar, las nubes y los pájaros siguen su curso). Nada crece y nadie pasa hambre.`,
                foot: n(`Espacio`),
              }
        case `fast`:
          return this.clockNow.speed === 20
            ? {
                title: `Avance rápido: activado`,
                text: `Pulsa de nuevo para volver al tiempo normal.`,
                foot: n(`T`),
              }
            : {
                title: `Avance rápido`,
                text: `El tiempo vuela: un día entero en aproximadamente un minuto.`,
                foot: n(`T`),
              }
        case `menu`:
          return {
            icon: `menu`,
            title: `Menú`,
            text: `Sonido y música, modo creativo, modo foto, controles y empezar de nuevo.`,
            foot: n(`Esc`) && `${n(`Esc`)}<span>lo abre</span>`,
          }
        case `undo`:
          return {
            icon: `undo`,
            title: `Deshacer`,
            text: `Deshace tu último cambio en los bloques o en el terreno.`,
            foot: n(Z, `Z`),
          }
        case `redo`:
          return {
            icon: `redo`,
            title: `Rehacer`,
            text: `Recupera lo que habías deshecho.`,
            foot: n(Z, `⇧`, `Z`),
          }
      }
      return null
    }
    curtain() {
      let e = document.createElement(`div`)
      ;((e.className = `curtain`),
        this.root.appendChild(e),
        requestAnimationFrame(() => e.classList.add(`on`)))
    }
    setPhoto(e) {
      e !== this.photo &&
        ((this.photo = e),
        this.root.classList.toggle(`photo`, e),
        this.hideTip(),
        this.promptEl.classList.remove(`on`),
        this.handlers.onUi(),
        this.handlers.onPhoto(e))
    }
    get photoMode() {
      return this.photo
    }
    navigate(e, t) {
      let n = this.titleUp ? this.title : this.panel ? this.panelEl(this.panel) : null
      if (!n) return
      let r = [...n.querySelectorAll(`button`)].filter(
        (e) => e.offsetParent !== null && !e.disabled
      )
      if (!r.length) return
      let i = document.activeElement
      if (!i || !r.includes(i)) {
        r[0].focus({ preventScroll: !0 })
        return
      }
      let a = i.getBoundingClientRect(),
        o = a.left + a.width / 2,
        s = a.top + a.height / 2,
        c = null,
        l = 1 / 0
      for (let n of r) {
        if (n === i) continue
        let r = n.getBoundingClientRect(),
          a = r.left + r.width / 2 - o,
          u = r.top + r.height / 2 - s,
          d = a * e + u * t
        if (d <= 4) continue
        let f = d + Math.abs(a * t - u * e) * 2.2
        f < l && ((l = f), (c = n))
      }
      c && (c.focus({ preventScroll: !0 }), this.handlers.onUi())
    }
    confirm() {
      if (this.titleUp) {
        this.play()
        return
      }
      if (this.panel === `talk` && !this.dialog.choosing) {
        this.dialog.advance()
        return
      }
      let e = document.activeElement
      e && this.root.contains(e) && e.tagName === `BUTTON`
        ? e.click()
        : this.panel === `crafting` && this.crafting.querySelector(`.craft`).click()
    }
    get padActive() {
      return this.mode === `pad`
    }
  }
function An(e, t) {
  let n =
    e.tool === `build` || e.tool === `bench` || e.tool === `bonfire`
      ? `<span class="badge">0</span>`
      : ``
  return `<button class="slot ${t}" data-tool="${e.tool}" data-tip="slot" aria-label="${e.name}" aria-pressed="false">${W(e.icon)}<span class="num"></span><span class="name">${e.name}</span>${n}</button>`
}
function jn() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><g stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/><path d="M9.5 4.5 12 6.5l2.5-2M9.5 19.5 12 17.5l2.5 2"/></g></svg>`
}
function Mn() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/></svg>`
}
function Nn(e = !1) {
  return `<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="${e ? `M15 5 8 12l7 7` : `M9 5l7 7-7 7`}" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}
function Pn(e) {
  return (
    e === `mouse`
      ? [
          [J(`left`), `Usar lo que tienes en la mano (construir, talar, lanzar…)`],
          [`${J(`left`)} mantener`, `Seguir talando o picando piedra`],
          [J(`right`), `Acción inversa (recoger, cavar…)`],
          [`${q(Z)} + ${J(`drag`)}`, `Construir una fila · moldear el terreno`],
          [J(`drag`), `Girar e inclinar la vista`],
          [`${J(`right`)} arrastrar`, `Moverse (o Shift+arrastrar)`],
          [J(`wheel`), `Zoom`],
          [`${q(`W`)}${q(`A`)}${q(`S`)}${q(`D`)}`, `Moverse`],
          [`${q(`Q`)}${q(`E`)}`, `Girar`],
          [`${q(`1`)}–${q(`9`)}`, `Equipar un objeto o herramienta (otra vez: guardar)`],
          [q(`I`), `Mochila`],
          [`${q(Z)}${q(`Z`)}`, `Deshacer (añade Shift para rehacer)`],
          [q(`T`), `Avance rápido (otra vez: tiempo normal)`],
          [q(`Espacio`), `Detener el tiempo (otra vez: reanudar)`],
          [q(`H`), `Modo foto`],
        ]
      : e === `touch`
        ? [
            [Y(), `Tocar: usar lo que tienes en la mano`],
            [`${Y()} mantener`, `Seguir talando · acción inversa (recoger, cavar…)`],
            [`${Y()} mantener una ranura`, `¿Qué es esto?`],
            [`${Y()} mantener + arrastrar`, `Moldear el terreno · barrer bloques`],
            [`${Y()} arrastrar`, `Moverse`],
            [`${Y()}${Y()} pellizcar`, `Zoom`],
            [`${Y()}${Y()} girar`, `Rotar`],
          ]
        : [
            [K(`lstick`), `Moverse`],
            [K(`rstick`), `Girar e inclinar`],
            [`${K(`l2`)}${K(`r2`)}`, `Alejar / acercar zoom`],
            [K(`cross`), `Usar lo que tienes en la mano · mantener para seguir talando o moverse en fila`],
            [K(`circle`), `Acción inversa · volver`],
            [`${K(`l1`)}${K(`r1`)}`, `Equipar un objeto o herramienta`],
            [`${K(`square`)}${K(`triangle`)}`, `Deshacer / rehacer`],
            [K(`ddown`), `Mochila`],
            [K(`dup`), `Tiempo: rápido · detenido · normal`],
            [K(`create`), `Modo foto`],
            [K(`options`), `Menú`],
          ]
  )
    .map(
      ([e, t]) =>
        `<div class="control"><span class="control-glyphs">${e}</span><span>${t}</span></div>`
    )
    .join(``)
}
var Fn = class {
    blueprints = new Set()
    caught = !1
    earned = !1
    log = new Map()
    catch(e) {
      let t = !this.caught
      return ((this.caught = !0), this.log.set(e, (this.log.get(e) ?? 0) + 1), t)
    }
    load(e) {
      ;(this.blueprints.clear(),
        this.log.clear(),
        (this.caught = e?.caught === !0),
        (this.earned = e?.earned === !0))
      for (let t of Array.isArray(e?.blueprints) ? e.blueprints : [])
        t === `bonfire` && this.blueprints.add(t)
      for (let t of Array.isArray(e?.log) ? e.log : [])
        Array.isArray(t) &&
          je(t[0]) &&
          typeof t[1] == `number` &&
          t[1] > 0 &&
          this.log.set(t[0], Math.floor(t[1]))
    }
    toJSON() {
      return {
        ...(this.blueprints.size ? { blueprints: [...this.blueprints] } : {}),
        ...(this.caught ? { caught: !0 } : {}),
        ...(this.earned ? { earned: !0 } : {}),
        ...(this.log.size ? { log: [...this.log] } : {}),
      }
    }
  },
  In = 100 / 36,
  Ln = class {
    value = 100
    on = !1
    onChange
    onWarn
    shown = 100
    get empty() {
      return this.on && this.value <= 0
    }
    get low() {
      return this.on && this.value < 25
    }
    pass(e, t) {
      !this.on || e <= 0 || this.set(this.value - e * In * (t ? 2 : 1))
    }
    work(e) {
      this.on && this.set(this.value - e)
    }
    eat(e) {
      this.set(this.value + e)
    }
    start() {
      this.on || ((this.on = !0), (this.value = 100), (this.shown = 100), this.onChange?.())
    }
    set(e) {
      let t = this.value
      ;((this.value = Math.max(0, Math.min(100, e))),
        t >= 25 && this.value < 25 && this.onWarn?.(!1),
        t > 0 && this.value <= 0 && this.onWarn?.(!0),
        (Math.abs(this.value - this.shown) >= 0.5 ||
          (this.value === 0) != (this.shown === 0) ||
          this.value === 100) &&
          ((this.shown = this.value), this.onChange?.()))
    }
    load(e) {
      let t = e && typeof e.value == `number` && Number.isFinite(e.value)
      ;((this.on = !!t && e.on === !0),
        (this.value = t ? Math.max(0, Math.min(100, e.value)) : 100),
        (this.shown = this.value))
    }
    toJSON() {
      return { value: Math.round(this.value * 10) / 10, on: this.on }
    }
  },
  Rn = `lighthouse.save.v1`
function zn() {
  try {
    let e = localStorage.getItem(Rn)
    if (!e) return null
    let t = JSON.parse(e)
    if ((t?.v !== 1 && t?.v !== 2) || !Array.isArray(t.blocks)) return null
    let n = (e) => typeof e == `number` && Number.isInteger(e) && Math.abs(e) < 512,
      r = t.blocks.filter(
        (e) => Array.isArray(e) && e.length === 4 && e.every(n) && e[1] >= 0 && e[3] > 0
      ),
      i = (Array.isArray(t.terrain) ? t.terrain : []).filter(
        (e) => Array.isArray(e) && e.length === 3 && e.every(n)
      ),
      a = t,
      o = (Array.isArray(a.palms) ? a.palms : []).filter(
        (e) =>
          Array.isArray(e) &&
          e.length === 2 &&
          n(e[0]) &&
          typeof e[1] == `number` &&
          Number.isFinite(e[1])
      ),
      s = (Array.isArray(a.benches) ? a.benches : []).filter(
        (e) => Array.isArray(e) && e.length === 3 && e.every(n)
      ),
      c = a.inventory,
      l = { v: 2, blocks: r, terrain: i, camera: t.camera, palms: o, benches: s }
    ;(Array.isArray(a.found) && (l.found = a.found.filter((e) => e === `axe` || e === `log`)),
      a.clock && typeof a.clock == `object` && (l.clock = a.clock),
      a.story && typeof a.story == `object` && (l.story = a.story),
      a.hunger && typeof a.hunger == `object` && (l.hunger = a.hunger),
      Array.isArray(a.rocks) &&
        (l.rocks = a.rocks.filter((e) => Array.isArray(e) && e.length === 3 && e.every(n))),
      Array.isArray(a.bonfires) &&
        (l.bonfires = a.bonfires.filter((e) => Array.isArray(e) && e.length === 3 && e.every(n))),
      a.fisherman && typeof a.fisherman == `object` && (l.fisherman = a.fisherman),
      c && typeof c == `object` && (l.inventory = c))
    let u = l.camera,
      d = (e) => typeof e == `number` && Number.isFinite(e)
    return (
      u && !(d(u.x) && d(u.z) && d(u.yaw) && d(u.zoom))
        ? delete l.camera
        : u && u.tilt !== void 0 && !d(u.tilt) && delete u.tilt,
      l
    )
  } catch {
    return null
  }
}
function Bn() {
  try {
    localStorage.removeItem(Rn)
  } catch {}
}
var Vn = class {
  grid
  terrain
  extras
  timer = 0
  stopped = !1
  constructor(e, t, n) {
    ;((this.grid = e),
      (this.terrain = t),
      (this.extras = n),
      e.onChange(() => this.schedule()),
      t.onChange(() => this.schedule()),
      window.addEventListener(`pagehide`, () => this.flush()),
      document.addEventListener(`visibilitychange`, () => {
        document.visibilityState === `hidden` && this.flush()
      }))
  }
  schedule() {
    ;(window.clearTimeout(this.timer), (this.timer = window.setTimeout(() => this.flush(), 600)))
  }
  stop() {
    ;((this.stopped = !0), window.clearTimeout(this.timer))
  }
  flush() {
    if ((window.clearTimeout(this.timer), this.stopped)) return
    let e = { v: 2, blocks: this.grid.toJSON(), terrain: this.terrain.toJSON(), ...this.extras() }
    try {
      localStorage.setItem(Rn, JSON.stringify(e))
    } catch {}
  }
}
function $(e, t, n, r, i, a, o) {
  for (let s = t; s <= i; s++)
    for (let t = n; t <= a; t++) for (let n = r; n <= o; n++) e.push([s, t, n])
}
function Hn() {
  let e = []
  return (
    $(e, -4, 0, 0, -2, 0, 2),
    $(e, -4, 0, -4, -1, 1, -4),
    $(e, -4, 0, -3, -4, 1, -2),
    $(e, 1, 0, -4, 1, 3, -4),
    $(e, 1, 0, 0, 2, 0, 0),
    $(e, 1, 0, -1, 2, 1, -1),
    $(e, 5, 0, -1, 5, 1, -1),
    $(e, 6, 1, -1, 6, 1, -1),
    $(e, 2, 0, 4, 3, 0, 10),
    {
      cells: e,
      views: {
        wide: { x: 0.5, z: 1.5, yaw: 0.35, zoom: 0.6 },
        mid: { x: -0.5, z: -1.2, yaw: 0.35, zoom: 0.3 },
        wall: { x: -2.6, z: -2.4, yaw: 0.5, zoom: 0.05 },
        stairs: { x: 1.6, z: -1.6, yaw: -0.45, zoom: 0.05 },
        float: { x: 5.6, z: -0.8, yaw: 0.3, zoom: 0.05 },
        pier: { x: 2.8, z: 7.2, yaw: 0.9, zoom: 0.05 },
        corner: { x: -2.6, z: -2.4, yaw: 0.5, zoom: 0 },
        steps: { x: 3.4, z: -0.7, yaw: 0.6, zoom: 0 },
        piles: { x: 2.9, z: 8.6, yaw: 0.9, zoom: 0 },
      },
    }
  )
}
function Un() {
  let e = []
  for (let t = 0; t < 5; t++) for (let n = -4; n <= -3; n++) e.push([-6 + t, n, t + 1])
  for (let t = 1; t <= 3; t++) for (let n = -4; n <= -3; n++) e.push([t, n, 2])
  for (let t = 0; t <= 1; t++) for (let n = 0; n <= 2; n++) e.push([t, n, -1])
  for (let t = 3; t <= 5; t++) for (let n = 1; n <= 2; n++) e.push([t, n, -1])
  for (let t = 4; t <= 6; t++) for (let n = 8; n <= 9; n++) e.push([t, n, 0])
  let t = []
  return (
    $(t, 2, 2, -4, 2, 2, -3),
    $(t, 0, 0, 1, 1, 0, 1),
    {
      cells: t,
      terrain: e,
      views: {
        wide: { x: -0.5, z: 1.5, yaw: 0.35, zoom: 0.6 },
        mid: { x: -1, z: -0.5, yaw: 0.35, zoom: 0.3 },
        stairs: { x: -3.5, z: -2.5, yaw: 0.4, zoom: 0.05 },
        pond: { x: -1.5, z: 1.8, yaw: 0.2, zoom: 0.05 },
        shore: { x: 5.2, z: 7.5, yaw: 0.6, zoom: 0.05 },
        hollow: { x: -4, z: 1.6, yaw: 0.3, zoom: 0 },
        lip: { x: 2.4, z: -1.4, yaw: 0.3, zoom: 0 },
        steps: { x: -5.2, z: -3, yaw: -1.1, zoom: 0.02 },
        pond2: { x: 4, z: 3.2, yaw: 0.25, zoom: 0 },
      },
    }
  )
}
function Wn() {
  let e = []
  for (let t = 0; t <= 4; t++) for (let n = 7; n <= 8; n++) e.push([t, n, 0])
  for (let t = 6; t <= 9; t++) e.push([2, t, -1])
  for (let t = 3; t <= 4; t++) e.push([t, 5, 3])
  for (let t = 6; t <= 9; t++) e.push([-3, t, -1])
  for (let t = -8; t <= -5; t++)
    for (let n = 6; n <= 7; n++) e.push([t, n, t === -6 && n === 6 ? 2 : 1])
  for (let t = 1; t <= 2; t++) for (let n = 3; n <= 4; n++) e.push([t, n, -1])
  return (
    e.push([3, 3, -1]),
    {
      cells: [],
      terrain: e,
      views: {
        wide: { x: 0.5, z: 6.5, yaw: 0.35, zoom: 0.1 },
        channel: { x: 1.5, z: 7.5, yaw: 0.3, zoom: 0 },
        mound: { x: 3.8, z: 6.2, yaw: 0.4, zoom: 0 },
        beach: { x: -3, z: 7.5, yaw: 0.2, zoom: 0 },
        terraces: { x: -6.5, z: 7.5, yaw: 0.5, zoom: 0 },
        pond: { x: 2, z: 5, yaw: 0.3, zoom: 0 },
      },
    }
  )
}
var Gn = { blocks: Hn, terrain: Un, shore: Wn },
  Kn = matchMedia(`(prefers-reduced-motion: reduce)`).matches,
  qn = class {
    canvas
    scene = new e()
    island = new ye()
    rig
    renderer
    lighting
    terrain
    capture
    water
    sky
    input
    grid = new I()
    blocks
    history = new Ht()
    contact
    clouds = new De()
    wake = new Ge({ x: 0.5, z: -0.5 })
    props
    particles = new Yt()
    sound = new an()
    builder
    terraformer
    inventory = new Ne()
    clock = new dn()
    story = new Fn()
    hunger = new Ln()
    hungerAt = -1
    palms
    benches
    finds
    quarry
    fishing
    bonfires
    fisherman
    soldToday = !1
    orderTold = -1
    pad = new re()
    hud
    foliage
    beam
    life
    boat
    time
    last = 0
    running = !1
    warming = !0
    heightDirty = !0
    elapsed = 0
    frameMs = 16
    timeScale = 1
    perfWindow = { frames: 0, ms: 0, min: 1 / 0, warm: 0, good: 0 }
    failedDpr = 1 / 0
    pendingResolution = 0
    timers = []
    staged = null
    autosave = null
    pointer = null
    settle = { x: 1, z: -0.5, yaw: 0, zoom: 0.6, tilt: 0 }
    titleOrbit = !1
    titleLead = 0
    skipTitle = !1
    returning = !1
    hold = null
    padHold = null
    promptFrame = 0
    logObstacle = null
    quality = se()
    constructor(e) {
      this.canvas = e
      let t = this.quality
      ;((this.rig = new k(window.innerWidth / window.innerHeight)),
        (this.renderer = new ce(e, this.scene, this.rig.camera, t)),
        (this.scene.fog = new u(O.fog, 90, 320)),
        (this.lighting = new ae(this.scene, t)),
        (this.sky = new le()),
        this.scene.add(this.sky.mesh),
        this.scene.add(this.clouds.group),
        (this.terrain = new pe(this.island)),
        this.scene.add(this.terrain.group),
        (this.contact = new _e(
          this.terrain.contactAO,
          this.terrain.contactRect,
          this.island.bounds
        )),
        (this.blocks = new At(this.grid, this.island, t)),
        this.scene.add(this.blocks.group),
        (this.props = new Se(this.island)),
        this.scene.add(this.props.group),
        (this.capture = new ue(this.island.bounds)),
        (this.water = new de(this.capture, this.lighting.sunDir)),
        this.scene.add(this.water.mesh),
        this.scene.add(this.particles.group),
        (this.builder = new zt(
          this.grid,
          this.blocks,
          this.island,
          this.terrain,
          this.rig,
          this.particles,
          this.sound,
          this.history
        )),
        this.scene.add(this.builder.group),
        (this.terraformer = new qt(
          this.island,
          this.terrain,
          this.grid,
          this.builder,
          this.rig,
          this.particles,
          this.sound,
          this.history,
          (e) => this.setTerrain(e)
        )),
        this.scene.add(this.terraformer.group),
        (this.palms = new Oe(this.island, this.rig, this.particles, this.sound)),
        this.scene.add(this.palms.group),
        (this.quarry = new ze(this.props, this.rig, this.particles, this.sound)),
        this.scene.add(this.quarry.group),
        (this.fishing = new Ie(this.island, this.terrain, this.rig, this.particles, this.sound)),
        this.scene.add(this.fishing.group),
        (this.fisherman = new Be(this.island, this.rig, this.particles, this.sound)),
        this.scene.add(this.fisherman.group),
        (this.benches = new Me(
          this.island,
          this.grid,
          this.inventory,
          this.rig,
          this.particles,
          this.sound
        )),
        this.scene.add(this.benches.group),
        (this.bonfires = new Fe(
          this.island,
          this.grid,
          this.inventory,
          this.rig,
          this.particles,
          this.sound
        )),
        this.scene.add(this.bonfires.group),
        (this.finds = new Re(this.island, this.rig, this.particles)),
        this.scene.add(this.finds.group),
        (this.inventory.placed = () => this.grid.size + this.builder.pending),
        (this.builder.budget = () => this.inventory.blocks),
        this.grid.onChange(() => this.inventory.changed()),
        (this.rig.bounds = { x: 0.5, z: -0.5, r: 14 }))
      let n = () => this.builder.tool === `raise` || this.builder.tool === `dig`,
        r = () => this.builder.tool === `build` || this.builder.tool === `remove`
      ;((this.input = new ee(e, this.rig, {
        onTap: (e, t) => this.tap(e, t),
        onLongPress: (e) => {
          ;(navigator.vibrate?.(12), this.tap(e, !0))
        },
        onHover: (e) => this.hover(e),
        onPressStart: (e, t) => this.hud?.pressStart(e.x, e.y, t),
        onPressEnd: () => this.hud?.pressEnd(),
        onRowStart: (e, t) => {
          this.canAct() &&
            (n()
              ? this.terraformer.brushStart(e, t)
              : r()
                ? this.builder.rowStart(e, t)
                : this.tap(e, t))
        },
        onRowMove: (e, t) => {
          n() ? this.terraformer.brushMove(e) : r() && this.builder.rowMove(e, t)
        },
        onRowEnd: () => (n() ? this.terraformer.brushEnd() : this.builder.rowEnd()),
        onRowCancel: () => {
          ;(this.builder.rowCancel(), this.terraformer.brushEnd())
        },
        onBrushStart: (e) => {
          if (!this.canAct()) return !1
          let t = n() ? this.terraformer.brushStart(e) : r() ? this.builder.brushStart(e) : !1
          return (t && navigator.vibrate?.(12), t)
        },
        onBrushProbe: (e) =>
          this.canAct() &&
          (n() ? this.terraformer.brushProbe(e) : r() ? this.builder.brushProbe(e) : !1),
        onBrushMove: (e) => (n() ? this.terraformer.brushMove(e) : this.builder.brushMove(e)),
        onBrushEnd: () => {
          ;(this.builder.brushEnd(), this.terraformer.brushEnd())
        },
        onHoldStart: (e) => this.holdStart(e),
        onHoldMove: (e) => {
          this.hold && (this.hold.p = e)
        },
        onHoldEnd: () => (this.hold = null),
      })),
        window.addEventListener(`keydown`, (e) => {
          let t = e.key.toLowerCase()
          !(e.metaKey || e.ctrlKey) ||
            (t !== `z` && t !== `y`) ||
            (e.preventDefault(),
            this.canAct() &&
              (t === `y` || e.shiftKey ? this.redo() : this.undo()) &&
              this.sound.ui())
        }),
        window.addEventListener(`resize`, this.onResize),
        this.onResize())
    }
    async init(e) {
      ;(e(0.1), await this.props.load((t) => e(0.1 + t * 0.6)))
      let t = new URLSearchParams(location.search),
        n = t.get(`scene`),
        r = n ? null : zn(),
        i = n ? Gn[n]?.() : void 0,
        a = new Set()
      for (let [e, , t] of [...(r?.blocks ?? []), ...(i?.cells ?? [])]) a.add(`${e},${t}`)
      for (let [e, t, n] of [...(r?.terrain ?? []), ...(i?.terrain ?? [])])
        n < 0 && a.add(`${e},${t}`)
      ;(this.props.palm &&
        this.palms.load(this.props.palm, this.props.axe, this.props.log, (e, t) =>
          a.has(`${e},${t}`)
        ),
        this.quarry.load(
          Jn(this.props.pickaxe, `Pickaxe`) ?? this.palms.models.axe?.clone(!0) ?? null
        ),
        (this.quarry.workDay = () => this.clock.workDay),
        this.fishing.load(this.props.rod, this.props.fish, (e) => Yn(e)),
        (this.fishing.night = () => this.clock.phase === `sunset` || this.clock.phase === `night`),
        this.fisherman.load(this.props.fisherman, (e) => Yn(e)),
        this.props.fisherman?.traverse((e) => {
          let t = e.material
          t &&
            !Array.isArray(t) &&
            t.name === `FBoat_Lamp` &&
            !this.props.windowMaterials.includes(t) &&
            this.props.windowMaterials.push(t)
        }),
        (this.fisherman.known = () => [...this.story.log.keys()]),
        (this.fisherman.cookingKnown = () => this.story.blueprints.has(`bonfire`)),
        this.props.bench && this.benches.load(this.props.bench),
        this.bonfires.load(this.props.bonfire ?? Xn()),
        this.builder.obstacles.push(...this.props.obstacles, ...this.palms.obstacles))
      let o = this.island.lighthouse
      this.contact.addStaticDisc(o.x, o.z, 1.72, 1)
      for (let e of this.props.rockSpots) this.contact.addStaticDisc(e.x, e.z, e.r * 0.8, 0.8)
      for (let e of this.palms.footprints) this.contact.addStaticDisc(e.x, e.z, e.r * 0.7, 0.75)
      ;((this.foliage = new Ce(this.island, [
        { x: o.x, z: o.z, r: 2.05 },
        ...this.props.rockSpots.map((e) => ({ x: e.x, z: e.z, r: e.r * 0.9 })),
        ...this.palms.footprints.map((e) => ({ x: e.x, z: e.z, r: e.r + 0.2 })),
      ])),
        this.scene.add(this.foliage.group),
        (this.life = new He(this.island, this.foliage.flowerSpots, new g(o.x, 0, o.z))),
        this.life.setPixelRatio(this.renderer.gl.getPixelRatio()),
        this.scene.add(this.life.group),
        (this.beam = new We(this.props.beamOrigin, this.quality)),
        this.scene.add(this.beam.group),
        (this.boat = new Te(this.props.dinghy, this.island)),
        (this.boat.blocked = (e, t) => this.grid.has(Math.floor(e), 0, Math.floor(t))),
        (this.terraformer.occupied = (e, t) => this.boat.near(e + 0.5, t + 0.5, 1.6)),
        this.scene.add(this.boat.group))
      let s = this.water.uniforms
      if (
        (s.uBeamPos.value.copy(this.beam.origin),
        s.uWakeRect.value.copy(this.wake.rect),
        (s.uWake.value = this.wake.texture),
        this.clock.load(r?.clock),
        this.story.load(r?.story),
        this.hunger.load(r?.hunger),
        (this.palms.now = () => this.clock.time * 6e4),
        (this.time = new rt(
          {
            sun: this.lighting.sun,
            hemi: this.lighting.hemi,
            setSun: (e, t) => this.lighting.setSun(e, t),
            fog: this.scene.fog,
            waterTint: s.uWaterTint.value,
            sparkle: s.uSparkle,
            glow: s.uGlow,
            lampMaterials: this.props.lampMaterials,
            windowMaterials: this.props.windowMaterials,
            beam: this.beam,
          },
          this.clock
        )),
        n && (this.stage(n), (this.clock.hour = 14.5), (this.clock.speed = 0)),
        r)
      )
        try {
          ;(this.island.edits.load(r.terrain),
            this.terrain.refresh(this.island.shape.refresh()),
            this.grid.load(r.blocks),
            r.camera && Object.assign(this.rig.goal, r.camera))
        } catch (e) {
          ;(console.warn(`[lighthouse] ignoring an unreadable save`, e),
            this.grid.load([]),
            this.island.edits.load([]),
            this.terrain.refresh(this.island.shape.refresh()))
        }
      ;(this.inventory.load(r?.inventory, this.grid.size, !r && !n),
        n && (this.inventory.creative = !0),
        r?.palms && this.palms.restore(r.palms),
        r?.benches && this.benches.restore(r.benches),
        r?.rocks && this.quarry.restore(r.rocks),
        r?.bonfires && this.bonfires.restore(r.bonfires),
        this.fisherman.restore(r?.fisherman))
      let c = n ? [`axe`, `log`] : r ? (r.found ?? [`axe`, `log`]) : []
      ;(this.inventory.axe && !c.includes(`axe`) && c.push(`axe`),
        this.finds.load(this.palms.models.axe, this.palms.models.log, c),
        (this.logObstacle = this.finds.obstacle),
        this.logObstacle && this.builder.obstacles.push(this.logObstacle),
        n ||
          (this.autosave = new Vn(this.grid, this.island.edits, () => ({
            camera: this.titleOrbit ? { ...this.settle } : { ...this.rig.goal },
            inventory: this.inventory.toJSON(),
            palms: this.palms.felled(),
            benches: this.benches.toJSON(),
            found: this.finds.taken(),
            clock: this.clock.toJSON(),
            story: this.story.toJSON(),
            rocks: this.quarry.toJSON(),
            bonfires: this.bonfires.toJSON(),
            fisherman: this.fisherman.toJSON(),
            hunger: this.hunger.toJSON(),
          }))),
        this.blocks.rebuildAll(),
        this.groundChanged())
      let l = document.getElementById(`hud`)
      ;((this.hud = new kn(
        l,
        {
          onPlay: () => this.beginPlay(),
          onTool: (e) => this.setTool(e),
          onUndo: () => {
            this.undo() && this.sound.ui()
          },
          onRedo: () => {
            this.redo() && this.sound.ui()
          },
          onSpeed: (e) => this.setSpeed(e),
          onMute: (e) => this.sound.setMuted(e),
          onMusic: (e) => this.sound.setMusic(e),
          onCreative: (e) => this.inventory.setCreative(e),
          onClear: () => {
            this.clearAll() && this.hud.toast(`Todo limpio — deshacer lo restaura`, `clear`)
          },
          onCraft: (e) => this.craft(e),
          onMake: (e) => this.make(e),
          onEat: (e, t) => this.eat(e, t),
          onCook: (e, t) => this.cook(e, t),
          onSell: (e, t, n) => this.sell(e, t, n),
          onHandOver: () => this.handOver(),
          onVoice: (e) => this.sound.babble(e, 165),
          onStartOver: () => this.startOver(),
          onPanel: (e) => {
            ;(this.sound.panel(e),
              e
                ? (this.hover(null), (this.padHold = null))
                : this.hud.closedPanel === `shop` || this.hud.closedPanel === `order`
                  ? this.later(0.05, () => this.talkMore(this.hud.closedPanel === `shop`))
                  : this.hud.closedPanel === `crafting` &&
                    this.inventory.blocks > 0 &&
                    this.builder.tool !== `build` &&
                    (this.builder.tool === `hand`
                      ? this.later(0.25, () => {
                          this.builder.tool !== `hand` ||
                            this.inventory.blocks < 1 ||
                            (this.sound.select(0), this.setTool(`build`))
                        })
                      : this.hud.gotBlocks()))
          },
          onPhoto: (e) => {
            e && this.hover(null)
          },
          onUi: () => this.sound.ui(),
          onSelect: (e) => this.sound.select(e),
          onHover: () => this.sound.tick(),
        },
        { muted: this.sound.muted, music: this.sound.musicOn, creative: this.inventory.creative }
      )),
        this.hud.setFresh(!r && !n),
        this.hud.setInventory(this.invState()),
        this.setTool(this.inventory.blocks > 0 ? `build` : this.inventory.hasAxe ? `axe` : `hand`),
        (this.input.paused = () => !this.hud.isPlaying || this.hud.panelOpen),
        (this.builder.onPlace = () => {
          ;(this.hud.placed(this.grid.size), this.pad.rumble(0.18, 40))
        }),
        (this.builder.onShort = () => {
          ;(this.hud.short(), this.pad.rumble(0.25, 60))
        }),
        (this.terraformer.onRefuse = (e) => this.hud.refused(e)),
        (this.history.onChange = (e, t) => this.hud.setHistory(e, t)),
        (this.builder.onCeiling = () => this.hud.ceiling()),
        (this.palms.onChop = (e, t) => {
          ;(this.pad.rumble(t ? 0.7 : 0.4, t ? 140 : 90), this.hunger.work(0.8))
        }),
        (this.fisherman.onArrive = (e) => {
          ;(this.hud.announce(
            e
              ? `Ha llegado un botecito… ¡alguien te saluda desde él!`
              : `¡Gil el pescador está aquí! ${this.hud.inputMode === `touch` ? `Tócalo` : `Haz clic en él`} para vender tu pescado`,
            `gil`,
            5200
          ),
            this.autosave?.schedule())
        }),
        (this.fisherman.onLeave = () => {
          ;(this.hud.announce(`Gil vuelve a casa navegando. Regresará mañana por la mañana`, `gil`, 3800),
            this.autosave?.schedule())
        }),
        (this.fishing.onCatch = (e, t) => this.caught(e, t)),
        (this.fishing.onEscape = (e) => this.hud.escaped(e)),
        (this.fishing.onNibble = () => this.pad.rumble(0.15, 40)),
        (this.fishing.onBite = () => {
          ;(this.pad.rumble(0.8, 220), this.hud.bite())
        }),
        (this.quarry.onStone = (e, t) => {
          ;(this.hud.fly(`stone`, this.toScreen(e), 60, () => this.sound.pebble(t)),
            this.inventory.addStone(1),
            this.hunger.work(1.2),
            this.pad.rumble(0.35, 70),
            this.autosave?.schedule())
        }),
        (this.palms.onFell = (e) => {
          let t = e.distanceTo(this.rig.camera.position)
          ;(this.rig.shake(Math.min(0.14, 2.2 / t)), this.pad.rumble(1, 320))
        }),
        (this.palms.onLog = (e, t) => this.collectLog(e, t)),
        (this.palms.onChange = () => this.autosave?.schedule()),
        (this.bonfires.onChange = () => {
          ;(this.autosave?.schedule(), this.updateContact(), this.inventory.changed())
        }),
        (this.benches.onChange = () => {
          ;(this.autosave?.schedule(), this.updateContact())
        }),
        this.inventory.onChange(() => {
          ;(this.hud.setInventory(this.invState()), this.autosave?.schedule())
        }),
        (this.finds.onTake = (e, t) => this.found(e, t)),
        (this.hunger.onChange = () => {
          ;(this.hud.setHunger(this.hunger.value, this.hunger.on, this.cold),
            this.autosave?.schedule())
        }),
        (this.hunger.onWarn = (e) => {
          ;(this.sound.growl(),
            this.pad.rumble(0.3, 200),
            this.hud.toast(
              e
                ? `¡Tienes el estómago vacío! Demasiado débil para talar o picar piedra: come algo`
                : `Te ruge la tripa… es hora de comer algo`,
              `hunger`,
              4200
            ))
        }),
        this.hud.setHunger(this.hunger.value, this.hunger.on, this.cold),
        (this.clock.onPhase = (e) => {
          ;(this.hud.setTime(e), this.sound.setMood(e))
        }),
        this.hud.setTime(this.clock.phase),
        this.sound.setMood(this.clock.phase),
        (this.pad.onConnect = (e) => {
          e && this.hud.toast(`Mando conectado — pulsa ✕ para jugar`, void 0, 3e3)
        }),
        e(0.8),
        this.blocks.prewarm(Gn.blocks().cells),
        this.capture.update(this.renderer.gl, this.scene),
        (this.heightDirty = !1),
        this.builder.warmup(!0),
        this.benches.warmup(!0),
        this.bonfires.warmup(!0),
        this.fishing.warmup(!0),
        this.fisherman.warmup(!0),
        this.quarry.warmup(!0))
      let u = this.bonfires.warmupFire(this.scene),
        d = this.warmProps()
      ;(this.wake.update(this.renderer.gl, 1 / 60, this.boat.wake),
        this.clouds.warmup(!0),
        this.clouds.update(0, this.rig.camera, 1, this.lighting.sunDir),
        this.particles.warmup(),
        this.particles.update(0),
        (this.beam.intensity = 1),
        this.beam.update(0, 0))
      let f = []
      ;(this.scene.traverse((e) => {
        e.frustumCulled && ((e.frustumCulled = !1), f.push(e))
      }),
        this.renderer.render(0))
      for (let e of f) e.frustumCulled = !0
      ;(this.builder.warmup(!1),
        this.benches.warmup(!1),
        this.bonfires.warmup(!1),
        this.fishing.warmup(!1),
        this.fisherman.warmup(!1),
        this.quarry.warmup(!1),
        this.scene.remove(u))
      for (let e of d) this.scene.remove(e)
      if (
        (this.clouds.warmup(!1),
        this.time.update(),
        e(1),
        (this.returning = !!r),
        (this.settle = r?.camera
          ? { ...this.rig.goal }
          : { x: 1, z: -0.5, yaw: 0, zoom: 0.6, tilt: 0 }),
        (this.skipTitle = !!this.staged || t.has(`play`)),
        this.staged)
      )
        this.view(t.get(`view`) ?? `wide`)
      else if (this.skipTitle) (Object.assign(this.rig.goal, this.settle), this.rig.snap())
      else {
        let e = window.innerWidth < window.innerHeight
        this.titleLead = e ? 0 : 1.8
        let t = e ? this.settle.yaw - 0.9 : 0.75
        ;(Object.assign(this.rig.goal, {
          x: 0.5 - Math.sin(t) * this.titleLead,
          z: 0.4 - Math.cos(t) * this.titleLead,
          yaw: t,
          zoom: e ? 0.74 : 0.96,
          tilt: 0.04,
        }),
          this.rig.snap(),
          (this.titleOrbit = !0))
      }
    }
    warmProps() {
      let e = []
      for (let t of [this.props.bench, this.props.log, this.props.axe]) {
        if (!t) continue
        let n = t.clone(!0)
        ;(n.position.set(0, -6, 0), this.scene.add(n), e.push(n))
      }
      return e
    }
    beginPlay() {
      ;((this.titleOrbit = !1),
        (this.clock.held = !1),
        this.rig.interruptGlide(),
        Object.assign(this.rig.goal, this.settle),
        Kn ? this.rig.snap() : this.rig.glide(2.6),
        this.sound.start(),
        this.sound.music())
    }
    setSpeed(e) {
      ;((this.clock.speed = e), this.autosave?.schedule())
    }
    canAct() {
      return !!this.hud && this.hud.isPlaying && !this.hud.panelOpen
    }
    tap(e, t) {
      if (!this.canAct()) return
      let n = this.builder.tool
      if (n === `rod` && this.fishing.busy) {
        this.fishing.reel()
        return
      }
      let r = this.fisherman.here ? this.fisherman.pick(e.ndcX, e.ndcY) : null
      if (r && this.inFront(r.t, e)) {
        this.talkToGil()
        return
      }
      let i = this.finds.any && !t ? this.finds.pick(e.ndcX, e.ndcY) : null
      if (i && this.inFront(i.t, e)) {
        this.finds.take(i.id)
        return
      }
      let a = this.benches.count ? this.benches.pick(e.ndcX, e.ndcY) : null
      if (a && this.inFront(a.t, e)) {
        n === `remove` || t ? this.benches.remove(a.index) : this.hud.openCrafting()
        return
      }
      let o = this.bonfires.count ? this.bonfires.pick(e.ndcX, e.ndcY) : null
      if (o && this.inFront(o.t, e)) {
        n === `remove` || t
          ? this.bonfires.remove(o.index)
          : ((this.cookingAt = o.index), this.hud.openCooking())
        return
      }
      switch (n) {
        case `hand`: {
          let t = this.palms.pick(e.ndcX, e.ndcY)
          t?.state === `standing` &&
            this.inFront(t.t, e) &&
            (this.palms.shake(t.palm), this.pad.rumble(0.2, 60), this.hud.needAxe())
          return
        }
        case `axe`: {
          if (this.tooHungry(this.palms.pick(e.ndcX, e.ndcY)?.state === `standing`)) return
          let t = this.palms.chop(e)
          t && t.state !== `standing` && t.regrowIn !== void 0
            ? this.hud.growing(this.readyAt(t.regrowIn))
            : t || this.sound.deny()
          return
        }
        case `rod`:
          this.fishing.cast(e)
            ? this.pad.rumble(0.15, 40)
            : (this.sound.deny(), this.hud.notFishy())
          return
        case `pickaxe`: {
          if (this.tooHungry(!!this.quarry.pick(e.ndcX, e.ndcY))) return
          let t = this.quarry.mine(e)
          t ? t.left <= 0 && this.hud.spentRock() : this.sound.deny()
          return
        }
        case `bench`: {
          let t = this.benches.place(e)
          t === `poor`
            ? this.hud.poor(`bench`)
            : t === `placed` &&
              (this.hud.benchPlaced(),
              this.pad.rumble(0.5, 120),
              this.later(0.35, () => {
                this.builder.tool === `bench` &&
                  this.inventory.benchCount < 1 &&
                  this.setTool(`hand`)
              }))
          return
        }
        case `bonfire`: {
          let t = this.bonfires.place(e)
          t === `poor`
            ? this.hud.poor(`bonfire`)
            : t === `placed` &&
              (this.hud.bonfirePlaced(),
              this.pad.rumble(0.5, 120),
              this.later(0.35, () => {
                this.builder.tool === `bonfire` &&
                  this.inventory.bonfireCount < 1 &&
                  this.setTool(`hand`)
              }))
          return
        }
        case `raise`:
        case `dig`:
          this.terraformer.act(e, t)
          return
        default:
          this.builder.act(e, t)
      }
    }
    holdStart(e) {
      if (!this.canAct()) return !1
      let t = this.builder.tool
      return t === `axe` && this.palms.pick(e.ndcX, e.ndcY)?.state === `standing`
        ? this.tooHungry(!0)
          ? !0
          : ((this.hold = { p: e }), this.palms.chop(e), !0)
        : t === `pickaxe` && this.quarry.pick(e.ndcX, e.ndcY)
          ? this.tooHungry(!0)
            ? !0
            : ((this.hold = { p: e }), this.quarry.mine(e), !0)
          : !1
    }
    tooHungry(e) {
      return !this.hunger.empty || this.inventory.creative
        ? !1
        : (e && (this.sound.growl(), this.hud.tooHungry()), !0)
    }
    readyAt(e) {
      return (this.clock.hour + e / 6e4) % 24
    }
    updateHold() {
      let e = this.hold
      if (!e) return
      if (!this.canAct()) {
        this.hold = null
        return
      }
      if (this.hunger.empty) {
        this.hold = null
        return
      }
      let t = this.builder.tool
      if (
        (t === `axe` &&
          this.palms.ready &&
          this.palms.pick(e.p.ndcX, e.p.ndcY)?.state === `standing` &&
          this.palms.chop(e.p),
        t === `pickaxe` && this.quarry.ready)
      ) {
        let t = this.quarry.pick(e.p.ndcX, e.p.ndcY)
        t && t.left > 0 && this.quarry.mine(e.p)
      }
    }
    inFront(e, t) {
      let n = this.builder.pick(t.ndcX, t.ndcY, !0)
      return !n || e <= n.t + 0.05
    }
    hover(e) {
      ;(e && !this.canAct() && (e = null), (this.pointer = e))
      let t = this.builder.tool,
        n = e && this.benches.count ? this.benches.pick(e.ndcX, e.ndcY) : null,
        r = e && this.bonfires.count ? this.bonfires.pick(e.ndcX, e.ndcY) : null,
        i = e && this.finds.any ? this.finds.pick(e.ndcX, e.ndcY) : null,
        a =
          !!e &&
          ((!!n && this.inFront(n.t, e)) ||
            (!!r && this.inFront(r.t, e)) ||
            (!!i && this.inFront(i.t, e)))
      ;(this.builder.setHover((t === `build` || t === `remove`) && !a ? e : null),
        this.terraformer.setHover((t === `raise` || t === `dig`) && !a ? e : null),
        this.palms.setHover(t === `axe` ? e : null),
        this.quarry.setHover(t === `pickaxe` ? e : null),
        this.fishing.setAim(t === `rod` ? e : null),
        this.benches.setHover(t === `bench` && !a ? e : null),
        this.bonfires.setHover(t === `bonfire` && !a ? e : null))
    }
    updatePrompt() {
      let e = this.pointer
      if (!e || !this.canAct()) {
        this.hud.prompt(null)
        return
      }
      let t = this.builder.tool,
        n = null,
        r = ``,
        i = this.benches.count ? this.benches.pick(e.ndcX, e.ndcY) : null,
        a = this.bonfires.count ? this.bonfires.pick(e.ndcX, e.ndcY) : null,
        o = this.finds.any ? this.finds.pick(e.ndcX, e.ndcY) : null,
        s = t === `rod` ? this.fishing.bobberAt : null,
        c = this.fisherman.here ? this.fisherman.pick(e.ndcX, e.ndcY) : null
      if (c && !s && this.inFront(c.t, e)) ((n = c.anchor), (r = `Hablar`))
      else if (s)
        ((n = s.clone().setY(s.y + 0.5)),
          (r = this.fishing.phase === `bite` ? `¡Recoge!` : `Recoger`))
      else if (o && this.inFront(o.t, e)) ((n = o.anchor), (r = `Recoger`))
      else if (i && this.inFront(i.t, e))
        ((n = i.anchor), (r = t === `remove` ? `Recoger` : `Hacer bloques`))
      else if (a && this.inFront(a.t, e))
        ((n = a.anchor), (r = t === `remove` ? `Recoger` : `Cocinar`))
      else if (t === `hand`) {
        let t = this.palms.pick(e.ndcX, e.ndcY)
        t?.state === `standing` && this.inFront(t.t, e) && ((n = t.anchor), (r = `Sacudir`))
      } else if (t === `axe`) {
        let t = this.palms.pick(e.ndcX, e.ndcY)
        t?.state === `standing`
          ? ((n = t.anchor), (r = `Talar`))
          : t?.regrowIn !== void 0 &&
            ((n = t.anchor), (r = `Creciendo · lista a las ${un(this.readyAt(t.regrowIn))}`))
      } else if (t === `rod`) {
        let t = this.fishing.aim(e.ndcX, e.ndcY)
        t && ((n = t.at.clone().setY(t.at.y + 0.45)), (r = `Lanzar`))
      } else if (t === `pickaxe`) {
        let t = this.quarry.pick(e.ndcX, e.ndcY)
        t &&
          ((n = t.anchor),
          (r = t.left > 0 ? `Picar piedra · quedan ${t.left} hoy` : `Agotada · más mañana`))
      } else if (t === `bench`) {
        let e = this.benches.hoverSpot
        e?.valid && ((n = e.anchor), (r = `Colocar`))
      }
      if (!n) {
        this.hud.prompt(null)
        return
      }
      this.hud.prompt(this.toScreen(n), r)
    }
    toScreen(e) {
      let t = e.clone().project(this.rig.camera)
      return { x: ((t.x + 1) / 2) * window.innerWidth, y: ((1 - t.y) / 2) * window.innerHeight }
    }
    collectLog(e, t) {
      ;(this.hud.fly(`wood`, this.toScreen(e), 0, () => {
        ;(this.sound.collect(t), this.pad.rumble(0.12, 30))
      }),
        this.inventory.addWood(1))
    }
    found(e, t) {
      if ((this.autosave?.schedule(), e === `log`)) {
        let e = this.logObstacle ? this.builder.obstacles.indexOf(this.logObstacle) : -1
        ;(e >= 0 && this.builder.obstacles.splice(e, 1),
          (this.logObstacle = null),
          this.collectLog(t, 0))
        return
      }
      ;(this.sound.found(),
        this.pad.rumble(0.35, 140),
        this.hud.foundAxe(),
        this.hud.fly(`axe`, this.toScreen(t), 0, () => {
          ;(this.sound.collect(3),
            this.builder.tool === `hand` && (this.sound.select(0), this.setTool(`axe`)))
        }),
        this.inventory.giveAxe())
    }
    make(e) {
      let t = ke(e)
      if (!this.inventory.make(e)) {
        ;(this.sound.deny(), this.hud.short4(t))
        return
      }
      ;(this.sound.craft(),
        this.pad.rumble(0.3, 90),
        this.hud.made(e),
        e === `pickaxe`
          ? (this.hud.toast(`¡Un pico de madera! Golpea las rocas para conseguir piedras`, `pickaxe`, 4600),
            this.builder.tool === `hand` &&
              this.later(0.6, () => this.builder.tool === `hand` && this.setTool(`pickaxe`)))
          : e === `rod` &&
            this.hud.toast(
              `¡Una caña de pescar! Lánzala cerca de la sombra de un pez y recoge cuando pique`,
              `rod`,
              5600
            ))
    }
    caught(e, t) {
      if (!this.inventory.roomFor(e.id)) {
        this.hud.toast(`¡Tienes los bolsillos llenos! Se ha vuelto al mar`, `backpack`, 3600)
        return
      }
      ;(this.hud.fly(`fish`, this.toScreen(t), 650, () => this.sound.collect(2), 1, `fish_${e.id}`),
        this.inventory.addFish(e.id),
        this.hud.caught(e),
        this.story.catch(e.id) && this.firstCatch(),
        this.autosave?.schedule())
    }
    firstCatch() {
      ;(this.fisherman.firstCatch(this.clock.time),
        this.later(3, () => {
          ;(this.hunger.start(),
            this.sound.growl(),
            this.hud.announce(
              `Te ruge la tripa… ¡ahora que hay comida, tendrás que alimentarte!`,
              `hunger`,
              5600
            ))
        }),
        this.later(9, () => {
          ;(this.story.blueprints.add(`bonfire`),
            this.inventory.changed(),
            this.sound.found(),
            this.hud.announce(
              `Nueva receta: ¡una fogata! Haz una en tu mochila para cocinar pescado y calentarte`,
              `bonfire`,
              6200
            ))
        }))
    }
    talkToGil() {
      let e = this.fisherman
      ;((e.talking = !0), e.waveHand(), (this.soldToday = !1))
      let t = []
      if (!e.met) (e.meet(), t.push(...GIL_DIALOGS.firstMeeting))
      else {
        let n = GIL_DIALOGS.greetings
        t.push(n[Math.floor(Math.random() * n.length)])
        let r = e.request
        r &&
          !r.done &&
          this.orderTold !== this.clock.workDay &&
          ((this.orderTold = this.clock.workDay), t.push(...GIL_DIALOGS.specialOrderIntro))
      }
      this.gilSays(t)
    }
    gilSays(e) {
      let t = this.fisherman.request,
        n = [
          { key: `sell`, label: GIL_DIALOGS.choices.sell },
          ...(t && !t.done ? [{ key: `order`, label: GIL_DIALOGS.choices.order }] : []),
          { key: `bye`, label: GIL_DIALOGS.choices.bye },
        ]
      this.hud.talk(`Gil`, `gil`, e, n, (e) => this.gilChoice(e))
    }
    gilChoice(e) {
      let t = this.fisherman
      if (e === `sell`)
        this.inventory.anyFish ? this.hud.openShop() : this.gilSays(GIL_DIALOGS.noFishToSell)
      else if (e === `order`) {
        let e = t.request
        e && this.hud.openOrder(e.want, e.reward)
      } else {
        let e = this.soldToday ? GIL_DIALOGS.byeAfterSale : GIL_DIALOGS.byeNoSale
        this.hud.talk(`Gil`, `gil`, e, [], void 0, () => this.byeGil())
      }
    }
    talkMore(e) {
      this.fisherman.here &&
        (e && this.soldToday
          ? this.gilChoice(`bye`)
          : this.gilSays([e ? GIL_DIALOGS.afterShopClose : GIL_DIALOGS.afterOrderClose]))
    }
    byeGil() {
      let e = this.fisherman
      ;((e.talking = !1),
        e.waveHand(),
        this.soldToday && (e.sold(), this.later(1.2, () => e.leave())))
    }
    sell(e, t, n) {
      let r = this.inventory.fishCount(e, t),
        i = Math.min(n, r)
      if (i <= 0 || !this.inventory.takeFish(e, t, i)) return
      let a = P(e, t) * i
      ;(this.hud.sold(a),
        this.inventory.addCoins(a),
        (this.soldToday = !0),
        this.story.earned || ((this.story.earned = !0), this.inventory.changed()),
        this.sound.coins(Math.min(6, 2 + i)),
        this.pad.rumble(0.3, 80),
        this.autosave?.schedule())
    }
    handOver() {
      let e = this.fisherman.request
      if (e && !e.done) {
        if (!e.want.every(([e, t, n]) => this.inventory.fishCount(e, t) >= n)) {
          ;(this.sound.deny(),
            this.hud.toast(`Aún falta: trae todos los peces de la lista`, `request`, 2800))
          return
        }
        for (let [t, n, r] of e.want) this.inventory.takeFish(t, n, r)
        ;(this.fisherman.completeRequest(),
          this.hud.orderDone(e.reward),
          this.inventory.addCoins(e.reward),
          (this.story.earned = !0),
          this.inventory.changed(),
          this.sound.caught(),
          this.sound.coins(6),
          this.pad.rumble(1, 400),
          this.hud.toast(`¡Recompensa épica! ${e.reward} monedas`, `coin`, 4200),
          this.later(1.6, () => {
            this.hud.close()
          }),
          this.autosave?.schedule())
      }
    }
    eat(e, t) {
      if (this.hunger.on && this.hunger.value >= 98) {
        ;(this.sound.deny(), this.hud.toast(`¡Estás lleno! Guárdalo para luego`, `hunger`, 2400))
        return
      }
      this.inventory.takeFish(e, t) &&
        (this.hunger.eat(Le(e, t)), this.sound.eat(), this.pad.rumble(0.2, 60))
    }
    get cold() {
      return this.clock.phase === `night` && this.bonfires.count === 0
    }
    cookingAt = 0
    cook(e, t) {
      let n = this.inventory.cook(e, t)
      if (!n) {
        this.sound.deny()
        return
      }
      ;(this.sound.sizzle(), this.pad.rumble(0.25, 90))
      let r = this.bonfires.position(this.cookingAt)
      ;(r &&
        (this.particles.dust(r.clone().setY(r.y + 0.5), 0.35, 8, new a(`#EDE6DA`)),
        this.particles.sparkles(r.clone().setY(r.y + 0.7), 4, new a(`#FFC878`))),
        this.hud.cooked(e, n))
    }
    invState() {
      let e = this.inventory
      return {
        wood: e.wood,
        stone: e.stone,
        coins: e.coins,
        blocks: e.blocks,
        benches: e.benchCount,
        bonfires: e.bonfireCount,
        axe: e.hasAxe,
        pickaxe: e.has(`pickaxe`),
        rod: e.has(`rod`),
        fish: e.fishStacks(),
        blueprints: [...this.story.blueprints],
        benchesPlaced: this.benches.count,
        earned: this.story.earned,
        pockets: e.pockets,
      }
    }
    startOver() {
      ;(this.autosave?.stop(), Bn())
      try {
        let e = []
        for (let t = 0; t < localStorage.length; t++) {
          let n = localStorage.key(t)
          n && (n.startsWith(`lighthouse.hint.`) || n === `lighthouse.tutorial`) && e.push(n)
        }
        for (let t of e) localStorage.removeItem(t)
      } catch {}
      ;(this.sound.fadeOut(), this.hud.curtain(), window.setTimeout(() => location.reload(), 700))
    }
    craft(e) {
      let t = this.inventory.creative ? e : Math.min(e, this.inventory.wood)
      if (t <= 0) {
        this.sound.deny()
        return
      }
      let n = t * 3,
        r = this.hud.craftOrigin(),
        i = Math.min(n, 6)
      for (let e = 0; e < i; e++) {
        let t = Math.floor(n / i) + +(e < n % i)
        this.hud.fly(`blocks`, r, 90 + e * 85, () => this.sound.collect(e), t)
      }
      ;(this.inventory.craft(t), this.sound.craft(), this.hud.crafted(), this.pad.rumble(0.3, 90))
    }
    get centre() {
      return { x: window.innerWidth / 2, y: window.innerHeight / 2, ndcX: 0, ndcY: 0, type: `pad` }
    }
    updatePad(e) {
      let t = this.pad.poll(e)
      if (!t || !this.hud) return
      if (
        (this.pad.touched &&
          this.hud.inputMode !== `pad` &&
          (this.hud.setMode(`pad`), this.hover(null)),
        this.hud.inputMode !== `pad`)
      ) {
        this.endPadHold()
        return
      }
      if (this.hud.onTitle) {
        ;(t.pressed(j.cross) || t.pressed(j.options)) && this.hud.play()
        return
      }
      if (this.hud.panelOpen) {
        ;(t.nav && this.hud.navigate(t.nav.x, t.nav.y),
          t.pressed(j.cross) && this.hud.confirm(),
          t.pressed(j.circle) && this.hud.back(),
          t.pressed(j.options) && this.hud.close())
        return
      }
      if ((this.padCamera(t, e), this.hud.photoMode)) {
        ;(t.pressed(j.circle) ||
          t.pressed(j.down) ||
          t.pressed(j.create) ||
          t.pressed(j.options)) &&
          this.hud.setPhoto(!1)
        return
      }
      if (!this.hud.isPlaying) return
      if (
        ((t.pressed(j.l1) || t.pressed(j.left)) && this.hud.cycleTool(-1),
        (t.pressed(j.r1) || t.pressed(j.right)) && this.hud.cycleTool(1),
        t.pressed(j.up) && this.hud.cycleSpeed(),
        t.pressed(j.down))
      ) {
        ;(this.endPadHold(), this.hud.togglePack())
        return
      }
      if (t.pressed(j.create)) {
        ;(this.endPadHold(), this.hud.setPhoto(!0))
        return
      }
      if (t.pressed(j.options)) {
        ;(this.endPadHold(), this.hud.toggleMenu())
        return
      }
      ;(t.pressed(j.square) && !this.undo() && this.sound.deny(),
        t.pressed(j.triangle) && !this.redo() && this.sound.deny())
      let n = this.centre
      this.hover(n)
      let r = this.builder.tool,
        i = r === `build` || r === `remove` || r === `raise` || r === `dig`
      if (t.pressed(j.cross)) {
        let e = this.benches.count ? this.benches.pick(0, 0) : null
        !i || (e && this.inFront(e.t, n))
          ? this.tap(n, !1)
          : (this.padHold = { t: 0, mode: `wait`, x: this.rig.goal.x, z: this.rig.goal.z })
      }
      ;(r === `axe` || r === `pickaxe`) && t.held(j.cross)
        ? (this.hold ??= { p: n, pad: !0 })
        : this.hold?.pad && (this.hold = null)
      let a = this.padHold
      if (a) {
        a.t += e
        let i = Math.hypot(this.rig.goal.x - a.x, this.rig.goal.z - a.z)
        ;(a.mode === `wait` &&
          (a.t > 0.32 || i > 0.4) &&
          (r === `raise` || r === `dig`
            ? (a.mode = this.terraformer.brushStart(n) ? `brush` : `none`)
            : (this.builder.rowStart(n, !1, !0), (a.mode = `row`))),
          a.mode === `row`
            ? this.builder.rowMove(n, !1)
            : a.mode === `brush` && this.terraformer.brushMove(n),
          t.held(j.cross) ||
            (a.mode === `wait`
              ? this.tap(n, !1)
              : a.mode === `row`
                ? this.builder.rowEnd()
                : a.mode === `brush` && this.terraformer.brushEnd(),
            (this.padHold = null)))
      }
      t.pressed(j.circle) && this.tap(n, !0)
    }
    endPadHold() {
      let e = this.padHold
      e &&
        (e.mode === `row` && this.builder.rowCancel(),
        e.mode === `brush` && this.terraformer.brushEnd(),
        (this.padHold = null))
    }
    padCamera(e, t) {
      let n = this.rig.goal
      if (e.lx || e.ly) {
        this.rig.interruptGlide()
        let n = this.rig.cur.yaw,
          r = (7 + this.rig.cur.zoom * 16) * t
        this.rig.panBy(
          (e.lx * Math.cos(n) + e.ly * Math.sin(n)) * r,
          (-e.lx * Math.sin(n) + e.ly * Math.cos(n)) * r
        )
      }
      ;(e.rx && (n.yaw -= e.rx * 2.4 * t),
        e.ry && (n.tilt = ne(n.tilt + e.ry * 0.9 * t, te, ie)),
        (e.l2 || e.r2) && (n.zoom = ne(n.zoom + (e.l2 - e.r2) * 0.8 * t, 0, 1)))
    }
    undo() {
      let e = this.history.peekUndo()
      return !e || !this.replay(e, !1) ? !1 : (this.history.undone(), !0)
    }
    redo() {
      let e = this.history.peekRedo()
      return !e || !this.replay(e, !0) ? !1 : (this.history.redone(), !0)
    }
    replay(e, t) {
      if (!this.canReplay(e)) return !1
      if (e.kind === `blocks`) return t ? this.builder.redo(e) : this.builder.undo(e)
      if (e.kind === `terrain`)
        return this.setTerrain(e.cells.map(([e, n, r, i]) => [e, n, t ? i : r]))
      for (let n of t ? e.entries : [...e.entries].reverse()) this.replay(n, t)
      return !0
    }
    canReplay(e) {
      return e.kind === `blocks`
        ? this.builder.ready(e)
        : e.kind !== `batch` || e.entries.every((e) => this.canReplay(e))
    }
    clearAll() {
      let e = [],
        t = this.builder.clearAll(!1)
      t && e.push({ kind: `blocks`, op: `remove`, cells: t })
      let n = [...this.island.edits.entries()].map(([e, t, n]) => [e, t, n, void 0])
      return (
        n.length &&
          (e.push({ kind: `terrain`, cells: n }),
          this.later(t ? 0.45 : 0, () => this.setTerrain(n.map(([e, t]) => [e, t, void 0])))),
        e.length
          ? (this.history.record(e.length === 1 ? e[0] : { kind: `batch`, entries: e }), !0)
          : !1
      )
    }
    later(e, t) {
      e <= 0 ? t() : this.timers.push({ at: this.elapsed + e, fn: t })
    }
    setTerrain(e, t = !0) {
      let n = []
      for (let [t, r, i] of e)
        (i === -1 && (this.island.levelAt(t, r) ?? 0) > -1 && n.push([t, r]),
          this.island.setLevel(t, r, i))
      let r = e.map(([e, t]) => [e, t]),
        i = this.island.shape.refresh(r)
      if (
        (this.terrain.refresh(i, { cells: r, animate: t }),
        this.blocks.groundChanged(r, t ? be : 0),
        this.groundChanged(t, i.window),
        t)
      )
        for (let [e, t] of n) {
          let n = this.terrain.isPond(e + 0.5, t + 0.5)
          this.particles.splash(
            new g(e + 0.5, n ? ve : 0, t + 0.5),
            new a(n ? `#E4F7EC` : `#E6FBF6`),
            0.25
          )
        }
      return !0
    }
    groundChanged(e = !1, t) {
      ;((this.heightDirty = !0),
        this.foliage?.setGround(e, t),
        this.life?.setGround(),
        this.props.setGround(),
        this.palms.setGround(),
        this.benches.setGround(),
        this.bonfires.setGround(),
        this.finds.setGround(),
        this.updateContact())
    }
    setTool(e) {
      ;(e !== `rod` && this.fishing.stop(),
        this.builder.setTool(e),
        this.terraformer.setTool(e),
        this.hud.setTool(e),
        this.hover(this.pointer))
    }
    start() {
      this.running ||
        ((this.running = !0),
        (this.last = performance.now()),
        requestAnimationFrame(this.frame),
        window.setTimeout(
          () => (this.skipTitle ? this.hud.reveal() : this.hud.showTitle(this.returning)),
          this.skipTitle ? 200 : 620
        ),
        this.skipTitle && (this.sound.music(), (this.clock.held = !1)))
    }
    onResize = () => {
      let e = window.innerWidth,
        t = window.innerHeight
      ;(this.rig.setAspect(e / t), this.renderer.resize(e, t))
    }
    frame = (e) => {
      if (!this.running) return
      requestAnimationFrame(this.frame)
      let t = e - this.last
      this.frameMs += (t - this.frameMs) * 0.05
      let n = Math.min(t / 1e3, 1 / 20) * this.timeScale
      ;((this.last = e),
        (this.pendingResolution &&=
          (this.renderer.stepResolution(this.pendingResolution) &&
            this.life?.setPixelRatio(this.renderer.dpr),
          0)),
        this.update(n),
        this.renderer.gl.info.reset(),
        this.renderer.render(n),
        this.watchPerformance(t))
    }
    watchPerformance(e) {
      let t = this.perfWindow
      if (
        document.visibilityState !== `visible` ||
        e > 250 ||
        ((t.warm += e), t.warm < 3e3) ||
        (t.frames++, (t.ms += e), (t.min = Math.min(t.min, e)), t.ms < 2e3)
      )
        return
      let n = t.ms / t.frames,
        r = Math.max(t.min, 6)
      ;((t.frames = 0),
        (t.ms = 0),
        (t.min = 1 / 0),
        (n > r * 1.3 && n > 18) || n > 45
          ? ((t.good = 0),
            this.renderer.dpr > 1 &&
              ((this.failedDpr = this.renderer.dpr),
              (this.pendingResolution = -0.25),
              console.info(
                `[lighthouse] frame ${n.toFixed(1)}ms (period ${r.toFixed(1)}ms) → lower resolution`
              )))
          : n < r * 1.08 &&
            ++t.good >= 4 &&
            this.renderer.dpr + 0.25 < this.failedDpr &&
            ((t.good = 0), (this.pendingResolution = 0.25)))
    }
    update(e) {
      if (((this.elapsed += e), this.timers.length)) {
        let e = this.timers.filter((e) => e.at <= this.elapsed)
        if (e.length) {
          this.timers = this.timers.filter((e) => e.at > this.elapsed)
          for (let t of e) t.fn()
        }
      }
      if (
        ((N.uTime.value = this.elapsed),
        (N.uWaterLevel.value = Math.sin(this.elapsed * 0.45) * 0.05),
        this.titleOrbit)
      ) {
        let t = this.rig.goal
        ;((t.yaw += e * 0.05),
          (t.x = 0.5 - Math.sin(t.yaw) * this.titleLead),
          (t.z = 0.4 - Math.cos(t.yaw) * this.titleLead))
      }
      ;(this.updatePad(e),
        this.updateHold(),
        this.input.update(e),
        this.rig.update(e),
        this.sky.follow(this.rig.camera))
      let t = this.scene.fog,
        n = this.rig.distanceFor(this.rig.cur.zoom),
        r = M(0.45, 1, this.rig.cur.zoom)
      if (
        ((t.near = n + A(45, 10, r)),
        (t.far = n + A(275, 150, r)),
        (this.renderer.tiltShift.focusArea = A(1.12, 0.74, r)),
        (this.renderer.tiltShift.feather = A(0.42, 0.34, r)),
        this.clouds.update(
          e,
          this.rig.camera,
          M(0.55, 0.9, this.rig.cur.zoom),
          this.lighting.sunDir
        ),
        this.props.update(e),
        this.palms.update(e),
        this.quarry.update(e),
        this.fishing.update(e, this.elapsed, N.uWaterLevel.value),
        this.titleOrbit ||
          this.fisherman.schedule(this.clock.time, this.clock.hour, this.clock.workDay),
        this.fisherman.update(e, this.elapsed, N.uWaterLevel.value),
        this.water.uniforms.uBoat2Pos.value.copy(this.fisherman.wake.pos),
        this.water.uniforms.uBoat2Shape.value.copy(this.fisherman.wake.shape),
        this.benches.update(e),
        this.bonfires.update(e),
        this.time && (this.bonfires.night = this.time.nightness),
        this.finds.update(e),
        this.clock.update(e),
        this.time?.update(),
        this.hungerAt >= 0 &&
          !this.inventory.creative &&
          this.hunger.pass(this.clock.time - this.hungerAt, this.cold),
        (this.hungerAt = this.clock.time),
        this.hud &&
          this.hud.setClock(this.clock.hour, this.clock.day, this.clock.speed, this.clock.phase),
        this.life && ((this.life.night = this.time.nightness), this.life.update(e)),
        this.beam)
      ) {
        this.beam.update(e, this.props.lamp ? this.props.lamp.rotation.y : null)
        let t = this.water.uniforms
        ;(t.uBeamDir0.value.copy(this.beam.dirs[0]),
          t.uBeamDir1.value.copy(this.beam.dirs[1]),
          (t.uBeamI.value = this.beam.intensity))
      }
      if (this.boat) {
        this.boat.update(this.elapsed, N.uWaterLevel.value)
        let t = this.water.uniforms
        ;(t.uBoatPos.value.copy(this.boat.wake.pos),
          t.uBoatShape.value.copy(this.boat.wake.shape),
          e > 0 && this.wake.update(this.renderer.gl, e, this.boat.wake),
          (t.uWake.value = this.wake.texture))
      }
      ;(this.builder.update(e),
        this.terraformer.update(e),
        this.particles.update(e),
        this.sound.update(),
        (this.warming &&= this.island.shape.warm(1)),
        this.terrain.update(),
        this.hud && !(++this.promptFrame & 1) && this.updatePrompt(),
        this.blocks.flush() && ((this.heightDirty = !0), this.updateContact()),
        (this.heightDirty &&= (this.capture.update(this.renderer.gl, this.scene), !1)))
    }
    updateContact() {
      let e = [],
        t = new Set(),
        n = (e, t) => (e + 2048) * 4096 + t + 2048
      for (let [r, i, a] of this.grid.entries())
        i === this.island.groundLevel(r, a) && (e.push([r, a]), t.add(n(r, a)))
      for (let [r, i] of [...this.benches.cells(), ...this.bonfires.cells()])
        (e.push([r, i]), t.add(n(r, i)))
      ;(this.contact.update(e), this.foliage?.refresh((e, r) => t.has(n(e, r))))
    }
    stats() {
      let e = this.renderer.gl.info
      return {
        fps: Math.round(1e3 / this.frameMs),
        calls: e.render.calls,
        tris: e.render.triangles,
        blocks: this.grid.size,
        programs: e.programs?.length ?? 0,
      }
    }
    place(e, t, n) {
      this.grid.set(e, t, n, 1)
    }
    fill(e, t, n, r, i, a) {
      for (let o = e; o <= r; o++)
        for (let e = t; e <= i; e++) for (let t = n; t <= a; t++) this.place(o, e, t)
    }
    clear() {
      for (let [e, t, n] of [...this.grid.entries()]) this.grid.set(e, t, n, 0)
      let e = [...this.island.edits.entries()].map(([e, t]) => [e, t, void 0])
      ;(e.length && this.setTerrain(e, !1), Bn(), this.inventory.load(void 0, 0, !0))
    }
    give(e, t = 0) {
      ;((this.inventory.owned += t), this.inventory.addWood(e))
    }
    play() {
      this.hud.play()
    }
    terraform(e, t, n) {
      this.setTerrain([[e, t, n]])
    }
    stage(e) {
      let t = Gn[e]?.()
      if (!t) return !1
      this.staged = t
      for (let [e, t, n] of [...this.grid.entries()]) this.grid.set(e, t, n, 0)
      let n = [...this.island.edits.entries()].map(([e, t]) => [e, t, void 0])
      this.setTerrain([...n, ...(t.terrain ?? [])], !1)
      for (let [e, n, r] of t.cells) this.grid.set(e, n, r, 1)
      return ((this.inventory.creative = !0), !0)
    }
    view(e) {
      let t = this.staged?.views[e]
      return t ? (Object.assign(this.rig.goal, { tilt: 0, ...t }), this.rig.snap(), !0) : !1
    }
  }
function Jn(e, t) {
  if (!e) return null
  let n = e.getObjectByName(t) ?? e
  return (
    Ue(n),
    n.traverse((e) => {
      let t = e
      if (t.isMesh) {
        for (let e of Array.isArray(t.material) ? t.material : [t.material]) we(e)
        t.castShadow = !0
      }
    }),
    n
  )
}
function Yn(e) {
  return (
    Ue(e),
    e.traverse((e) => {
      let t = e
      if (t.isMesh) {
        for (let e of Array.isArray(t.material) ? t.material : [t.material]) we(e)
        t.castShadow = !0
      }
    }),
    e
  )
}
function Xn() {
  let e = new d()
  e.name = `Bonfire`
  let n = new T({ color: `#B8B2A6`, roughness: 0.9 }),
    r = new T({ color: `#9A6A45`, roughness: 0.85 })
  for (let r = 0; r < 8; r++) {
    let i = (r / 8) * Math.PI * 2,
      a = new t(new w(0.11, 10, 8), n)
    ;(a.scale.set(1.2, 0.8, 1),
      a.position.set(Math.cos(i) * 0.36, 0.07, Math.sin(i) * 0.36),
      e.add(a))
  }
  for (let n = 0; n < 3; n++) {
    let i = new t(new h(0.05, 0.05, 0.5, 8), r)
    ;(i.position.set(0, 0.16, 0), i.rotation.set(0.75, (n / 3) * Math.PI * 2, 0, `YXZ`), e.add(i))
  }
  let a = new i()
  return ((a.name = `FireCenter`), a.position.set(0, 0.12, 0), e.add(a), e)
}
var Zn = document.getElementById(`scene`),
  Qn = document.getElementById(`loader`),
  $n = Qn.querySelector(`.loader-fill`),
  er = new qn(Zn)
;((window.lh = er),
  await er.init((e) => {
    $n.style.transform = `scaleX(${Math.max(e, 0.05)})`
  }),
  notifyGameReady(er),
  (window.__readyMs = Math.round(performance.now())),
  er.start(),
  requestAnimationFrame(() => {
    ;(Qn.classList.add(`done`), window.setTimeout(() => Qn.remove(), 1200))
  }))
