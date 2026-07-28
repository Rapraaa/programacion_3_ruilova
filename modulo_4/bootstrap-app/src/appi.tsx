import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LabRbButtons from './lab/LabRbButtons'
import LabRbAlert from './lab/LabRbAlert'
import LabRbCard from './lab/LabRbCard'
import LabRbForm from './lab/LabRbForm'
import LabRbTable from './lab/LabRbTable'

// src/App.tsx

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  CssGlobalDemo        — clases globales y riesgo de colisión     │
// │  2  InlineStyleDemo      — objetos JS, sin :hover ni @media         │
// │  3  CssModuleDemo        — scope local, :hover con CSS Modules     │
// │  4  StyledComponentsDemo — CSS-in-JS con props transient ($)        │
// │  5  LiveStyleEditor      — hook useStyles para estilos dinámicos    │
// │  6  HoverDemo            — hook useHover para efectos hover         │
// │  7  ThemePanel           — Context + CSS variables para theming     │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 5;

export default function App() {
  const content =
    PASO === 1 ? (
      <LabRbButtons />
    ) :  PASO === 2 ? (
      <LabRbAlert />
    ) :  PASO === 3 ? (
      <LabRbCard />
    ) :  PASO === 4 ? (
      <LabRbForm />
    ) :  PASO === 5 ? (
      <LabRbTable />
    ) : /* PASO === 6 ? (
      <HoverDemo />
    ) : PASO === 7 ? (
      <ThemePanel />
    ) : (
    */<p style={{ color: "#e00" }}>Paso {PASO}: crea el componente primero</p>;
  //);

  return (
    <>
      <main style={{ maxWidth: 640, margin: "0 auto", padding: "32px 16px" }}>
        {content}
      </main>
    </>
  );
}
