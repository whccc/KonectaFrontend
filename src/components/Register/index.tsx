import React, { useState, useRef } from 'react'
import { Container, Button, AlertMessage } from './styles'
import Form from 'react-bootstrap/Form'
import { ValidateEmail } from '../../helpers/helper'
export const CPRegister: React.FC<{
  HookCreateUserAsync: (DataForm: any) => Promise<boolean>
  HookValidateEmailUserAsync: ({
    strEmail
  }: {
    strEmail: string
  }) => Promise<boolean>
}> = ({ HookCreateUserAsync, HookValidateEmailUserAsync }): JSX.Element => {
  const [strNames, setStrNames] = useState('')
  const [strEmail, setStrEmail] = useState('')
  const [strPassword, setStrPassword] = useState('')
  const [strPhone, setStrPhone] = useState('')
  const [JsonMessage, setJsonMessage] = useState({
    display: false,
    text: '',
    Type: ''
  })

  const strNamesRef = useRef(null)
  const strEmailRef = useRef(null)
  const strPasswordRef = useRef(null)
  const strPhoneRef = useRef(null)

  // -------------------
  // REGISTRAR USUARIO
  // -------------------
  const RegisterUserAsync = async () => {
    if (!ValidateData()) {
      return
    }
    // Validar email
    let Result = await HookValidateEmailUserAsync({ strEmail })
    if (!Result) {
      strEmailRef.current.focus()
      setJsonMessage({
        display: true,
        text: 'Ya existe registrado el correo.',
        Type: 'Error'
      })
      return
    }
    // Crear usuario
    Result = await HookCreateUserAsync({
      strNames,
      strEmail,
      strPassword,
      strPhone,
      strTypeUser: 'user',
      dtCreateUser: new Date(),
      dtUpdateUser: new Date()
    })
    if (Result) {
      setJsonMessage({
        display: true,
        text: 'Usuario registrado con éxito.',
        Type: 'Success'
      })
      setStrNames('')
      setStrEmail('')
      setStrPassword('')
      setStrPhone('')
    }
  }
  // ---------------
  // VALIDAR DATA
  // --------------
  const ValidateData = () => {
    if (strNames === '') {
      setJsonMessage({
        display: true,
        text: 'Digite su nombre',
        Type: 'Error'
      })
      strNamesRef.current.focus()
      return false
    }
    if (strEmail === '') {
      setJsonMessage({
        display: true,
        text: 'Digite su email',
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
        text: 'Digite su clave',
        Type: 'Error'
      })
      strPasswordRef.current.focus()
      return false
    }
    if (strPhone === '') {
      setJsonMessage({
        display: true,
        text: 'Digite su teléfono',
        Type: 'Error'
      })
      strPhoneRef.current.focus()
      return false
    }
    return true
  }
  return (
    <Container>
      <div style={{ textAlign: 'center' }}>
        <img src="/Person.png" style={{ width: '100px' }} />
      </div>
      <div>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="email"
          placeholder="Nombre"
          value={strNames}
          onChange={e => setStrNames(e.target.value)}
          ref={strNamesRef}
        />
        <Form.Label>Correo</Form.Label>
        <Form.Control
          type="email"
          placeholder="konecta@konecta.com.co"
          value={strEmail}
          onChange={e => setStrEmail(e.target.value)}
          ref={strEmailRef}
        />
        <Form.Label>Clave</Form.Label>
        <Form.Control
          type="password"
          placeholder="clave"
          value={strPassword}
          onChange={e => setStrPassword(e.target.value)}
          ref={strPasswordRef}
        />
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="number"
          placeholder="teléfono"
          value={strPhone}
          onChange={e => setStrPhone(e.target.value)}
          ref={strPhoneRef}
        />
        <AlertMessage Type={JsonMessage.Type} display={JsonMessage.display}>
          {JsonMessage.text}
        </AlertMessage>
        <Button onClick={RegisterUserAsync}>Registrar</Button>
      </div>
    </Container>
  )
}
