import React from 'react';
import logo from '../assets/gift.png';
import './App.css';

import WishListView from './WishListView'

const App = ({ wishList }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Wishlist</h2>
    </header>
    <WishListView wishList={wishList} />
  </div>
)

export default App
