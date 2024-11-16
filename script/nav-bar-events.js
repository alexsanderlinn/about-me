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
}, { threshold: 0.5 }); // Detecta quando 50% da seção é visível

sections.forEach(section => {
    observer.observe(section);
});