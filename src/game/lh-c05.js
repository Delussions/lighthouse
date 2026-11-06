import {
  $ as e,
  A as t,
  An as n,
  Bt as r,
  C as i,
  Ct as a,
  D as o,
  E as s,
  Et as c,
  F as l,
  Fn as u,
  Ft as d,
  G as f,
  H as p,
  Ht as m,
  It as h,
  J as g,
  Lt as _,
  M as v,
  Mt as y,
  N as b,
  Nt as x,
  O as S,
  P as C,
  Q as w,
  Rt as T,
  S as E,
  Ut as ee,
  Vt as te,
  W as D,
  Yt as ne,
  Z as re,
  _ as O,
  c as k,
  d as ie,
  et as A,
  f as ae,
  h as oe,
  i as se,
  it as j,
  j as ce,
  kt as le,
  m as ue,
  n as de,
  nt as M,
  ot as fe,
  p as pe,
  q as me,
  r as he,
  rt as N,
  t as ge,
  tt as _e,
  u as ve,
  v as P,
  w as F,
  x as ye,
  y as be,
  z as xe,
} from './lh-c00.js'
import {
  An as Se,
  Bn as Ce,
  Dn as we,
  Hn as Te,
  In as Ee,
  Kn as I,
  Ln as De,
  Mn as Oe,
  Nn as ke,
  Pn as Ae,
  Rn as je,
  Un as Me,
  Vn as Ne,
  Xn as Pe,
  Yn as L,
  er as Fe,
  jn as Ie,
  kn as Le,
  nr as Re,
  qn as R,
  tr as ze,
  wn as Be,
  zn as Ve,
} from './lh-c01.js'
import { x as He } from './lh-c02.js'
import { d as Ue, f as We, l as z, m as B, n as Ge, v as V } from './lh-c03.js'
import {
  C as Ke,
  S as qe,
  b as Je,
  d as Ye,
  l as Xe,
  n as Ze,
  o as Qe,
  r as $e,
  s as et,
  t as tt,
  v as nt,
  w as rt,
  x as it,
  y as at,
} from './lh-c04.js'
import {
  FISHES as Mr,
  FISH_IDS as Nr,
  getFish as Pr,
  isFishId as Fr,
  getFishPrice as Ir,
  getFishFood as Lr,
  pickRandomFish as Rr,
  RECIPES as zr,
  getRecipe as Br,
  WORLD_CONFIG,
  getUpgradeLevel,
  SHORE_FINDS,
  SHORE_SPOTS,
  LANTERN_COLORS,
} from './data/index'
var ot = class extends je {
  constructor(e) {
    ;(super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (e) {
        return new dt(e)
      }),
      this.register(function (e) {
        return new ft(e)
      }),
      this.register(function (e) {
        return new xt(e)
      }),
      this.register(function (e) {
        return new St(e)
      }),
      this.register(function (e) {
        return new Ct(e)
      }),
      this.register(function (e) {
        return new mt(e)
      }),
      this.register(function (e) {
        return new ht(e)
      }),
      this.register(function (e) {
        return new gt(e)
      }),
      this.register(function (e) {
        return new _t(e)
      }),
      this.register(function (e) {
        return new ut(e)
      }),
      this.register(function (e) {
        return new vt(e)
      }),
      this.register(function (e) {
        return new pt(e)
      }),
      this.register(function (e) {
        return new bt(e)
      }),
      this.register(function (e) {
        return new yt(e)
      }),
      this.register(function (e) {
        return new ct(e)
      }),
      this.register(function (e) {
        return new wt(e, U.EXT_MESHOPT_COMPRESSION)
      }),
      this.register(function (e) {
        return new wt(e, U.KHR_MESHOPT_COMPRESSION)
      }),
      this.register(function (e) {
        return new Tt(e)
      }))
  }
  load(e, t, n, r) {
    let i = this,
      a
    if (this.resourcePath !== ``) a = this.resourcePath
    else if (this.path !== ``) {
      let t = Le.extractUrlBase(e)
      a = Le.resolveURL(t, this.path)
    } else a = Le.extractUrlBase(e)
    this.manager.itemStart(e)
    let o = function (t) {
        ;(r ? r(t) : console.error(t), i.manager.itemError(e), i.manager.itemEnd(e))
      },
      s = new De(this.manager)
    ;(s.setPath(this.path),
      s.setResponseType(`arraybuffer`),
      s.setRequestHeader(this.requestHeader),
      s.setWithCredentials(this.withCredentials),
      s.load(
        e,
        function (n) {
          try {
            i.parse(
              n,
              a,
              function (n) {
                ;(t(n), i.manager.itemEnd(e))
              },
              o
            )
          } catch (e) {
            o(e)
          }
        },
        n,
        o
      ))
  }
  setDRACOLoader(e) {
    return ((this.dracoLoader = e), this)
  }
  setKTX2Loader(e) {
    return ((this.ktx2Loader = e), this)
  }
  setMeshoptDecoder(e) {
    return ((this.meshoptDecoder = e), this)
  }
  register(e) {
    return (this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this)
  }
  unregister(e) {
    return (
      this.pluginCallbacks.indexOf(e) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    )
  }
  parse(e, t, n, r) {
    let i,
      a = {},
      o = {},
      s = new TextDecoder()
    if (typeof e == `string`) i = JSON.parse(e)
    else if (e instanceof ArrayBuffer) {
      if (s.decode(new Uint8Array(e, 0, 4)) === Et) {
        try {
          a[U.KHR_BINARY_GLTF] = new kt(e)
        } catch (e) {
          r && r(e)
          return
        }
        i = JSON.parse(a[U.KHR_BINARY_GLTF].content)
      } else i = JSON.parse(s.decode(e))
    } else i = e
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      r && r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`))
      return
    }
    let c = new Qt(i, {
      path: t || this.resourcePath || ``,
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    })
    c.fileLoader.setRequestHeader(this.requestHeader)
    for (let e = 0; e < this.pluginCallbacks.length; e++) {
      let t = this.pluginCallbacks[e](c)
      ;(t.name || console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),
        (o[t.name] = t),
        (a[t.name] = !0))
    }
    if (i.extensionsUsed)
      for (let e = 0; e < i.extensionsUsed.length; ++e) {
        let t = i.extensionsUsed[e],
          n = i.extensionsRequired || []
        switch (t) {
          case U.KHR_MATERIALS_UNLIT:
            a[t] = new lt()
            break
          case U.KHR_DRACO_MESH_COMPRESSION:
            a[t] = new At(i, this.dracoLoader)
            break
          case U.KHR_TEXTURE_TRANSFORM:
            a[t] = new jt()
            break
          case U.KHR_MESH_QUANTIZATION:
            a[t] = new Mt()
            break
          default:
            n.indexOf(t) >= 0 &&
              o[t] === void 0 &&
              console.warn(`THREE.GLTFLoader: Unknown extension "` + t + `".`)
        }
      }
    ;(c.setExtensions(a), c.setPlugins(o), c.parse(n, r))
  }
  parseAsync(e, t) {
    let n = this
    return new Promise(function (r, i) {
      n.parse(e, t, r, i)
    })
  }
}
function st() {
  let e = {}
  return {
    get: function (t) {
      return e[t]
    },
    add: function (t, n) {
      e[t] = n
    },
    remove: function (t) {
      delete e[t]
    },
    removeAll: function () {
      e = {}
    },
  }
}
function H(e, t, n) {
  let r = e.json.materials[t]
  return r.extensions && r.extensions[n] ? r.extensions[n] : null
}
var U = {
    KHR_BINARY_GLTF: `KHR_binary_glTF`,
    KHR_DRACO_MESH_COMPRESSION: `KHR_draco_mesh_compression`,
    KHR_LIGHTS_PUNCTUAL: `KHR_lights_punctual`,
    KHR_MATERIALS_CLEARCOAT: `KHR_materials_clearcoat`,
    KHR_MATERIALS_DISPERSION: `KHR_materials_dispersion`,
    KHR_MATERIALS_IOR: `KHR_materials_ior`,
    KHR_MATERIALS_SHEEN: `KHR_materials_sheen`,
    KHR_MATERIALS_SPECULAR: `KHR_materials_specular`,
    KHR_MATERIALS_TRANSMISSION: `KHR_materials_transmission`,
    KHR_MATERIALS_IRIDESCENCE: `KHR_materials_iridescence`,
    KHR_MATERIALS_ANISOTROPY: `KHR_materials_anisotropy`,
    KHR_MATERIALS_UNLIT: `KHR_materials_unlit`,
    KHR_MATERIALS_VOLUME: `KHR_materials_volume`,
    KHR_TEXTURE_BASISU: `KHR_texture_basisu`,
    KHR_TEXTURE_TRANSFORM: `KHR_texture_transform`,
    KHR_MESH_QUANTIZATION: `KHR_mesh_quantization`,
    KHR_MATERIALS_EMISSIVE_STRENGTH: `KHR_materials_emissive_strength`,
    EXT_MATERIALS_BUMP: `EXT_materials_bump`,
    EXT_TEXTURE_WEBP: `EXT_texture_webp`,
    EXT_TEXTURE_AVIF: `EXT_texture_avif`,
    EXT_MESHOPT_COMPRESSION: `EXT_meshopt_compression`,
    KHR_MESHOPT_COMPRESSION: `KHR_meshopt_compression`,
    EXT_MESH_GPU_INSTANCING: `EXT_mesh_gpu_instancing`,
  },
  ct = class {
    constructor(e) {
      ;((this.parser = e),
        (this.name = U.KHR_LIGHTS_PUNCTUAL),
        (this.cache = { refs: {}, uses: {} }))
    }
    _markDefs() {
      let e = this.parser,
        t = this.parser.json.nodes || []
      for (let n = 0, r = t.length; n < r; n++) {
        let r = t[n]
        r.extensions &&
          r.extensions[this.name] &&
          r.extensions[this.name].light !== void 0 &&
          e._addNodeRef(this.cache, r.extensions[this.name].light)
      }
    }
    _loadLight(e) {
      let t = this.parser,
        n = `light:` + e,
        r = t.cache.get(n)
      if (r) return r
      let i = t.json,
        a = (((i.extensions && i.extensions[this.name]) || {}).lights || [])[e],
        o,
        s = new p(16777215)
      a.color !== void 0 && s.setRGB(a.color[0], a.color[1], a.color[2], T)
      let c = a.range === void 0 ? 0 : a.range
      switch (a.type) {
        case `directional`:
          ;((o = new Se(s)), o.target.position.set(0, 0, -1), o.add(o.target))
          break
        case `point`:
          ;((o = new Oe(s)), (o.distance = c))
          break
        case `spot`:
          ;((o = new ke(s)),
            (o.distance = c),
            (a.spot = a.spot || {}),
            (a.spot.innerConeAngle = a.spot.innerConeAngle === void 0 ? 0 : a.spot.innerConeAngle),
            (a.spot.outerConeAngle =
              a.spot.outerConeAngle === void 0 ? Math.PI / 4 : a.spot.outerConeAngle),
            (o.angle = a.spot.outerConeAngle),
            (o.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle),
            o.target.position.set(0, 0, -1),
            o.add(o.target))
          break
        default:
          throw Error(`THREE.GLTFLoader: Unexpected light type: ` + a.type)
      }
      return (
        o.position.set(0, 0, 0),
        K(o, a),
        a.intensity !== void 0 && (o.intensity = a.intensity),
        (o.name = t.createUniqueName(a.name || `light_` + e)),
        (r = Promise.resolve(o)),
        t.cache.add(n, r),
        r
      )
    }
    getDependency(e, t) {
      if (e === `light`) return this._loadLight(t)
    }
    createNodeAttachment(e) {
      let t = this,
        n = this.parser,
        r = n.json.nodes[e],
        i = ((r.extensions && r.extensions[this.name]) || {}).light
      return i === void 0
        ? null
        : this._loadLight(i).then(function (e) {
            return n._getNodeRef(t.cache, i, e)
          })
    }
  },
  lt = class {
    constructor() {
      this.name = U.KHR_MATERIALS_UNLIT
    }
    getMaterialType() {
      return F
    }
    extendParams(e, t, n) {
      let r = []
      ;((e.color = new p(1, 1, 1)), (e.opacity = 1))
      let i = t.pbrMetallicRoughness
      if (i) {
        if (Array.isArray(i.baseColorFactor)) {
          let t = i.baseColorFactor
          ;(e.color.setRGB(t[0], t[1], t[2], T), (e.opacity = t[3]))
        }
        i.baseColorTexture !== void 0 && r.push(n.assignTexture(e, `map`, i.baseColorTexture, u))
      }
      return Promise.all(r)
    }
  },
  ut = class {
    constructor(e) {
      ;((this.parser = e), (this.name = U.KHR_MATERIALS_EMISSIVE_STRENGTH))
    }
    extendMaterialParams(e, t) {
      let n = H(this.parser, e, this.name)
      return (
        n === null || (n.emissiveStrength !== void 0 && (t.emissiveIntensity = n.emissiveStrength)),
        Promise.resolve()
      )
    }
  },
  dt = class {
    constructor(e) {
      ;((this.parser = e), (this.name = U.KHR_MATERIALS_CLEARCOAT))
    }
    getMaterialType(e) {
      return H(this.parser, e, this.name) === null ? null : I
    }
    extendMaterialParams(e, t) {
      let n = H(this.parser, e, this.name)
      if (n === null) return Promise.resolve()
      let r = []
      if (
        (n.clearcoatFactor !== void 0 && (t.clearcoat = n.clearcoatFactor),
        n.clearcoatTexture !== void 0 &&
          r.push(this.parser.assignTexture(t, `clearcoatMap`, n.clearcoatTexture)),
        n.clearcoatRoughnessFactor !== void 0 &&
          (t.clearcoatRoughness = n.clearcoatRoughnessFactor),
        n.clearcoatRoughnessTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(t, `clearcoatRoughnessMap`, n.clearcoatRoughnessTexture)
          ),
        n.clearcoatNormalTexture !== void 0 &&
          (r.push(this.parser.assignTexture(t, `clearcoatNormalMap`, n.clearcoatNormalTexture)),
          n.clearcoatNormalTexture.scale !== void 0))
      ) {
        let e = n.clearcoatNormalTexture.scale
        t.clearcoatNormalScale = new j(e, e)
      }
      return Promise.all(r)
    }
  },
  ft = class {
    constructor(e) {
      ;((this.parser = e), (this.name = U.KHR_MATERIALS_DISPERSION))
    }
    getMaterialType(e) {
      return H(this.parser, e, this.name) === null ? null : I
    }
    extendMaterialParams(e, t) {
      let n = H(this.parser, e, this.name)
      return (
        n === null || (t.dispersion = n.dispersion === void 0 ? 0 : n.dispersion),
        Promise.resolve()
      )
    }
  },
  pt = class {
    constructor(e) {
      ;((this.parser = e), (this.name = U.KHR_MATERIALS_IRIDESCENCE))
    }
    getMaterialType(e) {
      return H(this.parser, e, this.name) === null ? null : I
    }
    extendMaterialParams(e, t) {
      let n = H(this.parser, e, this.name)
      if (n === null) return Promise.resolve()
      let r = []
      return (
        n.iridescenceFactor !== void 0 && (t.iridescence = n.iridescenceFactor),
        n.iridescenceTexture !== void 0 &&
          r.push(this.parser.assignTexture(t, `iridescenceMap`, n.iridescenceTexture)),
        n.iridescenceIor !== void 0 && (t.iridescenceIOR = n.iridescenceIor),
        t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]),
        n.iridescenceThicknessMinimum !== void 0 &&
          (t.iridescenceThicknessRange[0] = n.iridescenceThicknessMinimum),
        n.iridescenceThicknessMaximum !== void 0 &&
          (t.iridescenceThicknessRange[1] = n.iridescenceThicknessMaximum),
        n.iridescenceThicknessTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(t, `iridescenceThicknessMap`, n.iridescenceThicknessTexture)
          ),
        Promise.all(r)
      )
    }
  },
  mt = class {
    constructor(e) {
      ;((this.parser = e), (this.name = U.KHR_MATERIALS_SHEEN))
    }
    getMaterialType(e) {
      return H(this.parser, e, this.name) === null ? null : I
    }
    extendMaterialParams(e, t) {
      let n = H(this.parser, e, this.name)
      if (n === null) return Promise.resolve()
      let r = []
      if (
        ((t.sheenColor = new p(0, 0, 0)),
        (t.sheenRoughness = 0),
        (t.sheen = 1),
        n.sheenColorFactor !== void 0)
      ) {
        let e = n.sheenColorFactor
        t.sheenColor.setRGB(e[0], e[1], e[2], T)
      }
      return (
        n.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = n.sheenRoughnessFactor),
        n.sheenColorTexture !== void 0 &&
          r.push(this.parser.assignTexture(t, `sheenColorMap`, n.sheenColorTexture, u)),
        n.sheenRoughnessTexture !== void 0 &&
          r.push(this.parser.assignTexture(t, `sheenRoughnessMap`, n.sheenRoughnessTexture)),
        Promise.all(r)
      )
    }
  },
  ht = class {
    constructor(e) {
      ;((this.parser = e), (this.name = U.KHR_MATERIALS_TRANSMISSION))
    }
    getMaterialType(e) {
      return H(this.parser, e, this.name) === null ? null : I
    }
    extendMaterialParams(e, t) {
      let n = H(this.parser, e, this.name)
      if (n === null) return Promise.resolve()
      let r = []
      return (
        n.transmissionFactor !== void 0 && (t.transmission = n.transmissionFactor),
        n.transmissionTexture !== void 0 &&
          r.push(this.parser.assignTexture(t, `transmissionMap`, n.transmissionTexture)),
        Promise.all(r)
      )
    }
  },
  gt = class {
    constructor(e) {
      ;((this.parser = e), (this.name = U.KHR_MATERIALS_VOLUME))
    }
    getMaterialType(e) {
      return H(this.parser, e, this.name) === null ? null : I
    }
    extendMaterialParams(e, t) {
      let n = H(this.parser, e, this.name)
      if (n === null) return Promise.resolve()
      let r = []
      ;((t.thickness = n.thicknessFactor === void 0 ? 0 : n.thicknessFactor),
        n.thicknessTexture !== void 0 &&
          r.push(this.parser.assignTexture(t, `thicknessMap`, n.thicknessTexture)),
        (t.attenuationDistance = n.attenuationDistance || 1 / 0))
      let i = n.attenuationColor || [1, 1, 1]
      return ((t.attenuationColor = new p().setRGB(i[0], i[1], i[2], T)), Promise.all(r))
    }
  },
  _t = class {
    constructor(e) {
      ;((this.parser = e), (this.name = U.KHR_MATERIALS_IOR))
    }
    getMaterialType(e) {
      return H(this.parser, e, this.name) === null ? null : I
    }
    extendMaterialParams(e, t) {
      let n = H(this.parser, e, this.name)
      return n === null
        ? Promise.resolve()
        : ((t.ior = n.ior === void 0 ? 1.5 : n.ior),
          t.ior === 0 && (t.ior = 1e3),
          Promise.resolve())
    }
  },
  vt = class {
    constructor(e) {
      ;((this.parser = e), (this.name = U.KHR_MATERIALS_SPECULAR))
    }
    getMaterialType(e) {
      return H(this.parser, e, this.name) === null ? null : I
    }
    extendMaterialParams(e, t) {
      let n = H(this.parser, e, this.name)
      if (n === null) return Promise.resolve()
      let r = []
      ;((t.specularIntensity = n.specularFactor === void 0 ? 1 : n.specularFactor),
        n.specularTexture !== void 0 &&
          r.push(this.parser.assignTexture(t, `specularIntensityMap`, n.specularTexture)))
      let i = n.specularColorFactor || [1, 1, 1]
      return (
        (t.specularColor = new p().setRGB(i[0], i[1], i[2], T)),
        n.specularColorTexture !== void 0 &&
          r.push(this.parser.assignTexture(t, `specularColorMap`, n.specularColorTexture, u)),
        Promise.all(r)
      )
    }
  },
  yt = class {
    constructor(e) {
      ;((this.parser = e), (this.name = U.EXT_MATERIALS_BUMP))
    }
    getMaterialType(e) {
      return H(this.parser, e, this.name) === null ? null : I
    }
    extendMaterialParams(e, t) {
      let n = H(this.parser, e, this.name)
      if (n === null) return Promise.resolve()
      let r = []
      return (
        (t.bumpScale = n.bumpFactor === void 0 ? 1 : n.bumpFactor),
        n.bumpTexture !== void 0 && r.push(this.parser.assignTexture(t, `bumpMap`, n.bumpTexture)),
        Promise.all(r)
      )
    }
  },
  bt = class {
    constructor(e) {
      ;((this.parser = e), (this.name = U.KHR_MATERIALS_ANISOTROPY))
    }
    getMaterialType(e) {
      return H(this.parser, e, this.name) === null ? null : I
    }
    extendMaterialParams(e, t) {
      let n = H(this.parser, e, this.name)
      if (n === null) return Promise.resolve()
      let r = []
      return (
        n.anisotropyStrength !== void 0 && (t.anisotropy = n.anisotropyStrength),
        n.anisotropyRotation !== void 0 && (t.anisotropyRotation = n.anisotropyRotation),
        n.anisotropyTexture !== void 0 &&
          r.push(this.parser.assignTexture(t, `anisotropyMap`, n.anisotropyTexture)),
        Promise.all(r)
      )
    }
  },
  xt = class {
    constructor(e) {
      ;((this.parser = e), (this.name = U.KHR_TEXTURE_BASISU))
    }
    loadTexture(e) {
      let t = this.parser,
        n = t.json,
        r = n.textures[e]
      if (!r.extensions || !r.extensions[this.name]) return null
      let i = r.extensions[this.name],
        a = t.options.ktx2Loader
      if (!a) {
        if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
          throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`)
        return null
      }
      return t.loadTextureImage(e, i.source, a)
    }
  },
  St = class {
    constructor(e) {
      ;((this.parser = e), (this.name = U.EXT_TEXTURE_WEBP))
    }
    loadTexture(e) {
      let t = this.name,
        n = this.parser,
        r = n.json,
        i = r.textures[e]
      if (!i.extensions || !i.extensions[t]) return null
      let a = i.extensions[t],
        o = r.images[a.source],
        s = n.textureLoader
      if (o.uri) {
        let e = n.options.manager.getHandler(o.uri)
        e !== null && (s = e)
      }
      return n.loadTextureImage(e, a.source, s)
    }
  },
  Ct = class {
    constructor(e) {
      ;((this.parser = e), (this.name = U.EXT_TEXTURE_AVIF))
    }
    loadTexture(e) {
      let t = this.name,
        n = this.parser,
        r = n.json,
        i = r.textures[e]
      if (!i.extensions || !i.extensions[t]) return null
      let a = i.extensions[t],
        o = r.images[a.source],
        s = n.textureLoader
      if (o.uri) {
        let e = n.options.manager.getHandler(o.uri)
        e !== null && (s = e)
      }
      return n.loadTextureImage(e, a.source, s)
    }
  },
  wt = class {
    constructor(e, t) {
      ;((this.name = t), (this.parser = e))
    }
    loadBufferView(e) {
      let t = this.parser.json,
        n = t.bufferViews[e]
      if (n.extensions && n.extensions[this.name]) {
        let e = n.extensions[this.name],
          r = this.parser.getDependency(`buffer`, e.buffer),
          i = this.parser.options.meshoptDecoder
        if (!i || !i.supported) {
          if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
            throw Error(
              `THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`
            )
          return null
        }
        return r.then(function (t) {
          let n = e.byteOffset || 0,
            r = e.byteLength || 0,
            a = e.count,
            o = e.byteStride,
            s = new Uint8Array(t, n, r)
          return i.decodeGltfBufferAsync
            ? i.decodeGltfBufferAsync(a, o, s, e.mode, e.filter).then(function (e) {
                return e.buffer
              })
            : i.ready.then(function () {
                let t = new ArrayBuffer(a * o)
                return (i.decodeGltfBuffer(new Uint8Array(t), a, o, s, e.mode, e.filter), t)
              })
        })
      }
      return null
    }
  },
  Tt = class {
    constructor(e) {
      ;((this.name = U.EXT_MESH_GPU_INSTANCING), (this.parser = e))
    }
    createNodeMesh(e) {
      let t = this.parser.json,
        n = t.nodes[e]
      if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null
      let r = t.meshes[n.mesh]
      for (let e of r.primitives)
        if (
          e.mode !== W.TRIANGLES &&
          e.mode !== W.TRIANGLE_STRIP &&
          e.mode !== W.TRIANGLE_FAN &&
          e.mode !== void 0
        )
          return null
      let i = n.extensions[this.name].attributes,
        a = [],
        o = {}
      for (let e in i)
        a.push(this.parser.getDependency(`accessor`, i[e]).then((t) => ((o[e] = t), o[e])))
      return a.length < 1
        ? null
        : (a.push(this.parser.createNodeMesh(e)),
          Promise.all(a).then((e) => {
            let t = e.pop(),
              n = t.isGroup ? t.children : [t],
              r = e[0].count,
              i = []
            for (let e of n) {
              let t = new g(),
                n = new M(),
                a = new N(),
                s = new M(1, 1, 1),
                c = new O(e.geometry, e.material, r)
              for (let e = 0; e < r; e++)
                (o.TRANSLATION && n.fromBufferAttribute(o.TRANSLATION, e),
                  o.ROTATION && a.fromBufferAttribute(o.ROTATION, e),
                  o.SCALE && s.fromBufferAttribute(o.SCALE, e),
                  c.setMatrixAt(e, t.compose(n, a, s)))
              let l = null
              for (let e in o)
                if (e === `_COLOR_0`) {
                  let t = o[e]
                  c.instanceColor = new P(t.array, t.itemSize, t.normalized)
                } else if (e !== `TRANSLATION` && e !== `ROTATION` && e !== `SCALE`) {
                  if (l === null) {
                    let e = c.geometry
                    ;((l = new v()), (l.name = e.name))
                    for (let t in e.attributes) l.setAttribute(t, e.attributes[t])
                    for (let t in e.morphAttributes) l.morphAttributes[t] = e.morphAttributes[t]
                    ;(e.index !== null && l.setIndex(e.index),
                      (l.morphTargetsRelative = e.morphTargetsRelative))
                    for (let t of e.groups) l.addGroup(t.start, t.count, t.materialIndex)
                    ;(e.boundingBox !== null && (l.boundingBox = e.boundingBox.clone()),
                      e.boundingSphere !== null && (l.boundingSphere = e.boundingSphere.clone()),
                      (l.drawRange.start = e.drawRange.start),
                      (l.drawRange.count = e.drawRange.count),
                      (l.userData = Object.assign({}, e.userData)),
                      (c.geometry = l))
                  }
                  let t = o[e]
                  l.setAttribute(e, new P(t.array, t.itemSize, t.normalized))
                }
              ;(f.prototype.copy.call(c, e), this.parser.assignFinalMaterial(c), i.push(c))
            }
            return t.isGroup ? (t.clear(), t.add(...i), t) : i[0]
          }))
    }
  },
  Et = `glTF`,
  Dt = 12,
  Ot = { JSON: 1313821514, BIN: 5130562 },
  kt = class {
    constructor(e) {
      ;((this.name = U.KHR_BINARY_GLTF), (this.content = null), (this.body = null))
      let t = new DataView(e, 0, Dt),
        n = new TextDecoder()
      if (
        ((this.header = {
          magic: n.decode(new Uint8Array(e.slice(0, 4))),
          version: t.getUint32(4, !0),
          length: t.getUint32(8, !0),
        }),
        this.header.magic !== Et)
      )
        throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`)
      if (this.header.version < 2) throw Error(`THREE.GLTFLoader: Legacy binary file detected.`)
      let r = this.header.length - Dt,
        i = new DataView(e, Dt),
        a = 0
      for (; a < r; ) {
        let t = i.getUint32(a, !0)
        a += 4
        let r = i.getUint32(a, !0)
        if (((a += 4), r === Ot.JSON)) {
          let r = new Uint8Array(e, Dt + a, t)
          this.content = n.decode(r)
        } else if (r === Ot.BIN) {
          let n = Dt + a
          this.body = e.slice(n, n + t)
        }
        a += t
      }
      if (this.content === null) throw Error(`THREE.GLTFLoader: JSON content not found.`)
    }
  },
  At = class {
    constructor(e, t) {
      if (!t) throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`)
      ;((this.name = U.KHR_DRACO_MESH_COMPRESSION),
        (this.json = e),
        (this.dracoLoader = t),
        this.dracoLoader.preload())
    }
    decodePrimitive(e, t) {
      let n = this.json,
        r = this.dracoLoader,
        i = e.extensions[this.name].bufferView,
        a = e.extensions[this.name].attributes,
        o = {},
        s = {},
        c = {}
      for (let e in a) {
        let t = Bt[e] || e.toLowerCase()
        o[t] = a[e]
      }
      for (let t in e.attributes) {
        let r = Bt[t] || t.toLowerCase()
        if (a[t] !== void 0) {
          let i = n.accessors[e.attributes[t]]
          ;((c[r] = It[i.componentType].name), (s[r] = i.normalized === !0))
        }
      }
      return t.getDependency(`bufferView`, i).then(function (e) {
        return new Promise(function (t, n) {
          r.decodeDracoFile(
            e,
            function (e) {
              for (let t in e.attributes) {
                let n = e.attributes[t],
                  r = s[t]
                r !== void 0 && (n.normalized = r)
              }
              t(e)
            },
            o,
            c,
            T,
            n
          )
        })
      })
    }
  },
  jt = class {
    constructor() {
      this.name = U.KHR_TEXTURE_TRANSFORM
    }
    extendTexture(e, t) {
      if (
        (t.texCoord === void 0 || t.texCoord === e.channel) &&
        t.offset === void 0 &&
        t.rotation === void 0 &&
        t.scale === void 0
      )
        return e
      if (
        ((e = e.clone()),
        t.texCoord !== void 0 && (e.channel = t.texCoord),
        t.offset !== void 0 && e.offset.fromArray(t.offset),
        t.rotation !== void 0 && (e.rotation = t.rotation),
        t.scale !== void 0 && e.repeat.fromArray(t.scale),
        t.rotation !== void 0)
      ) {
        let t = Math.cos(e.rotation),
          n = Math.sin(e.rotation)
        ;(e.matrix.set(
          e.repeat.x * t,
          e.repeat.y * n,
          e.offset.x,
          -e.repeat.x * n,
          e.repeat.y * t,
          e.offset.y,
          0,
          0,
          1
        ),
          (e.matrixAutoUpdate = !1))
      }
      return ((e.needsUpdate = !0), e)
    }
  },
  Mt = class {
    constructor() {
      this.name = U.KHR_MESH_QUANTIZATION
    }
  },
  Nt = class extends Me {
    constructor(e, t, n, r) {
      super(e, t, n, r)
    }
    copySampleValue_(e) {
      let t = this.resultBuffer,
        n = this.sampleValues,
        r = this.valueSize,
        i = e * r * 3 + r
      for (let e = 0; e !== r; e++) t[e] = n[i + e]
      return t
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = o * 2,
        c = o * 3,
        l = r - t,
        u = (n - t) / l,
        d = u * u,
        f = d * u,
        p = e * c,
        m = p - c,
        h = -2 * f + 3 * d,
        g = f - d,
        _ = 1 - h,
        v = g - d + u
      for (let e = 0; e !== o; e++) {
        let t = a[m + e + o],
          n = a[m + e + s] * l,
          r = a[p + e + o],
          c = a[p + e] * l
        i[e] = _ * t + v * n + h * r + g * c
      }
      return i
    }
  },
  Pt = new N(),
  Ft = class extends Nt {
    interpolate_(e, t, n, r) {
      let i = super.interpolate_(e, t, n, r)
      return (Pt.fromArray(i).normalize().toArray(i), i)
    }
  },
  W = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123,
  },
  It = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  Lt = { 9728: te, 9729: d, 9984: ee, 9985: _, 9986: m, 9987: h },
  Rt = { 33071: a, 33648: r, 10497: n },
  zt = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  Bt = {
    POSITION: `position`,
    NORMAL: `normal`,
    TANGENT: `tangent`,
    TEXCOORD_0: `uv`,
    TEXCOORD_1: `uv1`,
    TEXCOORD_2: `uv2`,
    TEXCOORD_3: `uv3`,
    COLOR_0: `color`,
    WEIGHTS_0: `skinWeight`,
    JOINTS_0: `skinIndex`,
  },
  G = {
    scale: `scale`,
    translation: `position`,
    rotation: `quaternion`,
    weights: `morphTargetInfluences`,
  },
  Vt = { CUBICSPLINE: void 0, LINEAR: x, STEP: y },
  Ht = { OPAQUE: `OPAQUE`, MASK: `MASK`, BLEND: `BLEND` }
