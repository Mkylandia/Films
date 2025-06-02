:root {
    --primary-gold: #ffd700;
    --primary-gold-dark: #ffb347;
    --bg-primary: #0a0a0a;
    --bg-secondary: #1a1a2e;
    --bg-accent: #16213e;
    --text-primary: #ffffff;
    --text-secondary: #b8b8b8;
    --text-muted: #888888;
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
    --shadow-glow: 0 0 50px rgba(255, 215, 0, 0.3);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: radial-gradient(ellipse at top, var(--bg-secondary) 0%, var(--bg-primary) 50%, #000000 100%);
    min-height: 100vh;
    color: var(--text-primary);
    overflow-x: hidden;
    position: relative;
    line-height: 1.6;
}

/* Enhanced Background Animation */
.background-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: -2;
    overflow: hidden;
}

.floating-element {
    position: absolute;
    border-radius: 50%;
    filter: blur(1px);
}

.floating-element:nth-child(1) {
    width: 6px;
    height: 6px;
    background: radial-gradient(circle, var(--primary-gold) 0%, transparent 70%);
    top: 15%;
    left: 10%;
    animation: float1 20s infinite ease-in-out;
}

.floating-element:nth-child(2) {
    width: 4px;
    height: 4px;
    background: radial-gradient(circle, #ff6b6b 0%, transparent 70%);
    top: 60%;
    left: 80%;
    animation: float2 25s infinite ease-in-out;
}

.floating-element:nth-child(3) {
    width: 8px;
    height: 8px;
    background: radial-gradient(circle, #4ecdc4 0%, transparent 70%);
    top: 30%;
    left: 70%;
    animation: float3 30s infinite ease-in-out;
}

.floating-element:nth-child(4) {
    width: 5px;
    height: 5px;
    background: radial-gradient(circle, #45b7d1 0%, transparent 70%);
    top: 80%;
    left: 20%;
    animation: float4 22s infinite ease-in-out;
}

.floating-element:nth-child(5) {
    width: 7px;
    height: 7px;
    background: radial-gradient(circle, #9b59b6 0%, transparent 70%);
    top: 50%;
    left: 50%;
    animation: float5 18s infinite ease-in-out;
}

/* Advanced floating animations */
@keyframes float1 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.4; }
    25% { transform: translate(100px, -80px) rotate(90deg) scale(1.2); opacity: 0.8; }
    50% { transform: translate(-50px, -120px) rotate(180deg) scale(0.8); opacity: 1; }
    75% { transform: translate(-120px, -40px) rotate(270deg) scale(1.1); opacity: 0.6; }
}

@keyframes float2 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.3; }
    33% { transform: translate(-80px, 100px) rotate(120deg) scale(1.3); opacity: 0.7; }
    66% { transform: translate(60px, -60px) rotate(240deg) scale(0.9); opacity: 0.9; }
}

@keyframes float3 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.5; }
    50% { transform: translate(-200px, 150px) rotate(180deg) scale(1.4); opacity: 0.8; }
}

@keyframes float4 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.4; }
    40% { transform: translate(150px, -100px) rotate(144deg) scale(1.1); opacity: 0.9; }
    80% { transform: translate(-100px, -150px) rotate(288deg) scale(0.7); opacity: 0.6; }
}

@keyframes float5 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.6; }
    20% { transform: translate(80px, 120px) rotate(72deg) scale(1.2); opacity: 0.8; }
    60% { transform: translate(-120px, -80px) rotate(216deg) scale(0.9); opacity: 1; }
}

/* Glassmorphism grid background */
.grid-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
    z-index: -1;
    animation: gridMove 60s linear infinite;
}

@keyframes gridMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
}

.container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    z-index: 1;
}

/* Enhanced Header */
.header {
    text-align: center;
    margin-bottom: 80px;
    padding: 80px 0;
    position: relative;
}

.header::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

.logo-container {
    position: relative;
    display: inline-block;
    margin-bottom: 30px;
}

