import React from 'react';
import "./Footer.css";

const Footer = ({brandName, contact}) => {
  return (
    <footer>
      <div className='brandName'>{brandName || "Default Brand Name"}</div>
      <div className='contact'>{contact || "+91 9999999999"}</div>
    </footer>
  )
}

export default Footer
