const slides = [`
<div class="beer-brands-carousel__image-block">
    <img class="beer-brands-carousel__image" src="/images/carousel_logo_miller.svg" alt="Miller">
</div>`,
`<div class="beer-brands-carousel__image-block">
    <img class="beer-brands-carousel__image" src="/images/carousel_logo_hoegaarden.svg" alt="Hoegaarden">
</div>`,
`<div class="beer-brands-carousel__image-block">
    <img class="beer-brands-carousel__image" src="/images/carousel_logo_corona.svg" alt="Corona">
</div>`,
`<div class="beer-brands-carousel__image-block">
    <img class="beer-brands-carousel__image" src="/images/carousel_logo_heineken.svg" alt="Heineken">
</div>`,
`<div class="beer-brands-carousel__image-block">
    <img class="beer-brands-carousel__image" src="/images/carousel_logo_carlsberg.svg" alt="Carlsberg">
</div>`,
`<div class="beer-brands-carousel__image-block">
    <img class="beer-brands-carousel__image" src="/images/carousel_logo_budweiser.svg" alt="Budweiser">
</div>   
`];

let currentSlide = 0;


function showCurrentSlide() {
    const slideContainer = document.querySelector('.beer-brands-carousel__images-container');
    slideContainer.innerHTML = slides[currentSlide];
    switch (true) {
        case window.innerWidth >= 479:
            const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth < 767) {
                break;
            }
        case window.innerWidth >= 767:
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
            if (window.innerWidth < 991) {
                break;
            }
        case window.innerWidth >= 991:
            const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
            slideContainer.innerHTML += slides[fourthSlideIdx];
            const fifthSlideIdx = fourthSlideIdx + 1 >= slides.length ? 0 : fourthSlideIdx + 1;
            slideContainer.innerHTML += slides[fifthSlideIdx];
            break;
    }
}


function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    showCurrentSlide();
}

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    showCurrentSlide();
}

nextSlide();

const btnNext = document.querySelector('.beer-brands-carousel__images-button-prev');
btnNext.addEventListener('click', prevSlide);

const btnPrev = document.querySelector('.beer-brands-carousel__images-button-next');
btnPrev.addEventListener('click', nextSlide);

window.addEventListener('resize', showCurrentSlide);


// function showCurrentSlide() {
//     const slideContainer = document.querySelector('.beer-brands-carousel__images-container');
//     slideContainer.innerHTML = slides[currentSlide];
//     switch (true) {
//         case window.innerWidth >= 479:
//             const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
//             slideContainer.innerHTML += slides[secondSlideIdx];
//             break;
//         case window.innerWidth >= 767:
//             const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
//             slideContainer.innerHTML += slides[thirdSlideIdx];
//             break;
//         case window.innerWidth >= 991:
//             const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
//             slideContainer.innerHTML += slides[fourthSlideIdx];
//             const fifthSlideIdx = fourthSlideIdx + 1 >= slides.length ? 0 : fourthSlideIdx + 1;
//             slideContainer.innerHTML += slides[fifthSlideIdx];
//             break;
//     }
// }