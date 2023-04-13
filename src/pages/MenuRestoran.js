// import { useState } from "react";
import Header from "../components/Header";
import tortcheesemaki from "../images/tortcheesemaki.jpg"
import setassorti from "../images/setassorti.jpg"
import settempure from "../images/settempure.jpg"
import salatlosos from "../images/salatlosos.jpg"
import salatindeika from "../images/salatindeika.jpg"
import miami from "../images/miami.jpg"
import kioto from "../images/kioto.jpg"
import tomyam from "../images/tomyam.jpg"
import ProductList from "../components/ProductList";
function MenuRestoran(){
    const restoranSushi=[
        {
            id:1,
            image:tortcheesemaki,
            name:"Тортилья чиз маки",
            description:"креветка, краб, сырный соус, японский блинчик",
            price:"1799₸"
        },
        {
            id:2,
            image:setassorti,
            name:"Сет ассорти (70 шт)",
            description:"филадельфия маки, сейко маки, якудза маки, майами маки, roll 004, калифорния маки new, канада маки, хаманиши маки, сикай темпура маки",
            price:"12099₸"
        },
        {
            id:3,
            image:settempure,
            name:"Сет темпура (70 шт)",
            description:"сингапур темпура маки, осака темпура маки, эби темпура маки, сикай темпура маки, банзай маки, унаги темпура маки, roll 005, хаманиши маки, roll 004",
            price:"11099₸"
        },
        {
            id:4,
            image:salatlosos,
            name:"Салат с лососем",
            description:"копченый лосось, шпинат, огурцы, руккола, листья салата, укроп, помидоры черри, оливки, масутадо соус",
            price:"2399₸"
        },
        {
            id:5,
            image:salatindeika,
            name:"Салат с индейкой",
            description:"индейка, лук красный, маринованные шампиньоны, болгарский перец, огурцы, помидоры черри, микс салат, французская заправка",
            price:"1599₸"
        },
        {
            id:6,
            image:miami,
            name:"Майами маки",
            description:"икра тобико, лосось обжаренный в соусе терияки, огурец, соус острый",
            price:"1399₸"
        },
        {
            id:7,
            image:kioto,
            name:"Киото маки",
            description:"угорь, огурец, мясо краба, пикантный соус, имбирь",
            price:"2049₸"
        },
        {
            id:8,
            image:tomyam,
            name:"Тайский суп том-ям",
            description:"креветки, шампиньоны, лук, лемонграсс, листья лайма, паста чили",
            price:"2399₸"
        }
        
    ]
    return(
        <div>
            <div className="header_component">
                <Header/>
            </div>
            
            <div className="restoran-sushi">
                {restoranSushi.map(restoranProduct=><ProductList key={restoranProduct.id} item={restoranProduct}/>)}
            </div>
            

        </div>
    )
}
export default MenuRestoran;