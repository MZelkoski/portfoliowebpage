AOS.init({
    duration: 1000,
    once: true
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.timeline-content').classList.add('highlight');
    });
    item.addEventListener('mouseleave', () => {
        item.querySelector('.timeline-content').classList.remove('highlight');
    });
});

const contactButton = document.getElementById('contactButton');
const contactPopup = document.getElementById('contactPopup');
const closePopup = document.getElementById('closePopup');

contactButton.addEventListener('click', () => {
    contactPopup.classList.add('active');
});

closePopup.addEventListener('click', () => {
    contactPopup.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === contactPopup) {
        contactPopup.classList.remove('active');
    }
});
