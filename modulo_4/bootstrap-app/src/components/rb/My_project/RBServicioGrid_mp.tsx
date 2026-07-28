import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'

interface Servicio {
  id: number
  titulo: string
  tipo: 'Consulta' | 'Prevencion' | 'Cirugia'
  duracion: string
  etiqueta: string
}

const SERVICIOS: Servicio[] = [
  { id: 1, titulo: 'Consulta general', tipo: 'Consulta', duracion: '30 min', etiqueta: '' },
  { id: 2, titulo: 'Consulta de emergencia', tipo: 'Consulta', duracion: '45 min', etiqueta: 'Urgente' },
  { id: 3, titulo: 'Vacuna antirrabica', tipo: 'Prevencion', duracion: '15 min', etiqueta: '' },
  { id: 4, titulo: 'Desparasitacion', tipo: 'Prevencion', duracion: '15 min', etiqueta: 'Popular' },
  { id: 5, titulo: 'Esterilizacion', tipo: 'Cirugia', duracion: '2 h', etiqueta: '' },
  { id: 6, titulo: 'Limpieza dental', tipo: 'Cirugia', duracion: '1 h', etiqueta: 'Nuevo' },
]

const TIPO_COLOR: Record<Servicio['tipo'], string> = {
  Consulta: 'primary',
  Prevencion: 'success',
  Cirugia: 'danger',
}

export default function RBServicioGrid_mp() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="fw-bold mb-1">Nuestros servicios</h2>
        <p className="text-muted mb-4">Elige el servicio que necesita tu mascota.</p>

        <Row className="g-3">
          {SERVICIOS.map(servicio => (
            <Col key={servicio.id} xs={12} sm={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Badge bg={TIPO_COLOR[servicio.tipo]}>{servicio.tipo}</Badge>
                    {servicio.etiqueta && <Badge bg="dark">{servicio.etiqueta}</Badge>}
                  </div>
                  <Card.Title className="fw-bold">{servicio.titulo}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    Duracion: {servicio.duracion}
                  </Card.Text>
                  <Button variant="outline-success" size="sm" className="mt-auto">
                    Agendar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
