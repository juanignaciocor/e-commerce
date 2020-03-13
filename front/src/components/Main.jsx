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
import UserProfileContainer from "../containers/UserProfileContainer"
import { LogueoCoockie } from "../redux/actions/users"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import finReview from "../components/finReview"
import AdminFormsContainer from "../containers/AdminFormsContainer"
import AdminUpdateContainer from "../containers/AdminUpdateContainer"
import AdminDeleteContainer from "../containers/AdminDeleteContainer"
import { FinCompra } from "../components/FinCompra.jsx"

class Main extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.LogueoCoockie()
    }

    render() {
        return (
            <div style={{ backgroundSize: "100%", height: "100%", width: "100%", backgroundImage: "url(https://i.imgur.com/nhwdpMQ.jpg)", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed" }} >
                <NavbarContainer />

                <Switch>
                    <Route exact path="/" component={CarrouselContainer}></Route>
                    <Route exact path="/register" component={RegisterContainer}></Route>
                    <Route exact path="/login" component={LoginContainer}></Route>
                    <Route exact path="/allWines" component={AllWines}></Route>
                    <Route exact path="/wines/search" component={VinosContainer}></Route>
                    <Route exact path="/wines/:id" component={SingleWineContainer}></Route>
                    <Route exact path="/cart" component={CartContainer}></Route>
                    <Route exact path="/category/red" component={CategoryTintoContainer}></Route>
                    <Route exact path="/createReview" component={finReview}></Route>
                    <Route exact path="/category/white" component={CategoryBlancoContainer}></Route>
                    <Route exact path="/category/rose" component={CategoryRosadoContainer}></Route>
                    <Route exact path="/user/admin" component={UserAdminContainer}></Route>
                    <Route exact path="/user/admin/createProduct" component={AdminFormsContainer}></Route>
                    <Route exact path="/user/admin/editProduct" component={AdminUpdateContainer}></Route>
                    <Route exact path="/user/admin/deleteProduct" component={AdminDeleteContainer}></Route>
                    <Route exact path="/endOrder" component={FinCompra}></Route>

                    <Route exact path="/user/profile" component={UserProfileContainer}></Route>
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
