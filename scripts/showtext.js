function showtext (el) {
	if(el.previousElementSibling.clientHeight === 20) {
		el.previousElementSibling.style.height = "unset";
		el.innerHTML = "Show less";  
	} else {
		el.previousElementSibling.style.height = "20px";
		el.innerHTML = "Read more";
	}
}