
import React from 'react';
import "./Header.css";

const Header = ({brandName, list}) => {

  return (
    <header>
        <div className='brandName'>{brandName || "Default Brand Name"}</div>
        <div>
            <ul>
              {list?.length > 0 ? list.map((item, index) => <li key={index}>{item}</li>) :  <li>No List Found</li>}
            </ul>
        </div>
    </header>
  )
}

export default Header
