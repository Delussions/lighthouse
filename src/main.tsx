// Server-owned: Forge regenerates this on every request and ignores it on
// upload. Mounts the variant named by `?variant=` or the default; locally,
// `vite dev` renders the same thing.
import { StrictMode } from 'react'
import type { ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Variant0 from './variants/main.tsx'

const variants: Record<string, ComponentType> = {
  "var_48c8c38b-7a56-4a7d-afdc-0fecc7146635": Variant0,
}
const byName: Record<string, string> = {
  "Main": "var_48c8c38b-7a56-4a7d-afdc-0fecc7146635",
}
const requested = new URLSearchParams(location.search).get('variant')
const id =
  (requested && (variants[requested] ? requested : byName[requested])) ||
  "var_48c8c38b-7a56-4a7d-afdc-0fecc7146635"
const Variant = variants[id] ?? (() => null)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Variant />
  </StrictMode>,
)
