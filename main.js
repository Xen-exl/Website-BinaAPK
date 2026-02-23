const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section, .card, .preview-terminal, h1, .hero-text p, .hero-actions').forEach(el => {
    el.classList.add('reveal-item');
    observer.observe(el);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        setTimeout(() => {
            progressFill.style.width = '100%';
            const statusLabel = document.querySelector('.status-label');
            const statusPercent = document.querySelector('.status-percent');

            setTimeout(() => {
                if (statusLabel) statusLabel.textContent = 'Build Success!';
                if (statusPercent) statusPercent.textContent = '100%';

                // Show success effect on output card
                const outputCard = document.querySelector('.output-card');
                if (outputCard) {
                    outputCard.style.borderColor = '#10B981';
                    outputCard.style.background = 'rgba(16, 185, 129, 0.05)';
                }
            }, 1000);
        }, 500);
    }
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
