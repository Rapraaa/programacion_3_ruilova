import WelcomeBanner_mp from "./components/My_project/WelcomeBanner_mp";
import UserGreeting_mp from "./components/My_project/UserGreeting_mp";
import CurrentDateDisplay_mp from "./components/My_project/CurrentDateDisplay_mp";
import ColoredBox_mp from "./components/My_project/ColoredBox_mp";
import ConditionalGreeting_mp from "./components/My_project/ConditionalGreeting_mp";
import MascotaList_mp from "./components/My_project/MascotaList_mp";
import PriceTag_mp from "./components/My_project/PriceTag_mp";
import StatusBadge_mp from "./components/My_project/StatusBadge_mp";
import MiniProfileCard_mp from "./components/My_project/MiniProfileCard_mp";
import SimpleInfoTable_mp from "./components/My_project/SimpleInfoTable_mp";
import JaulasTable_mp from "./components/My_project/Jaulas_mp";
import ServicioCard_mp from "./components/My_project/ServicioCard_mp";
import ServicioCatalogList_mp from "./components/My_project/ServicioCatalogList_mp";
import UserProfileCard_mp from "./components/My_project/UserProfileCard_mp";
import DigitalCounter_mp from "./components/My_project/DigitalCounter_mp";
import UserProfileForm_mp from "./components/My_project/UserProfileForm_mp";

const PASO = 1;

const mascotas = [
  { nombre: "Rex", especie: "Perro", peso: 24.5, internada: true },
  { nombre: "Michi", especie: "Gato", peso: 4.2 },
  { nombre: "Lola", especie: "Conejo", peso: 1.8 },
  { nombre: "Toby", especie: "Perro", peso: 18.3 },
  { nombre: "Nina", especie: "Gato", peso: 3.9 },
];

const catalogo = [
  { id: 1, nombre: "Consulta general", precio: 20 },
  { id: 2, nombre: "Vacuna antirrabica", precio: 15 },
  { id: 3, nombre: "Esterilizacion", precio: 120, noDisponible: true },
  { id: 4, nombre: "Baño medicado", precio: 25 },
];

export default function App_mp() {
  const content =
    PASO === 1 ? (
      <WelcomeBanner_mp />
    ) : PASO === 2 ? (
      <UserGreeting_mp name="Rahi Ruilova" mascota="Rex" />
    ) : PASO === 3 ? (
      <CurrentDateDisplay_mp />
    ) : PASO === 4 ? (
      <div style={{ display: "flex", gap: 12 }}>
        <ColoredBox_mp color="#22c55e" label="Jaula libre" width={120} height={40} />
        <ColoredBox_mp
          color="#f59e0b"
          label="En observacion"
          onClick={() => alert("Jaula 2: Michi en observacion")}
        />
        <ColoredBox_mp color="#ef4444" label="Aislamiento" borderRadius={50} />
      </div>
    ) : PASO === 5 ? (
      <ConditionalGreeting_mp
        clinicaAbierta={true}
        dueno="Rahi Ruilova"
        turno="tarde"
      />
    ) : PASO === 6 ? (
      <MascotaList_mp mascotas={mascotas} title="Pacientes del dia" />
    ) : PASO === 7 ? (
      <div style={{ display: "flex", gap: 24, alignItems: "flex-end" }}>
        <PriceTag_mp monto={120} moneda="USD" />
        <PriceTag_mp monto={120} moneda="USD" descuento={20} />
      </div>
    ) : PASO === 8 ? (
      <div style={{ display: "flex", gap: 8 }}>
        <StatusBadge_mp estado="sana" />
        <StatusBadge_mp estado="control" />
        <StatusBadge_mp estado="internada" />
        <StatusBadge_mp estado="urgencia" />
      </div>
    ) : PASO === 9 ? (
      <MiniProfileCard_mp
        nombre="Rex"
        especie="Perro"
        raza="Labrador"
        estado="internada"
        anioNacimiento={2021}
      />
    ) : PASO === 10 ? (
      <SimpleInfoTable_mp
        title="Resumen de la consulta"
        rows={[
          { label: "Consulta", value: "$20.00" },
          { label: "Medicamentos", value: "$12.50" },
          { label: "Total", value: "$32.50", highlight: true },
        ]}
      />
    ) : PASO === 11 ? (
      <JaulasTable_mp
        title="Jaulas ocupadas"
        rows={[
          { jaula: "Jaula 1", ocupante: "Rex", dias: 3, value: "$45.00" },
          { jaula: "Jaula 2", ocupante: "Michi", dias: 1, value: "$15.00" },
          {
            jaula: "Jaula 3",
            ocupante: "Toby",
            dias: 5,
            value: "$75.00",
            highlight: true,
          },
        ]}
      />
    ) : PASO === 12 ? (
      <ServicioCard_mp
        titulo="Esterilizacion"
        descripcion="Cirugia con anestesia y control post operatorio"
        destacado
      />
    ) : PASO === 13 ? (
      <ServicioCatalogList_mp servicios={catalogo} title="Servicios disponibles" />
    ) : PASO === 14 ? (
      <UserProfileCard_mp
        nombre="Dr. Rahi Ruilova"
        email="rahi@veterinariaute.com"
        rol="veterinario"
        activo={true}
        especialidades={["Cirugia", "Traumatologia", "Animales exoticos"]}
        bio="Medico veterinario con 5 años de experiencia en clinica de pequeños animales."
      />
    ) : PASO === 15 ? (
      <DigitalCounter_mp />
    ) : PASO === 16 ? (
      <UserProfileForm_mp />
    ) : (
      <p style={{ color: "#e00" }}>Paso {PASO}: crea el componente primero</p>
    );

  return (
    <main
      style={{
        maxWidth: 540,
        margin: "40px auto",
        fontFamily: "sans-serif",
        padding: "0 16px",
      }}
    >
      {content}
    </main>
  );
}
