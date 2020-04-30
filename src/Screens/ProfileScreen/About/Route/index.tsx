import React from 'react';
import { Switch,Route } from 'react-router-dom';

export default function Routing() {
  return (
      <Switch>
          <Route path='/seller/product'>
              <Products id={`ff`} token={`jk`} />
          </Route>
          <Route path='/seller/reviews'>
              <Review id={`ff`} token={`jk`} />
          </Route>
          <Route path='/seller/location'>
              <Location id={`ff`} token={`jk`} />
          </Route>
      </Switch>
    </Switch>
  );
}
