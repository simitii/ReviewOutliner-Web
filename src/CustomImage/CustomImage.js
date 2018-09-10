import React from 'react';
import './CustomImage.css';
import logo from '../common/logo.svg' ;

class CustomImage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loaded : false,
      imageLoadingError : false,
    }
    this.onload = this.onload.bind(this);
    this.onerror = this.onerror.bind(this);
  }
  onload(){
    this.setState({loaded:true});
  }

  onerror(){
    this.setState({loaded:true, imageLoadingError: true});
  }

  render (){
    if(!this.state.imageLoadingError){
      return(
        <div>
          <div style={this.state.loaded ? {display: "none"}: {display: "block"}}>
            <img src={logo} alt='Loading'/>
            <p>Loading</p>
          </div>
        <img {...this.props} onError={this.onerror} onLoad={this.onload}/>
        </div>
      );
    }else{
      return(
        <div>
        <img src={logo} alt='Error'/>
        <p>No Photo</p>
      </div>
      )
    }
  }
}
export default CustomImage;
