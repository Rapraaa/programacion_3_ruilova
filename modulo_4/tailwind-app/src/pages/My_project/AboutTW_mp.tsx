export default function AboutTW_mp() {
  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h1 className="text-2xl font-extrabold text-white mb-6">Sobre la clinica</h1>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">-</span> Dos consultorios y un quirofano
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">-</span> Laboratorio propio y rayos X
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">-</span> Hospitalizacion con monitoreo
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">-</span> Emergencias las 24 horas
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
