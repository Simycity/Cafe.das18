// Função para criar um emoji ☕ flutuante
function createCoffeeParticle() {
    // Cria um novo elemento span para o café
    const particle = document.createElement('span');
    particle.textContent = '☕';
    particle.style.position = 'absolute';
    particle.style.fontSize = `${Math.random() * 2 + 1}em`; // Tamanhos variados
    particle.style.color = '#b5651d'; // Cor semelhante ao café
    particle.style.animation = 'float 3s linear';
    particle.style.top = `${Math.random() * 100}%`; // Posição aleatória vertical
    particle.style.left = `${Math.random() * 100}%`; // Posição aleatória horizontal

    // Define posições aleatórias na página inteira
    const pageHeight = document.documentElement.scrollHeight; // Altura total da página
    const pageWidth = document.documentElement.scrollWidth; // Largura total da página
    particle.style.top = `${Math.random() * pageHeight}px`; // Posição aleatória vertical
    particle.style.left = `${Math.random() * pageWidth}px`; // Posição aleatória horizontal

    // Adiciona o emoji ao body
    document.body.appendChild(particle);

    // Remove o emoji após a animação
    setTimeout(() => {
        particle.remove();
    }, 3000); // Duração da animação
}

// Função para lançar emojis continuamente
function startCoffeeRain() {
    setInterval(() => {
        for (let i = 0; i < 5; i++) { // Cria 5 partículas a cada intervalo
            createCoffeeParticle();
        }
    }, 500); // Intervalo de 500ms
}

// Adiciona estilo de animação ao documento
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-200px) scale(0.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inicia a animação quando a página carrega
window.onload = startCoffeeRain;
