function showText (el) {
	if(el.previousElementSibling.clientHeight === 15) {
		el.previousElementSibling.style.height = "100%";
		el.innerHTML = "Show less...";  
	} else {
		el.previousElementSibling.style.height = "15px";
		el.innerHTML = "Read more...";
	}
}