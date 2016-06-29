/**
 * Created by raguilar on 21/06/2016.
 */
Ext.define('Curso.view.clientes.PanelClientes', {
    extend    : 'Ext.panel.Panel',
    xtype     : 'panelclientes',
    controller: 'panelclientes',

    tbar  : [{
        text   : 'Agregar Cliente',
        handler: 'agregarVentana'
    }, {
        text: 'Editar'
    }, "->", {
        xtype: 'comboclientes'
    }],
    layout: 'border',

    items: [{
        reference: 'tabs',
        region   : 'center',     // position for region
        xtype    : 'tabpanel',
        split    : true,         // enable resizing
        items    : [{
            title    : 'Administrar',
            xtype    : 'gridClientes',
            reference: 'grid',
            listeners: {
                itemclick: 'mostrarInformacion'
            }
        }],
        bbar     : [{
            text   : 'AGREGAR TAB',
            handler: 'agregarTabs' /*function(){
             var panel = Ext.create('Ext.Panel', {
             closable: true,
             title   : 'Panel hijo'
             });
             panel.on({
             close: function(){
             alert('cerrando');
             }
             });
             this.up('tabpanel').add(panel);
             this.up('tabpanel').setActiveTab(panel);
             }*/
        }]
    }, {
        title    : 'Detalles',
        region   : 'south',     // position for region
        reference: 'informacion',
        height   : 100,
        split    : true,         // enable resizing
        margin   : '0 5 5 5'
    }],

    doSubmit: function() {
        var sel = this.lookupReference('grid').getSelectionModel().getSelection();
        this.fireEvent('guardadoWForm', this, sel[0]);
    },

    isValid: function() {
        var sel = this.lookupReference('grid').getSelectionModel().getSelection();
        if (sel.length === 0) {
            Ext.Msg.alert('Error', 'No hay selección');
            return false;
        }
        return true;
    }
    /*,

     initComponent: function() {
     // Valores que sobreescribirán a los de default

     Ext.apply(this, {
     defaults: { //Elegir un objeto y le pasa todo a los hijos.
     allowBlank: false,
     anchor:     '100%',
     labelWidth: 140,
     align:      'right',
     labelAlign: 'right',
     msgTargets: 'under'
     },

     defaultType: 'textfield',

     items: [{
     xtype:      'textfield',
     fieldLabel: 'Nombre'
     }, {
     xtype:      'textfield',
     fieldLabel: 'Apellidos'
     }]
     });
     this.callParent();
     }*/
});