import { DECREASE_TOTAL, INCREASE_TOTAL } from "./actionTypes";

const initialState = [
  {
    id: 1,
    name: "Asus Vivobook X515MA",
    price: 35000,
    total_qty: 5,
    available: 5
  },
  {
    id: 2,
    name: "Dell E1916HV 18.5 Inch",
    price: 9300,
    total_qty: 35,
    available: 35,
  },
  {
    id: 3,
    name: "Canon Eos 4000D 18MP",
    price: 36500,
    total_qty: 72,
    available: 72,
  }
]

export const itemListReducer = (state = initialState, action) => {
  switch(action.type) {
    case DECREASE_TOTAL:
      let updatedState = [...state]
      updatedState.map(item=>{
        if(item.id === action.payload.id) {
          item.available -= 1
        }
        return item
      })
      return updatedState
    case INCREASE_TOTAL:
      let copiedState = [...state]
      copiedState.map(item => {
        if (item.id === action.payload.id) {
          item.available += 1
        }
        return item
      })
      return copiedState
    default:
      return state;
  }
}