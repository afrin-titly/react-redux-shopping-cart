import { DECREASE_TOTAL, INCREASE_TOTAL } from "./actionTypes";

export const decreaseTotal = (item) => {
  return {
    type: DECREASE_TOTAL,
    payload: item
  }
}

export const increaseTotal = (id) => {
  return {
    type: INCREASE_TOTAL,
    payload: id
  }
}