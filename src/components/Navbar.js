import React, { useEffect, useState } from 'react'
import Home from '@mui/icons-material/Home';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import Button from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [click,setClick]=useState(false)
  const [button,setButton]=useState(true)

  
  const handleClick=()=>setClick(!click)
  const closeMobileMenu=()=>setClick(false)
  
  const showButton=()=>{
    if(window.innerWidth<=960){
      setButton(false)
    }else{
      setButton(true)
    }
  };
  useEffect(()=>{
    showButton();
  },[]);

  window.addEventListener('resize',showButton)

  return (
    <>
    <nav className='navbar'>
      <div className='nav-container'>
    <Link  className='navbar-logo' to='/'  onClick={closeMobileMenu}>
     Hello! <Home onClick={handleClick} className='home'/>
     </Link>
     <div className='menu-icon' onClick={handleClick}>
      {click ?<HorizontalSplitIcon className='hori'/> : <ClearSharpIcon className='clear'/>}
     </div>
     <ul onClick={handleClick} className={!click?'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'>
        <Link className='nav-link'to='/education' onClick={closeMobileMenu}>
        Education
        </Link>
      </li>
      <li className='nav-item'>
      <Link className='nav-link' to='/skills' onClick={closeMobileMenu}>
        Skills
        </Link>
      </li>
      <li className='nav-item'>
      <Link className='nav-link' to='/workexperience' onClick={closeMobileMenu}>
        Work Experience
        </Link>
      </li>
      <li className='nav-item'>
      <Link className='nav-link' to='/personalproject' onClick={closeMobileMenu}>
        Personal Project
        </Link>
      </li>
      <li className='nav-item'>
      <Link className="nav-link-mobile" to='/' onClick={closeMobileMenu}>
        Signup
        </Link>
        </li>
     </ul>
     {button&& <Button buttonStyle='btn--outline'>  Signup</Button>}

     </div>
     </nav>
    </>
  )
}

export default Navbar
