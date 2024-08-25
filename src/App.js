
import { useState } from 'react';
import './App.css';
import C1 from './C1';
import GlobalContext from './context';

function App() {

  const [giris,setGiris] = useState(false)
  const veri = {giris,setGiris}  // birden fazla veriyi göndereceksek obje biçiminde tanımlıyoruz
  return (
   
    <GlobalContext.Provider value={veri}>
      <C1 />
    </GlobalContext.Provider>
   
  );
}

export default App;
