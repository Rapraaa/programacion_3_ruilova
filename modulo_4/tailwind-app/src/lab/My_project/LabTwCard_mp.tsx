interface MascotaCardProps {
  nombre: string
  estado: 'Sana' | 'En control' | 'Internada'
  peso: string
  etiqueta?: string
}

const ESTADO_COLORS: Record<MascotaCardProps['estado'], string> = {
  Sana: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  'En control': 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  Internada: 'border-red-400/30 bg-red-400/10 text-red-300',
}

function MascotaCard_mp({ nombre, estado, peso, etiqueta }: MascotaCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition">
      <div className="flex items-center justify-between">
        <span className={`inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${ESTADO_COLORS[estado]}`}>
          {estado}
        </span>
        {etiqueta && (
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-0.5 text-xs text-white/60">
            {etiqueta}
          </span>
        )}
      </div>
      <h3 className="font-bold text-white">{nombre}</h3>
      <p className="text-sm text-white/60">Peso: {peso}</p>
      <button className="mt-auto self-start rounded-xl border border-white/20 px-4 py-1.5 text-sm font-semibold text-white/80 hover:bg-white/10 transition">
        Ver ficha
      </button>
    </div>
  )
}

export default function LabTwCard_mp() {
  const mascotas: MascotaCardProps[] = [
    { nombre: 'Rex', estado: 'Internada', peso: '24.5 kg', etiqueta: 'Cirugia' },
    { nombre: 'Michi', estado: 'En control', peso: '4.2 kg', etiqueta: 'Vacuna' },
    { nombre: 'Lola', estado: 'Sana', peso: '1.8 kg' },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h2 className="text-xl font-extrabold mb-1">LAB: Fichas de pacientes</h2>
      <p className="text-white/60 mb-6 text-sm">Cards tipadas con variante de estado.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
        {mascotas.map(m => <MascotaCard_mp key={m.nombre} {...m} />)}
      </div>
    </main>
  )
}
