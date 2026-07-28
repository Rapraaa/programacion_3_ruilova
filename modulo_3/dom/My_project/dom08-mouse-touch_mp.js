const radiografia = document.getElementById("radiografia");
let arrastrando = false;
let inicioX = 0;
let zoom = 1;

function actualizarZoom(nuevoX) {
  const diferencia = nuevoX - inicioX;
  zoom += diferencia * 0.005;
  zoom = Math.max(0.5, Math.min(2, zoom));
  radiografia.style.transform = `scale(${zoom})`;
  inicioX = nuevoX;
}

radiografia.addEventListener("mousedown", (e) => {
  e.preventDefault();
  arrastrando = true;
  inicioX = e.clientX;
});

document.addEventListener("mousemove", (e) => {
  if (!arrastrando) return;
  actualizarZoom(e.clientX);
});

document.addEventListener("mouseup", () => {
  arrastrando = false;
});

radiografia.addEventListener("touchstart", (e) => {
  e.preventDefault();
  arrastrando = true;
  inicioX = e.touches[0].clientX;
});

document.addEventListener("touchmove", (e) => {
  if (!arrastrando) return;
  actualizarZoom(e.touches[0].clientX);
});

document.addEventListener("touchend", () => {
  arrastrando = false;
});
