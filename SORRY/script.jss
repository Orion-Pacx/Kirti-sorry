// script.js
class ApologyExperience {
  constructor() {
    this.messages = [
      "Hey...",
      "I know I've been distant lately.",
      "And that hurt you.",
      "I'm truly sorry.",
      "You mean everything to me.",
      "I'll do better.",
      "Forgive me?"
    ];
    this.currentMsgIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.typingSpeed = 100;
    this.deleteSpeed = 60;
    
    this.init();
  }
  
  init() {
    this.createParticles();
    this.startTyping();
    this.addMouseTrail();
    this.glassCard = document.getElementById('glassCard');
    this.progressFill = document.getElementById('progressFill');
    this.typingText = document.getElementById('typingText');
    this.cursor = document.getElementById('cursor');
    this.finalText = document.getElementById('finalText');
    
    // Emotional glow on certain lines
    this.emotionalLines = [1, 3, 5];
  }
  
  createParticles() {
    // Hearts
    setInterval(() => {
      this.createHeart();
    }, 800);
    
    // Bubbles
    setInterval(() => {
      this.createBubble();
    }, 1500);
    
    // Ghosts
    setInterval(() => {
      this.createGhost();
    }, 2000);
  }
  
  createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (5 + Math.random() * 5) + 's';
    heart.style.opacity = 0.4 + Math.random() * 0.4;
    document.getElementById('hearts').appendChild(heart);
    
    setTimeout(() => heart.remove(), 10000);
  }
  
  createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = 'sorry';
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.fontSize = (10 + Math.random() * 8) + 'px';
    bubble.style.animationDuration = (10 + Math.random() * 6) + 's';
    bubble.style.animationDelay = Math.random() * 2 + 's';
    document.getElementById('bubbles').appendChild(bubble);
    
    setTimeout(() => bubble.remove(), 18000);
  }
  
  createGhost() {
    const words = ['sorry', 'my bad', "didn't mean to", 'you matter'];
    const ghost = document.createElement('div');
    ghost.className = 'ghost';
    ghost.textContent = words[Math.floor(Math.random() * words.length)];
    ghost.style.left = Math.random() * 100 + '%';
    ghost.style.top = Math.random() * 100 + '%';
    ghost.style.animationDelay = Math.random() * 2 + 's';
    document.getElementById('ghosts').appendChild(ghost);
    
    setTimeout(() => ghost.remove(), 5000);
  }
  
  async startTyping() {
    while (this.currentMsgIndex < this.messages.length) {
      const msg = this.messages[this.currentMsgIndex];
      
      if (!this.isDeleting) {
        // Typing
        while (this.charIndex < msg.length) {
          this.typingText.textContent = msg.slice(0, this.charIndex);
          this.charIndex++;
          await this.sleep(this.typingSpeed);
        }
        this.charIndex = msg.length;
        this.typingText.textContent = msg;
        
        // Check if emotional line for glow
        if (this.emotionalLines.includes(this.currentMsgIndex)) {
          this.glassCard.classList.add('glow-pulse');
          document.body.style.filter = 'brightness(1.1)';
          await this.sleep(1500);
          this.glassCard.classList.remove('glow-pulse');
          document.body.style.filter = '';
        }
        
        await this.sleep(2000);
        this.isDeleting = true;
      } else {
        // Deleting
        while (this.charIndex > 0) {
          this.typingText.textContent = msg.slice(0, this.charIndex - 1);
          this.charIndex--;
          await this.sleep(this.deleteSpeed);
        }
        this.charIndex = 0;
        this.isDeleting = false;
        this.currentMsgIndex++;
        
        // Update progress
        const progress = (this.currentMsgIndex / this.messages.length) * 100;
        this.progressFill.style.width = progress + '%';
      }
    }
    
    // Final scene
    await this.finalScene();
  }
  
  async finalScene() {
    this.cursor.style.display = 'none';
    this.typingText.style.opacity = '0';
    
    // Increase hearts and bubbles
    for (let i = 0; i < 20; i++) {
      setTimeout(() => this.createHeart(), i * 100);
      setTimeout(() => this.createBubble(), i * 150);
    }
    
    // Glow up
    document.body.style.animationDuration = '8s';
    this.glassCard.style.boxShadow = '0 35px 60px rgba(0,0,0,0.3), 0 0 100px var(--glow)';
    
    setTimeout(() => {
      this.finalText.classList.remove('hidden');
      this.finalText.classList.add('show');
    }, 500);
  }
  
  addMouseTrail() {
    document.addEventListener('mousemove', (e) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = e.clientX + 'px';
      sparkle.style.top = e.clientY + 'px';
      document.body.appendChild(sparkle);
      
      setTimeout(() => sparkle.remove(), 1000);
    });
  }
  
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Start experience
new ApologyExperience();
