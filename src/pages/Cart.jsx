import { useDispatch, useSelector } from "react-redux"
import style from "./cart.module.css"
import { removeFromCart } from "../store/actions/cart";

export default function Cart() {
   const basket= useSelector((state)=>state.cartList.cart) || {};
   const total = Object.values(basket).reduce((acc, item) => {
    return acc + item.price * (item.quantity || 1);
  }, 0);
  const isEmpty= Object.keys(basket).length === 0
   const dispatch= useDispatch();
   function handlerRemove(id){
    return ()=>{
      dispatch(removeFromCart(id))
    }
   }
   console.log("basket====",basket)
   return (
    <>
    <div style={{padding:"24px"}}>
{
 isEmpty ? ( <div className={style.emptyCart}>No item selected</div>): (
  Object.keys(basket).map((key) => {
    const product = basket[key];
    console.log("Key ==",basket[key])
    const { title, image, price, id, quantity = 1 } = product;
    return (
  
      <div className={style["cart-card"]} key={id}>
        <div className={style.cartImg}>
          <img src={image} alt='' />
        </div>
        <div className={style.cartProInfo}>
          <div>
          {title}
          </div>
          <div className="mt-2">
             {quantity} = ${price * quantity}
          </div>
          <div>
          <button onClick={handlerRemove(id)} className="btn">Remove</button>
          </div>
            

        </div>
      </div>
    );
})
)
}
 </div>
 {!isEmpty && (<div className={style.priceInfo}>Total: ${total.toFixed(2)}</div>)}
 
 </>
  );
}