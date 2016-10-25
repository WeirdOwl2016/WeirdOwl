    // import reducers from './reducers'  
    // import { createStore } from 'redux'  
      
    // let initState = { num: 0,text:""};  
    // let store = createStore(reducers,initState);  

    export const addTodo = (num) => {  
  return {  
    type: 'INCREMENT',  
    num: num,  
  }  
}  
  
export const decTodo = (num) => {  
  return {  
    type: 'DECREMENT',  
    num: num,  
  }  
}  
  
export const updateText = (text) => {  
  return {  
    type: 'TEXT_UPDATE',  
    text: text,  
  }  
} 