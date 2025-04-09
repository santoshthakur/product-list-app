import { useSelector } from 'react-redux'
import styles from './Nav.module.css'

export default function Nav({addToCart}) {
  const cart= useSelector((state)=> state.cartList.cart);
  console.log("Navigation", cart)
  //const cartCount= Object.keys(cart || {}).length;
  const cartCount = Object.values(cart || {}).reduce((total, item) => total + (item.quantity || 1), 0);

  console.log(cartCount)
  return (
    <div className={styles.headerWrap}>
      <h1>Redux example</h1>
      <button className='btn' onClick={addToCart}>Cart{cartCount}</button>
    </div>
  )
}
