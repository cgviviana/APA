document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".sidebar ul li a");
    const iframeContainer = document.getElementById("iframe-container");
    const welcomeTitle = document.getElementById("welcome");

    // Función para cargar la página dentro del contenedor
    function loadPage(url) {
        iframeContainer.innerHTML = `<iframe src="${url}" frameborder="0" width="100%" height="600px"></iframe>`;
    }

    // Event Listener para los enlaces del menú
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("data-page");
            loadPage(page);
        });
    });

    // Event Listener para hacer clic en "Aprendiendo con la Profe Vivy"
    welcomeTitle.addEventListener("click", function () {
        iframeContainer.innerHTML = `
            <h1>Bienvenido a Recursos sobre Normas APA</h1>
            <p>Este sitio te ayudará a aprender sobre citación, referenciación y ética en la escritura académica.</p>
            <p>Haz clic en los enlaces del menú para acceder a cada tema.</p>
        `;
    });
});
