// src/components/StyledComponentsDemo.tsx

import styled from "styled-components";

// Props transient con prefijo $ — no pasan al DOM en v6
// Debe empeezar en mayuscula
interface BtnProps {
  $variant?: "primary" | "outline";
}
const Bigtitulo = styled.h1`
  color: red;
  font-weight: 1800;
`;
const Card = styled.div`
  border: 1px solid var(--border);
  background: var(--card);
  border-radius: 10px;
  padding: 16px;
`;

const Title = styled.h3`
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

export default function StyledComponentsDemo() {
  return (
    <Card>
      <Bigtitulo>Titulo grande</Bigtitulo>
      <Title>Styled-components v6</Title>
      <p style={{ margin: "0 0 12px", color: "var(--muted)" }}>
        CSS-in-JS con scope automático. Props transient con prefijo{" "}
        <code>$</code>
        en v6 para no contaminar el DOM.
      </p>
      <Parrafo>Texto de ejemplo aaaaaa</Parrafo>
      <div style={{ display: "flex", gap: 8 }}>
        <Btn>Primary</Btn>
        <Btn $variant="outline">Outline</Btn>
      </div>
    </Card>
  );
}
