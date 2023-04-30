const carouselContainer = document.querySelector('.beer-brands-carousel__images');
const prevButton = document.querySelector('.beer-brands-carousel__images-button-prev');
const nextButton = document.querySelector('.beer-brands-carousel__images-button-next');
const items = document.querySelectorAll('.beer-brands-carousel__images-container');

const beerBrands = [
`<div class="miller-brand">
<img src="/images/carousel_logo_miller.svg" alt="Miller">
</div>
<div class="hoegaarden-brand">
    <img src="/images/carousel_logo_hoegaarden.svg" alt="Hoegaarden">
</div>
<div class="carlsberg-brand">
    <img src="/images/carousel_logo_carlsberg.svg" alt="Carlsberg">
</div>
<div class="budweiser-brand">
    <img src="/images/carousel_logo_budweiser.svg" alt="Budweiser">
</div>
<div class="heineken-brand">
    <img src="/images/carousel_logo_heineken.svg" alt="Heineken">
</div>
<div class="corona-brand">
    <img src="/images/carousel_logo_corona.svg" alt="Corona">
</div>`
]

let currentIndex = 0;
items[currentIndex].classList.add('active');

function showItem(index) {
  if (index < 0) {
    index = items.length - 1;
  } else if (index >= items.length) {
    index = 0;
  }
  items[currentIndex].classList.remove('active');
  items[index].classList.add('active');
  currentIndex = index;
}

prevButton.addEventListener('click', () => {
  showItem(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  showItem(currentIndex + 1);
});

setInterval(() => {
  showItem(currentIndex + 1);
}, 5000);
