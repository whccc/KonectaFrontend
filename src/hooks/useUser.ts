import axios from 'axios'
import { URL_API } from '../helpers/EnviromentVariables'
import useLocalStorage from './useLocalStorage'
import { useRouter } from 'next/router'
import { useState } from 'react'
const useUser = (): {
  HookCreateUserAsync: (DataForm: any) => Promise<boolean>
  HookValidateEmailUserAsync: ({
    strEmail
  }: {
    strEmail: string
  }) => Promise<boolean>
  HookLoginUserAsync: ({
    strEmail,
    strPassword
  }: {
    strEmail: string
    strPassword: string
  }) => Promise<boolean>
  HookGetUsersAsync: () => void
  HookGetUserAsync: ({ _id: string }) => void
  HookUpdateUserAsync: (FormData: any) => Promise<boolean>
  HookDeleteUserAsync: ({ _id: string }) => Promise<boolean>
  HookCloseSession: () => void
  JsonDataUsers: any
  JsonDataUser: any
} => {
  // HOOKS
  const { HookCreateSession, HookDeleteDataSession } = useLocalStorage()
  const router = useRouter()

  const [JsonDataUsers, setJsonDataUsers] = useState([])
  const [JsonDataUser, setJsonDataUser] = useState([])
  // ---------------
  // CREAR USUARIO
  // ---------------
  const HookCreateUserAsync = async (DataForm: any) => {
    try {
      const Data = await axios.post(`${URL_API}/user/createuser`, DataForm)
      return Data.data.Success
    } catch (Error) {
      return null
    }
  }
  // -----------------
  // VALIDATE CORREO
  // -----------------
  const HookValidateEmailUserAsync = async ({ strEmail }) => {
    try {
      const Data = await axios.post(`${URL_API}/user/validateemail`, {
        strEmail
      })
      return Data.data.Success
    } catch (Error) {
      return null
    }
  }
  // -----------
  // LOGIN USER
  // -----------
  const HookLoginUserAsync = async ({ strEmail, strPassword }) => {
    try {
      const Data = await axios.post(`${URL_API}/user/login`, {
        strEmail,
        strPassword
      })
      if (Data.data.Success) {
        HookCreateSession(Data.data.DataUser)
        setTimeout(() => {
          router.push('/')
        }, 1000)
      }
      return Data.data.Success
    } catch (Error) {
      return null
    }
  }
  // -----------------
  // OBTENER USUARIOS
  // -----------------
  const HookGetUsersAsync = async () => {
    try {
      const Data = await axios.get(`${URL_API}/user`)
      setJsonDataUsers(Data.data.DataUsers)
    } catch (Error) {
      setJsonDataUsers([])
    }
  }
  // ----------
  // GET USER
  // ----------
  const HookGetUserAsync = async ({ _id }) => {
    try {
      const Data = await axios.get(`${URL_API}/user/${_id}`)
      setJsonDataUser(Data.data.DataUser)
    } catch (Error) {
      setJsonDataUser([])
    }
  }
  // ---------------
  // UPDATE USUARIO
  // ---------------
  const HookUpdateUserAsync = async (DataForm: any) => {
    try {
      const Data = await axios.post(`${URL_API}/user/updateuser`, DataForm)
      return Data.data.Success
    } catch (Error) {
      return null
    }
  }
  // ---------------
  // ELIMINAR USUARIO
  // ---------------
  const HookDeleteUserAsync = async ({ _id }) => {
    try {
      await axios.delete(`${URL_API}/user/deleteuser`, {
        data: { _id }
      })
      await HookGetUsersAsync()
    } catch (Error) {
      return null
    }
  }
  // ----------------
  // CERRAR SESSIÓN
  // ----------------
  const HookCloseSession = () => {
    HookDeleteDataSession()
    router.push('/Login')
  }
  return {
    HookCreateUserAsync,
    HookValidateEmailUserAsync,
    HookLoginUserAsync,
    HookGetUsersAsync,
    HookGetUserAsync,
    HookUpdateUserAsync,
    HookDeleteUserAsync,
    HookCloseSession,
    JsonDataUsers,
    JsonDataUser
  }
}

export default useUser
