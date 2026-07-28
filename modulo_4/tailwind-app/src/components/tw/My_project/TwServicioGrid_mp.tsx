interface Servicio {
  id: number
  titulo: string
  tipo: 'Consulta' | 'Prevencion' | 'Cirugia'
  duracion: string
  etiqueta?: string
}

const SERVICIOS: Servicio[] = [
  { id: 1, titulo: 'Consulta general', tipo: 'Consulta', duracion: '30 min' },
  { id: 2, titulo: 'Consulta de emergencia', tipo: 'Consulta', duracion: '45 min', etiqueta: 'Urgente' },
  { id: 3, titulo: 'Vacuna antirrabica', tipo: 'Prevencion', duracion: '15 min' },
  { id: 4, titulo: 'Desparasitacion', tipo: 'Prevencion', duracion: '15 min', etiqueta: 'Popular' },
  { id: 5, titulo: 'Esterilizacion', tipo: 'Cirugia', duracion: '2 h' },
  { id: 6, titulo: 'Limpieza dental', tipo: 'Cirugia', duracion: '1 h', etiqueta: 'Nuevo' },
]

const TIPO: Record<Servicio['tipo'], string> = {
  Consulta: 'border-blue-400/30 bg-blue-400/10 text-blue-300',
  Prevencion: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  Cirugia: 'border-red-400/30 bg-red-400/10 text-red-300',
}

export default function TwServicioGrid_mp() {
  return (
    <section className="bg-slate-950 py-12">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-extrabold text-white mb-2">Nuestros servicios</h2>
        <p className="text-white/50 mb-8">Elige el servicio que necesita tu mascota.</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICIOS.map(servicio => (
            <div
              key={servicio.id}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition"
            >
              <div className="flex items-center justify-between">
                <span className={`rounded-full border px-3 py-0.5 text-xs font-semibold ${TIPO[servicio.tipo]}`}>
                  {servicio.tipo}
                </span>
                {servicio.etiqueta && (
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-0.5 text-xs text-white/50">
                    {servicio.etiqueta}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-white">{servicio.titulo}</h3>
              <p className="text-sm text-white/50">Duracion: {servicio.duracion}</p>
              <button className="mt-auto self-start rounded-xl border border-white/20 px-4 py-1.5 text-sm font-semibold text-white/70 hover:bg-white/10 transition">
                Agendar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
