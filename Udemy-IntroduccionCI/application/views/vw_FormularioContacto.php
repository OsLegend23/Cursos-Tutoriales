<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Formulario Contacto</title>
    </head>
    <body>

        <div id="container">
            <?php
            $input_con_email = ['name' => 'con_email', 'id' => 'con_email', 'size' => '100', 'maxlength' => '120', 'value' => set_value('con_email'), 'type' => 'email'];
            $input_con_nombre = ['name' => 'con_nombre', 'id' => 'con_nombre', 'size' => '50', 'maxlength' => '60', 'value' => set_value('con_nombre')];
            $input_con_telefono = ['name' => 'con_telefono', 'id' => 'con_telefono', 'size' => '10', 'maxlength' => '10', 'value' => set_value('con_telefono')];
            $input_con_edad = ['name' => 'con_edad', 'id' => 'con_edad', 'size' => '3', 'maxlength' => '3', 'value' => set_value('con_edad')];
            $opciones = ['0' => 'Inactivo', '1' => 'Activo'];
            // echo validation_errors(); //Forma General
            echo form_open();

            echo form_fieldset("Registro");
            echo form_label('Email: ');
            echo form_input($input_con_email);
            echo form_error('con_email') . "<br/>";

            echo form_label('Nombre: ');
            echo form_input($input_con_nombre);
            echo form_error('con_nombre') . "<br/>";

            echo form_label('Teléfono: ');
            echo form_input($input_con_telefono);
            echo form_error('con_telefono') . "<br/>";

            echo form_label('Edad: ');
            echo form_input($input_con_edad);
            echo form_error('con_edad') . "<br/>";

            echo form_label('Estatus: ');
            echo form_dropdown('con_estatus', $opciones, set_value('con_estatus')) . "<br/>";

            echo form_submit('btn_enviar', 'Guardar');

            echo form_close();
            ?>
        </div>
        <p class="footer">Page rendered in <strong>{elapsed_time}</strong>
                          seconds. <?php echo (ENVIRONMENT === 'development') ? 'CodeIgniter Version <strong>' . CI_VERSION . '</strong>' : '' ?>
        </p>
    </body>
</html>