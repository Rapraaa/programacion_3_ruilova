import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

interface Servicio {
  id: number
  nombre: string
  categoria: string
  precio: number
}

const SERVICIOS: Servicio[] = [
  { id: 1, nombre: 'Consulta general', categoria: 'consulta', precio: 20 },
  { id: 2, nombre: 'Consulta de emergencia', categoria: 'consulta', precio: 45 },
  { id: 3, nombre: 'Vacuna antirrabica', categoria: 'prevencion', precio: 15 },
  { id: 4, nombre: 'Esterilizacion', categoria: 'cirugia', precio: 120 },
  { id: 5, nombre: 'Baño medicado', categoria: 'estetica', precio: 25 },
]

export default function ServiciosPage_mp() {
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get('q') ?? ''
  const categoria = searchParams.get('categoria') ?? ''

  function handleQueryChange(value: string) {
    setSearchParams(
      (prev) => { prev.set('q', value); return prev },
      { replace: true }
    )
  }

  function handleCategoriaChange(value: string) {
    setSearchParams(
      (prev) => {
        if (value) prev.set('categoria', value)
        else prev.delete('categoria')
        return prev
      },
      { replace: true }
    )
  }

  const filtrados = useMemo(() =>
    SERVICIOS
      .filter((s) => s.nombre.toLowerCase().includes(query.toLowerCase()))
      .filter((s) => !categoria || s.categoria === categoria),
    [query, categoria]
  )

  const categorias = [...new Set(SERVICIOS.map((s) => s.categoria))]

  return (
    <div>
      <h1 style={{ fontSize: 22, marginBottom: 16 }}>Servicios</h1>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Buscar servicio..."
          style={{ flex: 1, padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        />
        <select
          value={categoria}
          onChange={(e) => handleCategoriaChange(e.target.value)}
          style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        >
          <option value="">Todas las categorias</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {filtrados.map((servicio) => (
          <Link
            key={servicio.id}
            to={`/servicios/${servicio.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: 8,
            }}>
              <div>
                <p style={{ margin: 0, fontWeight: 500 }}>{servicio.nombre}</p>
                <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>{servicio.categoria}</p>
              </div>
              <span style={{ fontWeight: 600 }}>${servicio.precio}</span>
            </div>
          </Link>
        ))}
        {filtrados.length === 0 && (
          <p style={{ color: '#9ca3af' }}>Sin resultados.</p>
        )}
      </div>
    </div>
  )
}
