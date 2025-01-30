document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita que la página se recargue
            let page = this.getAttribute("href"); // Obtiene el href del enlace

            fetch(page) // Carga la página correspondiente
                .then(response => response.text())
                .then(data => {
                    document.getElementById("content").innerHTML = data;
                })
                .catch(error => console.log("Error al cargar la página:", error));
        });
    });
});
