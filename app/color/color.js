/**
*
 */
 
const COLOR_KEY = { 
    /****************************Coffee************************** */
    COFFEE_COLOR_1 : '#345678'
    /****************************Black************************** */ 
    }





/**
 */

const color = (colorName) => {  
  if(colorName){
        if(COLOR_KEY[colorName]){
            return COLOR_KEY[colorName];
        }else{
            return null;
        }
    }else{
        return COLOR;
    }
}  
  
export default color;
