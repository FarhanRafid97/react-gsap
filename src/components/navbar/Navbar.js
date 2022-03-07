import React, { useEffect, useState, useRef } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { gsap } from "gsap";








const Navbar = () => {
const navbar = useRef()
const h3Nav = useRef()

  useEffect(() => {
    // gsap.from(navbar.current, { duration: 2, opacity:'-110%',ease:'expo.out' });
    // gsap.from(h3Nav.current, { duration: 1,opacity:0, delay :1 });
    gsap.from('.navbar', { duration: 1,y:-100,ease:'circ.out', delay :1.6 });
  });
    const [menu, setMenu] = useState('')
    const toggleMenu =()=> setMenu(!menu)

  
  return (
    <>
    
    <div className="navbar" ref={navbar}>
    <h3 ref={h3Nav}>MY LOGO</h3>
    <div className="menu">
    
<div className="link"><GiHamburgerMenu /></div>

     
    </div>
    </div>
    </>

  )
}

export default Navbar