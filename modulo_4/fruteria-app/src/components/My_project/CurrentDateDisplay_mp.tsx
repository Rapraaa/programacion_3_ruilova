export default function CurrentDateDisplay_mp() {
  const ahora = new Date();

  const fecha = ahora.toLocaleDateString("es-EC", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const hora = ahora.toLocaleTimeString("es-EC", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div style={{ fontSize: 14, color: "#555" }}>
      <span>Jornada del </span>
      <span style={{ textTransform: "capitalize" }}>{fecha}</span>
      <span style={{ marginLeft: 12, color: "#999" }}>{hora}</span>
    </div>
  );
}
