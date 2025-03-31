import { useState } from 'react';
import './App.css';
import { SizeSelector } from './components/SizeSelector';
import { ColorSelector } from './components/ColorSelector';

function App() {
  const [currentSize, setCurrentSize] = useState('M');
  const [currentColor, setCurrentColor] = useState('Red');

  return (
    <div className='App'>
      <h1>Talla seleccionada: {currentSize}</h1>
      <SizeSelector 
        selectedSize={currentSize}
        onSizeChange={setCurrentSize}
      />

      <h1>Color seleccionado: </h1>
      <ColorSelector 
        selectedColor={currentColor}
        onColorChange={setCurrentColor}
      />
    </div>
  );
}

export default App;
