document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu a");
    const contentFrame = document.getElementById("content-frame");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("data-page");

            // Verifica si el archivo realmente existe antes de cargarlo
            fetch(page, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        contentFrame.src = page;
                    } else {
                        console.error("Error: La página no existe.");
                        contentFrame.src = "error.html"; // Página de error opcional
                    }
                })
                .catch(error => {
                    console.error("Error al cargar la página:", error);
                });
        });
    });
});
