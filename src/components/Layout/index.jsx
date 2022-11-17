import React from 'react';
import { Header, Social } from '@components';
import './styles.css';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <div className="container">{children}</div>
      <Social />
    </div>
  );
};

export default Layout;
