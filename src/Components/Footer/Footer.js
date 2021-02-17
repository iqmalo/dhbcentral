import React from 'react'
import instagram from "../../Images/Icon/instagram.png"
import facebook from "../../Images/Icon/facebook.png"
import twitter from "../../Images/Icon/twitter.png"
import email from "../../Images/Icon/email.png"



export default function Footer() {

    const getDate = new Date().getFullYear();

    return (
        <>
            <div className="footer-container">
                <div className="footer-wrapper">
                    <div className="footer-items">
                        <div className="insta-wrapper">
                            <a href="https://www.instagram.com/dhbcentral/"><img src={instagram} alt=""/></a>
                        </div>
                        <div className="facebook-wrapper">
                            <a href="https://www.facebook.com/dhbcentral/"><img src={facebook} alt=""/></a>
                        </div>
                        <div className="twitter-wrapper">
                            <a href="https://twitter.com/dhbcentral?lang=en"><img src={twitter} alt=""/></a>
                        </div>
                        <div className="email-wrapper">
                            <a href="mailto:dhbpunya@gmail.com"><img src={email} alt=""/></a>
                        </div>
                    </div>
                    <div className="footer-dhb">
                        <h6>DHB Central  © {getDate} All rights reserved.  Made by <a href="https://wa.link/6tjvuq">Iqmalo</a> : )</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
