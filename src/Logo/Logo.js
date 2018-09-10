import React from 'react';
import './Logo.css';
import logo from '../common/logo.svg' ;

class Logo extends React.Component{
  render (){
    return(
        <div className="logo">
          <img
            id='logo'
            src={logo}
            alt='LOGO'/>

        </div>
    );
  }
}
export default Logo;
