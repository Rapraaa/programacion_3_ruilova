import { createContext, useContext, useReducer } from "react";

interface Veterinario {
  id: number;
  nombre: string;
  email: string;
  rol: "veterinario" | "recepcion";
}

interface AuthState {
  veterinario: Veterinario | null;
  cargando: boolean;
  error: string | null;
}

type AuthAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; veterinario: Veterinario }
  | { type: "LOGIN_ERROR"; mensaje: string }
  | { type: "LOGOUT" };

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, cargando: true, error: null };
    case "LOGIN_SUCCESS":
      return { veterinario: action.veterinario, cargando: false, error: null };
    case "LOGIN_ERROR":
      return { veterinario: null, cargando: false, error: action.mensaje };
    case "LOGOUT":
      return { veterinario: null, cargando: false, error: null };
  }
}

const INITIAL_STATE: AuthState = {
  veterinario: null,
  cargando: false,
  error: null,
};

interface AuthContextValue {
  state: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider_mp({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  async function login(email: string, _password: string) {
    dispatch({ type: "LOGIN_START" });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email === "error@vete.com") {
      dispatch({ type: "LOGIN_ERROR", mensaje: "Credenciales incorrectas" });
      return;
    }

    dispatch({
      type: "LOGIN_SUCCESS",
      veterinario: {
        id: 1,
        nombre: "Rahi Ruilova",
        email,
        rol: "veterinario",
      },
    });
  }

  function logout() {
    dispatch({ type: "LOGOUT" });
  }

  return <AuthContext value={{ state, login, logout }}>{children}</AuthContext>;
}

export function useAuth_mp(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth_mp debe usarse dentro de <AuthProvider_mp>");
  return context;
}