.logo {
    font-size: clamp(3rem, 8vw, 5.5rem);
    font-weight: 900;
    letter-spacing: clamp(4px, 1vw, 12px);
    background: linear-gradient(135deg, #ffd700 0%, #ffed4e 25%, #ffd700 50%, #ffb347 75%, #ffd700 100%);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 4s ease-in-out infinite;
    text-shadow: 0 0 50px rgba(255, 215, 0, 0.6);
    position: relative;
    filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.4));
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.logo-underline {
    height: 6px;
    background: linear-gradient(90deg, transparent 0%, var(--primary-gold) 20%, var(--primary-gold) 80%, transparent 100%);
    margin-top: 15px;
    border-radius: 3px;
    position: relative;
    overflow: hidden;
}

.logo-underline::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
    animation: shine 3s ease-in-out infinite;
}

@keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
}

.tagline {
    font-size: clamp(1.1rem, 3vw, 1.6rem);
    opacity: 0.9;
    color: var(--text-secondary);
    margin-bottom: 40px;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
}

.header-stats {
    display: flex;
    justify-content: center;
    gap: clamp(30px, 8vw, 70px);
    margin-top: 40px;
}

.stat-item {
    text-align: center;
    padding: 20px;
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid var(--glass-border);
    transition: all 0.3s ease;
}

.stat-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
}

.stat-number {
    display: block;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    color: var(--primary-gold);
    line-height: 1;
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
}

.stat-label {
    display: block;
    font-size: 0.9rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 8px;
}

/* Enhanced Film Grid */
.film-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 50px;
    margin-bottom: 100px;
}

.film-card {
    background: var(--glass-bg);
    backdrop-filter: blur(30px);
    border-radius: 30px;
    text-align: left;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 1px solid var(--glass-border);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 580px;
    display: flex;
    flex-direction: column;
    transform-style: preserve-3d;
}

.film-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 1;
}

.film-card:hover::before {
    left: 100%;
}

.film-card:hover {
    transform: translateY(-20px) rotateX(5deg) rotateY(5deg) scale(1.03);
    box-shadow: 
        0 40px 80px rgba(0,0,0,0.5),
        0 0 100px rgba(255, 215, 0, 0.2);
    border-color: rgba(255, 215, 0, 0.8);
}

/* Advanced glow effect */
.card-glow {
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4, #45b7d1, #9b59b6, #ffd700);
    border-radius: 33px;
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
    animation: rotateGlow 6s linear infinite;
    filter: blur(2px);
}

.film-card:hover .card-glow {
    opacity: 0.8;
}

@keyframes rotateGlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Enhanced quality badges */
.quality-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 0, 0, 0.9);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 3;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    animation: badgePulse 2s ease-in-out infinite;
}

.quality-badge.recommended {
    background: rgba(34, 197, 94, 0.9);
    animation: recommendedGlow 3s ease-in-out infinite;
}

@keyframes badgePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

@keyframes recommendedGlow {
    0%, 100% { box-shadow: 0 0 10px rgba(34, 197, 94, 0.5); }
    50% { box-shadow: 0 0 25px rgba(34, 197, 94, 0.8); }
}

/* Enhanced film posters */
.film-poster {
    height: 320px;
    border-radius: 25px 25px 0 0;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6rem;
}

.poster-bg {
    position: absolute;
    font-size: 6rem;
    z-index: 1;
    text-shadow: 0 0 30px rgba(0,0,0,0.5);
    filter: drop-shadow(0 0 20px rgba(255,255,255,0.1));
}

.poster-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 2;
}

.film-card:hover .poster-overlay {
    opacity: 1;
    backdrop-filter: blur(5px);
}

.play-icon {
    color: white;
    font-size: 5rem;
    text-shadow: 0 0 40px rgba(255, 255, 255, 0.8);
    animation: playIconPulse 2s ease-in-out infinite;
}

@keyframes playIconPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

/* Enhanced poster backgrounds with gradients and effects */
.shark { 
    background: linear-gradient(135deg, #001e3c 0%, #003366 50%, #004080 100%);
    position: relative;
}
.shark::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%, rgba(0, 100, 200, 0.3) 0%, transparent 50%);
}

.ocean { 
    background: linear-gradient(135deg, #0066cc 0%, #003d7a 50%, #001a33 100%);
    position: relative;
}
.ocean::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 30%, rgba(0, 150, 255, 0.4) 0%, transparent 60%);
}

