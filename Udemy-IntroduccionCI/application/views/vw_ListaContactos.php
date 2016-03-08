<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Lista Contactos</title>
    </head>
    <body>

        <div id="container">
            <?php if (empty($listado)) { ?>
                <h1> Sin Contactos</h1>
            <?php } else { ?>
                Tienes <?php echo count($listado); ?> Contactos(s);
            <?php } ?>
        </div>
        <p class="footer">
            Page rendered in <strong>{elapsed_time}</strong>
            seconds. <?php echo (ENVIRONMENT === 'development') ? 'CodeIgniter Version <strong>' . CI_VERSION . '</strong>' : '' ?>
        </p>
    </body>
</html>