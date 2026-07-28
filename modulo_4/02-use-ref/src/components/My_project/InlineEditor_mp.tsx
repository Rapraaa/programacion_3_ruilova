import { useRef, useState } from 'react'

export default function InlineEditor_mp() {
  const sintomaRef = useRef<HTMLInputElement>(null)
  const tratamientoRef = useRef<HTMLInputElement>(null)
  const [guardado, setGuardado] = useState('Nota de la consulta vacia')

  function handleGuardar() {
    const sintoma = sintomaRef.current?.value ?? ''
    const tratamiento = tratamientoRef.current?.value ?? ''

    if (sintoma.trim() === '' && tratamiento.trim() === '') {
      setGuardado('Nota de la consulta vacia')
      return
    }

    setGuardado(`${sintoma} / ${tratamiento}`)
  }

  function handleLimpiar() {
    if (sintomaRef.current) sintomaRef.current.value = ''
    if (tratamientoRef.current) tratamientoRef.current.value = ''
    sintomaRef.current?.focus()
  }

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Guardado: <strong style={{ color: '#111827' }}>{guardado}</strong>
      </p>

      <input
        ref={sintomaRef}
        defaultValue=""
        placeholder="Sintoma que presenta"
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <input
        ref={tratamientoRef}
        defaultValue=""
        placeholder="Tratamiento recetado"
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={handleGuardar}
          style={{ flex: 1, padding: '8px', background: '#0f766e', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Guardar
        </button>
        <button
          onClick={handleLimpiar}
          style={{ padding: '8px 16px', background: '#f3f4f6', color: '#6b7280', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}
