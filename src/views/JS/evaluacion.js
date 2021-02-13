const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

export default {
    data: () => ({
        dialogEvaluar: false,
        puntaje: 0,
        reglas: {
            requerido: [v => !!v || "Este campo es requerido"],
            participantesMaximo: [v => (v && v >= 5) || "Debe ser 1 a 5 participantes"],
            participantesMinimo: [v => (v && v < 6) || "El número máximo de participantes es de 5"],
        },
        active: [],
        open: [],
        peis: [],
    }),
    computed: {
        items() {
            return [
                {
                    name: 'Proyectos Educativos Innovadores',
                    children: this.peis,
                },
            ]
        },
        selected() {
            if (!this.active.length) return undefined

            const id = this.active[0]

            return this.peis.find(peis => peis.id === id)
        },
    },
    watch: {
        selected: 'proyectos'
    },
    created() {
        this.initialize();
    },
    methods: {
        async fetchPeis(item) {
            await pause(1500)
            return fetch('/home/mariolpzgrc/Documentos/GitHub/peigui/src/views/JS/')
                .then(res => res.json())
                .then(json => (item.children.push(...json)))
                .catch(err => console.warn(err))
        },
        increment () {
            this.puntaje = parseInt(this.foo,10) + 1
          },
          decrement () {
            this.puntaje = parseInt(this.foo,10) - 1
          }
    }
}