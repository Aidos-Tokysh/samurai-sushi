import {ShoppingCartOutlined} from '@ant-design/icons';
import { Space } from 'antd';
import { useState } from 'react';
function DeliveryCard({item,addToBasket}){
    let [quantity,setQuantity]=useState(1)
    const changeQuantity=(e)=>{
    setQuantity(e.target.value)
    }
    const minus=()=>{
        if(quantity>=1){
        setQuantity(quantity=quantity-1)
        }
    }
    const plus=()=>{
        setQuantity(quantity=quantity+1)
    }
    const {image,name,description,price}=item

    return(
        <div className='card'>
            <div className='card_image'>
                <img src={image} alt={image.name}/>
            </div>
            
            <div className='card_name'>
                {name}
            </div>
            <div className='card_description'>
                {description}
            </div>
            <div className='card_price'>
                {price*quantity}₸
            </div>
            <div className="card_actions">
                <button onClick={minus} 
                style={{borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px", border:"1px solid grey",width:"30px"}}>-</button>
                <input type="text" onChange={changeQuantity} value={quantity} style={{fontSize:"16px",fontFamily:"Roboto", fontWeight:500}}/>
                <button onClick={plus} 
                style={{borderTopRightRadius:"5px",borderBottomRightRadius:"5px", border:"1px solid grey",width:"30px",marginRight:"10px"}}>
                    +
                </button>
                <div>
                <Space>
                    <button onClick={()=>addToBasket(item , quantity)} 
                    style={{background:"#ff464f",border:"none", width:"50px", height:"30px",borderRadius:"5px"}}>
                        <ShoppingCartOutlined twoToneColor="#eb2f96" style={{fontSize:"20px",color:"white"}}/>
                    </button>
                </Space>
                </div>
            </div>
            
        </div>
    )
}
export default DeliveryCard;