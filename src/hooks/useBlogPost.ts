import axios from 'axios'
import { useState } from 'react'
import { URL_API } from '../helpers/EnviromentVariables'
const useBlog = (): {
  HookCreatePostAsync: (DataForm: any) => Promise<boolean>
  HookGetBlogPostAsync: () => Promise<void>
  JsonDataBlogPosts: any
} => {
  const [JsonDataBlogPosts, setJsonDataBlogPosts] = useState([])
  // ------------
  // CREAR POST
  // ------------
  const HookCreatePostAsync = async (DataForm: any) => {
    try {
      const DataResult = await axios.post(
        `${URL_API}/blogpost/createblogpost`,
        DataForm
      )
      await HookGetBlogPostAsync()
      return DataResult.data.Success
    } catch (Error) {
      return null
    }
  }
  // ------------
  // GET POSTS
  // ------------
  const HookGetBlogPostAsync = async () => {
    try {
      const DataResult = await axios.get(`${URL_API}/blogpost`)
      setJsonDataBlogPosts(DataResult.data.DataBlogPosts)
      console.log(DataResult.data)
    } catch (Error) {
      setJsonDataBlogPosts([])
    }
  }
  return { HookCreatePostAsync, HookGetBlogPostAsync, JsonDataBlogPosts }
}

export default useBlog
