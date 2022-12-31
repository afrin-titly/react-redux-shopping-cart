import Total from "./Total"
import CartItem from "./CartItem"
import { addToCart, removeFromCart } from '../redux/cart/actions';
import { decreaseTotal, increaseTotal } from "../redux/item_list/actions";
import { useDispatch } from "react-redux";
export default function Cart({cartItems, totalItems, totalPrice}) {
  const dispatch = useDispatch()

  const handleIncreaseQuantity = (item) => {
    dispatch(decreaseTotal(item))
    dispatch(addToCart(item))
  }

  const handleDecreaseQuantity = (item) => {
    dispatch(removeFromCart(item))
    dispatch(increaseTotal(item))
  }
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {
          cartItems.map((item)=>(
            <CartItem key={item.id} item={item}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            />
          ))
        }
        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Item</p>
            <p className="text-5xl">{totalItems}</p>
          </div>
        </div>
      </div>
      <Total totalPrice={totalPrice} />
    </div>
  )
}