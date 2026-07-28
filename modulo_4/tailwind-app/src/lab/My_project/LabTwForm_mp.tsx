import { useState } from 'react'

interface FormValues {
  mascota: string
  email: string
  especie: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

export default function LabTwForm_mp() {
  const [values, setValues] = useState<FormValues>({ mascota: '', email: '', especie: 'perro' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [success, setSuccess] = useState(false)

  function validar(): boolean {
    const e: FormErrors = {}
    if (!values.mascota.trim()) e.mascota = 'El nombre de la mascota es requerido'
    if (!values.email.includes('@')) e.email = 'Email invalido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validar()) return
    setSuccess(true)
    setValues({ mascota: '', email: '', especie: 'perro' })
    setTimeout(() => setSuccess(false), 3000)
  }

  const inputClass = (field: keyof FormValues) =>
    `h-11 w-full rounded-xl border bg-white/5 px-4 text-white placeholder:text-white/40 outline-none transition focus:ring-2 ${
      errors[field]
        ? 'border-red-500/60 focus:ring-red-500/30'
        : 'border-white/10 focus:ring-emerald-500/40'
    }`

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h2 className="text-xl font-extrabold mb-1">LAB: Formulario de cita</h2>
      <p className="text-white/60 mb-6 text-sm">Con validacion y feedback visual.</p>

      {success && (
        <div className="mb-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-300 text-sm max-w-md">
          Cita registrada correctamente
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <div>
          <label className="mb-1 block text-sm font-semibold text-white/80">Mascota</label>
          <input
            className={inputClass('mascota')}
            type="text"
            placeholder="Rex"
            value={values.mascota}
            onChange={e => {
              setValues(v => ({ ...v, mascota: e.target.value }))
              setErrors(v => ({ ...v, mascota: undefined }))
            }}
          />
          {errors.mascota && <p className="mt-1 text-xs text-red-400">{errors.mascota}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-white/80">Correo del dueño</label>
          <input
            className={inputClass('email')}
            type="email"
            placeholder="dueno@correo.com"
            value={values.email}
            onChange={e => {
              setValues(v => ({ ...v, email: e.target.value }))
              setErrors(v => ({ ...v, email: undefined }))
            }}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-white/80">Especie</label>
          <select
            className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:ring-2 focus:ring-emerald-500/40"
            value={values.especie}
            onChange={e => setValues(v => ({ ...v, especie: e.target.value }))}
          >
            <option value="perro" className="bg-slate-900">Perro</option>
            <option value="gato" className="bg-slate-900">Gato</option>
            <option value="conejo" className="bg-slate-900">Conejo</option>
          </select>
        </div>

        <button
          type="submit"
          className="h-11 rounded-xl bg-emerald-600 font-semibold hover:bg-emerald-500 transition"
        >
          Agendar
        </button>
      </form>
    </main>
  )
}
