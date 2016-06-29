/**
 * Created by raguilar on 21/06/2016.
 */
Ext.define('Curso.view.clientes.PanelClientesController', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.panelclientes',

    agregarTabs: function() {
        var btn   = this.lookupReference('tabs');
        var panel = Ext.create('Ext.Panel', {
            closable: true,
            title   : 'Panel hijo'
        });
        panel.on({
            close: function(){
                Ext.Msg.alert('Cerrar', 'Cerrando...');
            }
        });
        //this.up('tabpanel').add(panel);
        //this.up('tabpanel').setActiveTab(panel);
        btn.add(panel);
        btn.setActiveTab(panel);
    },

    agregarVentana: function() {
        //var btnCliente = this.lookupReference('panel');
        var fform = Ext.create('Curso.view.clientes.form.FormClientes',{
            /*listeners: {
                guardado: function() {

                }
            }*/
        });
        //var ventana = Ext.create('Ext.Window', {
        //var ventana = Ext.create('Curso.view.comun.ModalWindow', {
        //var ventana = Ext.create('Curso.view.comun.WindowStatusBar', {
        var ventana = Ext.create('Curso.view.comun.WindowForm', {
            title      : 'Agregar Cliente',
            bodyPadding: 10,
            width      : 800,
            height     : 500,
            items      : fform
            /*draggable  : false,
             resizable  : false,
             modal      : true,
             buttonAlign: 'center',
             layout     : 'fit',*/
            /*items:[{
             xtype: 'formclientes'
             }],*/
            /*buttons    : [
             {
             text   : 'Agregar',
             handler: function() {
             fform.doSubmit();
             }
             }, {
             text   : 'Cancelar',
             handler: function() {
             ventana.hide();
             }
             }
             ]*/
            //onGuardar  : fform.doSubmit
        });

        fform.on({
            scope: this,
            guardado: function( formm, algunos, parametros, mas) {
                console.log(formm);
                ventana.hide();
            },
            actioncomplete:function(){
                console.info('actioncomplete');
            },
            actionfailed:function(){
                console.info('actionfailed');
            },
            activate:function(){
                console.info('activate');
            },
            add:function(){
                console.info('add');
            },
            added:function(){
                console.info('added');
            },
            afterlayout:function(){
                console.info('afterlayout');
            },
            afterlayoutanimation:function(){
                console.info('afterlayoutanimation');
            },
            afterrender:function(){
                console.info('afterrender');
            },
            beforeaction:function(){
                console.info('beforeaction');
            },
            beforeactivate:function(){
                console.info('beforeactivate');
            },
            beforeadd:function(){
                console.info('beforeadd');
            },
            beforeclose:function(){
                console.info('beforeclose');
            },
            beforecollapse:function(){
                console.info('beforecollapse');
            },
            beforedeactivate:function(){
                console.info('beforedeactivate');
            },
            beforedestroy:function(){
                console.info('beforedestroy');
            },
            beforeexpand:function(){
                console.info('beforeexpand');
            },
            beforehide:function(){
                console.info('beforehide');
            },
            beforeremove:function(){
                console.info('beforeremove');
            },
            beforerender:function(){
                console.info('beforerender');
            },
            beforeshow:function(){
                console.info('beforeshow');
            },
            beforestaterestore:function(){
                console.info('beforestaterestore');
            },
            beforestatesave:function(){
                console.info('beforestatesave');
            },
            blur:function(){
                console.info('blur');
            },
            boxready:function(){
                console.info('boxready');
            },
            childmove:function(){
                console.info('childmove');
            },
            close:function(){
                console.info('close');
            },
            collapse:function(){
                console.info('collapse');
            },
            deactivate:function(){
                console.info('deactivate');
            },
            destroy:function(){
                console.info('destroy');
            },
            dirtychange:function(){
                console.info('dirtychange');
            },
            disable:function(){
                console.info('disable');
            },
            dockedadd:function(){
                console.info('dockedadd');
            },
            dockedremove:function(){
                console.info('dockedremove');
            },
            enable:function(){
                console.info('enable');
            },
            expand:function(){
                console.info('expand');
            },
            fielderrorchange:function(fform , field , error){
                console.info('fielderrorchange');
            },
            fieldvaliditychange:function(){
                console.info('fieldvaliditychange');
            },
            float:function(){
                console.info('float');
            },
            focus:function(){
                console.info('focus');
            },
            focusenter:function(){
                console.info('focusenter');
            },
            focusleave:function(){
                console.info('focusleave');
            },
            glyphchange:function(){
                console.info('glyphchange');
            },
            hide:function(){
                console.info('hide');
            },
            iconchange:function(){
                console.info('iconchange');
            },
            iconclschange:function(){
                console.info('iconclschange');
            },
            move:function(){
                console.info('move');
            },
            remove:function(){
                console.info('remove');
            },
            removed:function(){
                console.info('removed');
            },
            render:function(){
                console.info('render');
            },
            resize:function(){
                console.info('resize');
            },
            show:function(){
                console.info('show');
            },
            staterestore:function(){
                console.info('staterestore');
            },
            statesave:function(){
                console.info('statesave');
            },
            titlechange:function(){
                console.info('titlechange');
            },
            unfloat:function(){
                console.info('unfloat');
            },
            validitychange:function(){
                console.info('validitychange');
            }
        });

        ventana.show();
    },

    // Los métodos utilizados en los listeners, para obtener la información, se puede mandar los mismo parámetros en el controller.
    mostrarInformacion: function(tthis, record) {
        this.lookupReference('informacion')
            .update(record.data.nombre + ' ' + record.data.apellido_paterno + ' ' + record.data.apellido_materno);
    },
    
    mandarInformacion: function(tthis, record) {
        this.lookupReference('informacion');
        this.datoSeleccionado(record.data.nombre + ' ' + record.data.apellido_paterno + ' ' + record.data.apellido_materno);
    }
});