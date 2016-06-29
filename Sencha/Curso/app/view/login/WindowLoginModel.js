/**
 * Created by raguilar on 24/06/2016.
 */
Ext.define('Curso.view.login.WindowLoginModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.windowlogin',

    data: {
        nombre: ''
    },

    formulas: {
        habilitar: function(get) {
            var d = get('nombre');
            console.log(d);
            if(Ext.isEmpty(d))
                return true;
            return false;
        }
    }
});