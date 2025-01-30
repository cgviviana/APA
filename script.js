document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll(".sidebar nav ul li a");
    const contenedor = document.getElementById("contenido-dinamico");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();
            const ruta = this.getAttribute("data-page");

            // Verificar si el archivo existe antes de cargarlo
            fetch(ruta)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error al cargar el contenido desde: ${ruta}`);
                    }
                    return response.text();
                })
                .then(data => {
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = data;

                    // Extraer solo el contenido del <body> del archivo cargado
                    const nuevoContenido = tempDiv.querySelector("body") ? tempDiv.querySelector("body").innerHTML : data;

                    contenedor.innerHTML = nuevoContenido;
                })
                .catch(error => {
                    contenedor.innerHTML = `<p style="color: red;">Error al cargar el contenido: ${error.message}</p>`;
                });
        });
    });
});
