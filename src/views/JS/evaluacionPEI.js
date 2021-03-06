export default {
    data: () => ({
        procesoEvaluacion: 1,
        puntaje: 3,
        cumplePEI: 1,
        puntajePertinencia: 1,
        puntajeCongruencia: 1,
        puntajeImpacto: 1,
        puntajeSuficienciaTotal: 0,
        puntajeTablaSuficiencia: [{
            puntajePortada: 0,
            puntajeIndice: 0,
            puntajeDatosEE: 0,
            puntajeResumen: 0,
            puntajeDesarrollo: 0,
            puntajeResultados: 0,
            puntajePropuesta: 0,
            puntajeFuentes: 0,
            puntajeAnexos: 0,
            puntajeDocumentos: 0
        }],
        puntajes: [
            {
                criterio: 'Suficiencia',
                puntajeAsignar: 'Cumple/No cumple',
                puntajeAsignado: 'Cumple'
            },
            {
                criterio: 'Pertinencia',
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
        sumarPuntajeSuficiencia() {
            this.puntajeSuficienciaTotal = (this.puntajePortada + this.puntajeIndice + this.puntajeDatosEE + this.puntajeResumen + this.puntajeDesarrollo + this.puntajePropuesta + this.puntajeFuentes + this.puntajeAnexos + this.puntajeDocumentos)
        },
        increment() {
            this.puntaje = parseInt(this.puntaje, 3) + 1
        },
        decrement() {
            this.puntaje = parseInt(this.puntaje, 0) - 1
        }
    }
}