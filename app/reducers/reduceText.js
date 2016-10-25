    const todo = (state="", action) => {  
      
      switch (action.type) {  
        case 'TEXT_UPDATE':  
        //新的state  
          return  action.text   
        default:  
          //返回原来的state  
          return state  
      }  
    }  
      
    export default todo  