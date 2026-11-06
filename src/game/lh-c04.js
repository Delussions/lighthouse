import {
  $ as e,
  B as t,
  Bn as n,
  C as r,
  Ct as i,
  Dt as a,
  F as o,
  Fn as s,
  Ft as c,
  H as l,
  It as u,
  M as d,
  N as f,
  O as p,
  On as m,
  P as h,
  Q as g,
  R as _,
  Rn as v,
  Rt as y,
  Tt as b,
  Vt as x,
  W as S,
  Yt as C,
  Z as w,
  b as T,
  it as E,
  k as D,
  kt as O,
  nt as k,
  s as A,
  ut as j,
  xt as M,
  z as N,
} from './lh-c00.js'
import {
  Cn as P,
  Gn as ee,
  Pn as te,
  Xn as ne,
  Yn as F,
  er as re,
  jn as ie,
  nr as ae,
  qn as oe,
} from './lh-c01.js'
import { x as se } from './lh-c02.js'
import {
  _ as ce,
  b as le,
  d as I,
  f as ue,
  g as de,
  h as fe,
  l as L,
  n as R,
  u as pe,
  v as z,
  x as me,
  y as he,
} from './lh-c03.js'
var ge = (() => {
    let e = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
      t = new Float32Array([0, 0, 2, 0, 0, 2]),
      n = new d()
    return (n.setAttribute(`position`, new h(e, 3)), n.setAttribute(`uv`, new h(t, 2)), n)
  })(),
  B = class n {
    static get fullscreenGeometry() {
      return ge
    }
    constructor(e = `Pass`, n = new t(), r = new ie()) {
      ;((this.name = e),
        (this.renderer = null),
        (this.scene = n),
        (this.camera = r),
        (this.screen = null),
        (this.rtt = !0),
        (this.needsSwap = !0),
        (this.needsDepthBlit = !1),
        (this.needsDepthTexture = !1),
        (this.enabled = !0))
    }
    get renderToScreen() {
      return !this.rtt
    }
    set renderToScreen(e) {
      if (this.rtt === e) {
        let t = this.fullscreenMaterial
        ;(t !== null && (t.needsUpdate = !0), (this.rtt = !e))
      }
    }
    set mainScene(e) {}
    set mainCamera(e) {}
    setRenderer(e) {
      this.renderer = e
    }
    isEnabled() {
      return this.enabled
    }
    setEnabled(e) {
      this.enabled = e
    }
    get fullscreenMaterial() {
      return this.screen === null ? null : this.screen.material
    }
    set fullscreenMaterial(e) {
      let i = this.screen
      i === null
        ? ((i = new r(n.fullscreenGeometry, e)),
          (i.frustumCulled = !1),
          this.scene === null && (this.scene = new t()),
          this.scene.add(i),
          (this.screen = i))
        : (i.material = e)
    }
    getFullscreenMaterial() {
      return this.fullscreenMaterial
    }
    setFullscreenMaterial(e) {
      this.fullscreenMaterial = e
    }
    getDepthTexture() {
      return null
    }
    setDepthTexture(e, t = M) {}
    render(e, t, n, r, i) {
      throw Error(`Render method not implemented!`)
    }
    setSize(e, t) {}
    initialize(e, t, n) {}
    dispose() {
      for (let t of Object.keys(this)) {
        let r = this[t]
        ;(r instanceof w || r instanceof p || r instanceof e || r instanceof n) && this[t].dispose()
      }
      this.fullscreenMaterial !== null && this.fullscreenMaterial.dispose()
    }
  },
  _e = class extends B {
    constructor() {
      ;(super(`ClearMaskPass`, null, null), (this.needsSwap = !1))
    }
    render(e, t, n, r, i) {
      let a = e.state.buffers.stencil
      ;(a.setLocked(!1), a.setTest(!1))
    }
  },
  ve = `#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,
  ye = `varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}`,
  be = class extends F {
    constructor() {
      ;(super({
        name: `CopyMaterial`,
        defines: { COLOR_SPACE_CONVERSION: `1`, DEPTH_PACKING: `0`, COLOR_WRITE: `1` },
        uniforms: {
          inputBuffer: new P(null),
          depthBuffer: new P(null),
          channelWeights: new P(null),
          opacity: new P(1),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: ve,
        vertexShader: ye,
      }),
        (this.depthFunc = 1))
    }
    get inputBuffer() {
      return this.uniforms.inputBuffer.value
    }
    set inputBuffer(e) {
      let t = e !== null
      ;(this.colorWrite !== t &&
        (t ? (this.defines.COLOR_WRITE = !0) : delete this.defines.COLOR_WRITE,
        (this.colorWrite = t),
        (this.needsUpdate = !0)),
        (this.uniforms.inputBuffer.value = e))
    }
    get depthBuffer() {
      return this.uniforms.depthBuffer.value
    }
    set depthBuffer(e) {
      let t = e !== null
      ;(this.depthWrite !== t &&
        (t ? (this.defines.DEPTH_WRITE = !0) : delete this.defines.DEPTH_WRITE,
        (this.depthTest = t),
        (this.depthWrite = t),
        (this.needsUpdate = !0)),
        (this.uniforms.depthBuffer.value = e))
    }
    set depthPacking(e) {
      ;((this.defines.DEPTH_PACKING = e.toFixed(0)), (this.needsUpdate = !0))
    }
    get colorSpaceConversion() {
      return this.defines.COLOR_SPACE_CONVERSION !== void 0
    }
    set colorSpaceConversion(e) {
      this.colorSpaceConversion !== e &&
        (e
          ? (this.defines.COLOR_SPACE_CONVERSION = !0)
          : delete this.defines.COLOR_SPACE_CONVERSION,
        (this.needsUpdate = !0))
    }
    get channelWeights() {
      return this.uniforms.channelWeights.value
    }
    set channelWeights(e) {
      ;(e === null
        ? delete this.defines.USE_WEIGHTS
        : ((this.defines.USE_WEIGHTS = `1`), (this.uniforms.channelWeights.value = e)),
        (this.needsUpdate = !0))
    }
    setInputBuffer(e) {
      this.uniforms.inputBuffer.value = e
    }
    getOpacity(e) {
      return this.uniforms.opacity.value
    }
    setOpacity(e) {
      this.uniforms.opacity.value = e
    }
  },
  xe = class extends B {
    constructor(e, t = !0) {
      ;(super(`CopyPass`),
        (this.fullscreenMaterial = new be()),
        (this.needsSwap = !1),
        (this.renderTarget = e),
        e === void 0 &&
          ((this.renderTarget = new w(1, 1, {
            minFilter: c,
            magFilter: c,
            stencilBuffer: !1,
            depthBuffer: !1,
          })),
          (this.renderTarget.texture.name = `CopyPass.Target`)),
        (this.autoResize = t))
    }
    get resize() {
      return this.autoResize
    }
    set resize(e) {
      this.autoResize = e
    }
    get texture() {
      return this.renderTarget.texture
    }
    getTexture() {
      return this.renderTarget.texture
    }
    setAutoResizeEnabled(e) {
      this.autoResize = e
    }
    render(e, t, n, r, i) {
      ;((this.fullscreenMaterial.inputBuffer = t.texture),
        e.setRenderTarget(this.renderToScreen ? null : this.renderTarget),
        e.render(this.scene, this.camera))
    }
    setSize(e, t) {
      this.autoResize && this.renderTarget.setSize(e, t)
    }
    initialize(e, t, n) {
      n !== void 0 &&
        ((this.renderTarget.texture.type = n),
        n === 1009
          ? e !== null &&
            e.outputColorSpace === `srgb` &&
            (this.renderTarget.texture.colorSpace = s)
          : (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`))
    }
  },
  Se = new l(),
  Ce = class extends B {
    constructor(e = !0, t = !0, n = !1) {
      ;(super(`ClearPass`, null, null),
        (this.needsSwap = !1),
        (this.color = e),
        (this.depth = t),
        (this.stencil = n),
        (this.overrideClearColor = null),
        (this.overrideClearAlpha = -1))
    }
    setClearFlags(e, t, n) {
      ;((this.color = e), (this.depth = t), (this.stencil = n))
    }
    getOverrideClearColor() {
      return this.overrideClearColor
    }
    setOverrideClearColor(e) {
      this.overrideClearColor = e
    }
    getOverrideClearAlpha() {
      return this.overrideClearAlpha
    }
    setOverrideClearAlpha(e) {
      this.overrideClearAlpha = e
    }
    render(e, t, n, r, i) {
      let a = this.overrideClearColor,
        o = this.overrideClearAlpha,
        s = e.getClearAlpha(),
        c = a !== null,
        l = o >= 0
      ;(c ? (e.getClearColor(Se), e.setClearColor(a, l ? o : s)) : l && e.setClearAlpha(o),
        e.setRenderTarget(this.renderToScreen ? null : t),
        e.clear(this.color, this.depth, this.stencil),
        c ? e.setClearColor(Se, s) : l && e.setClearAlpha(s))
    }
  },
  we = class extends B {
    constructor(e, t) {
      ;(super(`MaskPass`, e, t),
        (this.needsSwap = !1),
        (this.clearPass = new Ce(!1, !1, !0)),
        (this.inverse = !1))
    }
    set mainScene(e) {
      this.scene = e
    }
    set mainCamera(e) {
      this.camera = e
    }
    get inverted() {
      return this.inverse
    }
    set inverted(e) {
      this.inverse = e
    }
    get clear() {
      return this.clearPass.enabled
    }
    set clear(e) {
      this.clearPass.enabled = e
    }
    getClearPass() {
      return this.clearPass
    }
    isInverted() {
      return this.inverted
    }
    setInverted(e) {
      this.inverted = e
    }
    render(e, t, n, r, i) {
      let a = e.getContext(),
        o = e.state.buffers,
        s = this.scene,
        c = this.camera,
        l = this.clearPass,
        u = +!this.inverted,
        d = 1 - u
      ;(o.color.setMask(!1),
        o.depth.setMask(!1),
        o.color.setLocked(!0),
        o.depth.setLocked(!0),
        o.stencil.setTest(!0),
        o.stencil.setOp(a.REPLACE, a.REPLACE, a.REPLACE),
        o.stencil.setFunc(a.ALWAYS, u, 4294967295),
        o.stencil.setClear(d),
        o.stencil.setLocked(!0),
        this.clearPass.enabled &&
          (this.renderToScreen ? l.render(e, null) : (l.render(e, t), l.render(e, n))),
        this.renderToScreen
          ? (e.setRenderTarget(null), e.render(s, c))
          : (e.setRenderTarget(t), e.render(s, c), e.setRenderTarget(n), e.render(s, c)),
        o.color.setLocked(!1),
        o.depth.setLocked(!1),
        o.stencil.setLocked(!1),
        o.stencil.setFunc(a.EQUAL, 1, 4294967295),
        o.stencil.setOp(a.KEEP, a.KEEP, a.KEEP),
        o.stencil.setLocked(!0))
    }
  }
