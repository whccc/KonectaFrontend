import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { Container, Button } from './styles'
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal'
export const CPDetailUsersAdmin: React.FC<{
  JsonDataUsers: any
  HookGetUserAsync: ({ _id: string }) => void
  HookDeleteUserAsync: ({ _id: string }) => Promise<boolean>
  onClose: () => void
}> = ({
  JsonDataUsers,
  HookGetUserAsync,
  onClose,
  HookDeleteUserAsync
}): JSX.Element => {
  const [showModal, setShowModal] = useState(false)
  const [DataUserDelete, setDataUserDelete] = useState({
    _id: '',
    strNames: ''
  })
  // ---------
  // GET USER
  // ---------
  const GetUserEditAsync = async _id => {
    await HookGetUserAsync({ _id })
    onClose()
  }
  // ------------------------------
  // DATA INICIAL ELIMINAR USUARIO
  // ------------------------------
  const DataInitialDeleteUserAsync = async ({ _id, strNames }) => {
    setDataUserDelete({
      _id,
      strNames
    })
    setShowModal(!showModal)
  }
  // --------------------
  // ELIMINAR USUARIO
  // --------------------
  const DeleteUserAsync = async () => {
    await HookDeleteUserAsync({ _id: DataUserDelete._id })
    setTimeout(() => {
      setShowModal(!showModal)
    }, 1000)
  }
  return (
    <Container>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Foto</th>
            <th>Nombres</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Tipo Usuario</th>
            <th>Fecha Creación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {JsonDataUsers.map((User, Index) => {
            return (
              <tr key={Index}>
                <td>{Index + 1}</td>
                <td>
                  <img src="/Person.png" />
                </td>
                <td>{User.strNames}</td>
                <td>{User.strEmail}</td>
                <td>{User.strPhone}</td>
                <td>
                  {User.strTypeUser === 'admin' ? 'administrador' : 'usuario'}
                </td>
                <td>{User.dtDateCreation.split('T')[0]}</td>
                <td>
                  <FaEdit
                    onClick={() => {
                      GetUserEditAsync(User._id)
                    }}
                  />
                  <FaWindowClose
                    onClick={() => {
                      DataInitialDeleteUserAsync({
                        _id: User._id,
                        strNames: User.strNames
                      })
                    }}
                  />
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
          <Modal.Title>Eliminar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿ Desea eliminar el usuario {DataUserDelete.strNames} ?
          <hr />
          <Button onClick={DeleteUserAsync}>Si</Button>{' '}
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
