Ext.define('Curso.view.login.WindowLoginController', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.windowlogin',

    doLogin: function() {

        var formm      = this.lookupReference('formulario'),
            controller = this; //closures
        console.log(formm.getValues());
        //Ext.Msg.alert('Datos cargados', '¡Bienvenido Usuario!');

        Ext.Ajax.request({
            url    : 'server/login.json',
            params : formm.getValues(),
            scope  : this,//Compartir el contexto del controlador al AjaxRequest
            success: this.doSuccess/*function(response, opts) {
             var obj = Ext.decode(response.responseText);
             console.dir(obj);
             Ext.Msg.alert('Datos Cargados', 'Bienvenido ' + obj.usuario.nombre, function() {
             this.getView().close();
             }, this);
             }*/,
            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
    },

    doSuccess: function(response, opts) {
        var obj = Ext.decode(response.responseText);
        console.dir(obj);
        Ext.Msg.alert('Datos Cargados', 'Bienvenido ' + obj.usuario.nombre, function() {
            this.getView().close();
        }, this);
    }
});