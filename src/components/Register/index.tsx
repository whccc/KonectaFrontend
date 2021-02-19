import React from 'react'
import { Container, Button } from './styles'
import Form from 'react-bootstrap/Form'
export const CPRegister = (): JSX.Element => {
  return (
    <Container>
      <div style={{ textAlign: 'center' }}>
        <img src="/Person.png" style={{ width: '100px' }} />
      </div>
      <div>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="email" placeholder="Nombre" />
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="konecta@konecta.com.co" />
        <Form.Label>Clave</Form.Label>
        <Form.Control type="password" placeholder="clave" />
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="number" placeholder="teléfono" />
        <Button>Registrar</Button>
      </div>
    </Container>
  )
}
