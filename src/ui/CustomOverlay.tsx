import { useGame } from '../game/bridge'

/**
 * Capa de interfaz en React (`.tsx`) conectada en vivo al motor 3D e inventario de Lighthouse.
 * Aquí puedes agregar nuevos menús, misiones, indicadores o ventanas sin tocar el HUD base.
 */
export function CustomOverlay() {
  const { game, state } = useGame()

  if (!state.ready || !game) return null

  return null
}

