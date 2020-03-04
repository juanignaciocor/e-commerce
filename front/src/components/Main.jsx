import React from "react"
import { Route, Switch } from "react-router-dom"
import CarrouselContainer from '../containers/CarrouselContainer'
import NavbarContainer from "../containers/NavbarContainer";
import FooterContainer from '../containers/FooterContainer';
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";
import AllWines from "../containers/allWinesContainer"
import VinosContainer from "../containers/VinosContainer";
import SingleWineContainer from "../containers/SingleWineContainer"
import CartContainer from "../containers/CartContainer"

export default () => {

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <NavbarContainer />
            <Switch>
                <Route exact path="/" component={CarrouselContainer}></Route>
                <Route exact path="/register" component={RegisterContainer}></Route>
                <Route exact path="/login" component={LoginContainer}></Route>
                <Route exact path="/allWines" component={AllWines}></Route>
                <Route exact path="/wines/search" component={VinosContainer}></Route>
                <Route exact path="/wines/:id" component={SingleWineContainer}></Route>
                <Route exact path="/cart" component={CartContainer}></Route>
            </Switch>
            <FooterContainer />
        </div >
    )
}