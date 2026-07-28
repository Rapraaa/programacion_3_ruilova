const mascota = document.getElementById("mascota");
const colores = ["red", "green", "blue", "orange", "purple", "pink"];
let colorActual = 0;
let arrastrando = false;

function cambiarColor() {
  colorActual = (colorActual + 1) % colores.length;
  mascota.style.background = colores[colorActual];
}

function moverMascota(x, y) {
  const consultorio = document.getElementById("consultorio");
  const consultorioRect = consultorio.getBoundingClientRect();
  const mascotaRect = mascota.getBoundingClientRect();
  const mitadAncho = mascotaRect.width / 2;
  const mitadAlto = mascotaRect.height / 2;

  const offsetTop = consultorioRect.top + window.scrollY;
  const offsetLeft = consultorioRect.left + window.scrollX;

  mascota.style.left = x - offsetLeft - mitadAncho + "px";
  mascota.style.top = y - offsetTop - mitadAlto + "px";
}

mascota.addEventListener("touchstart", (e) => {
  e.preventDefault();
  cambiarColor();
  arrastrando = true;
});

document.addEventListener("touchmove", (e) => {
  if (!arrastrando) return;
  const touch = e.touches[0];
  moverMascota(touch.pageX, touch.pageY);
});

document.addEventListener("touchend", () => {
  arrastrando = false;
});

mascota.addEventListener("mousedown", (e) => {
  e.preventDefault();
  cambiarColor();
  arrastrando = true;
});

document.addEventListener("mousemove", (e) => {
  if (!arrastrando) return;
  moverMascota(e.clientX, e.clientY);
});

document.addEventListener("mouseup", () => {
  arrastrando = false;
});
