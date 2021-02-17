import React from "react"
import Hero from "./Components/Hero/Hero.js";
import Navbar from "./Components/Navbar/Navbar.js";
import Story from "./Components/Story/Story.js";
import Menu from "./Components/Menu/Menu.js";
import Reviews from "./Components/Reviews/Reviews.js";
import FindUs from "./Components/FindUs/FindUs.js"
import Contact from "./Components/Contact/Contact.js"
import Footer from "./Components/Footer/Footer.js"
import Loyalty from "./Components/Loyalty/Loyalty.js"



function App() {

  return (
    <div>
    <Navbar />
    <Hero />
    <Story />
    <Menu />
    <Reviews />
    <FindUs />
    <Contact />
    <Footer />
    <Loyalty />
    </div>
  )
}

export default App;
