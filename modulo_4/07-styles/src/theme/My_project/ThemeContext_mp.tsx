import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider_mp({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      <div
        data-theme={theme}
        style={{
          background: "var(--bg)",
          color: "var(--text)",
          minHeight: "100vh",
          transition: "background 0.25s, color 0.25s",
        }}
      >
        {children}
      </div>
    </ThemeContext>
  );
}

export function useTheme_mp(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme_mp debe usarse dentro de ThemeProvider_mp");
  return ctx;
}
