import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import ProductContainer from "./components/ProductContainer"
import Home from "./pages/Home"
import Cart from "./pages/Cart"


function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
