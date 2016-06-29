Ext.define('Curso.view.login.WindowLogin', {
    //extend    : 'Ext.window.Window',
    extend    : 'Curso.view.comun.ModalWindow',
    controller: 'windowlogin',
    viewModel : 'windowlogin',

    txtAgregar : 'Acceder',
    bodyPadding: 10,
    width      : 300,
    height     : 190,
    /*closable   : false,
     draggable  : false,
     resizable  : false,
     modal      : true,
     buttonAlign: 'center',
     layout     : 'fit',*/

    items  : {
        xtype    : 'form',
        reference: 'formulario',
        items    : [
            {
                xtype     : 'textfield',
                fieldLabel: 'Usuario',
                name      : 'usuario',
                bind: {
                    value: '{nombre}'
                }
            },
            {
                xtype     : 'textfield',
                fieldLabel: 'Password',
                name      : 'password',
                inputType : 'password'
            }
        ]
    },
    buttons: [
        {
            text   : 'Ingresar',
            handler: 'doLogin', // Su propio controlador
            bind: {
                disabled: '{habilitar}'
            }
        }
    ],

    onGuardar: 'doLogin'
});