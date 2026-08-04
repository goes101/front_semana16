document.addEventListener("DOMContentLoaded", () => {
    // Pega os elementos do HTML
    const formulario = document.querySelector("#formulario");
    const botao = document.querySelector("#entrar");
    const textoBotao = document.querySelector("#texto-botao");

    // 1) ANIMAÇÃO DE ENTRADA (GSAP)
    gsap.to("form input, #entrar", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    // 2) ANIMAÇÃO DE CARREGAMENTO (JavaScript)
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault(); // Impede a página de recarregar

        if (botao.disabled) return; // Evita múltiplos cliques

        textoBotao.textContent = "Carregando...";
        botao.classList.add("loading");
        botao.disabled = true;

        // Depois de 3 segundos (3000ms), volta ao normal
        setTimeout(() => {
            textoBotao.textContent = "Entrar";
            botao.classList.remove("loading");
            botao.disabled = false;
        }, 3000);
    });

    // 3) PULSAÇÃO NO HOVER (GSAP)
    botao.addEventListener("mouseenter", () => {
        gsap.to(botao, {
            scale: 1.08,
            duration: 0.4,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        });
    });

    botao.addEventListener("mouseleave", () => {
        gsap.killTweensOf(botao); // Para a animação de pulsação
        gsap.to(botao, { scale: 1, duration: 0.2 }); // Volta ao tamanho original
    });
});