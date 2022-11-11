import React, { useState } from 'react';
import { MenuItem } from '@components';
import './styles.css';
import {
  WebIcon,
  SocialMediaIcon,
  ADIcon,
  PrintIcon,
  GraphicDesignIcon,
  CameraIcon,
  ShirtIcon,
} from '../../../public/images/Icons';
//"../../../public/images/IconMenu01.png"
import IconMenu01 from '/public/images/Icons/IconMenu01.png';
import IconMenu02 from '/public/images/Icons/IconMenu02.png';
import IconMenu03 from '/public/images/Icons/IconMenu03.png';
import IconMenu04 from '/public/images/Icons/IconMenu04.png';
import IconMenu05 from '/public/images/Icons/IconMenu05.png';
import IconMenu06 from '/public/images/Icons/IconMenu06.png';
import IconMenu07 from '/public/images/Icons/IconMenu07.png';
import IconMenu08 from '/public/images/Icons/IconMenu08.png';
import IconMenu09 from '/public/images/Icons/IconMenu09.png';
import LogoSmall from '../../../public/images/Icons/Logo_small';

const data = [
  {
    title: 'Inicio',
    icon: IconMenu01,
  },
  {
    title: 'Diseño Web',
    icon: IconMenu02,
  },
  {
    title: 'Redes Sociales',
    icon: IconMenu03,
  },
  {
    title: 'Anuncios \n Publicitarios',
    icon: IconMenu04,
  },
  {
    title: 'Impreciones',
    icon: IconMenu05,
  },
  {
    title: 'Diseño Grafico',
    icon: IconMenu06,
  },
  {
    title: 'Fotografia Audiovisuales',
    icon: IconMenu07,
  },
  {
    title: 'Uniformes',
    icon: IconMenu08,
  },
  {
    title: 'SMS',
    icon: IconMenu09,
  },
];

const MenuList = ({ handleClick, pageSelected }) => {
  return (
    <div className="MenuList">
      {data.map((item, index) => (
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
  );
};

export default MenuList;
