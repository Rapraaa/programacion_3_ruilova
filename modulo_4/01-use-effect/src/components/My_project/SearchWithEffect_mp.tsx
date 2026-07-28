import { useState, useEffect } from 'react'

const SERVICIOS: Record<string, string> = {
  vacunacion: 'Aplicacion de vacunas segun el calendario de la mascota.',
  desparasitacion: 'Tratamiento interno y externo contra parasitos.',
  cirugia: 'Procedimientos quirurgicos con anestesia y seguimiento.',
  peluqueria: 'Baño, corte de pelo y corte de uñas.',
}

export default function SearchWithEffect_mp() {
  const [query, setQuery] = useState('')
  const [resultado, setResultado] = useState<string | null>(null)

  useEffect(() => {
    const texto = query.toLowerCase().trim()

    if (!texto) {
      setResultado(null)
      return
    }

    const encontrado = SERVICIOS[texto]
    setResultado(encontrado ?? 'Ese servicio no lo damos en la clinica.')
  }, [query])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 340 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Busca: vacunacion, cirugia, peluqueria..."
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
        }}
      />
      {resultado && (
        <p style={{ margin: 0, fontSize: 14, color: '#374151', padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
          {resultado}
        </p>
      )}
    </div>
  )
}