.matrix { 
    background: linear-gradient(135deg, #001100 0%, #003300 50%, #004d00 100%);
    position: relative;
}
.matrix::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(0, 255, 0, 0.2) 0%, transparent 70%);
}

.thunder { 
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
    position: relative;
}
.thunder::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 40% 60%, rgba(255, 255, 0, 0.2) 0%, transparent 50%);
}

.apocalypse { 
    background: linear-gradient(135deg, #8B0000 0%, #654321 50%, #2F1B14 100%);
    position: relative;
}
.apocalypse::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 60% 40%, rgba(255, 100, 0, 0.3) 0%, transparent 60%);
}

.adrenaline { 
    background: linear-gradient(135deg, #FF4500 0%, #FF6347 50%, #DC143C 100%);
    position: relative;
}
.adrenaline::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(255, 0, 0, 0.4) 0%, transparent 50%);
}

.beekeeper { 
    background: linear-gradient(135deg, #ffd700 0%, #ffb347 50%, #000000 100%);
    position: relative;
}
.beekeeper::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 60% 30%, rgba(0, 0, 0, 0.4) 0%, transparent 60%);
}

.high-voltage { 
    background: linear-gradient(135deg, #FF0000 0%, #FF4500 50%, #8B0000 100%);
    position: relative;
}
.high-voltage::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 50%, rgba(255, 100, 0, 0.4) 0%, transparent 70%);
}

/* Enhanced film info */
.film-info {
    padding: 30px;
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
}

.film-info h3 {
    font-size: 1.7rem;
    color: var(--primary-gold);
    margin-bottom: 12px;
    font-weight: 700;
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
}

.genre {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 500;
}

.description {
    color: #e0e0e0;
    line-height: 1.7;
    margin-bottom: 20px;
    flex: 1;
    font-size: 0.95rem;
}

.rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
}

.stars {
    color: var(--primary-gold);
    font-size: 1.2rem;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.score {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 215, 0, 0.1));
    color: var(--primary-gold);
    padding: 6px 12px;
    border-radius: 12px;
    font-weight: bold;
    font-size: 0.95rem;
    border: 1px solid rgba(255, 215, 0, 0.3);
    backdrop-filter: blur(10px);
}

/* Enhanced watch button */
.watch-btn {
    background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
    border: none;
    padding: 15px 30px;
    border-radius: 25px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: auto;
    position: relative;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(255, 215, 0, 0.3);
}

.watch-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: left 0.6s ease;
}

.watch-btn:hover::before {
    left: 100%;
}

.watch-btn:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 15px 40px rgba(255, 215, 0, 0.5);
    background: linear-gradient(135deg, #ffed4e 0%, #ffd700 50%, #ffed4e 100%);
}

.btn-icon {
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    font-size: 1.2rem;
}

.watch-btn:hover .btn-icon {
    transform: translateX(8px);
}

/* Enhanced footer */
.footer {
    text-align: center;
    padding: 60px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    margin-top: 40px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
}

.footer-content p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    letter-spacing: 1px;
}

.social-links {
    display: flex;
    gap: 20px;
}

.social-icon {
    font-size: 1.8rem;
    opacity: 0.7;
    transition: all 0.3s ease;
    cursor: pointer;
    filter: grayscale(100%);
}

.social-icon:hover {
    opacity: 1;
    transform: scale(1.2) rotate(10deg);
    filter: grayscale(0%);
}

/* Responsive Design */
@media (max-width: 1400px) {
    .film-grid {
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 40px;
    }
}

@media (max-width: 768px) {
    .header-stats {
        flex-direction: row;
        gap: 20px;
    }
    
    .stat-item {
        padding: 15px;
    }
    
    .film-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    
    .film-card {
        height: 520px;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 25px;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 15px;
    }
    
    .film-card {
        height: 480px;
    }

    .film-info {
        padding: 20px;
    }

    .watch-btn {
        padding: 12px 25px;
        font-size: 0.9rem;
    }
}

/* Loading animation */
.film-card {
    opacity: 0;
    transform: translateY(50px);
}

.film-card.animate-in {
    animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes slideInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
