// Smooth scroll for navigation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Section visibility on scroll
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
    const viewportHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < viewportHeight - 150) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

// Back to top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.classList.add('back-to-top');
backToTopButton.textContent = '↑ Top';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
