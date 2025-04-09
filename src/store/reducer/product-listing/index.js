
const initialState= {
    products: [],
    // isLoading:false,
    // error:null
}
export default function productsReducer(state =initialState, action){
    switch(action?.type){
         case "UPDATE_LOADER" :{
            {
              
               const oldState= {...state};
               //console.log(oldState)
               oldState.isLoading=action.value;
              // console.log("UPDATE_LOADER",oldState)
               return oldState
            }
        }
        case "UPDATE_ERROR" :{
            {
                const oldState= {...state};
                oldState.error=action.value;
                //console.log("UPDATE_ERROR",oldState)
                return oldState
              
             }
        }
        case "UPDATE_DATA" :{
            {
                const oldState= {...state};
                oldState.products=action.value;
                //console.log("UPDATE_DATA",oldState)
                return oldState
             }
        }
        default:{
            return state
        }   
    }
}