import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const STYLE =['btn--primary','btn--outline']
const SIZE =['btn--medium','btn--large']

const Button = ({children,type,onClick,buttonStyle,buttonSize}) => {
  const checkButtonStyle=STYLE.includes(buttonStyle)?buttonStyle:STYLE[0]
  const checkButtonSize=SIZE.includes(buttonSize)?buttonSize:STYLE[0]

    return (
    <>
      <Link>
      <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      
      type={type}
      onClick={onClick}
      >
      {children}
      </button>
      </Link>
    </>
  )
}

export default Button
