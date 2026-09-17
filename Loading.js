        const text=" Welcome  ";
        const typedText = document.getElementById('typedText');
        const cursor = document.getElementById('cursor');
        const loadingProgress = document.getElementById('loadingProgress');
        const subtitle = document.getElementById('subtitle');
        const particlesContainer = document.getElementById('particles');

        let currentIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150;

        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 2 + 's';
            particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
            particlesContainer.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 4000);
        }

        function typeText() {
            if (!isDeleting && currentIndex <= text.length) {
                typedText.innerHTML = '';
                for (let i = 0; i < currentIndex; i++) {
                    const span = document.createElement('span');
                    span.className = 'letter';
                    span.textContent = text[i];
                    span.style.animationDelay = '0s';
                    typedText.appendChild(span);
                }

                const progress = (currentIndex / text.length) * 100;
                loadingProgress.style.width = progress + '%';

                currentIndex++;
                typingSpeed = 150 + Math.random() * 100;

                if (Math.random() > 0.5) {
                    createParticle();
                }

            } else if (isDeleting && currentIndex >= 0) {
                typedText.innerHTML = '';
                for (let i = 0; i < currentIndex; i++) {
                    const span = document.createElement('span');
                    span.className = 'letter';
                    span.textContent = text[i];
                    typedText.appendChild(span);
                }

                const progress = (currentIndex / text.length) * 100;
                loadingProgress.style.width = progress + '%';

                currentIndex--;
                typingSpeed = 80;
            }

            if (!isDeleting && currentIndex > text.length) {
                isDeleting = true;
                typingSpeed = 2000; // مکث قبل از پاک کردن
                subtitle.textContent = 'COMPLETE ✓';
                subtitle.style.color = 'rgba(212, 168, 67, 0.8)';
            } else if (isDeleting && currentIndex < 0) {
                window.location.href="Login.html"
                isDeleting = false;
                currentIndex = 0;
                typingSpeed = 500;
                subtitle.textContent = 'LOADING...';
                subtitle.style.color = 'rgba(212, 168, 67, 0.4)';
            }

            setTimeout(typeText, typingSpeed);
        }

        setTimeout(typeText, 1000);

        setInterval(createParticle, 500);