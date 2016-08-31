<?php
function obtener_mes($mes)
{
    --$mes;

    $meses = array('Enero',
                   'Febrero',
                   'Marzo',
                   'Abril',
                   'Mayo',
                   'Junio',
                   'Julio',
                   'Agosto',
                   'Septiembre',
                   'Octubre',
                   'Noviembre',
                   'Diciembre');

    return $meses[$mes];
}

function upper_case_data($raw_data, $upper_case_data)
{
    $data_list = $raw_data;

    foreach ($raw_data as $name => $data) {
        if (in_array($name, array_values($upper_case_data))) {
            $data_list[$name] = strtoupper($data);
        }
    }

    return $data_list;

}