const todo = (state=0, action) => {  
  switch (action.type) {  
    case 'INCREMENT':  
      return state + 1  
    case 'DECREMENT':  
      return state - 1  
    default:  
      return state//返回原来的state  
  }  
}  
  
export default todo 