function Te(e, t) {
  let n = e.getContext()
  if (t <= 0 || typeof n.renderbufferStorageMultisample != `function`) return 0
  let r = n.getParameter(n.MAX_SAMPLES),
    i = Math.min(t, r)
  if (i <= 0) return 0
  let a = n.getParameter(n.RENDERBUFFER_BINDING),
    o = n.createRenderbuffer()
  try {
    return (
      n.bindRenderbuffer(n.RENDERBUFFER, o),
      n.renderbufferStorageMultisample(n.RENDERBUFFER, i, n.RGBA8, 1, 1),
      i
    )
  } catch {
    return 0
  } finally {
    ;(n.bindRenderbuffer(n.RENDERBUFFER, a), n.deleteRenderbuffer(o))
  }
}
var Ee = 1 / 1e3,
  De = 1e3,
  Oe = class {
    constructor() {
      ;((this.startTime = performance.now()),
        (this.previousTime = 0),
        (this.currentTime = 0),
        (this._delta = 0),
        (this._elapsed = 0),
        (this._fixedDelta = 1e3 / 60),
        (this.timescale = 1),
        (this.useFixedDelta = !1),
        (this._autoReset = !1))
    }
    get autoReset() {
      return this._autoReset
    }
    set autoReset(e) {
      typeof document < `u` &&
        document.hidden !== void 0 &&
        (e
          ? document.addEventListener(`visibilitychange`, this)
          : document.removeEventListener(`visibilitychange`, this),
        (this._autoReset = e))
    }
    get delta() {
      return this._delta * Ee
    }
    get fixedDelta() {
      return this._fixedDelta * Ee
    }
    set fixedDelta(e) {
      this._fixedDelta = e * De
    }
    get elapsed() {
      return this._elapsed * Ee
    }
    update(e) {
      ;(this.useFixedDelta
        ? (this._delta = this.fixedDelta)
        : ((this.previousTime = this.currentTime),
          (this.currentTime = (e === void 0 ? performance.now() : e) - this.startTime),
          (this._delta = this.currentTime - this.previousTime)),
        (this._delta *= this.timescale),
        (this._elapsed += this._delta))
    }
    reset() {
      ;((this._delta = 0),
        (this._elapsed = 0),
        (this.currentTime = performance.now() - this.startTime))
    }
    getDelta() {
      return this.delta
    }
    getElapsed() {
      return this.elapsed
    }
    handleEvent(e) {
      document.hidden || (this.currentTime = performance.now() - this.startTime)
    }
    dispose() {
      this.autoReset = !1
    }
  },
  ke = class {
    constructor(
      e = null,
      {
        depthBuffer: t = !0,
        stencilBuffer: n = !1,
        multisampling: r = 0,
        frameBufferType: i = v,
      } = {}
    ) {
      ;((this.renderer = null),
        (this.inputBuffer = this.createBuffer(t, n, i, r)),
        (this.outputBuffer = this.inputBuffer.clone()),
        (this.copyPass = new xe()),
        (this.depthRenderTarget = null),
        (this.passes = []),
        (this.timer = new Oe()),
        (this.autoRenderToScreen = !0),
        this.setRenderer(e))
    }
    get stableDepthTexture() {
      return this.depthRenderTarget === null ? null : this.depthRenderTarget.depthTexture
    }
    get multisampling() {
      return this.inputBuffer.samples
    }
    set multisampling(e) {
      let t = this.renderer === null ? e : Te(this.renderer, e)
      this.multisampling !== t &&
        ((this.inputBuffer.samples = t),
        (this.outputBuffer.samples = t),
        this.inputBuffer.dispose(),
        this.outputBuffer.dispose())
    }
    getTimer() {
      return this.timer
    }
    getRenderer() {
      return this.renderer
    }
    setRenderer(e) {
      if (((this.renderer = e), e !== null)) {
        let t = e.getSize(new E()),
          n = e.getContext().getContextAttributes().alpha,
          r = this.inputBuffer.texture.type
        r === 1009 &&
          e.outputColorSpace === `srgb` &&
          ((this.inputBuffer.texture.colorSpace = s),
          (this.outputBuffer.texture.colorSpace = s),
          this.inputBuffer.dispose(),
          this.outputBuffer.dispose())
        let i = this.multisampling
        ;((this.multisampling = i), (e.autoClear = !1), this.setSize(t.width, t.height))
        for (let t of this.passes) t.initialize(e, n, r)
      }
    }
    replaceRenderer(e, t = !0) {
      let n = this.renderer,
        r = n.domElement.parentNode
      return (
        this.setRenderer(e),
        t && r !== null && (r.removeChild(n.domElement), r.appendChild(e.domElement)),
        n
      )
    }
    createDepthTexture() {
      let e = new A()
      ;((e.name = `EffectComposer.InputDepth`),
        this.inputBuffer.stencilBuffer ? ((e.format = b), (e.type = n)) : (e.type = a))
      let t = new A()
      ;((t.format = e.format), (t.type = e.type), (t.name = `EffectComposer.OutputDepth`))
      let r = new A()
      ;((r.format = e.format),
        (r.type = e.type),
        (r.name = `EffectComposer.StableDepth`),
        (this.inputBuffer.depthTexture = e),
        (this.outputBuffer.depthTexture = t),
        this.inputBuffer.dispose(),
        this.outputBuffer.dispose())
      let { width: i, height: o } = this.inputBuffer
      this.depthRenderTarget = new w(i, o, {
        depthBuffer: !0,
        stencilBuffer: this.inputBuffer.stencilBuffer,
        depthTexture: r,
      })
    }
    blitDepthBuffer(e) {
      let t = this.renderer,
        n = this.depthRenderTarget,
        r = t.properties,
        i = t.getContext()
      t.setRenderTarget(n)
      let a = r.get(e).__webglFramebuffer,
        o = r.get(n).__webglFramebuffer,
        s = e.stencilBuffer ? i.DEPTH_BUFFER_BIT | i.STENCIL_BUFFER_BIT : i.DEPTH_BUFFER_BIT
      ;(i.bindFramebuffer(i.READ_FRAMEBUFFER, a),
        i.bindFramebuffer(i.DRAW_FRAMEBUFFER, o),
        i.blitFramebuffer(0, 0, e.width, e.height, 0, 0, n.width, n.height, s, i.NEAREST),
        i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
        i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
        t.setRenderTarget(null))
    }
    deleteDepthTexture() {
      let e = this.stableDepthTexture
      for (let t of this.passes) t.getDepthTexture() === e && t.setDepthTexture(null)
      ;(this.depthRenderTarget !== null &&
        (this.depthRenderTarget.dispose(), (this.depthRenderTarget = null)),
        this.inputBuffer.depthTexture !== null &&
          (this.inputBuffer.depthTexture.dispose(), (this.inputBuffer.depthTexture = null)),
        this.outputBuffer.depthTexture !== null &&
          (this.outputBuffer.depthTexture.dispose(), (this.outputBuffer.depthTexture = null)))
    }
    createBuffer(e, t, n, r) {
      let i = this.renderer,
        a = i === null ? new E() : i.getDrawingBufferSize(new E()),
        o = new w(a.width, a.height, {
          minFilter: c,
          magFilter: c,
          samples: r,
          stencilBuffer: t,
          depthBuffer: e,
          type: n,
        })
      return (
        n === 1009 && i !== null && i.outputColorSpace === `srgb` && (o.texture.colorSpace = s),
        (o.texture.name = `EffectComposer.Buffer`),
        (o.texture.generateMipmaps = !1),
        o
      )
    }
    setMainScene(e) {
      for (let t of this.passes) t.mainScene = e
    }
    setMainCamera(e) {
      for (let t of this.passes) t.mainCamera = e
    }
    addPass(e, t) {
      let n = this.passes,
        r = this.renderer,
        i = r.getDrawingBufferSize(new E()),
        a = r.getContext().getContextAttributes().alpha,
        o = this.inputBuffer.texture.type
      if (
        ((e.renderer = r),
        e.setSize(i.width, i.height),
        e.initialize(r, a, o),
        this.autoRenderToScreen &&
          (n.length > 0 && (n[n.length - 1].renderToScreen = !1),
          e.renderToScreen && (this.autoRenderToScreen = !1)),
        t === void 0 ? n.push(e) : n.splice(t, 0, e),
        this.autoRenderToScreen && (n[n.length - 1].renderToScreen = !0),
        e.needsDepthTexture || this.depthRenderTarget !== null)
      ) {
        if (this.depthRenderTarget === null) {
          this.createDepthTexture()
          for (let e of n) e.setDepthTexture(this.stableDepthTexture)
        } else e.setDepthTexture(this.stableDepthTexture)
      }
    }
    removePass(e) {
      let t = this.passes,
        n = t.indexOf(e)
      if (n !== -1 && t.splice(n, 1).length > 0) {
        let r = this.stableDepthTexture
        ;(r !== null &&
          (t.reduce((e, t) => e || t.needsDepthTexture, !1) ||
            (e.getDepthTexture() === r && e.setDepthTexture(null), this.deleteDepthTexture())),
          this.autoRenderToScreen &&
            n === t.length &&
            ((e.renderToScreen = !1), t.length > 0 && (t[t.length - 1].renderToScreen = !0)))
      }
    }
    removeAllPasses() {
      let e = this.passes
      ;(this.deleteDepthTexture(),
        e.length > 0 &&
          (this.autoRenderToScreen && (e[e.length - 1].renderToScreen = !1), (this.passes = [])))
    }
    render(e) {
      let t = this.renderer,
        n = this.copyPass,
        r = this.inputBuffer,
        i = this.outputBuffer,
        a,
        o = !1
      e === void 0 && (this.timer.update(), (e = this.timer.getDelta()))
      for (let s of this.passes)
        if (s.enabled) {
          if (
            (s.render(t, r, i, e, o),
            s.needsDepthBlit && this.depthRenderTarget !== null && this.blitDepthBuffer(r),
            s.needsSwap)
          ) {
            if (o) {
              n.renderToScreen = s.renderToScreen
              let a = t.getContext(),
                c = t.state.buffers.stencil
              ;(c.setFunc(a.NOTEQUAL, 1, 4294967295),
                n.render(t, r, i, e, o),
                c.setFunc(a.EQUAL, 1, 4294967295))
            }
            ;((a = r), (r = i), (i = a))
          }
          s instanceof we ? (o = !0) : s instanceof _e && (o = !1)
        }
    }
    setSize(e, t, n) {
      let r = this.renderer,
        i = r.getSize(new E())
      ;((e === void 0 || t === void 0) && ((e = i.width), (t = i.height)),
        (i.width !== e || i.height !== t) && r.setSize(e, t, n))
      let a = r.getDrawingBufferSize(new E())
      ;(this.inputBuffer.setSize(a.width, a.height),
        this.outputBuffer.setSize(a.width, a.height),
        this.depthRenderTarget !== null && this.depthRenderTarget.setSize(a.width, a.height))
      for (let e of this.passes) e.setSize(a.width, a.height)
    }
    reset() {
      ;(this.dispose(), (this.autoRenderToScreen = !0))
    }
    dispose() {
      for (let e of this.passes) e.dispose()
      ;(this.deleteDepthTexture(),
        this.inputBuffer.dispose(),
        this.outputBuffer.dispose(),
        this.copyPass.dispose(),
        this.timer.dispose(),
        (this.passes = []),
        B.fullscreenGeometry.dispose())
    }
  },
  V = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 },
  H = {
    FRAGMENT_HEAD: `FRAGMENT_HEAD`,
    FRAGMENT_MAIN_UV: `FRAGMENT_MAIN_UV`,
    FRAGMENT_MAIN_IMAGE: `FRAGMENT_MAIN_IMAGE`,
    VERTEX_HEAD: `VERTEX_HEAD`,
    VERTEX_MAIN_SUPPORT: `VERTEX_MAIN_SUPPORT`,
  },
  Ae = class {
    constructor() {
      ;((this.shaderParts = new Map([
        [H.FRAGMENT_HEAD, null],
        [H.FRAGMENT_MAIN_UV, null],
        [H.FRAGMENT_MAIN_IMAGE, null],
        [H.VERTEX_HEAD, null],
        [H.VERTEX_MAIN_SUPPORT, null],
      ])),
        (this.defines = new Map()),
        (this.uniforms = new Map()),
        (this.blendModes = new Map()),
        (this.extensions = new Set()),
        (this.attributes = V.NONE),
        (this.varyings = new Set()),
        (this.uvTransformation = !1),
        (this.readDepth = !1),
        (this.colorSpace = y))
    }
  },
  je = !1,
  Me = class {
    constructor(e = null) {
      ;((this.originalMaterials = new Map()),
        (this.material = null),
        (this.materials = null),
        (this.materialsBackSide = null),
        (this.materialsDoubleSide = null),
        (this.materialsFlatShaded = null),
        (this.materialsFlatShadedBackSide = null),
        (this.materialsFlatShadedDoubleSide = null),
        this.setMaterial(e),
        (this.meshCount = 0),
        (this.replaceMaterial = (e) => {
          if (e.isMesh) {
            let t
            if (e.material.flatShading)
              switch (e.material.side) {
                case 2:
                  t = this.materialsFlatShadedDoubleSide
                  break
                case 1:
                  t = this.materialsFlatShadedBackSide
                  break
                default:
                  t = this.materialsFlatShaded
              }
            else
              switch (e.material.side) {
                case 2:
                  t = this.materialsDoubleSide
                  break
                case 1:
                  t = this.materialsBackSide
                  break
                default:
                  t = this.materials
              }
            ;(this.originalMaterials.set(e, e.material),
              (e.material = e.isSkinnedMesh ? t[2] : e.isInstancedMesh ? t[1] : t[0]),
              ++this.meshCount)
          }
        }))
    }
    cloneMaterial(e) {
      if (!(e instanceof F)) return e.clone()
      let t = e.uniforms,
        n = new Map()
      for (let e in t) {
        let r = t[e].value
        r.isRenderTargetTexture && ((t[e].value = null), n.set(e, r))
      }
      let r = e.clone()
      for (let e of n) ((t[e[0]].value = e[1]), (r.uniforms[e[0]].value = e[1]))
      return r
    }
    setMaterial(e) {
      if ((this.disposeMaterials(), (this.material = e), e !== null)) {
        let t = (this.materials = [
          this.cloneMaterial(e),
          this.cloneMaterial(e),
          this.cloneMaterial(e),
        ])
        for (let n of t) ((n.uniforms = Object.assign({}, e.uniforms)), (n.side = 0))
        ;((t[2].skinning = !0),
          (this.materialsBackSide = t.map((t) => {
            let n = this.cloneMaterial(t)
            return ((n.uniforms = Object.assign({}, e.uniforms)), (n.side = 1), n)
          })),
          (this.materialsDoubleSide = t.map((t) => {
            let n = this.cloneMaterial(t)
            return ((n.uniforms = Object.assign({}, e.uniforms)), (n.side = 2), n)
          })),
          (this.materialsFlatShaded = t.map((t) => {
            let n = this.cloneMaterial(t)
            return ((n.uniforms = Object.assign({}, e.uniforms)), (n.flatShading = !0), n)
          })),
          (this.materialsFlatShadedBackSide = t.map((t) => {
            let n = this.cloneMaterial(t)
            return (
              (n.uniforms = Object.assign({}, e.uniforms)),
              (n.flatShading = !0),
              (n.side = 1),
              n
            )
          })),
          (this.materialsFlatShadedDoubleSide = t.map((t) => {
            let n = this.cloneMaterial(t)
            return (
              (n.uniforms = Object.assign({}, e.uniforms)),
              (n.flatShading = !0),
              (n.side = 2),
              n
            )
          })))
      }
    }
    render(e, t, n) {
      let r = e.shadowMap.enabled
      if (((e.shadowMap.enabled = !1), je)) {
        let r = this.originalMaterials
        ;((this.meshCount = 0), t.traverse(this.replaceMaterial), e.render(t, n))
        for (let e of r) e[0].material = e[1]
        this.meshCount !== r.size && r.clear()
      } else {
        let r = t.overrideMaterial
        ;((t.overrideMaterial = this.material), e.render(t, n), (t.overrideMaterial = r))
      }
      e.shadowMap.enabled = r
    }
    disposeMaterials() {
      if (this.material !== null) {
        let e = this.materials
          .concat(this.materialsBackSide)
          .concat(this.materialsDoubleSide)
          .concat(this.materialsFlatShaded)
          .concat(this.materialsFlatShadedBackSide)
          .concat(this.materialsFlatShadedDoubleSide)
        for (let t of e) t.dispose()
      }
    }
    dispose() {
      ;(this.originalMaterials.clear(), this.disposeMaterials())
    }
    static get workaroundEnabled() {
      return je
    }
    static set workaroundEnabled(e) {
      je = e
    }
  },
  U = -1,
  W = class extends j {
    constructor(e = null, t = U, n = U, r = 1) {
      ;(super(),
        e !== null &&
          this.addEventListener(`change`, () =>
            e.setSize(this.baseSize.width, this.baseSize.height)
          ),
        (this.baseSize = new E(1, 1)),
        (this.preferredSize = new E(t, n)),
        (this.target = this.preferredSize),
        (this.s = r),
        (this.effectiveSize = new E()),
        this.addEventListener(`change`, () => this.updateEffectiveSize()),
        this.updateEffectiveSize())
    }
    updateEffectiveSize() {
      let e = this.baseSize,
        t = this.preferredSize,
        n = this.effectiveSize,
        r = this.scale
      ;((n.width =
        t.width === U
          ? t.height === U
            ? Math.round(e.width * r)
            : Math.round(t.height * (e.width / Math.max(e.height, 1)))
          : t.width),
        (n.height =
          t.height === U
            ? t.width === U
              ? Math.round(e.height * r)
              : Math.round(t.width / Math.max(e.width / Math.max(e.height, 1), 1))
            : t.height))
    }
    get width() {
      return this.effectiveSize.width
    }
    set width(e) {
      this.preferredWidth = e
    }
    get height() {
      return this.effectiveSize.height
    }
    set height(e) {
      this.preferredHeight = e
    }
    getWidth() {
      return this.width
    }
    getHeight() {
      return this.height
    }
    get scale() {
      return this.s
    }
    set scale(e) {
      this.s !== e &&
        ((this.s = e), this.preferredSize.setScalar(U), this.dispatchEvent({ type: `change` }))
    }
    getScale() {
      return this.scale
    }
    setScale(e) {
      this.scale = e
    }
    get baseWidth() {
      return this.baseSize.width
    }
    set baseWidth(e) {
      this.baseSize.width !== e &&
        ((this.baseSize.width = e), this.dispatchEvent({ type: `change` }))
    }
    getBaseWidth() {
      return this.baseWidth
    }
    setBaseWidth(e) {
      this.baseWidth = e
    }
    get baseHeight() {
      return this.baseSize.height
    }
    set baseHeight(e) {
      this.baseSize.height !== e &&
        ((this.baseSize.height = e), this.dispatchEvent({ type: `change` }))
    }
    getBaseHeight() {
      return this.baseHeight
    }
    setBaseHeight(e) {
      this.baseHeight = e
    }
    setBaseSize(e, t) {
      ;(this.baseSize.width !== e || this.baseSize.height !== t) &&
        (this.baseSize.set(e, t), this.dispatchEvent({ type: `change` }))
    }
    get preferredWidth() {
      return this.preferredSize.width
    }
    set preferredWidth(e) {
      this.preferredSize.width !== e &&
        ((this.preferredSize.width = e), this.dispatchEvent({ type: `change` }))
    }
    getPreferredWidth() {
      return this.preferredWidth
    }
    setPreferredWidth(e) {
      this.preferredWidth = e
    }
    get preferredHeight() {
      return this.preferredSize.height
    }
    set preferredHeight(e) {
      this.preferredSize.height !== e &&
        ((this.preferredSize.height = e), this.dispatchEvent({ type: `change` }))
    }
    getPreferredHeight() {
      return this.preferredHeight
    }
    setPreferredHeight(e) {
      this.preferredHeight = e
    }
    setPreferredSize(e, t) {
      ;(this.preferredSize.width !== e || this.preferredSize.height !== t) &&
        (this.preferredSize.set(e, t), this.dispatchEvent({ type: `change` }))
    }
    copy(e) {
      ;((this.s = e.scale),
        this.baseSize.set(e.baseWidth, e.baseHeight),
        this.preferredSize.set(e.preferredWidth, e.preferredHeight),
        this.dispatchEvent({ type: `change` }))
    }
    static get AUTO_SIZE() {
      return U
    }
  },
  G = {
    SKIP: 9,
    SET: 30,
    ADD: 0,
    ALPHA: 1,
    AVERAGE: 2,
    COLOR: 3,
    COLOR_BURN: 4,
    COLOR_DODGE: 5,
    DARKEN: 6,
    DIFFERENCE: 7,
    DIVIDE: 8,
    DST: 9,
    EXCLUSION: 10,
    HARD_LIGHT: 11,
    HARD_MIX: 12,
    HUE: 13,
    INVERT: 14,
    INVERT_RGB: 15,
    LIGHTEN: 16,
    LINEAR_BURN: 17,
    LINEAR_DODGE: 18,
    LINEAR_LIGHT: 19,
    LUMINOSITY: 20,
    MULTIPLY: 21,
    NEGATION: 22,
    NORMAL: 23,
    OVERLAY: 24,
    PIN_LIGHT: 25,
    REFLECT: 26,
    SATURATION: 27,
    SCREEN: 28,
    SOFT_LIGHT: 29,
    SRC: 30,
    SUBTRACT: 31,
    VIVID_LIGHT: 32,
  },
  Ne = new Map([
    [
      G.ADD,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.ALPHA,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}`,
    ],
    [
      G.AVERAGE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.COLOR,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.COLOR_BURN,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.COLOR_DODGE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.DARKEN,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.DIFFERENCE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.DIVIDE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [G.DST, null],
    [
      G.EXCLUSION,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.HARD_LIGHT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.HARD_MIX,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.HUE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.INVERT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.INVERT_RGB,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.LIGHTEN,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.LINEAR_BURN,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.LINEAR_DODGE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.LINEAR_LIGHT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.LUMINOSITY,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.MULTIPLY,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.NEGATION,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.NORMAL,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}`,
    ],
    [
      G.OVERLAY,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.PIN_LIGHT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.REFLECT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.SATURATION,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.SCREEN,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.SOFT_LIGHT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [G.SRC, `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}`],
    [
      G.SUBTRACT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      G.VIVID_LIGHT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
  ]),
  Pe = class extends j {
    constructor(e, t = 1) {
      ;(super(), (this._blendFunction = e), (this.opacity = new P(t)))
    }
    getOpacity() {
      return this.opacity.value
    }
    setOpacity(e) {
      this.opacity.value = e
    }
    get blendFunction() {
      return this._blendFunction
    }
    set blendFunction(e) {
      ;((this._blendFunction = e), this.dispatchEvent({ type: `change` }))
    }
    getBlendFunction() {
      return this.blendFunction
    }
    setBlendFunction(e) {
      this.blendFunction = e
    }
    getShaderCode() {
      return Ne.get(this.blendFunction)
    }
  },
  Fe = class extends j {
    constructor(
      e,
      t,
      {
        attributes: n = V.NONE,
        blendFunction: r = G.NORMAL,
        defines: i = new Map(),
        uniforms: a = new Map(),
        extensions: o = null,
        vertexShader: s = null,
      } = {}
    ) {
      ;(super(),
        (this.name = e),
        (this.renderer = null),
        (this.attributes = n),
        (this.fragmentShader = t),
        (this.vertexShader = s),
        (this.defines = i),
        (this.uniforms = a),
        (this.extensions = o),
        (this.blendMode = new Pe(r)),
        this.blendMode.addEventListener(`change`, (e) => this.setChanged()),
        (this._inputColorSpace = y),
        (this._outputColorSpace = ``))
    }
    get inputColorSpace() {
      return this._inputColorSpace
    }
    set inputColorSpace(e) {
      ;((this._inputColorSpace = e), this.setChanged())
    }
    get outputColorSpace() {
      return this._outputColorSpace
    }
    set outputColorSpace(e) {
      ;((this._outputColorSpace = e), this.setChanged())
    }
    set mainScene(e) {}
    set mainCamera(e) {}
    getName() {
      return this.name
    }
    setRenderer(e) {
      this.renderer = e
    }
    getDefines() {
      return this.defines
    }
    getUniforms() {
      return this.uniforms
    }
    getExtensions() {
      return this.extensions
    }
    getBlendMode() {
      return this.blendMode
    }
    getAttributes() {
      return this.attributes
    }
    setAttributes(e) {
      ;((this.attributes = e), this.setChanged())
    }
    getFragmentShader() {
      return this.fragmentShader
    }
    setFragmentShader(e) {
      ;((this.fragmentShader = e), this.setChanged())
    }
    getVertexShader() {
      return this.vertexShader
    }
    setVertexShader(e) {
      ;((this.vertexShader = e), this.setChanged())
    }
    setChanged() {
      this.dispatchEvent({ type: `change` })
    }
    setDepthTexture(e, t = M) {}
    update(e, t, n) {}
    setSize(e, t) {}
    initialize(e, t, n) {}
    dispose() {
      for (let t of Object.keys(this)) {
        let n = this[t]
        ;(n instanceof w || n instanceof p || n instanceof e || n instanceof B) && this[t].dispose()
      }
    }
  },
  Ie = { VERY_SMALL: 0, SMALL: 1, MEDIUM: 2, LARGE: 3, VERY_LARGE: 4, HUGE: 5 },
  Le = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,
  Re = `uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}`,
  ze = [
    new Float32Array([0, 0]),
    new Float32Array([0, 1, 1]),
    new Float32Array([0, 1, 1, 2]),
    new Float32Array([0, 1, 2, 2, 3]),
    new Float32Array([0, 1, 2, 3, 4, 4, 5]),
    new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10]),
  ],
  Be = class extends F {
    constructor(e = new g()) {
      ;(super({
        name: `KawaseBlurMaterial`,
        uniforms: {
          inputBuffer: new P(null),
          texelSize: new P(new g()),
          scale: new P(1),
          kernel: new P(0),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Le,
        vertexShader: Re,
      }),
        this.setTexelSize(e.x, e.y),
        (this.kernelSize = Ie.MEDIUM))
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e
    }
    setInputBuffer(e) {
      this.inputBuffer = e
    }
    get kernelSequence() {
      return ze[this.kernelSize]
    }
    get scale() {
      return this.uniforms.scale.value
    }
    set scale(e) {
      this.uniforms.scale.value = e
    }
    getScale() {
      return this.uniforms.scale.value
    }
    setScale(e) {
      this.uniforms.scale.value = e
    }
    getKernel() {
      return null
    }
    get kernel() {
      return this.uniforms.kernel.value
    }
    set kernel(e) {
      this.uniforms.kernel.value = e
    }
    setKernel(e) {
      this.kernel = e
    }
    setTexelSize(e, t) {
      this.uniforms.texelSize.value.set(e, t, e * 0.5, t * 0.5)
    }
    setSize(e, t) {
      let n = 1 / e,
        r = 1 / t
      this.uniforms.texelSize.value.set(n, r, n * 0.5, r * 0.5)
    }
  },
  Ve = class extends B {
    constructor({
      kernelSize: e = Ie.MEDIUM,
      resolutionScale: t = 0.5,
      width: n = W.AUTO_SIZE,
      height: r = W.AUTO_SIZE,
      resolutionX: i = n,
      resolutionY: a = r,
    } = {}) {
      ;(super(`KawaseBlurPass`),
        (this.renderTargetA = new w(1, 1, { depthBuffer: !1 })),
        (this.renderTargetA.texture.name = `Blur.Target.A`),
        (this.renderTargetB = this.renderTargetA.clone()),
        (this.renderTargetB.texture.name = `Blur.Target.B`))
      let o = (this.resolution = new W(this, i, a, t))
      ;(o.addEventListener(`change`, (e) => this.setSize(o.baseWidth, o.baseHeight)),
        (this._blurMaterial = new Be()),
        (this._blurMaterial.kernelSize = e),
        (this.copyMaterial = new be()))
    }
    getResolution() {
      return this.resolution
    }
    get blurMaterial() {
      return this._blurMaterial
    }
    set blurMaterial(e) {
      this._blurMaterial = e
    }
    get dithering() {
      return this.copyMaterial.dithering
    }
    set dithering(e) {
      this.copyMaterial.dithering = e
    }
    get kernelSize() {
      return this.blurMaterial.kernelSize
    }
    set kernelSize(e) {
      this.blurMaterial.kernelSize = e
    }
    get width() {
      return this.resolution.width
    }
    set width(e) {
      this.resolution.preferredWidth = e
    }
    get height() {
      return this.resolution.height
    }
    set height(e) {
      this.resolution.preferredHeight = e
    }
    get scale() {
      return this.blurMaterial.scale
    }
    set scale(e) {
      this.blurMaterial.scale = e
    }
    getScale() {
      return this.blurMaterial.scale
    }
    setScale(e) {
      this.blurMaterial.scale = e
    }
    getKernelSize() {
      return this.kernelSize
    }
    setKernelSize(e) {
      this.kernelSize = e
    }
    getResolutionScale() {
      return this.resolution.scale
    }
    setResolutionScale(e) {
      this.resolution.scale = e
    }
    render(e, t, n, r, i) {
      let a = this.scene,
        o = this.camera,
        s = this.renderTargetA,
        c = this.renderTargetB,
        l = this.blurMaterial,
        u = l.kernelSequence,
        d = t
      this.fullscreenMaterial = l
      for (let t = 0, n = u.length; t < n; ++t) {
        let n = t & 1 ? c : s
        ;((l.kernel = u[t]),
          (l.inputBuffer = d.texture),
          e.setRenderTarget(n),
          e.render(a, o),
          (d = n))
      }
      ;((this.fullscreenMaterial = this.copyMaterial),
        (this.copyMaterial.inputBuffer = d.texture),
        e.setRenderTarget(this.renderToScreen ? null : n),
        e.render(a, o))
    }
    setSize(e, t) {
      let n = this.resolution
      n.setBaseSize(e, t)
      let r = n.width,
        i = n.height
      ;(this.renderTargetA.setSize(r, i),
        this.renderTargetB.setSize(r, i),
        this.blurMaterial.setSize(e, t))
    }
    initialize(e, t, n) {
      n !== void 0 &&
        ((this.renderTargetA.texture.type = n),
        (this.renderTargetB.texture.type = n),
        n === 1009
          ? e !== null &&
            e.outputColorSpace === `srgb` &&
            ((this.renderTargetA.texture.colorSpace = s),
            (this.renderTargetB.texture.colorSpace = s))
          : ((this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`),
            (this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`)))
    }
    static get AUTO_SIZE() {
      return W.AUTO_SIZE
    }
  },
  He = `#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,
  Ue = class extends F {
    constructor(e = !1, t = null) {
      ;(super({
        name: `LuminanceMaterial`,
        defines: { THREE_REVISION: `186`.replace(/\D+/g, ``) },
        uniforms: {
          inputBuffer: new P(null),
          threshold: new P(0),
          smoothing: new P(1),
          range: new P(null),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: He,
        vertexShader: ye,
      }),
        (this.colorOutput = e),
        (this.luminanceRange = t))
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e
    }
    setInputBuffer(e) {
      this.uniforms.inputBuffer.value = e
    }
    get threshold() {
      return this.uniforms.threshold.value
    }
    set threshold(e) {
      ;(this.smoothing > 0 || e > 0
        ? (this.defines.THRESHOLD = `1`)
        : delete this.defines.THRESHOLD,
        (this.uniforms.threshold.value = e))
    }
    getThreshold() {
      return this.threshold
    }
    setThreshold(e) {
      this.threshold = e
    }
    get smoothing() {
      return this.uniforms.smoothing.value
    }
    set smoothing(e) {
      ;(this.threshold > 0 || e > 0
        ? (this.defines.THRESHOLD = `1`)
        : delete this.defines.THRESHOLD,
        (this.uniforms.smoothing.value = e))
    }
    getSmoothingFactor() {
      return this.smoothing
    }
    setSmoothingFactor(e) {
      this.smoothing = e
    }
    get useThreshold() {
      return this.threshold > 0 || this.smoothing > 0
    }
    set useThreshold(e) {}
    get colorOutput() {
      return this.defines.COLOR !== void 0
    }
    set colorOutput(e) {
      ;(e ? (this.defines.COLOR = `1`) : delete this.defines.COLOR, (this.needsUpdate = !0))
    }
    isColorOutputEnabled(e) {
      return this.colorOutput
    }
    setColorOutputEnabled(e) {
      this.colorOutput = e
    }
    get useRange() {
      return this.luminanceRange !== null
    }
    set useRange(e) {
      this.luminanceRange = null
    }
    get luminanceRange() {
      return this.uniforms.range.value
    }
    set luminanceRange(e) {
      ;(e === null ? delete this.defines.RANGE : (this.defines.RANGE = `1`),
        (this.uniforms.range.value = e),
        (this.needsUpdate = !0))
    }
    getLuminanceRange() {
      return this.luminanceRange
    }
    setLuminanceRange(e) {
      this.luminanceRange = e
    }
  },
  We = class extends B {
    constructor({
      renderTarget: e,
      luminanceRange: t,
      colorOutput: n,
      resolutionScale: r = 1,
      width: i = W.AUTO_SIZE,
      height: a = W.AUTO_SIZE,
      resolutionX: o = i,
      resolutionY: s = a,
    } = {}) {
      ;(super(`LuminancePass`),
        (this.fullscreenMaterial = new Ue(n, t)),
        (this.needsSwap = !1),
        (this.renderTarget = e),
        this.renderTarget === void 0 &&
          ((this.renderTarget = new w(1, 1, { depthBuffer: !1 })),
          (this.renderTarget.texture.name = `LuminancePass.Target`)))
      let c = (this.resolution = new W(this, o, s, r))
      c.addEventListener(`change`, (e) => this.setSize(c.baseWidth, c.baseHeight))
    }
    get texture() {
      return this.renderTarget.texture
    }
    getTexture() {
      return this.renderTarget.texture
    }
    getResolution() {
      return this.resolution
    }
    render(e, t, n, r, i) {
      let a = this.fullscreenMaterial
      ;((a.inputBuffer = t.texture),
        e.setRenderTarget(this.renderToScreen ? null : this.renderTarget),
        e.render(this.scene, this.camera))
    }
    setSize(e, t) {
      let n = this.resolution
      ;(n.setBaseSize(e, t), this.renderTarget.setSize(n.width, n.height))
    }
    initialize(e, t, n) {
      n !== void 0 &&
        n !== 1009 &&
        ((this.renderTarget.texture.type = n),
        (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`))
    }
  },
  Ge = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,
  Ke = `uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}`,
  qe = class extends F {
    constructor() {
      super({
        name: `DownsamplingMaterial`,
        uniforms: { inputBuffer: new P(null), texelSize: new P(new E()) },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Ge,
        vertexShader: Ke,
      })
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e
    }
    setSize(e, t) {
      this.uniforms.texelSize.value.set(1 / e, 1 / t)
    }
  },
  Je = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,
  Ye = `uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}`,
  Xe = class extends F {
    constructor() {
      super({
        name: `UpsamplingMaterial`,
        uniforms: {
          inputBuffer: new P(null),
          supportBuffer: new P(null),
          texelSize: new P(new E()),
          radius: new P(0.85),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Je,
        vertexShader: Ye,
      })
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e
    }
    set supportBuffer(e) {
      this.uniforms.supportBuffer.value = e
    }
    get radius() {
      return this.uniforms.radius.value
    }
    set radius(e) {
      this.uniforms.radius.value = e
    }
    setSize(e, t) {
      this.uniforms.texelSize.value.set(1 / e, 1 / t)
    }
  },
  Ze = class extends B {
    constructor() {
      ;(super(`MipmapBlurPass`),
        (this.needsSwap = !1),
        (this.renderTarget = new w(1, 1, { depthBuffer: !1 })),
        (this.renderTarget.texture.name = `Upsampling.Mipmap0`),
        (this.downsamplingMipmaps = []),
        (this.upsamplingMipmaps = []),
        (this.downsamplingMaterial = new qe()),
        (this.upsamplingMaterial = new Xe()),
        (this.resolution = new E()))
    }
    get texture() {
      return this.renderTarget.texture
    }
    get levels() {
      return this.downsamplingMipmaps.length
    }
    set levels(e) {
      if (this.levels !== e) {
        let t = this.renderTarget
        ;(this.dispose(), (this.downsamplingMipmaps = []), (this.upsamplingMipmaps = []))
        for (let n = 0; n < e; ++n) {
          let e = t.clone()
          ;((e.texture.name = `Downsampling.Mipmap` + n), this.downsamplingMipmaps.push(e))
        }
        this.upsamplingMipmaps.push(t)
        for (let n = 1, r = e - 1; n < r; ++n) {
          let e = t.clone()
          ;((e.texture.name = `Upsampling.Mipmap` + n), this.upsamplingMipmaps.push(e))
        }
        this.setSize(this.resolution.x, this.resolution.y)
      }
    }
    get radius() {
      return this.upsamplingMaterial.radius
    }
    set radius(e) {
      this.upsamplingMaterial.radius = e
    }
    render(e, t, n, r, i) {
      let { scene: a, camera: o } = this,
        { downsamplingMaterial: s, upsamplingMaterial: c } = this,
        { downsamplingMipmaps: l, upsamplingMipmaps: u } = this,
        d = t
      this.fullscreenMaterial = s
      for (let t = 0, n = l.length; t < n; ++t) {
        let n = l[t]
        ;(s.setSize(d.width, d.height),
          (s.inputBuffer = d.texture),
          e.setRenderTarget(n),
          e.render(a, o),
          (d = n))
      }
      this.fullscreenMaterial = c
      for (let t = u.length - 1; t >= 0; --t) {
        let n = u[t]
        ;(c.setSize(d.width, d.height),
          (c.inputBuffer = d.texture),
          (c.supportBuffer = l[t].texture),
          e.setRenderTarget(n),
          e.render(a, o),
          (d = n))
      }
    }
    setSize(e, t) {
      let n = this.resolution
      n.set(e, t)
      let r = n.width,
        i = n.height
      for (let e = 0, t = this.downsamplingMipmaps.length; e < t; ++e)
        ((r = Math.round(r * 0.5)),
          (i = Math.round(i * 0.5)),
          this.downsamplingMipmaps[e].setSize(r, i),
          e < this.upsamplingMipmaps.length && this.upsamplingMipmaps[e].setSize(r, i))
    }
    initialize(e, t, n) {
      if (n !== void 0) {
        let t = this.downsamplingMipmaps.concat(this.upsamplingMipmaps)
        for (let e of t) e.texture.type = n
        if (n !== 1009)
          ((this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`),
            (this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`))
        else if (e !== null && e.outputColorSpace === `srgb`)
          for (let e of t) e.texture.colorSpace = s
      }
    }
    dispose() {
      super.dispose()
      for (let e of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) e.dispose()
    }
  },
  Qe = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,
  $e = class extends Fe {
    constructor({
      blendFunction: e = G.SCREEN,
      luminanceThreshold: t = 1,
      luminanceSmoothing: n = 0.03,
      mipmapBlur: r = !0,
      intensity: i = 1,
      radius: a = 0.85,
      levels: o = 8,
      kernelSize: s = Ie.LARGE,
      resolutionScale: c = 0.5,
      width: l = W.AUTO_SIZE,
      height: u = W.AUTO_SIZE,
      resolutionX: d = l,
      resolutionY: f = u,
    } = {}) {
      ;(super(`BloomEffect`, Qe, {
        blendFunction: e,
        uniforms: new Map([
          [`map`, new P(null)],
          [`intensity`, new P(i)],
        ]),
      }),
        (this.renderTarget = new w(1, 1, { depthBuffer: !1 })),
        (this.renderTarget.texture.name = `Bloom.Target`),
        (this.blurPass = new Ve({ kernelSize: s })),
        (this.luminancePass = new We({ colorOutput: !0 })),
        (this.luminanceMaterial.threshold = t),
        (this.luminanceMaterial.smoothing = n),
        (this.mipmapBlurPass = new Ze()),
        (this.mipmapBlurPass.enabled = r),
        (this.mipmapBlurPass.radius = a),
        (this.mipmapBlurPass.levels = o),
        (this.uniforms.get(`map`).value = r
          ? this.mipmapBlurPass.texture
          : this.renderTarget.texture))
      let p = (this.resolution = new W(this, d, f, c))
      p.addEventListener(`change`, (e) => this.setSize(p.baseWidth, p.baseHeight))
    }
    get texture() {
      return this.mipmapBlurPass.enabled ? this.mipmapBlurPass.texture : this.renderTarget.texture
    }
    getTexture() {
      return this.texture
    }
    getResolution() {
      return this.resolution
    }
    getBlurPass() {
      return this.blurPass
    }
    getLuminancePass() {
      return this.luminancePass
    }
    get luminanceMaterial() {
      return this.luminancePass.fullscreenMaterial
    }
    getLuminanceMaterial() {
      return this.luminancePass.fullscreenMaterial
    }
    get width() {
      return this.resolution.width
    }
    set width(e) {
      this.resolution.preferredWidth = e
    }
    get height() {
      return this.resolution.height
    }
    set height(e) {
      this.resolution.preferredHeight = e
    }
    get dithering() {
      return this.blurPass.dithering
    }
    set dithering(e) {
      this.blurPass.dithering = e
    }
    get kernelSize() {
      return this.blurPass.kernelSize
    }
    set kernelSize(e) {
      this.blurPass.kernelSize = e
    }
    get distinction() {
      return (console.warn(this.name, `distinction was removed`), 1)
    }
    set distinction(e) {
      console.warn(this.name, `distinction was removed`)
    }
    get intensity() {
      return this.uniforms.get(`intensity`).value
    }
    set intensity(e) {
      this.uniforms.get(`intensity`).value = e
    }
    getIntensity() {
      return this.intensity
    }
    setIntensity(e) {
      this.intensity = e
    }
    getResolutionScale() {
      return this.resolution.scale
    }
    setResolutionScale(e) {
      this.resolution.scale = e
    }
    update(e, t, n) {
      let r = this.renderTarget,
        i = this.luminancePass
      i.enabled
        ? (i.render(e, t),
          this.mipmapBlurPass.enabled
            ? this.mipmapBlurPass.render(e, i.renderTarget)
            : this.blurPass.render(e, i.renderTarget, r))
        : this.mipmapBlurPass.enabled
          ? this.mipmapBlurPass.render(e, t)
          : this.blurPass.render(e, t, r)
    }
    setSize(e, t) {
      let n = this.resolution
      ;(n.setBaseSize(e, t),
        this.renderTarget.setSize(n.width, n.height),
        this.blurPass.resolution.copy(n),
        this.luminancePass.setSize(e, t),
        this.mipmapBlurPass.setSize(e, t))
    }
    initialize(e, t, n) {
      ;(this.blurPass.initialize(e, t, n),
        this.luminancePass.initialize(e, t, n),
        this.mipmapBlurPass.initialize(e, t, n),
        n !== void 0 &&
          ((this.renderTarget.texture.type = n),
          e !== null &&
            e.outputColorSpace === `srgb` &&
            (this.renderTarget.texture.colorSpace = s)))
    }
  },
  et = class extends B {
    constructor(e, t, n = null) {
      ;(super(`RenderPass`, e, t),
        (this.needsSwap = !1),
        (this.needsDepthBlit = !0),
        (this.clearPass = new Ce()),
        (this.overrideMaterialManager = n === null ? null : new Me(n)),
        (this.ignoreBackground = !1),
        (this.skipShadowMapUpdate = !1),
        (this.selection = null))
    }
    set mainScene(e) {
      this.scene = e
    }
    set mainCamera(e) {
      this.camera = e
    }
    get renderToScreen() {
      return super.renderToScreen
    }
    set renderToScreen(e) {
      ;((super.renderToScreen = e), (this.clearPass.renderToScreen = e))
    }
    get overrideMaterial() {
      let e = this.overrideMaterialManager
      return e === null ? null : e.material
    }
    set overrideMaterial(e) {
      let t = this.overrideMaterialManager
      e === null
        ? t !== null && (t.dispose(), (this.overrideMaterialManager = null))
        : t === null
          ? (this.overrideMaterialManager = new Me(e))
          : t.setMaterial(e)
    }
    getOverrideMaterial() {
      return this.overrideMaterial
    }
    setOverrideMaterial(e) {
      this.overrideMaterial = e
    }
    get clear() {
      return this.clearPass.enabled
    }
    set clear(e) {
      this.clearPass.enabled = e
    }
    getSelection() {
      return this.selection
    }
    setSelection(e) {
      this.selection = e
    }
    isBackgroundDisabled() {
      return this.ignoreBackground
    }
    setBackgroundDisabled(e) {
      this.ignoreBackground = e
    }
    isShadowMapDisabled() {
      return this.skipShadowMapUpdate
    }
    setShadowMapDisabled(e) {
      this.skipShadowMapUpdate = e
    }
    getClearPass() {
      return this.clearPass
    }
    render(e, t, n, r, i) {
      let a = this.scene,
        o = this.camera,
        s = this.selection,
        c = o.layers.mask,
        l = a.background,
        u = e.shadowMap.autoUpdate,
        d = this.renderToScreen ? null : t
      ;(s !== null && o.layers.set(s.getLayer()),
        this.skipShadowMapUpdate && (e.shadowMap.autoUpdate = !1),
        (this.ignoreBackground || this.clearPass.overrideClearColor !== null) &&
          (a.background = null),
        this.clearPass.enabled && this.clearPass.render(e, t),
        e.setRenderTarget(d),
        this.overrideMaterialManager === null
          ? e.render(a, o)
          : this.overrideMaterialManager.render(e, a, o),
        (o.layers.mask = c),
        (a.background = l),
        (e.shadowMap.autoUpdate = u))
    }
  },
  K = {
    LINEAR: 0,
    REINHARD: 1,
    REINHARD2: 2,
    REINHARD2_ADAPTIVE: 3,
    UNCHARTED2: 4,
    OPTIMIZED_CINEON: 5,
    CINEON: 5,
    ACES_FILMIC: 6,
    AGX: 7,
    NEUTRAL: 8,
  },
  tt = { DEFAULT: 0, ESKIL: 1 },
  nt = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform vec4 maskParams;varying vec2 vUv;varying vec2 vUv2;varying vec2 vOffset;float linearGradientMask(const in float x){return smoothstep(maskParams.x,maskParams.y,x)-smoothstep(maskParams.w,maskParams.z,x);}void main(){vec2 dUv=vOffset*(1.0-linearGradientMask(vUv2.y));vec4 sum=texture2D(inputBuffer,vec2(vUv.x-dUv.x,vUv.y+dUv.y));sum+=texture2D(inputBuffer,vec2(vUv.x+dUv.x,vUv.y+dUv.y));sum+=texture2D(inputBuffer,vec2(vUv.x+dUv.x,vUv.y-dUv.y));sum+=texture2D(inputBuffer,vec2(vUv.x-dUv.x,vUv.y-dUv.y));gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,
  rt = `uniform vec4 texelSize;uniform float kernel;uniform float scale;uniform float aspect;uniform vec2 rotation;varying vec2 vUv;varying vec2 vUv2;varying vec2 vOffset;void main(){vec2 uv=position.xy*0.5+0.5;vUv=uv;vUv2=(uv-0.5)*2.0*vec2(aspect,1.0);vUv2=vec2(dot(rotation,vUv2),dot(rotation,vec2(vUv2.y,-vUv2.x)));vOffset=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;gl_Position=vec4(position.xy,1.0,1.0);}`,
  it = class extends Be {
    constructor({
      kernelSize: e = Ie.MEDIUM,
      offset: t = 0,
      rotation: n = 0,
      focusArea: r = 0.4,
      feather: i = 0.3,
    } = {}) {
      ;(super(),
        (this.fragmentShader = nt),
        (this.vertexShader = rt),
        (this.kernelSize = e),
        (this.uniforms.aspect = new P(1)),
        (this.uniforms.rotation = new P(new E())),
        (this.uniforms.maskParams = new P(new g())),
        (this._offset = t),
        (this._focusArea = r),
        (this._feather = i),
        (this.rotation = n),
        this.updateParams())
    }
    updateParams() {
      let e = this.uniforms.maskParams.value,
        t = Math.max(this.focusArea, 0),
        n = Math.max(t - this.feather, 0)
      e.set(this.offset - t, this.offset - n, this.offset + t, this.offset + n)
    }
    get rotation() {
      return Math.acos(this.uniforms.rotation.value.x)
    }
    set rotation(e) {
      this.uniforms.rotation.value.set(Math.cos(e), Math.sin(e))
    }
    get offset() {
      return this._offset
    }
    set offset(e) {
      ;((this._offset = e), this.updateParams())
    }
    get focusArea() {
      return this._focusArea
    }
    set focusArea(e) {
      ;((this._focusArea = e), this.updateParams())
    }
    get feather() {
      return this._feather
    }
    set feather(e) {
      ;((this._feather = e), this.updateParams())
    }
    setSize(e, t) {
      ;(super.setSize(e, t), (this.uniforms.aspect.value = e / t))
    }
  },
  at = class extends Ve {
    constructor({
      offset: e = 0,
      rotation: t = 0,
      focusArea: n = 0.4,
      feather: r = 0.3,
      kernelSize: i = Ie.MEDIUM,
      resolutionScale: a = 0.5,
      resolutionX: o = W.AUTO_SIZE,
      resolutionY: s = W.AUTO_SIZE,
    } = {}) {
      ;(super({ kernelSize: i, resolutionScale: a, resolutionX: o, resolutionY: s }),
        (this.blurMaterial = new it({
          kernelSize: i,
          offset: e,
          rotation: t,
          focusArea: n,
          feather: r,
        })))
    }
  },
  ot = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform vec2 maskParams;varying vec2 vUv2;float linearGradientMask(const in float x){return step(maskParams.x,x)-step(maskParams.y,x);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){float mask=linearGradientMask(vUv2.y);vec4 texel=texture2D(map,uv);outputColor=mix(texel,inputColor,mask);}`,
  st = `uniform vec2 rotation;varying vec2 vUv2;void mainSupport(const in vec2 uv){vUv2=(uv-0.5)*2.0*vec2(aspect,1.0);vUv2=vec2(dot(rotation,vUv2),dot(rotation,vec2(vUv2.y,-vUv2.x)));}`,
  ct = class extends Fe {
    constructor({
      blendFunction: e,
      offset: t = 0,
      rotation: n = 0,
      focusArea: r = 0.4,
      feather: i = 0.3,
      kernelSize: a = Ie.MEDIUM,
      resolutionScale: o = 0.5,
      resolutionX: s = W.AUTO_SIZE,
      resolutionY: c = W.AUTO_SIZE,
    } = {}) {
      ;(super(`TiltShiftEffect`, ot, {
        vertexShader: st,
        blendFunction: e,
        uniforms: new Map([
          [`rotation`, new P(new E())],
          [`maskParams`, new P(new E())],
          [`map`, new P(null)],
        ]),
      }),
        (this._offset = t),
        (this._focusArea = r),
        (this._feather = i),
        (this.renderTarget = new w(1, 1, { depthBuffer: !1 })),
        (this.renderTarget.texture.name = `TiltShift.Target`),
        (this.uniforms.get(`map`).value = this.renderTarget.texture),
        (this.blurPass = new at({
          kernelSize: a,
          resolutionScale: o,
          resolutionX: s,
          resolutionY: c,
          offset: t,
          rotation: n,
          focusArea: r,
          feather: i,
        })))
      let l = (this.resolution = new W(this, s, c, o))
      ;(l.addEventListener(`change`, (e) => this.setSize(l.baseWidth, l.baseHeight)),
        (this.rotation = n),
        this.updateParams())
    }
    updateParams() {
      let e = this.uniforms.get(`maskParams`).value,
        t = Math.max(this.focusArea - this.feather, 0)
      e.set(this.offset - t, this.offset + t)
    }
    get rotation() {
      return Math.acos(this.uniforms.get(`rotation`).value.x)
    }
    set rotation(e) {
      ;(this.uniforms.get(`rotation`).value.set(Math.cos(e), Math.sin(e)),
        (this.blurPass.blurMaterial.rotation = e))
    }
    get offset() {
      return this._offset
    }
    set offset(e) {
      ;((this._offset = e), (this.blurPass.blurMaterial.offset = e), this.updateParams())
    }
    get focusArea() {
      return this._focusArea
    }
    set focusArea(e) {
      ;((this._focusArea = e), (this.blurPass.blurMaterial.focusArea = e), this.updateParams())
    }
    get feather() {
      return this._feather
    }
    set feather(e) {
      ;((this._feather = e), (this.blurPass.blurMaterial.feather = e), this.updateParams())
    }
    get bias() {
      return 0
    }
    set bias(e) {}
    update(e, t, n) {
      this.blurPass.render(e, t, this.renderTarget)
    }
    setSize(e, t) {
      let n = this.resolution
      ;(n.setBaseSize(e, t),
        this.renderTarget.setSize(n.width, n.height),
        this.blurPass.resolution.copy(n))
    }
    initialize(e, t, n) {
      ;(this.blurPass.initialize(e, t, n),
        n !== void 0 &&
          ((this.renderTarget.texture.type = n),
          e !== null &&
            e.outputColorSpace === `srgb` &&
            (this.renderTarget.texture.colorSpace = s)))
    }
  },
  lt = `#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,
  ut = class extends F {
    constructor() {
      super({
        name: `AdaptiveLuminanceMaterial`,
        defines: { MIP_LEVEL_1X1: `0.0` },
        uniforms: {
          luminanceBuffer0: new P(null),
          luminanceBuffer1: new P(null),
          minLuminance: new P(0.01),
          deltaTime: new P(0),
          tau: new P(1),
        },
        extensions: { shaderTextureLOD: !0 },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: lt,
        vertexShader: ye,
      })
    }
    set luminanceBuffer0(e) {
      this.uniforms.luminanceBuffer0.value = e
    }
    setLuminanceBuffer0(e) {
      this.uniforms.luminanceBuffer0.value = e
    }
    set luminanceBuffer1(e) {
      this.uniforms.luminanceBuffer1.value = e
    }
    setLuminanceBuffer1(e) {
      this.uniforms.luminanceBuffer1.value = e
    }
    set mipLevel1x1(e) {
      ;((this.defines.MIP_LEVEL_1X1 = e.toFixed(1)), (this.needsUpdate = !0))
    }
    setMipLevel1x1(e) {
      this.mipLevel1x1 = e
    }
    set deltaTime(e) {
      this.uniforms.deltaTime.value = e
    }
    setDeltaTime(e) {
      this.uniforms.deltaTime.value = e
    }
    get minLuminance() {
      return this.uniforms.minLuminance.value
    }
    set minLuminance(e) {
      this.uniforms.minLuminance.value = e
    }
    getMinLuminance() {
      return this.uniforms.minLuminance.value
    }
    setMinLuminance(e) {
      this.uniforms.minLuminance.value = e
    }
    get adaptationRate() {
      return this.uniforms.tau.value
    }
    set adaptationRate(e) {
      this.uniforms.tau.value = e
    }
    getAdaptationRate() {
      return this.uniforms.tau.value
    }
    setAdaptationRate(e) {
      this.uniforms.tau.value = e
    }
  },
  dt = class extends B {
    constructor(e, { minLuminance: t = 0.01, adaptationRate: n = 1 } = {}) {
      ;(super(`AdaptiveLuminancePass`),
        (this.fullscreenMaterial = new ut()),
        (this.needsSwap = !1),
        (this.renderTargetPrevious = new w(1, 1, { minFilter: x, magFilter: x, depthBuffer: !1 })),
        (this.renderTargetPrevious.texture.name = `Luminance.Previous`))
      let r = this.fullscreenMaterial
      ;((r.luminanceBuffer0 = this.renderTargetPrevious.texture),
        (r.luminanceBuffer1 = e),
        (r.minLuminance = t),
        (r.adaptationRate = n),
        (this.renderTargetAdapted = this.renderTargetPrevious.clone()),
        (this.renderTargetAdapted.texture.name = `Luminance.Adapted`),
        (this.copyPass = new xe(this.renderTargetPrevious, !1)))
    }
    get texture() {
      return this.renderTargetAdapted.texture
    }
    getTexture() {
      return this.renderTargetAdapted.texture
    }
    set mipLevel1x1(e) {
      this.fullscreenMaterial.mipLevel1x1 = e
    }
    get adaptationRate() {
      return this.fullscreenMaterial.adaptationRate
    }
    set adaptationRate(e) {
      this.fullscreenMaterial.adaptationRate = e
    }
    render(e, t, n, r, i) {
      ;((this.fullscreenMaterial.deltaTime = r),
        e.setRenderTarget(this.renderToScreen ? null : this.renderTargetAdapted),
        e.render(this.scene, this.camera),
        this.copyPass.render(e, this.renderTargetAdapted))
    }
  },
  ft = `#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,
  pt = class extends Fe {
    constructor({
      blendFunction: e = G.SRC,
      adaptive: t = !1,
      mode: n = t ? K.REINHARD2_ADAPTIVE : K.AGX,
      resolution: r = 256,
      maxLuminance: i = 4,
      whitePoint: a = i,
      middleGrey: o = 0.6,
      minLuminance: s = 0.01,
      averageLuminance: c = 1,
      adaptationRate: l = 1,
    } = {}) {
      ;(super(`ToneMappingEffect`, ft, {
        blendFunction: e,
        uniforms: new Map([
          [`luminanceBuffer`, new P(null)],
          [`maxLuminance`, new P(i)],
          [`whitePoint`, new P(a)],
          [`middleGrey`, new P(o)],
          [`averageLuminance`, new P(c)],
        ]),
      }),
        (this.renderTargetLuminance = new w(1, 1, { minFilter: u, depthBuffer: !1 })),
        (this.renderTargetLuminance.texture.generateMipmaps = !0),
        (this.renderTargetLuminance.texture.name = `Luminance`),
        (this.luminancePass = new We({ renderTarget: this.renderTargetLuminance })),
        (this.adaptiveLuminancePass = new dt(this.luminancePass.texture, {
          minLuminance: s,
          adaptationRate: l,
        })),
        (this.uniforms.get(`luminanceBuffer`).value = this.adaptiveLuminancePass.texture),
        (this.resolution = r),
        (this.mode = n))
    }
    get mode() {
      return Number(this.defines.get(`TONE_MAPPING_MODE`))
    }
    set mode(e) {
      if (this.mode === e) return
      let t =
        `186`.replace(/\D+/g, ``) >= 168
          ? `CineonToneMapping(texel)`
          : `OptimizedCineonToneMapping(texel)`
      switch ((this.defines.clear(), this.defines.set(`TONE_MAPPING_MODE`, e.toFixed(0)), e)) {
        case K.LINEAR:
          this.defines.set(`toneMapping(texel)`, `LinearToneMapping(texel)`)
          break
        case K.REINHARD:
          this.defines.set(`toneMapping(texel)`, `ReinhardToneMapping(texel)`)
          break
        case K.CINEON:
        case K.OPTIMIZED_CINEON:
          this.defines.set(`toneMapping(texel)`, t)
          break
        case K.ACES_FILMIC:
          this.defines.set(`toneMapping(texel)`, `ACESFilmicToneMapping(texel)`)
          break
        case K.AGX:
          this.defines.set(`toneMapping(texel)`, `AgXToneMapping(texel)`)
          break
        case K.NEUTRAL:
          this.defines.set(`toneMapping(texel)`, `NeutralToneMapping(texel)`)
          break
        default:
          this.defines.set(`toneMapping(texel)`, `texel`)
      }
      ;((this.adaptiveLuminancePass.enabled = e === K.REINHARD2_ADAPTIVE), this.setChanged())
    }
    getMode() {
      return this.mode
    }
    setMode(e) {
      this.mode = e
    }
    get whitePoint() {
      return this.uniforms.get(`whitePoint`).value
    }
    set whitePoint(e) {
      this.uniforms.get(`whitePoint`).value = e
    }
    get middleGrey() {
      return this.uniforms.get(`middleGrey`).value
    }
    set middleGrey(e) {
      this.uniforms.get(`middleGrey`).value = e
    }
    get averageLuminance() {
      return this.uniforms.get(`averageLuminance`).value
    }
    set averageLuminance(e) {
      this.uniforms.get(`averageLuminance`).value = e
    }
    get adaptiveLuminanceMaterial() {
      return this.adaptiveLuminancePass.fullscreenMaterial
    }
    getAdaptiveLuminanceMaterial() {
      return this.adaptiveLuminanceMaterial
    }
    get resolution() {
      return this.luminancePass.resolution.width
    }
    set resolution(e) {
      let t = Math.max(0, Math.ceil(Math.log2(e))),
        n = 2 ** t
      ;(this.luminancePass.resolution.setPreferredSize(n, n),
        (this.adaptiveLuminanceMaterial.mipLevel1x1 = t))
    }
    getResolution() {
      return this.resolution
    }
    setResolution(e) {
      this.resolution = e
    }
    get adaptive() {
      return this.mode === K.REINHARD2_ADAPTIVE
    }
    set adaptive(e) {
      this.mode = e ? K.REINHARD2_ADAPTIVE : K.REINHARD2
    }
    get adaptationRate() {
      return this.adaptiveLuminanceMaterial.adaptationRate
    }
    set adaptationRate(e) {
      this.adaptiveLuminanceMaterial.adaptationRate = e
    }
    get distinction() {
      return (console.warn(this.name, `distinction was removed.`), 1)
    }
    set distinction(e) {
      console.warn(this.name, `distinction was removed.`)
    }
    update(e, t, n) {
      this.adaptiveLuminancePass.enabled &&
        (this.luminancePass.render(e, t), this.adaptiveLuminancePass.render(e, null, null, n))
    }
    initialize(e, t, n) {
      this.adaptiveLuminancePass.initialize(e, t, n)
    }
  },
  mt = `uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,
  ht = class extends Fe {
    constructor({
      blendFunction: e,
      eskil: t = !1,
      technique: n = t ? tt.ESKIL : tt.DEFAULT,
      offset: r = 0.5,
      darkness: i = 0.5,
    } = {}) {
      super(`VignetteEffect`, mt, {
        blendFunction: e,
        defines: new Map([[`VIGNETTE_TECHNIQUE`, n.toFixed(0)]]),
        uniforms: new Map([
          [`offset`, new P(r)],
          [`darkness`, new P(i)],
        ]),
      })
    }
    get technique() {
      return Number(this.defines.get(`VIGNETTE_TECHNIQUE`))
    }
    set technique(e) {
      this.technique !== e &&
        (this.defines.set(`VIGNETTE_TECHNIQUE`, e.toFixed(0)), this.setChanged())
    }
    get eskil() {
      return this.technique === tt.ESKIL
    }
    set eskil(e) {
      this.technique = e ? tt.ESKIL : tt.DEFAULT
    }
    getTechnique() {
      return this.technique
    }
    setTechnique(e) {
      this.technique = e
    }
    get offset() {
      return this.uniforms.get(`offset`).value
    }
    set offset(e) {
      this.uniforms.get(`offset`).value = e
    }
    getOffset() {
      return this.offset
    }
    setOffset(e) {
      this.offset = e
    }
    get darkness() {
      return this.uniforms.get(`darkness`).value
    }
    set darkness(e) {
      this.uniforms.get(`darkness`).value = e
    }
    getDarkness() {
      return this.darkness
    }
    setDarkness(e) {
      this.darkness = e
    }
  },
  gt = `#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,
  _t = `uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}`,
  vt = class extends F {
    constructor(e, t, n, r, i = !1) {
      ;(super({
        name: `EffectMaterial`,
        defines: {
          THREE_REVISION: `186`.replace(/\D+/g, ``),
          DEPTH_PACKING: `0`,
          ENCODE_OUTPUT: `1`,
        },
        uniforms: {
          inputBuffer: new P(null),
          depthBuffer: new P(null),
          resolution: new P(new E()),
          texelSize: new P(new E()),
          cameraNear: new P(0.3),
          cameraFar: new P(1e3),
          aspect: new P(1),
          time: new P(0),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        dithering: i,
      }),
        e && this.setShaderParts(e),
        t && this.setDefines(t),
        n && this.setUniforms(n),
        this.copyCameraSettings(r))
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e
    }
    setInputBuffer(e) {
      this.uniforms.inputBuffer.value = e
    }
    get depthBuffer() {
      return this.uniforms.depthBuffer.value
    }
    set depthBuffer(e) {
      this.uniforms.depthBuffer.value = e
    }
    get depthPacking() {
      return Number(this.defines.DEPTH_PACKING)
    }
    set depthPacking(e) {
      ;((this.defines.DEPTH_PACKING = e.toFixed(0)), (this.needsUpdate = !0))
    }
    setDepthBuffer(e, t = M) {
      ;((this.depthBuffer = e), (this.depthPacking = t))
    }
    setShaderData(e) {
      ;(this.setShaderParts(e.shaderParts),
        this.setDefines(e.defines),
        this.setUniforms(e.uniforms),
        this.setExtensions(e.extensions))
    }
    setShaderParts(e) {
      return (
        (this.fragmentShader = gt
          .replace(H.FRAGMENT_HEAD, e.get(H.FRAGMENT_HEAD) || ``)
          .replace(H.FRAGMENT_MAIN_UV, e.get(H.FRAGMENT_MAIN_UV) || ``)
          .replace(H.FRAGMENT_MAIN_IMAGE, e.get(H.FRAGMENT_MAIN_IMAGE) || ``)),
        (this.vertexShader = _t
          .replace(H.VERTEX_HEAD, e.get(H.VERTEX_HEAD) || ``)
          .replace(H.VERTEX_MAIN_SUPPORT, e.get(H.VERTEX_MAIN_SUPPORT) || ``)),
        (this.needsUpdate = !0),
        this
      )
    }
    setDefines(e) {
      for (let t of e.entries()) this.defines[t[0]] = t[1]
      return ((this.needsUpdate = !0), this)
    }
    setUniforms(e) {
      for (let t of e.entries()) this.uniforms[t[0]] = t[1]
      return this
    }
    setExtensions(e) {
      this.extensions = {}
      for (let t of e) this.extensions[t] = !0
      return this
    }
    get encodeOutput() {
      return this.defines.ENCODE_OUTPUT !== void 0
    }
    set encodeOutput(e) {
      this.encodeOutput !== e &&
        (e ? (this.defines.ENCODE_OUTPUT = `1`) : delete this.defines.ENCODE_OUTPUT,
        (this.needsUpdate = !0))
    }
    isOutputEncodingEnabled(e) {
      return this.encodeOutput
    }
    setOutputEncodingEnabled(e) {
      this.encodeOutput = e
    }
    get time() {
      return this.uniforms.time.value
    }
    set time(e) {
      this.uniforms.time.value = e
    }
    setDeltaTime(e) {
      this.uniforms.time.value += e
    }
    adoptCameraSettings(e) {
      this.copyCameraSettings(e)
    }
    copyCameraSettings(e) {
      e &&
        ((this.uniforms.cameraNear.value = e.near),
        (this.uniforms.cameraFar.value = e.far),
        e instanceof te
          ? (this.defines.PERSPECTIVE_CAMERA = `1`)
          : delete this.defines.PERSPECTIVE_CAMERA,
        (this.needsUpdate = !0))
    }
    setSize(e, t) {
      let n = this.uniforms
      ;(n.resolution.value.set(e, t), n.texelSize.value.set(1 / e, 1 / t), (n.aspect.value = e / t))
    }
    static get Section() {
      return H
    }
  }
Number(`186`.replace(/\D+/g, ``))
var yt = 255 / 256
;(new Float32Array([yt / 256 ** 3, yt / 256 ** 2, yt / 256, yt]),
  new Float32Array([yt, yt / 256, yt / 256 ** 2, 1 / 256 ** 3]))
function bt(e, t, n) {
  for (let r of t) {
    let t = `$1` + e + r.charAt(0).toUpperCase() + r.slice(1),
      i = RegExp(`([^\\.])(\\b` + r + `\\b)`, `g`)
    for (let e of n.entries()) e[1] !== null && n.set(e[0], e[1].replace(i, t))
  }
}
function xt(e, t, n) {
  let r = t.getFragmentShader(),
    i = t.getVertexShader(),
    a = r !== void 0 && /mainImage/.test(r),
    o = r !== void 0 && /mainUv/.test(r)
  if (((n.attributes |= t.getAttributes()), r === void 0))
    throw Error(`Missing fragment shader (${t.name})`)
  if (o && (n.attributes & V.CONVOLUTION) !== 0)
    throw Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`)
  if (!a && !o) throw Error(`Could not find mainImage or mainUv function (${t.name})`)
  {
    let s = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g,
      c = n.shaderParts,
      l = c.get(H.FRAGMENT_HEAD) || ``,
      u = c.get(H.FRAGMENT_MAIN_UV) || ``,
      d = c.get(H.FRAGMENT_MAIN_IMAGE) || ``,
      f = c.get(H.VERTEX_HEAD) || ``,
      p = c.get(H.VERTEX_MAIN_SUPPORT) || ``,
      m = new Set(),
      h = new Set()
    if (
      (o &&
        ((u += `	${e}MainUv(UV);
`),
        (n.uvTransformation = !0)),
      i !== null && /mainSupport/.test(i))
    ) {
      let t = /mainSupport *\([\w\s]*?uv\s*?\)/.test(i)
      ;((p += `	${e}MainSupport(`),
        (p += t
          ? `vUv);
`
          : `);
`))
      for (let e of i.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))
        for (let t of e[1].split(/\s*,\s*/)) (n.varyings.add(t), m.add(t), h.add(t))
      for (let e of i.matchAll(s)) h.add(e[1])
    }
    for (let e of r.matchAll(s)) h.add(e[1])
    for (let e of t.defines.keys()) h.add(e.replace(/\([\w\s,]*\)/g, ``))
    for (let e of t.uniforms.keys()) h.add(e)
    ;(h.delete(`while`),
      h.delete(`for`),
      h.delete(`if`),
      t.uniforms.forEach((t, r) => n.uniforms.set(e + r.charAt(0).toUpperCase() + r.slice(1), t)),
      t.defines.forEach((t, r) => n.defines.set(e + r.charAt(0).toUpperCase() + r.slice(1), t)))
    let g = new Map([
      [`fragment`, r],
      [`vertex`, i],
    ])
    ;(bt(e, h, n.defines), bt(e, h, g), (r = g.get(`fragment`)), (i = g.get(`vertex`)))
    let _ = t.blendMode
    if ((n.blendModes.set(_.blendFunction, _), a)) {
      ;(t.inputColorSpace !== null &&
        t.inputColorSpace !== n.colorSpace &&
        (d +=
          t.inputColorSpace === `srgb`
            ? `color0 = sRGBTransferOETF(color0);
	`
            : `color0 = sRGBToLinear(color0);
	`),
        t.outputColorSpace === ``
          ? t.inputColorSpace !== null && (n.colorSpace = t.inputColorSpace)
          : (n.colorSpace = t.outputColorSpace),
        (d += `${e}MainImage(color0, UV, `),
        (n.attributes & V.DEPTH) !== 0 &&
          /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/.test(r) &&
          ((d += `depth, `), (n.readDepth = !0)),
        (d += `color1);
	`))
      let i = e + `BlendOpacity`
      ;(n.uniforms.set(i, _.opacity),
        (d += `color0 = blend${_.blendFunction}(color0, color1, ${i});

	`),
        (l += `uniform float ${i};

`))
    }
    if (
      ((l +=
        r +
        `
`),
      i !== null &&
        (f +=
          i +
          `
`),
      c.set(H.FRAGMENT_HEAD, l),
      c.set(H.FRAGMENT_MAIN_UV, u),
      c.set(H.FRAGMENT_MAIN_IMAGE, d),
      c.set(H.VERTEX_HEAD, f),
      c.set(H.VERTEX_MAIN_SUPPORT, p),
      t.extensions !== null)
    )
      for (let e of t.extensions) n.extensions.add(e)
  }
}
var St = class extends B {
  constructor(e, ...t) {
    ;(super(`EffectPass`),
      (this.fullscreenMaterial = new vt(null, null, null, e)),
      (this.listener = (e) => this.handleEvent(e)),
      (this.effects = []),
      this.setEffects(t),
      (this.skipRendering = !1),
      (this.minTime = 1),
      (this.maxTime = 1 / 0),
      (this.timeScale = 1))
  }
  set mainScene(e) {
    for (let t of this.effects) t.mainScene = e
  }
  set mainCamera(e) {
    this.fullscreenMaterial.copyCameraSettings(e)
    for (let t of this.effects) t.mainCamera = e
  }
  get encodeOutput() {
    return this.fullscreenMaterial.encodeOutput
  }
  set encodeOutput(e) {
    this.fullscreenMaterial.encodeOutput = e
  }
  get dithering() {
    return this.fullscreenMaterial.dithering
  }
  set dithering(e) {
    let t = this.fullscreenMaterial
    ;((t.dithering = e), (t.needsUpdate = !0))
  }
  setEffects(e) {
    for (let e of this.effects) e.removeEventListener(`change`, this.listener)
    this.effects = e.sort((e, t) => t.attributes - e.attributes)
    for (let e of this.effects) e.addEventListener(`change`, this.listener)
  }
  updateMaterial() {
    let e = new Ae(),
      t = 0
    for (let n of this.effects)
      if (n.blendMode.blendFunction === G.DST) e.attributes |= n.getAttributes() & V.DEPTH
      else if ((e.attributes & n.getAttributes() & V.CONVOLUTION) !== 0)
        throw Error(`Convolution effects cannot be merged (${n.name})`)
      else xt(`e` + t++, n, e)
    let n = e.shaderParts.get(H.FRAGMENT_HEAD),
      r = e.shaderParts.get(H.FRAGMENT_MAIN_IMAGE),
      i = e.shaderParts.get(H.FRAGMENT_MAIN_UV),
      a = /\bblend\b/g
    for (let t of e.blendModes.values())
      n +=
        t.getShaderCode().replace(a, `blend${t.blendFunction}`) +
        `
`
    ;((e.attributes & V.DEPTH) === 0
      ? (this.needsDepthTexture = !1)
      : (e.readDepth &&
          (r =
            `float depth = readDepth(UV);

	` + r),
        (this.needsDepthTexture = this.getDepthTexture() === null)),
      e.colorSpace === `srgb` &&
        (r += `color0 = sRGBToLinear(color0);
	`),
      e.uvTransformation
        ? ((i =
            `vec2 transformedUv = vUv;
` + i),
          e.defines.set(`UV`, `transformedUv`))
        : e.defines.set(`UV`, `vUv`),
      e.shaderParts.set(H.FRAGMENT_HEAD, n),
      e.shaderParts.set(H.FRAGMENT_MAIN_IMAGE, r),
      e.shaderParts.set(H.FRAGMENT_MAIN_UV, i))
    for (let [t, n] of e.shaderParts)
      n !== null &&
        e.shaderParts.set(
          t,
          n.trim().replace(
            /^#/,
            `
#`
          )
        )
    ;((this.skipRendering = t === 0),
      (this.needsSwap = !this.skipRendering),
      this.fullscreenMaterial.setShaderData(e))
  }
  recompile() {
    this.updateMaterial()
  }
  getDepthTexture() {
    return this.fullscreenMaterial.depthBuffer
  }
  setDepthTexture(e, t = M) {
    ;((this.fullscreenMaterial.depthBuffer = e), (this.fullscreenMaterial.depthPacking = t))
    for (let n of this.effects) n.setDepthTexture(e, t)
  }
  render(e, t, n, r, i) {
    for (let n of this.effects) n.update(e, t, r)
    if (!this.skipRendering || this.renderToScreen) {
      let i = this.fullscreenMaterial
      ;((i.inputBuffer = t.texture),
        (i.time += r * this.timeScale),
        e.setRenderTarget(this.renderToScreen ? null : n),
        e.render(this.scene, this.camera))
    }
  }
  setSize(e, t) {
    this.fullscreenMaterial.setSize(e, t)
    for (let n of this.effects) n.setSize(e, t)
  }
  initialize(e, t, n) {
    this.renderer = e
    for (let r of this.effects) r.initialize(e, t, n)
    ;(this.updateMaterial(),
      n !== void 0 &&
        n !== 1009 &&
        (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`))
  }
  dispose() {
    super.dispose()
    for (let e of this.effects) (e.removeEventListener(`change`, this.listener), e.dispose())
  }
  handleEvent(e) {
    e.type === `change` && this.recompile()
  }
}
;(new Float32Array([0, 0, 0]),
  new Float32Array([1, 0, 0]),
  new Float32Array([1, 1, 0]),
  new Float32Array([1, 1, 1]),
  new Float32Array([0, 0, 0]),
  new Float32Array([1, 0, 0]),
  new Float32Array([1, 0, 1]),
  new Float32Array([1, 1, 1]),
  new Float32Array([0, 0, 0]),
  new Float32Array([0, 0, 1]),
  new Float32Array([1, 0, 1]),
  new Float32Array([1, 1, 1]),
  new Float32Array([0, 0, 0]),
  new Float32Array([0, 1, 0]),
  new Float32Array([1, 1, 0]),
  new Float32Array([1, 1, 1]),
  new Float32Array([0, 0, 0]),
  new Float32Array([0, 1, 0]),
  new Float32Array([0, 1, 1]),
  new Float32Array([1, 1, 1]),
  new Float32Array([0, 0, 0]),
  new Float32Array([0, 0, 1]),
  new Float32Array([0, 1, 1]),
  new Float32Array([1, 1, 1]),
  new Float32Array([0, -0.25, 0.25, -0.125, 0.125, -0.375, 0.375]),
  new Float32Array([0, 0]),
  new Float32Array([0.25, -0.25]),
  new Float32Array([-0.25, 0.25]),
  new Float32Array([0.125, -0.125]),
  new Float32Array([-0.125, 0.125]),
  new Uint8Array([0, 0]),
  new Uint8Array([3, 0]),
  new Uint8Array([0, 3]),
  new Uint8Array([3, 3]),
  new Uint8Array([1, 0]),
  new Uint8Array([4, 0]),
  new Uint8Array([1, 3]),
  new Uint8Array([4, 3]),
  new Uint8Array([0, 1]),
  new Uint8Array([3, 1]),
  new Uint8Array([0, 4]),
  new Uint8Array([3, 4]),
  new Uint8Array([1, 1]),
  new Uint8Array([4, 1]),
  new Uint8Array([1, 4]),
  new Uint8Array([4, 4]),
  new Uint8Array([0, 0]),
  new Uint8Array([1, 0]),
  new Uint8Array([0, 2]),
  new Uint8Array([1, 2]),
  new Uint8Array([2, 0]),
  new Uint8Array([3, 0]),
  new Uint8Array([2, 2]),
  new Uint8Array([3, 2]),
  new Uint8Array([0, 1]),
  new Uint8Array([1, 1]),
  new Uint8Array([0, 3]),
  new Uint8Array([1, 3]),
  new Uint8Array([2, 1]),
  new Uint8Array([3, 1]),
  new Uint8Array([2, 3]),
  new Uint8Array([3, 3]),
  q(0, 0, 0, 0),
  new Float32Array([0, 0, 0, 0]),
  q(0, 0, 0, 1),
  new Float32Array([0, 0, 0, 1]),
  q(0, 0, 1, 0),
  new Float32Array([0, 0, 1, 0]),
  q(0, 0, 1, 1),
  new Float32Array([0, 0, 1, 1]),
  q(0, 1, 0, 0),
  new Float32Array([0, 1, 0, 0]),
  q(0, 1, 0, 1),
  new Float32Array([0, 1, 0, 1]),
  q(0, 1, 1, 0),
  new Float32Array([0, 1, 1, 0]),
  q(0, 1, 1, 1),
  new Float32Array([0, 1, 1, 1]),
  q(1, 0, 0, 0),
  new Float32Array([1, 0, 0, 0]),
  q(1, 0, 0, 1),
  new Float32Array([1, 0, 0, 1]),
  q(1, 0, 1, 0),
  new Float32Array([1, 0, 1, 0]),
  q(1, 0, 1, 1),
  new Float32Array([1, 0, 1, 1]),
  q(1, 1, 0, 0),
  new Float32Array([1, 1, 0, 0]),
  q(1, 1, 0, 1),
  new Float32Array([1, 1, 0, 1]),
  q(1, 1, 1, 0),
  new Float32Array([1, 1, 1, 0]),
  q(1, 1, 1, 1),
  new Float32Array([1, 1, 1, 1]))
function Ct(e, t, n) {
  return e + (t - e) * n
}
function q(e, t, n, r) {
  return Ct(Ct(e, t, 0.75), Ct(n, r, 0.75), 0.875)
}
function wt() {
  let e = new URLSearchParams(location.search).get(`q`)
  if (e === `high` || e === `low`) return e
  let t = matchMedia(`(pointer: coarse)`).matches,
    n = Math.min(screen.width, screen.height) < 820
  return t && n ? `low` : `high`
}
var Tt = class {
    canvas
    scene
    camera
    quality
    gl
    composer
    tiltShift
    bloom
    renderPass
    pixelRatio
    maxPixelRatio
    constructor(e, t, n, r) {
      ;((this.canvas = e),
        (this.scene = t),
        (this.camera = n),
        (this.quality = r),
        (this.gl = new me({
          canvas: e,
          antialias: !1,
          alpha: !1,
          stencil: !1,
          depth: !0,
          powerPreference: `high-performance`,
        })),
        (this.pixelRatio = this.maxPixelRatio = Math.min(window.devicePixelRatio || 1, 2)),
        this.gl.setPixelRatio(this.pixelRatio),
        (this.gl.outputColorSpace = s),
        (this.gl.toneMapping = 0),
        (this.gl.shadowMap.enabled = !0),
        (this.gl.shadowMap.type = 1),
        (this.gl.info.autoReset = !1),
        (this.composer = new ke(this.gl, {
          frameBufferType: O,
          multisampling: r === `high` ? 4 : 2,
        })),
        (this.renderPass = new et(t, n)),
        this.composer.addPass(this.renderPass),
        (this.bloom = new $e({
          intensity: 0.55,
          luminanceThreshold: 0.92,
          luminanceSmoothing: 0.25,
          mipmapBlur: !0,
          radius: 0.7,
        })),
        (this.tiltShift = new ct({
          focusArea: 1.12,
          feather: 0.42,
          offset: 0.06,
          kernelSize: Ie.SMALL,
          resolutionScale: 0.5,
        })))
      let i = new ht({ offset: 0.32, darkness: 0.34 }),
        a = new pt({ mode: K.NEUTRAL }),
        o = new St(n, this.bloom, this.tiltShift),
        c = new St(n, i, a)
      ;((c.dithering = !0), this.composer.addPass(o), this.composer.addPass(c))
    }
    setCamera(e) {
      ;((this.camera = e), (this.renderPass.mainCamera = e))
    }
    resize(e, t) {
      ;(this.gl.setPixelRatio(this.pixelRatio), this.composer.setSize(e, t))
    }
    get dpr() {
      return this.pixelRatio
    }
    stepResolution(e) {
      let t = Math.min(this.maxPixelRatio, Math.max(1, Math.round((this.pixelRatio + e) * 4) / 4))
      return (
        t !== this.pixelRatio &&
        ((this.pixelRatio = t), this.resize(window.innerWidth, window.innerHeight), !0)
      )
    }
    render(e) {
      this.composer.render(e)
    }
  },
  Et = class {
    mesh
    constructor() {
      let e = new F({
        side: 1,
        depthWrite: !1,
        fog: !1,
        uniforms: {
          uZenith: { value: R.skyZenith },
          uHorizon: { value: R.skyHorizon },
          uFog: { value: R.fog },
        },
        vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_Position = p.xyww;
        }`,
        fragmentShader: `
        uniform vec3 uZenith, uHorizon, uFog;
        varying vec3 vDir;
        void main() {
          float y = vDir.y;
          vec3 c = mix(uHorizon, uZenith, smoothstep(0.0, 0.55, y));
          c = mix(c, uFog, 1.0 - smoothstep(-0.05, 0.08, y));
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`,
      })
      ;((this.mesh = new r(new re(900, 32, 16), e)),
        (this.mesh.renderOrder = -10),
        (this.mesh.frustumCulled = !1),
        (this.mesh.name = `sky`))
    }
    follow(e) {
      this.mesh.position.copy(e.position)
    }
  },
  Dt = `
float lhHash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 lhHash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
float lhNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(lhHash12(i), lhHash12(i + vec2(1.0, 0.0)), u.x),
    mix(lhHash12(i + vec2(0.0, 1.0)), lhHash12(i + vec2(1.0, 1.0)), u.x),
    u.y);
}
// lhNoise with its gradient: xy = the slope along p, z = the value.
vec3 lhNoiseD(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  vec2 du = 6.0 * f * (1.0 - f);
  float a = lhHash12(i);
  float b = lhHash12(i + vec2(1.0, 0.0));
  float c = lhHash12(i + vec2(0.0, 1.0));
  float k = a - b - c + lhHash12(i + vec2(1.0, 1.0));
  return vec3(du * vec2(b - a + k * u.y, c - a + k * u.x), a + (b - a) * u.x + (c - a) * u.y + k * u.x * u.y);
}
float lhFbm(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    s += a * lhNoise(p);
    p = p * 2.03 + vec2(17.1, 9.7);
    a *= 0.5;
  }
  return s / 0.9375;
}
float lhFbm2(vec2 p) {
  return (lhNoise(p) * 0.6667 + lhNoise(p * 2.03 + vec2(17.1, 9.7)) * 0.3333);
}
`,
  Ot = `
float lhHash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}
vec3 lhHash33(vec3 p3) {
  p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);
  return fract((p3.xxy + p3.yxx) * p3.zyx);
}
float lhNoise3(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(lhHash13(i), lhHash13(i + vec3(1.0, 0.0, 0.0)), u.x),
        mix(lhHash13(i + vec3(0.0, 1.0, 0.0)), lhHash13(i + vec3(1.0, 1.0, 0.0)), u.x), u.y),
    mix(mix(lhHash13(i + vec3(0.0, 0.0, 1.0)), lhHash13(i + vec3(1.0, 0.0, 1.0)), u.x),
        mix(lhHash13(i + vec3(0.0, 1.0, 1.0)), lhHash13(i + vec3(1.0, 1.0, 1.0)), u.x), u.y),
    u.z);
}
// Three octaves, 0..1 (about 0.5 on average).
float lhFbm3(vec3 p) {
  float s = lhNoise3(p) * 0.5714;
  s += lhNoise3(p * 2.07 + vec3(17.1, 9.7, 3.3)) * 0.2857;
  s += lhNoise3(p * 4.21 + vec3(5.9, 31.4, 12.2)) * 0.1429;
  return s;
}
// Round dots on a jittered 3D grid (one per cell, kept inside it): x = 1 inside a dot (edge softened
// over aa), y = the dot's random value; size is the dot's radius as a fraction of a cell.
vec2 lhDots3(vec3 p, float size, float aa) {
  vec3 c = floor(p);
  vec3 h = lhHash33(c);
  vec3 centre = c + 0.5 + (h - 0.5) * (1.0 - 2.0 * size);
  float d = length(p - centre);
  float r = size * mix(0.55, 1.0, h.z);
  return vec2(1.0 - smoothstep(r - aa, r + aa, d), lhHash13(c + 7.7));
}
`,
  kt = `
uniform float uCloudStrength;
uniform vec4 uCloudBlobs[12];
float lhCloudShadow(vec2 xz) {
  float c = 0.0;
  for (int i = 0; i < 12; i++) {
    vec4 b = uCloudBlobs[i];
    vec2 d = (xz - b.xy) / b.z;
    float r = length(d) + (lhNoise(xz * 0.22 + b.xy * 0.05) - 0.5) * 0.35;
    c = max(c, (1.0 - smoothstep(0.45, 1.0, r)) * b.w);
  }
  return 1.0 - c * uCloudStrength;
}
`,
  At = `
uniform vec3 uGrassA, uGrassB, uGrassC;
vec3 lhGrassColor(vec2 xz) {
  float n1 = lhFbm(xz * 0.11 + 4.0);
  float n2 = lhFbm(xz * 0.05 - 11.0);
  vec3 grass = mix(uGrassA, uGrassB, smoothstep(0.38, 0.68, n1));
  return mix(grass, uGrassC, smoothstep(0.55, 0.8, n2) * 0.55);
}
`,
  jt = `
vec2 lhWind(vec2 xz, float t) {
  float gust = lhNoise(xz * 0.13 + vec2(t * 0.55, t * 0.2));
  float g2 = lhNoise(xz * 0.4 - vec2(t * 0.9, -t * 0.4));
  vec2 dir = normalize(vec2(0.85, 0.45));
  return dir * (gust * 0.9 + 0.25) * 0.55 + vec2(g2 - 0.5, 0.5 - g2) * 0.18;
}
`,
  Mt = `
// Cycles of wave train i at xz: its band starts offshore at each whole number and lands ~0.85 later.
float lhSurfCycle(vec2 xz, float i) {
  return uTime * 0.14 + i * 0.5 + (lhNoise(xz * 0.12 + i * 7.0) - 0.5) * 0.7;
}
// Swash shape over one cycle, s = cycles since the wave landed: a quick run up the beach, a pause,
// a slower slide back (0..1 of the wave's reach).
const float LH_RUN = 0.1;
const float LH_HANG = 0.03;
const float LH_BACK = 0.24;
float lhSwash(float s) {
  if (s < LH_RUN) { float u = 1.0 - s / LH_RUN; return 1.0 - u * u; }
  if (s < LH_RUN + LH_HANG) return 1.0;
  float u = (s - LH_RUN - LH_HANG) / LH_BACK;
  return u < 1.0 ? 1.0 - u * u : 0.0;
}
// How far up the beach (height above the still water) wave n of train i reaches at xz.
float lhSwashReach(vec2 xz, float i, float n) {
  float big = lhHash12(vec2(n * 1.7 + i * 5.3, i * 3.1 + 0.5));
  return mix(0.09, 0.26, big) * (0.75 + 0.5 * lhNoise(xz * 0.8 + vec2(n * 3.7, i * 9.1)));
}
// Current height of the water's edge above the still level (max of both trains).
float lhSwashEdge(vec2 xz) {
  float edge = 0.0;
  for (int i = 0; i < 2; i++) {
    float c = lhSurfCycle(xz, float(i)) - 0.85;
    float n = floor(c);
    edge = max(edge, lhSwashReach(xz, float(i), n) * lhSwash(c - n));
  }
  return edge;
}
`,
  J = {
    uTime: { value: 0 },
    uCloudStrength: { value: 0.32 },
    uCloudBlobs: { value: Array.from({ length: 12 }, () => new g(0, 0, 1, 0)) },
    uWaterLevel: { value: 0 },
  }
