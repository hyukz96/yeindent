document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dots span');
    const totalSlides = dots.length;

    function showSlides() {
        slideIndex = (slideIndex + 1) % totalSlides; // 슬라이드 순환
        updateSlidePosition();
        updateDots();
        setTimeout(showSlides, 3000); // 3초마다 슬라이드 전환
    }

    function updateSlidePosition() {
        const slideWidth = 100; // 각 슬라이드의 너비 (백분율 기준)
        slides.style.transform = `translateX(${-slideWidth * slideIndex}%)`;
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === slideIndex) {
                dot.classList.add('active');
            }
        });
    }

    function currentSlide(n) {
        clearTimeout(autoSlideTimer); // 자동 전환 타이머 초기화
        slideIndex = n;
        updateSlidePosition();
        updateDots();
        autoSlideTimer = setTimeout(showSlides, 3000); // 다시 자동 전환 시작
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide(index);
        });
    });

    let autoSlideTimer = setTimeout(showSlides, 3000); // 초기 슬라이드 전환 시작
});
