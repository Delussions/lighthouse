import type { RecipeDef } from '../types'

/**
 * Catálogo de recetas de fabricación (a mano en la mochila o en la mesa de trabajo).
 */
export const RECIPES: RecipeDef[] = [
  {
    id: 'pickaxe',
    name: 'Pico de madera',
    icon: 'pickaxe',
    wood: 4,
    stone: 0,
    at: 'hand',
    blurb: 'Rompe piedras de las rocas',
  },
  {
    id: 'bench',
    name: 'Mesa de trabajo',
    icon: 'bench',
    wood: 10,
    stone: 6,
    at: 'hand',
    blurb: 'Sirve para hacer bloques y herramientas',
  },
  {
    id: 'bonfire',
    name: 'Fogata',
    icon: 'bonfire',
    wood: 5,
    stone: 8,
    at: 'hand',
    blurb: 'Cocina pescado y te mantiene caliente',
    blueprint: true,
  },
  {
    id: 'rod',
    name: 'Caña de pescar',
    icon: 'rod',
    wood: 6,
    stone: 2,
    at: 'bench',
    blurb: 'Pesca desde la orilla',
  },
  {
    id: 'seat',
    name: 'Banco mirador',
    icon: 'seat',
    wood: 4,
    stone: 2,
    at: 'bench',
    blurb: 'Siéntate a descansar, recupera energía y contempla la isla',
    blueprint: true,
    unlockHint: 'Se inspira al colocar tus primeros 5 bloques de madera',
  },
  {
    id: 'lantern',
    name: 'Farolillo marino',
    icon: 'lantern',
    wood: 3,
    stone: 3,
    at: 'bench',
    blurb: 'Ilumina tus construcciones, cambia de color y da calor de noche',
    blueprint: true,
    unlockHint: 'Se inspira al recoger 2 hallazgos en la playa o construir 10 bloques',
  },
  {
    id: 'planter',
    name: 'Jardinera de bayas',
    icon: 'planter',
    wood: 4,
    stone: 4,
    at: 'bench',
    blurb: 'Cultiva bayas dulces que restauran tu energía y brotes de madera',
    blueprint: true,
    unlockHint: 'Se inspira al picar piedra en las rocas de la isla',
  },
  {
    id: 'crab_trap',
    name: 'Trampa de cangrejos',
    icon: 'crab_trap',
    wood: 5,
    stone: 3,
    at: 'bench',
    blurb: 'Colócala en la orilla: captura pescado fresco y monedas sola',
    blueprint: true,
    unlockHint: 'Se inspira al atrapar 2 peces con la caña de pescar',
  },
]

export function getRecipe(id: string): RecipeDef | undefined {
  return RECIPES.find((r) => r.id === id)
}

