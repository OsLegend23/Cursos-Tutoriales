/**
 * Created by raguilar on 22/06/2016.
 */
Ext.define('Curso.view.clientes.grid.GridClientes', {
    extend: 'Ext.grid.GridPanel',

    xtype: 'gridClientes',

    initComponent: function() {
        Ext.apply(this, {
            store  : Ext.create('Curso.store.clientes.StoreClientes', {
                autoLoad: true
            }),
            columns: [
                {
                    text     : 'Nombre',
                    dataIndex: 'nombre',
                    flex     : 1,
                    renderer : function(dataindex, metadata, record) {
                        //return '<b>' + record.data.apellido_paterno + ' </b>' + record.data.apellido_materno;
                        return record.getGenero() + record.get('nombre');
                    }
                },
                {
                    text     : 'Apellidos',
                    dataIndex: 'apellido_paterno',
                    flex     : 1,
                    renderer : function(dataindex, metadata, record) {
                        //return '<b>' + record.data.apellido_paterno + ' </b>' + record.data.apellido_materno;
                        return record.apellidosToString();
                    }
                },
                {
                    text     : 'Fecha última login',
                    dataIndex: 'fecha_ultimo_login',
                    xtype    : 'datecolumn',
                    flex     : 1
                },
                {
                    text     : 'Correo Electrónico',
                    dataIndex: 'email',
                    flex     : 1
                },
                {
                    text     : 'Rol',
                    dataIndex: 'rolnombre',
                    flex     : 1
                },
                {
                    xtype: 'actioncolumn',
                    width: 50,
                    items: [{
                        icon   : 'resources/icons/edit.png',  // Use a URL in the icon config
                        tooltip: 'Edit',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            alert("Edit " + rec.get('nombre'));
                        }
                    }, {
                        icon   : 'resources/icons/Cancel.png',
                        tooltip: 'Delete',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            Ext.Msg.confirm('Eliminar', '¿Estás seguro de querer eliminar a ' + rec.data.nombre + '?', function(res) {
                                if (res === 'yes') {
                                    grid.getStore().remove(rec);
                                }
                            })
                        }
                    }]
                }
            ],
            height : 200,
            width  : 400
        });
        this.callParent();
    }
});