function Nt(e, t) {
  let n = t.clouds ?? !0
  return (
    (e.onBeforeCompile = (e) => {
      ;(Object.assign(e.uniforms, J, t.uniforms ?? {}),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec3 vWorldPos;
varying vec3 vWorldNormal;
uniform float uTime;
${Dt}
${t.vertexHead ?? ``}`
          )
          .replace(`#include <begin_vertex>`, `#include <begin_vertex>\n${t.vertexMain ?? ``}`)
          .replace(
            `#include <project_vertex>`,
            `#include <project_vertex>
{
  vec4 lhWp = vec4(transformed, 1.0);
  vec3 lhWn = objectNormal;
  #ifdef USE_INSTANCING
    lhWp = instanceMatrix * lhWp;
    lhWn = mat3(instanceMatrix) * lhWn;
  #endif
  lhWp = modelMatrix * lhWp;
  vWorldPos = lhWp.xyz;
  vWorldNormal = normalize(mat3(modelMatrix) * lhWn);
}
${t.vertexPost ?? ``}`
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec3 vWorldPos;
varying vec3 vWorldNormal;
uniform float uTime;
uniform float uWaterLevel;
${Dt}
${kt}
${t.fragmentHead ?? ``}`
          )
          .replace(`#include <color_fragment>`, `#include <color_fragment>\n${t.albedo ?? ``}`)
          .replace(
            `#include <normal_fragment_maps>`,
            `#include <normal_fragment_maps>\n${t.normal ?? ``}`
          )
          .replace(
            `#include <lights_fragment_end>`,
            `#include <lights_fragment_end>
${
  n
    ? `{ float lhCs = lhCloudShadow(vWorldPos.xz);
  reflectedLight.directDiffuse *= lhCs;
  reflectedLight.directSpecular *= lhCs; }`
    : ``
}
${t.postLights ?? ``}`
          )
          .replace(
            `#include <opaque_fragment>`,
            `#include <opaque_fragment>
gl_FragColor.rgb = min(gl_FragColor.rgb, vec3(40.0));`
          )))
    }),
    (e.customProgramCacheKey = () => t.key),
    e
  )
}
var Pt = new ie(-1, 1, 1, -1, 0, 1),
  Ft = new (class extends d {
    constructor() {
      ;(super(),
        this.setAttribute(`position`, new o([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
        this.setAttribute(`uv`, new o([0, 2, 0, 0, 2, 0], 2)))
    }
  })(),
  It = class {
    constructor(e) {
      this._mesh = new r(Ft, e)
    }
    dispose() {
      this._mesh.geometry.dispose()
    }
    render(e) {
      e.render(this._mesh, Pt)
    }
    get material() {
      return this._mesh.material
    }
    set material(e) {
      this._mesh.material = e
    }
  },
  Lt = 0.6,
  Rt = 0.35,
  zt = 512,
  Bt = class {
    texture
    rect
    raw
    ping
    pong
    camera
    markerCamera
    heightMat
    blurMat
    markerMat
    quad
    slice = [new D(new k(0, -1, 0), Rt)]
    constructor(e) {
      let t = {
        type: O,
        format: C,
        minFilter: c,
        magFilter: c,
        depthBuffer: !1,
        generateMipmaps: !1,
      }
      ;((this.raw = new w(zt, zt, { ...t, depthBuffer: !0 })),
        (this.ping = new w(zt, zt, t)),
        (this.pong = new w(zt, zt, t)),
        (this.texture = this.pong.texture))
      let n = e.maxX - e.minX,
        r = e.maxZ - e.minZ
      ;((this.rect = new g(e.minX, e.minZ, 1 / n, 1 / r)),
        (this.camera = new ie(e.minX, e.maxX, -e.minZ, -e.maxZ, 0.1, 200)),
        this.camera.position.set(0, 100, 0),
        this.camera.up.set(0, 0, -1),
        this.camera.lookAt(0, 0, 0),
        (this.markerCamera = new ie(e.minX, e.maxX, e.maxZ, e.minZ, 0.1, 400)),
        this.markerCamera.position.set(0, -100, 0),
        this.markerCamera.up.set(0, 0, 1),
        this.markerCamera.lookAt(0, 0, 0),
        this.markerCamera.layers.set(7),
        (this.heightMat = new F({
          side: 2,
          clipping: !0,
          vertexShader: `
        #include <clipping_planes_pars_vertex>
        varying float vY;
        void main() {
          vec4 wp = vec4(position, 1.0);
          #ifdef USE_INSTANCING
            wp = instanceMatrix * wp;
          #endif
          wp = modelMatrix * wp;
          vY = wp.y;
          vec4 mvPosition = viewMatrix * wp;
          #include <clipping_planes_vertex>
          gl_Position = projectionMatrix * mvPosition;
        }`,
          fragmentShader: `
        #include <clipping_planes_pars_fragment>
        varying float vY;
        void main() {
          #include <clipping_planes_fragment>
          gl_FragColor = vec4(vY, 0.0, 0.0, 1.0);
        }`,
        })),
        (this.markerMat = new F({
          side: 2,
          depthTest: !1,
          depthWrite: !1,
          blending: 5,
          blendEquation: 100,
          blendSrc: 201,
          blendDst: 201,
          vertexShader: `
        varying vec2 vLocal;
        void main() {
          vLocal = position.xz / ${Lt.toFixed(3)};
          vec4 wp = vec4(position, 1.0);
          #ifdef USE_INSTANCING
            wp = instanceMatrix * wp;
          #endif
          gl_Position = projectionMatrix * viewMatrix * modelMatrix * wp;
        }`,
          fragmentShader: `
        varying vec2 vLocal;
        void main() {
          float f = 1.0 - smoothstep(0.0, 1.0, length(vLocal));
          gl_FragColor = vec4(0.0, f * f * 0.9, 0.0, 0.0);
        }`,
        })),
        (this.blurMat = new F({
          uniforms: {
            tInput: { value: null },
            uDir: { value: new E() },
            uFirst: { value: 1 },
            uLevel: { value: 0 },
          },
          vertexShader: `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
          fragmentShader: `
        uniform sampler2D tInput;
        uniform vec2 uDir;
        uniform float uFirst;
        uniform float uLevel;
        varying vec2 vUv;
        float maskAt(vec2 uv) {
          vec4 s = texture2D(tInput, uv);
          return uFirst > 0.5 ? smoothstep(uLevel - 0.02, uLevel + 0.06, s.r) : s.g;
        }
        void main() {
          // The raw capture is image-space (v = -Z); flip once so the result maps with uv = (xz - min) / size.
          vec2 uv = uFirst > 0.5 ? vec2(vUv.x, 1.0 - vUv.y) : vUv;
          float h = texture2D(tInput, uv).r;
          float sum = 0.0;
          float wsum = 0.0;
          for (int i = -10; i <= 10; i++) {
            float fi = float(i);
            float w = exp(-fi * fi / 42.0);
            sum += maskAt(uv + uDir * fi) * w;
            wsum += w;
          }
          gl_FragColor = vec4(h, sum / wsum, 0.0, 1.0);
        }`,
          depthTest: !1,
          depthWrite: !1,
        })),
        (this.quad = new It(this.blurMat)))
    }
    update(e, t) {
      let n = e.getRenderTarget(),
        r = t.overrideMaterial,
        i = t.background,
        a = t.fog,
        o = e.autoClear,
        s = e.getClearColor(new l()),
        c = e.getClearAlpha(),
        u = e.shadowMap.autoUpdate,
        d = e.localClippingEnabled
      ;((t.overrideMaterial = this.heightMat),
        (t.background = null),
        (t.fog = null),
        (e.shadowMap.autoUpdate = !1),
        (e.localClippingEnabled = !0),
        e.setClearColor(new l(-12, 0, 0), 1),
        e.setRenderTarget(this.raw),
        (e.autoClear = !0),
        (this.heightMat.clippingPlanes = null),
        this.camera.layers.set(6),
        e.render(t, this.camera),
        (e.autoClear = !1),
        (this.heightMat.clippingPlanes = this.slice),
        this.camera.layers.set(5),
        e.render(t, this.camera),
        (e.localClippingEnabled = d),
        (t.overrideMaterial = r),
        (t.background = i),
        (t.fog = a))
      let f = 2.4 / zt
      ;((this.blurMat.uniforms.tInput.value = this.raw.texture),
        this.blurMat.uniforms.uDir.value.set(f, 0),
        (this.blurMat.uniforms.uFirst.value = 1),
        e.setRenderTarget(this.ping),
        this.quad.render(e),
        (this.blurMat.uniforms.tInput.value = this.ping.texture),
        this.blurMat.uniforms.uDir.value.set(0, f),
        (this.blurMat.uniforms.uFirst.value = 0),
        e.setRenderTarget(this.pong),
        this.quad.render(e))
      let p = t.overrideMaterial,
        m = t.background
      ;((t.overrideMaterial = this.markerMat),
        (t.background = null),
        (e.autoClear = !1),
        e.render(t, this.markerCamera),
        (t.overrideMaterial = p),
        (t.background = m),
        e.setRenderTarget(n),
        e.setClearColor(s, c),
        (e.autoClear = o),
        (e.shadowMap.autoUpdate = u))
    }
    dispose() {
      ;(this.raw.dispose(),
        this.ping.dispose(),
        this.pong.dispose(),
        this.heightMat.dispose(),
        this.markerMat.dispose(),
        this.blurMat.dispose(),
        this.quad.dispose())
    }
  },
  Vt = 512,
  Ht = 32,
  Ut = -128
function Wt(e, t) {
  let n = e + Ht,
    r = t + Ht
  return n >= 0 && r >= 0 && n < 64 && r < 64 ? r * 2 * Ht + n : -1
}
var Gt = class e {
    cells = new Map()
    dense = new Int8Array(4096).fill(Ut)
    listeners = new Set()
    highest = NaN
    static key(e, t) {
      return (e + Vt) * 1024 + (t + Vt)
    }
    static unkey(e) {
      let t = (e % 1024) - Vt
      return [Math.floor(e / 1024) - Vt, t]
    }
    get size() {
      return this.cells.size
    }
    get(t, n) {
      let r = Wt(t, n)
      if (r < 0) return this.cells.get(e.key(t, n))
      let i = this.dense[r]
      return i === Ut ? void 0 : i
    }
    set(t, n, r) {
      let i = e.key(t, n)
      if (r === void 0) {
        if (!this.cells.delete(i)) return
      } else {
        if (this.cells.get(i) === r) return
        this.cells.set(i, r)
      }
      let a = Wt(t, n)
      ;(a >= 0 && (this.dense[a] = r ?? Ut), (this.highest = NaN))
      for (let e of this.listeners) e(t, n, r)
    }
    get maxLevel() {
      if (Number.isNaN(this.highest)) {
        this.highest = 0
        for (let e of this.cells.values()) this.highest = Math.max(this.highest, e)
      }
      return this.highest
    }
    onChange(e) {
      return (this.listeners.add(e), () => this.listeners.delete(e))
    }
    *entries() {
      for (let [t, n] of this.cells) {
        let [r, i] = e.unkey(t)
        yield [r, i, n]
      }
    }
    load(t) {
      ;(this.cells.clear(), this.dense.fill(Ut), (this.highest = NaN))
      for (let [n, r, i] of t) {
        if (!Number.isInteger(n) || !Number.isInteger(r) || !Number.isInteger(i) || i < -2 || i > 5)
          continue
        let t = Math.max(i, -1)
        this.cells.set(e.key(n, r), t)
        let a = Wt(n, r)
        a >= 0 && (this.dense[a] = t)
      }
    }
    toJSON() {
      return [...this.entries()]
    }
  },
  Kt = -0.2,
  qt = 0.3
function Jt(e) {
  return e >= 0 ? L + e : Kt
}
var Yt = 0.45
function Xt(e, t) {
  let n = Math.hypot(1, t)
  return { r: e, s: t, d1: (e * t) / n, f1: e - e / n }
}
var Zt = 0.42,
  Qt = 0.13,
  $t = 0.035,
  en = Xt(Qt, 25),
  tn = Xt(Qt, 25),
  nn = 3,
  rn = 0.3
function an(e, t, n, r) {
  let i = new Float32Array(Math.max(t, n)),
    a = 2 * r + 1
  for (let o = 0; o < 2; o++) {
    for (let o = 0; o < n; o++) {
      let n = o * t,
        s = 0
      for (let i = -r; i <= r; i++) s += e[n + Math.min(t - 1, Math.max(0, i))]
      for (let o = 0; o < t; o++)
        ((i[o] = s / a), (s += e[n + Math.min(t - 1, o + r + 1)] - e[n + Math.max(0, o - r)]))
      for (let r = 0; r < t; r++) e[n + r] = i[r]
    }
    for (let o = 0; o < t; o++) {
      let s = 0
      for (let i = -r; i <= r; i++) s += e[Math.min(n - 1, Math.max(0, i)) * t + o]
      for (let c = 0; c < n; c++)
        ((i[c] = s / a),
          (s += e[Math.min(n - 1, c + r + 1) * t + o] - e[Math.max(0, c - r) * t + o]))
      for (let r = 0; r < n; r++) e[r * t + o] = i[r]
    }
  }
}
var on = 0.08,
  sn = 0.06
function cn(e, t) {
  if (e <= -t) return 0
  if (e >= t) return 1
  let n = (e + t) / (2 * t)
  return n * n * n * (n * (n * 6 - 15) + 10)
}
var ln = 1024,
  un = (() => {
    let e = new Float32Array(1025)
    for (let t = 0; t <= ln; t++) {
      let n = t / ln,
        r = 0,
        i = 1
      for (let e = 0; e < 30; e++) {
        let e = (r + i) / 2
        e * e * e * (e * (e * 6 - 15) + 10) < n ? (r = e) : (i = e)
      }
      e[t] = (r + i) / 2
    }
    return e
  })()
function dn(e) {
  let t = I(1 - e, 0, 1) * ln,
    n = Math.min(Math.floor(t), 1023)
  return (2 * (un[n] + (un[n + 1] - un[n]) * (t - n)) - 1) * Zt
}
function fn(e) {
  let t = (e, t, n) => {
    let r = I((n - e) / (t - e), 0, 1)
    return r * r * (3 - 2 * r)
  }
  return L - (L + 0.55) * t(0, 3.45, e) - 1.8 * t(2.4, 9, e) - 6 * t(2.2, 3, e)
}
function pn(e, t) {
  return e <= 0 ? 0 : e <= t.d1 ? t.r - Math.sqrt(t.r * t.r - e * e) : t.f1 + t.s * (e - t.d1)
}
function mn(e, t, n) {
  let r = I(0.5 + (0.5 * (e - t)) / n, 0, 1)
  return t + (e - t) * r + n * r * (1 - r)
}
var hn = class {
    kx
    kz
    res
    base
    x0
    z0
    n
    h
    top
    constructor(e, t, n, r) {
      ;((this.kx = e),
        (this.kz = t),
        (this.res = n),
        (this.base = r),
        (this.x0 = e * 16),
        (this.z0 = t * 16),
        (this.n = 16 * n + 1),
        (this.h = r.slice()),
        (this.top = r.slice()))
    }
    updateTop(e = 0, t = 0, n = this.n - 1, r = this.n - 1) {
      let { n: i, h: a, top: o } = this,
        s = Math.round(Yt * this.res),
        c = Math.max(0, e - s),
        l = Math.min(i - 1, n + s),
        u = Math.max(0, t - s),
        d = Math.min(i - 1, r + s),
        f = Math.max(0, u - s),
        p = Math.min(i - 1, d + s),
        m = l - c + 1,
        h = new Float32Array(m * (p - f + 1))
      for (let e = f; e <= p; e++) {
        let t = e * i,
          n = (e - f) * m - c
        for (let e = c; e <= l; e++) {
          let r = -1 / 0
          for (let n = Math.max(0, e - s); n <= Math.min(i - 1, e + s); n++)
            r = Math.max(r, a[t + n])
          h[n + e] = r
        }
      }
      for (let e = u; e <= d; e++)
        for (let t = c; t <= l; t++) {
          let n = -1 / 0
          for (let r = Math.max(f, e - s); r <= Math.min(p, e + s); r++)
            n = Math.max(n, h[(r - f) * m + t - c])
          o[e * i + t] = n
        }
    }
    topAt(e, t) {
      let { n, res: r } = this,
        i = I(Math.round((e - this.x0) * r), 0, n - 1),
        a = I(Math.round((t - this.z0) * r), 0, n - 1)
      return this.top[a * n + i]
    }
    sample(e, t) {
      let { n, res: r, h: i } = this,
        a = I((e - this.x0) * r, 0, n - 1.000001),
        o = I((t - this.z0) * r, 0, n - 1.000001),
        s = Math.floor(a),
        c = Math.floor(o),
        l = a - s,
        u = o - c,
        d = i[c * n + s],
        f = i[c * n + s + 1],
        p = i[(c + 1) * n + s],
        m = i[(c + 1) * n + s + 1]
      return Math.abs(d - m) < Math.abs(f - p)
        ? u >= l
          ? d + l * (m - p) + u * (p - d)
          : d + l * (f - d) + u * (m - f)
        : l + u <= 1
          ? d + l * (f - d) + u * (p - d)
          : m + (1 - l) * (p - m) + (1 - u) * (f - m)
    }
  },
  gn = class e {
    base
    edits
    res
    patches = new Map()
    bases = new Map()
    queue = []
    constructor(e, t, n = 8) {
      ;((this.base = e), (this.edits = t), (this.res = n))
    }
    static chunkKey(e, t) {
      return (e + 512) * 1024 + (t + 512)
    }
    static unkey(e) {
      return [Math.floor(e / 1024) - 512, (e % 1024) - 512]
    }
    prepare(t) {
      for (let n of t) {
        if (this.bases.has(n)) continue
        let [t, r] = e.unkey(n),
          i = this.baseGrid(t, r, !1)
        this.queue.push(i)
      }
    }
    warm(e) {
      let t = performance.now() + e
      for (; this.queue.length; ) {
        if (!this.fillBase(this.queue[0], t)) return !0
        this.queue.shift()
      }
      return !1
    }
    baseGrid(t, n, r = !0) {
      let i = e.chunkKey(t, n),
        a = this.bases.get(i)
      if (!a) {
        let e = 16 * this.res + 1
        ;((a = { kx: t, kz: n, h: new Float32Array(e * e), rows: 0 }), this.bases.set(i, a))
      }
      return (r && this.fillBase(a, 1 / 0), a)
    }
    fillBase(e, t) {
      let { res: n } = this,
        r = 16 * n + 1,
        i = e.kx * 16,
        a = e.kz * 16
      for (; e.rows < r; ) {
        let o = e.rows++,
          s = a + o / n
        for (let t = 0; t < r; t++) e.h[o * r + t] = this.base.baseHeight(i + t / n, s)
        if (e.rows < r && performance.now() > t) return !1
      }
      return !0
    }
    patch(t, n) {
      return this.patches.get(e.chunkKey(t, n))
    }
    patchAt(t, n) {
      return this.patches.get(e.chunkKey(Math.floor(t / 16), Math.floor(n / 16)))
    }
    height(e, t) {
      let n = this.patchAt(e, t)
      return n ? n.sample(e, t) : this.base.baseHeight(e, t)
    }
    top(e, t) {
      let n = this.patchAt(e, t)
      return n ? n.topAt(e, t) : this.base.baseHeight(e, t)
    }
    reaches(e, t) {
      let n = e * 16 - 3,
        r = t * 16 - 3,
        i = (e + 1) * 16 + 3,
        a = (t + 1) * 16 + 3
      for (let [e, t] of this.edits.entries()) if (e >= n && e < i && t >= r && t < a) return !0
      return !1
    }
    refresh(t) {
      let n = new Set(),
        r = t ?? [...this.edits.entries()].map(([e, t]) => [e, t])
      if (!t)
        for (let [e, t] of this.patches)
          (n.add(e), this.reaches(t.kx, t.kz) ? t.h.set(t.base) : this.patches.delete(e))
      if (!r.length) return { chunks: n }
      let i = 1 / 0,
        a = 1 / 0,
        o = -1 / 0,
        s = -1 / 0
      for (let [e, t] of r)
        ((i = Math.min(i, e - 3)),
          (a = Math.min(a, t - 3)),
          (o = Math.max(o, e + 3 + 1)),
          (s = Math.max(s, t + 3 + 1)))
      let c = Math.floor(i / 16),
        l = Math.floor(a / 16),
        u = Math.floor((o - 1e-6) / 16),
        d = Math.floor((s - 1e-6) / 16),
        f = i - 3,
        p = a - 3,
        m = o - i + 6,
        h = s - a + 6,
        g = new Int8Array(m * h).fill(-99),
        _ = new Set(),
        v = new Set()
      for (let [e, t, n] of this.edits.entries()) {
        let r = e - f,
          i = t - p
        r < 0 || i < 0 || r >= m || i >= h || ((g[i * m + r] = n), n >= 0 ? _.add(n) : v.add(n))
      }
      let y = (e, t) => {
          let n = e - f,
            r = t - p
          return n < 0 || r < 0 || n >= m || r >= h ? -99 : g[r * m + n]
        },
        b = Math.max(0, ..._),
        x = (e, t) => y(e, t) >= 0,
        S = [],
        C = !1
      for (let e = 0; e < h; e++)
        for (let t = 0; t < m; t++) {
          if (g[e * m + t] < 0) continue
          C = !0
          let n = f + t,
            r = p + e
          ;(!x(n - 1, r) || !x(n + 1, r) || !x(n, r - 1) || !x(n, r + 1)) && S.push(n, r)
        }
      let w = Int32Array.from(S),
        T = v.size > 0,
        E = new Float64Array(b + 1),
        D = 0,
        O = []
      for (let t = c; t <= u; t++)
        for (let r = l; r <= d; r++) {
          let c = e.chunkKey(t, r),
            l = this.patches.get(c)
          if (!l && !this.reaches(t, r)) continue
          ;(l || ((l = new hn(t, r, this.res, this.baseGrid(t, r).h)), this.patches.set(c, l)),
            n.add(c))
          let { n: u, res: d } = l,
            h = Math.max(0, Math.floor((i - l.x0) * d)),
            _ = Math.min(u - 1, Math.ceil((o - l.x0) * d)),
            v = Math.max(0, Math.floor((a - l.z0) * d)),
            y = Math.min(u - 1, Math.ceil((s - l.z0) * d))
          O.push([l, h, v, _, y])
          let S = _ - h + 1 + 12,
            k = y - v + 1 + 12,
            A = null
          if (C) {
            A = new Float32Array(S * k)
            for (let e = v - 6; e <= y + 6; e++) {
              let t = l.z0 + e / d,
                n = Math.floor(t)
              for (let r = h - 6; r <= _ + 6; r++) {
                let i = l.x0 + r / d,
                  a = x(Math.floor(i), n) ? 0 : 16
                for (let e = 0; e < w.length && a > 0; e += 2) {
                  let n = Math.max(w[e] - i, 0, i - w[e] - 1)
                  if (n * n >= a) continue
                  let r = Math.max(w[e + 1] - t, 0, t - w[e + 1] - 1),
                    o = n * n + r * r
                  o < a && (a = o)
                }
                A[(e - v + 6) * S + (r - h + 6)] = fn(Math.sqrt(Math.min(a, 16)))
              }
            }
            an(A, S, k, nn)
          }
          let j = new Float64Array((_ - h + 1) * 3),
            M = new Float64Array((y - v + 1) * 3)
          for (let e = h; e <= _; e++) {
            let t = l.x0 + e / d,
              n = Math.floor(t)
            for (let r = 0; r < 3; r++)
              j[(e - h) * 3 + r] = cn(t - (n + r - 1), Zt) - cn(t - (n + r), Zt)
          }
          for (let e = v; e <= y; e++) {
            let t = l.z0 + e / d,
              n = Math.floor(t)
            for (let r = 0; r < 3; r++)
              M[(e - v) * 3 + r] = cn(t - (n + r - 1), Zt) - cn(t - (n + r), Zt)
          }
          for (let e = v; e <= y; e++) {
            let t = l.z0 + e / d,
              n = Math.floor(t),
              r = (e - v) * 3
            for (let i = h; i <= _; i++) {
              let a = l.x0 + i / d,
                o = l.base[e * u + i],
                s = Math.floor(a),
                c = (i - h) * 3
              A && (o = mn(o, A[(e - v + 6) * S + (i - h + 6)], rn))
              let _ = (n - 1 - p) * m + (s - 1 - f),
                y = !1
              for (let e = 0; e < 3; e++)
                for (let t = 0; t < 3; t++) {
                  let n = g[_ + t * m + e]
                  if (n === -99 || n === 0) continue
                  let i = j[c + e] * M[r + t]
                  if (!(i < 1e-6)) {
                    if (!y) {
                      y = !0
                      for (let e = 1; e <= b; e++) E[e] = 0
                      D = 0
                    }
                    if (n > 0) for (let e = 1; e <= n; e++) E[e] += i
                    else D += i
                  }
                }
              if (y) {
                let e = le(a * 1.9, t * 1.9, 5) * $t
                for (let t = 1; t <= b; t++) {
                  if (E[t] < 1e-5) continue
                  let n = dn(E[t]) + e
                  o = mn(o, Jt(t) - pn(n + Qt, en), on)
                }
                if (T && D > 1e-5) {
                  let t = dn(D) + e
                  o = Math.min(o, mn(Kt, o - pn(Qt - t, tn), sn))
                }
              }
              l.h[e * u + i] = o
            }
          }
        }
      if (!t) {
        for (let e of n) this.patches.get(e)?.updateTop()
        return { chunks: n }
      }
      for (let [e, t, n, r, i] of O) e.updateTop(t, n, r, i)
      return { chunks: n, window: { x0: i, z0: a, x1: o, z1: s } }
    }
    slope(e, t) {
      let n = 0.5 / this.res,
        r = this.height(e + n, t) - this.height(e - n, t),
        i = this.height(e, t + n) - this.height(e, t - n)
      return Math.hypot(r, i) / (2 * n)
    }
  },
  _n = 0.08,
  vn = class e {
    lighthouse = { x: 7, z: -6, footprint: 2 }
    edits = new Gt()
    shape
    reserved = new Set()
    flatCache = new Map()
    constructor() {
      let { x: e, z: t, footprint: n } = this.lighthouse
      for (let r = e - n; r < e + n; r++) for (let e = t - n; e < t + n; e++) this.reserve(r, e)
      this.shape = new gn(this, this.edits)
    }
    reserve(e, t) {
      this.reserved.add(`${e},${t}`)
    }
    unreserve(e, t) {
      this.reserved.delete(`${e},${t}`)
    }
    isReserved(e, t) {
      return this.reserved.has(`${e},${t}`)
    }
    baseLandSdf(e, t) {
      let n = this.lighthouse,
        r = de(e, t, -0.5, 0.8, 9.2, 6.8)
      ;((r = ce(r, de(e, t, 4.2, -3.2, 4.8, 3.4), 2.4)),
        (r = ce(r, fe(e, t, n.x + 0.2, n.z - 0.2, 3.3), 2.2)),
        (r = ce(r, de(e, t, -6.2, 4.2, 5.2, 3.8), 2.4)),
        (r = he(r, fe(e, t, 10.6, 2.6, 2.2), 1.8)))
      let i = z(2.8, 5.5, Math.hypot(e - n.x, t - n.z))
      return ((r += ue(e * 0.14 + 3.1, t * 0.14 - 1.7, 3, 7) * 0.95 * i), r)
    }
    sandWidth(e, t) {
      let n = this.lighthouse,
        r = 1.1
      return (
        (r += 1.8 * z(6.5, 1, Math.hypot(e + 7, t - 5))),
        (r += 0.5 * z(5, 1.5, Math.hypot(e - 3, t - 7.5))),
        (r -= 0.8 * z(6, 2.5, Math.hypot(e - n.x, t - n.z))),
        (r += ue(e * 0.26 - 5.3, t * 0.26 + 2.2, 2, 3) * 0.75),
        Math.max(r, 0.55)
      )
    }
    baseGrassSdf(e, t) {
      return this.baseLandSdf(e, t) + this.sandWidth(e, t)
    }
    baseHeight(t, n) {
      return e.profile(this.baseLandSdf(t, n))
    }
    static profile(e) {
      return L - (L + 0.55) * z(-0.25, 3.2, e) - 1.8 * z(2.4, 9, e) - 3.6 * z(8, 17, e)
    }
    baseFlat(e, t) {
      let n = (e + 512) * 1024 + (t + 512),
        r = this.flatCache.get(n)
      if (r === void 0) {
        r = !0
        for (let n = 0; n <= 2 && r; n++)
          for (let i = 0; i <= 2; i++)
            if (this.baseHeight(e + n / 2, t + i / 2) <= 0.57) {
              r = !1
              break
            }
        this.flatCache.set(n, r)
      }
      return r
    }
    height(e, t) {
      return this.shape.height(e, t)
    }
    landSdf(e, t, n = 2, r = this.baseLandSdf(e, t)) {
      let i = r
      if (!this.edits.size) return i
      let a = Math.floor(e),
        o = Math.floor(t)
      for (let r = -n; r <= n; r++)
        for (let s = -n; s <= n; s++) {
          let n = this.edits.get(a + r, o + s)
          if (n === void 0 || n < 0) continue
          let c = Math.max(a + r - e, 0, e - a - r - 1),
            l = Math.max(o + s - t, 0, t - o - s - 1),
            u = Math.hypot(c, l)
          i = Math.min(i, u > 0 ? u : -0.5)
        }
      return i
    }
    grassSdf(e, t) {
      return this.baseGrassSdf(e, t)
    }
    levelAt(e, t) {
      return this.edits.get(e, t)
    }
    level(e, t) {
      let n = this.edits.get(e, t)
      return n === void 0 ? (this.baseFlat(e, t) ? 0 : void 0) : n
    }
    setLevel(e, t, n) {
      this.edits.set(e, t, n === 0 && this.baseFlat(e, t) ? void 0 : n)
    }
    groundLevel(e, t) {
      let n = this.level(e, t)
      return n === void 0 || n < 0 ? null : n
    }
    isBuildableGround(e, t) {
      return !this.isReserved(e, t) && this.groundLevel(e, t) !== null
    }
    raycast(e, t, n = 500, r = !1) {
      let i = L + Math.min(this.edits.maxLevel, 5) + 0.05,
        a = 0,
        o = n
      if (Math.abs(t.y) < 1e-6) {
        if (e.y > i || e.y < -6) return null
      } else {
        let n = (i - e.y) / t.y,
          r = (-6 - e.y) / t.y
        ;((a = Math.max(a, Math.min(n, r))), (o = Math.min(o, Math.max(n, r))))
      }
      if (a > o) return null
      let s = (n) => e.y + t.y * n - this.height(e.x + t.x * n, e.z + t.z * n)
      if (s(a) <= 0) return null
      let c = a
      for (let n = a + _n; ; n += _n) {
        let i = Math.min(n, o)
        if (s(i) <= 0) {
          let n = c,
            a = i
          for (let e = 0; e < 10; e++) {
            let e = (n + a) / 2
            s(e) > 0 ? (n = e) : (a = e)
          }
          let o = (n + a) / 2,
            l = e.y + t.y * o
          if (r && l < 0 && t.y < 0 && e.y > 0) {
            let n = -e.y / t.y
            return { t: n, x: e.x + t.x * n, y: 0, z: e.z + t.z * n, water: !0 }
          }
          return { t: o, x: e.x + t.x * o, y: l, z: e.z + t.z * o, water: !1 }
        }
        if (((c = i), i >= o)) return null
      }
    }
    minHeightUnder(e, t, n, r) {
      let i = 1 / 0
      for (let a = 0; a <= 2; a++)
        for (let o = 0; o <= 2; o++)
          i = Math.min(i, this.height(e + ((n - e) * a) / 2, t + ((r - t) * o) / 2))
      return i
    }
    get bounds() {
      return pe
    }
  },
  Y = {
    uTerrainData: { value: null },
    uTerrainRect: { value: new g() },
    uWaterMask: { value: null },
    uContactAO: { value: null },
    uContactRect: { value: new g() },
  },
  yn = 0.6
function bn(e, t) {
  if (e === 0) {
    let e = I(t / 0.42, 0, 1),
      n = 1 - e
    return n * n * n * Math.cos(6.5 * e)
  }
  if (e === 1) {
    let e = I(t / 0.3, 0, 1),
      n = 1 - e
    return n * n * n * Math.cos(5.5 * e)
  }
  let n = I(t / yn, 0, 1)
  return 1 - n * n * (3 - 2 * n)
}
var xn = `
float lhAnimLeft(float style, float age) {
  if (style < 0.5) { float k = clamp(age / 0.42, 0.0, 1.0); float u = 1.0 - k; return u * u * u * cos(6.5 * k); }
  if (style < 1.5) { float k = clamp(age / 0.3, 0.0, 1.0); float u = 1.0 - k; return u * u * u * cos(5.5 * k); }
  float k = clamp(age / ${yn.toFixed(3)}, 0.0, 1.0);
  return 1.0 - k * k * (3.0 - 2.0 * k);
}
`
function Sn(e, t, n, r, i, a, o = 0) {
  if (Math.abs(r - n) <= 1e-4) return !1
  let s = (a && a[o] !== 0 ? n + a[o] * bn(a[o + 2], i - a[o + 1]) : n) - r
  return ((e[t] = s), (e[t + 1] = i), (e[t + 2] = s < 0 ? 0 : r < 0 ? 2 : 1), !0)
}
var Cn = 3,
  X = 4,
  wn = 0.3,
  Tn = 2,
  En = qt - 0.02,
  Dn = qt + 0.05,
  On = 4,
  Z = 16,
  kn = 0.01,
  An = 0.005,
  jn = -0.15,
  Mn = 0.5
function Nn(e) {
  return (e < 0.06) | (e < En ? 2 : 0) | (e >= Dn ? 4 : 0)
}
var Pn = `
attribute vec3 aAnim; // the height offset it started from, when, and how it eases (see groundAnim)
// How much the ground here is still easing into its new shape: + while it settles down onto it (the
// whole way), − as it starts to rise (its new shape's look takes over as soon as it's under way).
varying float vLhMoving;
${xn}
`,
  Fn = `
float lhLeft = lhAnimLeft(aAnim.z, uTime - aAnim.y);
float lhOff = aAnim.x * lhLeft;
transformed.y += lhOff;
vLhMoving = aAnim.z < 0.5 ? -smoothstep(0.6, 0.95, lhLeft) * step(1e-4, abs(aAnim.x)) : min(abs(lhOff) * 40.0, 1.0);
`,
  In = class {
    island
    group = new S()
    data
    waterMask
    chunks = new Map()
    settling = new Map()
    material
    depthMaterial
    ground
    ponds
    baseLand
    sea
    seen
    queue
    front
    maskNext
    wetCrossings = []
    dataUploaded = !1
    rect
    contactAO
    contactRect
    cursor = new g(0, 0, 0, 0)
    constructor(e) {
      this.island = e
      let t = e.bounds,
        n = t.maxX - t.minX,
        i = t.maxZ - t.minZ
      this.rect = new g(t.minX, t.minZ, 1 / n, 1 / i)
      let a = n * X * i * X
      ;((this.ground = new Float32Array(a)),
        (this.ponds = new Uint8Array(a)),
        (this.baseLand = new Float32Array(a)),
        (this.sea = new Uint8Array(a)),
        (this.seen = new Uint8Array(a)),
        (this.queue = new Int32Array(a)),
        (this.front = new Int32Array(a)),
        (this.maskNext = new Uint8Array(a)),
        (this.data = this.buildDataTexture(n, i)),
        (this.data.onUpdate = () => (this.dataUploaded = !0)),
        (this.waterMask = new T(new Uint8Array(a), n * X, i * X, m)),
        (this.waterMask.magFilter = c),
        (this.waterMask.minFilter = c),
        (this.waterMask.needsUpdate = !0),
        this.updateWater(!0))
      let o = n * 4,
        s = i * 4
      ;((this.contactAO = new T(new Uint8Array(o * s), o, s, m)),
        (this.contactAO.magFilter = c),
        (this.contactAO.minFilter = c),
        (this.contactAO.needsUpdate = !0),
        (this.contactRect = this.rect.clone()),
        (Y.uTerrainData.value = this.data),
        (Y.uTerrainRect.value = this.rect),
        (Y.uWaterMask.value = this.waterMask),
        (Y.uContactAO.value = this.contactAO),
        (Y.uContactRect.value = this.contactRect),
        (this.material = this.buildMaterial()),
        (this.depthMaterial = new ee()),
        (this.depthMaterial.onBeforeCompile = (e) => {
          ;((e.uniforms.uTime = J.uTime),
            (e.vertexShader = e.vertexShader
              .replace(`#include <common>`, `#include <common>\nuniform float uTime;\n${Pn}`)
              .replace(`#include <begin_vertex>`, `#include <begin_vertex>\n${Fn}`)))
        }),
        (this.depthMaterial.customProgramCacheKey = () => `terrain-depth`),
        (this.group.name = `terrain`))
      for (let [e, t] of this.chunkRange()) this.buildChunk(e, t, !1)
      this.prepareReliefs()
      let l = new r(new ae(0.1, 0.1).rotateX(-Math.PI / 2), this.material)
      ;(l.geometry.setAttribute(`aAnim`, new h(new Float32Array(12), 3)),
        l.position.set(0, -6, 0),
        (l.castShadow = !0),
        (l.customDepthMaterial = this.depthMaterial),
        this.group.add(l))
    }
    *chunkRange() {
      let e = this.island.bounds
      for (let t = Math.floor(e.minX / 16); t <= Math.floor((e.maxX - 1e-6) / 16); t++)
        for (let n = Math.floor(e.minZ / 16); n <= Math.floor((e.maxZ - 1e-6) / 16); n++)
          yield [t, n]
    }
    prepareReliefs() {
      let e = new Set()
      for (let t of this.chunks.values()) {
        let n = t.mesh.geometry.getAttribute(`position`).array
        for (let r = 0; r < t.nx * t.nz; r++) {
          if (n[r * 3 + 1] < -1.3) continue
          let t = n[r * 3],
            i = n[r * 3 + 2]
          for (let n = Math.floor((t - 3) / 16); n <= Math.floor((t + 3) / 16); n++)
            for (let t = Math.floor((i - 3) / 16); t <= Math.floor((i + 3) / 16); t++)
              e.add(gn.chunkKey(n, t))
        }
      }
      let t = (e) => {
        let [t, n] = gn.unkey(e)
        return Math.hypot(t + 0.5, n + 0.5)
      }
      this.island.shape.prepare([...e].sort((e, n) => t(e) - t(n)))
    }
    refresh(e, t = {}) {
      let n = this.island.bounds,
        r = !!t.animate,
        i = 1 / 0,
        a = 1 / 0,
        o = -1 / 0,
        s = -1 / 0
      for (let t of e.chunks) {
        let [c, l] = gn.unkey(t)
        if (
          c * 16 >= n.maxX ||
          (c + 1) * 16 <= n.minX ||
          l * 16 >= n.maxZ ||
          (l + 1) * 16 <= n.minZ
        )
          continue
        let u = this.chunks.get(t),
          d = this.island.shape.patch(c, l)
        ;(u && d && u.patch === d && e.window
          ? this.updateChunk(u, e.window, r)
          : this.buildChunk(c, l, r),
          (i = Math.min(i, c * 16)),
          (a = Math.min(a, l * 16)),
          (o = Math.max(o, (c + 1) * 16)),
          (s = Math.max(s, (l + 1) * 16)))
      }
      if (e.window) for (let [t, n] of this.chunks) e.chunks.has(t) || this.edgeNormals(n, e.window)
      if (t.cells?.length) {
        ;((i = a = 1 / 0), (o = s = -1 / 0))
        for (let [e, n] of t.cells)
          ((i = Math.min(i, e - On)),
            (a = Math.min(a, n - On)),
            (o = Math.max(o, e + 1 + On)),
            (s = Math.max(s, n + 1 + On)))
      }
      ;((i < o && this.paintData(i, a, o, s)) || !t.cells) && this.updateWater(!t.cells)
    }
    isPond(e, t) {
      let n = this.island.bounds,
        r = (n.maxX - n.minX) * X,
        i = Math.floor((e - n.minX) * X),
        a = Math.floor((t - n.minZ) * X)
      return i < 0 || a < 0 || i >= r || a >= (n.maxZ - n.minZ) * X ? !1 : this.ponds[a * r + i] > 0
    }
    updateWater(e = !1) {
      let t = this.waterMask.image,
        { width: n, height: r } = t,
        i = this.ground,
        a = n * r,
        { sea: o, seen: s, queue: c } = this,
        l = 0,
        u = (e) => {
          o[e] || i[e] >= 0.06 || ((o[e] = 1), (c[l++] = e))
        },
        d = this.wetCrossings
      if (e || d.some((e) => e < 0 && o[-1 - e])) {
        o.fill(0)
        for (let e = 0; e < n; e++) (u(e), u((r - 1) * n + e))
        for (let e = 1; e < r - 1; e++) (u(e * n), u(e * n + n - 1))
      } else
        for (let e of d) {
          if (e < 0) continue
          let t = e % n
          ;(e < n ||
            e >= a - n ||
            t === 0 ||
            t === n - 1 ||
            o[e - 1] ||
            o[e + 1] ||
            o[e - n] ||
            o[e + n]) &&
            u(e)
        }
      d.length = 0
      for (let e = 0; e < l; e++) {
        let t = c[e],
          r = t % n,
          s = t - 1
        ;(r > 0 && !o[s] && i[s] < 0.06 && ((o[s] = 1), (c[l++] = s)),
          (s = t + 1),
          r < n - 1 && !o[s] && i[s] < 0.06 && ((o[s] = 1), (c[l++] = s)),
          (s = t - n),
          t >= n && !o[s] && i[s] < 0.06 && ((o[s] = 1), (c[l++] = s)),
          (s = t + n),
          t < a - n && !o[s] && i[s] < 0.06 && ((o[s] = 1), (c[l++] = s)))
      }
      let f = this.maskNext
      ;(f.fill(0), s.fill(0), this.ponds.fill(0))
      let p = this.front,
        m = 0
      for (let e = 0; e < a; e++) {
        if (s[e] || o[e] || i[e] >= En) continue
        ;((l = 0), (s[e] = 1), (c[l++] = e))
        let t = !1,
          r = (e) => {
            o[e] ? (t = !0) : !s[e] && i[e] < En && ((s[e] = 1), (c[l++] = e))
          }
        for (let e = 0; e < l; e++) {
          let t = c[e],
            i = t % n
          ;(i > 0 && r(t - 1), i < n - 1 && r(t + 1), t >= n && r(t - n), t < a - n && r(t + n))
        }
        if (!t)
          for (let e = 0; e < l; e++) ((this.ponds[c[e]] = 1), (f[c[e]] = 255), (p[m++] = c[e]))
      }
      let h = 0,
        g = m
      for (let e = 0; e < Tn && h < g; e++) {
        let e = g,
          t = (e) => {
            f[e] || i[e] < Dn || ((f[e] = 255), (p[g++] = e))
          }
        for (let r = h; r < e; r++) {
          let e = p[r],
            i = e % n
          ;(i > 0 && t(e - 1), i < n - 1 && t(e + 1), e >= n && t(e - n), e < a - n && t(e + n))
        }
        h = e
      }
      let _ = t.data
      for (let e = 0; e < a; e++)
        if (_[e] !== f[e]) {
          ;(_.set(f), (this.waterMask.needsUpdate = !0))
          break
        }
    }
    paintData(e, t, n, r) {
      let { island: i } = this,
        a = i.bounds,
        o = this.data.image,
        s = o.width,
        c = Math.max(0, Math.floor((e - a.minX) * X)),
        l = Math.min(s - 1, Math.ceil((n - a.minX) * X)),
        u = Math.max(0, Math.floor((t - a.minZ) * X)),
        d = Math.min(o.height - 1, Math.ceil((r - a.minZ) * X)),
        f = !1
      for (let e = u; e <= d; e++)
        for (let t = c; t <= l; t++)
          f =
            this.writeTexel(o.data, e * s + t, a.minX + (t + 0.5) / X, a.minZ + (e + 0.5) / X) || f
      if (this.dataUploaded)
        for (let e = u; e <= d; e++) this.data.addUpdateRange((e * s + c) * 4, (l - c + 1) * 4)
      else this.data.clearUpdateRanges()
      return ((this.data.needsUpdate = !0), f)
    }
    writeTexel(e, t, n, r) {
      let { island: i } = this,
        a = t * 4,
        o = this.ground[t],
        s = i.height(n, r)
      ;((this.ground[t] = s),
        o < 0.06 != s < 0.06 && this.wetCrossings.push(s < 0.06 ? t : -1 - t),
        (e[a] = _.toHalfFloat(i.shape.top(n, r))),
        (e[a + 2] = _.toHalfFloat(i.landSdf(n, r, 2, this.baseLand[t]))))
      let c = i.levelAt(Math.floor(n), Math.floor(r))
      return ((e[a + 3] = _.toHalfFloat(+(c !== void 0 && c < 0))), Nn(o) !== Nn(s))
    }
    buildChunk(e, t, n) {
      let { island: i } = this,
        a = i.bounds,
        o = gn.chunkKey(e, t),
        s = this.chunks.get(o)
      s && (this.group.remove(s.mesh), s.mesh.geometry.dispose(), this.chunks.delete(o))
      let c = Math.max(e * 16, a.minX),
        l = Math.min((e + 1) * 16, a.maxX),
        u = Math.max(t * 16, a.minZ),
        f = Math.min((t + 1) * 16, a.maxZ),
        p = i.shape.patch(e, t),
        m = p ? p.res : Cn,
        g = Math.round((l - c) * m) + 1,
        _ = Math.round((f - u) * m) + 1,
        v = 1 / m,
        y = new Uint32Array(2 * (g + _) - 4),
        b = 0
      for (let e = 0; e < g - 1; e++) y[b++] = e
      for (let e = 0; e < _ - 1; e++) y[b++] = e * g + g - 1
      for (let e = g - 1; e > 0; e--) y[b++] = (_ - 1) * g + e
      for (let e = _ - 1; e > 0; e--) y[b++] = e * g
      let x = Math.ceil((g - 1) / Z),
        S = Math.ceil((_ - 1) / Z),
        C = p ? ((g - 1) / 2) * ((_ - 1) / 2) * 6 : 0,
        w = {
          mesh: void 0,
          patch: p,
          x0: c,
          z0: u,
          step: v,
          nx: g,
          nz: _,
          pi0: p ? Math.round((c - p.x0) * m) : 0,
          pj0: p ? Math.round((u - p.z0) * m) : 0,
          heights: new Float32Array(g * _),
          ring: y,
          tx: x,
          tz: S,
          lod: new Uint8Array(x * S).fill(1),
          held: new Uint8Array(x * S),
          shadowLen: C,
          tilesAt: C + y.length * 6,
          tilesLen: 0,
        },
        T = g * _ + y.length,
        E = new Float32Array(T * 3),
        D = new Float32Array(T * 3),
        O = new Float32Array(T * 3),
        { heights: k } = w,
        A = p?.n ?? 0
      for (let e = 0; e < _; e++)
        for (let t = 0; t < g; t++) {
          let n = e * g + t,
            r = p ? p.h[(e + w.pj0) * A + t + w.pi0] : i.height(c + t * v, u + e * v)
          ;((k[n] = r), (E[n * 3] = c + t * v), (E[n * 3 + 1] = r), (E[n * 3 + 2] = u + e * v))
        }
      if (p && n) {
        let e = J.uTime.value
        for (let t = 0; t < _; t++)
          for (let n = 0; n < g; n++) {
            let r = t * g + n
            Sn(O, r * 3, p.base[(t + w.pj0) * A + n + w.pi0], k[r], e) && this.hold(w, n, t)
          }
      }
      this.gridNormals(w, D, 0, 0, g - 1, _ - 1)
      let j = g * _
      for (let e = 0; e < y.length; e++) {
        let t = y[e]
        ;((E[(j + e) * 3] = E[t * 3]), (E[(j + e) * 3 + 2] = E[t * 3 + 2]))
      }
      this.copySkirt(w, E, D, O)
      let M = new Uint32Array(w.tilesAt + (g - 1) * (_ - 1) * 6)
      p && this.quads(w, M, 0, 2, 0, 0, (g - 1) / 2 - 1, (_ - 1) / 2 - 1)
      for (let e = 0, t = C; e < y.length; e++, t += 6) {
        let n = y[e],
          r = y[(e + 1) % y.length],
          i = j + e,
          a = j + ((e + 1) % y.length)
        ;((M[t] = n),
          (M[t + 1] = i),
          (M[t + 2] = a),
          (M[t + 3] = n),
          (M[t + 4] = a),
          (M[t + 5] = r))
      }
      ;(p && this.fitTiles(w, 0, 0, x - 1, S - 1), (w.tilesLen = this.writeTiles(w, M)))
      let N = new d()
      ;(N.setAttribute(`position`, new h(E, 3)),
        N.setAttribute(`normal`, new h(D, 3)),
        N.setAttribute(`aAnim`, new h(O, 3)),
        N.setIndex(new h(M, 1)),
        N.setDrawRange(C, y.length * 6 + w.tilesLen))
      let P = new r(N, this.material)
      ;((w.mesh = P),
        this.setBounds(w),
        (P.receiveShadow = !0),
        (P.name = `terrain ${e},${t}`),
        P.layers.enable(6),
        p &&
          ((P.castShadow = !0),
          (P.customDepthMaterial = this.depthMaterial),
          (P.onBeforeShadow = () => N.setDrawRange(0, w.shadowLen)),
          (P.onAfterShadow = () => N.setDrawRange(w.shadowLen, w.ring.length * 6 + w.tilesLen))),
        this.group.add(P),
        this.chunks.set(o, w),
        w.held.includes(1) && this.settling.set(o, J.uTime.value + yn))
    }
    updateChunk(e, t, n) {
      let r = e.patch,
        { nx: i, nz: a, heights: o } = e,
        s = r.res,
        c = Math.max(0, Math.floor((t.x0 - e.x0) * s)),
        l = Math.min(i - 1, Math.ceil((t.x1 - e.x0) * s)),
        u = Math.max(0, Math.floor((t.z0 - e.z0) * s)),
        d = Math.min(a - 1, Math.ceil((t.z1 - e.z0) * s))
      if (c > l || u > d) return
      let f = e.mesh.geometry,
        p = f.getAttribute(`position`),
        m = f.getAttribute(`normal`),
        h = f.getAttribute(`aAnim`),
        g = f.getIndex(),
        _ = p.array,
        v = h.array,
        y = J.uTime.value,
        b = !1
      for (let t = u; t <= d; t++)
        for (let a = c; a <= l; a++) {
          let s = t * i + a,
            c = (t + e.pj0) * r.n + a + e.pi0,
            l = r.h[c]
          ;(n
            ? Sn(v, s * 3, o[s], l, y, v, s * 3) && (this.hold(e, a, t), (b = !0))
            : l !== o[s] && (v[s * 3] = 0),
            (o[s] = l),
            (_[s * 3 + 1] = l))
        }
      b && this.settling.set(gn.chunkKey(r.kx, r.kz), y + yn)
      let x = Math.max(0, c - 1),
        S = Math.min(i - 1, l + 1),
        C = Math.max(0, u - 1),
        w = Math.min(a - 1, d + 1)
      this.gridNormals(e, m.array, x, C, S, w)
      let T = Math.max(0, c - 1),
        E = Math.min(i - 2, l),
        D = Math.max(0, u - 1),
        O = Math.min(a - 2, d),
        k = T >> 1,
        A = E >> 1,
        j = D >> 1,
        M = O >> 1,
        N = (i - 1) / 2
      ;(this.quads(e, g.array, 0, 2, k, j, A, M),
        g.addUpdateRange(j * N * 6, (M - j + 1) * N * 6),
        this.fitTiles(
          e,
          Math.floor(T / Z),
          Math.floor(D / Z),
          Math.floor(E / Z),
          Math.floor(O / Z)
        ),
        this.drawTiles(e))
      for (let e of [p, m, h])
        (e.addUpdateRange(C * i * 3, (w - C + 1) * i * 3), (e.needsUpdate = !0))
      if (x === 0 || C === 0 || S === i - 1 || w === a - 1) {
        this.copySkirt(e, _, m.array, v)
        for (let t of [p, m, h]) t.addUpdateRange(i * a * 3, e.ring.length * 3)
      }
      this.setBounds(e)
    }
    update() {
      if (!this.settling.size) return
      let e = J.uTime.value
      for (let [t, n] of this.settling) {
        if (e < n) continue
        this.settling.delete(t)
        let r = this.chunks.get(t)
        if (r?.patch) {
          for (let e = 0; e < r.held.length; e++)
            r.held[e] &&
              ((r.held[e] = 0), (r.lod[e] = this.tileLod(r, e % r.tx, Math.floor(e / r.tx))))
          this.drawTiles(r)
        }
      }
    }
    hold(e, t, n) {
      let r = Math.max(0, Math.floor((t - 1) / Z)),
        i = Math.min(e.tx - 1, Math.floor(t / Z)),
        a = Math.max(0, Math.floor((n - 1) / Z)),
        o = Math.min(e.tz - 1, Math.floor(n / Z))
      for (let t = a; t <= o; t++) for (let n = r; n <= i; n++) e.held[t * e.tx + n] = 1
    }
    fitTiles(e, t, n, r, i) {
      for (let a = n; a <= i; a++)
        for (let n = t; n <= r; n++)
          e.lod[a * e.tx + n] = e.held[a * e.tx + n] ? 1 : this.tileLod(e, n, a)
    }
    tileLod(e, t, n) {
      let { nx: r, heights: i } = e,
        a = t * Z,
        o = n * Z,
        s = Math.min(Z, r - 1 - a),
        c = Math.min(Z, e.nz - 1 - o)
      search: for (let e = Z; e >= 2; e >>= 1)
        if (!(s % e || c % e)) {
          for (let t = 0; t < c; t += e)
            for (let n = 0; n < s; n += e) {
              let s = (o + t) * r + a + n,
                c = i[s],
                l = i[s + e],
                u = i[s + e * r],
                d = i[s + e * r + e],
                f = Math.abs(c - d) < Math.abs(l - u)
              for (let t = 0; t <= e; t++) {
                let n = t / e
                for (let a = 0; a <= e; a++) {
                  let o = a / e,
                    p = f
                      ? n >= o
                        ? c + o * (d - u) + n * (u - c)
                        : c + o * (l - c) + n * (d - l)
                      : o + n <= 1
                        ? c + o * (l - c) + n * (u - c)
                        : d + (1 - o) * (u - d) + (1 - n) * (l - d),
                    m = Math.abs(i[s + t * r + a] - p)
                  if (m > kn || (m > An && p > jn && p < Mn)) continue search
                }
              }
            }
          return e
        }
      return 1
    }
    drawTiles(e) {
      let t = e.mesh.geometry,
        n = t.getIndex()
      ;((e.tilesLen = this.writeTiles(e, n.array)),
        n.addUpdateRange(e.tilesAt, e.tilesLen),
        (n.needsUpdate = !0),
        t.setDrawRange(e.shadowLen, e.ring.length * 6 + e.tilesLen))
    }
    writeTiles(e, t) {
      let { nx: n, tx: r, tz: i, lod: a, heights: o } = e,
        s = e.tilesAt
      for (let c = 0; c < i; c++)
        for (let l = 0; l < r; l++) {
          let u = a[c * r + l],
            d = l * Z,
            f = c * Z,
            p = Math.min(Z, n - 1 - d),
            m = Math.min(Z, e.nz - 1 - f),
            h = l > 0 ? Math.min(u, a[c * r + l - 1]) : 1,
            g = l < r - 1 ? Math.min(u, a[c * r + l + 1]) : 1,
            _ = c > 0 ? Math.min(u, a[(c - 1) * r + l]) : 1,
            v = c < i - 1 ? Math.min(u, a[(c + 1) * r + l]) : 1
          for (let e = 0; e < m; e += u)
            for (let r = 0; r < p; r += u) {
              let i = (f + e) * n + d + r,
                a = i + u,
                c = i + u * n,
                l = c + u,
                y = r === 0 ? h : u,
                b = r + u === p ? g : u,
                x = e === 0 ? _ : u,
                S = e + u === m ? v : u
              if (y === u && b === u && x === u && S === u) {
                ;(Math.abs(o[i] - o[l]) < Math.abs(o[a] - o[c])
                  ? ((t[s] = i),
                    (t[s + 1] = c),
                    (t[s + 2] = l),
                    (t[s + 3] = i),
                    (t[s + 4] = l),
                    (t[s + 5] = a))
                  : ((t[s] = i),
                    (t[s + 1] = c),
                    (t[s + 2] = a),
                    (t[s + 3] = a),
                    (t[s + 4] = c),
                    (t[s + 5] = l)),
                  (s += 6))
                continue
              }
              let C = i + (u >> 1) * n + (u >> 1),
                w = i,
                T = (e) => {
                  ;((t[s] = C), (t[s + 1] = w), (t[s + 2] = e), (s += 3), (w = e))
                }
              for (let e = y; e < u; e += y) T(i + e * n)
              T(c)
              for (let e = S; e < u; e += S) T(c + e)
              T(l)
              for (let e = b; e < u; e += b) T(l - e * n)
              T(a)
              for (let e = x; e < u; e += x) T(a - e)
              T(i)
            }
        }
      return s - e.tilesAt
    }
    edgeNormals(e, t) {
      let { nx: n, nz: r, step: i } = e,
        a = Math.max(0, Math.floor((t.x0 - e.x0) / i) - 1),
        o = Math.min(n - 1, Math.ceil((t.x1 - e.x0) / i) + 1),
        s = Math.max(0, Math.floor((t.z0 - e.z0) / i) - 1),
        c = Math.min(r - 1, Math.ceil((t.z1 - e.z0) / i) + 1)
      if (a > o || s > c) return
      let l = e.mesh.geometry,
        u = l.getAttribute(`normal`)
      ;(this.gridNormals(e, u.array, a, s, o, c),
        this.copySkirt(e, l.getAttribute(`position`).array, u.array, l.getAttribute(`aAnim`).array),
        u.addUpdateRange(s * n * 3, (c - s + 1) * n * 3),
        u.addUpdateRange(n * r * 3, e.ring.length * 3),
        (u.needsUpdate = !0))
    }
    gridNormals(e, t, n, r, i, a) {
      let { nx: o, nz: s, heights: c, step: l, x0: u, z0: d } = e,
        f = (e, t) =>
          e >= 0 && t >= 0 && e < o && t < s
            ? c[t * o + e]
            : this.island.height(u + e * l, d + t * l),
        p = 2 * l
      for (let e = r; e <= a; e++) {
        let r = e === 0 || e === s - 1
        for (let a = n; a <= i; a++) {
          let n = e * o + a,
            i,
            s
          r || a === 0 || a === o - 1
            ? ((i = f(a - 1, e) - f(a + 1, e)), (s = f(a, e - 1) - f(a, e + 1)))
            : ((i = c[n - 1] - c[n + 1]), (s = c[n - o] - c[n + o]))
          let l = 1 / Math.sqrt(i * i + p * p + s * s)
          ;((t[n * 3] = i * l), (t[n * 3 + 1] = p * l), (t[n * 3 + 2] = s * l))
        }
      }
    }
    copySkirt(e, t, n, r) {
      let { ring: i } = e,
        a = e.nx * e.nz
      for (let e = 0; e < i.length; e++) {
        let o = i[e] * 3,
          s = (a + e) * 3
        t[s + 1] = t[o + 1] - wn
        for (let e = 0; e < 3; e++) ((n[s + e] = n[o + e]), (r[s + e] = r[o + e]))
      }
    }
    quads(e, t, n, r, i, a, o, s) {
      let { nx: c, heights: l } = e,
        u = (c - 1) / r
      for (let e = a; e <= s; e++)
        for (let a = i; a <= o; a++) {
          let i = e * r * c + a * r,
            o = i + r,
            s = i + r * c,
            d = s + r,
            f = n + (e * u + a) * 6
          Math.abs(l[i] - l[d]) < Math.abs(l[o] - l[s])
            ? ((t[f] = i),
              (t[f + 1] = s),
              (t[f + 2] = d),
              (t[f + 3] = i),
              (t[f + 4] = d),
              (t[f + 5] = o))
            : ((t[f] = i),
              (t[f + 1] = s),
              (t[f + 2] = o),
              (t[f + 3] = o),
              (t[f + 4] = s),
              (t[f + 5] = d))
        }
    }
    setBounds(e) {
      let t = e.mesh.geometry,
        { heights: n } = e,
        r = 1 / 0,
        i = -1 / 0
      for (let e = 0; e < n.length; e++) {
        let t = n[e]
        ;(t < r && (r = t), t > i && (i = t))
      }
      let a = (t.boundingBox ??= new N())
      ;(a.min.set(e.x0, r - wn, e.z0),
        a.max.set(e.x0 + (e.nx - 1) * e.step, i, e.z0 + (e.nz - 1) * e.step))
      let o = (t.boundingSphere ??= new f())
      ;(a.getBoundingSphere(o), (o.radius += 1.5))
    }
    buildDataTexture(e, t) {
      let { island: n } = this,
        r = n.bounds,
        a = e * X,
        o = t * X,
        s = new Uint16Array(a * o * 4)
      for (let e = 0; e < o; e++)
        for (let t = 0; t < a; t++) {
          let i = r.minX + (t + 0.5) / X,
            o = r.minZ + (e + 0.5) / X,
            c = e * a + t
          ;((this.baseLand[c] = n.baseLandSdf(i, o)),
            (s[c * 4 + 1] = _.toHalfFloat(n.grassSdf(i, o))),
            this.writeTexel(s, c, i, o))
        }
      let l = new T(s, a, o, C, O)
      return (
        (l.magFilter = c),
        (l.minFilter = c),
        (l.wrapS = l.wrapT = i),
        (l.needsUpdate = !0),
        l
      )
    }
    buildMaterial() {
      return Nt(new oe({ roughness: 0.95, metalness: 0 }), {
        key: `terrain`,
        uniforms: {
          uTerrainData: { value: this.data },
          uTerrainRect: { value: this.rect },
          uWaterMask: { value: this.waterMask },
          uContactAO: { value: this.contactAO },
          uContactRect: { value: this.contactRect },
          uCursor: { value: this.cursor },
          uGrassA: { value: R.grassA },
          uGrassB: { value: R.grassB },
          uGrassC: { value: R.grassC },
          uSand: { value: R.sand },
          uSandWet: { value: R.sandWet },
          uSandDeep: { value: R.sandDeep },
          uEarth: { value: R.earth },
          uEarthDark: { value: R.earthDark },
          uEarthLight: { value: R.earthLight },
          uShallow: { value: R.waterShallow },
          uPond: { value: R.pond },
          uSky: { value: R.skyZenith },
        },
        vertexHead: Pn,
        vertexMain: Fn,
        fragmentHead: `
uniform sampler2D uTerrainData;
uniform vec4 uTerrainRect;
uniform sampler2D uWaterMask;
varying float vLhMoving;
uniform vec3 uPond;
uniform sampler2D uContactAO;
uniform vec4 uContactRect;
uniform vec4 uCursor;
uniform vec3 uSand, uSandWet, uSandDeep, uShallow, uSky;
uniform vec3 uEarth, uEarthDark, uEarthLight;
${At}
${Mt}
#define GROUND_Y ${L.toFixed(4)}
// How much of a detail of the given size (world units) to keep at this pixel footprint: none below four
// pixels across, all of it from eight (finer relief only shimmers).
float lhKeep(float size, float px) {
  return clamp(size / px * 0.25 - 1.0, 0.0, 1.0);
}
// Relief of open ground, as the slope of its height (world units per unit, along x and z): soft mounds and
// hollows in the lawn (weight g); wind ripples, bending and fading in patches, with a steeper lee side, and
// grain in the sand (weight rippled). Slopes are exact (the noise's own gradients), so the relief stays crisp.
vec2 lhGroundSlope(vec2 xz, float g, float rippled, float px) {
  vec2 s = vec2(0.0);
  if (g > 0.0) {
    vec3 m1 = lhNoiseD(xz * 0.8);
    vec3 m2 = lhNoiseD(xz * 1.624 + vec2(17.1, 9.7));
    vec3 m3 = lhNoiseD(xz * 3.1);
    s += ((m1.xy * 0.8 * 0.6667 + m2.xy * 1.624 * 0.3333) * 0.15 + m3.xy * 3.1 * 0.02 * lhKeep(0.32, px)) * g;
  }
  if (rippled > 0.0) {
    vec3 w = lhNoiseD(xz * 1.3);
    float phase = dot(xz, vec2(0.8, 0.6)) * 21.0 + w.z * 5.0;
    vec2 dPhase = vec2(0.8, 0.6) * 21.0 + w.xy * 1.3 * 5.0;
    // (the ripple is sin(phase + 0.7 sin(phase)))
    float dRipple = cos(phase + 0.7 * sin(phase)) * (1.0 + 0.7 * cos(phase));
    float patchy = smoothstep(0.2, 0.65, lhNoise(xz * 0.6 + 3.1));
    vec3 grain = lhNoiseD(xz * 45.0);
    s += (dPhase * dRipple * patchy * 0.011 * lhKeep(0.3, px) + grain.xy * 45.0 * 0.0012 * lhKeep(0.022, px)) * rippled;
  }
  return s;
}
// The meadow's painted marks: small soft triangles, one on most cells of a jittered grid, all pointing north
// (up the screen from the opening view). Returns their coverage (0..1), faded out where too small to see.
float lhGrassMarks(vec2 xz, float px) {
  vec2 q = xz * 3.2;
  vec2 cell = floor(q);
  vec2 h = lhHash22(cell);
  if (h.x < 0.22) return 0.0;
  float size = mix(0.13, 0.19, lhHash12(cell + 3.7));
  vec2 lp = (fract(q) - (0.28 + 0.44 * h)) / size;
  float a = (h.y - 0.5) * 0.4;
  lp = mat2(cos(a), -sin(a), sin(a), cos(a)) * lp;
  // (drawn taller than wide, so the camera's tilt shows them about even)
  lp.y *= 0.72;
  // (an equilateral triangle, side 2, rounded a little, pointing toward -z)
  vec2 t = vec2(abs(lp.x) - 1.0, -lp.y + 0.57735);
  if (t.x + 1.7320508 * t.y > 0.0) t = vec2(t.x - 1.7320508 * t.y, -1.7320508 * t.x - t.y) * 0.5;
  t.x -= clamp(t.x, -2.0, 0.0);
  float d = -length(t) * sign(t.y) - 0.18;
  float aa = px * 3.2 / size * 1.2;
  float cov = 1.0 - smoothstep(-aa, aa, d);
  return cov * clamp(size / (px * 3.2) * 2.0 - 0.6, 0.0, 1.0);
}
// A cliff's columns along the face: x = the column's rounded profile (0 at its creases, 1 mid-column), y = its
// shade (a hash), z = crease darkness, w = the profile's slope (for the bumped normal). Widths wander.
vec4 lhColumns(float u, float y) {
  float w = 0.27;
  float q = u / w + (lhNoise(vec2(u * 0.9, y * 0.35 + 2.0)) - 0.5) * 1.1;
  float id = floor(q);
  float f = fract(q);
  float prof = sin(3.14159 * f);
  float crease = 1.0 - smoothstep(0.0, 0.16, min(f, 1.0 - f));
  return vec4(prof, lhHash12(vec2(id, 3.7)), crease, cos(3.14159 * f));
}
// A cliff face, AC-style: soft vertical columns of packed earth and rock, each its own shade and darker in the
// creases between, with gentle layers and grain; lighter packed sand under a sandy top. Drawn on the face's
// own vertical plane (the two planes blended round corners); writes the face's bumped normal.
vec3 lhCliffFace(vec3 wp, vec3 n, float sandy, out vec3 nOut) {
  float y = wp.y - GROUND_Y;
  float wx = smoothstep(0.3, 0.7, abs(n.x) / (abs(n.x) + abs(n.z) + 1e-4)); // 1 = facing ±x
  vec4 ca = lhColumns(wp.x, y);
  vec4 cb = lhColumns(wp.z + 17.3, y);
  vec4 c = mix(ca, cb, wx);
  float layers = mix(lhNoise(vec2(wp.x * 0.5, y * 2.6)), lhNoise(vec2(wp.z * 0.5 + 9.0, y * 2.6)), wx);
  float grain = mix(lhNoise(vec2(wp.x, y) * 7.0), lhNoise(vec2(wp.z, y) * 7.0 + 3.1), wx);
  vec3 earth = mix(uEarthDark, uEarth, 0.45 + 0.4 * c.y);
  earth = mix(earth, uEarthLight, 0.18 * smoothstep(0.55, 0.9, layers));
  vec3 sand = mix(uSandWet * 0.9, uSand * 0.92, 0.45 + 0.4 * c.y);
  vec3 col = mix(earth, sand, sandy);
  col *= 0.92 + 0.1 * layers;
  col *= 0.95 + 0.08 * grain;
  col *= 0.9 + 0.12 * c.x;                                  // the columns stand out
  col *= 1.0 - mix(0.24, 0.14, sandy) * c.z;                // darker in the creases
  // Each column is gently rounded: tilt the normal across it.
  vec3 T = normalize(vec3(-n.z, 0.0, n.x) + vec3(1e-4, 0.0, 0.0));
  nOut = normalize(n - T * c.w * 0.32);
  return col;
}
// Wet sand and the swash sheet catch the sky (set in albedo, used after lighting).
float lhSheen;
// The shading normal (world space): the ground's own, bumped on cliff faces (set in albedo).
vec3 lhTN;
float lhCaustics(vec2 p, float t) {
  // Two drifting layers of cellular edges, min-combined → bright caustic web.
  float c = 1.0;
  p += (vec2(lhNoise(p * 0.45 + t * 0.07), lhNoise(p * 0.45 - t * 0.05 + 7.3)) - 0.5) * 1.3;
  for (int layer = 0; layer < 2; layer++) {
    vec2 q = p * (layer == 0 ? 1.0 : 1.37) + vec2(t * 0.21, -t * 0.17) * (layer == 0 ? 1.0 : -1.0);
    vec2 i = floor(q);
    vec2 f = fract(q);
    float d1 = 8.0, d2 = 8.0;
    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
      vec2 g = vec2(float(x), float(y));
      vec2 o = lhHash22(i + g);
      o = 0.5 + 0.42 * sin(t * 0.9 + 6.2831 * o);
      float d = length(g + o - f);
      if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) { d2 = d; }
    }
    c = min(c, d2 - d1);
  }
  return 1.0 - smoothstep(0.0, 0.22, c);
}
`,
        albedo: `
{
  vec3 wp = vWorldPos;
  vec2 tuv = (wp.xz - uTerrainRect.xy) * uTerrainRect.zw;
  vec4 td = texture2D(uTerrainData, tuv);
  float grassSdf = td.g + (lhNoise(wp.xz * 1.6) - 0.5) * 0.28 + (lhNoise(wp.xz * 5.3) - 0.5) * 0.06;

  // Grass: large soft colour patches + fine mottling.
  vec3 grass = lhGrassColor(wp.xz);
  grass *= 0.95 + 0.1 * lhNoise(wp.xz * 2.7);
  // A lighter sunlit rim just inside the grass edge.
  float rim = smoothstep(-0.2, -0.05, grassSdf) * (1.0 - smoothstep(-0.05, 0.0, grassSdf));
  grass = mix(grass, grass * 1.1 + vec3(0.03, 0.035, 0.0), rim * 0.8);
  // Painted marks over the meadow, paler and a touch yellower (clear of its very edge).
  float marks = lhGrassMarks(wp.xz, max(fwidth(wp.x), 1e-5)) * smoothstep(0.02, 0.25, -grassSdf);
  grass = mix(grass, grass * vec3(1.2, 1.18, 0.86) + vec3(0.045, 0.045, 0.0), marks * 0.55);

  // Sand: warm, speckled, wet near the waterline, tinted underwater.
  vec3 sand = uSand * (0.97 + 0.06 * lhNoise(wp.xz * 3.7));
  sand *= 1.0 - 0.05 * smoothstep(0.6, 0.9, lhNoise(wp.xz * 11.0));
  // A sparse scatter of specks in it: bits of shell (pale) and pebble (darker).
  {
    vec2 sq = wp.xz * 9.0;
    vec2 sc = floor(sq);
    vec2 sh = lhHash22(sc + 17.0);
    float spx = max(fwidth(wp.x), 1e-5) * 9.0;
    float sd = length(fract(sq) - (0.25 + 0.5 * sh));
    float sr = mix(0.1, 0.17, lhHash12(sc + 3.3));
    float speck = (1.0 - smoothstep(sr - spx, sr + spx, sd)) * step(0.62, sh.x) * clamp(0.5 / spx - 0.5, 0.0, 1.0);
    sand = mix(sand, sh.y > 0.45 ? sand * 1.12 + 0.05 : sand * 0.8, speck * 0.7);
  }
  vec3 dry = sand;
  // Ponds lie still at their own level; the sea rises and falls.
  float pond = texture2D(uWaterMask, tuv).r;
  float above = wp.y - mix(uWaterLevel, ${qt.toFixed(3)}, pond);
  // Dug hollows and ponds (the data's A): bare floors, and the surf never reaches in.
  float dug = td.a;

  // Swash: each wave runs up the beach as a thin sheet with a foamy lip and slides back, leaving
  // dark, glossy sand that dries over a few seconds, and a little lace of foam that pops.
  float film = -1.0;      // how deep the sheet is here (vertical; < 0 = dry)
  float swashLip = 0.0;
  float wetness = 1.0 - smoothstep(0.0, 0.06, above); // right at the still waterline it's always damp
  float fresh = 0.0;
  float lace = 0.0;
  lhSheen = 0.0;
  if (above > -0.06 && above < 0.42 && dug < 0.5 && pond < 0.5) {
    for (int i = 0; i < 2; i++) {
      float fi = float(i);
      float c = lhSurfCycle(wp.xz, fi) - 0.85;
      float n = floor(c);
      float sw = c - n;
      float reach = lhSwashReach(wp.xz, fi, n);
      float edge = reach * lhSwash(sw);
      float into = edge - above;
      film = max(film, into);
      // A thick, bubbly lip while it runs up; thinner and breaking into clusters as it slides back,
      // with a little lace draining across the sheet behind it.
      bool running = sw < LH_RUN + LH_HANG;
      float lw = running ? 0.034 : 0.02;
      float bubbles = lhFbm2(wp.xz * 7.0 + vec2(n * 7.3, fi * 3.1) + uTime * vec2(0.4, -0.3));
      float edgeLine = (1.0 - smoothstep(lw * 0.3, lw, into)) * step(0.0, into) * step(0.015, edge);
      swashLip = max(swashLip, edgeLine * (running ? 0.8 + 0.2 * bubbles : smoothstep(0.3, 0.55, bubbles)));
      if (!running && into > 0.0) {
        swashLip = max(swashLip, 0.55 * smoothstep(0.6, 0.78, lhFbm2(wp.xz * 5.0 + vec2(n * 2.9, fi) + uTime * vec2(0.25, 0.2)))
          * (1.0 - smoothstep(0.02, 0.1, into)));
      }
      // Seconds since the water last left this spot: this wave (if it got here and went back), else the one before.
      float age = 99.0;
      if (above < reach) {
        float leave = LH_RUN + LH_HANG + LH_BACK * sqrt(max(1.0 - above / reach, 0.0));
        if (into > 0.0) age = 0.0;
        else if (sw > leave) age = (sw - leave) / 0.14;
      }
      float prev = lhSwashReach(wp.xz, fi, n - 1.0);
      if (age > 50.0 && above < prev) {
        age = (sw + 1.0 - (LH_RUN + LH_HANG + LH_BACK * sqrt(max(1.0 - above / prev, 0.0)))) / 0.14;
      }
      wetness = max(wetness, exp(-age / 2.6));
      fresh = max(fresh, exp(-age / 0.6));
      // Foam left behind as the water drains away: bubbles that pop within a second.
      lace = max(lace, exp(-age / 0.45) * step(0.001, age) * smoothstep(0.55, 0.78, lhNoise(wp.xz * 16.0 + vec2(n * 5.1, fi))));
    }
  }
  sand = mix(sand, uSandWet, wetness * 0.85);
  // (below the still waterline the sea itself draws the water; the sheet takes over as the sea's edge fades)
  float sheet = smoothstep(0.0, 0.012, film) * smoothstep(-0.035, 0.01, above);
  // Through the sheet: sand darker and cooler, taking on the sea's turquoise where the water is deeper
  // (so it meets the sea seamlessly at the still waterline) and clear near its edge.
  vec3 thru = sand * vec3(0.8, 0.9, 0.92);
  sand = mix(sand, mix(thru, uShallow * 1.05, 0.18 + 0.5 * smoothstep(0.0, 0.16, film)), sheet);
  sand = mix(sand, vec3(1.0), max(swashLip * 0.92, lace * 0.7));
  lhSheen = max(sheet, fresh * 0.6);
  float depth = max(-above, 0.0);
  // Soft shadow where the grass carpet overhangs the sand.
  float lip = smoothstep(0.0, 0.03, grassSdf) * (1.0 - smoothstep(0.03, 0.3, grassSdf));
  sand *= 1.0 - 0.16 * lip;

  float g = 1.0 - smoothstep(-0.025, 0.025, grassSdf);
  // Little round leaves growing at the grass's edge, poking out over the sand (a scalloped hem): only those
  // rooted on the grass show.
  {
    vec2 lq = wp.xz * 7.0;
    vec2 lc = floor(lq);
    vec2 lh = lhHash22(lc + 5.0);
    vec2 lcen = (lc + 0.3 + 0.4 * lh) / 7.0;
    float ld = length(wp.xz - lcen);
    float lr = mix(0.05, 0.08, lh.y);
    float laa = max(fwidth(wp.x), 1e-5) * 0.8;
    float lgs = textureLod(uTerrainData, (lcen - uTerrainRect.xy) * uTerrainRect.zw, 0.0).g
      + (lhNoise(lcen * 1.6) - 0.5) * 0.28 + (lhNoise(lcen * 5.3) - 0.5) * 0.06;
    float leaf = (1.0 - smoothstep(lr - laa, lr + laa, ld)) * step(lgs, -0.01) * (1.0 - smoothstep(0.02, 0.1, grassSdf));
    g = max(g, leaf);
  }
  vec3 col = mix(sand, grass, g);

  // A pond's floor: plain sand, a little damp.
  col = mix(col, sand * vec3(0.93, 0.92, 0.9), dug * (1.0 - smoothstep(${qt.toFixed(3)}, ${(qt + 0.08).toFixed(3)}, wp.y)));

  // Earth sides: where the ground falls steeply (raised terraces, the walls of hollows and ponds) it
  // shows its layers, under a ragged lip of the top's own carpet curling over the edge. The ground
  // below meets the face along a crisp, ragged line.
  vec3 lhN = normalize(vWorldNormal);
  // Ground still easing into its new shape has the new shape's normals already: until it gets there, it's
  // lit and coloured by its own facets instead (so a sinking terrace keeps its earth walls, and ground
  // about to rise doesn't show them early). The derivatives are taken where every pixel runs them.
  vec3 lhFacet = cross(dFdx(vWorldPos), dFdy(vWorldPos));
  float lhMoving = abs(vLhMoving);
  if (lhMoving > 0.0 && dot(lhFacet, lhFacet) > 1e-20) {
    // (on the normal's side, so the blend never passes through zero)
    lhFacet = normalize(dot(lhFacet, lhN) < 0.0 ? -lhFacet : lhFacet);
    lhN = normalize(mix(lhN, lhFacet, lhMoving));
  }
  // Relief on open ground: soft mounds in the meadow; wind ripples and grain in dry sand and on the sea floor
  // (the wet sand the swash smooths stays flat).
  {
    float rpx = max(length(dFdx(wp.xz)) + length(dFdy(wp.xz)), 1e-5) * 0.5;
    float rippled = max(smoothstep(0.1, 0.3, above), smoothstep(0.05, 0.3, depth)) * (1.0 - g);
    vec2 sl = lhGroundSlope(wp.xz, g, rippled, rpx);
    vec3 grad = vec3(sl.x, 0.0, sl.y);
    lhN = normalize(lhN - (grad - lhN * dot(lhN, grad)));
  }
  lhTN = lhN;
  float ragF = lhNoise(wp.xz * 9.0 + wp.y * 3.0) - 0.5;
  float steep = 1.0 - smoothstep(0.57, 0.63, lhN.y + ragF * 0.16);
  float below = max(td.r - wp.y, 0.0); // how far under the top edge nearby
  // (the data texture has no mips, so sampling in this branch is safe)
  if (steep > 0.0) {
    vec2 upDir = -lhN.xz / max(length(lhN.xz), 1e-4);
    vec2 across = vec2(-upDir.y, upDir.x);
    vec2 up0 = wp.xz + upDir * 0.42;
    float gA = textureLod(uTerrainData, (up0 - uTerrainRect.xy) * uTerrainRect.zw, 0.0).g;
    float gB = textureLod(uTerrainData, (up0 + across * 0.5 - uTerrainRect.xy) * uTerrainRect.zw, 0.0).g;
    float gC = textureLod(uTerrainData, (up0 - across * 0.5 - uTerrainRect.xy) * uTerrainRect.zw, 0.0).g;
    // The lip follows the top's own grass edge; the face under it shifts slowly from earth to sand.
    float topGrass = 1.0 - smoothstep(-0.03, 0.03, gA + (lhNoise(wp.xz * 1.6) - 0.5) * 0.28);
    float sandy = smoothstep(-0.5, 0.5, (gA + gB + gC) / 3.0);
    vec3 faceN;
    vec3 face = lhCliffFace(wp, lhN, sandy, faceN);
    // Damp along a waterline.
    face *= 1.0 - 0.25 * wetness;
    // The top's carpet rounds over the edge as a soft cap with a gently scalloped hem (sand just rounds over).
    float rag = lhNoise(wp.xz * 4.2) * 0.75 + lhNoise(wp.xz * 11.0) * 0.25;
    float lipDepth = mix(mix(0.03, 0.07, rag), mix(0.06, 0.14, rag), topGrass);
    // (the top edge is measured on the new ground: while a face sinks toward it, it's all face)
    float onLip = (1.0 - smoothstep(lipDepth - 0.012, lipDepth + 0.012, below)) * (1.0 - max(vLhMoving, 0.0));
    // The cap's shadow just under its hem.
    face *= 1.0 - 0.26 * topGrass * (1.0 - smoothstep(0.0, 0.09, below - lipDepth));
    // Faces darken a touch toward their foot (less sky reaches down there).
    face *= 1.0 - 0.1 * smoothstep(0.3, 1.4, below);
    // The cap's hem catches the light.
    vec3 topCol = mix(dry, grass, topGrass);
    topCol = mix(topCol, topCol * 1.1 + vec3(0.02, 0.03, 0.0) * topGrass, smoothstep(lipDepth - 0.06, lipDepth, below) * onLip);
    col = mix(col, mix(face, topCol, onLip), steep);
    lhTN = normalize(mix(lhN, faceN, steep * (1.0 - onLip)));
  }
  // Ground right at the foot of a tall face sits in a little of its shade.
  col *= 1.0 - 0.07 * smoothstep(0.6, 1.4, below) * (1.0 - steep);

  // Under water everything takes on the water's colour with depth (a pond's is greener, and deepens sooner).
  col = mix(col, mix(uSandDeep, uPond * 0.8, pond), smoothstep(0.1, mix(2.8, 1.2, pond), depth));

  // Caustics dance on the sea floor (lazily, in a pond).
  if (depth > 0.0) {
    float fade = smoothstep(0.0, 0.3, depth) * (1.0 - smoothstep(0.8, 2.4, depth));
    col += vec3(0.95, 1.0, 0.9) * lhCaustics(wp.xz * 0.6, uTime * (1.0 - 0.6 * pond)) * fade * 0.07 * lhCloudShadow(wp.xz);
  }

  // Contact shadows under/around blocks.
  float cao = texture2D(uContactAO, (wp.xz - uContactRect.xy) * uContactRect.zw).r;
  col *= 1.0 - 0.42 * cao * smoothstep(-0.2, 0.1, above - 0.3);

  // Placement grid near the build cursor, on open ground (derivatives taken outside the branch: they must be uniform).
  float aa = fwidth(wp.x) * 1.2;
  if (uCursor.w > 0.0 && td.b < -0.05) {
    vec2 gp = abs(fract(wp.xz) - 0.5);
    float dEdge = 0.5 - max(gp.x, gp.y);
    float line = 1.0 - smoothstep(0.012, 0.012 + aa, dEdge);
    float fade = 1.0 - smoothstep(uCursor.w * 0.35, uCursor.w, length(wp.xz - uCursor.xz));
    col = mix(col, col * 1.18 + 0.06, line * fade * 0.7 * (1.0 - steep));
  }

  diffuseColor.rgb = col;
}
`,
        normal: `
normal = normalize((viewMatrix * vec4(lhTN, 0.0)).xyz);
`,
        postLights: `
{
  // Wet sand and the swash sheet reflect a little sky (strongest at grazing angles).
  vec3 lhV = normalize(cameraPosition - vWorldPos);
  float lhF = 0.06 + 0.3 * pow(1.0 - clamp(dot(normalize(vWorldNormal), lhV), 0.0, 1.0), 3.0);
  reflectedLight.indirectSpecular += uSky * lhF * lhSheen * 0.6;
}
`,
      })
    }
    heightAt(e, t) {
      return this.island.height(e, t)
    }
    dispose() {
      for (let e of this.chunks.values()) e.mesh.geometry.dispose()
      ;(this.material.dispose(),
        this.depthMaterial.dispose(),
        this.data.dispose(),
        this.waterMask.dispose(),
        this.contactAO.dispose())
    }
  },
  Ln = 9.81,
  Rn = 0.6,
  zn = Math.atan2(-0.6, 0.8),
  Bn = [
    [10, 0.07, 0, !0],
    [6.8, 0.045, 12, !0],
    [4.6, 0.03, -10, !0],
    [3.1, 0.012, 45, !1],
    [2.2, 0.007, -60, !1],
    [1.5, 0.004, 100, !1],
  ].map(([e, t, n, r], i) => {
    let a = (2 * Math.PI) / e,
      o = zn + (n * Math.PI) / 180
    return {
      kx: a * Math.cos(o),
      kz: a * Math.sin(o),
      w: Math.sqrt(Ln * a) * Rn,
      a: t,
      ph: i * 2.17,
      displace: r,
    }
  })
function Vn(e) {
  return z(0.12, 0.7, e)
}
function Hn(e, t, n, r) {
  let i = 0,
    a = 0,
    o = 0
  for (let r of Bn) {
    let s = r.kx * e + r.kz * t - r.w * n + r.ph,
      c = r.a * Math.cos(s)
    ;((i += r.a * Math.sin(s)), (a += c * r.kx), (o += c * r.kz))
  }
  return ((r.h = i), (r.dx = a), (r.dz = o), r)
}
var Q = (e) => e.toFixed(6),
  Un = (e) => `dot(p, vec2(${Q(e.kx)}, ${Q(e.kz)})) - ${Q(e.w)} * t + ${Q(e.ph)}`,
  Wn = (e) => (2 * Math.PI) / Math.hypot(e.kx, e.kz),
  Gn = `
float lhSwellHeight(vec2 p, float t, float spacing) {
  float h = 0.0;
${Bn.filter((e) => e.displace).map((e) => {
  let t = Wn(e)
  return `  h += ${Q(e.a)} * sin(${Un(e)}) * (1.0 - smoothstep(${Q(t / 5)}, ${Q(t / 3)}, spacing));`
}).join(`
`)}
  return h;
}
vec3 lhSwellFull(vec2 p, float t, float footprint) {
  vec3 r = vec3(0.0);
  float s;
${Bn.map((e) => {
  let t = Wn(e)
  return `  s = ${Un(e)};
  r += ${Q(e.a)} * (1.0 - smoothstep(${Q(t / 8)}, ${Q(t / 3)}, footprint)) * vec3(sin(s), cos(s) * vec2(${Q(e.kx)}, ${Q(e.kz)}));`
}).join(`
`)}
  return r;
}
float lhSwellFade(float depth) { return smoothstep(0.12, 0.7, depth); }
`,
  Kn = 256
function qn() {
  let e = []
  for (let t = 1; t < 360; t += Math.max(0.25, (t * 2 * Math.PI) / Kn)) e.push(t)
  e.push(360)
  let t = Kn,
    n = new Float32Array((e.length * t + 1) * 3),
    r = 3
  for (let i of e)
    for (let e = 0; e < t; e++) {
      let a = (e / t) * Math.PI * 2
      ;((n[r++] = Math.cos(a) * i), (n[r++] = 0), (n[r++] = Math.sin(a) * i))
    }
  let i = []
  for (let e = 0; e < t; e++) i.push(0, 1 + ((e + 1) % t), 1 + e)
  for (let n = 0; n < e.length - 1; n++) {
    let e = 1 + n * t,
      r = e + t
    for (let n = 0; n < t; n++) {
      let a = (n + 1) % t
      i.push(e + n, e + a, r + n, r + n, e + a, r + a)
    }
  }
  let a = new d()
  return (a.setAttribute(`position`, new h(n, 3)), a.setIndex(i), a)
}
var Jn = class {
    mesh
    uniforms
    constructor(e, t) {
      let n = qn()
      ;((this.uniforms = ne.merge([se.fog])),
        Object.assign(this.uniforms, {
          uTime: J.uTime,
          uWaterLevel: J.uWaterLevel,
          uCloudStrength: J.uCloudStrength,
          uCloudBlobs: J.uCloudBlobs,
          uHeight: { value: e.texture },
          uHeightRect: { value: e.rect },
          uWaterMask: Y.uWaterMask,
          uMaskRect: Y.uTerrainRect,
          uPond: { value: R.pond },
          uShallow: { value: R.waterShallow },
          uMid: { value: R.waterMid },
          uDeep: { value: R.waterDeep },
          uFoam: { value: R.foam },
          uSky: { value: R.skyZenith },
          uSunColor: { value: R.sun },
          uSunDir: { value: t },
          uWaterTint: { value: new l(1, 1, 1) },
          uHorizon: { value: R.skyHorizon },
          uGlow: { value: 0 },
          uSparkle: { value: 1 },
          uBeamPos: { value: new k() },
          uBeamDir0: { value: new k(1, 0, 0) },
          uBeamDir1: { value: new k(-1, 0, 0) },
          uBeamI: { value: 0 },
          uSwellLook: { value: new E(5, 2.4) },
          uBoatPos: { value: new g(0, 0, 0, 1) },
          uBoatShape: { value: new g(0, 0, 0, 0) },
          uBoat2Pos: { value: new g(0, 0, 0, 1) },
          uBoat2Shape: { value: new g(0, 0, 0, 0) },
          uWake: { value: null },
          uWakeRect: { value: new g(0, 0, 1, 1) },
        }))
      let i = new F({
        uniforms: this.uniforms,
        transparent: !0,
        depthWrite: !1,
        fog: !0,
        vertexShader: `
        #include <common>
        #include <fog_pars_vertex>
        uniform float uTime;
        uniform float uWaterLevel;
        uniform sampler2D uHeight;
        uniform vec4 uHeightRect;
        uniform sampler2D uWaterMask;
        uniform vec4 uMaskRect;
        varying vec3 vWorldPos;
        ${Gn}
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          // The swell lifts the surface out at sea and dies away in the shallows, so the waterline stays put.
          vec2 uv = (wp.xz - uHeightRect.xy) * uHeightRect.zw;
          float ground = textureLod(uHeight, clamp(uv, 0.002, 0.998), 0.0).r;
          float spacing = max(length(wp.xz) * ${((2 * Math.PI) / Kn).toFixed(6)}, 0.25);
          wp.y = uWaterLevel + lhSwellHeight(wp.xz, uTime, spacing) * lhSwellFade(uWaterLevel - ground);
          // Ponds lie still at their own level.
          wp.y = mix(wp.y, ${qt.toFixed(3)}, textureLod(uWaterMask, (wp.xz - uMaskRect.xy) * uMaskRect.zw, 0.0).r);
          vWorldPos = wp.xyz;
          vec4 mvPosition = viewMatrix * wp;
          gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,
        fragmentShader: `
        #include <common>
        #include <fog_pars_fragment>
        uniform float uTime;
        uniform float uWaterLevel;
        uniform sampler2D uHeight;
        uniform vec4 uHeightRect;
        uniform vec3 uShallow, uMid, uDeep, uFoam, uSky, uSunColor, uSunDir, uWaterTint;
        uniform float uSparkle;
        uniform vec3 uHorizon;
        uniform float uGlow;
        uniform vec3 uBeamPos, uBeamDir0, uBeamDir1;
        uniform float uBeamI;
        uniform vec2 uSwellLook;
        uniform vec4 uBoatPos, uBoatShape, uBoat2Pos, uBoat2Shape;
        uniform sampler2D uWake;
        uniform vec4 uWakeRect;
        uniform sampler2D uWaterMask;
        uniform vec4 uMaskRect;
        uniform vec3 uPond;
        varying vec3 vWorldPos;
        ${Dt}
        ${kt}
        ${Gn}
        ${Mt}

        float ripples(vec2 p) {
          return lhNoise(p * 0.9 + vec2(uTime * 0.32, uTime * 0.21)) * 0.6
               + lhNoise(p * 2.3 + vec2(-uTime * 0.27, uTime * 0.38)) * 0.4;
        }

        // Now and then a ring spreads across a pond (a water strider, a falling seed): returns the ring's
        // tilt of the surface (xz) and a faint glint (w).
        vec3 pondRings(vec2 p) {
          const float CELL = 1.6;
          vec3 acc = vec3(0.0);
          vec2 cell = floor(p / CELL);
          for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
            vec2 c = cell + vec2(float(x), float(y));
            vec2 h = lhHash22(c);
            float period = 4.0 + 7.0 * h.x;
            float t = uTime + h.y * period;
            float n = floor(t / period);
            float age = t - n * period;
            vec2 o = (c + 0.2 + 0.6 * lhHash22(c + n * 7.13)) * CELL;
            vec2 d = p - o;
            float r = length(d);
            float w = r - age * 0.32;
            float env = exp(-age * 0.8) * exp(-w * w * 60.0) * smoothstep(0.0, 0.3, age);
            vec2 dir = d / max(r, 1e-3);
            acc.xy += dir * sin(w * 38.0) * env;
            acc.z += env * (0.5 + 0.5 * cos(w * 38.0));
          }
          return acc;
        }


        // A hull on the water (pos: its waterline middle, then its heading; shape: half-length, half-width,
        // speed, bobbing): rings spreading as it bobs, bow waves as it goes, a foam line hugging it, and the
        // water shaded softly round it. Only near it: the rest of the sea skips all this.
        void lhHull(vec2 p, vec4 pos, vec4 shape, inout vec3 swell, inout float bFoam, inout float bShade) {
        vec2 bRel = p - pos.xy;
        if (shape.x <= 0.0 || dot(bRel, bRel) >= 64.0) return;
        {
          // In its own frame: along (toward the bow) and across; bd ≈ distance from its waterline.
          float bAlong = dot(bRel, pos.zw);
          float bAcross = dot(bRel, vec2(pos.w, -pos.z));
          float bA = bAlong / max(shape.x, 1e-3);
          float bC = bAcross / max(shape.y * (1.0 - 0.35 * max(bA, 0.0) * max(bA, 0.0)), 1e-3);
          float bE = length(vec2(bA, bC));
          float bd = (bE - 1.0) * mix(shape.y, shape.x, abs(bA) / max(bE, 1e-3));
          // Rings spreading from the hull as it bobs: they tilt the surface (normals) a little.
          float bRing = shape.w * 1.6 * exp(-max(bd, 0.0) * 1.4) * smoothstep(-0.02, 0.06, bd);
          vec2 bOut = normalize(vec2(bC / max(shape.y, 1e-3), bA / max(shape.x, 1e-3)) + 1e-4);
          vec2 bRad = bOut.x * vec2(pos.w, -pos.z) + bOut.y * pos.zw;
          swell.yz += bRad * cos(bd * 16.0 - uTime * 3.2) * bRing * 0.35;
          // Its bow waves: a V of ripples (Kelvin's 19.5° arms) spreading back from the bow, their crests
          // breaking into little foam that thins out and fades within a few boat lengths.
          float bSpeed = max(shape.z, 0.0);
          float behind = -bAlong + shape.x * 0.6;
          if (behind > 0.0 && bSpeed > 0.02) {
            float side = sign(bAcross);
            float armDist = abs(bAcross) - (shape.y * 0.75 + behind * 0.36);
            vec2 armGrad = side * vec2(pos.w, -pos.z) + 0.36 * pos.zw;
            float go = min(bSpeed * 2.5, 1.0);
            float env = exp(-armDist * armDist * 9.0) * smoothstep(0.0, 0.4, behind) * exp(-behind * 0.45);
            float wv = cos(armDist * 26.0 - behind * 5.0 + uTime * 2.0);
            swell.yz += armGrad * wv * env * go * 0.12;
            // The crest: a broken line of foam, bright near the boat, lace further back.
            float crest = exp(-armDist * armDist * 45.0) * smoothstep(0.0, 0.2, behind) * exp(-behind * 0.38);
            float bits = smoothstep(0.3, 0.65, lhNoise(vec2(behind * 3.2 - uTime * 0.6, side * 7.0 + armDist * 4.0)));
            bFoam = max(bFoam, crest * mix(1.0, bits, smoothstep(0.4, 2.0, behind)) * go);
          }
          // The water darkens softly right around the hull (it shades what's beneath it).
          bShade = max(bShade, (1.0 - smoothstep(-0.02, 0.35, bd)) * 0.22);
          // A lacy foam line hugging the hull (heavier at the bow when it moves, puffing as it bobs),
          // and a little churn right behind the transom.
          if (bd < 0.4) {
            float bWob = lhNoise(p * 7.0 + uTime * 0.9);
            float line = (1.0 - smoothstep(0.02, 0.05 + 0.05 * bWob + 0.2 * shape.w, bd)) * step(-0.03, bd);
            bFoam = max(bFoam, line * (0.45 + 0.4 * smoothstep(0.3, 0.9, bWob) + bSpeed * 2.0 * smoothstep(0.3, 1.0, bA)));
          }
          if (behind > 0.0 && behind < 0.9) {
            float churn = (1.0 - smoothstep(0.0, shape.y * 0.9, abs(bAcross))) * (1.0 - smoothstep(0.1, 0.9, behind));
            churn *= smoothstep(0.4, 0.8, lhNoise(p * 6.0 - pos.zw * uTime * 0.7));
            bFoam = max(bFoam, churn * min(bSpeed * 1.8, 0.7));
          }
        }
        }

        void main() {
          vec2 p = vWorldPos.xz;
          vec2 fw = fwidth(p);
          vec2 uv = (p - uHeightRect.xy) * uHeightRect.zw;
          vec4 hs = texture2D(uHeight, clamp(uv, 0.002, 0.998));
          float depth = vWorldPos.y - hs.r;
          float near = hs.g;
          float pond = texture2D(uWaterMask, (p - uMaskRect.xy) * uMaskRect.zw).r;
          // Swell height and slope (as the vertices move), faded out in the shallows (and still in ponds).
          vec3 swell = lhSwellFull(p, uTime, max(fw.x, fw.y)) * lhSwellFade(uWaterLevel - hs.r) * (1.0 - pond);

          // The dinghy (only near it: the rest of the sea skips all this).
          float bFoam = 0.0;
          float bShade = 0.0;
          // Its trail of churned water, wherever it has been lately.
          vec2 wuv = (p - uWakeRect.xy) * uWakeRect.zw;
          float trail = (wuv.x > 0.0 && wuv.y > 0.0 && wuv.x < 1.0 && wuv.y < 1.0) ? texture2D(uWake, wuv).r * (1.0 - pond) : 0.0;
          lhHull(p, uBoatPos, uBoatShape, swell, bFoam, bShade);
          lhHull(p, uBoat2Pos, uBoat2Shape, swell, bFoam, bShade);

          // How much sea one pixel covers: from afar, fine detail gives way to broad strokes.
          float fp = max(fw.x, fw.y);
          float close = 1.0 - smoothstep(0.025, 0.08, fp);
          // Body colour by depth (a pond's greener, and darker sooner).
          vec3 col = mix(uShallow, uMid, smoothstep(0.25, 2.4, depth));
          col = mix(col, uDeep, smoothstep(2.5, 4.2, depth));
          // The shelf isn't one even glow: patches of sand and weed show through it, and a darker line marks
          // where it drops off into the deep.
          float patches = lhFbm(p * 0.09 + vec2(4.3, 1.7));
          float shelf = smoothstep(0.3, 1.0, depth) * (1.0 - smoothstep(2.4, 3.6, depth));
          col = mix(col, col * vec3(0.72, 0.86, 0.8), smoothstep(0.48, 0.72, patches) * shelf * 0.85);
          col = mix(col, col * vec3(1.08, 1.06, 1.0) + vec3(0.02, 0.03, 0.02), (1.0 - smoothstep(0.15, 0.35, patches)) * shelf * 0.6);
          col *= 1.0 - 0.14 * (1.0 - smoothstep(0.0, 0.9, abs(depth - 2.9))) * (1.0 - pond);
          // Out in the deep, broad drifting patches of darker and lighter blue.
          col *= mix(1.0, 0.92 + 0.14 * lhFbm(p * 0.035 + vec2(3.1, 7.7) + uTime * 0.004), smoothstep(2.5, 5.0, depth));
          col = mix(col, mix(uPond * 1.06, uPond * 0.72, smoothstep(0.1, 0.9, depth)), pond);

          // Surface ripples → normal (glassy in a pond, with the odd spreading ring).
          float e = 0.06;
          float h0 = ripples(p);
          float hx = ripples(p + vec2(e, 0.0));
          float hz = ripples(p + vec2(0.0, e));
          float rip = mix(0.09, 0.03, pond);
          vec3 ring = pond > 0.01 ? pondRings(p) * pond : vec3(0.0);
          vec3 N = normalize(vec3(-(hx - h0) / e * rip - swell.y - ring.x * 0.08, 1.0, -(hz - h0) / e * rip - swell.z - ring.y * 0.08));
          vec3 V = normalize(cameraPosition - vWorldPos);

          // Light on the swell: faces turned toward the sun brighter, faces turned away darker, crests a
          // touch lighter. (Real water shows this mostly as reflection, which is too faint from up here.)
          float facing = dot(-swell.yz, uSunDir.xz) / max(uSunDir.y, 0.55);
          float lift = clamp(facing * uSwellLook.x + swell.x * uSwellLook.y, -1.0, 1.0) * mix(0.5, 1.0, close);
          vec3 crest = col * 1.3 + vec3(0.02, 0.05, 0.05);
          vec3 trough = col * vec3(0.62, 0.78, 0.92);
          col = mix(col, lift > 0.0 ? crest : trough, abs(lift));
          col *= uWaterTint;
          float cloud = lhCloudShadow(p);
          // Golden hour: deep water mirrors the high sky (lavender-blue), shallows keep their warmth.
          col = mix(col, uSky * vec3(0.92, 0.95, 1.12), uGlow * smoothstep(0.6, 4.5, depth));
          col += uHorizon * uGlow * 0.06 * (1.0 - smoothstep(0.0, 2.0, depth));
          // Soft sheen + fresnel sky tint (a still pond mirrors more of it).
          float fres = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 4.0);
          col = mix(col, uSky * 1.05, fres * mix(0.55, 0.75, pond));
          col += uSky * ring.z * 0.08;
          col *= mix(1.0, cloud, 0.8);
          col += (h0 - 0.5) * 0.035;

          // Sun sparkles: sharp glints where ripple normals catch the sun, up close. (From afar they'd be
          // smaller than a pixel and shimmer as noise, so they fade out.)
          vec3 H = normalize(uSunDir + V);
          float spec = pow(max(dot(N, H), 0.0), 320.0);
          // Sparse, tiny glints; capped so looking into the sun doesn't turn into a foam field.
          float twinkle = lhNoise(p * 13.0 + vec2(uTime * 1.7, -uTime * 1.1));
          float glint = smoothstep(0.35, 0.85, spec) * smoothstep(0.82, 0.9, twinkle) * close;
          col += uSunColor * min(glint * 1.4, 0.9) * cloud * uSparkle;
          // From afar the sun's glitter reads as a soft, gently shimmering path on the swell.
          vec3 Ns = normalize(vec3(-swell.y, 1.0, -swell.z));
          float path = pow(max(dot(Ns, H), 0.0), 70.0) * (0.55 + 0.45 * lhNoise(p * 0.7 + uTime * vec2(0.3, -0.2)));
          col += uSunColor * path * 0.3 * cloud * uSparkle * (1.0 - close) * (1.0 - pond);

          // Foam: contact line + bands rolling toward land.
          float wob = lhNoise(p * 2.2 + uTime * 0.35);
          float contact = 1.0 - smoothstep(0.0, 0.07 + 0.06 * wob, depth);
          // A pond's ring of foam is thinner and softer, and breathes slowly.
          contact *= 1.0 - pond * (0.45 + 0.15 * sin(uTime * 0.7 + wob * 6.0));
          // While a wave's swash is up the beach, its foamy edge is up there (drawn by the terrain).
          if (contact > 0.0 && pond < 0.99) contact *= 1.0 - smoothstep(0.02, 0.08, lhSwashEdge(p)) * (1.0 - pond);
          // Rolling waves: each travels shoreward along the proximity field, thickening as it lands.
          float sd = 1.0 - near; // 0.5 at the waterline → 1.0 ~2.5u offshore
          float band = 0.0;
          for (int i = 0; i < 2; i++) {
            float cyc = lhSurfCycle(p, float(i));
            float k = fract(cyc);
            float pos = mix(0.98, 0.52, k * k * (3.0 - 2.0 * k));
            float w = mix(0.008, 0.03, k);
            float b = 1.0 - smoothstep(w, w + 0.018, abs(sd - pos + (wob - 0.5) * 0.035));
            b *= smoothstep(0.0, 0.25, k) * (1.0 - smoothstep(0.8, 1.0, k)) * smoothstep(0.06, 0.22, near);
            b *= smoothstep(0.28, 0.5, lhNoise(p * 0.75 + float(i) * 13.0 + vec2(0.0, floor(cyc) * 3.7)));
            band = max(band, b);
          }
          // The trail: paler, aerated water, with lace that breaks up and dissolves as the trail spreads.
          col *= 1.0 - bShade;
          col = mix(col, col * 1.18 + vec3(0.05, 0.07, 0.07), smoothstep(0.04, 0.45, trail) * 0.55);
          float laceN = lhFbm2(p * 6.0 + vec2(uTime * 0.12, -uTime * 0.08));
          // (older, weaker trail shows as sparser, fainter lace)
          float trailLace = smoothstep(0.26, 0.4, trail * (0.3 + 1.05 * laceN)) * smoothstep(0.04, 0.18, trail);
          bFoam = max(bFoam, trailLace * mix(0.35, 0.9, smoothstep(0.2, 0.65, trail)));
          band = max(band * (1.0 - pond), bFoam);
          // Now and then a small whitecap on the open sea, stretched along the wind, riding a crest.
          vec2 cp = vec2(p.x * 1.6 + p.y * 0.5, p.y * 3.4 - p.x * 1.1) + uTime * vec2(0.12, 0.05);
          float cap = smoothstep(0.8, 0.86, lhFbm2(cp)) * smoothstep(0.0, 0.4, swell.x) * smoothstep(0.55, 0.7, lhNoise(p * 0.2 + uTime * 0.02));
          band = max(band, cap * smoothstep(3.5, 5.5, depth) * 0.4 * (1.0 - pond));
          // A lighter, clearer surf zone hugging the beach.
          col = mix(col, col * 1.12 + vec3(0.03, 0.05, 0.04), smoothstep(0.25, 0.5, near) * 0.6 * (1.0 - pond));
          float foam = max(contact, band * 0.9);

          col = mix(col, uFoam * mix(uWaterTint, vec3(1.0), 0.12), foam);

          // The lighthouse beam sweeping across the sea.
          if (uBeamI > 0.001) {
            vec3 L = vWorldPos - uBeamPos;
            float dist = length(L);
            vec3 Ld = L / dist;
            float cone = smoothstep(0.958, 0.992, max(dot(Ld, uBeamDir0), dot(Ld, uBeamDir1)));
            float fall = 1.0 / (1.0 + dist * 0.05);
            col += vec3(1.0, 0.82, 0.5) * cone * fall * uBeamI * 0.42 * mix(1.0, 0.6 + 0.8 * h0, close);
          }
          float alpha = mix(0.62, 1.0, smoothstep(0.0, 2.6, depth));
          alpha = max(alpha, foam);
          // Fade the water out where it meets dry land to avoid a hard intersection line.
          alpha *= smoothstep(-0.02, 0.015, depth);

          gl_FragColor = vec4(col, alpha);
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`,
      })
      ;((this.mesh = new r(n, i)),
        (this.mesh.name = `water`),
        (this.mesh.renderOrder = 10),
        (this.mesh.frustumCulled = !1))
    }
  },
  $ = 4,
  Yn = 0.65,
  Xn = class {
    tex
    rect
    w
    h
    data
    statics = []
    constructor(e, t, n) {
      ;((this.tex = e),
        (this.rect = t),
        (this.w = (n.maxX - n.minX) * $),
        (this.h = (n.maxZ - n.minZ) * $))
      let r = e.image
      if (r.width !== this.w || r.height !== this.h)
        throw Error(`ContactShadows: texture size mismatch`)
      ;((this.data = r.data), t.set(n.minX, n.minZ, 1 / (n.maxX - n.minX), 1 / (n.maxZ - n.minZ)))
    }
    addStaticDisc(e, t, n, r = 1) {
      this.statics.push({ kind: `disc`, x: e, z: t, r: n, s: r })
    }
    update(e) {
      this.data.fill(0)
      for (let e of this.statics) this.paint(e)
      for (let [t, n] of e) this.paint({ kind: `rect`, x0: t, z0: n, x1: t + 1, z1: n + 1, s: 1 })
      this.tex.needsUpdate = !0
    }
    paint(e) {
      let t = this.rect.x,
        n = this.rect.y,
        r = e.kind === `rect` ? e.x0 : e.x - e.r,
        i = e.kind === `rect` ? e.z0 : e.z - e.r,
        a = e.kind === `rect` ? e.x1 : e.x + e.r,
        o = e.kind === `rect` ? e.z1 : e.z + e.r,
        s = Math.max(0, Math.floor((r - Yn - t) * $)),
        c = Math.min(this.w - 1, Math.ceil((a + Yn - t) * $)),
        l = Math.max(0, Math.floor((i - Yn - n) * $)),
        u = Math.min(this.h - 1, Math.ceil((o + Yn - n) * $))
      for (let r = l; r <= u; r++) {
        let i = n + (r + 0.5) / $
        for (let n = s; n <= c; n++) {
          let a = t + (n + 0.5) / $,
            o
          if (e.kind === `rect`) {
            let t = Math.max(e.x0 - a, 0, a - e.x1),
              n = Math.max(e.z0 - i, 0, i - e.z1)
            o = Math.hypot(t, n)
          } else o = Math.max(Math.hypot(a - e.x, i - e.z) - e.r, 0)
          let s = (1 - z(0, Yn, o)) * e.s,
            c = r * this.w + n,
            l = Math.round(s * 255)
          l > this.data[c] && (this.data[c] = l)
        }
      }
    }
  }
function Zn(e, t = !1) {
  let n = e[0].index !== null,
    r = new Set(Object.keys(e[0].attributes)),
    i = new Set(Object.keys(e[0].morphAttributes)),
    a = {},
    o = {},
    s = e[0].morphTargetsRelative,
    c = new d(),
    l = 0
  for (let u = 0; u < e.length; ++u) {
    let d = e[u],
      f = 0
    if (n !== (d.index !== null))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            u +
            `. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`
        ),
        null
      )
    for (let e in d.attributes) {
      if (!r.has(e))
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              u +
              `. All geometries must have compatible attributes; make sure "` +
              e +
              `" attribute exists among all geometries, or in none of them.`
          ),
          null
        )
      ;(a[e] === void 0 && (a[e] = []), a[e].push(d.attributes[e]), f++)
    }
    if (f !== r.size)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            u +
            `. Make sure all geometries have the same number of attributes.`
        ),
        null
      )
    if (s !== d.morphTargetsRelative)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            u +
            `. .morphTargetsRelative must be consistent throughout all geometries.`
        ),
        null
      )
    for (let e in d.morphAttributes) {
      if (!i.has(e))
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              u +
              `.  .morphAttributes must be consistent throughout all geometries.`
          ),
          null
        )
      ;(o[e] === void 0 && (o[e] = []), o[e].push(d.morphAttributes[e]))
    }
    if (t) {
      let e
      if (n) e = d.index.count
      else if (d.attributes.position !== void 0) e = d.attributes.position.count
      else
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              u +
              `. The geometry must have either an index or a position attribute`
          ),
          null
        )
      ;(c.addGroup(l, e, u), (l += e))
    }
  }
  if (n) {
    let t = 0,
      n = []
    for (let r = 0; r < e.length; ++r) {
      let i = e[r].index
      for (let e = 0; e < i.count; ++e) n.push(i.getX(e) + t)
      t += e[r].attributes.position.count
    }
    c.setIndex(n)
  }
  for (let e in a) {
    let t = Qn(a[e])
    if (!t)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` +
            e +
            ` attribute.`
        ),
        null
      )
    c.setAttribute(e, t)
  }
  for (let e in o) {
    let t = o[e][0].length
    if (t !== 0) {
      ;((c.morphAttributes = c.morphAttributes || {}), (c.morphAttributes[e] = []))
      for (let n = 0; n < t; ++n) {
        let t = []
        for (let r = 0; r < o[e].length; ++r) t.push(o[e][r][n])
        let r = Qn(t)
        if (!r)
          return (
            console.error(
              `THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` +
                e +
                ` morphAttribute.`
            ),
            null
          )
        c.morphAttributes[e].push(r)
      }
    }
  }
  return c
}
function Qn(e) {
  let t,
    n,
    r,
    i = -1,
    a = 0
  for (let o = 0; o < e.length; ++o) {
    let s = e[o]
    if ((t === void 0 && (t = s.array.constructor), t !== s.array.constructor))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`
        ),
        null
      )
    if ((n === void 0 && (n = s.itemSize), n !== s.itemSize))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`
        ),
        null
      )
    if ((r === void 0 && (r = s.normalized), r !== s.normalized))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`
        ),
        null
      )
    if ((i === -1 && (i = s.gpuType), i !== s.gpuType))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`
        ),
        null
      )
    a += s.count * n
  }
  let o = new t(a),
    s = new h(o, n, r),
    c = 0
  for (let t = 0; t < e.length; ++t) {
    let r = e[t]
    if (r.isInterleavedBufferAttribute) {
      let e = c / n
      for (let t = 0, i = r.count; t < i; t++)
        for (let i = 0; i < n; i++) {
          let n = r.getComponent(t, i)
          s.setComponent(t + e, i, n)
        }
    } else o.set(r.array, c)
    c += r.count * n
  }
  return (i !== void 0 && (s.gpuType = i), s)
}
function $n(e, t) {
  if (t === 0)
    return (
      console.warn(
        `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`
      ),
      e
    )
  if (t === 2 || t === 1) {
    let n = e.getIndex()
    if (n === null) {
      let t = [],
        r = e.getAttribute(`position`)
      if (r !== void 0) {
        for (let e = 0; e < r.count; e++) t.push(e)
        ;(e.setIndex(t), (n = e.getIndex()))
      } else
        return (
          console.error(
            `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`
          ),
          e
        )
    }
    let r = n.count - 2,
      i = []
    if (t === 2)
      for (let e = 1; e <= r; e++) (i.push(n.getX(0)), i.push(n.getX(e)), i.push(n.getX(e + 1)))
    else
      for (let e = 0; e < r; e++)
        e % 2 == 0
          ? (i.push(n.getX(e)), i.push(n.getX(e + 1)), i.push(n.getX(e + 2)))
          : (i.push(n.getX(e + 2)), i.push(n.getX(e + 1)), i.push(n.getX(e)))
    return (
      i.length / 3 !== r &&
        console.error(
          `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`
        ),
      e.setIndex(i),
      e.clearGroups(),
      e
    )
  }
  return (
    console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`, t),
    e
  )
}
function er(e) {
  let t = new Map(),
    n = new Map(),
    r = e.clone()
  return (
    tr(e, r, function (e, r) {
      ;(t.set(r, e), n.set(e, r))
    }),
    r.traverse(function (e) {
      if (!e.isSkinnedMesh) return
      let r = e,
        i = t.get(e),
        a = i.skeleton.bones
      ;((r.skeleton = i.skeleton.clone()),
        r.bindMatrix.copy(i.bindMatrix),
        (r.skeleton.bones = a.map(function (e) {
          return n.get(e)
        })),
        r.bind(r.skeleton, r.bindMatrix))
    }),
    r
  )
}
function tr(e, t, n) {
  n(e, t)
  for (let r = 0; r < e.children.length; r++) tr(e.children[r], t.children[r], n)
}
export {
  Ot as C,
  wt as D,
  Tt as E,
  Dt as S,
  Et as T,
  Bt as _,
  Jn as a,
  Nt as b,
  In as c,
  Sn as d,
  Y as f,
  Lt as g,
  Jt as h,
  Xn as i,
  xn as l,
  qt as m,
  Zn as n,
  Hn as o,
  vn as p,
  $n as r,
  Vn as s,
  er as t,
  yn as u,
  It as v,
  jt as w,
  At as x,
  J as y,
}
