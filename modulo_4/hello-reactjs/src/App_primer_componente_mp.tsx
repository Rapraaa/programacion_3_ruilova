const PASO = 1;

function PrimerComponente_mp() {
  return (
    <main
      style={{ maxWidth: 480, margin: "40px auto", fontFamily: "sans-serif" }}
    >
      <h1 style={{ lineHeight: 1.1 }}>Bienvenido a la Clinica Veterinaria UTE</h1>
      <p>Aqui vamos a registrar mascotas, dueños y consultas.</p>
    </main>
  );
}

function SegundoComponente_mp() {
  return (
    <main
      style={{ maxWidth: 480, margin: "40px auto", fontFamily: "sans-serif" }}
    >
      <h1 style={{ lineHeight: 1.1 }}>Horario de atencion</h1>
      <p>Lunes a sabado de 08:00 a 18:00, emergencias las 24 horas.</p>
    </main>
  );
}

export default function App_primer_componente_mp() {
  const content = PASO === 1 ? <PrimerComponente_mp /> : <SegundoComponente_mp />;

  return content;
}
