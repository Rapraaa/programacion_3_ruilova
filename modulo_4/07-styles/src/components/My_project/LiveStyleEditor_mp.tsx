import { useStyles_mp } from "../../hooks/My_project/useStyles_mp";

export default function LiveStyleEditor_mp() {
  const { style, setColor, setSize, setBold, setBackgroundColor, reset } =
    useStyles_mp({
      color: "#134e4a",
      fontSize: 16,
      fontWeight: 400,
    });

  return (
    <div
      style={{
        border: "1px solid var(--border)",
        background: "var(--card)",
        borderRadius: 10,
        padding: 16,
      }}
    >
      <h3 style={{ margin: "0 0 12px", color: "var(--accent)", fontWeight: 800 }}>
        Editor del aviso para el dueño
      </h3>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
        <label style={labelStyle}>
          Color
          <input
            type="color"
            defaultValue="#134e4a"
            onChange={(e) => setColor(e.target.value)}
            style={{ width: 48, height: 32, border: "none", cursor: "pointer" }}
          />
        </label>

        <label style={labelStyle}>
          Fondo
          <input
            type="color"
            defaultValue="#ffffff"
            onChange={(e) => setBackgroundColor(e.target.value)}
            style={{ width: 48, height: 32, border: "none", cursor: "pointer" }}
          />
        </label>

        <label style={labelStyle}>
          Tamaño
          <input
            type="range"
            min={12}
            max={36}
            defaultValue={16}
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </label>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            color: "var(--muted)",
            cursor: "pointer",
          }}
        >
          <input type="checkbox" onChange={(e) => setBold(e.target.checked)} />
          Negrita
        </label>

        <button
          onClick={reset}
          style={{
            padding: "4px 12px",
            border: "1px solid var(--border)",
            borderRadius: 6,
            background: "transparent",
            color: "var(--muted)",
            cursor: "pointer",
            fontSize: 13,
            alignSelf: "flex-end",
          }}
        >
          Reset
        </button>
      </div>

      <div
        style={{
          padding: 12,
          border: "1px dashed var(--border)",
          borderRadius: 8,
          background: "var(--bg)",
        }}
      >
        <p style={{ margin: 0, ...style }}>
          Recuerde traer a su mascota en ayunas el dia de la cirugia.
        </p>
      </div>
    </div>
  );
}

const labelStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: 4,
  fontSize: 13,
  color: "var(--muted)",
};
