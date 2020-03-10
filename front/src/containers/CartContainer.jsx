import React from 'react';
import { connect } from "react-redux"
import { withRouter } from "react-router";
import Cart from "../components/Cart"
import { searchUserCart, userRemoveCart, changeStock, recoverStock } from "../redux/actions/cart"
import { createOrder } from "../redux/actions/buy"
import CheckOut from "../components/checkOut"


class CartContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            creditCard: "",
            cantidad: 1,
            toogleCompra: false,
            toogleStock: false,
            direccion: "",
            usuarioCredito: ""
        }
        this.removeClick = this.removeClick.bind(this)
        this.orderCreate = this.orderCreate.bind(this)
        this.creditCardChange = this.creditCardChange.bind(this)
        this.cambiarCantidad = this.cambiarCantidad.bind(this)
        this.togglearCompra = this.togglearCompra.bind(this)
        this.cambiarDireccion = this.cambiarDireccion.bind(this)
        this.cambiarUsuario = this.cambiarUsuario.bind(this)
        this.togglearStock = this.togglearStock.bind(this)
        this.recoStock = this.recoStock.bind(this)
        this.setStock = this.setStock.bind(this)



    }
    componentDidMount() {

        this.props.searchUserCart(this.props.userId)

    }


    removeClick(productoId) {

        this.props.userRemoveCart(this.props.userId, productoId)

    }

    orderCreate(total) {
        this.props.createOrder(this.props.userId, this.state.creditCard, total, this.state.direccion, this.state.usuarioCredito)

    }
    creditCardChange(e) {
        e.preventDefault()
        let value = e.target.value
        if (value.length < 17) {
            this.setState({ creditCard: value })
        }


    }
    cambiarDireccion(e) {
        this.setState({ direccion: e.target.value })
    }
    cambiarUsuario(e) {
        this.setState({ usuarioCredito: e.target.value })
    }
    cambiarCantidad(e) {
        this.setState({ cantidad: e.target.value })
    }
    setStock(productoId, precio) {
        return (
            this.props.changeStock(productoId, this.state.cantidad, precio)
        )
    }
    recoStock(productoId, precio) {
        return (
            this.props.recoverStock(productoId, this.state.cantidad, precio)
        )
    }
    togglearCompra() {
        this.setState({ toogleCompra: !this.state.toogleCompra })
    }
    togglearStock() {
        this.setState({ toogleStock: !this.state.toogleStock })
    }

    render() {
        const { searchCart, changeStock, total } = this.props
        const { usuarioCredito, direccion, toogleStock } = this.state

        return (
            <div>
                <Cart user={this.props.user}
                    cart={this.props.cart}
                    searchCart={searchCart}
                    removeClick={this.removeClick}
                    cantidad={this.state.cantidad}
                    setStock={this.setStock}
                    cambiarCantidad={this.cambiarCantidad}
                    setStock={this.setStock}
                    togglearCompra={this.togglearCompra}
                    togglearStock={this.togglearStock}
                    recoStock={this.recoStock}
                    toogleStock={toogleStock}

                />
                {this.state.toogleCompra ? (<CheckOut
                    total={total}
                    creditCard={this.state.creditCard}
                    creditCardChange={this.creditCardChange}
                    orderCreate={this.orderCreate}
                    cambiarDireccion={this.cambiarDireccion}
                    cambiarUsuario={this.cambiarUsuario}
                    usuarioCredito={usuarioCredito}
                    direccion={direccion}
                    usuarioCredito={usuarioCredito}
                />) : (<React.Fragment></React.Fragment>)}

            </div>

        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.userReducers.logged,
        cart: state.cartReducers.cart,
        userId: state.userReducers.logged.id,
        searchCart: state.cartReducers.searchCart,
        total: state.cartReducers.stock


    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchUserCart: (userId) => (dispatch(searchUserCart(userId))),
        userRemoveCart: (userId, productoId) => (dispatch(userRemoveCart(userId, productoId))),
        createOrder: (userId, creditCard, total, direccion, dueñoTarjeta) => (dispatch(createOrder(userId, creditCard, total, direccion, dueñoTarjeta))),
        changeStock: (productoId, cantidad, precio) => (dispatch(changeStock(productoId, cantidad, precio))),
        recoverStock: (productoId, cantidad, precio) => (dispatch(recoverStock(productoId, cantidad, precio))),





    }

}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartContainer));