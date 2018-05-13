import { SHOW_INDICATOR, HIDE_INDICATOR, SHOW_ALERT, HIDE_ALERT } from '../actions/types';

export default (state = { showIndicator: false, showAlert: false, alertMessage: {type: 'info', title: '', body: ''} }, action) => {
  switch (action.type) {
    case SHOW_INDICATOR:
      return {
        ...state,
        showIndicator: true
      }
    case HIDE_INDICATOR:
      return {
        ...state,
        showIndicator: false
      }
    case SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        alertMessage: {
          type: action.payload.type,
          title: action.payload.title,
          body: action.payload.body
        }
      }
    case HIDE_ALERT:
      return {
        ...state,
        showAlert: false
      }
    default: {
      return state;
    }

  }
}