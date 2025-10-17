// ==========================================
// Navbar Scroll Effect
// ==========================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==========================================
// Mobile Navigation Toggle
// ==========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ==========================================
// Active Navigation Link Based on Scroll
// ==========================================
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ==========================================
// Smooth Scroll for Anchor Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Back to Top Button
// ==========================================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// Intersection Observer for Fade-in Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ==========================================
// Typed Text Effect for Hero Subtitle
// ==========================================
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    heroSubtitle.style.opacity = '1';
    
    let charIndex = 0;
    
    function typeText() {
        if (charIndex < text.length) {
            heroSubtitle.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        }
    }
    
    // Start typing after page load
    setTimeout(typeText, 1000);
}

// ==========================================
// Counter Animation for Stats
// ==========================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statCards = entry.target.querySelectorAll('.stat-card h3');
            statCards.forEach((card, index) => {
                const values = [4, 10, 1000, 5];
                setTimeout(() => {
                    animateCounter(card, values[index], 2000);
                }, index * 200);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// ==========================================
// Skills Bar Animation
// ==========================================
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.animation = 'fillBar 1.5s ease-out forwards';
                }, index * 100);
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('.skills-content');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// ==========================================
// Timeline Animation
// ==========================================
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    timelineObserver.observe(item);
});

// ==========================================
// Project Cards Hover Effect
// ==========================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ==========================================
// Tech Badges Floating Animation
// ==========================================
const techBadges = document.querySelectorAll('.tech-badge');

techBadges.forEach((badge, index) => {
    const randomDelay = Math.random() * 2;
    const randomDuration = 3 + Math.random() * 2;
    badge.style.animationDelay = `${randomDelay}s`;
    badge.style.animationDuration = `${randomDuration}s`;
});

// ==========================================
// Form Validation (if contact form is added)
// ==========================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[name="name"]');
        const email = contactForm.querySelector('input[name="email"]');
        const message = contactForm.querySelector('textarea[name="message"]');
        
        let isValid = true;
        
        // Basic validation
        if (name.value.trim() === '') {
            showError(name, 'Por favor, informe seu nome');
            isValid = false;
        } else {
            clearError(name);
        }
        
        if (!isValidEmail(email.value)) {
            showError(email, 'Por favor, informe um email válido');
            isValid = false;
        } else {
            clearError(email);
        }
        
        if (message.value.trim() === '') {
            showError(message, 'Por favor, informe sua mensagem');
            isValid = false;
        } else {
            clearError(message);
        }
        
        if (isValid) {
            // Submit form
            console.log('Form submitted successfully!');
            contactForm.reset();
            showSuccessMessage();
        }
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message') || document.createElement('span');
    error.className = 'error-message';
    error.textContent = message;
    error.style.color = 'var(--accent-color)';
    error.style.fontSize = '14px';
    error.style.marginTop = '5px';
    error.style.display = 'block';
    
    if (!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(error);
    }
    
    input.style.borderColor = 'var(--accent-color)';
}

function clearError(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message');
    if (error) {
        error.remove();
    }
    input.style.borderColor = '';
}

function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'success-message';
    message.textContent = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
    message.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 20px 30px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-xl);
        z-index: 9999;
        animation: slideInRight 0.5s ease;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

// ==========================================
// Loading Screen (optional)
// ==========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        activateNavLink();
    }, 100);
});

// ==========================================
// Keyboard Navigation Accessibility
// ==========================================
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ==========================================
// Copy Email to Clipboard
// ==========================================
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (navigator.clipboard) {
            const email = link.getAttribute('href').replace('mailto:', '');
            
            // Create tooltip
            const tooltip = document.createElement('span');
            tooltip.textContent = 'Email copiado!';
            tooltip.style.cssText = `
                position: absolute;
                background: var(--text-primary);
                color: white;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 12px;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                white-space: nowrap;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            link.style.position = 'relative';
            link.appendChild(tooltip);
            
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 10);
            
            setTimeout(() => {
                tooltip.style.opacity = '0';
                setTimeout(() => tooltip.remove(), 300);
            }, 2000);
        }
    });
});

// ==========================================
// Performance Optimization - Lazy Loading Images
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// Dark Mode Toggle (optional feature)
// ==========================================
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (darkModeToggle) {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        darkModeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// Initialize dark mode if toggle exists
initDarkMode();

// ==========================================
// Console Easter Egg
// ==========================================
console.log('%c👋 Olá, desenvolvedor!', 'font-size: 20px; font-weight: bold; color: #42b983;');
console.log('%cSe você está aqui, deve ser um desenvolvedor curioso! 🔍', 'font-size: 14px; color: #5a6c7d;');
console.log('%cPortfólio desenvolvido com Vue.js, HTML5, CSS3 e JavaScript', 'font-size: 12px; color: #8b98a5;');
console.log('%cContato: elizabeth.tj@hotmail.com', 'font-size: 12px; color: #42b983; font-weight: bold;');

// ==========================================
// Analytics Event Tracking (placeholder)
// ==========================================
function trackEvent(category, action, label) {
    // Placeholder for analytics tracking
    // Replace with your preferred analytics service (Google Analytics, Mixpanel, etc.)
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track button clicks
document.querySelectorAll('.btn, .btn-primary, .btn-secondary, .btn-project').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('Button', 'Click', btn.textContent.trim());
    });
});

// Track social link clicks
document.querySelectorAll('.social-links a, .footer-social a').forEach(link => {
    link.addEventListener('click', () => {
        const platform = link.querySelector('i').className;
        trackEvent('Social', 'Click', platform);
    });
});

// Track project link clicks
document.querySelectorAll('.project-link, .btn-project').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('Project', 'Click', link.getAttribute('href'));
    });
});

// ==========================================
// Initialize Everything on Page Load
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized successfully! ✨');
    
    // Add any additional initialization code here
});

// ==========================================
// Service Worker Registration (optional for PWA)
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable PWA features
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}
