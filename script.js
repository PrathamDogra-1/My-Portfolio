// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== ELEMENTS =====
    const loadingScreen = document.getElementById('loadingScreen');
    const progressBar = document.getElementById('progressBar');
    const loadingPercent = document.getElementById('loadingPercent');
    const loadingSubtitle = document.getElementById('loadingSubtitle');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const enterBtn = document.getElementById('enterBtn');
    const mainContent = document.getElementById('mainContent');
    const typingText = document.getElementById('typingText');
    
    // ===== AI/ML LOADING ANIMATION =====
    function createAIMLLoading() {
        const container = document.querySelector('.tech-loading');
        if (!container) return;
        
        // AI/ML Symbols and Icons
        const aiSymbols = [
            '🤖', '🧠', '⚡', '🔬', '💻', '📊', '🔍', '🎯', '🚀', '✨',
            'AI', 'ML', 'NN', 'DL', 'CV', 'NLP', 'RL', 'GPU', 'CPU', 'API',
            '{ }', '</>', '=>', '->', '()', '[]', '{}', '<>', '++', '--',
            'π', 'Σ', '∫', '∞', '∇', 'θ', 'λ', 'μ', 'σ', 'ρ', 'φ', 'ψ',
            '⟳', '⇄', '⇶', '⬡', '⬢', '⏣', '⌬', '⏚', '⌀', '⌘', '⎈', '⚙️',
            '📈', '📉', '🔢', '🔣', '🔤', '🎮', '🖥️', '📱', '💾', '💿'
        ];
        
        // Create floating tech icons
        for (let i = 0; i < 40; i++) {
            const icon = document.createElement('div');
            icon.className = 'tech-icon';
            
            // Random symbol from the list
            const symbol = aiSymbols[Math.floor(Math.random() * aiSymbols.length)];
            icon.textContent = symbol;
            
            // Random position
            icon.style.left = Math.random() * 100 + '%';
            
            // Random animation delay and duration
            icon.style.animationDelay = Math.random() * 5 + 's';
            icon.style.animationDuration = (5 + Math.random() * 10) + 's';
            
            // Random size
            const size = 20 + Math.random() * 30;
            icon.style.fontSize = size + 'px';
            
            // Random color
            const colors = ['#00d9ff', '#00ff9d', '#ff00ff', '#ffaa00', '#ff5555'];
            icon.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            // Random opacity
            icon.style.opacity = 0.3 + Math.random() * 0.7;
            
            container.appendChild(icon);
        }
        
        // Create neural network lines
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const line = document.createElement('div');
                line.className = 'neural-line';
                
                const startX = Math.random() * 100;
                const startY = Math.random() * 100;
                const angle = Math.random() * 360;
                const length = 80 + Math.random() * 120;
                
                line.style.left = startX + '%';
                line.style.top = startY + '%';
                line.style.transform = `rotate(${angle}deg)`;
                line.style.width = length + 'px';
                line.style.animationDelay = Math.random() * 2 + 's';
                
                // Random color
                const colors = ['rgba(0, 217, 255, 0.3)', 'rgba(0, 255, 157, 0.3)', 'rgba(255, 0, 255, 0.3)'];
                line.style.background = `linear-gradient(90deg, transparent, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`;
                
                container.appendChild(line);
            }, i * 100);
        }
        
        // Create brain animation
        const brainLoader = document.createElement('div');
        brainLoader.className = 'brain-loader';
        
        for (let i = 0; i < 2; i++) {
            const part = document.createElement('div');
            part.className = 'brain-part';
            brainLoader.appendChild(part);
        }
        
        container.appendChild(brainLoader);
    }
    
    // Start AI/ML loading animation immediately
    createAIMLLoading();
    
    // ===== LOADING PROGRESS =====
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 5;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = progress + '%';
        loadingPercent.textContent = Math.floor(progress) + '%';
        
        // Update loading text
        if (loadingSubtitle) {
            if (progress < 30) {
                loadingSubtitle.textContent = "Initializing Portfolio Systems...";
            } else if (progress < 60) {
                loadingSubtitle.textContent = "Loading Projects...";
            } else if (progress < 90) {
                loadingSubtitle.textContent = "Finalizing details...";
            } else {
                loadingSubtitle.textContent = "Portfolio Engine Ready!...";
            }
        }
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            
            // Go to welcome screen
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    welcomeScreen.style.display = 'flex';
                    setTimeout(() => {
                        welcomeScreen.style.opacity = '1';
                        enhanceWelcomeScreen();
                    }, 50);
                }, 500);
            }, 800);
        }
    }, 250);
    
    // ===== ENHANCED WELCOME SCREEN =====
    function enhanceWelcomeScreen() {
        // Add floating AI icons
        const iconsContainer = document.createElement('div');
        iconsContainer.className = 'floating-ai-icons';
        
        const aiIcons = ['🤖', '🧠', '⚡', '💻', '📊', '🔬', '🎯', '🚀', '✨', '🔗'];
        
        for (let i = 0; i < 15; i++) {
            const icon = document.createElement('div');
            icon.className = 'ai-icon';
            icon.textContent = aiIcons[Math.floor(Math.random() * aiIcons.length)];
            icon.style.left = Math.random() * 100 + '%';
            icon.style.animationDelay = Math.random() * 15 + 's';
            icon.style.animationDuration = (10 + Math.random() * 20) + 's';
            icon.style.fontSize = (30 + Math.random() * 40) + 'px';
            
            const colors = ['#00d9ff', '#00ff9d', '#ff00ff', '#ffaa00', '#ff5555'];
            icon.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            iconsContainer.appendChild(icon);
        }
        
        welcomeScreen.appendChild(iconsContainer);
        
        // Animate stats counting
        setTimeout(() => {
            animateCounter('projectCount', 0, 12, 1500);
            animateCounter('aiCount', 0, 95, 1200);
        }, 1000);
    }
    
    // Animate counter function
    function animateCounter(elementId, start, end, duration) {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value + (end === 95 ? '%' : '+');
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        
        window.requestAnimationFrame(step);
    }
    
    // ===== ENTER PORTFOLIO BUTTON =====
    enterBtn.addEventListener('click', function() {
        // Create explosion effect
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const angle = Math.random() * Math.PI * 2;
                const distance = 200 + Math.random() * 300;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                const particle = document.createElement('div');
                particle.className = 'click-particle';
                particle.style.left = '50%';
                particle.style.top = '50%';
                particle.style.setProperty('--tx', tx + 'px');
                particle.style.setProperty('--ty', ty + 'px');
                
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 1000);
            }, i * 30);
        }
        
        welcomeScreen.style.opacity = '0';
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            mainContent.style.display = 'block';
            setTimeout(() => {
                mainContent.style.opacity = '1';
                
                // Start typing animation
                startTypingAnimation();
                
                // Initialize portfolio features
                initializePortfolio();
            }, 50);
        }, 500);
    });
    
    // ===== TYPING ANIMATION =====
    function startTypingAnimation() {
        if (!typingText) return;
        
        const texts = [
            "AI/ML Developer",
            "Web Developer",
            "Problem Solver",
            "Tech Enthusiast"
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
            
            setTimeout(type, isDeleting ? 50 : 100);
        }
        
        setTimeout(type, 1000);
    }
    
    // ===== PROJECT CARD HOVER EFFECTS =====
    function setupProjectCardHover() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
            
                this.style.setProperty('--x', x + '%');
                this.style.setProperty('--y', y + '%');
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.setProperty('--x', '50%');
                this.style.setProperty('--y', '50%');
            });
        });
    }
    
    // ===== INITIALIZE PORTFOLIO =====
    function initializePortfolio() {
        // Mobile menu toggle
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (navToggle && navLinks) {
            navToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                
                // Change icon
                const icon = this.querySelector('i');
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
            
            // Close menu when clicking a link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    navToggle.querySelector('i').classList.remove('fa-times');
                    navToggle.querySelector('i').classList.add('fa-bars');
                });
            });
        }
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Active navigation highlighting
        function updateActiveNav() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= (sectionTop - 100)) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }
        
        window.addEventListener('scroll', updateActiveNav);
        
        // Email copy functionality
        const emailCard = document.getElementById('emailCard');
        if (emailCard) {
            emailCard.addEventListener('click', async function() {
                const email = 'prathamdogra57@gmail.com';
                
                try {
                    await navigator.clipboard.writeText(email);
                    
                    // Visual feedback
                    const originalContent = this.querySelector('.contact-content p').textContent;
                    const originalAction = this.querySelector('.contact-action').textContent;
                    
                    this.querySelector('.contact-content p').textContent = 'Copied to clipboard!';
                    this.querySelector('.contact-action').textContent = '✓ Copied';
                    this.style.borderColor = '#71ea35';
                    
                    // Reset after 2 seconds
                    setTimeout(() => {
                        this.querySelector('.contact-content p').textContent = originalContent;
                        this.querySelector('.contact-action').textContent = originalAction;
                        this.style.borderColor = '';
                    }, 2000);
                } catch (err) {
                    // Fallback
                    const textArea = document.createElement('textarea');
                    textArea.value = email;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    
                    // Visual feedback for fallback
                    this.querySelector('.contact-action').textContent = 'Copied!';
                    setTimeout(() => {
                        this.querySelector('.contact-action').textContent = 'Click to copy';
                    }, 2000);
                }
            });
        }
        
        // Setup project card hover effects
        setupProjectCardHover();
        
        // Back to top button
        createBackToTopButton();
    }
    
    // ===== BACK TO TOP BUTTON =====
    function createBackToTopButton() {
        const backToTop = document.createElement('a');
        backToTop.href = '#home';
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
        document.body.appendChild(backToTop);
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    console.log('Portfolio loaded successfully! 🚀');
});
