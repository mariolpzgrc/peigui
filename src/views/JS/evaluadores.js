export default {

    data: () => ({
        search: '',
        dialogNuevoEvaluador: false,
        dialogEliminarEvaluador: false,
        modalInicio: false,
        modalTermino: false,
        reglas: {
            requerido: [v => !!v || "Este campo es requerido"],
        },
        headers: [
            {
                text: 'Número de personal',
                align: 'start',
                sortable: false,
                value: 'numeroPersonal'
            },
            { text: 'Apellido Paterno', value: 'apellidoPaterno' },
            { text: 'Apellido Materno', value: 'apellidoMaterno' },
            { text: 'Nombre (s)', value: 'nombre' },
            { text: 'Fecha de Inicio', value: 'fechaInicio' },
            { text: 'Fecha de Termino', value: 'fechaTermino' },
            { text: ' Nombre de la comisión', value: 'comision' },
            { text: 'Acciones', value: 'actions', sortable: false },

        ],
        evaluadores: [],
        editedEvaluadorIndex: -1,
        editedEvaluador: {
            numeroConsecutivo: 0,
            numeroPersonal: 0,
            apellidoPaterno: '',
            apellidoMaterno: '',
            nombre: '',
            fechaInicio: '',
            fechaTermino: '',
            idComision: 0,
            comision: ''
        },
        defaultEvaluador: {
            numeroConsecutivo: 0,
            numeroPersonal: 0,
            apellidoPaterno: '',
            apellidoMaterno: '',
            nombre: '',
            fechaInicio: '',
            fechaTermino: '',
            idComision: 0,
            comision: ''
        },
    }),

    computed: {
        tituloDialogo() {
            return this.editedEvaluadorIndex === -1 ? 'Nuevo Evaluador' : 'Editar Evaluador'
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
            dialogDelete(val) {
                val || this.closeDelete()
            }
        },
        methods:{
            save(){
                if(this.editedEvaluadorIndex > -1){
                    Object.assign(this.evaluadores[this.editedEvaluadorIndex], this.editedEvaluador)
                } else {
                    this.evaluadores.push(this.editedEvaluador)
                }
                this.close()
            },
            editEvaluador(item){
                this.editedEvaluadorIndex = this.evaluadores.indexOf(item)
                this.editedEvaluador = Object.assign({}, item),
                this.dialogNuevoEvaluador = true
            },
            deleteEvaluador(item){
                this.editedEvaluadorIndex = this.evaluadores.indexOf(item)
                this.editedEvaluador = Object.assign({}, item),
                this.dialogNuevoEvaluador = true
            },
            deleteConfirm(){
                this.evaluadores.splice(this.editedEvaluadorIndex, 1)
                this.closeDelete()
            },
            close(){
                this.dialogNuevoEvaluador = false
                this.$nextTick(() =>{
                    this.editedEvaluador = Object.assign({}, this.defaultEvaluador)
                    this.editedEvaluadorIndex = -1
                })
            },
            closeDelete(){
                this.dialogNuevoEvaluador = false
                this.$nextTick(() =>{
                    this.editedEvaluador = Object.assign({}, this.defaultEvaluador)
                    this.editedEvaluadorIndex = -1
                })
            }
        }

    },
}