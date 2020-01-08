import React, { useState } from 'react';
import logo from '../assets/gift.png';
import './App.css';

import WishListView from './WishListView'

const App = ({ group }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const onSelectUser = event => {
    setSelectedUser(event.target.value)
  }

  const user = group.users.find(({ id }) => id === selectedUser)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Wishlist</h2>
      </header>
      <select onChange={onSelectUser}>
        <option>- Select user -</option>
        {group.users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      {selectedUser && <WishListView wishList={user.wishList} />}
    </div>
  )
}

export default App
