
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