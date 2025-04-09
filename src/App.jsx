
import Nav from './components/Nav'
import ProductListing from './pages/ProductListing'
import useNetwork from './custom-hook/useNetwork'
import { useState } from 'react';
import Cart from './pages/Cart';


function App() {
const [showCart, setShowCart]= useState(false);
const {products}=useNetwork("https://fakestoreapi.com/products?limit=10");
function addToCart(){
  setShowCart(!showCart)
}
console.log(showCart)
  return (
    <>
    <Nav addToCart={addToCart} />
    {showCart &&<Cart/>}
    {!showCart && products && <ProductListing />} 
    </>
  )
}

export default App
