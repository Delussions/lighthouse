import type { TimePhase, ToolSlotDef } from '../types'

/**
 * Objetos y herramientas desbloqueables que aparecen en la sección de "Objetos" de la barra rápida y la mochila.
 */
export const HOTBAR_ITEMS: ToolSlotDef[] = [
  {
    tool: 'axe',
    icon: 'axe',
    name: 'Hacha',
    tip: 'Tala palmeras para obtener madera — cae con tres golpes',
    info: 'Un hacha vieja encontrada en la pradera. Tala palmeras para conseguir madera: caen con tres golpes. Mantén pulsado para seguir talando.',
  },
  {
    tool: 'pickaxe',
    icon: 'pickaxe',
    name: 'Pico de madera',
    tip: 'Rompe piedras de las rocas',
    info: 'Golpea las rocas para conseguir piedras: cada roca da unas pocas al día. Mantén pulsado para seguir picando.',
  },
  {
    tool: 'rod',
    icon: 'rod',
    name: 'Caña de pescar',
    tip: 'Lánzala cerca de la sombra de un pez y recoge cuando pique',
    info: 'Lánzala cerca de la sombra de un pez en el mar. ¡Espera a que el corcho se hunda y recoge rápido!',
  },
  {
    tool: 'build',
    icon: 'block',
    name: 'Bloques de madera',
    tip: 'Construye con ellos — la pala los recoge',
    info: 'Construye con ellos: al ponerlos juntos se unen en una sola pieza de madera. La pala los recoge.',
  },
  {
    tool: 'bench',
    icon: 'bench',
    name: 'Mesa de trabajo',
    tip: 'Colócala y úsala para hacer bloques y herramientas',
    info: 'Colócala en un buen sitio y úsala para convertir madera en bloques y fabricar herramientas.',
  },
  {
    tool: 'bonfire',
    icon: 'bonfire',
    name: 'Fogata',
    tip: 'Colócala: cocina pescado y caliéntate por la noche',
    info: 'Colócala y cocina pescado en ella (el pescado a la brasa alimenta el triple). También te mantiene caliente por la noche.',
  },
]

/**
 * Herramientas fijas de terreno y demolición en la barra rápida.
 */
export const TERRAFORM_TOOLS: ToolSlotDef[] = [
  {
    tool: 'raise',
    icon: 'raise',
    name: 'Elevar',
    tip: 'Eleva el terreno',
    info: 'Sube el terreno un nivel a la vez para formar terrazas y colinas.',
  },
  {
    tool: 'dig',
    icon: 'lower',
    name: 'Cavar',
    tip: 'Cava hoyos y estanques',
    info: 'Baja el terreno un nivel a la vez. Si cavas lo suficiente, se llenará de agua para formar un estanque.',
  },
  {
    tool: 'remove',
    icon: 'shovel',
    name: 'Pala',
    tip: 'Recoge bloques y mesas de trabajo',
    info: 'Guarda de vuelta en tu mochila los bloques y las mesas de trabajo.',
  },
]

export const PHASE_LABELS: Record<TimePhase, string> = {
  day: 'Es de día',
  sunset: 'Está atardeciendo',
  night: 'Es de noche',
  dawn: 'Está amaneciendo',
}

