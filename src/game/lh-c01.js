import {
  $ as e,
  $t as t,
  At as n,
  Cn as r,
  Dn as i,
  Dt as a,
  En as o,
  F as s,
  G as c,
  Gn as l,
  Gt as u,
  H as d,
  Hn as f,
  J as p,
  Jn as m,
  Jt as h,
  K as g,
  Kn as _,
  Kt as v,
  Ln as y,
  M as b,
  Mn as x,
  Mt as S,
  Nn as ee,
  Nt as te,
  O as C,
  On as ne,
  Pn as re,
  Pt as ie,
  Q as ae,
  Qt as oe,
  Rn as se,
  Sn as ce,
  St as le,
  T as ue,
  Tn as de,
  Un as fe,
  Vn as pe,
  Wn as me,
  Wt as he,
  Xn as ge,
  Xt as _e,
  Yn as ve,
  Yt as ye,
  Zt as be,
  _n as xe,
  an as Se,
  at as Ce,
  bn as we,
  bt as Te,
  cn as Ee,
  ct as De,
  dn as Oe,
  en as ke,
  et as Ae,
  fn as je,
  g as Me,
  gn as Ne,
  hn as Pe,
  ht as Fe,
  in as Ie,
  it as w,
  jn as Le,
  jt as Re,
  kn as ze,
  kt as Be,
  ln as Ve,
  lt as He,
  mn as Ue,
  mt as T,
  nn as We,
  nt as E,
  on as Ge,
  pn as Ke,
  pt as qe,
  q as Je,
  qt as Ye,
  rn as Xe,
  rt as Ze,
  sn as Qe,
  st as D,
  tn as $e,
  tt as et,
  un as tt,
  vn as nt,
  vt as O,
  wn as rt,
  xn as it,
  xt as at,
  yn as ot,
  zn as st,
} from './lh-c00.js'
var ct = class e extends b {
    constructor(e = [], t = [], n = 1, r = 0) {
      ;(super(),
        (this.type = `PolyhedronGeometry`),
        (this.parameters = { vertices: e, indices: t, radius: n, detail: r }))
      let i = [],
        a = []
      ;(o(r),
        l(n),
        u(),
        this.setAttribute(`position`, new s(i, 3)),
        this.setAttribute(`normal`, new s(i.slice(), 3)),
        this.setAttribute(`uv`, new s(a, 2)),
        r === 0 ? this.computeVertexNormals() : this.normalizeNormals())
      function o(e) {
        let n = new E(),
          r = new E(),
          i = new E()
        for (let a = 0; a < t.length; a += 3)
          (p(t[a + 0], n), p(t[a + 1], r), p(t[a + 2], i), c(n, r, i, e))
      }
      function c(e, t, n, r) {
        let i = r + 1,
          a = []
        for (let r = 0; r <= i; r++) {
          a[r] = []
          let o = e.clone().lerp(n, r / i),
            s = t.clone().lerp(n, r / i),
            c = i - r
          for (let e = 0; e <= c; e++)
            e === 0 && r === i ? (a[r][e] = o) : (a[r][e] = o.clone().lerp(s, e / c))
        }
        for (let e = 0; e < i; e++)
          for (let t = 0; t < 2 * (i - e) - 1; t++) {
            let n = Math.floor(t / 2)
            t % 2 == 0
              ? (f(a[e][n + 1]), f(a[e + 1][n]), f(a[e][n]))
              : (f(a[e][n + 1]), f(a[e + 1][n + 1]), f(a[e + 1][n]))
          }
      }
      function l(e) {
        let t = new E()
        for (let n = 0; n < i.length; n += 3)
          ((t.x = i[n + 0]),
            (t.y = i[n + 1]),
            (t.z = i[n + 2]),
            t.normalize().multiplyScalar(e),
            (i[n + 0] = t.x),
            (i[n + 1] = t.y),
            (i[n + 2] = t.z))
      }
      function u() {
        let e = new E()
        for (let t = 0; t < i.length; t += 3) {
          ;((e.x = i[t + 0]), (e.y = i[t + 1]), (e.z = i[t + 2]))
          let n = g(e) / 2 / Math.PI + 0.5,
            r = _(e) / Math.PI + 0.5
          a.push(n, 1 - r)
        }
        ;(m(), d())
      }
      function d() {
        for (let e = 0; e < a.length; e += 6) {
          let t = a[e + 0],
            n = a[e + 2],
            r = a[e + 4]
          Math.max(t, n, r) > 0.9 &&
            Math.min(t, n, r) < 0.1 &&
            (t < 0.2 && (a[e + 0] += 1), n < 0.2 && (a[e + 2] += 1), r < 0.2 && (a[e + 4] += 1))
        }
      }
      function f(e) {
        i.push(e.x, e.y, e.z)
      }
      function p(t, n) {
        let r = t * 3
        ;((n.x = e[r + 0]), (n.y = e[r + 1]), (n.z = e[r + 2]))
      }
      function m() {
        let e = new E(),
          t = new E(),
          n = new E(),
          r = new E(),
          o = new w(),
          s = new w(),
          c = new w()
        for (let l = 0, u = 0; l < i.length; l += 9, u += 6) {
          ;(e.set(i[l + 0], i[l + 1], i[l + 2]),
            t.set(i[l + 3], i[l + 4], i[l + 5]),
            n.set(i[l + 6], i[l + 7], i[l + 8]),
            o.set(a[u + 0], a[u + 1]),
            s.set(a[u + 2], a[u + 3]),
            c.set(a[u + 4], a[u + 5]),
            r.copy(e).add(t).add(n).divideScalar(3))
          let d = g(r)
          ;(h(o, u + 0, e, d), h(s, u + 2, t, d), h(c, u + 4, n, d))
        }
      }
      function h(e, t, n, r) {
        ;(r < 0 && e.x === 1 && (a[t] = e.x - 1),
          n.x === 0 && n.z === 0 && (a[t] = r / 2 / Math.PI + 0.5))
      }
      function g(e) {
        return Math.atan2(e.z, -e.x)
      }
      function _(e) {
        return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z))
      }
    }
    copy(e) {
      return (super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this)
    }
    static fromJSON(t) {
      return new e(t.vertices, t.indices, t.radius, t.detail)
    }
  },
  lt = class e extends ct {
    constructor(e = 1, t = 0) {
      let n = (1 + Math.sqrt(5)) / 2,
        r = [
          -1,
          n,
          0,
          1,
          n,
          0,
          -1,
          -n,
          0,
          1,
          -n,
          0,
          0,
          -1,
          n,
          0,
          1,
          n,
          0,
          -1,
          -n,
          0,
          1,
          -n,
          n,
          0,
          -1,
          n,
          0,
          1,
          -n,
          0,
          -1,
          -n,
          0,
          1,
        ]
      ;(super(
        r,
        [
          0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6,
          7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6,
          7, 9, 8, 1,
        ],
        e,
        t
      ),
        (this.type = `IcosahedronGeometry`),
        (this.parameters = { radius: e, detail: t }))
    }
    static fromJSON(t) {
      return new e(t.radius, t.detail)
    }
  },
  ut = class e extends b {
    constructor(e = 1, t = 1, n = 1, r = 1) {
      ;(super(),
        (this.type = `PlaneGeometry`),
        (this.parameters = { width: e, height: t, widthSegments: n, heightSegments: r }))
      let i = e / 2,
        a = t / 2,
        o = Math.floor(n),
        c = Math.floor(r),
        l = o + 1,
        u = c + 1,
        d = e / o,
        f = t / c,
        p = [],
        m = [],
        h = [],
        g = []
      for (let e = 0; e < u; e++) {
        let t = e * f - a
        for (let n = 0; n < l; n++) {
          let r = n * d - i
          ;(m.push(r, -t, 0), h.push(0, 0, 1), g.push(n / o), g.push(1 - e / c))
        }
      }
      for (let e = 0; e < c; e++)
        for (let t = 0; t < o; t++) {
          let n = t + l * e,
            r = t + l * (e + 1),
            i = t + 1 + l * (e + 1),
            a = t + 1 + l * e
          ;(p.push(n, r, a), p.push(r, i, a))
        }
      ;(this.setIndex(p),
        this.setAttribute(`position`, new s(m, 3)),
        this.setAttribute(`normal`, new s(h, 3)),
        this.setAttribute(`uv`, new s(g, 2)))
    }
    copy(e) {
      return (super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this)
    }
    static fromJSON(t) {
      return new e(t.width, t.height, t.widthSegments, t.heightSegments)
    }
  },
  dt = class e extends b {
    constructor(e = 0.5, t = 1, n = 32, r = 1, i = 0, a = Math.PI * 2) {
      ;(super(),
        (this.type = `RingGeometry`),
        (this.parameters = {
          innerRadius: e,
          outerRadius: t,
          thetaSegments: n,
          phiSegments: r,
          thetaStart: i,
          thetaLength: a,
        }),
        (n = Math.max(3, n)),
        (r = Math.max(1, r)))
      let o = [],
        c = [],
        l = [],
        u = [],
        d = e,
        f = (t - e) / r,
        p = new E(),
        m = new w()
      for (let e = 0; e <= r; e++) {
        for (let e = 0; e <= n; e++) {
          let r = i + (e / n) * a
          ;((p.x = d * Math.cos(r)),
            (p.y = d * Math.sin(r)),
            c.push(p.x, p.y, p.z),
            l.push(0, 0, 1),
            (m.x = (p.x / t + 1) / 2),
            (m.y = (p.y / t + 1) / 2),
            u.push(m.x, m.y))
        }
        d += f
      }
      for (let e = 0; e < r; e++) {
        let t = e * (n + 1)
        for (let e = 0; e < n; e++) {
          let r = e + t,
            i = r,
            a = r + n + 1,
            s = r + n + 2,
            c = r + 1
          ;(o.push(i, a, c), o.push(a, s, c))
        }
      }
      ;(this.setIndex(o),
        this.setAttribute(`position`, new s(c, 3)),
        this.setAttribute(`normal`, new s(l, 3)),
        this.setAttribute(`uv`, new s(u, 2)))
    }
    copy(e) {
      return (super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this)
    }
    static fromJSON(t) {
      return new e(
        t.innerRadius,
        t.outerRadius,
        t.thetaSegments,
        t.phiSegments,
        t.thetaStart,
        t.thetaLength
      )
    }
  },
  ft = class e extends b {
    constructor(e = 1, t = 32, n = 16, r = 0, i = Math.PI * 2, a = 0, o = Math.PI) {
      ;(super(),
        (this.type = `SphereGeometry`),
        (this.parameters = {
          radius: e,
          widthSegments: t,
          heightSegments: n,
          phiStart: r,
          phiLength: i,
          thetaStart: a,
          thetaLength: o,
        }),
        (t = Math.max(3, Math.floor(t))),
        (n = Math.max(2, Math.floor(n))))
      let c = Math.min(a + o, Math.PI),
        l = 0,
        u = [],
        d = new E(),
        f = new E(),
        p = [],
        m = [],
        h = [],
        g = []
      for (let s = 0; s <= n; s++) {
        let p = [],
          _ = s / n,
          v = a + _ * o,
          y = e * Math.cos(v),
          b = Math.sqrt(e * e - y * y),
          x = 0
        s === 0 && a === 0 ? (x = 0.5 / t) : s === n && c === Math.PI && (x = -0.5 / t)
        for (let e = 0; e <= t; e++) {
          let n = e / t,
            a = r + n * i
          ;((d.x = -b * Math.cos(a)),
            (d.y = y),
            (d.z = b * Math.sin(a)),
            m.push(d.x, d.y, d.z),
            f.copy(d).normalize(),
            h.push(f.x, f.y, f.z),
            g.push(n + x, 1 - _),
            p.push(l++))
        }
        u.push(p)
      }
      for (let e = 0; e < n; e++)
        for (let r = 0; r < t; r++) {
          let t = u[e][r + 1],
            i = u[e][r],
            o = u[e + 1][r],
            s = u[e + 1][r + 1]
          ;((e !== 0 || a > 0) && p.push(t, i, s), (e !== n - 1 || c < Math.PI) && p.push(i, o, s))
        }
      ;(this.setIndex(p),
        this.setAttribute(`position`, new s(m, 3)),
        this.setAttribute(`normal`, new s(h, 3)),
        this.setAttribute(`uv`, new s(g, 2)))
    }
    copy(e) {
      return (super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this)
    }
    static fromJSON(t) {
      return new e(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength
      )
    }
  }
