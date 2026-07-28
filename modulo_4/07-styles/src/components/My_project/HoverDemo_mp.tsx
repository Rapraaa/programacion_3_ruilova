import { useHover_mp } from "../../hooks/My_project/useHover_mp";

export default function HoverDemo_mp() {
  const btnAtender = useHover_mp(
    {
      padding: "10px 20px",
      background: "#0f766e",
      color: "white",
      border: "none",
      borderRadius: 8,
      cursor: "pointer",
      fontWeight: 600,
      transition: "all 0.2s",
    },
    {
      background: "#115e59",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(15,118,110,0.35)",
    },
  );

  const btnCancelar = useHover_mp(
    {
      padding: "10px 20px",
      background: "transparent",
      color: "var(--accent)",
      border: "1px solid var(--accent)",
      borderRadius: 8,
      cursor: "pointer",
      fontWeight: 600,
      transition: "all 0.2s",
    },
    { background: "var(--accent)", color: "white" },
  );

  const ficha = useHover_mp(
    {
      border: "1px solid var(--border)",
      background: "var(--card)",
      borderRadius: 10,
      padding: 16,
      transition: "all 0.2s",
      cursor: "default",
    },
    {
      borderColor: "var(--accent)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    },
  );

  return (
    <div {...ficha.hoverProps} style={ficha.style}>
      <h3 style={{ margin: "0 0 12px", color: "var(--accent)", fontWeight: 800 }}>
        Cita de Lola - 10:30
      </h3>
      <p style={{ margin: "0 0 14px", color: "var(--muted)", fontSize: 14 }}>
        Pasa el cursor por la tarjeta y por los botones para ver el hover que
        devuelve el hook.
      </p>
      <div style={{ display: "flex", gap: 10 }}>
        <button {...btnAtender.hoverProps} style={btnAtender.style}>
          Atender
        </button>
        <button {...btnCancelar.hoverProps} style={btnCancelar.style}>
          Cancelar cita
        </button>
      </div>
    </div>
  );
}
