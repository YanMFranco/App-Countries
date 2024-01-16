import './App.css';
import Home from './components/Home';
import Index from './components/Index';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Index/>} />
        <Route exact path='/Home' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
