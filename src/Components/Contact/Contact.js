import React from 'react'

const Contact = () => {
    return (
        <>
        <section id="contact">
            <div className="contact-container">
            <h2>HUBUNGI &nbsp;&nbsp; KAMI!</h2>
            <h5>If you want to collaborate or tell us that our food is mediocre, fell free to contact us!</h5>
                <div className="contact-wrapper">
                    <div className="contact-card">
                        <form name= "form-contact" method="POST" data-netlify="true">
                            <div className="name-wrapper">
                                <label htmlFor="">Name</label>
                                <input className="input-name" type="text" placeholder="Elon Musk" name="name"/>
                            </div>
                            <div className="email-wrapper">
                            <label htmlFor="">E-mail</label>
                                <input className="input-email" type="email" placeholder="elonmusk@dhbcentral.com" name="email" />
                            </div>
                            <div className="message-wrapper">
                            <label htmlFor="">Message</label>
                                <textarea className="input-message" id="" cols="30" rows="10" name="message"></textarea>
                            </div>
                            <div className="btn-cta">
                                <button type="submit">Submit!</button>
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
