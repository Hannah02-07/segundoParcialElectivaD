document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const items = Array.from(track.children);
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    const itemWidth = items[0].getBoundingClientRect().width;

    let currentIndex = 0;

    const moveToSlide = (index) => {
        track.style.transform = `translateX(-${index * itemWidth}px)`;
    };

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length; // Cicla entre imágenes
        moveToSlide(currentIndex);
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Cicla hacia atrás
        moveToSlide(currentIndex);
    });
});
