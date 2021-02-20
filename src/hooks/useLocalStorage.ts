interface IUserData {
  strNames: string
  strEmail: string
  strPhone: string
  strTypeUser: string
  Token: string
}

const useLocalStorage = (): {
  HookGetDataSession: () => IUserData
  HookCreateSession: (DataSession: any) => void
  HookDeleteDataSession: () => void
} => {
  // ----------------------
  // Create Local Storage
  // ----------------------
  const HookCreateSession = (DataSession: any) => {
    localStorage.setItem('BlogKonecta', JSON.stringify(DataSession))
  }
  // ----------------
  // VALIDAR SESSIÓN
  // ----------------
  const HookGetDataSession = () => {
    return JSON.parse(localStorage.getItem('BlogKonecta'))
  }
  // ----------------
  // ELIMINAR SESSIÓN
  // ----------------
  const HookDeleteDataSession = () => {
    localStorage.removeItem('BlogKonecta')
  }
  return { HookCreateSession, HookGetDataSession, HookDeleteDataSession }
}

export default useLocalStorage
