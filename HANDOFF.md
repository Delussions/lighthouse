# Lighthouse — Contexto del Proyecto y Guía de Desarrollo (`HANDOFF.md`)

> **Lema y visión central:** *"Una pequeña isla acogedora donde construir"*

---

## 1. Filosofía y Dirección de Diseño (Early Development)

1. **Sin objetivo final forzado (Sandbox Acogedor):**
   - Aunque el proyecto se llame *Lighthouse*, **no buscamos imponer una misión principal obligatoria ni un "final del juego"**.
   - El corazón de la experiencia es el lema **"Una pequeña isla acogedora donde construir"**: un entorno relajante, vivo y lleno de pequeños detalles donde el jugador construye, moldea el terreno y explora a su propio ritmo.
2. **Exploración e Investigación en el Mapa 3D:**
   - La isla debe sentirse viva e interactiva directamente en el mundo 3D (usando punteros contextuales y partículas, no solo menús).
   - Siempre debe haber curiosidades que investigar en la playa, en las rocas, en el agua, en el bote o en el faro.
3. **Progresión Orgánica ("Haces algo → Desbloqueas lo siguiente"):**
   - Cada acción (talar, picar piedra, construir terrazas/estanques, pescar, cocinar o investigar un hallazgo en la orilla) debe abrir naturalmente nuevas posibilidades: nuevas recetas, nuevas interacciones con objetos del mapa, mejoras de comodidad para construir más fácil o nuevos descubrimientos.
4. **Idioma:**
   - Todo el texto visible para el usuario (UI, diálogos, pistas, objetos, descripciones y avisos) debe estar **100% en español**.
   - Los identificadores internos (`id`, `tool`, nombres de nodos 3D en `.glb` y claves de `localStorage`) se mantienen intactos por compatibilidad.

---

## 2. Arquitectura Técnica Actual

El proyecto corre localmente con **Vite + React + TypeScript + Three.js** (`npm run dev` en `http://localhost:5173/`) y está conectado al repositorio `https://github.com/Delussions/lighthouse`.

### Estructura de Archivos Clave
- **[src/game/types.ts](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/types.ts)**: Tipos e interfaces de TypeScript para todo el juego (`LighthouseGame`, `GameInventory`, `GameHUD`, `FishDef`, `RecipeDef`, `ToolSlotDef`).
- **[src/game/bridge.ts](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/bridge.ts)**: Puente reactivo (`useGame()`, `getGame()`, `onGameReady()`) que conecta la instancia `window.lh` del motor 3D con cualquier componente de React (`.tsx`).
- **`src/game/data/` (Datos modulares en TypeScript)**:
  - **[fishes.ts](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/data/fishes.ts)**: Catálogo de peces (`FISHES`), precios, comida y probabilidades por horario (`day` / `night`).
  - **[recipes.ts](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/data/recipes.ts)**: Recetas de fabricación a mano (`hand`) y en mesa de trabajo (`bench`).
  - **[tools.ts](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/data/tools.ts)**: Herramientas y objetos colocables de la barra rápida (`HOTBAR_ITEMS`, `TERRAFORM_TOOLS`).
  - **[upgrades.ts](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/data/upgrades.ts)**: Mejoras de herramientas, ampliación de mochila y suministros en la tienda de Gil (`GIL_UPGRADES`), persistidos en `localStorage` (`lighthouse.upgrades`).
  - **[dialogs.ts](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/data/dialogs.ts)**: Textos y diálogos de Gil.
  - **[world.ts](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/data/world.ts)**: Parámetros del mundo (apariciones de palmeras, tiempos de regeneración, límites de cantera).
- **Motor y Lógica Base (`src/game/`)**:
  - `lh-c00.js` – `lh-c04.js`: Motor Three.js, shaders de agua/cielo/terreno e iluminación.
  - **[lh-c05.js](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/lh-c05.js)**: Entidades 3D de la isla (palmeras `Zr`, cantera `ri`, pesca `di`, inventario `Vr`, bote de remos `jr`, barca de Gil `zi`, hallazgos `wi`, mesas `yi` y fogatas `Ei`).
  - **[lh-c06.js](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/lh-c06.js)**: Clase principal del juego (`qn`), interfaz/HUD (`kn`), audio procedural (`an`) y bucle de simulación.
- **[src/ui/CustomOverlay.tsx](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/ui/CustomOverlay.tsx)**: Punto de montaje en React (`.tsx`) para nuevas interfaces o widgets superpuestos.

---

## 3. Sistemas ya Implementados

1. **Traducción Completa al Español**: Toda la interfaz, reloj, objetos, herramientas, peces, recetas, controles y diálogos de Gil.
2. **Modularización en TypeScript**: Catálogos extraídos a `src/game/data/` y puente React en `src/game/bridge.ts`.
3. **Tienda de Mejoras y Suministros de Gil**:
   - Permite gastar monedas para ampliar bolsillos de la mochila (`12 → 24`), mejorar el hacha (menos golpes y más madera), mejorar el pico (más piedra por golpe y más usos por roca), mejorar el cebo de pesca (+valor y pesca doble) y comprar suministros (fertilizante instantáneo, lotes de madera y piedra).

---

## 4. Hoja de Ruta de Interacción Acogedora en la Isla (En Progreso)

Siguiendo la filosofía de *"Una pequeña isla acogedora donde construir"* sin objetivos forzados:

1. **Hallazgos y Curiosidades en la Orilla (Investigación en el mapa 3D):**
   - Objetos que el mar arrastra periódicamente a las playas (cajas de madera a la deriva, caracolas brillantes, botellas con notas o pequeños tesoros) con los que puedes interactuar haciendo clic directamente en la arena.
2. **Interacciones Vivas con los Elementos de la Isla:**
   - **El Faro como rincón interactivo**: Poder tocar el faro para encender/cambiar el tono de su luz ambiental, tocar su campana para llamar al bote de Gil cuando quieras comerciar, o mirar la isla desde las alturas.
   - **El Bote de Remos (`dinghy`)**: Poder interactuar con el botecito que rodea la isla para darle un empujón, cambiar su rumbo o enviarlo a recoger madera flotante y curiosidades del arrecife mientras construyes.
3. **Progresión en Cadena de Construcción y Descubrimiento:**
   - Cada herramienta o bloque que fabricas y cada hallazgo que investigas desbloquea nuevas comodidades para construir, decorar y disfrutar la isla.
