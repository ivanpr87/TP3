import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListConteiner/>}/>
        <Route path="/category/:categoryId" element={<ItemListConteiner />}/>
        <Route path="/detalles/:id" element={<ItemDetailConteiner />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
