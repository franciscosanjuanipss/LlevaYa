import { useState } from 'react'
import './App.css'
import { cellService } from "./mocks/cell.js"
import { Header, Card, Footer } from "./components";
import ProductList from './components/ProductList/ProductList.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div id="cellContainer">
        <ProductList></ProductList>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
