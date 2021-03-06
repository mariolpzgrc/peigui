export default {

    data: () => ({
        search: '',
        tipoBusqueda: null,
        headers: [
            {
                text: 'Folio',
                align: 'start',
                filterable: false,
                value: 'folio',
            },
            { text: 'Nombre', value: 'nombre' },
            { text: 'Fecha Evaluación', value: 'fechaEvaluacion' },
            {text: 'Evaluadores', value: 'evaluadores'},
            { text: 'Ver', value: 'iron' },
        ],
        peis:[]
    })
}