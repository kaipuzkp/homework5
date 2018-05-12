import { ADD_COUNTER, MINUS_COUNTER, SHOW_INDICATOR, HIDE_INDICATOR } from './types';

export const increaseCounter = () => {
  return {
    type: ADD_COUNTER,
    payload: 1
  }
}

export const decreaseCounter = () => {
  return {
    type: MINUS_COUNTER,
    payload: 1
  }
}

export const showIndicator = () => {
  return {
    type: SHOW_INDICATOR
  }
}


export const hideIndicator = () => {
  return {
    type: HIDE_INDICATOR
  }
}