function k(e) {
  let t = {}
  for (let n in e) {
    t[n] = {}
    for (let r in e[n]) {
      let i = e[n][r]
      if (mt(i))
        i.isRenderTargetTexture
          ? (O(
              `UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`
            ),
            (t[n][r] = null))
          : (t[n][r] = i.clone())
      else if (Array.isArray(i)) {
        if (mt(i[0])) {
          let e = []
          for (let t = 0, n = i.length; t < n; t++) e[t] = i[t].clone()
          t[n][r] = e
        } else t[n][r] = i.slice()
      } else t[n][r] = i
    }
  }
  return t
}
function pt(e) {
  let t = {}
  for (let n = 0; n < e.length; n++) {
    let r = k(e[n])
    for (let e in r) t[e] = r[e]
  }
  return t
}
function mt(e) {
  return (
    e &&
    (e.isColor ||
      e.isMatrix3 ||
      e.isMatrix4 ||
      e.isVector2 ||
      e.isVector3 ||
      e.isVector4 ||
      e.isTexture ||
      e.isQuaternion)
  )
}
function ht(e) {
  let t = []
  for (let n = 0; n < e.length; n++) t.push(e[n].clone())
  return t
}
function gt(e) {
  let t = e.getRenderTarget()
  return t === null
    ? e.outputColorSpace
    : t.isXRRenderTarget === !0
      ? t.texture.colorSpace
      : Ae.workingColorSpace
}
var _t = { clone: k, merge: pt },
  vt = `
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,
  yt = `
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`,
  bt = class extends C {
    constructor(e) {
      ;(super(),
        (this.isShaderMaterial = !0),
        (this.type = `ShaderMaterial`),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.uniformsGroups = []),
        (this.vertexShader = vt),
        (this.fragmentShader = yt),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.forceSinglePass = !0),
        (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
        (this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }),
        (this.index0AttributeName = void 0),
        (this.uniformsNeedUpdate = !1),
        (this.glslVersion = null),
        e !== void 0 && this.setValues(e))
    }
    copy(e) {
      return (
        super.copy(e),
        (this.fragmentShader = e.fragmentShader),
        (this.vertexShader = e.vertexShader),
        (this.uniforms = k(e.uniforms)),
        (this.uniformsGroups = ht(e.uniformsGroups)),
        (this.defines = Object.assign({}, e.defines)),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.fog = e.fog),
        (this.lights = e.lights),
        (this.clipping = e.clipping),
        (this.extensions = Object.assign({}, e.extensions)),
        (this.glslVersion = e.glslVersion),
        (this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues)),
        (this.index0AttributeName = e.index0AttributeName),
        (this.uniformsNeedUpdate = e.uniformsNeedUpdate),
        this
      )
    }
    toJSON(e) {
      let t = super.toJSON(e)
      ;((t.glslVersion = this.glslVersion), (t.uniforms = {}))
      for (let n in this.uniforms) {
        let r = this.uniforms[n].value
        r && r.isTexture
          ? (t.uniforms[n] = { type: `t`, value: r.toJSON(e).uuid })
          : r && r.isColor
            ? (t.uniforms[n] = { type: `c`, value: r.getHex() })
            : r && r.isVector2
              ? (t.uniforms[n] = { type: `v2`, value: r.toArray() })
              : r && r.isVector3
                ? (t.uniforms[n] = { type: `v3`, value: r.toArray() })
                : r && r.isVector4
                  ? (t.uniforms[n] = { type: `v4`, value: r.toArray() })
                  : r && r.isMatrix3
                    ? (t.uniforms[n] = { type: `m3`, value: r.toArray() })
                    : r && r.isMatrix4
                      ? (t.uniforms[n] = { type: `m4`, value: r.toArray() })
                      : (t.uniforms[n] = { value: r })
      }
      ;(Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        (t.vertexShader = this.vertexShader),
        (t.fragmentShader = this.fragmentShader),
        (t.lights = this.lights),
        (t.clipping = this.clipping))
      let n = {}
      for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0)
      return (Object.keys(n).length > 0 && (t.extensions = n), t)
    }
    fromJSON(e, t) {
      if ((super.fromJSON(e, t), e.uniforms !== void 0))
        for (let n in e.uniforms) {
          let r = e.uniforms[n]
          switch (((this.uniforms[n] = {}), r.type)) {
            case `t`:
              this.uniforms[n].value = t[r.value] || null
              break
            case `c`:
              this.uniforms[n].value = new d().setHex(r.value)
              break
            case `v2`:
              this.uniforms[n].value = new w().fromArray(r.value)
              break
            case `v3`:
              this.uniforms[n].value = new E().fromArray(r.value)
              break
            case `v4`:
              this.uniforms[n].value = new ae().fromArray(r.value)
              break
            case `m3`:
              this.uniforms[n].value = new et().fromArray(r.value)
              break
            case `m4`:
              this.uniforms[n].value = new p().fromArray(r.value)
              break
            default:
              this.uniforms[n].value = r.value
          }
        }
      if (
        (e.defines !== void 0 && (this.defines = e.defines),
        e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader),
        e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader),
        e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion),
        e.extensions !== void 0)
      )
        for (let t in e.extensions) this.extensions[t] = e.extensions[t]
      return (
        e.lights !== void 0 && (this.lights = e.lights),
        e.clipping !== void 0 && (this.clipping = e.clipping),
        this
      )
    }
  },
  xt = class extends bt {
    constructor(e) {
      ;(super(e), (this.isRawShaderMaterial = !0), (this.type = `RawShaderMaterial`))
    }
  },
  St = class extends C {
    constructor(e) {
      ;(super(),
        (this.isMeshStandardMaterial = !0),
        (this.type = `MeshStandardMaterial`),
        (this.defines = { STANDARD: `` }),
        (this.color = new d(16777215)),
        (this.roughness = 1),
        (this.metalness = 0),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new d(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new w(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.roughnessMap = null),
        (this.metalnessMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapRotation = new Je()),
        (this.envMapIntensity = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = `round`),
        (this.wireframeLinejoin = `round`),
        (this.flatShading = !1),
        (this.fog = !0),
        this.setValues(e))
    }
    copy(e) {
      return (
        super.copy(e),
        (this.defines = { STANDARD: `` }),
        this.color.copy(e.color),
        (this.roughness = e.roughness),
        (this.metalness = e.metalness),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        this.emissive.copy(e.emissive),
        (this.emissiveMap = e.emissiveMap),
        (this.emissiveIntensity = e.emissiveIntensity),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.roughnessMap = e.roughnessMap),
        (this.metalnessMap = e.metalnessMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        this.envMapRotation.copy(e.envMapRotation),
        (this.envMapIntensity = e.envMapIntensity),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.flatShading = e.flatShading),
        (this.fog = e.fog),
        this
      )
    }
  },
  Ct = class extends St {
    constructor(e) {
      ;(super(),
        (this.isMeshPhysicalMaterial = !0),
        (this.defines = { STANDARD: ``, PHYSICAL: `` }),
        (this.type = `MeshPhysicalMaterial`),
        (this.anisotropyRotation = 0),
        (this.anisotropyMap = null),
        (this.clearcoatMap = null),
        (this.clearcoatRoughness = 0),
        (this.clearcoatRoughnessMap = null),
        (this.clearcoatNormalScale = new w(1, 1)),
        (this.clearcoatNormalMap = null),
        (this.ior = 1.5),
        Object.defineProperty(this, 'reflectivity', {
          get: function () {
            return De((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1)
          },
          set: function (e) {
            this.ior = (1 + 0.4 * e) / (1 - 0.4 * e)
          },
        }),
        (this.iridescenceMap = null),
        (this.iridescenceIOR = 1.3),
        (this.iridescenceThicknessRange = [100, 400]),
        (this.iridescenceThicknessMap = null),
        (this.sheenColor = new d(0)),
        (this.sheenColorMap = null),
        (this.sheenRoughness = 1),
        (this.sheenRoughnessMap = null),
        (this.transmissionMap = null),
        (this.thickness = 0),
        (this.thicknessMap = null),
        (this.attenuationDistance = 1 / 0),
        (this.attenuationColor = new d(1, 1, 1)),
        (this.specularIntensity = 1),
        (this.specularIntensityMap = null),
        (this.specularColor = new d(1, 1, 1)),
        (this.specularColorMap = null),
        (this._anisotropy = 0),
        (this._clearcoat = 0),
        (this._dispersion = 0),
        (this._iridescence = 0),
        (this._retroreflectivity = 0),
        (this._sheen = 0),
        (this._transmission = 0),
        this.setValues(e))
    }
    get anisotropy() {
      return this._anisotropy
    }
    set anisotropy(e) {
      ;(this._anisotropy > 0 != e > 0 && this.version++, (this._anisotropy = e))
    }
    get clearcoat() {
      return this._clearcoat
    }
    set clearcoat(e) {
      ;(this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e))
    }
    get iridescence() {
      return this._iridescence
    }
    set iridescence(e) {
      ;(this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e))
    }
    get dispersion() {
      return this._dispersion
    }
    set dispersion(e) {
      ;(this._dispersion > 0 != e > 0 && this.version++, (this._dispersion = e))
    }
    get retroreflectivity() {
      return this._retroreflectivity
    }
    set retroreflectivity(e) {
      ;(this._retroreflectivity > 0 != e > 0 && this.version++, (this._retroreflectivity = e))
    }
    get sheen() {
      return this._sheen
    }
    set sheen(e) {
      ;(this._sheen > 0 != e > 0 && this.version++, (this._sheen = e))
    }
    get transmission() {
      return this._transmission
    }
    set transmission(e) {
      ;(this._transmission > 0 != e > 0 && this.version++, (this._transmission = e))
    }
    copy(e) {
      return (
        super.copy(e),
        (this.defines = { STANDARD: ``, PHYSICAL: `` }),
        (this.anisotropy = e.anisotropy),
        (this.anisotropyRotation = e.anisotropyRotation),
        (this.anisotropyMap = e.anisotropyMap),
        (this.clearcoat = e.clearcoat),
        (this.clearcoatMap = e.clearcoatMap),
        (this.clearcoatRoughness = e.clearcoatRoughness),
        (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
        (this.clearcoatNormalMap = e.clearcoatNormalMap),
        this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
        (this.dispersion = e.dispersion),
        (this.ior = e.ior),
        (this.iridescence = e.iridescence),
        (this.iridescenceMap = e.iridescenceMap),
        (this.iridescenceIOR = e.iridescenceIOR),
        (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
        (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
        (this.retroreflectivity = e.retroreflectivity),
        (this.sheen = e.sheen),
        this.sheenColor.copy(e.sheenColor),
        (this.sheenColorMap = e.sheenColorMap),
        (this.sheenRoughness = e.sheenRoughness),
        (this.sheenRoughnessMap = e.sheenRoughnessMap),
        (this.transmission = e.transmission),
        (this.transmissionMap = e.transmissionMap),
        (this.thickness = e.thickness),
        (this.thicknessMap = e.thicknessMap),
        (this.attenuationDistance = e.attenuationDistance),
        this.attenuationColor.copy(e.attenuationColor),
        (this.specularIntensity = e.specularIntensity),
        (this.specularIntensityMap = e.specularIntensityMap),
        this.specularColor.copy(e.specularColor),
        (this.specularColorMap = e.specularColorMap),
        this
      )
    }
  },
  wt = class extends C {
    constructor(e) {
      ;(super(),
        (this.isMeshDepthMaterial = !0),
        (this.type = `MeshDepthMaterial`),
        (this.depthPacking = at),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        this.setValues(e))
    }
    copy(e) {
      return (
        super.copy(e),
        (this.depthPacking = e.depthPacking),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        this
      )
    }
  },
  Tt = class extends C {
    constructor(e) {
      ;(super(),
        (this.isMeshDistanceMaterial = !0),
        (this.type = `MeshDistanceMaterial`),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        this.setValues(e))
    }
    copy(e) {
      return (
        super.copy(e),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        this
      )
    }
  }
function A(e, t) {
  return !e || e.constructor === t
    ? e
    : typeof t.BYTES_PER_ELEMENT == `number`
      ? new t(e)
      : Array.prototype.slice.call(e)
}
function j(e) {
  return e !== void 0 && e.inTangents !== void 0 && e.outTangents !== void 0
}
function Et(e) {
  function t(t, n) {
    return e[t] - e[n]
  }
  let n = e.length,
    r = Array(n)
  for (let e = 0; e !== n; ++e) r[e] = e
  return (r.sort(t), r)
}
function Dt(e, t, n) {
  let r = e.length,
    i = new e.constructor(r)
  for (let a = 0, o = 0; o !== r; ++a) {
    let r = n[a] * t
    for (let n = 0; n !== t; ++n) i[o++] = e[r + n]
  }
  return i
}
function Ot(e, t, n, r) {
  let i = 1,
    a = e[0]
  for (; a !== void 0 && a[r] === void 0; ) a = e[i++]
  if (a === void 0) return
  let o = a[r]
  if (o !== void 0) {
    if (Array.isArray(o))
      do ((o = a[r]), o !== void 0 && (t.push(a.time), n.push(...o)), (a = e[i++]))
      while (a !== void 0)
    else if (o.toArray !== void 0)
      do ((o = a[r]), o !== void 0 && (t.push(a.time), o.toArray(n, n.length)), (a = e[i++]))
      while (a !== void 0)
    else
      do ((o = a[r]), o !== void 0 && (t.push(a.time), n.push(o)), (a = e[i++]))
      while (a !== void 0)
  }
}
var M = class {
    constructor(e, t, n, r) {
      ;((this.parameterPositions = e),
        (this._cachedIndex = 0),
        (this.resultBuffer = r === void 0 ? new t.constructor(n) : r),
        (this.sampleValues = t),
        (this.valueSize = n),
        (this.settings = null),
        (this.DefaultSettings_ = {}))
    }
    evaluate(e) {
      let t = this.parameterPositions,
        n = this._cachedIndex,
        r = t[n],
        i = t[n - 1]
      validate_interval: {
        seek: {
          let a
          linear_scan: {
            forward_scan: if (!(e < r)) {
              for (let a = n + 2; ; ) {
                if (r === void 0) {
                  if (e < i) break forward_scan
                  return ((n = t.length), (this._cachedIndex = n), this.copySampleValue_(n - 1))
                }
                if (n === a) break
                if (((i = r), (r = t[++n]), e < r)) break seek
              }
              a = t.length
              break linear_scan
            }
            if (!(e >= i)) {
              let o = t[1]
              e < o && ((n = 2), (i = o))
              for (let a = n - 2; ; ) {
                if (i === void 0) return ((this._cachedIndex = 0), this.copySampleValue_(0))
                if (n === a) break
                if (((r = i), (i = t[--n - 1]), e >= i)) break seek
              }
              ;((a = n), (n = 0))
              break linear_scan
            }
            break validate_interval
          }
          for (; n < a; ) {
            let r = (n + a) >>> 1
            e < t[r] ? (a = r) : (n = r + 1)
          }
          if (((r = t[n]), (i = t[n - 1]), i === void 0))
            return ((this._cachedIndex = 0), this.copySampleValue_(0))
          if (r === void 0)
            return ((n = t.length), (this._cachedIndex = n), this.copySampleValue_(n - 1))
        }
        ;((this._cachedIndex = n), this.intervalChanged_(n, i, r))
      }
      return this.interpolate_(n, i, e, r)
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_
    }
    copySampleValue_(e) {
      let t = this.resultBuffer,
        n = this.sampleValues,
        r = this.valueSize,
        i = e * r
      for (let e = 0; e !== r; ++e) t[e] = n[i + e]
      return t
    }
    interpolate_() {
      throw Error(`THREE.Interpolant: Call to abstract method.`)
    }
    intervalChanged_() {}
  },
  kt = class extends M {
    constructor(e, t, n, r) {
      ;(super(e, t, n, r),
        (this._weightPrev = -0),
        (this._offsetPrev = -0),
        (this._weightNext = -0),
        (this._offsetNext = -0),
        (this.DefaultSettings_ = { endingStart: ve, endingEnd: ve }))
    }
    intervalChanged_(e, t, n) {
      let r = this.parameterPositions,
        i = e - 2,
        a = e + 1,
        o = r[i],
        s = r[a]
      if (o === void 0)
        switch (this.getSettings_().endingStart) {
          case ge:
            ;((i = e), (o = 2 * t - n))
            break
          case m:
            ;((i = r.length - 2), (o = t + r[i] - r[i + 1]))
            break
          default:
            ;((i = e), (o = n))
        }
      if (s === void 0)
        switch (this.getSettings_().endingEnd) {
          case ge:
            ;((a = e), (s = 2 * n - t))
            break
          case m:
            ;((a = 1), (s = n + r[1] - r[0]))
            break
          default:
            ;((a = e - 1), (s = t))
        }
      let c = (n - t) * 0.5,
        l = this.valueSize
      ;((this._weightPrev = c / (t - o)),
        (this._weightNext = c / (s - n)),
        (this._offsetPrev = i * l),
        (this._offsetNext = a * l))
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = this._offsetPrev,
        u = this._offsetNext,
        d = this._weightPrev,
        f = this._weightNext,
        p = (n - t) / (r - t),
        m = p * p,
        h = m * p,
        g = -d * h + 2 * d * m - d * p,
        _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-0.5 + d) * p + 1,
        v = (-1 - f) * h + (1.5 + f) * m + 0.5 * p,
        y = f * h - f * m
      for (let e = 0; e !== o; ++e) i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e]
      return i
    }
  },
  At = class extends M {
    constructor(e, t, n, r) {
      super(e, t, n, r)
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = (n - t) / (r - t),
        u = 1 - l
      for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l
      return i
    }
  },
  jt = class extends M {
    constructor(e, t, n, r) {
      super(e, t, n, r)
    }
    interpolate_(e) {
      return this.copySampleValue_(e - 1)
    }
  },
  Mt = class extends M {
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = this.inTangents,
        u = this.outTangents
      if (!l || !u) {
        let e = (n - t) / (r - t),
          l = 1 - e
        for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e
        return i
      }
      let d = o * 2,
        f = e - 1
      for (let p = 0; p !== o; ++p) {
        let o = a[c + p],
          m = a[s + p],
          h = f * d + p * 2,
          g = u[h],
          _ = u[h + 1],
          v = e * d + p * 2,
          y = l[v],
          b = l[v + 1],
          x = Ft(n, t, g, y, r)
        i[p] = Nt(x, o, _, b, m)
      }
      return i
    }
  }
function Nt(e, t, n, r, i) {
  let a = 1 - e
  return a * a * a * t + 3 * a * a * e * n + 3 * a * e * e * r + e * e * e * i
}
function Pt(e, t, n, r, i) {
  let a = 1 - e
  return 3 * a * a * (n - t) + 6 * a * e * (r - n) + 3 * e * e * (i - r)
}
function Ft(e, t, n, r, i) {
  let a = (e - t) / (i - t)
  for (let o = 0; o < 8; o++) {
    let o = Nt(a, t, n, r, i) - e
    if (Math.abs(o) < 1e-10) break
    let s = Pt(a, t, n, r, i)
    if (Math.abs(s) < 1e-10) break
    a = Math.max(0, Math.min(1, a - o / s))
  }
  return a
}
var N = class {
  constructor(e, t, n, r) {
    if (e === void 0) throw Error(`THREE.KeyframeTrack: track name is undefined`)
    if (t === void 0 || t.length === 0)
      throw Error(`THREE.KeyframeTrack: no keyframes in track named ` + e)
    ;((this.name = e),
      (this.times = A(t, this.TimeBufferType)),
      (this.values = A(n, this.ValueBufferType)),
      this.setInterpolation(r || this.DefaultInterpolation))
  }
  static toJSON(e) {
    let t = e.constructor,
      n
    if (t.toJSON !== this.toJSON) n = t.toJSON(e)
    else {
      n = { name: e.name, times: A(e.times, Array), values: A(e.values, Array) }
      let t = e.getInterpolation()
      ;(t !== e.DefaultInterpolation && (n.interpolation = t),
        j(e.settings) &&
          (n.settings = {
            inTangents: A(e.settings.inTangents, Array),
            outTangents: A(e.settings.outTangents, Array),
          }))
    }
    return ((n.type = e.ValueTypeName), n)
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new jt(this.times, this.values, this.getValueSize(), e)
  }
  InterpolantFactoryMethodLinear(e) {
    return new At(this.times, this.values, this.getValueSize(), e)
  }
  InterpolantFactoryMethodSmooth(e) {
    return new kt(this.times, this.values, this.getValueSize(), e)
  }
  InterpolantFactoryMethodBezier(e) {
    let t = new Mt(this.times, this.values, this.getValueSize(), e)
    return (
      this.settings &&
        ((t.inTangents = this.settings.inTangents), (t.outTangents = this.settings.outTangents)),
      t
    )
  }
  setInterpolation(e) {
    let t
    switch (e) {
      case S:
        t = this.InterpolantFactoryMethodDiscrete
        break
      case te:
        t = this.InterpolantFactoryMethodLinear
        break
      case ie:
        t = this.InterpolantFactoryMethodSmooth
        break
      case Re:
        t = this.InterpolantFactoryMethodBezier
    }
    if (t === void 0) {
      let t =
        `unsupported interpolation for ` + this.ValueTypeName + ` keyframe track named ` + this.name
      if (this.createInterpolant === void 0) {
        if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation)
        else throw Error(t)
      }
      return (O(`KeyframeTrack:`, t), this)
    }
    return ((this.createInterpolant = t), this)
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return S
      case this.InterpolantFactoryMethodLinear:
        return te
      case this.InterpolantFactoryMethodSmooth:
        return ie
      case this.InterpolantFactoryMethodBezier:
        return Re
    }
  }
  getValueSize() {
    return this.values.length / this.times.length
  }
  shift(e) {
    if (e !== 0) {
      let t = this.times
      for (let n = 0, r = t.length; n !== r; ++n) t[n] += e
    }
    return this
  }
  scale(e) {
    if (e !== 1) {
      let t = this.times
      for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e
      j(this.settings) && (It(this.settings.inTangents, e), It(this.settings.outTangents, e))
    }
    return this
  }
  trim(e, t) {
    let n = this.times,
      r = n.length,
      i = 0,
      a = r - 1
    for (; i !== r && n[i] < e; ) ++i
    for (; a !== -1 && n[a] > t; ) --a
    if ((++a, i !== 0 || a !== r)) {
      i >= a && ((a = Math.max(a, 1)), (i = a - 1))
      let e = this.getValueSize()
      ;((this.times = n.slice(i, a)), (this.values = this.values.slice(i * e, a * e)))
    }
    return this
  }
  validate() {
    let e = !0,
      t = this.getValueSize()
    t - Math.floor(t) !== 0 && (T(`KeyframeTrack: Invalid value size in track.`, this), (e = !1))
    let n = this.times,
      r = this.values,
      i = n.length
    i === 0 && (T(`KeyframeTrack: Track is empty.`, this), (e = !1))
    let a = null
    for (let t = 0; t !== i; t++) {
      let r = n[t]
      if (typeof r == `number` && isNaN(r)) {
        ;(T(`KeyframeTrack: Time is not a valid number.`, this, t, r), (e = !1))
        break
      }
      if (a !== null && a > r) {
        ;(T(`KeyframeTrack: Out of order keys.`, this, t, r, a), (e = !1))
        break
      }
      a = r
    }
    if (r !== void 0 && Fe(r))
      for (let t = 0, n = r.length; t !== n; ++t) {
        let n = r[t]
        if (isNaN(n)) {
          ;(T(`KeyframeTrack: Value is not a valid number.`, this, t, n), (e = !1))
          break
        }
      }
    return e
  }
  optimize() {
    let e = this.times.slice(),
      t = this.values.slice(),
      n = this.getValueSize(),
      r = this.getInterpolation() === ie,
      i = e.length - 1,
      a = 1
    for (let o = 1; o < i; ++o) {
      let i = !1,
        s = e[o]
      if (s !== e[o + 1] && (o !== 1 || s !== e[0])) {
        if (r) i = !0
        else {
          let e = o * n,
            r = e - n,
            a = e + n
          for (let o = 0; o !== n; ++o) {
            let n = t[e + o]
            if (n !== t[r + o] || n !== t[a + o]) {
              i = !0
              break
            }
          }
        }
      }
      if (i) {
        if (o !== a) {
          e[a] = e[o]
          let r = o * n,
            i = a * n
          for (let e = 0; e !== n; ++e) t[i + e] = t[r + e]
        }
        ++a
      }
    }
    if (i > 0) {
      e[a] = e[i]
      for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o]
      ++a
    }
    return (
      a === e.length
        ? ((this.times = e), (this.values = t))
        : ((this.times = e.slice(0, a)), (this.values = t.slice(0, a * n))),
      this
    )
  }
  clone() {
    let e = this.times.slice(),
      t = this.values.slice(),
      n = this.constructor,
      r = new n(this.name, e, t)
    return (
      (r.createInterpolant = this.createInterpolant),
      j(this.settings) &&
        (r.settings = {
          inTangents: this.settings.inTangents.slice(),
          outTangents: this.settings.outTangents.slice(),
        }),
      r
    )
  }
}
function It(e, t) {
  for (let n = 0, r = e.length; n !== r; n += 2) e[n] *= t
}
;((N.prototype.ValueTypeName = ``),
  (N.prototype.TimeBufferType = Float32Array),
  (N.prototype.ValueBufferType = Float32Array),
  (N.prototype.DefaultInterpolation = te))
var P = class extends N {
  constructor(e, t, n) {
    super(e, t, n)
  }
}
;((P.prototype.ValueTypeName = `bool`),
  (P.prototype.ValueBufferType = Array),
  (P.prototype.DefaultInterpolation = S),
  (P.prototype.InterpolantFactoryMethodLinear = void 0),
  (P.prototype.InterpolantFactoryMethodSmooth = void 0))
var Lt = class extends N {
  constructor(e, t, n, r) {
    super(e, t, n, r)
  }
}
Lt.prototype.ValueTypeName = `color`
var F = class extends N {
  constructor(e, t, n, r) {
    super(e, t, n, r)
  }
}
F.prototype.ValueTypeName = `number`
var Rt = class extends M {
    constructor(e, t, n, r) {
      super(e, t, n, r)
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = (n - t) / (r - t),
        c = e * o
      for (let e = c + o; c !== e; c += 4) Ze.slerpFlat(i, 0, a, c - o, a, c, s)
      return i
    }
  },
  I = class extends N {
    constructor(e, t, n, r) {
      super(e, t, n, r)
    }
    InterpolantFactoryMethodLinear(e) {
      return new Rt(this.times, this.values, this.getValueSize(), e)
    }
  }
;((I.prototype.ValueTypeName = `quaternion`), (I.prototype.InterpolantFactoryMethodSmooth = void 0))
var L = class extends N {
  constructor(e, t, n) {
    super(e, t, n)
  }
}
;((L.prototype.ValueTypeName = `string`),
  (L.prototype.ValueBufferType = Array),
  (L.prototype.DefaultInterpolation = S),
  (L.prototype.InterpolantFactoryMethodLinear = void 0),
  (L.prototype.InterpolantFactoryMethodSmooth = void 0))
var R = class extends N {
  constructor(e, t, n, r) {
    super(e, t, n, r)
  }
}
R.prototype.ValueTypeName = `vector`
var zt = class {
  constructor(e = ``, t = -1, n = [], r = he) {
    ;((this.name = e),
      (this.tracks = n),
      (this.duration = t),
      (this.blendMode = r),
      (this.uuid = He()),
      (this.userData = {}),
      this.duration < 0 && this.resetDuration())
  }
  static parse(e) {
    let t = [],
      n = e.tracks,
      r = 1 / (e.fps || 1)
    for (let e = 0, i = n.length; e !== i; ++e) t.push(Vt(n[e]).scale(r))
    let i = new this(e.name, e.duration, t, e.blendMode)
    return ((i.uuid = e.uuid), (i.userData = JSON.parse(e.userData || `{}`)), i)
  }
  static toJSON(e) {
    let t = [],
      n = e.tracks,
      r = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
        userData: JSON.stringify(e.userData),
      }
    for (let e = 0, r = n.length; e !== r; ++e) t.push(N.toJSON(n[e]))
    return r
  }
  static CreateFromMorphTargetSequence(e, t, n, r) {
    let i = t.length,
      a = []
    for (let e = 0; e < i; e++) {
      let o = [],
        s = []
      ;(o.push((e + i - 1) % i, e, (e + 1) % i), s.push(0, 1, 0))
      let c = Et(o)
      ;((o = Dt(o, 1, c)),
        (s = Dt(s, 1, c)),
        !r && o[0] === 0 && (o.push(i), s.push(s[0])),
        a.push(new F(`.morphTargetInfluences[` + t[e].name + `]`, o, s).scale(1 / n)))
    }
    return new this(e, -1, a)
  }
  static findByName(e, t) {
    let n = e
    if (!Array.isArray(e)) {
      let t = e
      n = (t.geometry && t.geometry.animations) || t.animations
    }
    for (let e = 0; e < n.length; e++) if (n[e].name === t) return n[e]
    return null
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    let r = {},
      i = /^([\w-]*?)([\d]+)$/
    for (let t = 0, n = e.length; t < n; t++) {
      let n = e[t],
        a = n.name.match(i)
      if (a && a.length > 1) {
        let e = a[1],
          t = r[e]
        ;(t || (r[e] = t = []), t.push(n))
      }
    }
    let a = []
    for (let e in r) a.push(this.CreateFromMorphTargetSequence(e, r[e], t, n))
    return a
  }
  resetDuration() {
    let e = this.tracks,
      t = 0
    for (let n = 0, r = e.length; n !== r; ++n) {
      let e = this.tracks[n]
      t = Math.max(t, e.times[e.times.length - 1])
    }
    return ((this.duration = t), this)
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration)
    return this
  }
  validate() {
    let e = !0
    for (let t = 0; t < this.tracks.length; t++) e &&= this.tracks[t].validate()
    return e
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize()
    return this
  }
  clone() {
    let e = []
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone())
    let t = new this.constructor(this.name, this.duration, e, this.blendMode)
    return ((t.userData = JSON.parse(JSON.stringify(this.userData))), t)
  }
  toJSON() {
    return this.constructor.toJSON(this)
  }
}
function Bt(e) {
  switch (e.toLowerCase()) {
    case `scalar`:
    case `double`:
    case `float`:
    case `number`:
    case `integer`:
      return F
    case `vector`:
    case `vector2`:
    case `vector3`:
    case `vector4`:
      return R
    case `color`:
      return Lt
    case `quaternion`:
      return I
    case `bool`:
    case `boolean`:
      return P
    case `string`:
      return L
  }
  throw Error(`THREE.KeyframeTrack: Unsupported typeName: ` + e)
}
function Vt(e) {
  if (e.type === void 0) throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`)
  let t = Bt(e.type)
  if (e.times === void 0) {
    let t = [],
      n = []
    ;(Ot(e.keys, t, n, `value`), (e.times = t), (e.values = n))
  }
  let n
  return (
    (n = t.parse === void 0 ? new t(e.name, e.times, e.values, e.interpolation) : t.parse(e)),
    j(e.settings) &&
      (n.settings = {
        inTangents: A(e.settings.inTangents, Float32Array),
        outTangents: A(e.settings.outTangents, Float32Array),
      }),
    n
  )
}
var z = {
  enabled: !1,
  files: {},
  add: function (e, t) {
    this.enabled !== !1 && (Ht(e) || (this.files[e] = t))
  },
  get: function (e) {
    if (this.enabled !== !1 && !Ht(e)) return this.files[e]
  },
  remove: function (e) {
    delete this.files[e]
  },
  clear: function () {
    this.files = {}
  },
}
function Ht(e) {
  try {
    let t = e.slice(e.indexOf(`:`) + 1)
    return new URL(t).protocol === `blob:`
  } catch {
    return !1
  }
}
var Ut = new (class {
    constructor(e, t, n) {
      let r = this,
        i = !1,
        a = 0,
        o = 0,
        s,
        c = []
      ;((this.onStart = void 0),
        (this.onLoad = e),
        (this.onProgress = t),
        (this.onError = n),
        (this._abortController = null),
        (this.itemStart = function (e) {
          ;(o++, i === !1 && r.onStart !== void 0 && r.onStart(e, a, o), (i = !0))
        }),
        (this.itemEnd = function (e) {
          ;(a++,
            r.onProgress !== void 0 && r.onProgress(e, a, o),
            a === o && ((i = !1), r.onLoad !== void 0 && r.onLoad()))
        }),
        (this.itemError = function (e) {
          r.onError !== void 0 && r.onError(e)
        }),
        (this.resolveURL = function (e) {
          return ((e = e.normalize(`NFC`)), s ? s(e) : e)
        }),
        (this.setURLModifier = function (e) {
          return ((s = e), this)
        }),
        (this.addHandler = function (e, t) {
          return (c.push(e, t), this)
        }),
        (this.removeHandler = function (e) {
          let t = c.indexOf(e)
          return (t !== -1 && c.splice(t, 2), this)
        }),
        (this.getHandler = function (e) {
          for (let t = 0, n = c.length; t < n; t += 2) {
            let n = c[t],
              r = c[t + 1]
            if ((n.global && (n.lastIndex = 0), n.test(e))) return r
          }
          return null
        }),
        (this.abort = function () {
          return (this.abortController.abort(), (this._abortController = null), this)
        }))
    }
    get abortController() {
      return ((this._abortController ||= new AbortController()), this._abortController)
    }
  })(),
  B = class {
    constructor(e) {
      ;((this.manager = e === void 0 ? Ut : e),
        (this.crossOrigin = `anonymous`),
        (this.withCredentials = !1),
        (this.path = ``),
        (this.resourcePath = ``),
        (this.requestHeader = {}),
        typeof __THREE_DEVTOOLS__ < `u` &&
          __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`, { detail: this })))
    }
    load() {}
    loadAsync(e, t) {
      let n = this
      return new Promise(function (r, i) {
        n.load(e, r, t, i)
      })
    }
    parse() {}
    setCrossOrigin(e) {
      return ((this.crossOrigin = e), this)
    }
    setWithCredentials(e) {
      return ((this.withCredentials = e), this)
    }
    setPath(e) {
      return ((this.path = e), this)
    }
    setResourcePath(e) {
      return ((this.resourcePath = e), this)
    }
    setRequestHeader(e) {
      return ((this.requestHeader = e), this)
    }
    abort() {
      return this
    }
  }
B.DEFAULT_MATERIAL_NAME = `__DEFAULT`
var V = {},
  Wt = class extends Error {
    constructor(e, t) {
      ;(super(e), (this.response = t))
    }
  },
  Gt = class extends B {
    constructor(e) {
      ;(super(e),
        (this.mimeType = ``),
        (this.responseType = ``),
        (this._abortController = new AbortController()))
    }
    load(e, t, n, r) {
      ;(e === void 0 && (e = ``),
        this.path !== void 0 && (e = this.path + e),
        (e = this.manager.resolveURL(e)))
      let i = z.get(`file:${e}`)
      if (i !== void 0) {
        ;(this.manager.itemStart(e),
          setTimeout(() => {
            ;(t && t(i), this.manager.itemEnd(e))
          }, 0))
        return
      }
      if (V[e] !== void 0) {
        V[e].push({ onLoad: t, onProgress: n, onError: r })
        return
      }
      ;((V[e] = []), V[e].push({ onLoad: t, onProgress: n, onError: r }))
      let a = new Request(e, {
          headers: new Headers(this.requestHeader),
          credentials: this.withCredentials ? `include` : `same-origin`,
          signal:
            typeof AbortSignal.any == `function`
              ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal])
              : this._abortController.signal,
        }),
        o = this.mimeType,
        s = this.responseType
      ;(fetch(a)
        .then((t) => {
          if (t.status === 200 || t.status === 0) {
            if (
              (t.status === 0 && O(`FileLoader: HTTP Status 0 received.`),
              typeof ReadableStream > `u` || t.body === void 0 || t.body.getReader === void 0)
            )
              return t
            let n = V[e],
              r = t.body.getReader(),
              i = t.headers.get(`X-File-Size`) || t.headers.get(`Content-Length`),
              a = i ? parseInt(i) : 0,
              o = a !== 0,
              s = 0,
              c = new ReadableStream({
                start(e) {
                  t()
                  function t() {
                    r.read().then(
                      ({ done: r, value: i }) => {
                        if (r) e.close()
                        else {
                          s += i.byteLength
                          let r = new ProgressEvent(`progress`, {
                            lengthComputable: o,
                            loaded: s,
                            total: a,
                          })
                          for (let e = 0, t = n.length; e < t; e++) {
                            let t = n[e]
                            t.onProgress && t.onProgress(r)
                          }
                          ;(e.enqueue(i), t())
                        }
                      },
                      (t) => {
                        e.error(t)
                      }
                    )
                  }
                },
              })
            return new Response(c)
          }
          throw new Wt(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`, t)
        })
        .then((e) => {
          switch (s) {
            case `arraybuffer`:
              return e.arrayBuffer()
            case `blob`:
              return e.blob()
            case `document`:
              return e.text().then((e) => new DOMParser().parseFromString(e, o))
            case `json`:
              return e.json()
            default:
              if (o === ``) return e.text()
              {
                let t = /charset="?([^;"\s]*)"?/i.exec(o),
                  n = t && t[1] ? t[1].toLowerCase() : void 0,
                  r = new TextDecoder(n)
                return e.arrayBuffer().then((e) => r.decode(e))
              }
          }
        })
        .then((t) => {
          z.add(`file:${e}`, t)
          let n = V[e]
          delete V[e]
          for (let e = 0, r = n.length; e < r; e++) {
            let r = n[e]
            r.onLoad && r.onLoad(t)
          }
        })
        .catch((t) => {
          let n = V[e]
          if (n === void 0) throw (this.manager.itemError(e), t)
          delete V[e]
          for (let e = 0, r = n.length; e < r; e++) {
            let r = n[e]
            r.onError && r.onError(t)
          }
          this.manager.itemError(e)
        })
        .finally(() => {
          this.manager.itemEnd(e)
        }),
        this.manager.itemStart(e))
    }
    setResponseType(e) {
      return ((this.responseType = e), this)
    }
    setMimeType(e) {
      return ((this.mimeType = e), this)
    }
    abort() {
      return (this._abortController.abort(), (this._abortController = new AbortController()), this)
    }
  },
  H = new WeakMap(),
  Kt = class extends B {
    constructor(e) {
      super(e)
    }
    load(e, t, n, r) {
      ;(this.path !== void 0 && (e = this.path + e), (e = this.manager.resolveURL(e)))
      let i = this,
        a = z.get(`image:${e}`)
      if (a !== void 0) {
        if (a.complete === !0)
          (i.manager.itemStart(e),
            setTimeout(function () {
              ;(t && t(a), i.manager.itemEnd(e))
            }, 0))
        else {
          let e = H.get(a)
          ;(e === void 0 && ((e = []), H.set(a, e)), e.push({ onLoad: t, onError: r }))
        }
        return a
      }
      let o = qe(`img`)
      function s() {
        ;(l(), t && t(this))
        let n = H.get(this) || []
        for (let e = 0; e < n.length; e++) {
          let t = n[e]
          t.onLoad && t.onLoad(this)
        }
        ;(H.delete(this), i.manager.itemEnd(e))
      }
      function c(t) {
        ;(l(), r && r(t), z.remove(`image:${e}`))
        let n = H.get(this) || []
        for (let e = 0; e < n.length; e++) {
          let r = n[e]
          r.onError && r.onError(t)
        }
        ;(H.delete(this), i.manager.itemError(e), i.manager.itemEnd(e))
      }
      function l() {
        ;(o.removeEventListener(`load`, s, !1), o.removeEventListener(`error`, c, !1))
      }
      return (
        o.addEventListener(`load`, s, !1),
        o.addEventListener(`error`, c, !1),
        e.slice(0, 5) !== `data:` &&
          this.crossOrigin !== void 0 &&
          (o.crossOrigin = this.crossOrigin),
        z.add(`image:${e}`, o),
        i.manager.itemStart(e),
        (o.src = e),
        o
      )
    }
  },
  qt = class extends B {
    constructor(e) {
      super(e)
    }
    load(t, n, r, i) {
      let a = new e(),
        o = new Kt(this.manager)
      return (
        o.setCrossOrigin(this.crossOrigin),
        o.setPath(this.path),
        o.load(
          t,
          function (e) {
            ;((a.image = e), (a.needsUpdate = !0), n !== void 0 && n(a))
          },
          r,
          i
        ),
        a
      )
    }
  },
  U = class extends c {
    constructor(e, t = 1) {
      ;(super(),
        (this.isLight = !0),
        (this.type = `Light`),
        (this.color = new d(e)),
        (this.intensity = t))
    }
    copy(e, t) {
      return (super.copy(e, t), this.color.copy(e.color), (this.intensity = e.intensity), this)
    }
    toJSON(e) {
      let t = super.toJSON(e)
      return ((t.object.color = this.color.getHex()), (t.object.intensity = this.intensity), t)
    }
  },
  Jt = class extends U {
    constructor(e, t, n) {
      ;(super(e, n),
        (this.isHemisphereLight = !0),
        (this.type = `HemisphereLight`),
        this.position.copy(c.DEFAULT_UP),
        this.updateMatrix(),
        (this.groundColor = new d(t)))
    }
    copy(e, t) {
      return (super.copy(e, t), this.groundColor.copy(e.groundColor), this)
    }
    toJSON(e) {
      let t = super.toJSON(e)
      return ((t.object.groundColor = this.groundColor.getHex()), t)
    }
  },
  W = new p(),
  Yt = new E(),
  Xt = new E(),
  Zt = class {
    constructor(e) {
      ;((this.camera = e),
        (this.intensity = 1),
        (this.bias = 0),
        (this.biasNode = null),
        (this.normalBias = 0),
        (this.radius = 1),
        (this.blurSamples = 8),
        (this.mapSize = new w(512, 512)),
        (this.mapType = se),
        (this.map = null),
        (this.mapPass = null),
        (this.matrix = new p()),
        (this.autoUpdate = !0),
        (this.needsUpdate = !1),
        (this._frustum = new Me()),
        (this._frameExtents = new w(1, 1)),
        (this._viewportCount = 1),
        (this._viewports = [new ae(0, 0, 1, 1)]))
    }
    getViewportCount() {
      return this._viewportCount
    }
    getCamera() {
      return this.camera
    }
    getFrustum() {
      return this._frustum
    }
    updateMatrices(e) {
      let t = this.camera
      ;(Yt.setFromMatrixPosition(e.matrixWorld),
        t.position.copy(Yt),
        Xt.setFromMatrixPosition(e.target.matrixWorld),
        t.lookAt(Xt),
        t.updateMatrixWorld(),
        this._updateMatrix(t, this.matrix, this._frustum))
    }
    _updateMatrix(e, t, n, r) {
      ;(W.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        n.setFromProjectionMatrix(W, e.coordinateSystem, e.reversedDepth))
      let i = this._frameExtents,
        a = r ? r.z / i.x : 1,
        o = r ? r.w / i.y : 1,
        s = r ? r.x / i.x : 0,
        c = r ? r.y / i.y : 0
      ;(e.coordinateSystem === 2001 || e.reversedDepth
        ? t.set(0.5 * a, 0, 0, 0.5 * a + s, 0, 0.5 * o, 0, 0.5 * o + c, 0, 0, 1, 0, 0, 0, 0, 1)
        : t.set(0.5 * a, 0, 0, 0.5 * a + s, 0, 0.5 * o, 0, 0.5 * o + c, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
        t.multiply(W))
    }
    getViewport(e) {
      return this._viewports[e]
    }
    getFrameExtents() {
      return this._frameExtents
    }
    dispose() {
      ;(this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose())
    }
    copy(e) {
      return (
        (this.camera = e.camera.clone()),
        (this.intensity = e.intensity),
        (this.bias = e.bias),
        (this.radius = e.radius),
        (this.autoUpdate = e.autoUpdate),
        (this.needsUpdate = e.needsUpdate),
        (this.normalBias = e.normalBias),
        (this.blurSamples = e.blurSamples),
        this.mapSize.copy(e.mapSize),
        (this.biasNode = e.biasNode),
        this
      )
    }
    clone() {
      return new this.constructor().copy(this)
    }
    toJSON() {
      let e = {}
      return (
        (e.intensity = this.intensity),
        (e.bias = this.bias),
        (e.normalBias = this.normalBias),
        (e.radius = this.radius),
        (e.blurSamples = this.blurSamples),
        (e.mapSize = this.mapSize.toArray()),
        (e.camera = this.camera.toJSON(!1).object),
        delete e.camera.matrix,
        e
      )
    }
  },
  G = new E(),
  K = new Ze(),
  q = new E(),
  Qt = class extends c {
    constructor() {
      ;(super(),
        (this.isCamera = !0),
        (this.type = `Camera`),
        (this.matrixWorldInverse = new p()),
        (this.projectionMatrix = new p()),
        (this.projectionMatrixInverse = new p()),
        (this.coordinateSystem = _),
        (this._reversedDepth = !1))
    }
    get reversedDepth() {
      return this._reversedDepth
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        this.matrixWorldInverse.copy(e.matrixWorldInverse),
        this.projectionMatrix.copy(e.projectionMatrix),
        this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
        (this.coordinateSystem = e.coordinateSystem),
        this
      )
    }
    getWorldDirection(e) {
      return super.getWorldDirection(e).negate()
    }
    updateMatrixWorld(e) {
      ;(super.updateMatrixWorld(e),
        this.matrixWorld.decompose(G, K, q),
        q.x === 1 && q.y === 1 && q.z === 1
          ? this.matrixWorldInverse.copy(this.matrixWorld).invert()
          : this.matrixWorldInverse.compose(G, K, q.set(1, 1, 1)).invert())
    }
    updateWorldMatrix(e, t, n = !1) {
      ;(super.updateWorldMatrix(e, t, n),
        this.matrixWorld.decompose(G, K, q),
        q.x === 1 && q.y === 1 && q.z === 1
          ? this.matrixWorldInverse.copy(this.matrixWorld).invert()
          : this.matrixWorldInverse.compose(G, K, q.set(1, 1, 1)).invert())
    }
    clone() {
      return new this.constructor().copy(this)
    }
  },
  J = new E(),
  $t = new w(),
  en = new w(),
  Y = class extends Qt {
    constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
      ;(super(),
        (this.isPerspectiveCamera = !0),
        (this.type = `PerspectiveCamera`),
        (this.fov = e),
        (this.zoom = 1),
        (this.near = n),
        (this.far = r),
        (this.focus = 10),
        (this.aspect = t),
        (this.view = null),
        (this.filmGauge = 35),
        (this.filmOffset = 0),
        this.updateProjectionMatrix())
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.fov = e.fov),
        (this.zoom = e.zoom),
        (this.near = e.near),
        (this.far = e.far),
        (this.focus = e.focus),
        (this.aspect = e.aspect),
        (this.view = e.view === null ? null : Object.assign({}, e.view)),
        (this.filmGauge = e.filmGauge),
        (this.filmOffset = e.filmOffset),
        this
      )
    }
    setFocalLength(e) {
      let t = (0.5 * this.getFilmHeight()) / e
      ;((this.fov = D * 2 * Math.atan(t)), this.updateProjectionMatrix())
    }
    getFocalLength() {
      let e = Math.tan(Ce * 0.5 * this.fov)
      return (0.5 * this.getFilmHeight()) / e
    }
    getEffectiveFOV() {
      return D * 2 * Math.atan(Math.tan(Ce * 0.5 * this.fov) / this.zoom)
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1)
    }
    getViewBounds(e, t, n) {
      ;(J.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
        t.set(J.x, J.y).multiplyScalar(-e / J.z),
        J.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
        n.set(J.x, J.y).multiplyScalar(-e / J.z))
    }
    getViewSize(e, t) {
      return (this.getViewBounds(e, $t, en), t.subVectors(en, $t))
    }
    setViewOffset(e, t, n, r, i, a) {
      ;((this.aspect = e / t),
        this.view === null &&
          (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1,
          }),
        (this.view.enabled = !0),
        (this.view.fullWidth = e),
        (this.view.fullHeight = t),
        (this.view.offsetX = n),
        (this.view.offsetY = r),
        (this.view.width = i),
        (this.view.height = a),
        this.updateProjectionMatrix())
    }
    clearViewOffset() {
      ;(this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix())
    }
    updateProjectionMatrix() {
      let e = this.near,
        t = (e * Math.tan(Ce * 0.5 * this.fov)) / this.zoom,
        n = 2 * t,
        r = this.aspect * n,
        i = -0.5 * r,
        a = this.view
      if (this.view !== null && this.view.enabled) {
        let e = a.fullWidth,
          o = a.fullHeight
        ;((i += (a.offsetX * r) / e),
          (t -= (a.offsetY * n) / o),
          (r *= a.width / e),
          (n *= a.height / o))
      }
      let o = this.filmOffset
      ;(o !== 0 && (i += (e * o) / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(
          i,
          i + r,
          t,
          t - n,
          e,
          this.far,
          this.coordinateSystem,
          this.reversedDepth
        ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert())
    }
    toJSON(e) {
      let t = super.toJSON(e)
      return (
        (t.object.fov = this.fov),
        (t.object.zoom = this.zoom),
        (t.object.near = this.near),
        (t.object.far = this.far),
        (t.object.focus = this.focus),
        (t.object.aspect = this.aspect),
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        (t.object.filmGauge = this.filmGauge),
        (t.object.filmOffset = this.filmOffset),
        t
      )
    }
  },
  tn = class extends Zt {
    constructor() {
      ;(super(new Y(50, 1, 0.5, 500)),
        (this.isSpotLightShadow = !0),
        (this.focus = 1),
        (this.aspect = 1))
    }
    updateMatrices(e) {
      let t = this.camera,
        n = D * 2 * e.angle * this.focus,
        r = (this.mapSize.width / this.mapSize.height) * this.aspect,
        i = e.distance || t.far
      ;((n !== t.fov || r !== t.aspect || i !== t.far) &&
        ((t.fov = n), (t.aspect = r), (t.far = i), t.updateProjectionMatrix()),
        super.updateMatrices(e))
    }
    copy(e) {
      return (super.copy(e), (this.focus = e.focus), (this.aspect = e.aspect), this)
    }
    toJSON() {
      let e = super.toJSON()
      return ((e.focus = this.focus), (e.aspect = this.aspect), e)
    }
  },
  nn = class extends U {
    constructor(e, t, n = 0, r = Math.PI / 3, i = 0, a = 2) {
      ;(super(e, t),
        (this.isSpotLight = !0),
        (this.type = `SpotLight`),
        this.position.copy(c.DEFAULT_UP),
        this.updateMatrix(),
        (this.target = new c()),
        (this.distance = n),
        (this.angle = r),
        (this.penumbra = i),
        (this.decay = a),
        (this.map = null),
        (this.shadow = new tn()))
    }
    get power() {
      return this.intensity * Math.PI
    }
    set power(e) {
      this.intensity = e / Math.PI
    }
    dispose() {
      ;(super.dispose(), this.shadow.dispose())
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.distance = e.distance),
        (this.angle = e.angle),
        (this.penumbra = e.penumbra),
        (this.decay = e.decay),
        (this.target = e.target.clone()),
        (this.map = e.map),
        (this.shadow = e.shadow.clone()),
        this
      )
    }
    toJSON(e) {
      let t = super.toJSON(e)
      return (
        (t.object.distance = this.distance),
        (t.object.angle = this.angle),
        (t.object.decay = this.decay),
        (t.object.penumbra = this.penumbra),
        (t.object.target = this.target.uuid),
        this.map && this.map.isTexture && (t.object.map = this.map.toJSON(e).uuid),
        (t.object.shadow = this.shadow.toJSON()),
        t
      )
    }
  },
  rn = class extends Zt {
    constructor() {
      ;(super(new Y(90, 1, 0.5, 500)), (this.isPointLightShadow = !0))
    }
  },
  an = class extends U {
    constructor(e, t, n = 0, r = 2) {
      ;(super(e, t),
        (this.isPointLight = !0),
        (this.type = `PointLight`),
        (this.distance = n),
        (this.decay = r),
        (this.shadow = new rn()))
    }
    get power() {
      return this.intensity * 4 * Math.PI
    }
    set power(e) {
      this.intensity = e / (4 * Math.PI)
    }
    dispose() {
      ;(super.dispose(), this.shadow.dispose())
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.distance = e.distance),
        (this.decay = e.decay),
        (this.shadow = e.shadow.clone()),
        this
      )
    }
    toJSON(e) {
      let t = super.toJSON(e)
      return (
        (t.object.distance = this.distance),
        (t.object.decay = this.decay),
        (t.object.shadow = this.shadow.toJSON()),
        t
      )
    }
  },
  on = class extends Qt {
    constructor(e = -1, t = 1, n = 1, r = -1, i = 0.1, a = 2e3) {
      ;(super(),
        (this.isOrthographicCamera = !0),
        (this.type = `OrthographicCamera`),
        (this.zoom = 1),
        (this.view = null),
        (this.left = e),
        (this.right = t),
        (this.top = n),
        (this.bottom = r),
        (this.near = i),
        (this.far = a),
        this.updateProjectionMatrix())
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.left = e.left),
        (this.right = e.right),
        (this.top = e.top),
        (this.bottom = e.bottom),
        (this.near = e.near),
        (this.far = e.far),
        (this.zoom = e.zoom),
        (this.view = e.view === null ? null : Object.assign({}, e.view)),
        this
      )
    }
    setViewOffset(e, t, n, r, i, a) {
      ;(this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
        (this.view.enabled = !0),
        (this.view.fullWidth = e),
        (this.view.fullHeight = t),
        (this.view.offsetX = n),
        (this.view.offsetY = r),
        (this.view.width = i),
        (this.view.height = a),
        this.updateProjectionMatrix())
    }
    clearViewOffset() {
      ;(this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix())
    }
    updateProjectionMatrix() {
      let e = (this.right - this.left) / (2 * this.zoom),
        t = (this.top - this.bottom) / (2 * this.zoom),
        n = (this.right + this.left) / 2,
        r = (this.top + this.bottom) / 2,
        i = n - e,
        a = n + e,
        o = r + t,
        s = r - t
      if (this.view !== null && this.view.enabled) {
        let e = (this.right - this.left) / this.view.fullWidth / this.zoom,
          t = (this.top - this.bottom) / this.view.fullHeight / this.zoom
        ;((i += e * this.view.offsetX),
          (a = i + e * this.view.width),
          (o -= t * this.view.offsetY),
          (s = o - t * this.view.height))
      }
      ;(this.projectionMatrix.makeOrthographic(
        i,
        a,
        o,
        s,
        this.near,
        this.far,
        this.coordinateSystem,
        this.reversedDepth
      ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert())
    }
    toJSON(e) {
      let t = super.toJSON(e)
      return (
        (t.object.zoom = this.zoom),
        (t.object.left = this.left),
        (t.object.right = this.right),
        (t.object.top = this.top),
        (t.object.bottom = this.bottom),
        (t.object.near = this.near),
        (t.object.far = this.far),
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t
      )
    }
  },
  sn = class extends Zt {
    constructor() {
      ;(super(new on(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0))
    }
  },
  cn = class extends U {
    constructor(e, t) {
      ;(super(e, t),
        (this.isDirectionalLight = !0),
        (this.type = `DirectionalLight`),
        this.position.copy(c.DEFAULT_UP),
        this.updateMatrix(),
        (this.target = new c()),
        (this.shadow = new sn()))
    }
    dispose() {
      ;(super.dispose(), this.shadow.dispose())
    }
    copy(e) {
      return (
        super.copy(e),
        (this.target = e.target.clone()),
        (this.shadow = e.shadow.clone()),
        this
      )
    }
    toJSON(e) {
      let t = super.toJSON(e)
      return ((t.object.shadow = this.shadow.toJSON()), (t.object.target = this.target.uuid), t)
    }
  },
  ln = class {
    static extractUrlBase(e) {
      let t = e.lastIndexOf(`/`)
      return t === -1 ? `./` : e.slice(0, t + 1)
    }
    static resolveURL(e, t) {
      return typeof e != `string` || e === ``
        ? ``
        : (/^https?:\/\//i.test(t) &&
            /^\//.test(e) &&
            (t = t.replace(/(^https?:\/\/[^\/]+).*/i, `$1`)),
          /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e)
    }
  },
  un = class extends b {
    constructor() {
      ;(super(),
        (this.isInstancedBufferGeometry = !0),
        (this.type = `InstancedBufferGeometry`),
        (this.instanceCount = 1 / 0))
    }
    copy(e) {
      return (super.copy(e), (this.instanceCount = e.instanceCount), this)
    }
    toJSON() {
      let e = super.toJSON()
      return ((e.instanceCount = this.instanceCount), (e.isInstancedBufferGeometry = !0), e)
    }
  },
  X = new WeakMap(),
  dn = class extends B {
    constructor(e) {
      ;(super(e),
        (this.isImageBitmapLoader = !0),
        typeof createImageBitmap > `u` &&
          O(`ImageBitmapLoader: createImageBitmap() not supported.`),
        typeof fetch > `u` && O(`ImageBitmapLoader: fetch() not supported.`),
        (this.options = { premultiplyAlpha: `none` }),
        (this._abortController = new AbortController()))
    }
    setOptions(e) {
      return ((this.options = e), this)
    }
    load(e, t, n, r) {
      ;(e === void 0 && (e = ``),
        this.path !== void 0 && (e = this.path + e),
        (e = this.manager.resolveURL(e)))
      let i = this,
        a = z.get(`image-bitmap:${e}`)
      if (a !== void 0) {
        if ((i.manager.itemStart(e), a.then)) {
          a.then((n) => {
            X.has(a) === !0
              ? (r && r(X.get(a)), i.manager.itemError(e), i.manager.itemEnd(e))
              : (t && t(n), i.manager.itemEnd(e))
          })
          return
        }
        setTimeout(function () {
          ;(t && t(a), i.manager.itemEnd(e))
        }, 0)
        return
      }
      let o = {}
      ;((o.credentials = this.crossOrigin === `anonymous` ? `same-origin` : `include`),
        (o.headers = this.requestHeader),
        (o.signal =
          typeof AbortSignal.any == `function`
            ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal])
            : this._abortController.signal))
      let s = fetch(e, o)
        .then(function (e) {
          return e.blob()
        })
        .then(function (e) {
          return createImageBitmap(
            e,
            Object.assign({}, i.options, { colorSpaceConversion: `none` })
          )
        })
        .then(function (n) {
          return (z.add(`image-bitmap:${e}`, n), t && t(n), i.manager.itemEnd(e), n)
        })
        .catch(function (t) {
          ;(r && r(t),
            X.set(s, t),
            z.remove(`image-bitmap:${e}`),
            i.manager.itemError(e),
            i.manager.itemEnd(e))
        })
      ;(z.add(`image-bitmap:${e}`, s), i.manager.itemStart(e))
    }
    abort() {
      return (this._abortController.abort(), (this._abortController = new AbortController()), this)
    }
  },
  Z = -90,
  Q = 1,
  fn = class extends c {
    constructor(e, t, n) {
      ;(super(),
        (this.type = `CubeCamera`),
        (this.renderTarget = n),
        (this.coordinateSystem = null),
        (this.activeMipmapLevel = 0))
      let r = new Y(Z, Q, e, t)
      ;((r.layers = this.layers), this.add(r))
      let i = new Y(Z, Q, e, t)
      ;((i.layers = this.layers), this.add(i))
      let a = new Y(Z, Q, e, t)
      ;((a.layers = this.layers), this.add(a))
      let o = new Y(Z, Q, e, t)
      ;((o.layers = this.layers), this.add(o))
      let s = new Y(Z, Q, e, t)
      ;((s.layers = this.layers), this.add(s))
      let c = new Y(Z, Q, e, t)
      ;((c.layers = this.layers), this.add(c))
    }
    updateCoordinateSystem() {
      let e = this.coordinateSystem,
        t = this.children.concat(),
        [n, r, i, a, o, s] = t
      for (let e of t) this.remove(e)
      if (e === 2e3)
        (n.up.set(0, 1, 0),
          n.lookAt(1, 0, 0),
          r.up.set(0, 1, 0),
          r.lookAt(-1, 0, 0),
          i.up.set(0, 0, -1),
          i.lookAt(0, 1, 0),
          a.up.set(0, 0, 1),
          a.lookAt(0, -1, 0),
          o.up.set(0, 1, 0),
          o.lookAt(0, 0, 1),
          s.up.set(0, 1, 0),
          s.lookAt(0, 0, -1))
      else if (e === 2001)
        (n.up.set(0, -1, 0),
          n.lookAt(-1, 0, 0),
          r.up.set(0, -1, 0),
          r.lookAt(1, 0, 0),
          i.up.set(0, 0, 1),
          i.lookAt(0, 1, 0),
          a.up.set(0, 0, -1),
          a.lookAt(0, -1, 0),
          o.up.set(0, -1, 0),
          o.lookAt(0, 0, 1),
          s.up.set(0, -1, 0),
          s.lookAt(0, 0, -1))
      else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: ` + e)
      for (let e of t) (this.add(e), e.updateMatrixWorld())
    }
    update(e, t) {
      this.parent === null && this.updateMatrixWorld()
      let { renderTarget: n, activeMipmapLevel: r } = this
      this.coordinateSystem !== e.coordinateSystem &&
        ((this.coordinateSystem = e.coordinateSystem), this.updateCoordinateSystem())
      let [i, a, o, s, c, l] = this.children,
        u = e.getRenderTarget(),
        d = e.getActiveCubeFace(),
        f = e.getActiveMipmapLevel(),
        p = e.xr.enabled
      e.xr.enabled = !1
      let m = n.texture.generateMipmaps
      n.texture.generateMipmaps = !1
      let h = !1
      ;((h =
        e.isWebGLRenderer === !0 ? e.state.buffers.depth.getReversed() : e.reversedDepthBuffer),
        e.setRenderTarget(n, 0, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, i),
        e.setRenderTarget(n, 1, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, a),
        e.setRenderTarget(n, 2, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, o),
        e.setRenderTarget(n, 3, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, s),
        e.setRenderTarget(n, 4, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, c),
        (n.texture.generateMipmaps = m),
        e.setRenderTarget(n, 5, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, l),
        e.setRenderTarget(u, d, f),
        (e.xr.enabled = p),
        (n.texture.needsPMREMUpdate = !0))
    }
  },
  pn = class extends Y {
    constructor(e = []) {
      ;(super(), (this.isArrayCamera = !0), (this.isMultiViewCamera = !1), (this.cameras = e))
    }
  },
  mn = `\\[\\]\\.:\\/`,
  hn = RegExp(`[\\[\\]\\.:\\/]`, `g`),
  gn = `[^\\[\\]\\.:\\/]`,
  _n = `[^` + mn.replace(`\\.`, ``) + `]`,
  vn = `((?:WC+[\\/:])*)`.replace(`WC`, gn),
  yn = `(WCOD+)?`.replace(`WCOD`, _n),
  bn = `(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`, gn),
  xn = `\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`, gn),
  Sn = RegExp(`^` + vn + yn + bn + xn + `$`),
  Cn = [`material`, `materials`, `bones`, `map`],
  wn = class {
    constructor(e, t, n) {
      let r = n || $.parseTrackName(t)
      ;((this._targetGroup = e), (this._bindings = e.subscribe_(t, r)))
    }
    getValue(e, t) {
      this.bind()
      let n = this._targetGroup.nCachedObjects_,
        r = this._bindings[n]
      r !== void 0 && r.getValue(e, t)
    }
    setValue(e, t) {
      let n = this._bindings
      for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r)
        n[r].setValue(e, t)
    }
    bind() {
      let e = this._bindings
      for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind()
    }
    unbind() {
      let e = this._bindings
      for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind()
    }
  },
  $ = class e {
    constructor(t, n, r) {
      ;((this.path = n),
        (this.parsedPath = r || e.parseTrackName(n)),
        (this.node = e.findNode(t, this.parsedPath.nodeName)),
        (this.rootNode = t),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound))
    }
    static create(t, n, r) {
      return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r)
    }
    static sanitizeNodeName(e) {
      return e.replace(/\s/g, `_`).replace(hn, ``)
    }
    static parseTrackName(e) {
      let t = Sn.exec(e)
      if (t === null) throw Error(`THREE.PropertyBinding: Cannot parse trackName: ` + e)
      let n = {
          nodeName: t[2],
          objectName: t[3],
          objectIndex: t[4],
          propertyName: t[5],
          propertyIndex: t[6],
        },
        r = n.nodeName && n.nodeName.lastIndexOf(`.`)
      if (r !== void 0 && r !== -1) {
        let e = n.nodeName.substring(r + 1)
        Cn.indexOf(e) !== -1 && ((n.nodeName = n.nodeName.substring(0, r)), (n.objectName = e))
      }
      if (n.propertyName === null || n.propertyName.length === 0)
        throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: ` + e)
      return n
    }
    static findNode(e, t) {
      if (t === void 0 || t === `` || t === `.` || t === -1 || t === e.name || t === e.uuid)
        return e
      if (e.skeleton) {
        let n = e.skeleton.getBoneByName(t)
        if (n !== void 0) return n
      }
      if (e.children) {
        let n = function (e) {
            for (let r = 0; r < e.length; r++) {
              let i = e[r]
              if (i.name === t || i.uuid === t) return i
              let a = n(i.children)
              if (a) return a
            }
            return null
          },
          r = n(e.children)
        if (r) return r
      }
      return null
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
      e[t] = this.targetObject[this.propertyName]
    }
    _getValue_array(e, t) {
      let n = this.resolvedProperty
      for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r]
    }
    _getValue_arrayElement(e, t) {
      e[t] = this.resolvedProperty[this.propertyIndex]
    }
    _getValue_toArray(e, t) {
      this.resolvedProperty.toArray(e, t)
    }
    _setValue_direct(e, t) {
      this.targetObject[this.propertyName] = e[t]
    }
    _setValue_direct_setNeedsUpdate(e, t) {
      ;((this.targetObject[this.propertyName] = e[t]), (this.targetObject.needsUpdate = !0))
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
      ;((this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0))
    }
    _setValue_array(e, t) {
      let n = this.resolvedProperty
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++]
    }
    _setValue_array_setNeedsUpdate(e, t) {
      let n = this.resolvedProperty
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++]
      this.targetObject.needsUpdate = !0
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
      let n = this.resolvedProperty
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++]
      this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_arrayElement(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t]
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
      ;((this.resolvedProperty[this.propertyIndex] = e[t]), (this.targetObject.needsUpdate = !0))
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
      ;((this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0))
    }
    _setValue_fromArray(e, t) {
      this.resolvedProperty.fromArray(e, t)
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
      ;(this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0))
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
      ;(this.resolvedProperty.fromArray(e, t), (this.targetObject.matrixWorldNeedsUpdate = !0))
    }
    _getValue_unbound(e, t) {
      ;(this.bind(), this.getValue(e, t))
    }
    _setValue_unbound(e, t) {
      ;(this.bind(), this.setValue(e, t))
    }
    bind() {
      let t = this.node,
        n = this.parsedPath,
        r = n.objectName,
        i = n.propertyName,
        a = n.propertyIndex
      if (
        (t || ((t = e.findNode(this.rootNode, n.nodeName)), (this.node = t)),
        (this.getValue = this._getValue_unavailable),
        (this.setValue = this._setValue_unavailable),
        !t)
      ) {
        O(`PropertyBinding: No target node found for track: ` + this.path + `.`)
        return
      }
      if (r) {
        let e = n.objectIndex
        switch (r) {
          case `materials`:
            if (!t.material) {
              T(`PropertyBinding: Can not bind to material as node does not have a material.`, this)
              return
            }
            if (!t.material.materials) {
              T(
                `PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,
                this
              )
              return
            }
            t = t.material.materials
            break
          case `bones`:
            if (!t.skeleton) {
              T(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`, this)
              return
            }
            t = t.skeleton.bones
            for (let n = 0; n < t.length; n++)
              if (t[n].name === e) {
                e = n
                break
              }
            break
          case `map`:
            if (`map` in t) {
              t = t.map
              break
            }
            if (!t.material) {
              T(`PropertyBinding: Can not bind to material as node does not have a material.`, this)
              return
            }
            if (!t.material.map) {
              T(
                `PropertyBinding: Can not bind to material.map as node.material does not have a map.`,
                this
              )
              return
            }
            t = t.material.map
            break
          default:
            if (t[r] === void 0) {
              T(`PropertyBinding: Can not bind to objectName of node undefined.`, this)
              return
            }
            t = t[r]
        }
        if (e !== void 0) {
          if (t[e] === void 0) {
            T(
              `PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,
              this,
              t
            )
            return
          }
          t = t[e]
        }
      }
      let o = t[i]
      if (o === void 0) {
        let e = n.nodeName
        T(
          `PropertyBinding: Trying to update property for track: ` +
            e +
            `.` +
            i +
            ` but it wasn't found.`,
          t
        )
        return
      }
      let s = this.Versioning.None
      ;((this.targetObject = t),
        t.isMaterial === !0
          ? (s = this.Versioning.NeedsUpdate)
          : t.isObject3D === !0 && (s = this.Versioning.MatrixWorldNeedsUpdate))
      let c = this.BindingType.Direct
      if (a !== void 0) {
        if (i === `morphTargetInfluences`) {
          if (!t.geometry) {
            T(
              `PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,
              this
            )
            return
          }
          if (!t.geometry.morphAttributes) {
            T(
              `PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,
              this
            )
            return
          }
          t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a])
        }
        ;((c = this.BindingType.ArrayElement),
          (this.resolvedProperty = o),
          (this.propertyIndex = a))
      } else
        o.fromArray !== void 0 && o.toArray !== void 0
          ? ((c = this.BindingType.HasFromToArray), (this.resolvedProperty = o))
          : Array.isArray(o)
            ? ((c = this.BindingType.EntireArray), (this.resolvedProperty = o))
            : (this.propertyName = i)
      ;((this.getValue = this.GetterByBindingType[c]),
        (this.setValue = this.SetterByBindingTypeAndVersioning[c][s]))
    }
    unbind() {
      ;((this.node = null),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound))
    }
  }
