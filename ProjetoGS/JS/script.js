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


    // Ativando Menu Hambúrguer
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuCompleto.classList.toggle('active')
        // Removendo caractere da nav
        removeLi.forEach(li => {
            li.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    node.nodeValue = node.nodeValue.replace('|', '').trim();
                }
            });
        });
    });




    let corSalva = localStorage.getItem("corDeFundo");
    if (corSalva) {
        body.style.backgroundColor = corSalva;
    }
    if (botaoPreto) {
        botaoPreto.addEventListener("click", function() {
            let novaCorBody = "rgb(31, 29, 29)"; 
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody); 

        });
    }
    if (botaoCinza) {
        botaoCinza.addEventListener("click", function() {
            let novaCorBody = "rgb(51, 52, 62)"; 
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
        });
    }
    
    if (botaoCinzaClaro) {
        botaoCinzaClaro.addEventListener("click", function() {
            let novaCorBody = "rgb(81, 81, 81)"; 
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
        });
    }
    if (botaoAzul) {
        botaoAzul.addEventListener("click", function() {
            let novaCorBody = "rgb(6, 9, 44)"; 
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
        });
    }
    
    if (botaoAzulClaro) {
        botaoAzulClaro.addEventListener("click", function() {
            let novaCorBody = "rgb(27, 89, 140)";  
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
        });
    }
});
document.querySelectorAll(".toggle").forEach((summary) => {
    summary.addEventListener("click", function () {
        const section = this.nextElementSibling;
        
        if (!section) return;

        if (section.style.maxHeight) {
            section.style.maxHeight = null;
            section.style.opacity = "0";
        } else {
            section.style.maxHeight = section.scrollHeight + "px";
            section.style.opacity = "1";
        }
    });
});
