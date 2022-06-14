import {
    COMMENT_LIST_REQUEST,
    COMMENT_LIST_SUCCESS,
    COMMENT_LIST_FAIL,
    COMMENT_DETAILS_REQUEST,
    COMMENT_DETAILS_SUCCESS,
    COMMENT_DETAILS_FAIL,
    COMMENT_DELETE_REQUEST,
    COMMENT_DELETE_SUCCESS,
    COMMENT_DELETE_FAIL,
    COMMENT_CREATE_RESET,
    COMMENT_CREATE_FAIL,
    COMMENT_CREATE_SUCCESS,
    COMMENT_CREATE_REQUEST,
    COMMENT_UPDATE_REQUEST,
    COMMENT_UPDATE_SUCCESS,
    COMMENT_UPDATE_FAIL,
    COMMENT_UPDATE_RESET
  } from '../constants/commentConstants'
  
  export const commentListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case COMMENT_LIST_REQUEST:
        return { loading: true, products: [] }
      case COMMENT_LIST_SUCCESS:
        return {
          loading: false,
          products: action.payload.products,
          pages: action.payload.pages,
          page: action.payload.page,
        }
      case COMMENT_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const commentDetailsReducer = (
    state = { product: { reviews: [] } },
    action
  ) => {
    switch (action.type) {
      case COMMENT_DETAILS_REQUEST:
        return { ...state, loading: true }
      case COMMENT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload }
      case COMMENT_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const caommentDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case COMMENT_DELETE_REQUEST:
        return { loading: true }
      case COMMENT_DELETE_SUCCESS:
        return { loading: false, success: true }
      case COMMENT_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const commentCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case COMMENT_CREATE_REQUEST:
        return { loading: true }
      case COMMENT_CREATE_SUCCESS:
        return { loading: false, success: true, product: action.payload }
      case COMMENT_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case COMMENT_CREATE_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const commentUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case COMMENT_UPDATE_REQUEST:
        return { loading: true }
      case COMMENT_UPDATE_SUCCESS:
        return { loading: false, success: true, product: action.payload }
      case COMMENT_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case COMMENT_UPDATE_RESET:
        return { product: {} }
      default:
        return state
    }
  }