;(($.Composite = wn),
  ($.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }),
  ($.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }),
  ($.prototype.GetterByBindingType = [
    $.prototype._getValue_direct,
    $.prototype._getValue_array,
    $.prototype._getValue_arrayElement,
    $.prototype._getValue_toArray,
  ]),
  ($.prototype.SetterByBindingTypeAndVersioning = [
    [
      $.prototype._setValue_direct,
      $.prototype._setValue_direct_setNeedsUpdate,
      $.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      $.prototype._setValue_array,
      $.prototype._setValue_array_setNeedsUpdate,
      $.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      $.prototype._setValue_arrayElement,
      $.prototype._setValue_arrayElement_setNeedsUpdate,
      $.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      $.prototype._setValue_fromArray,
      $.prototype._setValue_fromArray_setNeedsUpdate,
      $.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
    ],
  ]))
var Tn = class e {
    constructor(e) {
      this.value = e
    }
    clone() {
      return new e(this.value.clone === void 0 ? this.value : this.value.clone())
    }
  },
  En = new p(),
  Dn = class {
    constructor(e, t, n = 0, r = 1 / 0) {
      ;((this.ray = new ue(e, t)),
        (this.near = n),
        (this.far = r),
        (this.camera = null),
        (this.layers = new g()),
        (this.params = {
          Mesh: {},
          Line: { threshold: 1 },
          LOD: {},
          Points: { threshold: 1 },
          Sprite: {},
        }))
    }
    set(e, t) {
      this.ray.set(e, t)
    }
    setFromCamera(e, t) {
      t.isPerspectiveCamera
        ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
          this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(),
          (this.camera = t))
        : t.isOrthographicCamera
          ? (this.ray.origin.set(e.x, e.y, t.projectionMatrix.elements[14]).unproject(t),
            this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
            (this.camera = t))
          : T(`Raycaster: Unsupported camera type: ` + t.type)
    }
    setFromXRController(e) {
      return (
        En.identity().extractRotation(e.matrixWorld),
        this.ray.origin.setFromMatrixPosition(e.matrixWorld),
        this.ray.direction.set(0, 0, -1).applyMatrix4(En),
        this
      )
    }
    intersectObject(e, t = !0, n = []) {
      return (kn(e, this, n, t), n.sort(On), n)
    }
    intersectObjects(e, t = !0, n = []) {
      for (let r = 0, i = e.length; r < i; r++) kn(e[r], this, n, t)
      return (n.sort(On), n)
    }
  }
