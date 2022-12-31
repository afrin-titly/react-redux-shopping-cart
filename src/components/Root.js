import Header from './Header';
import ItemList from './ItemList';
import Cart from './Cart';
import { useSelector, useDispatch } from "react-redux";
import { decreaseTotal } from "../redux/item_list/actions";
import { addToCart } from '../redux/cart/actions';

export default function Root() {
  const items = useSelector((state) => state.itemList)
  const cartItems = useSelector((state) => state.cartItems)
  let totalItems = 0
  let totalPrice = 0
  cartItems.map(item=>{
    totalItems += (item.total_qty - item.available)
    totalPrice += ((item.total_qty - item.available) * item.price)
  })

  const dispatch = useDispatch()
  const handleAddToCart = (item) => {
    dispatch(decreaseTotal(item))
    dispatch(addToCart(item))
  }
  return (
    <div className="bg-gray-50 h-full md:h-screen">
        <Header title="Shopping Cart"/>
        <div className="grid grid-cols-12 gap-6">
          <ItemList items={items} handleAddToCart={handleAddToCart} />
          <Cart cartItems={cartItems} totalItems={totalItems} totalPrice={totalPrice} />
        </div>
      </div>
  )
}