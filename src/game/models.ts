import axe0 from './models/axe-0.js'
import bench0 from './models/bench-0.js'
import bonfire0 from './models/bonfire-0.js'
import dinghy0 from './models/dinghy-0.js'
import fish0 from './models/fish-0.js'
import fish1 from './models/fish-1.js'
import fisherman0 from './models/fisherman-0.js'
import lighthouse0 from './models/lighthouse-0.js'
import lighthouse1 from './models/lighthouse-1.js'
import log0 from './models/log-0.js'
import palm0 from './models/palm-0.js'
import pickaxe0 from './models/pickaxe-0.js'
import rocks0 from './models/rocks-0.js'
import rod0 from './models/rod-0.js'

const parts: Record<string, string[]> = {
  "axe": [axe0],
  "bench": [bench0],
  "bonfire": [bonfire0],
  "dinghy": [dinghy0],
  "fish": [fish0, fish1],
  "fisherman": [fisherman0],
  "lighthouse": [lighthouse0, lighthouse1],
  "log": [log0],
  "palm": [palm0],
  "pickaxe": [pickaxe0],
  "rocks": [rocks0],
  "rod": [rod0],
}

const decode = (b64: string): Uint8Array =>
  (Uint8Array as any).fromBase64 ? (Uint8Array as any).fromBase64(b64) : Uint8Array.from(atob(b64), (c) => c.charCodeAt(0))

/** The bytes of models/<name>.glb, or null if the game asks for one that isn't here. */
export function glb(name: string): Uint8Array | null {
  return parts[name] ? decode(parts[name].join('')) : null
}
