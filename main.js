const recogerPalabras = () => {
  const palabras = [];
  let palabra;

  while (
    (palabra = prompt('Introduce una palabra:')) !== null &&
    palabra !== ''
  ) {
    palabras.push(palabra.toLowerCase());
  }

  return palabras;
};

const mostrarResultado = (resultado) => {
  const resultadoDiv = document.querySelector('.palabras');
  resultadoDiv.innerHTML = resultado;
};
