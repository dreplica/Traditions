import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Maincomponent from './components/main';
const App = () => {
  return (
    <BrowserRouter>
      <Route path='/'>
        <Maincomponent />
      </Route>
    </BrowserRouter>
  );
}

export default App;
