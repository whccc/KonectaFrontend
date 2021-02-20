import React, { useState, useRef } from 'react'
import Form from 'react-bootstrap/Form'
import { ContainerLogin, Button, AlertMessage } from './styles'
import { ValidateEmail } from '../../helpers/helper'
export const CPLogin: React.FC<{
  HookLoginUserAsync: ({ strEmail, strPassword }) => Promise<boolean>
}> = ({ HookLoginUserAsync }): JSX.Element => {
  const [strEmail, setStrEmail] = useState('')
  const [strPassword, setStrPassword] = useState('')
  const [JsonMessage, setJsonMessage] = useState({
    display: false,
    text: '',
    Type: ''
  })
  const strEmailRef = useRef(null)
  const strPasswordRef = useRef(null)

  // -------
  // LOGIN
  // -------
  const LoginUserAsync = async () => {
    if (!ValidateData()) {
      return
    }
    const DataResult = await HookLoginUserAsync({ strEmail, strPassword })
    if (DataResult) {
      setJsonMessage({
        display: true,
        text: 'Bienvenido un momento porfavor...',
        Type: 'Success'
      })
    } else {
      setJsonMessage({
        display: true,
        text: 'Usuario o Email incorrectos',
        Type: 'Error'
      })
    }
  }
  // ---------------
  // VALIDATE DATA
  // ---------------
  const ValidateData = () => {
    if (strEmail === '') {
      setJsonMessage({
        display: true,
        text: 'Digite Email',
        Type: 'Error'
      })
      strEmailRef.current.focus()
      return false
    }
    if (!ValidateEmail(strEmail)) {
      setJsonMessage({
        display: true,
        text: 'Digite un email correcto',
        Type: 'Error'
      })
      strEmailRef.current.focus()
      return false
    }
    if (strPassword === '') {
      setJsonMessage({
        display: true,
        text: 'Digite Clave',
        Type: 'Error'
      })
      strPasswordRef.current.focus()
      return false
    }
    return true
  }
  return (
    <ContainerLogin>
      <div style={{ textAlign: 'center' }}>
        <img src="/Person.png" style={{ width: '100px' }} />
      </div>
      <div>
        <Form.Label>Email</Form.Label>
        <Form.Control
          ref={strEmailRef}
          type="email"
          placeholder="konecta@konecta.com.co"
          value={strEmail}
          onChange={e => setStrEmail(e.target.value.trim())}
        />
        <Form.Label>Clave</Form.Label>
        <Form.Control
          ref={strPasswordRef}
          type="password"
          placeholder="clave"
          value={strPassword}
          onChange={e => setStrPassword(e.target.value.trim())}
        />
        <AlertMessage Type={JsonMessage.Type} display={JsonMessage.display}>
          {JsonMessage.text}
        </AlertMessage>
        <Button onClick={LoginUserAsync}>Ingresar</Button>
      </div>
    </ContainerLogin>
  )
}
