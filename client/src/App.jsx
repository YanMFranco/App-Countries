import './App.css';
import DetalleCountri from './components/DetalleCountri';
import Home from './components/Home';
import Index from './components/Index';
import { Route, Routes } from "react-router-dom";
import CrearActividad from './components/CrearActividad';
import axios from 'axios';

axios.defaults.baseURL = 'https://app-countries-production-605e.up.railway.app/';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Index/>} />
        <Route exact path='/Home' element={<Home/>} />
        <Route exact path="/Ciudad/:id" element={<DetalleCountri />} />
        <Route exact path='/CrearActividad' element={<CrearActividad />} />
      </Routes>
    </>
  )
}

export default App
