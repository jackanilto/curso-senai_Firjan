<?php
require_once "db.php";

$nome = $_POST['nome'];
$descricao = $_POST['descricao'];
$preco = $_POST['preco'];
$categoria = $_POST['categoria'];

$sql = $con->prepare("INSERT INTO produtos (nome, descricao, preco, categoria) VALUES (?, ?, ?, ?)");
$sql->bind_param("ssds", $nome, $descricao, $preco, $categoria);

if ($sql->execute()) {
    echo "ok";
} else {
    echo "erro";
}
?>
