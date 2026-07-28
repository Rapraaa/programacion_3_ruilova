import BasicCounter_mp from "./components/My_project/BasicCounter_mp";
import RegistrationForm_mp from "./components/My_project/RegistrationForm_mp";
import ShoppingCart_mp from "./components/My_project/ShoppingCart_mp";

const PASO = 1;

export default function App_mp() {
  const content =
    PASO === 1 ? (
      <BasicCounter_mp />
    ) : PASO === 2 ? (
      <RegistrationForm_mp />
    ) : PASO === 3 ? (
      <ShoppingCart_mp />
    ) : (
      <p style={{ color: "#e00" }}>Paso {PASO}: crea el componente primero</p>
    );

  return (
    <main
      style={{
        maxWidth: 600,
        margin: "40px auto",
        fontFamily: "sans-serif",
        padding: "0 16px",
      }}
    >
      <h2>Clinica Veterinaria UTE</h2>
      {content}
    </main>
  );
}
