export type UpgradeId =
  | 'pack_upgrade'
  | 'axe_upgrade'
  | 'pickaxe_upgrade'
  | 'rod_upgrade'
  | 'fertilizer'
  | 'wood_bundle'
  | 'stone_bundle'

export interface UpgradeDef {
  id: UpgradeId
  name: string
  icon: string
  /** Si tiene niveles máximos (mejora permanente) o si es un suministro consumible repetible (maxLevel = 0). */
  maxLevel: number
  /** Precios por nivel (o precio único si es consumible). */
  prices: number[]
  /** Descripción según el nivel actual. */
  getDescription: (currentLevel: number) => string
  /** Etiqueta del botón de compra. */
  buttonLabel?: string
}

export interface UpgradeState {
  pack_upgrade: number
  axe_upgrade: number
  pickaxe_upgrade: number
  rod_upgrade: number
}

const STORAGE_KEY = 'lighthouse.upgrades'

const DEFAULT_STATE: UpgradeState = {
  pack_upgrade: 0,
  axe_upgrade: 0,
  pickaxe_upgrade: 0,
  rod_upgrade: 0,
}

let currentState: UpgradeState = loadUpgradeState()
const listeners = new Set<() => void>()

export function loadUpgradeState(): UpgradeState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULT_STATE }
    const parsed = JSON.parse(raw)
    return {
      pack_upgrade: Math.max(0, Math.min(3, Number(parsed.pack_upgrade) || 0)),
      axe_upgrade: Math.max(0, Math.min(2, Number(parsed.axe_upgrade) || 0)),
      pickaxe_upgrade: Math.max(0, Math.min(2, Number(parsed.pickaxe_upgrade) || 0)),
      rod_upgrade: Math.max(0, Math.min(2, Number(parsed.rod_upgrade) || 0)),
    }
  } catch {
    return { ...DEFAULT_STATE }
  }
}

export function saveUpgradeState(): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState))
  } catch {}
}

export function getUpgradeState(): Readonly<UpgradeState> {
  return currentState
}

export function getUpgradeLevel(id: keyof UpgradeState): number {
  return currentState[id] ?? 0
}

export function incrementUpgradeLevel(id: keyof UpgradeState): number {
  currentState = {
    ...currentState,
    [id]: (currentState[id] ?? 0) + 1,
  }
  saveUpgradeState()
  for (const fn of listeners) fn()
  return currentState[id]
}

export function resetUpgradeState(): void {
  currentState = { ...DEFAULT_STATE }
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {}
  for (const fn of listeners) fn()
}

export function onUpgradesChange(fn: () => void): () => void {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

/**
 * Catálogo de mejoras permanentes y suministros en la tienda de Gil.
 */
export const GIL_UPGRADES: UpgradeDef[] = [
  {
    id: 'pack_upgrade',
    name: 'Bolsillos extra',
    icon: 'backpack',
    maxLevel: 3,
    prices: [60, 140, 240],
    getDescription: (lvl) =>
      lvl >= 3
        ? 'Mochila ampliada al máximo (24 bolsillos)'
        : `Amplía tu mochila en +4 espacios (${12 + lvl * 4} → ${16 + lvl * 4} bolsillos)`,
  },
  {
    id: 'axe_upgrade',
    name: 'Hacha afilada',
    icon: 'axe',
    maxLevel: 2,
    prices: [100, 220],
    getDescription: (lvl) =>
      lvl === 0
        ? 'Tala palmeras en 2 golpes y obtén +2 troncos extra por árbol'
        : lvl === 1
          ? 'Tala palmeras de 1 solo golpe y obtén +4 troncos extra por árbol'
          : 'Hacha mejorada al máximo (1 golpe y 9 troncos por palmera)',
  },
  {
    id: 'pickaxe_upgrade',
    name: 'Pico reforzado',
    icon: 'pickaxe',
    maxLevel: 2,
    prices: [90, 200],
    getDescription: (lvl) =>
      lvl === 0
        ? 'Extrae el doble de piedras por golpe y 6 usos diarios por roca'
        : lvl === 1
          ? 'Extrae el triple de piedras por golpe y 9 usos diarios por roca'
          : 'Pico mejorado al máximo (triple piedra y 9 usos por roca)',
  },
  {
    id: 'rod_upgrade',
    name: 'Cebo luminoso de Gil',
    icon: 'rod',
    maxLevel: 2,
    prices: [120, 260],
    getDescription: (lvl) =>
      lvl === 0
        ? 'Tus peces se venden un +25% más caros y alimentan un +25% más'
        : lvl === 1
          ? 'Peces +50% más valiosos y 35% de probabilidad de pesca doble'
          : 'Cebo maestro activo (+50% valor y pesca doble)',
  },
  {
    id: 'fertilizer',
    name: 'Fertilizante de algas',
    icon: 'palm',
    maxLevel: 0,
    prices: [40],
    buttonLabel: 'Usar',
    getDescription: () => 'Hace rebrotar al instante todas las palmeras taladas de la isla',
  },
  {
    id: 'wood_bundle',
    name: 'Fardo de madera (×15)',
    icon: 'wood',
    maxLevel: 0,
    prices: [30],
    getDescription: () => 'Un lote de 15 troncos de madera listos para construir',
  },
  {
    id: 'stone_bundle',
    name: 'Cargamento de piedra (×10)',
    icon: 'stone',
    maxLevel: 0,
    prices: [35],
    getDescription: () => '10 piedras de cantera y renueva todas las rocas por hoy',
  },
]

