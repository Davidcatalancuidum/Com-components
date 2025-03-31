import { useState } from 'react'
import './App.css'
import { SizeSelector } from './components/SizeSelector';


function App() {
  const [currentSize, setCurrentSize] = useState('M');
  const [currentColor, setCurrentColor] = useState('none')

  return (
    <div className='App'>
      <h1>Talla seleccionada: { currentSize }</h1>
      <SizeSelector 
        selectedSize={ currentSize }
        onSizeChange={ setCurrentSize }
      />
      
    </div>
  )
}

export default App
