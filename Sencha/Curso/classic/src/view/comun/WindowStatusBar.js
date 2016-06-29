/**
 * Created by raguilar on 23/06/2016.
 */
Ext.define('Curso.view.comun.WindowStatusBar', {
    extend: 'Curso.view.comun.ModalWindow',
    xtype : 'windowstatusbar',

    initComponent: function() {
        this.mibbar = Ext.create('Ext.ux.StatusBar', {
            // defaults to use when the status is cleared:
            defaultText   : 'Default status text',
            defaultIconCls: 'default-icon',

            // values to set initially:
            text   : 'Ready',
            iconCls: 'ready-icon',

            // any standard Toolbar items:
            items: [{
                text: 'A Button'
            }, '-', 'Plain Text']
        });

        this.bbar = this.mibbar;

        this.callParent();
    },
    
    msjError: function(msj) {
        this.mibbar.setStatus({
            text: msj,
            clear: true
        })
    }
});