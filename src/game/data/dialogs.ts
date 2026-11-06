/**
 * Diálogos y textos de interacción con Gil (el pescador mercader).
 */
export const GIL_DIALOGS = {
  /** Líneas la primera vez que hablas con Gil. */
  firstMeeting: [
    '¡Ah del barco! Quién lo diría. ¿Alguien viviendo en este peñasco?',
    'Me llamo Gil. Pesco en estas aguas desde mi isla, justo detrás del horizonte.',
    '¡Te vi sacar ese pez! Te propongo un trato: te compro cualquier pez que pesques. Monedas en mano, trato hecho.',
  ],

  /** Saludos aleatorios en visitas posteriores. */
  greetings: [
    '¡Buenos días, camarada! ¿Has pescado algo bueno?',
    '¡Hola! Hace un día estupendo. ¿Tienes algún pez para el viejo Gil?',
    '¡Aquí estás! Las gaviotas me contaron que no has parado.',
    '¡Buen viento! Veamos qué llevas en esa mochila.',
  ],

  /** Aviso cuando trae un pedido especial del mercado. */
  specialOrderIntro: [
    'Ah, y antes de que se me olvide: en el mercado de mi isla buscan un lote especial.',
    '¡Consígueme todo el lote y te pagaré mucho más que por los peces sueltos!',
  ],

  /** Opciones del menú de conversación con Gil. */
  choices: {
    sell: 'Vender pescado',
    buy: 'Comprar mejoras',
    order: 'El pedido especial',
    bye: '¡Hasta luego!',
  },

  /** Respuesta si intentas vender sin tener peces. */
  noFishToSell: [
    '¿Nada por hoy? No pasa nada. El mar guarda sus peces hasta que estés listo.',
  ],

  /** Despedida después de haberle vendido pescado hoy. */
  byeAfterSale: [
    '¡Un placer hacer negocios! Con esto ya he cumplido por hoy.',
    'Volveré mañana por la mañana, como siempre. ¡No te comas todos los buenos!',
  ],

  /** Despedida si no le has vendido nada aún. */
  byeNoSale: [
    '¡Buen viento! Estaré por aquí hasta el atardecer por si pescas algo.',
  ],

  /** Cuando cierras el panel de tienda o de pedido especial. */
  afterShopClose: '¿Algo más?',
  afterOrderClose: 'Sin prisa. El pedido sigue en pie hasta que vuelva a casa.',
}

