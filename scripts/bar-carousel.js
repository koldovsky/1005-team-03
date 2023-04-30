const carousel = document.querySelector('.bar-menu .collection__carousel');
const carouselInner = document.querySelector('.bar-menu .collection__carousel__inner');
const prevButton = document.querySelector('.bar-menu .carousel__btn-prev')
const nextButton = document.querySelector('.bar-menu .carousel__btn-next');
const numberOfCategories = document.querySelectorAll('.bar-menu .bar-menu__category').length;
let currentIndex = 0;
let numberOfScrolls;

function countNumberOfScrolls() {
   numberOfScrolls = innerWidth <= 767 ? numberOfCategories : numberOfCategories - 1;
}

function updateIndex() {
   if(currentIndex === 2 && innerWidth > 767) {
      currentIndex = 1;
   }
   updateCarousel();
}

function updateCarousel() { 
   carouselInner.style.transform = `translateX(-${currentIndex * (innerWidth <= 767 ? 100 : 50)}%)`;
}

prevButton.addEventListener('click', () => {
   currentIndex = (currentIndex - 1 + numberOfScrolls) % (numberOfScrolls);
   updateCarousel();
});

nextButton.addEventListener('click', () => {
   currentIndex = (currentIndex + 1) % numberOfScrolls;
   updateCarousel();
});

countNumberOfScrolls();
window.addEventListener('resize', countNumberOfScrolls);
window.addEventListener('resize', updateIndex);