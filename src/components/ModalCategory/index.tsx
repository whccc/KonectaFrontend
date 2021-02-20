import React, { useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { Button, AlertMessage } from './styles'

export const CPModalCategory: React.FC<{
  ShowModal: boolean
  onShowModal: () => void
  InitialDataCategoryAsync: () => void
  HookCreateCategoryAsync: (FormData: any) => Promise<boolean>
}> = ({
  ShowModal,
  onShowModal,
  HookCreateCategoryAsync,
  InitialDataCategoryAsync
}) => {
  const [strName, setStrName] = useState('')
  const strNameRef = useRef(null)
  const [JsonMessage, setJsonMessage] = useState({
    display: false,
    text: '',
    Type: ''
  })
  // ----------------
  // CREATE CATEGORY
  // ----------------
  const CreateCategoryAsync = async () => {
    if (!ValidateData()) {
      return
    }
    const FormData = {
      strName
    }
    const Result = await HookCreateCategoryAsync(FormData)
    if (Result) {
      setJsonMessage({
        display: true,
        text: 'Categoria creada con éxito.',
        Type: 'Success'
      })
      setTimeout(() => {
        setStrName('')
        onShowModal()
        InitialDataCategoryAsync()
      }, 1000)
    }
  }
  // -------------
  // VALIDAR DATA
  // -------------
  const ValidateData = () => {
    if (strName === '') {
      setJsonMessage({
        display: true,
        text: 'Digite un nombre',
        Type: 'Error'
      })
      strNameRef.current.focus()
      return false
    }
    return true
  }
  return (
    <Modal show={ShowModal} onHide={onShowModal}>
      <Modal.Header closeButton>
        <Modal.Title>Crear categoria</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          ref={strNameRef}
          value={strName}
          onChange={e => setStrName(e.target.value)}
          type="text"
          placeholder="Nombre"
        />
        <AlertMessage Type={JsonMessage.Type} display={JsonMessage.display}>
          {JsonMessage.text}
        </AlertMessage>
        <Button onClick={CreateCategoryAsync}>Crear</Button>
      </Modal.Body>
    </Modal>
  )
}
