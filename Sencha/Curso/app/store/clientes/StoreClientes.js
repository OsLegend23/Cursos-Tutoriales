/**
 * Created by raguilar on 22/06/2016.
 */
Ext.define('Curso.store.clientes.StoreClientes', {
    extend: 'Ext.data.Store',
    model : 'Curso.model.clientes.ModelClientes',

    proxy: {
        type  : 'ajax',
        url   : 'server/clientes.json',
        reader: {
            type         : 'json',
            rootProperty : 'data',
            totalProperty: 'numFilas'
        }
    }
    //autoLoad: true


    /*
     Uncomment to specify data inline
     data : [
     {firstName: 'Ed',    lastName: 'Spencer'},
     {firstName: 'Tommy', lastName: 'Maintz'},
     {firstName: 'Aaron', lastName: 'Conran'}
     ]
     */
});