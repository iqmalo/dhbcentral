import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from "react-bootstrap"
// import whatsapp from "../../Images/Icon/whatsapp.png"
// import beep from "../../Images/Icon/beep.png"
// import img1 from "../../Images/Content/img1.jpg"
// import img2 from "../../Images/Content/img2.jpg"
// import img3 from "../../Images/Content/img3.jpg"
// import img4 from "../../Images/Content/img4.jpg"
// import img5 from "../../Images/Content/img5.jpg"
// import img6 from "../../Images/Content/img6.jpg"
// import img7 from "../../Images/Content/img7.jpg"
// import img8 from "../../Images/Content/img8.jpg"
// import img9 from "../../Images/Content/img9.jpg"
// import img10 from "../../Images/Content/img10.jpg"
// import img11 from "../../Images/Content/img11.jpg"
// import img12 from "../../Images/Content/img12.jpg"
import img14 from "../../Images/Content/img14.jpg"
import img15 from "../../Images/Content/img15.jpg"
import img16 from "../../Images/Content/img16.jpg"
import img17 from "../../Images/Content/img17.png"
// import font from "../../Images/Content/font.png"
import {Link} from "react-router-dom"



export default function Hero() {
    return (
        <>
<section id="home"> 
<div className="carousel-container">
<Carousel>
  <Carousel.Item interval={2000} >
    
    <img
      className="w100 rounded mx-auto d-block img1"
      src={img14}
      alt="Third slide"
    />
  
  </Carousel.Item>
  <Carousel.Item interval={2000} >
    
    <img
      className="w100 rounded mx-auto d-block img1"
      src={img15}
      alt="Third slide"
    />
  
  </Carousel.Item>
  <Carousel.Item interval={2000} >
    
    <img
      className="w100 rounded mx-auto d-block img1"
      src={img16}
      alt="Third slide"
    />
  
  </Carousel.Item>
  {/* <Carousel.Item interval={2000} >
    
    <img
      className="w100 rounded mx-auto d-block img1"
      src={img1}
      alt="Third slide"
    />
  
  </Carousel.Item>
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
  
  </Carousel.Item> */}
</Carousel>
</div>

<div className="font-container">
{/* <div className="font-wrapper">
<img className = "font-dhb" src={font} alt=""/>
</div>  */}
{/* <h5>They say you are what you eat, so why don’t you be a DHB?</h5> */}
<div className="btn-wrapper-3">
<a href="https://shopee.com.my/decemberhairyboys"><button className="btn-cta-3"><img className="shopee" src={img17} alt=""/>Order Now through Shopee!<img className="shopee" src={img17} alt=""/></button></a>
</div>
<div className="btn-wrapper-2">
<Link to="seni">
<button className="btn-cta-2">DO NOT CLICK HERE!</button>
</Link>
</div>
</div> 
</section> 
</>
    )
}
    

