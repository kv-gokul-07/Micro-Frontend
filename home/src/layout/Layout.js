import React from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import "./Layout.css";

const Layout = ({children}) => {
  return (
    <div className='cutomLayout'>
      <Header />
        <div className='childrenComp'>
        {children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout
