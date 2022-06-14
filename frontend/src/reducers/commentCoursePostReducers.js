import {
    COMMENT_COURSE_POST_LIST_REQUEST,
    COMMENT_COURSE_POST_LIST_SUCCESS,
    COMMENT_COURSE_POST_LIST_FAIL,
    COMMENT_COURSE_POST_DETAILS_REQUEST,
    COMMENT_COURSE_POST_DETAILS_SUCCESS,
    COMMENT_COURSE_POST_DETAILS_FAIL,
    COMMENT_COURSE_POST_DELETE_REQUEST,
    COMMENT_COURSE_POST_DELETE_SUCCESS,
    COMMENT_COURSE_POST_DELETE_FAIL,
    COMMENT_COURSE_POST_CREATE_RESET,
    COMMENT_COURSE_POST_CREATE_FAIL,
    COMMENT_COURSE_POST_CREATE_SUCCESS,
    COMMENT_COURSE_POST_CREATE_REQUEST,
    COMMENT_COURSE_POST_UPDATE_REQUEST,
    COMMENT_COURSE_POST_UPDATE_SUCCESS,
    COMMENT_COURSE_POST_UPDATE_FAIL,
    COMMENT_COURSE_POST_UPDATE_RESET
  } from '../constants/commentCoursePostConstants'
  
  export const comment_course_post_ListReducer = (state = { comment_course_posts: [] }, action) => {
    switch (action.type) {
      case COMMENT_COURSE_POST_LIST_REQUEST:
        return { loading: true, comment_course_posts : [] }
      case COMMENT_COURSE_POST_LIST_SUCCESS:
        return {
          loading: false,
          products: action.payload.comment_course_posts,
          pages: action.payload.pages,
          page: action.payload.page,
        }
      case COMMENT_COURSE_POST_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const comment_course_post_DetailsReducer = (
    state = { product: { reviews: [] } },
    action
  ) => {
    switch (action.type) {
      case COMMENT_COURSE_POST_DETAILS_REQUEST:
        return { ...state, loading: true }
      case COMMENT_COURSE_POST_DETAILS_SUCCESS:
        return { loading: false, comment_course_post_: action.payload }
      case COMMENT_COURSE_POST_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const comment_course_post_DeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case COMMENT_COURSE_POST_DELETE_REQUEST:
        return { loading: true }
      case COMMENT_COURSE_POST_DELETE_SUCCESS:
        return { loading: false, success: true }
      case COMMENT_COURSE_POST_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const comment_course_post_CreateReducer = (state = {}, action) => {
    switch (action.type) {
      case COMMENT_COURSE_POST_CREATE_REQUEST:
        return { loading: true }
      case COMMENT_COURSE_POST_CREATE_SUCCESS:
        return { loading: false, success: true, comment_course_post_: action.payload }
      case COMMENT_COURSE_POST_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case COMMENT_COURSE_POST_CREATE_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const comment_course_post_UpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case COMMENT_COURSE_POST_UPDATE_REQUEST:
        return { loading: true }
      case COMMENT_COURSE_POST_UPDATE_SUCCESS:
        return { loading: false, success: true, comment_course_post_: action.payload }
      case COMMENT_COURSE_POST_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case COMMENT_COURSE_POST_UPDATE_RESET:
        return { comment_course_post_: {} }
      default:
        return state
    }
  }