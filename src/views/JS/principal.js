export default {

    data: () => ({
        activeTab: `/principal/`,
        tabs: [
            { id: 1, name: "Lineamientos", route: `/principal/` },
            { id: 2, name: "Registro PEI", route: `/principal/registro-pei` },
            { id: 3, name: 'Casos exitosos bienios anteriores', route: `/principal/peis-exitosos` },
            { id: 4, name: 'Evaluar PEI', route: `/principal/evaluacion` },
            { id: 5, name: 'Estadísticas' },
        ],
        items: [
            { title: 'Administrar Usuario', link: `/usuarios`},
            { title: 'Administrar Rol' },
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