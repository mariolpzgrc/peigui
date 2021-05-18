export default {
    data: () => ({
        peiArtes: [],
        peiSalud: [],
        peitecnica: [],
        peiAgropecuarias: [],
        peiHumanidades: [],
        peiEcoAdmin: [],
        headers: [
            {
                text: 'Proyecto Educativo Innovador',
                align: 'start',
                sortable: false,
                value: 'peiNombre',
            },
            {
                text: 'Fecha inicio del Proyecto',
                value: 'fechaInicio'
            },
            {
                text: 'Fecha  fin del proyecto',
                value: 'fechaFin'

            },
            {
                text: 'Hora de inicio de la evaluacion',
                value: 'horaInicio'
            },
            {
                text: 'Hora de termino de la evaluación',
                value: 'horaInicio'
            },
            {
                text: 'Fecha de evaluacion',
                value: 'fechaEvaluacion'
            },
            {
                text: 'Region',
                value: 'region'
            },
            { text: 'Ver', value: 'actions', sortable: false },
        ]
    }),
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            this.peiArtes = [
                {
                    id: 1,
                    peiNombre: 'PEI1',

                },
                {
                    id: 2,
                    peiNombre: 'PEI2'
                },
                {
                    id: 3,
                    peiNombre: 'PEI3'
                },
                {
                    id: 4,
                    peiNombre: 'PEI4'
                },
                {
                    id: 5,
                    peiNombre: 'PEI5'
                },
            ],
                this.peiAgropecuarias = [
                    {
                        id: 1,
                        peiNombre: 'PEI1'
                    },
                    {
                        id: 2,
                        peiNombre: 'PEI2'
                    },
                    {
                        id: 3,
                        peiNombre: 'PEI3'
                    },
                    {
                        id: 4,
                        peiNombre: 'PEI4'
                    },
                    {
                        id: 5,
                        peiNombre: 'PEI5'
                    },
                ],
                this.peiSalud = [
                    {
                        id: 1,
                        peiNombre: 'PEI1'
                    },
                    {
                        id: 2,
                        peiNombre: 'PEI2'
                    },
                    {
                        id: 3,
                        peiNombre: 'PEI3'
                    },
                    {
                        id: 4,
                        peiNombre: 'PEI4'
                    },
                    {
                        id: 5,
                        peiNombre: 'PEI5'
                    },
                ],
                this.peiEcoAdmin = [
                    {
                        id: 1,
                        peiNombre: 'PEI1'
                    },
                    {
                        id: 2,
                        peiNombre: 'PEI2'
                    },
                    {
                        id: 3,
                        peiNombre: 'PEI3'
                    },
                    {
                        id: 4,
                        peiNombre: 'PEI4'
                    },
                    {
                        id: 5,
                        peiNombre: 'PEI5'
                    },
                ],
                this.peitecnica = [
                    {
                        id: 1,
                        peiNombre: 'Identificación de los Fenómenos de Transferencia de Calor y Masa en la Industria Azucarera',
                        fechaInicio: '14/09/2020',
                        fechaFin:'15/01/2021',
                        horaInicio:'3/9/21 21:03:01',
                        horaFin:'3/9/21 22:20:05',
                        fechaEvaluacion: '3/9/21',
                        region: 'Orizaba-Córdoba',
                    },
                    {
                        id: 2,
                        peiNombre: 'PEI2'
                    },
                    {
                        id: 3,
                        peiNombre: 'PEI3'
                    },
                    {
                        id: 4,
                        peiNombre: 'PEI4'
                    },
                    {
                        id: 5,
                        peiNombre: 'PEI5'
                    },
                ],
                this.peiHumanidades = [
                    {
                        id: 1,
                        peiNombre: 'PEI1'
                    },
                    {
                        id: 2,
                        peiNombre: 'PEI2'
                    },
                    {
                        id: 3,
                        peiNombre: 'PEI3'
                    },
                    {
                        id: 4,
                        peiNombre: 'PEI4'
                    },
                    {
                        id: 5,
                        peiNombre: 'PEI5'
                    },
                ]
        }
    }
}