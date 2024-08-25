
import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const inputRef = useRef(null)
  
 
  useEffect(()=> {
    inputRef.current.focus()
  },[])

  return (
   <>
    <input ref={inputRef} type='text' placeholder='Adınız'/>
   </>
  );
}

export default App;
