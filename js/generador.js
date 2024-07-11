
/**
 * Genera una tirada de 5 dados
 */
function tirarDados() {
  var buffer = new Uint32Array(1);
  var tirada = "";
  for (let i = 0; i < 5; i++) {
    window.crypto.getRandomValues(buffer);
    var randomNumber = (buffer[0] % 6) + 1; //Un numero entre 1 y 6
    tirada += randomNumber.toString();
  }
  console.log("tirada", tirada);
  return tirada;
}


async function cargarDiccionarioDiceware() {
  const respuesta = await fetch("js/dictionary/dw-es.json");
  const datos = await respuesta.json();
  return datos;
}

// Funcion principal
async function generarDiceware() {
  const diccionario = await cargarDiccionarioDiceware();
  const cantidadPalabras = parseInt(
    document.getElementById("cantidadPalabras").value
  );
  const separador = document.getElementById("separador").value;
  let resultado = [];
  const buffer = new Uint32Array(1);

  for (let i = 0; i < cantidadPalabras; i++) {
    //Obtener el indice diceware
    let tirada = tirarDados();
    if (diccionario.hasOwnProperty(tirada)) {
      var palabra = diccionario[tirada].palabra;
      console.log("palabra", palabra);
    } else {
      console.log("Código Diceware no encontrado");
    }
    resultado.push(palabra);
  }

  resultado = resultado.join(separador);
  document.getElementById("dicewareText").textContent = resultado;
}

document
  .getElementById("dicewareForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    generarDiceware();
  });


const copiarIcono = document.getElementById("copiarIcono");

copiarIcono.addEventListener("click", () => {
  const dicewareText = document.getElementById("dicewareText");
  const resultado = dicewareText.textContent;

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(resultado)
      .then(() => {
        // Copiado correctamente
        copiarIcono.classList.add("fa-check");
        setTimeout(() => copiarIcono.classList.remove("fa-check"), 1000);
      })
      .catch((error) => {
        // Error al copiar
        console.error("Error al copiar:", error);
      });
  } else {
    // No se admite copiar al portapapeles
    alert("Tu navegador no admite copiar el texto");
  }
});
