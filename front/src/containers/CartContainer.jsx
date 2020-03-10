import React from 'react';
import { connect } from "react-redux"
import { withRouter } from "react-router";
import Cart from "../components/Cart"
import { searchUserCart, userRemoveCart } from "../redux/actions/cart"
import { createOrder } from "../redux/actions/buy"


class CartContainer extends React.Component {
    constructor() {
        super()
        this.state = { creditCard: "" }
        this.removeClick = this.removeClick.bind(this)
        this.orderCreate = this.orderCreate.bind(this)
        this.creditCardChange = this.creditCardChange.bind(this)


    }
    componentDidMount() {
        this.props.searchUserCart(this.props.userId)

    }

    removeClick(productoId) {

        this.props.userRemoveCart(this.props.userId, productoId)

    }

    orderCreate(total) {
        this.props.createOrder(this.props.userId, this.state.creditCard, total)

    }
    creditCardChange(e) {
        e.preventDefault()
        let value = e.target.value
        if (value.length < 17) {
            this.setState({ creditCard: value })
        }


    }

    render() {
        const { searchCart } = this.props

        return (
            <div>
                <Cart user={this.props.user}
                    cart={this.props.cart}
                    searchCart={searchCart}
                    removeClick={this.removeClick}
                    orderCreate={this.orderCreate}
                    creditCardChange={this.creditCardChange}
                    creditCard={this.state.creditCard} />
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.userReducers.logged,
        cart: state.cartReducers.cart,
        userId: state.userReducers.logged.id,
        searchCart: state.cartReducers.searchCart

    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchUserCart: (userId) => (dispatch(searchUserCart(userId))),
        userRemoveCart: (userId, productoId) => (dispatch(userRemoveCart(userId, productoId))),
        createOrder: (userId, creditCard, total) => (dispatch(createOrder(userId, creditCard, total))),



    }

}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartContainer));