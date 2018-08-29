import React, {Component} from 'react';
import './Path.css';

class Path extends Component {

  //var ele = pathProduct.split("/");

  render(){
    function last (array, n) {
      if (array == null) return void 0;
      if (n == null) return array[array.length - 1];
      return array.slice(Math.max(array.length - n, 0));
    }
    function parse (pathProduct) {

        var newPath = pathProduct.split("/");
        if(newPath.length > 3){
          return last(newPath,3).join("/");
        }
        return newPath.join("/");
    }

    return (
      <div>
        <p>{parse(this.props.category_path)}</p>
      </div>
    );
  }
}
export default Path;
