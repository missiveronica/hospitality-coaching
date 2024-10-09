import dataServices from "../../data/dataServices";

const CartItem = ({cartItem}) => {
const services  = dataServices.find(item =>
    item.id===cartItem.serviceId)
    
    return (
            <div>
   <p>{cartItem.quantity} item(s)</p>
   <p>{services.name}</p>
   <p>Price: $ {services.price * cartItem.quantity}</p>

   <hr className="rounded"></hr>

        </div>
    )
}
export default CartItem;