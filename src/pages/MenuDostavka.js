import Header from "../components/Header";
import Basket from "../components/Basket";
import { useEffect, useState } from "react";
import setassorti from "../images/setassorti.jpg"
import settempure from "../images/settempure.jpg"
import setzapechennyi from "../images/setzapechennyi.jpg"
import setsamurai from "../images/setsamurai.jpg"
import setsakura from "../images/setsakura.jpg"
import setimperator from "../images/setimperator.jpg"
import setnansei from "../images/setnansei.jpg"
import gendzi from "../images/gendzi.jpg"
// import { Link } from "react-router-dom";
import DeliveryCard from "../components/DeliveryCard";
function MenuDostavka(){
    
    const [basketProduct,setBasketProduct]=useState(localStorage.getItem("basketProduct") ? JSON.parse(localStorage.getItem("basketProduct")) : [])
    const [basketModal, setBasketModal]=useState(false)
    const [total , setTotal] = useState(0)
    const openBasket=()=>{
        setBasketModal(!basketModal)
    }

    const addToBasket=(item , quantity)=>{
        console.log(quantity);
        let list=[...basketProduct]
        list.push({...item , quantity})
        
        setBasketProduct(list)
        localStorage.setItem("basketProduct",JSON.stringify(list))        
    }

    const deleteItem=(item)=>{
        let list=basketProduct.filter((product)=>product !== item)
        setBasketProduct(list)
        localStorage.setItem("basketProduct",JSON.stringify(list))
    }
    // {basketProduct.map(product=>
    //     setTotal(total + product.price * product.quantity)
    // )}
    
    const dostavkaSet=[
        {
            id:1,
            image:settempure,
            name:"Сет темпура (70 шт)",
            description:"сингапур темпура маки, осака темпура маки, эби темпура маки, сикай темпура маки, банзай маки, унаги темпура маки, roll 005, хаманиши маки, roll 004",
            price:11099,
        },
        {
            id:2,
            image:setassorti,
            name:"Сет ассорти (70 шт)",
            description:"филадельфия маки, сейко маки, якудза маки, майами маки, roll 004, калифорния маки new, канада маки, хаманиши маки, сикай темпура маки",
            price:12099
        },
        {
            id:3,
            image:setzapechennyi,
            name:"Сет запеченный (48шт.)",
            description:"якудза маки, лава маки, калифорния с угрем, roll 001, roll 002, roll 003",
            price:7049
        },
        {
            id:4,
            image:setsamurai,
            name:"Самурай",
            description:"окинава маки, калифорния маки NEW, бонито маки, сикай темпура маки",
            price:4849
        },
        {
            id:5,
            image:setsakura,
            name:"Сакура",
            description:"Аляска маки, сяке маки, сяке кунсей маки, сяке нигири 2 шт, сяке кунсей нигири 2шт",
            price:3799
        },
        {
            id:6,
            image:setimperator,
            name:"Император",
            description:"запеченный лосось 2шт, запеченный угорь 2шт, запеченная креветка 2шт, запеченный краб 2шт, запеченный окунь 2шт, запеченный шиитаке 2шт",
            price:4549
        },
        {
            id:7,
            image:setnansei,
            name:"Нансей",
            description:"унаги маки, сяке маки, каппа маки, Сяке 1шт, унаги кунсей 1шт, магуро 1шт, амадзу эби 1 шт",
            price:3099
        },
        {
            id:8,
            image:gendzi,
            name:"Гендзи",
            description:"Эби темпура маки, осака темпура маки, сингапур темпура маки, запеченный лосось 2шт, запеченная креветка 2шт",
            price:4399
        }
        
    ]
    const onChangeBasketQuantity = (index , quantity) => {
        const change = basketProduct.map((item , i) => {
            if(index == i){
                return {...item , quantity}
            }else{
                return item
            }

        })
        setBasketProduct(change)
    }
    useEffect(() => {
        let totalPrice = 0
        basketProduct.map(product=>
            totalPrice += product.price * product.quantity
        )
        setTotal(totalPrice)
    } , [basketProduct])
    return(
        <div>
            <div className="header_component">
                <Header openBasket={openBasket}/>
            </div>
            {basketModal ? 
                <div className="basketModal">
                    {basketProduct.map((product,i)=><Basket  changeBasketQuantity={onChangeBasketQuantity} index={i} key={i} item={product} deleteItem={deleteItem} addToBasket={addToBasket} />)}
                <div className="total">
                    Total: {total}₸
                </div>
                </div>:''}
            <div style={{width:'65%',margin:'auto', fontSize:"18px"}}>
                <p>
                Уважаемые Алматинцы и гости города. Заявки по доставке принимает только наш отдел доставки. Минимальная сумма на доставку 3 000 тенге. Рестораны принимают заявки, только по резерву столов.
                </p>
            </div>
            <div className="deliveryList">
                {dostavkaSet.map((dostavkaProduct)=><DeliveryCard key={dostavkaProduct.id} addToBasket={addToBasket}  item={dostavkaProduct}/>)}
            </div>
            
            
            
            
        </div>
    )
}
export default MenuDostavka;