document.addEventListener('DOMContentLoaded', () => {
    // --- CARD LOADING ANIMATION ---
    const filmCards = document.querySelectorAll('.film-card');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 150); // Staggered animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    filmCards.forEach(card => {
        observer.observe(card);
    });

    // --- ENHANCED RIPPLE & CLICK ---
    window.openFilm = function(url) {
        const clickedCard = event.currentTarget;
        
        clickedCard.style.transform = `${getComputedStyle(clickedCard).transform} scale(0.97) rotateX(12deg)`;
        clickedCard.style.transition = 'transform 0.1s ease-out';
        
        createAdvancedRipple(event, clickedCard);
        
        setTimeout(() => {
            // Reset transform to allow hover effects to work again if user cancels navigation
            clickedCard.style.transform = getComputedStyle(clickedCard).transform.replace(/scale\([0-9.]+\)/, 'scale(1.04)').replace(/rotateX\([0-9.]+deg\)/, 'rotateX(8deg)');
            // The previous hover state might need to be reapplied or simply rely on the existing hover CSS
            
            window.open(url, '_blank');
        }, 200); // Slightly longer to see ripple
    }

    function createAdvancedRipple(event, card) {
        const rippleContainer = card.querySelector('.card-shine-layer') || card; // Prefer shine layer
        const ripple = document.createElement('div');
        const rect = rippleContainer.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2; // Larger ripple
        
        // Calculate click position relative to the ripple container
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x - size / 2}px`;
        ripple.style.top = `${y - size / 2}px`;
        ripple.classList.add('ripple-effect');
        
        rippleContainer.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 1000); // Ripple duration
    }
    
    // Add CSS for ripple-effect dynamically or ensure it's in your CSS file
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(circle, 
                rgba(var(--primary-gold-rgb), 0.5) 0%, 
                rgba(var(--primary-gold-rgb), 0.2) 40%, 
                transparent 70%);
            transform: scale(0);
            animation: rippleUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            pointer-events: none;
            z-index: 5; /* Ensure it's on top within its container */
        }
        @keyframes rippleUp {
            to {
                opacity: 0;
                transform: scale(1.5);
            }
        }
    `;
    document.head.appendChild(styleSheet);


    // --- CURSOR LIGHT EFFECT ---
    const cursorLight = document.getElementById('cursor-light');
    if (cursorLight) {
        document.addEventListener('mousemove', (e) => {
            cursorLight.style.transform = `translate(${e.clientX - cursorLight.offsetWidth / 2}px, ${e.clientY - cursorLight.offsetHeight / 2}px)`;
        });
        document.body.addEventListener('mouseleave', () => {
            cursorLight.style.opacity = '0';
        });
        document.body.addEventListener('mouseenter', () => {
             if (getComputedStyle(cursorLight).opacity == '0') { // Only animate in if it was hidden
                cursorLight.style.opacity = '1';
             }
        });
    }

    // --- CARD MOUSE INTERACTION (SHINE & GLOW ORB & 3D TILT) ---
    filmCards.forEach(card => {
        const shineLayer = card.querySelector('.card-shine-layer');
        const glowOrb = card.querySelector('.card-glow-orb');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cardWidth = rect.width;
            const cardHeight = rect.height;

            // For shine layer's ::before element (using CSS variables)
            if (shineLayer) {
                shineLayer.style.setProperty('--mouse-x', `${x}px`);
                shineLayer.style.setProperty('--mouse-y', `${y}px`);
            }
            
            // For glow orb (using CSS variables)
            if (glowOrb) {
                glowOrb.style.setProperty('--mouse-x-rel', `${(x / cardWidth) * 100}%`);
                glowOrb.style.setProperty('--mouse-y-rel', `${(y / cardHeight) * 100}%`);
            }

            // Dynamic Y-axis rotation based on mouse position
            const rotateYFactor = 15; // Max rotation in degrees
            const rotateY = ((x - cardWidth / 2) / (cardWidth / 2)) * rotateYFactor * -1; // Invert for natural feel
            card.style.setProperty('--rotate-y', `${rotateY}deg`);
        });

        card.addEventListener('mouseleave', () => {
            // Reset dynamic Y rotation
            card.style.setProperty('--rotate-y', `0deg`);
        });
    });
    
    // --- STAR RATING FILL ---
    document.querySelectorAll('.stars').forEach(starContainer => {
        const rating = parseFloat(starContainer.dataset.rating);
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        let starsHtml = '';
        for(let i = 0; i < 5; i++) {
            if (i < fullStars) {
                starsHtml += '★';
            } else if (i === fullStars && halfStar) {
                starsHtml += '✭'; // Or another half-star symbol if you have one
            } else {
                starsHtml += '☆';
            }
        }
        starContainer.textContent = starsHtml;
    });

    // --- COUNT-UP ANIMATION FOR STATS ---
    const statNumbers = document.querySelectorAll('.stat-number[data-value]');
    statNumbers.forEach(statNum => {
        const targetValue = parseInt(statNum.dataset.value);
        if (isNaN(targetValue)) { // For non-numeric stats like ∞
            statNum.textContent = statNum.dataset.value || statNum.textContent;
            return;
        }
        let currentValue = 0;
        const duration = 1500; // ms
        const increment = targetValue / (duration / 20); // Update roughly every 20ms

        function updateCount() {
            currentValue += increment;
            if (currentValue < targetValue) {
                statNum.textContent = Math.ceil(currentValue);
                requestAnimationFrame(updateCount);
            } else {
                statNum.textContent = targetValue;
            }
        }
        // Trigger when stats become visible (simple check for now)
        setTimeout(updateCount, 300); // Delay to ensure page is settled
    });

    // --- CURRENT YEAR FOR FOOTER ---
    const yearSpan = document.getElementById('current-year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

});
