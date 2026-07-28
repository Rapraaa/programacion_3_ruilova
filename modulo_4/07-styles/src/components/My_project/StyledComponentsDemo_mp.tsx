import styled from "styled-components";

interface BtnProps {
  $variant?: "primary" | "outline";
}

const Ficha = styled.div`
  border: 1px solid var(--border);
  background: var(--card);
  border-radius: 10px;
  padding: 16px;
`;

const Titulo = styled.h3`
  margin: 0 0 8px 0;
  color: var(--accent);
  font-weight: 800;
`;

const Parrafo = styled.p`
  color: var(--muted);
  margin: 0 0 12px;
`;

const Btn = styled.button<BtnProps>`
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  border: 1px solid var(--accent);
  background: ${(p) => (p.$variant === "outline" ? "transparent" : "var(--accent)")};
  color: ${(p) => (p.$variant === "outline" ? "var(--accent)" : "white")};
  transition: filter 0.15s;

  &:hover {
    filter: brightness(1.1);
  }
`;

export default function StyledComponentsDemo_mp() {
  return (
    <Ficha>
      <Titulo>Consulta de Michi</Titulo>
      <Parrafo>
        Gato persa de 3 años que viene por control de vacunas.
      </Parrafo>
      <div style={{ display: "flex", gap: 8 }}>
        <Btn>Atender</Btn>
        <Btn $variant="outline">Reagendar</Btn>
      </div>
    </Ficha>
  );
}
