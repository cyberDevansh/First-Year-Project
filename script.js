// Intro Slides
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const introSlides = document.querySelector('.intro-slides');
    let currentSlide = 0;

    // Show slides for 30 seconds
    function showSlides() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');
        
        currentSlide = (currentSlide + 1) % slides.length;
    }

    // Initial slide
    showSlides();

    // Change slides every 5 seconds
    const slideInterval = setInterval(showSlides, 4500);

    // Hide intro slides after 30 seconds
    setTimeout(() => {
        clearInterval(slideInterval);
        introSlides.classList.add('hidden');
    }, 26500);
});

// Theme Switching
const themeSwitch = document.querySelector('.bulb');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

themeSwitch.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Page Transitions
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    if (content) {
        content.classList.add('page-transition');
        setTimeout(() => {
            content.classList.add('active');
        }, 100);
    }
});

// Mobile Menu Toggle
const createMobileMenu = () => {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-btn';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    document.querySelector('.main-content').prepend(menuButton);
    
    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
};

// Create mobile menu if screen width is small
if (window.innerWidth <= 768) {
    createMobileMenu();
}

// Update mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-btn')) {
            createMobileMenu();
        }
    } else {
        const menuButton = document.querySelector('.mobile-menu-btn');
        if (menuButton) {
            menuButton.remove();
        }
        document.querySelector('.sidebar').classList.remove('active');
    }
}); 