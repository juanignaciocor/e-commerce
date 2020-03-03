import React from "react"

import { Route, Switch } from "react-router-dom"
import CarrouselContainer from '../containers/CarrouselContainer'
import NavbarContainer from "../containers/NavbarContainer";



export default () => {

    return (
        <div>
            <NavbarContainer />
            <CarrouselContainer />
        </div>
    )
}