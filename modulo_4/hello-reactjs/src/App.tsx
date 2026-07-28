import MascotasCatalogList, { type Mascota } from "./components/MascotasList";
//import ProductCard from "./components/ProductCard";

const catalog: Mascota[] = [
  { id: 1, name: "jaime", price: 89.99, tipo: "gato" },
  { id: 2, name: "pepe", price: 349.99, tipo: "perro" },
  { id: 3, name: "honsalo", price: 29.99, tipo: "perro" },
  { id: 4, name: "manchas", price: 0.99, edad: 5, tipo: "gato" },
  { id: 5, name: "skibidi dop dop", price: 1000, edad: 2, tipo: "perro" },
];

export default function App() {
  return (
    <main
      style={{ maxWidth: 540, margin: "40px auto", fontFamily: "sans-serif" }}
    >
      <MascotasCatalogList mascotas={catalog} title="Venta mascotas" />
    </main>
  );
}
