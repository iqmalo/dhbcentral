import React from 'react'
import elder from "../../Images/Menu/Elder.jpeg"
import whatsapp from "../../Images/Icon/whatsapp.png"

export default function Pantry() {
    return (
        <>
           <div className="pantry-container">
               <h4>PANTRY</h4>
               <div className="img-wrapper">
                   <img src={elder} alt=""/>
               </div>
               <div className="btn-container">
                    <div className="btn-wrapper">
                    <a href="https://wa.link/buyo4d"><button className="btn-cta"><img className= "whatsapp"  src= {whatsapp} alt=""/> Order Now!</button></a>
                    </div>
                    </div>
           </div> 


        </>
    )
}
