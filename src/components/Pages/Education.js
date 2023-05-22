import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const Education = () => {
  return (
    <>    <div className='education-container'>
            <h1>Education</h1>
            <hr/>
            <div className='education-des'>
        <div className='education-bach'>
        <h4>
            Bachelors<br/>
            National Institute of Technology,Mizoram<br/>
            August 2018 - June 2022<br/> 
            Computer Science and Engineering
        </h4>
        <Link to='https://www.nitmz.ac.in/' target='blank'>
        <img className='bach-img' src='../image/nit.jpg' alt='Nationa Institute of Technology'/>
        </Link>
        </div>
        <div className='education-higher'>
            <h4>Higher Secondary School<br/>
            Mount Carmel School<br/> 
            Pass out:May 2018 <br/>
            </h4>

         <Link to='https://mountcarmelschool.edu.in/'>  
        <img src='../image/mount.png' alt='Mount Carmel School' target='blank'/>
        </Link> 
        </div>
        <div className='education-high'>
            <h4>High Secondary School<br/>
            Mount Carmel School<br/>
            Pass out: May 2016 <br/>
            </h4>
            <Link to='https://mountcarmelschool.edu.in/' target='blank'>  
        <img src='../image/mount.png' alt='Mount Carmel School'/>
        </Link>
        </div>
        </div>

     
      


    </div>
    
    <Footer/>
  
    </>
)

}

export default Education
