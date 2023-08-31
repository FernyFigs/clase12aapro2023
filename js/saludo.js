document.addEventListener("DOMContentLoaded", function () {
  var saludar = document.getElementById("saludar");

  saludar.addEventListener("click", function () {
    var nombre = prompt("Por favor, ingresa tu nombre:");

    if (nombre === null || nombre === "") {
      alert("Por favor, ingresa tu nombre.");
    } else {
      alert("¡Bienvenidx, " + nombre + "!");
    }
  });
});
