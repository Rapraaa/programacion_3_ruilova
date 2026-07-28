import { Container, Card, Button, Row, Col, Badge } from 'react-bootstrap'

interface MascotaCardProps {
  nombre: string
  peso: string
  especie: string
  internada: boolean
}

function MascotaCard_mp({ nombre, peso, especie, internada }: MascotaCardProps) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title className="fw-bold">{nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{especie}</Card.Subtitle>
        <Card.Text>
          <Badge bg={internada ? 'danger' : 'success'} className="me-2">
            {internada ? 'Internada' : 'Alta'}
          </Badge>
          <strong>{peso}</strong>
        </Card.Text>
        <Button variant="success" size="sm">Ver ficha</Button>
      </Card.Body>
    </Card>
  )
}

export default function LabRbCard_mp() {
  const mascotas = [
    { nombre: 'Rex', peso: '24.5 kg', especie: 'Perro labrador', internada: true },
    { nombre: 'Michi', peso: '4.2 kg', especie: 'Gato persa', internada: false },
    { nombre: 'Lola', peso: '1.8 kg', especie: 'Conejo', internada: false },
  ]

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Fichas</h2>
      <p className="text-secondary mb-3">Grid responsivo con cards tipadas.</p>
      <Row className="g-3">
        {mascotas.map(m => (
          <Col key={m.nombre} xs={12} sm={6} md={4}>
            <MascotaCard_mp {...m} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
