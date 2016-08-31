<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Created by PhpStorm.
 * User: OsLegend23
 * Date: 18/08/2016
 * Time: 11:57 PM
 */
class Clientes extends CI_Controller
{
    public function index()
    {
        $this->load->helper('utilidades');

        $data = array('nombre'    => 'alejandro aguilar',
                      'contacto'  => 'cynthia rosas',
                      'direccion' => 'Mexicali');

        $data_to_uppercase = array('nombre',
                                   'contacto');

        $dataUC = upper_case_data($data, $data_to_uppercase);

        echo json_decode($dataUC);
    }

}