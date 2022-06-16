import {
    COURSE_LIST_REQUEST,
    COURSE_LIST_SUCCESS,
    COURSE_LIST_FAIL,
    COURSE_DETAILS_REQUEST,
    COURSE_DETAILS_SUCCESS,
    COURSE_DETAILS_FAIL,
    COURSE_DELETE_REQUEST,
    COURSE_DELETE_SUCCESS,
    COURSE_DELETE_FAIL,
    COURSE_CREATE_RESET,
    COURSE_CREATE_FAIL,
    COURSE_CREATE_SUCCESS,
    COURSE_CREATE_REQUEST,
    COURSE_UPDATE_REQUEST,
    COURSE_UPDATE_SUCCESS,
    COURSE_UPDATE_FAIL,
    COURSE_UPDATE_RESET,
    COURSE_CREATE_REVIEW_REQUEST,
    COURSE_CREATE_REVIEW_SUCCESS,
    COURSE_CREATE_REVIEW_FAIL,
    COURSE_CREATE_REVIEW_RESET,
    COURSE_TOP_REQUEST,
    COURSE_TOP_SUCCESS,
    COURSE_TOP_FAIL,
  } from '../constants/courseConstants'
  
  export const courseListReducer = (state = { courses: [] }, action) => {
    switch (action.type) {
      case COURSE_LIST_REQUEST:
        return { loading_course: true, courses: [] }
      case COURSE_LIST_SUCCESS:
        return {
          loading_course: false,
          courses: action.payload.courses,
          pages: action.payload.pages,
          page: action.payload.page,
        }
      case COURSE_LIST_FAIL:
        return { loading_course: false, error_course: action.payload }
      default:
        return state
    }
  }
  
  export const courseDetailsReducer = (
    state = { COURSE: { reviews: [] } },
    action
  ) => {
    switch (action.type) {
      case COURSE_DETAILS_REQUEST:
        return { ...state, loading_course: true }
      case COURSE_DETAILS_SUCCESS:
        return { loading_course: false, courses: action.payload }
      case COURSE_DETAILS_FAIL:
        return { loading_course: false, error_course: action.payload }
      default:
        return state
    }
  }
  
  export const courseDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case COURSE_DELETE_REQUEST:
        return { loading_course: true }
      case COURSE_DELETE_SUCCESS:
        return { loading_course: false, success: true }
      case COURSE_DELETE_FAIL:
        return { loading_course: false, error_course: action.payload }
      default:
        return state
    }
  }
  
  export const courseCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case COURSE_CREATE_REQUEST:
        return { loading_course: true }
      case COURSE_CREATE_SUCCESS:
        return { loading_course: false, success: true, courses: action.payload }
      case COURSE_CREATE_FAIL:
        return { loading_course: false, error_course: action.payload }
      case COURSE_CREATE_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const courseUpdateReducer = (state = { courses: {} }, action) => {
    switch (action.type) {
      case COURSE_UPDATE_REQUEST:
        return { loading_course: true }
      case COURSE_UPDATE_SUCCESS:
        return { loading_course: false, success: true, courses: action.payload }
      case COURSE_UPDATE_FAIL:
        return { loading_course: false, error_course: action.payload }
      case COURSE_UPDATE_RESET:
        return { COURSE: {} }
      default:
        return state
    }
  }
  
  export const courseReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case COURSE_CREATE_REVIEW_REQUEST:
        return { loading_course: true }
      case COURSE_CREATE_REVIEW_SUCCESS:
        return { loading_course: false, success: true }
      case COURSE_CREATE_REVIEW_FAIL:
        return { loading_course: false, error_course: action.payload }
      case COURSE_CREATE_REVIEW_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const courseTopRatedReducer = (state = { COURSEs: [] }, action) => {
    switch (action.type) {
      case COURSE_TOP_REQUEST:
        return { loading_course: true, COURSEs: [] }
      case COURSE_TOP_SUCCESS:
        return { loading_course: false, COURSEs: action.payload }
      case COURSE_TOP_FAIL:
        return { loading_course: false, error_course: action.payload }
      default:
        return state
    }
  }
  
