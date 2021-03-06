import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Screens from "../screens/index";
import { checkLocal } from "../store/actioncreator/item";
import Categories from "../components/categories/category";
import {
  Container
} from "./style"; 

interface Iprops {
  getLocal():void;
}

function Maincomponent({ getLocal }: Iprops) {
  useEffect(() => {
    getLocal();
  }, []);

  return (
    <Container>
      <Categories />
      <Switch>
        <Route exact path="/">
          <Screens.Homepage />
        </Route>
        <Route path="/items/:id">
          {/* <Frontpage /> */}
        </Route>
        <Route path="/sale/:category/:type">
          <Screens.Sales.Salesroutes />
        </Route>
        <Route path="/topsales">
          <Screens.Sales.Topsales />
        </Route>
        <Route path="/newsales">
          <Screens.Sales.Newsales />
        </Route>
        <Route path="/cart">
          <Screens.Cart />  
        </Route>
        <Route path="/signup">
          <Screens.Register />
        </Route>
        <Route path="/seller">
          <Screens.ProfileScreen />
        </Route>
        <Route path="/signin">
          <Screens.Login />
        </Route>
        <Route path="/history">
          <Screens.History />
        </Route>
        <Route path="/admin">
          <Screens.Upload />
        </Route>
        <Route path="/search/:item">
          <Screens.SearchRoute />
        </Route>
      </Switch>
    </Container>
  );
}

export default connect(null, { getLocal: checkLocal })(Maincomponent);
