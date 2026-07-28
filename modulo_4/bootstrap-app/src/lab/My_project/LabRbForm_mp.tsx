import { useState } from 'react'
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap'

interface FormValues {
  mascota: string
  email: string
  especie: string
}

export default function LabRbForm_mp() {
  const [values, setValues] = useState<FormValues>({ mascota: '', email: '', especie: 'perro' })
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<Partial<FormValues>>({})

  function validar(): boolean {
    const e: Partial<FormValues> = {}
    if (!values.mascota.trim()) e.mascota = 'El nombre de la mascota es requerido'
    if (!values.email.includes('@')) e.email = 'Email invalido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validar()) return
    setSuccess(true)
    setValues({ mascota: '', email: '', especie: 'perro' })
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Formulario de cita</h2>
      <p className="text-secondary mb-3">Con validacion manual y feedback visual.</p>

      {success && <Alert variant="success">Cita registrada correctamente</Alert>}

      <Form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
        <Row className="g-3">
          <Col xs={12}>
            <Form.Group>
              <Form.Label>Nombre de la mascota</Form.Label>
              <Form.Control
                type="text"
                value={values.mascota}
                onChange={e => setValues(v => ({ ...v, mascota: e.target.value }))}
                isInvalid={!!errors.mascota}
                placeholder="Rex"
              />
              <Form.Control.Feedback type="invalid">
                {errors.mascota}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group>
              <Form.Label>Correo del dueño</Form.Label>
              <Form.Control
                type="email"
                value={values.email}
                onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
                isInvalid={!!errors.email}
                placeholder="dueno@correo.com"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group>
              <Form.Label>Especie</Form.Label>
              <Form.Select
                value={values.especie}
                onChange={e => setValues(v => ({ ...v, especie: e.target.value }))}
              >
                <option value="perro">Perro</option>
                <option value="gato">Gato</option>
                <option value="conejo">Conejo</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Button type="submit" variant="success">Agendar</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}
