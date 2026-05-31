// POO Vete
class Doctor {
  nombre: string;
  especialidad: string;

  constructor(n: string, e: string) {
    this.nombre = n;
    this.especialidad = e;
  }

  presentar() {
    return `Dr. ${this.nombre} - ${this.especialidad}`;
  }
}

const d1 = new Doctor("Rahi", "Cirugia");
console.log(d1.presentar());
