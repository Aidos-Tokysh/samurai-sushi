import axios from 'axios'
function ProductList({item}){
    return(
        <div className='card'>
            <div className='card_image'>
                <img src={item.image}/>
            </div>
            
            <div className='card_name'>
                {item.name}
            </div>
            <div className='card_description'>
                {item.description}
            </div>
            <div className='card_price'>
                {item.price}
            </div>
            
        </div>
    )
}
export default ProductList;