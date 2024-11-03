const contarPalabras = (palabras) => {
    const mapaPalabras = new Map();
  
    palabras.forEach((palabra) => {
      mapaPalabras.set(palabra, (mapaPalabras.get(palabra) || 0) + 1);
    });
  
    return mapaPalabras;
};
  
const boton = document.querySelector(".boton");

boton.addEventListener("click", () => {
    const palabras = recogerPalabras();
    const mapaPalabras = contarPalabras(palabras);
    let resultadoHTML = '';

    
    mapaPalabras.forEach((conteo, palabra) => {
        resultadoHTML += `${palabra}: ${conteo}<br>`;
    });

    mostrarResultado(resultadoHTML);
});