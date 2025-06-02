document.addEventListener('DOMContentLoaded', () => {
    // --- HELPER FUNCTIONS ---
    function $(selector, parent = document) {
        return parent.querySelector(selector);
    }
    function $$(selector, parent = document) {
        return Array.from(parent.querySelectorAll(selector)); // Return as Array for easier use
    }

    // --- CONFIGURATION CONSTANTS ---
    const RIPPLE_ANIMATION_DURATION = 800; // ms, should match CSS animation
    const CARD_CLICK_ANIMATION_DURATION = 100; // ms for the click-down part
    const CARD_CLICK_RESET_DELAY = 200;    // ms, total before opening link and resetting style
    const STAGGER_DELAY_CARD_LOAD = 150;   // ms
    const STAT_ANIMATION_DURATION = 1500;  // ms
    const STAT_ANIMATION_START_DELAY = 300;// ms
    const RIPPLE_STYLE_ID = 'ripple-effect-dynamic-styles';
    const RIPPLE_CLASS_NAME = 'ripple-effect-dynamic';

    // --- SITE INITIALIZATION ---
    function init() {
        try {
            injectRippleStyles();
            setupCardLoadAnimation();
            setupCursorLight();
            setupCardMouseInteraction();
            setupStarRatings();
            setupStatNumberAnimations();
            setupFooterYear();
        } catch (error) {
            console.error("Error during site initialization:", error);
        }
    }

    // --- FEATURE SETUP FUNCTIONS ---

    function injectRippleStyles() {
        try {
            if (document.getElementById(RIPPLE_STYLE_ID)) return;

            const styleSheet = document.createElement("style");
            styleSheet.type = "text/css";
            styleSheet.id = RIPPLE_STYLE_ID;
            styleSheet.innerText = `
                .${RIPPLE_CLASS_NAME} {
                    position: absolute;
                    border-radius: 50%;
                    background: radial-gradient(circle, 
                        rgba(var(--primary-gold-rgb), 0.5) 0%, 
                        rgba(var(--primary-gold-rgb), 0.2) 40%, 
                        transparent 70%);
                    transform: scale(0);
                    animation: ${RIPPLE_CLASS_NAME}-anim ${RIPPLE_ANIMATION_DURATION / 1000}s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    pointer-events: none;
                    z-index: 5; 
                }
                @keyframes ${RIPPLE_CLASS_NAME}-anim {
                    to {
                        opacity: 0;
                        transform: scale(1.5);
                    }
                }`;
            document.head.appendChild(styleSheet);
        } catch (error) {
            console.error("Error injecting ripple styles:", error);
        }
    }

    function setupCardLoadAnimation() {
        try {
            const filmCards = $$('.film-card');
            if (!filmCards.length) return;

            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('animate-in');
                        }, index * STAGGER_DELAY_CARD_LOAD);
                        obs.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            filmCards.forEach(card => observer.observe(card));
        } catch (error) {
            console.error("Error in setupCardLoadAnimation:", error);
        }
    }
    
    function createAdvancedRipple(event, cardElement) {
        try {
            const rippleContainer = cardElement.querySelector('.card-shine-layer') || cardElement;
            const ripple = document.createElement('div');
            const rect = rippleContainer.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height) * 2;

            // Fallback for event coordinates if event is null or doesn't have clientX/Y
            const clickX = (event && typeof event.clientX === 'number') ? event.clientX : rect.left + rect.width / 2;
            const clickY = (event && typeof event.clientY === 'number') ? event.clientY : rect.top + rect.height / 2;

            const x = clickX - rect.left;
            const y = clickY - rect.top;

            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x - size / 2}px`;
            ripple.style.top = `${y - size / 2}px`;
            ripple.classList.add(RIPPLE_CLASS_NAME);
            rippleContainer.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, RIPPLE_ANIMATION_DURATION);
        } catch (error) {
            console.error("Error creating ripple effect:", error, "on element:", cardElement);
        }
    }

    // Globally accessible for HTML onclick attributes.
    // `this` will refer to the element, `window.event` for the event object.
    window.openFilm = function(url) {
        const clickedCard = this; // `this` is the DOM element in an inline onclick handler
        const currentEvent = window.event; // Get the global event object (legacy, but a fallback)

        try {
            if (!clickedCard || typeof clickedCard.style === 'undefined') {
                console.error("openFilm: `this` is not a valid DOM element. `this`:", clickedCard, "Opening URL directly.");
                window.open(url, '_blank');
                return;
            }

            // Store current transition to restore it later, or rely on CSS.
            const originalTransition = clickedCard.style.transition;
            clickedCard.style.transition = `transform ${CARD_CLICK_ANIMATION_DURATION / 1000}s ease-out`;
            clickedCard.style.transform = 'scale(0.97) rotateX(10deg)'; // Click-down effect

            createAdvancedRipple(currentEvent, clickedCard);

            setTimeout(() => {
                clickedCard.style.transform = ''; // Remove inline transform, CSS hover/base styles take over
                clickedCard.style.transition = originalTransition; // Restore original or remove to let CSS handle it
                // If originalTransition was empty, setting it to '' is fine.
                // Or simply: clickedCard.style.transition = '';

                window.open(url, '_blank');
            }, CARD_CLICK_RESET_DELAY);
        } catch (error) {
            console.error("Error in openFilm function:", error, "Opening URL directly.");
            window.open(url, '_blank'); // Fallback
        }
    };

    function setupCursorLight() {
        try {
            const cursorLightEl = $('#cursor-light');
            if (!cursorLightEl) return;

            let isMouseOverBody = false;

            document.addEventListener('mousemove', (e) => {
                if (isMouseOverBody) {
                    cursorLightEl.style.opacity = '1';
                    cursorLightEl.style.transform = `translate(${e.clientX - cursorLightEl.offsetWidth / 2}px, ${e.clientY - cursorLightEl.offsetHeight / 2}px)`;
                }
            });
            document.body.addEventListener('mouseenter', () => {
                isMouseOverBody = true;
                // Opacity transition will be handled by mousemove if needed, or initial CSS state
                // For smoother entry, ensure opacity is set if it was 0
                if (getComputedStyle(cursorLightEl).opacity === '0') {
                     cursorLightEl.style.opacity = '1';
                }
            });
            document.body.addEventListener('mouseleave', () => {
                isMouseOverBody = false;
                cursorLightEl.style.opacity = '0';
            });
        } catch (error) {
            console.error("Error in setupCursorLight:", error);
        }
    }

    function setupCardMouseInteraction() {
        try {
            const filmCards = $$('.film-card');
            if (!filmCards.length) return;

            filmCards.forEach(card => {
                const shineLayer = $('.card-shine-layer', card);
                const glowOrb = $('.card-glow-orb', card);

                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const cardWidth = rect.width;
                    const cardHeight = rect.height;

                    if (shineLayer) {
                        shineLayer.style.setProperty('--mouse-x', `${x}px`);
                        shineLayer.style.setProperty('--mouse-y', `${y}px`);
                    }
                    if (glowOrb) {
                        glowOrb.style.setProperty('--mouse-x-rel', `${(x / cardWidth) * 100}%`);
                        glowOrb.style.setProperty('--mouse-y-rel', `${(y / cardHeight) * 100}%`);
                    }

                    // Assumes --rotate-y is used in CSS for the hover effect
                    const rotateYFactor = 15; 
                    const rotateYValue = ((x - cardWidth / 2) / (cardWidth / 2)) * rotateYFactor * -1;
                    card.style.setProperty('--rotate-y', `${rotateYValue}deg`);
                });

                card.addEventListener('mouseleave', () => {
                    card.style.setProperty('--rotate-y', '0deg');
                    // CSS hover :not(:hover) or general card styles should reset shine/glow orb if needed
                });
            });
        } catch (error) {
            console.error("Error in setupCardMouseInteraction:", error);
        }
    }

    function setupStarRatings() {
        try {
            const starContainers = $$('.stars[data-rating]');
            if (!starContainers.length) return;
            
            starContainers.forEach(starContainer => {
                const ratingStr = starContainer.dataset.rating;
                if (typeof ratingStr === 'undefined') return;

                const rating = parseFloat(ratingStr);
                if (isNaN(rating)) {
                    console.warn('Invalid data-rating value on a .stars element:', ratingStr, starContainer);
                    return;
                }

                const fullStars = Math.floor(rating);
                // Adjust half-star logic based on desired rounding (e.g., .25-.74 is half, .75+ is full)
                const decimalPart = rating % 1;
                let halfStar = false;
                let additionalFullStar = false;

                if (decimalPart >= 0.25 && decimalPart < 0.75) {
                    halfStar = true;
                } else if (decimalPart >= 0.75) {
                    additionalFullStar = true;
                }
                
                let starsHtml = '';
                for (let i = 0; i < 5; i++) {
                    if (i < fullStars) {
                        starsHtml += '★';
                    } else if (i === fullStars && additionalFullStar) {
                        starsHtml += '★';
                    }
                    else if (i === fullStars && halfStar) {
                        starsHtml += '✭'; // Ensure this character is supported or use CSS for half stars
                    } else {
                        starsHtml += '☆';
                    }
                }
                starContainer.textContent = starsHtml;
            });
        } catch (error) {
            console.error("Error in setupStarRatings:", error);
        }
    }

    function setupStatNumberAnimations() {
        try {
            const statNumbers = $$('.stat-number[data-value]');
            if (!statNumbers.length) return;

            statNumbers.forEach(statNum => {
                const targetValueStr = statNum.dataset.value;
                if (typeof targetValueStr === 'undefined') return;

                if (isNaN(parseInt(targetValueStr))) { // Handle non-numeric like "∞" or "4K"
                    statNum.textContent = targetValueStr;
                    return;
                }
                const targetValue = parseInt(targetValueStr);

                let currentValue = 0;
                const frameDuration = 1000 / 60; // Target 60fps
                const totalFrames = Math.round(STAT_ANIMATION_DURATION / frameDuration);
                const increment = targetValue / totalFrames;
                let currentFrame = 0;

                function updateCount() {
                    currentValue += increment;
                    currentFrame++;
                    if (currentFrame < totalFrames) {
                        statNum.textContent = Math.ceil(currentValue);
                        requestAnimationFrame(updateCount);
                    } else {
                        statNum.textContent = targetValue; // Ensure exact value at the end
                    }
                }
                // Consider IntersectionObserver for stats if they might be off-screen initially
                setTimeout(() => requestAnimationFrame(updateCount), STAT_ANIMATION_START_DELAY);
            });
        } catch (error) {
            console.error("Error in setupStatNumberAnimations:", error);
        }
    }

    function setupFooterYear() {
        try {
            const yearSpan = $('#current-year');
            if (yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }
        } catch (error) {
            console.error("Error in setupFooterYear:", error);
        }
    }

    // --- EXECUTE INITIALIZATION ---
    init();
});
