document.addEventListener('DOMContentLoaded', function() {

    function smoothScrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // "Let's Talk" nav button
    const navButton = document.querySelector('.nav-button');
    if (navButton) {
        navButton.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollToSection('contact');
        });
    }

    // "View My Work" hero button
    const viewWorkButton = document.querySelector('.hero-buttons .btn-primary');
    if (viewWorkButton) {
        viewWorkButton.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollToSection('projects');
        });
    }

    // "Get In Touch" hero button
    const getInTouchButton = document.querySelector('.hero-buttons .btn-secondary');
    if (getInTouchButton) {
        getInTouchButton.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollToSection('contact');
        });
    }

    // Smooth scroll for nav and footer anchor links
    const scrollLinks = document.querySelectorAll('.nav-links a[href^="#"], .footer-links a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                smoothScrollToSection(href.substring(1));
            }
        });
    });
});
