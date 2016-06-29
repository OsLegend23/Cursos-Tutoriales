/**
 * Created by raguilar on 23/06/2016.
 */
Ext.define('Curso.view.comun.ModalWindow', {
    extend     : 'Ext.window.Window',
    xtype      : 'modalwindow',
    closable   : false,
    draggable  : false,
    resizable  : false,
    modal      : true,
    buttonAlign: 'center',
    layout     : 'fit'
});