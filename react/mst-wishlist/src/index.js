import React from 'react';
import ReactDOM from 'react-dom';
import { onSnapshot } from 'mobx-state-tree';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { WishList } from './models/WishList';

let initialState = {
  items: [
    {
      name: 'The Call of Cthullu',
      price: 19.25,
      image: 'https://picsum.photos/200'
    },
    {
      name: 'Zanoni',
      price: 40,
      image: 'https://picsum.photos/200'
    },
    {
      name: 'Chronicles of Narnia',
      price: 28.73,
      image: 'https://picsum.photos/200'
    }
  ]
}

if (localStorage.getItem('wishlistapp')) {
  const json = JSON.parse(localStorage.getItem('wishlistapp'))
  if (WishList.is(json)) initialState = json
}

const wishList = WishList.create(initialState)

onSnapshot(wishList, snapshot => {
  localStorage.setItem('wishlistapp', JSON.stringify(snapshot))
})

ReactDOM.render(<App wishList={wishList} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
