// Herencia Animal
class Mascota {
  constructor(protected nombre: string) {}
  comer() { console.log(`${this.nombre} comiendo...`); }
}

class Perro extends Mascota {
  ladrar() { console.log("Guau!"); }
}

const p = new Perro("Firulais");
p.comer();
p.ladrar();
