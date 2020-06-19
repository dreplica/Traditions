import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';

import Maincomponent from './routes/route';
import store from './store/store';
import Header from './components/header';
import Modal from './components/modal';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Modal />
        <Header />
        <Maincomponent />
      </Router>
    </Provider>
  )
}

export default App;
