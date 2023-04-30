const slides = [
    `<div class="botteled-beer__carousel_ipa">
        <img src="images/ipa.png" alt="ipa" width="265" height="493">
        <div class="ipa__text">
            <div class="ipa-title">IPA</div>
            <div class="ipa-description">
                <p>Ideal for those who prefer strong and bitter beer with rich aroma.</p>
            </div>
            <div class="ipa-generalinfo">
                <div class="ipa-alkohol">
                    <p>ABV - 8%</p>
                    <p>IBU - 80</p>
                </div>
                <div class="ipa-otherinfo">
                    <p>Very bitter, hoppy, with grainy notes.</p>
                </div>
            </div>
        </div>
    </div>`,

    `<div class="botteled-beer__carousel_lager">
        <img src="images/lager.png" alt="lager" width="265" height="493">
        <div class="lager__text">
            <div class="lager-title">LAGER BEER</div>
            <div class="lager-description">
                <p>This classic bottled beer features a wheat aroma and mild taste.</p>
            </div>
            <div class="lager-generalinfo">
            <div class="lager-alkohol">
                <p>ABV - 4.2%</p>
                <p>IBU - 12</p>
            </div>
            <div class="lager-otherinfo">
                <p>Light, mild, with very little bitterness.</p>
            </div>
            </div>
        </div>
    </div>`,

    `<div class="botteled-beer__carousel_bitter">
        <img src="images/bitter.png" alt="bitter" width="265" height="493">
        <div class="bitter__text">
            <div class="bitter-title">BITTER</div>
            <div class="bitter-description">
                <p>"England's favorite beer" is a great choice for those who like dark varieties of beer.
                </p>
            </div>
            <div class="bitter-generalinfo">
                <div class="bitter-alkohol">
                    <p>ABV - 4.6%</p>
                    <p>IBU - 40</p>
                </div>
                <div class="bitter-otherinfo">
                    <p>Bitter, malty, with a slight aftertaste of toasts.</p>
                </div>
            </div>
        </div>
    </div>`
];

let currentSlide = 0;

function showCurrentSlide() {
    const slideContainer = document.querySelector('.botteled-beer__carousel');
    slideContainer.innerHTML = slides[currentSlide];
    if (window.innerWidth > 768) {
        const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
    }
}

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    showCurrentSlide();
}

function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    showCurrentSlide();
}

const btnNext = document.querySelector('.carousel-btn-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.carousel-btn-prev');
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', showCurrentSlide);