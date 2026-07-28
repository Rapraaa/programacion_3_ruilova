import { useAuth_mp } from "../../contexts/My_project/AuthContext_mp";

export default function UserBadge_mp() {
  const { state, logout } = useAuth_mp();

  if (!state.veterinario) {
    return (
      <span style={{ fontSize: 13, color: "#9ca3af" }}>Sin sesion iniciada</span>
    );
  }

  const iniciales = state.veterinario.nombre
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: "50%",
          background: "#0f766e",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 13,
        }}
      >
        {iniciales}
      </div>
      <div>
        <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>
          {state.veterinario.nombre}
        </p>
        <p style={{ margin: 0, fontSize: 12, color: "#9ca3af" }}>
          {state.veterinario.rol}
        </p>
      </div>
      <button
        onClick={logout}
        style={{
          marginLeft: 8,
          padding: "4px 10px",
          background: "none",
          border: "1px solid #d1d5db",
          borderRadius: 6,
          cursor: "pointer",
          fontSize: 12,
          color: "#6b7280",
        }}
      >
        Salir
      </button>
    </div>
  );
}
