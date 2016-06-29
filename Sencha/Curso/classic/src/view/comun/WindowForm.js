/**
 * Created by raguilar on 23/06/2016.
 */
Ext.define('Curso.view.comun.WindowForm', {
    extend: 'Curso.view.comun.WindowStatusBar',
    xtype : 'windowform',

    txtAgregar: 'Agregar',

    initComponent: function() {
        Ext.apply(this, {
            buttons: this.getBotones()/*[
                {
                    text   : this.txtAgregar,
                    scope  : this,
                    handler: this.onGuardar
                }, {
                    text   : 'Cancelar',
                    scope  : this,
                    handler: function() {
                        this.hide();
                    }
                }
            ]*/
        });

        this.callParent();

        this.child('panel').on({
            scope: this, //scope de la ventana, de quien hereda

            guardadoWForm: function(panelcosa, rec) {
                this.fireEvent('guardadoMain', this, rec);
            },

            actioncomplete      : function() {
                console.info('actioncomplete DE LA VENTANA');
            },
            actionfailed        : function() {
                console.info('actionfailed DE LA VENTANA');
            },
            activate            : function() {
                console.info('activate DE LA VENTANA');
            },
            add                 : function() {
                console.info('add DE LA VENTANA');
            },
            added               : function() {
                console.info('added DE LA VENTANA');
            },
            afterlayout         : function() {
                console.info('afterlayout DE LA VENTANA');
            },
            afterlayoutanimation: function() {
                console.info('afterlayoutanimation DE LA VENTANA');
            },
            afterrender         : function() {
                console.info('afterrender DE LA VENTANA');
            },
            beforeaction        : function() {
                console.info('beforeaction DE LA VENTANA');
            },
            beforeactivate      : function() {
                console.info('beforeactivate DE LA VENTANA');
            },
            beforeadd           : function() {
                console.info('beforeadd DE LA VENTANA');
            },
            beforeclose         : function() {
                console.info('beforeclose DE LA VENTANA');
            },
            beforecollapse      : function() {
                console.info('beforecollapse DE LA VENTANA');
            },
            beforedeactivate    : function() {
                console.info('beforedeactivate DE LA VENTANA');
            },
            beforedestroy       : function() {
                console.info('beforedestroy DE LA VENTANA');
            },
            beforeexpand        : function() {
                console.info('beforeexpand DE LA VENTANA');
            },
            beforehide          : function() {
                console.info('beforehide DE LA VENTANA');
            },
            beforeremove        : function() {
                console.info('beforeremove DE LA VENTANA');
            },
            beforerender        : function() {
                console.info('beforerender DE LA VENTANA');
            },
            beforeshow          : function() {
                console.info('beforeshow DE LA VENTANA');
            },
            beforestaterestore  : function() {
                console.info('beforestaterestore DE LA VENTANA');
            },
            beforestatesave     : function() {
                console.info('beforestatesave DE LA VENTANA');
            },
            blur                : function() {
                console.info('blur DE LA VENTANA');
            },
            boxready            : function() {
                console.info('boxready DE LA VENTANA');
            },
            childmove           : function() {
                console.info('childmove DE LA VENTANA');
            },
            close               : function() {
                console.info('close DE LA VENTANA');
            },
            collapse            : function() {
                console.info('collapse DE LA VENTANA');
            },
            deactivate          : function() {
                console.info('deactivate DE LA VENTANA');
            },
            destroy             : function() {
                console.info('destroy DE LA VENTANA');
            },
            dirtychange         : function() {
                console.info('dirtychange DE LA VENTANA');
            },
            disable             : function() {
                console.info('disable DE LA VENTANA');
            },
            dockedadd           : function() {
                console.info('dockedadd DE LA VENTANA');
            },
            dockedremove        : function() {
                console.info('dockedremove DE LA VENTANA');
            },
            enable              : function() {
                console.info('enable DE LA VENTANA');
            },
            expand              : function() {
                console.info('expand DE LA VENTANA');
            },
            fielderrorchange    : function(fform, field, error) {
                this.msjError(error);
            },
            fieldvaliditychange : function() {
                console.info('fieldvaliditychange DE LA VENTANA');
            },
            float               : function() {
                console.info('float DE LA VENTANA');
            },
            focus               : function() {
                console.info('focus DE LA VENTANA');
            },
            focusenter          : function() {
                console.info('focusenter DE LA VENTANA');
            },
            focusleave          : function() {
                console.info('focusleave DE LA VENTANA');
            },
            glyphchange         : function() {
                console.info('glyphchange DE LA VENTANA');
            },
            hide                : function() {
                console.info('hide DE LA VENTANA');
            },
            iconchange          : function() {
                console.info('iconchange DE LA VENTANA');
            },
            iconclschange       : function() {
                console.info('iconclschange DE LA VENTANA');
            },
            move                : function() {
                console.info('move DE LA VENTANA');
            },
            remove              : function() {
                console.info('remove DE LA VENTANA');
            },
            removed             : function() {
                console.info('removed DE LA VENTANA');
            },
            render              : function() {
                console.info('render DE LA VENTANA');
            },
            resize              : function() {
                console.info('resize DE LA VENTANA');
            },
            show                : function() {
                console.info('show DE LA VENTANA');
            },
            staterestore        : function() {
                console.info('staterestore DE LA VENTANA');
            },
            statesave           : function() {
                console.info('statesave DE LA VENTANA');
            },
            titlechange         : function() {
                console.info('titlechange DE LA VENTANA');
            },
            unfloat             : function() {
                console.info('unfloat DE LA VENTANA');
            },
            validitychange      : function() {
                console.info('validitychange DE LA VENTANA');
            }
        });
    },

    getBotones: function() {
        return [{
            text   : this.txtAgregar,
            scope  : this,
            handler: this.onGuardar
        }, {
            text   : 'Cancelar',
            scope  : this,
            handler: function() {
                this.hide();
            }
        }];
    },

    onGuardar: function() {
        if (this.child('panel').isValid())
            this.child('panel').doSubmit();
    },

    datoSeleccionado: function(dato) {
        alert(dato)
    }
});