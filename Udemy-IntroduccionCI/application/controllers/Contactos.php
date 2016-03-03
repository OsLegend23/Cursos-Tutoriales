<?php
/**
 * Contactos file
 *
 * PHP version 5.6
 *
 * @category Controllers
 * @package  Aplications
 * @author   ISC Alejandro Aguilar <kainraziellok@gmail.com>
 * @license  http://opensource.org/licenses/gpl-license.php GNU Public License
 * @version  GIT: <b641768>, v0.1
 * @link     aplications/controllers
 */
defined('BASEPATH') or exit('No direct script access allowed');

/**
 * Class MdlContactos
 *
 * @category Controller
 * @package  Aplications
 * @author   ISC Alejandro Aguilar <kainraziellok@gmail.com>
 * @license  http://opensource.org/licenses/gpl-license.php GNU Public License
 * @link     aplications/controllers
 */
class Contactos extends CI_Controller
{


    /**
     * Función que inicializa los datos necesarios para el controlador.
     * @return void
     */
    public function index()
    {
        $this->load->model('MdlContactos');

        $data['listado'] = $this->MdlContactos->getTodos();
        $this->load->view('view_lista_contactos', $data);
    }//end index()


    /**
     * Método utilizado para agregar los datos ingresados en el formulario de la vista a la base de datos.
     * @return $this->load->view
     */
    public function agregar()
    {
        $this->load->helper('form');
        $this->load->library('form_validation');
        $this->load->model('MdlContactos');

        // Recibiendo la información del formulario.
        if ($this->input->post()) {
            $this->form_validation->set_rules('con_email', 'Email', 'required|valid_email');
            $this->form_validation->set_rules('con_nombre', 'Nombre', 'required|min_length[3]');
            $this->form_validation->set_rules('con_edad', 'Edad', 'required|integer');
            $this->form_validation->set_rules('con_telefono', 'Teléfono', 'trim|required');
            $this->form_validation->set_rules('con_estatus', 'Estatus', 'trim');

            if ($this->form_validation->run()) {
                // echo 'Información recibida';
                // print_r($this->input->post());
                $id_insertado = $this->MdlContactos->addData();
                echo 'El id creado es ', $id_insertado;
            } else {
                echo 'NO VALIDADO';
                $this->load->view('view_formulario_contacto');
            }
        } else {
            echo 'NO VALIDADO POST';
            $this->load->view('view_formulario_contacto');
        }
    }//end agregar()


}//end class