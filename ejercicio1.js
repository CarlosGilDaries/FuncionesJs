const ordenarPalabras = () => {
  const palabras = [];
  let palabra;

  while (
    (palabra = prompt('Introduce una palabra:')) !== null &&
    palabra !== ''
  ) {
    palabras.push(palabra.toLowerCase());
  }

  const ordenadas = [...new Set(palabras)].sort((a, b) =>
    b.localeCompare(a, 'es')
  );

  document.querySelector('.palabras').innerHTML = `${ordenadas.join('<br>')}`;
};

boton = document.querySelector('.boton');
boton.addEventListener('click', ordenarPalabras);
