import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const initialState = []

export const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      let updatedState = [...state]
      let found = updatedState.find(item => item.id === action.payload.id)
      if (!found) {
        updatedState.push(action.payload)
      }
      return updatedState;
    case REMOVE_FROM_CART:
      let copiedState = [...state]
      return copiedState;
    default:
      return state
  }
}