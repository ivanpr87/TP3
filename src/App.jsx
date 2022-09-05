
import './App.css';
import NavBar from './components/NavBar/NavBar';
/*import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';*/
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';

function App() {
  return (
    <div className="App">

    <NavBar />
    {/*<ItemListConteiner />*/}
    <ItemDetailConteiner />
    
    </div>
  );
}

export default App;
