document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu a");
    const contentFrame = document.getElementById("content-frame");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita que la página recargue
            const page = this.getAttribute("data-page");
            contentFrame.src = page; // Carga la página en el iframe
        });
    });
});
