export default {
    data: () => ({
        puntaje: 3,
        cumplePEI: 1,
        puntajes: [
            {
                criterio: 'Suficiencia',
                puntajeAsignar: 'Cumple/No cumple',
                puntajeAsignado: 'Cumple'
            },
            {
                criterio: 'Pertinecia',
                puntajeAsignar: 15,
                puntajeAsignado: 11
            }, 
            {
                criterio: 'Congruencia interna',
                puntajeAsignar: 10,
                puntajeAsignado: 9
            }, 
            {
                criterio: 'Impacto',
                puntajeAsignar: 15,
                puntajeAsignado: 11
            },
            {
                criterio: 'Para asignar la puntuación total del PEI realizar la suma de pertinencia y congruencia interna.',
                puntajeAsignar: 'Máximo: 40',
                puntajeAsignado: 31
            }
        ]
    }),
    methods: {
        increment() {
            this.puntaje = parseInt(this.puntaje, 3) + 1
        },
        decrement() {
            this.puntaje = parseInt(this.puntaje, 0) - 1
        }
    }
}