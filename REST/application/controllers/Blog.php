<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Created by PhpStorm.
 * User: OsLegend23
 * Date: 29/06/2016
 * Time: 10:12 PM
 */
class Blog extends CI_Controller
{
    public function index()
    {
        echo 'Hello World!';
    }

    public function comments()
    {
        $comentarios = array(array('id'      => 1,
                                   'mensaje' => 'Salvus agripetas ducunt ad medicina.'),
                             array('id'      => 2,
                                   'mensaje' => 'Why does the wave die.'),
                             array('id'      => 3,
                                   'mensaje' => 'Zirbus cresceres, tanquam noster liberi.'));
        
        echo json_encode($comentarios);
    }
}