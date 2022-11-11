import React from 'react';
import { Header, Social } from '@components';
import './styles.css';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <Social />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
