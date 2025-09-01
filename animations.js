/*
  Arquivo: js/animations.js
  Descrição: Lógica de animações reutilizável para diversas páginas.
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica das Animações de Scroll ---
    const elementsToReveal = document.querySelectorAll('.reveal');

    if (elementsToReveal.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Se o elemento estiver visível na tela
                if (entry.isIntersecting) {
                    const delay = parseInt(entry.target.dataset.delay || '0', 10);
                    
                    // Aplica a animação após o delay especificado
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, delay);
                    
                    // Para de observar o elemento após a animação para otimizar
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // A animação começa quando 10% do elemento está visível
        });

        elementsToReveal.forEach(element => {
            revealObserver.observe(element);
        });
    }
});
