const ChangeQuantity = ({quantity, setQuantity}) => {
    const addQuantity = () => {
        const newQuantity = quantity +1;
        setQuantity(newQuantity)
    }
    const removeQuantity = () => {
        if (quantity <= 1)return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity)
    }
    return (
        
            <div className="quantityChange">
                <button onClick={addQuantity}>➕</button>
      <span className="number">{quantity}</span>
      <button onClick={removeQuantity}>➖</button>

        </div>
    )
}
export default ChangeQuantity;