import React, { Component } from 'react';
import "./motto.css"

class Motto extends Component {

    render (){
        return(
            <p>{this.props.motto}</p>
        );
    }
}
export default Motto;