function Ut(e) {
  return (
    e.DefaultMaterial === void 0 &&
      (e.DefaultMaterial = new R({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: 0,
      })),
    e.DefaultMaterial
  )
}
function Wt(e, t, n) {
  for (let r in n.extensions)
    e[r] === void 0 &&
      ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
      (t.userData.gltfExtensions[r] = n.extensions[r]))
}
function K(e, t) {
  t.extras !== void 0 &&
    (typeof t.extras == `object`
      ? Object.assign(e.userData, t.extras)
      : console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, ` + t.extras))
}
function Gt(e, t, n) {
  let r = !1,
    i = !1,
    a = !1
  for (let e = 0, n = t.length; e < n; e++) {
    let n = t[e]
    if (
      (n.POSITION !== void 0 && (r = !0),
      n.NORMAL !== void 0 && (i = !0),
      n.COLOR_0 !== void 0 && (a = !0),
      r && i && a)
    )
      break
  }
  if (!r && !i && !a) return Promise.resolve(e)
  let o = [],
    s = [],
    c = []
  for (let l = 0, u = t.length; l < u; l++) {
    let u = t[l]
    if (r) {
      let t =
        u.POSITION === void 0 ? e.attributes.position : n.getDependency(`accessor`, u.POSITION)
      o.push(t)
    }
    if (i) {
      let t = u.NORMAL === void 0 ? e.attributes.normal : n.getDependency(`accessor`, u.NORMAL)
      s.push(t)
    }
    if (a) {
      let t = u.COLOR_0 === void 0 ? e.attributes.color : n.getDependency(`accessor`, u.COLOR_0)
      c.push(t)
    }
  }
  return Promise.all([Promise.all(o), Promise.all(s), Promise.all(c)]).then(function (t) {
    let n = t[0],
      o = t[1],
      s = t[2]
    return (
      r && (e.morphAttributes.position = n),
      i && (e.morphAttributes.normal = o),
      a && (e.morphAttributes.color = s),
      (e.morphTargetsRelative = !0),
      e
    )
  })
}
function Kt(e, t) {
  if ((e.updateMorphTargets(), t.weights !== void 0))
    for (let n = 0, r = t.weights.length; n < r; n++) e.morphTargetInfluences[n] = t.weights[n]
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    let n = t.extras.targetNames
    if (e.morphTargetInfluences.length === n.length) {
      e.morphTargetDictionary = {}
      for (let t = 0, r = n.length; t < r; t++) e.morphTargetDictionary[n[t]] = t
    } else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)
  }
}
function qt(e) {
  let t,
    n = e.extensions && e.extensions[U.KHR_DRACO_MESH_COMPRESSION]
  if (
    ((t = n
      ? `draco:` + n.bufferView + `:` + n.indices + `:` + Jt(n.attributes)
      : e.indices + `:` + Jt(e.attributes) + `:` + e.mode),
    e.targets !== void 0)
  )
    for (let n = 0, r = e.targets.length; n < r; n++) t += `:` + Jt(e.targets[n])
  return t
}
function Jt(e) {
  let t = ``,
    n = Object.keys(e).sort()
  for (let r = 0, i = n.length; r < i; r++) t += n[r] + `:` + e[n[r]] + `;`
  return t
}
function Yt(e) {
  switch (e) {
    case Int8Array:
      return 1 / 127
    case Uint8Array:
      return 1 / 255
    case Int16Array:
      return 1 / 32767
    case Uint16Array:
      return 1 / 65535
    default:
      throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)
  }
}
function Xt(e) {
  return e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0
    ? `image/jpeg`
    : e.search(/\.webp($|\?)/i) > 0 || e.search(/^data\:image\/webp/) === 0
      ? `image/webp`
      : e.search(/\.ktx2($|\?)/i) > 0 || e.search(/^data\:image\/ktx2/) === 0
        ? `image/ktx2`
        : `image/png`
}
var Zt = new g(),
  Qt = class {
    constructor(e = {}, t = {}) {
      ;((this.json = e),
        (this.extensions = {}),
        (this.plugins = {}),
        (this.options = t),
        (this.cache = new st()),
        (this.associations = new Map()),
        (this.primitiveCache = {}),
        (this.nodeCache = {}),
        (this.meshCache = { refs: {}, uses: {} }),
        (this.cameraCache = { refs: {}, uses: {} }),
        (this.lightCache = { refs: {}, uses: {} }),
        (this.sourceCache = {}),
        (this.textureCache = {}),
        (this.nodeNamesUsed = {}))
      let n = !1,
        r = -1,
        i = !1,
        a = -1
      if (typeof navigator < `u` && navigator.userAgent !== void 0) {
        let e = navigator.userAgent
        n = /^((?!chrome|android).)*safari/i.test(e) === !0
        let t = e.match(/Version\/(\d+)/)
        ;((r = n && t ? parseInt(t[1], 10) : -1),
          (i = e.indexOf(`Firefox`) > -1),
          (a = i ? e.match(/Firefox\/([0-9]+)\./)[1] : -1))
      }
      ;((this.textureLoader =
        typeof createImageBitmap > `u` || (n && r < 17) || (i && a < 98)
          ? new Ee(this.options.manager)
          : new we(this.options.manager)),
        this.textureLoader.setCrossOrigin(this.options.crossOrigin),
        this.textureLoader.setRequestHeader(this.options.requestHeader),
        (this.fileLoader = new De(this.options.manager)),
        this.fileLoader.setResponseType(`arraybuffer`),
        this.options.crossOrigin === `use-credentials` && this.fileLoader.setWithCredentials(!0))
    }
    setExtensions(e) {
      this.extensions = e
    }
    setPlugins(e) {
      this.plugins = e
    }
    parse(e, t) {
      let n = this,
        r = this.json,
        i = this.extensions
      ;(this.cache.removeAll(),
        (this.nodeCache = {}),
        this._invokeAll(function (e) {
          return e._markDefs && e._markDefs()
        }),
        Promise.all(
          this._invokeAll(function (e) {
            return e.beforeRoot && e.beforeRoot()
          })
        )
          .then(function () {
            return Promise.all([
              n.getDependencies(`scene`),
              n.getDependencies(`animation`),
              n.getDependencies(`camera`),
            ])
          })
          .then(function (t) {
            let a = {
              scene: t[0][r.scene || 0],
              scenes: t[0],
              animations: t[1],
              cameras: t[2],
              asset: r.asset,
              parser: n,
              userData: {},
            }
            return (
              Wt(i, a, r),
              K(a, r),
              Promise.all(
                n._invokeAll(function (e) {
                  return e.afterRoot && e.afterRoot(a)
                })
              ).then(function () {
                for (let e of a.scenes) e.updateMatrixWorld()
                e(a)
              })
            )
          })
          .catch(t))
    }
    _markDefs() {
      let e = this.json.nodes || [],
        t = this.json.skins || [],
        n = this.json.meshes || []
      for (let n = 0, r = t.length; n < r; n++) {
        let r = t[n].joints
        for (let t = 0, n = r.length; t < n; t++) e[r[t]].isBone = !0
      }
      for (let t = 0, r = e.length; t < r; t++) {
        let r = e[t]
        ;(r.mesh !== void 0 &&
          (this._addNodeRef(this.meshCache, r.mesh),
          r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)),
          r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera))
      }
    }
    _addNodeRef(e, t) {
      t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++)
    }
    _getNodeRef(e, t, n) {
      if (e.refs[t] <= 1) return n
      let r = n.clone(),
        i = (e, t) => {
          let n = this.associations.get(e)
          n != null && this.associations.set(t, n)
          for (let [n, r] of e.children.entries()) i(r, t.children[n])
        }
      return (i(n, r), (r.name += `_instance_` + e.uses[t]++), r)
    }
    _invokeOne(e) {
      let t = Object.values(this.plugins)
      t.push(this)
      for (let n = 0; n < t.length; n++) {
        let r = e(t[n])
        if (r) return r
      }
      return null
    }
    _invokeAll(e) {
      let t = Object.values(this.plugins)
      t.unshift(this)
      let n = []
      for (let r = 0; r < t.length; r++) {
        let i = e(t[r])
        i && n.push(i)
      }
      return n
    }
    getDependency(e, t) {
      let n = e + `:` + t,
        r = this.cache.get(n)
      if (!r) {
        switch (e) {
          case `scene`:
            r = this.loadScene(t)
            break
          case `node`:
            r = this._invokeOne(function (e) {
              return e.loadNode && e.loadNode(t)
            })
            break
          case `mesh`:
            r = this._invokeOne(function (e) {
              return e.loadMesh && e.loadMesh(t)
            })
            break
          case `accessor`:
            r = this.loadAccessor(t)
            break
          case `bufferView`:
            r = this._invokeOne(function (e) {
              return e.loadBufferView && e.loadBufferView(t)
            })
            break
          case `buffer`:
            r = this.loadBuffer(t)
            break
          case `material`:
            r = this._invokeOne(function (e) {
              return e.loadMaterial && e.loadMaterial(t)
            })
            break
          case `texture`:
            r = this._invokeOne(function (e) {
              return e.loadTexture && e.loadTexture(t)
            })
            break
          case `skin`:
            r = this.loadSkin(t)
            break
          case `animation`:
            r = this._invokeOne(function (e) {
              return e.loadAnimation && e.loadAnimation(t)
            })
            break
          case `camera`:
            r = this.loadCamera(t)
            break
          default:
            if (
              ((r = this._invokeOne(function (n) {
                return n != this && n.getDependency && n.getDependency(e, t)
              })),
              !r)
            )
              throw Error(`Unknown type: ` + e)
        }
        this.cache.add(n, r)
      }
      return r
    }
    getDependencies(e) {
      let t = this.cache.get(e)
      if (!t) {
        let n = this,
          r = this.json[e + (e === `mesh` ? `es` : `s`)] || []
        ;((t = Promise.all(
          r.map(function (t, r) {
            return n.getDependency(e, r)
          })
        )),
          this.cache.add(e, t))
      }
      return t
    }
    loadBuffer(e) {
      let t = this.json.buffers[e],
        n = this.fileLoader
      if (t.type && t.type !== `arraybuffer`)
        throw Error(`THREE.GLTFLoader: ` + t.type + ` buffer type is not supported.`)
      if (t.uri === void 0 && e === 0)
        return Promise.resolve(this.extensions[U.KHR_BINARY_GLTF].body)
      let r = this.options
      return new Promise(function (e, i) {
        n.load(Le.resolveURL(t.uri, r.path), e, void 0, function () {
          i(Error(`THREE.GLTFLoader: Failed to load buffer "` + t.uri + `".`))
        })
      })
    }
    loadBufferView(e) {
      let t = this.json.bufferViews[e]
      return this.getDependency(`buffer`, t.buffer).then(function (e) {
        let n = t.byteLength || 0,
          r = t.byteOffset || 0
        return e.slice(r, r + n)
      })
    }
    loadAccessor(e) {
      let n = this,
        r = this.json,
        i = this.json.accessors[e]
      if (i.bufferView === void 0 && i.sparse === void 0) {
        let e = zt[i.type],
          t = It[i.componentType],
          n = i.normalized === !0,
          r = new t(i.count * e)
        return Promise.resolve(new C(r, e, n))
      }
      let a = []
      return (
        i.bufferView === void 0
          ? a.push(null)
          : a.push(this.getDependency(`bufferView`, i.bufferView)),
        i.sparse !== void 0 &&
          (a.push(this.getDependency(`bufferView`, i.sparse.indices.bufferView)),
          a.push(this.getDependency(`bufferView`, i.sparse.values.bufferView))),
        Promise.all(a).then(function (e) {
          let a = e[0],
            o = zt[i.type],
            s = It[i.componentType],
            c = s.BYTES_PER_ELEMENT,
            l = c * o,
            u = i.byteOffset || 0,
            d = i.bufferView === void 0 ? void 0 : r.bufferViews[i.bufferView].byteStride,
            f = i.normalized === !0,
            p,
            m
          if (d && d !== l) {
            let e = Math.floor(u / d),
              r =
                `InterleavedBuffer:` +
                i.bufferView +
                `:` +
                i.componentType +
                `:` +
                e +
                `:` +
                i.count,
              l = n.cache.get(r)
            ;(l ||
              ((p = new s(a, e * d, (i.count * d) / c)), (l = new ce(p, d / c)), n.cache.add(r, l)),
              (m = new t(l, o, (u % d) / c, f)))
          } else
            ((p = a === null ? new s(i.count * o) : new s(a, u, i.count * o)), (m = new C(p, o, f)))
          if (i.sparse !== void 0) {
            let t = zt.SCALAR,
              n = It[i.sparse.indices.componentType],
              r = i.sparse.indices.byteOffset || 0,
              c = i.sparse.values.byteOffset || 0,
              l = new n(e[1], r, i.sparse.count * t),
              u = new s(e[2], c, i.sparse.count * o)
            ;(a !== null && (m = new C(m.array.slice(), m.itemSize, m.normalized)),
              (m.normalized = !1))
            for (let e = 0, t = l.length; e < t; e++) {
              let t = l[e]
              if (
                (m.setX(t, u[e * o]),
                o >= 2 && m.setY(t, u[e * o + 1]),
                o >= 3 && m.setZ(t, u[e * o + 2]),
                o >= 4 && m.setW(t, u[e * o + 3]),
                o >= 5)
              )
                throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)
            }
            m.normalized = f
          }
          return m
        })
      )
    }
    loadTexture(e) {
      let t = this.json,
        n = this.options,
        r = t.textures[e].source,
        i = t.images[r],
        a = this.textureLoader
      if (i.uri) {
        let e = n.manager.getHandler(i.uri)
        e !== null && (a = e)
      }
      return this.loadTextureImage(e, r, a)
    }
    loadTextureImage(e, t, n) {
      let r = this,
        i = this.json,
        a = i.textures[e],
        o = i.images[t],
        s = (o.uri || o.bufferView) + `:` + a.sampler
      if (this.textureCache[s]) return this.textureCache[s]
      let c = this.loadImageSource(t, n)
        .then(function (t) {
          ;((t.flipY = !1),
            (t.name = a.name || o.name || ``),
            t.name === `` &&
              typeof o.uri == `string` &&
              o.uri.startsWith(`data:image/`) === !1 &&
              (t.name = o.uri))
          let n = (i.samplers || {})[a.sampler] || {}
          return (
            (t.magFilter = Lt[n.magFilter] || 1006),
            (t.minFilter = Lt[n.minFilter] || 1008),
            (t.wrapS = Rt[n.wrapS] || 1e3),
            (t.wrapT = Rt[n.wrapT] || 1e3),
            (t.generateMipmaps =
              !t.isCompressedTexture && t.minFilter !== 1003 && t.minFilter !== 1006),
            r.associations.set(t, { textures: e }),
            t
          )
        })
        .catch(function () {
          return null
        })
      return ((this.textureCache[s] = c), c)
    }
    loadImageSource(t, n) {
      let r = this,
        i = this.json,
        a = this.options
      if (this.sourceCache[t] !== void 0) return this.sourceCache[t].then((e) => e.clone())
      let o = i.images[t],
        s = self.URL || self.webkitURL,
        c = o.uri || ``,
        l = !1
      if (o.bufferView !== void 0)
        c = r.getDependency(`bufferView`, o.bufferView).then(function (e) {
          l = !0
          let t = new Blob([e], { type: o.mimeType })
          return ((c = s.createObjectURL(t)), c)
        })
      else if (o.uri === void 0)
        throw Error(`THREE.GLTFLoader: Image ` + t + ` is missing URI and bufferView`)
      let u = Promise.resolve(c)
        .then(function (t) {
          return new Promise(function (r, i) {
            let o = r
            ;(n.isImageBitmapLoader === !0 &&
              (o = function (t) {
                let n = new e(t)
                ;((n.needsUpdate = !0), r(n))
              }),
              n.load(Le.resolveURL(t, a.path), o, void 0, i))
          })
        })
        .then(function (e) {
          return (
            l === !0 && s.revokeObjectURL(c),
            K(e, o),
            (e.userData.mimeType = o.mimeType || Xt(o.uri)),
            e
          )
        })
        .catch(function (e) {
          throw (console.error(`THREE.GLTFLoader: Couldn't load texture`, c), e)
        })
      return ((this.sourceCache[t] = u), u)
    }
    assignTexture(e, t, n, r) {
      let i = this
      return this.getDependency(`texture`, n.index).then(function (a) {
        if (!a) return null
        if (
          (n.texCoord !== void 0 && n.texCoord > 0 && ((a = a.clone()), (a.channel = n.texCoord)),
          i.extensions[U.KHR_TEXTURE_TRANSFORM])
        ) {
          let e = n.extensions === void 0 ? void 0 : n.extensions[U.KHR_TEXTURE_TRANSFORM]
          if (e) {
            let t = i.associations.get(a)
            ;((a = i.extensions[U.KHR_TEXTURE_TRANSFORM].extendTexture(a, e)),
              i.associations.set(a, t))
          }
        }
        return (r !== void 0 && (a.colorSpace = r), (e[t] = a), a)
      })
    }
    assignFinalMaterial(e) {
      let t = e.geometry,
        n = e.material,
        r = t.attributes.tangent === void 0,
        i = t.attributes.color !== void 0,
        a = t.attributes.normal === void 0
      if (e.isPoints) {
        let e = `PointsMaterial:` + n.uuid,
          t = this.cache.get(e)
        ;(t ||
          ((t = new ie()),
          S.prototype.copy.call(t, n),
          t.color.copy(n.color),
          (t.map = n.map),
          (t.sizeAttenuation = !1),
          this.cache.add(e, t)),
          (n = t))
      } else if (e.isLine) {
        let e = `LineBasicMaterial:` + n.uuid,
          t = this.cache.get(e)
        ;(t ||
          ((t = new oe()),
          S.prototype.copy.call(t, n),
          t.color.copy(n.color),
          (t.map = n.map),
          this.cache.add(e, t)),
          (n = t))
      }
      if (r || i || a) {
        let e = `ClonedMaterial:` + n.uuid + `:`
        ;(r && (e += `derivative-tangents:`),
          i && (e += `vertex-colors:`),
          a && (e += `flat-shading:`))
        let t = this.cache.get(e)
        ;(t ||
          ((t = n.clone()),
          i && (t.vertexColors = !0),
          a && (t.flatShading = !0),
          r &&
            (t.normalScale && (t.normalScale.y *= -1),
            t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)),
          this.cache.add(e, t),
          this.associations.set(t, this.associations.get(n))),
          (n = t))
      }
      e.material = n
    }
    getMaterialType() {
      return R
    }
    loadMaterial(e) {
      let t = this,
        n = this.json,
        r = this.extensions,
        i = n.materials[e],
        a,
        o = {},
        s = i.extensions || {},
        c = []
      if (s[U.KHR_MATERIALS_UNLIT]) {
        let e = r[U.KHR_MATERIALS_UNLIT]
        ;((a = e.getMaterialType()), c.push(e.extendParams(o, i, t)))
      } else {
        let n = i.pbrMetallicRoughness || {}
        if (((o.color = new p(1, 1, 1)), (o.opacity = 1), Array.isArray(n.baseColorFactor))) {
          let e = n.baseColorFactor
          ;(o.color.setRGB(e[0], e[1], e[2], T), (o.opacity = e[3]))
        }
        ;(n.baseColorTexture !== void 0 && c.push(t.assignTexture(o, `map`, n.baseColorTexture, u)),
          (o.metalness = n.metallicFactor === void 0 ? 1 : n.metallicFactor),
          (o.roughness = n.roughnessFactor === void 0 ? 1 : n.roughnessFactor),
          n.metallicRoughnessTexture !== void 0 &&
            (c.push(t.assignTexture(o, `metalnessMap`, n.metallicRoughnessTexture)),
            c.push(t.assignTexture(o, `roughnessMap`, n.metallicRoughnessTexture))),
          (a = this._invokeOne(function (t) {
            return t.getMaterialType && t.getMaterialType(e)
          })),
          c.push(
            Promise.all(
              this._invokeAll(function (t) {
                return t.extendMaterialParams && t.extendMaterialParams(e, o)
              })
            )
          ))
      }
      i.doubleSided === !0 && (o.side = 2)
      let l = i.alphaMode || Ht.OPAQUE
      if (
        (l === Ht.BLEND
          ? ((o.transparent = !0), (o.depthWrite = !1))
          : ((o.transparent = !1),
            l === Ht.MASK && (o.alphaTest = i.alphaCutoff === void 0 ? 0.5 : i.alphaCutoff)),
        i.normalTexture !== void 0 &&
          a !== F &&
          (c.push(t.assignTexture(o, `normalMap`, i.normalTexture)),
          (o.normalScale = new j(1, 1)),
          i.normalTexture.scale !== void 0))
      ) {
        let e = i.normalTexture.scale
        o.normalScale.set(e, e)
      }
      if (
        (i.occlusionTexture !== void 0 &&
          a !== F &&
          (c.push(t.assignTexture(o, `aoMap`, i.occlusionTexture)),
          i.occlusionTexture.strength !== void 0 &&
            (o.aoMapIntensity = i.occlusionTexture.strength)),
        i.emissiveFactor !== void 0 && a !== F)
      ) {
        let e = i.emissiveFactor
        o.emissive = new p().setRGB(e[0], e[1], e[2], T)
      }
      return (
        i.emissiveTexture !== void 0 &&
          a !== F &&
          c.push(t.assignTexture(o, `emissiveMap`, i.emissiveTexture, u)),
        Promise.all(c).then(function () {
          let n = new a(o)
          return (
            i.name && (n.name = i.name),
            K(n, i),
            t.associations.set(n, { materials: e }),
            i.extensions && Wt(r, n, i),
            n
          )
        })
      )
    }
    createUniqueName(e) {
      let t = Be.sanitizeNodeName(e || ``)
      return t in this.nodeNamesUsed
        ? t + `_` + ++this.nodeNamesUsed[t]
        : ((this.nodeNamesUsed[t] = 0), t)
    }
    loadGeometries(e) {
      let t = this,
        n = this.extensions,
        r = this.primitiveCache
      function i(e) {
        return n[U.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function (n) {
          return en(n, e, t)
        })
      }
      let a = []
      for (let n = 0, o = e.length; n < o; n++) {
        let o = e[n],
          s = qt(o),
          c = r[s]
        if (c) a.push(c.promise)
        else {
          let e
          ;((e =
            o.extensions && o.extensions[U.KHR_DRACO_MESH_COMPRESSION] ? i(o) : en(new v(), o, t)),
            o.mode === W.TRIANGLE_STRIP
              ? (e = e.then((e) => $e(e, 1)))
              : o.mode === W.TRIANGLE_FAN && (e = e.then((e) => $e(e, 2))),
            (r[s] = { primitive: o, promise: e }),
            a.push(e))
        }
      }
      return Promise.all(a)
    }
    loadMesh(e) {
      let t = this,
        n = this.json,
        r = this.extensions,
        a = n.meshes[e],
        o = a.primitives,
        s = []
      for (let e = 0, t = o.length; e < t; e++) {
        let t =
          o[e].material === void 0 ? Ut(this.cache) : this.getDependency(`material`, o[e].material)
        s.push(t)
      }
      return (
        s.push(t.loadGeometries(o)),
        Promise.all(s).then(async function (n) {
          let s = n.slice(0, n.length - 1),
            c = n[n.length - 1],
            l = []
          for (let n = 0, u = c.length; n < u; n++) {
            let u = c[n],
              d = o[n],
              f,
              p = s[n]
            if (
              d.mode === W.TRIANGLES ||
              d.mode === W.TRIANGLE_STRIP ||
              d.mode === W.TRIANGLE_FAN ||
              d.mode === void 0
            ) {
              let e = a.isSkinnedMesh === !0,
                t = u.hasAttribute(`skinIndex`) && u.hasAttribute(`skinWeight`)
              ;(e &&
                t === !1 &&
                console.warn(
                  `THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`
                ),
                (f = e && t ? new E(u, p) : new i(u, p)),
                f.isSkinnedMesh === !0 && f.normalizeSkinWeights())
            } else if (d.mode === W.LINES) f = new pe(u, p)
            else if (d.mode === W.LINE_STRIP) f = new ue(u, p)
            else if (d.mode === W.LINE_LOOP) f = new ae(u, p)
            else if (d.mode === W.POINTS) f = new ve(u, p)
            else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: ` + d.mode)
            ;(Object.keys(f.geometry.morphAttributes).length > 0 && Kt(f, a),
              (f.name = t.createUniqueName(a.name || `mesh_` + e)),
              K(f, a),
              d.extensions && Wt(r, f, d),
              t.assignFinalMaterial(f),
              l.push(f))
          }
          for (let n = 0, r = l.length; n < r; n++)
            t.associations.set(l[n], { meshes: e, primitives: n })
          if (l.length === 1) return (a.extensions && Wt(r, l[0], a), l[0])
          let u = new D()
          ;(a.extensions && Wt(r, u, a), t.associations.set(u, { meshes: e }))
          for (let e = 0, t = l.length; e < t; e++) u.add(l[e])
          return u
        })
      )
    }
    loadCamera(e) {
      let t,
        n = this.json.cameras[e],
        r = n[n.type]
      if (!r) {
        console.warn(`THREE.GLTFLoader: Missing camera parameters.`)
        return
      }
      return (
        n.type === `perspective`
          ? (t = new Ae(fe.radToDeg(r.yfov), r.aspectRatio || 1, r.znear || 1, r.zfar || 2e6))
          : n.type === `orthographic` &&
            (t = new Ie(-r.xmag, r.xmag, r.ymag, -r.ymag, r.znear, r.zfar)),
        n.name && (t.name = this.createUniqueName(n.name)),
        K(t, n),
        Promise.resolve(t)
      )
    }
    loadSkin(e) {
      let t = this.json.skins[e],
        n = []
      for (let e = 0, r = t.joints.length; e < r; e++) n.push(this._loadNodeShallow(t.joints[e]))
      return (
        t.inverseBindMatrices === void 0
          ? n.push(null)
          : n.push(this.getDependency(`accessor`, t.inverseBindMatrices)),
        Promise.all(n).then(function (e) {
          let n = e.pop(),
            r = e,
            i = [],
            a = []
          for (let e = 0, o = r.length; e < o; e++) {
            let o = r[e]
            if (o) {
              i.push(o)
              let t = new g()
              ;(n !== null && t.fromArray(n.array, e * 16), a.push(t))
            } else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`, t.joints[e])
          }
          return new be(i, a)
        })
      )
    }
    loadAnimation(e) {
      let t = this.json,
        n = this,
        r = t.animations[e],
        i = r.name ? r.name : `animation_` + e,
        a = [],
        o = [],
        s = [],
        c = [],
        l = []
      for (let e = 0, t = r.channels.length; e < t; e++) {
        let t = r.channels[e],
          n = r.samplers[t.sampler],
          i = t.target,
          u = i.node,
          d = r.parameters === void 0 ? n.input : r.parameters[n.input],
          f = r.parameters === void 0 ? n.output : r.parameters[n.output]
        i.node !== void 0 &&
          (a.push(this.getDependency(`node`, u)),
          o.push(this.getDependency(`accessor`, d)),
          s.push(this.getDependency(`accessor`, f)),
          c.push(n),
          l.push(i))
      }
      return Promise.all([
        Promise.all(a),
        Promise.all(o),
        Promise.all(s),
        Promise.all(c),
        Promise.all(l),
      ]).then(function (e) {
        let t = e[0],
          a = e[1],
          o = e[2],
          s = e[3],
          c = e[4],
          l = []
        for (let e = 0, r = t.length; e < r; e++) {
          let r = t[e],
            i = a[e],
            u = o[e],
            d = s[e],
            f = c[e]
          if (r === void 0) continue
          r.updateMatrix && r.updateMatrix()
          let p = n._createAnimationTracks(r, i, u, d, f)
          if (p) for (let e = 0; e < p.length; e++) l.push(p[e])
        }
        let u = new Ve(i, void 0, l)
        return (K(u, r), u)
      })
    }
    createNodeMesh(e) {
      let t = this.json,
        n = this,
        r = t.nodes[e]
      return r.mesh === void 0
        ? null
        : n.getDependency(`mesh`, r.mesh).then(function (e) {
            let t = n._getNodeRef(n.meshCache, r.mesh, e)
            return (
              r.weights !== void 0 &&
                t.traverse(function (e) {
                  if (e.isMesh)
                    for (let t = 0, n = r.weights.length; t < n; t++)
                      e.morphTargetInfluences[t] = r.weights[t]
                }),
              t
            )
          })
    }
    loadNode(e) {
      let t = this.json,
        n = this,
        r = t.nodes[e],
        i = n._loadNodeShallow(e),
        a = [],
        o = r.children || []
      for (let e = 0, t = o.length; e < t; e++) a.push(n.getDependency(`node`, o[e]))
      let s = r.skin === void 0 ? Promise.resolve(null) : n.getDependency(`skin`, r.skin)
      return Promise.all([i, Promise.all(a), s]).then(function (e) {
        let t = e[0],
          n = e[1],
          r = e[2]
        r !== null &&
          t.traverse(function (e) {
            e.isSkinnedMesh && e.bind(r, Zt)
          })
        for (let e = 0, r = n.length; e < r; e++) t.add(n[e])
        if (t.userData.pivot !== void 0 && n.length > 0) {
          let e = t.userData.pivot,
            r = n[0]
          ;((t.pivot = new M().fromArray(e)),
            (t.position.x -= e[0]),
            (t.position.y -= e[1]),
            (t.position.z -= e[2]),
            r.position.set(0, 0, 0),
            delete t.userData.pivot)
        }
        return t
      })
    }
    _loadNodeShallow(e) {
      let t = this.json,
        n = this.extensions,
        r = this
      if (this.nodeCache[e] !== void 0) return this.nodeCache[e]
      let i = t.nodes[e],
        a = i.name ? r.createUniqueName(i.name) : ``,
        o = [],
        s = r._invokeOne(function (t) {
          return t.createNodeMesh && t.createNodeMesh(e)
        })
      return (
        s && o.push(s),
        i.camera !== void 0 &&
          o.push(
            r.getDependency(`camera`, i.camera).then(function (e) {
              return r._getNodeRef(r.cameraCache, i.camera, e)
            })
          ),
        r
          ._invokeAll(function (t) {
            return t.createNodeAttachment && t.createNodeAttachment(e)
          })
          .forEach(function (e) {
            o.push(e)
          }),
        (this.nodeCache[e] = Promise.all(o).then(function (t) {
          let o
          if (
            ((o =
              i.isBone === !0
                ? new ye()
                : t.length > 1
                  ? new D()
                  : t.length === 1
                    ? t[0]
                    : new f()),
            o !== t[0])
          )
            for (let e = 0, n = t.length; e < n; e++) o.add(t[e])
          if (
            (i.name && ((o.userData.name = i.name), (o.name = a)),
            K(o, i),
            i.extensions && Wt(n, o, i),
            i.matrix !== void 0)
          ) {
            let e = new g()
            ;(e.fromArray(i.matrix), o.applyMatrix4(e))
          } else
            (i.translation !== void 0 && o.position.fromArray(i.translation),
              i.rotation !== void 0 && o.quaternion.fromArray(i.rotation),
              i.scale !== void 0 && o.scale.fromArray(i.scale))
          if (!r.associations.has(o)) r.associations.set(o, {})
          else if (i.mesh !== void 0 && r.meshCache.refs[i.mesh] > 1) {
            let e = r.associations.get(o)
            r.associations.set(o, { ...e })
          }
          return ((r.associations.get(o).nodes = e), o)
        })),
        this.nodeCache[e]
      )
    }
    loadScene(t) {
      let n = this.extensions,
        r = this.json.scenes[t],
        i = this,
        a = new D()
      ;(r.name && (a.name = i.createUniqueName(r.name)), K(a, r), r.extensions && Wt(n, a, r))
      let o = r.nodes || [],
        s = []
      for (let e = 0, t = o.length; e < t; e++) s.push(i.getDependency(`node`, o[e]))
      return Promise.all(s).then(function (t) {
        for (let e = 0, n = t.length; e < n; e++) {
          let n = t[e]
          n.parent === null ? a.add(n) : a.add(tt(n))
        }
        return (
          (i.associations = ((t) => {
            let n = new Map()
            for (let [t, r] of i.associations) (t instanceof S || t instanceof e) && n.set(t, r)
            return (
              t.traverse((e) => {
                let t = i.associations.get(e)
                t != null && n.set(e, t)
              }),
              n
            )
          })(a)),
          a
        )
      })
    }
    _createAnimationTracks(e, t, n, r, i) {
      let a = [],
        o = e.name ? e.name : e.uuid,
        s = []
      function c(e) {
        e.morphTargetInfluences && s.push(e.name ? e.name : e.uuid)
      }
      G[i.path] === G.weights ? (c(e), e.isGroup && e.children.forEach(c)) : s.push(o)
      let l
      switch (G[i.path]) {
        case G.weights:
          l = Te
          break
        case G.rotation:
          l = Ne
          break
        case G.translation:
        case G.scale:
          l = Ce
          break
        default:
          switch (n.itemSize) {
            case 1:
              l = Te
              break
            default:
              l = Ce
          }
      }
      let u = r.interpolation === void 0 ? x : Vt[r.interpolation],
        d = this._getArrayFromAccessor(n)
      for (let e = 0, n = s.length; e < n; e++) {
        let n = new l(s[e] + `.` + G[i.path], t.array, d, u)
        ;(r.interpolation === `CUBICSPLINE` && this._createCubicSplineTrackInterpolant(n),
          a.push(n))
      }
      return a
    }
    _getArrayFromAccessor(e) {
      let t = e.array
      if (e.normalized) {
        let e = Yt(t.constructor),
          n = new Float32Array(t.length)
        for (let r = 0, i = t.length; r < i; r++) n[r] = t[r] * e
        t = n
      }
      return t
    }
    _createCubicSplineTrackInterpolant(e) {
      ;((e.createInterpolant = function (e) {
        return new (this instanceof Ne ? Ft : Nt)(
          this.times,
          this.values,
          this.getValueSize() / 3,
          e
        )
      }),
        (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0))
    }
  }
function $t(e, t, n) {
  let r = t.attributes,
    i = new xe()
  if (r.POSITION !== void 0) {
    let e = n.json.accessors[r.POSITION],
      t = e.min,
      a = e.max
    if (t !== void 0 && a !== void 0) {
      if ((i.set(new M(t[0], t[1], t[2]), new M(a[0], a[1], a[2])), e.normalized)) {
        let t = Yt(It[e.componentType])
        ;(i.min.multiplyScalar(t), i.max.multiplyScalar(t))
      }
    } else {
      console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)
      return
    }
  } else return
  let a = t.targets
  if (a !== void 0) {
    let e = new M(),
      t = new M()
    for (let r = 0, i = a.length; r < i; r++) {
      let i = a[r]
      if (i.POSITION !== void 0) {
        let r = n.json.accessors[i.POSITION],
          a = r.min,
          o = r.max
        if (a !== void 0 && o !== void 0) {
          if (
            (t.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))),
            t.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))),
            t.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))),
            r.normalized)
          ) {
            let e = Yt(It[r.componentType])
            t.multiplyScalar(e)
          }
          e.max(t)
        } else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)
      }
    }
    i.expandByVector(e)
  }
  e.boundingBox = i
  let o = new b()
  ;(i.getCenter(o.center), (o.radius = i.min.distanceTo(i.max) / 2), (e.boundingSphere = o))
}
function en(e, t, n) {
  let r = t.attributes,
    i = []
  function a(t, r) {
    return n.getDependency(`accessor`, t).then(function (t) {
      e.setAttribute(r, t)
    })
  }
  for (let t in r) {
    let n = Bt[t] || t.toLowerCase()
    n in e.attributes || i.push(a(r[t], n))
  }
  if (t.indices !== void 0 && !e.index) {
    let r = n.getDependency(`accessor`, t.indices).then(function (t) {
      e.setIndex(t)
    })
    i.push(r)
  }
  return (
    A.workingColorSpace !== `srgb-linear` &&
      `COLOR_0` in r &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${A.workingColorSpace}" not supported.`
      ),
    K(e, t),
    $t(e, t, n),
    Promise.all(i).then(function () {
      return t.targets === void 0 ? e : Gt(e, t.targets, n)
    })
  )
}
var tn = (function () {
    var e = `b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb`,
      t = `b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb`,
      n = new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10,
        22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11,
      ]),
      r = new Uint8Array([
        32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12,
        40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69,
        56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115,
      ])
    if (typeof WebAssembly != `object`) return { supported: !1 }
    var i = WebAssembly.validate(n) ? s(t) : s(e),
      a,
      o = WebAssembly.instantiate(i, {}).then(function (e) {
        ;((a = e.instance), a.exports.__wasm_call_ctors())
      })
    function s(e) {
      for (var t = new Uint8Array(e.length), n = 0; n < e.length; ++n) {
        var i = e.charCodeAt(n)
        t[n] = i > 96 ? i - 97 : i > 64 ? i - 39 : i + 4
      }
      for (var a = 0, n = 0; n < e.length; ++n)
        t[a++] = t[n] < 60 ? r[t[n]] : (t[n] - 60) * 64 + t[++n]
      return t.buffer.slice(0, a)
    }
    function c(e, t, n, r, i, a, o) {
      var s = e.exports.sbrk,
        c = (r + 3) & -4,
        l = s(c * i),
        u = s(a.length),
        d = new Uint8Array(e.exports.memory.buffer)
      d.set(a, u)
      var f = t(l, r, i, u, a.length)
      if ((f == 0 && o && o(l, c, i), n.set(d.subarray(l, l + r * i)), s(l - s(0)), f != 0))
        throw Error(`Malformed buffer data: ` + f)
    }
    var l = {
        NONE: ``,
        OCTAHEDRAL: `meshopt_decodeFilterOct`,
        QUATERNION: `meshopt_decodeFilterQuat`,
        EXPONENTIAL: `meshopt_decodeFilterExp`,
        COLOR: `meshopt_decodeFilterColor`,
      },
      u = {
        ATTRIBUTES: `meshopt_decodeVertexBuffer`,
        TRIANGLES: `meshopt_decodeIndexBuffer`,
        INDICES: `meshopt_decodeIndexSequence`,
      },
      d = [],
      f = 0
    function p(e) {
      var t = { object: new Worker(e), pending: 0, requests: {} }
      return (
        (t.object.onmessage = function (e) {
          var n = e.data
          ;((t.pending -= n.count), t.requests[n.id][n.action](n.value), delete t.requests[n.id])
        }),
        t
      )
    }
    function m(e) {
      for (
        var t =
            `self.ready = WebAssembly.instantiate(new Uint8Array([` +
            new Uint8Array(i) +
            `]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = ` +
            g.name +
            `;` +
            c.toString() +
            g.toString(),
          n = new Blob([t], { type: `text/javascript` }),
          r = URL.createObjectURL(n),
          a = d.length;
        a < e;
        ++a
      )
        d[a] = p(r)
      for (var a = e; a < d.length; ++a) d[a].object.postMessage({})
      ;((d.length = e), URL.revokeObjectURL(r))
    }
    function h(e, t, n, r, i) {
      for (var a = d[0], o = 1; o < d.length; ++o) d[o].pending < a.pending && (a = d[o])
      return new Promise(function (o, s) {
        var c = new Uint8Array(n),
          l = ++f
        ;((a.pending += e),
          (a.requests[l] = { resolve: o, reject: s }),
          a.object.postMessage({ id: l, count: e, size: t, source: c, mode: r, filter: i }, [
            c.buffer,
          ]))
      })
    }
    function g(e) {
      var t = e.data
      self.ready.then(function (e) {
        if (!t.id) return self.close()
        try {
          var n = new Uint8Array(t.count * t.size)
          ;(c(e, e.exports[t.mode], n, t.count, t.size, t.source, e.exports[t.filter]),
            self.postMessage({ id: t.id, count: t.count, action: `resolve`, value: n }, [n.buffer]))
        } catch (e) {
          self.postMessage({ id: t.id, count: t.count, action: `reject`, value: e })
        }
      })
    }
    return {
      ready: o,
      supported: !0,
      useWorkers: function (e) {
        m(e)
      },
      decodeVertexBuffer: function (e, t, n, r, i) {
        c(a, a.exports.meshopt_decodeVertexBuffer, e, t, n, r, a.exports[l[i]])
      },
      decodeIndexBuffer: function (e, t, n, r) {
        c(a, a.exports.meshopt_decodeIndexBuffer, e, t, n, r)
      },
      decodeIndexSequence: function (e, t, n, r) {
        c(a, a.exports.meshopt_decodeIndexSequence, e, t, n, r)
      },
      decodeGltfBuffer: function (e, t, n, r, i, o) {
        c(a, a.exports[u[i]], e, t, n, r, a.exports[l[o]])
      },
      decodeGltfBufferAsync: function (e, t, n, r, i) {
        return d.length > 0
          ? h(e, t, n, u[r], l[i])
          : o.then(function () {
              var o = new Uint8Array(e * t)
              return (c(a, a.exports[u[r]], o, e, t, n, a.exports[l[i]]), o)
            })
      },
    }
  })(),
  nn = 0,
  q = 1,
  rn = 2,
  an = 3,
  on = 4,
  J = 5,
  sn = 6,
  cn = 7,
  ln = 8,
  un = 9,
  dn = 10,
  fn = 11,
  pn = 12,
  mn = [1.7, 1.1 / 3, 12],
  hn = {
    LH_White: { kind: q, grime: 1 },
    LH_Red: { kind: q, grime: 0.6 },
    LH_WallWhite: { kind: q, grime: 1, masonry: mn, ao: 0.45 },
    LH_WallRed: { kind: q, grime: 0.6, masonry: mn, ao: 0.45 },
    LH_Stone: { kind: rn },
    LH_Stone2: { kind: rn },
    LH_Metal: { kind: an },
    LH_Brass: { kind: on },
    LH_Wood: { kind: J, axis: [0, 1, 0] },
    LH_Window: { kind: ln },
    Rock: { kind: sn },
    Rock_Moss: { kind: cn },
    Boat_White: { kind: q, strakes: 0.075 },
    Boat_Red: { kind: q, strakes: 0.075 },
    Boat_Teal: { kind: q, strakes: 0.075 },
    Boat_WoodIn: { kind: J, axis: [0, 0, 1], strakes: 0.075 },
    Boat_Rail: { kind: J, axis: [0, 0, 1] },
    Boat_Seat: { kind: J, axis: [1, 0, 0] },
    Boat_Oar: { kind: J, axis: [0, 0, 1] },
    Boat_Brass: { kind: on },
    Palm_Trunk: { kind: un, sway: 1 },
    Palm_Frond: { kind: dn, sway: 2 },
    Palm_Coconut: { kind: pn, sway: 1 },
    Palm_Cut: { kind: fn },
    Palm_Merged: { kind: nn, sway: 2, packed: !0 },
    Bench_Wood: { kind: J, axis: [1, 0, 0] },
    Bench_WoodDark: { kind: J, axis: [0, 1, 0] },
    Bench_Metal: { kind: an },
    Bench_Red: { kind: q },
    Axe_Handle: { kind: J, axis: [0, 1, 0] },
    Axe_Head: { kind: an },
    Axe_Band: { kind: on },
    Axe_Edge: { kind: an },
    Bench_Steel: { kind: an },
    Log_Bark: { kind: un, axis: [1, 0, 0] },
    Log_End: { kind: fn, axis: [1, 0, 0] },
    Pickaxe_Handle: { kind: J, axis: [0, 1, 0] },
    Pickaxe_Head: { kind: J, axis: [0, 0, 1] },
    Rod_Bamboo: { kind: J, axis: [0, 1, 0] },
    Rod_Node: { kind: J, axis: [0, 1, 0] },
    Rod_Cap: { kind: q },
    FBoat_Deck: { kind: J, axis: [0, 0, 1] },
    FBoat_Mast: { kind: J, axis: [0, 1, 0] },
    FBoat_Crate: { kind: J, axis: [1, 0, 0] },
    Bonfire_Stone: { kind: rn },
  }
