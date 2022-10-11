import React,{useState} from 'react'
import {MenuItem} from '@components'
import './styles.css'
import {
  WebIcon,
  SocialMediaIcon,
  ADIcon,
  PrintIcon,
  GraphicDesignIcon,
  CameraIcon,
  ShirtIcon,
} from '../../../public/images/Icons'

const data=[
  {
    title:"Home",
    icon:""
  },
  {
    title:"Diseño Web",
    icon:<WebIcon/>
  },
  {
    title:"Redes Sociales",
    icon:<SocialMediaIcon/>
  },
  {
    title:"Anuncios Publicitarios",
    icon:<ADIcon />
  },
  {
    title:"Impreciones",
    icon:<PrintIcon/>
  },
  {
    title:"Diseño Grafico",
    icon:<GraphicDesignIcon/>
  },
  {
    title:"Fotografia Audiovisuales",
    icon:<CameraIcon/>
  },
  {
    title:"Uniformes",
    icon:<ShirtIcon/>
  },
  {
    title:"SMS",
    icon:''
  },
]

const MenuList = ({handleClick,pageSelected}) => {
  return (
    <div className="MenuList">
      {data.map((item,index)=>(
        <MenuItem
          title={item.title}
          pageSelected={pageSelected}
          key={index}
          index={index}
          handleClick={handleClick}
          icon={item.icon}
        />
      ))}
    </div>
  )
}

export default MenuList