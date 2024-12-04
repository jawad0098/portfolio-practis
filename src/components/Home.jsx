import React from 'react'
import { useEffect, useRef } from 'react'
import pdf from '../pdf/jawad-2.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'

const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {
    const options = {
      strings: ['Welcome To My Profile', 'My Name Is M.Jawad', "I'm full Stack Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    }
    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <>
      <div className="container home" id='home'
      >
        <div className="left" 
        data-aos="fade-right"
        data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <p>
          I am a passionate front-end developer skilled in creating dynamic and responsive web interfaces. With expertise in HTML, CSS, JavaScript, and libraries like Bootstrap, Tailwind, and Material-UI, I bring designs to life with precision and creativity. I specialize in frameworks like ReactJS and Next.js, building seamless, user-focused experiences. My proficiency in jQuery enhances functionality, ensuring high-quality, interactive solutions for modern web applications.
          </p>
          <a href={pdf} download='Resume.pdf' className="btn btn-outline-warning my-4">Download Resume</a>
        </div>
        <div className="right"
         data-aos="fade-left"
        data-aos-duration="1000"
        >
          <div className="img">
            <img src={`./assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
