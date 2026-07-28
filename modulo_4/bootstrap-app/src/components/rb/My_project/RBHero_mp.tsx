import { Container, Button, Stack, Badge } from 'react-bootstrap'

export default function RBHero_mp() {
  return (
    <section className="py-5 bg-dark text-white">
      <Container>
        <Badge bg="success" className="mb-3">Atencion 24/7</Badge>
        <h1 className="display-5 fw-bold mb-3">
          Cuidamos a tu mascota como de la familia
        </h1>
        <p className="lead text-white-50 mb-4" style={{ maxWidth: 560 }}>
          Consultas, cirugias, vacunacion y peluqueria con veterinarios
          titulados.
        </p>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <Button variant="success" size="lg">Agendar cita</Button>
          <Button variant="outline-light" size="lg">Ver servicios</Button>
        </Stack>
      </Container>
    </section>
  )
}
