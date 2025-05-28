document.addEventListener("DOMContentLoaded", function () {

    const nomeProjeto = document.getElementById("nome-projeto");
    const emailProjeto = document.getElementById("email-projeto");
    const emailConfirmacaoProjeto = document.getElementById("email-confirmacao-projeto");
    const senhaProjeto = document.getElementById("senha-projeto");
    const senhaConfirmacaoProjeto = document.getElementById("senha-confirmacao-projeto");
    const formularioProjeto = document.getElementById("formularioProjeto");






    formularioProjeto.addEventListener("submit", (a) => {
        let mensagemProjeto = [];


        if ( nomeProjeto.value === "" || nomeProjeto.value === null) {
            mensagemProjeto.push("Insira seu nome");
        }
        
        
        const partesNomeProjeto = nomeProjeto.value.trim().split(" ");
        if (partesNomeProjeto.length < 2) {
            mensagemProjeto.push("Adicione um sobrenome");
        }
        
        if (emailProjeto.value.trim() === "") {
            mensagemProjeto.push("Insira seu email");
        }
        
        if (emailProjeto.value.trim() !== emailConfirmacaoProjeto.value.trim()) {
            mensagemProjeto.push("Os emails não estão iguais");
        }
        const sexoProjeto = document.querySelector('input[name="escolhasexo"]:checked');
        if (!sexoProjeto) {
            mensagemProjeto.push("Selecione seu gener");
        }


        
        if (senhaProjeto.value.trim() === "") {
            mensagemProjeto.push("Insira sua senha");
        }
        if (senhaProjeto.value.trim() !== senhaConfirmacaoProjeto.value.trim()) {
            mensagemProjeto.push("As senhas não estão iguais");
        }
        if (mensagemProjeto.length > 0) {
        
            a.preventDefault();
            alert(mensagemProjeto.join(", \n"));
        } 
        else {
            a.preventDefault();
            alert("Mensagem enviada com sucesso!");
            formularioProjeto.reset();
        }

    });
});