interface ServicioCardProps {
  titulo: string;
  descripcion?: string;
  destacado?: boolean;
}

export default function ServicioCard_mp({
  titulo,
  descripcion = "Sin descripcion",
  destacado = false,
}: ServicioCardProps) {
  return (
    <div
      style={{
        border: destacado ? "2px solid #0f766e" : "1px solid #ccc",
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: destacado ? "#f0fdfa" : "#fff",
      }}
    >
      <h3 style={{ margin: "0 0 8px" }}>{titulo}</h3>
      <p style={{ margin: 0, color: "#555" }}>{descripcion}</p>
    </div>
  );
}
