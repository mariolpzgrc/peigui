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
        password: '',
        passwordconfirm: '',
        dialogPassword: false,
        correo: '',
        contrasena: '',
        rules: {
            required: value => !!value || 'Requerido',
            rfcValido: v => /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Z\d]{3})?$/.test(v) || "Ingrese un RFC valido"

        },
        emailRules: [
            v => !!v || 'El correo electrónico es requerido',
            v => /.+@.+\..+/.test(v) || 'El correo debe ser válido',
        ],
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
        cambiarContraseña(){
            this.dialog = true;
        }
    }
}