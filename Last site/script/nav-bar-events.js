// Função para marcar o link ativo
const links = document.querySelectorAll('.navbar a');

const setActiveLink = (activeSectionId) => {
    links.forEach(link => {
        if (link.getAttribute('href').substring(1) === activeSectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

// IntersectionObserver para monitorar a rolagem das seções
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
        }
    });
}, { 
    threshold: 0.5, // Detecta quando 50% da seção é visível
    rootMargin: '-50px 0px 0px 0px' // Ajusta o offset (exemplo: 50px para um cabeçalho fixo)
});

sections.forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Ou 'center' para centralizar
        });
    });
});
