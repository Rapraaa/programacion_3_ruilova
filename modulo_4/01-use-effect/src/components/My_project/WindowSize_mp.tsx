import { useState, useEffect } from 'react'

interface Pantalla {
  width: number
  height: number
}

export default function WindowSize_mp() {
  const [pantalla, setPantalla] = useState<Pantalla>({ width: 0, height: 0 })

  useEffect(() => {
    function handleResize() {
      setPantalla({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <p style={{ fontFamily: 'monospace', fontSize: 14, color: '#374151' }}>
      Tablet del consultorio: {pantalla.width} x {pantalla.height} px
    </p>
  )
}
