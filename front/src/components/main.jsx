import React from "react"
import { Route, Switch } from "react-router-dom"
import carrousel from '../components/carrousel'

export default () => {

    return (
        <div>
            <Switch>
                <Route path="/" component={carrousel} ></Route>
            </Switch>


        </div>
    )







}