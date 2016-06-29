/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Curso.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function(sender, record) {
//        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        var planelClientes = Ext.create('Curso.view.clientes.PanelClientes');
        var wwin           = Ext.create('Curso.view.comun.WindowForm', {
            width    : 900,
            height   : 500,
            items    : planelClientes,
            title    : 'Buscar y seleccionar cliente',
            autoShow : true,
            listeners: {
                guardadoMain: function(alguie, rec) {
                    wwin.hide();
                    Ext.Msg.alert('Ususario', rec.data.nombre);
                }
            }
        });
    },

    onConfirm: function(choice) {
        if (choice === 'yes') {
            //
        }
    }
});
