import { useEffect } from 'react'

export default function DocumentTitle_mp() {
  useEffect(() => {
    document.title = 'Clinica Veterinaria UTE'

    return () => {
      document.title = 'React App'
    }
  }, [])

  return (
    <p style={{ fontSize: 14, color: '#6b7280' }}>
      El titulo de la pestaña ahora es el de la clinica.
    </p>
  )
}
