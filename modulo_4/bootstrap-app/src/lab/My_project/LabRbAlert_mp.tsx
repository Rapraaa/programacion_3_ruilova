import { useState } from 'react'
import { Container, Alert, Button } from 'react-bootstrap'

export default function LabRbAlert_mp() {
  const [show, setShow] = useState(true)

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Alerta</h2>
      <p className="text-secondary mb-3">Con dismissible y control de visibilidad.</p>

      {show
        ? (
          <Alert variant="warning" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Vacuna vencida</Alert.Heading>
            <p className="mb-0">
              Rex tiene la antirrabica vencida hace 20 dias, avisar al dueño.
            </p>
          </Alert>
        )
        : <Button onClick={() => setShow(true)}>Mostrar alerta</Button>
      }
    </Container>
  )
}
