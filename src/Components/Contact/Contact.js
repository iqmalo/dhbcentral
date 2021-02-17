import React from 'react'

const Contact = () => {
    return (
        <>
        <section id="contact">
            <div className="contact-container">
            <h2>CONTACT US!</h2>
            <h5>If you want to collaborate or tell us that our food is mediocre, fell free to contact us!</h5>
                <div className="contact-wrapper">
                    <div className="contact-card">
                        <form action="">
                            <div className="name-wrapper">
                                <label htmlFor="">Name</label>
                                <input className="input-name" type="text" placeholder="Elon Musk"/>
                            </div>
                            <div className="email-wrapper">
                            <label htmlFor="">E-mail</label>
                                <input className="input-email" type="email" placeholder="elonmusk@dhbcentral.com" />
                            </div>
                            <div className="message-wrapper">
                            <label htmlFor="">Message</label>
                                <textarea className="input-message" name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="btn-cta">
                                <button>Submit!</button>
                            </div>
                
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact
