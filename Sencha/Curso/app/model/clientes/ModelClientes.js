/**
 * Created by raguilar on 22/06/2016.
 */
Ext.define('Curso.model.clientes.ModelClientes', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'usuario_k',
            type: 'int'
        },
        'nombre',
        'apellido_paterno',
        'apellido_materno',
        {
            name  : 'fecha_ultimo_login',
            type  : 'date',
            format: 'Y-m-d'
        },
        'email',
        {
            name: 'genero',
            type: 'int'
        },
        'rolnombre',
        'colorfavorito',
        'estatus'
    ],

    apellidosToString: function() {
        //return '<b>' + this.data.apellido_paterno + ' </b>' + this.data.apellido_materno;
        return '<b>' + this.get('apellido_paterno') + ' </b>' + this.get('apellido_materno');
    },

    getGenero: function() {
        if(this.get('genero') === 2) {
            return '<img src="resources/icons/man.png" width="25%"></img>';
        } else {
            return '<img src="resources/icons/woman.png" width="25%"></img>';
        }
    }
});