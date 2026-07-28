const jaula = document.getElementById("jaula");

jaula.addEventListener("mouseover", () => {
  jaula.style.backgroundColor = "yellow";
});

jaula.addEventListener("mouseout", () => {
  jaula.style.backgroundColor = "lightgray";
});

jaula.addEventListener("click", () => {
  alert("Jaula 1: ocupada por Rex");
});

const area = document.getElementById("areaTouch");

area.addEventListener("touchstart", () => {
  area.style.backgroundColor = "green";
});

area.addEventListener("touchend", () => {
  area.style.backgroundColor = "blue";
});
