import PacientesList_mp, {
  type Paciente,
} from "./components/My_project/PacientesList_mp";

const pacientes: Paciente[] = [
  { id: 1, nombre: "Rex", especie: "Perro", edad: 4, peso: 24.5 },
  { id: 2, nombre: "Michi", especie: "Gato", edad: 3, peso: 4.2 },
  { id: 3, nombre: "Lola", especie: "Conejo", peso: 1.8 },
  { id: 4, nombre: "Toby", especie: "Perro", edad: 6, peso: 18.3 },
  { id: 5, nombre: "Nina", especie: "Gato" },
];

export default function App_mp() {
  return (
    <main
      style={{ maxWidth: 540, margin: "40px auto", fontFamily: "sans-serif" }}
    >
      <PacientesList_mp pacientes={pacientes} title="Pacientes de la clinica" />
    </main>
  );
}
