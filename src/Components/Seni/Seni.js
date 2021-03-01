import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from "react-bootstrap"
import IMG1 from "../../Images/Poster/IMG 1.jpg";
import IMG2 from "../../Images/Poster/IMG 2.jpg";
import IMG3 from "../../Images/Poster/IMG 3.jpg";
import IMG5 from "../../Images/Poster/IMG 5.jpg";
import IMG6 from "../../Images/Poster/IMG 6.jpg";
import IMG7 from "../../Images/Poster/IMG 7.jpg";
import IMG8 from "../../Images/Poster/IMG 8.jpg";
import IMG9 from "../../Images/Poster/IMG 9.jpg";
import IMG10 from "../../Images/Poster/IMG 10.jpg";
import IMG11 from "../../Images/Poster/IMG 11.jpg";
import IMG12 from "../../Images/Poster/IMG 12.jpg";
import IMG14 from "../../Images/Poster/IMG 14.jpg";
import IMG15 from "../../Images/Poster/IMG 15.jpg";
import IMG16 from "../../Images/Poster/IMG 16.jpg";
import IMG17 from "../../Images/Poster/IMG 17.jpg";
import IMG18 from "../../Images/Poster/IMG 18.jpg";
import IMG19 from "../../Images/Poster/IMG 19.jpg";
import IMG20 from "../../Images/Poster/IMG 20.jpg";
import IMG21 from "../../Images/Poster/IMG 21.jpg";
import IMG22 from "../../Images/Poster/IMG 21.jpg";
import IMG23 from "../../Images/Poster/IMG 21.jpg";
import {Link} from "react-router-dom";

export default function Seni() {
    return (
    <div className="carousel-container-seni">
    <div className="carousel-wrapper">
    <div className="font-wrapper-seni">
        <h1>SENI</h1>
    </div>
        <Carousel>
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG1}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG2}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG3}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG5}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG6}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG7}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG8}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG9}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG10}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG11}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG12}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG14}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG15}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG16}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG17}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG18}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG19}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG20}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG21}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG22}
                alt="Third slide"
                />
  
            </Carousel.Item>  
            <Carousel.Item interval={2000} >
    
                <img 
                className="w25 rounded mx-auto d-block img1"
                src={IMG23}
                alt="Third slide"
                />
  
            </Carousel.Item>  
        </Carousel>
    </div>
    
    <div className="btn-container-seni">
        <Link to="/">
        <button>BACK TO HOMEPAGE</button>
        </Link>
    </div>

    </div>
    )
}
