

export const reducer = (state,action) => {
    let newState
    
    switch(action.type){
      case "INCREMENT":
        newState = {...state,count:state.count+1}
        break
      case "DECREMENT":
        newState = {...state,count:state.count-1}
        break
  
      case "SET_RESET":
        newState = {...state,reset:parseInt(action.payload)}
        break
  
      case "RESET":
        newState = {...state,count:state.reset}
        break
  
    }
  
    return newState
  }

