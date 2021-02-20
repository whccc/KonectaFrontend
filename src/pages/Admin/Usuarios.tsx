import React, { useEffect, useState } from 'react'
import { CPNavbarAdmin } from '../../components/NavBarAdmin'
import { CPDetailUsersAdmin } from '../../components/DetailUsersAdmin'
import { FaPlus } from 'react-icons/fa'
import { CPModalUser } from '../../components/ModalUser'
import { CPModalUserEdit } from '../../components/ModalUserEdit'
import {
  ContainerUsers,
  Container,
  Button
} from '../../styles/PageUserAdminStyle'
import useUser from '../../hooks/useUser'
const PageAdmin = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const {
    HookCreateUserAsync,
    HookValidateEmailUserAsync,
    HookGetUsersAsync,
    HookGetUserAsync,
    HookUpdateUserAsync,
    HookDeleteUserAsync,
    JsonDataUsers,
    JsonDataUser
  } = useUser()
  useEffect(() => {
    const InitialDataAsync = async () => {
      await HookGetUsersAsync()
    }
    InitialDataAsync()
  }, [])
  return (
    <Container>
      <CPNavbarAdmin />
      <h2>Administrador de usuarios</h2>
      <ContainerUsers>
        <CPDetailUsersAdmin
          JsonDataUsers={JsonDataUsers}
          HookGetUserAsync={HookGetUserAsync}
          HookDeleteUserAsync={HookDeleteUserAsync}
          onClose={() => {
            setShowModalEdit(!showModal)
          }}
        />
        <Button onClick={() => setShowModal(true)}>
          <FaPlus />
        </Button>
      </ContainerUsers>
      <CPModalUser
        showModal={showModal}
        onClose={() => {
          setShowModal(!showModal)
        }}
        HookCreateUserAsync={HookCreateUserAsync}
        HookValidateEmailUserAsync={HookValidateEmailUserAsync}
        HookGetUsersAsync={HookGetUsersAsync}
      />
      <CPModalUserEdit
        showModal={showModalEdit}
        onClose={() => {
          setShowModalEdit(!showModalEdit)
        }}
        JsonDataUser={JsonDataUser}
        HookUpdateUserAsync={HookUpdateUserAsync}
        HookGetUsersAsync={HookGetUsersAsync}
      />
    </Container>
  )
}

export default PageAdmin
