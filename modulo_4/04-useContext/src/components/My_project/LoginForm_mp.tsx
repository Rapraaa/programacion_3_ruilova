import { useState } from "react";
import { useAuth_mp } from "../../contexts/My_project/AuthContext_mp";

export default function LoginForm_mp() {
  const { state, login } = useAuth_mp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await login(email, password);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        maxWidth: 300,
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo del veterinario"
        disabled={state.cargando}
        style={inputStyle}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        disabled={state.cargando}
        style={inputStyle}
      />

      {state.error && (
        <p style={{ margin: 0, fontSize: 13, color: "#ef4444" }}>
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={state.cargando || !email || !password}
        style={{
          padding: "10px",
          background: state.cargando ? "#99f6e4" : "#0f766e",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: state.cargando ? "not-allowed" : "pointer",
          fontWeight: 500,
        }}
      >
        {state.cargando ? "Entrando..." : "Entrar al sistema"}
      </button>

      <p style={{ margin: 0, fontSize: 12, color: "#9ca3af" }}>
        Prueba con error@vete.com para ver el manejo de errores
      </p>
    </form>
  );
}

const inputStyle = {
  padding: "8px 12px",
  border: "1px solid #d1d5db",
  borderRadius: 6,
  fontSize: 14,
};
