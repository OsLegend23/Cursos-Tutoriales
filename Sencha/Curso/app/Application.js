/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Curso.Application', {
    extend: 'Ext.app.Application',
    name  : 'Curso',
    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function() {
        // TODO - Launch the application
        var ventana = Ext.create('Curso.view.login.WindowLogin', {
         title:     'Bienvenido usuario'
         //Se mandó al windowlogin de view classic
         /*width:     250,
         height:    200,
         closable:  false,
         draggable: false,
         resizable: false,
         modal:     true,
         items:     [
         {
         xtype:      'textfield',
         fieldLabel: 'Usuario'
         },
         {
         xtype:      'textfield',
         fieldLabel: 'Password'
         }
         ],
         buttons:   [
         {
         text: 'Ingresar'
         }
         ]*/
        });

         ventana.show();
    },

    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
