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
import CategoryTintoContainer from "../containers/CategoryTintoContainer"
import CategoryBlancoContainer from "../containers/CategoryBlancoContainer"
import CategoryRosadoContainer from "../containers/CategoryRosadoContainer"
import UserAdminContainer from "../containers/UserAdminContainer"
import { LogueoCoockie } from "../redux/actions/users"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";

class Main extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.LogueoCoockie()
    }

    render() {
        return (
            <div style={{ height: "100%", width: "100%", backgroundImage: `url(https://images.pexels.com/photos/2339181/pexels-photo-2339181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed" }} >
                <NavbarContainer />

                <Switch>
                    <Route exact path="/" component={CarrouselContainer}></Route>
                    <Route exact path="/register" component={RegisterContainer}></Route>
                    <Route exact path="/login" component={LoginContainer}></Route>
                    <Route exact path="/allWines/1" component={AllWines}></Route>
                    <Route exact path="/allWines/2" component={AllWines}></Route>
                    <Route exact path="/allWines/3" component={AllWines}></Route>
                    <Route exact path="/allWines/4" component={AllWines}></Route>
                    <Route exact path="/allWines/5" component={AllWines}></Route>
                    <Route exact path="/allWines/6" component={AllWines}></Route>
                    <Route exact path="/allWines/7" component={AllWines}></Route>
                    <Route exact path="/allWines/8" component={AllWines}></Route>
                    <Route exact path="/wines/search" component={VinosContainer}></Route>
                    <Route exact path="/wines/:id" component={SingleWineContainer}></Route>
                    <Route exact path="/cart" component={CartContainer}></Route>
                    <Route exact path="/category/red" component={CategoryTintoContainer}></Route>
                    <Route exact path="/category/white" component={CategoryBlancoContainer}></Route>
                    <Route exact path="/category/rose" component={CategoryRosadoContainer}></Route>
                    <Route exact path="/user/admin" component={UserAdminContainer}></Route>
                </Switch>

                <FooterContainer />
            </div >
        )
    }
}
const matchDispatchToProps = function (dispatch, ownprops) {
    return {
        LogueoCoockie: () => dispatch(LogueoCoockie()),
    }
}

export default withRouter(connect(null, matchDispatchToProps)(Main));
