import { useState } from "react";
function Basket({item,deleteItem , changeBasketQuantity , index}){
    let [quantity,setQuantity]=useState(item ? item.quantity : 1)
    const changeQuantity=(e)=>{
    setQuantity(e.target.value)
    }
    const minus=()=>{
        if(quantity>=1){
            setQuantity(quantity=quantity-1)
            changeBasketQuantity(index , quantity)
        }
    }
    const plus=()=>{
        setQuantity(quantity=quantity+1)
        changeBasketQuantity(index , quantity)
        
    }
    // console.log(quantity);
    return(
        <div className="basketList">
            <div className="basketCardLeft">
                <p><img src={item.image} alt={item.image}/></p>
                <p>{item.name}</p>
            </div>
            <div className="basketCardCenter">
                <p><button onClick={minus}>-</button></p>
                <p><input onChange={changeQuantity} value={quantity}/></p>
                <p><button onClick={plus}>+</button></p>
            </div>
            <div className="basketCardRight">
                <p>{item.price*quantity}₸</p>
                <button onClick={()=>deleteItem(item)}>x</button>
            </div>
            <div className="total">
            </div>
            
        </div>
    )
}
export default Basket;