function On(e, t) {
  return e.distance - t.distance
}
function kn(e, t, n, r) {
  let i = !0
  if ((e.layers.test(t.layers) && e.raycast(t, n) === !1 && (i = !1), i === !0 && r === !0)) {
    let r = e.children
    for (let e = 0, i = r.length; e < i; e++) kn(r[e], t, n, !0)
  }
}
function An(e, n, a, s) {
  let c = jn(s)
  switch (a) {
    case Te:
      return e * n
    case ne:
      return ((e * n) / c.components) * c.byteLength
    case ze:
      return ((e * n) / c.components) * c.byteLength
    case o:
      return ((e * n * 2) / c.components) * c.byteLength
    case i:
      return ((e * n * 2) / c.components) * c.byteLength
    case nt:
      return ((e * n * 3) / c.components) * c.byteLength
    case ye:
      return ((e * n * 4) / c.components) * c.byteLength
    case _e:
      return ((e * n * 4) / c.components) * c.byteLength
    case de:
    case Pe:
      return Math.floor((e + 3) / 4) * Math.floor((n + 3) / 4) * 8
    case Ne:
    case xe:
      return Math.floor((e + 3) / 4) * Math.floor((n + 3) / 4) * 16
    case r:
    case Ke:
      return (Math.max(e, 16) * Math.max(n, 8)) / 4
    case rt:
    case Ue:
      return (Math.max(e, 8) * Math.max(n, 8)) / 2
    case it:
    case ce:
    case u:
    case Le:
      return Math.floor((e + 3) / 4) * Math.floor((n + 3) / 4) * 8
    case je:
    case h:
    case re:
      return Math.floor((e + 3) / 4) * Math.floor((n + 3) / 4) * 16
    case Xe:
      return Math.floor((e + 3) / 4) * Math.floor((n + 3) / 4) * 16
    case Ie:
      return Math.floor((e + 4) / 5) * Math.floor((n + 3) / 4) * 16
    case Se:
      return Math.floor((e + 4) / 5) * Math.floor((n + 4) / 5) * 16
    case Ge:
      return Math.floor((e + 5) / 6) * Math.floor((n + 4) / 5) * 16
    case Qe:
      return Math.floor((e + 5) / 6) * Math.floor((n + 5) / 6) * 16
    case Ee:
      return Math.floor((e + 7) / 8) * Math.floor((n + 4) / 5) * 16
    case Ve:
      return Math.floor((e + 7) / 8) * Math.floor((n + 5) / 6) * 16
    case tt:
      return Math.floor((e + 7) / 8) * Math.floor((n + 7) / 8) * 16
    case oe:
      return Math.floor((e + 9) / 10) * Math.floor((n + 4) / 5) * 16
    case t:
      return Math.floor((e + 9) / 10) * Math.floor((n + 5) / 6) * 16
    case ke:
      return Math.floor((e + 9) / 10) * Math.floor((n + 7) / 8) * 16
    case be:
      return Math.floor((e + 9) / 10) * Math.floor((n + 9) / 10) * 16
    case $e:
      return Math.floor((e + 11) / 12) * Math.floor((n + 9) / 10) * 16
    case We:
      return Math.floor((e + 11) / 12) * Math.floor((n + 11) / 12) * 16
    case Oe:
    case ot:
    case we:
      return Math.ceil(e / 4) * Math.ceil(n / 4) * 16
    case Ye:
    case ee:
      return Math.ceil(e / 4) * Math.ceil(n / 4) * 8
    case v:
    case x:
      return Math.ceil(e / 4) * Math.ceil(n / 4) * 16
  }
  throw Error(`Unable to determine texture byte length for ${a} format.`)
}
function jn(e) {
  switch (e) {
    case se:
    case le:
      return { byteLength: 1, components: 1 }
    case l:
    case y:
    case Be:
      return { byteLength: 2, components: 1 }
    case fe:
    case me:
      return { byteLength: 2, components: 4 }
    case f:
    case n:
    case a:
      return { byteLength: 4, components: 1 }
    case pe:
    case st:
      return { byteLength: 4, components: 3 }
  }
  throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)
}
function Mn() {
  let e = null,
    t = !1,
    n = null,
    r = null
  function i(t, a) {
    ;((r = e.requestAnimationFrame(i)), n(t, a))
  }
  return {
    start: function () {
      t !== !0 && n !== null && e !== null && ((r = e.requestAnimationFrame(i)), (t = !0))
    },
    stop: function () {
      ;(e !== null && e.cancelAnimationFrame(r), (t = !1))
    },
    setAnimationLoop: function (e) {
      n = e
    },
    setContext: function (t) {
      e = t
    },
  }
}
function Nn(e) {
  let t = new WeakMap()
  function n(t, n) {
    let r = t.array,
      i = t.usage,
      a = r.byteLength,
      o = e.createBuffer()
    ;(e.bindBuffer(n, o), e.bufferData(n, r, i), t.onUploadCallback())
    let s
    if (r instanceof Float32Array) s = e.FLOAT
    else if (typeof Float16Array < `u` && r instanceof Float16Array) s = e.HALF_FLOAT
    else if (r instanceof Uint16Array)
      s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT
    else if (r instanceof Int16Array) s = e.SHORT
    else if (r instanceof Uint32Array) s = e.UNSIGNED_INT
    else if (r instanceof Int32Array) s = e.INT
    else if (r instanceof Int8Array) s = e.BYTE
    else if (r instanceof Uint8Array) s = e.UNSIGNED_BYTE
    else if (r instanceof Uint8ClampedArray) s = e.UNSIGNED_BYTE
    else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: ` + r)
    return { buffer: o, type: s, bytesPerElement: r.BYTES_PER_ELEMENT, version: t.version, size: a }
  }
  function r(t, n, r) {
    let i = n.array,
      a = n.updateRanges
    if ((e.bindBuffer(r, t), a.length === 0)) e.bufferSubData(r, 0, i)
    else {
      a.sort((e, t) => e.start - t.start)
      let t = 0
      for (let e = 1; e < a.length; e++) {
        let n = a[t],
          r = a[e]
        r.start <= n.start + n.count + 1
          ? (n.count = Math.max(n.count, r.start + r.count - n.start))
          : (++t, (a[t] = r))
      }
      a.length = t + 1
      for (let t = 0, n = a.length; t < n; t++) {
        let n = a[t]
        e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count)
      }
      n.clearUpdateRanges()
    }
    n.onUploadCallback()
  }
  function i(e) {
    return (e.isInterleavedBufferAttribute && (e = e.data), t.get(e))
  }
  function a(n) {
    n.isInterleavedBufferAttribute && (n = n.data)
    let r = t.get(n)
    r && (e.deleteBuffer(r.buffer), t.delete(n))
  }
  function o(e, i) {
    if ((e.isInterleavedBufferAttribute && (e = e.data), e.isGLBufferAttribute)) {
      let n = t.get(e)
      ;(!n || n.version < e.version) &&
        t.set(e, {
          buffer: e.buffer,
          type: e.type,
          bytesPerElement: e.elementSize,
          version: e.version,
        })
      return
    }
    let a = t.get(e)
    if (a === void 0) t.set(e, n(e, i))
    else if (a.version < e.version) {
      if (a.size !== e.array.byteLength)
        throw Error(
          `THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`
        )
      ;(r(a.buffer, e, i), (a.version = e.version))
    }
  }
  return { get: i, remove: a, update: o }
}
var Pn = `
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`,
  Fn = `
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (ατ)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids ατ == 0. Could also do ατ =1-ατ
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`,
  In = `
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,
  Ln = `
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,
  Rn = `
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`,
  zn = `
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,
  Bn = `
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,
  Vn = `
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,
  Hn = `
#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif

	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {

		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );

	}

	float getIndirectIndex( const in int i ) {

		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );

	}

#endif

#ifdef USE_BATCHING_COLOR

	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {

		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );

	}

#endif
`,
  Un = `
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`,
  Wn = `
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`,
  Gn = `
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,
  Kn = `

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`,
  qn = `

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`,
  Jn = `
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,
  Yn = `
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#ifdef ALPHA_TO_COVERAGE

		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			if ( clipOpacity == 0.0 ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			float unionClipOpacity = 1.0;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			}
			#pragma unroll_loop_end

			clipOpacity *= 1.0 - unionClipOpacity;

		#endif

		diffuseColor.a *= clipOpacity;

		if ( diffuseColor.a == 0.0 ) discard;

	#else

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			bool clipped = true;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

			}
			#pragma unroll_loop_end

			if ( clipped ) discard;

		#endif

	#endif

#endif
`,
  Xn = `
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,
  Zn = `
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,
  Qn = `
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,
  $n = `
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`,
  er = `
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`,
  tr = `
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`,
  nr = `
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	vColor = vec4( 1.0 );

#endif

#ifdef USE_COLOR_ALPHA

	vColor *= color;

#elif defined( USE_COLOR )

	vColor.rgb *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.rgb *= instanceColor.rgb;

#endif

#ifdef USE_BATCHING_COLOR

	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );

#endif
`,
  rr = `
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

#ifdef USE_ALPHAHASH

	varying vec3 vPosition;

#endif

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

#define inverseTransformDirection transformDirectionByInverseViewMatrix // @deprecated r185

vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {

	// upper-left 3x3 of view matrix is assumed to be orthogonal

	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );

}

vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {

	// upper-left 3x3 of view matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`,
  ir = `
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`,
  ar = `

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// non-uniform scaling in the instance matrix is supported
	// shear transforms are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// non-uniform scaling in the instance matrix is supported
	// shear transforms are not supported

	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = im * transformedTangent;

	#endif

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;

#endif
`,
  or = `
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,
  sr = `
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,
  cr = `
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,
  lr = `
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,
  ur = `
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,
  dr = `

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,
  fr = `
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );

		#ifdef ENVMAP_BLENDING_MULTIPLY

			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

		#elif defined( ENVMAP_BLENDING_MIX )

			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

		#elif defined( ENVMAP_BLENDING_ADD )

			outgoingLight += envColor.xyz * specularStrength * reflectivity;

		#endif

	#endif

#endif
`,
  pr = `
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform mat3 envMapRotation;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif
`,
  mr = `
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,
  hr = `
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,
  gr = `
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,
  _r = `
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,
  vr = `
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,
  yr = `
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,
  br = `
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,
  xr = `

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`,
  Sr = `
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,
  Cr = `
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,
  wr = `
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,
  Tr = `
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if ( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_SUN_LIGHTS > 0

	struct SunLight {
		vec3 direction;
		vec3 color;
	};

	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];

	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {

		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;

	}

#endif


#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif

#include <lightprobes_pars_fragment>
`,
  Er = `
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );

			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_RETROREFLECTION

		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

				// The retroreflective lobe returns light toward its source, so the environment is sampled along the view direction
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );

				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );

				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );

				return envMapColor.rgb * envMapIntensity;

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

		#ifdef USE_RETROREFLECTION

			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

				#ifdef ENVMAP_TYPE_CUBE_UV

				  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

					return getIBLRetroRadiance( viewDir, bentNormal, roughness );

				#else

					return vec3( 0.0 );

				#endif

			}

		#endif

	#endif

#endif
`,
  Dr = `
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,
  Or = `
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`,
  kr = `
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,
  Ar = `
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,
  jr = `
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef USE_SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULAR_COLORMAP

			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;

		#endif

		#ifdef USE_SPECULAR_INTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_DISPERSION

	material.dispersion = dispersion;

#endif

#ifdef USE_RETROREFLECTION

	material.retroreflectivity = retroreflectivity;

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEEN_COLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );

	#ifdef USE_SHEEN_ROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;

	#endif

