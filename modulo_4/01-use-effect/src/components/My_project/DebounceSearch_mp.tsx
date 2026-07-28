import { useState, useEffect } from 'react'

export default function DebounceSearch_mp() {
  const [input, setInput] = useState('')
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setBusqueda(input)
    }, 500)

    return () => clearTimeout(timer)
  }, [input])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nombre de la mascota..."
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
        }}
      />
      <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
        Buscando en el registro: <strong>{busqueda || '---'}</strong>
      </p>
    </div>
  )
}
