export default {

    data: () => ({
        activeTab: null,
        tabs: [
            { id: 1, name: "Pautas académicas ", route: `/principal/lineamientos` },//pautasacademicas url
            { id: 2, name: "Invitación", route: `/principal/invitacion` }, // se va a cambiar yse integraran los enlaces de la plataforma
            { id: 3, name: "Registro PEI", route: `/principal/registro-pei` },
            { id: 4, name: 'Ejemplos de PEI', route: `/principal/peis-exitosos` },
            { id: 5, name: 'Evaluar PEI', route: `/principal/evaluacion` },
            { id: 6, name: 'Estadísticas' },
        ],
        items: [
            { title: 'Administrar Usuario', link: `/usuarios` },
            { title: 'Administrar Evaluadores', link: `/administrar-evaluadores` },
            { title: 'Administrar Rol' },
            { title: 'Actas de evaluación', link: `/actas-de-evaluacion` }
        ],
    }),

    methods: {
        selectionSection: function (item) {
            switch (item.title) {
                case 'Administrar Usuario':
                    this.$router.push({ component: 'Usuarios' });
                    break;
            }
        },

    }
}