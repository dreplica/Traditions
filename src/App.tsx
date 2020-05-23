import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux'
import Maincomponent from './Routes/Route';
import Header from './components/header';
import Modal from './components/Modal';
import { BrowserRouter as Router } from 'react-router-dom';
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
