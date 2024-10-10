import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const ServiceType = ({service}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch ();
    return (
        <div>
            <img src = {service.img} width="300px"   alt="serviceImage"/>
            <p className="serviceName">{service.name}</p>
            <p>Price: $ {service.price}</p>
            <ChangeQuantity quantity= {quantity} setQuantity={setQuantity}/>
            <button onClick={() => {dispatch(addItemToCart({service, quantity}));}} className="add"><img width="30px" src="https://img.icons8.com/?size=100&id=LCGnMPSqHBJm&format=png&color=000000" alt="cart"/>Add to Cart</button>
        </div>
    )
}
export default ServiceType;