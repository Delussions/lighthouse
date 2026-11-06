import { useEffect } from 'react'
import icons from '../game/icons'
import css from '../game/style'
import { CustomOverlay } from '../ui/CustomOverlay'

/**
 * Lighthouse, a cozy island game, as built by `vite build` (src/game) and mounted in this page:
 * the markup the game expects, its stylesheet, its icon URLs (assets are served by content hash),
 * its models (binary glTF rides as base64 modules and reaches GLTFLoader through fetch), and a
 * memory-only localStorage, since the sandboxed preview has none (progress lasts until a reload).
 */
let started = false

function memoryStorage(): Storage {
  const items = new Map<string, string>()
  return {
    get length() {
      return items.size
    },
    key: (i: number) => [...items.keys()][i] ?? null,
    getItem: (k: string) => items.get(String(k)) ?? null,
    setItem: (k: string, v: string) => void items.set(String(k), String(v)),
    removeItem: (k: string) => void items.delete(String(k)),
    clear: () => items.clear(),
  }
}

function start() {
  if (started) return
  started = true

  try {
    void window.localStorage.length
  } catch {
    Object.defineProperty(window, 'localStorage', { value: memoryStorage(), configurable: true })
  }

  document.title = 'Lighthouse'
  document
    .querySelector('meta[name="viewport"]')
    ?.setAttribute(
      'content',
      'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover'
    )

  const style = document.createElement('style')
  style.textContent = css
  document.head.append(style)
  ;(globalThis as any).__lhIconUrl = (name: string) => icons[name] ?? ''

  const models = import('../game/models')
  const fetchAny = window.fetch.bind(window)
  window.fetch = (input: RequestInfo | URL, init?: RequestInit) => {
    const url = input instanceof Request ? input.url : String(input)
    const name = /\/models\/([\w-]+)\.glb(?:[?#]|$)/.exec(url)?.[1]
    if (!name) return fetchAny(input, init)
    return models.then(({ glb }) => {
      const bytes = glb(name)
      if (!bytes) return fetchAny(input, init)
      return new Response(bytes as BodyInit, {
        headers: {
          'Content-Type': 'model/gltf-binary',
          'Content-Length': String(bytes.byteLength),
        },
      })
    })
  }

  const app = document.createElement('div')
  app.id = 'app'
  app.innerHTML = `
    <canvas id="scene"></canvas>
    <div id="hud"></div>
    <div id="loader">
      <div class="loader-inner">
        <img class="loader-mark" src="${icons['lighthouse@512']}" alt="" draggable="false" />
        <svg class="wordmark loader-word" viewBox="0 0 600 150" role="img" aria-label="Lighthouse">
          <text x="300" y="112" text-anchor="middle" class="wm-shadow">Lighthouse</text>
          <text x="300" y="104" text-anchor="middle" class="wm-stroke">Lighthouse</text>
          <text x="300" y="104" text-anchor="middle" class="wm-fill">Lighthouse</text>
        </svg>
        <div class="loader-bar"><div class="loader-fill"></div></div>
      </div>
    </div>`
  document.body.append(app)

  import('../game/lh-c06.js')
}

export default function Lighthouse() {
  useEffect(start, [])
  return <CustomOverlay />
}
