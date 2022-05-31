import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { Cart } from './components/Cart'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import CartContextProvider from './context/CartContext';
import { NavBAr } from './components/NavBar'

function App() {

  return (
    <>
    <BrowserRouter>
      <CartContextProvider>
        <NavBAr/>
        <Routes>
          <Route path="/" element = {<ItemListContainer/> }/>
          <Route path='/detail/:id' element = { <ItemDetailContainer/> } />
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/cart' element={ <Cart/> }/>        
        </Routes>
      </CartContextProvider>
    </BrowserRouter>

    </>
  
  )
}

export default App