#endif

#ifdef USE_ANISOTROPY

	#ifdef USE_ANISOTROPYMAP

		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;

	#else

		vec2 anisotropyV = anisotropyVector;

	#endif

	material.anisotropy = length( anisotropyV );

	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`,
  Mr = `

uniform sampler2D dfgLUT;

struct PhysicalMaterial {

	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;

	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;

	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif

};

// temporary
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );

	}

	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {

		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;

		return RECIPROCAL_PI * a2 * pow2 ( w2 );

	}

#endif

#ifdef USE_CLEARCOAT

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = F_Schlick( f0, f90, dotVH );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {

	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	#ifdef USE_IRIDESCENCE

		F = mix( F, material.iridescenceFresnel, material.iridescence );

	#endif

	#ifdef USE_ANISOTROPY

		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );

		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );

		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );

	#else

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

	#endif

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see reference)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif

// This is a curve-fit approximation to the "Charlie sheen" BRDF integrated over the hemisphere from
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF".
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );

	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;

	float DG = exp( a * dotNV + b );

	return saturate( DG );

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

		#ifdef USE_CLEARCOAT

			vec3 Ncc = geometryClearcoatNormal;

			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );

			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );

			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);

			// LTC Fresnel Approximation for clearcoat
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;

			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );

		#endif

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );

	#endif

	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif

	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );

	#ifdef USE_RETROREFLECTION

		// Minimal Retroreflective Microfacet Model:
		// https://jcgt.org/published/0015/01/04/
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );

		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );

	#endif

	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;

	// Light reflected by the specular interface is not available to the diffuse layer ( glTF fresnel_mix )
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );

	#ifdef USE_RETROREFLECTION

		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );

		F = mix( F, retroF, saturate( material.retroreflectivity ) );

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	// Energy reflected by the specular lobe is not available to the diffuse layer
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );

	#else

		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );

	#endif

	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );

	#ifdef USE_SHEEN

		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;

		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;

		diffuse *= sheenEnergyComp;

	#endif

	reflectedLight.indirectDiffuse += diffuse;

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;

 	#endif

	// Both indirect specular and indirect diffuse light accumulate here
	// Compute multiscattering separately for dielectric and metallic, then mix

	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );

	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );

	#else

		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );

	#endif

	// Mix based on metalness
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );

	// Diffuse energy conservation uses dielectric path
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );

	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;

	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;

	#ifdef USE_SHEEN

		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;

		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;

	#endif

	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,
  Nr = `
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometryViewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );

		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );

		// Iridescence F0 approximation
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );

	}

#endif

#ifdef STANDARD

	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );

	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;

	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )

		// Multi-scattering energy compensation for direct lighting
		// Based on "Practical Multiple Scattering Compensation for Microfacet Models"
		// https://blog.selfshadow.com/publications/turquin/ms_comp_final.pdf

		// Energy of the single-scattering lobe in a white furnace ( F0 = F90 = 1 )
		float EssMs = material.dfg.x + material.dfg.y;

		// Compensate for the energy lost to multiple scattering, tinting the added term by F0 ( equation 16 )
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );

	#endif

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )

	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {

		sunLight = sunLights[ i ];

		getSunLightInfo( sunLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

	#ifdef USE_LIGHT_PROBES_GRID

		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,
  Pr = `
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )

		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )

			iblIrradiance += getIBLIrradiance( geometryNormal );

		#endif

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	#ifdef USE_ANISOTROPY

		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

	#else

		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );

	#endif

	#ifdef USE_RETROREFLECTION

		#ifdef USE_ANISOTROPY

			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

		#else

			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );

		#endif

		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );

	#endif

	radiance += iblRadiance;

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,
  Fr = `
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`,
  Ir = `
#ifdef USE_LIGHT_PROBES_GRID

// Single atlas 3D texture that stores all 7 SH sub-volumes stacked along Z.
// Atlas depth = 7 * ( nz + 2 ) where nz = probesResolution.z.
// Each sub-volume occupies ( nz + 2 ) slices: 1 padding + nz data + 1 padding.
// Padding is a copy of the first / last data slice and prevents color bleeding
// when the hardware linear filter reads across a sub-volume boundary.
uniform highp sampler3D probesSH;

uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;

vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {

	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;

	// Offset sample position along normal by half a probe spacing
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );

	// Remap to texel centers of the probe grid (XY and Z)
	uvw = uvw * resMinusOne / res + 0.5 / res;

	// Atlas UV mapping along Z:
	//   paddedSlices = nz + 2  (1 padding texel at each end of every sub-volume)
	//   atlasDepth   = 7 * paddedSlices
	//   For sub-volume t the first DATA texel sits at atlas slice t*paddedSlices + 1.
	//   Given probe-grid texel-centre UVZ = ( iz + 0.5 ) / nz the atlas UV is:
	//     atlasUvZ = ( uvw.z * nz + t * paddedSlices + 1 ) / atlasDepth
	//
	// uvZBase encodes the nz-scaled Z plus the intra-volume offset (+ 1 for padding),
	// so adding t*paddedSlices steps to each successive sub-volume.
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;

	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );

	// Unpack 9 vec3 SH L2 coefficients
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;

	// Evaluate L2 irradiance
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;

	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );

	return max( result, vec3( 0.0 ) );

}

#endif
`,
  Lr = `
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,
  Rr = `
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,
  zr = `
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,
  Br = `
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`,
  Vr = `
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,
  Hr = `
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,
  Ur = `
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	#if defined( USE_POINTS_UV )

		vec2 uv = vUv;

	#else

		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	#endif

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,
  Wr = `
#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,
  Gr = `
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,
  Kr = `
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,
  qr = `
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`,
  Jr = `
