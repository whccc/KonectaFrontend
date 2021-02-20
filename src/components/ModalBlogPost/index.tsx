import React, { useState, useRef, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion'
import { CPPersonCommentsPost } from '../../components/PersonCommentsPost'
import Card from 'react-bootstrap/Card'
import {
  Container,
  ContainerImg,
  Button,
  ContainerData,
  AlertMessage
} from './styles'
export const CPModalBlog: React.FC<{
  ShowModal: boolean
  onShowModal: () => void
  strTypeModal: string
  JsonDataBlogPost: any
  HookCreatePostAsync: (FormData: any) => Promise<boolean>
  HookUpdateBlogPostAsync: (FormData: any) => Promise<boolean>
  JsonDataCategories: any
}> = ({
  ShowModal,
  onShowModal,
  HookCreatePostAsync,
  JsonDataBlogPost,
  strTypeModal,
  HookUpdateBlogPostAsync,
  JsonDataCategories
}) => {
  const [strId, setId] = useState('')
  const [blobImg, setBlobImg] = useState<any>(null)
  const [strTitle, setStrTitle] = useState('')
  const [strIdCategory, setStrIdCategory] = useState('DP')
  const [strTextSmall, setStrTextSmall] = useState('')
  const [strTextLarge, setStrTextLarge] = useState('')
  const [ArrayComments, setArrayComments] = useState([])
  const [JsonMessage, setJsonMessage] = useState({
    display: false,
    text: '',
    Type: ''
  })

  const strTitleRef = useRef(null)
  const strTextSmallRef = useRef(null)
  const strTextLargeRef = useRef(null)

  useEffect(() => {
    const InitialDataEditAsync = async () => {
      if (strTypeModal !== 'PublicPost') {
        setId(JsonDataBlogPost._id)
        setStrTitle(JsonDataBlogPost.strTitle)
        setBlobImg(JsonDataBlogPost.blobImg)
        setStrIdCategory(JsonDataBlogPost.strIdCategory)
        setStrTextSmall(JsonDataBlogPost.strTextSmall)
        setStrTextLarge(JsonDataBlogPost.strTextLarge)
        setArrayComments(JsonDataBlogPost.ArrayComments)
        onShowModal()
      }
    }
    InitialDataEditAsync()
  }, [JsonDataBlogPost])

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
        onShowModal()
      }, 1000)
    }
  }
  // -----------------
  // UPDATE BLOG POST
  // -----------------
  const UpdateBlogPostAsync = async () => {
    if (!ValidateDate()) {
      return
    }
    const FormData = {
      _id: strId,
      strTitle,
      strIdCategory,
      strTextSmall,
      strTextLarge,
      blobImg
    }
    const Result = await HookUpdateBlogPostAsync(FormData)
    if (Result) {
      setJsonMessage({
        display: true,
        text: 'Editado con éxito.',
        Type: 'Success'
      })
      setTimeout(() => {
        ClearData()
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
    onShowModal()
  }
  return (
    <Modal size="lg" show={ShowModal} onHide={ClearData}>
      <Modal.Header closeButton>
        <Modal.Title>
          {strTypeModal === 'PublicPost' ? 'Crear post' : 'Editar Post'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <ContainerImg>
            <img src={blobImg === null ? '/Img.png' : blobImg} />
            <small style={{ display: 'inline-block', color: 'red' }}>
              * Cargar imagen máximo de 1 mb *
            </small>
            <input type="file" onChange={AddImg} accept="image/*" />
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
              {JsonDataCategories.map((Category, Index) => {
                return (
                  <option value={Category.strName} key={Index}>
                    {Category.strName}
                  </option>
                )
              })}
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
            {strTypeModal === 'PublicPost' ? (
              <Button onClick={CreatePostAsync}>Publicar Post</Button>
            ) : (
              <Button onClick={UpdateBlogPostAsync}>Editar Post</Button>
            )}
          </ContainerData>
        </Container>
        {strTypeModal !== 'PublicPost' && (
          <Accordion style={{ marginTop: '10px' }}>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Ver comentarios
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {ArrayComments.map((Comments, Index) => {
                    return (
                      <CPPersonCommentsPost
                        key={Index}
                        strNames={Comments.strNameUser}
                        strComment={Comments.strComment}
                        dtDateCreation={Comments.dtDateCreation}
                      />
                    )
                  })}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        )}
      </Modal.Body>
    </Modal>
  )
}
