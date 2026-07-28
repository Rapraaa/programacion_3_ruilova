import { ThemeProvider_mp } from "./contexts/My_project/ThemeContext_mp";
import { AuthProvider_mp, useAuth_mp } from "./contexts/My_project/AuthContext_mp";
import AppHeader_mp from "./components/My_project/AppHeader_mp";
import LoginForm_mp from "./components/My_project/LoginForm_mp";
import ThemeToggle_mp from "./components/My_project/ThemeToggle_mp";
import UserBadge_mp from "./components/My_project/UserBadge_mp";

const PASO = 3;

function Contenido_mp() {
  const { state } = useAuth_mp();

  const content =
    PASO === 1 ? (
      <ThemeToggle_mp />
    ) : PASO === 2 ? (
      <UserBadge_mp />
    ) : PASO === 3 ? (
      <LoginForm_mp />
    ) : PASO === 4 ? (
      <AppHeader_mp />
    ) : (
      <p style={{ color: "#e00" }}>Paso {PASO}: crea el componente primero</p>
    );

  return (
    <main
      style={{
        maxWidth: 600,
        margin: "40px auto",
        fontFamily: "sans-serif",
        padding: "0 16px",
      }}
    >
      {PASO === 4 ? (
        content
      ) : (
        <>
          {state.veterinario && (
            <p style={{ marginBottom: 16, fontSize: 14, color: "#6b7280" }}>
              Sesion activa: <strong>{state.veterinario.nombre}</strong>
            </p>
          )}
          {content}
        </>
      )}
    </main>
  );
}

export default function App_mp() {
  return (
    <ThemeProvider_mp>
      <AuthProvider_mp>
        <Contenido_mp />
      </AuthProvider_mp>
    </ThemeProvider_mp>
  );
}
