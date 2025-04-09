import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import style from './ProductListing.module.css'
import { addToCart } from '../store/actions/cart';

export default function ProductListing() {
  const products = useSelector((state) => state.productList.products);
  const isLoading = useSelector((state) => state.productList.isLoading);
  const error = useSelector((state) => state.productList.error);
  const dispatch = useDispatch()
  function handleAddToCart(product){
    return ()=>{
      dispatch(addToCart(product))
    }
  }
// console.log("=====", isLoading)
  if (isLoading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <div className={style.cardWrap}>
      {products && products.map((product) => (
        <div className={style.cardItem} key={product.id}>
          <div className={style.img}>
            <img src={product.image} alt={product.title} />
          </div>
          <div className="mt-2">{product.title}</div>
          <button onClick={handleAddToCart(product)}>Add to cart</button>
          <div className="mt-2">${product.price}</div>
        </div>
      ))}
    </div>
  );
}