#if defined( USE_MORPHCOLORS )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,
  Yr = `
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,
  Xr = `
#ifdef USE_MORPHTARGETS

	#ifndef USE_INSTANCING_MORPH

		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	#endif

	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;

	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;

		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );

	}

#endif
`,
  Zr = `
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,
  Qr = `
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);

	#endif

	#ifdef DOUBLE_SIDED

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#ifdef DOUBLE_SIDED

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`,
  $r = `

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;

	#if defined( USE_PACKED_NORMALMAP )

		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );

	#endif

	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,
  ei = `
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,
  ti = `
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,
  ni = `
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

		#ifdef FLIP_SIDED

			vBitangent = - vBitangent;

		#endif

	#endif

#endif
`,
  ri = `
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`,
  ii = `
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`,
  ai = `
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,
  oi = `

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`,
  si = `

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,
  ci = `
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,
  li = `
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)
const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;

const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );

const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );

vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}

vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	// the 0.9999 tweak is unimportant, very tiny empirical improvement
	// return vec3( vuf * Inv255, gf * PackUpscale, bf * 0.9999 );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}

vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}

float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}

float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}

vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {

	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;

	#else

		return depth * ( near - far ) - near;

	#endif
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER

		return ( near * far ) / ( ( near - far ) * depth - near );

	#else

		return ( near * far ) / ( ( far - near ) * depth - far );

	#endif
}
`,
  ui = `
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,
  di = `
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,
  fi = `
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,
  pi = `
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,
  mi = `
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,
  hi = `
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,
  gi = `
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_SUN_LIGHT_SHADOWS > 0

		// must match the cascade count in SunLightShadow

		#define SUN_LIGHT_CASCADES 2

		#if defined( SHADOWMAP_TYPE_PCF )

			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];

		#else

			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];

		#endif

		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;

		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#if defined( SHADOWMAP_TYPE_PCF )

			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];

		#else

			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];

		#endif

		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		#if defined( SHADOWMAP_TYPE_PCF )

			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		#else

			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		#endif

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#if defined( SHADOWMAP_TYPE_PCF )

			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];

		#elif defined( SHADOWMAP_TYPE_BASIC )

			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];

		#endif

		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	#if defined( SHADOWMAP_TYPE_PCF )

		// Interleaved Gradient Noise for randomizing sampling patterns
		float interleavedGradientNoise( vec2 position ) {

			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );

		}

		// Vogel disk sampling for uniform circular distribution
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {

			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;

		}

	#endif

	#if defined( SHADOWMAP_TYPE_PCF )

		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

			float shadow = 1.0;

			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;

			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

			if ( frustumTest ) {

				// Hardware PCF with LinearFilter gives us 4-tap filtering per sample
				// 5 samples using Vogel disk + IGN = effectively 20 filtered taps with better distribution
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;

				// Use IGN to rotate sampling pattern per pixel
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;

				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;

			}

			return mix( 1.0, shadow, shadowIntensity );

		}

	#elif defined( SHADOWMAP_TYPE_VSM )

		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

			float shadow = 1.0;

			shadowCoord.xyz /= shadowCoord.w;

			#ifdef USE_REVERSED_DEPTH_BUFFER

				shadowCoord.z -= shadowBias;

			#else

				shadowCoord.z += shadowBias;

			#endif

			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

			if ( frustumTest ) {

				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;

				float mean = distribution.x;
				float variance = distribution.y * distribution.y;

				#ifdef USE_REVERSED_DEPTH_BUFFER

					float hard_shadow = step( mean, shadowCoord.z );

				#else

					float hard_shadow = step( shadowCoord.z, mean );

				#endif
				
				// Early return if fully lit
				if ( hard_shadow == 1.0 ) {

					shadow = 1.0;

				} else {

					// Variance must be non-zero to avoid division by zero
					variance = max( variance, 0.0000001 );

					// Distance from mean
					float d = shadowCoord.z - mean;

					// Chebyshev's inequality for upper bound on probability
					float p_max = variance / ( variance + d * d );

					// Reduce light bleeding by remapping [amount, 1] to [0, 1]
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );

					shadow = max( hard_shadow, p_max );

				}

			}

			return mix( 1.0, shadow, shadowIntensity );

		}

	#else // SHADOWMAP_TYPE_BASIC

		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

			float shadow = 1.0;

			shadowCoord.xyz /= shadowCoord.w;

			#ifdef USE_REVERSED_DEPTH_BUFFER

				shadowCoord.z -= shadowBias;

			#else

				shadowCoord.z += shadowBias;

			#endif

			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

			if ( frustumTest ) {

				float depth = texture2D( shadowMap, shadowCoord.xy ).r;

				#ifdef USE_REVERSED_DEPTH_BUFFER

					shadow = step( depth, shadowCoord.z );

				#else

					shadow = step( shadowCoord.z, depth );

				#endif

			}

			return mix( 1.0, shadow, shadowIntensity );

		}

	#endif

	#if NUM_SUN_LIGHT_SHADOWS > 0

		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {

			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;

			float shadow = 1.0;

			// walk the cascades back to front so each fade band can blend with the shadow behind it

			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {

				// ( begin, end, fade start ) view depths of the cascade

				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];

				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {

					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);

					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );

				}

			}

			return shadow;

		}

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#if defined( SHADOWMAP_TYPE_PCF )

	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// Direction from light to fragment
		vec3 bd3D = normalize( lightToPosition );

		// For cube shadow maps, depth is stored as distance along each face's view axis, not radial distance
		// The view-space depth is the maximum component of the direction vector (which face is sampled)
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );

		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {

			// viewZ to perspective depth

			#ifdef USE_REVERSED_DEPTH_BUFFER

				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;

			#else

				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;

			#endif

			// Hardware PCF with LinearFilter gives us 4-tap filtering per sample
			// Use Vogel disk + IGN sampling for better quality
			float texelSize = shadowRadius / shadowMapSize.x;

			// Build a tangent-space coordinate system for applying offsets
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );

			// Use IGN to rotate sampling pattern per pixel
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;

			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );

			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	#elif defined( SHADOWMAP_TYPE_BASIC )

	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// For cube shadow maps, depth is stored as distance along each face's view axis, not radial distance
		// The view-space depth is the maximum component of the direction vector (which face is sampled)
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );

		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {

			// viewZ to perspective depth

			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;

			// Direction from light to fragment
			vec3 bd3D = normalize( lightToPosition );

			float depth = textureCube( shadowMap, bd3D ).r;

			#ifdef USE_REVERSED_DEPTH_BUFFER

				depth = 1.0 - depth;

			#endif

			shadow = step( dp, depth );

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	#endif

	#endif

#endif
`,
  _i = `

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_SUN_LIGHT_SHADOWS > 0

		// cascade selection and shadow coordinates are computed per fragment

		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,
  vi = `

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	#ifdef HAS_NORMAL

		// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.

		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );

	#else

		vec3 shadowWorldNormal = vec3( 0.0 ); // fallback, see #21483

	#endif

	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_SUN_LIGHT_SHADOWS > 0

		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`,
  yi = `
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_SUN_LIGHT_SHADOWS > 0

	SunLightShadow sunLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {

		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,
  bi = `
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,
  xi = `
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;

	mat4 getBoneMatrix( const in float i ) {

		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );

		return mat4( v1, v2, v3, v4 );

	}

