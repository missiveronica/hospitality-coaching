import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice, getTotalQuantity } from "../../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalQuantity = useSelector(getTotalQuantity)
    return (
        <div>
        <div className="cartIcon">
            <div>
        <img width="100" height="100" src="https://img.icons8.com/keek/100/shopping-bag.png" alt="shopping-bag"/>
        </div>
        <div className="badgeCount">{totalQuantity}</div>
        </div>
        {cartItems.map(cartItem => 
        <CartItem cartItem = {cartItem}/>
             )}
             <h3>TOTAL: $ {totalPrice}</h3>
        </div>
    )
}
export default Cart;