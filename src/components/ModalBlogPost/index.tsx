import React, { useState, useRef } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import {
  Container,
  ContainerImg,
  Button,
  ContainerData,
  AlertMessage
} from './styles'
export const CPModalBlog: React.FC<{
  ShowModal: boolean
  CloseModal: () => void
  HookCreatePostAsync: (FormData: any) => Promise<boolean>
}> = ({ ShowModal, CloseModal, HookCreatePostAsync }) => {
  const [blobImg, setBlobImg] = useState<any>(null)
  const [strTitle, setStrTitle] = useState('')
  const [strIdCategory, setStrIdCategory] = useState('DP')
  const [strTextSmall, setStrTextSmall] = useState('')
  const [strTextLarge, setStrTextLarge] = useState('')
  const [JsonMessage, setJsonMessage] = useState({
    display: false,
    text: '',
    Type: ''
  })

  const strTitleRef = useRef(null)
  const strTextSmallRef = useRef(null)
  const strTextLargeRef = useRef(null)
  // -----------
  // CARGAR IMG
  // ----------
  const AddImg = e => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = event => {
      setBlobImg(event.target.result)
    }
    reader.readAsDataURL(file)
  }
  // -----------
  // CREAR POST
  // -----------
  const CreatePostAsync = async () => {
    if (!ValidateDate()) {
      return
    }
    const FormData = {
      strTitle,
      strIdCategory,
      strTextSmall,
      strTextLarge,
      blobImg
    }
    const Result = await HookCreatePostAsync(FormData)
    if (Result) {
      setJsonMessage({
        display: true,
        text: 'Publicado con éxito.',
        Type: 'Success'
      })
      setTimeout(() => {
        ClearData()
        CloseModal()
      }, 1000)
    }
  }
  // -------------
  // VALIDATE DATA
  // -------------
  const ValidateDate = () => {
    if (blobImg === null) {
      setJsonMessage({
        display: true,
        text: 'Cargue una imagen.',
        Type: 'Error'
      })
      return false
    }
    if (strTitle === '') {
      setJsonMessage({
        display: true,
        text: 'Digite un titulo.',
        Type: 'Error'
      })
      strTitleRef.current.focus()
      return false
    }
    if (strTextSmall === '') {
      setJsonMessage({
        display: true,
        text: 'Digite un texto corto.',
        Type: 'Error'
      })
      strTextSmallRef.current.focus()
      return false
    }
    if (strTextLarge === '') {
      setJsonMessage({
        display: true,
        text: 'Digite un texto con más descripción.',
        Type: 'Error'
      })
      strTextLargeRef.current.focus()
      return false
    }
    return true
  }
  // ------------
  // CLEAR DATA
  // ------------
  const ClearData = () => {
    setBlobImg(null)
    setStrTextLarge('')
    setStrTextSmall('')
    setStrTitle('')
    setJsonMessage({
      display: false,
      text: '',
      Type: ''
    })
  }
  return (
    <Modal size="lg" show={ShowModal} onHide={CloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Crear post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <ContainerImg>
            <img src={blobImg === null ? '/Img.png' : blobImg} />
            <input type="file" onChange={AddImg} />
          </ContainerImg>
          <hr />
          <ContainerData>
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Título"
              value={strTitle}
              ref={strTitleRef}
              onChange={e => setStrTitle(e.target.value)}
            />
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              as="select"
              value={strIdCategory}
              onChange={e => setStrIdCategory(e.target.value)}
            >
              <option value="DP">Deporte</option>
              <option value="ED">Educación</option>
              <option value="CL">Cultura</option>
              <option value="CC">Ciencia</option>
              <option value="GT">Gastronomía</option>
            </Form.Control>
            <Form.Label>Texto corto</Form.Label>
            <Form.Control
              as="textarea"
              ref={strTextSmallRef}
              rows={3}
              placeholder="Escriba un texto corto..."
              value={strTextSmall}
              onChange={e => setStrTextSmall(e.target.value)}
            />
            <Form.Label>Texto largo</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              ref={strTextLargeRef}
              placeholder="Escriba un texto con más descripción..."
              value={strTextLarge}
              onChange={e => setStrTextLarge(e.target.value)}
            />
            <AlertMessage Type={JsonMessage.Type} display={JsonMessage.display}>
              {JsonMessage.text}
            </AlertMessage>
            <Button onClick={CreatePostAsync}>Publicar Post</Button>
          </ContainerData>
        </Container>
      </Modal.Body>
    </Modal>
  )
}
