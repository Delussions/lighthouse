import type { FishDef } from '../types'
import { getUpgradeLevel } from './upgrades'

/**
 * Catálogo completo de peces de Lighthouse.
 * Para añadir un nuevo pez, agrégalo a este arreglo (y su icono `fish_<id>` / `cooked_<id>` en `icons.ts`).
 */
export const FISHES: FishDef[] = [
  {
    id: 'sardine',
    name: 'Sardina',
    time: 'day',
    weight: 40,
    size: 1,
    price: 10,
    food: 8,
    window: 0.95,
    line: '¡Atrapé una sardina! Rebosa buena onda.',
  },
  {
    id: 'bream',
    name: 'Besugo',
    time: 'day',
    weight: 30,
    size: 2,
    price: 25,
    food: 12,
    window: 0.85,
    line: '¡Atrapé un besugo! Menuda pieza.',
  },
  {
    id: 'parrot',
    name: 'Pez loro',
    time: 'day',
    weight: 18,
    size: 3,
    price: 45,
    food: 15,
    window: 0.75,
    line: '¡Atrapé un pez loro! No para de repetirlo todo.',
  },
  {
    id: 'puffer',
    name: 'Pez globo',
    time: 'day',
    weight: 12,
    size: 2,
    price: 70,
    food: 10,
    window: 0.65,
    line: '¡Atrapé un pez globo! Tampoco es para inflarse así.',
  },
  {
    id: 'snapper',
    name: 'Pargo rojo',
    time: 'night',
    weight: 32,
    size: 2,
    price: 30,
    food: 14,
    window: 0.85,
    line: '¡Atrapé un pargo rojo! ¡Menudo chasquido!',
  },
  {
    id: 'mackerel',
    name: 'Caballa',
    time: 'night',
    weight: 38,
    size: 1,
    price: 15,
    food: 10,
    window: 0.95,
    line: '¡Atrapé una caballa! ¡Vaya caballa!',
  },
  {
    id: 'lantern',
    name: 'Pez linterna',
    time: 'night',
    weight: 18,
    size: 1,
    price: 60,
    food: 8,
    window: 0.7,
    line: '¡Atrapé un pez linterna! Buenas noches, pequeñín.',
  },
  {
    id: 'moonfish',
    name: 'Pez luna',
    time: 'night',
    weight: 8,
    size: 4,
    price: 150,
    food: 25,
    window: 0.6,
    line: '¡Atrapé un pez luna! ¡Estoy en la luna!',
  },
]

export const FISH_IDS: string[] = FISHES.map((f) => f.id)

export function getFish(id: string): FishDef | undefined {
  return FISHES.find((f) => f.id === id)
}

export function isFishId(id: unknown): id is string {
  return typeof id === 'string' && FISH_IDS.includes(id)
}

/** Precio de venta del pez (cocinado vale el triple, más bonificación por cebo mejorado). */
export function getFishPrice(id: string, cooked = false): number {
  const fish = getFish(id)
  const mult = 1 + getUpgradeLevel('rod_upgrade') * 0.25
  return Math.round((fish?.price ?? 0) * (cooked ? 3 : 1) * mult)
}

/** Puntos de hambre que restaura el pez (cocinado alimenta el triple, más bonificación por cebo mejorado). */
export function getFishFood(id: string, cooked = false): number {
  const fish = getFish(id)
  const mult = 1 + getUpgradeLevel('rod_upgrade') * 0.25
  return Math.round((fish?.food ?? 0) * (cooked ? 3 : 1) * mult)
}

/** Elige un pez al azar según la hora (día o noche) y su peso de probabilidad. */
export function pickRandomFish(isNight: boolean, rng = Math.random()): FishDef {
  const pool = FISHES.filter((f) => f.time === (isNight ? 'night' : 'day'))
  let roll = rng * pool.reduce((sum, f) => sum + f.weight, 0)
  for (const fish of pool) {
    roll -= fish.weight
    if (roll < 0) return fish
  }
  return pool[pool.length - 1]
}

