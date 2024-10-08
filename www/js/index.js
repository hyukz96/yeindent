window.addEventListener('scroll', function(){
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#00000066';
    } else {
        header.style.backgroundColor = '#FFFFFF66';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    //main 슬라이드 관련
    let slideIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length; // 슬라이드 이미지의 개수

    function showSlides() {
        slideIndex = (slideIndex + 1) % totalSlides; // 슬라이드 순환
        updateSlidePosition();
        setTimeout(showSlides, 5000); // 5초마다 슬라이드 전환
    }

    function updateSlidePosition() {
        const slideWidth = 100; // 각 슬라이드의 너비 (백분율 기준)
        slides.style.transform = `translateX(${-slideWidth * slideIndex}%)`;
    }

    // 초기 슬라이드 전환 시작
    setTimeout(showSlides, 5000);
});