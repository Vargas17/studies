import React from 'react';
import ReactDOM from 'react-dom';
import { onSnapshot } from 'mobx-state-tree';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Group } from './models/Groups';

let initialState = {
  users: [
    {
      id: 'a342',
      name: 'Homer',
      gender: 'm'
    },
    {
      id: '5fc2',
      name: 'Marge',
      gender: 'f'
    },
    {
      id: '663b',
      name: 'Bart',
      gender: 'm'
    },
    {
      id: '65aa',
      name: 'Maggie',
      gender: 'f'
    },
    {
      id: 'ba32',
      name: 'Lisa',
      gender: 'f'
    }
  ]
}

if (localStorage.getItem('wishlistapp')) {
  const json = JSON.parse(localStorage.getItem('wishlistapp'))
  if (Group.is(json)) initialState = json
}

const group = Group.create(initialState)

onSnapshot(group, snapshot => {
  localStorage.setItem('wishlistapp', JSON.stringify(snapshot))
})

ReactDOM.render(<App group={group} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// items: [
//   {
//     name: 'The Call of Cthullu',
//     price: 19.25,
//     image: 'https://picsum.photos/200'
//   },
//   {
//     name: 'Zanoni',
//     price: 40,
//     image: 'https://picsum.photos/200'
//   },
//   {
//     name: 'Chronicles of Narnia',
//     price: 28.73,
//     image: 'https://picsum.photos/200'
//   }
// ]