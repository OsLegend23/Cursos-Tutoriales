<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Created by PhpStorm.
 * User: OsLegend23
 * Date: 29/06/2016
 * Time: 10:27 PM
 */
class Meses extends CI_Controller
{
    public function mes($mes)
    {

        $this->load->helper('utilidades');

        echo json_encode(obtener_mes($mes));
    }
}