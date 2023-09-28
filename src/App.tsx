
import { Route, Routes, } from 'react-router-dom';
import {Home} from './app/page/home/Home';
import './App.css'
import { Receta } from './app/page/receta/Receta';
import { Compra } from './app/page/compra/Compra';
import { Ingredientes } from './app/components/ingredientes/Ingredientes';




function App() {
  return (
    
     <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/receta' element={ <Receta/> } />
        <Route path='/compra' element={ <Compra/> }/>
        <Route path='/ingredientes' element={ <Ingredientes/> }/>
     </Routes>
    
  )
}

export default App
