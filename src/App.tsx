import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import './App.css';
import { useAppSelector } from './hooks/useTypedSelectors';
import { fetchProducts } from './redux/features/storeSlice';
import { AppDispatch } from './redux/store/store';



function App() {
  const { store: { products } } = useAppSelector((state) => state);
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  return (
    <div >
      {products && products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <button onClick={() =>}>Add to Cart</button>
        </div>
      ))
      }
    </div>
  );
}

export default App;
