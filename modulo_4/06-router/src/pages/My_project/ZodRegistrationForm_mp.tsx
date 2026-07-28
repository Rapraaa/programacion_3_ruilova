import { useState } from 'react'
import { z } from 'zod'

const FichaSchema = z.object({
  mascota: z.string().min(2, 'Minimo 2 caracteres'),
  dueno: z.string().min(2, 'Minimo 2 caracteres'),
  email: z.string().email('Introduce un email valido'),
  especie: z.enum(['perro', 'gato', 'conejo']),
  peso: z.number({ error: 'Debe ser un numero' })
    .min(0.1, 'El peso debe ser mayor que cero')
    .max(120, 'Peso demasiado alto'),
  anioNacimiento: z.number({ error: 'Debe ser un numero' })
    .int('Debe ser un año completo')
    .min(1990, 'Año invalido')
    .max(new Date().getFullYear(), 'Año invalido'),
})

type FichaFormData = z.infer<typeof FichaSchema>

type FormErrors = Partial<Record<keyof FichaFormData, string>>

const INITIAL_VALUES: FichaFormData = {
  mascota: '',
  dueno: '',
  email: '',
  especie: 'perro',
  peso: 1,
  anioNacimiento: 2020,
}

export default function ZodRegistrationForm_mp() {
  const [values, setValues] = useState<FichaFormData>(INITIAL_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [success, setSuccess] = useState(false)

  function handleChange<K extends keyof FichaFormData>(
    field: K,
    value: FichaFormData[K]
  ) {
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const result = FichaSchema.safeParse(values)

    if (!result.success) {
      const zodErrors: FormErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FichaFormData
        if (field && !zodErrors[field]) {
          zodErrors[field] = issue.message
        }
      }
      setErrors(zodErrors)
      return
    }

    console.log('Ficha validada:', result.data)
    setSuccess(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}
    >
      <h1 style={{ fontSize: 22, marginBottom: 4 }}>Registro de paciente</h1>

      {success && (
        <div style={{ padding: 12, background: '#dcfce7', borderRadius: 6, color: '#166534' }}>
          Ficha registrada
        </div>
      )}

      <FormField_mp
        label="Nombre de la mascota"
        value={values.mascota}
        error={errors.mascota}
        placeholder="Rex"
        onChange={(v) => handleChange('mascota', v)}
      />

      <FormField_mp
        label="Nombre del dueño"
        value={values.dueno}
        error={errors.dueno}
        placeholder="Rahi Ruilova"
        onChange={(v) => handleChange('dueno', v)}
      />

      <FormField_mp
        label="Correo del dueño"
        type="email"
        value={values.email}
        error={errors.email}
        placeholder="dueno@correo.com"
        onChange={(v) => handleChange('email', v)}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <label style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>Especie</label>
        <select
          value={values.especie}
          onChange={(e) =>
            handleChange('especie', e.target.value as FichaFormData['especie'])
          }
          style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        >
          <option value="perro">Perro</option>
          <option value="gato">Gato</option>
          <option value="conejo">Conejo</option>
        </select>
        {errors.especie && <p style={errorStyle}>{errors.especie}</p>}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <label style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>Peso (kg)</label>
        <input
          type="number"
          step="0.1"
          value={values.peso}
          onChange={(e) => handleChange('peso', Number(e.target.value))}
          style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        />
        {errors.peso && <p style={errorStyle}>{errors.peso}</p>}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <label style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>
          Año de nacimiento
        </label>
        <input
          type="number"
          value={values.anioNacimiento}
          onChange={(e) => handleChange('anioNacimiento', Number(e.target.value))}
          style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        />
        {errors.anioNacimiento && <p style={errorStyle}>{errors.anioNacimiento}</p>}
      </div>

      <button
        type="submit"
        style={{
          padding: '10px', background: '#0f766e', color: '#fff',
          border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 500,
        }}
      >
        Registrar
      </button>
    </form>
  )
}

interface FormFieldProps {
  label: string
  value: string
  error?: string
  placeholder?: string
  type?: string
  onChange: (value: string) => void
}

function FormField_mp({ label, value, error, placeholder, type = 'text', onChange }: FormFieldProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <label style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          padding: '8px 12px', fontSize: 14,
          border: `1px solid ${error ? '#ef4444' : '#d1d5db'}`,
          borderRadius: 6,
        }}
      />
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  )
}

const errorStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 12,
  color: '#ef4444',
}
