/**
 * Created by raguilar on 21/06/2016.
 */
Ext.define('Curso.view.clientes.form.FormClientes', {
    extend: 'Ext.form.Panel',

    // Valores por default
    xtype      : 'formclientes',
    bodyPadding: 10,
    /*
     Uncomment to give this component an xtype
     xtype: 'formclientes',
     */

    /*items: [{
     xtype:      'textfield',
     fieldLabel: 'Nombre'
     }, {
     xtype:      'textfield',
     fieldLabel: 'Apellidos'
     }],*/

    initComponent: function() {
        // Valores que sobreescribirán a los de default
        Ext.apply(this, {
            defaults: { //Elegir un objeto y le pasa todo a los hijos.
                allowBlank: false,
                anchor    : '100%',
                labelWidth: 140,
                align     : 'right',
                labelAlign: 'right',
                msgTarget : 'under'
            },

            defaultType: 'textfield',

            items: [{
                fieldLabel: '*Nombre',
                name      : 'nombre',
                emptyText : 'Este campo es obligatorio...'
            }, {
                fieldLabel: '*Correo',
                vtype     : 'email',
                name      : 'email',
                emptyText : 'ejemplor@extjs.mx'
            }, {
                xtype     : 'displayfield',
                fieldLabel: 'Apodo',
                value     : 'Por Asignar...'
            }, {
                xtype     : 'numberfield',
                fieldLabel: 'Edad',
                name      : 'edad',
                minValue  : 5,
                maxValue  : 99
            }, {
                xtype : 'container',
                layout: 'hbox',
                items : [{
                    xtype     : 'datefield',
                    fieldLabel: 'Fecha nacimiento',
                    name      : 'fechan',
                    labelWidth: 140,
                    flex      : 10,
                    maxValue  : new Date()
                }, {
                    flex: 1
                }, {
                    xtype     : 'textfield',
                    fieldLabel: 'Lugar',
                    labelWidth: 50,
                    flex      : 8,
                    name      : 'fechalugar'
                }]
            }, {
                xtype     : 'radiogroup',
                fieldLabel: 'Género',
                vertical  : true,
                defaults  : {
                    flex: 1
                },
                items     : [{
                    boxLabel  : 'Hombre',
                    name      : 'txt_genero',
                    inputValue: 'h'
                }, {
                    boxLabel  : 'Mujer',
                    name      : 'txt_genero',
                    inputValue: 'm',
                    checked   : true
                }]
            }, {
                xtype     : 'checkboxgroup',
                fieldLabel: 'Idiomas',
                columns   : 2,
                vertical  : true,
                items     : [
                    {
                        boxLabel  : 'Francés',
                        name      : 'txt_idioma',
                        inputValue: 'f'
                    }, {
                        boxLabel  : 'Alemán',
                        name      : 'txt_idioma',
                        inputValue: 'a'
                    }, {
                        boxLabel  : 'Portugués',
                        name      : 'txt_idioma',
                        inputValue: 'p'
                    }, {
                        boxLabel  : 'Inglés',
                        name      : 'txt_idioma',
                        inputValue: 'i',
                        checked   : true
                    }
                ]
            }]
        });
        this.callParent();
        this.doLoad();
    },

    doSubmit: function() {
        this.getForm().submit({
            url    : 'server/loginSuccess.json',
            param: {
                algo: 'algo'
            },
            scope: this,
            success: function(formm, result) {
                //método personalizado
                this.fireEvent('guardado', this, 1, 3, 'nombre',{
                    id: 333
                });
                console.info(result);
            },
            failure: function(formm, result) {
                console.info(result)
            }
        });
    },

    doLoad: function() {
        this.getForm().load({
            url    : 'server/loginSuccess.json',
            success: function(form, result) {
                console.info(result);
            },
            failure: function(from, result) {
                console.info(result)
            }
        });
    }
});