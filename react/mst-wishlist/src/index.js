import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { WishList } from './models/WishList';

const wishList = WishList.create({
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
})

ReactDOM.render(<App wishList={wishList} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
