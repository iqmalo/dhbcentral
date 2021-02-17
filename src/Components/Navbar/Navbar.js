import React, {useState} from 'react'
import hamburger from "../../Images/Icon/hamburger.png"
import logo from "../../Images/Content/LOGO.png"

const Navbar = () => {

    const [open, setOpen] = useState(false);

    function handleClick(){
        setOpen(!open);
    }

    return (
        <>
          <div className="nav-container">
          <div className="logo-wrapper">
                  <div className="logo-dhb">
                  <img className = "logo" src={logo} alt=""/>
                  <a href="#home">DHB Central</a>
                  </div>
          </div>

          <button onClick={handleClick}><img className= "ham" src={hamburger} alt="menu burger icon"/></button>

          {open && (
          <div className="nav-links">
          <div className="menu-container">
            <a href="#home" onClick={handleClick}>Home</a>
            <a href="#story" onClick={handleClick}>Our Story</a>
            <a href="#menu" onClick={handleClick}>Menu</a>
            <a href="#reviews" onClick={handleClick}>Reviews</a>
            <a href="#findus" onClick={handleClick}>Find Us!</a>
            <a href="#contact" onClick={handleClick}>Contact Us!</a>
          </div>
          </div>
          )}


          <div className="menu-container-desktop">
            <div className="link-holder">
            <a href="#home">Home</a>
            <a href="#story">Our Story</a>
            <a href="#menu">Menu</a>
            <a href="#reviews">Reviews</a>
            <a href="#findus">Find Us!</a>
            <a href="#contact">Contact Us!</a>
            </div>
          </div>
          
          </div>

        </>
    )
}

export default Navbar
