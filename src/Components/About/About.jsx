import React from 'react';
import './About.css';
import theme_pattern from '/Users/roshish/Desktop/portfolio-react/src/assets/theme_pattern.svg';
import profile_img from '/Users/roshish/Desktop/portfolio-react/src/assets/about_profile.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt='' />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Proficient in creating responsive, visually appealing, and cross-device compatible web applications using advanced CSS techniques and React's component-based architecture.</p>
            <p>Strong command of JavaScript and Next.js for dynamic, interactive development with efficient state management, server-side rendering, and static site generation for improved performance and SEO.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: '50%' }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: '70%' }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: '60%' }} /></div>
            <div className="about-skill"><p>Next JS</p><hr style={{ width: '50%' }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>6+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About;
