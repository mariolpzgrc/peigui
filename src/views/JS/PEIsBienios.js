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