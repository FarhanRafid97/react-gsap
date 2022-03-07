import React from 'react'
import './header.css'
import { gsap } from "gsap";
import { useEffect } from 'react';
import photo1  from '../../img/photo1.jpeg'
import photo2  from '../../img/photo2.jpeg'
import photo3  from '../../img/photo3.jpeg'
import saly43 from '../../img/Saly-5.png'




const Header = () => {

  useEffect(() => {
    gsap.to('.block1', { duration: 0.7, scaleY:0,transformOrigin: "100% bottom",delay:0.3});
    gsap.to('.block2', { duration: 0.7, scaleY:0,transformOrigin: "100% top",delay:0.9});
    gsap.to('.block3', { duration: 0.7, scaleX:0,transformOrigin: "100% right",delay:1.5});
    gsap.to('.block',{duration: 2,display:'none'})
    gsap.to('.block4', { duration: 0.7, scaleX:0,transformOrigin: "100% left",delay:2.1});
    gsap.to('.block5', { duration: 0.7, scaleY:0,transformOrigin: "100% top",delay:2.7});
    gsap.to('.block6', { duration: 0.7, scaleX:0,transformOrigin: "100% right",delay:3.4});
    gsap.to('.block-foto',{duration: 4,display:'none'})
    gsap.to('.welcome',{duration: 1.5,color:'black',delay:0.2})
   
  });
  return (
    <div className="header">
  
   
  
    <div className="welcome">
    <div class="block">
    <div className="block1"></div>
    <div className="block2"></div>
    <div className="block3"></div>
    </div>
    <div className="text">
    <h3>HELLO MY NAME FARHAN</h3>
    <p>I'm a Front end web developer </p>
    <button className="button">EXPLORE MORE</button>
    </div>

    </div>
    <div class="foto">
    <div class="block-foto">
    <div className="block4"></div>
    <div className="block5"></div>
    <div className="block6"></div>
    </div>
<div class="photo1"></div>
<div class="photo2"></div>
<div class="photo3"></div>
    </div>

    </div>
  )
}

export default Header