import React from 'react';
import Header from 'globalHeader/Header'
import Footer from 'globalHeader/Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import "./Layout.css";

const Layout = ({children}) => {
  return (
    <div className='cutomLayout'>
        <ErrorBoundary>
        <Header brandName={"AutoMobile"} list={["Home", "About Us", "Contact US"]} />
        </ErrorBoundary>
        <div className='childrenComp'>
          {children}
        </div>
      <Footer brandName={"Product Footer"} contact={"+91 8888888888"} />
    </div>
  )
}

export default Layout
