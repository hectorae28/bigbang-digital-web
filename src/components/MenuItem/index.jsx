import React from 'react'
import './styles.css'

const MenuItem = ({title,pageSelected,handleClick,index,icon}) => {
  return (
    <div className={pageSelected==index?"MenuItem Selected":"MenuItem NoSelected"} onClick={()=>handleClick(index)}>
      <span className={
        title.split(' ').length>1 && title.length>18 ?
        'tagBig':
        'tagSmall'
        }>{title}</span>
        {icon}
    </div>
  )
}

export default MenuItem