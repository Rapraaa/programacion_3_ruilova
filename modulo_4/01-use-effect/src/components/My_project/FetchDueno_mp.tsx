import { useState, useEffect } from 'react'

interface Dueno {
  id: number
  name: string
  username: string
  email: string
  phone: string
  address: {
    city: string
    street: string
  }
}

export default function FetchDueno_mp() {
  const [duenoId, setDuenoId] = useState(1)
  const [dueno, setDueno] = useState<Dueno | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelado = false

    async function traerDueno() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${duenoId}`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: Dueno = await res.json()

        if (!cancelado) setDueno(data)
      } catch (err) {
        if (!cancelado) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelado) setLoading(false)
      }
    }

    traerDueno()

    return () => { cancelado = true }
  }, [duenoId])

  return (
    <div style={{ maxWidth: 360 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[1, 2, 3, 4, 5].map((id) => (
          <button
            key={id}
            onClick={() => setDuenoId(id)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: duenoId === id ? '#0f766e' : '#fff',
              color: duenoId === id ? '#fff' : '#333',
              cursor: 'pointer',
              fontWeight: duenoId === id ? 600 : 400,
            }}
          >
            Dueño {id}
          </button>
        ))}
      </div>

      {loading && <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando ficha...</p>}
      {error && <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>}
      {dueno && !loading && (
        <div style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600 }}>{dueno.name}</p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            usuario: @{dueno.username}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            email: {dueno.email}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            telefono: {dueno.phone}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            direccion: {dueno.address.street}, {dueno.address.city}
          </p>
        </div>
      )}
    </div>
  )
}
