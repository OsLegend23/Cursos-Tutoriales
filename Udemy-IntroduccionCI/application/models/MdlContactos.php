<?php
/**
 * MdlContactos file
 *
 * PHP version 5.6
 *
 * @category Models
 * @package  Aplications
 * @author   ISC Alejandro Aguilar <kainraziellok@gmail.com>
 * @license  http://opensource.org/licenses/gpl-license.php GNU Public License
 * @version  GIT: <b641768>, v0.1
 * @link     aplications/models
 */
defined('BASEPATH') or exit('No direct script access allowed');

/**
 * Class MdlContactos
 *
 * @category Models
 * @package  Aplications
 * @author   ISC Alejandro Aguilar <kainraziellok@gmail.com>
 * @license  http://opensource.org/licenses/gpl-license.php GNU Public License
 * @link     aplications/models
 */
class MdlContactos extends CI_Model
{


    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    /**
     * Método para obtener Todos los contactos.
     *
     * @return array result Array con todos los datos.
     */
    public function getTodos()
    {
        $query = $this->db->get('Contactos');

        return $query->result();

    }//end getTodos()


    /**
     * Método para obtener Todos los contactos.
     *
     * @param  int $id Identificador de la consutla.
     *
     * @return array result Array con todos los datos.
     */
    public function getById($id)
    {
        $this->db->where('con_id', $id);
        $query = $this->db->get('Contactos');

        return $query->result();

    }//end getTodos()

    /**
     * Método para agregar Datos a la tabla Contactos.
     *
     * @return int insert_id Valor del insert.
     */
    public function addData()
    {
        $data_insertar = $this->input->post();
        unset($data_insertar['btn_enviar']);
        $this->db->insert('contactos', $data_insertar);

        return $this->db->insert_id();

    }//end addData()

    public function updateData($id)
    {
        $data_insertar = $this->input->post();
        unset($data_insertar['btn_enviar']);

        $this->db->where('con_id', $id);
        $this->db->update('contactos', $data_insertar);
    }

    public function deleteData($id)
    {
        $this->db->where('con_id', $id);
        $this->db->delete('contactos');
    }

}//end class
