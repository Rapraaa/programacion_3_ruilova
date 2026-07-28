interface HelloProps {
  nombre: string;
}

export function Hello_mp({ nombre }: HelloProps) {
  return <p>Bienvenido a la clinica, {nombre}</p>;
}
