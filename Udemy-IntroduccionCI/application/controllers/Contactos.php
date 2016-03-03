<?php
defined('BASEPATH') or exit('No direct script access allowed');

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
    }

    public function agregar()
    {
        $this->load->helper('form');
        $this->load->library('form_validation');
        // Recibiendo la información del formulario.
        if ($this->input->post() === true) {
            $this->form_validation->set_rules('con_email', 'Email', 'required|valid_email');
            $this->form_validation->set_rules('con_nombre', 'Nombre', 'required|min_length[3]');
            $this->form_validation->set_rules('con_edad', 'Edad', 'required|integer');
            $this->form_validation->set_rules('con_telefono', 'Teléfono', 'trim|required');
            $this->form_validation->set_rules('con_estatus', 'Estatus', 'trim');

            if ($this->form_validation->run() === true) {
                $this->MdlContactos->addData();
            } else {
                $this->load->view('view_formulario_contacto');
            }
        } else {
            $this->load->view('view_formulario_contacto');
        }
    }
}