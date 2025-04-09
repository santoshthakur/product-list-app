export const addToCart= (value)=>{
    return {
        type:"UPDATE_CART",
        value
    }
}
export const removeFromCart= (value)=>{
    return {
        type:"REMOVE_CART",
        value
    }
}