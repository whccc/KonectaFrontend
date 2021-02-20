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
  return { HookCreateSession, HookGetDataSession }
}

export default useLocalStorage
