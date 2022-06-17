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




//create reducer
export const CreateSubscriberReducer = (state = {}, action) => {

  switch (action.type) {

    case REQUEST_CREATE_SUBSCRIBER:
      return {...state, loadingCreateSubscribers: true}
    case SUCCESS_CREATE_SUBSCRIBER:
      return {...state, loadingCreateSubscribers: false, successCreateSubscribers:true, payloadCreateSubscribers: action.payload}
    case FAIL_CREATE_SUBSCRIBER:
      return {...state, loadingCreateSubscribers:false, errorCreateSubscribers:true, errorPayloadCreateSubscribers: action.payload}
    case RESET_CREATE_SUBSCRIBER:
      return {}
    default:
      return  state
  }
}

