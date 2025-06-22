// DOM Elements
const themeSwitch = document.querySelector('.theme-switch input');
const toggleIcon = document.getElementById('toggle-icon');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.querySelector('.back-to-top');
const currentYear = document.getElementById('year');
const videoItems = document.querySelectorAll('.video-item');
const videoModal = document.querySelector('.video-modal');
const closeModal = document.querySelector('.close-modal');
const modalVideo = document.querySelector('.modal-content video');

// Set current year
currentYear.textContent = new Date().getFullYear();

// Theme Switch
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleIcon.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleIcon.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Event Listeners
themeSwitch.addEventListener('change', switchTheme);

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark') {
        themeSwitch.checked = true;
        toggleIcon.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
        
        // Update active nav link
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});

// Back to top button
backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
    
    // Update active nav link based on scroll position
    const fromTop = window.scrollY + 200;
    
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Video Gallery
videoItems.forEach(item => {
    const videoWrapper = item.querySelector('.video-wrapper');
    const video = item.querySelector('.video-thumbnail');
    const videoSrc = video.querySelector('source').getAttribute('src');
    
    videoWrapper.addEventListener('click', () => {
        modalVideo.querySelector('source').setAttribute('src', videoSrc);
        modalVideo.load();
        videoModal.classList.add('active');
    });
});

closeModal.addEventListener('click', () => {
    videoModal.classList.remove('active');
    modalVideo.pause();
});

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        modalVideo.pause();
    }
});

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                
                // For skills category
                if (entry.target.classList.contains('skills-category')) {
                    entry.target.classList.add('show');
                }
                
                // For projects grid
                if (entry.target.classList.contains('projects-grid')) {
                    entry.target.classList.add('show');
                }
                
                // For gallery grid
                if (entry.target.classList.contains('gallery-grid')) {
                    entry.target.classList.add('show');
                }
                
                // For video grid
                if (entry.target.classList.contains('video-grid')) {
                    entry.target.classList.add('show');
                }
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    const skillsCategories = document.querySelectorAll('.skills-category');
    skillsCategories.forEach(category => {
        observer.observe(category);
    });
    
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) observer.observe(projectsGrid);
    
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) observer.observe(galleryGrid);
    
    const videoGrid = document.querySelector('.video-grid');
    if (videoGrid) observer.observe(videoGrid);
});
// Add pulse animation on page load
document.addEventListener('DOMContentLoaded', function() {
  const resumeBtn = document.querySelector('.resume-button');
  
  if (resumeBtn) {
    // Add pulse animation for 6 seconds
    resumeBtn.classList.add('pulse');
    setTimeout(() => {
      resumeBtn.classList.remove('pulse');
    }, 6000);
    
    // Track downloads
    resumeBtn.addEventListener('click', function() {
      // You can add analytics here
      console.log('Resume downloaded');
    });
  }
});