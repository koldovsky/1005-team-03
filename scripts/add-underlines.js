const preUnderlineTags = document.querySelectorAll(".category__item__name, .special-price-block__list-item-title, .offers__menu-description-title");
preUnderlineTags.forEach(item => {
   const underline = document.createElement('div');
   underline.classList.add('underline');
   item.after(underline);
});