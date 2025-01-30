document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll(".sidebar nav ul li a");
    const contenedor = document.getElementById("contenido-dinamico");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault(); 
            const ruta = this.getAttribute("data-page");

            // Verifica si el archivo realmente existe antes de cargarlo
            fetch(ruta)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`No se encontró el archivo en la ruta: ${ruta}`);
                    }
                    return response.text();
                })
                .then(data => {
                    // Extraer solo el contenido dentro del <body> del archivo HTML cargado
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = data;
                    const nuevoContenido = tempDiv.querySelector("body") ? tempDiv.querySelector("body").innerHTML : data;
                    
                    contenedor.innerHTML = nuevoContenido;
                })
                .catch(error => {
                    contenedor.innerHTML = `<p style="color: red;">Error al cargar el contenido: ${error.message}</p>`;
                });
        });
    });
});
