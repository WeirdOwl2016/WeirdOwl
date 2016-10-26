/**
*
 */ 
import * as test from './CH/test';

const ch = {
    ...test 
}

/**
 */
const language = (code) => {  
  if(code){
        if(ch[code]){
            return ch[code];
        }else{
            return null;
        }
    }else{
        return ch;
    }
}  
  
export default language 
