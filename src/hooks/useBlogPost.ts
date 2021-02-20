import axios from 'axios'
import { useState } from 'react'
import { URL_API } from '../helpers/EnviromentVariables'
const useBlogPost = (): {
  HookCreatePostAsync: (DataForm: any) => Promise<boolean>
  HookGetBlogPostOneAsync: ({ _id: string }) => Promise<void>
  HookUpdateBlogPostAsync: (DataForm: any) => Promise<boolean>
  HookGetBlogPostAsync: () => Promise<void>
  HookDeleteBlogPostAsync: ({ _id: string }) => void
  HookGetBlogPostsLimitAsync: () => Promise<void>
  HookAddCommentBlogPostAsync: (DataForm: any) => Promise<boolean>
  JsonDataBlogPosts: any
  JsonDataBlogPost: any
} => {
  const [JsonDataBlogPosts, setJsonDataBlogPosts] = useState([])
  const [JsonDataBlogPost, setJsonDataBlogPost] = useState({})
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
    } catch (Error) {
      setJsonDataBlogPosts([])
    }
  }
  // ------------
  // GET POST
  // ------------
  const HookGetBlogPostOneAsync = async ({ _id }) => {
    try {
      const DataResult = await axios.get(`${URL_API}/blogpost/${_id}`)
      setJsonDataBlogPost(DataResult.data.DataBlogPost)
    } catch (Error) {
      setJsonDataBlogPost({})
    }
  }
  // --------------
  // GET POST LIMIT
  // ---------------
  const HookGetBlogPostsLimitAsync = async () => {
    try {
      const DataResult = await axios.get(`${URL_API}/blogpost/post/new`)
      setJsonDataBlogPosts(DataResult.data.DataBlogPosts)
    } catch (Error) {
      setJsonDataBlogPosts([])
    }
  }
  // -----------------
  // UPDATE BLOG POST
  // -----------------
  const HookUpdateBlogPostAsync = async (DataForm: any) => {
    try {
      const Data = await axios.put(
        `${URL_API}/blogpost/updateblogpost`,
        DataForm
      )
      await HookGetBlogPostAsync()
      return Data.data.Success
    } catch (Error) {
      return null
    }
  }
  // ------------------
  // ELIMINAR BLOG POST
  // -----------------
  const HookDeleteBlogPostAsync = async ({ _id }) => {
    try {
      await axios.delete(`${URL_API}/blogpost/deleteblogpost`, {
        data: { _id }
      })
      await HookGetBlogPostAsync()
    } catch (Error) {
      return null
    }
  }
  // ----------------------
  // ADD COMMENT BLOG POST
  // ---------------------
  const HookAddCommentBlogPostAsync = async (DataForm: any) => {
    try {
      const DataResult = await axios.post(
        `${URL_API}/blogpost/addcomment`,
        DataForm
      )
      return DataResult.data.Success
    } catch (Error) {
      return null
    }
  }

  return {
    HookCreatePostAsync,
    HookGetBlogPostAsync,
    HookGetBlogPostOneAsync,
    HookUpdateBlogPostAsync,
    HookDeleteBlogPostAsync,
    HookGetBlogPostsLimitAsync,
    HookAddCommentBlogPostAsync,
    JsonDataBlogPosts,
    JsonDataBlogPost
  }
}

export default useBlogPost
