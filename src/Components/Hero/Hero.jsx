 import React from 'react'
 import './Hero.css'
import profile_img from '/Users/roshish/Desktop/portfolio-react/src/assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';


 const Hero = () => {
   return (
     <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Roshish Dahal,</span>developer based in Nepal.</h1>
        <p>I am developer from Biratnagar, Nepal</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
            
        </div>

     </div>
   )
 }
 
 export default Hero