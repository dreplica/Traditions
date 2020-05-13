import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {CloudinaryContext} from 'cloudinary-react'

import store from './store/store';
import { Provider } from 'react-redux'
import Maincomponent from './Routes/Route';
import Header from './components/header';
import Modal from './components/Modal';


import dotenv from 'dotenv'

dotenv.config()
const App = () => {
  return (
    <Provider store={store}>
      <CloudinaryContext cloudname={'dyypxjmx9'} upload_preset={'ml_default'}>
        <Router>
          <Modal />
          <Header />
          <Maincomponent />
        </Router>
      </CloudinaryContext>
    </Provider>
  )
}

export default App;
