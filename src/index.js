import "./styles.css";

/**
 * Queremos una función para calular la media de estrellas que tiene en función de sus valoraciones recibidas.
 *
 * Usa el método forEach o reduce para conseguir dicho número.
 *
 * Recuerda que la media es la suma de todas las estrellas dividido por el número de valoraciones
 */
function calcularMedia(valoraciones) {
  let suma = 0;

  /** MODIFICAR */

  valoraciones.forEach((v) => {
    suma = suma + v.estrellas;
  });

  return suma / valoraciones.length;

  /** NO MODIFICAR A PARTIR DE AQUÍ */

  return media;
}

// NO TOCAR A PARTIR DE AQUÍ
const media = calcularMedia([
  { fecha: "23-04-2023", estrellas: 5 },
  { fecha: "23-05-2023", estrellas: 2 },
  { fecha: "29-05-2023", estrellas: 5 }
]);

document.getElementById("app").innerHTML = `
<h1>La puntuación media de este usuario es ${media} &#10029;
</h1>`;

// Deberíamos obtener 4 estrellas !
