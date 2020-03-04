import React from "react"
import { Route, Switch } from "react-router-dom"
import CarrouselContainer from '../containers/CarrouselContainer'
import NavbarContainer from "../containers/NavbarContainer";
import FooterContainer from '../containers/FooterContainer';
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";
import VinosContainer from "../containers/VinosContainer";

export default () => {

    return (
        <div>
            <NavbarContainer />
            <Switch>
                <Route exact path="/" component={ CarrouselContainer }></Route>
                <Route exact path="/register" component={ RegisterContainer }></Route>
                <Route exact path="/login" component={ LoginContainer }></Route>
                <Route exact path="/wines/search" component={ VinosContainer }></Route>
            </Switch>
            <FooterContainer />
        </div >
    )
}