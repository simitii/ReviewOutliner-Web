import React, {Component} from 'react';
import './Path.css';

class Path extends Component {

  last (array, n) {
    if (array == null) return void 0;
    if (n == null) return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
  }
  parse (pathProduct) {
      var newPath = pathProduct.split("/");
      if(newPath.length > 3){
        return this.last(newPath,3).join("/");
      }
      return newPath.join("/");
  }

  render(){



    return (
      <div>
        <p>{this.parse(this.props.path)}</p>
      </div>

      
    );
  }
}
export default Path;
