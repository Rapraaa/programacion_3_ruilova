import { useTheme_mp } from "../../theme/My_project/ThemeContext_mp";

export default function ThemePanel_mp() {
  const { theme, toggleTheme } = useTheme_mp();

  return (
    <div
      style={{
        border: "1px solid var(--border)",
        background: "var(--card)",
        borderRadius: 10,
        padding: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <h3 style={{ margin: 0, color: "var(--accent)", fontWeight: 800 }}>
          Tema del sistema de la clinica
        </h3>
        <button
          onClick={toggleTheme}
          style={{
            padding: "6px 14px",
            border: "1px solid var(--border)",
            borderRadius: 8,
            background: "var(--bg)",
            color: "var(--text)",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 13,
          }}
        >
          {theme === "light" ? "Modo oscuro" : "Modo claro"}
        </button>
      </div>

      <p style={{ margin: "0 0 12px", color: "var(--muted)", fontSize: 14 }}>
        El modo oscuro sirve para las guardias de la noche, todo se cambia con
        las variables css del contenedor raiz.
      </p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {["--bg", "--card", "--border", "--text", "--accent", "--muted"].map((v) => (
          <div
            key={v}
            style={{
              padding: "4px 10px",
              background: `var(${v})`,
              border: "1px solid var(--border)",
              borderRadius: 6,
              fontSize: 12,
              color: v === "--bg" || v === "--card" ? "var(--text)" : "var(--bg)",
            }}
          >
            {v}
          </div>
        ))}
      </div>
    </div>
  );
}
