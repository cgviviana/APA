document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll(".sidebar nav ul li a");
    const contenedor = document.getElementById("contenido-dinamico");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault(); 
            const carpeta = this.getAttribute("data-page");

            // Cargar el contenido de la carpeta dentro del contenedor
            fetch(`./${carpeta}/index.html`)
                .then(response => response.text())
                .then(data => {
                    contenedor.innerHTML = data;
                })
                .catch(error => {
                    contenedor.innerHTML = "<p>Error al cargar el contenido.</p>";
                });
        });
    });
});
