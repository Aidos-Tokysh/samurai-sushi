import { useState } from "react";
import ProductList from "./ProductList";
import kremSupMoreprodukty from "../images/kremSupMoreprodukty.jpg"
import kremSupGribnoi from "../images/kremSupGribnoi.jpg"
import yasaiChiliMaki from "../images/yasaiChiliMaki.jpg"
import yagamiMaki from "../images/yagamiMaki.jpg"
import yumikoMaki from "../images/yumikoMaki.jpg"
import chukaMaki from "../images/chukaMaki.jpg"
import cesarMaki from "../images/cesarMaki.jpg"
import hakasiMaki from "../images/hakasiMaki.jpg"
import futoMaki from "../images/futoMaki.jpg"
import philaMaki from "../images/philaMaki.jpg"
import philaGril from "../images/philaGril.jpeg"
import toriMaki from "../images/toriMaki.jpg"

function MainProducts(){
    const mainProducts=[{
        id:1,
        image:kremSupMoreprodukty,
        name:"Крем-суп с морепродуктами и гренками",
        description:'',
        price:"1349₸"
    },
    {
        id:2,
        image:kremSupGribnoi,
        name:"Крем-суп грибной с гренками",
        description:'',
        price:"1299₸"
    },
    {
        id:3,
        image:yasaiChiliMaki,
        name:"Ясай чили маки",
        description:"ролл с тобико, свежим огурцом, листом салата, болгарским перцем, помидором, авокадо и кимчи бэйс",
        price:"1099₸"
    },
    {
        id:4,
        image:yagamiMaki,
        name:"Ягами маки",
        description:"ролл с обжаренной кожицей лосося, авокадо, сыром фета и майонезом в обсыпке из кунжута и зеленого лука",
        price:"1199₸"
    },
    {
        id:5,
        image:yumikoMaki,
        name:"Юмико маки",
        description:"ролл со сливочным сыром филадельфия, филе лосося, копченого угря, икрой тобико и соусом унаги",
        price:"2299₸"
    },
    {
        id:6,
        image:chukaMaki,
        name:"Чукка маки",
        description:"ролл с салатом чукка , помидором, соусом гомодари в обсыпке из кунжута",
        price:"1049₸"
    },
    {
        id:7,
        image:cesarMaki,
        name:"Цезарь маки",
        description:"ролл с курицей, свежим листом салата айсберг, сухариками пано, соусом цезарь и сыром пармезан",
        price:"1249₸"
    },
    {
        id:8,
        image:hakasiMaki,
        name:"Хакаси маки",
        description:"ролл с тигровой креветкой, обжаренной в соусе терияки и рисом в обсыпке из икринок тобико, кунжута под пикантным соусом",
        price:"1899₸"
    },
    {
        id:9,
        image:futoMaki,
        name:"Футо маки",
        description:"сливочный сыр филадельфия, маринованный дайкон,помидор, свежий лист салата",
        price:"899₸"
    },
    {
        id:10,
        image:philaMaki,
        name:"Филадельфия маки",
        description:"ролл с сыром филадельфия и филе лосося",
        price:"1999₸"
    },
    {
        id:11,
        image:philaGril,
        name:"Филадельфия гриль",
        description:"опаленное филе лосося, сливочный сыр Филадельфия",
        price:"1999₸"
    },
    {
        id:12,
        image:toriMaki,
        name:"Тори маки",
        description:"острый ролл с филе цыпленка, угрем, тобико, свежим огурцом и листом салата",
        price:"1299₸"
    }
]
// ,setMainProducts]=useState(localStorage.getItem("mainProducts") ? JSON.parse(localStorage.getItem("mainProducts")) : [])


    return(
        <div className="main_page_products">
            
            {mainProducts.map(mainProduct=><ProductList key={mainProduct.id} item={mainProduct}/>)}
        </div>
    )
}
export default MainProducts;