import { useState } from 'react'
import './App.css'
import { cellService } from "./mocks/cell.js"
import { Header, Card, Footer } from "./components";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="cellContainer">
        {cellService.map((cell) => (
          <Card key={cell.id} texto={cell.name} isEnvioGratisApp={cell.isEnvioGratisApp} precio={cell.price} imageURL={cell.imageURL}></Card>
        ))}
      </div>
    </>
  )
}

export default App
