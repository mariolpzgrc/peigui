export default {

    data: () => ({
        activeTab: `/principal/`,
        tabs: [
            { id: 1, name: "Lineamientos ", route: `/principal/` },
            { id: 2, name: "Invitación", route: `/principal/invitacion` },
            { id: 3, name: "Registro PEI", route: `/principal/registro-pei` },
            { id: 4, name: 'Casos exitosos bienios anteriores', route: `/principal/peis-exitosos` },
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