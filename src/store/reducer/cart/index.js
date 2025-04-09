
const initialState={
    cart:{}
}

export default function cartReducer(state = initialState, action){
    const {value}=action
    // switch(action?.type){
    //     case "UPDATE_CART":{
    //         const oldState= {...state};
    //         oldState.cart={...oldState.cart};
    //         const key =value["id"];
    //         oldState.cart[key]= value 
    //         return oldState  
    //     }
    //     case "REMOVE_CART":{
    //         const oldState= {...state};
    //         const oldCart = {...oldState.cart}
    //         delete oldCart[value];
    //         oldState.cart={...oldCart}
    //         return oldState
    //     }
    //     default:{
    //         return state
    //     }
    // }






    switch (action?.type) {
        case "UPDATE_CART": {
          const oldState = { ...state };
          const oldCart = { ...oldState.cart };
          const key = value.id;
            console.log(oldCart)
          // Check if item already exists in cart
          if (oldCart[key]) {
            // Increment quantity
            oldCart[key] = {
              ...oldCart[key],
              quantity: oldCart[key].quantity + 1,
            };
          } else {
            // Add new item with quantity 1
            oldCart[key] = {
              ...value,
              quantity: 1,
            };
          }
    
          return {
            ...oldState,
            cart: oldCart,
          };
        }
    
        case "REMOVE_CART": {
          const oldState = { ...state };
          const oldCart = { ...oldState.cart };
          delete oldCart[value];
          return {
            ...oldState,
            cart: oldCart,
          };
        }
    
        default:
          return state;
      }











}