function gn(e) {
  return e.userData.lhUniforms ?? null
}
var _n = 14
function Y(e) {
  e.updateMatrixWorld(!0)
  let t = e.matrixWorld.clone().invert()
  e.traverse((e) => {
    let n = e
    n.isMesh &&
      !n.geometry.getAttribute(`aObj`) &&
      vn(n.geometry, t.clone().multiply(n.matrixWorld))
  })
}
function vn(e, t) {
  let n = e.getAttribute(`position`),
    r = e.getAttribute(`normal`),
    i = n.count,
    a = new Float32Array(i * 3),
    o = new M()
  for (let e = 0; e < i; e++)
    (o.fromBufferAttribute(n, e).applyMatrix4(t),
      (a[e * 3] = o.x),
      (a[e * 3 + 1] = o.y),
      (a[e * 3 + 2] = o.z))
  e.setAttribute(`aObj`, new C(a, 3))
  let s = new Float32Array(i)
  if ((e.setAttribute(`aEdge`, new C(s, 1)), !r)) return
  let c = new Int32Array(i),
    l = new Map(),
    u = 0
  for (let e = 0; e < i; e++) {
    let t = `${Math.round(a[e * 3] * 1e4)},${Math.round(a[e * 3 + 1] * 1e4)},${Math.round(a[e * 3 + 2] * 1e4)}`,
      n = l.get(t)
    ;(n === void 0 && l.set(t, (n = u++)), (c[e] = n))
  }
  let d = new _e().getNormalMatrix(t),
    f = new Float32Array(u * 3),
    p = new Float32Array(u * 3)
  for (let e = 0; e < i; e++) {
    o.fromBufferAttribute(r, e).applyMatrix3(d).normalize()
    let t = c[e]
    ;((f[t * 3] += o.x),
      (f[t * 3 + 1] += o.y),
      (f[t * 3 + 2] += o.z),
      (p[t * 3] = a[e * 3]),
      (p[t * 3 + 1] = a[e * 3 + 1]),
      (p[t * 3 + 2] = a[e * 3 + 2]))
  }
  for (let e = 0; e < u; e++) {
    let t = Math.hypot(f[e * 3], f[e * 3 + 1], f[e * 3 + 2]) || 1
    ;((f[e * 3] /= t), (f[e * 3 + 1] /= t), (f[e * 3 + 2] /= t))
  }
  let m = new Float32Array(u),
    h = new Uint16Array(u),
    g = e.getIndex(),
    _ = g ? g.count / 3 : i / 3,
    v = (e, t) => c[g ? g.getX(e * 3 + t) : e * 3 + t],
    y = (e, t) => {
      if (e === t) return
      let n = p[e * 3] - p[t * 3],
        r = p[e * 3 + 1] - p[t * 3 + 1],
        i = p[e * 3 + 2] - p[t * 3 + 2],
        a = n * n + r * r + i * i
      if (a < 1e-12) return
      let o =
        ((f[e * 3] - f[t * 3]) * n +
          (f[e * 3 + 1] - f[t * 3 + 1]) * r +
          (f[e * 3 + 2] - f[t * 3 + 2]) * i) /
        a
      ;((m[e] += o), (m[t] += o), h[e]++, h[t]++)
    }
  for (let e = 0; e < _; e++) {
    let t = v(e, 0),
      n = v(e, 1),
      r = v(e, 2)
    ;(y(t, n), y(n, r), y(r, t))
  }
  for (let e = 0; e < i; e++) {
    let t = c[e]
    s[e] = h[t] ? Math.max(-1, Math.min(1, m[t] / h[t] / _n)) : 0
  }
}
function yn(e, t) {
  e.updateMatrixWorld(!0)
  let n = e.matrixWorld.clone().invert(),
    r = []
  e.traverse((e) => {
    let t = e
    if (!t.isMesh) return
    let i = n.clone().multiply(t.matrixWorld),
      a = Array.isArray(t.material) ? t.material : [t.material]
    if (a.length > 1 && t.geometry.groups.length)
      for (let e of t.geometry.groups)
        r.push({
          geo: t.geometry,
          m: i,
          mat: a[e.materialIndex ?? 0],
          group: { start: e.start, count: e.count },
        })
    else r.push({ geo: t.geometry, m: i, mat: a[0] })
  })
  let a = 0,
    o = 0
  for (let e of r)
    ((a += e.geo.getAttribute(`position`).count),
      (o += e.group ? e.group.count : (e.geo.index?.count ?? e.geo.getAttribute(`position`).count)))
  let s = new Float32Array(a * 3),
    c = new Float32Array(a * 3),
    l = new Float32Array(a * 4),
    u = new Float32Array(a * 3),
    d = new Float32Array(a),
    f = new Float32Array(a * 3),
    p = new Float32Array(a * 3),
    m = new Float32Array(a),
    h = new Uint32Array(o),
    g = new M(),
    _ = 0,
    y = 0
  for (let e of r) {
    let t = e.geo,
      n = t.getAttribute(`position`),
      r = t.getAttribute(`normal`),
      i = t.getAttribute(`color`),
      a = t.getAttribute(`aObj`),
      o = t.getAttribute(`aEdge`),
      v = t.getAttribute(`_leaf`),
      b = t.getAttribute(`_trunk`),
      x = new _e().getNormalMatrix(e.m),
      S = e.mat.color,
      C = (hn[e.mat.name] ?? { kind: nn }).kind
    for (let t = 0; t < n.count; t++) {
      let h = _ + t
      ;(g.fromBufferAttribute(n, t).applyMatrix4(e.m),
        s.set([g.x, g.y, g.z], h * 3),
        r &&
          (g.fromBufferAttribute(r, t).applyMatrix3(x).normalize(), c.set([g.x, g.y, g.z], h * 3)),
        l.set([S.r, S.g, S.b, i ? i.getX(t) : 1], h * 4),
        a && u.set([a.getX(t), a.getY(t), a.getZ(t)], h * 3),
        o && (d[h] = o.getX(t)),
        v && f.set([v.getX(t), v.getY(t), v.getZ(t)], h * 3),
        b && p.set([b.getX(t), b.getY(t), b.getZ(t)], h * 3),
        (m[h] = C))
    }
    let w = e.group?.start ?? 0,
      T = e.group?.count ?? t.index?.count ?? n.count
    for (let e = 0; e < T; e++) h[y + e] = _ + (t.index ? t.index.getX(w + e) : w + e)
    ;((_ += n.count), (y += T))
  }
  let b = new v()
  ;(b.setAttribute(`position`, new C(s, 3)),
    b.setAttribute(`normal`, new C(c, 3)),
    b.setAttribute(`color`, new C(l, 4)),
    b.setAttribute(`aObj`, new C(u, 3)),
    b.setAttribute(`aEdge`, new C(d, 1)),
    b.setAttribute(`_leaf`, new C(f, 3)),
    b.setAttribute(`_trunk`, new C(p, 3)),
    b.setAttribute(`aKind`, new C(m, 1)),
    b.setIndex(new C(h, 1)),
    b.computeBoundingSphere(),
    b.computeBoundingBox())
  let x = r[0]?.mat,
    S = new R({ vertexColors: !0, roughness: x?.roughness ?? 0.85, metalness: 0 })
  S.name = t
  let w = new i(b, S)
  return ((w.name = `${e.name}_Merged`), w)
}
var bn = `
uniform float uLhSurface;
uniform float uLhPacked;
varying float vLhKind;
uniform vec3 uLhAxis;
uniform float uLhGrime;
uniform vec3 uLhMasonry;
uniform float uLhStrakes;
uniform float uLhAO;
uniform vec3 uLhSky;
uniform float uLhGlow;
uniform vec3 uLhCenter;
varying vec3 vLhObj;
varying float vLhEdge;
varying vec3 vLhSeed;
varying vec3 vLhLeaf;
varying vec3 vLhTrunk;
${Ke}
// Detail finer than about two pixels fades out (its average stays).
float lhFade(float size, float px) { return clamp(size / (px * 2.5) - 0.4, 0.0, 1.0); }
// A shading normal from a height field over the surface, given how much the height changes toward the next
// pixel across and down (screen-space derivatives of position: no tangents needed).
vec3 lhBump(vec3 pos, vec3 n, float dhx, float dhy) {
  vec3 dpdx = dFdx(pos);
  vec3 dpdy = dFdy(pos);
  vec3 r1 = cross(dpdy, n);
  vec3 r2 = cross(n, dpdx);
  float det = dot(dpdx, r1);
  if (abs(det) < 1e-12) return n;
  vec3 grad = sign(det) * (dhx * r1 + dhy * r2);
  vec3 b = abs(det) * n - grad;
  return dot(b, b) > 1e-20 ? normalize(b) : n;
}
// Masonry under the paint (the tower wall): courses of blocks around the vertical axis, staggered.
// x = distance to the nearest joint (units), y = 0..1 across the block's width, z = 0..1 up its course,
// w = the block's own random value.
vec4 lhMasonry(vec3 q) {
  float cy = (q.y - uLhMasonry.x) / uLhMasonry.y;
  float row = floor(cy);
  float bx = (atan(q.z, q.x) / 6.2831853 + 0.5) * uLhMasonry.z + mod(row, 2.0) * 0.5;
  float blk = 6.2831853 * length(q.xz) / uLhMasonry.z;
  float fx = fract(bx);
  float fy = fract(cy);
  float joint = min(min(fy, 1.0 - fy) * uLhMasonry.y, min(fx, 1.0 - fx) * blk);
  return vec4(joint, fx, fy, lhHash12(vec2(mod(floor(bx), uLhMasonry.z), row * 7.1)));
}
// The surface's relief (world units) at object-space point q (p: the same, offset per copy of the prop).
float lhHeight(float kind, vec3 q, vec3 p, float px) {
  float h = 0.0;
  if (kind > 0.5 && kind < 1.5) {
    h = lhNoise3(p * 38.0) * 0.00025 * lhFade(1.0 / 38.0, px) + lhNoise3(p * vec3(3.0, 44.0, 3.0)) * 0.0003 * lhFade(1.0 / 44.0, px);
    if (uLhMasonry.y > 0.0) {
      // each block bevelled down into its joint and a little proud in the middle
      vec4 m = lhMasonry(q);
      float pillow = (1.0 - pow(2.0 * m.y - 1.0, 2.0)) * (1.0 - pow(2.0 * m.z - 1.0, 2.0));
      h += smoothstep(0.003, 0.032, m.x) * 0.008 + pillow * 0.002 + (lhFbm3(p * 7.0) - 0.5) * 0.0015;
    }
  } else if (kind > 1.5 && kind < 2.5) {
    h = lhFbm3(p * 9.0) * 0.007 * lhFade(1.0 / 9.0, px) + lhFbm3(p * 3.5) * 0.004 + lhNoise3(p * 30.0) * 0.0008 * lhFade(1.0 / 30.0, px);
  } else if (kind > 2.5 && kind < 3.5) {
    h = lhNoise3(p * 60.0) * 0.00025 * lhFade(1.0 / 60.0, px);
  } else if (kind > 4.5 && kind < 5.5) {
    vec3 ax = normalize(uLhAxis);
    float along = dot(p, ax);
    vec3 acr = p - ax * along * 0.94;
    h = lhNoise3(acr * 26.0 + ax * along * 1.5) * 0.001 * lhFade(1.0 / 26.0, px) + lhNoise3(acr * 90.0 + ax * along * 4.0) * 0.0003 * lhFade(1.0 / 90.0, px);
  } else if (kind > 8.5 && kind < 9.5) {
    // criss-cross fibres wrapped round the trunk (nine turns of them, so they meet all the way round)
    vec3 ax = normalize(uLhAxis);
    float along = dot(q, ax);
    float ang = atan(dot(q, vec3(ax.y, ax.z, ax.x)), dot(q, vec3(ax.z, ax.x, ax.y)));
    float fib = abs(fract(ang * 1.4323945 + along * 5.0) - 0.5) + abs(fract(ang * 1.4323945 - along * 5.0) - 0.5);
    h = fib * 0.004 * lhFade(0.1, px) + lhNoise3(p * 30.0) * 0.001 * lhFade(1.0 / 30.0, px);
  } else if (kind > 10.5 && kind < 11.5) {
    float r = length(cross(q - uLhCenter, normalize(uLhAxis)));
    h = sin(r * 120.0 + lhNoise3(p * 8.0) * 3.0) * 0.0006 * lhFade(0.05, px);
  } else if (kind > 11.5 && kind < 12.5) {
    h = lhNoise3(p * vec3(40.0, 12.0, 40.0)) * 0.002 * lhFade(1.0 / 40.0, px);
  } else if (kind > 5.5 && kind < 6.5) {
    vec2 pit = lhDots3(p * 11.0, 0.13, px * 11.0);
    h = lhFbm3(p * 4.5) * 0.01 + lhFbm3(p * 10.0) * 0.004 * lhFade(1.0 / 10.0, px) - pit.x * step(0.6, pit.y) * 0.004 * lhFade(1.0 / 11.0, px);
  }
  if (uLhStrakes > 0.0) {
    // planks at constant height, each lapping over the one below
    h += (1.0 - fract(q.y / uLhStrakes)) * 0.0025;
  }
  return h;
}
// Set by the albedo hook, used by the normal hook and after the lights.
vec3 lhSurfN;
float lhRough;
float lhSheen;
`,
  xn = `
{
  vec3 p = vLhObj + vLhSeed;
  float px = max(length(fwidth(vLhObj)), 1e-5);
  vec3 wn = normalize(vWorldNormal);
  float ao = 1.0;
#if defined( USE_COLOR_ALPHA )
  ao = uLhPacked > 0.5 ? vColor.a : vColor.r;
#elif defined( USE_COLOR )
  ao = vColor.r;
#endif
  float edge = clamp(vLhEdge, 0.0, 1.0);
  float crease = clamp(-vLhEdge, 0.0, 1.0);
  vec3 c = diffuse;
#if defined( USE_COLOR )
  if (uLhPacked > 0.5) c = vColor.rgb;
#endif
  lhRough = 1.0;
  lhSheen = 0.0;
  float kind = uLhPacked > 0.5 ? floor(vLhKind + 0.5) : uLhSurface;
  vec3 facet = vec3(0.0);

  if (kind > 0.5 && kind < 1.5) {
    // Painted plaster: a soft tonal drift, a fine grain and horizontal brush strokes in the paint; a little
    // grime near the ground; edges catch the light, creases gather shade.
    c *= 0.975 + 0.05 * lhFbm3(p * 1.3);
    float grain = lhNoise3(p * 38.0);
    float brush = lhNoise3(p * vec3(3.0, 44.0, 3.0));
    c *= 1.0 + (grain - 0.5) * 0.04 * lhFade(1.0 / 38.0, px) + (brush - 0.5) * 0.035 * lhFade(1.0 / 44.0, px);
    if (uLhMasonry.y > 0.0) {
      // Masonry under the paint: each block its own shade, the joints softly filled by the paint, a little
      // shade in the bevel down into each joint. (The wall's baked AO is faint here: it smudged.)
      vec4 m = lhMasonry(vLhObj);
      float jw = 0.009;
      float line = (1.0 - smoothstep(jw, jw + px, m.x)) * clamp(jw * 4.0 / px, 0.0, 1.0);
      c *= 0.975 + 0.05 * m.w;
      c *= 1.0 - line * 0.12;
      c *= 1.0 - (1.0 - smoothstep(0.0, 0.035, m.x)) * 0.05;
      // the foot of the wall by the plinth, and the underside of the gallery, sit in shade
      c *= 1.0 - 0.16 * (1.0 - smoothstep(0.45, 0.9, vLhObj.y)) - 0.14 * smoothstep(4.5, 4.98, vLhObj.y);
    }
    float grime = (1.0 - smoothstep(0.0, 1.0, vLhObj.y + (lhFbm3(p * 3.0) - 0.5) * 0.55)) * uLhGrime;
    c = mix(c, c * vec3(0.84, 0.8, 0.74), grime * 0.35);
    c = mix(c, c * 1.1 + 0.035, edge * 0.7);
    c *= 1.0 - crease * 0.22;
    lhRough = 0.92 + 0.16 * brush;
  } else if (kind > 1.5 && kind < 2.5) {
    // Dressed stone: each block its own shade, mottled and flecked, chiselled; worn pale edges, dark joints,
    // and a little moss creeping into the joints near the ground.
    float t = lhFbm3(p * 1.7);
    c = mix(c * vec3(0.9, 0.93, 0.98), c * vec3(1.07, 1.04, 0.97), smoothstep(0.3, 0.7, t));
    float mot = lhFbm3(p * 6.0);
    c *= 0.9 + 0.2 * mot;
    vec2 fl = lhDots3(p * 22.0, 0.2, px * 22.0);
    c *= 1.0 - fl.x * (fl.y > 0.5 ? 0.14 : -0.1) * lhFade(1.0 / 22.0, px);
    c = mix(c, c * 1.16 + 0.04, edge * 0.8);
    c *= 1.0 - crease * 0.35;
    c *= 0.94 + 0.1 * max(wn.y, 0.0);
    float moss = crease * (1.0 - smoothstep(0.0, 0.35, vLhObj.y)) * smoothstep(0.45, 0.6, lhNoise3(p * 5.0));
    c = mix(c, vec3(0.16, 0.27, 0.08), moss * 0.7);
  } else if (kind > 2.5 && kind < 3.5) {
    // Painted iron: a satin coat, slightly uneven, worn lighter along the edges.
    c *= 0.94 + 0.12 * lhFbm3(p * 2.5);
    float sp = lhNoise3(p * 60.0);
    c *= 1.0 - smoothstep(0.7, 0.9, sp) * 0.08 * lhFade(1.0 / 60.0, px);
    c = mix(c, c * 1.45 + 0.05, edge * 0.85);
    c *= 1.0 - crease * 0.3;
    lhRough = mix(1.0, 0.7, edge);
  } else if (kind > 3.5 && kind < 4.5) {
    // Brass: polished where hands and weather rub it, tarnished in its hollows.
    float tarnish = clamp((1.0 - ao) * 1.6 + crease * 0.8, 0.0, 1.0) * (0.6 + 0.4 * lhFbm3(p * 7.0));
    c = mix(c, c * vec3(0.55, 0.52, 0.36), tarnish * 0.7);
    c = mix(c, c * 1.25 + 0.04, edge * 0.7);
    lhRough = mix(0.8, 1.6, tarnish);
  } else if (kind > 4.5 && kind < 5.5) {
    // Wood: grain running along the board (uLhAxis), fine lines, the odd darker streak.
    vec3 ax = normalize(uLhAxis);
    vec3 q = p - ax * dot(p, ax) * 0.94;
    float along = dot(p, ax);
    float g1 = lhNoise3(q * 26.0 + ax * along * 1.5);
    float g2 = lhNoise3(q * 90.0 + ax * along * 4.0);
    float lines = smoothstep(0.55, 0.75, g1);
    c *= 0.96 + 0.06 * lhFbm3(p * 2.0);
    c *= 1.0 - lines * 0.12 - (g2 - 0.5) * 0.08 * lhFade(1.0 / 90.0, px);
    c = mix(c, c * 1.12 + 0.03, edge * 0.6);
    c *= 1.0 - crease * 0.3;
  } else if (kind > 5.5 && kind < 6.5) {
    // Rock: a light, clean stone, warm where it faces the sun and cool beneath, in soft patches over a
    // gentle mottle, with small dark pits (a little porous); pale along its edges, dark in its creases;
    // dark and glossy where the sea wets it, with a sandy foot on the beach.
    float up = clamp(wn.y * 0.5 + 0.5, 0.0, 1.0);
    vec3 base = c * 1.12;
    vec3 light = base * vec3(1.08, 1.06, 1.02) + 0.03;
    vec3 dark = base * vec3(0.74, 0.77, 0.83);
    float patches = smoothstep(0.3, 0.7, lhFbm3(p * 1.2));
    c = mix(dark, light, clamp(0.25 + patches * 0.35 + up * 0.55 - 0.2, 0.0, 1.0));
    float mid = lhFbm3(p * 4.5);
    c *= 0.95 + 0.1 * mid;
    float fade = lhFade(1.0 / 11.0, px);
    vec2 pit = lhDots3(p * 11.0, 0.13, px * 11.0);
    float pits = pit.x * step(0.6, pit.y) * fade;
    c *= 1.0 - pits * 0.3;
    vec2 fl = lhDots3(p * 26.0 + 3.0, 0.12, px * 26.0);
    c *= 1.0 - fl.x * step(0.75, fl.y) * 0.1 * lhFade(1.0 / 26.0, px);
    c = mix(c, c * 1.12 + 0.05, edge * 0.8);
    c *= 1.0 - crease * 0.38;
    float wy = vWorldPos.y + (lhNoise3(p * 4.0) - 0.5) * 0.06;
    float wet = 1.0 - smoothstep(0.03, 0.2, wy);
    c = mix(c, c * vec3(0.6, 0.66, 0.66), wet * 0.75);
    c = mix(c, vec3(0.14, 0.2, 0.12), (1.0 - smoothstep(0.0, 0.07, abs(wy - 0.02))) * 0.25);
    float foot = (1.0 - smoothstep(0.0, 0.14, vLhObj.y + (lhNoise3(p * 7.0) - 0.5) * 0.08)) * (1.0 - wet);
    c = mix(c, vec3(0.83, 0.71, 0.46), foot * 0.4);
    lhRough = mix(1.0, 0.35, wet);
    // Soft facets: lit as a handful of broad planes, as if carved (the shape itself stays smooth).
    vec3 fsum = wn * 0.02;
    for (int k = 0; k < 9; k++) {
      vec3 f = lhHash33(vLhSeed * 0.113 + vec3(float(k) * 7.31, float(k) * 3.17, 1.9)) * 2.0 - 1.0;
      f = normalize(vec3(f.x, abs(f.y) * 0.7 + 0.05, f.z));
      fsum += f * exp(16.0 * (dot(wn, f) - 1.0));
    }
    fsum += vec3(0.0, 1.0, 0.0) * exp(16.0 * (wn.y - 1.0)) * 1.5;
    facet = normalize(fsum);
  } else if (kind > 6.5 && kind < 7.5) {
    // The cushion under the leaves (world/LeafCover.ts): deep green, seen only in the gaps between them.
    c *= vec3(0.5, 0.6, 0.46) * (0.9 + 0.2 * lhFbm3(p * 6.0));
    c *= 1.0 - crease * 0.3;
  } else if (kind > 8.5 && kind < 9.5) {
    // Palm bark: warm grey-brown, darker in the creases between its rings, greyer toward the foot, with
    // pale fibres crossing.
    float ring = min(fract(vLhTrunk.x), 1.0 - fract(vLhTrunk.x));
    c *= 1.0 - 0.28 * (1.0 - smoothstep(0.0, 0.2, ring)) * step(0.001, vLhTrunk.y + vLhTrunk.x);
    c *= mix(0.9, 1.06, clamp(vLhTrunk.y, 0.0, 1.0));
    vec3 ax = normalize(uLhAxis);
    float along = dot(vLhObj, ax);
    float ang = atan(dot(vLhObj, vec3(ax.y, ax.z, ax.x)), dot(vLhObj, vec3(ax.z, ax.x, ax.y)));
    float fib = abs(fract(ang * 1.4323945 + along * 5.0) - 0.5) + abs(fract(ang * 1.4323945 - along * 5.0) - 0.5);
    c *= 0.93 + 0.14 * lhFbm3(p * 2.2);
    c *= 1.0 + (fib - 0.5) * 0.14 * lhFade(0.1, px);
    c = mix(c, c * 1.14 + 0.04, edge * 0.8);
    c *= 1.0 - crease * 0.4;
    lhRough = 1.0;
  } else if (kind > 9.5 && kind < 10.5) {
    // Fronds: deeper green where they spring from the crown, fresh and a touch yellow toward the tips, a
    // paler midrib (the creases between leaflets darker), each frond its own shade, a velvety sheen.
    float along = vLhLeaf.x;
    float across = abs(vLhLeaf.y);
    c *= mix(vec3(0.64, 0.73, 0.64), vec3(1.12, 1.1, 0.84), smoothstep(0.05, 0.95, along));
    c *= 1.0 + 0.13 * (1.0 - smoothstep(0.0, 0.14, across)) * smoothstep(0.08, 0.3, along);
    c *= 0.9 + 0.2 * vLhLeaf.z;
    c *= 0.95 + 0.1 * lhFbm3(p * 1.7);
    c = mix(c, c * 1.18 + vec3(0.04, 0.05, 0.0), edge * 0.8);
    c *= 1.0 - crease * 0.35;
    lhSheen = 0.25;
  } else if (kind > 10.5 && kind < 11.5) {
    // End grain: pale, with growth rings around the axis and a darker heart and rim.
    float r = length(cross(vLhObj - uLhCenter, normalize(uLhAxis)));
    float rings = sin(r * 120.0 + lhNoise3(p * 8.0) * 3.0) * 0.5 + 0.5;
    c *= 0.92 + 0.08 * rings * lhFade(0.05, px);
    c *= 0.86 + 0.14 * smoothstep(0.0, 0.05, r);
    c = mix(c, c * 0.78, crease * 0.5);
    c = mix(c, c * 1.1 + 0.03, edge * 0.5);
  } else if (kind > 11.5 && kind < 12.5) {
    // Coconut husk: fibrous brown with a lighter sheen on its bulges.
    c *= 0.9 + 0.2 * lhNoise3(p * vec3(40.0, 12.0, 40.0)) * lhFade(1.0 / 40.0, px) + 0.08 * lhFbm3(p * 4.0);
    c = mix(c, c * 1.2 + 0.04, edge * 0.7);
    c *= 1.0 - crease * 0.3;
  } else if (kind > 7.5 && kind < 8.5) {
    // Window glass: the sky reflected, brighter toward the top, and a soft diagonal glint.
    vec3 lhV = normalize(cameraPosition - vWorldPos);
    float fres = pow(1.0 - clamp(dot(wn, lhV), 0.0, 1.0), 2.0);
    float glint = smoothstep(0.35, 0.5, fract(dot(p, vec3(1.9, 2.6, 1.3)) * 1.5)) * (1.0 - smoothstep(0.5, 0.65, fract(dot(p, vec3(1.9, 2.6, 1.3)) * 1.5)));
    c = mix(c, uLhSky * 0.9, 0.25 + 0.35 * fres);
    c += vec3(0.16, 0.18, 0.2) * glint;
  }

  if (uLhStrakes > 0.0) {
    // Strakes: planks at constant height, each lapping over the one below (a shadow under its lip).
    float sy = vLhObj.y / uLhStrakes;
    float lap = 1.0 - smoothstep(0.0, 0.12 + px / uLhStrakes, fract(sy));
    c *= (1.0 - 0.14 * lap) * (0.97 + 0.06 * lhHash12(vec2(floor(sy), 5.0)));
  }
  if (dot(facet, facet) > 0.5) wn = normalize(mix(wn, facet, 0.7));
  // Relief: the surface's height here and at the next pixel across and down (so grooves stay crisp).
  vec3 dqx = dFdx(vLhObj);
  vec3 dqy = dFdy(vLhObj);
  float h0 = lhHeight(kind, vLhObj, p, px);
  float dhx = lhHeight(kind, vLhObj + dqx, p + dqx, px) - h0;
  float dhy = lhHeight(kind, vLhObj + dqy, p + dqy, px) - h0;
  lhSurfN = (dhx != 0.0 || dhy != 0.0) ? lhBump(vWorldPos, wn, dhx, dhy) : wn;
  diffuseColor.rgb = c * pow(max(ao, 0.001), uLhAO);
}
`,
  Sn = `
if (uLhSurface > 0.5) normal = normalize((viewMatrix * vec4(lhSurfN, 0.0)).xyz);
roughnessFactor = clamp(roughnessFactor * lhRough, 0.04, 1.0);
`,
  Cn = `
{
  // A soft rim of sky light where the surface turns away (a painted look), more on velvety moss.
  vec3 lhV = normalize(cameraPosition - vWorldPos);
  float lhRim = pow(1.0 - clamp(dot(lhSurfN, lhV), 0.0, 1.0), 3.0);
  if (uLhSurface > 0.5) reflectedLight.indirectDiffuse += diffuseColor.rgb * uLhSky * lhRim * (0.18 + lhSheen);
  // (hovered: a warm glow, brightest round its silhouette)
  if (uLhGlow > 0.0) totalEmissiveRadiance += (diffuseColor.rgb * 0.3 + vec3(1.0, 0.88, 0.55) * (0.08 + lhRim * 1.4)) * uLhGlow;
}
`,
  wn = new WeakSet()
function X(e) {
  if (wn.has(e) || !(e instanceof R)) return
  wn.add(e)
  let t = hn[e.name] ?? { kind: nn },
    n = { uLhSway: { value: t.sway ?? 0 }, uLhGlow: { value: 0 }, uLhCenter: { value: new M() } }
  ;((e.userData.lhUniforms = n),
    Je(e, {
      key: `gltf`,
      uniforms: {
        ...n,
        uLhSurface: { value: t.kind },
        uLhPacked: { value: +!!t.packed },
        uLhAxis: { value: new M(...(t.axis ?? [0, 1, 0])) },
        uLhGrime: { value: t.grime ?? 0 },
        uLhMasonry: { value: new M(...(t.masonry ?? [0, 0, 0])) },
        uLhStrakes: { value: t.strakes ?? 0 },
        uLhAO: { value: t.ao ?? 1.6 },
        uLhSky: { value: Ge.skyZenith },
      },
      vertexHead: `
attribute vec3 aObj;
attribute float aEdge;
// (from blender/palm.py: a frond's along / across / tone, a trunk's ring phase / height; zero elsewhere)
attribute vec3 _leaf;
attribute vec3 _trunk;
uniform float uLhSway;
varying vec3 vLhObj;
varying float vLhEdge;
varying vec3 vLhSeed;
varying vec3 vLhLeaf;
varying vec3 vLhTrunk;
attribute float aKind;
varying float vLhKind;
`,
      vertexMain: `
vLhObj = aObj;
vLhEdge = aEdge;
vLhLeaf = _leaf;
vLhTrunk = _trunk;
vLhKind = aKind;
// (each copy of a prop gets its own pattern, from where it stands)
vLhSeed = vec3(modelMatrix[3].x * 0.731 + modelMatrix[3].z * 0.19, 0.0, modelMatrix[3].z * 0.537 - modelMatrix[3].x * 0.23);
if (uLhSway > 0.0) {
  // Wind: the trunk bends more the higher it goes, in slow gusts with a quicker tremor; fronds also bob
  // at their tips. (Local space matches the prop's own here: its parts are only offset, never turned.)
  float lhPh = uTime * 1.1 + vLhSeed.x * 2.7;
  float lhBend = pow(max(aObj.y - 0.3, 0.0), 2.0) * 0.006;
  float lhGust = 0.6 + 0.4 * sin(uTime * 0.37 + vLhSeed.z);
  transformed.x += (sin(lhPh) + 0.3 * sin(lhPh * 2.7 + 1.3)) * lhBend * lhGust;
  transformed.z += cos(lhPh * 0.8 + 0.4) * lhBend * lhGust * 0.6;
  if (uLhSway > 1.5) {
    // (each frond bobs, most at its tip)
    float lhAlong = _leaf.x * _leaf.x;
    transformed.y += sin(uTime * 2.3 + _leaf.z * 6.3 + vLhSeed.x * 5.0) * 0.09 * lhAlong * lhGust;
  }
}
`,
      fragmentHead: bn,
      albedo: xn,
      normal: Sn,
      postLights: Cn,
    }))
}
var Tn = 150,
  En = 0.19,
  Dn = 7,
  On = null
