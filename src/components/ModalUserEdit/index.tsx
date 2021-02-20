import React, { useState, useRef, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { ValidateEmail } from '../../helpers/helper'
import { Container, Button, AlertMessage } from './styles'
export const CPModalUserEdit: React.FC<{
  showModal: boolean
  onClose: () => void
  JsonDataUser: any
}> = ({ showModal, onClose, JsonDataUser }): JSX.Element => {
  const [strNames, setStrNames] = useState('')
  const [strEmail, setStrEmail] = useState('')
  const [strPassword, setStrPassword] = useState('')
  const [strPhone, setStrPhone] = useState('')
  const [JsonMessage, setJsonMessage] = useState({
    display: false,
    text: '',
    Type: ''
  })
  const [strTypeUser, setStrTypeUser] = useState('')

  const strNamesRef = useRef(null)
  const strEmailRef = useRef(null)
  const strPasswordRef = useRef(null)
  const strPhoneRef = useRef(null)
  useEffect(() => {
    const InitialDataAsync = () => {
      if (JsonDataUser.length !== 0) {
        setStrNames(JsonDataUser[0].strNames)
        setStrEmail(JsonDataUser[0].strEmail)
        setStrPassword(JsonDataUser[0].strPassword)
        setStrPhone(JsonDataUser[0].strPhone)
        setStrTypeUser(JsonDataUser[0].strTypeUser)
      }
    }
    InitialDataAsync()
  }, [JsonDataUser])

  // -----------
  // EDITAR USER
  // -----------
  const UpdateUserAsync = async () => {}

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
          <Modal.Title>Editar usuario</Modal.Title>
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
                disabled
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
                value={strTypeUser}
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
              <Button>Editar</Button>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}
