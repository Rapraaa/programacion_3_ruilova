import { Container, Row, Col } from 'react-bootstrap'

export default function RBFooter_mp() {
  return (
    <footer className="py-4 bg-dark text-white border-top border-secondary">
      <Container>
        <Row className="align-items-center g-2">
          <Col xs={12} md="auto">
            <span className="fw-bold">Clinica Veterinaria UTE</span>
          </Col>
          <Col className="text-md-center text-muted small">
            Quito - Av. Mariscal Sucre. Emergencias 24/7
          </Col>
          <Col xs={12} md="auto" className="d-flex gap-3 justify-content-end">
            <a href="#" className="text-white-50 text-decoration-none small">Contacto</a>
            <a href="#" className="text-white-50 text-decoration-none small">Horarios</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