function kn() {
  if (On) return On
  let e = new R({ color: `#88AD5B`, roughness: 0.75, metalness: 0, side: 2 })
  wn.add(e)
  return (
    (On = Je(e, {
      key: `leaf`,
      uniforms: { uLhSky: { value: Ge.skyZenith } },
      vertexHead: `
attribute vec3 aLeaf; // along (0 base … 1 tip), across (−1 … 1), the leaf's own shade
attribute float aAO;
varying vec3 vLeaf;
varying float vLeafAO;
`,
      vertexMain: `
vLeaf = aLeaf;
vLeafAO = aAO;
`,
      fragmentHead: `
uniform vec3 uLhSky;
varying vec3 vLeaf;
varying float vLeafAO;
`,
      albedo: `
{
  float along = vLeaf.x;
  float across = abs(vLeaf.y);
  vec3 c = diffuse * (0.86 + 0.28 * vLeaf.z);
  // deeper where it springs from the cushion, fresh and a touch yellow toward the tip
  c = mix(c * vec3(0.62, 0.7, 0.6), c * vec3(1.18, 1.14, 0.84) + vec3(0.02, 0.025, 0.0), smoothstep(0.05, 0.95, along));
  // a paler midrib, a darker rim
  c *= 1.0 + 0.1 * (1.0 - smoothstep(0.0, 0.18, across)) * smoothstep(0.1, 0.5, along);
  c *= 1.0 - 0.14 * smoothstep(0.6, 1.0, across);
  diffuseColor.rgb = c * vLeafAO;
}
`,
      postLights: `
{
  // a soft sheen where the leaves turn from the view (a velvety bush)
  vec3 lhV = normalize(cameraPosition - vWorldPos);
  float lhRim = pow(1.0 - abs(dot(normalize(vWorldNormal), lhV)), 3.0);
  reflectedLight.indirectDiffuse += diffuseColor.rgb * uLhSky * lhRim * 0.4;
}
`,
    })),
    On
  )
}
function An(e, t, n) {
  e.updateMatrixWorld(!0)
  let r = e.matrixWorld.clone().invert(),
    a = []
  e.traverse((e) => {
    let n = e
    n.isMesh &&
      (Array.isArray(n.material) ? n.material : [n.material]).some((e) => e.name === t) &&
      a.push(n)
  })
  let o = 0
  for (let t of a) {
    let a = jn(t.geometry, r.clone().multiply(t.matrixWorld), n + o)
    if (!a) continue
    let s = new i(a, kn())
    ;((s.name = `${e.name}_Leaves`),
      (s.castShadow = !0),
      (s.receiveShadow = !0),
      e.add(s),
      (o += a.getAttribute(`position`).count / Dn))
  }
  return o
}
function jn(e, t, n) {
  let r = e.getAttribute(`position`),
    i = e.getAttribute(`normal`),
    a = e.getAttribute(`color`),
    o = e.getIndex()
  if (!i) return null
  let s = new _e().getNormalMatrix(t),
    c = o ? o.count / 3 : r.count / 3,
    l = (e, t) => (o ? o.getX(e * 3 + t) : e * 3 + t),
    u = (e) => new M().fromBufferAttribute(r, e).applyMatrix4(t),
    d = (e) => new M().fromBufferAttribute(i, e).applyMatrix3(s).normalize(),
    f = (e) => (a ? a.getX(e) : 1),
    p = new Float64Array(c),
    m = 0
  for (let e = 0; e < c; e++) {
    let t = u(l(e, 0)),
      n = u(l(e, 1)),
      r = u(l(e, 2))
    ;((m += n.sub(t).cross(r.sub(t)).length() / 2), (p[e] = m))
  }
  let h = Math.round(m * Tn)
  if (!h) return null
  let g = B(n * 7919 + 13),
    _ = new Float32Array(h * Dn * 3),
    y = new Float32Array(h * Dn * 3),
    b = new Float32Array(h * Dn * 3),
    x = new Float32Array(h * Dn),
    S = [],
    w = new M(0, 1, 0),
    T = new M(),
    E = new M(),
    ee = new M(),
    te = new M()
  for (let e = 0; e < h; e++) {
    let t = g() * m,
      n = 0,
      r = c - 1
    for (; n < r; ) {
      let e = (n + r) >> 1
      p[e] < t ? (n = e + 1) : (r = e)
    }
    let i = g(),
      a = g()
    i + a > 1 && ((i = 1 - i), (a = 1 - a))
    let o = l(n, 0),
      s = l(n, 1),
      h = l(n, 2)
    ;(te
      .copy(u(o))
      .multiplyScalar(1 - i - a)
      .addScaledVector(u(s), i)
      .addScaledVector(u(h), a),
      T.copy(d(o))
        .multiplyScalar(1 - i - a)
        .addScaledVector(d(s), i)
        .addScaledVector(d(h), a)
        .normalize())
    let v = f(o) * (1 - i - a) + f(s) * i + f(h) * a
    ;(E.copy(w).multiplyScalar(-1).addScaledVector(T, T.y),
      E.lengthSq() < 0.02 && (E.set(g() - 0.5, 0, g() - 0.5), E.addScaledVector(T, -E.dot(T))),
      E.normalize(),
      E.applyAxisAngle(T, (g() - 0.5) * 1.2))
    let C = 0.14 + g() * 0.26
    ;(E.multiplyScalar(Math.cos(C)).addScaledVector(T, Math.sin(C)).normalize(),
      ee.copy(T).cross(E).normalize())
    let D = En + 0.08000000000000002 * g(),
      ne = D * (0.52 + g() * 0.12),
      re = D * 0.06,
      O = g(),
      k = e * Dn,
      ie = (e) => (ne / 2) * Math.sin(Math.PI * Math.min(e, 0.97)) ** 0.75,
      A = (e, t, n = 0) =>
        te
          .clone()
          .addScaledVector(E, (e - 0.12) * D)
          .addScaledVector(ee, t * ie(e))
          .addScaledVector(T, n),
      ae = [
        [A(0, 0), 0, 0],
        [A(0.28, -1), 0.28, -1],
        [A(0.62, -1), 0.62, -1],
        [A(1, 0), 1, 0],
        [A(0.62, 1), 0.62, 1],
        [A(0.28, 1), 0.28, 1],
        [A(0.45, 0, re), 0.45, 0],
      ],
      oe = ee.clone().cross(E).normalize()
    oe.dot(T) < 0 && oe.negate()
    let se = T.clone().multiplyScalar(0.7).addScaledVector(oe, 0.3).normalize()
    ae.forEach(([e, t, n], r) => {
      ;(_.set([e.x, e.y, e.z], (k + r) * 3),
        y.set([se.x, se.y, se.z], (k + r) * 3),
        b.set([t, n, O], (k + r) * 3),
        (x[k + r] = Math.min(1, v * (0.75 + 0.35 * t))))
    })
    let j = k + 6
    for (let e = 0; e < 6; e++) S.push(k + e, k + ((e + 1) % 6), j)
  }
  let D = new v()
  return (
    D.setAttribute(`position`, new C(_, 3)),
    D.setAttribute(`normal`, new C(y, 3)),
    D.setAttribute(`aLeaf`, new C(b, 3)),
    D.setAttribute(`aAO`, new C(x, 1)),
    D.setIndex(S),
    D.computeBoundingSphere(),
    D
  )
}
function Mn(e) {
  ;(Y(e),
    e.traverse((e) => {
      let t = e
      if (!t.isMesh) return
      let n = Array.isArray(t.material) ? t.material : [t.material],
        r = !1
      for (let e of n) (X(e), e.transparent && (r = !0))
      ;((t.castShadow = !r), (t.receiveShadow = !0), r || t.layers.enable(5))
    }))
}
var Nn = class {
    island
    group = new D()
    lighthouse
    lamp = null
    beamOrigin = new M()
    rockSpots = []
    lampMaterials = []
    windowMaterials = []
    obstacles = []
    rocks = []
    dinghy
    palm = null
    bench = null
    axe = null
    log = null
    pickaxe = null
    rod = null
    fish = null
    bonfire = null
    fisherman = null
    constructor(e) {
      ;((this.island = e), (this.group.name = `props`))
    }
    async load(e) {
      let t = new ot()
      t.setMeshoptDecoder(tn)
      let n = 0,
        r = () => e(++n / 12),
        i = (e) =>
          t
            .loadAsync(`./models/${e}.glb`)
            .then((e) => (r(), e.scene))
            .catch((t) => (console.warn(`[lighthouse] no ${e}.glb`, t), r(), null)),
        [a, o, s, c, l, u, d, f, p, m, h, g] = await Promise.all([
          t.loadAsync(`./models/lighthouse.glb`).then((e) => (r(), e)),
          t.loadAsync(`./models/rocks.glb`).then((e) => (r(), e)),
          t.loadAsync(`./models/dinghy.glb`).then((e) => (r(), e)),
          i(`palm`),
          i(`bench`),
          i(`axe`),
          i(`log`),
          i(`pickaxe`),
          i(`rod`),
          i(`fish`),
          i(`bonfire`),
          i(`fisherman`),
        ])
      ;(this.placeLighthouse(a.scene),
        this.placeRocks(o.scene),
        (this.dinghy = s.scene),
        (this.palm = c),
        (this.bench = l),
        (this.axe = u),
        (this.log = d),
        (this.pickaxe = f),
        (this.rod = p),
        (this.fish = m),
        (this.bonfire = h),
        (this.fisherman = g))
    }
    rockBodies() {
      return this.rocks.map((e) => ({
        x: e.spot.x,
        y: e.rock.position.y,
        z: e.spot.z,
        height: e.height,
        radius: e.spot.r,
        mossy: e.mossy,
      }))
    }
    placeLighthouse(e) {
      let { x: t, z: n } = this.island.lighthouse
      ;(Mn(e),
        e.position.set(t, z, n),
        (e.name = `lighthouse`),
        this.group.add(e),
        (this.lighthouse = e))
      let r = e.getObjectByName(`LH_Lamp`) ?? null,
        i = e.getObjectByName(`LH_BeamOrigin`)
      if (r && i) {
        e.updateMatrixWorld(!0)
        let t = new D()
        ;((t.name = `LH_LampPivot`),
          e.add(t),
          t.position.copy(e.worldToLocal(i.getWorldPosition(new M()))),
          t.updateMatrixWorld(!0),
          t.attach(r),
          (this.lamp = t))
      } else this.lamp = r
      let a = new Set()
      e.traverse((e) => {
        let t = e
        if (t.isMesh)
          for (let e of Array.isArray(t.material) ? t.material : [t.material])
            !a.has(e) &&
              e instanceof R &&
              (a.add(e),
              e.name === `LH_Lamp` && this.lampMaterials.push(e),
              e.name === `LH_Window` && this.windowMaterials.push(e),
              e.name === `LH_Glass` && (e.roughness = Math.max(e.roughness, 0.22)))
      })
      let o = e.getObjectByName(`LH_BeamOrigin`)
      ;(e.updateMatrixWorld(!0),
        o && o.getWorldPosition(this.beamOrigin),
        this.obstacles.push({ x: t, z: n, r: 1.75, y0: z - 0.2, y1: z + 8.7 }))
    }
    placeRocks(e) {
      let t = []
      for (let n = 0; n < 6; n++) {
        let r = e.getObjectByName(`Rock_${n}`)
        r && (Mn(r), An(r, `Rock_Moss`, n + 1), t.push(r))
      }
      if (!t.length) return
      let n = this.island,
        r = n.lighthouse,
        i = B(21),
        a = (e, t, r, i) => {
          let a = Math.cos(r),
            o = Math.sin(r),
            s = 0
          for (; s < 30 && n.baseLandSdf(e + a * s, t + o * s) < i; ) s += 0.05
          return { x: e + a * s, z: t + o * s }
        },
        o = Math.PI / 180
      for (let [e, n, s, c] of [
        [-122, 0.9, 1, 0.95],
        [-98, 1.5, 0, 1],
        [-82, 0.4, 3, 1],
        [-64, 1.2, 2, 1.05],
        [-45, 0.3, 4, 1.2],
        [-30, 1.4, 1, 0.85],
        [-12, 0.6, 5, 1.1],
        [4, 1.6, 0, 0.8],
        [18, 0.5, 3, 0.9],
        [36, 1.1, 5, 1],
      ]) {
        let l = a(r.x, r.z, e * o, n)
        this.addRock(t, { x: l.x, z: l.z, variant: s, scale: c, rot: i() * Math.PI * 2, r: 0 })
      }
      for (let [e, n, r, s, c, l] of [
        [0, 0, 200, 1.2, 1, 0.9],
        [0, 0, 208, 0.5, 4, 1],
        [0, 0, 150, 0.8, 5, 1.1],
        [0, 0, 95, 1.3, 3, 1],
        [0, 0, 250, 0.9, 2, 0.9],
        [0, 0, 262, 0.2, 5, 0.9],
        [0, 0, 32, 1, 4, 1.2],
      ]) {
        let u = a(e, n, r * o, s)
        this.addRock(t, { x: u.x, z: u.z, variant: c, scale: l, rot: i() * Math.PI * 2, r: 0 })
      }
      this.addRock(t, { x: -6.6, z: -2.4, variant: 2, scale: 1, rot: 0.7, r: 0 })
    }
    addRock(e, t) {
      let n = e[t.variant % e.length],
        r = n.clone(!0),
        i = new xe().setFromObject(n).getSize(new M())
      t.r = (Math.max(i.x, i.z) / 2) * t.scale * 0.85
      let a = Math.min(this.island.baseHeight(t.x, t.z), z) - 0.08 * t.scale
      ;(r.position.set(t.x, a, t.z),
        r.rotation.set(0, t.rot, 0),
        r.scale.setScalar(t.scale),
        this.group.add(r),
        this.rockSpots.push(t))
      for (let e = Math.floor(t.x - t.r); e <= Math.floor(t.x + t.r); e++)
        for (let n = Math.floor(t.z - t.r); n <= Math.floor(t.z + t.r); n++) {
          let r = Math.max(e, Math.min(t.x, e + 1)),
            i = Math.max(n, Math.min(t.z, n + 1))
          Math.hypot(r - t.x, i - t.z) < t.r * 0.9 && this.island.reserve(e, n)
        }
      let o = { x: t.x, z: t.z, r: t.r, y0: a - 1, y1: a + i.y * t.scale }
      this.obstacles.push(o)
      let s = !1
      ;(r.traverse((e) => {
        let t = e.material
        t && !Array.isArray(t) && t.name === `Rock_Moss` && (s = !0)
      }),
        this.rocks.push({
          rock: r,
          spot: t,
          obstacle: o,
          height: i.y * t.scale,
          goal: a,
          mossy: s,
        }))
    }
    setGround() {
      for (let e of this.rocks)
        ((e.goal = Math.min(this.island.height(e.spot.x, e.spot.z), z) - 0.08 * e.spot.scale),
          (e.obstacle.y0 = e.goal - 1),
          (e.obstacle.y1 = e.goal + e.height))
    }
    update(e) {
      this.lamp && (this.lamp.rotation.y += e * 0.6)
      let t = 1 - Math.exp(-e * 7)
      for (let e of this.rocks) {
        let n = e.rock.position
        Math.abs(n.y - e.goal) > 1e-4 && (n.y += (e.goal - n.y) * t)
      }
    }
  },
  Pn = 0.9,
  Fn = `
attribute vec3 aAnim;
${Xe}
`,
  In = `
transformed.y += aAnim.x * lhAnimLeft(aAnim.z, uTime - aAnim.y) / max(length(mat3(instanceMatrix)[1]), 1e-6);
`
function Ln(e) {
  return new P(new Float32Array(Math.max(e, 1) * 3), 3)
}
function Rn(e) {
  let t = B(e),
    n = [],
    r = [],
    i = [],
    a = []
  for (let e = 0; e < 7; e++) {
    let o = e === 6,
      s = (e / 6) * Math.PI * 2 + t() * 0.8,
      c = Math.cos(s),
      l = Math.sin(s),
      u = o ? 0.005 : 0.02 + t() * 0.045,
      d = o ? 0.13 + t() * 0.05 : 0.16 + t() * 0.14,
      f = o ? 0.12 : 0.35 + t() * 0.4,
      p = o ? 0.05 : 0.06 + t() * 0.025,
      m = -l,
      h = c,
      g = [0, 0.4, 0.75, 1],
      _ = n.length / 3
    for (let e = 0; e < g.length; e++) {
      let t = g[e],
        a = c * u + c * f * d * t ** 1.6,
        o = l * u + l * f * d * t ** 1.6,
        s = d * t * (1 - 0.18 * t * f)
      if (e === g.length - 1) (n.push(a, s, o), r.push(t), i.push(0))
      else {
        let e = (p / 2) * (0.8 + 0.2 * Math.min(t / 0.4, 1)) * (1 - t) ** 0.7
        ;(n.push(a - m * e, s, o - h * e, a + m * e, s, o + h * e), r.push(t, t), i.push(-1, 1))
      }
    }
    for (let e = 0; e < g.length - 2; e++) {
      let t = _ + e * 2
      a.push(t, t + 1, t + 3, t, t + 3, t + 2)
    }
    let v = _ + (g.length - 2) * 2
    a.push(v, v + 1, v + 2)
  }
  let o = new v()
  return (
    o.setAttribute(`position`, new l(n, 3)),
    o.setAttribute(
      `normal`,
      new l(
        Array(n.length)
          .fill(0)
          .map((e, t) => +(t % 3 == 1)),
        3
      )
    ),
    o.setAttribute(`aH`, new l(r, 1)),
    o.setAttribute(`aU`, new l(i, 1)),
    o.setIndex(a),
    o
  )
}
function zn() {
  let e = [],
    t = [],
    n = [],
    r = [],
    i = 0.17
  for (let [a, o] of [
    [1, 0],
    [0, 1],
  ]) {
    let s = 0.009,
      c = e.length / 3
    ;(e.push(-a * s, 0, -o * s, a * s, 0, o * s, -a * s, i, -o * s, a * s, i, o * s),
      t.push(0, 0, 1, 1),
      n.push(0, 0, 0, 0),
      r.push(c, c + 1, c + 3, c, c + 3, c + 2))
  }
  let a = e.length / 3
  ;(e.push(0, 0.18200000000000002, 0), t.push(1), n.push(2))
  for (let r = 0; r < 30; r++) {
    let a = (r / 30) * Math.PI * 2,
      o = 0.7 + 0.3 * Math.abs(Math.sin((a * 5) / 2)),
      s = 0.062 * o
    ;(e.push(Math.cos(a) * s, i + 0.018 * o, Math.sin(a) * s), t.push(1), n.push(1))
  }
  for (let e = 0; e < 30; e++) r.push(a, a + 1 + ((e + 1) % 30), a + 1 + e)
  let o = e.length / 3
  ;(e.push(0, 0.2, 0), t.push(1), n.push(2))
  for (let r = 0; r < 8; r++) {
    let i = (r / 8) * Math.PI * 2
    ;(e.push(Math.cos(i) * 0.018, 0.19, Math.sin(i) * 0.018), t.push(1), n.push(2))
  }
  for (let e = 0; e < 8; e++) r.push(o, o + 1 + ((e + 1) % 8), o + 1 + e)
  let s = new v()
  return (
    s.setAttribute(`position`, new l(e, 3)),
    s.setAttribute(
      `normal`,
      new l(
        Array(e.length)
          .fill(0)
          .map((e, t) => +(t % 3 == 1)),
        3
      )
    ),
    s.setAttribute(`aH`, new l(t, 1)),
    s.setAttribute(`aPart`, new l(n, 1)),
    s.setIndex(r),
    s
  )
}
var Bn = `
attribute float aH;
attribute float aU;
attribute float aTint;
attribute float aKind;
varying float vH;
varying float vU;
varying float vTint;
varying float vKind;
varying vec3 vGrass;
${it}
${rt}
${Fn}
`,
  Vn = `
vH = aH;
vU = aU;
vTint = aTint;
vKind = aKind;
vec3 ip = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
vGrass = lhGrassColor(ip.xz);
vec2 wnd = lhWind(ip.xz, uTime) + vec2(sin(uTime * 5.3 + ip.x * 3.1 + ip.z * 1.7), cos(uTime * 4.1 + ip.z * 2.3)) * 0.05;
mat3 lhIm = mat3(instanceMatrix);
float s2 = max(dot(lhIm[0], lhIm[0]), 1e-6); // hidden instances have zero scale
vec3 wl = transpose(lhIm) * vec3(wnd.x, 0.0, wnd.y) / s2;
float bend = aH * aH;
transformed += wl * bend * 0.2;
transformed.y -= length(wnd) * bend * 0.03;
${In}
`,
  Hn = `
normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`
function Un() {
  let e = [0, 0.045, 0],
    t = []
  for (let t = 0; t < 40; t++) {
    let n = (t / 40) * Math.PI * 2,
      r = Math.abs(Math.cos((n * 5) / 2)) ** 3,
      i = 0.05 + 0.13 * r
    e.push(Math.cos(n) * i, 0.012 + 0.012 * r, Math.sin(n) * i)
  }
  for (let e = 0; e < 40; e++) t.push(0, 1 + ((e + 1) % 40), 1 + e)
  let n = new v()
  return (n.setAttribute(`position`, new l(e, 3)), n.setIndex(t), n.computeVertexNormals(), n)
}
function Wn() {
  let e = [0, 0.012, -0.05],
    t = []
  for (let t = 0; t <= 24; t++) {
    let n = -Math.PI * 0.42 + (t / 24) * Math.PI * 0.84,
      r = 0.5 + 0.5 * Math.cos(t * Math.PI),
      i = 0.1 + 0.008 * r
    e.push(Math.sin(n) * i, 0.02 + 0.012 * r, -0.05 + Math.cos(n) * i)
  }
  for (let e = 0; e < 24; e++) t.push(0, 2 + e, 1 + e)
  let n = new v()
  return (n.setAttribute(`position`, new l(e, 3)), n.setIndex(t), n.computeVertexNormals(), n)
}
var Gn = class {
    island
    group = new D()
    flowerSpots = []
    tufts = []
    flowers = []
    tuftMeshes = []
    flowerMesh
    beachies = []
    occupied = () => !1
    m4 = new g()
    q = new N()
    v = new M()
    s = new M()
    up = new M(0, 1, 0)
    constructor(e, t) {
      ;((this.island = e),
        (this.group.name = `foliage`),
        this.scatter(t),
        this.buildTufts(),
        this.buildFlowers(),
        this.buildBeachies(t),
        this.setGround(),
        this.refresh(this.occupied))
    }
    blocked(e, t, n) {
      for (let r of n) if (Math.hypot(e - r.x, t - r.z) < r.r) return !0
      return !1
    }
    scatter(e) {
      let t = this.island,
        n = B(7),
        r = t.bounds,
        i = 0.3
      for (let a = r.minZ; a < r.maxZ; a += i)
        for (let o = r.minX; o < r.maxX; o += i) {
          let r = o + (n() - 0.5) * i * 0.9,
            s = a + (n() - 0.5) * i * 0.9
          if (t.baseLandSdf(r, s) > -0.15) continue
          let c = t.baseGrassSdf(r, s)
          if (!this.blocked(r, s, e)) {
            if (c < -0.12) {
              let e = We(r * 0.35, s * 0.35, 2, 19) * 0.5 + 0.5,
                t = c > -0.5 ? 0.25 : 0
              if (n() > e * 0.95 + t - 0.05) continue
              this.tufts.push({
                x: r,
                z: s,
                y: z,
                bare: !1,
                rot: n() * Math.PI * 2,
                scale: 0.75 + n() * 0.55,
                tint: n(),
                kind: 0,
              })
            } else
              c < 1.3 &&
                n() < 0.05 &&
                this.tufts.push({
                  x: r,
                  z: s,
                  y: z,
                  bare: !1,
                  rot: n() * Math.PI * 2,
                  scale: 1.2 + n() * 0.5,
                  tint: n(),
                  kind: 1,
                })
          }
        }
      let a = [`#FFFFFF`, `#FFE27A`, `#FFB8CB`, `#D9C4FF`, `#FFFFFF`, `#FFD0A6`].map(
          (e) => new p(e)
        ),
        o = 0
      for (let i = 0; i < 400 && o < 30; i++) {
        let i = r.minX + n() * (r.maxX - r.minX),
          s = r.minZ + n() * (r.maxZ - r.minZ)
        if (t.baseGrassSdf(i, s) > -0.6 || this.blocked(i, s, e)) continue
        ;(o++, this.flowerSpots.push(new M(i, z, s)))
        let c = a[Math.floor(n() * a.length)],
          l = 3 + Math.floor(n() * 5)
        for (let e = 0; e < l; e++) {
          let e = n() * Math.PI * 2,
            t = Math.sqrt(n()) * 0.42
          this.flowers.push({
            x: i + Math.cos(e) * t,
            z: s + Math.sin(e) * t,
            y: z,
            bare: !1,
            rot: n() * Math.PI * 2,
            scale: 0.8 + n() * 0.45,
            tint: n(),
            kind: 0,
            color: c,
          })
        }
      }
    }
    makeMaterial(e, t, n = ``) {
      let r = new R({ roughness: 1, metalness: 0, side: 2 })
      return Je(r, {
        key: e,
        uniforms: {
          uGrassA: { value: Ge.grassA },
          uGrassB: { value: Ge.grassB },
          uGrassC: { value: Ge.grassC },
        },
        vertexHead: Bn + n,
        vertexMain: Vn,
        fragmentHead: `
varying float vH;
varying float vU;
varying float vTint;
varying float vKind;
varying vec3 vGrass;
${n.replace(/attribute[^;]*;/g, ``)}
`,
        albedo: t,
        normal: Hn,
      })
    }
    buildTufts() {
      let e = this.makeMaterial(
        `tuft`,
        `
// Dark where it leaves the ground, fresh and a little yellow at the tip; a paler midrib, darker edges.
vec3 base = vGrass * (0.74 + 0.1 * vTint);
vec3 tip = vGrass * (1.26 + 0.12 * vTint) + vec3(0.06, 0.065, 0.0);
vec3 col = mix(base, tip, smoothstep(0.0, 0.95, vH));
float lhRib = 1.0 - smoothstep(0.0, 0.35, abs(vU));
col *= (1.0 - 0.12 * smoothstep(0.55, 1.0, abs(vU))) * (1.0 + 0.1 * lhRib * smoothstep(0.1, 0.6, vH));
vec3 dune = mix(vec3(0.36, 0.42, 0.14), vec3(0.78, 0.74, 0.36), vH);
diffuseColor.rgb = mix(col, dune, vKind);
`
      )
      for (let t = 0; t < 3; t++) {
        let n = this.tufts.filter((e, n) => n % 3 === t),
          r = Rn(100 + t),
          i = new Float32Array(n.length),
          a = new Float32Array(n.length)
        ;(n.forEach((e, t) => {
          ;((i[t] = e.tint), (a[t] = e.kind))
        }),
          r.setAttribute(`aTint`, new P(i, 1)),
          r.setAttribute(`aKind`, new P(a, 1)),
          r.setAttribute(`aAnim`, Ln(n.length)))
        let o = new O(r, e, n.length)
        ;((o.receiveShadow = !0),
          (o.frustumCulled = !1),
          (o.userData.list = n),
          this.tuftMeshes.push(o),
          this.group.add(o))
      }
    }
    buildFlowers() {
      let e = zn(),
        t = this.flowers.length,
        n = new Float32Array(t),
        r = new Float32Array(t)
      ;(this.flowers.forEach((e, t) => {
        n[t] = e.tint
      }),
        e.setAttribute(`aTint`, new P(n, 1)),
        e.setAttribute(`aKind`, new P(r, 1)),
        e.setAttribute(`aAnim`, Ln(t)))
      let i = this.makeMaterial(
          `flower`,
          `
vec3 stem = vGrass * mix(0.7, 1.05, vH);
vec3 petal = vInstColor;
vec3 heart = vec3(1.0, 0.72, 0.2);
vec3 col = vPart < 0.5 ? stem : (vPart < 1.5 ? petal : heart);
diffuseColor.rgb = col;
`,
          `
attribute float aPart;
varying float vPart;
varying vec3 vInstColor;
`
        ),
        a = i.onBeforeCompile
      ;((i.onBeforeCompile = (e, t) => {
        ;(a(e, t),
          (e.vertexShader = e.vertexShader.replace(
            `vH = aH;`,
            `vH = aH;
vPart = aPart;
#ifdef USE_INSTANCING_COLOR
  vInstColor = instanceColor;
#else
  vInstColor = vec3(1.0);
#endif`
          )))
      }),
        (this.flowerMesh = new O(e, i, t)),
        this.flowers.forEach((e, t) => this.flowerMesh.setColorAt(t, e.color)),
        (this.flowerMesh.receiveShadow = !0),
        (this.flowerMesh.castShadow = !1),
        (this.flowerMesh.frustumCulled = !1),
        this.group.add(this.flowerMesh))
    }
    buildBeachies(e) {
      let t = this.island,
        n = B(12),
        r = t.bounds,
        i = [],
        a = [`#FF8A6A`, `#FFA46B`, `#F7778C`].map((e) => new p(e)),
        o = [`#FFE3DA`, `#FFC9C0`, `#F6D7B8`].map((e) => new p(e))
      for (let s = 0; s < 3e3 && i.length < 16; s++) {
        let s = r.minX + n() * (r.maxX - r.minX),
          c = r.minZ + n() * (r.maxZ - r.minZ),
          l = t.baseLandSdf(s, c)
        if (l < -1.6 || l > 0.5 || t.baseGrassSdf(s, c) < 0.5 || this.blocked(s, c, e)) continue
        let u = t.baseHeight(s, c)
        if (u < 0.12) continue
        let d = i.length % 3 == 0 ? 0 : 1
        i.push({
          x: s,
          z: c,
          y: u,
          bare: !1,
          rot: n() * 6.28,
          kind: d,
          c: (d === 0 ? a : o)[Math.floor(n() * 3)],
        })
      }
      let s = Je(new R({ roughness: 0.6 }), { key: `beachie`, vertexHead: Fn, vertexMain: In })
      for (let e of [0, 1]) {
        let t = i.filter((t) => t.kind === e),
          n = e === 0 ? Un() : Wn()
        n.setAttribute(`aAnim`, Ln(t.length))
        let r = new O(n, s, t.length)
        ;(t.forEach((e, t) => r.setColorAt(t, e.c)),
          (r.castShadow = !0),
          (r.receiveShadow = !0),
          this.group.add(r),
          this.beachies.push({ mesh: r, list: t }))
      }
    }
    setGround(e = !1, t) {
      let n = this.island,
        r = n.shape,
        i = at.uTime.value,
        a = (t, a, o, s) => {
          let c = t.y,
            l = r.patchAt(t.x, t.z)
          if (!l) ((t.y = a), (t.bare = !1))
          else {
            let e = n.levelAt(Math.floor(t.x), Math.floor(t.z))
            ;((t.y = l.sample(t.x, t.z)),
              (t.bare = (e !== void 0 && e < 0) || r.slope(t.x, t.z) > Pn))
          }
          e ? Ye(o, s * 3, c, t.y, i, o, s * 3) : (o[s * 3] = 0)
        },
        o = (e) => !t || (e.x >= t.x0 && e.x <= t.x1 && e.z >= t.z0 && e.z <= t.z1),
        s = (e, t, n) => {
          let r = e.getAttribute(`aAnim`),
            i = r.array,
            s = !1
          return (
            t.forEach((e, t) => {
              o(e) && (a(e, n(e), i, t), (s = !0))
            }),
            s && (r.needsUpdate = !0),
            s
          )
        }
      for (let e of this.tuftMeshes) s(e.geometry, e.userData.list, () => z)
      s(this.flowerMesh.geometry, this.flowers, () => z)
      for (let { mesh: e, list: t } of this.beachies)
        s(e.geometry, t, (e) => n.baseHeight(e.x, e.z)) &&
          (t.forEach((t, n) => {
            let r = t.bare ? 0 : t.kind === 0 ? 1.2 : 1.45
            ;(this.v.set(t.x, t.y - 0.005, t.z),
              this.q.setFromAxisAngle(this.up, t.rot),
              this.m4.compose(this.v, this.q, this.s.set(r, r, r)),
              e.setMatrixAt(n, this.m4))
          }),
          (e.instanceMatrix.needsUpdate = !0))
      for (let e of this.flowerSpots) e.y = Math.max(z, n.height(e.x, e.z))
    }
    refresh(e) {
      this.occupied = e
      let t = (t, n, r) => {
        ;(n.forEach((n, i) => {
          let a = n.bare || e(Math.floor(n.x), Math.floor(n.z)) ? 0 : n.scale
          ;(this.v.set(n.x, n.y + r, n.z),
            this.q.setFromAxisAngle(this.up, n.rot),
            this.s.set(a, a * (n.kind === 1 ? 1.5 : 1), a),
            this.m4.compose(this.v, this.q, this.s),
            t.setMatrixAt(i, this.m4))
        }),
          (t.instanceMatrix.needsUpdate = !0))
      }
      for (let e of this.tuftMeshes) t(e, e.userData.list, -0.01)
      t(this.flowerMesh, this.flowers, -0.01)
    }
  },
  Kn = 34,
  qn = fe.degToRad(11)
function Jn() {
  let e = document.createElement(`canvas`)
  e.width = e.height = 128
  let t = e.getContext(`2d`),
    n = t.createRadialGradient(64, 64, 0, 64, 64, 64)
  ;(n.addColorStop(0, `rgba(255,255,255,1)`),
    n.addColorStop(0.18, `rgba(255,244,210,0.75)`),
    n.addColorStop(0.45, `rgba(255,226,160,0.22)`),
    n.addColorStop(1, `rgba(255,220,150,0)`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 128, 128))
  let r = new k(e)
  return ((r.colorSpace = u), r)
}
var Yn = class {
    group = new D()
    lights = []
    dirs = [new M(), new M()]
    origin = new M()
    intensity = 0
    angle = 0
    shafts = []
    halo
    constructor(e, t) {
      ;(this.origin.copy(e), this.group.position.copy(e), (this.group.name = `beam`))
      let n = new de(3.2, 0.22, Kn, 28, 1, !0)
      ;(n.rotateZ(-Math.PI / 2), n.translate(Kn / 2, 0, 0))
      let r = new L({
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        side: 2,
        uniforms: { uI: { value: 0 }, uColor: { value: new p(`#FFD98C`) } },
        vertexShader: `
        varying float vAlong;
        varying vec3 vN;
        varying vec3 vV;
        void main() {
          vAlong = position.x / ${Kn.toFixed(1)};
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vN = normalize(mat3(modelMatrix) * normal);
          vV = normalize(cameraPosition - wp.xyz);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }`,
        fragmentShader: `
        uniform float uI;
        uniform vec3 uColor;
        varying float vAlong;
        varying vec3 vN;
        varying vec3 vV;
        void main() {
          float facing = abs(dot(normalize(vN), normalize(vV)));
          float soft = pow(facing, 2.6);
          float fade = pow(clamp(1.0 - vAlong, 0.0, 1.0), 1.5) * smoothstep(0.0, 0.05, vAlong);
          gl_FragColor = vec4(uColor * soft * fade * uI * 0.16, 1.0);
        }`,
      })
      for (let e = 0; e < 2; e++) {
        let t = new i(n, e === 0 ? r : r.clone())
        ;((t.frustumCulled = !1), (t.renderOrder = 30), this.shafts.push(t), this.group.add(t))
      }
      let a = new s(new o({ map: Jn(), blending: 2, depthWrite: !1, transparent: !0 }))
      ;(a.scale.setScalar(4.5), (a.renderOrder = 31), (this.halo = a), this.group.add(a))
      let c = t === `high` ? 2 : 1
      for (let e = 0; e < c; e++) {
        let e = new ke(`#FFE3A8`, 0, 60, fe.degToRad(13), 0.75, 1.1)
        ;((e.castShadow = !1), this.group.add(e, e.target), this.lights.push(e))
      }
    }
    update(e, t) {
      this.angle = t ?? this.angle + e * 0.6
      let n = this.intensity
      for (let e = 0; e < 2; e++) {
        let t = this.angle + e * Math.PI,
          r = this.shafts[e]
        ;(r.rotation.set(0, t, 0),
          r.rotateZ(-qn),
          (r.material.uniforms.uI.value = n),
          (r.visible = n > 0.01),
          this.dirs[e]
            .set(Math.cos(t) * Math.cos(qn), -Math.sin(qn), -Math.sin(t) * Math.cos(qn))
            .normalize())
        let i = this.lights[e]
        i &&
          ((i.intensity = n * 90),
          i.target.position.copy(this.dirs[e]).multiplyScalar(20),
          (i.visible = !0))
      }
      ;((this.halo.material.opacity = Math.min(1, 0.1 + n * 0.55)), (this.halo.visible = n > 0.02))
      let r = 1 + 0.04 * Math.sin(performance.now() * 0.004)
      this.halo.scale.setScalar((2.2 + n * 1.8) * r)
    }
    setColor(e, t) {
      for (let n of this.shafts) n.material.uniforms.uColor.value.set(e)
      for (let n of this.lights) n.color.set(t)
    }
  },
  Xn = 12,
  Z = new j(-0.42, -0.17),
  Zn = 58,
  Qn = 10.5
