<?php
require_once "../config/config.php";

$con = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if ($con->connect_error) {
    die("Erro de conexão: " . $con->connect_error);
}

$con->set_charset("utf8");
?>
