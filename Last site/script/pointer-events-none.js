
const gradientElement = document.getElementById("gradient");

document.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calcula a posição do gradiente em porcentagem
    const xPercent = (clientX / windowWidth) * 100;
    const yPercent = (clientY / windowHeight) * 100;

    // Atualiza o estilo do gradiente
    gradientElement.style.background = `
    radial-gradient(
        600px at ${xPercent}% ${yPercent}%, 
        var(--color-pointer), 
        transparent 80%
    )
    `;
});