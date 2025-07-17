function menuShow() { // Define a função chamada menuShow, usada para abrir/fechar o menu mobile

    let menuMobile = document.querySelector('.mobile-menu'); // Pega o elemento com a classe .mobile-menu

    if (menuMobile.classList.contains('open')) { // Verifica se o menu tem a classe 'open' (ou seja, está visível)

        menuMobile.classList.remove('open'); // Se estiver aberto, remove a classe 'open' para esconder o menu

        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg"; // Troca o ícone para o ícone de "menu" (hambúrguer)

    } else { // Caso o menu não esteja aberto

        menuMobile.classList.add('open'); // Adiciona a classe 'open' para mostrar o menu

        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg"; // Troca o ícone para o ícone de "fechar" (X)

    }
}


document.addEventListener("DOMContentLoaded", () => { // Espera o carregamento completo do HTML antes de executar o código
    const perguntas = document.querySelectorAll(".accordion-item"); // Seleciona todos os elementos com a classe .accordion-item e guarda em uma lista

    perguntas.forEach((pergunta, index) => { // Percorre cada elemento da lista com seu respectivo índice
        setTimeout(() => { 
            pergunta.classList.add("mostrar"); // Adiciona a classe 'mostrar' a cada item com um pequeno atraso
        }, index * 170); // O atraso é multiplicado pelo índice (170ms entre cada item) criando um efeito de "aparecer em sequência"
    });
});


const button = document.getElementById('toggle-theme'); // Pega o botão com o ID 'toggle-theme'
const body = document.body; // Pega o elemento <body> da página

button.addEventListener('click', () => { // Adiciona um ouvinte de evento de clique no botão
  body.classList.toggle('dark-theme'); // Ao clicar, alterna (adiciona ou remove) a classe 'dark-theme' no body
});
