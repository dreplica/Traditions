import React from 'react';
import store from './store/store';
import {Provider} from 'react-redux'
import Maincomponent from './components/main';
const App = () => {
  return <Provider store={store}>
          <Maincomponent />  
        </Provider>

}

export default App;
