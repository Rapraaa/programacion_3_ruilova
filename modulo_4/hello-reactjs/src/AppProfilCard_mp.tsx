import UserProfileCard_mp from "./components/My_project/UserProfileCard_mp";

export default function AppProfilCard_mp() {
  return (
    <main
      style={{ maxWidth: 480, margin: "40px auto", fontFamily: "sans-serif" }}
    >
      <UserProfileCard_mp
        nombre="Dr. Rahi Ruilova"
        email="rahi@veterinariaute.com"
        rol="veterinario"
        deTurno={true}
        especialidades={["Cirugia", "Traumatologia"]}
        bio="Medico veterinario con 5 años de experiencia."
      />

      <UserProfileCard_mp
        nombre="Maria Lopez"
        email="maria@veterinariaute.com"
        rol="recepcion"
        deTurno={false}
        especialidades={["Agenda", "Facturacion"]}
      />
    </main>
  );
}
