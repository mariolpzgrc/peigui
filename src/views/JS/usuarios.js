export default {
    data: () => ({
        dialog: false,
        show1: false,
        dialogDelete: false,
        reglas: {
            requerido: [v => !!v || "Este campo es requerido"],
        },
        headers: [
            {
                text: 'Número de Personal',
                align: 'start',
                sortable: false,
                value: 'numeroPersonal',
            },
            { text: 'Nombre', value: 'nombre' },
            { text: 'Apellido Paterno', value: 'apellidoPaterno' },
            { text: 'Apellido Materno', value: 'apellidoMaterno' },
            { text: 'Telefono', value: 'telefono' },
            { text: 'Extensión', value: 'extension' },
            { text: 'Celular', value: 'celular' },
            { text: 'Correo Electrónico', value: 'email' },
            { text: 'Facultad', value: 'facultad' },
            { text: 'Acciones', value: 'actions', sortable: false },

        ],
        usuarios: [],
        facultades: [
            'Facultad de Estadistica e Informática',
            'Facultad de Biología',
            'Facultad de Ciencias Agrícolas',
            'Instituto de Neuroetología',
            'Instituto de Investigaciones Biológicas',
            'Instituto de Investigaciones Forestales',
            'Instituto de Biotecnología y Ecología Aplicada',
            'Centro de Investigaciones Tropicales',
            'Centro de Ecoalfabetización y Diálogo de Saberes',
            'Centro de Investigaciones Biomédicas',
        ],
        roles: [
            'Administrador',
            'Académico', 
            'ABP'
        ],
        editedUsuarioIndex: -1,
        editedUsuario: {
            numeroPersonal: 0,
            nombre: '',
            apellidoPaterno: '',
            apellidoMaterno: '',
            telefono: '',
            extension: '',
            celular: '',
            email: '',
            facultad: '',
            idFacultad: 0,
            constrasena: '',
            idRol: 0,
            rol: ''
        },
        defaultUsuario: {
            numeroPersonal: 0,
            nombre: '',
            apellidoPaterno: '',
            apellidoMaterno: '',
            telefono: '',
            extension: '',
            celular: '',
            email: '',
            facultad: '',
            idFacultad: 0,
            constrasena: '',
            idRol: 0,
            rol: ''
        },
    }),

    computed: {
        formTitle() {
            return this.editedUsuarioIndex === -1 ? 'Nuevo Usuario' : 'Editar Usuario'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.usuarios = [
                {
                    numeroPersonal: 1,
                    nombre: 'Martin',
                    apellidoPaterno: 'Mata',
                    apellidoMaterno: 'Montiel',
                    telefono: '555-656-1245',
                    extension: '1902',
                    celular: '898-568-9452',
                    email: 'mmata@uv.mx',
                    facultad: 'Administración',
                    idFacultad: 0,
                    constrasena: '',
                },
            ]
        },

        editItem(item) {
            this.editedUsuarioIndex = this.usuarios.indexOf(item)
            this.editedUsuario = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedUsuarioIndex = this.usuarios.indexOf(item)
            this.editedUsuario = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.usuarios.splice(this.editedUsuarioIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedUsuario = Object.assign({}, this.defaultUsuario)
                this.editedUsuarioIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedUsuario = Object.assign({}, this.defaultUsuario)
                this.editedUsuarioIndex = -1
            })
        },

        save() {
            if (this.editedUsuarioIndex > -1) {
                Object.assign(this.usuarios[this.editedUsuarioIndex], this.editedUsuario)
            } else {
                this.usuarios.push(this.editedUsuario)
            }
            this.close()
        },
    },
}
