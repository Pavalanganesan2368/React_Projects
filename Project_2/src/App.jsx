import { useState } from 'react'
import ButtonSection from './component/ButtonSection'
import ColorDisplayer from './component/ColorDisplayer';
import './App.css'

function App() {
  const [hexColor, setHexColor] = useState("#333333");
  const [rgbColor, setRgbColor] = useState("rgb(100, 100, 100)");
  const [randomColor, setRandomColor] = useState("");
  const [displayColor, setDisplayColor] = useState("#333333");

  return (
    <>
      <main className="container">
        <ButtonSection 
          hexColor={hexColor}
          setHexColor={setHexColor}
          rgbColor={rgbColor}
          setRgbColor={setRgbColor}
          randomColor={randomColor}
          setRandomColor={setRandomColor}
          setDisplayColor={setDisplayColor}
        />
        <ColorDisplayer 
          displayColor={displayColor}
        />
      </main>
    </>
  )
}

export default App
