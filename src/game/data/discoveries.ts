export type ShoreFindKind = 'driftwood' | 'shell' | 'crate' | 'bottle'

export interface ShoreFindDef {
  kind: ShoreFindKind
  prompt: string
  color: string
  sparkleColor: string
}

export const SHORE_FINDS: Record<ShoreFindKind, ShoreFindDef> = {
  driftwood: {
    kind: 'driftwood',
    prompt: 'Recoger madera a la deriva',
    color: '#A97B50',
    sparkleColor: '#FFF3C4',
  },
  shell: {
    kind: 'shell',
    prompt: 'Investigar caracola brillante',
    color: '#FF9E8A',
    sparkleColor: '#FFE0F0',
  },
  crate: {
    kind: 'crate',
    prompt: 'Abrir caja náufraga',
    color: '#D49B58',
    sparkleColor: '#FFD978',
  },
  bottle: {
    kind: 'bottle',
    prompt: 'Leer botella con mensaje',
    color: '#78D4C8',
    sparkleColor: '#C8FFF4',
  },
}

/**
 * Mensajes acogedores y pistas del mundo que puedes encontrar dentro de las botellas en la playa.
 */
export const BOTTLE_MESSAGES: string[] = [
  'Nota en botella: «Si cavas lo suficiente tierra adentro, el agua del mar filtrará y formarás un estanque tranquilo.»',
  'Nota en botella: «Dicen que por las noches, cerca de las aguas profundas, el Pez luna sube a mirar el faro.»',
  'Nota en botella: «Cuando pones bloques de madera juntos, se ensamblan solos formando puentes, cabañas o muelles.»',
  'Nota en botella: «El viejo Gil adora el pescado a la brasa. En una fogata vale tres veces más que crudo.»',
  'Nota en botella: «Si tocas el faro en la cima de la isla, puedes cambiar el color de su lámpara o hacer sonar su campana.»',
  'Nota en botella: «El bote pequeño que rodea la isla recoge tesoros flotantes en su red mientras paseas.»',
]

export interface LampColorPreset {
  id: string
  name: string
  beamHex: string
  lightHex: string
}

/**
 * Colores ambientales para la lámpara del Faro cuando interactúas con él.
 */
export const LIGHTHOUSE_LAMP_COLORS: LampColorPreset[] = [
  {
    id: 'amber',
    name: 'Ámbar cálido',
    beamHex: '#FFD98C',
    lightHex: '#FFE3A8',
  },
  {
    id: 'moon',
    name: 'Luz de luna',
    beamHex: '#9FD8FF',
    lightHex: '#BCE4FF',
  },
  {
    id: 'emerald',
    name: 'Brisa esmeralda',
    beamHex: '#88F2C2',
    lightHex: '#A8F9D4',
  },
  {
    id: 'coral',
    name: 'Coral de atardecer',
    beamHex: '#FFA4B8',
    lightHex: '#FFC2D0',
  },
]

export interface LanternColorPreset {
  name: string
  glassHex: string
  glowHex: string
}

/** Colores disponibles al tocar un Farolillo marino colocado en la isla. */
export const LANTERN_COLORS: LanternColorPreset[] = [
  { name: 'Ámbar cálido', glassHex: '#FFE494', glowHex: '#FFB448' },
  { name: 'Perla marina', glassHex: '#9CF8EC', glowHex: '#48E0CE' },
  { name: 'Coral de ocaso', glassHex: '#FFB0C4', glowHex: '#FF6B92' },
  { name: 'Estrella violeta', glassHex: '#D8B8FF', glowHex: '#A678FF' },
]

/** Posibles ubicaciones de playa alrededor de la isla donde la marea deja hallazgos. */
export const SHORE_SPOTS: [number, number][] = [
  [-9.2, 6.8],
  [-11.4, -1.8],
  [-6.8, -8.2],
  [1.8, -8.6],
  [8.8, -4.4],
  [10.2, 2.8],
  [6.4, 8.1],
  [-2.4, 9.2],
]

