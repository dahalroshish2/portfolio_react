import React from 'react'
import './Footer.css'
import footer_logo from '/Users/roshish/Desktop/portfolio-react/src/assets/logo.svg'
import user_icon from '/Users/roshish/Desktop/portfolio-react/src/assets/user_icon.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>With a strong foundation in web development, I specialize in creating responsive, visually appealing, and cross-device compatible web applications using advanced CSS techniques and React's component-based architecture.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your e-mail' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className='footer-bottom-left'>@ 2024 Roshish Dahal. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>

    </div>
  )
}

export default Footer