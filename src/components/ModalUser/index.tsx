import React, { useState, useRef } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { ValidateEmail } from '../../helpers/helper'
import { Container, Button, AlertMessage } from './styles'
export const CPModalUser: React.FC<{
  showModal: boolean
  onClose: () => void
  HookCreateUserAsync: (DataForm: any) => Promise<boolean>
  HookValidateEmailUserAsync: ({
    strEmail
  }: {
    strEmail: string
  }) => Promise<boolean>
  HookGetUsersAsync: () => void
}> = ({
  showModal,
  onClose,
  HookCreateUserAsync,
  HookValidateEmailUserAsync,
  HookGetUsersAsync
}): JSX.Element => {
  const [strNames, setStrNames] = useState('')
  const [strEmail, setStrEmail] = useState('')
  const [strPassword, setStrPassword] = useState('')
  const [strPhone, setStrPhone] = useState('')
  const [JsonMessage, setJsonMessage] = useState({
    display: false,
    text: '',
    Type: ''
  })
  const [strTypeUser, setStrTypeUser] = useState('admin')

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
      strTypeUser: strTypeUser,
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
      await HookGetUsersAsync()
      setTimeout(() => {
        ClearData()
      }, 2000)
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
  // -------------
  // Limpiar Data
  // -------------
  const ClearData = () => {
    setStrNames('')
    setStrEmail('')
    setStrPassword('')
    setStrPhone('')
    setJsonMessage({
      display: false,
      text: '',
      Type: ''
    })
    onClose()
  }

  return (
    <>
      <Modal show={showModal} onHide={ClearData}>
        <Modal.Header closeButton>
          <Modal.Title>Crear usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              <Form.Label>Tipo usuario</Form.Label>
              <Form.Control
                as="select"
                onChange={e => setStrTypeUser(e.target.value)}
              >
                <option value="admin">Administrador</option>
                <option value="user">Usuario</option>
              </Form.Control>
              <AlertMessage
                Type={JsonMessage.Type}
                display={JsonMessage.display}
              >
                {JsonMessage.text}
              </AlertMessage>
              <Button onClick={RegisterUserAsync}>Crear</Button>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}
