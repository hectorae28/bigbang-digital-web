import React from 'react';
import {
  Home,
  WebDesing,
  SocialMedia,
  Commercials,
  Prints,
  Photographs,
  GraphicDesign,
  Uniforms,
  SMS,
  Contacts,
  ApiSms,
} from '@pages';
import './styles.css';
const HandlePages = ({ pageSelected, handleClick }) => {
  const pages = [
    <Home handleClick={handleClick} />,
    <WebDesing handleClick={handleClick} />,
    <SocialMedia handleClick={handleClick} />,
    <Commercials handleClick={handleClick} />,
    <Prints handleClick={handleClick} />,
    <GraphicDesign handleClick={handleClick} />,
    <Photographs handleClick={handleClick} />,
    <Uniforms handleClick={handleClick} />,
    <SMS handleClick={handleClick} />,
    <Contacts handleClick={handleClick} />,
    <ApiSms handleClick={handleClick} />,
  ];
  return (
    <div className="HandlePages">
      {pages.map((item, index) => (
        <div
          className={
            pageSelected == index
              ? 'Pages SelectedPage'
              : 'Pages NoSelectedPage'
          }
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default HandlePages;
