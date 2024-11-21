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
      <div className="conatiner contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon">
            <a href='https://www.instagram.com' target='_blank' className="items"><FaInstagram className='icons'  /></a>
            <a href='https://www.facebook.com' target='_blank' className="items"><CiFacebook className='icons' /></a>
            <a href='https://www.linkedin.com' target='_blank' className="items"><CiLinkedin className='icons' /></a>
            <a href='https://www.twitter.com' target='_blank' className="items"><FaSquareXTwitter className='icons' /></a>
            <a href='https://www.github.com' target='_blank' className="items"><FaSquareGithub className='icons' /></a>
            <a href="mailto:" target='_blank'  className="items"><SiGmail className='icons' /></a>
          
        </div>
      </div>
    </>
  )
}

export default Contact
