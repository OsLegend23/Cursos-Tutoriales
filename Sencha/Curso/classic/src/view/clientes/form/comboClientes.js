/**
 * Created by raguilar on 22/06/2016.
 */
Ext.define('Curso.view.clientes.form.comboClientes', {
    extend: 'Ext.form.ComboBox',
    xtype : 'comboclientes',
    /*
     Uncomment to give this component an xtype
     xtype: 'comboclientes',
     */

    initComponent: function() {
        Ext.apply(this, {
            displayField: 'nombre',
            store       : Ext.create('Curso.store.clientes.StoreClientes'),
            valueField  : 'usuario_k',
            emptyText   : 'Buscar...'
        });
        this.callParent();
    }

});