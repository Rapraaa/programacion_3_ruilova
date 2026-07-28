import type { CSSProperties } from "react";

export default function InlineStyleDemo_mp() {
  const ficha: CSSProperties = {
    border: "1px solid var(--border)",
    background: "var(--card)",
    borderRadius: 10,
    padding: 16,
  };

  const titulo: CSSProperties = {
    margin: "0 0 8px 0",
    color: "var(--accent)",
    fontWeight: 800,
  };

  const alerta: CSSProperties = {
    marginTop: 14,
    padding: 12,
    background: "#fee2e2",
    color: "#991b1b",
    borderRadius: 8,
  };

  return (
    <div style={ficha}>
      <h3 style={titulo}>Ficha de Rex</h3>
      <p style={{ margin: 0, color: "var(--muted)" }}>
        Perro labrador de 4 años, 24.5 kg, control de vacunas al dia.
      </p>
      <div style={alerta}>
        Alergico a la penicilina, revisar antes de recetar.
      </div>
    </div>
  );
}
