import { useState } from 'react'
import { Container, Table, Badge, Form, InputGroup } from 'react-bootstrap'

interface Mascota {
  id: number
  nombre: string
  especie: string
  peso: number
  internada: boolean
}

const MASCOTAS: Mascota[] = [
  { id: 1, nombre: 'Rex', especie: 'Perro', peso: 24.5, internada: true },
  { id: 2, nombre: 'Michi', especie: 'Gato', peso: 4.2, internada: false },
  { id: 3, nombre: 'Lola', especie: 'Conejo', peso: 1.8, internada: false },
  { id: 4, nombre: 'Toby', especie: 'Perro', peso: 18.3, internada: true },
  { id: 5, nombre: 'Nina', especie: 'Gato', peso: 3.9, internada: false },
]

export default function LabRbTable_mp() {
  const [busqueda, setBusqueda] = useState('')

  const filtradas = MASCOTAS.filter(m =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    m.especie.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Tabla de pacientes</h2>
      <p className="text-secondary mb-3">
        Striped, hover, responsive y busqueda en tiempo real.
      </p>

      <InputGroup className="mb-3" style={{ maxWidth: 340 }}>
        <Form.Control
          placeholder="Buscar mascota o especie..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
      </InputGroup>

      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Especie</th>
            <th className="text-end">Peso</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {filtradas.map(m => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td className="fw-semibold">{m.nombre}</td>
              <td>{m.especie}</td>
              <td className="text-end">{m.peso.toFixed(2)} kg</td>
              <td>
                <Badge bg={m.internada ? 'danger' : 'success'}>
                  {m.internada ? 'Internada' : 'Alta'}
                </Badge>
              </td>
            </tr>
          ))}
          {filtradas.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center text-muted">
                Sin resultados.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  )
}
