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
    <div className='p-10 grid grid-cols-3'>
      <div className='col-span-2 grid grid-cols-3 gap-3 p-2'>
        {status === "pending" && <h1>loading.....</h1>}
        {products && products.map(product => (
          <div key={product.id} className="border border-gray-300 p-3 rounded shadow-lg">
            <img src={product.thumbnail} alt="" className='h-32 w-60 object-cover' />
            <h2>{product.title}</h2>
            <div className='flex justify-center'>
              <button onClick={() => fnAddToCart(product)}
                className='w-full py-2 bg-indigo-700 text-white rounded'
              >Add to Cart</button>
            </div>
          </div>
        ))
        }
      </div>
      <div className='p-2'>
        <Cart />
      </div>
    </div>
  );
}

export default App;
