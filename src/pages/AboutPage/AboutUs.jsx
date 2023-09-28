import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import image from '../../assets/images/contact.jpg'
import image2 from '../../assets/images/pic2.jpg'

import {AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai"

import team1 from '../../assets/images/team1.jpg'
import team2 from '../../assets/images/team2.jpg'
import team3 from '../../assets/images/team3.jpg'

import './aboutus.css'  

import Testimonial from '../../components/testimonial/Testimonial'
import JoinUs from '../../components/joinUs/JoinUs'
import CTA from '../../components/cta/CTA'
import Stats from '../../components/stats/Stats'

const AboutUs = () => {
  return (
    <div className='aboutus' id='about'>
        <Navbar />
        <div className="aboutus-container">
          <div className="contact-header">
                <div className="contact-header-image">
                <div className='contact-opacity'></div>
                  <img src={image} alt="contact" />
                </div>
                <div className="contact-header-text">
                  <h1>About Us</h1>
                </div>
          </div>
        <div className="aboutpage-content-container">
          <div className="aboutpage-content-image">
            <img src={image2} alt="" />
          </div>
          <div className="aboutpage-content">
          <div className="aboutpage-content-title">
              <div className="home-causes-title" style={{marginBottom: '0' }}>
                    <div className="about-vertical"></div>
                      <h1 style={{color: '#75C2F6', fontSize: '18px', fontWeight:'900', marginLeft: '0.4rem'}} >Who we are</h1>
                </div>
                <h1>We are committed to saving more lives. </h1>
                <p>We are trusted by our clients and have a reputation for the best services in the field. Lorem ipsum is simply free text dolor sit amett consectetur adipiscing elit. It is a long established fact that a reader will be distracted by the readable content of a page.</p>
              <div className="aboutpage-mvs-container">
                <div className="aboutpage-mvs">
                  <h4>Our Misson</h4>
                  <p>To promote an emotional, mental and economic shelter for oppressed widows and less privilege children and youth, reassuring them of a brighter future despite all emotional and domestic abuse they have experienced. </p>
                </div>
                <div className="aboutpage-mvs">
                  <h4>Our Vision</h4>
                  <p>To provide succor and comfort to marginalized widows and less privileged across Nigeria. </p>
                </div>
                <div className="aboutpage-mvs">
                  <h4>Our Values</h4>
                  <p>Hope, Compassion, Long, Resilience, Empathy, Collaboration, Integrity and Accountability. </p>
                </div>
                
              </div>
              </div>
          </div>
        </div>
        <Testimonial />
        <JoinUs />
        <div className='aboutpage-team-overall'>
          <Stats />
          <div className="aboutpage-team-container">
            <div className="contact-feedback-title about-margin">
                <div className="home-causes-title">
                      <div className="about-vertical"></div>
                      <h1 style={{color: '#75C2F6', fontSize: '18px', fontWeight:'900'}} >Our Team</h1>
                  </div>
                  <p>Meet the team behid our success story. </p>
            </div>
            <div className="aboutpage-team-content">
              <div className="aboutpage-team">
                <div className="aboutpage-team-image">
                  <img src={team1} alt="Team" />
                </div>
                <h1>Chidimma Okafor</h1>
                <p>CEO</p>
                <div className="aboutpage-team-socials">
                  <div className="team-socials">
                    <AiOutlineTwitter className='team-icon'/>
                  </div>
                  <div className="team-socials">
                    <AiFillFacebook className='team-icon'/>
                  </div>
                  <div className="team-socials">
                    <AiOutlineInstagram className='team-icon'/>
                  </div>
                </div>
              </div>
              <div className="aboutpage-team">
                <div className="aboutpage-team-image">
                  <img src={team2} alt="Team" />
                </div>
                <h1>Nancy Emeka</h1>
                <p>Volunteer</p>
                 <div className="aboutpage-team-socials">
                  <div className="team-socials">
                    <AiOutlineTwitter className='team-icon'/>
                  </div>
                  <div className="team-socials">
                    <AiFillFacebook className='team-icon'/>
                  </div>
                  <div className="team-socials">
                    <AiOutlineInstagram className='team-icon'/>
                  </div>
                </div>
              </div>
              <div className="aboutpage-team">
                <div className="aboutpage-team-image">
                  <img src={team3} alt="Team" />
                </div>
                <h1>Seun Adeleye</h1>
                <p>Volunteer</p>
                <div className="aboutpage-team-socials">
                  <div className="team-socials">
                    <AiOutlineTwitter className='team-icon'/>
                  </div>
                  <div className="team-socials">
                    <AiFillFacebook className='team-icon'/>
                  </div>
                  <div className="team-socials">
                    <AiOutlineInstagram className='team-icon'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutpage-support-container">
          <div className="gallery-title" style={{margin:'0'}}>
                  <h3 >How you can support</h3>
              </div>
              <div className="aboutpage-support-header">
                <h2>We offer platforms for our partners to collaborate with us in solving the issues that affect widows and less privileged through the provision of free services such as:</h2>
              </div>
              <div className="aboutpage-support-content-container">
                <div className="aboupage-support-content">
                  <h2>Healthcare Services </h2>
                  <ul>
                    <li>Assistance in promoting healthier lifestyles</li>
                    <li>Supply/donation of medications and other health care products</li>
                    <li>Corporate partnership with healthcare institutions for the free treatments of widows and orphans.</li>
                    <li>Free eye health services.</li>
                  </ul>
                </div>
                <div className="aboupage-support-content">
                  <h2>Human Capital Development/Training </h2>
                  <ul>
                    <li>Enterprise development training</li>
                    <li>Skills acquisition and vocational training</li>
                    <li>Agribusiness (farming, fishery, piggery, poultry, etc.)</li>
                    <li>Donation of machineries/equipment e.g., sewing machines</li>
                    <li>Donation of farmlands and other tools for positioning beneficiaries better for success.</li>
                  </ul>
                </div>
                <div className="aboupage-support-content">
                  <h2>Financial aids </h2>
                  <ul>
                    <li>Specific donations to one or more individual widows or children/youth for daily needs</li>
                    <li>Investments in widow’s small business</li>
                    <li>Providing scholarships for children and youth</li>
                  
                  </ul>
                </div>
                <div className="aboupage-support-content">
                  <h2>Mentorship Program </h2>
                  <ul>
                    <li>Responsible individuals are welcome to mentor our beneficiaries in the areas of their interest.</li>
                   
                  </ul>
                </div>
              </div>

        </div>
        <div>
        <CTA />
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default AboutUs