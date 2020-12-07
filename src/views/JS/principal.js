export default {
    data: () => ({
        items: [{title: "Administrar Usuario"}, {title: "Administrar roles"}],
    }),

    methods: {
        selectionSection: function(item) {
            switch(item.title){
                case 'Administrar Usuario':
                    this.$router.push({ name: "Usuarios" });
                break;
            }
        },
        abrirlineamientos(){
            this.$router.push({name: "Lineamientos"});
        }
    }
}