import { useTheme_mp } from "../../contexts/My_project/ThemeContext_mp";
import { useAuth_mp } from "../../contexts/My_project/AuthContext_mp";
import ThemeToggle_mp from "./ThemeToggle_mp";
import UserBadge_mp from "./UserBadge_mp";

export default function AppHeader_mp() {
  const { theme } = useTheme_mp();
  const { state: auth } = useAuth_mp();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        background: theme === "dark" ? "#111827" : "#fff",
        color: theme === "dark" ? "#f9fafb" : "#111827",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>
          Clinica Veterinaria UTE
        </h1>
        {auth.veterinario && (
          <p style={{ margin: 0, fontSize: 12, color: "#9ca3af" }}>
            Panel de {auth.veterinario.rol}
          </p>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <ThemeToggle_mp />
        <UserBadge_mp />
      </div>
    </header>
  );
}
