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
]

export function getRecipe(id: string): RecipeDef | undefined {
  return RECIPES.find((r) => r.id === id)
}

