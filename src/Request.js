import axios from 'axios';
import {DOMAIN} from './constants.js';


const POST = (path, query, history) => {
  return new Promise((resolve, reject) => {
    axios.post(DOMAIN + path, query)
      .then(res => resolve(res))
      .catch((e) => {
        if(!e.response){
          history.replace('/error=503/Service Unavailable')
        }else{
          history.replace('/error='+e.response.status+'/'+e.response.statusText)
        }
      });
  });

}
export {POST};
