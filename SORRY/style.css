/* style.css - Complete Glassmorphism + Animations */
:root {
  --pink-1: #ff9aa2;
  --pink-2: #ffb3ba;
  --gold-1: #f7d794;
  --gold-2: #fce38a;
  --glow-gold: rgba(252, 227, 138, 0.8);
  --glass-bg: rgba(255, 255, 255, 0.15);
  --glass-border: rgba(255, 255, 255, 0.25);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  overflow: hidden;
  height: 100vh;
  background: linear-gradient(-45deg, var(--pink-1), var(--gold-1), var(--pink-2), var(--gold-2));
  background-size: 400% 400%;
  animation: gradientShift 20s ease infinite;
  position: relative;
  cursor: none;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  25% { background-position: 100% 0%; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0% 100%; }
}

/* Dynamic Element Containers */
#hearts-container, #bubbles-container, #ghosts-container, #sparkles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

/* FLOATING HEARTS */
.heart {
  position: absolute;
  width: 24px;
  height: 22px;
  opacity: 0;
  z-index: 1;
}

.heart::before,
.heart::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 20px;
  background: var(--pink-1);
  border-radius: 12px 12px 0 0;
  transform-origin: bottom center;
}

.heart::before {
  transform: rotate(-45deg);
  left: 50%;
  margin-left: -6px;
}

.heart::after {
  transform: rotate(45deg);
  left: 50%;
  margin-left: -6px;
}

@keyframes heartFloat {
  0% {
    opacity: 0;
    transform: translateY(100vh) scale(0) rotate(0deg);
  }
  10% {
    opacity: 0.8;
    transform: translateY(90vh) scale(1) rotate(0deg);
  }
  90% {
    opacity: 0.8;
    transform: translateY(-10vh) scale(1.2) rotate(180deg);
  }
  100% {
    opacity: 0;
    transform: translateY(-20vh) scale(1.5) rotate(360deg);
  }
}

/* SORRY BUBBLES */
.bubble {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
  opacity: 0;
  z-index: 2;
}

@keyframes bubbleDrift {
  0% {
    opacity: 0;
    transform: translateY(100vh) translateX(0) scale(0.5) rotate(0deg);
  }
  15% {
    opacity: 0.9;
  }
  85% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
    transform: translateY(-20vh) translateX(30px) scale(1) rotate(20deg);
  }
}

/* GHOST TEXT */
.ghost-text {
  position: absolute;
  font-size: 16px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.08);
  font-weight: 300;
  pointer-events: none;
  opacity: 0;
  z-index: 1;
}

@keyframes ghostFade {
  0% { opacity: 0; transform: scale(0.8) translateY(10px); }
  50% { opacity: 0.15; transform: scale(1) translateY(0); }
  100% { opacity: 0; transform: scale(1.2) translateY(-10px); }
}

/* CURSOR SPARKLES */
.sparkle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--glow-gold);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--glow-gold);
  pointer-events: none;
  z-index: 20;
  opacity: 0;
}

@keyframes sparkleFade {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0) translateY(-15px);
  }
}

/* GLASS CARD */
.glass-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.7);
  width: min(90vw, 500px);
  padding: 3rem 2.5rem;
  background: var(--glass-bg);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid var(--glass-border);
  border-radius: 28px;
  box-shadow: 
    0 25px 50px rgba(0,0,0,0.15),
    inset 0 1px 0 rgba(255,255,255,0.4);
  text-align: center;
  z-index: 100;
  opacity: 0;
  animation: cardEntrance 1.8s cubic-bezier(0.23, 1, 0.32, 1) 0.5s forwards;
}

@keyframes cardEntrance {
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

.progress-container {
  width: 100%;
  margin-bottom: 2rem;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(255,255,255,0.15);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--pink-1), var(--gold-1));
  width: 0%;
  border-radius: 2px;
  box-shadow: 0 0 12px var(--glow-gold);
  transition: width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.text-container {
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

#typing-text {
  font-size: clamp(22px, 4vw, 28px);
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 300;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.cursor {
  display: inline-block;
  width: 3px;
  height: 32px;
  background: linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0));
  margin-left: 4px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.final-message {
  font-size: clamp(26px, 5vw, 36px);
  color: white;
  font-weight: 400;
  text-shadow: 
    0 0 20px var(--glow-gold),
    0 2px 10px rgba(0,0,0,0.4);
  opacity: 0;
  transform: scale(0.9);
  transition: all 1.2s cubic-bezier(0.23, 1, 0.32, 1);
}

.final-message.show {
  opacity: 1;
  transform: scale(1);
}

.hidden {
  display: none !important;
}

/* EMOTIONAL GLOW MODE */
.emotional-mode body {
  animation-duration: 8s !important;
}

.emotional-mode .glass-card {
  box-shadow: 
    0 35px 70px rgba(0,0,0,0.25),
    0 0 60px var(--glow-gold),
    inset 0 1px 0 rgba(255,255,255,0.5) !important;
  animation: emotionalPulse 2s ease-in-out infinite;
}

@keyframes emotionalPulse {
  0%, 100% { 
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 35px 70px rgba(0,0,0,0.25), 0 0 60px var(--glow-gold);
  }
  50% { 
    transform: translate(-50%, -50%) scale(1.03);
    box-shadow: 0 45px 90px rgba(0,0,0,0.3), 0 0 100px var(--glow-gold);
  }
}

/* MOBILE */
@media (max-width: 640px) {
  .glass-card {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }
}
