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
import Pantry from "./Components/Pantry/Pantry.js"
import Seni from "./Components/Seni/Seni.js"
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {

  return (
    <Router>
    <div>
    <Navbar />
    <Route path = "/" exact component = {Hero} />
    <Route path = "/" exact component = {Story} />
    <Route path = "/" exact component = {Menu} />
    <Route path = "/" exact component = {Pantry} />   
    <Route path = "/" exact component = {Reviews} /> 
    <Route path = "/" exact component = {FindUs} />  
    <Route path = "/" exact component = {Contact} />
    <Route path = "/" exact component = {Loyalty} />
    <Route path="/Seni" component={Seni} />
    <Footer />
    </div>
    </Router>
  )
}

export default App;
