/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.Loader.setConfig({
    enabled       : true,
    disableCaching: false
});
Ext.application({
    name: 'Curso',

    extend: 'Curso.Application',

    requires: [
        'Ext.ux.statusbar.StatusBar',
        'Curso.view.comun.ModalWindow',
        'Curso.view.comun.WindowStatusBar',
        'Curso.view.comun.WindowForm',
        'Curso.view.main.Main',
        'Curso.store.clientes.StoreClientes',
        'Curso.model.clientes.ModelClientes',
        'Curso.view.login.WindowLoginController',
        'Curso.view.login.WindowLoginModel',
        'Curso.view.login.WindowLogin',
        'Curso.view.clientes.PanelClientesController',
        'Curso.view.clientes.PanelClientes',
        'Curso.view.clientes.form.FormClientes',
        'Curso.view.clientes.grid.GridClientes',
        'Curso.view.clientes.form.comboClientes'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'Curso.view.main.Main'

    //-------------------------------------------------------------------------
    // Most customizations should be made to Curso.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
