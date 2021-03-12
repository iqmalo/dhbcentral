import React, {useState, useEffect} from 'react'
import loyalty from "../../Images/Icon/loyalty.png"
import exit from "../../Images/Icon/exit.png"

const Loyalty = () => {

    const [appeared, setAppeared] = useState("false");

    function handleClick(){
        setAppeared(!appeared)  
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAppeared(!appeared)    
         }, 10000);

         return () => clearTimeout(timeout);
        },[]);

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
        {!appeared && (
            <section id="loyalty">
            <div className="loyalty-container">
            <div className="btn-exit">
                <button onClick={handleClick}><img src={exit} alt=""/></button>
            </div>
                <div className="loyalty-wrapper">
                    <div className="loyalty-card">
                        <img src={loyalty} alt=""/>
                    </div>
                    <div className="loyalty-form">
                            <h3>Claim your 20% OFF</h3>
                            <h5>Use the Code below to claim your reward!</h5>
                            <h1>{random(8)}</h1>
                            <h6>*valid from <span>12/3/2021 until 31/3/2021</span></h6>
                            <h6>*applicable for dine-in only</h6>
                            <h6>*please screenshot this page and show it to us during your purchase!</h6>
                    </div>
                    </div>
                </div>
            </section>
            )}
        </>
    )
}

export default Loyalty;
