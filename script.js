function mostrarSeccion(seccion) {
    let titulo = document.getElementById("titulo");
    let descripcion = document.getElementById("descripcion");
    let contenido = document.getElementById("contenido");

    if (seccion === "etica") {
        titulo.innerHTML = "Ética en las Normas APA";
        descripcion.innerHTML = "La ética en las normas APA es fundamental para garantizar la credibilidad de las investigaciones.";
        contenido.innerHTML = "<p>Se deben seguir principios de integridad, evitando el plagio y dando crédito a los autores.</p>";
    } else if (seccion === "citacion") {
        titulo.innerHTML = "Citación en Normas APA";
        descripcion.innerHTML = "Las citas permiten referenciar las fuentes utilizadas en una investigación.";
        contenido.innerHTML = "<p>Las citas pueden ser en formato parentético o narrativo, según el contexto del documento.</p>";
    } else if (seccion === "referenciacion") {
        titulo.innerHTML = "Referenciación en Normas APA";
        descripcion.innerHTML = "La referenciación permite identificar las fuentes bibliográficas utilizadas.";
        contenido.innerHTML = "<p>Se debe incluir el autor, el año de publicación, el título y la fuente de acceso.</p>";
    }
}
