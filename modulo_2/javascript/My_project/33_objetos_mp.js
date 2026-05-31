const mascota = {
  nombre: "Rex",
  especie: "Perro",
  edad: 4,
  saludar() {
    return `Hola soy ${this.nombre} y soy un ${this.especie}`;
  },
  cumplirAnios() {
    this.edad++;
    return `Ahora tengo ${this.edad}`;
  }
};

console.log(mascota.saludar());
console.log(mascota.cumplirAnios());
