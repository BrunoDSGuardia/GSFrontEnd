const Nome = localStorage.getItem("NomeUsuario"); // Recupera o nome do localStorage
console.log("NomeUsuario:", Nome);

if (Nome) {
    document.getElementById("nomeUsuario").textContent = `Nome: ${Nome}`;
} else {
    document.getElementById("nomeUsuario").textContent = "Usuário";
}

