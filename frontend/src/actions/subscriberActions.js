import axios from 'axios'
import {
  REQUEST_CREATE_SUBSCRIBER,
  SUCCESS_CREATE_SUBSCRIBER,
  FAIL_CREATE_SUBSCRIBER,
  RESET_CREATE_SUBSCRIBER,

  REQUEST_READ_SUBSCRIBERS,
  SUCCESS_READ_SUBSCRIBERS,
  FAIL_READ_SUBSCRIBERS,

  SUBSCRIBER_DELETE_REQUEST,
  SUBSCRIBER_DELETE_SUCCESS,
  SUBSCRIBER_DELETE_FAIL,

} from '../constants/subscriberConstants'
import { logout } from './userActions'



export const createSubscriberAction = (formData) => async (dispatch, getState) => {

  try {
    dispatch({
      type: REQUEST_CREATE_SUBSCRIBER
    })



    const { data } = await axios.post(`/api/subscriber/`,formData)


    if(data) {
      dispatch({
        type: SUCCESS_CREATE_SUBSCRIBER,
        payload: data
      })

    }
  } catch (error) {
    const message =
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message
    dispatch({
      type: FAIL_CREATE_SUBSCRIBER,
      payload: message,
    })
  }
}



export const getSubscibersAction = (x) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REQUEST_READ_SUBSCRIBERS
    })

    const { data } = await axios.get(`/api/posts/AllPosts`)
    if(data) {
      dispatch({
        type: SUCCESS_READ_SUBSCRIBERS,
        payload: data
      })

    }
  } catch (error) {
    const message =
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message

  }
}



export const deleteSubscriber = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBSCRIBER_DELETE_REQUEST,
    })


  await axios.delete(`/api/posts/${id}`)

    dispatch({
      type: SUBSCRIBER_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message

    dispatch({
      type: SUBSCRIBER_DELETE_FAIL,
      payload: message,
    })
  }
}