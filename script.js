document.addEventListener('DOMContentLoaded', function () {
    const card = document.querySelector('.card');

    if (card) {
        // Adicionar classe 'hover' ao tocar no elemento
        card.addEventListener('touchstart', function () {
            card.classList.add('hover');
        });

        // Remover classe 'hover' ao retirar o toque do elemento
        card.addEventListener('touchend', function () {
            card.classList.remove('hover');
        });

        // Adicionar classe 'active' ao clicar no elemento
        card.addEventListener('click', function () {
            card.classList.toggle('active');
        });
    } else {
        console.error('Elemento com classe "card" não encontrado.');
    }
});
