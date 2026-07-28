import { useState, useRef, useEffect } from 'react'

export default function PreviousValue_mp() {
  const [peso, setPeso] = useState('')
  const pesoAnteriorRef = useRef('')

  useEffect(() => {
    pesoAnteriorRef.current = peso
  }, [peso])

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <input
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Peso de la mascota en kg"
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 16, fontSize: 14 }}>
        <p style={{ margin: 0 }}>
          Peso actual: <strong>{peso || '---'}</strong>
        </p>
        <p style={{ margin: 0, color: '#6b7280' }}>
          Control anterior: <strong>{pesoAnteriorRef.current || '---'}</strong>
        </p>
      </div>
    </div>
  )
}
