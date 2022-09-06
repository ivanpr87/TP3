import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListConteiner/>}/>
        <Route path="/categoria/:categoria" element={<ItemListConteiner />}/>
        <Route path="/detalles/:id" element={<ItemDetailConteiner />}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
