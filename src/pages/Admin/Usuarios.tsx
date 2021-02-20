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
import useLocalStorage from '../../hooks/useLocalStorage'
import { useRouter } from 'next/router'

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
  const { HookGetDataSession } = useLocalStorage()
  const router = useRouter()

  useEffect(() => {
    const InitialDataAsync = async () => {
      await HookGetUsersAsync()
    }
    InitialDataAsync()
  }, [])

  // VALIDAR RUTA
  if (typeof window !== 'undefined') {
    const DataUser = HookGetDataSession()
    if (DataUser === null) {
      router.push('/Login')
      return null
    } else {
      if (DataUser.strTypeUser === 'user') {
        router.push('/')
        return null
      }
    }
  }

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
