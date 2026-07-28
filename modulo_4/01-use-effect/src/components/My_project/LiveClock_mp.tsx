import { useState, useEffect } from 'react'

export default function LiveClock_mp() {
  const [hora, setHora] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <p style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>
        Hora de atencion en la clinica
      </p>
      <p style={{ fontFamily: 'monospace', fontSize: 28, margin: 0, letterSpacing: 2 }}>
        {hora.toLocaleTimeString('es-EC')}
      </p>
    </div>
  )
}
