import { useState } from 'react'

interface Mascota {
  id: number
  nombre: string
  especie: string
  peso: number
  internada: boolean
}

const MASCOTAS: Mascota[] = [
  { id: 1, nombre: 'Rex', especie: 'Perro', peso: 24.5, internada: true },
  { id: 2, nombre: 'Michi', especie: 'Gato', peso: 4.2, internada: false },
  { id: 3, nombre: 'Lola', especie: 'Conejo', peso: 1.8, internada: false },
  { id: 4, nombre: 'Toby', especie: 'Perro', peso: 18.3, internada: true },
  { id: 5, nombre: 'Nina', especie: 'Gato', peso: 3.9, internada: false },
]

export default function LabTwTable_mp() {
  const [busqueda, setBusqueda] = useState('')

  const filtradas = MASCOTAS.filter(m =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    m.especie.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h2 className="text-xl font-extrabold mb-1">LAB: Tabla de pacientes</h2>
      <p className="text-white/60 mb-4 text-sm">Tabla responsiva con busqueda en tiempo real.</p>

      <input
        className="mb-4 h-10 w-full max-w-xs rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-emerald-500/40"
        placeholder="Buscar mascota o especie..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
      />

      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="min-w-full text-sm">
          <thead className="bg-white/5 text-white/70">
            <tr>
              {['#', 'Nombre', 'Especie', 'Peso', 'Estado'].map(h => (
                <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtradas.map(m => (
              <tr key={m.id} className="border-t border-white/10 hover:bg-white/5 transition">
                <td className="px-4 py-3 text-white/50">{m.id}</td>
                <td className="px-4 py-3 font-semibold">{m.nombre}</td>
                <td className="px-4 py-3 text-white/70">{m.especie}</td>
                <td className="px-4 py-3 font-semibold">{m.peso.toFixed(2)} kg</td>
                <td className="px-4 py-3">
                  <span className={`inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${
                    m.internada
                      ? 'border-red-400/30 bg-red-400/10 text-red-300'
                      : 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                  }`}>
                    {m.internada ? 'Internada' : 'Alta'}
                  </span>
                </td>
              </tr>
            ))}
            {filtradas.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-white/40">
                  Sin resultados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  )
}
