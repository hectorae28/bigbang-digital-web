import React from 'react'
import {Header} from '@components'
import './styles.css'

const Layout = ({children}) => {
  return (
    <div className="Layout">
      <Header/>
      <div className="container">{children}</div>
    </div>
  )
}

export default Layout