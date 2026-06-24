// Herencia Animal
class Mascota {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  comer() { 
    console.log(`${this.nombre} comiendo...`); 
  }
}

class Perro extends Mascota {
  ladrar() { 
    console.log("Guau!"); 
  }
}

const p = new Perro("Firulais");
p.comer();
p.ladrar();
