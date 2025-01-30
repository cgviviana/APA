document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll(".sidebar nav ul li a");
    const contenedor = document.getElementById("contenido-dinamico");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault(); 
            const ruta = this.getAttribute("data-page");

            // Cargar el contenido de la carpeta dentro del contenedor
            fetch(ruta)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('No se encontró la página');
                    }
                    return response.text();
                })
                .then(data => {
                    contenedor.innerHTML = data;
                })
                .catch(error => {
                    contenedor.innerHTML = `<p style="color: red;">Error al cargar el contenido: ${error.message}</p>`;
                });
        });
    });
});
