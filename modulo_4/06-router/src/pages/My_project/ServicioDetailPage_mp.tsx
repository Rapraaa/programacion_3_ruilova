import { useParams, Link } from 'react-router-dom'

export default function ServicioDetailPage_mp() {
  const { id } = useParams()

  const servicioId = Number(id)

  if (!id || isNaN(servicioId)) {
    return <p style={{ color: '#ef4444' }}>ID de servicio invalido.</p>
  }

  return (
    <div>
      <Link
        to="/servicios"
        style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}
      >
        Volver a servicios
      </Link>
      <h1 style={{ marginTop: 12 }}>Servicio #{servicioId}</h1>
      <p style={{ color: '#6b7280' }}>
        Aqui va el detalle del servicio con ID {servicioId}.
      </p>
    </div>
  )
}
