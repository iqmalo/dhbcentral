import React from 'react'
import {Link} from "react-router-dom"

export default function Thanks() {

    function random(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }


    return (
        <>
        <div className="carousel-container-thanks">
            <div className="carousel-wrapper-thanks">
            <div className="font-wrapper-thanks">
                <h3>THANK YOU FOR BEING A PART OF OUR CULT!</h3>
                <h5>Use the Code below to claim your reward!</h5>
                <h1>{random(8)}</h1>
                <h6>*limited to only one person per code</h6>
                <h6>*applicable for first time purchase after registering with us</h6>
                <h6>*please screenshot this page and show it to use during your purchase!</h6>
            </div>  
            </div>
            <div className="btn-container-thanks">
        <Link to="/">
        <button>BACK TO HOMEPAGE</button>
        </Link>
    </div>
            </div>
        </>
    )
}
