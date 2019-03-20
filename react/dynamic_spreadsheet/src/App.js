import React, { Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import Home from './modules/home';
import { HeaderBar } from './components';
import './App.css';

library.add(faTimes, faPlus);

const App = () => (
  <Fragment>
    <HeaderBar />
    <Home />
  </Fragment>
);

export default App;
