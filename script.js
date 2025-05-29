// JAVASCRIPT
function openFilm(url) {
    // Add click animation
    const clickedCard = event.currentTarget;
    clickedCard.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
        clickedCard.style.transform = '';
        window.open(url, '_blank');
    }, 100);
}

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initially hide cards
    const filmCards = document.querySelectorAll('.film-card');
    filmCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Add parallax effect to floating elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        document.querySelectorAll('.floating-element').forEach((element, index) => {
            const speed = 0.1 + (index * 0.05);
            element.style.transform = `translateY(${parallax * speed}px)`;
        });
    });

    // Add mouse tracking effect for cards
    filmCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });

    // Add dynamic title effect
    const title = document.querySelector('.logo');
    let titleText = title.textContent;
    let isAnimating = false;

    title.addEventListener('mouseenter', function() {
        if (!isAnimating) {
            isAnimating = true;
            let scrambleCount = 0;
            const scrambleInterval = setInterval(() => {
                if (scrambleCount < 10) {
                    title.textContent = titleText.split('').map(char => 
                        Math.random() > 0.7 ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) : char
                    ).join('');
                    scrambleCount++;
                } else {
                    title.textContent = titleText;
                    clearInterval(scrambleInterval);
                    isAnimating = false;
                }
            }, 50);
        }
    });
});

// Add click sound effect (visual feedback)
document.addEventListener('click', function(e) {
    if (e.target.closest('.film-card') || e.target.closest('.watch-btn')) {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 215, 0, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = (e.clientX - 25) + 'px';
        ripple.style.top = (e.clientY - 25) + 'px';
        ripple.style.width = '50px';
        ripple.style.height = '50px';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '9999';
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            document.body.removeChild(ripple);
        }, 600);
    }
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
