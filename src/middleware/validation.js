import rootReducer from "../rootReducer"

const validation = (store) => (next) => (action) => {
  if((action.type == 'cart/addToCart' && action.payload.available <= 0) ||
    (action.type == 'item_list/decreaseTotal' && action.payload.available <= 0)) {
    return
  } else if ((action.type == 'cart/removeFromCart' && action.payload.available == action.payload.total_qty) ||
  (action.type == 'item_list/increaseTotal' && action.payload.available == action.payload.total_qty) ) {
    return
  }
  else {
    next(action)
  }
}
export default validation