import React from "react";
import { Switch, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import Products from "./Products";
import Review from "./Review";
import Location from "./Location";
import About from "./About";
import { Container, TabView } from "./style";

export default function ProfileScreen() {
    const {id} =  useParams()
  return (
    <Container>
      <About />
      <TabView>
        <Switch>
          <Route path="/seller/product">
            <Products id={id}/>
          </Route>
          <Route path="/seller/reviews">
            <Review id={`ff`} token={`jk`} />
          </Route>
          <Route path="/seller/location">
            <Location id={`ff`} token={`jk`} />
          </Route>
        </Switch>
      </TabView>
    </Container>
  );
}
