import { combineReducers } from "redux";
import { cartReducer } from "./redux/cart/cartReducer";
import { itemListReducer } from "./redux/item_list/itemReducer";

const rootReducer = combineReducers({
  itemList: itemListReducer,
  cartItems: cartReducer,
})

export default rootReducer;