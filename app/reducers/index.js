import { combineReducers } from 'redux'  
import reduceNum from './reduceNum'  
import reduceText from './reduceText'  
  
const todoApp = combineReducers({  
  num:reduceNum,  
  text:reduceText  
})  
  
export default todoApp