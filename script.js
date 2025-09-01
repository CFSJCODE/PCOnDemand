// Este script adiciona uma animação de fade-in para os cards quando eles aparecem na tela.

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos com a classe 'card'
    const cards = document.querySelectorAll('.card');

    // Configuração do Intersection Observer
    // Ele observa quando um elemento entra na área visível da tela (viewport)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o card está visível na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação CSS
                entry.target.classList.add('visible');
                // Para de observar o elemento para que a animação não se repita
                observer.unobserve(entry.target);
            }
        });
    }, {
        // A animação começa quando 10% do card está visível
        threshold: 0.1 
    });

    // Inicia a observação para cada card encontrado
    cards.forEach(card => {
        observer.observe(card);
    });
});
