import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from "react-bootstrap"
import whatsapp from "../../Images/Icon/whatsapp.png"
import img2 from "../../Images/Content/2.png"
import img3 from "../../Images/Content/3.png"
import img4 from "../../Images/Content/4.png"
import img5 from "../../Images/Content/5.png"
import img6 from "../../Images/Content/6.png"
import img7 from "../../Images/Content/7.png"
import img8 from "../../Images/Content/8.png"
import img9 from "../../Images/Content/9.png"
import img10 from "../../Images/Content/10.png"
import img11 from "../../Images/Content/11.png"
import font from "../../Images/Content/font.png"



export default function Hero() {
    return (
        <>
<section id="home"> 
<div className="carousel-container">
<Carousel>
  <Carousel.Item interval={2000} >
    
    <img
      className="w100 rounded mx-auto d-block img1"
      src={img2}
      alt="Third slide"
    />
  
  </Carousel.Item>
  <Carousel.Item interval={2000} >
    <img
      className="w100 rounded mx-auto d-block img1"
      src={img3}
      alt="Third slide"
    />
 
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="w100 rounded mx-auto d-block img1"
      src={img4}
      alt="Third slide"
    />
  
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="w100 rounded mx-auto d-block img1"
      src={img5}
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="w100 rounded mx-auto d-block img1"
      src={img6}
      alt="Third slide"
    />
 
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="w100 rounded mx-auto d-block img1"
      src={img7}
      alt="Third slide"
    />
  
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="w100 rounded mx-auto d-block img1"
      src={img8}
      alt="Third slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="w100 rounded mx-auto d-block img1"
      src={img9}
      alt="Third slide"
    />
 
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="w100 rounded mx-auto d-block img1"
      alt="Third slide"
      src={img10}
    />
 
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="w100 rounded mx-auto d-block img1"
      src={img11}
      alt="Third slide"
    />
  
  </Carousel.Item>
</Carousel>
</div>

<div className="font-container">
<div className="font-wrapper">
<img className = "font-dhb" src={font} alt=""/>
</div> 
<h5>They say you are what you eat, so why don’t you be a DHB?</h5>
<div className="btn-wrapper">
<a href="https://wa.link/buyo4d"><button className="btn-cta"><img className= "whatsapp"  src= {whatsapp} alt=""/> Order Now!</button></a>
</div>
</div> 
</section> 
</>
    )
}
    

