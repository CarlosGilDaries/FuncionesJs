const ordenarPalabras = () => {
  const palabras = recogerPalabras();

  const ordenadas = [...new Set(palabras)].sort((a, b) =>
    b.localeCompare(a, "es")
  );

  const resultadoHTML = ordenadas.join("<br>");

  mostrarResultado(resultadoHTML);
};

const boton = document.querySelector(".boton");
boton.addEventListener("click", ordenarPalabras);
