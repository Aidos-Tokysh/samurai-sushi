import logo from "../images/logo.png"
import { Link } from "react-router-dom";
import MenuRestoran from "../pages/MenuRestoran";
import Main from "../pages/Main";
import MenuDostavka from "../pages/MenuDostavka";
import {ShoppingCartOutlined} from '@ant-design/icons';
import { Space } from 'antd';
import { useState,useEffect } from "react";
function Header({openBasket,totalPrice}){
    const [showBasket,setShowBasket]=useState(false)
    useEffect(() => {
        if (window.location.pathname === '/menu-dostavki/set') {
          setShowBasket(true);
        } else {
          setShowBasket(false);
        }
      }, []);
    return(
        <header className="Header">
            <div className="logo">
                <Link to="/" element={<Main/>}><img src={logo} alt={logo}/></Link>
            </div>
            <div className="nav_menu">
                <Link to="/menu/sushi" element={<MenuRestoran/>} style={{textDecoration:"none"}}><p>Меню Ресторана</p></Link>
                <Link to="/menu-dostavki/set" element={<MenuDostavka/>}style={{textDecoration:"none"}}><p>Меню Доставки</p></Link>
                <Link to="/discounts"><p style={{textDecoration:"none"}}>Акции</p></Link>
                <p style={{textDecoration:"none"}}>Контакты</p>
                
                <div>
                    {showBasket ?
                    <Space>
                        <button onClick={openBasket} page="/menu-dostavki/set" style={{background:"#ff464f",border:"none", width:"50px", height:"30px",borderRadius:"5px",cursor:"pointer"}}>
                            <ShoppingCartOutlined twoToneColor="#eb2f96" style={{fontSize:"20px",color:"white"}}/>
                        </button>
                    </Space>
                    :''}
                    <div className="basketAmount">
                        <p onChange={totalPrice}></p>
                    </div>
                </div>
                
            </div>

        </header>
    )
}
export default Header;