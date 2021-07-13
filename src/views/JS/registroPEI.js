export default {
    data: () => ({
        dialogRegistrarParticipantes: false,
        reglas: {
            requerido: [v => !!v || "Este campo es requerido"],
            participantesMaximo: [v => (v && v >= 5) || "Debe ser 1 a 5 participantes"],
            participantesMinimo: [v => (v && v < 6) || "El número máximo de participantes es de 5"],
        },
        headers: [
            {
                text: 'Número de Personal',
                align: 'start',
                sortable: false,
                value: 'numeroPersonal',
            },
            { text: 'Nombre completo', value: 'nombre' },
            { text: 'Entidad Académica', value: 'entidadAcademica'},
            { text: 'Programa Educátivo', value: 'programaEducativo'},
            { text: 'Región', value: 'region'}
        ],
    }),

    methods: {

    }
}