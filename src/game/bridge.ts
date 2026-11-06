import { useEffect, useState } from 'react'
import type { FishStack, LighthouseGame, TimePhase, ToolId } from './types'

const readyListeners = new Set<(game: LighthouseGame) => void>()

/**
 * Devuelve la instancia activa del juego (`window.lh`) si ya se ha inicializado.
 */
export function getGame(): LighthouseGame | null {
  return window.lh ?? null
}

/**
 * Registra un callback que se ejecuta en cuanto el motor 3D e inventario de Lighthouse están listos.
 * Si ya está listo, lo invoca inmediatamente.
 */
export function onGameReady(cb: (game: LighthouseGame) => void): () => void {
  if (window.lh) {
    cb(window.lh)
    return () => {}
  }
  readyListeners.add(cb)
  return () => readyListeners.delete(cb)
}

/**
 * Llamado internamente por `lh-c06.js` cuando `window.lh` termina de inicializarse.
 */
export function notifyGameReady(game: LighthouseGame): void {
  window.lh = game
  for (const cb of readyListeners) {
    cb(game)
  }
  readyListeners.clear()
}

export interface GameSnapshot {
  ready: boolean
  wood: number
  stone: number
  coins: number
  blocks: number
  benches: number
  bonfires: number
  axe: boolean
  pickaxe: boolean
  rod: boolean
  creative: boolean
  pockets: number
  pocketsUsed: number
  fish: FishStack[]
  day: number
  hour: number
  phase: TimePhase
  tool: ToolId
}

function takeSnapshot(game: LighthouseGame | null): GameSnapshot {
  if (!game) {
    return {
      ready: false,
      wood: 0,
      stone: 0,
      coins: 0,
      blocks: 0,
      benches: 0,
      bonfires: 0,
      axe: false,
      pickaxe: false,
      rod: false,
      creative: false,
      pockets: 12,
      pocketsUsed: 0,
      fish: [],
      day: 1,
      hour: 7,
      phase: 'day',
      tool: 'hand',
    }
  }
  const inv = game.inventory
  return {
    ready: true,
    wood: inv.wood,
    stone: inv.stone,
    coins: inv.coins,
    blocks: inv.blocks,
    benches: inv.benches,
    bonfires: inv.bonfires,
    axe: inv.hasAxe,
    pickaxe: inv.pickaxe,
    rod: inv.rod,
    creative: inv.creative,
    pockets: inv.pockets,
    pocketsUsed: inv.pocketsUsed,
    fish: inv.fishStacks(),
    day: game.clock.day,
    hour: game.clock.hour,
    phase: game.clock.phase,
    tool: game.hud?.tool ?? 'hand',
  }
}

/**
 * Hook de React para leer el estado del juego en tiempo real y acceder a la instancia `game` desde cualquier componente `.tsx`.
 */
export function useGame(): { game: LighthouseGame | null; state: GameSnapshot } {
  const [game, setGame] = useState<LighthouseGame | null>(() => getGame())
  const [state, setState] = useState<GameSnapshot>(() => takeSnapshot(getGame()))

  useEffect(() => {
    let unsubInv: (() => void) | null = null
    const unsubReady = onGameReady((g) => {
      setGame(g)
      setState(takeSnapshot(g))
      unsubInv = g.inventory.onChange(() => {
        setState(takeSnapshot(g))
      })
    })
    return () => {
      unsubReady()
      unsubInv?.()
    }
  }, [])

  return { game, state }
}

