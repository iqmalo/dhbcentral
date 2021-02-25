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
         }, 5000);

         return () => clearTimeout(timeout);
        },[]);

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
                    <div className="font-wrapper">
                            <h4>Join our cult and get 20% off on your first purchase!</h4>
                            </div>
                   
                        <form action="">
                            <div className="name-wrapper">
                                <label htmlFor="">Name</label>
                                <input className="input-name" type="text" placeholder="Elon Musk"/>
                            </div>
                            <div className="email-wrapper">
                            <label htmlFor="">E-mail</label>
                                <input className="input-email" type="email" placeholder="elonmusk@dhbcentral.com" />
                            </div>
                            <div className="btn-cta">
                                <button>Submit!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </section>
            )}
        </>
    )
}

export default Loyalty;
