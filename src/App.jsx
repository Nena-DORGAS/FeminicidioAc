import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>



      <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
        </Routes>
        </BrowserRouter>
      </div>





    </>
  )
}

export default App
