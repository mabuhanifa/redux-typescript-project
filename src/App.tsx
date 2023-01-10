import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import './App.css';
import { useAppSelector } from './hooks/useTypedSelectors';
import { addToCart, fetchProducts, ProductType } from './redux/features/storeSlice';
import { AppDispatch } from './redux/store/store';



function App() {
  const { store: { products, cart } } = useAppSelector((state) => state);
  console.log(cart)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  const fnAddToCart = (product: ProductType) => {
    dispatch(addToCart(product))
  }
  return (
    <div >
      {products && products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <button onClick={() => fnAddToCart(product)}>Add to Cart</button>
        </div>
      ))
      }
    </div>
  );
}

export default App;
