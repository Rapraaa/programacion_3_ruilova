import { useRef, useEffect } from 'react'

export default function AutoFocusForm_mp() {
  const mascotaRef = useRef<HTMLInputElement>(null)
  const duenoRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    mascotaRef.current?.focus()
  }, [])

  function handleMascotaKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      duenoRef.current?.focus()
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 300 }}>
      <input
        ref={mascotaRef}
        placeholder="Nombre de la mascota"
        onKeyDown={handleMascotaKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <input
        ref={duenoRef}
        placeholder="Nombre del dueño"
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <button
        type="submit"
        style={{ padding: '8px', background: '#0f766e', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
      >
        Registrar paciente
      </button>
    </form>
  )
}
