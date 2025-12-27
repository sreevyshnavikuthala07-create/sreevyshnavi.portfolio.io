// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize if AOS is loaded via CDN
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false
        });
    }

    // --- Typewriter Effect for Hero Section ---
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const textArray = ["AI/ML Enthusiast", "Full-Stack Developer", "Problem Solver"];
        let textIdx = 0;
        let charIdx = 0;
        
        function type() {
            if (charIdx < textArray[textIdx].length) {
                typewriterElement.textContent += textArray[textIdx].charAt(charIdx);
                charIdx++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }

        function erase() {
            if (charIdx > 0) {
                typewriterElement.textContent = textArray[textIdx].substring(0, charIdx - 1);
                charIdx--;
                setTimeout(erase, 50);
            } else {
                textIdx = (textIdx + 1) % textArray.length;
                setTimeout(type, 500);
            }
        }
        type();
    }

    // --- Active Link Highlighter on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-indigo-600', 'font-bold');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('text-indigo-600', 'font-bold');
            }
        });
    });

    // --- Form Submission Handling (Placeholder) ---
    const contactBtn = document.querySelector('a[href="#contact"]');
    contactBtn.addEventListener('click', (e) => {
        console.log("Navigating to contact section...");
    });
});