
import { useState } from 'react';
import './App.css';
import C1 from './C1';

function App() {

  const [adet,setAdet] = useState(0)

  return (
   <>
    <C1 adetDegeri = {adet} />
   </>
  );
}

export default App;
