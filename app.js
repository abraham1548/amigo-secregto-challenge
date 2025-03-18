// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Ingresa un nombre válido");
    return;
  }

  amigos.push(nombre);

  // Crear un elemento li para mostrar el nombre en la lista
  const li = document.createElement("li");
  li.textContent = nombre;
  document.getElementById("listaAmigos").appendChild(li);

  // Limpiar el campo de entrada
  input.value = "";
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en la lista de resultados
  document.getElementById("resultado").innerHTML = `<li>Amigo Secreto: ${amigoSorteado}</li>`;
}
