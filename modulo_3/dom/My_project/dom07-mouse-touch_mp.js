const boton = document.getElementById("botonEmergencia");

function agrandar() {
  boton.style.transform = "scale(1.5)";
}

function normalizar() {
  boton.style.transform = "scale(1)";
}

boton.addEventListener("mouseover", agrandar);
boton.addEventListener("mouseout", normalizar);

boton.addEventListener("touchstart", (e) => {
  e.preventDefault();
  agrandar();
});
boton.addEventListener("touchend", normalizar);
