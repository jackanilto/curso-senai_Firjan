<?php
require_once "db.php";

$result = $con->query("SELECT * FROM produtos WHERE ativo = 1 ORDER BY nome ASC");

$produtos = [];

while ($row = $result->fetch_assoc()) {
    $produtos[] = $row;
}

echo json_encode($produtos);
?>
