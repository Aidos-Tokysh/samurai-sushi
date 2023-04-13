import "./All.css"
import Header from './components/Header';
import Main from './pages/Main';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import MenuRestoran from "./pages/MenuRestoran";
import MenuDostavka from "./pages/MenuDostavka";
import Discounts from "./pages/Discounts";
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/menu/sushi' element={<MenuRestoran/>}/>
          <Route path='/menu-dostavki/set' element={<MenuDostavka/>}/>
          <Route path='/discounts' element={<Discounts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
