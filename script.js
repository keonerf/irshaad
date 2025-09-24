// Shayari data with placeholder spaces for photographs
const shayariData = [
    {
        text: "दिल में बसी हैं तस्वीरें, आँखों में शायरी,\nहर ख्वाब में तुम्हारी एक प्यारी सी मायरी।",
        translation: "Pictures reside in the heart, poetry in the eyes,\nIn every dream, there's a sweet memory of you.",
        author: "- Original"
    },
    {
        text: "वक्त की तस्वीर में ठहरे हुए लम्हे,\nशब्दों की शायरी में खिले हुए सपने।",
        translation: "Moments frozen in time's photograph,\nDreams bloomed in the poetry of words.",
        author: "- Original"
    },
    {
        text: "कैमरे की आँख और कलम का जादू,\nदोनों मिलकर बयान करते हैं दिल का राज़।",
        translation: "The camera's eye and the pen's magic,\nTogether they reveal the heart's secret.",
        author: "- Original"
    },
    {
        text: "हर तस्वीर एक कहानी, हर शेर एक जज़्बात,\nमिलकर बनाते हैं ज़िंदगी की सौगात।",
        translation: "Every picture a story, every couplet an emotion,\nTogether they create life's precious gift.",
        author: "- Original"
    },
    {
        text: "रोशनी और साये का खेल देखो,\nशायरी में छुपे हुए गम का मेल देखो।",
        translation: "See the play of light and shadows,\nSee the blend of hidden sorrows in poetry.",
        author: "- Original"
    },
    {
        text: "लेंस से जो नज़ारे दिखे,\nकलम से वो अल्फ़ाज़ लिखे।",
        translation: "The scenes that appeared through the lens,\nThose words were written by the pen.",
        author: "- Original"
    },
    {
        text: "ख़ामोशी की आवाज़ में छुपी,\nतस्वीरों की शायरी सुनो।",
        translation: "Hidden in the voice of silence,\nListen to the poetry of pictures.",
        author: "- Original"
    },
    {
        text: "सुर्ख़ सवेरे से काली रात तक,\nहर रंग में छुपी है एक बात।",
        translation: "From crimson dawn to black night,\nEvery color hides a story.",
        author: "- Original"
    }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    setupScrollAnimations();
    setupDynamicEffects();
});

// Main initialization function
function initializeWebsite() {
    loadContent();
    setupEventListeners();
    animateHero();
}

// Load shayari content dynamically
function loadContent() {
    const contentGrid = document.getElementById('contentGrid');
    
    shayariData.forEach((shayari, index) => {
        const card = createContentCard(shayari, index);
        contentGrid.appendChild(card);
    });
}

// Create individual content cards
function createContentCard(shayari, index) {
    const card = document.createElement('div');
    card.className = 'content-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="photo-placeholder">
            <span>Photograph ${index + 1}</span>
        </div>
        <div class="shayari-content">
            <div class="shayari-text">${shayari.text}</div>
            <div class="shayari-translation">${shayari.translation}</div>
            <div class="shayari-author">${shayari.author}</div>
        </div>
    `;
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Smooth scrolling for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Header background opacity on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (scrolled > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Animate hero section
function animateHero() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    // Animate title letters
    if (heroTitle) {
        const text = heroTitle.innerText;
        heroTitle.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.innerText = char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.transition = 'all 0.6s ease-out';
            span.style.transitionDelay = `${index * 0.03}s`;
            heroTitle.appendChild(span);
            
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, 100);
        });
    }
    
    // Animate subtitle
    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.style.opacity = '0';
            heroSubtitle.style.transform = 'translateY(20px)';
            heroSubtitle.style.transition = 'all 0.8s ease-out';
            
            setTimeout(() => {
                heroSubtitle.style.opacity = '1';
                heroSubtitle.style.transform = 'translateY(0)';
            }, 100);
        }, 800);
    }
}

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe content cards
    document.querySelectorAll('.content-card').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
    
    // Observe about section
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        aboutSection.classList.add('fade-in');
        observer.observe(aboutSection);
    }
}

// Setup dynamic effects
function setupDynamicEffects() {
    // Add hover effects to cards
    document.querySelectorAll('.content-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add typing effect to shayari text
    document.querySelectorAll('.shayari-text').forEach((element, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        typeWriterEffect(element);
                    }, index * 200);
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(element);
    });
}

// Typewriter effect for shayari text
function typeWriterEffect(element) {
    const text = element.innerText;
    element.innerText = '';
    element.style.borderRight = '2px solid #333';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 500);
        }
    }, 50);
}

// Add parallax effect to photo placeholders
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.photo-placeholder');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', addParallaxEffect);

// Add loading animation
function showLoading() {
    const contentGrid = document.getElementById('contentGrid');
    contentGrid.innerHTML = '<div class="loading"></div>';
}

// Utility function to add new shayari (for future use)
function addShayari(shayariObj) {
    shayariData.push(shayariObj);
    const contentGrid = document.getElementById('contentGrid');
    const newCard = createContentCard(shayariObj, shayariData.length - 1);
    contentGrid.appendChild(newCard);
}

// Export functions for potential future use
window.IrshaadApp = {
    addShayari,
    shayariData
};