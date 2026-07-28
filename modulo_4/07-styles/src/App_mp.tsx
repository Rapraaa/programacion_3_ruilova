import { ThemeProvider_mp } from "./theme/My_project/ThemeContext_mp";
import CssGlobalDemo_mp from "./components/My_project/CssGlobalDemo_mp";
import InlineStyleDemo_mp from "./components/My_project/InlineStyleDemo_mp";
import CssModuleDemo_mp from "./components/My_project/CssModuleDemo_mp";
import StyledComponentsDemo_mp from "./components/My_project/StyledComponentsDemo_mp";
import LiveStyleEditor_mp from "./components/My_project/LiveStyleEditor_mp";
import HoverDemo_mp from "./components/My_project/HoverDemo_mp";
import ThemePanel_mp from "./components/My_project/ThemePanel_mp";
import "./theme/My_project/theme_mp.css";

const PASO = 1;

export default function App_mp() {
  const content =
    PASO === 1 ? (
      <CssGlobalDemo_mp />
    ) : PASO === 2 ? (
      <InlineStyleDemo_mp />
    ) : PASO === 3 ? (
      <CssModuleDemo_mp />
    ) : PASO === 4 ? (
      <StyledComponentsDemo_mp />
    ) : PASO === 5 ? (
      <LiveStyleEditor_mp />
    ) : PASO === 6 ? (
      <HoverDemo_mp />
    ) : PASO === 7 ? (
      <ThemePanel_mp />
    ) : (
      <p style={{ color: "#e00" }}>Paso {PASO}: crea el componente primero</p>
    );

  return (
    <ThemeProvider_mp>
      <main style={{ maxWidth: 640, margin: "0 auto", padding: "32px 16px" }}>
        <h2>Clinica Veterinaria UTE</h2>
        {content}
      </main>
    </ThemeProvider_mp>
  );
}