#endif
`,
  Si = `
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,
  Ci = `
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`,
  wi = `
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,
  Ti = `
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,
  Ei = `
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,
  Di = `
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 CineonToneMapping( vec3 color ) {

	// filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);

const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
vec3 agxDefaultContrastApprox( vec3 x ) {

	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;

	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;

}

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

vec3 NeutralToneMapping( vec3 color ) {

	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;

	color *= toneMappingExposure;

	float x = min( color.r, min( color.g, color.b ) );

	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;

	color -= offset;

	float peak = max( color.r, max( color.g, color.b ) );

	if ( peak < StartCompression ) return color;

	float d = 1. - StartCompression;

	float newPeak = 1. - d * d / ( peak + d - StartCompression );

	color *= newPeak / peak;

	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );

	return mix( color, vec3( newPeak ), g );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,
  Oi = `
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`,
  ki = `
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independent scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec4 transmittedLight;
		vec3 transmittance;

		#ifdef USE_DISPERSION

			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );

			for ( int i = 0; i < 3; i ++ ) {

				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;

				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;

				// Sample framebuffer to get pixel the refracted ray hits.
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;

				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];

			}

			transmittedLight.a /= 3.0;

		#else

			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;

			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;

			// Sample framebuffer to get pixel the refracted ray hits.
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );

		#endif

		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`,
  Ai = `
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,
  ji = `
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,
  Mi = `
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ANISOTROPYMAP

	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`,
  Ni = `
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,
  Pi = `
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,
  Fi = `
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,
  Ii = `
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,
  Li = `

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,
  Ri = `
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,
  zi = `
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,
  Bi = `
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,
  Vi = `
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z

	#ifdef USE_REVERSED_DEPTH_BUFFER

		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];

	#else

		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;

	#endif

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		// TODO Deprecate
		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#elif DEPTH_PACKING == 3202

		// TODO Deprecate
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );

	#elif DEPTH_PACKING == 3203

		// TODO Deprecate
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );

	#endif

}
`,
  Hi = `
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,
  Ui = `
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );

}
`,
  Wi = `
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,
  Gi = `
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,
  Ki = `
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,
  qi = `
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,
  Ji = `
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,
  Yi = `
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,
  Xi = `
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,
  Zi = `
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`
export {
  $r as $,
  pt as $n,
  $n as $t,
  Si as A,
  cn as An,
  Sr as At,
  fi as B,
  R as Bn,
  fr as Bt,
  ki as C,
  Tn as Cn,
  kr as Ct,
  Ti as D,
  dn as Dn,
  Tr as Dt,
  Ei as E,
  fn as En,
  Er as Et,
  _i as F,
  Jt as Fn,
  _r as Ft,
  si as G,
  wt as Gn,
  sr as Gt,
  ui as H,
  F as Hn,
  ur as Ht,
  gi as I,
  qt as In,
  gr as It,
  ii as J,
  xt as Jn,
  ir as Jt,
  oi as K,
  Ct as Kn,
  or as Kt,
  hi as L,
  Gt as Ln,
  hr as Lt,
  bi as M,
  an as Mn,
  br as Mt,
  yi as N,
  nn as Nn,
  yr as Nt,
  wi as O,
  un as On,
  wr as Ot,
  vi as P,
  Y as Pn,
  vr as Pt,
  ei as Q,
  gt as Qn,
  er as Qt,
  mi as R,
  B as Rn,
  mr as Rt,
  Ai as S,
  Dn as Sn,
  Ar as St,
  Di as T,
  pn as Tn,
  Dr as Tt,
  li as U,
  M as Un,
  lr as Ut,
  di as V,
  I as Vn,
  dr as Vt,
  ci as W,
  Tt as Wn,
  cr as Wt,
  ni as X,
  _t as Xn,
  nr as Xt,
  ri as Y,
  bt as Yn,
  rr as Yt,
  ti as Z,
  k as Zn,
  tr as Zt,
  Fi as _,
  Fn as _n,
  Fr as _t,
  qi as a,
  qn as an,
  qr as at,
  Mi as b,
  Mn as bn,
  Mr as bt,
  Wi as c,
  Wn as cn,
  Wr as ct,
  Vi as d,
  Vn as dn,
  Vr as dt,
  Qn as en,
  ft as er,
  Qr as et,
  Bi as f,
  Bn as fn,
  Br as ft,
  Ii as g,
  In as gn,
  Ir as gt,
  Li as h,
  Ln as hn,
  Lr as ht,
  Ji as i,
  Jn as in,
  Jr as it,
  xi as j,
  on as jn,
  xr as jt,
  Ci as k,
  ln as kn,
  Cr as kt,
  Ui as l,
  Un as ln,
  Ur as lt,
  Ri as m,
  Rn as mn,
  Rr as mt,
  Xi as n,
  Xn as nn,
  ut as nr,
  Xr as nt,
  Ki as o,
  Kn as on,
  Kr as ot,
  zi as p,
  zn as pn,
  zr as pt,
  ai as q,
  St as qn,
  ar as qt,
  Yi as r,
  Yn as rn,
  lt as rr,
  Yr as rt,
  Gi as s,
  Gn as sn,
  Gr as st,
  Zi as t,
  Zn as tn,
  dt as tr,
  Zr as tt,
  Hi as u,
  Hn as un,
  Hr as ut,
  Pi as v,
  Pn as vn,
  Pr as vt,
  Oi as w,
  $ as wn,
  Or as wt,
  ji as x,
  An as xn,
  jr as xt,
  Ni as y,
  Nn as yn,
  Nr as yt,
  pi as z,
  zt as zn,
  pr as zt,
}
