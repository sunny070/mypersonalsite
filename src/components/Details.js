import React from 'react'
import './Details.css'
import '../App.css'
// import { Link } from 'react-router-dom'
import resume from './Resume.pdf'
// import "./Button.css"
import pro from '../image/pro.png'


const Details = () => {
  return (
    <>

      <div className='details-container'>
        {/* <video src='/videos/video.mp4' autoPlay loop muted/> */}

        <div className='bio'>
          <h1>"I Am Sunny"</h1>
          <h2>a Front-end Web Developer</h2>
          <h3>from Aizawl,Mizoram<br />
            Iam a Graduate of<br />
            National Institute of Technology,Mizoram<br />
            Where I earned a degree in<br />
            Computer Science and Engineering</h3>
          <br />
          <a href={resume} download="Resume" className='btnd'> Download Resume</a>
        </div>
        <div className='pro'>
          < img className='img' src='/image/pro.png' alt='' />
        </div>

      </div>




    </>
  )
}

export default Details
