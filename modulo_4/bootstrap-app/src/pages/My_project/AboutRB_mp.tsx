import { Container, Card, ListGroup } from 'react-bootstrap'

export default function AboutRB_mp() {
  return (
    <Container className="py-5" style={{ maxWidth: 600 }}>
      <h1 className="h3 fw-bold mb-4">Sobre la clinica</h1>
      <Card className="shadow-sm">
        <Card.Header className="fw-semibold">Lo que ofrecemos</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Dos consultorios y un quirofano</ListGroup.Item>
          <ListGroup.Item>Laboratorio propio y rayos X</ListGroup.Item>
          <ListGroup.Item>Hospitalizacion con monitoreo</ListGroup.Item>
          <ListGroup.Item>Emergencias las 24 horas</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}