function $n(e) {
  let t = B(e),
    n = [],
    r = 9 + Math.floor(t() * 5)
  for (let e = 0; e < r; e++) {
    let r = e === 0 ? 1 : e < 4 ? 0.6 + t() * 0.3 : 0.32 + t() * 0.3,
      i = t() * Math.PI * 2,
      a = e === 0 ? 0 : e < 4 ? 0.5 + t() * 0.5 : 0.9 + t() * 0.8,
      o = new Fe(r, 20, 14)
    ;(o.translate(Math.cos(i) * a * 1.45, r * 0.3 + t() * 0.18, Math.sin(i) * a * 0.8), n.push(o))
  }
  let i = Ze(n)
  for (let e of n) e.dispose()
  let a = i.getAttribute(`position`),
    o = i.getAttribute(`normal`)
  for (let e = 0; e < a.count; e++) {
    let t = a.getY(e)
    if (t < 0) {
      a.setY(e, t * 0.22)
      let n = Math.min(-t / 0.4, 1),
        r = o.getX(e) * (1 - n),
        i = o.getZ(e) * (1 - n),
        s = o.getY(e) * (1 - n) - n,
        c = Math.hypot(r, s, i) || 1
      o.setXYZ(e, r / c, s / c, i / c)
    }
  }
  return (i.computeBoundingSphere(), i)
}
var er = class {
    group = new D()
    clouds = []
    meshes = []
    m4 = new g()
    q = new N()
    v = new M()
    s = new M()
    up = new M(0, 1, 0)
    warm = !1
    constructor() {
      this.group.name = `clouds`
      let e = B(91),
        t = Je(new R({ roughness: 1, metalness: 0 }), {
          key: `cloud`,
          clouds: !1,
          uniforms: { uSkyTint: { value: Ge.skyZenith } },
          vertexHead: `varying float vCloudY;`,
          vertexMain: `vCloudY = position.y;`,
          fragmentHead: `varying float vCloudY;
uniform vec3 uSkyTint;`,
          albedo: `diffuseColor.rgb = mix(vec3(0.74, 0.8, 0.92), vec3(1.0), smoothstep(-0.25, 0.95, vCloudY));`,
          postLights: `
{
  // Some of the sky's own light, so they stay soft in shade (and dim with it at night), and a bright
  // fluffy rim where the edge turns away.
  vec3 lhV = normalize(cameraPosition - vWorldPos);
  float lhRim = pow(1.0 - clamp(dot(normalize(vWorldNormal), lhV), 0.0, 1.0), 2.5);
  reflectedLight.indirectDiffuse += diffuseColor.rgb * uSkyTint * (0.35 + 0.45 * lhRim);
}
`,
        }),
        n = [0, 0, 0]
      for (let t = 0; t < Xn; t++) {
        let r = e() * Math.PI * 2,
          i = 12 + e() * 44,
          a = t % 3
        ;(n[a]++,
          this.clouds.push({
            x: Math.cos(r) * i,
            z: Math.sin(r) * i,
            y: Qn + e() * 3.5,
            scale: 2 + e() * 1.6,
            rot: e() * Math.PI * 2,
            variant: a,
            shown: 0,
          }))
      }
      for (let e = 0; e < 3; e++) {
        let r = new O($n(300 + e * 17), t, n[e])
        ;(r.instanceMatrix.setUsage(c),
          (r.frustumCulled = !1),
          (r.castShadow = !1),
          (r.receiveShadow = !1),
          this.meshes.push(r),
          this.group.add(r))
      }
    }
    warmup(e) {
      this.warm = e
    }
    update(e, t, n, r) {
      let i = at.uCloudBlobs.value,
        a = [0, 0, 0],
        o = 1 - Math.exp(-e * 2.5),
        s = !1
      for (let c = 0; c < this.clouds.length; c++) {
        let l = this.clouds[c]
        ;((l.x += Z.x * e),
          (l.z += Z.y * e),
          l.x * Z.x + l.z * Z.y > Zn * Math.hypot(Z.x, Z.y) &&
            ((l.x -= (Z.x / Math.hypot(Z.x, Z.y)) * Zn * 2),
            (l.z -= (Z.y / Math.hypot(Z.x, Z.y)) * Zn * 2)),
          this.v.set(l.x, l.y, l.z).project(t))
        let u = t.aspect,
          d = Math.hypot(this.v.x * Math.min(u, 1.6), this.v.y),
          f = V(0.35, 0.8, d),
          p = V(20, 34, t.position.distanceTo(this.v.set(l.x, l.y, l.z))),
          m = n * f * p
        l.shown = this.warm ? 1 : l.shown + (m - l.shown) * o
        let h = l.scale * (0.35 + 0.65 * l.shown),
          g = this.meshes[l.variant],
          _ = l.shown < 0.02 ? 0 : h
        ;(_ > 0 && (s = !0),
          this.q.setFromAxisAngle(this.up, l.rot),
          this.m4.compose(this.v.set(l.x, l.y, l.z), this.q, this.s.set(_, _ * 0.9, _)),
          g.setMatrixAt(a[l.variant]++, this.m4))
        let v = l.y / Math.max(r.y, 0.25)
        i[c].set(l.x - r.x * v, l.z - r.z * v, l.scale * 2.3, 1)
      }
      for (let e of this.meshes) e.instanceMatrix.needsUpdate = !0
      this.group.visible = s
    }
  },
  tr = 56,
  nr = 7,
  rr = 3,
  ir = class {
    rect
    read
    write
    mat
    quad
    constructor(e) {
      let t = {
        type: le,
        format: ne,
        minFilter: d,
        magFilter: d,
        depthBuffer: !1,
        generateMipmaps: !1,
      }
      ;((this.read = new re(392, 392, t)),
        (this.write = new re(392, 392, t)),
        (this.rect = new w(e.x - tr / 2, e.z - tr / 2, 1 / tr, 1 / tr)),
        (this.mat = new L({
          uniforms: {
            tPrev: { value: null },
            uTexel: { value: 1 / 392 },
            uFade: { value: 1 },
            uSpread: { value: 0 },
            uRect: { value: this.rect },
            uBoatPos: { value: new w() },
            uBoatShape: { value: new w() },
          },
          vertexShader: `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
          fragmentShader: `
        uniform sampler2D tPrev;
        uniform float uTexel;
        uniform float uFade;
        uniform float uSpread;
        uniform vec4 uRect;
        uniform vec4 uBoatPos;
        uniform vec4 uBoatShape;
        varying vec2 vUv;
        void main() {
          // The old trail: spreading a little into its neighbours, and fading.
          float c = texture2D(tPrev, vUv).r;
          float n = (texture2D(tPrev, vUv + vec2(uTexel, 0.0)).r + texture2D(tPrev, vUv - vec2(uTexel, 0.0)).r
                   + texture2D(tPrev, vUv + vec2(0.0, uTexel)).r + texture2D(tPrev, vUv - vec2(0.0, uTexel)).r) * 0.25;
          float v = mix(c, n, uSpread) * uFade;
          // Fresh churn behind the stern: the two corners (water peeling off the hull's sides) and the middle
          // (stirred by the oars), stronger the faster the boat goes and the more it bobs.
          vec2 wp = uRect.xy + vUv / uRect.zw;
          vec2 rel = wp - uBoatPos.xy;
          float along = dot(rel, uBoatPos.zw);
          float across = dot(rel, vec2(uBoatPos.w, -uBoatPos.z));
          float L = uBoatShape.x;
          float W = uBoatShape.y;
          float go = clamp(uBoatShape.z * 3.0 + uBoatShape.w * 0.6, 0.0, 1.0);
          float back = along + L;                 // 0 at the transom, negative behind it
          float lane = (1.0 - smoothstep(-0.05, 0.35, back)) * smoothstep(-0.8, -0.45, back);
          float corners = exp(-pow((abs(across) - W * 0.8) / 0.15, 2.0));
          float middle = exp(-pow(across / 0.2, 2.0)) * 0.75;
          v = max(v, max(corners, middle) * lane * go * 0.9);
          gl_FragColor = vec4(v, 0.0, 0.0, 1.0);
        }`,
          depthTest: !1,
          depthWrite: !1,
        })),
        (this.quad = new nt(this.mat)))
    }
    get texture() {
      return this.read.texture
    }
    update(e, t, n) {
      let r = this.mat.uniforms
      ;((r.tPrev.value = this.read.texture),
        (r.uFade.value = Math.exp(-t / nr)),
        (r.uSpread.value = 1 - Math.exp(-t * rr)),
        r.uBoatPos.value.copy(n.pos),
        r.uBoatShape.value.copy(n.shape))
      let i = e.getRenderTarget()
      ;(e.setRenderTarget(this.write),
        this.quad.render(e),
        e.setRenderTarget(i),
        ([this.read, this.write] = [this.write, this.read]))
    }
    dispose() {
      ;(this.read.dispose(), this.write.dispose(), this.mat.dispose(), this.quad.dispose())
    }
  }
function ar() {
  let e = [],
    t = [],
    n = [],
    r = [],
    i = (i) => {
      let a = e.length / 3
      ;(e.push(0, 0, 0), t.push(i), n.push(0))
      for (let r = 0; r <= 10; r++) {
        let a = -Math.PI * 0.55 + (r / 10) * Math.PI * 1.1,
          o = (a < 0 ? 0.075 : 0.06) * (0.75 + 0.25 * Math.cos(a * 2))
        ;(e.push(Math.cos(a) * o * i * 1.1, 0, Math.sin(a) * o), t.push(i), n.push(1))
      }
      for (let e = 0; e < 10; e++)
        i > 0 ? r.push(a, a + 1 + e, a + 2 + e) : r.push(a, a + 2 + e, a + 1 + e)
    }
  ;(i(1), i(-1))
  let a = new v()
  return (
    a.setAttribute(`position`, new l(e, 3)),
    a.setAttribute(
      `normal`,
      new l(
        e.map((e, t) => +(t % 3 == 1)),
        3
      )
    ),
    a.setAttribute(`aWing`, new l(t, 1)),
    a.setAttribute(`aSpan`, new l(n, 1)),
    a.setIndex(r),
    a
  )
}
function or() {
  let e = [],
    t = [],
    n = [],
    r = [],
    i = [],
    a = [1, 1, 1],
    o = [0.78, 0.82, 0.86],
    s = [0.25, 0.27, 0.3],
    c = [1, 0.66, 0.2],
    u = (i, a, o, s, c, l) => (
      e.push(i, a, o),
      t.push(s),
      n.push(c),
      r.push(...l),
      e.length / 3 - 1
    ),
    d = u(0, 0.02, 0.26, 0, 0, a),
    f = u(0.06, 0, 0.02, 0, 0, a),
    p = u(0, 0.02, -0.22, 0, 0, a),
    m = u(-0.06, 0, 0.02, 0, 0, a)
  i.push(d, f, p, d, p, m)
  let h = u(0.05, 0, -0.18, 0, 0, a),
    g = u(0, 0, -0.3, 0, 0, a),
    _ = u(-0.05, 0, -0.18, 0, 0, a)
  i.push(h, g, _)
  let y = u(0.015, 0.02, 0.26, 0, 0, c),
    b = u(0, 0.02, 0.33, 0, 0, c),
    x = u(-0.015, 0.02, 0.26, 0, 0, c)
  i.push(y, b, x)
  for (let e of [1, -1]) {
    let t = u(0.05 * e, 0, 0.12, e, 0, o),
      n = u(0.05 * e, 0, -0.07, e, 0, o),
      r = u(0.3 * e, 0, 0.13, e, 0.5, o),
      a = u(0.3 * e, 0, -0.06, e, 0.5, o),
      c = u(0.52 * e, 0, 0.02, e, 1, s),
      l = u(0.48 * e, 0, -0.1, e, 1, s)
    e > 0 ? i.push(t, r, a, t, a, n, r, c, l, r, l, a) : i.push(t, a, r, t, n, a, r, l, c, r, a, l)
  }
  let S = new v()
  return (
    S.setAttribute(`position`, new l(e, 3)),
    S.setAttribute(
      `normal`,
      new l(
        e.map((e, t) => +(t % 3 == 1)),
        3
      )
    ),
    S.setAttribute(`color`, new l(r, 3)),
    S.setAttribute(`aWing`, new l(t, 1)),
    S.setAttribute(`aSpan`, new l(n, 1)),
    S.setIndex(i),
    S
  )
}
var sr = `
attribute float aWing;
attribute float aSpan;
attribute float aFlap;
attribute vec3 aTintColor;
varying vec3 vTintColor;
`,
  cr = `
vTintColor = aTintColor;
if (abs(aWing) > 0.5) {
  float ang = aFlap * aSpan * (1.0 + 0.35 * aSpan);
  float x = transformed.x;
  transformed.x = x * cos(ang);
  transformed.y += abs(x) * sin(ang);
}
`,
  lr = class {
    island
    center
    group = new D()
    night = 0
    butterflies = []
    bMesh
    bFlap
    gulls = []
    gMesh
    gFlap
    flies
    flyData = []
    m4 = new g()
    q = new N()
    e = new me()
    one = new M(1, 1, 1)
    t = 0
    constructor(e, t, n) {
      ;((this.island = e), (this.center = n), (this.group.name = `life`))
      let r = B(33),
        i = [`#FFFFFF`, `#FFE36E`, `#9FD4FF`, `#FFB5CF`, `#FFFFFF`, `#FFD08A`].map((e) => new p(e)),
        a = Math.min(6, Math.max(3, t.length))
      for (let e = 0; e < a; e++) {
        let e = t[Math.floor(r() * t.length)]?.clone() ?? new M(0, 0.6, 0)
        this.butterflies.push({
          home: e,
          p: e.clone().setY(z + 0.6),
          ground: z,
          heading: r() * 6.28,
          phase: r() * 10,
          speed: 0.6 + r() * 0.4,
          seed: r() * 100,
        })
      }
      let o = ar()
      ;((this.bFlap = new P(new Float32Array(a), 1)), o.setAttribute(`aFlap`, this.bFlap))
      let s = new Float32Array(a * 3)
      for (let e = 0; e < a; e++) i[e % i.length].toArray(s, e * 3)
      o.setAttribute(`aTintColor`, new P(s, 3))
      let l = Je(new R({ roughness: 0.7, side: 2 }), {
        key: `butterfly`,
        vertexHead: sr,
        vertexMain: cr,
        fragmentHead: `varying vec3 vTintColor;`,
        albedo: `diffuseColor.rgb = vTintColor;`,
        normal: `normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`,
      })
      ;((this.bMesh = new O(o, l, a)),
        (this.bMesh.castShadow = !0),
        (this.bMesh.frustumCulled = !1),
        this.group.add(this.bMesh))
      for (let e = 0; e < 3; e++)
        this.gulls.push({
          radius: 4.2 + e * 1.8 + r() * 1.2,
          height: 7.4 + e * 0.7 + r() * 0.6,
          speed: (0.22 + r() * 0.08) * (e % 2 ? -1 : 1),
          angle: r() * 6.28,
          phase: r() * 10,
          flapTimer: r() * 3,
          flapping: 0,
        })
      let u = or()
      ;((this.gFlap = new P(new Float32Array(3), 1)),
        u.setAttribute(`aFlap`, this.gFlap),
        u.setAttribute(`aTintColor`, new P(new Float32Array(9).fill(1), 3)))
      let d = Je(new R({ roughness: 0.8, side: 2, vertexColors: !0 }), {
        key: `gull`,
        vertexHead: sr,
        vertexMain: cr,
        normal: `normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`,
      })
      ;((this.gMesh = new O(u, d, 3)),
        (this.gMesh.castShadow = !0),
        (this.gMesh.frustumCulled = !1),
        this.group.add(this.gMesh))
      let f = new Float32Array(108),
        m = new Float32Array(36)
      for (let t = 0, n = 0; t < 400 && n < 36; t++) {
        let t = e.bounds,
          i = t.minX + r() * (t.maxX - t.minX),
          a = t.minZ + r() * (t.maxZ - t.minZ)
        if (e.baseGrassSdf(i, a) > -0.4) continue
        let o = 0.3 + r() * 0.7,
          s = new M(i, z + o, a)
        ;(this.flyData.push({ home: s, lift: o, seed: r() * 100 }),
          s.toArray(f, n * 3),
          (m[n] = r()),
          n++)
      }
      let h = new v()
      ;(h.setAttribute(`position`, new C(f, 3).setUsage(c)), h.setAttribute(`aSeed`, new C(m, 1)))
      let g = new L({
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        uniforms: { uTime: at.uTime, uNight: { value: 0 }, uScale: { value: 1 } },
        vertexShader: `
        attribute float aSeed;
        uniform float uTime;
        uniform float uNight;
        uniform float uScale;
        varying float vA;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          float blink = smoothstep(0.35, 0.9, sin(uTime * (1.3 + aSeed * 1.7) + aSeed * 40.0) * 0.5 + 0.5);
          vA = blink * uNight;
          gl_PointSize = uScale * (5.0 + 5.0 * blink) * (18.0 / -mv.z) * 3.0;
          gl_Position = projectionMatrix * mv;
        }`,
        fragmentShader: `
        varying float vA;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float a = (1.0 - smoothstep(0.0, 1.0, d));
          a = a * a * vA;
          if (a < 0.003) discard;
          gl_FragColor = vec4(vec3(1.0, 0.95, 0.45) * a * 1.6, 1.0);
        }`,
      })
      ;((this.flies = new ve(h, g)),
        (this.flies.frustumCulled = !1),
        (this.flies.renderOrder = 25),
        this.group.add(this.flies))
    }
    setGround() {
      for (let e of this.flyData)
        e.home.y = Math.max(z, this.island.height(e.home.x, e.home.z)) + e.lift
    }
    setPixelRatio(e) {
      this.flies.material.uniforms.uScale.value = e
    }
    update(e) {
      this.t += e
      let t = this.t,
        n = 1 - this.night,
        r = 1 - Math.exp(-e * 5)
      ;(this.butterflies.forEach((e, i) => {
        let a = e.seed,
          o = e.home.x + Math.sin(t * 0.37 * e.speed + a) * 1.3 + Math.sin(t * 0.91 + a * 2) * 0.5,
          s = e.home.z + Math.cos(t * 0.29 * e.speed + a * 1.3) * 1.3 + Math.cos(t * 0.73 + a) * 0.5
        e.ground += (Math.max(z, this.island.shape.top(o, s)) - e.ground) * r
        let c =
            e.ground +
            0.45 +
            0.35 * (0.5 + 0.5 * Math.sin(t * 1.3 + a)) +
            0.08 * Math.sin(t * 7 + a),
          l = o - e.p.x,
          u = s - e.p.z
        ;(e.p.set(o, c, s), l * l + u * u > 1e-8 && (e.heading = Math.atan2(l, u)))
        let d = Math.sin(t * 22 + e.phase) * 0.9 + 0.35
        this.bFlap.setX(i, d)
        let f = 2.1 * n
        ;(this.e.set(0, e.heading, 0.12 * Math.sin(t * 3 + a)),
          this.q.setFromEuler(this.e),
          this.m4.compose(e.p, this.q, this.one.set(f, f, f)),
          this.bMesh.setMatrixAt(i, this.m4))
      }),
        (this.bMesh.instanceMatrix.needsUpdate = !0),
        (this.bFlap.needsUpdate = !0),
        this.gulls.forEach((n, r) => {
          ;((n.angle += n.speed * e),
            (n.flapTimer -= e),
            n.flapTimer < 0 &&
              ((n.flapping = 1.2 + Math.random() * 0.8), (n.flapTimer = 3 + Math.random() * 4)),
            (n.flapping = Math.max(0, n.flapping - e)))
          let i =
            n.flapping > 0
              ? Math.sin(t * 9 + n.phase) * 0.55
              : 0.12 + 0.05 * Math.sin(t * 1.3 + n.phase)
          this.gFlap.setX(r, i)
          let a = Math.sin(t * 0.5 + n.phase) * 0.8,
            o = this.center.x + Math.cos(n.angle) * (n.radius + a),
            s = this.center.z + Math.sin(n.angle) * (n.radius + a),
            c = n.height + Math.sin(t * 0.7 + n.phase) * 0.4,
            l = Math.sign(n.speed),
            u = Math.atan2(-Math.sin(n.angle) * l, Math.cos(n.angle) * l)
          ;(this.e.set(0, u, -0.35 * l, `YXZ`), this.q.setFromEuler(this.e))
          let d = 1.05
          ;(this.m4.compose(new M(o, c, s), this.q, this.one.set(d, d, d)),
            this.gMesh.setMatrixAt(r, this.m4))
        }),
        (this.gMesh.instanceMatrix.needsUpdate = !0),
        (this.gFlap.needsUpdate = !0),
        (this.gMesh.visible = this.night < 0.85))
      let i = this.flies.material
      if (
        ((i.uniforms.uNight.value = Math.max(0, (this.night - 0.4) / 0.6)),
        (this.flies.visible = this.night > 0.4),
        this.flies.visible)
      ) {
        let e = this.flies.geometry.getAttribute(`position`)
        ;(this.flyData.forEach((n, r) => {
          let i = n.seed
          e.setXYZ(
            r,
            n.home.x + Math.sin(t * 0.3 + i) * 0.6 + Math.sin(t * 1.1 + i * 3) * 0.15,
            n.home.y + Math.sin(t * 0.5 + i * 2) * 0.25,
            n.home.z + Math.cos(t * 0.27 + i) * 0.6 + Math.cos(t * 0.9 + i) * 0.15
          )
        }),
          (e.needsUpdate = !0))
      }
    }
  },
  ur = 0.13,
  dr = -0.19,
  fr = 0.86,
  pr = 0.35,
  mr = [
    [-0.25, 0.022, -0.82],
    [0, 0.012, -0.82],
    [0.25, 0.022, -0.82],
    [-0.26, 0.012, -0.19],
    [0, 0, -0.19],
    [0.26, 0.012, -0.19],
    [-0.17, 0.05, 0.44],
    [0, 0.037, 0.44],
    [0.17, 0.05, 0.44],
  ].map(([e, t, n]) => new M(e, t, n)),
  hr = (() => {
    let e = 0,
      t = 0
    for (let n of mr) ((e += ur - n.y), (t += n.z * (ur - n.y)))
    return new M(0, 0.1, t / e)
  })(),
  gr = mr.map((e) => e.clone().sub(hr)),
  _r = 9.81,
  vr = gr.reduce((e, t) => e + t.y, 0) / gr.length + hr.y,
  yr = _r / (gr.length * (ur - vr)),
  br = 1.6,
  xr = 0.6,
  Sr = new M(
    (2.1 ** 2 + 0.55 ** 2) / 12,
    (2.1 ** 2 + 0.98 ** 2) / 12,
    (0.98 ** 2 + 0.55 ** 2) / 12
  ),
  Cr = 0.6,
  wr = 0.9,
  Tr = 1 / 240,
  Er = 24,
  Dr = 3.9,
  Or = 7,
  kr = 1.6,
  Ar = 0.3,
  jr = class {
    island
    group = new D()
    wake = { pos: new w(), shape: new w() }
    blocked = () => !1
    pos = new M()
    vel = new M()
    quat = new N()
    spin = new M()
    clock = -1
    direction = 1
    checkpoint = new j(1 / 0, 1 / 0)
    checkpointTime = 0
    lastLootAt = 0
    bob = 0
    flow = new j()
    s = { h: 0, dx: 0, dz: 0 }
    force = new M()
    torque = new M()
    r = new M()
    p = new M()
    v = new M()
    f = new M()
    fwd = new M()
    qi = new N()
    wb = new M()
    tb = new M()
    iw = new M()
    gyro = new M()
    dq = new N()
    constructor(e, t) {
      ;((this.island = t),
        (this.group.name = `dinghy`),
        Y(e),
        e.traverse((e) => {
          let t = e
          if (t.isMesh) {
            if (t.name === `Dinghy_Mask`) {
              ;((t.material = new F({ colorWrite: !1, side: 2 })), (t.renderOrder = 2))
              return
            }
            for (let e of Array.isArray(t.material) ? t.material : [t.material]) X(e)
            ;((t.castShadow = !1), (t.receiveShadow = !0))
          }
        }),
        e.position.copy(hr).negate(),
        this.group.add(e))
      let n = new j(-0.98, 0.2).normalize(),
        r = 0
      for (; r < 40 && t.landSdf(n.x * r, n.y * r, Or) < Dr; ) r += 0.1
      ;(this.pos.set(n.x * r, hr.y - ur, n.y * r),
        this.updateFlow(0),
        this.quat.setFromAxisAngle(new M(0, 1, 0), Math.atan2(this.flow.x, this.flow.y)),
        this.sync())
    }
    near(e, t, n) {
      return Math.hypot(this.pos.x - e, this.pos.z - t) < n
    }
    get hasLoot() {
      return this.clock >= 0 && this.clock - this.lastLootAt >= 40
    }
    collectLoot() {
      ;((this.lastLootAt = this.clock), (this.direction *= -1), (this.vel.y += 1.6))
    }
    nudge() {
      ;((this.direction *= -1), (this.vel.y += 1.2))
    }
    pick(e, t, n) {
      let r = n.rayFrom(e, t),
        i = this.pos.clone().setY(this.pos.y + 0.35),
        a = r.intersectSphere(new b(i, 1.15), new M())
      return a
        ? {
            t: a.distanceTo(r.origin),
            anchor: i.clone().setY(i.y + 0.85),
            hasLoot: this.hasLoot,
          }
        : null
    }
    update(e, t) {
      ;(this.clock < 0 && (this.clock = e), this.updateFlow(e))
      let n = 0
      for (; this.clock + Tr <= e && n < Er; ) (this.step(Tr, t), (this.clock += Tr), n++)
      ;(n === Er && (this.clock = e), this.sync())
    }
    updateFlow(e) {
      let { island: t } = this,
        n = this.pos.x,
        r = this.pos.z,
        i = 0.35,
        a = t.landSdf(n, r, Or),
        o = t.landSdf(n + i, r, Or) - t.landSdf(n - i, r, Or),
        s = t.landSdf(n, r + i, Or) - t.landSdf(n, r - i, Or)
      Math.hypot(o, s) < 1e-4 &&
        ((o = t.baseLandSdf(n + i, r) - t.baseLandSdf(n - i, r)),
        (s = t.baseLandSdf(n, r + i) - t.baseLandSdf(n, r - i)))
      let c = Math.hypot(o, s) || 1
      ;((o /= c), (s /= c))
      let l = Dr + 0.6 * Math.sin(e * 0.021 + 1.3) + 0.3 * Math.sin(e * 0.057),
        u = Ar * (1 + 0.25 * Math.sin(e * 0.033 + 0.4)),
        d = Ue((l - a) * 0.3, -0.25, a < kr ? 0.25 + (kr - a) * 1.2 : 0.25),
        f = -s * this.direction * u + o * d,
        p = o * this.direction * u + s * d,
        m = Math.floor(n),
        h = Math.floor(r),
        g = 0
      for (let e = -2; e <= 2; e++)
        for (let t = -2; t <= 2; t++) {
          if (!this.blocked(m + e + 0.5, h + t + 0.5)) continue
          let i = n - (m + e + 0.5),
            a = r - (h + t + 0.5),
            o = Math.max(i * i + a * a, 0.25)
          ;((f += (i / o) * 0.5), (p += (a / o) * 0.5), (g += 1 / o))
        }
      let _ = Math.min(g * 0.35, 0.5)
      ;((f += o * _),
        (p += s * _),
        this.flow.set(f, p),
        e - this.checkpointTime > 8 &&
          (Math.hypot(n - this.checkpoint.x, r - this.checkpoint.y) < 1 && (this.direction *= -1),
          this.checkpoint.set(n, r),
          (this.checkpointTime = e)))
    }
    step(e, t) {
      let {
          force: n,
          torque: r,
          r: i,
          p: a,
          v: o,
          f: s,
          s: c,
          quat: l,
          pos: u,
          vel: d,
          spin: f,
        } = this,
        p = this.clock
      ;(n.set(0, -9.81, 0), r.set(0, 0, 0))
      let m = et(t - this.island.height(u.x, u.z))
      for (let e of gr) {
        ;(i.copy(e).applyQuaternion(l), a.copy(u).add(i), Qe(a.x, a.z, p, c))
        let h = Ue(t + c.h * m - a.y, 0, 0.5)
        if (h <= 0) continue
        o.copy(f).cross(i).add(d)
        let g = yr * h - br * o.y
        ;(s.set(-c.dx * m * g * xr, g, -c.dz * m * g * xr), n.add(s), r.add(o.copy(i).cross(s)))
      }
      this.fwd.set(0, 0, 1).applyQuaternion(l)
      let h = this.fwd.x,
        g = this.fwd.z,
        _ = Math.hypot(h, g) || 1,
        v = h / _,
        y = g / _,
        b = d.x - this.flow.x,
        x = d.z - this.flow.y,
        S = -0.5 * (b * v + x * y),
        C = -3.5 * (b * y - x * v)
      ;((n.x += v * S + y * C), (n.z += y * S - v * C))
      let w = Math.atan2(this.flow.x, this.flow.y) - Math.atan2(v, y)
      ;((w = Math.atan2(Math.sin(w), Math.cos(w))),
        (r.y += Cr * w * Math.min(Math.hypot(this.flow.x, this.flow.y) / Ar, 1) - wr * f.y),
        r.addScaledVector(f, -0.08),
        d.addScaledVector(n, e),
        u.addScaledVector(d, e),
        this.qi.copy(l).invert())
      let T = this.wb.copy(f).applyQuaternion(this.qi),
        E = this.tb.copy(r).applyQuaternion(this.qi),
        ee = this.iw.copy(T).multiply(Sr)
      ;(E.sub(this.gyro.copy(T).cross(ee)).divide(Sr),
        T.addScaledVector(E, e),
        f.copy(T).applyQuaternion(l))
      let te = this.dq.set(f.x * e * 0.5, f.y * e * 0.5, f.z * e * 0.5, 0).multiply(l)
      l.set(l.x + te.x, l.y + te.y, l.z + te.z, l.w + te.w).normalize()
    }
    sync() {
      ;(this.group.position.copy(this.pos), this.group.quaternion.copy(this.quat))
      let e = this.p.set(0, ur, dr).sub(hr).applyQuaternion(this.quat).add(this.pos),
        t = this.fwd.set(0, 0, 1).applyQuaternion(this.quat),
        n = Math.hypot(t.x, t.z) || 1
      this.wake.pos.set(e.x, e.z, t.x / n, t.z / n)
      let r = (this.vel.x * t.x + this.vel.z * t.z) / n
      ;((this.bob += (Math.abs(this.vel.y) - this.bob) * 0.1),
        this.wake.shape.set(fr, pr, r, this.bob))
    }
  },
  Vr = class {
    wood = 0
    stone = 0
    coins = 0
    owned = 0
    axe = !1
    pickaxe = !1
    rod = !1
    benches = 0
    bonfires = 0
    seats = 0
    lanterns = 0
    planters = 0
    crabTraps = 0
    fish = new Map()
    pockets = 12
    creative = !1
    placed = () => 0
    listeners = new Set()
    get blocks() {
      return this.creative ? 1 / 0 : Math.max(0, this.owned - this.placed())
    }
    get benchCount() {
      return this.creative ? 1 / 0 : this.benches
    }
    get bonfireCount() {
      return this.creative ? 1 / 0 : this.bonfires
    }
    get seatCount() {
      return this.creative ? 1 / 0 : this.seats
    }
    get lanternCount() {
      return this.creative ? 1 / 0 : this.lanterns
    }
    get planterCount() {
      return this.creative ? 1 / 0 : this.planters
    }
    get crabTrapCount() {
      return this.creative ? 1 / 0 : this.crabTraps
    }
    get hasAxe() {
      return this.creative || this.axe
    }
    has(e) {
      return this.creative || this[e]
    }
    canPlace(e = 1) {
      return this.blocks >= e
    }
    hasWood(e) {
      return this.creative || this.wood >= e
    }
    afford(e) {
      return this.creative || (this.wood >= (e.wood ?? 0) && this.stone >= (e.stone ?? 0))
    }
    spend(e) {
      return this.creative
        ? !0
        : this.afford(e)
          ? ((this.wood -= e.wood ?? 0), (this.stone -= e.stone ?? 0), this.emit(), !0)
          : !1
    }
    addWood(e) {
      ;((this.wood += e), this.emit())
    }
    addStone(e) {
      ;((this.stone += e), this.emit())
    }
    addCoins(e) {
      ;((this.coins += e), this.emit())
    }
    spendCoins(e) {
      return this.creative
        ? !0
        : this.coins >= e
          ? ((this.coins -= e), this.emit(), !0)
          : !1
    }
    upgradePockets(e = 4) {
      ;((this.pockets += e), this.emit())
    }
    spendWood(e) {
      return this.spend({ wood: e })
    }
    craft(e) {
      let t = this.creative ? e : Math.min(e, this.wood)
      return t <= 0
        ? 0
        : (this.creative || (this.wood -= t), (this.owned += t * 3), this.emit(), t * 3)
    }
    make(e) {
      let t = Br(e)
      return (e === `pickaxe` && this.pickaxe) || (e === `rod` && this.rod) || !this.spend(t)
        ? !1
        : (e === `pickaxe`
            ? (this.pickaxe = !0)
            : e === `rod`
              ? (this.rod = !0)
              : e === `bench` && !this.creative
                ? this.benches++
                : e === `bonfire` && !this.creative
                  ? this.bonfires++
                  : e === `seat` && !this.creative
                    ? this.seats++
                    : e === `lantern` && !this.creative
                      ? this.lanterns++
                      : e === `planter` && !this.creative
                        ? this.planters++
                        : e === `crab_trap` && !this.creative && this.crabTraps++,
          this.emit(),
          !0)
    }
    giveAxe() {
      ;((this.axe = !0), this.emit())
    }
    useBench() {
      return this.creative ? !0 : this.benches < 1 ? !1 : (this.benches--, this.emit(), !0)
    }
    returnBench() {
      ;(this.creative || this.benches++, this.emit())
    }
    useBonfire() {
      return this.creative ? !0 : this.bonfires < 1 ? !1 : (this.bonfires--, this.emit(), !0)
    }
    returnBonfire() {
      ;(this.creative || this.bonfires++, this.emit())
    }
    useSeat() {
      return this.creative ? !0 : this.seats < 1 ? !1 : (this.seats--, this.emit(), !0)
    }
    returnSeat() {
      ;(this.creative || this.seats++, this.emit())
    }
    useLantern() {
      return this.creative ? !0 : this.lanterns < 1 ? !1 : (this.lanterns--, this.emit(), !0)
    }
    returnLantern() {
      ;(this.creative || this.lanterns++, this.emit())
    }
    usePlanter() {
      return this.creative ? !0 : this.planters < 1 ? !1 : (this.planters--, this.emit(), !0)
    }
    returnPlanter() {
      ;(this.creative || this.planters++, this.emit())
    }
    useCrabTrap() {
      return this.creative ? !0 : this.crabTraps < 1 ? !1 : (this.crabTraps--, this.emit(), !0)
    }
    returnCrabTrap() {
      ;(this.creative || this.crabTraps++, this.emit())
    }
    fishCount(e, t) {
      let n = this.fish.get(e)
      return n ? (t ? n.cooked : n.raw) : 0
    }
    addFish(e, t = !1, n = 1) {
      let r = this.fish.get(e) ?? { raw: 0, cooked: 0 }
      ;(t ? (r.cooked += n) : (r.raw += n), this.fish.set(e, r), this.emit())
    }
    takeFish(e, t, n = 1) {
      let r = this.fish.get(e)
      return !r || (t ? r.cooked : r.raw) < n
        ? !1
        : (t ? (r.cooked -= n) : (r.raw -= n),
          !r.raw && !r.cooked && this.fish.delete(e),
          this.emit(),
          !0)
    }
    cook(e, t) {
      let n = this.fish.get(e),
        r = Math.min(t, n?.raw ?? 0)
      return !n || r <= 0 ? 0 : ((n.raw -= r), (n.cooked += r), this.emit(), r)
    }
    fishStacks() {
      let e = []
      for (let t of Nr) {
        let n = this.fish.get(t)
        n?.raw && e.push({ id: t, cooked: !1, n: n.raw })
      }
      for (let t of Nr) {
        let n = this.fish.get(t)
        n?.cooked && e.push({ id: t, cooked: !0, n: n.cooked })
      }
      return e
    }
    get anyFish() {
      return this.fish.size > 0
    }
    get pocketsUsed() {
      let e =
        +!!this.axe +
        +!!this.pickaxe +
        +!!this.rod +
        +(this.blocks > 0) +
        +(this.benches > 0) +
        +(this.bonfires > 0) +
        +(this.seats > 0) +
        +(this.lanterns > 0) +
        +(this.planters > 0) +
        +(this.crabTraps > 0)
      for (let t of this.fish.values()) e += +!!t.raw + +!!t.cooked
      return e
    }
    roomFor(e, t = !1) {
      return this.creative || this.fishCount(e, t) > 0 || this.pocketsUsed < this.pockets
    }
    setCreative(e) {
      ;((this.creative = e), this.emit())
    }
    changed() {
      this.emit()
    }
    onChange(e) {
      return (this.listeners.add(e), () => this.listeners.delete(e))
    }
    load(e, t, n) {
      let r = (e, t = 0) => typeof e == `number` && Number.isFinite(e) && e >= t
      if ((this.fish.clear(), e && r(e.wood) && r(e.owned))) {
        ;((this.wood = Math.floor(e.wood)),
          (this.owned = Math.max(Math.floor(e.owned), t)),
          (this.stone = r(e.stone) ? Math.floor(e.stone) : 0),
          (this.coins = r(e.coins) ? Math.floor(e.coins) : 0),
          (this.creative = e.creative === !0),
          (this.axe = e.axe ?? !0),
          (this.pickaxe = e.pickaxe === !0),
          (this.rod = e.rod === !0),
          (this.benches = r(e.benches) ? Math.floor(e.benches) : 0),
          (this.bonfires = r(e.bonfires) ? Math.floor(e.bonfires) : 0),
          (this.seats = r(e.seats) ? Math.floor(e.seats) : 0),
          (this.lanterns = r(e.lanterns) ? Math.floor(e.lanterns) : 0),
          (this.planters = r(e.planters) ? Math.floor(e.planters) : 0),
          (this.crabTraps = r(e.crabTraps) ? Math.floor(e.crabTraps) : 0),
          (this.pockets = Math.max(
            12 + getUpgradeLevel(`pack_upgrade`) * 4,
            r(e.pockets, 12) ? Math.floor(e.pockets) : 12
          )))
        for (let t of Array.isArray(e.fish) ? e.fish : [])
          Array.isArray(t) &&
            Fr(t[0]) &&
            r(t[1]) &&
            r(t[2]) &&
            (t[1] || t[2]) &&
            this.fish.set(t[0], { raw: Math.floor(t[1]), cooked: Math.floor(t[2]) })
      } else
        ((this.wood = 0),
          (this.stone = 0),
          (this.coins = 0),
          (this.owned = t),
          (this.creative = !1),
          (this.axe = !n),
          (this.pickaxe = !1),
          (this.rod = !1),
          (this.benches = 0),
          (this.bonfires = 0),
          (this.seats = 0),
          (this.lanterns = 0),
          (this.planters = 0),
          (this.crabTraps = 0),
          (this.pockets = 12))
      this.emit()
    }
    toJSON() {
      let e = [...this.fish].map(([e, t]) => [e, t.raw, t.cooked])
      return {
        wood: this.wood,
        owned: this.owned,
        stone: this.stone,
        coins: this.coins,
        axe: this.axe,
        ...(this.pickaxe ? { pickaxe: !0 } : {}),
        ...(this.rod ? { rod: !0 } : {}),
        benches: this.benches,
        ...(this.bonfires ? { bonfires: this.bonfires } : {}),
        ...(this.seats ? { seats: this.seats } : {}),
        ...(this.lanterns ? { lanterns: this.lanterns } : {}),
        ...(this.planters ? { planters: this.planters } : {}),
        ...(this.crabTraps ? { crabTraps: this.crabTraps } : {}),
        ...(e.length ? { fish: e } : {}),
        ...(this.pockets === 12 ? {} : { pockets: this.pockets }),
        ...(this.creative ? { creative: !0 } : {}),
      }
    }
    emit() {
      for (let e of this.listeners) e()
    }
  },
  Hr = class {
    model
    holder = new D()
    t = -1
    grip = new M()
    frame = new N()
    axis = new M()
    onImpact = null
    again = !1
    constructor(e) {
      ;((this.model = e),
        this.holder.add(e),
        e.position.set(0, 0, 0),
        e.rotation.set(0, 0, 0),
        (this.holder.visible = !1))
    }
    swing(e, t, n, r, i = !1) {
      let a = new M(t.z, 0, -t.x),
        o,
        s
      ;(i
        ? ((s = t.clone().multiplyScalar(-0.5).setY(-0.86).normalize()),
          (o = new M().crossVectors(a, s).addScaledVector(a, -0.35).normalize()),
          o.y > 0 && o.negate())
        : ((o = t.clone().multiplyScalar(-0.45).addScaledVector(a, -0.85).setY(0.3).normalize()),
          (s = new M(o.z, 0, -o.x).normalize()),
          s.dot(t) > 0 && s.negate()),
        s.addScaledVector(o, -s.dot(o)).normalize())
      let c = e.clone().addScaledVector(s, -n)
      this.grip.copy(c).addScaledVector(o, -0.8).addScaledVector(s, -0.13)
      let l = new M().crossVectors(o, s).normalize()
      ;(this.frame.setFromRotationMatrix(new g().makeBasis(l, o, s)),
        this.axis.copy(l),
        (this.onImpact = r),
        (this.again = this.holder.visible && this.t >= 0),
        (this.t = 0),
        (this.holder.visible = !0))
    }
    get busy() {
      return this.t >= 0 && this.t < 0.42
    }
    update(e) {
      if (this.t < 0) return
      this.t += e
      let t = this.t,
        n,
        r = 1
      if (t < 0.12) {
        let e = t / 0.12
        ;((n = -0.5 - 0.75 * (1 - (1 - e) * (1 - e))), (r = this.again ? 1 : Math.min(1, e * 2.5)))
      } else if (t < 0.2) {
        let e = (t - 0.12) / 0.08
        n = -1.25 + 1.29 * e * e
      } else {
        if (this.onImpact) {
          let e = this.onImpact
          ;((this.onImpact = null), e())
        }
        ;((n = t < 0.32 ? 0.04 - 0.3 * Math.sin(((t - 0.2) / 0.12) * Math.PI * 0.5) : -0.26),
          t > 0.48 && (r = Math.max(0, 1 - (t - 0.48) / 0.16)))
      }
      let i = new N().setFromAxisAngle(this.axis, n)
      ;(this.holder.quaternion.copy(i).multiply(this.frame),
        this.holder.position.copy(this.grip),
        this.holder.scale.setScalar(1.6 * (0.4 + 0.6 * r)),
        r <= 0 && t > 0.3 && ((this.t = -1), (this.holder.visible = !1)))
    }
  },
  Ur = WORLD_CONFIG.palmSpawns,
  Wr = { x: -0.5, z: 0.8 },
  Gr = WORLD_CONFIG.palmStumpMs,
  Kr = WORLD_CONFIG.palmSaplingMs,
  qr = 1.05,
  Jr = 0.26,
  Yr = new M(0, 1, 0),
  Xr = [new p(`#6CC35A`), new p(`#4FA046`), new p(`#8BD06A`)],
  Zr = class {
    island
    rig
    fx
    sound
    group = new D()
    obstacles = []
    footprints = []
    palms = []
    logs = []
    logModel = null
    axe = null
    now = () => Date.now()
    queued = null
    hovered = -1
    onChop
    onFell
    onLog
    onChange
    constructor(e, t, n, r) {
      ;((this.island = e),
        (this.rig = t),
        (this.fx = n),
        (this.sound = r),
        (this.group.name = `palms`))
    }
    load(e, t, n, r = () => !1) {
      let i = []
      for (let t = 0; t < 3; t++) {
        let n = e.getObjectByName(`Palm_${t}`)
        if (!n) continue
        ;(n.position.set(0, 0, 0), n.rotation.set(0, 0, 0), n.scale.setScalar(1), Y(n))
        let r = n.getObjectByName(`Palm_${t}_Tree`)
        if (r) {
          let e = yn(r, `Palm_Merged`)
          for (let e of [...r.children]) r.remove(e)
          r.add(e)
        }
        i.push(n)
      }
      let a = e.getObjectByName(`Sapling`) ?? null
      if ((a && (a.position.set(0, 0, 0), Y(a)), i.length)) {
        if (
          (Ur.forEach(([e, t, n, o], s) => {
            let c = new M(e - Wr.x, 0, t - Wr.z).normalize()
            for (let n of [0, 0.6, 1.2])
              if (r(Math.floor(e + c.x * n * o), Math.floor(t + c.z * n * o))) return
            let l = i[n % i.length],
              u = l.name,
              d = l.clone(!0)
            d.updateMatrixWorld(!0)
            let f = d.getObjectByName(`${u}_Top`),
              p = f ? f.getWorldPosition(new M()) : new M(0.6, 4, 0),
              m = d.getObjectByName(`${u}_Cut`) ?? null,
              h = m ? new xe().setFromObject(m).getCenter(new M()) : new M(0, 0.35, 0),
              g = [],
              _ = new Map()
            d.traverse((e) => {
              let t = e
              if (!t.isMesh) return
              let n = (e) => {
                let t = _.get(e)
                return (
                  t ||
                    ((t = e.clone()),
                    (t.name = e.name),
                    X(t),
                    gn(t)?.uLhCenter.value.copy(h),
                    _.set(e, t),
                    g.push(t)),
                  t
                )
              }
              ;((t.material = Array.isArray(t.material) ? t.material.map(n) : n(t.material)),
                (t.castShadow = !0),
                (t.receiveShadow = !0))
            })
            let v = this.island.height(e, t),
              y = new M(e - Wr.x, 0, t - Wr.z).normalize()
            ;(d.position.set(e, v, t),
              (d.rotation.y = Math.atan2(-y.z, y.x) + (((s * 37) % 7) - 3) * 0.06),
              d.scale.setScalar(o),
              this.group.add(d),
              d.updateMatrixWorld(!0))
            let b = d.getObjectByName(`${u}_Tree`),
              x = new D(),
              S = h.clone().applyMatrix4(d.matrixWorld)
            ;(x.position.copy(S), this.group.add(x), x.updateMatrixWorld(!0), b && x.attach(b))
            let C = p.clone().applyMatrix4(d.matrixWorld),
              w = x.worldToLocal(C.clone())
            m && (m.visible = !1)
            let T = [d.getObjectByName(`${u}_Stump`), m].filter((e) => !!e),
              E = null
            a &&
              ((E = a.clone(!0)),
              E.traverse((e) => {
                let t = e
                if (!t.isMesh) return
                let n = Array.isArray(t.material) ? t.material[0] : t.material,
                  r = n.clone()
                ;((r.name = n.name),
                  X(r),
                  (t.material = r),
                  (t.castShadow = !0),
                  (t.receiveShadow = !0))
              }),
              E.position.set(e, v, t),
              (E.rotation.y = d.rotation.y),
              E.scale.setScalar(0.001),
              (E.visible = !1),
              this.group.add(E))
            let ee = { x: e, z: t, r: 0.32 * o, y0: v - 0.2, y1: v + 2.6 * o }
            ;(this.obstacles.push(ee),
              this.footprints.push({ x: e, z: t, r: 0.55 * o }),
              this.island.reserve(Math.floor(e), Math.floor(t)),
              this.palms.push({
                index: s,
                x: e,
                z: t,
                scale: o,
                base: new M(e, v, t),
                cutPoint: S,
                root: d,
                stump: T,
                cut: m,
                pivot: x,
                sapling: E,
                crownLocal: w,
                mats: g,
                obstacle: ee,
                state: `standing`,
                hits: 0,
                felledAt: 0,
                t: 0,
                shake: { axis: new M(1, 0, 0), amp: 0, t: 0 },
                fall: { axis: new M(1, 0, 0), angle: 0, vel: 0, max: 1.4, bounces: 0 },
                glow: 0,
                groundGoal: v,
              }))
          }),
          t)
        ) {
          let e = t.getObjectByName(`Axe`) ?? t
          ;(Y(e),
            e.traverse((e) => {
              let t = e
              if (t.isMesh) {
                for (let e of Array.isArray(t.material) ? t.material : [t.material]) X(e)
                t.castShadow = !0
              }
            }),
            (this.axe = new Hr(e)),
            this.group.add(this.axe.holder))
        }
        if (n) {
          let e = n.getObjectByName(`Log`) ?? n
          ;(Y(e),
            e.traverse((e) => {
              let t = e
              if (t.isMesh) {
                for (let e of Array.isArray(t.material) ? t.material : [t.material]) X(e)
                t.castShadow = !0
              }
            }),
            (this.logModel = e))
        }
      }
    }
    get count() {
      return this.palms.length
    }
    get models() {
      return { axe: this.axe?.model ?? null, log: this.logModel ?? null }
    }
    pick(e, t) {
      let n = this.rig.rayFrom(e, t),
        r = null,
        i = new M()
      for (let e of this.palms) {
        let t = 1 / 0,
          a = new M()
        if (e.state === `standing` || e.state === `growing`) {
          let r = e.state === `growing` ? e.pivot.scale.x : 1
          i.copy(e.crownLocal).applyMatrix4(e.pivot.matrixWorld)
          let o = Qr(n, e.base, i)
          o.dist < Jr * 1.9 * e.scale * r && (t = o.t)
          let s = $r(n, i, 1.45 * e.scale * r)
          ;(s < t && (t = s), a.copy(i).lerp(e.base, 0.35))
        } else if (e.state === `stump` || e.state === `sapling`) {
          let r = e.base.clone().setY(e.base.y + 0.3)
          ;((t = $r(n, r, 0.55 * e.scale)), a.copy(r).setY(r.y + 0.6))
        }
        t < (r?.t ?? 1 / 0) &&
          ((r = { palm: e.index, state: e.state, t, anchor: a }),
          (e.state === `stump` || e.state === `sapling`) &&
            (r.regrowIn = Math.max(0, e.felledAt + Gr + Kr - this.now())))
      }
      return r
    }
    setHover(e) {
      let t = e ? this.pick(e.ndcX, e.ndcY) : null,
        n = t && t.state === `standing` ? t.palm : -1
      return (n !== this.hovered && n >= 0 && this.sound.tick(), (this.hovered = n), t)
    }
    chop(e) {
      let t = this.pick(e.ndcX, e.ndcY)
      if (!t || t.state !== `standing`) return t
      if (this.axe?.busy) return ((this.queued = e), t)
      let n = this.palms.find((e) => e.index === t.palm),
        r = this.rig.camera.position,
        i = new M(r.x - n.base.x, 0, r.z - n.base.z).normalize(),
        a = n.base.clone().setY(n.base.y + qr * n.scale),
        o = () => this.land(n, i)
      return (this.axe ? this.axe.swing(a, i, Jr * n.scale, o) : o(), t)
    }
    shake(e) {
      let t = this.palms.find((t) => t.index === e)
      if (!t || t.state !== `standing`) return
      let n = this.rig.camera.position
      ;(t.shake.axis.set(n.x - t.base.x, 0, n.z - t.base.z).normalize(),
        (t.shake.amp = 0.045),
        (t.shake.t = 0))
      let r = t.crownLocal.clone().applyMatrix4(t.pivot.matrixWorld)
      ;(this.fx.clods(r.setY(r.y - 0.3), 3, Xr, t.base.y, 1.1, 0.25), this.sound.shake())
    }
    land(e, t) {
      if (e.state !== `standing`) return
      e.hits++
      let n = e.hits >= Math.max(1, 3 - getUpgradeLevel(`axe_upgrade`)),
        r = new M(t.z, 0, -t.x),
        i = e.base
          .clone()
          .setY(e.base.y + qr * e.scale)
          .addScaledVector(t, Jr * e.scale)
          .addScaledVector(r, 0.1)
      this.fx.splinters(i, n ? 14 : 9, e.base.y)
      let a = e.crownLocal.clone().applyMatrix4(e.pivot.matrixWorld)
      ;(this.fx.clods(a.setY(a.y - 0.3), n ? 6 : 3, Xr, e.base.y, 1.1, 0.25),
        e.shake.axis.set(-r.x, 0, -r.z).cross(Yr).normalize(),
        (e.shake.amp = n ? 0.03 : 0.07),
        (e.shake.t = 0),
        this.sound.chop(e.hits),
        n && this.fell(e, t),
        this.onChop?.(e.hits, n))
    }
    fell(e, t) {
      let n = new M(e.x - Wr.x, 0, e.z - Wr.z).normalize(),
        r = t.clone().negate().add(n.multiplyScalar(0.5)).normalize()
      r.applyAxisAngle(Yr, (Math.random() - 0.5) * 0.7)
      let i = new M(r.z, 0, -r.x),
        a = e.crownLocal.clone(),
        o = new N(),
        s = 1.45
      for (let t = 0.2; t < 1.6; t += 0.02) {
        o.setFromAxisAngle(i, t)
        let n = a.clone().applyQuaternion(o).add(e.cutPoint),
          r = Math.max(this.island.height(n.x, n.z), 0) + 0.75 * e.scale
        if (n.y <= r) {
          s = t
          break
        }
      }
      ;((e.state = `falling`),
        (e.t = 0),
        (e.fall = { axis: i, angle: 0.02, vel: 0.35, max: s, bounces: 0 }),
        this.sound.creak())
    }
    sprout(e) {
      ;((e.state = `sapling`),
        (e.t = 0),
        this.fx.dust(e.base, 0.4, 10),
        this.fx.sparkles(e.base.clone().setY(e.base.y + 0.2), 4))
    }
    regrow(e) {
      ;((e.state = `growing`), (e.t = 0), (e.hits = 0))
      for (let t of e.stump) t.visible = t !== e.cut
      ;((e.pivot.visible = !0),
        e.pivot.quaternion.identity(),
        this.fx.sparkles(e.base.clone().setY(e.base.y + 0.5), 8))
    }
    felled() {
      return this.palms
        .filter((e) => e.state === `stump` || e.state === `sapling`)
        .map((e) => [e.index, e.felledAt])
    }
    restore(e) {
      for (let [t, n] of e) {
        let e = this.palms.find((e) => e.index === t)
        if (!e) continue
        let r = n > 1e11 ? Math.max(0, Date.now() - n) : this.now() - n
        if (!(r >= 24e4)) {
          if (((e.felledAt = this.now() - r), (e.hits = 3), (e.pivot.visible = !1), r < 15e4))
            ((e.state = `stump`), e.cut && (e.cut.visible = !0))
          else {
            ;((e.state = `sapling`), (e.t = 1))
            for (let t of e.stump) t.visible = !1
            e.sapling && ((e.sapling.visible = !0), e.sapling.scale.setScalar(e.scale))
          }
        }
      }
    }
    regrowAll() {
      for (let e of this.palms)
        (e.state === `stump` || e.state === `sapling`) && (e.felledAt = this.now() - Gr - Kr)
    }
    setGround() {
      for (let e of this.palms) e.groundGoal = this.island.height(e.x, e.z)
    }
    get ready() {
      return !this.axe?.busy && !this.queued
    }
    update(e) {
      if ((this.axe?.update(e), this.queued && !this.axe?.busy)) {
        let e = this.queued
        ;((this.queued = null), this.chop(e))
      }
      let t = this.now(),
        n = new N(),
        r = new N()
      for (let i of this.palms) {
        let a = (i.groundGoal - i.base.y) * (1 - Math.exp(-e * 7))
        Math.abs(a) > 1e-5 &&
          ((i.base.y += a),
          (i.cutPoint.y += a),
          (i.root.position.y += a),
          (i.pivot.position.y += a),
          i.sapling && (i.sapling.position.y += a),
          (i.obstacle.y0 += a),
          (i.obstacle.y1 += a))
        let o = +(i.index === this.hovered && i.state === `standing`),
          s = i.glow + (o - i.glow) * (1 - Math.exp(-e * 14))
        if (Math.abs(s - i.glow) > 1e-4 || (s === 0) != (i.glow === 0)) {
          i.glow = s < 0.005 ? 0 : s
          for (let e of i.mats) {
            let n = gn(e)
            n && (n.uLhGlow.value = i.glow * (0.85 + 0.15 * Math.sin(t * 0.008)))
          }
        }
        ;((i.t += e), (i.shake.t += e))
        let c = i.shake.amp * Math.exp(-5 * i.shake.t) * Math.sin(i.shake.t * 26)
        switch ((r.setFromAxisAngle(i.shake.axis, c), i.state)) {
          case `standing`:
            i.pivot.quaternion.copy(r)
            break
          case `falling`: {
            let t = i.fall
            ;((t.vel += (2.2 + 6 * Math.sin(t.angle)) * e),
              (t.angle += t.vel * e),
              t.angle >= t.max &&
                ((t.angle = t.max),
                t.bounces === 0 && this.crash(i),
                (t.vel = -Math.abs(t.vel) * 0.24),
                t.bounces++,
                (t.bounces >= 3 || Math.abs(t.vel) < 0.12) && ((i.state = `fallen`), (i.t = 0))),
              i.pivot.quaternion.copy(n.setFromAxisAngle(t.axis, t.angle)).multiply(r))
            break
          }
          case `fallen`:
            i.t > 0.45 && this.burst(i)
            break
          case `stump`:
            t >= i.felledAt + 15e4 && this.sprout(i)
            break
          case `sapling`:
            for (let e of i.stump) e.visible = !1
            ;(i.sapling &&
              ((i.sapling.visible = !0),
              i.sapling.scale.setScalar(i.scale * Math.max(ei(Math.min(i.t / 0.8, 1)), 0.001)),
              (i.sapling.rotation.z = Math.sin(t * 0.002 + i.index) * 0.05)),
              t >= i.felledAt + 15e4 + 9e4 &&
                (i.sapling && (i.sapling.visible = !1), this.regrow(i)))
            break
          case `growing`: {
            let e = Math.min(i.t / 2.4, 1),
              t = 0.2 + 0.8 * ei(e)
            ;(i.root.scale.setScalar(i.scale * t),
              i.pivot.scale.setScalar(t),
              i.pivot.position.copy(i.base).lerp(i.cutPoint, t),
              i.pivot.quaternion.copy(r),
              e >= 1 &&
                (i.root.scale.setScalar(i.scale),
                i.pivot.scale.setScalar(1),
                i.pivot.position.copy(i.cutPoint),
                (i.state = `standing`),
                this.onChange?.()))
            break
          }
        }
      }
      this.updateLogs(e)
    }
    crash(e) {
      e.pivot.updateMatrixWorld(!0)
      let t = e.crownLocal.clone().applyMatrix4(e.pivot.matrixWorld)
      for (let n = 1; n <= 5; n++) {
        let r = e.cutPoint.clone().lerp(t, n / 5)
        ;((r.y = Math.max(this.island.height(r.x, r.z), 0)),
          this.fx.dust(r, 0.35, 7, new p(`#F2E6CC`)))
      }
      ;(this.fx.clods(t, 16, Xr, Math.max(this.island.height(t.x, t.z), 0), 1.3, 0.8),
        this.sound.fall(),
        this.onFell?.(t))
    }
    burst(e) {
      e.pivot.updateMatrixWorld(!0)
      let t = e.crownLocal.clone().applyMatrix4(e.pivot.matrixWorld),
        rLogs = 5 + getUpgradeLevel(`axe_upgrade`) * 2
      for (let n = 0; n < rLogs; n++) {
        let r = e.cutPoint.clone().lerp(t, 0.15 + (0.65 * n) / Math.max(1, rLogs - 1))
        ;((r.y = Math.max(this.island.height(r.x, r.z), 0) + 0.25),
          this.fx.dust(r, 0.3, 6),
          this.spawnLog(r, n))
      }
      ;(this.fx.sparkles(t, 5),
        this.fx.clods(t, 8, Xr, Math.max(this.island.height(t.x, t.z), 0), 1, 0.6),
        (e.pivot.visible = !1),
        e.pivot.quaternion.identity(),
        e.cut && (e.cut.visible = !0),
        (e.state = `stump`),
        (e.felledAt = this.now()),
        (e.t = 0),
        this.sound.remove(),
        this.onChange?.())
    }
    spawnLog(e, t) {
      if (!this.logModel) {
        this.onLog?.(e, t)
        return
      }
      let n = this.logModel.clone(!0)
      ;(n.position.copy(e),
        n.rotation.set(0, Math.random() * Math.PI * 2, 0),
        n.scale.setScalar(1.25),
        this.group.add(n))
      let r = Math.random() * Math.PI * 2
      this.logs.push({
        mesh: n,
        v: new M(Math.cos(r) * 0.8, 3.4 + Math.random() * 1.2, Math.sin(r) * 0.8),
        spin: new M(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 8
        ),
        age: 0,
        pickAt: 1 + t * 0.14,
      })
    }
    updateLogs(e) {
      for (let t = this.logs.length - 1; t >= 0; t--) {
        let n = this.logs[t]
        n.age += e
        let r = n.mesh
        ;((n.v.y -= 13 * e), r.position.addScaledVector(n.v, e))
        let i = Math.max(this.island.height(r.position.x, r.position.z), 0) + 0.13
        ;(r.position.y < i &&
          ((r.position.y = i),
          n.v.y < -1
            ? ((n.v.y = -n.v.y * 0.35), (n.v.x *= 0.6), (n.v.z *= 0.6), n.spin.multiplyScalar(0.5))
            : (n.v.set(n.v.x * 0.8, 0, n.v.z * 0.8),
              n.spin.multiplyScalar(0.8),
              (r.rotation.x += (0 - r.rotation.x) * 0.2),
              (r.rotation.z += (0 - r.rotation.z) * 0.2))),
          (r.rotation.x += n.spin.x * e),
          (r.rotation.y += n.spin.y * e),
          (r.rotation.z += n.spin.z * e),
          n.age >= n.pickAt
            ? (this.fx.sparkles(r.position, 2),
              this.group.remove(r),
              this.onLog?.(r.position.clone(), this.logs.length - 1 - t),
              this.logs.splice(t, 1))
            : n.age > n.pickAt - 0.18 &&
              r.scale.setScalar(
                1.25 * (1 + 0.35 * Math.sin(((n.age - (n.pickAt - 0.18)) / 0.18) * Math.PI))
              ))
      }
    }
  }
function Qr(e, t, n) {
  let r = e.direction,
    i = n.clone().sub(t),
    a = e.origin.clone().sub(t),
    o = r.dot(i),
    s = i.dot(i),
    c = r.dot(a),
    l = i.dot(a),
    u = s - o * o,
    d = u > 1e-9 ? (o * l - s * c) / u : 0,
    f = u > 1e-9 ? (l - o * c) / u : 0
  ;((f = Math.min(1, Math.max(0, f))), (d = Math.max(0, f * o - c)))
  let p = e.origin.clone().addScaledVector(r, d),
    m = t.clone().addScaledVector(i, f)
  return { t: d, dist: p.distanceTo(m) }
}
function $r(e, t, n) {
  let r = e.origin.clone().sub(t),
    i = r.dot(e.direction),
    a = r.dot(r) - n * n,
    o = i * i - a
  if (o < 0) return 1 / 0
  let s = -i - Math.sqrt(o)
  return s > 0 ? s : 1 / 0
}
function ei(e) {
  return e <= 0 ? 0 : e >= 1 ? 1 : 1 - 2 ** (-9 * e) * Math.cos(e * Math.PI * 2.6)
}
var ti = [new p(`#B8B2A6`), new p(`#A69F92`), new p(`#D2CCC0`)],
  ni = new p(`#88AD5B`),
  ri = class {
    props
    rig
    fx
    sound
    group = new D()
    onStone
    workDay = () => 1
    swing = null
    queued = null
    taken = new Map()
    run = 0
    hovered = -1
    constructor(e, t, n, r) {
      ;((this.props = e),
        (this.rig = t),
        (this.fx = n),
        (this.sound = r),
        (this.group.name = `quarry`))
    }
    load(e) {
      e && ((this.swing = new Hr(e)), this.group.add(this.swing.holder))
    }
    left(e) {
      let t = this.taken.get(e),
        n = 3 + getUpgradeLevel(`pickaxe_upgrade`) * 3
      return t && t.day === this.workDay() ? Math.max(0, n - t.n) : n
    }
    pick(e, t) {
      let n = this.rig.rayFrom(e, t),
        r = null,
        i = new M(),
        a = new M()
      return (
        this.props.rockBodies().forEach((e, t) => {
          i.set(e.x, e.y + e.height * 0.42, e.z)
          let o = new b(i, Math.max(e.radius, e.height * 0.55))
          if (!n.intersectSphere(o, a)) return
          let s = a.distanceTo(n.origin)
          ;(r && s >= r.t) ||
            (r = {
              index: t,
              t: s,
              anchor: new M(e.x, e.y + e.height + 0.35, e.z),
              left: this.left(t),
            })
        }),
        r
      )
    }
    setHover(e) {
      let t = e ? this.pick(e.ndcX, e.ndcY) : null,
        n = t ? t.index : -1
      ;(n !== this.hovered && n >= 0 && this.sound.tick(), (this.hovered = n))
    }
    get ready() {
      return !this.swing?.busy && !this.queued
    }
    mine(e) {
      let t = this.pick(e.ndcX, e.ndcY)
      if (!t) return null
      if (this.swing?.busy) return ((this.queued = e), t)
      let n = this.props.rockBodies()[t.index],
        r = this.rig.camera.position,
        i = new M(r.x - n.x, 0, r.z - n.z).normalize(),
        a = new M(n.x, n.y + n.height * 0.45, n.z),
        o = () => this.strike(t.index, a, i, n.radius)
      return (this.swing ? this.swing.swing(a, i, Math.max(n.radius * 0.8, 0.35), o, !0) : o(), t)
    }
    strike(e, t, n, r) {
      let i = t
          .clone()
          .addScaledVector(n, r * 0.7)
          .setY(t.y + r * 0.35),
        a = this.props.rockBodies()[e]
      if (this.left(e) <= 0) {
        ;(this.sound.spent(), this.fx.dust(i, 0.25, 6, new p(`#E9E2D4`)), (this.run = 0))
        return
      }
      let o = this.taken.get(e),
        s = this.workDay()
      ;(this.taken.set(e, { day: s, n: o && o.day === s ? o.n + 1 : 1 }),
        this.sound.mine(this.run),
        this.fx.clods(i, 7, ti, a.y, 0.55, 1.1),
        a.mossy && this.fx.clods(i.clone().setY(i.y + 0.1), 2, [ni], a.y, 0.4, 0.8),
        this.fx.sparkles(i, 3, new p(`#FFF6D8`)),
        this.onStone?.(i, this.run++))
    }
    warmup(e) {
      this.swing &&
        ((this.swing.holder.visible = e), this.swing.holder.position.set(0, e ? -6 : 0, 0))
    }
    update(e) {
      if ((this.swing?.update(e), this.queued && !this.swing?.busy)) {
        let e = this.queued
        ;((this.queued = null), this.mine(e))
      }
    }
    toJSON() {
      let e = this.workDay()
      return [...this.taken].filter(([, t]) => t.day === e).map(([e, t]) => [e, t.day, t.n])
    }
    restore(e) {
      this.taken.clear()
      for (let [t, n, r] of e) this.taken.set(t, { day: n, n: r })
    }
  },
  ii = 7,
  ai = 0.3,
  oi = 0.45,
  si = 3.4,
  ci = 6,
  li = 3.6,
  Q = new j(0.2, 0.6),
  ui = [0, 0.55, 0.78, 1, 1.35],
  di = class {
    island
    terrain
    rig
    fx
    sound
    group = new D()
    onCatch
    onEscape
    onNibble
    onBite
    night = () => !1
    shadows = []
    shadowMesh
    shadowFade
    line = null
    rod
    rodTip = new f()
    bobber
    lineMesh
    linePos
    ring
    aimCache = null
    leap = []
    fishModels = new Map()
    time = 0
    water = 0
    seeded = !1
    swell = { h: 0, dx: 0, dz: 0 }
    constructor(e, t, n, r, a) {
      ;((this.island = e),
        (this.terrain = t),
        (this.rig = n),
        (this.fx = r),
        (this.sound = a),
        (this.group.name = `fishing`))
      let o = new Re(1, 1).rotateX(-Math.PI / 2)
      ;((this.shadowFade = new P(new Float32Array(16), 2)),
        o.setAttribute(`aShadow`, this.shadowFade))
      let s = new L({
        uniforms: Pe.merge([
          He.fog,
          { uTime: { value: 0 }, uColor: { value: new p(`#072836`) }, uStrength: { value: 0.52 } },
        ]),
        transparent: !0,
        depthWrite: !1,
        fog: !0,
        vertexShader: `
        #include <common>
        #include <fog_pars_vertex>
        attribute vec2 aShadow;
        varying vec2 vUv;
        varying vec2 vShadow;
        void main() {
          vUv = uv;
          vShadow = aShadow;
          vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,
        fragmentShader: `
        #include <common>
        #include <fog_pars_fragment>
        uniform float uTime;
        uniform vec3 uColor;
        uniform float uStrength;
        varying vec2 vUv;
        varying vec2 vShadow;
        void main() {
          // Along the fish: x from the tail (−0.5) to the nose (+0.5); across: y. The tail swishes.
          vec2 p = vec2(vUv.y - 0.5, vUv.x - 0.5);
          float sway = sin(uTime * 6.5 + vShadow.y) * 0.08 * smoothstep(0.2, -0.5, p.x);
          p.y -= sway;
          // A plump oval body, and a fanned tail behind it.
          float body = length(vec2((p.x - 0.1) / 0.33, p.y / 0.31)) - 1.0;
          vec2 t = p - vec2(-0.25, 0.0);
          float fan = max(abs(t.y) - (0.03 - t.x * 1.15), max(t.x, -t.x - 0.21));
          float d = min(body * 0.3, fan);
          float a = smoothstep(0.045, -0.05, d) * uStrength * vShadow.x;
          if (a < 0.004) discard;
          gl_FragColor = vec4(uColor, a);
          #include <fog_fragment>
        }`,
      })
      ;((this.shadowMesh = new O(o, s, 8)),
        (this.shadowMesh.frustumCulled = !1),
        (this.shadowMesh.renderOrder = 3),
        (this.shadowMesh.count = 0),
        this.group.add(this.shadowMesh))
      let c = new F({ color: `#FFFFFF`, transparent: !0, opacity: 0.8, depthWrite: !1, fog: !0 })
      ;((this.ring = new i(new ze(0.28, 0.36, 40).rotateX(-Math.PI / 2), c)),
        (this.ring.renderOrder = 4),
        (this.ring.visible = !1),
        this.group.add(this.ring),
        (this.linePos = new Float32Array(102)))
      let l = new v()
      l.setAttribute(`position`, new C(this.linePos, 3))
      let u = []
      for (let e = 0; e < 16; e++)
        u.push(e * 2, e * 2 + 1, e * 2 + 2, e * 2 + 1, e * 2 + 3, e * 2 + 2)
      ;(l.setIndex(u),
        (this.lineMesh = new i(l, new F({ color: `#FBF7EE`, side: 2, fog: !0 }))),
        (this.lineMesh.frustumCulled = !1),
        (this.lineMesh.visible = !1),
        this.group.add(this.lineMesh),
        (this.rod = new D()),
        (this.bobber = new D()),
        (this.rod.visible = !1),
        (this.bobber.visible = !1),
        this.group.add(this.rod, this.bobber),
        this.plainRod())
    }
    load(e, t, n) {
      let r = e?.getObjectByName(`Rod`),
        i = e?.getObjectByName(`Bobber`)
      if (r && i) {
        ;(this.rod.clear(),
          this.bobber.clear(),
          n(r),
          n(i),
          r.position.set(0, 0, 0),
          r.rotation.set(0, 0, 0),
          i.position.set(0, 0, 0),
          i.rotation.set(0, 0, 0),
          r.scale.multiplyScalar(1.35),
          i.scale.multiplyScalar(1.35),
          this.rod.add(r),
          this.bobber.add(i))
        let e = r.getObjectByName(`RodTip`)
        ;(r.updateMatrixWorld(!0),
          this.rodTip.position.copy(e ? e.getWorldPosition(new M()) : new M(0, 1.7, 0)),
          this.rod.add(this.rodTip))
      }
      if (t)
        for (let e of Mr) {
          let r = t.getObjectByName(`Fish_${e.id}`)
          r && (n(r), r.position.set(0, 0, 0), this.fishModels.set(e.id, r))
        }
    }
    plainRod() {
      let e = new i(
          new de(0.018, 0.035, 1.7, 8).translate(0, 0.85, 0),
          new R({ color: `#E6C27A`, roughness: 0.7 })
        ),
        t = new i(
          new de(0.045, 0.045, 0.34, 10).translate(0, 0.2, 0),
          new R({ color: `#C9A06B`, roughness: 0.9 })
        )
      ;((e.castShadow = t.castShadow = !0),
        this.rod.add(e, t),
        this.rodTip.position.set(0, 1.7, 0),
        this.rod.add(this.rodTip))
      let n = new i(
          new Fe(0.07, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2),
          new R({ color: `#E0544B`, roughness: 0.5 })
        ),
        r = new i(
          new Fe(0.07, 14, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2),
          new R({ color: `#F6F0E2`, roughness: 0.5 })
        )
      this.bobber.add(n, r)
    }
    get phase() {
      return this.line?.phase ?? `idle`
    }
    get busy() {
      return this.line !== null
    }
    get bobberAt() {
      return this.line && this.line.phase !== `flying` ? this.line.bobber : null
    }
    aim(e, t) {
      let n = this.rig.rayFrom(e, t)
      if (n.direction.y > -0.02) return null
      let r = (this.water - n.origin.y) / n.direction.y,
        i = n.origin.x + n.direction.x * r,
        a = n.origin.z + n.direction.z * r,
        o = this.aimCache
      if (o && Math.hypot(o.x - i, o.z - a) < 0.25)
        return o.aim ? { at: new M(i, this.water, a), shore: o.aim.shore } : null
      let s = null
      if (this.water - this.island.height(i, a) >= ai && !this.terrain.isPond(i, a)) {
        let e = this.shoreNear(i, a)
        e && (s = { at: new M(i, this.water, a), shore: e })
      }
      return ((this.aimCache = { x: i, z: a, aim: s }), s)
    }
    shoreNear(e, t) {
      for (let n = 0.6; n <= ii; n += 0.35) {
        let r = null,
          i = 0.06
        for (let a = 0; a < 28; a++) {
          let o = (a / 28) * Math.PI * 2,
            s = e + Math.cos(o) * n,
            c = t + Math.sin(o) * n,
            l = this.island.height(s, c)
          l > i && l < 1.6 && ((i = l), (r = new M(s, l, c)))
        }
        if (r) {
          let n = new j(r.x - e, r.z - t).normalize(),
            i = r.x + n.x * 0.35,
            a = r.z + n.y * 0.35
          return new M(i, Math.max(this.island.height(i, a), r.y), a)
        }
      }
      return null
    }
    setAim(e) {
      let t = e && !this.line ? this.aim(e.ndcX, e.ndcY) : null
      ;((this.ring.visible = !!t), t && this.ring.position.set(t.at.x, this.water + 0.02, t.at.z))
    }
    cast(e) {
      if (this.line) return !1
      let t = this.aim(e.ndcX, e.ndcY)
      if (!t) return !1
      let n = new j(t.at.x - t.shore.x, t.at.z - t.shore.z)
      return (
        (this.line = {
          shore: t.shore.clone(),
          target: t.at.clone(),
          bobber: new M(),
          phase: `flying`,
          t: 0,
          fish: null,
          nibbles: 0,
          next: 0,
          dip: 0,
          lonely: 0,
          yaw: Math.atan2(n.x, n.y),
        }),
        (this.ring.visible = !1),
        (this.rod.visible = !0),
        this.placeRod(0),
        (this.bobber.visible = !0),
        (this.lineMesh.visible = !0),
        this.sound.cast(),
        !0
      )
    }
    reel() {
      let e = this.line
      if (!e || e.phase === `reeling` || e.phase === `flying`) return null
      if ((this.sound.reel(), e.phase === `bite` && e.fish)) {
        let t = e.fish.kind
        return (
          (e.fish.mode = `caught`),
          (e.fish.leaving = !0),
          (e.fish.fade = 0),
          this.fx.splash(e.bobber.clone(), new p(`#E6FBF4`)),
          this.sound.caught(),
          this.leapOut(t, e.bobber, e.shore),
          this.onCatch?.(t, e.bobber.clone().setY(e.bobber.y + 0.6)),
          this.startReeling(),
          `caught`
        )
      }
      return e.fish && e.fish.mode === `nibble`
        ? (this.scare(e.fish),
          this.sound.escape(),
          this.onEscape?.(`early`),
          this.startReeling(),
          `early`)
        : (e.fish && this.scare(e.fish), this.startReeling(), `empty`)
    }
    stop() {
      let e = this.line
      e && (e.fish && e.fish.mode !== `caught` && this.scare(e.fish), this.startReeling())
    }
    startReeling() {
      let e = this.line
      ;((e.phase = `reeling`), (e.t = 0), (e.fish = null))
    }
    scare(e) {
      ;((e.mode = `flee`),
        (e.leaving = !0),
        (e.speed = 1.8),
        this.line && (e.heading = Math.atan2(e.z - this.line.bobber.z, e.x - this.line.bobber.x)))
    }
    spawn(e) {
      for (let t = 0; t < 30; t++) {
        let t, n
        if (e) {
          let r = Math.random() * Math.PI * 2,
            i = 3.2 + Math.random() * 1.8
          ;((t = e.x + Math.cos(r) * i), (n = e.z + Math.sin(r) * i))
        } else {
          let e = Math.random() * Math.PI * 2,
            r = Math.cos(e),
            i = Math.sin(e),
            a = 4
          for (; a < 30 && this.water - this.island.height(Q.x + r * a, Q.y + i * a) < 0.6; )
            a += 0.5
          ;((a += 0.3 + Math.random() * 3.2), (t = Q.x + r * a), (n = Q.y + i * a))
        }
        let r = this.water - this.island.height(t, n)
        if (r < oi || r > si || this.terrain.isPond(t, n)) continue
        let i = Rr(this.night()),
          a = {
            kind: i,
            x: t,
            z: n,
            heading: Math.random() * Math.PI * 2,
            speed: 0.35 - i.size * 0.04,
            turn: 0,
            retarget: 0,
            life: 40 + Math.random() * 50,
            fade: 0,
            wobble: Math.random() * 10,
            mode: `wander`,
            leaving: !1,
          }
        return (this.shadows.push(a), a)
      }
      return null
    }
    updateShadows(e) {
      if (!this.seeded) {
        this.seeded = !0
        for (let e = 0; e < ci; e++) this.spawn()
      }
      this.shadows.filter((e) => !e.leaving).length < ci && Math.random() < e * 0.6 && this.spawn()
      let t = this.line
      for (let n = this.shadows.length - 1; n >= 0; n--) {
        let r = this.shadows[n]
        ;((r.wobble += e * (r.mode === `nibble` || r.mode === `bite` ? 2.2 : 1)),
          (r.life -= e),
          r.life <= 0 && r.mode === `wander` && (r.leaving = !0))
        let i = t && r === t.fish ? t.bobber : null
        if (i && (r.mode === `approach` || r.mode === `nibble` || r.mode === `bite`)) {
          let t = i.x - r.x,
            n = i.z - r.z,
            a = Math.hypot(t, n),
            o = Math.atan2(n, t)
          r.heading = fi(r.heading, o, e * 2.4)
          let s = ui[r.kind.size] * 0.5,
            c = r.mode === `approach` ? Ue((a - s) * 0.9, 0, 0.55) : (a - s) * 2
          ;((r.x += Math.cos(r.heading) * c * e), (r.z += Math.sin(r.heading) * c * e))
        } else {
          ;((r.retarget -= e),
            r.retarget <= 0 &&
              ((r.retarget = 1.5 + Math.random() * 3), (r.turn = (Math.random() - 0.5) * 0.9)))
          let t = r.x + Math.cos(r.heading) * 1.2,
            n = r.z + Math.sin(r.heading) * 1.2,
            i = this.water - this.island.height(t, n)
          !r.leaving && (i < oi || this.terrain.isPond(t, n))
            ? (r.heading = fi(r.heading, Math.atan2(r.z - Q.y, r.x - Q.x), e * 2.5))
            : !r.leaving && i > si
              ? (r.heading = fi(r.heading, Math.atan2(Q.y - r.z, Q.x - r.x), e * 1.5))
              : (r.heading += r.turn * e)
          let a = r.mode === `flee` ? r.speed : r.speed * (0.7 + 0.3 * Math.sin(r.wobble * 0.7))
          ;((r.x += Math.cos(r.heading) * a * e), (r.z += Math.sin(r.heading) * a * e))
        }
        let a = this.water - this.island.height(r.x, r.z),
          o = V(0.25, 0.8, a)
        ;((r.fade = r.leaving
          ? Math.max(0, r.fade - e * (r.mode === `flee` ? 1.4 : 0.5))
          : Math.min(o, r.fade + e * 0.4)),
          r.leaving && r.fade <= 0 && this.shadows.splice(n, 1))
      }
      let n = new g(),
        r = new N(),
        i = new M(0, 1, 0),
        a = Math.min(this.shadows.length, 8)
      for (let e = 0; e < a; e++) {
        let t = this.shadows[e],
          a = ui[t.kind.size]
        ;(r.setFromAxisAngle(i, -Math.PI / 2 - t.heading),
          n.compose(new M(t.x, this.water - 0.04, t.z), r, new M(a * 0.7, 1, a)),
          this.shadowMesh.setMatrixAt(e, n),
          this.shadowFade.setXY(e, t.fade, t.wobble * 1.7))
      }
      ;((this.shadowMesh.count = a),
        (this.shadowMesh.instanceMatrix.needsUpdate = !0),
        (this.shadowFade.needsUpdate = !0))
    }
    updateLine(e) {
      let t = this.line
      if (!t) return
      ;((t.t += e), (t.dip = Math.max(0, t.dip - e * 3.2)))
      let n = (e, t) => (
        Qe(e, t, this.time, this.swell),
        this.water + this.swell.h * et(this.water - this.island.height(e, t))
      )
      if (t.phase === `flying`) {
        let e = Math.min(t.t / 0.55, 1),
          r = this.tipWorld()
        ;(t.bobber.lerpVectors(r, t.target, e),
          (t.bobber.y = fe.lerp(r.y, n(t.target.x, t.target.z), e) + Math.sin(e * Math.PI) * 1.4),
          e >= 1 &&
            ((t.phase = `waiting`),
            (t.t = 0),
            this.sound.plop(!1),
            this.fx.splash(t.target.clone().setY(this.water), new p(`#E6FBF4`))))
      } else if (t.phase === `waiting` || t.phase === `bite`)
        (t.bobber.set(
          t.target.x,
          n(t.target.x, t.target.z) - t.dip * (t.phase === `bite` ? 0.2 : 0.06),
          t.target.z
        ),
          this.updateBite(t, e))
      else if (t.phase === `reeling`) {
        let e = Math.min(t.t / 0.45, 1),
          n = this.tipWorld()
        if (
          (t.bobber.lerpVectors(t.target, n, e * e),
          (t.bobber.y += Math.sin(e * Math.PI) * 0.4),
          e >= 1)
        ) {
          ;((this.line = null),
            (this.rod.visible = !1),
            (this.bobber.visible = !1),
            (this.lineMesh.visible = !1))
          return
        }
      }
      ;(this.bobber.position.copy(t.bobber),
        this.bobber.rotation.set(
          Math.sin(this.time * 2.1) * 0.12,
          0,
          Math.cos(this.time * 1.7) * 0.12
        ),
        this.placeRod(t.phase === `bite` ? 0.25 + 0.1 * Math.sin(this.time * 30) : t.dip * 0.25),
        this.drawLine())
    }
    updateBite(e, t) {
      let n = e.fish
      if (!n) {
        e.lonely += t
        let n = null,
          r = li
        for (let t of this.shadows) {
          if (t.leaving || t.mode !== `wander`) continue
          let i = Math.hypot(t.x - e.bobber.x, t.z - e.bobber.z)
          i < r && ((r = i), (n = t))
        }
        ;(!n && e.lonely > 9 && Math.random() < t * 0.25 && (n = this.spawn(e.bobber)),
          n &&
            e.t > 0.8 &&
            ((n.mode = `approach`),
            (n.life = Math.max(n.life, 30)),
            (e.fish = n),
            (e.nibbles = 1 + Math.floor(Math.random() * 3)),
            (e.next = 0)))
        return
      }
      let r = Math.hypot(n.x - e.bobber.x, n.z - e.bobber.z)
      n.mode === `approach` && r < ui[n.kind.size] * 0.5 + 0.08
        ? ((n.mode = `nibble`), (e.next = 0.6 + Math.random() * 0.8))
        : n.mode === `nibble`
          ? ((e.next -= t),
            e.next <= 0 &&
              (e.nibbles > 0
                ? (e.nibbles--,
                  (e.dip = 0.8),
                  (e.next = 0.9 + Math.random() * 1.1),
                  this.sound.nibble(),
                  this.ripple(e.bobber, 0.5),
                  this.onNibble?.())
                : ((n.mode = `bite`),
                  (e.phase = `bite`),
                  (e.t = 0),
                  (e.dip = 1),
                  this.sound.plop(!0),
                  this.fx.splash(e.bobber.clone(), new p(`#E6FBF4`)),
                  this.onBite?.())))
          : n.mode === `bite` &&
            ((e.dip = Math.max(e.dip, 0.7)),
            e.t > n.kind.window &&
              (this.scare(n), this.sound.escape(), this.onEscape?.(`late`), this.startReeling()))
    }
    ripple(e, t) {
      this.fx.dust(e.clone().setY(this.water + 0.02), t, 6, new p(`#F2FFFB`))
    }
    tipWorld() {
      return (this.rod.updateMatrixWorld(!0), this.rodTip.getWorldPosition(new M()))
    }
    placeRod(e) {
      let t = this.line
      t &&
        (this.rod.position.copy(t.shore),
        this.rod.rotation.set(0, 0, 0),
        this.rod.rotateY(t.yaw),
        this.rod.rotateX(0.95 + e))
    }
    drawLine() {
      let e = this.line,
        t = this.tipWorld(),
        n = e.bobber.clone().setY(e.bobber.y + 0.06),
        r = this.rig.camera.position,
        i = new M(),
        a = new M(),
        o = t.distanceTo(n),
        s = e.phase === `bite` ? 0.02 : Math.min(0.35, o * 0.05)
      for (let e = 0; e <= 16; e++) {
        let o = e / 16
        ;(i.lerpVectors(t, n, o), (i.y -= s * 4 * o * (1 - o)))
        let c = n.clone().sub(t).normalize()
        ;(a
          .subVectors(r, i)
          .cross(c)
          .normalize()
          .multiplyScalar(0.007 + 0.004 * o),
          this.linePos.set(
            [i.x + a.x, i.y + a.y, i.z + a.z, i.x - a.x, i.y - a.y, i.z - a.z],
            e * 6
          ))
      }
      this.lineMesh.geometry.getAttribute(`position`).needsUpdate = !0
    }
    leapOut(e, t, n) {
      let r = this.fishModels.get(e.id)
      if (!r) return
      let i = r.clone(!0)
      ;(i.scale.setScalar(1.3),
        this.group.add(i),
        this.leap.push({
          mesh: i,
          from: t.clone(),
          to: n
            .clone()
            .lerp(t, 0.35)
            .setY(n.y + 1.2),
          t: 0,
        }))
    }
    updateLeaps(e) {
      for (let t = this.leap.length - 1; t >= 0; t--) {
        let n = this.leap[t]
        n.t += e
        let r = Math.min(n.t / 0.9, 1)
        ;(n.mesh.position.lerpVectors(n.from, n.to, V(0, 1, r)),
          (n.mesh.position.y += Math.sin(r * Math.PI) * 1.2),
          n.mesh.rotation.set(
            Math.sin(n.t * 18) * 0.5 * (1 - r),
            n.t * 3,
            Math.sin(n.t * 11) * 0.3
          ))
        let i = r < 0.75 ? 1.3 : 1.3 * (1 - (r - 0.75) / 0.25)
        ;(n.mesh.scale.setScalar(Math.max(i, 0.001)),
          r >= 1 && (this.group.remove(n.mesh), this.leap.splice(t, 1)))
      }
    }
    warmup(e) {
      if (
        ((this.shadowMesh.count = e ? 1 : Math.min(this.shadows.length, 8)),
        (this.ring.visible = e),
        (this.lineMesh.visible = e),
        (this.rod.visible = e),
        (this.bobber.visible = e),
        e)
      ) {
        ;(this.shadowMesh.setMatrixAt(0, new g().makeTranslation(0, -6, 0)),
          this.shadowFade.setXY(0, 1, 0),
          this.ring.position.set(0, -6, 0),
          this.rod.position.set(0, -6, 0),
          this.bobber.position.set(0, -6, 0))
        let e = 0
        for (let t of this.fishModels.values()) {
          let n = t.clone(!0)
          ;(n.position.set((e += 0.8), -6, 0), (n.name = `warm-fish`), this.group.add(n))
        }
      } else
        for (let e of this.group.children.filter((e) => e.name === `warm-fish`))
          this.group.remove(e)
    }
    update(e, t, n) {
      if (
        ((this.time = t),
        (this.water = n),
        (this.shadowMesh.material.uniforms.uTime.value = t),
        this.updateShadows(e),
        this.updateLine(e),
        this.updateLeaps(e),
        this.ring.visible)
      ) {
        let e = 1 + 0.08 * Math.sin(t * 5)
        this.ring.scale.set(e, 1, e)
      }
    }
  }
function fi(e, t, n) {
  let r = t - e
  for (; r > Math.PI; ) r -= Math.PI * 2
  for (; r < -Math.PI; ) r += Math.PI * 2
  return e + Ue(r, -n, n)
}
function pi() {
  return new L({
    transparent: !0,
    depthWrite: !1,
    uniforms: {
      uColor: { value: new p(`#FFFFFF`) },
      uAlpha: { value: 0 },
      uFill: { value: 0 },
      uTime: at.uTime,
    },
    vertexShader: `
      varying vec3 vN;
      varying vec3 vV;
      varying vec3 vP;
      varying vec3 vTint;
      void main() {
        vec4 lp = vec4(position, 1.0);
        vec3 ln = normal;
        vTint = vec3(1.0);
        #ifdef USE_INSTANCING
          lp = instanceMatrix * lp;
          ln = mat3(instanceMatrix) * ln;
        #endif
        #ifdef USE_INSTANCING_COLOR
          vTint = instanceColor;
        #endif
        vec4 wp = modelMatrix * lp;
        vN = normalize(mat3(modelMatrix) * ln);
        vV = normalize(cameraPosition - wp.xyz);
        vP = position;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uAlpha;
      uniform float uFill;
      uniform float uTime;
      varying vec3 vN;
      varying vec3 vV;
      varying vec3 vP;
      varying vec3 vTint;
      void main() {
        float fres = pow(clamp(1.0 - abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0), 2.0);
        float pulse = 0.85 + 0.15 * sin(uTime * 5.0);
        // Soft horizontal "scan" stripes read as a hologram of the plank block.
        float stripes = 0.5 + 0.5 * smoothstep(0.35, 0.5, abs(fract((vP.y + 0.5) * 4.0) - 0.5));
        float a = (0.16 + uFill + 0.55 * fres) * pulse * mix(1.0, stripes, 0.35);
        gl_FragColor = vec4(uColor * vTint, a * uAlpha);
        #include <colorspace_fragment>
      }`,
  })
}
var mi = 0.2,
  hi = 0.45,
  gi = 0.28,
  _i = 0.48,
  vi = class {
    kind
    island
    grid
    rig
    fx
    sound
    group = new D()
    model = null
    ghost = null
    ghostMat = pi()
    ghostVis = 0
    ghostPos = new M()
    list = []
    spot = null
    onChange
    constructor(e, t, n, r, i, a) {
      ;((this.kind = e),
        (this.island = t),
        (this.grid = n),
        (this.rig = r),
        (this.fx = i),
        (this.sound = a),
        (this.group.name = e.node))
    }
    load(e) {
      if (this.model) return
      let r = e ?? this.buildModel?.()
      if (!r) return
      let t = r.getObjectByName(this.kind.node) ?? r
      ;(t.position.set(0, 0, 0),
        Y(t),
        t.traverse((e) => {
          let t = e
          if (t.isMesh) {
            for (let e of Array.isArray(t.material) ? t.material : [t.material]) X(e)
            ;((t.castShadow = !0), (t.receiveShadow = !0))
          }
        }),
        (this.model = t))
      let n = t.clone(!0)
      ;(n.traverse((e) => {
        let t = e
        t.isMesh &&
          ((t.material = this.ghostMat),
          (t.castShadow = !1),
          (t.receiveShadow = !1),
          (t.renderOrder = 15))
      }),
        (n.visible = !1),
        (this.ghost = n),
        this.group.add(n))
    }
    get count() {
      return this.list.length
    }
    cells() {
      return this.list.filter((e) => e.anim !== `pop`).map((e) => [e.cx, e.cz])
    }
    get hoverSpot() {
      let e = this.spot
      return e
        ? {
            valid: e.valid,
            poor: e.poor,
            anchor: new M(e.cx + 0.5, e.y + this.kind.height + 0.3, e.cz + 0.5),
          }
        : null
    }
    setHover(e) {
      this.spot = e ? this.spotAt(e) : null
    }
    topBlock(e, t) {
      if (!this.kind.allowDeck) return -1
      for (let n = 15; n >= 0; n--) if (this.grid.has(e, n, t)) return n
      return -1
    }
    surfaceY(e, t) {
      let n = this.topBlock(e, t)
      if (n >= 0) return 1.25 + n
      let r = this.island.height(e + 0.5, t + 0.5)
      return this.kind.allowShore ? Math.max(r, -0.06) : r
    }
    spotAt(e) {
      let t = this.rig.rayFrom(e.ndcX, e.ndcY),
        n = this.island.raycast(t.origin, t.direction, 500, !0)
      if (!n || (n.water && !this.kind.allowShore)) return null
      let r = Math.floor(n.x),
        i = Math.floor(n.z),
        a = this.island.groundLevel(r, i),
        top = this.topBlock(r, i),
        sdf = this.island.landSdf(r + 0.5, i + 0.5)
      if (!this.kind.allowShore && a === null && top < 0) return null
      let o = this.kind.allowShore
          ? !this.island.isReserved(r, i) &&
            top < 0 &&
            sdf > -1.3 &&
            sdf < 1.9 &&
            this.island.height(r + 0.5, i + 0.5) > -0.55
          : !this.island.isReserved(r, i) &&
            (top >= 0 || (a !== null && !this.grid.has(r, a, i) && sdf < -0.1)),
        s = o && this.kind.count() < 1
      return { cx: r, cz: i, y: this.surfaceY(r, i), valid: o && !s, poor: s }
    }
    place(e) {
      let t = this.spotAt(e)
      return t
        ? t.poor
          ? (this.sound.deny(), `poor`)
          : t.valid
            ? this.kind.use()
              ? (this.add(t.cx, t.cz, this.facingNow(), !0), this.onChange?.(), `placed`)
              : `poor`
            : (this.sound.deny(), `blocked`)
        : null
    }
    facingNow() {
      return ((Math.round(this.rig.cur.yaw / (Math.PI / 2)) % 4) + 4) % 4
    }
    add(e, t, n, r) {
      if (!this.model) return
      let i = this.model.clone(!0),
        a = this.surfaceY(e, t),
        o = { cx: e, cz: t, facing: n, mesh: i, y: a, anim: r ? `drop` : null, t: 0 }
      ;(i.position.set(e + 0.5, a + (r ? 0.9 : 0), t + 0.5),
        (i.rotation.y = (Math.PI / 2) * n),
        this.kind.decorate?.(i, o),
        this.group.add(i),
        this.island.reserve(e, t),
        this.list.push(o))
    }
    pick(e, t) {
      let n = this.rig.rayFrom(e, t),
        r = null,
        i = new xe(),
        a = new M()
      return (
        this.list.forEach((e, t) => {
          if (
            e.anim === `pop` ||
            (i.min.set(e.cx + 0.5 - _i, e.y, e.cz + 0.5 - _i),
            i.max.set(e.cx + 0.5 + _i, e.y + this.kind.height, e.cz + 0.5 + _i),
            !n.intersectBox(i, a))
          )
            return
          let o = a.distanceTo(n.origin)
          o < (r?.t ?? 1 / 0) &&
            (r = {
              index: t,
              t: o,
              anchor: new M(e.cx + 0.5, e.y + this.kind.height + 0.35, e.cz + 0.5),
            })
        }),
        r
      )
    }
    position(e) {
      let t = this.list[e]
      return t ? new M(t.cx + 0.5, t.y + 0.7, t.cz + 0.5) : null
    }
    remove(e) {
      let t = this.list[e]
      if (!t || t.anim === `pop`) return
      ;((t.anim = `pop`), (t.t = 0), this.island.unreserve(t.cx, t.cz), this.kind.give())
      let n = new M(t.cx + 0.5, t.y + 0.3, t.cz + 0.5)
      ;(this.fx.splinters(n, 10, t.y),
        this.fx.dust(n, 0.5, 10, new p(`#EBD9B8`)),
        this.sound.remove(),
        this.onChange?.())
    }
    clearAll() {
      for (let e = 0; e < this.list.length; e++) this.remove(e)
    }
    setGround() {
      for (let e of this.list) e.y = this.surfaceY(e.cx, e.cz)
    }
    toJSON() {
      return this.list.filter((e) => e.anim !== `pop`).map((e) => [e.cx, e.cz, e.facing])
    }
    restore(e) {
      for (let [t, n, r] of e)
        this.island.isReserved(t, n) ||
          (!this.kind.allowShore &&
            this.island.groundLevel(t, n) === null &&
            this.topBlock(t, n) < 0) ||
          this.add(t, n, ((r % 4) + 4) % 4, !1)
    }
    update(e) {
      for (let t = this.list.length - 1; t >= 0; t--) {
        let n = this.list[t],
          r = n.mesh
        if (((n.t += e), n.anim === `drop`)) {
          let e = Math.min(n.t / mi, 1)
          if (((r.position.y = n.y + 0.9 * (1 - e * e)), e >= 1)) {
            ;((n.anim = `settle`), (n.t = 0))
            let e = new M(n.cx + 0.5, n.y, n.cz + 0.5)
            ;(this.fx.dust(e, 0.6, 16),
              this.fx.sparkles(e.clone().setY(n.y + 0.6), 5),
              this.kind.land())
          }
        } else if (n.anim === `settle`) {
          let e = Math.min(n.t / hi, 1),
            t = -0.16 * Math.exp(-7 * e) * Math.cos(e * 13.5)
          ;(r.scale.set(1 - t * 0.5, 1 + t, 1 - t * 0.5),
            (r.position.y = n.y),
            e >= 1 && ((n.anim = null), r.scale.setScalar(1)))
        } else if (n.anim === `pop`) {
          let e = Math.min(n.t / gi, 1),
            i =
              e < 0.3
                ? 1 + 0.12 * Math.sin((e / 0.3) * Math.PI * 0.5)
                : 1.12 * (1 - ((e - 0.3) / 0.7) ** 2)
          ;(r.scale.setScalar(Math.max(i, 0.001)),
            e >= 1 && (this.group.remove(r), this.list.splice(t, 1)))
        } else
          Math.abs(r.position.y - n.y) > 1e-4 &&
            (r.position.y += (n.y - r.position.y) * (1 - Math.exp(-e * 7)))
      }
      this.updateGhost(e)
    }
    updateGhost(e) {
      let t = this.ghost
      if (!t) return
      let n = this.spot
      if (n) {
        let r = new M(n.cx + 0.5, n.y + 0.04 * Math.sin(performance.now() * 0.005), n.cz + 0.5)
        ;(this.ghostVis < 0.05 && this.ghostPos.copy(r),
          this.ghostPos.lerp(r, 1 - Math.exp(-e * 26)),
          t.position.copy(this.ghostPos))
        let i = this.facingNow() * (Math.PI / 2) - t.rotation.y
        ;((t.rotation.y += Math.atan2(Math.sin(i), Math.cos(i)) * (1 - Math.exp(-e * 14))),
          (this.ghostVis = Math.min(1, this.ghostVis + e * 8)),
          this.ghostMat.uniforms.uColor.value.set(n.valid ? `#FFFFFF` : `#FF6B5E`),
          (this.ghostMat.uniforms.uFill.value = n.valid ? 0.05 : 0.12),
          t.scale.setScalar(n.valid ? 1.02 : 0.94))
      } else this.ghostVis = Math.max(0, this.ghostVis - e * 10)
      ;((this.ghostMat.uniforms.uAlpha.value = this.ghostVis), (t.visible = this.ghostVis > 0.01))
    }
    warmup(e) {
      this.ghost && ((this.ghost.visible = e), (this.ghostMat.uniforms.uAlpha.value = e ? 0.01 : 0))
    }
  },
  yi = class extends vi {
    constructor(e, t, n, r, i, a) {
      super(
        {
          node: `Workbench`,
          height: 0.9,
          count: () => n.benchCount,
          use: () => n.useBench(),
          give: () => n.returnBench(),
          land: () => a.bench(),
        },
        e,
        t,
        r,
        i,
        a
      )
    }
  },
  bi = { x: -0.8, z: 1.4, yaw: 0.55 },
  xi = 2.3,
  Si = 1.6,
  Ci = 0.12,
  wi = class {
    island
    rig
    fx
    group = new D()
    onTake
    list = []
    glint = 0.8
    shoreGlint = 1.6
    spawnTimer = 14
    seq = 1
    logTemplate = null
    canSpawnCrates = () => !1
    canSpawnBottles = () => !1
    cell = null
    ground = 0
    obstacle = null
    constructor(e, t, n) {
      ;((this.island = e), (this.rig = t), (this.fx = n), (this.group.name = `finds`))
    }
    load(e, t, n) {
      this.logTemplate = t ?? null
      let { x: r, z: i, yaw: a } = bi,
        o = this.island.height(r, i)
      this.ground = o
      let s = Ci * xi
      if (t && !n.includes(`log`)) {
        let e = t.clone(!0)
        ;(e.scale.setScalar(xi),
          e.position.set(r, o + s * 0.92, i),
          e.rotation.set(0, a, 0),
          this.add(`log`, e, new M(r, o + s, i), 0.62),
          (this.obstacle = { x: r, z: i, r: 0.62, y0: o - 0.2, y1: o + s * 2 + 0.2 }))
      }
      if (e && !n.includes(`axe`)) {
        let t = e.clone(!0),
          n = new D()
        ;(n.add(t),
          t.rotation.set(Math.PI, 0, 0),
          t.position.set(0, 0.8, 0),
          n.position.set(r + Math.sin(a) * 0.05, o + s * 1.85, i),
          n.rotation.set(0.12, a + Math.PI / 2, -0.42),
          n.scale.setScalar(Si),
          this.add(`axe`, n, new M(r, o + s * 2 + 0.35, i), 0.55))
      }
      this.list.length &&
        ((this.cell = [Math.floor(r), Math.floor(i)]), this.island.reserve(...this.cell))
    }
    add(e, t, n, r, i = e) {
      ;(t.traverse((e) => {
        let t = e
        t.isMesh && ((t.castShadow = !0), (t.receiveShadow = !0))
      }),
        this.group.add(t),
        this.list.push({
          id: e,
          kind: i,
          root: t,
          centre: n,
          r,
          state: `here`,
          t: 0,
          base: t.position.clone(),
          scale: t.scale.x,
        }))
    }
    buildShoreMesh(e) {
      let t = new D()
      if (e === `driftwood` && this.logTemplate) {
        let e = this.logTemplate.clone(!0),
          n = this.logTemplate.clone(!0),
          r = lhMat(`Rock`, `#B5AFA4`, 0.9)
        return (
          e.scale.setScalar(1.55),
          n.scale.set(0.95, 0.85, 0.95),
          n.position.set(0.14, 0.04, 0.16),
          n.rotation.set(0.18, 0.82, -0.14),
          lhAdd(t, lhCobble(0.09, 0.055, 0.08, 3), r, -0.18, 0.03, 0.14),
          lhAdd(t, lhCobble(0.065, 0.04, 0.06, 7), r, 0.2, 0.025, -0.12),
          t.add(e, n),
          Mn(t),
          t
        )
      }
      if (e === `crate`) {
        let e = lhMat(`Bench_Wood`, `#CF9153`, 0.78),
          n = lhMat(`Bench_WoodDark`, `#875429`, 0.84),
          r = lhMat(`Boat_Rail`, `#C18245`, 0.8),
          a = lhMat(`Bench_Metal`, `#433C37`, 0.55),
          o = lhMat(`LH_Brass`, `#DDA94B`, 0.35),
          s = new D()
        ;(lhAdd(s, lhBevelBox(0.41, 0.31, 0.41, 0.014), e, 0, 0.185, 0),
          [-0.195, 0.195].forEach((e) => {
            ;[-0.195, 0.195].forEach((t) => {
              ;(lhAdd(s, lhBevelBox(0.055, 0.35, 0.055, 0.01), n, e, 0.19, t),
                lhAdd(s, lhBevelBox(0.066, 0.045, 0.066, 0.008), a, e, 0.34, t),
                lhAdd(s, lhBevelBox(0.066, 0.045, 0.066, 0.008), a, e, 0.05, t),
                lhAdd(s, lhCobble(0.016, 0.016, 0.016, 2), o, e * 1.06, 0.34, t * 1.06))
            })
            ;(lhAdd(s, lhBevelBox(0.44, 0.045, 0.048, 0.009), n, 0, 0.045, e),
              lhAdd(s, lhBevelBox(0.44, 0.045, 0.048, 0.009), n, 0, 0.33, e),
              lhAdd(s, lhBevelBox(0.048, 0.045, 0.44, 0.009), r, e, 0.045, 0),
              lhAdd(s, lhBevelBox(0.048, 0.045, 0.44, 0.009), r, e, 0.33, 0),
              lhAdd(s, lhBevelBox(0.38, 0.036, 0.028, 0.007), n, 0, 0.19, e * 1.02, 0, 0, e > 0 ? 0.62 : -0.62))
          }),
          [-0.14, 0, 0.14].forEach((t, n) => {
            lhAdd(s, lhBevelBox(0.45, 0.032, 0.125, 0.008, { archY: 0.004 }), n === 1 ? r : e, 0, 0.365, t)
          }),
          [-0.225, 0.225].forEach((e) => {
            lhAdd(s, lhBevelBox(0.026, 0.03, 0.16, 0.008, { archZ: -0.012 }), n, e, 0.24, 0)
          }),
          s.rotation.set(0.07, 0.12, -0.06),
          t.add(s),
          Mn(t))
        return t
      }
      if (e === `bottle`) {
        let e = lhMat(`LH_Window`, `#70D4C4`, 0.18, 0.05),
          n = lhMat(`Bench_Wood`, `#C98E54`, 0.85),
          r = lhMat(`LH_White`, `#FFF5DC`, 0.75),
          a = lhMat(`Boat_Red`, `#DF4E42`, 0.6),
          o = new D(),
          s = lhLathe(
            [
              [0.088, 0.01],
              [0.105, 0.04],
              [0.108, 0.17],
              [0.095, 0.23],
              [0.048, 0.28],
              [0.042, 0.35],
              [0.054, 0.365],
              [0.054, 0.382],
              [0.038, 0.388],
            ],
            16,
            0.85
          ),
          c = lhLathe(
            [
              [0.032, 0.35],
              [0.041, 0.435],
              [0.036, 0.445],
            ],
            12,
            0.82
          ),
          l = lhLathe(
            [
              [0.028, 0.045],
              [0.031, 0.21],
            ],
            12,
            0.9
          ),
          u = lhLathe(
            [
              [0.035, 0.115],
              [0.035, 0.14],
            ],
            12,
            0.9
          )
        return (
          lhAdd(o, s, e),
          lhAdd(o, c, n),
          lhAdd(o, l, r, 0.008, 0, 0, 0.08, 0, -0.14),
          lhAdd(o, u, a, 0.008, 0, 0, 0.08, 0, -0.14),
          (o.position.y = 0.09),
          o.rotation.set(0.18, 0.25, 1.08),
          t.add(o),
          Mn(t),
          t
        )
      }
      let n = lhMat(`LH_White`, `#FF9A84`, 0.48),
        r = lhMat(`LH_White`, `#FFF3E2`, 0.42),
        a = lhMat(`Boat_Red`, `#FF735E`, 0.55),
        o = lhMat(`Rock`, `#B7B0A4`, 0.88),
        s = lhLathe(
          [
            [0.025, 0],
            [0.085, 0.04],
            [0.145, 0.095],
            [0.115, 0.115],
            [0.165, 0.165],
            [0.125, 0.185],
            [0.135, 0.235],
            [0.085, 0.255],
            [0.09, 0.295],
            [0.045, 0.34],
            [0.012, 0.39],
          ],
          16,
          0.82
        ),
        c = lhBakeAO(Wn(), 0.84, 1),
        l = lhBakeAO(Un(), 0.84, 1),
        u = lhAdd(t, s, n, -0.02, 0.11, 0.02, 0.38, 0.24, -1.12),
        d = lhAdd(t, c, r, 0.06, 0.06, 0.07, -0.18, 0.5, 0.1),
        f = lhAdd(t, l, a, -0.11, 0.035, -0.07, 0.08, 0.9, -0.06)
      return (
        u.scale.set(1.08, 1, 0.86),
        d.scale.setScalar(1.45),
        f.scale.setScalar(0.95),
        lhAdd(t, lhCobble(0.085, 0.042, 0.075, 5), o, 0.09, 0.02, -0.08),
        lhAdd(t, lhCobble(0.06, 0.032, 0.055, 11), o, -0.08, 0.018, 0.1),
        Mn(t),
        t
      )
    }
    spawnShoreFind() {
      let e = this.list.filter((e) => e.state === `here` && e.id !== `axe` && e.id !== `log`)
      if (e.length >= 3) return
      let t = [...SHORE_SPOTS].sort(() => Math.random() - 0.5)
      for (let [n, r] of t) {
        if (e.some((e) => Math.hypot(e.centre.x - n, e.centre.z - r) < 2.5)) continue
        let i = this.island.height(n, r)
        if (i < 0.02 || i > 0.75) continue
        let a = [`driftwood`, `shell`]
        ;(this.canSpawnCrates() && a.push(`crate`),
          this.canSpawnBottles() && a.push(`bottle`))
        let o = a[Math.floor(Math.random() * a.length)],
          s = this.buildShoreMesh(o),
          c = `shore_${this.seq++}`
        ;(s.position.set(n, i + 0.08, r),
          (s.rotation.y = Math.random() * Math.PI * 2),
          this.add(c, s, new M(n, i + 0.24, r), 0.7, o),
          this.fx.sparkles(new M(n, i + 0.4, r), 6, new p(SHORE_FINDS[o]?.sparkleColor ?? `#FFF3C4`)))
        return
      }
    }
    taken() {
      return [`axe`, `log`].filter((e) => !this.list.some((t) => t.id === e && t.state === `here`))
    }
    get any() {
      return this.list.some((e) => e.state === `here`)
    }
    pick(e, t) {
      let n = this.rig.rayFrom(e, t),
        r = this.list.find((e) => e.id === `axe` && e.state === `here`),
        i = this.list.find((e) => e.id === `log` && e.state === `here`),
        a =
          r && i
            ? { f: r, centre: i.centre.clone().lerp(r.centre, 0.5), r: 0.85 }
            : r
              ? { f: r, centre: r.centre, r: r.r }
              : i
                ? { f: i, centre: i.centre, r: i.r }
                : null
      if (a) {
        let e = n.intersectSphere(new b(a.centre, a.r), new M())
        if (e)
          return {
            id: a.f.id,
            kind: a.f.kind,
            t: e.distanceTo(n.origin),
            anchor: a.f.centre.clone().setY(a.f.centre.y + 0.55),
          }
      }
      let o = null
      for (let e of this.list) {
        if (e.state !== `here` || e.id === `axe` || e.id === `log`) continue
        let t = n.intersectSphere(new b(e.centre, e.r), new M())
        if (!t) continue
        let r = t.distanceTo(n.origin)
        r < (o?.t ?? 1 / 0) &&
          (o = {
            id: e.id,
            kind: e.kind,
            t: r,
            anchor: e.centre.clone().setY(e.centre.y + 0.55),
          })
      }
      return o
    }
    take(e) {
      let t = this.list.find((t) => t.id === e && t.state === `here`)
      t &&
        ((t.state = `going`),
        (t.t = 0),
        this.fx.sparkles(t.centre, 10, new p(`#FFF3C4`)),
        this.fx.dust(t.centre.clone().setY(this.island.height(t.centre.x, t.centre.z)), 0.4, 8),
        e === `log` && (this.obstacle = null),
        !this.any && this.cell && (this.island.unreserve(...this.cell), (this.cell = null)),
        this.onTake?.(t.kind ?? e, t.centre.clone()))
    }
    setGround() {
      if (!this.list.length) return
      for (let e of this.list) {
        let t = this.island.height(e.base.x, e.base.z) + 0.08
        ;((e.base.y = t), (e.centre.y = t + 0.16))
      }
    }
    update(e) {
      this.spawnTimer -= e
      if (this.spawnTimer <= 0) {
        this.spawnTimer = 28 + Math.random() * 14
        this.spawnShoreFind()
      }
      let t = this.list.find((e) => e.id === `axe` && e.state === `here`)
      t &&
        ((this.glint -= e),
        this.glint <= 0 &&
          ((this.glint = 1.4 + Math.random() * 0.8),
          this.fx.sparkles(t.centre.clone().setY(t.centre.y - 0.3), 2, new p(`#FFFBE6`))))
      this.shoreGlint -= e
      if (this.shoreGlint <= 0) {
        this.shoreGlint = 2.1 + Math.random() * 1.2
        for (let e of this.list)
          e.state === `here` &&
            e.id !== `axe` &&
            e.id !== `log` &&
            this.fx.sparkles(
              e.centre.clone(),
              2,
              new p(SHORE_FINDS[e.kind]?.sparkleColor ?? `#FFFBE6`)
            )
      }
      for (let t = this.list.length - 1; t >= 0; t--) {
        let n = this.list[t]
        if (n.state === `here`) {
          let t = n.root.position
          Math.abs(t.y - n.base.y) > 1e-4 && (t.y += (n.base.y - t.y) * Math.min(1, e * 6))
          continue
        }
        n.t += e
        let r = Math.min(n.t / 0.42, 1),
          i =
            r < 0.35
              ? 1 + 0.3 * Math.sin((r / 0.35) * Math.PI * 0.5)
              : 1.3 * (1 - (r - 0.35) / 0.65) ** 2
        ;(n.root.scale.setScalar(n.scale * Math.max(i, 0.001)),
          n.root.position.copy(n.base).setY(n.base.y + 0.9 * Math.sin(r * Math.PI * 0.5)),
          r >= 1 && (this.group.remove(n.root), this.list.splice(t, 1)))
      }
    }
  },
  Ti = { value: 0.3 },
  Ei = class extends vi {
    flameMat = Oi()
    glowMat = ki()
    embers = 0
    fires = []
    constructor(e, t, n, r, i, a) {
      super(
        {
          node: `Bonfire`,
          height: 0.75,
          count: () => n.bonfireCount,
          use: () => n.useBonfire(),
          give: () => n.returnBonfire(),
          land: () => a.whoomph(),
          decorate: (e) => this.light(e),
        },
        e,
        t,
        r,
        i,
        a
      )
    }
    load(e) {
      let t = { Rock: `Bonfire_Stone`, Log_Bark: `Bonfire_Bark`, Log_End: `Bonfire_End` }
      ;(e.traverse((e) => {
        let n = e
        if (n.isMesh)
          for (let e of Array.isArray(n.material) ? n.material : [n.material])
            t[e.name] && (e.name = t[e.name])
      }),
        super.load(e))
    }
    set night(e) {
      Ti.value = 0.28 + 0.72 * e
    }
    light(e) {
      let t = e.getObjectByName(`FireCenter`),
        n = t ? t.position.clone() : new M(0, 0.12, 0),
        r = new D()
      ;((r.name = `fire`),
        r.position.copy(n),
        [
          [0, 0, 0.62, 0.95, 0],
          [0.1, 0.06, 0.42, 0.66, 1.7],
          [-0.09, -0.05, 0.38, 0.58, 3.1],
        ].forEach(([e, t, n, a, o]) => {
          let s = new i(Di(n, a, o), this.flameMat)
          ;(s.position.set(e, 0, t), (s.renderOrder = 6), (s.frustumCulled = !1), r.add(s))
        }))
      let a = new i(new he(1.5, 32).rotateX(-Math.PI / 2), this.glowMat)
      ;(a.position.set(0, 0.03 - n.y, 0),
        (a.renderOrder = 5),
        r.add(a),
        e.add(r),
        this.fires.push(r))
    }
    update(e) {
      if ((super.update(e), (this.embers -= e), this.embers <= 0 && this.count)) {
        this.embers = 0.35 + Math.random() * 0.5
        let e = this.fires[Math.floor(Math.random() * this.fires.length)]
        if (e?.parent?.parent) {
          let t = e.getWorldPosition(new M())
          ;((t.y += 0.5), this.fx.sparkles(t, 1, new p(`#FFB35C`)))
        }
      }
    }
    warmupFire(e) {
      let t = new D()
      return (this.light(t), this.fires.pop(), t.position.set(0, -6, 0), e.add(t), t)
    }
  }
function Di(e, t, n) {
  let r = new Re(e, t).translate(0, t / 2, 0),
    i = r.getAttribute(`position`).count
  return (r.setAttribute(`aSeed`, new C(new Float32Array(i).fill(n), 1)), r)
}
function Oi() {
  return new L({
    uniforms: { uTime: at.uTime },
    transparent: !0,
    depthWrite: !1,
    side: 2,
    vertexShader: `
      attribute float aSeed;
      varying vec2 vUv;
      varying float vSeed;
      void main() {
        vUv = uv;
        vSeed = aSeed;
        // Face the camera about the upright axis (the flame stays standing).
        vec3 right = normalize(vec3(viewMatrix[0][0], 0.0, viewMatrix[2][0]));
        vec3 world = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz + right * position.x + vec3(0.0, position.y, 0.0);
        gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
      }`,
    fragmentShader: `
      uniform float uTime;
      varying vec2 vUv;
      varying float vSeed;
      ${qe}
      void main() {
        float y = vUv.y;
        float t = uTime * 2.6 + vSeed * 7.0;
        // Licking sideways more toward the tip; the outline wobbles with noise rising up it.
        float x = (vUv.x - 0.5) * 2.0 + sin(y * 5.0 + t * 1.6) * 0.18 * y;
        float n = lhNoise(vec2(vUv.x * 3.0 + vSeed, y * 3.0 - t * 1.3));
        float width = (1.0 - pow(max(y, 0.0), 1.4)) * mix(0.62, 0.95, n) * smoothstep(-0.05, 0.22, y);
        float d = abs(x) - width;
        float outer = smoothstep(0.08, -0.06, d);
        float inner = smoothstep(0.02, -0.25, abs(x) - width * 0.55) * smoothstep(0.85, 0.2, y);
        if (outer < 0.01) discard;
        vec3 red = vec3(1.0, 0.36, 0.14);
        vec3 gold = vec3(1.0, 0.72, 0.26);
        vec3 core = vec3(1.0, 0.95, 0.7);
        vec3 col = mix(red, gold, smoothstep(0.75, 0.15, y));
        col = mix(col, core, inner);
        // (bright enough to bloom)
        gl_FragColor = vec4(col * (1.6 + 0.8 * inner), outer * (0.92 - 0.25 * y));
      }`,
  })
}
function ki() {
  return new L({
    uniforms: { uGlow: Ti, uTime: at.uTime },
    transparent: !0,
    depthWrite: !1,
    blending: 2,
    polygonOffset: !0,
    polygonOffsetFactor: -2,
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      uniform float uGlow;
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        float r = length(vUv - 0.5) * 2.0;
        float flicker = 0.9 + 0.1 * sin(uTime * 9.0) * sin(uTime * 5.3 + 1.0);
        float a = pow(max(1.0 - r, 0.0), 2.2) * uGlow * flicker;
        gl_FragColor = vec4(vec3(1.0, 0.55, 0.22) * a * 0.9, 1.0);
      }`,
  })
}
function lhMat(e, t, n = 0.8, r = 0, i = {}) {
  let a = new R({ color: t, roughness: n, metalness: r, vertexColors: !0, ...i })
  return ((a.name = e), a)
}
function lhBakeAO(e, t = 0.78, n = 1) {
  let r = e.getAttribute(`position`),
    i = r.count,
    a = new Float32Array(i * 3),
    o = 1 / 0,
    s = -1 / 0
  for (let e = 0; e < i; e++) {
    let t = r.getY(e)
    ;(t < o && (o = t), t > s && (s = t))
  }
  let c = Math.max(1e-4, s - o)
  for (let e = 0; e < i; e++) {
    let s = (r.getY(e) - o) / c,
      l = t + (n - t) * Math.min(1, Math.max(0, s))
    a[e * 3] = a[e * 3 + 1] = a[e * 3 + 2] = l
  }
  return (e.setAttribute(`color`, new C(a, 3)), e)
}
function lhBevelBox(e, t, n, r = 0.016, i = {}) {
  let a = new se(e, t, n, 4, 4, 4),
    o = a.getAttribute(`position`),
    s = a.getAttribute(`normal`),
    c = o.count,
    l = Math.min(r, e * 0.35, t * 0.35, n * 0.35),
    u = Math.max(0.001, e / 2 - l),
    d = Math.max(0.001, t / 2 - l),
    f = Math.max(0.001, n / 2 - l),
    p = (e, t, n) => {
      let r = e / (t || 1)
      return Math.abs(r) < 0.1 ? 0 : Math.sign(r) * (Math.abs(r) < 0.75 ? n : n + l)
    }
  for (let r = 0; r < c; r++) {
    let a = p(o.getX(r), e / 2, u),
      m = p(o.getY(r), t / 2, d),
      h = p(o.getZ(r), n / 2, f),
      g = Math.max(-u, Math.min(u, a)),
      _ = Math.max(-d, Math.min(d, m)),
      v = Math.max(-f, Math.min(f, h)),
      y = a - g,
      b = m - _,
      x = h - v,
      S = Math.hypot(y, b, x) || 1,
      C = g + (y / S) * l,
      w = _ + (b / S) * l,
      T = v + (x / S) * l
    if (i.taper) {
      let e = (w + t / 2) / (t || 1),
        n = 1 + (i.taper - 1) * e
      ;((C *= n), (T *= n))
    }
    if (i.archY) {
      let t = C / (e / 2 || 1)
      w += i.archY * (1 - t * t)
    }
    if (i.archZ) {
      let e = T / (n / 2 || 1)
      w += i.archZ * (1 - e * e)
    }
    if (i.curveZ) {
      let t = C / (e / 2 || 1)
      T += i.curveZ * (1 - t * t)
    }
    ;(o.setXYZ(r, C, w, T), s.setXYZ(r, y / S, b / S, x / S))
  }
  return lhBakeAO(a, i.aoMin ?? 0.78, i.aoMax ?? 1)
}
function lhLathe(e, t = 14, n = 0.78) {
  let r = [0, e[0][1], 0],
    i = []
  for (let [n, i] of e)
    for (let e = 0; e < t; e++) {
      let a = (e / t) * Math.PI * 2
      r.push(Math.cos(a) * n, i, Math.sin(a) * n)
    }
  let a = 1 + e.length * t
  r.push(0, e[e.length - 1][1], 0)
  for (let e = 0; e < t; e++) {
    let n = (e + 1) % t
    i.push(0, 1 + e, 1 + n)
  }
  for (let n = 0; n < e.length - 1; n++) {
    let r = 1 + n * t,
      a = r + t
    for (let e = 0; e < t; e++) {
      let n = (e + 1) % t
      i.push(r + e, a + e, r + n, r + n, a + e, a + n)
    }
  }
  let o = 1 + (e.length - 1) * t
  for (let e = 0; e < t; e++) {
    let n = (e + 1) % t
    i.push(o + e, a, o + n)
  }
  let s = new v()
  return (
    s.setAttribute(`position`, new C(new Float32Array(r), 3)),
    s.setIndex(i),
    s.computeVertexNormals(),
    lhBakeAO(s, n, 1)
  )
}
function lhCobble(e, t, n, r = 1) {
  let i = new Fe(1, 10, 8),
    a = i.getAttribute(`position`),
    o = a.count
  for (let i = 0; i < o; i++) {
    let o = a.getX(i),
      s = a.getY(i),
      c = a.getZ(i),
      l =
        1 +
        0.12 * Math.sin(o * 3.7 + r * 1.9) * Math.cos(c * 3.3 - r * 1.1) +
        0.07 * Math.cos(s * 4.5 + o * 2.3 + r * 2.7),
      u = s < 0 ? s * 0.65 : s
    a.setXYZ(i, o * e * l, u * t * l, c * n * l)
  }
  return (i.computeVertexNormals(), lhBakeAO(i, 0.74, 1))
}
function lhAdd(e, t, n, r = 0, a = 0, o = 0, s = 0, c = 0, l = 0) {
  let u = new i(t, n)
  return (u.position.set(r, a, o), (s || c || l) && u.rotation.set(s, c, l), e.add(u), u)
}
var Hi = class extends vi {
    constructor(e, t, n, r, i, a) {
      super(
        {
          node: `Seat`,
          height: 0.72,
          allowDeck: !0,
          count: () => n.seatCount,
          use: () => n.useSeat(),
          give: () => n.returnSeat(),
          land: () => a.bench(),
        },
        e,
        t,
        r,
        i,
        a
      )
      this.load(this.buildModel())
    }
    buildModel() {
      let e = new D()
      e.name = `Seat`
      let t = lhMat(`Bench_WoodDark`, `#7E4F2F`, 0.84),
        n = lhMat(`Bench_Wood`, `#DFA060`, 0.76),
        r = lhMat(`Bench_Wood`, `#CF8D4E`, 0.78),
        a = lhMat(`Boat_Rail`, `#C68446`, 0.78),
        o = lhMat(`Bench_Metal`, `#3E3833`, 0.55),
        s = lhMat(`LH_Brass`, `#DDA94B`, 0.35),
        c = lhMat(`Rock`, `#B3ADA2`, 0.9)
      ;[-0.33, 0.33].forEach((i) => {
        ;(lhAdd(e, lhCobble(0.075, 0.03, 0.075, i > 0 ? 2 : 5), c, i, 0.015, 0.16),
          lhAdd(e, lhCobble(0.075, 0.03, 0.075, i > 0 ? 7 : 9), c, i, 0.015, -0.16),
          lhAdd(e, lhBevelBox(0.105, 0.052, 0.46, 0.014), t, i, 0.036, 0),
          lhAdd(e, lhBevelBox(0.082, 0.31, 0.082, 0.014, { taper: 0.88 }), t, i, 0.19, 0.15, -0.06, 0, 0),
          lhAdd(e, lhBevelBox(0.084, 0.65, 0.084, 0.014, { taper: 0.82 }), t, i, 0.35, -0.15, -0.15, 0, 0),
          lhAdd(e, lhBevelBox(0.076, 0.058, 0.44, 0.012), a, i, 0.315, 0.01),
          lhAdd(e, lhBevelBox(0.072, 0.16, 0.068, 0.012), t, i, 0.39, 0.17, 0.05, 0, 0),
          lhAdd(e, lhBevelBox(0.112, 0.046, 0.47, 0.014, { archZ: 0.014 }), a, i, 0.465, 0.02, -0.03, 0, 0),
          lhAdd(e, lhBevelBox(0.055, 0.18, 0.055, 0.01), t, i * 0.9, 0.22, 0.02, 0, 0, i > 0 ? 0.65 : -0.65),
          lhAdd(e, lhBevelBox(0.092, 0.036, 0.092, 0.008), o, i, 0.31, 0.15),
          lhAdd(e, lhBevelBox(0.092, 0.036, 0.092, 0.008), o, i, 0.31, -0.13),
          lhAdd(e, lhCobble(0.016, 0.012, 0.016, 1), s, i, 0.492, 0.17),
          lhAdd(e, lhCobble(0.016, 0.012, 0.016, 2), s, i, 0.492, -0.14))
      })
      lhAdd(e, lhBevelBox(0.68, 0.052, 0.068, 0.012), r, 0, 0.14, -0.02)
      ;[
        [-0.105, r, -0.03],
        [-0.005, n, 0],
        [0.095, r, 0.02],
        [0.192, n, 0.05],
      ].forEach(([t, a, o]) => {
        ;(lhAdd(e, lhBevelBox(0.86, 0.04, 0.088, 0.011, { archY: 0.007 }), a, 0, 0.348, t, o, 0, 0),
          lhAdd(e, lhCobble(0.013, 0.01, 0.013, 3), s, -0.33, 0.37, t),
          lhAdd(e, lhCobble(0.013, 0.01, 0.013, 4), s, 0.33, 0.37, t))
      })
      ;(lhAdd(e, lhBevelBox(0.85, 0.092, 0.038, 0.011, { archY: 0.012, curveZ: -0.022 }), r, 0, 0.49, -0.17, -0.15, 0, 0),
        lhAdd(e, lhBevelBox(0.86, 0.095, 0.038, 0.011, { archY: 0.016, curveZ: -0.024 }), n, 0, 0.605, -0.19, -0.15, 0, 0),
        lhAdd(e, lhBevelBox(0.88, 0.046, 0.05, 0.014, { archY: 0.02, curveZ: -0.025 }), t, 0, 0.675, -0.205, -0.15, 0, 0),
        [-0.33, 0.33].forEach((t) => {
          ;(lhAdd(e, lhCobble(0.015, 0.015, 0.012, 5), s, t, 0.49, -0.145),
            lhAdd(e, lhCobble(0.015, 0.015, 0.012, 6), s, t, 0.605, -0.165))
        }))
      let l = lhLathe(
        [
          [0.048, -0.018],
          [0.062, 0],
          [0.048, 0.018],
        ],
        12,
        0.84
      )
      return (
        lhAdd(e, l, r, 0.395, 0.41, 0.08, 0, 0, Math.PI / 2),
        lhAdd(e, lhBevelBox(0.03, 0.024, 0.08, 0.006), s, 0.39, 0.45, 0.08),
        e
      )
    }
  },
  Ui = class extends vi {
    sparkTimer = 0.8
    constructor(e, t, n, r, i, a) {
      super(
        {
          node: `Lantern`,
          height: 1.15,
          allowDeck: !0,
          count: () => n.lanternCount,
          use: () => n.useLantern(),
          give: () => n.returnLantern(),
          land: () => a.whoomph(),
          decorate: (e, t) => this.setupLantern(e, t),
        },
        e,
        t,
        r,
        i,
        a
      )
      this.load(this.buildModel())
    }
    buildModel() {
      let e = new D()
      e.name = `Lantern`
      let t = lhMat(`LH_Stone`, `#ABA59B`, 0.88),
        n = lhMat(`Rock`, `#9B958B`, 0.9),
        r = lhMat(`LH_Wood`, `#7D5132`, 0.82),
        a = lhMat(`Bench_WoodDark`, `#684125`, 0.85),
        o = lhMat(`LH_Metal`, `#3D3632`, 0.55),
        s = lhMat(`LH_Brass`, `#DDA748`, 0.35),
        c = lhMat(`Lantern_Glass`, `#FFE494`, 0.22, 0, {
          emissive: new p(`#FFB448`),
          emissiveIntensity: 2.2,
        }),
        l = lhLathe(
          [
            [0.24, 0],
            [0.23, 0.06],
            [0.195, 0.075],
            [0.185, 0.135],
            [0.135, 0.155],
            [0.115, 0.18],
          ],
          8,
          0.76
        )
      ;(lhAdd(e, l, t),
        [
          [0.18, 0.035, 0.14, 0.075, 0.048, 0.068, 1],
          [-0.19, 0.03, 0.11, 0.068, 0.042, 0.062, 4],
          [0.12, 0.028, -0.18, 0.062, 0.038, 0.058, 7],
          [-0.14, 0.032, -0.15, 0.07, 0.045, 0.065, 11],
        ].forEach(([t, r, i, a, o, s, c]) => {
          lhAdd(e, lhCobble(a, o, s, c), n, t, r, i)
        }),
        lhAdd(e, lhBevelBox(0.125, 0.56, 0.125, 0.022, { taper: 0.78 }), r, 0, 0.43, 0),
        [-0.085, 0.085].forEach((t) => {
          ;(lhAdd(e, lhBevelBox(0.048, 0.15, 0.052, 0.01), a, t, 0.21, 0, 0, 0, t > 0 ? 0.35 : -0.35),
            lhAdd(e, lhBevelBox(0.052, 0.15, 0.048, 0.01), a, 0, 0.21, t, t > 0 ? -0.35 : 0.35, 0, 0))
        }),
        lhAdd(e, lhBevelBox(0.138, 0.036, 0.138, 0.008), o, 0, 0.32, 0),
        lhAdd(e, lhBevelBox(0.118, 0.034, 0.118, 0.008), o, 0, 0.64, 0))
      let u = lhLathe(
          [
            [0.075, 0.68],
            [0.145, 0.705],
            [0.155, 0.735],
            [0.125, 0.755],
          ],
          12,
          0.84
        ),
        d = lhLathe(
          [
            [0.108, 0.75],
            [0.138, 0.81],
            [0.142, 0.87],
            [0.115, 0.935],
          ],
          14,
          0.96
        ),
        f = lhLathe(
          [
            [0.13, 0.93],
            [0.205, 0.955],
            [0.19, 0.975],
            [0.115, 1.02],
            [0.078, 1.04],
            [0.085, 1.075],
            [0.055, 1.095],
            [0.022, 1.135],
          ],
          12,
          0.84
        ),
        m = lhLathe(
          [
            [0.195, 0.952],
            [0.212, 0.962],
            [0.195, 0.972],
          ],
          12,
          0.88
        )
      ;(lhAdd(e, u, s), lhAdd(e, d, c), lhAdd(e, f, o), lhAdd(e, m, s))
      for (let t = 0; t < 6; t++) {
        let n = (t / 6) * Math.PI * 2,
          r = Math.cos(n) * 0.142,
          i = Math.sin(n) * 0.142
        ;(lhAdd(e, lhBevelBox(0.016, 0.2, 0.016, 0.004), s, r, 0.845, i),
          lhAdd(e, lhCobble(0.013, 0.013, 0.013, t + 1), s, r * 0.82, 0.64, i * 0.82))
      }
      return (
        lhAdd(e, lhBevelBox(0.09, 0.022, 0.022, 0.006, { archY: 0.035 }), s, 0, 1.145, 0),
        e
      )
    }
    setupLantern(e, t) {
      t.colorIdx = 0
      let n = null
      e.traverse((e) => {
        if (e.isMesh && e.material?.name === `Lantern_Glass`) {
          n = e.material.clone()
          e.material = n
        }
      })
      t.glassMat = n
      let r = new i(new he(1.25, 24).rotateX(-Math.PI / 2), ki())
      ;((r.position.set(0, 0.03, 0)), (r.renderOrder = 5), e.add(r))
    }
    cycleColor(e) {
      let t = this.list[e]
      if (!t) return null
      t.colorIdx = ((t.colorIdx ?? 0) + 1) % LANTERN_COLORS.length
      let n = LANTERN_COLORS[t.colorIdx]
      if (t.glassMat) {
        ;(t.glassMat.color.set(n.glassHex), t.glassMat.emissive.set(n.glowHex))
      }
      let r = new M(t.cx + 0.5, t.y + 0.9, t.cz + 0.5)
      return (this.fx.sparkles(r, 8, new p(n.glassHex)), n)
    }
    update(e) {
      super.update(e)
      this.sparkTimer -= e
      if (this.sparkTimer <= 0 && this.list.length) {
        this.sparkTimer = 0.9 + Math.random() * 0.9
        let e = this.list[Math.floor(Math.random() * this.list.length)]
        if (e && e.anim !== `pop`) {
          let t = LANTERN_COLORS[e.colorIdx ?? 0]
          this.fx.sparkles(
            new M(e.cx + 0.5, e.y + 0.92, e.cz + 0.5),
            1,
            new p(t?.glassHex ?? `#FFE494`)
          )
        }
      }
    }
  },
  Wi = class extends vi {
    glintTimer = 1.4
    constructor(e, t, n, r, i, a) {
      super(
        {
          node: `Planter`,
          height: 0.82,
          allowDeck: !0,
          count: () => n.planterCount,
          use: () => n.usePlanter(),
          give: () => n.returnPlanter(),
          land: () => a.bench(),
          decorate: (e, t) => this.setupPlanter(e, t),
        },
        e,
        t,
        r,
        i,
        a
      )
      this.load(this.buildModel())
    }
    buildModel() {
      let e = new D()
      e.name = `Planter`
      let t = lhMat(`Bench_Wood`, `#C8854A`, 0.78),
        n = lhMat(`Boat_Rail`, `#BA783E`, 0.8),
        r = lhMat(`Bench_WoodDark`, `#7A4C2A`, 0.85),
        a = lhMat(`Bench_Metal`, `#3E3833`, 0.55),
        o = lhMat(`LH_Brass`, `#DDA94B`, 0.35),
        s = lhMat(`Bonfire_End`, `#5D3C22`, 0.95),
        c = lhMat(`Rock`, `#ACA59A`, 0.88),
        l = lhMat(`Rock_Moss`, `#58A846`, 0.82),
        u = lhMat(`Bench_Red`, `#E94855`, 0.35),
        d = lhMat(`Bench_Red`, `#FF7166`, 0.38),
        f = lhMat(`LH_White`, `#FFC842`, 0.35),
        m = lhMat(`LH_White`, `#FFF6DD`, 0.55)
      ;[-0.33, 0.33].forEach((e_x) => {
        ;[-0.33, 0.33].forEach((e_z) => {
          ;(lhAdd(e, lhBevelBox(0.095, 0.37, 0.095, 0.016), r, e_x, 0.185, e_z),
            lhAdd(e, lhBevelBox(0.114, 0.036, 0.114, 0.012, { archY: 0.008 }), t, e_x, 0.382, e_z),
            lhAdd(e, lhBevelBox(0.106, 0.042, 0.106, 0.008), a, e_x, 0.31, e_z),
            lhAdd(e, lhBevelBox(0.106, 0.042, 0.106, 0.008), a, e_x, 0.08, e_z),
            lhAdd(e, lhCobble(0.015, 0.015, 0.015, 1), o, e_x * 1.08, 0.31, e_z * 1.08))
        })
      })
      ;[0.08, 0.18, 0.28].forEach((a_y, i_y) => {
        let o_w = i_y % 2 ? n : t
        ;[-0.33, 0.33].forEach((s_p) => {
          ;(lhAdd(e, lhBevelBox(0.58, 0.094, 0.044, 0.011), o_w, 0, a_y, s_p),
            lhAdd(e, lhBevelBox(0.044, 0.094, 0.58, 0.011), n, s_p, a_y, 0))
        })
      })
      ;[-0.33, 0.33].forEach((r_p) => {
        ;(lhAdd(e, lhBevelBox(0.62, 0.036, 0.072, 0.01), t, 0, 0.35, r_p),
          lhAdd(e, lhBevelBox(0.072, 0.036, 0.62, 0.01), n, r_p, 0.35, 0))
      })
      ;(lhAdd(e, lhCobble(0.31, 0.085, 0.31, 4), s, 0, 0.31, 0),
        [
          [-0.19, 0.34, 0.18, 0.055, 2],
          [0.2, 0.34, 0.16, 0.048, 5],
          [-0.17, 0.34, -0.19, 0.052, 8],
          [0.18, 0.34, -0.17, 0.045, 11],
        ].forEach(([t, n, r, i, a]) => {
          lhAdd(e, lhCobble(i, i * 0.65, i * 0.9, a), c, t, n, r)
        }),
        lhAdd(e, lhCobble(0.23, 0.19, 0.22, 14), l, -0.09, 0.46, 0.05),
        lhAdd(e, lhCobble(0.21, 0.21, 0.2, 23), l, 0.1, 0.51, -0.05),
        lhAdd(e, lhCobble(0.19, 0.17, 0.19, 31), l, 0.04, 0.44, 0.13),
        An(e, `Rock_Moss`, 77))
      let h = new D()
      return (
        (h.name = `Berries`),
        [
          [-0.16, 0.56, 0.13, u, f, 1],
          [0.14, 0.64, 0.03, f, u, 2],
          [0.01, 0.58, -0.16, u, d, 3],
          [0.17, 0.49, 0.16, d, f, 4],
          [-0.06, 0.65, -0.02, f, u, 5],
          [-0.18, 0.51, -0.09, u, d, 6],
        ].forEach(([e, t, n, a, o, s]) => {
          let c = new D()
          ;(c.position.set(e, t, n),
            lhAdd(c, lhBevelBox(0.018, 0.06, 0.018, 0.004), r, 0, -0.01, 0, 0.2, s, -0.15),
            lhAdd(c, lhCobble(0.052, 0.056, 0.052, s * 3), a, 0, 0.015, 0),
            lhAdd(c, lhCobble(0.042, 0.045, 0.042, s * 5), o, 0.038, -0.005, 0.024),
            lhAdd(c, lhCobble(0.038, 0.04, 0.038, s * 7), a, -0.032, -0.01, -0.022),
            lhAdd(c, lhCobble(0.022, 0.014, 0.022, s * 9), m, 0.015, 0.052, -0.015),
            h.add(c))
        }),
        e.add(h),
        e
      )
    }
    setupPlanter(e, t) {
      t.growTimer = 22
      t.berries = e.getObjectByName(`Berries`) ?? null
    }
    isReady(e) {
      let t = this.list[e]
      return !!t && (t.growTimer ?? 0) >= 30
    }
    progress(e) {
      let t = this.list[e]
      return t ? Math.min(100, Math.floor(((t.growTimer ?? 0) / 30) * 100)) : 0
    }
    harvest(e) {
      let t = this.list[e]
      if (!t || (t.growTimer ?? 0) < 30) return null
      t.growTimer = 0
      t.berries && t.berries.scale.setScalar(0.01)
      let n = new M(t.cx + 0.5, t.y + 0.6, t.cz + 0.5)
      return (
        this.fx.sparkles(n, 10, new p(`#FFE066`)),
        this.fx.dust(n, 0.4, 8, new p(`#72CF5E`)),
        n
      )
    }
    update(e) {
      super.update(e)
      this.glintTimer -= e
      let t = this.glintTimer <= 0
      t && (this.glintTimer = 1.6 + Math.random())
      for (let n of this.list) {
        if (n.anim === `pop`) continue
        n.growTimer = Math.min(30, (n.growTimer ?? 0) + e)
        let r = Math.min(1, n.growTimer / 30)
        n.berries && n.berries.scale.setScalar(Math.max(0.01, r))
        t &&
          r >= 1 &&
          this.fx.sparkles(
            new M(n.cx + 0.5, n.y + 0.68, n.cz + 0.5),
            2,
            new p(`#FFE066`)
          )
      }
    }
  },
  Gi = class extends vi {
    glintTimer = 1.3
    constructor(e, t, n, r, i, a) {
      super(
        {
          node: `CrabTrap`,
          height: 0.72,
          allowShore: !0,
          count: () => n.crabTrapCount,
          use: () => n.useCrabTrap(),
          give: () => n.returnCrabTrap(),
          land: () => a.plop(!1),
          decorate: (e, t) => this.setupTrap(e, t),
        },
        e,
        t,
        r,
        i,
        a
      )
      this.load(this.buildModel())
    }
    buildModel() {
      let e = new D()
      e.name = `CrabTrap`
      let t = lhMat(`Boat_Rail`, `#CF9155`, 0.78),
        n = lhMat(`Boat_Rail`, `#BC7E43`, 0.8),
        r = lhMat(`Bench_Wood`, `#B4763D`, 0.82),
        a = lhMat(`Bench_WoodDark`, `#754926`, 0.85),
        o = lhMat(`LH_Brass`, `#DDA94B`, 0.35),
        s = lhMat(`Rock`, `#A39C91`, 0.9),
        c = lhMat(`Boat_Red`, `#E25247`, 0.48),
        l = lhMat(`LH_White`, `#FFF6E8`, 0.48)
      ;[-0.29, 0.29].forEach((t) => {
        lhAdd(e, lhBevelBox(0.085, 0.048, 0.6, 0.013), a, t, 0.026, 0)
      })
      ;[-0.22, 0, 0.22].forEach((t) => {
        lhAdd(e, lhBevelBox(0.66, 0.036, 0.095, 0.01), r, 0, 0.052, t)
        for (let n = -3; n <= 3; n++) {
          let r = (n / 3.4) * (Math.PI * 0.46),
            i = Math.sin(r) * 0.29,
            o = 0.065 + Math.cos(r) * 0.285
          lhAdd(e, lhBevelBox(0.115, 0.038, 0.044, 0.009), a, i, o, t, 0, 0, -r)
        }
      })
      for (let r = -4; r <= 4; r++) {
        let i = (r / 4.3) * (Math.PI * 0.47),
          a = Math.sin(i) * 0.305,
          o = 0.065 + Math.cos(i) * 0.3,
          s = r % 2 === 0 ? t : n
        lhAdd(e, lhBevelBox(0.046, 0.022, 0.56, 0.006, { archZ: 0.004 }), s, a, o, 0, 0, 0, -i)
      }
      ;[-0.24, 0.24].forEach((t) => {
        let n = lhLathe(
          [
            [0.095, -0.02],
            [0.115, 0],
            [0.075, 0.035],
          ],
          12,
          0.8
        )
        ;(lhAdd(e, n, o, 0, 0.19, t, Math.PI / 2, 0, 0),
          lhAdd(e, lhBevelBox(0.54, 0.032, 0.032, 0.008), a, 0, 0.18, t))
      })
      ;(lhAdd(e, lhCobble(0.082, 0.05, 0.072, 6), s, -0.16, 0.09, 0.11),
        lhAdd(e, lhCobble(0.076, 0.046, 0.068, 12), s, 0.15, 0.088, -0.1),
        lhAdd(e, lhBevelBox(0.14, 0.03, 0.18, 0.008), a, 0, 0.375, 0),
        lhAdd(e, lhCobble(0.022, 0.016, 0.022, 3), o, 0, 0.395, 0),
        lhAdd(
          e,
          lhLathe(
            [
              [0.014, 0.38],
              [0.012, 0.54],
            ],
            8,
            0.85
          ),
          r
        ))
      let u = new D()
      u.name = `Buoy`
      let d = lhLathe(
          [
            [0.024, -0.12],
            [0.088, -0.065],
            [0.115, 0],
            [0.092, 0.065],
            [0.028, 0.12],
          ],
          14,
          0.86
        ),
        f = lhLathe(
          [
            [0.112, -0.036],
            [0.12, 0],
            [0.112, 0.036],
          ],
          14,
          0.88
        ),
        m = lhLathe(
          [
            [0.056, 0.085],
            [0.032, 0.122],
            [0.02, 0.155],
          ],
          10,
          0.9
        )
      return (
        lhAdd(u, d, l),
        lhAdd(u, f, c),
        lhAdd(u, m, c),
        lhAdd(u, lhBevelBox(0.024, 0.04, 0.024, 0.006), o, 0, 0.165, 0),
        (u.position.y = 0.56),
        e.add(u),
        e
      )
    }
    setupTrap(e, t) {
      t.catchTimer = 25
      t.buoy = e.getObjectByName(`Buoy`) ?? null
    }
    isReady(e) {
      let t = this.list[e]
      return !!t && (t.catchTimer ?? 0) >= 35
    }
    progress(e) {
      let t = this.list[e]
      return t ? Math.min(100, Math.floor(((t.catchTimer ?? 0) / 35) * 100)) : 0
    }
    collect(e) {
      let t = this.list[e]
      if (!t || (t.catchTimer ?? 0) < 35) return null
      t.catchTimer = 0
      let n = new M(t.cx + 0.5, t.y + 0.55, t.cz + 0.5)
      return (
        this.fx.splash(n.clone().setY(Math.max(0, t.y)), new p(`#E6FBF4`)),
        this.fx.sparkles(n, 10, new p(`#64E8D8`)),
        n
      )
    }
    update(e) {
      super.update(e)
      this.glintTimer -= e
      let t = this.glintTimer <= 0
      t && (this.glintTimer = 1.5 + Math.random())
      let n = performance.now() * 0.004
      for (let r of this.list) {
        if (r.anim === `pop`) continue
        r.catchTimer = Math.min(35, (r.catchTimer ?? 0) + e)
        let i = r.catchTimer >= 35
        r.buoy &&
          ((r.buoy.position.y =
            0.55 + Math.sin(n * (i ? 3.2 : 1.2) + r.cx) * (i ? 0.08 : 0.03)),
          r.buoy.scale.setScalar(i ? 1.18 : 0.95))
        t &&
          i &&
          this.fx.sparkles(
            new M(r.cx + 0.5, r.y + 0.62, r.cz + 0.5),
            2,
            new p(`#64E8D8`)
          )
      }
    }
  }
var Ai = 8,
  ji = 17.5,
  Mi = 0.35,
  Ni = 16,
  Pi = 13,
  Fi = 42,
  Ii = 0.2,
  $ = 1.12,
  Li = 0.425,
  Ri = -0.179,
  zi = class {
    island
    rig
    fx
    sound
    group = new D()
    wake = { pos: new w(), shape: new w() }
    last = new M()
    speed = 0
    onArrive
    onLeave
    known = () => []
    cookingKnown = () => !1
    mode = `away`
    t = 0
    boat
    gil = null
    parts = {}
    rest = new Map()
    anchor = new M()
    heading = 0
    from = new M()
    pos = new M()
    tilt = { pitch: 0, roll: 0, heave: 0 }
    swell = { h: 0, dx: 0, dz: 0 }
    wave = 0
    talk = 0
    faceOffset = 0
    data = {}
    constructor(e, t, n, r) {
      ;((this.island = e),
        (this.rig = t),
        (this.fx = n),
        (this.sound = r),
        (this.group.name = `fisherman`),
        (this.boat = new D()),
        (this.boat.visible = !1),
        this.group.add(this.boat))
    }
    load(e, t) {
      let n = e?.getObjectByName(`FBoat`)
      if ((this.boat.clear(), n && e)) {
        t(e)
        let n = new D()
        ;(e.position.set(0, 0, 0),
          n.add(e),
          this.boat.add(n),
          (this.gil = e.getObjectByName(`Gil`) ?? null))
        let r = (t) => e.getObjectByName(t) ?? void 0
        this.parts = {
          body: r(`Gil_Body`),
          head: r(`Gil_Head`),
          armL: r(`Gil_ArmL`),
          armR: r(`Gil_ArmR`),
          hat: r(`Gil_Hat`),
          flag: r(`FBoat_Flag`),
          lantern: r(`FBoat_Lantern`),
        }
      } else this.plain()
      for (let e of Object.values(this.parts)) e && this.rest.set(e, e.rotation.clone())
      this.placeAnchor()
    }
    plain() {
      let e = new i(new se(1, 0.45, 2.4), new R({ color: `#F6F0E2`, roughness: 0.6 }))
      e.position.y = 0.22
      let t = new i(new se(1.02, 0.1, 2.42), new R({ color: `#E0544B`, roughness: 0.6 }))
      t.position.y = 0.36
      let n = new D(),
        r = new i(new Fe(0.26, 16, 12), new R({ color: `#3E756E`, roughness: 0.8 }))
      r.position.y = 0.3
      let a = new i(new Fe(0.24, 16, 12), new R({ color: `#F2C9A6`, roughness: 0.8 }))
      a.position.y = 0.72
      let o = new i(new ge(0.3, 0.22, 16), new R({ color: `#F2C84B`, roughness: 0.6 }))
      ;((o.position.y = 0.95),
        n.add(r, a, o),
        n.position.set(0, 0.45, -0.2),
        this.boat.add(e, t, n),
        (this.gil = n),
        (this.parts = { body: r, head: a, hat: o }))
    }
    placeAnchor() {
      let e = new j(0.5, 0.4),
        t = new j(0.25, 1).normalize(),
        n = 3
      for (; n < 30 && -this.island.height(e.x + t.x * n, e.y + t.y * n) < 0.8; ) n += 0.25
      ;((n += 0.9),
        this.anchor.set(e.x + t.x * n, 0, e.y + t.y * n),
        (this.heading = Math.atan2(t.y, -t.x)))
    }
    get here() {
      return this.mode === `moored`
    }
    get visible() {
      return this.mode !== `away`
    }
    get met() {
      return !!this.data.met
    }
    get request() {
      return this.data.request ?? null
    }
    firstCatch(e) {
      this.data.met || this.data.due !== void 0 || (this.data.due = e + Mi)
    }
    schedule(e, t, n) {
      let r = this.data
      if (this.mode === `away`) {
        let i = !r.met && r.due !== void 0 && e >= r.due,
          a = r.met && (r.next ?? 0) <= n && t >= Ai && t < 17
        ;(i || a) && this.arrive(!r.met, n)
      } else
        this.mode === `moored` &&
          r.met &&
          !r.sold &&
          (t >= ji || t < 7) &&
          this.t > 60 &&
          this.leave()
    }
    arrive(e, t) {
      let n = this.data
      ;((n.here = !0),
        (n.sold = !1),
        (n.next = t + 1),
        (n.request = !e && Math.random() < 0.45 ? this.makeRequest() : null),
        (this.mode = `arriving`),
        (this.t = 0))
      let r = new M(Math.sin(this.heading), 0, Math.cos(this.heading))
      ;(this.from
        .copy(this.anchor)
        .addScaledVector(r, -42)
        .addScaledVector(new M(-r.z, 0, r.x), Fi * 0.5),
        this.pos.copy(this.from),
        (this.boat.visible = !0))
    }
    sold() {
      this.data.sold = !0
    }
    leave() {
      this.mode === `moored` &&
        ((this.mode = `leaving`), (this.t = 0), this.from.copy(this.pos), (this.wave = 1.6))
    }
    meet() {
      this.data.met = !0
    }
    waveHand() {
      this.wave = Math.max(this.wave, 1.4)
    }
    set talking(e) {
      this.talk = +!!e
    }
    makeRequest() {
      let e = this.known(),
        t = e.length ? e : Mr.filter((e) => e.weight >= 30).map((e) => e.id),
        n = [...t]
          .sort(() => Math.random() - 0.5)
          .slice(0, Math.min(t.length, 2 + +(Math.random() < 0.4)))
          .map((e) => [
            e,
            this.cookingKnown() && Math.random() < 0.35,
            Math.random() < 0.3 ? 2 : 1,
          ]),
        r = n.reduce((e, [t, n, r]) => e + Ir(t, n) * r, 0)
      return { want: n, reward: Math.round((r * 3 + 60) / 10) * 10 }
    }
    completeRequest() {
      this.data.request && (this.data.request.done = !0)
    }
    pick(e, t) {
      if (this.mode !== `moored`) return null
      let n = this.rig.rayFrom(e, t),
        r = this.pos.clone().setY(this.pos.y + 0.7),
        i = n.intersectSphere(new b(r, 1.35), new M())
      return i ? { t: i.distanceTo(n.origin), anchor: r.clone().setY(r.y + 1.1) } : null
    }
    get position() {
      return this.pos.clone().setY(this.pos.y + 1)
    }
    update(e, t, n) {
      if (this.mode === `away`) {
        this.wake.shape.x = 0
        return
      }
      this.t += e
      let r = this.heading
      if (this.mode === `arriving`) {
        let e = V(0, 1, Math.min(this.t / Ni, 1)),
          t = new M().lerpVectors(this.from, this.anchor, e),
          i = Math.sin(e * Math.PI) * 3
        ;((t.x += Math.cos(this.heading) * i), (this.pos.x = t.x), (this.pos.z = t.z))
        let a = this.anchor.clone().sub(this.from)
        ;((r = Bi(Math.atan2(a.x, a.z), this.heading, V(0.6, 1, e))),
          this.t >= Ni &&
            ((this.mode = `moored`),
            (this.t = 0),
            (this.wave = 2),
            this.sound.bell(),
            this.fx.splash(
              this.pos
                .clone()
                .add(new M(Math.sin(this.heading) * $, 0, Math.cos(this.heading) * $))
                .setY(n)
            ),
            this.onArrive?.(!this.data.met)))
      } else if (this.mode === `leaving`) {
        let e = V(0, 1, Math.min(this.t / Pi, 1)),
          t = new M(Math.sin(this.heading), 0, Math.cos(this.heading)),
          n = this.anchor
            .clone()
            .addScaledVector(t, Fi)
            .addScaledVector(new M(-t.z, 0, t.x), -16.8),
          i = new M().lerpVectors(this.from, n, e * e)
        ;((this.pos.x = i.x), (this.pos.z = i.z))
        let a = n.clone().sub(this.from)
        if (((r = Bi(this.heading, Math.atan2(a.x, a.z), V(0, 0.25, e))), this.t >= Pi)) {
          ;((this.mode = `away`),
            (this.boat.visible = !1),
            (this.data.here = !1),
            (this.data.request = this.data.request?.done ? null : this.data.request),
            this.onLeave?.())
          return
        }
      }
      let i = (e, r) => (
          Qe(e, r, t, this.swell),
          n + this.swell.h * et(n - this.island.height(e, r))
        ),
        a = Math.sin(r),
        o = Math.cos(r),
        s = i(this.pos.x + a * $, this.pos.z + o * $),
        c = i(this.pos.x - a * $, this.pos.z - o * $),
        l = i(this.pos.x - o * Li, this.pos.z + a * Li),
        u = i(this.pos.x + o * Li, this.pos.z - a * Li),
        d = 1 - Math.exp(-e * 3)
      ;((this.tilt.heave += ((s + c + l + u) / 4 - this.tilt.heave) * d),
        (this.tilt.pitch += (Math.atan2(c - s, $ * 2) - this.tilt.pitch) * d),
        (this.tilt.roll += (Math.atan2(l - u, Li * 2) * 0.7 - this.tilt.roll) * d),
        (this.pos.y = this.tilt.heave - Ii),
        this.boat.position.copy(this.pos),
        this.boat.rotation.set(this.tilt.pitch, r, this.tilt.roll, `YXZ`),
        e > 0 &&
          (this.speed +=
            (Math.hypot(this.pos.x - this.last.x, this.pos.z - this.last.z) / e - this.speed) *
            Math.min(1, e * 4)),
        this.last.copy(this.pos),
        this.wake.pos.set(
          this.pos.x + Math.sin(r) * Ri,
          this.pos.z + Math.cos(r) * Ri,
          Math.sin(r),
          Math.cos(r)
        ),
        this.wake.shape.set($, Li, this.speed, 0.08 + Math.abs(this.tilt.pitch) * 2),
        this.animate(e, t))
    }
    animate(e, t) {
      this.wave = Math.max(0, this.wave - e)
      let n = (e, t, n, r) => {
          if (!e) return
          let i = this.rest.get(e)
          i && e.rotation.set(i.x + t, i.y + n, i.z + r)
        },
        { body: r, head: i, armL: a, armR: o, hat: s, flag: c, lantern: l } = this.parts
      if (this.gil && this.mode === `moored`) {
        let t = this.rig.camera.position,
          n = this.boat
            .worldToLocal(new M(t.x, this.pos.y, t.z))
            .setY(0)
            .normalize(),
          r = Math.atan2(n.x, n.z) + this.faceOffset - this.gil.rotation.y
        for (; r > Math.PI; ) r -= Math.PI * 2
        for (; r < -Math.PI; ) r += Math.PI * 2
        this.gil.rotation.y += r * (1 - Math.exp(-e * 2))
      }
      let u = Math.sin(t * 2.2)
      ;(r && r.scale.set(1 + u * 0.012, 1 - u * 0.012, 1 + u * 0.012),
        n(
          i,
          (this.talk > 0 ? Math.sin(t * 11) * 0.06 : 0) + Math.sin(t * 0.9) * 0.04,
          Math.sin(t * 0.5) * 0.3,
          Math.sin(t * 0.7) * 0.05
        ),
        n(s, 0, 0, Math.sin(t * 1.3) * 0.03))
      let d = Ue(this.wave, 0, 1)
      ;(n(o, 0, 0, -d * 2.1 - d * Math.sin(t * 12) * 0.25),
        n(a, 0, 0, Math.sin(t * 1.6) * 0.04),
        n(c, 0, Math.sin(t * 5.3) * 0.25 + Math.sin(t * 8.1) * 0.1, 0),
        n(
          l,
          -this.tilt.pitch * 1.4 + Math.sin(t * 1.7) * 0.06,
          0,
          -this.tilt.roll * 1.4 + Math.sin(t * 1.3) * 0.05
        ))
    }
    warmup(e) {
      this.mode === `away` && ((this.boat.visible = e), this.boat.position.set(0, e ? -8 : 0, 0))
    }
    restore(e) {
      let t = {}
      if (e && typeof e == `object`) {
        ;((t.met = e.met === !0),
          typeof e.due == `number` && Number.isFinite(e.due) && (t.due = e.due),
          typeof e.next == `number` && Number.isFinite(e.next) && (t.next = e.next))
        let n = e.request
        if (n && Array.isArray(n.want) && typeof n.reward == `number`) {
          let e = n.want.filter(
            (e) =>
              Array.isArray(e) && Fr(e[0]) && typeof e[1] == `boolean` && typeof e[2] == `number`
          )
          e.length && (t.request = { want: e, reward: n.reward, done: n.done === !0 })
        }
        e.here &&
          !e.sold &&
          ((t.here = !0),
          (this.mode = `moored`),
          (this.t = 61),
          this.pos.copy(this.anchor),
          (this.boat.visible = !0))
      }
      this.data = t
    }
    toJSON() {
      let e = this.data
      return {
        ...(e.met ? { met: !0 } : {}),
        ...(e.due === void 0 ? {} : { due: Math.round(e.due * 1e3) / 1e3 }),
        ...(e.next ? { next: e.next } : {}),
        ...(this.mode === `moored` || this.mode === `arriving` ? { here: !0 } : {}),
        ...(e.sold ? { sold: !0 } : {}),
        ...(e.request ? { request: e.request } : {}),
      }
    }
  }
function Bi(e, t, n) {
  let r = t - e
  for (; r > Math.PI; ) r -= Math.PI * 2
  for (; r < -Math.PI; ) r += Math.PI * 2
  return e + r * n
}
export {
  Nn as C,
  Gn as S,
  X as T,
  jr as _,
  pi as a,
  er as b,
  Zr as c,
  Br as d,
  Nr as f,
  Fr as g,
  Ir as h,
  yi as i,
  Vr as l,
  Pr as m,
  Ei as n,
  di as o,
  Lr as p,
  wi as r,
  ri as s,
  zi as t,
  zr as u,
  lr as v,
  Y as w,
  Yn as x,
  ir as y,
  Hi as SeatPlacer,
  Ui as LanternPlacer,
  Wi as PlanterPlacer,
  Gi as CrabTrapPlacer,
}
