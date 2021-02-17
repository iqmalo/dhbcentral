import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from "react-bootstrap"

import adib from "../../Images/Reviews/adib.PNG"
import stars from "../../Images/Icon/stars.png"
import quote from "../../Images/Icon/quote.png"

export default function Reviews() {
    return (
        <>
            <section id="reviews">
            <div className="reviews-title"><h4>REVIEWS</h4></div>

<Carousel>
  <Carousel.Item interval={5000}>
    
    <div className="reviews-container">
                <div className="reviews-wrapper">
                    <div className="reviews-img"><img src={adib} alt=""/></div>
                    <h5>Adib Ali Zaini</h5>
                    <div className="reviews-stars"><img src={stars} alt=""/></div>
                    <div className="reviews-quote-top"><img src={quote} alt=""/></div>
                    <h6>Aku..(chewing sound)... Aku rasa...(chewing sound)... Mmm.. Aku rasa.. 
                        (more chewing sound).. Aku rasa burger korang ni.. (chew a bit more).. Sedap</h6>
                    <div className="reviews-quote-bottom"><img src={quote} alt=""/></div>
                </div>
    </div>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    
    <div className="reviews-container">
                <div className="reviews-wrapper">
                    <div className="reviews-img"><img src={adib} alt=""/></div>
                    <h5>Adib Ali Zaini</h5>
                    <div className="reviews-stars"><img src={stars} alt=""/></div>
                    <div className="reviews-quote-top"><img src={quote} alt=""/></div>
                    <h6>Aku..(chewing sound)... Aku rasa...(chewing sound)... Mmm.. Aku rasa.. 
                        (more chewing sound).. Aku rasa burger korang ni.. (chew a bit more).. Sedap</h6>
                    <div className="reviews-quote-bottom"><img src={quote} alt=""/></div>
                </div>
    </div>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    
    <div className="reviews-container">
                <div className="reviews-wrapper">
                    <div className="reviews-img"><img src={adib} alt=""/></div>
                    <h5>Adib Ali Zaini</h5>
                    <div className="reviews-stars"><img src={stars} alt=""/></div>
                    <div className="reviews-quote-top"><img src={quote} alt=""/></div>
                    <h6>Aku..(chewing sound)... Aku rasa...(chewing sound)... Mmm.. Aku rasa.. 
                        (more chewing sound).. Aku rasa burger korang ni.. (chew a bit more).. Sedap</h6>
                    <div className="reviews-quote-bottom"><img src={quote} alt=""/></div>
                </div>
    </div>
  </Carousel.Item>
</Carousel>

            </section>       
        </>
    )
}
