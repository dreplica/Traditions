import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Maincomponent from './components/main';
const App = () => {
  return (
    <BrowserRouter>
      <Maincomponent />
    </BrowserRouter>
  );
}

export default App;
