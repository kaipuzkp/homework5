import { ADD_COUNTER, MINUS_COUNTER } from './types';

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