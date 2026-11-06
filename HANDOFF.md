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
5. **Regla Estricta de Calidad Visual y Modelado 3D (Cero Polígonos Simples):**
   - **Prohibido usar primitivas crudas** (`BoxGeometry`, `CylinderGeometry`, `SphereGeometry` básicos sin bisel ni shader) para representar objetos del juego. Ningún modelo nuevo puede verse como un conjunto de cubos o esferas simples; todos deben igualar el acabado artesanal de los modelos `.glb` originales.
   - **Pipeline obligatorio para todo nuevo modelo 3D en [`lh-c05.js`](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/lh-c05.js)**:
     1. **Geometría biselada, torneada y esculpida**: Usar siempre los constructores [`lhBevelBox`](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/lh-c05.js#L7054-L7100) (tablones y vigas con bordes redondeados/biselados, curvatura `archY`/`archZ`/`curveZ` y ahusamiento `taper`), [`lhLathe`](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/lh-c05.js#L7101-L7136) (perfiles torneados sin costuras para faroles, botellas, boyas y caracolas) y [`lhCobble`](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/lh-c05.js#L7137-L7152) (piedras facetadas y cojines orgánicos).
     2. **Oclusión Ambiental en Vértices (`lhBakeAO`) y Detección de Bordes (`Y` / `vn` / `Mn`)**: Toda geometría debe llevar `color` de vértice con gradiente de AO ([`lhBakeAO`](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/lh-c05.js#L7035-L7053)) y pasar por `Y(obj)` + `X(mat)` (o [`Mn`](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/lh-c05.js#L3118-L3128)) para activar el brillo de aristas desgastadas (`aEdge > 0`) y sombra en hendiduras (`aEdge < 0`).
     3. **Materiales Procedurales con Nombre (`lhMat` + `hn`)**: Todo material debe crearse con [`lhMat`](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/lh-c05.js#L7031-L7034) usando nombres registrados en [`hn`](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/lh-c05.js#L2358-L2404) (`Bench_Wood`, `Bench_WoodDark`, `Boat_Rail`, `LH_Wood`, `LH_Stone`, `Rock`, `Rock_Moss`, `Bench_Metal`, `LH_Metal`, `LH_Brass`, `LH_White`, `Bench_Red`, `Boat_Red`, `LH_Window`, `Bonfire_End`) para que el shader procedural pinte vetas de madera 3D, piedra cincelada con musgo, hierro forjado satinado, latón pulido o cristal reflectante.
     4. **Composición Artesanal Multi-Pieza y Follaje 3D (`An`)**: Desglosar cada objeto en listones individuales con separación real, postes con remates, herrajes de hierro, remaches de latón, piedras de apoyo y, cuando lleve vegetación, generar hojas 3D reales con [`An(root, 'Rock_Moss', seed)`](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/lh-c05.js#L2986-L3008).

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
  - **[discoveries.ts](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/data/discoveries.ts)**: Catálogo de hallazgos costeros (`SHORE_FINDS`), notas de botellas (`BOTTLE_MESSAGES`), colores de lámpara del faro (`LIGHTHOUSE_LAMP_COLORS`) y colores de farolillos (`LANTERN_COLORS`).
  - **[dialogs.ts](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/data/dialogs.ts)**: Textos y diálogos de Gil.
  - **[world.ts](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/data/world.ts)**: Parámetros del mundo (apariciones de palmeras, tiempos de regeneración, límites de cantera).
- **Motor y Lógica Base (`src/game/`)**:
  - `lh-c00.js` – `lh-c04.js`: Motor Three.js, shaders de agua/cielo/terreno e iluminación.
  - **[lh-c05.js](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/lh-c05.js)**: Entidades 3D de la isla (palmeras `Zr`, cantera `ri`, pesca `di`, inventario `Vr`, bote de remos `jr`, barca de Gil `zi`, hallazgos `wi`, mesas `yi`, fogatas `Ei`, bancos mirador `Hi`/`SeatPlacer`, farolillos `Ui`/`LanternPlacer`, jardineras `Wi`/`PlanterPlacer` y trampas de cangrejos `Gi`/`CrabTrapPlacer`).
  - **[lh-c06.js](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/game/lh-c06.js)**: Clase principal del juego (`qn`), interfaz/HUD (`kn`), audio procedural (`an`) y bucle de simulación.
- **[src/ui/CustomOverlay.tsx](file:///x:/Archivos%20de%20sistema/Escritorio/lighthouse/src/ui/CustomOverlay.tsx)**: Punto de montaje en React (`.tsx`) para nuevas interfaces o widgets superpuestos.

---

## 3. Sistemas ya Implementados

1. **Traducción Completa al Español**: Toda la interfaz, reloj, objetos, herramientas, peces, recetas, controles y diálogos de Gil.
2. **Modularización en TypeScript**: Catálogos extraídos a `src/game/data/` y puente React en `src/game/bridge.ts`.
3. **Tienda de Mejoras y Suministros de Gil**:
   - Permite gastar monedas para ampliar bolsillos de la mochila (`12 → 24`), mejorar el hacha (menos golpes y más madera), mejorar el pico (más piedra por golpe y más usos por roca), mejorar el cebo de pesca (+valor y pesca doble) y comprar suministros (fertilizante instantáneo, lotes de madera y piedra).
4. **Descubrimientos e Interacciones 3D en la Isla**:
   - **Hallazgos Costeros (`Re` / `wi`)**: Aparición periódica de madera a la deriva, caracolas brillantes, cajas náufragas y botellas con notas en la arena.
   - **El Faro Interactivo**: Cambiar el color del haz de luz nocturno, tocar la campana para llamar a Gil y vista panorámica de la isla.
   - **Bote de Remos (`Te` / `jr`)**: Empujar el bote en el agua o revisar su red cuando trae botín flotante (madera, bloques y monedas).
5. **Objetos Construibles Funcionales y Desbloqueo Progresivo de Planos**:
   - **Colocación sobre Terreno, Terrazas de Madera (`allowDeck`) y Orilla (`allowShore`)**: Los objetos decorativos/funcionales pueden colocarse tanto sobre la isla como encima de estructuras de bloques de madera construidas por el jugador.
   - **Banco mirador (`seat`)**: Se desbloquea al colocar 5 bloques de madera. Permite sentarse a contemplar la isla (vista panorámica suave) y recupera `+25` de energía.
   - **Farolillo marino (`lantern`)**: Se desbloquea al recoger 2 hallazgos del mar o colocar 10 bloques. Ilumina con luz cálida por la noche, mantiene el calor nocturno y al tocarlo cambia entre 4 colores (`LANTERN_COLORS`).
   - **Jardinera de bayas (`planter`)**: Se desbloquea al reunir 4 piedras. Cultiva bayas isleñas cada 30 s que al cosecharse restauran `+35` de energía y dan `+2` de madera de poda.
   - **Trampa de cangrejos (`crab_trap`)**: Se desbloquea al pescar 2 peces. Se coloca en la orilla o agua baja y captura pasivamente 1 pez costero + `15` monedas cada 35 s.
   - **Pistas de Inspiración en la Mesa de Trabajo**: Los planos aún no descubiertos aparecen con candado (`🔒`) y una pista acogedora de qué actividad en la isla los inspira.

---

## 4. Próximos Sistemas Sugeridos (Hoja de Ruta Abierta)

Siguiendo la filosofía de *"Una pequeña isla acogedora donde construir"* sin objetivos forzados:

1. **Cuaderno de la Isla (Álbum de Colección y Curiosidades)**:
   - Registro acogedor de especies de peces (y récord de tamaño), notas del mar encontradas en botellas y rincones construidos.
2. **Clima Acogedor y Eventos Suaves del Ambiente**:
   - Lluvia suave (que hace crecer más rápido las palmeras y jardineras), bruma matinal o lluvia de estrellas nocturna con hallazgos especiales en la playa.
3. **Nuevas Variantes de Construcción y Paisajismo**:
   - Flores plantables, caminos de piedra, puentes o pérgolas para personalizar aún más cada rincón de la isla.

