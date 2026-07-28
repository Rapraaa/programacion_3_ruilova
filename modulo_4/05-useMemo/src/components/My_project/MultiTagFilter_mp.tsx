import { useState, useMemo } from "react";

interface Paciente {
  id: number;
  nombre: string;
  tags: string[];
}

const PACIENTES: Paciente[] = [
  { id: 1, nombre: "Rex", tags: ["perro", "urgente", "cirugia"] },
  { id: 2, nombre: "Michi", tags: ["gato", "vacuna"] },
  { id: 3, nombre: "Lola", tags: ["conejo", "control"] },
  { id: 4, nombre: "Toby", tags: ["perro", "vacuna", "control"] },
  { id: 5, nombre: "Nina", tags: ["gato", "urgente"] },
  { id: 6, nombre: "Kira", tags: ["perro", "cirugia"] },
];

export default function MultiTagFilter_mp() {
  const [seleccionados, setSeleccionados] = useState<string[]>([]);

  const todosLosTags = useMemo(
    () => [...new Set(PACIENTES.flatMap((p) => p.tags))].sort(),
    [],
  );

  const filtrados = useMemo(() => {
    if (seleccionados.length === 0) return PACIENTES;
    return PACIENTES.filter((p) =>
      seleccionados.every((tag) => p.tags.includes(tag)),
    );
  }, [seleccionados]);

  const conteoPorTag = useMemo(() => {
    const conteo: Record<string, number> = {};
    todosLosTags.forEach((tag) => {
      conteo[tag] = filtrados.filter((p) => p.tags.includes(tag)).length;
    });
    return conteo;
  }, [filtrados, todosLosTags]);

  function toggleTag(tag: string) {
    setSeleccionados((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  }

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 520, margin: "0 auto", padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
        Pacientes por etiqueta
      </h2>
      <p style={{ color: "#666", fontSize: 14, marginBottom: 20 }}>
        El filtro es tipo AND, la mascota debe tener todas las etiquetas.
      </p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        {todosLosTags.map((tag) => {
          const activo = seleccionados.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              style={{
                padding: "6px 12px",
                borderRadius: 16,
                border: "1px solid",
                borderColor: activo ? "#0f766e" : "#d1d5db",
                background: activo ? "#0f766e" : "#fff",
                color: activo ? "#fff" : "#374151",
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              {tag} ({conteoPorTag[tag]})
            </button>
          );
        })}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtrados.map((paciente) => (
          <div
            key={paciente.id}
            style={{
              padding: "10px 14px",
              background: "#fafafa",
              border: "1px solid #e5e5e5",
              borderRadius: 8,
            }}
          >
            <p style={{ margin: 0, fontWeight: 500 }}>{paciente.nombre}</p>
            <p style={{ margin: 0, fontSize: 12, color: "#888" }}>
              {paciente.tags.join(", ")}
            </p>
          </div>
        ))}

        {filtrados.length === 0 && (
          <p style={{ color: "#9ca3af" }}>
            Ninguna mascota cumple con todas esas etiquetas.
          </p>
        )}
      </div>
    </div>
  );
}
