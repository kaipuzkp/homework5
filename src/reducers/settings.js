import { SHOW_INDICATOR, HIDE_INDICATOR } from '../actions/types';

export default (state = { showIndicator: false }, action) => {
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
    default: {
      return state;
    }

  }
}