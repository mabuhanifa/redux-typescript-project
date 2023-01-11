import { useEffect } from 'react';
import './App.css';
import Cart from './components/Cart';
import { useAppDispatch, useAppSelector } from './hooks/useTypedSelectors';
import { addToCart, fetchProducts, removeFromCart } from './redux/features/storeSlice';

function App() {
  const { store: { products, cart, status } } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  return (
    <div className='p-10 grid grid-cols-3'>
      <div className='col-span-2 grid grid-cols-3 gap-3 p-2'>

        {status === "pending" && <h1>loading.....</h1>}

        {products && products.map(product => (

          <div key={product.id} className="border border-gray-300 p-3 rounded shadow-lg relative h-[360px]">

            <img src={product.thumbnail} alt="" className='h-32 w-60 object-cover' />

            <h2 className='text-lg font-bold my-3'>{product.title}</h2>
            <p>
              {product.description}
            </p>
            <h4 className='font-bold'>Price : {product.price}</h4>
            <div className='flex justify-center absolute bottom-2 left-2 right-2'>

              {
                cart.some((c) => c.id === product.id) ?

                  <button className="bg-red-500 w-full py-2  text-white rounded"
                    onClick={() => dispatch(removeFromCart({ id: product.id }))}
                  >REMOVE</button>

                  :

                  <button onClick={() => dispatch(addToCart(product))}
                    className='w-full py-2 bg-indigo-700 text-white rounded'
                  >Add to Cart</button>

              }

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
