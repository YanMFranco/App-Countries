import './App.css';
import DetalleCountri from './components/DetalleCountri';
import Home from './components/Home';
import Index from './components/Index';

import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Index/>} />
        <Route exact path='/Home' element={<Home/>} />
        <Route exact path="/Ciudad/:id" element={<DetalleCountri />} />
      </Routes>
    </>
  )
}

export default App
