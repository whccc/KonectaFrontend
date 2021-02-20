import React, { useState } from 'react'
import { Container, Button } from './styles'
import { DeterminateCategory } from '../../helpers/helper'
import Table from 'react-bootstrap/Table'
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal'

export const CPDetailBlogPostAdmin: React.FC<{
  JsonDataBlogPosts: any
  HookGetBlogPostOneAsync: ({ _id: string }) => Promise<void>
  onChangeTypeModalPost: () => void
  HookDeleteBlogPostAsync: ({ _id: string }) => void
}> = ({
  JsonDataBlogPosts,
  HookGetBlogPostOneAsync,
  onChangeTypeModalPost,
  HookDeleteBlogPostAsync
}): JSX.Element => {
  const [showModal, setShowModal] = useState(false)
  const [DataPostDelete, setDataPostDelete] = useState({
    _id: '',
    strTitle: ''
  })
  // ------------------
  // GET ONE BLOGPOST
  // ------------------
  const GetBlogPostOneAsync = async _id => {
    await HookGetBlogPostOneAsync({ _id })
    onChangeTypeModalPost()
  }
  // ------------------------
  // MODAL DELETE BLOG POST
  // ------------------------
  const ModalDeleteBlogPost = (_id, strTitleBlogPost) => {
    setShowModal(true)
    setDataPostDelete({
      _id,
      strTitle: strTitleBlogPost
    })
  }
  // ------------------
  // DELETE BLOG POST
  // ------------------
  const DeleteBlogPostAsync = async () => {
    await HookDeleteBlogPostAsync({ _id: DataPostDelete._id })
    setTimeout(() => {
      setShowModal(false)
    }, 1000)
  }
  return (
    <Container>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Imagen</th>
            <th>Título</th>
            <th>Categoría</th>
            <th>Texto corto</th>
            <th>Fecha Creación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {JsonDataBlogPosts.map((BlogPost, Index) => {
            return (
              <tr key={Index}>
                <td>{Index + 1}</td>
                <td>
                  <img src={BlogPost.blobImg} />
                </td>
                <td>{BlogPost.strTitle}</td>
                <td>{DeterminateCategory(BlogPost.strIdCategory)}</td>
                <td>{BlogPost.strTextSmall}</td>
                <td>{BlogPost.dtDateCreate.split('CET')[0]}</td>
                <td>
                  <td>
                    <FaEdit
                      onClick={() => {
                        GetBlogPostOneAsync(BlogPost._id)
                      }}
                    />
                    <FaWindowClose
                      onClick={() => {
                        ModalDeleteBlogPost(BlogPost._id, BlogPost.strTitle)
                      }}
                    />
                  </td>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(!showModal)
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Publicación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿ Desea eliminar la publicación {DataPostDelete.strTitle} ?
          <hr />
          <Button onClick={DeleteBlogPostAsync}>Si</Button>{' '}
          <Button
            onClick={() => {
              setShowModal(!showModal)
            }}
          >
            No
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  )
}
