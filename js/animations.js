// Typing Animation
const typingElement = document.querySelector('.typing');
const words = ['Anuj Lodh'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function type() {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    typingElement.textContent = currentChar;
    
    if (!isDeleting && charIndex < currentWord.length) {
        // Typing
        charIndex++;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
        // Deleting
        charIndex--;
        setTimeout(type, 50);
    } else {
        // Change word
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 1000);
    }
}

// Start typing animation
setTimeout(type, 1500);

// Parallax Effect
window.addEventListener('scroll', () => {
    const homeShape = document.querySelector('.home-shape');
    const scrollValue = window.scrollY;
    
    if (homeShape) {
        homeShape.style.transform = `translate(-30%, calc(-50% + ${scrollValue * 0.3}px))`;
    }
});

// Hover animations for project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Add custom properties for hover effect
document.documentElement.style.setProperty('--card-bg-color', 'rgba(255, 255, 255, 0.1)');
document.documentElement.style.setProperty('--card-border-color', 'rgba(255, 255, 255, 0.2)');
// Animated Statistics Counter
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    statNumbers.forEach(stat => {
        const target = +stat.getAttribute('data-count');
        const count = +stat.innerText;
        const increment = target / speed;
        
        if (count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(animateStats, 1);
        } else {
            stat.innerText = target;
        }
    });
}

// Initialize stats animation when section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.getElementById('stats');
if (statsSection) statsObserver.observe(statsSection);

// Timeline animation
const timelineItems = document.querySelectorAll('.timeline-item');

function animateTimeline() {
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateTimeline();
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

const timeline = document.querySelector('.timeline');
if (timeline) timelineObserver.observe(timeline);