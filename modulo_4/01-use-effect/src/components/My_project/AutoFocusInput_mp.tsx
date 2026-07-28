import { useEffect, useRef } from 'react'

export default function AutoFocusInput_mp() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <input
      ref={inputRef}
      placeholder="Nombre de la mascota que llega a consulta"
      style={{
        padding: '8px 12px',
        border: '1px solid #d1d5db',
        borderRadius: 6,
        width: '100%',
        fontSize: 14,
      }}
    />
  )
}
