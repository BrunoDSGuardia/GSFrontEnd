document.addEventListener("DOMContentLoaded", function () {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const assunto = document.getElementById("assunto");
    const mensagem = document.getElementById("mensagem");
    const formulario = document.getElementById("formulario");


    formulario.addEventListener('submit', (e) => {
        let mensagem = [];
        
        if (nome.value === "" || nome.value === null) {
            mensagem.push("Insira seu nome");
        }
        const partesNome = nome.value.trim().split(" ");
        if (partesNome.length < 2 || nome.value.length === 1) {
            mensagem.push("Adicione um sobrenome");
        }
        if (email.value === "" || email.value === null) {
            mensagem.push("Insira seu email");
        }
        if (assunto.value === "" || assunto.value === null) {
            mensagem.push("Insira o assunto da mensagem");
        }
        if (mensagemFormulario.value === "" || mensagemFormulario.value === null) {
            mensagem.push("Insira sua mensagem");
        }
        if (mensagem.length > 0) {
            e.preventDefault();
            alert(mensagem.join(", \n"));
        } else {
            e.preventDefault();
            alert("Mensagem enviada com sucesso!");
            formulario.reset();

        }
        
    });
});