import React from 'react'
import {
  Home,
  WebDesing,
  SocialMedia,
  Commercials,
  Prints,
  Photographs,
  GraphicDesign,
  Uniforms
} from '@pages'
import './styles.css'
const HandlePages = ({pageSelected}) => {
  const pages=[
    <Home/>,
    <WebDesing/>,
    <SocialMedia/>,
    <Commercials/>,
    <Prints/>,
    <Photographs/>,
    <GraphicDesign/>,
    <Uniforms/>
  ]
  return (
    <div className="HandlePages">
      {
        pages.map((item,index)=>(
          <div className={pageSelected==index?"Pages SelectedPage":"Pages NoSelectedPage"} key={index}>
            {item}
          </div>
        ))
      }
    </div>
    
  )
}

export default HandlePages