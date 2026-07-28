import ServicioCatalogList_mp, {
  type Servicio,
} from "./components/My_project/ServicioCatalogList_mp";

const catalogo: Servicio[] = [
  { id: 1, nombre: "Consulta general", precio: 20, categoria: "consulta" },
  { id: 2, nombre: "Vacuna antirrabica", precio: 15, categoria: "prevencion" },
  { id: 3, nombre: "Desparasitacion", precio: 12, categoria: "prevencion" },
  { id: 4, nombre: "Esterilizacion", precio: 120, noDisponible: true, categoria: "cirugia" },
  { id: 5, nombre: "Baño medicado", precio: 25, categoria: "estetica" },
];

export default function Appservicios_mp() {
  return (
    <main
      style={{ maxWidth: 540, margin: "40px auto", fontFamily: "sans-serif" }}
    >
      <ServicioCatalogList_mp servicios={catalogo} title="Servicios de la clinica" />
    </main>
  );
}
