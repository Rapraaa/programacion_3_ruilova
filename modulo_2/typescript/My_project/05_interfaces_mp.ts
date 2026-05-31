// Interfaces vete
interface Paciente {
  nombre: string;
  edad: number;
  raza: string;
  dueño?: string; // opcional
}

type RolVete = "Admin" | "Doc" | "Asistente";

const p1: Paciente = {
  nombre: "Toby",
  edad: 5,
  raza: "Poodle"
};

const miRol: RolVete = "Doc";

console.log(`${p1.nombre} atendido por ${miRol}`);
