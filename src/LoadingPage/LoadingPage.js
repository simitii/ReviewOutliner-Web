import React,{Component} from 'react';
import './LoadingPage.css';
import logo from '../design/logo.svg' ;

class LoadingPage extends Component{
  render (){
    return(
        <div className="LoadingPage">
          <img
            id='loadLogo'
            src={logo}
            alt='Loading'/>
        </div>
    );
  }
}
export default LoadingPage;
