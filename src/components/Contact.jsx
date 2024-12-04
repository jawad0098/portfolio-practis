import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1 data-aos="fade-right"
                    data-aos-duration="2000">CONTACT ME</h1>
        <div className="contact-icon">
            <a data-aos="fade-right"
                    data-aos-duration="1000" href='https://www.instagram.com' target='_blank' className="items"><FaInstagram className='icons'  /></a>
            <a data-aos="fade-right"
                    data-aos-duration="1500" href='https://www.facebook.com' target='_blank' className="items"><CiFacebook className='icons' /></a>
            <a data-aos="fade-right"
                    data-aos-duration="2000" href='https://www.linkedin.com' target='_blank' className="items"><CiLinkedin className='icons' /></a>
            <a data-aos="fade-left"
                    data-aos-duration="1000" href='https://www.twitter.com' target='_blank' className="items"><FaSquareXTwitter className='icons' /></a>
            <a data-aos="fade-left"
                    data-aos-duration="1500" href='https://www.github.com' target='_blank' className="items"><FaSquareGithub className='icons' /></a>
            <a data-aos="fade-left"
                    data-aos-duration="2000" href="mailto:hassanjawad858@gmail.com" target='_blank'  className="items"><SiGmail className='icons' /></a>
          
        </div>
      </div>
    </>
  )
}

export default Contact
