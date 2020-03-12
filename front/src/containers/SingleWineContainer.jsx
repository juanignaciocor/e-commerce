import React, { Component, Fragment } from "react";
import SingleWine from "../components/SingleWine"
import axios from "axios"
import { connect } from "react-redux"
import { createCartItem } from "../redux/actions/cart"
import { crearReview } from "../redux/actions/review"
import { searchVinito } from "../redux/actions/wines"
import { searchCarritos } from "../redux/actions/cart"
import { withRouter } from "react-router";
import FormReview from "../components/FormReview"

class SingleWineContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vinoSeleccionado: {},
            carritos: [],
            opinion: "",
            ranking: 0
        }
        this.handlerClick = this.handlerClick.bind(this)
        this.handlerSubmit = this.handlerSubmit.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        this.handlerChange2 = this.handlerChange2.bind(this)
    }
    componentDidMount() {
        let idVinito = parseInt(this.props.match.params.id)
        let idUser = parseInt(this.props.user.id)
        // console.log("HOLAAAAAAAAAAAAAAAAAAAAA", idVinito)
        let objeto = { idVinito, idUser }
        this.props.searchVinito(idVinito)
        this.props.searchCarritos(objeto)
    }

    componentDidUpdate(prevProps, prevState) {
        let idVinito = parseInt(this.props.match.params.id)
        let idUser = parseInt(this.props.user.id)
        // console.log("ID USUARIOOOOOOO", this.props.user.id)
        if (!prevProps.user.id && idUser) {
            const objeto = { idVinito, idUser }
            this.props.user && this.props.searchVinito(idVinito)
            this.props.user && this.props.searchCarritos(objeto)
        }
    }


    handlerClick(e) {
        let obj = { idProducto: this.props.vinoSeleccionado[0].id, idUsuario: this.props.user, cantidad: 1 }
        this.props.createCartItem(obj)
    }

    handlerSubmit(e) {
        e.preventDefault()
        let idProd = parseInt(this.props.match.params.id)
        let obj = { rating: this.state.ranking, opinion: e.target[0].value, idProducto: idProd, idUsuario: this.props.user.id }
        this.props.crearReview(obj)
            .then(() => this.props.history.push("/createReview"))

    }

    handlerChange(e) {
        e.preventDefault()
        this.setState({ opinion: e.target.value })
    }
    handlerChange2(e) {
        this.setState({ ranking: e })
    }

    render() {

        const vinito = this.props.vinoSeleccionado

        if (this.props.loading) return <div>LOADING!!!</div>
        return (
            <Fragment>
                < SingleWine wineId={this.props.wineId} reviews={this.props.reviews} user={this.props.user} vinoSeleccionado={vinito} handlerClick={this.handlerClick} />
                {this.props.user.id ? (
                    <FormReview ranking={this.state.ranking} opinion={this.state.opnion} carritos={this.props.carritos} handlerChange={this.handlerChange} handlerChange2={this.handlerChange2} handlerSubmit={this.handlerSubmit} />

                ) : null}
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        loading: state.userReducers.loading,
        user: state.userReducers.logged,
        vinoSeleccionado: state.winesReducers.vinoSeleccionado,
        carritos: state.cartReducers.carritos,
        reviews: state.reviewsReducers.review,
        wineId: ownProps.match.params.id
    }
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createCartItem: (item) => dispatch(createCartItem(item)),
        crearReview: (review) => dispatch(crearReview(review)),
        searchVinito: (idVinito) => dispatch(searchVinito(idVinito)),
        searchCarritos: (objeto) => dispatch(searchCarritos(objeto))
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleWineContainer))