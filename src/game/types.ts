export type TimePhase = 'day' | 'sunset' | 'night' | 'dawn'
export type FishTime = 'day' | 'night'
export type CraftStation = 'hand' | 'bench'
export type InputMode = 'mouse' | 'touch' | 'pad'

export type ToolId =
  | 'hand'
  | 'axe'
  | 'pickaxe'
  | 'rod'
  | 'build'
  | 'bench'
  | 'bonfire'
  | 'raise'
  | 'dig'
  | 'remove'
  | (string & {})

export interface FishDef {
  /** Identificador interno del pez (ej. 'sardine', 'moonfish'). */
  id: string
  /** Nombre visible en español. */
  name: string
  /** Momento en el que aparece ('day' o 'night'). */
  time: FishTime
  /** Peso de probabilidad de aparición (mayor = más común). */
  weight: number
  /** Tamaño de la sombra en el agua (1 a 4). */
  size: 1 | 2 | 3 | 4
  /** Precio base en monedas (crudo). Cocinado vale el triple. */
  price: number
  /** Puntos de hambre que restaura (crudo). Cocinado restaura el triple. */
  food: number
  /** Ventana de tiempo en segundos para recoger cuando pica. */
  window: number
  /** Frase que aparece al pescarlo. */
  line: string
}

export interface RecipeDef {
  /** Identificador interno ('pickaxe', 'bench', 'bonfire', 'rod', etc.). */
  id: string
  /** Nombre visible en español. */
  name: string
  /** Clave del icono en `icons.ts`. */
  icon: string
  /** Coste de madera. */
  wood: number
  /** Coste de piedra. */
  stone: number
  /** Dónde se fabrica: a mano ('hand') o en la mesa de trabajo ('bench'). */
  at: CraftStation
  /** Descripción corta en la lista de fabricación. */
  blurb: string
  /** Si requiere haber desbloqueado el plano/receta en la historia. */
  blueprint?: boolean
}

export interface ToolSlotDef {
  /** Identificador de la herramienta u objeto colocable. */
  tool: ToolId
  /** Clave del icono en `icons.ts`. */
  icon: string
  /** Nombre visible en español. */
  name: string
  /** Descripción corta para el tooltip de la barra rápida. */
  tip: string
  /** Descripción detallada para la mochila. */
  info: string
}

export interface DialogChoice {
  key: string
  label: string
  disabled?: boolean
}

export interface FishStack {
  id: string
  cooked: boolean
  n: number
}

export interface SpecialOrder {
  /** Lista de [fishId, cooked, cantidad]. */
  want: [string, boolean, number][]
  reward: number
  done?: boolean
}

export interface GameInventory {
  wood: number
  stone: number
  coins: number
  owned: number
  axe: boolean
  pickaxe: boolean
  rod: boolean
  benches: number
  bonfires: number
  pockets: number
  creative: boolean
  readonly blocks: number
  readonly benchCount: number
  readonly bonfireCount: number
  readonly hasAxe: boolean
  readonly anyFish: boolean
  readonly pocketsUsed: number
  addWood(amount: number): void
  addStone(amount: number): void
  addCoins(amount: number): void
  spend(cost: { wood?: number; stone?: number }): boolean
  craft(woodAmount: number): number
  make(recipeId: string): boolean
  giveAxe(): void
  fishCount(id: string, cooked?: boolean): number
  addFish(id: string, cooked?: boolean, count?: number): void
  takeFish(id: string, cooked?: boolean, count?: number): boolean
  cook(id: string, count: number): number
  fishStacks(): FishStack[]
  setCreative(enabled: boolean): void
  onChange(listener: () => void): () => void
}

export interface GameClock {
  time: number
  speed: number
  readonly hour: number
  readonly day: number
  readonly workDay: number
  readonly phase: TimePhase
  readonly night: boolean
}

export interface GameHUD {
  tool: ToolId
  mode: InputMode
  panel: string | null
  photo: boolean
  readonly isPlaying: boolean
  toast(text: string, icon?: string, durationMs?: number): void
  announce(text: string, icon?: string, durationMs?: number): void
  talk(
    speaker: string,
    icon: string,
    lines: string[],
    choices?: DialogChoice[],
    onChoice?: (key: string) => void,
    onEnd?: () => void
  ): void
  open(panel: string, fromKey?: boolean): void
  close(): void
}

export interface LighthouseGame {
  inventory: GameInventory
  clock: GameClock
  hud: GameHUD
  hunger: {
    value: number
    on: boolean
    readonly empty: boolean
    start(): void
    eat(amount: number): void
  }
  story: {
    caught: Set<string>
    blueprints: Set<string>
    earned: boolean
  }
  setTool(tool: ToolId): void
  give(wood: number, blocks?: number): void
  place(x: number, y: number, z: number): void
  fill(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): void
  clear(): void
  terraform(x: number, z: number, height?: number): void
  stats(): {
    fps: number
    calls: number
    tris: number
    blocks: number
    programs: number
  }
}

declare global {
  interface Window {
    lh?: LighthouseGame
    __readyMs?: number
  }
}
