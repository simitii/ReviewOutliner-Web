import React from 'react';
import './ErrorPage.css';
import logo from '../design/logo.svg' ;

class ErrorPage extends React.Component{
  render (){
    return(
        <div className="ErrorPage">
          <img
            id='errorLogo'
            src={logo}
            alt='errorRaised!'/>
            <h2>{this.props.statusCode}</h2>
            <p>{this.props.statusText}</p>
        </div>
    );
  }
}
export default ErrorPage;
