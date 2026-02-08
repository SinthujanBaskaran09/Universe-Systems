/**
 * UNIVERSE SYSTEMS - INTERACTIVE ENHANCEMENTS
 * Swiss Engineering Style with System Terminal Theme
 */

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initializeSystemClock();
    initializeTypingEffect();
    initializeServiceCardAnimations();
    initializeSmoothScrolling();
    addAccessibilityEnhancements();
});

/**
 * Live-updating system clock in IST timezone
 */
function initializeSystemClock() {
    const clockElement = document.getElementById('systemClock');
    if (!clockElement) return;

    function updateClock() {
        const now = new Date();

        // Convert to IST (UTC+5:30)
        const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
        const istTime = new Date(now.getTime() + istOffset);

        const hours = String(istTime.getUTCHours()).padStart(2, '0');
        const minutes = String(istTime.getUTCMinutes()).padStart(2, '0');
        const seconds = String(istTime.getUTCSeconds()).padStart(2, '0');

        clockElement.textContent = `${hours}:${minutes}:${seconds} IST`;
    }

    // Update immediately and then every second
    updateClock();
    setInterval(updateClock, 1000);
}

/**
 * Typing effect for WhatsApp CTA button
 */
function initializeTypingEffect() {
    const ctaTextElement = document.getElementById('ctaText');
    if (!ctaTextElement) return;

    const fullText = 'INITIALIZE PROJECT VIA WHATSAPP';
    let currentIndex = 0;

    function typeNextCharacter() {
        if (currentIndex < fullText.length) {
            ctaTextElement.textContent += fullText[currentIndex];
            currentIndex++;
            setTimeout(typeNextCharacter, 50); // 50ms delay between characters
        }
    }

    // Start typing after a brief delay
    setTimeout(typeNextCharacter, 500);
}

/**
 * Staggered animation for service cards on scroll
 */
function initializeServiceCardAnimations() {
    const serviceCards = document.querySelectorAll('.service-card');

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
}

/**
 * Smooth scrolling for anchor links
 */
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Highlight active section in navigation
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Accessibility enhancements
 */
function addAccessibilityEnhancements() {
    // CTA button accessibility
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.setAttribute('aria-label', 'Initialize project via WhatsApp');
    }

    // Service cards accessibility
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.setAttribute('role', 'article');
    });
}
