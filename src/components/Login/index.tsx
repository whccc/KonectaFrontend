import React from 'react'
import Form from 'react-bootstrap/Form'
import { ContainerLogin, Button } from './styles'
export const CPLogin = (): JSX.Element => {
  return (
    <ContainerLogin>
      <div style={{ textAlign: 'center' }}>
        <img src="/Person.png" style={{ width: '100px' }} />
      </div>
      <div>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="konecta@konecta.com.co" />
        <Form.Label>Clave</Form.Label>
        <Form.Control type="password" placeholder="clave" />
        <Button>Ingresar</Button>
      </div>
    </ContainerLogin>
  )
}
