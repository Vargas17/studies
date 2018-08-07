import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDGvJaem8lkH_D2CSiAC5iP3n0BaarG5Ys',
      authDomain: 'manager-df824.firebaseapp.com',
      databaseURL: 'https://manager-df824.firebaseio.com',
      projectId: 'manager-df824',
      storageBucket: 'manager-df824.appspot.com',
      messagingSenderId: '593368032708'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
