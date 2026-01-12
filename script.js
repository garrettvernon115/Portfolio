// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll function
    function smoothScrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // "Let's Talk" button in navigation
    const navButton = document.querySelector('.nav-button');
    if (navButton) {
        navButton.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollToSection('contact');
        });
    }

    // "View My Work" button in hero section
    const viewWorkButton = document.querySelector('.btn-primary');
    if (viewWorkButton && viewWorkButton.textContent.trim() === 'View My Work') {
        viewWorkButton.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollToSection('projects');
        });
    }

    // "Get In Touch" button in hero section
    const getInTouchButton = document.querySelector('.btn-secondary');
    if (getInTouchButton && getInTouchButton.textContent.trim() === 'Get In Touch') {
        getInTouchButton.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollToSection('contact');
        });
    }

    // Handle navigation links for smooth scrolling (optional enhancement)
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const sectionId = href.substring(1);
                smoothScrollToSection(sectionId);
            }
        });
    });

    // Handle footer links for smooth scrolling (optional enhancement)
    const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const sectionId = href.substring(1);
                smoothScrollToSection(sectionId);
            }
        });
    });
});
