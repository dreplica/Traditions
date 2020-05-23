import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./Products";
import Review from "./Review";
import Location from "./Location";
import About from "./About";
import { Container, TabView } from "./style";
import { connect } from "react-redux";
import { stateData } from "../../store/reducers/authentication";

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