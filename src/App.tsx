import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';

import Maincomponent from './routes/route';
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
