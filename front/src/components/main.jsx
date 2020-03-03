import React from "react"
import { Route, Switch } from "react-router-dom"
import CarrouselContainer from '../containers/CarrouselContainer'
import NavbarContainer from "../containers/NavbarContainer";
import FooterContainer from '../containers/FooterContainer'



export default () => {

    return (
        <div>
            <NavbarContainer />
            <Switch>
                <Route exact path="/" component={ CarrouselContainer }></Route>
            </Switch>
            <FooterContainer />
        </div >
    )
}