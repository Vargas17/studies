import React, { Fragment } from 'react';
import Home from './modules/home';
import { HeaderBar } from './components';
import './App.css';

const App = () => (
  <Fragment>
    <HeaderBar />
    <Home />
  </Fragment>
);

export default App;
