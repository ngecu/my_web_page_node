import axios from 'axios'
import {
  REQUEST_CREATE_POSTS,
  SUCCESS_CREATE_POSTS,
  FAIL_CREATE_POSTS,

  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  POST_DELETE_SUCCESS,
  POST_DELETE_REQUEST,
  POST_DELETE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAIL,

  POST_LIST_MY_REQUEST,
  POST_LIST_MY_SUCCESS,
  POST_LIST_MY_FAIL,


} from '../constants/postConstants'
import { logout } from './userActions'

export const listPosts = (keyword = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: POST_LIST_REQUEST })

    const { data } = await axios.get(
      `/api/posts?keyword=${keyword}&pageNumber=${pageNumber}`
    )

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listPostDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: POST_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/posts/${id}`)

    dispatch({
      type: POST_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deletePost = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/posts/${id}`, config)

    dispatch({
      type: POST_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: POST_DELETE_FAIL,
      payload: message,
    })
  }
}

export const createPost = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/posts`, {}, config)

    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: POST_CREATE_FAIL,
      payload: message,
    })
  }
}

export const updatePost = (post) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/posts/${post._id}`,
      post,
      config
    )

    dispatch({
      type: POST_UPDATE_SUCCESS,
      payload: data,
    })
    dispatch({ type: POST_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: POST_UPDATE_FAIL,
      payload: message,
    })
  }
}


export const createPostAction = (formData) => async (dispatch, getState) => {

  try {
    dispatch({
      type: REQUEST_CREATE_POSTS
    })


    const {
      userLogin: { userInfo },
    } = getState()


    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const user = userInfo._id

    console.log("data is ",formData)


    const { data } = await axios.post(`/api/posts/`,formData,config)


    if(data) {
      dispatch({
        type: SUCCESS_CREATE_POSTS,
        payload: data
      })

    }
  } catch (error) {
    const message =
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: FAIL_CREATE_POSTS,
      payload: message,
    })
  }
}


export const listMyPosts = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_LIST_MY_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()


    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/posts/author/${id}`, config)


    dispatch({
      type: POST_LIST_MY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: POST_LIST_MY_FAIL,
      payload: message,
    })
  }
}