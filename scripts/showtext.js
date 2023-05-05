function showtext(el) {
	if (el.previousElementSibling.clientHeight === 43) {
		el.previousElementSibling.style.height = "unset";
		el.innerHTML = "Show less";
	} else {
		el.previousElementSibling.style.height = "43px";
		el.innerHTML = "Read more";
	}
}

document.querySelectorAll('.blog__read-more')
	.forEach(button => button.addEventListener('click',
		() => showtext(button)
	))