interface UserProfileCardProps {
  nombre: string;
  email: string;
  rol: "veterinario" | "auxiliar" | "recepcion";
  deTurno: boolean;
  especialidades: string[];
  bio?: string;
}

export default function UserProfileCard_mp({
  nombre,
  email,
  rol,
  deTurno,
  especialidades,
  bio,
}: UserProfileCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 20,
        marginBottom: 16,
        maxWidth: 400,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0 }}>{nombre}</h2>
        <span
          style={{
            backgroundColor: deTurno ? "#d4edda" : "#f8d7da",
            color: deTurno ? "#155724" : "#721c24",
            padding: "2px 10px",
            borderRadius: 12,
            fontSize: 13,
          }}
        >
          {deTurno ? "De turno" : "Fuera de turno"}
        </span>
      </div>

      <p style={{ margin: "8px 0 4px", color: "#555" }}>{email}</p>
      <p style={{ margin: "0 0 12px", fontSize: 13, color: "#888" }}>
        Rol: <strong>{rol}</strong>
      </p>

      {bio && <p style={{ fontStyle: "italic", color: "#444" }}>{bio}</p>}

      <ul style={{ paddingLeft: 18, margin: 0 }}>
        {especialidades.map((especialidad) => (
          <li key={especialidad} style={{ fontSize: 14 }}>
            {especialidad}
          </li>
        ))}
      </ul>
    </div>
  );
}
