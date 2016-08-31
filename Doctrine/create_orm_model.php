<?php
require_once __FILE__  . '/lib/Doctrine.php';
spl_autoload_register(array('Doctrine',  'autoload'));
$conn  =  Doctrine_Manager::connection('mysql://root:password@localhost/ontuts_doctrine',  'doctrine');
Doctrine_Core::generateModelsFromDb('models',  array('doctrine'), array('generateTableClasses' => true));