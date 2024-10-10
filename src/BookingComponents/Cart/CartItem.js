import { useDispatch } from "react-redux";
import dataServices from "../../data/dataServices";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();
const services  = dataServices.find(item =>
    item.id===cartItem.serviceId)
    
    return (
            <div>
   <p>{cartItem.quantity} item(s)</p>
   <p>{services.name}</p>
   <p>Price: $ {services.price * cartItem.quantity}</p>
   <div className="deleteIcon">
   <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}><img width="30px"src="https://img.icons8.com/?size=100&id=107448&format=png&color=000000" alt="deletIcon"/></span>
   </div>

   <hr className="rounded"></hr>

        </div>
    )
}
export default CartItem;