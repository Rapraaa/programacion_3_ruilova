export default function TwHero_mp() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 mb-4">
          Atencion 24/7
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Cuidamos a tu mascota<br />
          <span className="text-emerald-400">como de la familia</span>
        </h1>
        <p className="text-white/60 text-lg max-w-xl mb-8">
          Consultas, cirugias, vacunacion y peluqueria con veterinarios
          titulados y equipos propios.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition">
            Agendar cita
          </button>
          <button className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white/80 hover:bg-white/10 transition">
            Ver servicios
          </button>
        </div>
      </div>
    </section>
  )
}
