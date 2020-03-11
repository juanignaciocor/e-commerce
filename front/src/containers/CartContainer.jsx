import React from 'react';
import { connect } from "react-redux"
import { withRouter } from "react-router";
import Cart from "../components/Cart"
import { searchUserCart, userRemoveCart, restarCantidad, sumarCantidad, inputChange } from "../redux/actions/cart"
import { createOrder } from "../redux/actions/buy"
import CheckOut from "../components/checkOut"


class CartContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            creditCard: "",
            cantidad: 0,
            toogleCompra: false,
            toogleStock: false,
            direccion: "",
            usuarioCredito: "",
            correo: ""
        }
        this.removeClick = this.removeClick.bind(this)
        this.orderCreate = this.orderCreate.bind(this)
        this.creditCardChange = this.creditCardChange.bind(this)
        this.cambiarCantidad = this.cambiarCantidad.bind(this)
        this.togglearCompra = this.togglearCompra.bind(this)
        this.cambiarDireccion = this.cambiarDireccion.bind(this)
        this.cambiarUsuario = this.cambiarUsuario.bind(this)
        this.togglearStock = this.togglearStock.bind(this)
        this.Sumar = this.Sumar.bind(this)
        this.Restar = this.Restar.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)



    }
    componentDidMount() {

        this.props.searchUserCart(this.props.userId)

    }


    removeClick(productoId, precio) {

        this.props.userRemoveCart(this.props.userId, productoId, precio, this.state.cantidad)

    }

    orderCreate(total) {
        this.props.createOrder(this.props.userId, this.state.creditCard, total, this.state.direccion, this.state.usuarioCredito, this.state.correo)

    }
    creditCardChange(e) {
        e.preventDefault()
        let value = e.target.value
        if (value.length < 17) {
            this.setState({ creditCard: value })
        }


    }
    cambiarCorreo(e) {
        this.setState({ correo: e.target.value })
    }
    cambiarDireccion(e) {
        this.setState({ direccion: e.target.value })
    }
    cambiarUsuario(e) {
        this.setState({ usuarioCredito: e.target.value })
    }
    cambiarCantidad(id, cambio) {
        this.props.inputChange(id, cambio, this.props.userId)
    }
    Restar(productoId, precio, cantidad) {
        return (
            this.props.restarCantidad(productoId, precio, this.props.userId, cantidad)
        )
    }
    Sumar(productoId, precio, cantidad) {
        return (
            this.props.sumarCantidad(productoId, precio, this.props.userId, cantidad)
        )
    }
    togglearCompra() {
        this.setState({ toogleCompra: !this.state.toogleCompra })
    }
    togglearStock() {
        this.setState({ toogleStock: !this.state.toogleStock })
    }

    render() {
        const { searchCart, restarCantidad, total } = this.props
        const { usuarioCredito, direccion, toogleStock, cantidad, correo } = this.state

        return (
            <div>
                <Cart user={this.props.user}
                    cart={this.props.cart}
                    searchCart={searchCart}
                    removeClick={this.removeClick}
                    cantidad={this.state.cantidad}
                    setStock={this.setStock}
                    cambiarCantidad={this.cambiarCantidad}
                    Sumar={this.Sumar}
                    togglearCompra={this.togglearCompra}
                    togglearStock={this.togglearStock}
                    Restar={this.Restar}
                    toogleStock={toogleStock}
                    cantidad={cantidad}
                    total={total}


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
                    cambiarCorreo={this.cambiarCorreo}
                    correo={correo}
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
        inputChange: (id, cambio, userId) => (dispatch(inputChange(id, cambio, userId))),
        userRemoveCart: (userId, productoId, precio, cantidad) => (dispatch(userRemoveCart(userId, productoId, precio, cantidad))),
        createOrder: (userId, creditCard, total, direccion, dueñoTarjeta, correo) => (dispatch(createOrder(userId, creditCard, total, direccion, dueñoTarjeta, correo))),
        restarCantidad: (productoId, precio, userId, c) => (dispatch(restarCantidad(productoId, precio, userId, c))),
        sumarCantidad: (productoId, precio, userId, c) => (dispatch(sumarCantidad(productoId, precio, userId, c))),





    }

}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartContainer));