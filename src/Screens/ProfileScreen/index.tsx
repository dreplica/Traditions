import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Products from "./products";
import Review from "./review";
import Location from "./location";
import About from "./about";
import { stateData } from "../../store/reducers/authentication";
import { Container, TabView } from "./style";

function ProfileScreen() {

    return (
        <Container>
            <About />
            <TabView>
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
            </TabView>
        </Container>
    )

}

const mapStateToProp = ({ authenticate }: { authenticate: stateData }) => ({
    auth: authenticate.data?.auth?.admin as boolean
})

export default connect(mapStateToProp)(ProfileScreen)