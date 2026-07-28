import { Container, Button, Stack } from 'react-bootstrap'

export default function LabRbButtons_mp() {
  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Botones de la clinica</h2>
      <p className="text-secondary mb-3">Variantes, outline y tamaños.</p>

      <Stack direction="horizontal" gap={2} className="flex-wrap mb-3">
        <Button variant="success">Agendar cita</Button>
        <Button variant="outline-success">Ver ficha</Button>
        <Button variant="primary">Registrar mascota</Button>
        <Button variant="danger">Emergencia</Button>
        <Button variant="warning">Vacuna vencida</Button>
        <Button variant="secondary">Cancelar</Button>
      </Stack>

      <Stack direction="horizontal" gap={2}>
        <Button variant="success" size="lg">Grande</Button>
        <Button variant="success">Normal</Button>
        <Button variant="success" size="sm">Pequeño</Button>
      </Stack>
    </Container>
  )
}
