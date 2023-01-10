import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import './App.css';
import { fetchProducts } from './redux/features/storeSlice';
import { AppDispatch } from './redux/store/store';

function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div >

    </div>
  );
}

export default App;
