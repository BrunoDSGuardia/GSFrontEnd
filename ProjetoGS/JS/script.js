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
            let novaCorBody = "rgb(101, 141, 146)";
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody); 

        });
    }
    if (botaoCinza) {
        botaoCinza.addEventListener("click", function() {
            let novaCorBody ="rgb(36, 66, 45)"; ;
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
        });
    }
    
    if (botaoCinzaClaro) {
        botaoCinzaClaro.addEventListener("click", function() {
            let novaCorBody ="rgb(114, 90, 69)" ;
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
        });
    }
    if (botaoAzul) {
        botaoAzul.addEventListener("click", function() {
            let novaCorBody = "rgb(69, 51, 35)"; 
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
        });
    }
    
    if (botaoAzulClaro) {
        botaoAzulClaro.addEventListener("click", function() {
            let novaCorBody = "rgb(31, 29, 29)";  
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
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
