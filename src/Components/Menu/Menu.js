import React from 'react'
import whatsapp from "../../Images/Icon/whatsapp.png"
import {menudata} from "./menudata.js";
import Menucard from "./menucard.js";

const Menu = () => {
    return (
        <>
            <section id = "menu">
                <div className="menu-container">
                <h4>PRODUKS</h4>
                <h4 className="foodtrux">Foodtrux</h4>
                    <div className="menu-wrapper">
                        <div className="menu-items">
                            {menudata.map(menuItem =>(
                                <Menucard
                                className="img-menu"
                                source={menuItem.src}
                                 />
                            ))}
                        </div>
                    </div>
                    
                    <div className="btn-container">
                    <div className="btn-wrapper">
                    <a href="https://wa.link/buyo4d"><button className="btn-cta"><img className= "whatsapp"  src= {whatsapp} alt=""/> Order Now!</button></a>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu;
