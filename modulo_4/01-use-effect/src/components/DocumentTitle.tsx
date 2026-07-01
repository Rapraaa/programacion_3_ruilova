// src/components/DocumentTitle.tsx

import { useEffect } from 'react'

export default function DocumentTitle() {
    const randomNumber =Math.random();
  useEffect(() => {
    document.title = 'Diego Calderon App'

    // Limpieza: restaurar el título al desmontar
    console.log('efecto ejecutado')
    console.log('Numero cualquiera:', randomNumber)
  
    return () => {
      document.title = 'React App'
      console.log('limpieza ejecutado')
      console.log('Numero cualquiera:', randomNumber)
    }
  }, [Math.random()])

  return (
    <p style={{ fontSize: 14, color: '#6b7280' }}>
      El título de la pestaña cambió al montar este componente.
    </p>
  )
}