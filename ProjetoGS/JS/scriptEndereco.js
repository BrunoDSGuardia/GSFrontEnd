const Nome = localStorage.getItem("NomeUsuario"); 
console.log("NomeUsuario:", Nome);

if (Nome) {
    document.getElementById("nomeUsuario").textContent = `${Nome}`;
} else {
    document.getElementById("nomeUsuario").textContent = "Usuário";
}
const formularioProjeto = document.getElementById("formularioProjeto");

formularioProjeto.addEventListener("submit", function(event) {
    let erros = [];

    const estadoSelect = document.getElementById("estado-select");
    if (!estadoSelect.value) {
        erros.push("Selecione um estado.");
    }

    const cidadeInput = document.getElementById("cidade-confirmacao-projeto");
    if (cidadeInput.value.trim() === "") {
        erros.push("Insira sua cidade.");
    }

    const cepInput = document.getElementById("cep-projeto");
    if (cepInput.value.trim() === "") {
        erros.push("Insira seu CEP.");
    }

    const enderecoInput = document.getElementById("endereco-projeto");
    if (enderecoInput.value.trim() === "") {
        erros.push("Insira seu endereço.");
    }

    if (erros.length > 0) {
        event.preventDefault();
        alert(erros.join("\n"));
    } else {
        event.preventDefault();
        alert("Região cadastrada com sucesso! Clique em OK para Voltar ao menu.");
        formularioProjeto.reset();
        window.open("index.html", "_self");
    }
});

