import React from 'react'
import Table from 'react-bootstrap/Table'
import { Container } from './styles'
import { FaEdit, FaWindowClose } from 'react-icons/fa'
export const CPDetailUsersAdmin: React.FC<{
  JsonDataUsers: any
  HookGetUserAsync: ({ _id: string }) => void
  onClose: () => void
}> = ({ JsonDataUsers, HookGetUserAsync, onClose }): JSX.Element => {
  // ---------
  // GET USER
  // ---------
  const GetUserEditAsync = async _id => {
    await HookGetUserAsync({ _id })
    onClose()
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
                  <FaWindowClose />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}
