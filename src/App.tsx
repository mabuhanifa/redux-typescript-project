import { useSelector } from 'react-redux/es/exports';
import './App.css';

function App() {
  const store = useSelector((state) => state);
  console.log(store)
  return (
    <div >

    </div>
  );
}

export default App;
