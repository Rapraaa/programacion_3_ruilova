import { useState } from "react";

interface FichaMascota {
  nombre: string;
  dueno: string;
  peso: number;
}

export default function UserProfileForm_mp() {
  const [ficha, setFicha] = useState<FichaMascota>({
    nombre: "",
    dueno: "",
    peso: 0,
  });

  function handleChange(field: keyof FichaMascota, value: string | number) {
    setFicha((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        maxWidth: 320,
      }}
    >
      <input
        placeholder="Nombre de la mascota"
        value={ficha.nombre}
        onChange={(e) => handleChange("nombre", e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Nombre del dueño"
        value={ficha.dueno}
        onChange={(e) => handleChange("dueno", e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Peso en kg"
        type="number"
        value={ficha.peso}
        onChange={(e) => handleChange("peso", Number(e.target.value))}
        style={inputStyle}
      />

      <div style={{ marginTop: 8, padding: 12, background: "#f5f5f5", borderRadius: 6 }}>
        <p style={{ margin: 0, fontSize: 13 }}>
          <strong>{ficha.nombre || "---"}</strong> - dueño: {ficha.dueno || "---"} -{" "}
          {ficha.peso || "---"} kg
        </p>
      </div>
    </form>
  );
}

const inputStyle = {
  padding: "8px 12px",
  border: "1px solid #ddd",
  borderRadius: 6,
  fontSize: 14,
};
