import { useReducer } from "react";

interface FichaState {
  mascota: string;
  especie: string;
  dueno: string;
  telefono: string;
  errors: Partial<Record<"mascota" | "especie" | "dueno" | "telefono", string>>;
  status: "idle" | "submitting" | "success";
}

type FichaAction =
  | {
      type: "SET_FIELD";
      field: keyof Pick<FichaState, "mascota" | "especie" | "dueno" | "telefono">;
      value: string;
    }
  | { type: "SET_ERRORS"; errors: FichaState["errors"] }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_SUCCESS" }
  | { type: "RESET" };

const INITIAL_STATE: FichaState = {
  mascota: "",
  especie: "",
  dueno: "",
  telefono: "",
  errors: {},
  status: "idle",
};

function fichaReducer(state: FichaState, action: FichaAction): FichaState {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: undefined },
      };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "SUBMIT_START":
      return { ...state, status: "submitting" };
    case "SUBMIT_SUCCESS":
      return { ...INITIAL_STATE, status: "success" };
    case "RESET":
      return INITIAL_STATE;
  }
}

export default function RegistrationForm_mp() {
  const [state, dispatch] = useReducer(fichaReducer, INITIAL_STATE);

  function validar(): boolean {
    const errors: FichaState["errors"] = {};
    if (!state.mascota.trim()) errors.mascota = "El nombre de la mascota es requerido";
    if (!state.especie.trim()) errors.especie = "La especie es requerida";
    if (!state.dueno.trim()) errors.dueno = "El nombre del dueño es requerido";
    if (state.telefono.length < 9) errors.telefono = "Telefono invalido";

    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors });
      return false;
    }
    return true;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validar()) return;

    dispatch({ type: "SUBMIT_START" });
    await new Promise((resolve) => setTimeout(resolve, 1200));
    dispatch({ type: "SUBMIT_SUCCESS" });
  }

  const guardando = state.status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 320 }}
    >
      {state.status === "success" && (
        <div style={{ padding: 12, background: "#dcfce7", borderRadius: 6, color: "#166534" }}>
          Ficha registrada en la clinica
        </div>
      )}

      <div>
        <input
          value={state.mascota}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field: "mascota", value: e.target.value })
          }
          placeholder="Nombre de la mascota"
          disabled={guardando}
          style={inputStyle(!!state.errors.mascota)}
        />
        {state.errors.mascota && <p style={errorStyle}>{state.errors.mascota}</p>}
      </div>

      <div>
        <input
          value={state.especie}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field: "especie", value: e.target.value })
          }
          placeholder="Especie (perro, gato...)"
          disabled={guardando}
          style={inputStyle(!!state.errors.especie)}
        />
        {state.errors.especie && <p style={errorStyle}>{state.errors.especie}</p>}
      </div>

      <div>
        <input
          value={state.dueno}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field: "dueno", value: e.target.value })
          }
          placeholder="Nombre del dueño"
          disabled={guardando}
          style={inputStyle(!!state.errors.dueno)}
        />
        {state.errors.dueno && <p style={errorStyle}>{state.errors.dueno}</p>}
      </div>

      <div>
        <input
          value={state.telefono}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field: "telefono", value: e.target.value })
          }
          placeholder="Telefono de contacto"
          disabled={guardando}
          style={inputStyle(!!state.errors.telefono)}
        />
        {state.errors.telefono && <p style={errorStyle}>{state.errors.telefono}</p>}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button
          type="submit"
          disabled={guardando}
          style={{
            flex: 1,
            padding: "10px",
            background: guardando ? "#99f6e4" : "#0f766e",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: guardando ? "not-allowed" : "pointer",
            fontWeight: 500,
          }}
        >
          {guardando ? "Registrando..." : "Registrar paciente"}
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "RESET" })}
          disabled={guardando}
          style={{
            padding: "10px 16px",
            background: "#f3f4f6",
            color: "#6b7280",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Limpiar
        </button>
      </div>
    </form>
  );
}

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    width: "100%",
    padding: "8px 12px",
    border: `1px solid ${hasError ? "#ef4444" : "#d1d5db"}`,
    borderRadius: 6,
    fontSize: 14,
    boxSizing: "border-box",
  };
}

const errorStyle: React.CSSProperties = {
  margin: "4px 0 0",
  fontSize: 12,
  color: "#ef4444",
};
