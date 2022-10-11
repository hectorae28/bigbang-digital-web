import React from 'react'
import LogoSmall from '../../../public/images/Icons/Logo_small'
import './styles.css'

const Header = () => {
  return (
    <div className="Header">
        <LogoSmall width="100" height="100" fill="#00f433"/>
        <h1>BigBang Digital</h1>
    </div>
  )
}

export default Header