import StatusBadge_mp from "./StatusBadge_mp";

type EstadoPaciente = "sana" | "control" | "internada" | "urgencia";

interface MiniProfileCardProps {
  nombre: string;
  especie: string;
  raza?: string;
  estado: EstadoPaciente;
  anioNacimiento: number;
}

export default function MiniProfileCard_mp({
  nombre,
  especie,
  raza,
  estado,
  anioNacimiento,
}: MiniProfileCardProps) {
  const inicial = nombre.charAt(0).toUpperCase();
  const edad = new Date().getFullYear() - anioNacimiento;

  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 10,
        padding: 16,
        maxWidth: 280,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "#0f766e",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 16,
            flexShrink: 0,
          }}
        >
          {inicial}
        </div>
        <div>
          <p style={{ margin: 0, fontWeight: 600, fontSize: 15 }}>{nombre}</p>
          <p style={{ margin: 0, fontSize: 13, color: "#6b7280" }}>{especie}</p>
        </div>
      </div>

      {raza && (
        <p style={{ margin: 0, fontSize: 13, color: "#9ca3af" }}>Raza: {raza}</p>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <StatusBadge_mp estado={estado} />
        <span style={{ fontSize: 12, color: "#9ca3af" }}>
          {edad === 0 ? "Cachorro" : `${edad} año${edad > 1 ? "s" : ""}`}
        </span>
      </div>
    </div>
  );
}
