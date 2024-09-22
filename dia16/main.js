var slides = document.querySelectorAll(".slide");
var botoes = document.querySelectorAll(".botao");
let currentSlide = 0;

// Função para navegação manual
var manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('slide-active');
    });

    botoes.forEach((botao) => {
        botao.classList.remove('active');
    });

    slides[manual].classList.add('slide-active');
    botoes[manual].classList.add('active');
};

// Adiciona evento de clique nos botões
botoes.forEach((botao, i) => {
    botao.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
    });
});

// Função para repetição automática dos slides
var repeat = function() {
    let i = currentSlide;
    var repeater = () => {
        setTimeout(function() {
            slides.forEach((slide) => {
                slide.classList.remove('slide-active');
            });
            botoes.forEach((botao) => {
                botao.classList.remove('active');
            });

            i++;

            if (i >= slides.length) {
                i = 0;
            }

            slides[i].classList.add('slide-active');
            botoes[i].classList.add('active');
            currentSlide = i;

            repeater();
        }, 3000); // 3000ms = 3 segundos entre slides
    };
    repeater();
};

// Inicia a repetição automática
repeat();
