import type { Cita } from "../../types_mp";
import { CitaItem_mp } from "./CitaItem_mp";

interface CitaListProps {
  citas: Cita[];
  onAtender: (id: string) => void;
  onEliminar: (id: string) => void;
}

export function CitaList_mp({ citas, onAtender, onEliminar }: CitaListProps) {
  if (citas.length === 0) {
    return <p>No hay citas pendientes</p>;
  }

  return (
    <ul aria-label="Lista de citas">
      {citas.map((cita) => (
        <CitaItem_mp
          key={cita.id}
          cita={cita}
          onAtender={onAtender}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  );
}
