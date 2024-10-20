document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let tabela = document.getElementById("tabelaUsuarios").getElementsByTagName('tbody')[0];
    let novaLinha = tabela.insertRow();
    let celulaNome = novaLinha.insertCell(0);
    let celulaEmail = novaLinha.insertCell(1);
    celulaNome.textContent = nome;
    celulaEmail.textContent = email;
    celulaNome.classList.add("centralizado")
    celulaEmail.classList.add("centralizado")
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
});
