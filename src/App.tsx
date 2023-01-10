import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import './App.css';
import Cart from './components/Cart';
import { useAppSelector } from './hooks/useTypedSelectors';
import { addToCart, fetchProducts, ProductType } from './redux/features/storeSlice';
import { AppDispatch } from './redux/store/store';

function App() {
  const { store: { products, status } } = useAppSelector((state) => state);
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  const fnAddToCart = (product: ProductType) => {
    dispatch(addToCart(product))
  }
  return (
    <div className='grid grid-cols-3'>
      <div className='grid grid-cols-3 gap-5'>
        {status === "pending" && <h1>loading.....</h1>}
        {products && products.map(product => (
          <div key={product.id} className="border border-gray-300">
            <h2>{product.title}</h2>
            <button onClick={() => fnAddToCart(product)}>Add to Cart</button>
          </div>
        ))
        }
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
}

export default App;
