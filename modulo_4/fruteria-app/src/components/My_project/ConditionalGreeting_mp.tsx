type Turno = "manana" | "tarde" | "noche";

interface ConditionalGreetingProps {
  clinicaAbierta: boolean;
  dueno?: string;
  turno?: Turno;
}

export default function ConditionalGreeting_mp({
  clinicaAbierta,
  dueno = "visitante",
  turno = "manana",
}: ConditionalGreetingProps) {
  const saludos: Record<Turno, string> = {
    manana: "Buenos dias",
    tarde: "Buenas tardes",
    noche: "Buenas noches",
  };

  if (!clinicaAbierta) {
    return (
      <p style={{ color: "#e00" }}>
        La clinica esta cerrada, para emergencias llame al 099 999 9999.
      </p>
    );
  }

  return (
    <p style={{ color: "#333" }}>
      {saludos[turno]}, <strong>{dueno}</strong>. Pase con su mascota al
      consultorio.
    </p>
  );
}
