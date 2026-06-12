// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Contact Modal Logic
    const modal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.modal-close');
    const contactForm = document.querySelector('.contact-form');
    const worksSection = document.getElementById('works');
    const aboutSection = document.getElementById('about');
    const servicesSection = document.getElementById('services');
    const worksClose = document.querySelector('#works .works-close');
    const aboutClose = document.querySelector('#about .about-close');
    const servicesClose = document.querySelector('#services .services-close');

    function openContactModal() {
        if (modal) {
            modal.classList.remove('closing');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeContactModal() {
        if (modal) {
            modal.classList.add('closing');
            setTimeout(() => {
                modal.classList.remove('active');
                modal.classList.remove('closing');
                document.body.style.overflow = 'auto';
            }, 300);
        }
    }

    function openWorksOverlay() {
        if (worksSection) {
            worksSection.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeWorksOverlay() {
        if (worksSection) {
            worksSection.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    function openAboutOverlay() {
        if (aboutSection) {
            aboutSection.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeAboutOverlay() {
        if (aboutSection) {
            aboutSection.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    function openServicesOverlay() {
        if (servicesSection) {
            servicesSection.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeServicesOverlay() {
        if (servicesSection) {
            servicesSection.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#contactModal') {
                e.preventDefault();
                openContactModal();
                closeMobileNav();
            } else if (href === '#works') {
                e.preventDefault();
                openWorksOverlay();
                closeMobileNav();
            } else if (href === '#about') {
                e.preventDefault();
                openAboutOverlay();
                closeMobileNav();
            } else if (href === '#services') {
                e.preventDefault();
                openServicesOverlay();
                closeMobileNav();
            } else {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                    closeMobileNav();
                }
            }
        });
    });

    function toggleMobileNav() {
        if (nav) {
            nav.classList.toggle('active');
        }
        if (navToggle) {
            navToggle.classList.toggle('active');
        }
    }

    function closeMobileNav() {
        if (nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
        if (navToggle && navToggle.classList.contains('active')) {
            navToggle.classList.remove('active');
        }
    }

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileNav);
    }

    // Close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeContactModal);
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeContactModal();
            }
        });
    }

    // Close works overlay
    if (worksClose) {
        worksClose.addEventListener('click', closeWorksOverlay);
    }

    // Close about overlay
    if (aboutClose) {
        aboutClose.addEventListener('click', closeAboutOverlay);
    }

    // Close services overlay
    if (servicesClose) {
        servicesClose.addEventListener('click', closeServicesOverlay);
    }

    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (modal && modal.classList.contains('active')) {
                closeContactModal();
            }
            if (worksSection && worksSection.classList.contains('active')) {
                closeWorksOverlay();
            }
            if (aboutSection && aboutSection.classList.contains('active')) {
                closeAboutOverlay();
            }
            if (servicesSection && servicesSection.classList.contains('active')) {
                closeServicesOverlay();
            }
        }
    });

    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent! Thank you for contacting me.');
            contactForm.reset();
            closeContactModal();
        });
    }
});

// Add scroll animation to hero content
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition < window.innerHeight) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// Navbar transparency on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.3)';
    }
});
