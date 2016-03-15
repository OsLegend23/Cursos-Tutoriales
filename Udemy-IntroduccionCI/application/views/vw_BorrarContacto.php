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
            <h1>Eliminar Contacto.</h1>
            <p>¿Estás seguro que deseas eliminar el contacto? <b><?php echo $datos_contacto[0]->con_nombre ?></b></p>
            <?php
            $input_con_id = array('con_id' => $datos_contacto[0]->con_id);
            echo form_open();
            echo form_hidden($input_con_id);
            echo form_submit('btn_enviar', 'Si Deseo Borrarlo');

            echo form_close();
            ?>
        </div>
        <p class="footer">Page rendered in <strong>{elapsed_time}</strong> seconds.
            <?php echo (ENVIRONMENT === 'development') ? 'CodeIgniter Version <strong>' . CI_VERSION . '</strong>' : '' ?>
        </p>
    </body>
</html>