<?php
require_once "db.php";

$id = $_POST['id'];

$con->query("DELETE FROM produtos WHERE id = $id");

echo "ok";
?>
