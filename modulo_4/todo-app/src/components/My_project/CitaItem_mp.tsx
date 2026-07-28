import type { Cita } from "../../types_mp";

interface CitaItemProps {
  cita: Cita;
  onAtender: (id: string) => void;
  onEliminar: (id: string) => void;
}

export function CitaItem_mp({ cita, onAtender, onEliminar }: CitaItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={cita.atendida}
        onChange={() => onAtender(cita.id)}
        aria-label={`Marcar "${cita.mascota}"`}
      />
      <span>{cita.mascota}</span>
      <button onClick={() => onEliminar(cita.id)}>Eliminar</button>
    </li>
  );
}
