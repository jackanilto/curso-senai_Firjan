async function carregarProdutos() {
    const resposta = await fetch("../api/produtos-listar.php");
    const produtos = await resposta.json();

    let html = "";

    produtos.forEach(p => {
        html += `
        <div class="produto-card">
            <img src="../img/${p.imagem}" width="200">
            <h3>${p.nome}</h3>
            <p>${p.descricao}</p>
            <strong>R$ ${p.preco}</strong>
        </div>`;
    });

    document.getElementById("lista-produtos").innerHTML = html;
}

if (document.getElementById("lista-produtos")) {
    carregarProdutos();
}
