// Sabad Kharid
document.querySelector("#Sabad-Image").addEventListener('click' , function menusabad() {
    document.querySelector("#mysabad").style.visibility="visible"
    document.querySelector("#s3").style.visibility="visible"
})
document.querySelector("#s2").addEventListener('click' , function menusabad() {
    document.querySelector("#mysabad").style.visibility="visible"
    document.querySelector("#s3").style.visibility="visible"
})
// -----------------------------------------------------------------------------
// Fillter
document.querySelector("#close-image").addEventListener('click' , function name() {
document.querySelector("#mysabad").style.visibility="hidden"
document.querySelector("#s3").style.visibility="hidden"
})
document.querySelector("#fill1").addEventListener('click' , function name() {
document.querySelector("#filtert2").style.visibility="visible"
})
document.querySelector("#fill2").addEventListener('click' , function name() {
document.querySelector("#filtert").style.visibility="visible"
})
document.querySelector("#filtert2").addEventListener('mouseleave' , function name() {
document.querySelector("#filtert2").style.visibility="hidden"
})
document.querySelector("#filtert").addEventListener('mouseleave' , function name() {
document.querySelector("#filtert").style.visibility="hidden"
})

// -----------------------------------------------------------------------------
// Slider
let currentIndex = 0;
        const sliderWrapper = document.getElementById('sliderWrapper');
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        function createDots() {
            const dotsContainer = document.getElementById('dotsContainer');
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.onclick = () => goToSlide(i);
                dotsContainer.appendChild(dot);
            }
        }
        function changeSlide(direction) {
            currentIndex += direction;
            if (currentIndex < 0) {
                currentIndex = totalSlides - 1;
            } else if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }
            updateSlider();
        }
        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
        }
        function updateSlider() {
            const offset = -currentIndex * 100;
            sliderWrapper.style.transform = `translateX(${offset}%)`;
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        function autoSlide() {
            changeSlide(1);
        }
        setInterval(autoSlide, 2500);
        createDots();
// -----------------------------------------------------------------------------
// SabadAdd
document.querySelector("#imgdastebandi2").addEventListener('focus' , function add() {
document.querySelector("#sabadadd").style.visibility="visible"  
})
document.querySelector("#imgdastebandi3").addEventListener('mouseenter' , function add() {
document.querySelector("#sabadadd2").style.visibility="visible"  
})
document.querySelector("#imgdastebandi4").addEventListener('mouseenter' , function add() {
document.querySelector("#sabadadd3").style.visibility="visible"  
})
document.querySelector("#imgdastebandi5").addEventListener('mouseenter' , function add() {
document.querySelector("#sabadadd4").style.visibility="visible"  
})
document.querySelector("#l2").addEventListener('mouseenter' , function add() {
document.querySelector("#sabadadd").style.visibility="visible"  
})
document.querySelector("#l22").addEventListener('mouseenter' , function add() {
document.querySelector("#sabadadd2").style.visibility="visible"  
})
document.querySelector("#l222").addEventListener('mouseenter' , function add() {
document.querySelector("#sabadadd3").style.visibility="visible"  
})
document.querySelector("#l2222").addEventListener('mouseenter' , function add() {
document.querySelector("#sabadadd4").style.visibility="visible"  
})
document.querySelector("#sabadadd").addEventListener('mouseenter' , function add() {
document.querySelector("#sabadadd").style.visibility="visible"  
})
document.querySelector("#sabadadd2").addEventListener('mouseenter' , function add() {
document.querySelector("#sabadadd2").style.visibility="visible"  
})
document.querySelector("#sabadadd3").addEventListener('mouseenter' , function add() {
document.querySelector("#sabadadd3").style.visibility="visible"  
})
document.querySelector("#sabadadd4").addEventListener('mouseenter' , function add() {
document.querySelector("#sabadadd4").style.visibility="visible"  
})
document.querySelector("#imgdastebandi2").addEventListener('mouseleave' , function add() {
document.querySelector("#sabadadd").style.visibility="hidden"  
})
document.querySelector("#imgdastebandi3").addEventListener('mouseleave' , function add() {
document.querySelector("#sabadadd2").style.visibility="hidden"  
})
document.querySelector("#imgdastebandi4").addEventListener('mouseleave' , function add() {
document.querySelector("#sabadadd3").style.visibility="hidden"  
})
document.querySelector("#imgdastebandi5").addEventListener('mouseleave' , function add() {
document.querySelector("#sabadadd4").style.visibility="hidden"  
})
document.querySelector("#l2").addEventListener('mouseleave' , function add() {
document.querySelector("#sabadadd").style.visibility="hidden"  
})
document.querySelector("#l22").addEventListener('mouseleave' , function add() {
document.querySelector("#sabadadd2").style.visibility="hidden"  
})
document.querySelector("#l222").addEventListener('mouseleave' , function add() {
document.querySelector("#sabadadd3").style.visibility="hidden"  
})
document.querySelector("#l2222").addEventListener('mouseleave' , function add() {
document.querySelector("#sabadadd4").style.visibility="hidden"  
})
// -----------------------------------------------------------------------------
// SerchBox
document.querySelector("#serch1").addEventListener('focus', function serch() {
document.querySelector("#serch-image2").style.visibility="visible"
document.querySelector("#serchbox").style.visibility="visible"
document.querySelector("#serch-image").style.visibility="hidden"
})
document.querySelector("#serch1").addEventListener('click', function serch() {
document.querySelector("#serch-image2").style.visibility="visible"
document.querySelector("#serchbox").style.visibility="visible"
document.querySelector("#serch-image").style.visibility="hidden"
})

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
    document.querySelector("#serch-image2").style.visibility="hidden"
    document.querySelector("#serchbox").style.visibility="hidden"
    document.querySelector("#serch1").value=""
    document.querySelector("#serch-image").style.visibility="visible"
    }
});

// -----------------------------------------------------------------------------
// Moddark
        function toggleTheme() {
            const body = document.body;
            const btn = document.getElementById('themeBtn');
            
            if (body.classList.contains('light')) {
                body.classList.remove('light');
                body.classList.add('dark');
                btn.textContent = '🌙';
            } else {
                body.classList.remove('dark');
                body.classList.add('light');
                btn.textContent = '☀️';
            }
        }
