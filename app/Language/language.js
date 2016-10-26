/**
*
 */ 
import * as test from './EN/test';

const en = {
    ...test 
}

/**
 */
const language = (code) => {  
  if(code){
        if(en[code]){
            return en[code];
        }else{
            return null;
        }
    }else{
        return en;
    }
}  
  
export default language 
