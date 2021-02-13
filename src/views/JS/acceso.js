import { postData } from './axios.js'

export default {
    data: () => ({
        mensajeError: false,
        mensaje: '',
        disabled: false,
        loading: false,
        valid: true,
        show: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        password: '',
        passwordconfirm: '',
        dialogPassword: false,
        dialogRegistrarMaestro: false,
        correo: '',
        contrasena: '',
        reglas: {
            requerido: value => !!value || 'Campo requerido',
            rfcValido: v => /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Z\d]{3})?$/.test(v) || "Ingrese un RFC valido",
            email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Correo electronico invalido.'
            },

        },
    }),

    methods: {
        iniciarSesion() {
            this.disabled = true;
            this.loading = true;
            if (this.correo != null && this.contrasena != null) {
                this.$router.push({ name: "Principal" });
            }
            this.disabled = false;
            this.loading = false;
        },
        cambiarContraseña() {
            this.dialog = true;
        }
    }
}