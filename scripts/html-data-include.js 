document.addEventListener("DOMContentLoaded", function () {
    document
        .querySelectorAll("[data-include]")
        .forEach(element => {
            const src = element.getAttribute("data-include");
            fetch(src)
                .then(response => {
                    if (response.status === 200) {
                        return response.text();
                    } else {
                        return Promise.reject(new Error(`Failed to load ${src} with status ${response.status}`));
                    }
                })
                .then(html => {
                    element.outerHTML = html;
                })
                .catch(error => {
                    console.error("Error including file:", error);
                });
        });
});