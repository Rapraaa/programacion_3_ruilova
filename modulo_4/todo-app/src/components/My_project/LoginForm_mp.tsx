import { useState } from "react";

interface LoginFormProps {
  onLogin: (usuario: string, password: string) => void;
}

export function LoginForm_mp({ onLogin }: LoginFormProps) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onLogin(usuario, password);
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Formulario de acceso">
      <label htmlFor="usuario">Usuario</label>
      <input
        id="usuario"
        value={usuario}
        placeholder="Usuario del veterinario"
        onChange={(e) => setUsuario(e.target.value)}
      />

      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        type="password"
        value={password}
        placeholder="Tu contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Entrar</button>
    </form>
  );
}
