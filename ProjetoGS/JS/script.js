document.addEventListener("DOMContentLoaded", function() {
    let body = document.body;
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menuCores');
    const menuCompleto = document.getElementById('menuNav');
    const removeLi = document.querySelectorAll('li');
    let botaoPreto = document.getElementById("botaoCor");
    let botaoCinza = document.getElementById("botaoCor2");
    let botaoCinzaClaro = document.getElementById("botaoCor3");
    let botaoAzul = document.getElementById("botaoCor4");
    let botaoAzulClaro = document.getElementById("botaoCor5");
    
    function destacarBotao(botao) {
        [botaoPreto, botaoCinza, botaoCinzaClaro, botaoAzul, botaoAzulClaro].forEach(b => {
            if (b) {
                b.classList.remove('botao-selecionado');
                b.style.borderColor = ""; // Remove borda customizada
            }
        });
        if (botao) {
            botao.classList.add('botao-selecionado');
            
            botao.style.borderColor = "rgb(255, 255, 255)";
        }
    }

    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuCompleto.classList.toggle('active')
        
        removeLi.forEach(li => {
            li.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    node.nodeValue = node.nodeValue.replace('|', '').trim();
                }
            });
        });
    });

    const botaoDiminuir = document.getElementById("botaodiminui");
    const elementosTexto = Array.from(document.querySelectorAll("body, body *"));
    const tamanhoOriginal = new Map();

    
    elementosTexto.forEach(element => {
        const computedStyle = window.getComputedStyle(element);
        const fontSize = parseFloat(computedStyle.fontSize);
        if (!isNaN(fontSize)) {
            tamanhoOriginal.set(element, fontSize);
        }
    });

    if (botaoDiminuir) {
        botaoDiminuir.addEventListener("click", function() {
            elementosTexto.forEach(element => {
                const original = tamanhoOriginal.get(element);
                if (!original) return;
                const computedStyle = window.getComputedStyle(element);
                let atual = parseFloat(computedStyle.fontSize);
                let novo = atual * 0.98;
                if (novo < original * 0.92) {
                    novo = original * 0.92;
                }
                element.style.fontSize = novo + "px";
            });
        });
    }

    const botaoAumentar = document.getElementById("botaoaumento");
    if (botaoAumentar) {
        botaoAumentar.addEventListener("click", function() {
            elementosTexto.forEach(element => {
                const original = tamanhoOriginal.get(element);
                if (!original) return;
                const computedStyle = window.getComputedStyle(element);
                let atual = parseFloat(computedStyle.fontSize);
                let novo = atual + 2;
                const maximo = original * 1.08;
                if (novo > maximo) {
                    novo = maximo;
                }
                element.style.fontSize = novo + "px";
            });
        });
    }

    let corSalva = localStorage.getItem("corDeFundo");
    let botaoSalvo = localStorage.getItem("botaoSelecionado");
    if (corSalva) {
        body.style.backgroundColor = corSalva;
    }
    if (botaoSalvo) {
        const botao = document.getElementById(botaoSalvo);
        destacarBotao(botao);
    }

    if (botaoPreto) {
        botaoPreto.addEventListener("click", function() {
            let novaCorBody = "rgb(101, 141, 146)"; 
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody); 
            destacarBotao(botaoPreto);
            localStorage.setItem("botaoSelecionado", "botaoCor");
        });
    }
    if (botaoCinza) {
        botaoCinza.addEventListener("click", function() {
            let novaCorBody ="rgb(36, 66, 45)"; 
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
            destacarBotao(botaoCinza);
            localStorage.setItem("botaoSelecionado", "botaoCor2");
        });
    }
    
    if (botaoCinzaClaro) {
        botaoCinzaClaro.addEventListener("click", function() {
            let novaCorBody ="rgb(114, 90, 69) "; 
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
            destacarBotao(botaoCinzaClaro);
            localStorage.setItem("botaoSelecionado", "botaoCor3");
        });
    }
    if (botaoAzul) {
        botaoAzul.addEventListener("click", function() {
            let novaCorBody = "rgb(69, 51, 35)"; 
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
            destacarBotao(botaoAzul);
            localStorage.setItem("botaoSelecionado", "botaoCor4");
        });
    }
    
    if (botaoAzulClaro) {
        botaoAzulClaro.addEventListener("click", function() {
            let novaCorBody = "rgb(31, 29, 29)"; 
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
            destacarBotao(botaoAzulClaro);
            localStorage.setItem("botaoSelecionado", "botaoCor5");
        });
    }
});
document.querySelectorAll(".toggle").forEach((summary) => {
    summary.addEventListener("click", function () {
        const section = this.nextElementSibling;
        if (!section) return;

        section.style.transition = "max-height 0.75s cubic-bezier(0.4,0,0.2,1), opacity 0.2s cubic-bezier(0.4,0,0.2,1), box-shadow 0.2s, transform 0.4s";
        section.style.overflow = "hidden";
        if (section.style.maxHeight && section.style.maxHeight !== "0px") {
            section.style.maxHeight = "0px";
            section.style.opacity = "0";
            section.style.transform = "scale(0.98)";
            section.style.boxShadow = "none";
        } else {
            section.style.maxHeight = section.scrollHeight + "px";
            section.style.opacity = "1";
            section.style.boxShadow = "0 8px 32px rgba(101,141,146,0.18)";
            section.style.transform = "scale(1)";
        }
    });
    const section = summary.nextElementSibling;
    if (section) {
        section.style.maxHeight = "0px";
        section.style.opacity = "0";
        section.style.overflow = "hidden";
        section.style.transform = "scale(0.98)";
    }
});
