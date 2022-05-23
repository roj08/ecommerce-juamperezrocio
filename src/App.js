import './App.css';
import React from 'react';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element = {<ItemListContainer />} />
          <Route path='/categoria/:id' element = {<ItemListContainer />} />
          <Route path='/detalle/:detalleid' element = {<ItemDetailContainer />} />
          <Route path='/cart' element = {<Cart />} />


          <Route path='/*' element = {<Navigate to='/' replace />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}
