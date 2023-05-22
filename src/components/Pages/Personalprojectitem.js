import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'


const Personalprojectitem = (props) => {
  return (
    <>
    <li className='personal-item'>
        <Link className='personal-link' to={props.link}>
          <figure className='personal_pic-wrap' data-category={props.lable}>
        <img className='personal-img' src={props.src} alt='images' />
        </figure>
        <div className='personal-info'>
        <h5 className='personal-text'>{props.text}</h5>
        </div>
        </Link>
        
    </li>
    </>
  )
}

export default Personalprojectitem
