import React from 'react';
import {
  EmailIcon,
  IGIcon,
  FBIcon,
  TKIcon,
  PHIcon,
} from '../../../public/images/Icons';
import './styles.css';

const Social = () => {
  return (
    <nav className="Social">
      <a
        className="link mail"
        href="mailto:elbigbangdigital.1@gmail.com"
        target="_blank"
      >
        <EmailIcon width={50} />
      </a>
      <a
        href="https://instagram.com/bigbangdigital_"
        className="link ig"
        target="_blank"
      >
        <IGIcon width={50} />
      </a>
      <a
        href="https://www.facebook.com/Elbigbangdigital/"
        className="link fb"
        target="_blank"
      >
        <FBIcon width={50} />
      </a>
      <a
        href="https://www.tiktok.com/@elbigbangdigital"
        className="link"
        target="_blank"
      >
        <TKIcon width={45} />
      </a>
      <a href="https://wa.me/584121772468" className="link" target="_blank">
        <PHIcon width={45} />
      </a>
    </nav>
  );
};

export default Social;
