/**
 * Configuración global y constantes de equilibrio del mundo.
 */
export const WORLD_CONFIG = {
  /** Posiciones iniciales de las palmeras: [x, z, varianteModelo, escala]. */
  palmSpawns: [
    [-8.4, 5.3, 0, 1],
    [-4.5, 6.7, 2, 0.95],
    [2.4, 6.3, 1, 1],
    [-10.3, 2.2, 1, 0.9],
    [8.5, 0.6, 0, 0.95],
    [-5.2, -5.3, 2, 1],
    [4.8, 5.1, 1, 0.85],
    [2.2, -5, 0, 0.9],
  ] as [number, number, number, number][],

  /** Tiempo que tarda un tocón en brotar como retoño (ms). */
  palmStumpMs: 150_000,

  /** Tiempo que tarda el retoño en crecer de nuevo a palmera adulta (ms). */
  palmSaplingMs: 90_000,

  /** Golpes necesarios para talar una palmera. */
  palmHitsToFell: 3,

  /** Troncos de madera que suelta una palmera al caer. */
  logsPerPalm: 5,

  /** Bloques de construcción que se fabrican por cada unidad de madera en la mesa. */
  blocksPerWood: 3,

  /** Piedras máximas que da cada roca por día. */
  quarryDailyLimit: 3,

  /** Capacidad inicial de bolsillos en la mochila. */
  defaultPockets: 12,
}

