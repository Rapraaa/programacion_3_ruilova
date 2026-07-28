import { useState } from "react";
import DigitalCounter_mp from "./components/My_project/DigitalCounter_mp";
import SafeCounter_mp from "./components/My_project/SafeCounter_mp";
import UserProfileForm_mp from "./components/My_project/UserProfileForm_mp";
import TaskManager_mp from "./components/My_project/TaskManager_mp";
import CatalogServicioItem_mp from "./components/My_project/CatalogServicioItem_mp";
import OrdenSummary_mp from "./components/My_project/OrdenSummary_mp";

const PASO = 5;

interface ServicioEnOrden {
  id: number;
  nombre: string;
  precio: number;
}

const catalogo = [
  { id: 1, nombre: "Consulta general", precio: 20 },
  { id: 2, nombre: "Vacuna antirrabica", precio: 15 },
  { id: 3, nombre: "Baño medicado", precio: 25 },
];

export default function App_mp() {
  const [orden, setOrden] = useState<ServicioEnOrden[]>([]);

  function handleAgregar(id: number, nombre: string, precio: number) {
    const yaEsta = orden.some((item) => item.id === id);
    if (yaEsta) return;
    setOrden((prev) => [...prev, { id, nombre, precio }]);
  }

  function handleVaciar() {
    setOrden([]);
  }

  const content =
    PASO === 1 ? (
      <DigitalCounter_mp label="Mascotas en sala de espera" step={1} />
    ) : PASO === 2 ? (
      <SafeCounter_mp />
    ) : PASO === 3 ? (
      <UserProfileForm_mp />
    ) : PASO === 4 ? (
      <TaskManager_mp />
    ) : PASO === 5 ? (
      <>
        <h1 style={{ fontSize: 22 }}>Servicios de la clinica</h1>
        <section>
          {catalogo.map((s) => (
            <CatalogServicioItem_mp
              key={s.id}
              id={s.id}
              nombre={s.nombre}
              precio={s.precio}
              onAgregar={handleAgregar}
            />
          ))}
        </section>
        <OrdenSummary_mp items={orden} onVaciar={handleVaciar} />
      </>
    ) : (
      <p style={{ color: "#e00" }}>Paso {PASO}: crea el componente primero</p>
    );

  return (
    <main
      style={{
        maxWidth: 480,
        margin: "40px auto",
        fontFamily: "sans-serif",
        padding: "0 16px",
      }}
    >
      {content}
    </main>
  );
}
