import axios from 'axios'
import { useState } from 'react'
import { URL_API } from '../helpers/EnviromentVariables'

const useCategory = (): {
  HookCreateCategoryAsync: (DataForm: any) => Promise<boolean>
  HookGetCategoriesAsync: () => Promise<void>
  JsonDataCategories: any
} => {
  const [JsonDataCategories, setJsonDataCategories] = useState([])
  // ----------------
  // CREATE CATEGORY
  // ----------------
  const HookCreateCategoryAsync = async (DataForm: any) => {
    try {
      const Result = await axios.post(`${URL_API}/category/create`, DataForm)
      return Result.data.Success
    } catch (Error) {
      return null
    }
  }
  // ----------------
  // GET CATEGORIES
  // ----------------
  const HookGetCategoriesAsync = async () => {
    try {
      const Result = await axios.get(`${URL_API}/category`)
      setJsonDataCategories(Result.data.DataCategories)
    } catch (Error) {
      setJsonDataCategories([])
    }
  }
  return { HookCreateCategoryAsync, HookGetCategoriesAsync, JsonDataCategories }
}

export default useCategory
