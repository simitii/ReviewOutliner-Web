import axios from 'axios';
import {DOMAIN} from './constants.js';


const POST = (path, query) => {
  return new Promise((resolve, reject) => {
    axios.post(DOMAIN + path, query)
      .then(res => resolve(res))
      .catch((e) => {
        if(!e.response){
          this.props.history.replace('/error=503/Service Unavailable')
        }else{
          this.props.history.replace('/error='+e.response.status+'/'+e.response.statusText)
        }
      });
  });

}
export {POST};
